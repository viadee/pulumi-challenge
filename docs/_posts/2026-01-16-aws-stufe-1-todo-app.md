---
layout: default
title:  "Stufe 1: TODO-App Deployment mit AWS AppRunner"
date:   2023-06-05 08:54:52 +0000
permalink: /aws/todo-app/
---

Nutzt ein bereitgestelltes Container-Image mit einer ToDo-App und deployt sie als AWS AppRunner.
Die Applikation soll danach im öffentlichen Internet über einen Web-Browser aufrufbar sein.

Für die Ausführung des Services wird eine Rolle (bzw. IAM-Role) benötigt. Diese dient dem Zugriff auf das Image.
Wir stellen die Berechtigung zur Verfügung. Diese muss im AppRunner-Service passend referenziert werden.  Der Namen der Berechtigung lautet: 
`fhms-pulumi-challenge-apprunner-to-ecr-role`.
Importiert die Rolle mit Hilfe von `aws.iam.getRoleOutput(args: GetRoleOutputArgs, opts?: InvokeOptions)`.

Hinweise:
- Port im Container: 8080.
- Region: `eu-central-1`
- Vergebt einen Service-Name, der mit Eurem (User-/Team-)Namen beginnt.
- Registry / Image: `060476966529.dkr.ecr.eu-central-1.amazonaws.com/fhms-pulumi-challenge-repo/todo-app:1.0`
- [Pulumi API Docs: AWS AppRunner Service](https://www.pulumi.com/registry/packages/aws/api-docs/apprunner/service/)
