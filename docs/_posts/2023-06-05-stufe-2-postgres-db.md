---
layout: post
title:  "Stufe 2: Postgres-DB anbinden"
date:   2023-06-05 08:54:52 +0000
---

- Deploye eine Postgres-DB mittels Google Cloud SQL (Region: `europe-west3`, Tier: `db-f1-micro`).
  - Hinweis: setze die `deletionProtection` für die Instanz auf `false`.
- Binde die Datenbank an die TODO-App an.
  - Nutze das für GCP SQL vorkonfigurierte Image `europe-west3-docker.pkg.dev/viadee-cloudland-pulumi-01/pulumi-challenge/quarkus-todo-app:1.0-CLOUDSQL`
  - Setze die Umgebungsvariablen:
    - `QUARKUS_DATASOURCE_USERNAME`, `QUARKUS_DATASOURCE_PASSWORD`: (Werte aus der `gcp.sql.Users`-Ressource)
    - `QUARKUS_DATASOURCE_JDBC_URL`: `jdbc:postgresql:///<Name der DB>`
    - `QUARKUS_DATASOURCE_JDBC_ADDITIONAL_JDBC_PROPERTIES_CLOUDSQLINSTANCE`: (Wert von connectionName aus der `gcp.sql.DatabaseInstance`)
- Überprüfe, dass deine TODO-Einträge in der DB persistiert werden.
