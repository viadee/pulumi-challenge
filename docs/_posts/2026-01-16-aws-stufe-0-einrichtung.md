---
layout: default
title:  "Stufe 0: Einrichtung Pulumi und GCP-Account"
date:   2023-06-05 08:54:52 +0000
permalink: /aws/einrichtung/
---

Nutzt den bereitgestellten AWS Account und logged Euch ein:

```bash
aws 
```

Das lokale Dateisystem als Speicher für den State konfigurieren:

```bash
pulumi login --local
```

Erzeugt ein neues Pulumi Projekt:

```bash
pulumi new aws-typescript
```

(Name: `<dein-username>-pulumi-challenge`, Stack: egal, Region: `eu-central-1`)

In der `index.ts` die Bucket-Location auf `EU` ändern.

Einen Namen für euer Team überlegen.

Den String `"my-bucket"` auf den Teamnamen ändern.

Den Bucket deployen:

```bash
pulumi up
```

Öffnet die AWS Console und prüft, dass dort Euer Storage Bucket angelegt wurde.

Sprecht uns an, zeigt uns Eure Ergebnisse und wir zeigen Euch den Weg zu Level 1.

Final: Bereinigt die erzeugte Infrastruktur:

```bash
pulumi destroy
```
