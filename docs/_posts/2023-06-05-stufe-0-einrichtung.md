---
layout: post
title:  "Stufe 0: Einrichtung Pulumi und GCP-Account"
date:   2023-06-05 08:54:52 +0000
permalink: /einrichtung/
---

Nutzt den bereitgestellten Google Account und logged Euch ein:

```bash
gcloud auth application-default login
```

Erzeugt ein neues Pulumi Projekt:

```bash
pulumi new gcp-typescript
```

(Name: `pulumi-challenge`, Stack: egal, GCP project: `viadee-cloudland-pulumi-01`)

In der `index.ts` die Bucket-Location auf `europe-west3` ändern.

Einen Namen für euer Team überlegen.

Den String `"my-bucket"` auf den Teamnamen ändern.

Das lokale Dateisystem als Speicher für den State konfigurieren:

```bash
pulumi login --local
```

Den Bucket deployen:

```bash
pulumi up
```

Öffnet die Google Cloud Console und prüft, dass dort Euer Storage Bucket angelegt wurde: https://console.cloud.google.com/

Sprecht uns an, zeigt uns Eure Ergebnisse und wir zeigen Euch den Weg zu Level 1.

Final: Bereinigt die erzeugte Infrastruktur:

```bash
pulumi destroy
```
