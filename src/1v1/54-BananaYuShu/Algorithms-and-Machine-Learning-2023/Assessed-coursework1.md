---
title: Assessed coursework 1 for Algorithms and Machine Learning (MATH20017), Autumn 2023
date: 2023-10-12 20:54:15
author: AI悦创
isOriginal: true
category: 
    - 英国-布里斯托尔
tag:
    - 英国-布里斯托尔
icon: MathOperations
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

## Introduction

This document contains the questions for Part 1 of your assessed coursework for the unit Algorithms and Machine Learning (MATH20017). The marks for this coursework will count 10% towards your final grade.

Please contact henry.reeve@bristol.ac.uk with any questions regarding this document. Whilst I am unable to provide solutions in advance of all work being handed in, I can provide clarification.

The contents of this document should **not** be distributed without permission.

There are 5 sections to this coursework and you are encouraged to attempt to complete all sections.

## Handing in your coursework

How you present your coursework is important. You should complete your coursework using either Google Colab, a Jupyter notebook, or an Rmarkdown. Whichever approach you take you must submit both (1) the notebook itself (typically either a .ipynb file or a .rmd file) and (2) an HTML file in which all of the blocks of code have been run.

The suggested approach is as follows:

1. Complete your notebook in Google Colab.
2. Use Run -> Run all to run all code blocks.
3. Check your notebook looks as expected.
4. Use File -> Download -> Download as .ipynb
5. Open a new instance of Google Colab (fourth from top).
6. Click the Upload icon (the first icon from the left).
7. Upload your previously downloaded .ipynb file.
8. Click the Refresh icon (the second from the left).
9. In your new colab instance write in the following piece of code. You should replace `your_python_notebook_file_path` with the path of your coursework notebook. This can be found by clicking on the three dots to the right of your coursework notebook’s icon and selecting Copy path, then pasting in the path.

```python
!jupyter nbconvert --to HTML your_python_notebook_file_path
```

10. Run the command.
11. Again, click the Refresh icon (the second from the left).

12. An HTML version of your file should now appear. Click the three dots to the right of this file and select Download to download the HTML file.

13. Open the HTML file and carefully check that all questions and answers are visible and appear as expected. 14. Upload your .HTML and your `.ipynb` files to the submission point within Blackboard.

Important: Ensure that you use the correct format to submit your report as failure to do so can lead to a substantial loss of marks.

## Section A (20 marks)

In this question you will implement two algorithms for searching for a specific value within an array.

Throughout this question you should use Python lists to represent arrays.

**(Q1)** Implement the linear array search algorithm in Python. That is, create a function called `linear_search` in Python which takes as input a list of integers X and a target integer z. If z is contained within the list then your function should output an index at which the target appears. Otherwise your function should return −1.

To test your `linear_search` function first copy the following code.

```python
import numpy as np  # load the numpy library

def search_function_test(search_function, random_seed=2023, array_size=30, max_int=100, num_tests=50):
    np.random.seed(random_seed)  # set the random seed
    output = []
    for i in range(num_tests):
        X = sorted(list(set(np.random.randint(max_int, size=(array_size)))))
        z = np.random.randint(max_int)
        j = search_function(X, z)
        if j != -1:
            output.append(j)
    return output
```

Next apply the test function `search_function_test` to linear_search as follow:

```python
print(search_function_test(linear_search))
```

**(Q2)** Implement the binary search algorithm in Python. You should create a function called `binary_search` which takes as input an ascending sorted list of integers X and a target integer z. If z is contained within the list then your function should output an index at which the target appears. Otherwise your function should return −1. Use the following code to test your function.

```python
print(search_function_test(binary_search))
```

### Solution A

#### A.1 什么是线性搜索算法🔍

线性搜索算法（Linear Search Algorithm），也叫顺序搜索算法，是一种非常基础的搜索算法。其工作原理很简单：从列表的第一个元素开始，按顺序检查每一个元素，直到找到我们想要的元素为止。

以下是线性搜索算法的基本步骤：

1. 从列表的第一个元素开始。
2. 逐个比较每个元素与我们要找的目标元素。
3. 如果当前元素与目标元素匹配，则返回当前元素的索引。
4. 如果遍历了整个列表都没有找到目标元素，则返回 -1 或其他标志，表示目标元素不在列表中。

这是线性搜索算法的 Python 实现：

```python
def linear_search(arr, x):
    for i in range(len(arr)):
        if arr[i] == x:
            return i  # 返回目标元素的索引
    return -1  # 如果没有找到，则返回-1
```

线性搜索算法的时间复杂度是 $O(n)$，其中 n 是列表的长度。这意味着在最坏的情况下，算法可能需要检查列表中的每一个元素。因此，对于非常大的列表，线性搜索可能不是最高效的搜索方法。但对于小列表或无法排序的数据，它是简单且实用的方法。

#### A.2 Q1 Solution

首先，我们来实现线性搜索算法：

```python
def linear_search(X, z):
    for i in range(len(X)):
        if X[i] == z:
            return i
    return -1
```

然后，你可以使用上面给出的测试函数 `search_function_test` 来测试 `linear_search` 函数：

```python
print(search_function_test(linear_search))
```

下面是使用 while 来实现的：

```python
def linear_search(X, z):
    i = 0
    length = len(X)
    while i < length:
        if X[i] == z:
            return i
        i += 1
    return -1
```



#### A.2 Q2 Solution

接下来，我们来实现二分搜索算法。注意，二分搜索只对已排序的列表有效，所以我们假设输入的列表是按升序排序的。

```python
def binary_search(X, z):
    left, right = 0, len(X) - 1
    
    while left <= right:
        mid = (left + right) // 2
        if X[mid] == z:
            return mid
        elif X[mid] < z:
            left = mid + 1
        else:
            right = mid - 1
            
    return -1
```

你可以使用同样的 `search_function_test` 函数来测试你的 `binary_search` 函数：

```python
print(search_function_test(binary_search))
```

::: warning

注意：这里的测试函数 `search_function_test` 使用了 `numpy` 来生成测试数据，而且为了确保测试的准确性，它生成的 `X` 列表是已排序的唯一整数列表，这对于二分搜索来说是很重要的。

