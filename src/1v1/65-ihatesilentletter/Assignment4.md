---
title: Assignment 4
icon: python
date: 2023-12-07 09:09:06
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

**Questions**

This assignment is worth 10 points; the number of points a question is worth is in the square brackets next to the problem number

## Question 1

1. In this question we explore the differences between lists and numpy arrays.First, you will create an $m \times n$ matrix M filled with numbers 1,2,3,...,mn in order, by rows. For example,if $m=2$ and $n=3$ ,then 

$$
M = \begin{bmatrix}
1 & 2 & 3 \\
4 & 5 & 6
\end{bmatrix}
\\
$$



if $m = 1$ and $n = 7$, then
$$
M = [1,2,3,4,5,6,7]
$$
and if $m = 3$ and $n = 5$
$$
\begin{bmatrix}
1 & 2 & 3 & 4 & 5 \\
6 & 7 & 8 & 9 & 10 \\
11 & 12 & 13 & 14 & 15
\end{bmatrix}
$$
**Parts (a)-(c): Use commands for lists only (no numpy arrays)**

(a)[1] Write a function create `matrix(m,n)` to create the $m \times n$ matrix $M$ as described above.

(b)[1] Write a function `sum_columns(M)` to create a list whose entry under index j is the sum of all elements in the column j of $M$.

(c)[1] Write a function `sum_rows(M)` to create a list whose entry under index i is the sum of all elements in the row i of $M$.

**Parts (d)-(f): Use commands for numpy arrays only**, such as `np.arange`, `np.reshape`,`.sum`, etc., as well as slicing. Do not use commands for lists, such as `.append`.

(d)[1] Write a function np create `matrix(m,n)` to create the $m \times n$ numpy array $M$ as de-scribed above.

(e)[1] Write a function `np_sum_columns(M)` to create a numpy vector (i.e., a one-dimensional array) whose entry under index $j$ is the sum of all elements in the column $j$ of $M$.

(f)[1] Write a function `np_sum_rows(M)` to create a a numpy vector (i.e., a one-dimensional array) whose entry under index $i$ is the sum of all elements in the row $i$ of $M$.

```python
import matplotlib.pyplot as plt
%matplotlib inline
import numpy as np

#1(a)

def create_matrix(m,n):

    
    
    
print(create_matrix(2,3))  # should return [[1, 2, 3], [4, 5, 6]]
print(create_matrix(1,7))  # should return [[1, 2, 3, 4, 5, 6, 7]]
print(create_matrix(3,5))  # should return [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15]]
print(create_matrix(5,2))  # should return [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]
print(create_matrix(7,1))  # should return [[1], [2], [3], [4], [5], [6], [7]]



#1(b)

def sum_columns(M):

    
    
    
M=create_matrix(2,3)
print(sum_columns(M))  # should print [5, 7, 9]
print(sum_columns(create_matrix(1,7)))  # should print [1, 2, 3, 4, 5, 6, 7]
print(sum_columns(create_matrix(3,5)))  # should print [18, 21, 24, 27, 30]


#1(c)

def sum_rows(M):

    
    
    
print(sum_rows(create_matrix(2,3))) # should print [6, 15]
print(sum_rows(create_matrix(1,7)))  # should print [28]
print(sum_rows(create_matrix(3,5)))  # should print [15, 40, 65]


#1(d)

def np_create_matrix(m,n):

    
    
print(np_create_matrix(2,3),'\n')  # compare all with 1(a)
print(np_create_matrix(1,7),'\n')   
print(np_create_matrix(3,5),'\n')   
print(np_create_matrix(5,2),'\n')   
print(np_create_matrix(7,1))   


#1(e)

def np_sum_columns(M):  

    
    
    
M=np_create_matrix(2,3) 
print(np_sum_columns(M))  # to check your answer, compare with the next line
print(np.sum(M,axis=0),'\n') 

M=np_create_matrix(1,7) 
print(np_sum_columns(M))  # to check your answer, compare with the next line
print(np.sum(M,axis=0),'\n') 

M=np_create_matrix(3,5) 
print(np_sum_columns(M))  # to check your answer, compare with the next line
print(np.sum(M,axis=0)) 



#1(f)

def np_sum_rows(M):  

    
    
    
M=np_create_matrix(2,3)
print(np_sum_rows(M))  # to check your answer, compare with the next line
print(np.sum(M,axis=1),'\n') 

M=np_create_matrix(1,7)
print(np_sum_rows(M))  # to check your answer, compare with the next line
print(np.sum(M,axis=1),'\n') 

M=np_create_matrix(3,5)
print(np_sum_rows(M))  # to check your answer, compare with the next line
print(np.sum(M,axis=1)) 
```

