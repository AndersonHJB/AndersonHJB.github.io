---
title: Assignment 2
icon: python
date: 2023-11-01 23:15:06
author: AI悦创
isOriginal: true
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

## Question 1

This assignment is worth 10 points; the number of points a question is worth is in the square brackets next to the problem number.

::: tabs

@tab EN

1. [1] First, create a function `Leibniz_sum(n)`, where n is a positive integer, which com-putes the sum

$$
Leibniz\_sum(n) = 4 \sum_{i=0}^{n} \frac{(-1)^i}{2i + 1} = 4 \left(1 - \frac{1}{3} + \frac{1}{5} - \dots + \frac{(-1)^n}{2n + 1}\right)
$$

This sum was used (long before calculators and computers) to approximate the value of $\pi$. Next, using the function `Leibniz_sum(n)` write a code to find the first value for n such that 
$$
|Leibniz\_sum(n) - \pi| < 0.0005
$$
and the corresponding approximation of $\pi$.

@tab ZH

这个作业总共值10分；每个问题的分数标在问题号旁边的方括号里。

1. [1] 首先，创建一个函数 `Leibniz_sum(n)`，其中 n 是一个正整数，该函数计算以下的求和：

$$
Leibniz\_sum(n) = 4 \sum_{i=0}^{n} \frac{(-1)^i}{2i + 1} = 4 \left(1 - \frac{1}{3} + \frac{1}{5} - \dots + \frac{(-1)^n}{2n + 1}\right)
$$

在计算器和计算机之前，这个求和公式被用来近似计算 $\pi$ 的值。接下来，使用函数 `Leibniz_sum(n)` 编写代码，找到第一个使得 
$$
|Leibniz\_sum(n) - \pi| < 0.0005
$$
的 n 值，以及相应的 $\pi$ 近似值。

@tab Answer

```python
def Leibniz_sum(n):
    s = sum([(-1)**i / (2*i + 1) for i in range(n+1)])
    return 4 * s

# 测试代码
test_results = [
    Leibniz_sum(0),    # 应为 4.0
    Leibniz_sum(20),   # 应为 3.189184782277596
    Leibniz_sum(1000)  # 应为 3.1425916543395442
]

test_results
```

@tab Answer2

```python
import math

def find_approximation():
    n = 0
    while True:
        approximation = Leibniz_sum(n)
        if abs(approximation - math.pi) < 0.0005:
            return n, approximation
        n += 1

n_value, pi_approximation = find_approximation()
n_value, pi_approximation
```

@tab Answer3

```python
import math

def Leibniz_sum(n):
    # 使用列表解析计算序列的和
    # 公式为 (-1)^i / (2i + 1)
    s = sum([(-1)**i / (2*i + 1) for i in range(n+1)])
    
    # 最后结果乘以4
    return 4 * s

def find_approximation():
    n = 0  # 从n=0开始检查
    while True:
        # 计算当前n的Leibniz_sum
        approximation = Leibniz_sum(n)
        
        # 如果近似值与π的差小于0.0005，返回当前n和近似值
        if abs(approximation - math.pi) < 0.0005:
            return n, approximation
        
        # 否则，增加n的值继续循环
        n += 1

n_value, pi_approximation = find_approximation()
n_value, pi_approximation

```



:::

## Question 2

2. [2] Create a function `solve_quadratic(a,b,c)` which solves the quadratic equation $ax^2 + bx + c = 0$ (a, b, and c can be any real numbers).

(a) If there are two real, distinct roots, return the message “real distinct roots” and the two roots in a list.

(b) If there is a repeated real root, return the message “repeated real root” and its value in a list (with a single element).

(c) If the solutions are complex, return the message “complex conjugate roots” and the two complex roots. (Recall that `complex(3,4)` defines the complex number $3 + 4j$.)

```python
def quadratic(a, b, c):
    # 计算判别式
    delta = b**2 - 4*a*c
    
    # 判别式大于0，有两个实的不同的根
    if delta > 0:
        root1 = (-b + delta**0.5) / (2*a)
        root2 = (-b - delta**0.5) / (2*a)
        return ('real distinct roots', [root1, root2])
    
    # 判别式等于0，有一个重复的实根
    elif delta == 0:
        root = -b / (2*a)
        return ('repeated real root', [root])
    
    # 判别式小于0，有两个共轭复数根
    else:
        real_part = -b / (2*a)
        imaginary_part = (-delta)**0.5 / (2*a)
        root1 = complex(real_part, imaginary_part)
        root2 = complex(real_part, -imaginary_part)
        return ('complex conjugate roots', [root1, root2])

# 测试函数
test_results = [
    quadratic(1, 5, 6),
    quadratic(1, -22, 121),
    quadratic(1, -8, 65),
    quadratic(1, 0, 1),
    quadratic(1, -1, 0)
]

test_results

```



## Question 3

Assume that you have done a preliminary investigation (for instance, you used software to graph), and determined that the equation $f(x) = 0.25 \sqrt{x} - \left( \sin \left( \frac{x}{3} \right) \right)^2 + 0.12 = 0$ has 2 distinct roots in the interval [0, 10]. (Note that there is no way to solve this equation exactly using pencil and paper.)

(a)[1] Write a function to calculate the values of f(x), and use it to determine the intervals where the two roots lie. (This means you need to identify two intervals, so that each interval contains one root. Of course, there are many correct choices.)

(b)[2] Use the bisection method (look at the template for the values of the parameters) to locate the two solutions, with the tolerance as given in the template. Start the bisection with the intervals that you identified in (a). Output: for each solution, print the interval which contains it.

```python
# Question 3(a)
import math

def f(x):
    # insert your code here

# insert print commands, as needed
```

```python
# 3(b)

def bisection(f, a, b, tol=1e-10):
    """
    Approximate a root of the function f in the interval [a,b] using the bisection method. 
    For each solution:
    * start with the interval you identified in 3(a) 
    * make the bisection stop when the length of the interval < tol
    * state what that interval is
    """

     # insert your code here

# insert print commands, as needed
```







## Question 4

[2] In this question you will approximate the (Gauss) error function
$$
\text{erf}(x) = \frac{2}{\sqrt{\pi}} \sum_{i=0}^{\infty} \frac{(-1)^i x^{2i+1}}{(2i+1)i!} 
             = \frac{2}{\sqrt{\pi}} \left( x - \frac{x^3}{3} + \frac{x^5}{10} - \frac{x^7}{42} + \frac{x^9}{216} - \cdots \right)
$$
Write the code that computes the sum above, and which stops when either of the two events happens:

(1) The number of terms added exceeds `max_terms`. So if `max_terms=4`, (and option (2) has not stopped the summation), your code should return the sum of the first four terms.

(2) The tolerance tol has been reached (and option (1) has not stopped the summation), i.e., the absolute value of the next term to be added is smaller than tol.

The remaining parameters and relevant information are given in the template.



## Question 5

In this question, we represent a polynomial (of degree n) 
$$
a_0 + a_1 x + a_2 x^2 + \cdots + a_n x^n
$$
 as a list of its coefficients $pol=[a_0, a_1, a_2, . . . , a_n]$.For instance, $6 − 5x + x^3$ is represented as `[6,−5,0,1]` 

(a)[1] Write a function `differentiate__polynomial(pol)` which computes the derivative of pol and represents it again as a list of coefficients.

(b)[1] Write a function `integrate__polynomial(pol)` which computes the antiderivative of pol and represents it again as a list of coefficients (you can assume that the integration constant is zero). 

You are not allowed to use any modules/packages for this question; instead, write your own code.

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
