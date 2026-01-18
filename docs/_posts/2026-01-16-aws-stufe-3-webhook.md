---
layout: default
title:  "Stufe 3: Function als Endpunkt für den TODO-App Webhook"
date:   2023-06-05 08:54:52 +0000
permalink: /aws/webhook/
---

Die DynamoDB-Tabelle aus dem letzten Level soll erweitert werden. Durch das Auslösen eines Events auf der Tabelle (CREATE, DELETE, UPDATE) soll eine AWS Lambda-Funktion aufgerufen werden. Hierfür bietet die Tabelle einen Stream, der sich in den Aufruf einer Lambda führen lässt.

Hinweise:
- Denkt immernoch daran Eure Ressourcen mit Eurem Team Namen vorne weg zubenennen.
- Deployt eine AWS-Lambda-Funktion, die das Event mittels Aufrufs von `console.log` ins Log schreibt.
- Nutzt dafür einen Index-Handler in der Funktion, mit dem ihr den Code direkt einbetten könnt.
- Konfiguriert die Datenbank, so dass sie den Stream zur Verfügung stellt. Nutzt als Stream-View-Type `NEW_AND_OLD_IMAGES`, um Änderungen zu sehen.
- Überprüft, dass die Aktionen nun ins Log der Lambda geschrieben wurden. Schaut euch dafür den CloudWatch-Log innerhalb von AWS an. 
- Definiert ein `EventSourceMapping`, damit die Lambda auf die Events der Datenbank lauscht.
- Erstekkt eine Berechtigung, die es der Funktion erlaubt auf die DynamoDB zuzugreifen.
- [Pulumi Docs: AWS DynamoDB Table Stream](https://www.pulumi.com/registry/packages/aws/api-docs/dynamodb/table/#streamenabled_nodejs)
- [Pulumi Docs: AWS Lambda EventSourceMapping](https://www.pulumi.com/registry/packages/aws/api-docs/lambda/eventsourcemapping/)
- [Pulumi Docs: AWS Lambda Permission](https://www.pulumi.com/registry/packages/aws/api-docs/lambda/permission/)