:::



## Section B (20 marks)

The aim of this question is to improve your understanding of `Bachmann–Landau` notation. To include your answers for this question you have two options:

1. Include your answers in the Python notebook directly via [Tex](https://www.overleaf.com/learn/latex/Free_online_introduction_to_LaTeX_(part_1));
2. Write your answers via pen and paper and include a photo within the final document.

In either case, please ensure that the answers are clearly readable.

(Q1) Suppose that $f : \mathbb{N} \rightarrow [0, \infty)$  is a function. Show that if  $f(n) = \Omega(\log_2(n))$  and $a > 1$  then $f(n) = \Omega(\log_a(n))$.

(Q2) Suppose that  $f : \mathbb{N} \rightarrow [0, \infty)$,  $g : \mathbb{N} \rightarrow [0, \infty)$ and  $h : \mathbb{N} \rightarrow [0, \infty)$ are functions. Show that if  $f(n) \in O(g(n))$ and  $g(n) \in O(h(n))$ then  $f(n) \in O(h(n))$.

(Q3) Suppose that $f : \mathbb{N} \to (0, \infty)$ is a strictly positive function. Show that there exists at least one function $g : \mathbb{N} \to (0, \infty)$ with the property that $f(n) = O(g(n))$ holds but $g(n) = O(f(n))$ does not hold.

(Q4) Suppose that we define a function $F: \mathbb{N} \cup \{0\} \rightarrow [0, \infty)$ recursively as follows: $F(0) = 1$, $F(1) = 1$ and for  $n > 1$ , $F(n) = 4F(n - 1) + 5F(n - 2)$ . Can you find a number  $\alpha \in (0, \infty)$  with the property that $F(n) \in \Theta(\alpha^n)$ ? Justify your claim.

### B.1 Bachmann–Landau

`Bachmann–Landau` 记法（通常简称为大 O 记法，但实际上包括大 $O$、小 $o$、大 $\Omega$、小 $\omega$ 和大 $\Theta$ 五种）是一种表示算法复杂度和函数增长率的记法。这里我们列举其中一些主要定义：

1. **大 O 记法 ($O$) (上界)**: 

   如果存在常数 $c > 0$ 和 $n_0$ 使得对于所有 $n > n_0$，都满足 $0 \leq f(n) \leq c \cdot g(n)$，那么我们说 $f(n) = O(g(n))$.

2. **大 $Ω$ 记法 ($\Omega$) (下界)**: 

   如果存在常数 $c > 0$ 和 $n_0$ 使得对于所有 $n > n_0$，都满足 $0 \leq c \cdot g(n) \leq f(n)$，那么我们说 $f(n) = \Omega(g(n))$.

3. **大 $Θ$ 记法 ($\Theta$) (紧确界)**: 

   如果 $f(n) = O(g(n))$ 并且 $f(n) = \Omega(g(n))$，那么我们说 $f(n) = \Theta(g(n))$.

4. **小o记法 \(o\) (严格的上界)**:  

   如果对于所有常数 $c > 0$，存在一个 $n_0$ 使得对于所有 $n > n_0$，都满足 $0 \leq f(n) < c \cdot g(n)$，那么我们说 $f(n) = o(g(n))$.

5. **小 $ω$ 记法 ($\omega$) (严格的下界)**:  

   如果对于所有常数 $c > 0$，存在一个 $n_0$ 使得对于所有 $n > n_0$，都满足 $0 \leq c \cdot g(n) < f(n)$，那么我们说 $f(n) = \omega(g(n))$.

这些记法主要被用于算法分析中，以描述算法的运行时间或空间使用量随着输入大小的变化。在您的问题中，我们主要关注的是大 $Ω$ 记法。

### B.2 $n^2$ 足够大，其它项目影响小

::: tip

当 n 变得非常大时，最高次项（这里是 $n^2$ ）的影响会远大于其他较低次的项。

:::

考虑一个多项式：$f(n) = a_k n^k + a_{k-1} n^{k-1} + ... + a_2 n^2 + a_1 n + a_0$
其中 $a_k, a_{k-1}, ..., a_2, a_1, a_0$ 是常数，并且 $a_k \neq 0$。

为了证明当 $n$ 变得非常大时，最高次项 $a_k n^k$ 的影响会远大于其他较低次的项，我们可以考虑下面的比值：

1. 与次高项的比值：$\frac{a_k n^k}{a_{k-1} n^{k-1}} = a_k n \cdot \frac{1}{a_{k-1}}$

  当 $n$ 趋向于无穷大时，这个比值也会趋向于无穷大（假设 $a_{k-1} \neq 0$）。

2. 与第三高项的比值：$\frac{a_k n^k}{a_{k-2} n^{k-2}} = a_k n^2 \cdot \frac{1}{a_{k-2}}$

  同样地，当 $n$ 趋向于无穷大时，这个比值会变得更大。

  ......

以此类推，我们可以看到与更低次项的比值会随着 $n$ 的增长而变得更大。

最后，对于常数项 $a_0$：$\frac{a_k n^k}{a_0}$

当 $n$ 趋向于无穷大时，这个比值显然是趋向于无穷大的。

从上面的分析我们可以看到，当 $n$ 变得非常大时，最高次项 $a_k n^k$ 相对于所有其他项的影响都会变得非常大。这意味着，对于足够大的 $n$，整个函数 $f(n)$ 的行为主要由最高次项 $a_k n^k$ 决定。

这就是为什么在分析算法的复杂性时，我们通常只关心最高次项：它是确定函数增长速度的主要因素。

### B.3 为什么某个形式选择 $c_i·n^2$

这个选择基于我们想证明的目标。

在这个情境下，我们想要证明 $f(n)$ 在大 O 意义上是 $n^2$ 的上界。为了达到这一点，我们会查看 $f(n)$ 中的每一项，并尝试将它们都限制在与 $n^2$ 相关的某个项的上界。

- **为什么我们选择形式为 $c_i \cdot n^2$ 的项呢？**

这是因为我们要确定 $f(n)$ 是否与 $n^2$ 有相同的增长率（或更小）。如果 $f(n)$ 的每一项都可以被形式为 $c_i \cdot n^2$ 的项所界定，并且这些界是有效的（即对于足够大的 $n$ 值都成立），那么我们可以得出结论说 $f(n) = O(n^2)$。

在这个特定的例子中：
1. $3n^2$ 已经是 $n^2$ 的形式，所以不需要更改。
2. 对于 $2n$，当 $n \geq 1$ 时，我们知道 $2n \leq 2n^2$，所以我们可以用 $2n^2$ 来界定它。
3. 对于常数 5，因为它是一个常数，所以当 $n \geq 1$ 时，它肯定小于任何形式为 $c \cdot n^2$ 的项，其中 $c \geq 5$。

总结来说，选择形式为 $c_i \cdot n^2$ 的项是为了确保 $f(n)$ 的每一项都被 $n^2$ 的某个倍数所界定，从而验证 $f(n) = O(n^2)$。

- **那么最高项是 n 的时候，是不是就可以直接找 $c_i·n$？**

如果一个函数的最高项是 $n$，当我们想要证明这个函数是 $O(n)$ 时，我们确实会尝试找一个形式为 $c_i \cdot n$ 的上界来界定每一项。

例如，考虑函数 $f(n) = 5n + 4\sqrt{n} + 3$:

1. 第一项 $5n$：已经是 $n$ 的形式，不需要更改。
2. 第二项 $4\sqrt{n}$：当 $n \geq 1$ 时，我们知道 $4\sqrt{n} \leq 4n$，所以我们可以用 $4n$ 来界定它。
3. 对于常数 3，因为它是一个常数，当 $n \geq 1$ 时，它肯定小于形式为 $c \cdot n$ 的任何项，其中 $c \geq 3$。

将这三个上界相加，我们得到：

$$f(n) \leq 5n + 4n + 3n = 12n$$

因此，我们可以说 $f(n) = O(n)$，其中 $c = 12$。

所以，当最高次项为 \(n\) 时，我们确实会找一个形式为 $c_i \cdot n$ 的上界。这个原理可以应用于任何最高次项。您的观察非常准确！

### B.4 大 O 法证明

给定两个函数 $f(n)$ 和 $g(n)$，当说 $f(n) = O(g(n))$ 时，其数学定义是存在两个正的，常数 $c$ 和 $n_0$ 使得对于所有 $n > n_0$，满足 $f(n) \leq c \cdot g(n)$。这里的 $c$ 和 $n_0$ 不是唯一的，只要满足上述条件即可。

为了更好地理解，我提供一个简单的例子：

考虑函数 $f(n) = 3n^2 + 2n + 5$ 和函数 $g(n) = n^2$.

我们希望证明 $f(n) = O(n^2)$，即 $f(n)$ 是 $n^2$ 的上界。

对于 $n \geq 1$，我们有:

$$f(n) = 3n^2 + 2n + 5 \leq 3n^2 + 2n^2 + 5n^2 = 10n^2$$

所以，我们可以取 $c = 10$ 和 $n_0 = 1$ 来证明 $f(n) \leq 10 \cdot n^2$。因此, $f(n) = O(n^2)$.

### B.5 大 $Ω$ 记法 ($\Omega$) (下界)

大 $Ω$ 记法是用于描述算法的下界复杂性的一种表示方法。具体来说，它给出了算法运行时间的一个下限。如果我们说一个算法的运行时间为 $Ω(f(n))$，那么这意味着无论多快，算法的运行时间不会低于 $f(n)$ 的某个常数倍，至少对于足够大的 $n$ 是这样的。

形式上，假设有函数 $g(n)$ 和 $f(n)$，如果存在某个常数 $c > 0$ 和某个值 $n_0$，使得对于所有 $n > n_0$，都有 $g(n) \geq c \times f(n)$，则我们可以说 $g(n) = Ω(f(n))$。

直观上，大 $Ω$ 记法为我们提供了一个下限，告诉我们函数的增长速度至少有多快。在算法分析中，使用大 $Ω$ 记法是为了确保算法不会比某个特定速度慢。

举个例子，假设我们有一个排序算法，其最坏情况下的时间复杂性为 $Ω(n \log n)$。这意味着不管其他情况下这个算法有多快，其运行时间在最坏的情况下至少与 $n \log n$ 成正比。这对于很多经典的比较排序算法（如归并排序和堆排序）来说都是真实的，因为它们的最坏情况时间复杂性确实是 $Ω(n \log n)$。

### B.6 分析验证

让我们通过一个具体的例子来理解和分析大 $Ω$ 记法。

**例子**：

假设我们有两个函数 $f(n) = n^2$  和 $g(n) = 2n^2 + 3n + 1$ 。

我们想验证 $g(n)$  是不是 $\Omega(f(n))$。

按照大 $\Omega$ 的定义，如果存在两个正数 $c$  和 $n_0$ ，使得对于所有的 $n > n_0$ ，都有：

$g(n) \geq c \times f(n)$

$\text{=>} 2n^2 + 3n + 1 \geq c \times n^2$

那么我们可以说 $g(n)$  是 $\Omega(f(n))$。

**分析**：

现在，我们尝试找到 $c$  和 $n_0$  的值：

$$2n^2 + 3n + 1 \geq c \times n^2$$

对于 $c = 1$ ，我们有：

$$2n^2 + 3n + 1 \geq n^2$$

将两边的 $n^2$ 相减，得到：

$$n^2 + 3n + 1 \geq 0$$

我们可以轻易地观察到，对于所有的正数 $n$，这个不等式都是成立的。因为 $n^2$、$3n$ 和 1 都是正的，所以他们的和也是正的。

~~**对于所有的正数  $n$  都是真的（因为 $2n^2$  是大于 $n^2$  的，而 $3n + 1$  只会使其增大）。**~~

因此，我们可以选择 $c = 1$  和 $n_0 = 0$ 。这样，对于所有 $n > 0$ ，都有 $g(n) \geq f(n)$ 。

**结论**：

根据上述分析，我们可以得出 $g(n)$ 是 $\Omega(n^2)$ 。$g(n) = 2n^2 + 3n + 1$  是 $Ω(n^2)$ ，其中 $c = 1$  和 $n_0 = 0$ 。

这样的验证和分析通常需要一些数学直觉和对函数的了解。上述方法为最常见的一种方法，但在复杂的情况下，可能需要更高级的数学工具和方法。

### B.7 Solution

#### Q1

(Q1) Suppose that $f : \mathbb{N} \rightarrow [0, \infty)$  is a function. Show that if  $f(n) = \Omega(\log_2(n))$  and $a > 1$  then $f(n) = \Omega(\log_a(n))$.

> (Q1) 假设 $f : \mathbb{N} \rightarrow [0, \infty)$ 是一个函数。证明如果 $f(n) = \Omega(\log_2(n))$ 且 $a > 1$，则 $f(n) = \Omega(\log_a(n))$。

**给定**:

1. $f(n) = \Omega(\log_2(n))$
2. $a > 1$

**要证明**:

$f(n) = \Omega(\log_a(n))$

首先，我们要理解一点关于对数的属性：对于任何正数 b, c, 和 x, 我们有 $\log_b(x) = \frac{\log_c(x)}{\log_c(b)}$

使用这个性质，我们可以表达 $\log_a(n)$  为 $\log_2(n)$  的形式：$\log_a(n) = \frac{\log_2(n)}{\log_2(a)}$

因为给定 $f(n) = \Omega(\log_2(n))$, 存在常数 $C$ 和 $n_0$ 使得对于所有 $n > n_0$, $f(n) \geq C \times \log_2(n)$

现在，我们要证明 $f(n)$ 也是 $Ω(\log_a(n))$. 使用我们之前的关系式，我们有：$f(n) \geq C \times \frac{\log_2(n)}{\log_2(a)}$

因为 $a > 1$ , 我们知道 $\log_2(a) > 0$ , 所以 $\frac{1}{\log_2(a)}$ 也是一个正的常数。我们可以令 $C' = C \times \frac{1}{\log_2(a)}$, 则有：$f(n) \geq C' \times \log_a(n)$

这意味着 $f(n) = \Omega(\log_a(n))$.

所以我们证明了，如果 $f(n) = \Omega(\log_2(n))$ 并且 $a > 1$, 那么 $f(n) = \Omega(\log_a(n))$.

---

让我们使用换底公式 $\log_b(x) = \frac{\log_c(x)}{\log_c(b)}$  来看几个具体的例子：

**例子 1**:

计算 $\log_{3}(81)$ 使用自然对数作为新的底数。

我们知道 $3^4 = 81$，所以 $\log_{3}(81) = 4$。

使用换底公式，我们有：$\log_{3}(81) = \frac{\ln(81)}{\ln(3)}$

使用计算器，我们可以得到 $\ln(81 \approx 4.394449$ 和 $\ln(3) \approx 1.098612$

除以这两个数，我们得到：

$\frac{\ln(81)}{\ln(3)} \approx 4$

**例子 2**:

计算 $\log_{5}(125)$ 使用以 10 为底的对数作为新的底数。

我们知道 $5^3 = 125$，所以 $\log_{5}(125) = 3$。

使用换底公式，我们有：

$\log_{5}(125) = \frac{\log_{10}(125)}{\log_{10}(5)}$

使用计算器，我们得到 $\log_{10}(125) \approx 2.096910$ 和 $\log_{10}(5) \approx 0.698970$

除以这两个数，我们得到：

$\frac{\log_{10}(125)}{\log_{10}(5)} \approx 3$

**例子 3**:

计算 $\log_{2}(8)$ 使用自然对数作为新的底数。

我们知道 $2^3 = 8$，所以 $\log_{2}(8) = 3$。

使用换底公式，我们得到：

$\log_{2}(8) = \frac{\ln(8)}{\ln(2)}$

使用计算器，$\ln(8) \approx 2.079442$ 和 $\ln(2) \approx 0.693147$

除以这两个数，我们得到：$\frac{\ln(8)}{\ln(2)} \approx 3$

---

(Q2) Suppose that  $f : \mathbb{N} \rightarrow [0, \infty)$,  $g : \mathbb{N} \rightarrow [0, \infty)$ and  $h : \mathbb{N} \rightarrow [0, \infty)$ are functions. Show that if  $f(n) \in O(g(n))$ and  $g(n) \in O(h(n))$ then  $f(n) \in O(h(n))$.

**题目分析**：

题目给出了三个函数：$f$, $g$, 和 $h$，它们都是定义在自然数集 $\mathbb{N}$ 上的非负实值函数。已知：

1. $f(n) \in O(g(n))$
2. $g(n) \in O(h(n))$

我们需要证明 $f(n) \in O(h(n))$

**证明**：

**步骤 1**：根据 $f(n) \in O(g(n))$ 的定义，存在一个正常数 $c_1$ 和 $n_1$，使得当 $n > n_1$ 时，有：

$f(n) \leq c_1 \times g(n)$ —— (式 1)

**步骤 2**：根据 $g(n) \in O(h(n))$ 的定义，存在一个正常数 $c_2$ 和 $n_2$，使得当 $n > n_2$ 时，有：

$g(n) \leq c_2 \times h(n)$ —— (式 2)

**步骤 3**：我们现在要结合式 1 和式 2 来得出 $f(n)$ 和 $h(n)$ 之间的关系。

对于任何 $n > \max(n_1, n_2)$ (我们取两个界限中的较大者)，式 1 和式 2 都成立。那么我们有：

$f(n) \leq c_1 \times g(n)$

$g(n) \leq c_2 \times h(n)$

将这两个不等式相乘，得到：

$f(n) \times g(n) \leq c_1c_2 \times g(n)h(n)$

由于 $f(n) \leq c_1 \times g(n)$，我们可以得到：

$f(n) \leq c_1c_2 \times h(n)$

这正是我们想要证明的结果，即存在一个常数 $c = c_1c_2$ 和 $n_0 = \max(n_1, n_2)$，使得当 $n > n_0$ 时，有 $f(n) \leq c \times h(n)$。所以 $f(n) \in O(h(n))$。

**结论**：

根据以上证明，如果 $f(n) \in O(g(n))$ 和 $g(n) \in O(h(n))$, 那么 $f(n) \in O(h(n))$。

---

(Q3) Suppose that $f : \mathbb{N} \to (0, \infty)$ is a strictly positive function. Show that there exists at least one function $g : \mathbb{N} \to (0, \infty)$ with the property that $f(n) = O(g(n))$ holds but $g(n) = O(f(n))$ does not hold.

这个题目要求我们证明存在至少一个函数 $g(n)$ ，使得 $f(n) = O(g(n))$ 成立，但 $g(n) = O(f(n))$  不成立。要解决这个问题，我们可以构建这样一个函数 $g$。

考虑 $g(n) = 2^{f(n)}$ 。我们将分两步证明 $f(n) = O(g(n))$  和 $g(n)$  不是 $O(f(n))$。

**1. 证明 $f(n) = O(g(n))$ :**

我们需要找到常数 $c$  和 $n_0$  使得对于所有 $n > n_0$，都有 $f(n) \leq c \times g(n)$。

使用我们定义的 $g(n) = 2^{f(n)}$ ，不等式变为：

$$f(n) \leq c \times 2^{f(n)}$$

考虑选择 $c = 1$ ，那么对于所有的 $n$  我们都有：

$$f(n) \leq 2^{f(n)}$$

这显然是成立的，因为任何正数 $x$ （在这里 $x$  是 $f(n)$ ）都小于 $2^x$。

所以 $f(n) = O(g(n))$ 成立。

**2. 证明 $g(n)$  不是 $O(f(n))$:**

为了证明 $g(n)$  不是 $O(f(n))$ ，我们需要证明对于所有正数 $c$  和  $n_0$ ，存在某个 $n > n_0$ ，使得：

$$2^{f(n)} > c \times f(n)$$

考虑 $c = 1$ 。那么我们需要证明对于足够大的 $n$ ，都有：

$$2^{f(n)} > f(n)$$

这对于所有 $f(n) > 1$  都是显然成立的，因为 $2^x$  的增长速度比 $x$  快得多。

因此 $g(n)$  不是 $O(f(n))$ 。

**结论**:

我们证明了存在一个函数 $g(n) = 2^{f(n)}$ 使得 $f(n) = O(g(n))$ 成立，但 $g(n)$  不是 $O(f(n))$ 。所以题目的结论得到了证明。

---

(Q4) Suppose that we define a function $F: \mathbb{N} \cup \{0\} \rightarrow [0, \infty)$ recursively as follows: $F(0) = 1$, $F(1) = 1$ and for  $n > 1$ , $F(n) = 4F(n - 1) + 5F(n - 2)$ . Can you find a number  $\alpha \in (0, \infty)$  with the property that $F(n) \in \Theta(\alpha^n)$ ? Justify your claim.

我们将尝试找到一个特征方程来描述这个递归关系。特征方程是递归数列的一种常用工具，它通常可以帮助我们找到一个非递归形式的公式来描述数列。

考虑递归公式：

$$
F(n) = 4F(n-1) + 5F(n-2)
$$
对应的特征方程是：

$$
r^2 = 4r + 5
$$
将其重新组织，得到：

$$
r^2 - 4r - 5 = 0
$$
 这是一个二次方程，我们需要求解它以获得两个根。
$$
(r - 5)(r + 1) = 0
$$
从中我们可以得到两个解：$r_1 = 5$  和  $r_2 = -1$。

对于这种递归数列，通常的非递归形式是：

$$
F(n) = a \times r_1^n + b \times r_2^n
$$
其中 $a$  和 $b$  是需要确定的常数。

使用给出的初始条件：

$F(0) = 1$  和 $F(1) = 1$

我们可以建立以下系统：

1) $a + b = 1$    (将 $n=0$ 带入上述公式)

2) $5a - b = 1$   (将 $n=1$ 带入上述公式)