## Solution 1

::: tabs

@tab Answer 1

这个题目要求我们使用Python完成几个与矩阵操作相关的函数。我将按照你给出的框架，逐步填充每个函数的实现。

1. (a) 创建矩阵 `create_matrix(m, n)`

```python
def create_matrix(m, n):
    return [[i * n + j + 1 for j in range(n)] for i in range(m)]
```

2. (b) 计算每列之和 `sum_columns(M)`

```python
def sum_columns(M):
    return [sum(M[i][j] for i in range(len(M))) for j in range(len(M[0]))]
```

3. (c) 计算每行之和 `sum_rows(M)`

```python
def sum_rows(M):
    return [sum(row) for row in M]
```

4. (d) 使用 numpy 创建矩阵 `np_create_matrix(m, n)`

```python
def np_create_matrix(m, n):
    return np.arange(1, m * n + 1).reshape(m, n)
```

5. (e) 使用 numpy 计算每列之和 `np_sum_columns(M)`

```python
def np_sum_columns(M):
    return np.sum(M, axis=0)
```

6. (f) 使用 numpy 计算每行之和 `np_sum_rows(M)`

```python
def np_sum_rows(M):
    return np.sum(M, axis=1)
```

以上是每个函数的具体实现。这些函数分别实现了使用普通列表和 numpy 数组的方式来创建矩阵，并计算它们的行和列之和。在运行这些函数之前，请确保已经导入了numpy 库。

@tab Answer2

1. (a) 创建矩阵 `create_matrix(m, n)`

```python
def create_matrix(m, n):
    # 创建一个m行n列的矩阵
    # 使用列表推导式，对于矩阵的每一行i和每一列j
    # 计算出矩阵中的元素值为 i * n + j + 1
    # 这保证了元素从1开始，按行顺序递增
    return [[i * n + j + 1 for j in range(n)] for i in range(m)]
```

2. (b) 计算每列之和 `sum_columns(M)`

```python
def sum_columns(M):
    # 计算矩阵每一列的和
    # 对于每一列j，使用一个生成器表达式来计算所有行i中该列元素的和
    # len(M[0]) 给出列的数量
    return [sum(M[i][j] for i in range(len(M))) for j in range(len(M[0]))]
```

3. (c) 计算每行之和 `sum_rows(M)`

```python
def sum_rows(M):
    # 计算矩阵每一行的和
    # 使用列表推导式，对于每一行，使用sum函数计算该行的所有元素之和
    return [sum(row) for row in M]
```

4. (d) 使用 numpy 创建矩阵 `np_create_matrix(m, n)`

```python
def np_create_matrix(m, n):
    # 使用numpy创建一个m行n列的矩阵
    # np.arange(1, m * n + 1) 创建一个从1到m*n的连续数组
    # .reshape(m, n) 将这个数组重新整形成m行n列的矩阵
    return np.arange(1, m * n + 1).reshape(m, n)
```

5. (e) 使用numpy计算每列之和 `np_sum_columns(M)`

