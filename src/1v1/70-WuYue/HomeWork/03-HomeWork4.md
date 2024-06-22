---
title: Programmieren 4
icon: language-fortran
date: 2023-12-03 12:08:05
author: AI悦创
isOriginal: true
category: 
    - python 1v1
    - 数据结构一对一
    - 留学生辅导
    - 留学生作业辅导
tag: TECHNISCHE UNIVERSITÄT
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

**Aufgabe 8:** **Fibonacci-Zahlen — Iteration und Rekursion**

Die i-te Fibonacci-Zahl wird definiert durch:
$$
f_i := 
\begin{cases} 
0 & \text{für } i = 0 \\
1 & \text{für } i = 1 \\
f_{i-1} + f_{i-2} & \text{für } i \geq 2 
\end{cases}
$$
Programmieren Sie in einem *Modul* eine Funktion fibo_iterativ, welche die i-te Fibonacci-Zahl *iterativ*, d.h. mit Hilfe einer Schleife, sowie eine Funktion `fibo_rekursiv`, welche dieselbe Fibonacci-Zahl *rekursiv*, d.h. derart, dass die Funktion sich selbst zweimal mit verschiedenen Argumenten aufruft, berechnet. Jede dieser beiden Funktionen hat ein ganzzahliges Argument und ein ganzzahliges Ergebnis.

Berechnen Sie wiederholt eine Fibonacci-Zahl, indem Sie im Hauptprogramm in einer Schleife den Index i der gewünschten Fibonacci-Zahl (interessant sind hier Indexwerte ab 40) einle-sen, die Fibonacci-Zahl $f_i$ **einmal iterativ und einmal rekursiv** berechnen und jeweils kommentiert ausgeben. Die Schleife soll durch Eingabe eines Werts i < 0 beendet werden.

Da die Folge der Fibonacci-Zahlen exponentiell wächst, soll hier ein INTEGER-Typ mit 8 Byte (64 bit) Speicherbreite verwendet werden. Ab welchem Index tritt *Überlauf* auf? Sehen Sie für diesen Fall eine *automatische Fehlererkennung und Fehlermeldung* vor.

**Optional** können auch Gleitkommazahlen verwendet werden, um noch größere Fibonacci-Zahlen (näherungsweise) zu berechnen. Ein Überlauf tritt dann natürlich wesentlich später auf — ab welchem Index ist dann vom gewählten Gleitkommaformat abhängig.

**Wo liegen die Gründe für die extrem unterschiedlichen Laufzeiten der beiden Berechnungsvarianten (iterativ und rekursiv)?**

::: code-tabs

@tab 迭代版本

```fortran-fixed-form
! 迭代版本的斐波那契数列计算
function fibo_iterativ(n) result(fibo_num)
    integer(kind=8) :: n, fibo_num
    integer(kind=8) :: a, b, i

    a = 0
    b = 1

    if (n == 0) then
        fibo_num = 0
        return
    end if

    do i = 2, n
        fibo_num = a + b
        a = b
        b = fibo_num
    end do
end function fibo_iterativ
```

@tab 递归版本

```fortran-fixed-form
! 递归版本的斐波那契数列计算
recursive function fibo_rekursiv(n) result(fibo_num)
    integer(kind=8) :: n, fibo_num

    if (n == 0) then
        fibo_num = 0
        return
    else if (n == 1) then
        fibo_num = 1
        return
    else
        fibo_num = fibo_rekursiv(n-1) + fibo_rekursiv(n-2)
        return
    end if
end function fibo_rekursiv
```

@tab 使用浮点数计算斐波那契数列

```fortran-fixed-form
! 使用双精度浮点数迭代计算斐波那契数列
function fibo_iterativ_double(n) result(fibo_num)
    integer(kind=8) :: n
    double precision :: fibo_num, a, b, temp
    integer :: i

    a = 0d0
    b = 1d0

    if (n == 0) then
        fibo_num = 0d0
        return
    else if (n == 1) then
        fibo_num = 1d0
        return
    end if

    do i = 2, n
        temp = a + b
        ! 检测溢出
        if (temp <= a .or. temp <= b) then
            print *, 'Overflow detected at i = ', i
            fibo_num = -1d0  ! 指示溢出
            return
        end if
        a = b
        b = temp
    end do

    fibo_num = b
end function fibo_iterativ_double
```

