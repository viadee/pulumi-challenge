---
layout: default
title:  "Stufe 3: Lambda-Funktion für Events in der App / Datenbank"
date:   2023-06-05 08:54:52 +0000
permalink: /lambda/
---

Die DynamoDB-Tabelle aus dem letzten Level soll erweitert werden. Durch das Auslösen eines Events auf der Tabelle (`CREATE`, `DELETE`, `UPDATE`) soll eine AWS Lambda-Funktion aufgerufen werden. Somit werden alle Aktivitäten innerhalb der ToDo-App geloggt. Hierfür bietet die Tabelle einen Stream, der sich in den Aufruf einer Lambda führen lässt.

Hinweise:
- Denkt immernoch daran Eure Ressourcen mit Eurem Team Namen vorne weg zubenennen.
- Deployt eine AWS-Lambda-Funktion, die das Event mittels Aufrufs von `console.log` ins Log schreibt.
- Für die Ausführung der Lambda wird eine Rolle (IAM-Role) benötigt. Import auch diese wie in den Aufgabe zuvor. Der Name der Rolle lautet `fhms-pulumi-challenge-lambda-execution-role`,
- Nutzt als Runtime für die Lambda-Funktion `aws.lambda.Runtime.NodeJS22dX`, um JavaScript-Code auszuführen.
- Nutzt einen Index-Handler in der Funktion, mit dem ihr den Log-Aufruf direkt im Code einbetten könnt.
- Konfiguriert die Datenbank, so dass sie den Stream zur Verfügung stellt. Nutzt als `StreamViewType` `NEW_AND_OLD_IMAGES`, um auch Änderungen an bestehenden Werten zu sehen.
- Definiert ein `EventSourceMapping`, damit die Lambda auf die Events der Datenbank lauscht.
- Erstellt eine Berechtigung, die es der Funktion erlaubt, auf die DynamoDB zuzugreifen.
- Überprüft, dass die Aktionen der App (Erzeugen, Löschen oder Aktualisieren eines ToDo) ins Log des jeweiligen Lambda-Aufrufs geschrieben wurden. Schaut euch dafür den CloudWatch-Log innerhalb von AWS an. 
- [Pulumi Docs: AWS DynamoDB Table Stream](https://www.pulumi.com/registry/packages/aws/api-docs/dynamodb/table/#streamenabled_nodejs)
- [Pulumi Docs: AWS Lambda EventSourceMapping](https://www.pulumi.com/registry/packages/aws/api-docs/lambda/eventsourcemapping/)
- [Pulumi Docs: AWS Lambda Permission](https://www.pulumi.com/registry/packages/aws/api-docs/lambda/permission/)