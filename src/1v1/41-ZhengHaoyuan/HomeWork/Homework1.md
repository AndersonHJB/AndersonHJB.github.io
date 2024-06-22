---
title: NYU, Tandon School of Engineering Algorithms — Fall 2023 Homework #1
date: 2023-09-15 23:04:18
author: AI悦创
isOriginal: true
category: 
    - NYU – Tandon School of Engineering
tag:
    - NYU – Tandon School of Engineering
icon: readingandwritingabookwithinkandafeather
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

::: center

## Homework #1

**Due by Thursday 9/21, 11:59pm**

:::

**Submission instructions:**

1. For this assignment, you should turn in 6 files:

- A ‘.pdf’ file for the first question.

    Name your file: ‘YourNetID_hw1_q1.pdf’

- 5 ‘.py’ files, one for each question 2-6. Name your files:

    ‘YourNetID_hw1_q2.py’ and ‘YourNetID_hw1_q3.py’, etc.

Note: your netID follows an abc123 pattern, not N12345678

2. **You should submit your homework via Gradescope**.

For Gradescope’s autograding feature to work:

- Name all classes, functions and methods **exactly as they are in the assignment specifications**.
- Make sure there are **no print statements** in your code. If you have tester code, please put it in a “main” function and **do not call it**.

## Question 1

Draw the memory image for evaluating the following code:

```python
>>> lst1 = [1, 2, 3]
>>> lst2 = [lst1 for i in range(3)]
>>> lst2[0][0] = 10
>>> print(lst2)
```

## Question 2

a. Write a function **def** `shift(lst, k)` that is given a list of *N* numbers, and some positive integer k (where k*<N*). The function should shift the numbers circularly k steps to the left.

The shift has to be done **in-place**. That is, the numbers in the parameter list should reorder to form the correct output (you **shouldn’t** create and return a new list with the shifted result).

For example, if `lst = [1, 2, 3, 4, 5, 6]` after calling `shift(lst, 2)`, lstwill be `[3, 4, 5, 6, 1, 2]`

b. Modify your implementation, so we could optionally pass to the function a third argument that indicates the direction of the shift (either ‘left’ or ‘right’).
 Note: if only two parameters are passed, the function should shift, by default, to the left.

Hint: Use the syntax for default parameter values.

## Question 3

a. Write a short Python function that takes a positive integer *n* and returns the sum of the squares of all the positive integers smaller than *n*.

b. Give a single command that computes the sum from section (a), relying on Python’s list comprehension syntax and the built-in sum function.  

c. Write a short Python function that takes a positive integer *n* and returns the sum of the squares of all the odd positive integers smaller than *n*.

d. Give a single command that computes the sum from section(c),relying on Python’s list comprehension syntax and the built-in sum function.  

## Question 4

1. Demonstrate how to use Python’s list comprehension syntax to produce the list `[1, 10, 100, 1000, 10000, 100000]`.
2. Demonstrate how to use Python’s list comprehension syntax to produce the list `[0, 2, 6, 12, 20, 30, 42, 56, 72, 90]`.
3. Demonstrate how to use Python’s list comprehension syntax to produce the list `[‘a’, ‘b’, ‘c’, ... , ‘z’]`, but without having to type all 26 such characters literally.

## Question 5

The *Fibonacci Numbers Sequence*, $F_n$, is defined as follows:

$F_{0}$ is 1, $F_{1}$ is 1, and $F_{n} = F_{n-1} + F_{n-2}$ for n = 2,  3, 4,...

In other words, each number is the sum of the previous two numbers.

The first 10 numbers in Fibonacci sequence are: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55

Note:

Background of Fibonacci sequence: [https://en.wikipedia.org/wiki/Fibonacci_number](https://en.wikipedia.org/wiki/Fibonacci_number)

Implement a function **def** fibs(n) . This function is given a positive integer n,and returns a generator, that when iterated over, it will have the first n elements in the Fibonacci sequence.

For Example, if we execute the following code:

```python
for curr in fibs(8):
    print(curr)
```

The expected output is:

```python
1 1 2 3 5 8 13 21
```



## Question 6

You are given an implementation of a Vector class, representing the coordinates of a vector in a multidimensional space. For example, in a three-dimensional space, we might wish to represent a vector with coordinates *<5,**−**2, 3>*.

> 你得到了一个向量类的实现，代表在多维空间中的向量坐标。例如，在三维空间中，我们可能希望表示一个坐标为 *`<5,−2,3>`* 的向量。

For a detailed explanation of this implementation as well as of the syntax of operator overloading that is used here, please read sections 2.3.2 and 2.3.3 in the textbook (pages 74-78).

> 对于这个实现的详细解释，以及这里使用的操作符重载的语法，请阅读教材中的2.3.2和2.3.3节（第74-78页）。

```python
class Vector:
    def __init__(self, d):
        self.coords = [0] * d

    def __len__(self):
        return len(self.coords)

    def __getitem__(self, j):
        return self.coords[j]

    def __setitem__(self, j, val):
        self.coords[j] = val

    def __add__(self, other):
        if len(self) != len(other):
            raise ValueError("dimensions must agree")
        result = Vector(len(self))
        for j in range(len(self)):
            result[j] = self[j] + other[j]
        return result

    def __eq__(self, other):
        return self.coords == other.coords

    def __ne__(self, other):
        return not (self == other)

    def __str__(self):
        return "<" + str(self.coords)[1:-1] + ">"

    def __repr__(self):
        return str(self)
```

a. The Vector class provides a constructor that takes an integer *d*, and produces a *d*-dimensional vector with all coordinates equal to 0. Another convenient form for creating a new vector would be to send the constructor a parameter that is some iterable object representing a sequence of numbers, and to create a vector with dimension equal to the length of that sequence and coordinates equal to the sequence values. For example, `Vector([4, 7, 5])` would produce a three- dimensional vector with coordinates `<4, 7, 5>`.

> a. Vector 类提供了一个构造函数，它接受一个整数*d*，并生成一个所有坐标都为0的*d*-维向量。创建新向量的另一种便捷方式是向构造函数发送一个参数，该参数是代表数字序列的可迭代对象，并创建一个维度等于该序列长度的向量，坐标等于序列值。例如，`Vector([4, 7, 5])` 会产生一个三维向量，坐标为`<4, 7, 5>`。

Modify the constructor so that either of these forms is acceptable; that is, if a single integer is sent, it produces a vector of that dimension with all zeros, but if a sequence of numbers is provided, it produces a vector with coordinates based on that sequence.

> 修改构造函数，使其可以接受以下两种形式：也就是说，如果传入一个整数，它会生成一个所有元素为零的指定维度的向量；但如果提供了一个数字序列，它会根据该序列生成一个坐标向量。

Hint: use run-time type checking (the isinstance function) to support both syntaxes.

> 提示：使用运行时类型检查（`isinstance` 函数）来支持这两种语法。

b. Implement the `__sub__` method for the Vector class, so that the expression *u—v* returns a new vector instance representing the difference between two  vectors.

> b. 为 Vector 类实现 `__sub__` 方法，这样表达式 *u-v* 可以返回一个新的向量实例，代表两个向量之间的差值。

c. Implement the `__neg__` method for the Vector class, so that the expression *-v* returns a new vector instance whose coordinates are all the negated values of the respective coordinates of *v*. 

> c. 为 Vector 类实现 `__neg__` 方法，以便表达式 *-v* 返回一个新的向量实例，其坐标都是 *v* 的相应坐标的负值。

d. Implement the `__mul__` method for the Vector class, so that the expression `v*3` returns a new vector with coordinates that are *3*times the respective coordinates of *v*.

> d. 为 Vector 类实现 `__mul__` 方法，使得表达式 `v*3` 返回一个新的向量，其坐标是 *v* 的相应坐标的 *3* 倍。

e.Section (d) asks for an implementation of `__mul__`, for the Vectorclass, to provide support for the syntax *`v*3`*.Implement the `__rmul__` method, to provide additional support for syntax $3*v$.

> 第(e)节要求为Vector类实现`__mul__`方法，以支持`v*3`这种语法。请实现`__rmul__`方法，以进一步支持`3*v`这种语法。

f.There two kinds of multiplication related to vectors:

> f. 与向量相关的有两种乘法：

1. Scalar product – multiplying a vector by a number (a scalar), as described and implemented in section (d).For example, `if v = <1, 2, 3>`, then `v*5` would be `<5, 10, 15>`.

    > 标量乘法 - 乘以一个数字（标量），如第(d)部分所描述和实现的那样。例如，如果 `v = <1, 2, 3>`，那么 `v*5` 将是 `<5, 10, 15>`。

2. Dot product – multiplying a vector by another vector. In this kind of multiplication if $v = <v1, v2, ..., v_n>$ and $u = <u_1, u_2, ..., u_n>$ then $v*u$ would be $v_1*u_1 + v_2*u_2+ ... + v_n*u_n$.For example, if  $v = <1, 2, 3>$ and $u = <4, 5, 6>$, then $v*u$  would be 32 ($1*4+2*5+3*6=32$).

    > 点积 – 一个向量与另一个向量的乘法。在这种乘法中，如果 \(v = <v1, v2, ..., v_n>\) 和 \(u = <u_1, u_2, ..., u_n>\)，那么 \(v*u\) 就是 \(v_1*u_1 + v_2*u_2 + ... + v_n*u_n\)。例如，如果 \(v = <1, 2, 3>\) 和 \(u = <4, 5, 6>\)，那么 \(v*u\) 就是32 ( \(1*4+2*5+3*6=32\) )。

Modify your implementation of the `__mul__` method so it will support both kinds of multiplication. That is, when the user will multiply a vector by a number it will calculate the scalar product and when the user multiplies a vector by another vector, their dot product will be calculated.

> 修改您对 `__mul__` 方法的实现，使其支持两种乘法。也就是说，当用户用一个数字乘以一个向量时，它将计算标量积；当用户将一个向量与另一个向量相乘时，将计算它们的点积。

After implementing sections (a)-(f), you should expect the following behavior:

> 在实施第(a)-(f)部分之后，你应该预期以下行为：

```python
>>> v1 = Vector(5)
>>> v1[1] = 10
>>> v1[-1] = 10
>>> print(v1)
<0, 10, 0, 0, 10>

>>> v2 = Vector([2, 4, 6, 8, 10])
>>> print(v2)
<2, 4, 6, 8, 10>

>>> u1 = v1 + v2
>>> print(u1)
<2, 14, 6, 8, 20>

>>> u2 = -v2
>>> print(u2)
<-2, -4, -6, -8, -10>

>>> u3 = 3 * v2
>>> print(u3)
<6, 12, 18, 24, 30>

>>> u4 = v2 * 3
>>> print(u4)
<6, 12, 18, 24, 30>

>>> u5 = v1 * v2
>>> print(u5)
140
```

::: details zh

以下是题目的中文翻译：

给定一个`Vector`类的实现，该类表示多维空间中向量的坐标。例如，在三维空间中，我们可能希望表示一个具有坐标`<5, -2, 3>`的向量。

要对此实现进行详细说明以及在此处使用的运算符重载语法，请阅读教材的2.3.2和2.3.3节（第74-78页）。

```python
[Python代码...]
```

a. `Vector`类提供了一个构造函数，该函数接受一个整数*d*，并产生一个所有坐标都等于0的*d*-维向量。创建新向量的另一种便捷形式是将一个表示数字序列的可迭代对象作为参数发送给构造函数，并创建一个维度等于该序列长度的向量，坐标等于序列值。例如，`Vector([4, 7, 5])`将产生一个坐标为<4, 7, 5>的三维向量。

修改构造函数，使这两种形式都可接受；也就是说，如果发送了一个单独的整数，它将产生一个所有坐标都为0的该维度的向量，但是如果提供了一个数字序列，它将根据该序列产生一个向量。

提示：使用运行时类型检查（isinstance函数）来支持这两种语法。

b. 为`Vector`类实现`__sub__`方法，使得表达式*u-v*返回表示两个向量之间差异的新向量实例。

c. 为`Vector`类实现`__neg__`方法，使得表达式*-v*返回一个新的向量实例，其坐标都是*v*的相应坐标的负值。

d. 为`Vector`类实现`__mul__`方法，使得表达式`v*3`返回一个新向量，其坐标是*v*的相应坐标的3倍。

e. 第(d)节要求为`Vector`类实现`__mul__`方法，以支持*v*3这种语法。实现`__rmul__`方法，以进一步支持3*v这种语法。

f. 与向量相关的有两种乘法：

1. 标量乘法 - 用一个数（标量）乘以一个向量，如(d)节中描述和实现的。例如，如果v = <1, 2, 3>，那么v*5将是<5, 10, 15>。
2. 点乘法 - 用另一个向量乘以一个向量。在这种乘法中，如果\(v = <v1, v2, ..., v_n>\) 和 \(u = <u_1, u_2, ..., u_n>\)，那么\(v*u\)将是\(v_1*u_1 + v_2*u_2+ ... + v_n*u_n\)。例如，如果 \(v = <1, 2, 3>\) 和 \(u = <4, 5, 6>\)，那么\(v*u\)将是32（\(1*4+2*5+3*6=32\)）。

修改您的`__mul__`方法的实现，使其支持这两种乘法。也就是说，当用户将一个向量与一个数字相乘时，它会计算标量积，而当用户将一个向量与另一个向量相乘时，会计算它们的点积。

在实现(a)-(f)部分后，您应该期望以下行为：

```python
[Python示例...]
```

:::











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