通过解这个系统，我们可以得到：

$a = \frac{1}{3}$  和 $b = \frac{2}{3}$ 

因此，我们的数列是：

$$
F(n) = \frac{1}{3} \times 5^n + \frac{2}{3} \times (-1)^n
$$
 当 n 趋向于无穷大时，$(-1)^n$ 的部分将变得微不足道，而 $5^n$ 的部分将主导整个数列的增长。因此，我们可以说 $F(n)$  是 $\Theta(5^n)$。

综上，$\alpha = 5$ ，所以 $F(n) \in \Theta(5^n)$。





## Section C (20 marks)

::: tabs

@tab EN

In this question you will gain some practice implementing sorting algorithms.

(Q1) Implement the selection sort algorithm in Python. Create a function called `selection_sort` in Python which takes as input a list of distinct numbers `X` and returns an array `Y` of the same size as `X` and containing the same elements, but occurring in ascending order so that $Y[0] \leq Y[1] \leq ... Y[n-1]$  where `n` is the size of `X`.

To test your selection_sort function first copy the following code.

```python
import numpy as np # load the numpy library

def sorting_function_test(sorting_function, random_seed=2023, array_size=30, max_int=100, num_tests=50):
    np.random.seed(random_seed) # set the random seed
    
    output = []
    num_tests_failed = 0
    
    for i in range(num_tests):
        X=list(set(np.random.randint(max_int, size=(array_size))))
        if sorted(X) != sorting_function(X):
            num_tests_failed+=1
            
    if num_tests_failed==0:
        print("Success! All tests passed.")
    else:
        print(num_tests_failed,"/",num_tests," failed.")
```

