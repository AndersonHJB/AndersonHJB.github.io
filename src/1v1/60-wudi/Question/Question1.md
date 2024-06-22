---
title: Question 1 时间复杂度数学计算
icon: python
date: 2023-10-13 12:22:17
author: AI悦创
isOriginal: true
category: 
    - 1v1
    - python 1v1
    - MA407
    - 伦敦政经
    - LSE Home
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

::: tabs

@tab EN

**Assume for now:** Each line $\ell$  of code takes constant time $c_\ell$  > 0 per execution.

```python
for i in range(1, len(A)):                    c1
    current = A[i]                            c2
    j = i−1                                   c3
    while j >= 0 and A[j] > current:          c4
        A[j+1] = A[j]                         c5
        j −= 1                                c6
    A[j+1] = current                          c7
```

Let $t_i$ := number of times the while loop gets executed for $i$.

**Runningtime:**

$c_1 \cdot n + (c_2 + c_3) \cdot (n - 1) + c_4 \cdot \sum_{i=1}^{n-1} t_i + (c_5 + c_6) \cdot \sum_{i=1}^{n-1} (t_i - 1) + c_7 \cdot (n - 1)$

**In the worst case:** Sorted in reverse order, need to compare $A[i]$ with $A[i−1],...,A[0]$ so $t_i =i+1$.

Using this and that, we have: $\sum_{t=1}^{k} t = \frac{k(k+1)}{2}$ we have:

$$\large \sum_{i=1}^{n-1} t_i = \sum_{i=1}^{n-1} (i + 1) = \frac{n(n + 1)}{2} - 1 = \frac{n^2}{2} + \frac{n}{2} - 1$$

$$\large \sum_{i=1}^{n-1} (t_i - 1) = \sum_{i=1}^{n-1} i = \frac{(n - 1)n}{2} = \frac{n^2}{2} - \frac{n}{2}$$

And, hence, by our formula for the running time,

$T(n) = c_1 \cdot n + (c_2 + c_3 + c_7) \cdot (n - 1) + c_4 \cdot \left( \frac{n^2}{2} + \frac{n}{2} - 1 \right) + (c_5 + c_6) \cdot \left( \frac{n^2}{2} - \frac{n}{2} \right)$

@tab ZH

**假设：** 每行代码 $\ell$ 的执行都需要一个大于 0 的常数时间 $c_\ell$。

```python
for i in range(1, len(A)):                    c1
    current = A[i]                            c2
    j = i−1                                   c3
    while j >= 0 and A[j] > current:          c4
        A[j+1] = A[j]                         c5
        j −= 1                                c6
    A[j+1] = current                          c7
```

令 $t_i$ 表示当 $i$ 时，while 循环的执行次数。

**运行时间：**

$c_1 \cdot n + (c_2 + c_3) \cdot (n - 1) + c_4 \cdot \sum_{i=1}^{n-1} t_i + (c_5 + c_6) \cdot \sum_{i=1}^{n-1} (t_i - 1) + c_7 \cdot (n - 1)$

**在最坏的情况下：** 如果是逆序排列，需要将 $A[i]$ 与 $A[i−1],...,A[0]$ 进行比较，所以 $t_i =i+1$。

使用上述知识，我们知道：$\sum_{t=1}^{k} t = \frac{k(k+1)}{2}$，所以：

$$\large \sum_{i=1}^{n-1} t_i = \sum_{i=1}^{n-1} (i + 1) = \frac{n(n + 1)}{2} - 1 = \frac{n^2}{2} + \frac{n}{2} - 1$$

$$\large \sum_{i=1}^{n-1} (t_i - 1) = \sum_{i=1}^{n-1} i = \frac{(n - 1)n}{2} = \frac{n^2}{2} - \frac{n}{2}$$

因此，根据我们的运行时间公式，得：

$T(n) = c_1 \cdot n + (c_2 + c_3 + c_7) \cdot (n - 1) + c_4 \cdot \left( \frac{n^2}{2} + \frac{n}{2} - 1 \right) + (c_5 + c_6) \cdot \left( \frac{n^2}{2} - \frac{n}{2} \right)$

@tab Question

