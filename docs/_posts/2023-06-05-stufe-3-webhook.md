---
layout: post
title:  "Stufe 3: Webhook erstellen und anbinden"
date:   2023-06-05 08:54:52 +0000
---

- Deploye eine Google Cloud Function, die den HTTP-Request-Body des Aufrufs mit `console.log` ins Log schreibt und mit dem HTTP-Status-Code 200 antwortet.
  - Hinweis: Bei Nutzung von `gcp.cloudfunctions.HttpCallbackFunction` kannst du den Quelltext der Funktion direkt in den Pulumi-Code einbetten.
- Konfiguriere die TODO-App so, dass die neue Funktion bei jeder Aktion an einem TODO-Element aufgerufen wird. 
  - Nutze hierzu die Umgebungsvariable `QUARKUS_REST_CLIENT_WEBHOOK_URL`.
- Überprüfe, dass die Aktionen nun ins Log der Funktion geschrieben werden: 

```bash
gcloud functions list
gcloud functions logs read <function-name>
```