Next apply the test function sorting_function_test to selection_sort as follow:

```python
sorting_function_test(selection_sort)
```

(Q2) Implement the merge sort algorithm in Python Create a function called `merge_sort` in Python which takes as input a list of distinct numbers `X` and returns an array `Y` of the same size as `X` and containing the same elements, but occurring in ascending order so that $Y[0] \leq Y[1] \leq ... Y[n-1]$ where `n` is the size of `X`.

Next apply the test function `sorting_function_test` to `merge_sort` as follow:

```python
sorting_function_test(merge_sort)
```

@tab ZH

在这个问题中，你将练习实现排序算法。

(Q1) 用 Python 实现选择排序算法。创建一个名为 `selection_sort` 的 Python 函数，该函数接受一个名为 `X` 的不同数字的列表作为输入，并返回一个大小与 `X` 相同的数组 `Y`，该数组包含相同的元素，但以升序出现，使得 $Y[0] \leq Y[1] \leq ... Y[n-1]$，其中`n`是`X`的大小。

要测试你的`selection_sort`函数，请首先复制以下代码。

```python
import numpy as np # 加载numpy库

def sorting_function_test(sorting_function, random_seed=2023, array_size=30, max_int=100, num_tests=50):
    np.random.seed(random_seed) # 设置随机种子
    
    output = []
    num_tests_failed = 0
    
    for i in range(num_tests):
        X=list(set(np.random.randint(max_int, size=(array_size))))
        if sorted(X) != sorting_function(X):
            num_tests_failed+=1
            
    if num_tests_failed==0:
        print("成功！所有测试均已通过。")
    else:
        print(num_tests_failed,"/",num_tests," 测试未通过。")
```

