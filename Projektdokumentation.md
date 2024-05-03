# Projekt-Dokumentation (LA 1304)

Angelov, Agachan, Jashari, Marku

| Datum | Version | Zusammenfassung                                              |
| ----- | ------- | ------------------------------------------------------------ |
| 01.03      | 0.0.1   | Planung für unsere Website aufgebaut. Grundlegende Struktur aufgebaut. |
| 08.03      | 0.0.2   | Mit der Realisierung alle zusammen begonnen.                                                             |
| 15.03      | 0.0.3   | Jeder hat an seine eigene Arbeitspaketen gearbeitet und hat die Logik implementiert                                                             |
| 22.03      | 0.0.4   | Alle wichtigen Arbeitspakete zusammengestellt und sichergestellt, dass alles zusammen funktioniert.                         |
| 05.04      | 0.0.5   | Die wichtigsten >Designs implementiert (Hintergrundfarbe usw.)                                                             |
| 26.04      | 1.0.0   | Portfolios zum Projekt erstellt.                                                            |

## 1 Informieren

### 1.1 Ihr Projekt

Erleben Sie intuitive Binär-, Hexadezimal- und Dezimalumwandlungen auf Knopfdruck, komplettiert durch anpassbare Hintergrundfarben in einer schlanken Single-Page-Anwendung

### 1.2 User Stories

| US-№ | Verbindlichkeit | Typ  | Beschreibung                       |
| ---- | --------------- | ---- | ---------------------------------- |
| 1    |  Muss               |  Funktional    | Als ein Benutzer möchte ich die Möglichkeit haben, diese Zahlen in einem Eingabefeld einzugeben.  |
| 2    |  Muss               |  Funktional    | Als ein Benutzer möchte ich, dass dieses Eingabefeld mit Fehleingaben umgehen kann (Z. B. nur 0 und 1 in dem binären Inputfeld)  |
| 3    |  Muss               |  Funktional    | Als ein Benutzer möchte ich, dass die konvertierten Zahlen ausgegeben werden. |
| 4    |  Muss               |  Funktional    | Als ein Benutzer möchte ich die Möglichkeit haben, Hexadezimalzahlen in Dezimalzahlen konvertieren zu können.    |
| 5    |  Muss               |  Funktional    | Als ein Benutzer möchte ich die Möglichkeit haben, Hexadezimalzahlen in Binärzahlen zu konvertieren.  |
| 6    |  Muss               |  Funktional    | Als ein Benutzer möchte ich die Möglichkeit haben, Dezimalzahlen in Binärzahlen zu konvertieren.  |
| 7    |  Muss               |  Funktional    | Als ein Benutzer möchte ich die Möglichkeit haben, Dezimalzahlen in Hexadezimalzahlen zu konvertieren.  |
| 8    |  Muss               |  Funktional    | Als ein Benutzer möchte ich die Möglichkeit haben, Binärzahlen in Hexadezimalzahlen zu konvertieren.  |
| 9    |  Muss               |  Funktional    | Als ein Benutzer möchte ich die Möglichkeit haben, Binärzahlen in Dezimalzahlen zu konvertieren.  |
| 10   |  Muss               |  Qualität      | Als ein Benutzer möchte ich die Möglichkeit haben, zwischen zwei verschiedenen Farben entscheiden zu können. |
| 11   |  Muss               |  Qualität      | Als ein Benutzer möchte ich, dass die Website schön und passend gestylt ist.  |


### 1.3 Testfälle

| TC-№ | Ausgangslage | Eingabe | Erwartete Ausgabe |
| ---- | ------------ | ------- | ----------------- |
| 1.1  |  Input Feld   |  1                | -  (Zahl wird aufgenommen) |
| 2.1  |  Input Feld   |  "!`!`éA"         |    "Fehleingabe"    |
| 3.1  |  Input Feld   |  1                | "Hexadezimalzahl: 01    Binärzahl: 00000001" |
| 4.1  |  Input Feld   |  "eine Hexadezimalzahl"     |   "Dezimalzahl & Binärzahl"       |
| 5.1  |  Input Feld   |  "eine Hexadezimalzahl"     |   "Binärzahl & Dezimalzahl"       |
| 6.1  |  Input Feld   |  "eine Dezimalzahl"         |   "Binärzahl & Hexadezimalzahl"   |
| 7.1  |  Input Feld   |  "eine Dezimalzahl"         |   "Hexadezimalzahl & Binärzahl"   |
| 8.1  |  Input Feld   |  "eine Binärzahl"           |   "Hexadezimalzahl & Dezimalzahl" |
| 9.1  |  Input Feld   |  "eine Binärzahl"           |   "Dezimalzahl & Hexadezimalzahl" |
| 10.1 |  Auf der Website (Z.B. im weissen Modus)| Auf den Modus-Knopf klicken. | -  (Website verwandelt sich in den blauen Modus.)        |
| 11.1 |  Auf der Website  |  -    |   -  (Schön gestaltete, benutzerfreundliche Website.)                |


