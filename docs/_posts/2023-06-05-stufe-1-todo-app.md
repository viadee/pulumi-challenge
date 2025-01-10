---
layout: default
title:  "Stufe 1: TODO-App Deployment Google Cloud Run"
date:   2023-06-05 08:54:52 +0000
permalink: /todo-app/
---

Nutzt ein bereitgestelltes Container Image mit einer TODO-App und deploye sie auf Google Cloud Run.
Die Applikation soll danach im öffentlichen Internet über einen Web-Browser aufrufbar sein.

Hinweise:
- Port im Container: 8080.
- Region: `europe-west3`
- Vergebt einen Service name, der mit Eurem Team Namen beginnt.
- Registry / Image: `europe-west3-docker.pkg.dev/viadee-pulumi-training/demo-app/quarkus-todo-app:1.0`


Damit die Anwendung aus im öffentlichen Internet verfügbar ist, muss ein Invoker-Member per IAM hinzugefügt werden.
Der Code[^1] dafür sieht in Typescript wie folgt aus:

```
const invoker = new gcp.cloudrun.IamMember("invoker", {
    location: <location>,
    service: <service>.name,
    role: "roles/run.invoker",
    member: "allUsers",
  });
```

[^1]: Die Platzhalter beachten und sinnvoll füllen.