接下来，如下所示，将测试函数`sorting_function_test`应用于`selection_sort`：

```python
sorting_function_test(selection_sort)
```

(Q2) 用Python实现归并排序算法。创建一个名为`merge_sort`的Python函数，该函数接受一个名为`X`的不同数字的列表作为输入，并返回一个大小与`X`相同的数组`Y`，该数组包含相同的元素，但以升序出现，使得 $Y[0] \leq Y[1] \leq ... Y[n-1]$，其中`n`是`X`的大小。

接下来，如下所示，将测试函数`sorting_function_test`应用于`merge_sort`：

```python
sorting_function_test(merge_sort)
```

@tab Solution

```python
def selection_sort(X):
    n = len(X)  # 获取列表X的长度
    for i in range(n):  # 外层循环，对于列表中的每个元素
        min_index = i  # 假设当前索引处的元素是最小的
        for j in range(i+1, n):  # 内层循环，检查后面的元素
            if X[j] < X[min_index]:  # 如果找到一个更小的元素
                min_index = j  # 更新最小元素的索引
        # 将当前元素与找到的最小元素交换位置
        X[i], X[min_index] = X[min_index], X[i]
    return X  # 返回排序后的列表
```

```python
def merge_sort(X):
    if len(X) <= 1:  # 如果列表的长度为1或0，直接返回
        return X
    
    mid = len(X) // 2  # 计算列表的中间索引
    left = X[:mid]  # 将列表分为左半部分
    right = X[mid:]  # 将列表分为右半部分

    # 递归地对左右两部分进行排序
    left = merge_sort(left)
    right = merge_sort(right)

    # 合并两个已排序的部分
    return merge(left, right)

def merge(left, right):
    result = []  # 初始化一个空列表来存放结果
    i = j = 0  # 初始化左右两部分的索引

    # 当两部分都还有元素时
    while i < len(left) and j < len(right):
        if left[i] < right[j]:  # 如果左边的元素小于右边的
            result.append(left[i])  # 将左边的元素添加到结果中
            i += 1  # 更新左边的索引
        else:
            result.append(right[j])  # 否则将右边的元素添加到结果中
            j += 1  # 更新右边的索引

    # 如果左边还有剩余的元素，将它们添加到结果中
    result.extend(left[i:])
    # 如果右边还有剩余的元素，将它们添加到结果中
    result.extend(right[j:])
    
    return result  # 返回合并后的列表
```

