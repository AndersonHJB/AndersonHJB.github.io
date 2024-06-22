---
title: Programmieren 7
icon: language-fortran
date: 2024-01-22 21:34:00
author: AI悦创
isOriginal: true
sticky: false
star: false
article: true
timeline: true
image: false
navbar: true
sidebarIcon: true
headerDepth: 5
comment: true
lastUpdated: true
editLink: false
backToTop: true
toc: true
---

## Aufgabe 16: Tour de France

Bei der Tour de France werden die Etappenergebnisse in der jeweiligen Reihenfolge des Zieleinlaufs täglich direkt in ein und dieselbe Textdatei namens `touretap.dat` mit folgender Zeilenstruktur eingegeben:
![](https://cdn.nlark.com/yuque/__latex/52021a25609fa49919cb4f1ad8a69b2f.svg#card=math&code=Name%20%20%5Cqquad%20h%20%5C%20%5C%20%5C%20m%20%5C%20%5C%20%5C%20s&id=AW3L3)
Das erste Feld mit maximal 30 Zeichen enthält den Namen des jeweiligen Radsportlers (in Anführungsstriche eingeschlossen), **die Felder h, m und s **die von ihm gefahrene Etappenzeit in Stunden, Minuten und Sekunden. Alle Eingabefelder sind voneinander durch mindestens ein Leerzeichen getrennt. Dabei sind die Stunden als nichtnegative ganze Zahl, die Minuten als ganze Zahl im Intervall [0, 59] und die Sekunden als reelle Zahl im halboﬀenen Intervall [0, 60) angegeben. Diesen Bedingungen müssen auch während der Ausführung des Programms alle Zeitangaben genügen.
Im Laufe der Tour de France werden in dieser Datei die Etappenergebnisse aller Teilnehmer gesammelt. Am Ende der Tour werden die Einzelzeiten für jeden Teilnehmer zu dessen
Gesamtzeit aufsummiert. Auf der Basis dieser Ergebnisliste könnte man dann beispielsweise den Sieger ermitteln, eine sortierte Rangliste erstellen oder eine statistische Auswertung
vornehmen.
Man schreibe ein Fortran 95–Modul, in dem ein Datentyp für die Fahrzeit mit den ganzzahligen Komponenten h (Stunden) und m (Minuten) sowie der reellen Komponente s (Sekunden)
und für diesen Datentyp die dyadischen Operatoren + zur Addition zweier Fahrzeiten und zum Größenvergleich zweier Fahrzeiten deﬁniert werden. Die zugehörigen Modulfunktionen
sind mit Eingabeargumenten von diesem Datentyp zu deﬁnieren.
Man schreibe außerdem ein Fortran 95–Hauptprogramm, welches

1. die maximal zu erwartende Teilnehmerzahl n einliest und ein dynamisches Feld (die Ergebnisliste) mit n Komponenten (Elementen), die geeignet sind, ein Etappen- oder Endergebnis (d.h. Name und Fahrzeit des Teilnehmers) zu speichern, anlegt (der Elementtyp dieses Feldes muss zuvor deﬁniert werden),
2. die Datei `touretap.dat` zeilenweise bis zum Ende der Datei einliest und entweder einen neuen Eintrag in die Ergebnisliste macht (falls dieser Sportler bisher noch nicht in der Liste zu ﬁnden ist) oder die gerade gelesene Etappenfahrzeit zu der bisher in der Ergebnisliste gespeicherten Zwischenzeit für diesen Sportler addiert (hierbei muss nach dem jeweiligen Namen des Sportlers im bereits belegten Teil der Ergebnisliste gesucht werden, also Anzahl der bisher gemachten Einträge merken!),
3. die tatsächliche Teilnehmerzahl und die erstellte Ergebnisliste (unsortiert) mit erklärendem Text ausgibt.
Es werden die folgenden vereinfachenden Annahmen gemacht:
1. Der Name eines Sportlers ist in der Eingabedatei immer identisch geschrieben und identiﬁziert diesen eindeutig. Lexikalische Vergleichsoperatoren für Zeichenketten sind in Fortran vordeﬁniert.
2. Während der gesamten Tour gibt es keine Ausfälle oder **Disqualiﬁkationen**.
3. Man gebe die Ergebnisliste nach Gesamtfahrzeiten sortiertn unter Angabe des jeweils erzielten Platzes im Gesamtklassement aus.

## Aufgabe 17: Bandmatrizen
Sei ![](https://cdn.nlark.com/yuque/__latex/9964c074a81221e92881449d46b44174.svg#card=math&code=A%20%3D%20%5Cmathbb%7BR%7D%5E%7Bn%20%5Ctimes%20n%7D&id=EgLLd) eine quadratische Matrix. A heißt `**Bandmatrix**`, falls alle von Null verschiedenen Elemente ![](https://cdn.nlark.com/yuque/__latex/6f086d5a3ecb47239581eb1e3a558422.svg#card=math&code=a_%7Bik%7D&id=ZNCdu) in der Hauptdiagonale und in einigen dazu benachbarten Nebendiagonalen liegen. Bezeichnen hierbei ![](https://cdn.nlark.com/yuque/__latex/ab952c6602ef26b0a8be3156d76d2635.svg#card=math&code=p%20%E2%88%88%20N_0&id=f0EI4) die Anzahl der unteren Nebendiagonalen einschließlich der
Hauptdiagonale, welche alle Nichtnullelemente des unteren Dreiecks beinhalten, und ![](https://cdn.nlark.com/yuque/__latex/5c384b96d7aa04e34a0aceb3709babf0.svg#card=math&code=q%20%E2%88%88%20N_0&id=wfxBT)
die Anzahl der oberen Nebendiagonalen einschließlich der Hauptdiagonale, welche alle **Nichtnullelemente** des oberen Dreiecks beinhalten, so besitzt die Matrix A das **Bandbreitentupel**
**(p, q)**. So hat beispielsweise eine vollbesetzte untere Dreicksmatrix das Bandbreitentupel (n, 1)
oder eine sogenannte **Tridiagonalmatrix das Bandbreitentupel (2, 2)**, die folgende Matrix das
Bandbreitentupel (3, 4):
$$
A = \begin{pmatrix}
1 & 2 & 3 & 4 & 0 &   & &0   \\
2 & 1 & 2 & 3 & 4 &   &      \\
3 & 2 & 1 & 2 & 3 & 4 &   &  \\
4 & 3 & 2 & 1 & 2 & 3 & 4 & 0\\
0 & 4 & 3 & 2 & 1 & 2 & 3 & 4\\
  &   & 4 & 3 & 2 & 1 & 2 & 3\\
  &   &   & 4 & 3 & 2 & 1 & 2\\
0 &   &   & 0 & 4 & 3 & 2 & 1
\end{pmatrix}
$$
Deﬁnieren Sie hierzu in einem Fortran 95–Modul eine Funktion unterebandbreite, welche die untere Bandbreite p einer als Argument übergebenen **quadratischen reellen Matrix** _unbekannter Größe_ bestimmt. Hierfür sollen sukzessive die Diagonalen von links unten beginnend nach dem ersten Nichtnullelement abgesucht werden. Beachten Sie den Sonderfall der Nullmatrix!
Schreiben Sie ein Fortran 95–Hauptprogramm, welches in einer Schleife die Dimension n einer (dynamischen) quadratischen reellen Matrix von der Tastatur einliest, diese im Speicher als![](https://cdn.nlark.com/yuque/__latex/436d6a10a4f7ebd4b678bdfdd6212f0e.svg#card=math&code=n%20%C3%97%20n&id=YcQaS)Matrix anlegt, ihre Werte von der Tastatur einliest und sodann das** Bandbreitentupel(p, q)** dieser Matrix bestimmt und kommentiert ausgibt. Die Schleife soll so lange wiederholt werden, bis ein **n ≤ 0 **eingegeben wird.
Hinweis: Zur Berechnung der oberen Bandbreite q kann man die transponierte Matrix verwenden. Achten Sie auf eine korrekte Speicherverwaltung für die Matrizen.
