---
title: Programmieren 1
icon: language-fortran
date: 2023-11-04 17:06:05
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

## 1. 题目

**Aufgabe 3: Tilgung eines Kredits (Struktogramm, Programm)**

Ein Baukredit soll bei einem festen Jahreszinssatz durch jährliche Raten, die mit eventuel- ler Ausnahme der letzten Jahresrate konstant sind, zurückgezahlt werden. Die jährlich zu zahlende Rate setzt sich aus einem Zinsanteil und einem Rückzahlungsanteil (Tilgung) zu- sammen. Da die Restschuld bei jeder Teilrückzahlung geringer wird, wird auch der Zinsanteil der (gleichbleibenden) Jahresraten immer geringer, während die Tilgung immer größer wird. Die Raten werden jeweils im Abstand von einem Jahr und erstmals ein Jahr nach Kreditauf- nahme gezahlt.

Eingabedaten sind die Kredithöhe (anfängliche Restschuld in Euro), der Zinssatz (in Prozent) und die Höhe der Rate (in Euro). Kommentiert auszugeben sind: die Höhe der letzten Rate (in Euro), **sofern diese von der üblichen abweicht(!)**, die Laufzeit des Kredits (in ganzen Jahren) und die Zinssumme (Summe aller gezahlten Zinsen in Euro).

Stellen Sie den folgenden Algorithmus zunächst in einem **Struktogramm** dar und schreiben und testen Sie sodann ein entsprechendes Fortran 95-Hauptprogramm.

1. Eingabe (mit Aufforderung) von Kredithöhe (in Euro) und Zinssatz (in Prozent)
2. Berechnung der Zinsen (für das erste Jahr) als Produkt von Kredithöhe und Zinssatz (in Prozent) dividiert durch 100
3. eventuell wiederholte Eingabe der Rate so lange, bis sie die Zinsen (des ersten Jahres) übersteigt
4. Initialisierung der Laufzeit und der Zinssumme zu null
5. Wiederholung der folgenden Schritte, solange die Restschuld positiv ist:
    1. Erhöhung der Laufzeit um 1 (Jahr)
    2. Berechnung der Zinsen als Produkt der aktuellen Restschuld und des Zinssatzes dividiert durch 100
    3. Berechnung der neuen Restschuld als Summe der alten Restschuld und der Zinsen vermindert um die Rate
    4. Erhöhung der Zinssumme um die Zinsen (des zurückliegenden Jahres)
6. Ausführung folgender Schritte, falls die (verbleibende) Restschuld negativ ist:
    1. Berechnung der (letzten) Rate als Summe der (üblichen) Rate und der negativ gewordenen Restschuld
    2. kommentierte Ausgabe der letzten Rate (in Euro)
7. kommentierte Ausgabe der Laufzeit (in Jahren) und der Zinssumme (in Euro).

```fortran-fixed-form
program KreditTilgung
    implicit none
    ! 变量声明
    double precision :: kredithoehe, zinssatz, rate, restschuld, zinsanteil
    double precision :: zinssumme, letzte_rate
    integer :: laufzeit

    ! 输入初始贷款金额和年利率
    print *, "Bitte geben Sie die Kredithoehe (in Euro) ein:"
    read *, kredithoehe
    print *, "Bitte geben Sie den Zinssatz (in Prozent) ein:"
    read *, zinssatz

    ! 计算第一年的利息
    zinsanteil = kredithoehe * zinssatz / 100.0

    ! 输入还款额，直到它大于第一年的利息
    rate = 0.0
    do while (rate <= zinsanteil)
        print *, "Bitte geben Sie die Hoehe der Rate (in Euro) ein, die groesser als der Zinsanteil sein muss:"
        read *, rate
    end do

    ! 初始化期限和利息总额
    laufzeit = 0
    zinssumme = 0.0
    restschuld = kredithoehe

    ! 当贷款余额为正数时，继续计算
    do while (restschuld > 0.0)
        laufzeit = laufzeit + 1
        zinsanteil = restschuld * zinssatz / 100.0
        restschuld = restschuld + zinsanteil - rate
        zinssumme = zinssumme + zinsanteil
    end do

    ! 如果最后的贷款余额为负数，计算最后的还款额
    if (restschuld < 0.0) then
        letzte_rate = rate + restschuld
        print *, "Die Hoehe der letzten Rate (in Euro):", letzte_rate
    end if

    ! 输出贷款期限和总利息
    print *, "Die Laufzeit des Kredits (in ganzen Jahren):", laufzeit
    print *, "Die Zinssumme (Summe aller gezahlten Zinsen in Euro):", zinssumme

end program KreditTilgung

```



