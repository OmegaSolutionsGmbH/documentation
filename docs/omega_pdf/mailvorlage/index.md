

# Mailvorlage

In der **„Mailvorlagenübersicht“** werden alle Mailvorlagen angezeigt, die vom Benutzer erstellt wurden.

Über die Aktion **„Neu“** können Sie eine neue Mailvorlage anlegen.

<!-- Abbildung 13 hier einfügen, zum Beispiel:
![Übersicht der Mailvorlagen](/images/mailvorlage/abbildung-13.png)
-->

## Mailvorlage erstellen

In der Mailvorlage können Sie den Inhalt und die Einstellungen der später versendeten E-Mails festlegen.

<!-- Abbildung 14 hier einfügen, zum Beispiel:
![Erstellen einer Mailvorlage](/images/mailvorlage/abbildung-14.png)
-->

### Personen

Das Feld **„Personen“** bestimmt, für welche Personengruppe die Mailvorlage verwendet wird.

### Beispiel

Der Bericht enthält Lohnabrechnungen. In der Mailvorlage wird im Feld **„Personen“** die Personengruppe **„Dienstnehmer“** ausgewählt. Dadurch stehen Platzhalter mit den Daten der jeweiligen Dienstnehmer zur Verfügung.

::: warning Wichtig
Wenn das Feld **„Personen“** nicht befüllt ist, können in der Mailvorlage keine personenbezogenen Platzhalter verwendet werden.
:::

### Exklusiv für den Bericht

Im Feld **„Exklusiv für den Bericht“** kann die ID eines bestimmten Berichts hinterlegt werden. Dadurch wird die Mailvorlage diesem Bericht zugeordnet und kann dessen berichtsspezifische Platzhalter verwenden.

::: warning Wichtig
Ist **„Exklusiv für den Bericht“** nicht gesetzt, stehen keine Platzhalter zur Verfügung, die Daten aus dem Bericht enthalten.
:::


## Anhänge

In einer Mailvorlage können Dateien als Anhänge hinterlegt werden.

<!-- Abbildung 16 hier einfügen, zum Beispiel:
![Anhänge einer Mailvorlage](/images/mailvorlage/abbildung-16.png)
-->

Die hinterlegten Dateien werden automatisch an jede E-Mail angehängt, die mit dieser Vorlage erstellt wird.

## Dateinamenmuster

Über die Aktion **„Dateinamenmuster bearbeiten“** können Sie ein Muster für den Dateinamen festlegen.

<!-- Abbildung 17 hier einfügen, zum Beispiel:
![Aktion „Dateinamenmuster bearbeiten“](/images/mailvorlage/abbildung-17.png)
-->

Innerhalb des Dateinamenmusters können ebenfalls die verfügbaren Platzhalter verwendet werden. Dadurch lassen sich dynamische Dateinamen erzeugen, die beispielsweise den Namen oder die Personalnummer des Empfängers enthalten.

### Beispiel

```text
Lohnabrechnung_<Name>_<Monat>.pdf
```

::: tip Hinweis
Es können nur jene Platzhalter verwendet werden, die aufgrund der Felder **„Personen“** und **„Exklusiv für den Bericht“** in der Mailvorlage zur Verfügung stehen.
:::0