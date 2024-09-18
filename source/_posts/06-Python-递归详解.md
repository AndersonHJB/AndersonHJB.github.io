---
title: Python 递归详解
tags:
  - 递归
categories:
  - Python算法
description: 本篇是 Python 私教的编程题目测试
top_img: /img/posts/05-诺怡-课后编程题目/74526422_p0.jpg
cover: /img/posts/05-诺怡-课后编程题目/Canvas-Ruom.webp
comments: true
toc: true
mathjax: false
katex: false
highlight_shrink: false
swiper_index: 1
top_group_index: 1
background: '#fff'
aside: true
ai:
  - 这篇文章介绍了诺怡在 AI悦创·私教中，Python 练习题的汇总。
abbrlink: '3830981'
date: 2024-09-18 22:13:17
updated: 2024-09-18 20:16:40
toc_number:
toc_style_simple:
aplayer:
---

你好，我是悦创。

> 从前有座山，山里有座庙，庙里有个老和尚，正在给小和尚讲故事！故事是什么呢？『从前有座山，山里有座庙，庙里有个老和尚，正在给小和尚讲故事！故事是什么呢？』……

这也许是最经典（口耳相传）的童谣了，充分展现了自然语言的魅力及其无限可能性，可以永远以这种递归的方式继续下去。。。

![](06-Python-递归详解/image.png)

俄文艺理论家车尔尼雪夫斯基曾说过：

> 艺术来源于生活，却又高于生活！

生活如此，编程世界亦如此 - 没有生活原形或者现象，何来程序创作的源头和灵感？正因此，Python 中出现了这样一种函数 - 递归函数。

大多数情况下，我们见到的是一个函数调用其他函数。除此之外，**函数还可以自我调用，这种类型的函数被称为递归函数。**


# 1. 递归函数

递归的一个视觉效果呈现 - 捧着画框的蒙娜丽莎：

![](06-Python-递归详解/image-1.png)

递归（Recursion），在数学与计算科学中，是指在函数的定义中使用函数自身的方法。

在使用递归时，需要注意以下几点：

1. 递归就是在过程或函数里调用自身；
2. 边界调节：必须有一个明确的递归结束条件，称为递归出口。（确定递归到何时终止，也称为递归出口。）；
3. 递归模式：大问题是如何分解为小问题，也称递归体；

递归函数只有具备了这两个要素，才能在有限次计算后得出结果。

**注意：**切勿忘记递归出口，避免函数无限调用！

# 2. 典型的算法

## 2.1 阶乘

大多数学过数学、计算机科学或者读过编程相关书籍的人，想必都会遇到阶乘：

```bash
n! = 1 x 2 x 3 x ...... x n
```

也可以用递归方式定义：

```bash
n! = (n - 1)! x n
```

![](06-Python-递归详解/image-2.png)

其中，`n >= 1`，并且 `0! = 1`。

由于简单、清晰，因此其常被用作递归的示例。

**PS：** 除阶乘以外，还有很多算法可以使用递归来处理，例如：斐波那契数列、汉诺塔等。

根据阶乘的定义，很容易就能写出求阶乘的递归算法。

### 2.1.1 迭代实现

使用基础的函数和 for 循环实现阶乘：

```python
In [1]: def factorial(n):
   ...:     result = 1 # 对于 0! = 1, 所以一开始就为 1
   ...:     for i in range(2, n+1): # 1. 对于阶乘, 0 或 1 开始是没有意义的，因为如果 n 是这两个数字的话，可以不用操作
   ...:         result *= i			# 2. 2 以前的数据是可以不用乘的（也就是 1）
   ...:     return result			# 3. range 是左闭右开的，所以 n 需要 +1
   ...:

In [2]: factorial(0)
Out[2]: 1

In [3]: factorial(1)
Out[3]: 1

In [4]: factorial(2)
Out[4]: 2

In [5]: factorial(3)
Out[5]: 6

In [6]: factorial(4)
Out[6]: 24

In [7]: factorial(5)
Out[7]: 120
```

开始时，result 为 1，进入 for 循环，对之前的结果累积乘以 i，直至 n。

### 2.1.2 递归实现

现在，来使用递归来实现，和数学定义一样优雅。

```python
In [4]:  def factorial(n):
   ...:     if n == 0 or n == 1:
   ...:        return 1  # 递归结束
   ...:     else:
   ...:        return n * factorial(n - 1) # 问题规模减1，递归调用
   ...:

In [5]: factorial(0)
Out[5]: 1

In [6]: factorial(1)
Out[6]: 1

In [7]: factorial(2)
Out[7]: 2

In [8]: factorial(3)
Out[8]: 6

In [9]: factorial(4)
Out[9]: 24

In [10]: factorial(5)
Out[10]: 120
```

![](06-Python-递归详解/2.gif)

当使用正整数调用 `factorial()` 时，会通过递减数字来递归地调用自己。

为了明确递归步骤，对 5! 进行过程分解：

```python

```



















{% span center log large blue, 🪧 %}

{% folding blue close, 公众号：AI悦创【二维码】 %}

![](https://bornforthis.cn/gzh.jpg)

{% endfolding %}

{% tip info %}AI悦创·编程一对一

> AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Web、Linux」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh
>
> C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh
>
> 方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)
>
> 方法二：微信：Jiabcdefh

{% endtip %}