### 1.4 Diagramme

✍️ Hier können Sie PAPs, Use Case- und Gantt-Diagramme oder Ähnliches einfügen.

## 2 Planen

| AP-№ | Frist | Zuständig | Beschreibung | geplante Zeit |
| ---- | ----- | --------- | ------------ | ------------- |
| 1.A | 15.06.2023 | Angelov  | Entwicklung der Registrierungsfunktion für Benutzerkonten. | 120' |
| 2.A | 22.06.2023 | Jashari | Implementierung der Anmeldefunktion für Benutzerkonten. | 120' |
| 3.A | 29.06.2023 | Marku | Implementierung der Funktion zum Zurücksetzen von Passwörtern. | 60' |
| 4.A | 06.07.2023 | Agachan | Entwicklung der Filterfunktion für Autosuche nach Marken. | 180' |
| 5.A | 13.07.2023 | Marku | Implementierung der Sortierfunktion für Suchergebnisse. | 120' |
| 6.A | 20.07.2023 | Jashari | Programmierung der Detailansicht für Autos mit Fotos und Daten. | 180' |
| 7.A | 27.07.2023 | Angelov | Optimierung der Benutzerfreundlichkeit und Intuitivität der Website. | 240' |
| 8.A | 03.08.2023 | Angelov | Sicherstellung der Ladegeschwindigkeit und Responsivität der Website. | 240' |
| 9.A | 10.08.2023 | Marku | Integration der Warenkorbfunktion für ausgewählte Autos. | 120' |
| 10.A | 17.08.2023 | Jashari | Entwicklung der Warenkorbansicht für angemeldete Benutzer. | 120' |
| 11.A | 24.08.2023 | Bajramovic | Integration von Benutzerbewertungen und Kommentaren zu Autos. | 180' |

Total: 

✍️ Die Nummer hat das Format `N.m`, wobei `N` die Nummer der User Story ist, auf die sich das Arbeitspaket bezieht, und `m` von `A` an nach oben buchstabiert. Beispiel: Das dritte Arbeitspaket, das die zweite User Story betrifft, hat also die Nummer `2.C`.

✍️ Ein Arbeitspaket sollte etwa 45' für eine Person in Anspruch nehmen. Die totale Anzahl Arbeitspakete sollte etwa Folgendem entsprechen: `Anzahl R-Sitzungen` ╳ `Anzahl Gruppenmitglieder` ╳ `4`. Wenn Sie also zu dritt an einem Projekt arbeiten, für welches zwei R-Sitzungen geplant sind, sollten Sie auf `2` ╳ `3` ╳`4` = `24` Arbeitspakete kommen. Sollten Sie merken, dass Sie hier nicht genügend Arbeitspakte haben, denken Sie sich weitere "Kann"-User Stories für Kapitel 1.2 aus.

## 3 Entscheiden

✍️ Dokumentieren Sie hier Ihre Entscheidungen und Annahmen, die Sie im Bezug auf Ihre User Stories und die Implementierung getroffen haben.

## 4 Realisieren

| AP-№ | Datum | Zuständig | geplante Zeit | tatsächliche Zeit |
| ---- | ----- | --------- | ------------- | ----------------- |
| 1.A  |       |           |               |                   |
| ...  |       |           |               |                   |

✍️ Tragen Sie jedes Mal, wenn Sie ein Arbeitspaket abschließen, hier ein, wie lang Sie effektiv dafür hatten.

## 5 Kontrollieren

### 5.1 Testprotokoll

| TC-№ | Datum | Resultat | Tester |
| ---- | ----- | -------- | ------ |
| 1.1  |       |          |        |
| ...  |       |          |        |

✍️ Vergessen Sie nicht, ein Fazit hinzuzufügen, welches das Test-Ergebnis einordnet.

### 5.2 Exploratives Testen

| BR-№ | Ausgangslage | Eingabe | Erwartete Ausgabe | Tatsächliche Ausgabe |
| ---- | ------------ | ------- | ----------------- | -------------------- |
| I    |              |         |                   |                      |
| ...  |              |         |                   |                      |

✍️ Verwenden Sie römische Ziffern für Ihre Bug Reports, also I, II, III, IV etc.

## 6 Auswerten

✍️ Fügen Sie hier eine Verknüpfung zu Ihrem Lern-Bericht ein.

