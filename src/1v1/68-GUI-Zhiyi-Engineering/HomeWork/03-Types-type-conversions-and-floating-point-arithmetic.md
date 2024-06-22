---
title: 03 Types, type conversions and floating point arithmetic
icon: python
date: 2023-10-14 13:54:12
author: AI悦创
isOriginal: true
category: 
    - python 1v1
    - 留学生作业辅导
tag:
    - 剑桥大学
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

## Exercise 03.1

::: tabs

@tab EN

Compare the computed values of 

$$
d_0 = a \cdot b + a  \cdot  c
$$

and 

$$
d_1 = a \cdot (b + c)
$$

when $a = 100$, $b = 0.1$ and $c = 0.2$. Store $d_{0}$ in the variable `d0` and $d_{1}$ in the variable `d1`.

Try checking for equality, e.g. `print(d0 == d1)`. 

```python
a = ...
b = ...
c = ...

d0 = ...
print(d0)

d1 = ...
print(d1)

print(d0 == d1)
```

```python
## tests ##
assert d0 == 30.0
assert d1 != 30.0
assert d0 != d1
```

@tab ZH

## 练习 03.1

比较以下两个计算值：

$$
d_0 = a \cdot b + a  \cdot  c
$$

和 

$$
d_1 = a \cdot (b + c)
$$

当 $a = 100$, $b = 0.1$ 和 $c = 0.2$ 时。将 \(d_{0}\) 的值存储在变量 `d0` 中，将 \(d_{1}\) 的值存储在变量 `d1` 中。

尝试检查两者是否相等，例如：`print(d0 == d1)`。

@tab Answer

当 $a = 100$, $b = 0.1$ 和 $c = 0.2$ 时：

首先计算 $d_0$:

$d_0 = a \cdot b + a \cdot c = 100 \times 0.1 + 100 \times 0.2$

然后计算 $d_1$:

$d_1 = a \cdot (b + c) = 100 \times (0.1 + 0.2)$

接下来，我们可以将这两个计算值进行编程比较。

```python
a = 100
b = 0.1
c = 0.2

# 计算d0和d1的值
d0 = a * b + a * c
d1 = a * (b + c)

# 输出d0和d1的值
print("d0 =", d0)
print("d1 =", d1)

# 检查d0和d1是否相等
print("d0 and d1 are equal:", d0 == d1)
```

运行上述代码，我们可以获得 $d_0$ 和 $d_1$ 的值，以及它们是否相等的结果。

:::

## Exercise 03.2

For the polynomial
$$
\begin{align}
f(x, y) &= (x + y)^{6} 
\\
&=  x^6 + 6x^{5}y + 15x^{4}y^{2} + 20x^{3}y^{3} + 15x^{2}y^{4} + 6xy^{5} + y^{6}
\end{align}
$$



compute $f$ using: (i) the compact form $(x + y)^{6}$; and (ii) the expanded form for:

(a) $x = 10$ and $y = 10.1$

(b) $x = 10$ and $y = -10.1$

and compare the number of significant digits for which the answers are the same.
Store the answer for the compact version using the variable `f0`, and using the variable `f1` for the expanded version.

For case (b), compare the computed and analytical solutions and consider the relative error.
Which approach would you recommend for computing this expression?













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
