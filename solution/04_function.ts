import * as pulumi from "@pulumi/pulumi";
import * as gcp from "@pulumi/gcp";
import { region } from "@pulumi/gcp/config";

const location = "europe-west3";

// Create a GCP resource (Storage Bucket)
const bucket = new gcp.storage.Bucket("wej-bucket", {
    location
});


const helloService = new gcp.cloudrun.Service("hello", {
    location,
    template: {
        spec: {
            containers: [
                // { image: "europe-west3-docker.pkg.dev/viadee-cloudland-pulumi-01/pulumi-challenge/quarkus-todo-app:1.0" },
                { image: "us-docker.pkg.dev/cloudrun/container/hello" },
            ],
        },
    },
}
    // , { dependsOn: enableCloudRun }
);

// Create a Cloud SQL instance
const sqlInstance = new gcp.sql.DatabaseInstance("sql-instance", {
    databaseVersion: "POSTGRES_9_6",
    region: location,
    deletionProtection: false,
    settings: {
        tier: "db-f1-micro",
    },
});

// Create a new database within the Cloud SQL instance
const database = new gcp.sql.Database("database", {
    instance: sqlInstance.name,
    name: "my-database",
});

let greeting = new gcp.cloudfunctions.HttpCallbackFunction("greeting", {
    callback: (req, res) => {
        console.log("BLABLUBB");
        console.log(req);
        console.log(res);
        //res.send(`Greetings from ${req.body.name || 'Google Cloud Functions'}!`);
    },
    region: location,
    runtime: "nodejs18"
});

export let url = greeting.httpsTriggerUrl;

// Export the connection name for the Cloud SQL instance
export const connectionName = sqlInstance.connectionName;

// Export the DNS name of the bucket
export const bucketName = bucket.url;