**Aufgabe 4: Zyklus (Flussdiagramm, Struktogramm, Programm)**

Es sind $n \geq 1$ ganze Zahlen $x_1, x_2, . . . , x_n$ einzulesen und deren Maximum, Minimum, Summe und Mittelwert zu ermitteln. Dabei sind in einer Schleife jeweils nach dem Einlesen einer Zahl sofort die neuen, derzeit aktuellen Werte für das Minimum, das Maximum und die Summe zu bestimmen. Insbesondere müssen und dürfen die vorhergehenden Zahlen nicht gespeichert werden.

Zu Beginn des Programms ist die Anzahl n der einzulesenden Zahlen so lange einzulesen, bis diese die Bedingung $n \geq 1$ erfüllt. Am Ende sind die kleinste und die größte der Zahlen, deren Summe sowie deren Mittelwert $x = \frac{(x_1 +x_2 +···+x_n)}{n}$ mit einem erläuternden Text auszugeben.

Entwickeln Sie einen Algorithmus, der diese Aufgabenstellung löst. Stellen Sie diesen in einem **Flussdiagramm und** einem **Struktogramm** dar.

Schreiben Sie für diesen Algorithmus ein Fortran 95-Hauptprogramm und testen Sie dieses mit geeigneten Daten. **Bitte keine Felder/Arrays verwenden!**

```fortran-fixed-form
program ZahlAnalyse
    implicit none
    ! 变量声明
    integer :: n, i, zahl, max, min, summe
    double precision :: mittelwert

    ! 输入整数数量n，直到n >= 1
    n = 0
    do while (n < 1)
        print *, "Bitte geben Sie die Anzahl der Zahlen ein (n >= 1):"
        read *, n
    end do

    ! 初始化变量
    summe = 0
    max = -2147483647  ! 设置为整型可能的最小值
    min = 2147483647   ! 设置为整型可能的最大值

    ! 输入每个整数并计算最大值、最小值和总和
    do i = 1, n
        print *, "Bitte geben Sie die ", i, "-te Zahl ein:"
        read *, zahl
        summe = summe + zahl
        if (zahl > max) then
            max = zahl
        end if
        if (zahl < min) then
            min = zahl
        end if
    end do

    ! 计算平均值
    mittelwert = double(summe) / double(n)

    ! 输出最大值、最小值、总和和平均值
    print *, "Das Minimum ist:", min
    print *, "Das Maximum ist:", max
    print *, "Die Summe ist:", summe
    print *, "Der Mittelwert ist:", mittelwert

end program ZahlAnalyse
```



**Aufgabe 5: Zahlenratespiel (Struktogramm, Programm)**

Entwickeln Sie einen Spielalgorithmus, welcher eine von einem menschlichen Mitspieler aus- gedachte ganze Zahl aus einem vorgegebenen Intervall $[l, r]$ mit möglichst wenigen Versuchen errät. Dabei sollen zunächst zwei ganze Zahlen l und r nach einer entsprechenden Eingabe- aufforderung so lange eingelesen werden, bis $l < r$ gilt.

Das Spielprogramm soll nun wiederholt auf eine ganze Zahl aus diesem Intervall tippen, wobei der menschliche Mitspieler jeweils antwortet, ob diese Zahl richtig, zu klein oder zu groß ist (ohne dabei zu mogeln). Das Spielprogramm erwartet vom menschlichen Mitspieler als Tastatureingabe das Zeichen „=“, wenn es die richtige Zahl erraten hat, ansonsten das Zeichen „<“ bzw. „>“, wenn die getippte Zahl zu klein bzw. zu groß war.

Sobald die gedachte Zahl erraten wurde, soll die Anzahl der vom Spielprogramm benötig- ten Rateversuche mit begleitendem Kommentar ausgegeben werden. Falls eine Eingabe des menschlichen Mitspielers früheren Eingaben widerspricht, soll der Algorithmus dies erkennen und nach Ausgabe einer entsprechend formulierten Meldung das Programm beenden. Ande- renfalls soll gefragt werden, ob der Mitspieler ein weiteres Mal spielen möchte. Entsprechend der Antwort (Eingabe z.B. eines Buchstabens für „ja“ oder „nein“) ist ein neues Spiel zu beginnen oder das Programm zu beenden.

