# Projekt-Dokumentation (LA 1304)

Angelov, Agachan, Jashari, Marku

| Datum | Version | Zusammenfassung                                              |
| ----- | ------- | ------------------------------------------------------------ |
| 01.03.2024       | 0.0.1   | Planung für unsere Website aufgebaut. Grundlegende Struktur aufgebaut. |
| 08.03.2024       | 0.0.2   | Mit der Realisierung alle zusammen begonnen.                                                             |
| 15.03.2024       | 0.0.3   | Jeder hat an die eigene Arbeitspaketen gearbeitet und hat die Logik implementiert.                                                             |
| 22.03.2024       | 0.0.4   | Alle wichtigen Arbeitspakete zusammengestellt und sichergestellt, dass alles zusammen funktioniert.                         |
| 05.04.2024       | 0.0.5   | Finale Änderungen an der Website vorgenommen. Projektdokumentation fertiggestellt. Testfälle durchgeführt.                                                            |
| 26.04.2024       | 1.0.0   | Portfolios zum Projekt erstellt.                                                            |

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
| 10    |  Muss               |  Funktional    | Als ein Benutzer möchte ich, dass die Website als SPA implementiert wird.  |
| 11   |  Muss               |  Qualität      | Als ein Benutzer möchte ich die Möglichkeit haben, zwischen zwei verschiedenen Farben entscheiden zu können. |
| 12   |  Muss               |  Qualität      | Als ein Benutzer möchte ich, dass die Website schön und passend gestylt ist.  |


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
| 10.1 |  Auf der Website  |  -    |   -  (SPA Website.)                |
| 11.1 |  Auf der Website (Z.B. im weissen Modus)| Auf den Modus-Knopf klicken. | -  (Website verwandelt sich in den blauen Modus.)        |
| 12.1 |  Auf der Website  |  -    |   -  (Schön gestaltete, benutzerfreundliche Website.)                |


### 1.4 Mockup

![grafik](https://github.com/denisjashari54/LA1304/assets/110892575/85c48394-b166-45af-9535-3fd2d6e29a50)


## 2 Planen

| AP-№ | Frist | Zuständig | Beschreibung | geplante Zeit |
| ---- | ----- | --------- | ------------ | ------------- |
| 1.A | 08.03.2024 | Angelov  | Entwicklung des Eingabefeldes | 30' |
| 2.A | 08.03.2024 | Jashari  | Implementierung der Fehleingabe Funktion. | 45' |
| 3.A | 08.03.2024| Marku    | Implementierung der Funktion zur Ausgabe der Zahlen| 30' |
| 4.A | 08.03.2024 - 22.03.2024 | Angelov  | Entwicklung einer Funktion zur Konvertierung von Hexadezimalzahlen in Dezimalzahlen. | 120' |
| 5.A | 08.03.2024 - 22.03.2024 | Angelov    | Implementierung einer Funktion, die Hexadezimalzahlen in Binärzahlen umwandelt. | 120' |
| 6.A | 08.03.2024 - 22.03.2024 | Marku  | Erstellung einer Funktionalität zur Umwandlung von Dezimalzahlen in Binärzahlen. | 120' |
| 7.A | 08.03.2024 - 22.03.2024 | Marku  | Programmierung einer Funktion für die Konvertierung von Dezimalzahlen in Hexadezimalzahlen. | 120' |
| 8.A | 08.03.2024 - 22.03.2024| Agachan  | Entwicklung der Funktion zur Umwandlung von Binärzahlen in Hexadezimalzahlen. | 120' |
| 9.A | 08.03.2024 - 22.03.2024 | Agachan    | Implementierung einer Funktion, die Binärzahlen in Dezimalzahlen konvertiert. | 120' |
| 10.A | 08.03.2024 - 22.03.2024  | Jashari      | Entwicklung der zwei Farbmodus | 120' |
| 11.A | 05.04.2023 | Alle   | Ganze Website stylen und benutzerfreundlich machen.| 180' |

## 3 Entscheiden

Wir waren uns zunächst uneinig über die Implementierung der zwei Farbschemata, entschieden jedoch als Gruppe, dies umzusetzen, sofern die Zeit es erlaubt, um die Benutzererfahrung zu verbessern.

## 4 Realisieren

| AP-№ | Datum | Zuständig | geplante Zeit | tatsächliche Zeit |
| ---- | ----- | --------- | ------------- | ----------------- |
| 1.A | 08.03.2024 | Angelov   | 30' | 20' |
| 2.A | 08.03.2024 | Jashari   | 45' | 50' |
| 3.A | 08.03.2024| Marku      | 30' | 20'|
| 4.A | 08.03.2024 - 22.03.2024 | Angelov    | 120' | 150' |
| 5.A | 08.03.2024 - 22.03.2024 | Angelov    | 120' | 150' |
| 6.A | 08.03.2024 - 22.03.2024 | Marku      | 120' | 150' |
| 7.A | 08.03.2024 - 22.03.2024 | Marku      | 120' | 150' |
| 8.A | 08.03.2024 - 22.03.2024| Agachan     | 120' | 150' |
| 9.A | 08.03.2024 - 22.03.2024 | Agachan    | 120' | 150' |
| 10.A | 08.03.2024 - 22.03.2024  | Jashari  | 120' | 200' |
| 11.A | 05.04.2023 | Alle   | 180' | 180' |


## 5 Kontrollieren

### 5.1 Testprotokoll

| TC-№ | Datum | Resultat | Tester |
| ---- | ----- | -------- | ------ |
| 1.1  |  05.04.2024     |  Funktioniert        |  Jashari |      
| 2.1  |  05.04.2024     |  Funktioniert        |  Marku   |      
| 3.1  |  05.04.2024     |  Funktioniert        |  Agachan |      
| 4.1  |  05.04.2024     |  Funktioniert        |  Marku   |      
| 5.1  |  05.04.2024     |  Funktioniert        |  Marku   |
| 6.1  |  05.04.2024     |  Funktioniert        |  Jashari |
| 7.1  |  05.04.2024     |  Funktioniert        |  Jashari |
| 8.1  |  05.04.2024     |  Funktioniert        |  Angelov |
| 9.1  |  05.04.2024     |  Funktioniert        |  Angelov |
| 10.1 |  05.04.2024     |  Funktioniert        |  Angelov |
| 11.1 |  05.04.2024     |  Funktioniert        |  Agachan |

Alle Tests vom 05.04.2024 wurden erfolgreich bestätigt. Das Produkt funktioniert stabil und ohne festgestellte Probleme.