```python
def np_sum_columns(M):
    # 使用numpy计算矩阵每一列的和
    # np.sum(M, axis=0) 沿着行方向（axis=0）计算和，得到每一列的和
    return np.sum(M, axis=0)
```

6. (f) 使用numpy计算每行之和 `np_sum_rows(M)`

```python
def np_sum_rows(M):
    # 使用numpy计算矩阵每一行的和
    # np.sum(M, axis=1) 沿着列方向（axis=1）计算和，得到每一行的和
    return np.sum(M, axis=1)
```

这些注释详细解释了每个函数的工作原理，包括它们如何创建矩阵以及如何计算行和列的和。

:::









## Question 2

2. In this question we explore numeric approximations of the integral of the function

$$
f(x) = \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{1}{2} \left(\frac{x-\mu}{(\sigma)^2}\right)^2}
$$

over the interval $[a, b] = [1, 3]$. In your calculations, use $\mu = 1$ and $\sigma = 2$.

Complete the code in the template to define `f(x)` and see its graph.

(a)[1] Write a function `left_sum(f,a,b,n)` to approximate the integral of `f(x)` over `[a, b]` using the left Riemann sum (i.e., using the left endpoint approximation) with n rectangles. To approximate the given integral, use $n = 100$.

(b)[1] Write a function `midpoint_sum(f,a,b,n)` to approximate the integral of `f(x)` over $[a, b]$ using the Midpoint sum (Midpoint rule) with n rectangles. To approximate the given integral, use $n = 100$.

(c)[1] Write a function `trapezoidal_rule(f,a,b,n)` to approximate the integral of `f(x)` over $[a, b]$ using the Trapezoidal rule. To approximate the given integral, use $n = 100$.

(d)[1] Write a function `simpson_rule(f,a,b,n)` to approximate the integral of `f(x)` over $[a,b]$ using the Simpson’s rule. To approximate the given integral, use $n = 100$.

```python
def f(x):
    return       # enter the function here then run the cell
        
a=-6
b=8
n=500
x=np.linspace(a,b,n+1)

plt.title("Graph of f(x)")
plt.xlabel("x")
plt.ylabel("y")
plt.plot(x,f(x),color='blue') 
plt.grid()
plt.show()


#2(a) left sum

def left_sum(f,a,b,n):

    
    
    
    
    
print(left_sum(f,1,3,100))  # should be 0.34212758741852883 
                            # possibly different in the last few decimals
    
    
    
#2(b) midpoint sum

def midpoint_sum(f,a,b,n):

    
    
    
print(midpoint_sum(f,1,3,100))  # should be 0.34134272963911727  
                                # possibly different in the last few decimals
    
    
    
#2(c) trapezoidal rule

def trapezoidal_rule(f,a,b,n):

    
    
    
print(trapezoidal_rule(f,1,3,100))  # should be 0.3413427296391172 
                                # possibly different in the last few decimals

    

#2(d) Simpson's rule

def simpson_rule(f,a,b,n):

    
    
    
print(simpson_rule(f,1,3,100))  # should be 0.34134474609542953 
                                # possibly different in the last few decimals
```

## Solution 2

::: tabs

@tab Answer1

