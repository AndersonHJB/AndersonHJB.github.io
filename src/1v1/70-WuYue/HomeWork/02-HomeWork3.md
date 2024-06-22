---
title: Programmieren 2
icon: language-fortran
date: 2023-11-19 11:35:36
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

**Aufgabe 6:** **Gleitkommazahlen**

Auf einem fiktiven Computer seien alle darstellbaren reellen Zahlen, genannt **Gleitkomma-zahlen (GKZ)** ,in dem 8-bit GKZ-Format $R(2,5,−1,+2)$ speicherbar. In diesem binären Format werden 1 bit für das Vorzeichenbit s, 2 bit für den Exponenten e zur Basis 2 im Bereich −1, . . . , +2 (welcher um 1 nach oben verschoben, d.h. nichtnegativ gespeichert wird) und 5 bit für die Mantisse $m = 0.m_1m_2m_3m_4m_5$ einer Gleitkommazahl x verwendet:
$$
x = (s, m, e) = \left((-1)^s \cdot \sum_{i=1}^{5}m_i2^{-i} \cdot 2^e\right)
$$
a) Zeichnen Sie auf einer Zahlengeraden alle nichtnegativen Elemente dieses GKZ-Formats ein. Unterscheiden Sie dabei (z.B. farblich) zwischen normalisierten und denormalisier- ten/subnormalen GKZ. (Denormalisierte GKZ haben den kleinstmöglichen Exponenten und eine unnormalisierte Mantisse, d.h. $m_1 = 0$.)

b) Konvertieren Sie die folgenden reellen Dezimalzahlen (und andere) in das angegebene interne Binärformat und (zur Probe) zurück ins dezimale System:
$$
3.875, 1.875, 0.875, 0.3125, 0.09375, 0.015625
$$
Welche GKZ dieses Formats sind den Dezimalzahlen 0.6, 0.4, 0.2 und 0.1 (links und rechts) direkt benachbart? Wie groß sind die absoluten und relativen Rundungsfehler bei der approximativen Gleitkommadarstellung dieser Zahlen?

c) Welche möglichen Ergebnisse in diesem GKZ-Format sind für die folgenden Beispiel- rechnungen von einer korrekt arbeitenden, d.h. zu einer der zwei direkt benachbarten GKZ rundenden Gleitkommaarithmetik zu erwarten? (Wenn das Ergebnis nicht exakt darstellbar ist, gibt es zwei Möglichkeiten, von denen eine durch den eingestellten Run- dungsmodus ausgewählt wird. Geben Sie in diesem Fall auch an, welche der beiden GKZ die *nächstgelegene* (Rundungsmodus *to nearest*) ist.)
$$
1.25 + 0.0625, 2 - 0.0625, 3.625 + 0.0625, 3.5 + 0.296875, 3.25 + 0.28125
$$
d)  **(fakultativ)** Welche Zahlen lassen sich darstellen, wenn man im obigen GKZ-Format immer $m1 = 1$ annimmt und statt dieses vorderen Mantissenbits (sogenanntes *hidden bit*) ein sechstes Mantissenbit m6 speichert? Ergäbe dies ein sinnvolles Zahlsystem? Diskutieren Sie seine Vor- und Nachteile.

```fortran-fixed-form
program custom_floating_point
    implicit none

    ! 定义变量
    double precision :: decimal_number, converted_back
    integer :: sign, exponent, mantissa

    ! 初始化一个十进制数
    decimal_number = 3.875

    ! 转换到自定义浮点格式
    call convert_to_custom_fp(decimal_number, sign, exponent, mantissa)

    ! 转换回十进制数
    call convert_from_custom_fp(sign, exponent, mantissa, converted_back)

    ! 打印结果
    print *, '原始十进制数: ', decimal_number
    print *, '转换回的十进制数: ', converted_back

contains

    subroutine convert_to_custom_fp(decimal, sign, exponent, mantissa)
        double precision, intent(in) :: decimal
        integer, intent(out) :: sign, exponent, mantissa
        double precision :: normalized, frac_part
        integer :: int_part

        ! 确定符号位
        if (decimal < 0.0) then
            sign = 1
            decimal = -decimal
        else
            sign = 0
        end if

        ! 标准化数值（1.0 <= normalized < 2.0）
        normalized = decimal
        exponent = 0
        do while (normalized >= 2.0)
            normalized = normalized / 2.0
            exponent = exponent + 1
        end do
        do while (normalized < 1.0)
            normalized = normalized * 2.0
            exponent = exponent - 1
        end do

        ! 转换指数为2位二进制，范围[-1,+2] 映射到 [0,3]
        exponent = exponent + 1
        exponent = max(0, min(3, exponent))

        ! 计算5位尾数
        frac_part = normalized - 1.0
        mantissa = 0
        do int_part = 1, 5
            frac_part = frac_part * 2.0
            mantissa = mantissa*2 + nint(frac_part)
            frac_part = frac_part - nint(frac_part)
        end do
    end subroutine convert_to_custom_fp

    subroutine convert_from_custom_fp(sign, exponent, mantissa, decimal)
        integer, intent(in) :: sign, exponent, mantissa
        double precision, intent(out) :: decimal
        double precision :: normalized
        integer :: i

        ! 计算尾数
        normalized = 1.0
        do i = 1, 5
            if (bit_test(mantissa, 5-i)) then
                normalized = normalized + 2.0**(-i)
            end if
        end do

        ! 计算指数
        exponent = exponent - 1
        decimal = normalized * (2.0**exponent)

        ! 应用符号位
        if (sign == 1) then
            decimal = -decimal
        end if
    end subroutine convert_from_custom_fp

end program custom_floating_point
```



