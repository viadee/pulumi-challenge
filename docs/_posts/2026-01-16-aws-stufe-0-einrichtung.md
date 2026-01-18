---
layout: default
title:  "Stufe 0: Einrichtung Pulumi und GCP-Account"
date:   2023-06-05 08:54:52 +0000
permalink: /aws/einrichtung/
---

Nutzt die AWS mit die bereitgestellten `accessKeyId` und `secretAccessKey` um euch einzuloggen. Die Default-Region lautet `eu-central-1`:

```bash
aws configure
```

Das lokale Dateisystem als Speicher für den State konfigurieren:

```bash
pulumi login --local
```

Erzeugt ein neues Pulumi Projekt:

```bash
pulumi new aws-typescript
```

(Name: `<dein-project-name>-pulumi-challenge`, Stack: egal, Region: `eu-central-1`)

In der `index.ts` muss der Namen des Buckets geändert werden, damit es zu keinen Konflikten mit euren kommiliton:innen kommt.

Überlegt euch einen Namen ändert den String `"my-bucket"` entsprechend.

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