Entwickeln Sie einen Algorithmus, der diese Aufgabenstellung möglichst effizient löst. Der Algorithmus sollte schnell sein, d.h. mit möglichst wenigen Abfragen (auch für den ungüns- tigsten Fall) auskommen, also eine Art Risikominimierung betreiben.

Stellen Sie diesen Algorithmus in einem **Struktogramm** dar. Schreiben Sie sodann ein ent- sprechendes Fortran 95-Hauptprogramm und testen Sie es.

Versuchen Sie, einen mathematischen Zusammenhang zwischen der Anzahl der in Frage kom- menden ganzen Zahlen $n = r−l+1$ und der maximal erforderlichen Anzahl der Rateversuche k abzuleiten.

```fortran-fixed-form
program ZahlenRatespiel
    implicit none
    ! 变量声明
    integer :: l, r, mittelpunkt, versuche
    character(1) :: antwort
    logical :: spielEnde

    spielEnde = .false.
    versuche = 0

    ! 输入边界l和r直到l < r
    do
        print *, "Bitte geben Sie die untere Grenze l ein:"
        read *, l
        print *, "Bitte geben Sie die obere Grenze r ein:"
        read *, r
        if (l < r) exit
        print *, "Ungueltige Eingabe. l muss kleiner als r sein."
    end do

    ! 猜测循环
    do while (.not. spielEnde)
        mittelpunkt = (l + r) / 2
        versuche = versuche + 1
        print *, "Ist die Zahl gleich, groesser oder kleiner als ", mittelpunkt, "? (Antworten Sie mit '=', '<' oder '>')"
        read *, antwort

        select case (antwort)
            case ('=')
                spielEnde = .true.
                print *, "Herzlichen Glueckwunsch! Die Zahl wurde nach ", versuche, " Versuchen erraten."
            case ('<')
                if (mittelpunkt <= l) then
                    print *, "Widerspruechliche Eingabe. Spiel beendet."
                    spielEnde = .true.
                else
                    r = mittelpunkt - 1
                end if
            case ('>')
                if (mittelpunkt >= r) then
                    print *, "Widerspruechliche Eingabe. Spiel beendet."
                    spielEnde = .true.
                else
                    l = mittelpunkt + 1
                end if
            case default
                print *, "Ungueltige Eingabe."
        end select
    end do

end program ZahlenRatespiel
```



## 2. 环境搭建

在 macOS 上配置 Fortran 开发环境通常涉及安装 Fortran 编译器以及可能需要的任何附加工具或库。以下是基本的步骤：

### 2.1 安装 Homebrew

首先，确保你安装了 Homebrew，它是 macOS 的包管理器，可以简化安装过程。如果你还没有安装 Homebrew，可以通过在终端运行以下命令来安装：

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

安装过程中可能会提示你输入你的 macOS 用户密码，并可能要求你安装 Xcode 命令行工具。

### 2.2 安装 Fortran 编译器

通过 Homebrew 可以安装 GNU Fortran 编译器，它是 GNU 编译器集合(GCC)的一部分。在终端运行以下命令安装 GNU Fortran：

```bash
brew install gcc
```

这将安装 GCC，其中包括 `gfortran` 编译器，它是 GNU 的 Fortran 编译器前端。

### 2.3 编写 Fortran 代码

使用你喜欢的文本编辑器编写Fortran代码。例如，你可以创建一个名为`hello.f90`的新文件，并写入以下Fortran代码：

```fortran-fixed-form
program hello
    print *, 'Hello, World!'
end program hello
```

### 2.4 编译 Fortran 代码

使用终端并导航到包含你的 `hello.f90` 文件的目录，运行以下命令编译代码：

```bash
gfortran -o hello hello.f90
```

这将编译 `hello.f90` 文件，并生成一个可执行文件 `hello`。

### 2.5 运行编译后的程序

在终端中运行编译后的程序：

```bash
./hello
```

你应该会看到输出 “Hello, World!”。

### 2.6 其他工具和IDE

- **文本编辑器**：你可以使用任何文本编辑器来编写 Fortran 代码，比如 Visual Studio Code（VS Code），它有 Fortran 扩展支持语法高亮和代码智能感知。
- **集成开发环境（IDE）**：对于更复杂的项目，你可能会想要一个更完善的开发环境，例如 Eclipse Photran 或者 Simply Fortran（后者不是免费的）。

