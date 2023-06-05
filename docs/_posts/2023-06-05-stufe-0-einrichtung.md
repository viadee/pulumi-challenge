---
layout: post
title:  "Stufe 0: Einrichtung Pulumi und GCP-Account"
date:   2023-06-05 08:54:52 +0000
categories: challenge
---

```bash
gcloud auth activate-service-account teamxy@viadee.de –key-file=/path/to/key.json –project=viadee-cloudland-pulumi-01
```

```bash
pulumi config gcp:project viadee-cloudland-pulumi-01
```

```bash
pulumi new gcp-typescript
```

(Name: `pulumi-challenge`, Stack: egal)

In der `index.ts` die Bucket-Location auf `EU` ändern.

Den String `"my-bucket"` auf den Teamnamen ändern.

Das lokale Dateisystem als Speicher für den State konfigurieren:

```bash
pulumi login -local
```

Den Bucket deployen:

```bash
pulumi up
```