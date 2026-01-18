---
layout: default
title:  "Stufe 2: TODO-APP mit Postgres-DB"
date:   2023-06-05 08:54:52 +0000
permalink: /aws/postgres-db/
---

Deployed die ToDo-App aus Level-1 mit einer DynamoDB-Tabelle zur persistenten Datenhaltung.

Hinweise:
- Es kann das gleiche Container-Image genutzt werden, allerdings muss dieses für die Datenbank-Kommunikation konfiguriert werden!

- Deployt eine DynamoDB-Tabelle mittels Pulumi. Diese Tabelle sollte die folgenden Eigenschaften haben:
  - writeCapacity: `1` 
  - readCapacity: `1`
  - hashKey: `id`
  - Der HashKey muss vom Typ String (`S`) sein.
- Bindet die Datenbank an die TODO-App an.
  - Nutzt das gleiche Image.
  - Für die Kommunikation mit eine weitere Rolle (IAM-Role) für den Zugriff innerhalb der Instanz gesetzt werden. Der Name der Rolle lautet `fhms-pulumi-challenge-apprunner-to-dynamodb-role`.
  - Setzt die Umgebungsvariablen:
    - `DYNAMODB_TABLE_NAME`, Name eurer DynamoDB-Tabelle.
- Überprüft über die AWS-Oberfläche, dass TODO-Einträge in der DB persistiert werden.
