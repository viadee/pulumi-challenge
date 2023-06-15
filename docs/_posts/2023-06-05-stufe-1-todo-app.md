---
layout: post
title:  "Stufe 1: TODO-App auf Google Cloud Run"
date:   2023-06-05 08:54:52 +0000
permalink: /todo-app/
---

- Deploye die vorgegebene TODO-Applikation auf Google Cloud Run.
- Port im Container: 8080.
- Region: `europe-west3`
- Die Applikation soll danach im öffentlichen Internet über einen Web-Browser aufrufbar sein.

Registry / Image:

```
europe-west3-docker.pkg.dev/viadee-cloudland-pulumi-01/pulumi-challenge/quarkus-todo-app:1.0
```