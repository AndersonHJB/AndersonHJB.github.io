---
title: CS-PY101 Lab 1｜Variable & Print
icon: employee-rank
date: 2023-05-28 10:31:15
author: AI悦创
isOriginal: true
category: 
    - 1v1
    - Python Lab
    - CS-PY101 Lab
    - Python 1v1
tag:
    - 1v1
    - Python Lab
    - CS-PY101 Lab
    - Python 1v1
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
editLink: true
backToTop: true
toc: true
---

::: center

# Variable & Print

:::

在提前离开实验室前，你必须让实验室助教确认你的情况。如果未经确认就离开，你将无法获得本次实验的学分。

在你做好准备之后，请联系我获取此 Lab 的密码，你需要在 1h 内完成此。

::: warning 注意⚠️

CS-PY101 Lab 系列针对 Python 1v1 私教系列专门制定的练习，但是！也会有部分专门特意“超出已经教学过的知识，此时你需要的做的：思考🤔️、查资料等来解决。

> 目的在于：我所讲解的知识或许很细很让你理解，但终究是有限的，并且技术是会更新，所以最终的目的还是**引导**你学会独立思考和学习。——带你掌握方法，教师是一个淡出的角色。
>
> 对于超出的知识，不用担心，在之后的课程中，会一一解决。

:::

## 1. 概念题

> 此题属于概念性问题，没有明确的答案标准，请您根据你所学的知识进行回答。

1. 在 Python 中，`print` 函数是用来做什么的？

2. 如何在 Python 中声明一个变量？请给出一个例子。

3. 如何在 Python 中进行多个变量同时赋值相同的值？请给出一个例子。

4. 如何在 Python 中进行多个变量同时赋值不同的值？请给出一个例子。

5. 在 Python 中，如果我们想要在一行中打印多个变量，应该怎么做？请给出一个例子。

6. 什么是 Python 中的注释？怎么写注释？

7. 在 Python 中，我们如何改变 `print` 函数中的 `sep` 参数，以改变多个变量的输出间隔？请给出一个例子。

8. 在 Python 中 print 的 end 作用是什么？编写个代码示例。

9. 在 Python 中，如果我们要覆盖一个变量的值，应该怎么做？请给出一个例子。

10. 在 Python 中，我们怎么样才能让计算机“看不见”一行代码？

11. 当我们用 `print` 函数同时输出多个变量时，默认的间隔符是什么？

12. 在 Python 中，一个变量可以存储什么样的数据？请给出至少三个例子。

13. 在编写代码中，为什么要适当的加上空格？空格对代码有影响吗？

14. 变量命名为什么推荐：“见名知意”？

这些问题主要围绕 Python 中的变量声明、赋值、输出，以及注释的使用等基础概念展开，帮助你更好地理解和巩固这些概念。

## 2. 选择题

1. Python 变量的命名规则中，以下哪一项是错误的？

    a) 变量名可以由字母、数字和下划线组成

    b) 变量名不能以数字开头

    c) 变量名可以以特殊字符，如@或#，开头

    d) 变量名可以包含大写和小写字母

2. 在 Python 中，如何使用 print 函数打印字符串 "`Hello, World!`"？

    a) `print "Hello, World!"`

    b) `print("Hello, World!")`

    c) `echo("Hello, World!")`

    d) `print[Hello, World!]`

3. print 函数中的 end 参数用于什么？

    a) 确定是否结束程序

    b) 在输出的末尾添加指定字符

    c) 控制输出的数量

    d) 确定输出的顺序

4. 如果我想在 print 函数中，用"`,`"作为分隔符，应该如何操作？

    a) 使用参数 `sep = ","`

    b) 使用参数 `end = ","`

    c) 使用参数 `print = ","`

    d) 使用参数 `divide = ","`

5. 如果我想在不换行的情况下输出两个变量 a 和 b，以下哪个是正确的？

    a) `print(a, b, end = ' ')`

    b) `print(a, b, sep = ' ')`

    c) `print(a; b)`

    d) `print(a, b, end = '\n')`

6. 在 Python 中，以下哪种方法可以用来删除变量？

    a) `drop(variable)`

    b) `remove(variable)`

    c) `del variable`

    d) `delete variable`