```python
import numpy as np
import matplotlib.pyplot as plt

# 定义函数 f(x)
def f(x):
    mu = 1
    sigma = 2
    return (1 / (sigma * np.sqrt(2 * np.pi))) * np.exp(-0.5 * ((x - mu) / sigma) ** 2)

a = 1
b = 3
n = 500
x = np.linspace(a, b, n+1)

# 绘制 f(x) 的图像
plt.title("Graph of f(x)")
plt.xlabel("x")
plt.ylabel("y")
plt.plot(x, f(x), color='blue') 
plt.grid()
plt.show()

# 2(a) 左矩形法
def left_sum(f, a, b, n):
    h = (b - a) / n
    total = sum(f(a + i * h) for i in range(n))
    return h * total

print(left_sum(f, 1, 3, 100))

# 2(b) 中点法
def midpoint_sum(f, a, b, n):
    h = (b - a) / n
    total = sum(f(a + (i + 0.5) * h) for i in range(n))
    return h * total

print(midpoint_sum(f, 1, 3, 100))

# 2(c) 梯形法
def trapezoidal_rule(f, a, b, n):
    h = (b - a) / n
    total = 0.5 * (f(a) + f(b)) + sum(f(a + i * h) for i in range(1, n))
    return h * total

print(trapezoidal_rule(f, 1, 3, 100))

# 2(d) 辛普森法
def simpson_rule(f, a, b, n):
    h = (b - a) / n
    total = f(a) + f(b) + 2 * sum(f(a + i * h) for i in range(2, n, 2))
    total += 4 * sum(f(a + i * h) for i in range(1, n, 2))
    return h / 3 * total

print(simpson_rule(f, 1, 3, 100))

```

@tab Answer2

这道题目要求我们使用不同的数值方法来估算函数 $f(x)$ 在区间 $[1, 3]$ 上的积分，其中函数 $f(x)$ 定义为：

$$
f(x) = \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{1}{2} \left(\frac{x-\mu}{\sigma}\right)^2}
$$

并且题目中给定了 $\mu = 1$ 和 $\sigma = 2$。我们需要完成 Python 代码模板中的函数 `f(x)` 并绘制其图形，然后编写四个函数来估算这个积分，分别使用左矩形法、中点矩形法、梯形法和辛普森法，每种方法都用 $n = 100$ 来近似计算。

首先，我们需要定义函数 `f(x)` 并画出其图形。然后，我们依次实现四种积分的近似方法。

(a) 左矩形法（Left Riemann Sum）

(b) 中点矩形法（Midpoint Rule）

(c) 梯形法（Trapezoidal Rule）

(d) 辛普森法（Simpson's Rule）

1. 完成 `f(x)` 函数并绘制图形

```python
import numpy as np
import matplotlib.pyplot as plt

def f(x):
    mu = 1
    sigma = 2
    return (1 / (sigma * np.sqrt(2 * np.pi))) * np.exp(-0.5 * ((x - mu) / sigma) ** 2)
        
a = -6
b = 8
n = 500
x = np.linspace(a, b, n + 1)

plt.title("Graph of f(x)")
plt.xlabel("x")
plt.ylabel("y")
plt.plot(x, f(x), color='blue') 
plt.grid()
plt.show()
```

2. 实现近似积分的方法

**(a) 左矩形法**

```python
def left_sum(f, a, b, n):
    h = (b - a) / n
    total = sum(f(a + i * h) for i in range(n))
    return total * h

print(left_sum(f, 1, 3, 100))
```

**(b) 中点矩形法**

```python
def midpoint_sum(f, a, b, n):
    h = (b - a) / n
    total = sum(f(a + i * h + h/2) for i in range(n))
    return total * h

print(midpoint_sum(f, 1, 3, 100))
```

**(c) 梯形法**

```python
def trapezoidal_rule(f, a, b, n):
    h = (b - a) / n
    total = 0.5 * f(a) + 0.5 * f(b) + sum(f(a + i * h) for i in range(1, n))
    return total * h

print(trapezoidal_rule(f, 1, 3, 100))
```

**(d) 辛普森法**

```python
def simpson_rule(f, a, b, n):
    h = (b - a) / n
    total = f(a) + f(b)
    for i in range(1, n, 2):
        total += 4 * f(a + i * h)
    for i in range(2, n-1, 2):
        total += 2 * f(a + i * h)
    return total * h / 3

print(simpson_rule(f, 1, 3, 100))
```

这些代码片段实现了题目要求的四种数值积分方法，并用 $n = 100$ 来近似计算函数 $f(x)$ 在区间 $[1, 3]$ 上的积分。每个方法的输出结果可能会在最后几个小数位上有所不同。

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