```python
def selection_sort(lst):
    sorted_list = []
    while lst:
        max_value = lst[0]
        max_index = 0
        for i in range(len(lst)):
            if lst[i] > max_value:
                max_value = lst[i]
                max_index = i
        sorted_list.insert(0,max_value) # insert 是插入元素到列表
        lst.pop(max_index) # 移除每次最大那个下标的那个值
    return sorted_list
lst = [1, 2, 3, 34, 444, 53, 0]
r = selection_sort(lst)
print(r)
```

:::











## Section D (20 marks)

**Recall** that given a numerical array $X$ of length $n$, an *array inversion* within $X$ is an ordered pair $i < j$ with $i, j \in \{0, ..., n - 1\}$  and $X[j] < X[i]$ . In the lectures we discussed the problem of counting the number of array inversions within an array. We introduced the following `count_inv_and_sort` algorithm for counting the number of array inversions through a divide-and-conquer strategy.

**Algorithm 1:** `count_inv_and_sort`

**Input:** An array X

1 n = len(X)
2 if n<2 then
3    return (0, X)
4 else
5    (l_inv, Y) = count_inv_and_sort(X[0:⌊n/2⌋])
6    (r_inv, Z) = count_inv_and_sort(X[⌊n/2⌋:n])
7    (split_inv, W) = count_split_inv_and_merge(Y, Z)
8    return (l_inv + r_inv + split_inv, W)

```python
1 n = len(X)
2 if n<2 then
3    return (0, X)
4 else
5    (l_inv, Y) = count_inv_and_sort(X[0:⌊n/2⌋])
6    (r_inv, Z) = count_inv_and_sort(X[⌊n/2⌋:n])
7    (split_inv, W) = count_split_inv_and_merge(Y, Z)
8    return (l_inv + r_inv + split_inv, W)
```

Notice that the `count_inv_and_sort` algorithm calls the following `count_split_inv_and_merge` function as a sub-routine.

**Algorithm 2:** `count_split_inv_and_merge`

**Input:** Sorted arrays X and Y

1 $n_X$ = len(X), $n_Y$ = len(Y)
2 Z = $0_n$, split_inv = 0, i = j = 0 // initialisation
3 for k = 0 to $n_X$ + $n_Y$ − 1 do
4 if i < $n_X$ and (j = $n_Y$ or X[i] ≤ Y[j]) then
5     Z[k] = X[i]
6     i = i + 1
7 else
8     Z[k] = Y [j]
9     split_inv = split_inv + $n_X$ − i // Add on the length of X[i:$n_X$]
10    j = j + 1
11 return (split_inv, Z ).