7. 在 Python 中，以下哪个语句是错误的？

    a) `x, y, z = "Orange", "Banana", "Cherry"`

    b) `x = y = z = "Orange"`

    c) `x = "Orange" = y`

    d) `x, y = y, x`

8. 在 Python 中，以下哪个声明不是合法的变量名？

    a) `_myvar`

    b) `myVar`

    c) `9var`

    d) `varName9`

9. 下列哪个 print 函数的使用方式是正确的？

    a) `print(a, b, c, sep = ' ', end = ' ')`

    b) `print(a b c sep = ' ', end = ' ')`

    c) `print[a, b, c, sep = ' ', end = ' ']`

    d) `print{a, b, c, sep = ' ', end = ' '}`

10. Python 中的哪个函数可以用来获取变量的类型？

    a) `typeof(variable)`

    b) `type(variable)`

    c) `getType(variable)`

    d) `variable.type()`

## 3. 填空题

1. 在 Python 中，\_\_\_\_\_  关键字用于打印一个变量的值。

2. Python 中的变量可以是字符串、整数、浮点数或布尔类型。例如，`my_str = "Hello World"` 使 my_str 成为一个 \_\_\_\_\_。

3. 在 Python 中，我们可以通过 \_\_\_\_\_(my_var) 来打印变量 my_var。

4. 在 Python 中，我们可以使用 my_var = \_\_\_\_\_ 来创建一个值为 10 的变量 my_var。

5. 如果我们有两个变量 `a = 5` 和 `b = 10`，我们可以使用 print(a, \_\_\_\_\_) 来打印这两个变量的值。

6. 在 Python 中，变量名可以包含字母、数字和下划线，但不能以数字开头。例如，1my_var 是一个无效的变量名，但 \_\_\_\_\_ 是有效的。

7. 如果我有一个整数变量 `my_int = 50`，我可以通过在打印语句中添加 \_\_\_\_\_ 来打印 "The value of my integer is 50"。

8. 在 Python 中，通过使用 \_\_\_\_\_ 关键字，我们可以将一个变量的值分配给另一个变量。例如，如果 `a = 10` 和 `b = a`，那么 `b` 的值也会变为10。

9. 在 Python 中，我可以通过编写 my_str = \_\_\_\_\_ 来创建一个包含字符串 "Hello, Python!" 的变量 my_str。

10. 如果我有一个浮点型变量 `my_float = 5.67`，我可以使用 `print(_____ + " is my floating point number")` 来打印 "5.67 is my floating point number"。

## 4. 编程题

### 4.1 定义和输出变量

要求：定义一个变量，名字为 greeting，并将它的值设置为 `"Hello, World!"`。然后使用 print 函数将此变量的值打印出来。

### 4.2 变量的赋值

要求：定义一个变量，名字为 number，并将它的值设置为 10。然后定义一个新的变量，名字为 copy_number，并将它的值设置为变量 number 的值。使用 print 函数分别打印这两个变量的值。

### 4.3 变量的覆盖

要求：定义一个变量，名字为 food，并将它的值设置为 `"apple"`。然后将变量 food 的值改为 `"banana"`。使用 print 函数打印变量 food  的值，然后解释为什么打印的结果是 `"banana"`  而不是 `"apple"`。

### 4.4 使用 sep 和 end 参数

要求：定义三个变量 a、 b、c，分别赋值为 1，2，3。使用 print 函数打印这三个变量，使得输出的结果是 `1-2-3`，并且在输出之后不换行。

### 4.5 同时输出多个变量

要求：定义四个变量 name、age、job、hobby，并分别赋值为你的名字、年龄、职业和爱好。使用一次 print 函数将这四个变量的值同时打印出来，每个值之间用逗号隔开。

### 4.6 多个变量赋予不同值和相同值

要求：定义三个变量 x、y、z，并且同时为它们赋予值 10。然后将 x 的值改为 20，y 的值改为30。使用 print 函数分别打印 x、y、z 的值。





欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！

::: details 公众号：AI悦创【二维码】

![](/gzh.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](/zsxq.jpg)

