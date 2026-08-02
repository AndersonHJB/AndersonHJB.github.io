---
title: Number System Conversion
date: 2022-10-03 00:51:07
author: AI悦创
isOriginal: true
icon: python
sticky: false
star: false
article: true
timeline: true
image: false
navbar: true
sidebarIcon: true

comment: true

backToTop: true
toc: true
---

你好，我是悦创。

As we know, the number system is a form of expressing the numbers. In **number system conversion**, we will study to convert a number of one base, to a number of another base. There are a variety of [number systems](https://byjus.com/maths/number-system/) such as binary numbers, decimal numbers, hexadecimal numbers, octal numbers, which can be exercised.

> 我们知道，数制是表示数字的一种形式。在数制转换中，我们将学习如何将一个进位的数转换为另一个进位的数。有各种各样的[数字系统](https://byjus.com/maths/number-system/)，如二进制数、十进制数、十六进制数、八进制数，可以进行练习。

In this article, you will learn the conversion of one base number to another base number considering all the base numbers such as decimal, binary, octal and hexadecimal with the help of examples. Here, the following number system conversion methods are explained.

> 在本文中，通过示例的帮助，您将学习一个基数到另一个基数的转换，考虑到所有的基数，如十进制、二进制、八进制和十六进制。在这里，解释下列数字系统转换方法。

- Binary to Decimal Number System

> 二进制到十进制的数字系统

- Decimal to Binary Number System

> 十进制到二进制的数字系统

- Octal to Binary Number System

> 八进制到二进制数系统

- Binary to Octal Number System

> 二进制到八进制数字系统

- Binary to Hexadecimal Number System

> 二进制到十六进制的数字系统

- Hexadecimal to Binary Number System

> 十六进制到二进制数系统

Get the pdf of number system with a brief description in it. The general representation of number systems are;

> 获取数字系统的 pdf，其中有一个简短的描述。数系的一般表示是:

Decimal Number – Base 10 – $N_{10}$

> 十进制数-以10为基数- N10

Binary Number – Base 2 – $N_{2}$

> 二进制数-以2为基数- $N_{2}$

Octal Number – Base 8 – $N_{8}$

> 八进制-以8为基数- $N_{8}$

Hexadecimal Number – Base 16 – $N_{16}$

> 十六进制数-以16为基数 - $N_{16}$

## Number System Conversion Table

> 数字系统转换表

| Binary Numbers | Octal Numbers「八进制数」 | Decimal Numbers「十进制数」 | Hexadecimal Numbers「十六进制数字」 |
| -------------- | ------------------------- | --------------------------- | ----------------------------------- |
| 0000           | 0                         | 0                           | 0                                   |
| 0001           | 1                         | 1                           | 1                                   |
| 0010           | 2                         | 2                           | 2                                   |
| 0011           | 3                         | 3                           | 3                                   |
| 0100           | 4                         | 4                           | 4                                   |
| 0101           | 5                         | 5                           | 5                                   |
| 0110           | 6                         | 6                           | 6                                   |
| 0111           | 7                         | 7                           | 7                                   |
| 1000           | 10                        | 8                           | 8                                   |
| 1001           | 11                        | 9                           | 9                                   |
| 1010           | 12                        | 10                          | A                                   |
| 1011           | 13                        | 11                          | B                                   |
| 1100           | 14                        | 12                          | C                                   |
| 1101           | 15                        | 13                          | D                                   |
| 1110           | 16                        | 14                          | E                                   |
| 1111           | 17                        | 15                          | F                                   |

## Number System Conversion Methods

> 数字系统转换方法

Number system conversions deal with the operations to change the base of the numbers. For example, to change a decimal number with base 10 to binary number with base 2. We can also perform the arithmetic operations like addition, subtraction, multiplication on the number system. Here, we will learn the methods to convert the number of one base to the number of another base starting with the decimal number system. The representation of number system base conversion in general form for any base number is;

> 数字系统转换处理改变数字基数的操作。
>
> 例如， **将以 10 为基数的十进制数更改为以 2 为基数的二进制数。** 
>
> 我们还可以在数字系统上进行加减乘等算术运算。在这里，我们将从十进制数字系统开始学习将一个进位数转换为另一个进位数的方法。对于任何底数，一般形式的数制底数转换表示为:

$(Number)_{b} = d_{n-1} d_{n-2}$—–$.d_{1} d_{0} . d_{1} d_{2} $—- $d_{m}$

In the above expression, dn-1 dn-2—–.d1 d0 represents the value of integer part and d-1 d-2 —- d-m represents the fractional part.

> 在上面的表达式中，$d_{n-1} d_{n-2}$——$D_{1} d_{0}$表示整数部分的值，$d_{-1} d_{-2}$——$d_{-m}$ 表示小数部分的值。

Also, dn-1 is the Most significant bit (MSB) and d-m is the Least significant bit (LSB).

> 同样，$d_{n-1}$是最有效位(MSB)， $d_{-m}$ 是最不有效位(LSB)。

Now let us learn, conversion from one base to another.

> 现在让我们学习一下，从一个进制到另一个进制的转换。

| Related Topics 「相关的话题」                                |                                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [Binary Number System](https://byjus.com/maths/binary-number-system/) | [Hexadecimal Number System](https://byjus.com/maths/hexadecimal-number-system/) |
| [Octal Number System](https://byjus.com/maths/octal-number-system/) | [Number System For Class 9](https://byjus.com/maths/number-system-for-class-9/) |

## Decimal to Other Bases

> 十进制到其他进制

Converting a decimal number to other base numbers is easy. We have to divide the decimal number by the converted value of the new base.

> 将十进制数转换为其他基本数很容易。我们必须用十进制数除以转换后的新进位值。

**Decimal to Binary Number:**

> 十进制到二进制数:

Suppose if we have to convert [decimal to binary](https://byjus.com/maths/decimal-to-binary/), then divide the decimal number by 2.

> 假设我们必须将[十进制转换为二进制](https://byjus.com/maths/decimal-to-binary/)，然后将十进制数除以2。

**Example** **1.** Convert $(25)_{10}$ to binary number.

> 例1。将 $(25)_{10}$ 转换为二进制数。

**Solution:** Let us create a table based on this question.

> **解决方案:** 让我们基于这个问题创建一个表。

| Operation | Output | Remainder 「 剩余部分」 |
| --------- | ------ | ----------------------- |
| 25 ÷ 2    | 12     | 1(MSB)                  |
| 12 ÷ 2    | 6      | 0                       |
| 6 ÷ 2     | 3      | 0                       |
| 3 ÷ 2     | 1      | 1                       |
| 1 ÷ 2     | 0      | 1(LSB)                  |

Therefore, from the above table, we can write,

> 因此，根据上表，我们可以写:

$(25)_{10} = (11001)_{2}$

**Decimal to Octal Number:**

> 十进制到八进制数:

To [convert decimal to octal number](https://byjus.com/maths/convert-decimal-to-octal/) we have to divide the given original number by 8 such that base 10 changes to base 8. Let us understand with the help of an example.

> 为了[将十进制数转换为八进制数](https://byjus.com/maths/convert-decimal-to-octal/)，我们必须将给定的原始数除以 8，这样以 10 为基数的数就变成以 8 为基数的数。让我们通过一个例子来理解。

**Example 2: Convert $128_{10}$ to octal number.**

> 例2 :将 $128_{10}$ 转换为八进制数。

Solution: Let us represent the conversion in tabular form.

> 解决方案:让我们用表格形式表示转换。

| **Operation** | **Output** | **Remainder** |
| ------------- | ---------- | ------------- |
| 128÷8         | 16         | 0(MSB)        |
| 16÷8          | 2          | 0             |
| 2÷8           | 0          | 2(LSB)        |

Therefore, the equivalent octal number = $200_{8}$

> 因此，等效的八进制数= $200_{8}$

**Decimal to Hexadecimal:**

> 十进制十六进制:

Again in [decimal to hex conversion](https://byjus.com/maths/decimal-to-hex-conversion/), we have to divide the given decimal number by 16.

> 同样在[十进制到十六进制转换](https://byjus.com/maths/decimal-to-hex-conversion/)中，我们必须将给定的十进制数除以16。

**Example 3: Convert $128_{10}$ to hex.**

> 例3:将 $128_{10}$ 转换为十六进制。

Solution: As per the method, we can create a table;

> 解决方案:根据方法，我们可以创建一个表;

| **Operation** | **Output** | **Remainder** |
| ------------- | ---------- | ------------- |
| 128÷16        | 8          | 0(MSB)        |
| 8÷16          | 0          | 8(LSB)        |

Therefore, the equivalent hexadecimal number is $80_{16}$

> 因此，等效的十六进制数是 $80_{16}$

Here MSB stands for a Most significant bit and LSB stands for a least significant bit.

> 这里 MSB 代表最高有效位，LSB 代表最低有效位。

## Other Base System to Decimal Conversion

> 其他进制制到十进制的转换

**Binary to Decimal:**

> 二进制小数:

In this conversion, binary number to a decimal number, we use multiplication method, in such a way that, if a number with base n has to be converted into a number with base 10, then each digit of the given number is multiplied from MSB to LSB with reducing the power of the base. Let us understand this conversion with the help of an example.

> 在这个将二进制数转换为十进制数的过程中，我们使用乘法方法，如果一个以 n 为基数的数必须转换为以 10 为基数的数，那么给定数的每个数字都要从 MSB 乘到 LSB，并减少底数的幂。让我们通过一个例子来理解这种转换。

**Example 1.** Convert $(1101)_{2}$ into a decimal number.

> 示例 1. 将 (1101)2 转换为十进制数。

**Solution:** Given a binary number $(1101)_{2}$.

> 解：给定一个二进制数  $(1101)_{2}$。

Now, multiplying each digit from MSB to LSB with reducing the power of the base number 2.

现在，将每个数字从 MSB 乘到 LSB，并减少基数 2 的幂。

$1 × 2^3 + 1 × 2^2 + 0 × 2^1 + 1 × 2^0$

= 8 + 4 + 0 + 1

= 13

Therefore, $(1101)_2 = (13)_{10}$

**Octal to Decimal:**

> 八进制转十进制：

To convert octal to decimal, we multiply the digits of octal number with decreasing power of the base number 8, starting from MSB to LSB and then add them all together.

> 为了将八进制转换为十进制，我们将八进制数的数字乘以基数 8 的递减幂，从 MSB 到 LSB，然后将它们加在一起。

**Example 2: Convert $22_8$ to decimal number.**

> 示例 2：将 $22_8$ 转换为十进制数。

Solution: Given, $22_8$

$2 x 8^1 + 2 x 8^0$

= 16 + 2

= 18

Therefore, $22_8 = 18_{10}$

**Hexadecimal to Decimal:**

> 十六进制转十进制：

Example 3: Convert 12116 to decimal number.

> 例3:将 $121_{16}$ 转换为十进制数。

Solution: 

1 x $16^2$ + 2 x $16^1$ + 1 x $16^0$

= 16 x 16 + 2 x 16 + 1 x 1

= 289

Therefore, $121_{16} = 289_{10}$



欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！

::: details 公众号：AI悦创【二维码】

![](https://blog.images.bornforthis.cn/docs-images/sha256/77/77f67d48a67ec6a44a4ef1f01ffc85830eb3c121b1ece45dc5ada06e20e2f52b.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](https://blog.images.bornforthis.cn/docs-images/sha256/30/3087c629da73428daa0ee050f5b31709c30f650686164b54c724b892a422c585.jpg)