```python
def process(A):
    for i in range(len(A) - 1):
        m = i
        for j in range(i + 1, len(A)):
            if A[m] < A[j]:
                m = j
        A[i], A[m] = A[m], A[i]
```

@tab Answer

这是选择排序（Selection Sort）的一个实现，该算法的工作原理是通过在数组中寻找最大（或最小）的元素，并将其放到正确的位置。

让我们对其进行时间复杂度的分析。

1. 对于外层循环：
   ```python
   for i in range(len(A) - 1):
   ```
   它执行了 `len(A) - 1` 次。假设数组 `A` 的长度为 `n`，那么外层循环执行了 `n - 1` 次。

2. 对于内层循环：
   ```python
   for j in range(i + 1, len(A)):
   ```
   当 `i=0` 时，内层循环执行 `n-1` 次；当 `i=1` 时，执行 `n-2` 次；依此类推，直到 `i=n-2` 时，执行 1 次。

   内层循环的总执行次数为：
   
   $\sum_{i=1}^{n-1} i = \frac{(n-1)(n)}{2} = \frac{n^2}{2} - \frac{n}{2}$
   
3. 在内层循环中的比较和赋值操作：
   ```python
   if A[m] < A[j]:
       m = j
   ```
   因为这些操作在每次内层循环迭代中都执行，所以它们的总执行次数也是:
   
   $\frac{n^2}{2} - \frac{n}{2}$
   
4. 最后的交换操作：
   ```python
   A[i], A[m] = A[m], A[i]
   ```
   它在每次外层循环迭代中都执行一次，因此总执行次数为 `n - 1`。

将所有这些组合起来，代码的运行时为：

$T(n) = (n - 1) + \left( \frac{n^2}{2} - \frac{n}{2} \right)$

这可以简化为:

$T(n) = \frac{n^2}{2} + \frac{n}{2} - 1$

这意味着选择排序的时间复杂度为 $O(n^2)$。

@tab **分摊分析**（Amortized Analysis）

假设每行代码执行所需的时间为常数。

**Assume for now:** Each line of code takes constant time $c_\ell$ > 0 per execution.

```python
def process(A):
    for i in range(len(A) - 1):                 # c1
        m = i                                   # c2
        for j in range(i + 1, len(A)):          # c3
            if A[m] < A[j]:                     # c4
                m = j                           # c5
        A[i], A[m] = A[m], A[i]                 # c6
```

1. 外层循环 `for i in range(len(A) - 1):` 执行了 $n-1$ 次。因此，它对应的运行时间为 $c_1 \cdot (n-1)$。

2. 在每次外层循环的迭代中，都会执行 `m = i` 。因此，这行代码的总执行次数为 $c_2 \cdot (n-1)$。

3. 对于内层循环 `for j in range(i + 1, len(A)):` ，当 `i=0` 时，执行 $n-1$ 次；当 `i=1` 时，执行 $n-2$ 次，以此类推。因此，这行代码的总执行次数为: $c_3 \cdot \sum_{i=1}^{n-1} i = c_3 \cdot \frac{(n-1)n}{2}$

4. 在每次内层循环的迭代中，都会进行 `if A[m] < A[j]:` 的检查，因此，其总执行次数为: $c_4 \cdot \frac{n^2}{2} - \frac{n}{2}$

5. `m = j` 只在 `if` 条件为真时执行。在最坏情况下（每次都找到一个更大的数），它执行的次数与内层循环相同，即: $c_5 \cdot \frac{n^2}{2} - \frac{n}{2}$

6. 在每次外层循环迭代中，都会执行 `A[i], A[m] = A[m], A[i]` 。因此，这行代码的总执行次数为 $c_6 \cdot (n-1)$。

将这些结果组合起来，我们得到：$T(n) = c_1(n-1) + c_2(n-1) + c_3\left(\frac{n^2}{2} - \frac{n}{2}\right) + c_4\left(\frac{n^2}{2} - \frac{n}{2}\right) + c_5\left(\frac{n^2}{2} - \frac{n}{2}\right) + c_6(n-1)$

这个公式表示了选择排序的时间复杂度，它是一个二次方函数，所以选择排序的时间复杂度是 $O(n^2)$。

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
