---
layout: post
title:  "Stufe 0: Einrichtung Pulumi und GCP-Account"
date:   2023-06-05 08:54:52 +0000
---

```bash
export GOOGLE_APPLICATION_CREDENTIALS=/path/to/key.json
```

oder, wenn bereits ein Google-Account vorhanden ist:

```bash
gcloud auth application-default login
```


```bash
pulumi new gcp-typescript
```

(Name: `pulumi-challenge`, Stack: egal, GCP project: `viadee-cloudland-pulumi-01`)

In der `index.ts` die Bucket-Location auf `EU` ändern.

Einen Namen für euer Team überlegen.

Den String `"my-bucket"` auf den Teamnamen ändern.

Das lokale Dateisystem als Speicher für den State konfigurieren:

```bash
pulumi login -local
```

Den Bucket deployen:

```bash
pulumi up
```