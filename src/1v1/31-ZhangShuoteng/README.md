---
title: CSC 108H5 F 2018 Midterm Test
date: 2023-03-26 10:08:09
icon: python
author: AI悦创
isOriginal: true
category: 
    - 麦马大学
    - mcmaster
    - McMaster University
tag:
    - 麦马大学
    - mcmaster
    - McMaster University
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
footer: 长期招收编程一对一学员！微信：Jiabcdefh, <a href="https://beian.miit.gov.cn/" target="_blank">闽ICP备19021486号-6</a>
---

Do not turn this page until you have received the signal to start. (Please fill out the identification section above and read the instructions below.) Good Luck!

> 在收到开始的信号之前，不要翻页。(请填写上面的身份识别部分，并阅读下面的说明。)好运！

This midterm consists of 5 questions on 9 pages (including this one). When you receive the signal to start, please make sure that your copy is complete.

> 这次期中考试共9页(包括这张)，共5道题。当您收到开始的信号时，请确保您的副本是完整的。

- Comments are not required except where indicated, although they may help us mark your answers.

> 评论是不需要的，除非有指示，尽管他们可以帮助我们标记你的答案。

- You may assume all relevant import statements have been performed.
- No error checking is required: assume all user input and all argument values are valid.
- If you use any space for rough work, indicate clearly what you want marked.
- You may use a pencil; however, work written in pencil may not be considered for remarking.

## Question 1. 

Assume each of the pieces of code below is being entered into the Python console. In each space, write what would be displayed on the console, if anything. If an error would be displayed to the console, write ERROR.

> 假设下面的每一段代码都被输入到 Python 控制台。在每个待填写的空格中，写下将在控制台上显示「输出」的内容。如果控制台将显示错误，则写入error。

Each subquestion is independent of the others.

> 每个子问题都独立于其他子问题。

### Part (a)

```python
>>> x = 5
>>> y = x
>>> x = 2
>>> y
```

### Part (b)

```python
>>> x = 4
>>> y = 2
>>> z = x/y
>>> y = x+y * z
>>> x = 5 * z // 3
>>> y
>>> out1?
>>> x
>>> out2?
```

### Part (c)

Assume the following two functions have been declared.

> 假设已经声明了以下两个函数。

```python
def f1(x, y):
    x = y + 2
    z = y * x
    return 2 * f2(x, z)


def f2(y, x):
    x = x - y
    z = x - y
    return x - (y + z)
```

```python
>>> z = 1
>>> x = 2
>>> f1(z, x)
```

### Part (d)

```python
>>> s = "EZ Marks."
>>> t = s[1:4]
>>> t
>>> out1?
>>> t[2]
>>> out2?
```

### Part (e)

```python
>>> L = [5, 8, 3, 0, 1, 2, 6, 24]
>>> for z in L:
        if z%3 != 0 and z%2 == 0:
            print(z)
```

### Part (f)

```python
>>> L = [[5, 9, 1, 1, 2], [7, 7], [], [1]]
>>> for i in range(len(L[0])):
    	s=0
        for n in L[i]:
           s += n
        print(s)
```

## Question 2.

Recall the `is_a_number` function from Assignment 1. The function takes in a string and returns True if and only if that string represents a positive number or positive decimal number (see some examples in the docstring below). Implement is a number without the use of loops, or `try/exceptions`. If your code uses either of these constructs, you will receive 0. Focus on passing the examples in the docstring. Do **NOT** worry about cases like “ 1.0 ”, “4.0e7”, etc.

> 回忆一下习题1中的一个数函数。该函数接受一个字符串，当且仅当该字符串表示正数或正十进制数时返回 True (请参阅下面docstring 中的一些示例)。实现是一个不使用循环或 try/exception 的数字。如果您的代码使用这些结构中的任何一个，您将收到0。重点是在文档字符串中传递示例。不要担心像“1.0”，“4.0e7”等情况。

```python
def is_a_number(s:str)-> bool:
    """
    Returns True if and only if s is a string representing a positive number.
    Examples:
    >>> is_a_number("1")
    True
    >>> is_a_number("One")
    False
    >>> is_a_number("-3")
    False
    >>> is_a_number("3.")
    True
    >>> is_a_number("14.61")
    True
    >>> is_a_number("3.1.2")
    False
    """
```

::: details

```python
def is_a_number(s: str) -> bool:
    # Check if the entire string consists of digits, in which case it's a positive integer.
    if s.isdigit():
        return True

    # Check if the string has exactly one period, and both parts separated by the period are digits.
    if s.count('.') == 1:
        left, right = s.split('.')
        return left.isdigit() and right.isdigit()

    return False


# Test cases
print(is_a_number("1"))       # True
print(is_a_number("One"))     # False
print(is_a_number("-3"))      # False
print(is_a_number("3."))      # True
print(is_a_number("14.61"))   # True
print(is_a_number("3.1.2"))   # False
```

:::



## Question 3.

Consider the function below. Reimplement (rewrite) it using only a single if statement. To get full grades there should **not** be any else or elif clauses, only a single if clause. The behaviour of your new function should be equivalent to the original function in the sense that given the same input, the two functions (original and new) will produce the same output.

> 考虑下面的函数。只使用一个if语句重新实现(重写)它。要得到满分，不应该有任何else或elif从句，只有一个if从句。新函数的行为应该与原函数等价，即给定相同的输入，两个函数(原函数和新函数)将产生相同的输出。

```python
def my_fun(n: int, m: int)-> int:
    if n > 5 and m > 0:
        if n > 0:
            return 1
        else:
            return 2
    elif m <= 0 or n < 6:
        return 3
    else:
        return 4
```

## Question 4.

Consider the function below. Reimplement (rewrite) it using a while loop instead of a for loop. The behaviour of your new function should be equivalent to the original function in the sense that given the same input, the two functions (original and new) will produce the same output.

> 考虑下面的函数。使用 while 循环而不是 for 循环重新实现(重写)它。新函数的行为应该与原函数等价，即给定相同的输入，两个函数(原函数和新函数)将产生相同的输出。

```python
def my_fun(s: str)-> int: 
    n=0
    for char in s:
        if not char in "aeiouAEIOU":
            n += 1 
    return n
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