**Aufgabe 7: Exponentialreihe**

Schreiben Sie ein Fortran 95–Programm, welches $e^x$ mit Hilfe der Taylor-Reihe
$$
e^x = \sum_{i=0}^{\infty} \frac{x^i}{i!} = 1 + x + \frac{x^2}{2} + \frac{x^3}{6} + \frac{x^4}{24} + \frac{x^5}{120} + \ldots
$$
mit doppelt genauer reeller Gleitkommaarithmetik berechnet.Beachten Sie, dass sich die einzelnen Summanden $y_i:= x^i/i!$ wie folgt berechnen lassen:
$$
y_0 := 1\\
y_i := y_{i−1}·x/i, i=1,2,...
$$
Brechen Sie die Summation ab, sobald die Summanden bei der Rechnung so klein werden, dass keine Veränderung der Summe mehr auftritt. (Hierzu müssen Sie sich den zuletzt berechneten Summenwert in einer zusätzlichen Variable merken.)

Belegen Sie, dass dieses Verfahren aufgrund ungenauer Ergebnisse für die Berechnung der Exponentialfunktion zumindest für negative Argumente ungeeignet ist, indem Sie die Aus- wertung der Exponentialreihe unter anderem mit folgenden Argumenten durchführen:
$$
x=10·k \space und \space x=−10·k \space f\text{ü}r \space k=1,2,...,10.
$$
Vergleichen Sie die so berechneten Werte mit den Ergebnissen der vordefinierten Standard- funktion **EXP**, indem Sie jeweils das verwendete Argument **x**, die beiden mit Hilfe der Reihe und mittels **EXP** berechneten Näherungen sowie die Differenz zwischen diesen kommentiert ausgeben. Interpretieren Sie die Ergebnisse!

**Fakultative Zusatzaufgabe:** Summieren Sie zum Vergleich die Reihe, bei einem ausrei- chend kleinen Glied beginnend, rückwärts auf. Bei welchen Gliedern sollte man die Summa- tion (ungefähr) beginnen?

Interpretieren Sie erneut die Ergebnisse! Verbessert dies die Ergebnisqualität?

```fortran-fixed-form
program exp_taylor_series
  implicit none
  double precision :: x, sum, term, epsilon
  integer :: i

  ! 设置 x 的值和计算精度
  x = 10.0   ! 示例值，可以根据需要修改
  epsilon = 1.0e-15  ! 确定何时停止迭代的精度阈值

  sum = 1.0    ! e^0 的初始值
  term = 1.0   ! 第一个项 y_0 = 1

  i = 1
  do while (abs(term) > epsilon)
    term = term * x / i    ! 计算当前项
    sum = sum + term       ! 将当前项加到总和中
    i = i + 1
  end do

  ! 输出计算的结果
  print *, "使用泰勒级数计算 e^", x, " 的结果为: ", sum
  print *, "使用 Fortran 内置 EXP 函数计算 e^", x, " 的结果为: ", exp(x)

end program exp_taylor_series
```



**Aufgabe F2:** **Summen von Quadratzahlen** **(fakultativ)**

Joseph-Louis Lagrange bewies 1770 mit Hilfe eines Satzes seines Lehrers Leonhard Euler,dass sich jede natürliche Zahl als Summe von maximal 4 Quadratzahlen darstellen lässt. 

Eine solche Darstellung einer Zahl n ∈ N\{0} mit Hilfe der minimalen für diese Zahl not-wendigen Anzahl von Quadratzahlen heiße *minimale Zerlegung* von n.

a)  Überlegen Sie sich Strategien, wie man eine bzw. alle minimalen Zerlegungen einer gegebenen natürlichen Zahl n berechnen kann. Wie kann man unnötige Permutationen derselben Zerlegungen vermeiden?

b)  Überlegen Sie sich Strategien, wie man die minimalen Zerlegungen aller natürlichen Zahlen bis zu einer gegebenen Obergrenze N **effizient** bestimmen kann (ein gutes „Gedächtnis“ könnte hilfreich sein). Implementieren und testen Sie diese Variante.

c)  Bestimmen Sie mit Hilfe von 4 Zählern den Anteil der natürlichen Zahlen (bis N ), deren minimale Zerlegung(en) 1, 2, 3 bzw. 4 Quadratzahlen benötigen. Wie kann man den ersten Zähler unmittelbar verifizieren?

```fortran-fixed-form
program square_sum_decomposition
  implicit none
  integer, parameter :: N = 100  ! 选择一个上限
  integer :: i, j, min_squares(N+1)

  ! 初始化数组，设置最大分解数
  min_squares = N

  ! 0的最小平方数分解为0
  min_squares(1) = 0

  ! 计算1至N的每个数的最小平方数分解
  do i = 1, N
     do j = 1, i
        if (j*j > i) exit
        min_squares(i+1) = min(min_squares(i+1), min_squares(i-j*j+1) + 1)
     end do
  end do

  ! 打印结果
  do i = 1, N
     print *, '数字', i, '的最小平方数分解需要', min_squares(i+1), '个平方数'
  end do

end program square_sum_decomposition

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