```python
1 $n_X$ = len(X), $n_Y$ = len(Y)
2 Z = $0_n$, split_inv = 0, i = j = 0 // initialisation
3 for k = 0 to $n_X$ + $n_Y$ − 1 do
4 if i < $n_X$ and (j = $n_Y$ or X[i] ≤ Y[j]) then
5     Z[k] = X[i]
6     i = i + 1
7 else
8     Z[k] = Y [j]
9     split_inv = split_inv + $n_X$ − i // Add on the length of X[i:$n_X$]
10    j = j + 1
11 return (split_inv, Z ).
```

**Theorem (Counting array inversions):** Suppose X is an array consisting of n distinct numbers. Then the `count_inv_and_sort` algorithm returns a tuple (n_inv, $\tilde{X}$) where n_inv is the number of array inversions within the array X and $\tilde{X}$ is a sorted copy of the array X.

A useful step in proving this theorem is the following lemma.

**Lemma (Counting split inversion):** Suppose X is a sorted array containing $n_X$ distinct numbers and Y is a sorted array containing $n_Y$ distinct numbers. Then the `count_split_inv_and_merge` function will return a tuple (split_inv, Z) where Z is a sorted array containing the $n_x + n_Y$ distinct elements within the arrays X and Y ,and `split_inv` is the number of split inversions across X and Y . More precisely, `split_inv` consists of the number of ordered pairs $(i, j) \in \{0, \dots, n_X\} \times \{0, \dots, n_Y\}$ such that  $X[i] > Y[j]$ .

**(Q1)** Prove the that the `count_inv_and_sort` algorithm solves the inversion counting problem. That is, prove Theorem (Counting array inversions) above.

**Note:** You may use the result on the `count_split_inv_and_merge` algorithm, Lemma (Counting split inversion),without proof.

**(Q2)** In Python, implement a function called `count_inv_and_sort` which takes as input a numerical array X (a Python list) with distinct elements and outputs a tuple containing both:

1. The number of array inversions in X.
2. A sorted array Y containing the same elements as X but occurring in ascending order.

Your function should have a worst-case run-time complexity of $O(n \space log(n))$.

Evaluate your function with the following test cases:

Your code should print out five integers corresponding to the number of inversions in each array.

```python
import numpy as np

np.random.seed(0) # set random seed

num_tests=5
for i in range(num_tests):
    test_list=list(set(np.random.randint(1000, size=(100))))
    np.random.shuffle(test_list)
    print(count_inv_and_sort(test_list)[0])
```

**(Optional extra)** Prove the result on the `count_split_inv_and_merge` algorithm i.e. prove Lemma (Counting split inversion).

**Note:** This optional extra will not count towards your grade. However, it is a useful challenge to attempt.

### Solution D

#### Q1

**证明：**

我们的目标是证明 `count_inv_and_sort` 算法正确地计算了数组 X 中的倒置数，并返回了排序后的数组。我们将使用归纳法来进行证明。

**基本情况**：对于长度为 0 或 1 的数组 X，即当 `n < 2`  时，数组自然是有序的，并且没有倒置。因此，算法在此情况下返回的 0 倒置和原数组是正确的。

假设对于所有长度小于`n`的数组，`count_inv_and_sort`算法都能正确地计算倒置数并返回排序后的数组。

**归纳步骤**：考虑一个长度为 `n `的数组X。

1. **分治策略**：算法首先将数组 X 分为两个子数组 Y 和Z，这两个子数组的长度均小于 `n`。算法递归地在这两个子数组上应用 `count_inv_and_sort`。根据我们的归纳假设，我们知道对于这两个子数组，算法能够正确地计算它们的倒置数（分别为`l_inv`和`r_inv`）并返回排序后的子数组。

2. **计算跨子数组的倒置**：然后，算法使用 `count_split_inv_and_merge` 函数来计算跨越子数组 Y 和 Z 的倒置数 `split_inv`。由于 Y 和 Z 都是排序后的，根据提供的引理，我们知道 `count_split_inv_and_merge` 能够正确地计算这两个排序后的数组之间的倒置数，并将它们合并为一个排序后的数组。

3. **总倒置数的计算**：最后，整个数组X的总倒置数为 `l_inv + r_inv + split_inv` 。算法返回这个值以及由 `count_split_inv_and_merge` 返回的排序后的数组，该数组是 Y 和 Z 的合并结果。

因此，基于我们的归纳假设，我们证明了对于长度为 `n` 的数组，`count_inv_and_sort` 算法能够正确地计算倒置数并返回排序后的数组。

这样，利用归纳法，我们证明了算法 `count_inv_and_sort` 对任意长度的数组都是正确的。

#### Q2

```python
def count_inv_and_sort(X):
    n = len(X)
    if n < 2:
        return (0, X)
    else:
        l_inv, Y = count_inv_and_sort(X[0:n//2])
        r_inv, Z = count_inv_and_sort(X[n//2:n])
        split_inv, W = count_split_inv_and_merge(Y, Z)
        return (l_inv + r_inv + split_inv, W)

def count_split_inv_and_merge(X, Y):
    n_X, n_Y = len(X), len(Y)
    Z = [0] * (n_X + n_Y)
    split_inv, i, j = 0, 0, 0
    for k in range(n_X + n_Y):
        if i < n_X and (j == n_Y or X[i] <= Y[j]):
            Z[k] = X[i]
            i += 1
        else:
            Z[k] = Y[j]
            split_inv += n_X - i
            j += 1
    return (split_inv, Z)

# 使用给定的测试代码测试上述函数
import numpy as np

np.random.seed(0) # set random seed

num_tests=5
for i in range(num_tests):
    test_list=list(set(np.random.randint(1000, size=(100))))
    np.random.shuffle(test_list)
    print(count_inv_and_sort(test_list)[0])
```

