---
layout: post
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
- Registry / Image: `europe-west3-docker.pkg.dev/viadee-cloudland-pulumi-01/pulumi-challenge/quarkus-todo-app:1.0`