---
title: CS-PY101 Lab 1 Solution
icon: employee-rank
date: 2023-05-28 11:12:37
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

## 1. 概念题

无答案



## 2. 选择题

1. c) 变量名可以以特殊字符，如@或#，开头

    解析：Python 的变量名只能包含字母、数字和下划线。它们不能以数字开头，也不能包含特殊字符。

2. b) `print("Hello, World!")`

    解析：在 Python 中，print 函数用来打印或输出指定的信息。print 函数的语法是在括号内放入要打印的内容。

3. b) 在输出的末尾添加指定字符

    解析：print 函数的 end 参数是用来在打印内容后添加指定的字符，默认是换行符'`\n`'。

4. a) 使用参数 `sep = ","`

    解析：print 函数的 sep 参数是用来定义在多个输出值之间插入的字符，默认是空格。

5. a) `print(a, b, end = ' ')`

    解析：在 print 函数中，如果我们想在不换行的情况下打印多个值，我们需要将 end 参数设置为我们希望在打印内容后面添加的字符，比如一个空格。

6. c) `del variable`

    解析：在 Python 中，我们可以使用 del 关键字来删除变量。

7. c) `x = "Orange" = y`

    解析：在 Python 中，我们不能将一个值同时分配给两个变量。

8. c) `9var`

    解析：在 Python 中，变量名不能以数字开头。

9. a) `print(a, b, c, sep = ' ', end = ' ')`

    解析：print 函数可以接受多个参数，并且我们可以使用 sep 和 end 参数来定义在输出值之间以及在输出后添加的字符。

10. b) `type(variable)`

    解析：在 Python 中，我们可以使用内置的 type 函数来获取变量的类型。

## 3. 填空题

1. 在 Python 中，`print` 关键字用于打印一个变量的值。

2. Python 中的变量可以是字符串、整数、浮点数或布尔类型。例如，`my_str = "Hello World"` 使 `my_str` 成为一个`字符串`。

3. 在 Python 中，我们可以通过 `print(my_var)` 来打印变量 `my_var`。

4. 在 Python 中，我们可以使用 `my_var = 10` 来创建一个值为10的变量 `my_var`。

5. 如果我们有两个变量 `a = 5` 和 `b = 10`，我们可以使用 `print(a, b)` 来打印这两个变量的值。

6. 在 Python 中，变量名可以包含字母、数字和下划线，但不能以数字开头。例如，`1my_var` 是一个无效的变量名，但 `my_var1` 是有效的。

7. 如果我有一个整数变量 `my_int = 50`，我可以通过在打印语句中添加 `print("The value of my integer is", my_int)` 来打印 "The value of my integer is 50"。

8. 在 Python 中，通过使用 `=` 关键字，我们可以将一个变量的值分配给另一个变量。例如，如果 `a = 10` 和 `b = a`，那么 `b` 的值也会变为10。

9. 在 Python 中，我可以通过编写 `my_str = "Hello, Python!"` 来创建一个包含字符串 "Hello, Python!" 的变量 `my_str`。

10. 如果我有一个浮点型变量 `my_float = 5.67`，我可以使用 `print(str(my_float) + " is my floating point number")` 来打印 "5.67 is my floating point number"。

## 4. 编程题

### 4.1 定义和输出变量

```python
greeting = "Hello, World!"
print(greeting)
```

### 4.2 变量的赋值

```python
number = 10
copy_number = number
print(number)
print(copy_number)
```

### 4.3 变量的覆盖

```python
food = "apple"
food = "banana"
print(food)
```
在这个例子中，我们首先将 `"apple"` 赋值给变量 food，然后我们又将 `"banana"` 赋值给变量 food，这会将原来的值（`"apple"`）覆盖掉。所以当我们打印 food 的值时，输出的是 `"banana"`。

### 4.4 使用 sep 和 end 参数

```python
a = 1
b = 2
c = 3
print(a, b, c, sep="-", end="")
```

### 4.5 同时输出多个变量

```python
name = "Alice"
age = 25
job = "Engineer"
hobby = "Basketball"
print(name, age, job, hobby, sep=", ")
```

### 4.6 多个变量赋予不同值和相同值

```python
x = y = z = 10
x = 20
y = 30
print(x)
print(y)
print(z)
```
首先我们给 x、y、z 同时赋值为 10。然后，我们改变 x 的值为 20，y 的值为 30。由于在改变 x 和 y 的值时，并没有影响到 z 的值，所以打印出的 z 的值仍然是 10。



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