@tab 主程序调用

```fortran-fixed-form
! 主程序，调用迭代计算斐波那契数列的函数
program main
    integer(kind=8) :: n
    double precision :: fibo_result

    do
        print *, 'Enter a number (enter a negative number to exit): '
        read(*, *) n

        if (n < 0) exit

        fibo_result = fibo_iterativ_double(n)
        if (fibo_result == -1d0) then
            print *, 'Overflow occurred.'
        else
            print *, 'Fibonacci(', n, ') = ', fibo_result
        end if
    end do
end program main
```



:::

**问题：为何迭代和递归的运行时间差异巨大？**

1. **迭代方法**的时间复杂度是 $O(n)$，因为它只需要遍历一次到第 n 个数。
2. **递归方法**的时间复杂度是 $O(2^n)$，因为每增加一个数，所需的计算量几乎增加一倍。在递归方法中，大量的中间结果被重复计算，特别是在计算较大的斐波那契数时，这种重复会导致巨大的性能损耗。







**Aufgabe 9:** **Syntaxbaum**

Zeichnen Sie den **Syntaxbaum** für den folgenden Infix-Ausdruck und bestimmen Sie die äquivalenten **Prefix- und Postfix-Notationen**:

`-C*B**A > -2**(N-1)**N/C/C .NEQV. B/N >= C/B .AND. .NOT. A==C-B-A .OR. 8*A>B`

Werten Sie den Ausdruck für N=3, A=0.5, B=4.0, C=5.0 *per Hand* aus und schreiben Sie **alle** **Zwischenergebnisse** an die Knoten im Baum. Welchen **Wert** liefert der Ausdruck?

::: code-tabs

@tab 语法树表示

```
                        .OR.
                       /    \
                      /      \
                     /        \
                .AND.          >
               /     \        / \
              /       \      *   B
             /         >=    |  
            /         /  \   8
           .NEQV.    /    \  
          /      \  B      /  
         >        \      /   
        / \        N    /   
       *   /      /    C  
      / \ C      /     |  
     -   B      /      B 
         |     /       
        **    C        
       /  \            
      B    A           
```

@tab 前缀表示法

```
在前缀表示法中，运算符位于其操作数之前。对于整个表达式，这将是：

.OR. .AND. .NEQV. > * - C B ** A > ** - 2 ** - N 1 N / / C C >= / B N / C B > * 8 A B
```

@tab 后缀表示法

```
在后缀表示法中，运算符位于其操作数之后。对于整个表达式，这将是：

C - B * A ** > 2 N 1 - N ** - C C / / > B N / C B / >= B .NEQV. 8 A * B > .AND. .OR.
```

:::

**Aufgabe 10:** **Die Berechnung von** π **nach Archimedes**

Die Frage nach dem Wert der Kreiszahl π stellte sich schon vor ca. 4000 Jahren in den frühen Hochkulturen Mesopotamiens und Ägyptens, denn π war und ist als Umfang eines Kreises mit Durchmesser 1 und als Flächeninhalt eines Kreises mit Radius 1 (Einheitskreis) von großer praktischer Bedeutung. Zunächst war man sich nur bei der ersten Nachkommastelle sicher, doch schon die griechischen Mathematiker der Antike wollten einen genaueren Wert bestimmen.

