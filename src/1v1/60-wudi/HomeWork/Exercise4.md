---
title: Exercise 4 LSE Home MA407
icon: python
date: 2023-10-24 10:59:38
author: AI悦创
isOriginal: true
category: 
    - python 1v1
    - 数据结构一对一
    - 留学生辅导
    - 留学生作业辅导
tag:
    - 伦敦政经
    - LSE Home
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

Please submit the solutions to these questions via Gradescope in a PDF file.

## Exercise 4.1

(a)What is the running time (in asymptotic notation) of the **Quicksort** version we saw in the lecture for the following input sequences? Explain why.
$$
A_n =1,2,...,n−1,n
\\
B_n = n,n−1,...,2,1
$$
(b)Devise a different rule to choose the **pivot**, than the one we used in the lectures, so that the resulting Quicksort only needs $O(nlogn)$ many steps for the sorted sequence $A_n$.

Is there any pivot rule such that Quicksort needs $O(n log n)$ (that is, an asymptoti- cally slower function of n than n log n) steps for $A_n$?

(c)Let x be a list with distinct intergers and with length n. Assume the value v is stored as element `x[i]`. This value is a median of x if, after sorting x, the value v can be found in the element with index $⌊\frac{n−1}{2}⌋$ of the array. Describe (in pseudo-code or words) an algorithm for determining the index i of a median `x[i]` of x (without changing the entries of x or copying the values of x to a different list). What is the running time of your algorithm?

## Solution 4.1

**(a)** 
- 对于$A_n = 1,2,...,n−1,n$，如果每次都选择第一个元素作为基准，那么我们每次都会把数组分成大小为 1 和大小为 $n-1$ 的两个子数组。这将导致Quicksort 具有 $O(n^2)$ 的时间复杂度。
  
- 对于$B_n = n,n-1,...,2,1$，同样的，如果我们选择第一个元素作为基准，那么 Quicksort 的时间复杂度也是 $O(n^2)$。

原因是选择第一个元素作为基准并不能均匀地将数组划分成两个子数组，导致递归深度很大。（就是递归过多）

**(b)** 

为了使排序的时间复杂度为$O(nlogn)$，可以选择数组的中位数作为基准。对于已经排序的序列$A_n$，如果我们每次选择中位数作为基准，我们能够将数组均匀地分成两个子数组，从而获得$O(nlogn)$的时间复杂度。

对于第二个问题，没有选择基准的方法可以使 Quicksort 的时间复杂度变得比$O(n log n)$更差，因为$O(n log n)$已经是Quicksort在平均情况下的最佳性能。

**(c)**
为了找到中位数的索引，我们可以使用选择算法（例如 Quickselect ）来找到第$⌊\frac{n−1}{2}⌋$小的元素。这不会修改原始数组或复制其值。

运行时间是$O(n)$。

```python
QuickSelect(x, ⌊(n-1)/2⌋)
```





## Exercise 4.2

Suppose your are given a list A of even length, `len(A) = n`, and you know that $\frac{n}{2}$ of the entries are equal to x, and the other $\frac{n}{2}$ entries are equal to $y \neq x$. You want to find x and y.

A simple deterministic algorithm (not relying on randomisation) for this problem that is guaranteed to find x and y proceeds as follows. First it sets $x = A[0]$. It then goes through the elements at positions $i = 2,...,n−1$. As soon as $A[i] \neq x$, the algorithm sets $y = A[i]$ and outputs x and y.

(a) Implement this algorithm in Python, and analyse its running time using big $\Theta-notation$.

Now consider the following randomised algorithm for this problem. Repeatedly draw a random entry (with replacement, so you may draw the same entry more than once) until you have seen two distinct numbers for the first time.

(b)  Implement this algorithm in Python.

(c)  What is the expected number of random draws performed by this algorithm?

(d)  Use your answer to (c) to analyse the expected running time of this algorithm using $big-O$ notation.

(e)  Is this a Monte Carlo or a Las Vegas algorithm?

Hint: For part (c) it may be useful to consider the random variable Y which counts the number of random draws, and compute the probability that $Pr[Y > k]$.

## Solution 4.2

**(a)** 实现并分析这个算法：

```python
def find_x_and_y(A):
    x = A[0]
    for i in range(2, len(A)):
        if A[i] != x:
            y = A[i]
            return x, y
    raise ValueError("List does not seem to have two distinct values.")
```

此算法的时间复杂度是$\Theta(n)$，因为在最坏的情况下，它会遍历整个列表。

**(b)** 实现随机化算法：

```python
import random

def randomised_find_x_and_y(A):
    seen = set()
    while len(seen) < 2:
        seen.add(random.choice(A))
    return tuple(seen)
```

**(c)** 设随机变量$Y$表示随机抽取的次数。要找到两个不同的数，首先需要考虑第一次抽取后的情况：无论第一次抽到的是 $x$ 还是 $y$，第二次抽到不同的数的概率都是$0.5$。所以$Pr[Y = 2] = 0.5$。

如果第二次仍然抽到相同的数，那么$Pr[Y > 2] = 0.5$，然后第三次抽到不同的数的概率还是$0.5$，所以$Pr[Y = 3 | Y > 2] = 0.5$。这个逻辑可以持续下去，于是我们可以得到期望的抽取次数为：$E[Y] = 2 \times 0.5 + 3 \times 0.5^2 + 4 \times 0.5^3 + \dots = 3.$ 即期望抽取 3 次。

**(d)** 基于上述分析，此随机化算法的期望运行时间是$O(1)$，因为期望只需要3次随机抽取。

**(e)** 这是一个Monte Carlo算法，因为它基于随机选择，每次运行都有一个固定的概率得到正确的结果。不同于Las Vegas算法，后者总是在随机的时间内返回正确的结果。





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
