# challenge notes

## prerequisites

```shell
gcloud auth application-default login
pulumi new gcp-typescript
pulumi login --local
pulumi up
```

## challenge 1

https://viadee.github.io/pulumi-challenge/einrichtung/

Needed permissions:

- all permissions of "Storage Admin" role

## challenge 2 - cloud run

https://viadee.github.io/pulumi-challenge/todo-app/

Official pulumi resources on [gcp.cloudrun.Service](https://www.pulumi.com/registry/packages/gcp/api-docs/cloudrun/service/) 

Needed permissions:

- all permissions of "Cloud Run Admin" role
- iam.serviceaccounts.actAs permission

pitfall:

- when it runs longer than 60s long, have a look at gcp console for errors: https://console.cloud.google.com/run?authuser=0&project=viadee-pulumi-training
- 

Duration to "up" state: 30s

## challenge 3 - postgres

https://viadee.github.io/pulumi-challenge/postgres-db/

[gcp.sql.Database](https://www.pulumi.com/registry/packages/gcp/api-docs/sql/database/)

Needed permissions:

- all permissions of "SQL Admin" role

pitfall:

- forgot deletionProtection: false -> create a new stack and delete db after training

creation duration: 551 seconds

## challenge 4 - webhook

https://viadee.github.io/pulumi-challenge/webhook/


[gcp.cloudfunctions.HttpCallbackFunction](https://www.pulumi.com/blog/simple-serverless-programming-with-google-cloud-functions-and-pulumi/)

Needed permissions:

- all permissions of "Cloud Functions Admin" role

pitfalls:

- documentation gcp.cloudfunctions.HttpCallbackFunction is only available from blog

duration: 81s

resources:

```shell
     pulumi:pulumi:Stack                         publimi-challenge-wej-viadee-pulumi-training-wej                       
     └─ gcp:cloudfunctions:CallbackFunction      greeting                                                               
 +      ├─ gcp:cloudfunctions:Function           greeting                                          created (81s)        
 +      ├─ gcp:cloudfunctions:FunctionIamMember  greeting-invoker                                  created (4s)         
 +-     └─ gcp:storage:BucketObject              greeting                                          replaced (0.43s)  
```