Wie in vielen mathematischen (und physikalischen) Fragen war *Archimedes* (geboren 287 v.Chr. und gestorben 212 v.Chr. in Syrakus auf Sizilien, Studium in Alexandria) sei-ner Zeit weit voraus. Er erfand nicht einfach nur ein Näherungsverfahren, das im Prinzip eine beliebig genaue Berechnung von π erlaubt, sondern gleich ein einschließendes Inter-vallschachtelungsverfahren, indem er dem Einheitskreis einbeschriebene und umschriebene regelmäßige Polygone verwendete. Ausgehend vom Innen- und Außensechseck verdoppelte er deren Eckenzahl sukzessive viermal (bis zu Polygonen mit 96 Ecken) und fand so die bis heute in der Praxis gerne verwendete und meistens ausreichend genaue Einschließung $\pi \in \left[ 3 + \frac{10}{71}, 3 + \frac{1}{7} \right] \subset \left[ 3.1408, 3.1429 \right]$ und damit die ersten 3 gesicherten Nachkommastellen von π.

Weder andere griechische noch spätere chinesische, indische, persische oder arabische Ma-thematiker konnten in den folgenden Jahrhunderten eine effizientere Methode als die von Archimedes finden. Immerhin konnten die Chinesen Liu Hui 263 n. Chr. und Tsu Ch’ung Chi ca. 480 n. Chr. mit Archimedes Methode 5 bzw. 7 Nachkommastellen und der Perser al-Kashi im Jahre 1424 sogar 14 Nachkommastellen von π berechnen.

Selbst der deutsch-niederländische Mathematiker *Ludolph van Ceulen*, der in jahrzehntelan-ger mühevoller Arbeit bis 1610, seinem Todesjahr, schließlich 35 korrekte Nachkommastellen von π berechnen konnte, verwendete noch das von Archimedes mehr als 1800 Jahre zuvor erfundene Verfahren.

Bevor wir modernere Verfahren zur Berechnung der Zahl π untersuchen, wollen wir in dieser Aufgabe zunächst eine sehr effiziente Variante des **Verfahrens von Archimedes** auf dem Computer implementieren. Da wir bis auf Weiteres keine sogenannte „Langzahlarithmetik“,die das Rechnen mit Zahlen mit sehr vielen Ziffern erlaubt, einsetzen wollen, wählen wir das längste uns zur Verfügung stehende Gleitkommaformat *quadruple precision* mit einer Genauigkeit von ca. 34 Dezimalstellen in der Mantisse, welches uns im besten Fall fast alle Nachkommastellen von π liefern sollte, die van Ceulen vor mehr als 400 Jahren berechnete. 

Zur Durchführung der Berechnung ist außer den vier Grundrechenarten lediglich die Qua-dratwurzel erforderlich. Zum Verständnis des Verfahrens sind 3 verschiedene Möglichkeiten der „Mittelwertbildung“ nötig:
$$
A(a, b) := \frac{a + b}{2} \quad \text{arithmetisches Mittel}\\

G(a, b) := \sqrt{a \cdot b} \quad \text{geometrisches Mittel}\\

H(a, b) := \frac{2 \cdot a \cdot b}{a + b} \quad \text{harmonisches Mittel}
$$
Für das *harmonische Mittel* gilt:
$$
H(a, b) = \left( A\left(a^{-1}, b^{-1}\right) \right)^{-1} = \frac{2}{\frac{1}{a} + \frac{1}{b}}
$$
Wir betrachten im Folgenden immer regelmäßige, dem Einheitskreis einbeschriebene bzw.umschriebene Polygone. Es bezeichnen un, Un den *halben Umfang* (bzw., was — wie beim Einheitskreis — gleichbedeutend ist, den *Flächeninhalt*) des Innen- bzw. Außenpolygons mit $m = 6 \cdot 2^n \text{ Ecken } (n \in \mathbb{N}).$

Das Verfahren beginnt mit den Startwerten $u_0 = 3 \quad \text{und} \quad U_0 = 2 \cdot \sqrt{3},$ in der Tat den halben Umfängen des Innen- und des Außensechsecks beim Einheitskreis,und produziert synchron eine streng monoton wachsende Folge ($u_n$) und eine streng monoton fallende Folge ($U_n$) mit dem gemeinsamen Grenzwert π, d.h. die Folge der Intervalle $[u_n, U_n]$ für $n = 0, 1, 2, \ldots$ ist eine Intervallschachtelung für die Zahl π.