安装 Fortran 编译器并准备好开发环境后，你就可以开始编写和运行 Fortran 程序了。由于 Fortran 主要用于科学计算和工程应用，你可能还需要安装特定的科学计算库，例如 BLAS、LAPACK 或者 FFTW，这些也可以通过 Homebrew 安装。



:::: details

::: code-tabs

@tab md

```fortran-fixed-form
**Aufgabe 3: Tilgung eines Kredits (Struktogramm, Programm)**

Ein Baukredit soll bei einem festen Jahreszinssatz durch jährliche Raten, die mit eventuel- ler Ausnahme der letzten Jahresrate konstant sind, zurückgezahlt werden. Die jährlich zu zahlende Rate setzt sich aus einem Zinsanteil und einem Rückzahlungsanteil (Tilgung) zu- sammen. Da die Restschuld bei jeder Teilrückzahlung geringer wird, wird auch der Zinsanteil der (gleichbleibenden) Jahresraten immer geringer, während die Tilgung immer größer wird. Die Raten werden jeweils im Abstand von einem Jahr und erstmals ein Jahr nach Kreditauf- nahme gezahlt.

Eingabedaten sind die Kredithöhe (anfängliche Restschuld in Euro), der Zinssatz (in Prozent) und die Höhe der Rate (in Euro). Kommentiert auszugeben sind: die Höhe der letzten Rate (in Euro), **sofern diese von der üblichen abweicht(!)**, die Laufzeit des Kredits (in ganzen Jahren) und die Zinssumme (Summe aller gezahlten Zinsen in Euro).

Stellen Sie den folgenden Algorithmus zunächst in einem **Struktogramm** dar und schreiben und testen Sie sodann ein entsprechendes Fortran 95-Hauptprogramm.

1. Eingabe (mit Aufforderung) von Kredithöhe (in Euro) und Zinssatz (in Prozent)
2. Berechnung der Zinsen (für das erste Jahr) als Produkt von Kredithöhe und Zinssatz (in Prozent) dividiert durch 100
3. eventuell wiederholte Eingabe der Rate so lange, bis sie die Zinsen (des ersten Jahres) übersteigt
4. Initialisierung der Laufzeit und der Zinssumme zu null
5. Wiederholung der folgenden Schritte, solange die Restschuld positiv ist:
    1. Erhöhung der Laufzeit um 1 (Jahr)
    2. Berechnung der Zinsen als Produkt der aktuellen Restschuld und des Zinssatzes dividiert durch 100
    3. Berechnung der neuen Restschuld als Summe der alten Restschuld und der Zinsen vermindert um die Rate
    4. Erhöhung der Zinssumme um die Zinsen (des zurückliegenden Jahres)
6. Ausführung folgender Schritte, falls die (verbleibende) Restschuld negativ ist:
    1. Berechnung der (letzten) Rate als Summe der (üblichen) Rate und der negativ gewordenen Restschuld
    2. kommentierte Ausgabe der letzten Rate (in Euro)
7. kommentierte Ausgabe der Laufzeit (in Jahren) und der Zinssumme (in Euro).

**Aufgabe 4: Zyklus (Flussdiagramm, Struktogramm, Programm)**

Es sind $n \geq 1$ ganze Zahlen $x_1, x_2, . . . , x_n$ einzulesen und deren Maximum, Minimum, Summe und Mittelwert zu ermitteln. Dabei sind in einer Schleife jeweils nach dem Einlesen einer Zahl sofort die neuen, derzeit aktuellen Werte für das Minimum, das Maximum und die Summe zu bestimmen. Insbesondere müssen und dürfen die vorhergehenden Zahlen nicht gespeichert werden.

Zu Beginn des Programms ist die Anzahl n der einzulesenden Zahlen so lange einzulesen, bis diese die Bedingung $n \geq 1$ erfüllt. Am Ende sind die kleinste und die größte der Zahlen, deren Summe sowie deren Mittelwert $x = \frac{(x_1 +x_2 +···+x_n)}{n}$ mit einem erläuternden Text auszugeben.

Entwickeln Sie einen Algorithmus, der diese Aufgabenstellung löst. Stellen Sie diesen in einem **Flussdiagramm und** einem **Struktogramm** dar.

Schreiben Sie für diesen Algorithmus ein Fortran 95-Hauptprogramm und testen Sie dieses mit geeigneten Daten. **Bitte keine Felder/Arrays verwenden!**

**Aufgabe 5: Zahlenratespiel (Struktogramm, Programm)**

Entwickeln Sie einen Spielalgorithmus, welcher eine von einem menschlichen Mitspieler aus- gedachte ganze Zahl aus einem vorgegebenen Intervall $[l, r]$ mit möglichst wenigen Versuchen errät. Dabei sollen zunächst zwei ganze Zahlen l und r nach einer entsprechenden Eingabe- aufforderung so lange eingelesen werden, bis $l < r$ gilt.

Das Spielprogramm soll nun wiederholt auf eine ganze Zahl aus diesem Intervall tippen, wobei der menschliche Mitspieler jeweils antwortet, ob diese Zahl richtig, zu klein oder zu groß ist (ohne dabei zu mogeln). Das Spielprogramm erwartet vom menschlichen Mitspieler als Tastatureingabe das Zeichen „=“, wenn es die richtige Zahl erraten hat, ansonsten das Zeichen „<“ bzw. „>“, wenn die getippte Zahl zu klein bzw. zu groß war.

Sobald die gedachte Zahl erraten wurde, soll die Anzahl der vom Spielprogramm benötig- ten Rateversuche mit begleitendem Kommentar ausgegeben werden. Falls eine Eingabe des menschlichen Mitspielers früheren Eingaben widerspricht, soll der Algorithmus dies erkennen und nach Ausgabe einer entsprechend formulierten Meldung das Programm beenden. Ande- renfalls soll gefragt werden, ob der Mitspieler ein weiteres Mal spielen möchte. Entsprechend der Antwort (Eingabe z.B. eines Buchstabens für „ja“ oder „nein“) ist ein neues Spiel zu beginnen oder das Programm zu beenden.

Entwickeln Sie einen Algorithmus, der diese Aufgabenstellung möglichst effizient löst. Der Algorithmus sollte schnell sein, d.h. mit möglichst wenigen Abfragen (auch für den ungüns- tigsten Fall) auskommen, also eine Art Risikominimierung betreiben.

Stellen Sie diesen Algorithmus in einem **Struktogramm** dar. Schreiben Sie sodann ein ent- sprechendes Fortran 95-Hauptprogramm und testen Sie es.

Versuchen Sie, einen mathematischen Zusammenhang zwischen der Anzahl der in Frage kom- menden ganzen Zahlen $n = r−l+1$ und der maximal erforderlichen Anzahl der Rateversuche k abzuleiten.
```

