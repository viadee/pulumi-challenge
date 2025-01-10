---
layout: default
title:  "Stufe 2: TODO-APP mit Postgres-DB"
date:   2023-06-05 08:54:52 +0000
permalink: /postgres-db/
---

Deployed die TODO-APP aus Level-1 mit einer Postgres-DB zur persistenten Datenhaltung.

Hinweise:
- Es steht ein angepasstes Container-Image für Euch bereit!

- Deployed eine Postgres-DB mittels Google Cloud SQL
  - Region: `europe-west3`, 
  - Tier: `db-f1-micro`.
  - Setzt die `deletionProtection` für die Instanz auf `false`.
- Bindet die Datenbank an die TODO-App an.
  - Nutzt das für GCP SQL vorkonfigurierte Image `europe-west3-docker.pkg.dev/viadee-pulumi-training/demo-app/quarkus-todo-app:1.0-CLOUDSQL`
  - Setzt die Umgebungsvariablen:
    - `QUARKUS_DATASOURCE_USERNAME`, `QUARKUS_DATASOURCE_PASSWORD`: (Werte aus der `gcp.sql.Users`-Ressource)
    - `QUARKUS_DATASOURCE_JDBC_URL`: `jdbc:postgresql:///<Name der DB>`
    - `QUARKUS_DATASOURCE_JDBC_ADDITIONAL_JDBC_PROPERTIES_CLOUDSQLINSTANCE`: (Wert von connectionName aus der `gcp.sql.DatabaseInstance`)
- Überprüft, dass TODO-Einträge in der DB persistiert werden.

Achtung: Die Instanzierung des Postgres Services braucht etwas Zeit. Eine gute Gelegenheit, um sich zum Beispiel mit etwas zu trinken zu versorgen.