Hierzu ist für $n = 1,2,\ldots$ immer abwechselnd der halbe Umfang des Außenpolygons und dann des Innenpolygons wie folgt zu berechnen:
$$
U_n = H(u_{n-1}, U_{n-1}) \quad \text{harmonisches Mittel}
\\
u_n = G(u_{n-1}, U_n) \quad \text{geometrisches Mittel}
$$
Dabei sollen jedes Mal die neu berechneten Werte als Intervall $[u_n,U_n]$ zusammen mit dem Wert des Schleifenindex n ausgegeben werden.

Wie man sieht, ist die Rechenarbeit in der Schleife erstaunlich gering, und man benötigt zur Speicherung der Folgenwerte nur jeweils eine Variable für $u_n$ und eine für $U_n$, d.h. die alten Werte können in der nächsten Iteration sofort überschrieben werden, da sie für die weitere Rechnung nicht mehr gebraucht werden. Dabei ist allerdings die *Reihenfolge* der beiden Wertzuweisungen in der Schleife zu beachten, da die Berechnung des „Außenumfangs“ $U_n$ den alten Wert des "Innenumfangs" $u_{n-1}$ (und seinen eigenen alten Wert $U_{n-1}$), die Berechnung des "Innenumfangs" $u_n$ jedoch den neuen Wert des "Außenumfangs" $U_n$ (und seinen eigenen alten Wert $u_{n-1}$) benötigen.

Als Abbruchkriterium der Schleife kann man die folgende Bedingung verwenden:
$$
U_n - u_n \leq \text{ulp}(u_n)
$$
Die in Fortran 95 vordefinierte Funktion **SPACING**(x) liefert ulp(x), also den Abstand von x zur nächsten betragsgrößeren Gleitkommazahl.

In der Praxis werden die beiden Folgen ($u_n$) und ($U_n$) wegen der unvermeidlichen Run-dungsfehler bei der Gleitkommarechnung bei diesem Algorithmus schließlich bei derselben Gleitkommazahl landen (prinzipiell wären auch zwei benachbarte Gleitkommazahlen als „die beiden Gleitkommagrenzwerte“ möglich), so dass man streng genommen nicht mehr von ei-ner Intervallschachtelung sprechen dürfte, da uns der mathematisch exakte Grenzwert π zum Schluss noch entwischen könnte.

Wie sich herausstellt, ist dieses Verfahren jedoch numerisch stabil, so dass sich am Ende der Rechnung eine sehr gute Näherung für π ergibt.

Implementieren Sie das hier vorgestellte Verfahren in Fortran 95 und testen sie es. Bewerten Sie seine (Laufzeit-)Effizienz und seine Qualität insbesondere bzgl. der erzielten Genauigkeit bei der Berechnung von π (relativ zur Darstellungsgenauigkeit der verwendeten *quadruple precision* Gleitkommazahlen).

Können Sie die von Ludolph van Ceulen (siehe z.B. Wikipedia) bis zum Jahre 1610 mit Hand berechneten 35 Nachkommastellen von π bestätigen?

```fortran-fixed-form
! 使用阿基米德方法计算 π
program archimedes_pi
    real(kind=10) :: u_n, U_n, temp
    integer :: n

    u_n = 3.0_10
    U_n = 2.0_10 * sqrt(3.0_10)

    n = 0
    do
        ! 计算外多边形的半周长
        U_n = (u_n + U_n) / (2.0_10 * u_n / (u_n + U_n))

        ! 计算内多边形的半周长
        temp = sqrt(u_n * U_n)
        u_n = temp

        n = n + 1
        print *, 'n = ', n, 'Interval: [', u_n, ', ', U_n, ']'

        ! 检查终止条件
        if (U_n - u_n <= spacing(u_n)) exit
    end do

    print *, 'Approximation of Pi: ', (u_n + U_n) / 2.0_10
end program archimedes_pi
```















::: details 公众号：AI悦创【二维码】

![](/gzh.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Web、Linux」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](/zsxq.jpg)