@tab 任务3：还款计算器

```fortran-fixed-form
! 定义程序KreditTilgung
program KreditTilgung
    implicit none  ! 禁用隐式类型转换

    ! 定义变量
    double precision :: kredithoehe, zinssatz, rate, restschuld, zinsanteil
    double precision :: zinssumme, letzte_rate
    integer :: laufzeit

    ! 请求用户输入初始贷款额度并读取
    print *, "Bitte geben Sie die Kredithoehe (in Euro) ein:"
    read *, kredithoehe

    ! 请求用户输入年利率并读取
    print *, "Bitte geben Sie den Zinssatz (in Prozent) ein:"
    read *, zinssatz

    ! 利用输入的贷款额度和年利率来计算第一年的利息
    zinsanteil = kredithoehe * zinssatz / 100.0

    ! 初始化还款额
    rate = 0.0
    ! 确保输入的还款额大于第一年的利息部分
    do while (rate <= zinsanteil)
        print *, "Bitte geben Sie die Hoehe der Rate (in Euro) ein, die groesser als der Zinsanteil sein muss:"
        read *, rate
    end do

    ! 初始化贷款期限和总利息额
    laufzeit = 0
    zinssumme = 0.0
    restschuld = kredithoehe  ! 设置初始的剩余贷款额

    ! 只要剩余贷款额度大于零，就继续计算
    do while (restschuld > 0.0)
        laufzeit = laufzeit + 1  ! 增加贷款期限计数
        zinsanteil = restschuld * zinssatz / 100.0  ! 计算当前剩余贷款的利息
        restschuld = restschuld + zinsanteil - rate  ! 计算新的剩余贷款额
        zinssumme = zinssumme + zinsanteil  ! 将本年度利息加到总利息额上
    end do

    ! 如果最后计算的剩余贷款额为负值，则最后一次还款金额不同于其他月份
    if (restschuld < 0.0) then
        letzte_rate = rate + restschuld  ! 计算实际最后一次的还款额
        print *, "Die Hoehe der letzten Rate (in Euro):", letzte_rate
    end if

    ! 打印贷款期限和总利息额
    print *, "Die Laufzeit des Kredits (in ganzen Jahren):", laufzeit
    print *, "Die Zinssumme (Summe aller gezahlten Zinsen in Euro):", zinssumme

end program KreditTilgung
```

