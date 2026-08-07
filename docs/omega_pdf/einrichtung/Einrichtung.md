---
title: Omega PDF einrichten
description: Grundeinstellungen und Konfiguration von Omega PDF in Business Central
outline: deep
---

# Omega PDF einrichten

Über die Seite **Omega PDF Einrichtung** werden die zentralen Funktionen und das Verhalten von Omega PDF gesteuert.

Hier legen Sie unter anderem fest:

- ob Omega PDF aktiviert ist,
- wie E-Mails verarbeitet werden,
- ob die Protokollierung aktiv ist,
- wie lange gesendete E-Mails gespeichert bleiben,
- und ob nach einem Update ein Informationsfenster angezeigt wird.

::: tip Empfehlung
Richten Sie zuerst den E-Mail-Versand im Business-Central-Standard ein. Konfigurieren und aktivieren Sie Omega PDF anschließend.
:::



## Allgemeine Einstellungen

| Einstellung | Beschreibung |
|---|---|
| **Omega PDF aktiviert** | Aktiviert oder deaktiviert Omega PDF. Ist die Einstellung deaktiviert, stehen die Funktionen von Omega PDF nicht zur Verfügung. |
| **Authentifizierung Anmeldung** | Legt die Authentifizierung für die Benutzerberechtigungen fest. |

## E-Mail-Versand

| Einstellung | Beschreibung |
|---|---|
| **Soll E-Mail sofort versendet werden** | Ist die Einstellung aktiviert, wird die E-Mail unmittelbar versendet. Andernfalls wird sie zunächst als Entwurf beziehungsweise im E-Mail-Ausgang gespeichert. |
| **Omega PDF Ansicht in E-Mail-Ausgang** | Aktiviert die angepasste Omega-PDF-Ansicht auf der Seite **E-Mail-Ausgang**. |
| **E-Mail-Ausgang Limit Warnung** | Legt fest, ab welchem Grenzwert eine Warnung für den E-Mail-Ausgang angezeigt wird. |

::: info Business-Central-Einrichtung
Damit E-Mails über Omega PDF versendet werden können, muss der E-Mail-Versand zuvor im Business-Central-Standard vollständig eingerichtet und funktionsfähig sein.
:::

## Protokollierung und Fehleranalyse

| Einstellung | Beschreibung |
|---|---|
| **Protokollierung aktivieren** | Aktiviert die Protokollierung von Omega PDF. Die Protokolle unterstützen bei der Analyse von Fehlern und Problemen mit dem E-Mail-Versand. |

::: tip Fehlersuche
Aktivieren Sie die Protokollierung, wenn beim Erstellen oder Versenden von Dokumenten Probleme auftreten.
:::

## Updateinformationen

| Einstellung | Beschreibung |
|---|---|
| **Update Fenster als Pop-up** | Zeigt nach einem Update automatisch ein Pop-up mit den aktuellen Änderungsinformationen an. |

## Automatische Datenpflege

Omega PDF kann bereits versendete E-Mails automatisch aus der Datenbank entfernen.

| Einstellung | Beschreibung |
|---|---|
| **Gesendete E-Mails automatisch löschen** | Aktiviert einen automatischen Pflegelauf, der bereits versendete E-Mails nach dem festgelegten Zeitraum aus der Datenbank entfernt. |
| **Zeitlimit für das automatische Löschen gesendeter E-Mails** | Legt über eine Datumsformel fest, wie lange gesendete E-Mails in der Datenbank gespeichert bleiben. Diese Einstellung wird nur berücksichtigt, wenn das automatische Löschen aktiviert ist. |

::: warning Dauerhafte Löschung
Beim automatischen Löschen werden bereits versendete E-Mails nach Ablauf des eingestellten Zeitraums aus der Datenbank entfernt.

Prüfen Sie vor der Aktivierung, wie lange diese Informationen für Nachvollziehbarkeit, Support oder interne Vorgaben benötigt werden.
:::

## Empfohlene Reihenfolge

1. E-Mail-Versand im Business-Central-Standard einrichten.
2. Test-E-Mail über Business Central versenden.
3. **Omega PDF aktiviert** einschalten.
4. Authentifizierung und Berechtigungen konfigurieren.
5. Verhalten des E-Mail-Versands festlegen.
6. Bei Bedarf die Protokollierung aktivieren.
7. Aufbewahrungszeit für gesendete E-Mails festlegen.
8. Versand eines Omega-PDF-Dokuments testen.

## Einrichtung überprüfen

Nach Abschluss der Konfiguration sollte geprüft werden, ob:

- Omega PDF aktiviert ist,
- der Benutzer über die erforderlichen Berechtigungen verfügt,
- E-Mails aus Business Central versendet werden können,
- die gewünschte Ansicht im E-Mail-Ausgang aktiv ist,
- und die automatische Datenpflege korrekt konfiguriert wurde.

::: tip Funktionstest
Erstellen und versenden Sie nach der Einrichtung ein Testdokument. Kontrollieren Sie anschließend den E-Mail-Ausgang und gegebenenfalls die Omega-PDF-Protokolle.
:::