```python
def count_inv_and_sort(X):
    # 获取数组的长度
    n = len(X)

    # 基础情况：如果数组长度小于2，则没有倒置
    if n < 2:
        return (0, X)
    else:
        # 递归地处理数组的左半部分并获取其倒置数量和排序后的子数组
        l_inv, Y = count_inv_and_sort(X[0:n//2])

        # 递归地处理数组的右半部分并获取其倒置数量和排序后的子数组
        r_inv, Z = count_inv_and_sort(X[n//2:n])

        # 计算跨越左右两个子数组的倒置数量，并合并两个子数组
        split_inv, W = count_split_inv_and_merge(Y, Z)

        # 返回总倒置数量和排序后的数组
        return (l_inv + r_inv + split_inv, W)

def count_split_inv_and_merge(X, Y):
    # 获取两个已排序子数组的长度
    n_X, n_Y = len(X), len(Y)

    # 初始化结果数组Z的大小和倒置计数器
    Z = [0] * (n_X + n_Y)
    split_inv, i, j = 0, 0, 0

    # 遍历两个子数组并合并它们
    for k in range(n_X + n_Y):
        # 如果X中还有元素，并且Y中没有元素或X的当前元素小于等于Y的当前元素
        if i < n_X and (j == n_Y or X[i] <= Y[j]):
            Z[k] = X[i]
            i += 1
        else:
            # 如果Y的元素小于X的当前元素，那么存在倒置
            Z[k] = Y[j]
            # 增加跨越两个子数组的倒置数量
            split_inv += n_X - i
            j += 1

    # 返回跨越两个子数组的倒置数量和合并后的数组
    return (split_inv, Z)

# 使用给定的测试代码测试上述函数
import numpy as np

np.random.seed(0) # 设置随机种子以确保结果可重复

num_tests=5
for i in range(num_tests):
    # 生成一个包含100个随机整数的列表
    test_list=list(set(np.random.randint(1000, size=(100))))
    # 随机打乱该列表的顺序
    np.random.shuffle(test_list)
    # 打印计算得到的倒置数量
    print(count_inv_and_sort(test_list)[0])
```





## Section E (20 marks)

In this question we shall consider the challenge of computing the median within an array.

**(Q1)** In Python, implement a function called `compute_median_value` which takes as input a numerical array X (a Python list) with $n \geq 1$ distinct elements and outputs a single number $z$ such that if $\tilde{X}$ were a sorted copy of the array $X$ , then $z$ is the middle value within $\tilde{X}$ i.e. $z = \tilde{X} [⌊(n − 1)/2⌋]$. This is often referred to as the (lower) median.

**Note:** Aim for an approach with minimal worst-case asymptotic time complexity as a function of $n$.

To test your `compute_median_value` function first copy the following code.

```python
import numpy as np # load the numpy library

def median_function_test(test_median_function, random_seed=2023, array_size=30, max_int=100, num_tests=50):
    np.random.seed(random_seed) # set the random seed
    
    output = []
    num_tests_failed = 0
    for i in range(num_tests):
        X = list(set(np.random.randint(max_int, size=(array_size))))
        n=len(X)
        X_tilde=sorted(X)
        z_test=test_median_function(X)
        z_true = X_tilde[(n-1)//2]
        if z_true != z_test:
            num_tests_failed+=1
    if num_tests_failed == 0:
        print("Success! All tests passed.")
    else:
        print(num_tests_failed,"/",num_tests," failed.")
```

Next apply the test function `median_function_test` to `compute_median_value` as follow:

```python
median_function_test(compute_median_value)
```

---





```python
def compute_median_value(X):
    # partition函数用于对数组进行分区，并返回pivot的索引位置。
    def partition(arr, low, high):
        # 选择最右边的元素作为pivot。
        pivot = arr[high]
        # i是小于pivot的元素的索引。
        i = low - 1
        # 遍历数组，将小于或等于pivot的元素移到左侧。
        for j in range(low, high):
            if arr[j] <= pivot:
                i += 1
                arr[i], arr[j] = arr[j], arr[i]
        # 将pivot移到其正确的位置。
        arr[i + 1], arr[high] = arr[high], arr[i + 1]
        return i + 1

    # 快速选择算法，用于找到数组中的第k小的元素。
    def quick_select(arr, low, high, k):
        # 如果数组只有一个元素，则直接返回该元素。
        if low == high:
            return arr[low]

        # 执行分区操作，并获取pivot的索引位置。
        pi = partition(arr, low, high)

        # 如果pivot的索引就是k，则返回该位置的元素。
        if k == pi:
            return arr[pi]
        # 如果k小于pivot的索引，则在左侧子数组中继续查找。
        elif k < pi:
            return quick_select(arr, low, pi - 1, k)
        # 如果k大于pivot的索引，则在右侧子数组中继续查找。
        else:
            return quick_select(arr, pi + 1, high, k)

    # 计算k为中位数的索引值。
    n = len(X)
    k = (n - 1) // 2
    # 使用快速选择算法找到中位数。
    return quick_select(X, 0, n - 1, k)

# 以下是测试代码
import numpy as np

def median_function_test(test_median_function, random_seed=2023, array_size=30, max_int=100, num_tests=50):
    # 设置随机种子，确保每次运行的结果都是一致的。
    np.random.seed(random_seed)
    
    output = []
    num_tests_failed = 0
    # 循环运行测试
    for i in range(num_tests):
        # 随机生成一个唯一元素的数组X。
        X = list(set(np.random.randint(max_int, size=(array_size))))
        n = len(X)
        # 对X进行排序，获得正确的中位数。
        X_tilde = sorted(X)
        z_test = test_median_function(X)
        z_true = X_tilde[(n - 1) // 2]
        # 如果测试结果和正确的中位数不一致，则增加失败的测试计数。
        if z_true != z_test:
            num_tests_failed += 1
    # 输出测试结果。
    if num_tests_failed == 0:
        print("Success! All tests passed.")
    else:
        print(num_tests_failed, "/", num_tests, " failed.")

# 测试 compute_median_value 函数
median_function_test(compute_median_value)
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