@tab 任务4：计算一系列整数的统计数据

```fortran-fixed-form
! 定义程序ZahlAnalyse
program ZahlAnalyse
    implicit none  ! 禁用隐式类型转换

    ! 定义变量
    integer :: n, i, zahl, max, min, summe
    double precision :: mittelwert

    ! 输入整数数量n，确保n >= 1
    n = 0
    do while (n < 1)
        print *, "Bitte geben Sie die Anzahl der Zahlen ein (n >= 1):"
        read *, n
    end do

    ! 初始化统计数据
    summe = 0
    max = -2147483647  ! 初始化最大值为可能的最小整数值
    min = 2147483647   ! 初始化最小值为可能的最大整数值

    ! 读取每个整数并更新统计数据
    do i = 1, n
        print *, "Bitte geben Sie die ", i, "-te Zahl ein:"
        read *, zahl
        summe = summe + zahl  ! 更新总和
        if (zahl > max) then
            max = zahl  ! 更新最大值
        end if
        if (zahl < min) then
            min = zahl  ! 更新最小值
        end if
    end do

    ! 计算平均值
    mittelwert = double(summe) / double(n)

    ! 打印最小值、最大值、总和和平均值
    print *, "Das Minimum ist:", min
    print *, "Das Maximum ist:", max
    print *, "Die Summe ist:", summe
    print *, "Der Mittelwert ist:", mittelwert

end program ZahlAnalyse

```

@tab 任务5：数字猜谜游戏

```fortran-fixed-form
! 定义程序ZahlenRatespiel
program ZahlenRatespiel
    implicit none  ! 禁用隐式类型转换

    ! 定义变量
    integer :: l, r, mittelpunkt, versuche
    character(1) :: antwort
    logical :: spielEnde

    ! 初始化游戏状态和猜测次数
    spielEnde = .false.
    versuche = 0

    ! 循环读取边界值l和r直到满足条件l < r
    do
        print *, "Bitte geben Sie die untere Grenze l ein:"
        read *, l
        print *, "Bitte geben Sie die obere Grenze r ein:"
        read *, r
        if (l < r) exit  ! 当l < r时退出循环
        print *, "Ungueltige Eingabe. l muss kleiner als r sein."
    end do

    ! 开始猜数游戏循环
    do while (.not. spielEnde)
        mittelpunkt = (l + r) / 2  ! 选择中间点进行猜测
        versuche = versuche + 1  ! 猜测次数增加
        ! 请求用户回答猜测结果
        print *, "Ist die Zahl gleich, groesser oder kleiner als ", mittelpunkt, "? (Antworten Sie mit '=', '<' oder '>')"
        read *, antwort

        ! 根据用户的回答更新猜测范围或结束游戏
        select case (antwort)
            case ('=')  ! 如果猜对了
                spielEnde = .true.
                print *, "Herzlichen Glueckwunsch! Die Zahl wurde nach ", versuche, " Versuchen erraten."
            case ('<')  ! 如果猜小了
                if (mittelpunkt <= l) then
                    ! 如果回答与之前的猜测不一致，则结束游戏
                    print *, "Widerspruechliche Eingabe. Spiel beendet."
                    spielEnde = .true.
                else
                    r = mittelpunkt - 1  ! 更新猜测范围的上界
                end if
            case ('>')  ! 如果猜大了
                if (mittelpunkt >= r) then
                    ! 如果回答与之前的猜测不一致，则结束游戏
                    print *, "Widerspruechliche Eingabe. Spiel beendet."
                    spielEnde = .true.
                else
                    l = mittelpunkt + 1  ! 更新猜测范围的下界
                end if
            case default
                ! 如果用户输入无效数据
                print *, "Ungueltige Eingabe."
        end select
    end do

end program ZahlenRatespiel
```



:::

::::



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
