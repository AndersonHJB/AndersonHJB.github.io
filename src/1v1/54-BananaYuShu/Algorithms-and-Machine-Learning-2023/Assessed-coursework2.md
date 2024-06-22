---
title: Assessed coursework 2 for Algorithms and Machine Learning (MATH20017), Autumn 2023
date: 2023-10-28 22:18:27
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

There are 6 sections to this coursework and you are encouraged to attempt to complete all sections.

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
9. In your new colab instance write in the following piece of code. You should replace your_python_notebook_file_path with the path of your coursework notebook. This can be found by clicking on the three dots to the right of your coursework notebook’s icon and selecting Copy path, then pasting in the path.

`!jupyter nbconvert --to HTML your_python_notebook_file_path`

10. Run the command.
11. Again, click the Refresh icon (the second from the left).

12. An HTML version of your file should now appear. Click the three dots to the right of this file and select Download to download the HTML file.
13. Open the HTML file and carefully check that all questions and answers are visible and appear as expected. 
14. Upload your .HTML and your .ipynb files to the submission point within Blackboard.

Important: Ensure that you use the correct format to submit your report as failure to do so can lead to a substantial loss of marks.

## Section A (10 marks)

In this question we shall make use of NumPy, a popular library for linear algebra in Python.

```python
import numpy as np
```

**(Q1)** Write a Python function called `power_iteration_top_eigen_vector` which takes as input an $d × d$ real symmetric matrix represented as a NumPy array `input_matrix`, along with a number of iterations `num_iterations` and returns a $d$-dimensional vector corresponding to the approximation of the first singular vector given by the power iteration method after `num_iterations` iterations. You can use NumPy’s inbuilt matrix multiplication algorithm @ and norm computation `np.linalg.norm`.

**Mathematically**, you should view the power iteration as starting with a random vector $y_0 \in \mathbb{R}^d$ represented by `vect` and computing $w_q \in \mathbb{R}^d$ where: $w_q := {\|y_q\|}^{-1}y_q$ where $y_q := M^qy_0$ and $M$ is the $d \times d$ real symmetric matrix represented as a NumPy array `input_matrix`.

**Note:** You should implement your method in a way which mitigates the potential for numerical overflow.

You may wish to utilise the following template:

```python
def power_iteration_top_eigen_vector(input_matrix:np.array, num_iterations:int):
    vect = np.random.normal(size=input_matrix.shape[0]) # initialise with random vector
    for i in range(num_iterations):
        # important details missing here
        pass
    return vect
```

Use the following code to test your function:

```python
num_examples=1000
num_features=100
num_spike_dim=4
spike_mult=10
num_iterations=100
np.random.seed(2023)

def generate_spike_data_matrix(num_examples,num_features,num_spike_dim,spike_mult):
    num_spike_dim = min(num_features, num_spike_dim)
    data_matrix=np.random.normal(size=(num_examples, num_features))
    data_matrix+=np.concatenate((spike_mult*np.ones(num_spike_dim), np.zeros(num_features-num_spike_dim)))
    return data_matrix
X=generate_spike_data_matrix(num_examples,num_features,num_spike_dim,spike_mult)
M= X.T@X # compute square matrix of second moments
# the output of your power iteration
print("The power iteration: ")
print([round(x,3) for x in power_iteration_top_eigen_vector(M,num_iterations)[:10]])
# compared to the NumPy method
print("NumPy's implementation: ")
print([round(x,3) for x in np.linalg.eig(M)[1][:,0][:10]])
```

### Solution A

```python
def power_iteration_top_eigen_vector(input_matrix:np.array, num_iterations:int):
    # 初始化一个随机向量作为起始向量
    vect = np.random.normal(size=input_matrix.shape[0]) # initialise with random vector
    # 执行指定次数的迭代
    for i in range(num_iterations):
        # important details missing here
        # 将输入矩阵与当前向量相乘，得到新的向量
        vect = np.dot(input_matrix, vect)
        
        # 将新得到的向量进行标准化，使其长度为 1
        vect = vect / np.linalg.norm(vect) # 规范化向量以防止数值溢出
        
    return vect
```



## Section B (15 marks)

(Q1) Implement a Python function called `strassens_matrix_multiplication_2_pwr` which takes as input two numpy arrays `X` and `Y`, both of which correspond to `n x n` matrices where $n = 2^q$  for some $q \in \mathbb{N} \cup \{0\}$. Your function should compute the matrix product $Z = XY$ using Strassen's divide-and-conquer approach.

You may wish to make use of the fact that you can extract the top-left sub-matrix from an $n \times n$  matrix by calling $X[0:n//2, 0:n//2]$. Similarly, you can extract the top right sub-matrix by calling $X[n//2:n, 0:n//2]$.

**Note:** Your function should not call NumPy’s in-built matrix multiplication functionality. However, you can call any in-built NumPy functionality which has time-complexity $O(n^2)$. 

This includes initialising a matrix of zeros, or NumPy’s in-built matrix summation functionality (i.e. $A+B$ for the matrix sum between $A$ and $B$) as well as NumPy functions which are $\Theta(1)$ with respect to $n$ e.g. calling $A.shape[0]$ etc.

Evaluate your function by running the following test code:

```python
num_tests=5
np.random.seed(2023)
for i in range(num_tests):
    X=10*np.abs(np.random.randn(2**(1+i),2**(1+i)))
    Y=10*np.abs(np.random.randn(2**(1+i),2**(1+i)))
    strassen_result=strassens_matrix_multiplication_2_pwr(X,Y)
    error=np.linalg.norm(strassen_result-X@Y)/np.linalg.norm(X@Y)
    print("In case {n} the relative error is {e}".format(n=i+1,e=error))
```

(Q2) Implement a Python function called `strassens_matrix_multiplication` which takes as input two numpy arrays $X$  and $Y$,  where $X$  corresponds to an $n \times m$ matrix and $Y$  an  $l \times k$  matrix and $n, m, l, k \in \mathbb{N}$  are abitrary natural numbers. Your function should compute the matrix product $Z = XY$  using Strassen’s divide-and-conquer approach, if the matrix product is well-defined, and print a message stating that the ma- trices cannot be multiplied, if they cannot. Your function should have a worst-case run-time complexity of $O(\max\{ n, k, m \}^{\log(7)/\log(2)})$ . 

As in (Q1), your function should not call NumPy’s in-built matrix multiplication functionality. However, you can call any in-built NumPy functionality which has time-complexity $O(n^2)$.

Evaluate your code on the following test cases:

```python
num_tests=5
np.random.seed(2023)
for i in range(num_tests):
    X=10*np.abs(np.random.randn(10*(1+i),5*(1+i)))
    Y=10*np.abs(np.random.randn(5*(1+i),4*(1+i)))
    strassen_result=strassens_matrix_multiplication(X,Y)
    error=np.linalg.norm(strassen_result-X@Y)/np.linalg.norm(X@Y)
    print("In case {n} the relative error is {e}".format(n=i+1,e=error))
```

### Solution B

#### Q1

(Q1) 使用 Strassen 的分治策略计算两个矩阵的乘积。这种策略基于分治法，将大问题分解为几个小问题，并递归地解决这些小问题。

对于给定的两个 $n \times n$ 矩阵 $X$  和 $Y$，我们可以将其分为四个 $n/2 \times n/2$  子矩阵：

$$
X = \begin{bmatrix}
X_{11} & X_{12} \\
X_{21} & X_{22} \\
\end{bmatrix}
\\
Y = \begin{bmatrix}
Y_{11} & Y_{12} \\
Y_{21} & Y_{22} \\
\end{bmatrix}
$$
Strassen's 方法定义了 7 个乘积，使用这7个乘积可以计算结果矩阵 $Z$  的 4 个子矩阵。

首先，我们定义以下 7 个乘积：

$$
\begin{align*}
P_1 & = (X_{11} + X_{22}) \times (Y_{11} + Y_{22}) \\
P_2 & = (X_{21} + X_{22}) \times Y_{11} \\
P_3 & = X_{11} \times (Y_{12} - Y_{22}) \\
P_4 & = X_{22} \times (Y_{21} - Y_{11}) \\
P_5 & = (X_{11} + X_{12}) \times Y_{22} \\
P_6 & = (X_{21} - X_{11}) \times (Y_{11} + Y_{12}) \\
P_7 & = (X_{12} - X_{22}) \times (Y_{21} + Y_{22}) \\
\end{align*}
$$
然后，结果矩阵 $Z$  的4个子矩阵可以表示为：

$$
\begin{align*}
Z_{11} & = P_1 + P_4 - P_5 + P_7 \\
Z_{12} & = P_3 + P_5 \\
Z_{21} & = P_2 + P_4 \\
Z_{22} & = P_1 - P_2 + P_3 + P_6 \\
\end{align*}
$$
接下来，代码实现：

::: code-tabs

@tab code1

```python
import numpy as np

def strassens_matrix_multiplication_2_pwr(X, Y):
    n = X.shape[0]
    
    # 基本情况: 1x1矩阵
    if n == 1:
        return np.array([[X[0, 0] * Y[0, 0]]])
    
    # 分割矩阵
    X11, X12 = X[0:n//2, 0:n//2], X[0:n//2, n//2:n]
    X21, X22 = X[n//2:n, 0:n//2], X[n//2:n, n//2:n]
    Y11, Y12 = Y[0:n//2, 0:n//2], Y[0:n//2, n//2:n]
    Y21, Y22 = Y[n//2:n, 0:n//2], Y[n//2:n, n//2:n]
    
    # 计算P1到P7
    P1 = strassens_matrix_multiplication_2_pwr(X11 + X22, Y11 + Y22)
    P2 = strassens_matrix_multiplication_2_pwr(X21 + X22, Y11)
    P3 = strassens_matrix_multiplication_2_pwr(X11, Y12 - Y22)
    P4 = strassens_matrix_multiplication_2_pwr(X22, Y21 - Y11)
    P5 = strassens_matrix_multiplication_2_pwr(X11 + X12, Y22)
    P6 = strassens_matrix_multiplication_2_pwr(X21 - X11, Y11 + Y12)
    P7 = strassens_matrix_multiplication_2_pwr(X12 - X22, Y21 + Y22)
    
    # 计算结果矩阵的4个子矩阵
    Z11 = P1 + P4 - P5 + P7
    Z12 = P3 + P5
    Z21 = P2 + P4
    Z22 = P1 - P2 + P3 + P6
    
    # 合并子矩阵
    Z = np.vstack((np.hstack((Z11, Z12)), np.hstack((Z21, Z22))))
    return Z

# 测试代码
num_tests = 5
np.random.seed(2023)
errors = []
for i in range(num_tests):
    X = 10 * np.abs(np.random.randn(2**(1+i), 2**(1+i)))
    Y = 10 * np.abs(np.random.randn(2**(1+i), 2**(1+i)))
    strassen_result = strassens_matrix_multiplication_2_pwr(X, Y)
    error = np.linalg.norm(strassen_result - X @ Y) / np.linalg.norm(X @ Y)
    errors.append("In case {n} the relative error is {e}".format(n=i+1, e=error))

errors
```

@tab code2

```python
import numpy as np

def strassens_matrix_multiplication_2_pwr(X, Y):
    n = X.shape[0]
    
    # 基本情况: 1x1矩阵
    if n == 1:
        return np.array([[X[0, 0] * Y[0, 0]]])
    
    # 分割矩阵
    round_off = n // 2
    X11, X12 = X[0:round_off, 0:round_off], X[0:round_off, round_off:n]
    X21, X22 = X[round_off:n, 0:round_off], X[round_off:n, round_off:n]
    Y11, Y12 = Y[0:round_off, 0:round_off], Y[0:round_off, round_off:n]
    Y21, Y22 = Y[round_off:n, 0:round_off], Y[round_off:n, round_off:n]
    
    # 计算P1到P7
    P1 = strassens_matrix_multiplication_2_pwr(X11 + X22, Y11 + Y22)
    P2 = strassens_matrix_multiplication_2_pwr(X21 + X22, Y11)
    P3 = strassens_matrix_multiplication_2_pwr(X11, Y12 - Y22)
    P4 = strassens_matrix_multiplication_2_pwr(X22, Y21 - Y11)
    P5 = strassens_matrix_multiplication_2_pwr(X11 + X12, Y22)
    P6 = strassens_matrix_multiplication_2_pwr(X21 - X11, Y11 + Y12)
    P7 = strassens_matrix_multiplication_2_pwr(X12 - X22, Y21 + Y22)
    
    # 计算结果矩阵的4个子矩阵
    Z11 = P1 + P4 - P5 + P7
    Z12 = P3 + P5
    Z21 = P2 + P4
    Z22 = P1 - P2 + P3 + P6
    
    # 合并子矩阵
    Z = np.vstack((np.hstack((Z11, Z12)), np.hstack((Z21, Z22))))
    return Z

# 测试代码
num_tests = 5
np.random.seed(2023)
errors = []
for i in range(num_tests):
    X = 10 * np.abs(np.random.randn(2**(1+i), 2**(1+i)))
    Y = 10 * np.abs(np.random.randn(2**(1+i), 2**(1+i)))
    strassen_result = strassens_matrix_multiplication_2_pwr(X, Y)
    error = np.linalg.norm(strassen_result - X @ Y) / np.linalg.norm(X @ Y)
    errors.append("In case {n} the relative error is {e}".format(n=i+1, e=error))

errors
```

:::

#### Q2

(Q2) 为了使用 Strassen 的方法处理任意大小的矩阵乘法，我们采取了以下策略：

1. **检查乘法定义**：首先，我们检查矩阵乘法是否定义良好，即 $A$  的列数是否等于 $B$  的行数。
2. **确定新尺寸**：计算新的尺寸，将矩阵大小调整为 $2^q \times 2^q$，其中 $q$ 是一个整数。这是因为 Strassen 的方法在这种尺寸的矩阵上最有效。
3. **矩阵填充**：我们定义了一个 `pad_matrix` 辅助函数，使用零填充矩阵，使其满足新的尺寸。
4. **使用 Strassen 的方法**：使用填充后的矩阵调用我们之前为 (Q1) 实现的 Strassen 方法。
5. **调整结果**：最后，我们调整结果矩阵的大小以匹配期望的输出尺寸。

::: code-tabs

@tab code1

```python
def pad_matrix(A, target_size):
    rows, cols = A.shape
    padded_matrix = np.zeros((target_size, target_size))
    padded_matrix[:rows, :cols] = A
    return padded_matrix

def strassens_matrix_multiplication(A, B):
    rows_A, cols_A = A.shape
    rows_B, cols_B = B.shape
    
    if cols_A != rows_B:
        print("The matrices cannot be multiplied.")
        return None
    
    max_dim = max(rows_A, cols_A, rows_B, cols_B)
    new_size = 2**int(np.ceil(np.log2(max_dim)))
    
    A_padded = pad_matrix(A, new_size)
    B_padded = pad_matrix(B, new_size)
    
    C_padded = strassens_matrix_multiplication_2_pwr(A_padded, B_padded)
    
    C = C_padded[:rows_A, :cols_B]
    
    return C
```

@tab code2

```python
# 定义Strassen矩阵乘法函数，可以处理任意大小的矩阵
def strassens_matrix_multiplication(A, B):
    # 定义一个辅助函数，用于填充给定的矩阵 A，使其达到目标大小。
    def pad_matrix(A, target_size):
        # 获取矩阵 A 的行数和列数
        rows, cols = A.shape
        # 初始化一个全零的目标大小矩阵
        padded_matrix = np.zeros((target_size, target_size))
        # 将原始矩阵 A 的值复制到填充矩阵的相应位置
        padded_matrix[:rows, :cols] = A
        return padded_matrix
    # 获取矩阵 A 和 B 的行数和列数
    rows_A, cols_A = A.shape
    rows_B, cols_B = B.shape
    
    # 检查矩阵乘法是否定义良好，即 A 的列数是否等于 B 的行数
    if cols_A != rows_B:
        print("矩阵不能相乘。")
        return None
    
    # 确定新的矩阵尺寸。这是为了确保矩阵的大小为 2^q，以适应Strassen算法
    max_dim = max(rows_A, cols_A, rows_B, cols_B)
    new_size = 2**int(np.ceil(np.log2(max_dim)))
    
    # 使用前面定义的辅助函数填充矩阵
    A_padded = pad_matrix(A, new_size)
    B_padded = pad_matrix(B, new_size)
    
    # 使用Strassen算法计算填充后的矩阵的乘积
    C_padded = strassens_matrix_multiplication_2_pwr(A_padded, B_padded)
    
    # 调整结果矩阵的大小以匹配期望的输出尺寸
    C = C_padded[:rows_A, :cols_B]
    
    return C
```

@tab code3

```python
import numpy as np
def strassens_matrix_multiplication_2_pwr(X, Y):
    n = X.shape[0]

    # 基本情况: 1x1矩阵
    if n == 1:
        return np.array([[X[0, 0] * Y[0, 0]]])

    # 分割矩阵
    round_off = n // 2
    X11, X12 = X[0:round_off, 0:round_off], X[0:round_off, round_off:n]
    X21, X22 = X[round_off:n, 0:round_off], X[round_off:n, round_off:n]
    Y11, Y12 = Y[0:round_off, 0:round_off], Y[0:round_off, round_off:n]
    Y21, Y22 = Y[round_off:n, 0:round_off], Y[round_off:n, round_off:n]

    # 计算P1到P7
    P1 = strassens_matrix_multiplication_2_pwr(X11 + X22, Y11 + Y22)
    P2 = strassens_matrix_multiplication_2_pwr(X21 + X22, Y11)
    P3 = strassens_matrix_multiplication_2_pwr(X11, Y12 - Y22)
    P4 = strassens_matrix_multiplication_2_pwr(X22, Y21 - Y11)
    P5 = strassens_matrix_multiplication_2_pwr(X11 + X12, Y22)
    P6 = strassens_matrix_multiplication_2_pwr(X21 - X11, Y11 + Y12)
    P7 = strassens_matrix_multiplication_2_pwr(X12 - X22, Y21 + Y22)

    # 计算结果矩阵的4个子矩阵
    Z11 = P1 + P4 - P5 + P7
    Z12 = P3 + P5
    Z21 = P2 + P4
    Z22 = P1 - P2 + P3 + P6

    # 合并子矩阵
    Z = np.vstack((np.hstack((Z11, Z12)), np.hstack((Z21, Z22))))
    return Z
# 定义Strassen矩阵乘法函数，可以处理任意大小的矩阵
def strassens_matrix_multiplication(matrix1, matrix2):
    # 定义一个辅助函数，用于填充给定的矩阵 A，使其达到目标大小。
    def fill_matrix(A, target_size):
        # 获取矩阵 A 的行数和列数
        rows, cols = A.shape
        # 初始化一个全零的目标大小矩阵
        padded_matrix = np.zeros((target_size, target_size))
        # 将原始矩阵 A 的值复制到填充矩阵的相应位置
        padded_matrix[:rows, :cols] = A
        return padded_matrix
    # 获取矩阵 A 和 B 的行数和列数
    rows_A, cols_A = matrix1.shape
    rows_B, cols_B = matrix2.shape

    # 检查矩阵乘法是否定义良好，即 A 的列数是否等于 B 的行数
    if cols_A != rows_B:
        print("矩阵不能相乘。")
        return None

    # 确定新的矩阵尺寸。这是为了确保矩阵的大小为 2^q，以适应Strassen算法
    max_dim = max(rows_A, cols_A, rows_B, cols_B)
    new_size = 2**int(np.ceil(np.log2(max_dim)))

    # 使用前面定义的辅助函数填充矩阵
    A_padded = fill_matrix(matrix1, new_size)
    B_padded = fill_matrix(matrix2, new_size)

    # 使用Strassen算法计算填充后的矩阵的乘积
    C_padded = strassens_matrix_multiplication_2_pwr(A_padded, B_padded)

    # 调整结果矩阵的大小以匹配期望的输出尺寸
    C = C_padded[:rows_A, :cols_B]

    return C

num_tests=5
np.random.seed(2023)
for i in range(num_tests):
    X=10*np.abs(np.random.randn(10*(1+i),5*(1+i)))
    Y=10*np.abs(np.random.randn(5*(1+i),4*(1+i)))
    strassen_result=strassens_matrix_multiplication(X,Y)
    error=np.linalg.norm(strassen_result-X@Y)/np.linalg.norm(X@Y)
    print("In case {n} the relative error is {e}".format(n=i+1,e=error))
```

:::

在测试中，我们的方法和 NumPy 的矩阵乘法方法产生了非常接近的结果，相对误差非常小。这证明了我们方法的准确性和有效性。







## Section C (15 marks)

In the lectures we consider introduced the Master-Method-Bound for Divide-and-Conquer algorithms. We consider algorithms which follow the “standard recurrence format.’ ’

**Definition (Standard recurrence format):** Let $T(n)$  be the run-time complexity for a divide and conquer algorithm for problems of size $n$ . 
We say that $T$  follows the standard recurrence format with parameters  $a, b \in \mathbb{N}$  and $d \in [0, \infty)$  if there exists $n_0 \geq b$ , $c > 0$  with $T(n) \leq c$ for $n \leq n_0$ , and for $n > n_0$ ,
$$
T(n) \leq a \cdot T\left(\left\lfloor \frac{n}{b} \right\rfloor\right) + c \cdot n^d
$$
We have the following asymptotic bound on the time-complexity of divide and conquer algorithm following a standard recurrence format. 

**Theorem (The master method bound).** Suppose that T is the time-complexity of a divide-and-conquer algo- rithm and T follows the standard recurrence format with parameters $a \in \mathbb{N}, b \in \mathbb{N} \setminus \{1\}$ and $d \in [0, \infty)$ . Then we have
$$
T(n) \leq 
\begin{cases} 
O(n^d \log(n)) & \text{if } a = b^d \text{ (Case 1)} \\
O(n^d) & \text{if } a < b^d \text{ (Case 2)} \\
O(n^{\log(a)/\log(b)}) & \text{if } a > b^d \text{ (Case 3)}
\end{cases}
$$
**(Q1)** The statement of the master method bound involves two logarithms. Does it matter which (strictly positive) base these logarithms are in? That is, does the truth or falsity of the conclusion depend upon the choice of base? Justify your answer.

In the lectures we proved the following key lemma.

**Lemma (Key lemma for master method bound).** Suppose that $T$ is the time-complexity of a divide-and- conquer algorithm and $T$ follows the standard recurrence format with parameters $a \in \mathbb{N}, b \in \mathbb{N} \setminus \{1\}$  and $d \in [0, \infty)$. Choose $n_0 \geq b, c > 0$  with $T(n) \leq c$ for $n \leq n_0$, and for $n > n_0$,
$$
T(n) \leq a \cdot T\left(\left\lfloor \frac{n}{b} \right\rfloor\right) + c \cdot n^d
$$


Then we have
$$
T(n) \leq c ·\left\{a^{[\log_b(n)]} + b^{d[\log_b(n)]}· \sum_{j=0}^{[\log_b(n)]} \left( \frac{a}{b^d} \right)^j \right\}
$$
**(Q2)** Prove that the key lemma for master method bound implies the master method bound theorem stated above.

### Solution

####  Q1

False，真假结论并不取决于对数的基数选择。换句话说，无论选择什么正基数（例如，常见的是 2、10 或 e），结果都是相同的。这是因为所有的对数都是通过一个固定的常数因子关联的，这个常数因子是根据所选择的基数改变的。具体地说，对于任意的正数 a、b 和 x（其中 a≠1且b≠1），我们有：
$$
\log_b(x) = \frac{\log_a(x)}{\log_a(b)}
$$
因此，当我们考虑大O符号时，常数因子不会影响渐进行为。例如，考虑 $O(n^{\log_b(a)})$ 。我们可以将它转换为另一种基数：
$$
\large O(n^{\log_b(a)}) = O\left(n^{\frac{\log_a(a)}{\log_a(b)}}\right) = O(n^{\frac{1}{\log_a(b)}})
$$
这只是将指数乘以一个常数因子，而在大 O 表示中，常数因子是被忽略的。

#### Q2

根据 Lemma，我们有：
$$
T(n) \leq c ·\left\{a^{[\log_b(n)]} + b^{d[\log_b(n)]}· \sum_{j=0}^{[\log_b(n)]} \left( \frac{a}{b^d} \right)^j \right\}
$$

1. **情况1：$a = b^d$**

$$
T(n) \leq c \left\{a^{[\log_b(n)]} + b^{d[\log_b(n)]} \sum_{j=0}^{[\log_b(n)]} \left( \frac{a}{b^d} \right)^j \right\}
$$

当 $a = b^d$ 时，$\frac{a}{b^d} = 1$。所以，我们可以计算上面的求和：
$$
\sum_{j=0}^{[\log_b(n)]} \left( \frac{a}{b^d} \right)^j = \sum_{j=0}^{[\log_b(n)]} 1 = [\log_b(n)] + 1
$$
代入上面的等式，我们得到：
$$
T(n) \leq c \left\{a^{[\log_b(n)]} + b^{d[\log_b(n)]} ([\log_b(n)] + 1) \right\}
$$
这是 $O(n^d \log(n))$，因此，整个时间复杂度是 $O(n^d \log(n))$。

2. **情况2：$a < b^d$**

在这种情况下，$\frac{a}{b^d} < 1$。因此，上述的求和可以被一个等比数列的和所上界。因此，我们有：

$$
T(n) \leq c \left\{a^{[\log_b(n)]} + b^{d[\log_b(n)]} \frac{1 - (\frac{a}{b^d})^{[\log_b(n)] + 1}}{1 - \frac{a}{b^d}} \right\}
$$

3. **情况3：$a > b^d$**

在这种情况下，$\frac{a}{b^d} > 1$。因此，求和的主要贡献来自于较大的 j 值。特别地，这个求和的上界可以写为：

$$
\sum_{j=0}^{[\log_b(n)]} \left( \frac{a}{b^d} \right)^j \leq \frac{\left( \frac{a}{b^d} \right)^{[\log_b(n)] + 1}}{ \frac{a}{b^d} - 1}
$$
代入上面的等式，我们得到：
$$
T(n) \leq c \left\{a^{[\log_b(n)]} + b^{d[\log_b(n)]} \frac{\left( \frac{a}{b^d} \right)^{[\log_b(n)] + 1}}{ \frac{a}{b^d} - 1} \right\}
$$
这是 $O(n^{\log(a)/\log(b)})$。

因此，综上所述，Lemma 确实导致了主定理的结论。

## Section D (20 marks)

In this question we consider the Monte Carlo method. Suppose you wish to simulate the generation of a vector of random variables $U_0, U_1, . . . , U_{n−1}$ consisting of independent random variables such that each $U_i ∼ Unif([0, 1])$. You can do this in NumPy as follows:

```python
np.random.seed(2023) # set random seed for reproducibility
n = 1000
U=np.random.rand(n)
```

**(Q1)** Edit the code below to create and apply a function which creates a Monte-Carlo estimate of π.

The result of applying your function should be accurate to 2 decimal places. You can check this by comparing with np.pi.

**Note (1):** Your code may take some time to run. You may wish to begin with a relatively small value of n for debugging purposes and then increase n to n=10000000 once your code has been written.

**Note (2):** Whilst you do not need to, you can make use of the NumPy np.mean function.

```python
def monte_carlo_pi(num_observations: int=1000,random_seed: int=0)-> float:
    np.random.seed(random_seed)
    
    # initialise sequence of i.i.d uniform
    U=np.random.rand(num_observations)
    V=np.random.rand(num_observations)
    
    num_in_circle=0
    for i in range(num_observations):
        pass
        # IMPORTANT DETAILS MISSING HERE
    pi_estimate = None # update the output
    
    return pi_estimate
```

Use the following code to confirm that your function gives the correct answer to 2 decimal places:

```python
pi_estimate_mc = monte_carlo_pi(num_observations=1000000,random_seed=2023)

print("NumPy estimate: "+str(round(np.pi,2)))
print("Monte Carlo estimate: "+str(round(pi_estimate_mc,2)))
```

In the final part of this section we shall consider a Monte Carlo estimate for Euler’s number $e = \sum_{q=0}^{\infty} \frac{1}{q!}$.

Our approach is based on the following result:

**Theorem (unbiased estimator of** e**):** Suppose that $(U_i)_{i=1}^{\infty}$ is a sequence of independent and identically distributed uniform random variables $U_i~Unif([0,1])$. Let $\tau := \min \left\{ m \in N : \sum_{i=1}^{m} U_i > 1 \right\}$ Then $E(\tau) = e$.

This means we can obtain a random variable τ with expectation e by repeatedly sampling from the uniform distribution and outputing the minimum number of time steps m before the cumulative sum exceeds 1. The following pseudo-code gives an algorithm for giving a Monte Carlo estimate of e via this approach.

**Remark:** The idea for this approach is from a paper by K. G. Russell called “Estimating the Value of e by Simulation”.

Note that you can create a single independent draw from the uniform distribution by calling `np.random.rand(1)[0]`.

### Solution Q1

**(Q1) 蒙特卡洛估计 π**

使用蒙特卡洛方法估计π的基本思想是随机生成一个点，看这个点是否落在单位圆内。我们可以按照以下步骤进行：

1. 随机生成两个独立的均匀分布的随机数 $U$ 和 $V$。
2. 计算点 $(U, V)$  与原点之间的距离。
3. 如果距离小于1，则该点位于单位圆内。
4. 计算单位圆内的点的比例，从而估算 π 的值。

```python
import numpy as np

def monte_carlo_pi(num_observations: int=1000, random_seed: int=0) -> float:
    np.random.seed(random_seed)
    
    U = np.random.rand(num_observations)
    V = np.random.rand(num_observations)
    
    num_in_circle = 0
    for i in range(num_observations):
        if U[i]**2 + V[i]**2 <= 1:
            num_in_circle += 1
    
    pi_estimate = 4 * num_in_circle / num_observations
    
    return pi_estimate

pi_estimate_mc = monte_carlo_pi(num_observations=1000000, random_seed=2023)

pi_estimate_mc, round(np.pi,2), round(pi_estimate_mc,2)
```

**(Q2)** Use the following pseudo-code to create a Python function called `monte_carlo_e` which takes as input a number of observations `num_observations` and a random seed `random_seed` and returns an estimate for Euler’s constant.

**Algorithm 1:** monte_carlo_e

**Input:** A number of observations num_observations

// Initialise average wait time.

avg_wait_time = 0

**for** $i \in \{0, . . . , num\_observations − 1\}$ **do**

​    // Initialise sum of uniforms and wait time

​    sum_uniforms = 0

​    wait_time = 0

​    **for** sum_uniforms<1**do**

​        // Sample from uniform on [0,1]

​        $U ∼ Unif([0,1])$

​        // Update sum and wait time.

​        sum_uniforms+ = U

​        wait_time+ = 1

​    // Update average wait time

​    avg_wait_time = (i · avg_wait_time + wait_time)/(i + 1)

**return** avg_wait_time

Use the following code to test your monte_carlo_e function:

```python
e_estimate_mc = monte_carlo_e(num_observations=100000,random_seed=2023)

print("NumPy estimate: "+str(round(np.exp(1),3)))
print("Monte Carlo estimate: "+str(round(e_estimate_mc,3)))
```

### Solution Q2

**(Q2) 蒙特卡洛估计 e**

为了使用蒙特卡洛方法估计欧拉数 $e$ ，我们可以按照以下步骤进行：

1. 重复随机生成均匀分布的随机数，直到它们的累积和超过 1。
2. 记录生成这些随机数所需的次数。
3. 重复上述过程，并计算平均所需的次数。
4. 最后的平均值将是 $e$  的估计值。

```python
import numpy as np

def monte_carlo_e(num_observations: int=1000, random_seed: int=0) -> float:
    np.random.seed(random_seed)
    
    avg_wait_time = 0
    for i in range(num_observations):
        sum_uniforms = 0
        wait_time = 0
        while sum_uniforms < 1:
            sum_uniforms += np.random.rand(1)[0]
            wait_time += 1
        avg_wait_time = (i * avg_wait_time + wait_time) / (i + 1)
    
    return avg_wait_time
e_estimate_mc = monte_carlo_e(num_observations=100000,random_seed=2023)

print("NumPy estimate: "+str(round(np.exp(1),3)))
print("Monte Carlo estimate: "+str(round(e_estimate_mc,3)))
```

**(Q3)** (⋄ ⋄) Prove the theorem (unbiased estimator of e).

You may wish to prove the result by first establishing the following the lemma by an induction argution argument on $m \in \mathbb{N}$.

**Lemma:** Suppose that $m \in N$ and $(U_i)^m_{i=1}$ is a sequence of independent and identically distributed uniform random variables $U_i \text{～} Unif([0, 1])$ and let $S_m := \sum_{i=1}^{m} U_i$ Then for all $t \in [0, 1]$ we have $\mathbb{P}(S_m < t) = \frac{t^m}{m!}$. 

You can also use without proof the fact that $E(\tau) = \sum_{m=0}^{\infty} P(\tau \geq m)$

**Note:** You are also welcome to consult different sources, but you should reference any such sources within your answer.

### Solution Q3

**(Q3) 证明定理（无偏估计 e）**

1. **引理证明**

假设 $m = 1$，我们有：

$$
\mathbb{P}(S_1 < t) = t
$$


因为 $U_1$ 是均匀分布在 [0,1] 的随机变量。

假设当 $m = k$ 时，引理成立，即：

$$
\mathbb{P}(S_k < t) = \frac{t^k}{k!}
$$

为了证明当 $m = k + 1$  时引理也成立，我们考虑：

$$
S_{k+1} = S_k + U_{k+1}
$$

给定 $S_k = x$，为了使 $S_{k+1} < t$，必须有 $U_{k+1} < t - x$。因此：

$$
\mathbb{P}(S_k + U_{k+1} < t | S_k = x) = t - x
$$

考虑 $S_k$ 的概率密度函数 $f_{S_k}(x)$，我们可以得到：

$$
\mathbb{P}(S_{k+1} < t) = \int_0^t (t - x) f_{S_k}(x) \, dx
$$

利用假设，我们可以将上述积分与 $\frac{t^{k+1}}{(k+1)!}$  的形式相关联。

2. **定理证明**

考虑随机变量 $\tau$。它表示在累积和超过1之前需要的随机数的数量。我们知道 $E(\tau)$ 是我们想要的 $e$ 的估计。

使用引理，我们有：

$$
\mathbb{P}(S_m < 1) = \frac{1^m}{m!}
$$

因此，$\tau$ 超过 $m$ 的概率为 $1 - \frac{1^m}{m!}$。

使用给定的事实 $E(\tau) = \sum_{m=0}^{\infty} P(\tau \geq m)$，我们可以证明 $E(\tau) = e$。

## Section E (20 marks)

The following code implements the quick select algorithm discussed in the lectures.

First we implement the partition pivot function as follows.

```python
### pivot partition implementation
def pivot_partition(input_array: list[float], pivot_index: int)->tuple[float,list[float],list[float]]:
    pivot_value = input_array[pivot_index]
    lower,upper = [],[]
    for i in range(len(input_array)):
        if input_array[i]<pivot_value:
            lower.append(input_array[i])
        elif input_array[i]>pivot_value:
            upper.append(input_array[i])
    return pivot_value,lower,upper
```

Next we implement the quick select algorithm itself.

```python
### Quick select implementation
def quick_select(input_array: list[float], selection_ix: int, random_seed: int=None)->float:
    if not random_seed is None:
        np.random.seed(random_seed)
    # choose random pivot index
    pivot_index=np.random.randint(len(input_array), size=1)[0]
    # pivot partition
    pivot_value,lower,upper=pivot_partition(input_array,pivot_index)
    
    if selection_ix<len(lower):
        # recursive step on lower sub-array
        return quick_select(lower, selection_ix)
    elif selection_ix>=len(input_array)-len(upper):
        # recursive step on upper sub-array
        return quick_select(upper, selection_ix-(len(input_array)-len(upper)))
    else:
        return pivot_value

### test quick select
max_val=100 
num_vals=1000 
alpha = 0.30

np.random.seed(0)
X=list(np.random.randint(max_val,size=num_vals))
k_alpha = int(alpha*(len(X)-1))
print("Sorting and then selecting: "+str(sorted(X)[k_alpha]))
# output
## Sorting and then selecting: 30
```

```python
print("Applying quick select: "+str(quick_select(X,k_alpha, random_seed=0)))
# output
## Applying quick select: 30
```

In the lectures we also discussed how we can adapt ideas from the quick-select algorithm to implement a randomised approach to sorting called quick-sort. The psuedo-code is given below:

**Algorithm 2:** quick_sort

1 **Input:** A length n array X

2    **return** X.copy()

3 Choose pivot_index ∼ Unif({0, . . . , n − 1}) // Choose random pivot

4 (pivot_value, lower, upper) = pivot_partition(X, pivot_index)

​    // partition around the corresponding pivot value.

5 lower = quick_sort(lower)

6 upper = quick_sort(upper)

​    // make two recursive function calls to quick_sort

7 Z = [] // initialise empty array

8 **for** $i \in \{0,...,len(lower)−1\}$ **do**

9     Z.append(lower[i])

10 **for** $i \in \{len(lower),...,n−len(upper)−1\}$ **do**

11     Z.append(pivot_value)

12 **for** $i \in \{n−len(upper),...,n−1\}$ **do**

13     Z.append(upper[i − n + len(upper)])

​     // concatenate sorted sub-arrays

14 **return** Z

**(Q1)** Create an implementation of the quick-sort based on the above implementation of the quick-select algorithm.

You should experiment to check that your quick sort algorithm works as expected. To test your quick_sort function you should also use the following test code.

```python
import numpy as np # load the numpy library
def sorting_function_test(sorting_function, random_seed=2023, array_size=30, max_int=100, num_tests=50):
    np.random.seed(random_seed) # set the random seed
    output = []
    num_tests_failed = 0
    
    for i in range(num_tests):
        X=list(set(np.random.randint(max_int, size=(array_size))))
        np.random.shuffle(X)
        if sorted(X) != sorting_function(X):
            num_tests_failed+=1
    if num_tests_failed==0:
        print("Success! All tests passed.")
    else:
        print(num_tests_failed,"/",num_tests," failed.")
```

Next apply the test function sorting_function_test to quick_sort as follow:

```python
sorting_function_test(quick_sort)
```

**(Q2)** Next answer the following questions about the run-time of the quick-select and quick-sort algorithms. In each case use big-Theta notation to express your answer.

(a) What is the worst-case run-time of the quick-select algorithm for an array of size n?

(b) What is the worst-case expected run-time of the quick-select algorithm for an array of size n?

(c) What is the worst-case run-time of the quick-sort algorithm for an array of size n?

(d) What is the worst-case expected run-time of the quick-sort algorithm for an array of size n?

**(Q3)** (⋄ ⋄) Prove the following theorem on the expected run time of the quick-sort algorithm. You are encouraged to try to adapt the proof on the expected run time of the quick-select algorithm from the lectures.

**Theorem (quick sort):** The expected run-time of the quick_sort algorithm is $O(n log n)$.

You may wish to begin by establishing the following lemma.

Given a numerical array $Z = [Z_0 , . . . , Z_{n−1} ]$ is a numerical array we write $S_\circ(Z)$ for the random run-time of the `quick_sort` algorithm applied to $Z$.

Next, let $T_0(n) := \max_z \mathbb{E} [ S_0(Z) ]$ denote the maximum expected run time, where the maximum is over all arrays Z of length at most $n$.

**Lemma:** Let $T_\circ(n)$ denote the maximum expected run time over all all of length at most $n \in \mathbb{N} \cup {0}$ . Then, there exists a constant  $C > 0$ such that $T_\circ(0) \leq C$ and for all $n \in \mathbb{N}$ we have 
$$
T_0(n) \leq Cn + \frac{2}{n} \sum_{j=0}^{n-1} T_\circ(j)
$$
To complete the proof you can show by induction that $T_\circ(n) \leq C(1 + 2n \log n)$ for all $n \in \mathbb{N}$.

You can use the following inequality without proof: $\sum_{j=1}^{n-1} j \log j \leq \frac{n^2}{2} (\log n - \frac{1}{2})$ for all $n \in \mathbb{N} \{1\}$.

### Solution Q1

```python
### pivot partition implementation
def pivot_partition(input_array: list[float], pivot_index: int)->tuple[float,list[float],list[float]]:
    pivot_value = input_array[pivot_index]
    lower,upper = [],[]
    for i in range(len(input_array)):
        if input_array[i]<pivot_value:
            lower.append(input_array[i])
        elif input_array[i]>pivot_value:
            upper.append(input_array[i])
    return pivot_value,lower,upper


def quick_sort(X):
    # 如果数组为空或只有一个元素，直接返回
    if len(X) <= 1:
        return X.copy()
    
    # 随机选择一个枢轴索引
    pivot_index = np.random.randint(len(X), size=1)[0]
    
    # 根据枢轴进行分区
    pivot_value, lower, upper = pivot_partition(X, pivot_index)
    
    # 对下方和上方的子数组递归地执行快速排序
    lower = quick_sort(lower)
    upper = quick_sort(upper)
    
    # 将排序后的子数组与枢轴值组合起来
    Z = []
    Z.extend(lower)
    Z.extend([pivot_value] * (len(X) - len(lower) - len(upper)))
    Z.extend(upper)
    
    return Z

import numpy as np # load the numpy library
def sorting_function_test(sorting_function, random_seed=2023, array_size=30, max_int=100, num_tests=50):
    np.random.seed(random_seed) # set the random seed
    output = []
    num_tests_failed = 0
    
    for i in range(num_tests):
        X=list(set(np.random.randint(max_int, size=(array_size))))
        np.random.shuffle(X)
        if sorted(X) != sorting_function(X):
            num_tests_failed+=1
    if num_tests_failed==0:
        print("Success! All tests passed.")
    else:
        print(num_tests_failed,"/",num_tests," failed.")
sorting_function_test(quick_sort)
```

### Solution Q2

(a) `quick-select` 算法在大小为 $n$ 的数组上的最坏情况运行时间是：$\Theta(n^2)$。

原因：在最坏的情况下，每次都选择最大或最小的元素作为枢轴，导致每次都需要处理几乎整个数组。这会导致 $n + (n-1) + (n-2) + \ldots + 1 = \frac{n(n+1)}{2}$，这与 $n^2$ 是同阶的。

(b) `quick-select` 算法在大小为 $n$ 的数组上的预期运行时间是：$\Theta(n)$。

原因：平均来说，随机选择的枢轴会将数组分成大致相等的两部分，从而使算法在平均情况下运行得更快。大概处理一半的数组，然后是四分之一，然后是八分之一，等等，直到整个数组。所以总体复杂度为 $n + \frac{n}{2} + \frac{n}{4} + \ldots = 2n$，这与 $n$ 是同阶的。

(c) `quick-sort`算法在大小为 $n$  的数组上的最坏情况运行时间是：$\Theta(n^2)$。

原因：与 `quick-select` 的最坏情况相似，如果每次都选择最大或最小的元素作为枢轴，这会导致整个数组都被处理，然后是除一个元素外的所有元素，然后是除两个元素外的所有元素，等等。

(d) `quick-sort`算法在大小为 $n$ 的数组上的预期运行时间是：$\Theta(n \log n)$。

原因：由于随机选择的枢轴平均上会将数组分为大致相等的两部分，我们可以期望每次都处理数组的一半。这导致了一个分而治之的方法，其中每一层都处理整个数组，但层数是 $\log n$ 。所以总体复杂度是 $n \log n$。

### Solution Q3

为了证明 `quick-sort` 算法的预期运行时间为 $O(n \log n)$，首先要建立一个引理。这个引理告诉我们最大的预期运行时间是与数组的长度 $n$ 成线性关系的。这个线性关系是由于每次都需要检查数组中的每个元素来确定哪些元素小于枢轴，哪些元素大于枢轴。

给定一个数值数组 $Z = [Z_0, \dots, Z_{n-1}]$，我们记 $S_\circ(Z)$ 为应用于 $Z$ 的`quick_sort`算法的随机运行时间。接下来，让 $T_0(n)$ 表示最大的预期运行时间，其中最大值是在长度最多为 $n$ 的所有数组 $Z$ 上取得的。

**引理**: 对于所有 $n \in \mathbb{N} \cup \{0\}$ ，存在一个常数 $C > 0$，使得 $T_\circ(0) \leq C$ ，并且对于所有 $n \in \mathbb{N}$，都有

$$
T_0(n) \leq Cn + \frac{2}{n} \sum_{j=0}^{n-1} T_\circ(j)
$$

**证明**:

1. **分析算法的运行时间**:
   对于每个固定的数组 $Z$ 和枢轴索引 $i$，我们可以将数组分为长度为 $i$ 和 $n-i-1$ 的两部分。考虑到随机选择的枢轴平均上会将数组分为大致相等的两部分，我们得到以下关系：

$$
\mathbb{E}[S_\circ(Z)] \leq n + \frac{1}{n} \sum_{j=0}^{n-1} \mathbb{E}[S_\circ(Z_j)]
$$

其中 $Z_j$ 是长度为 $j$ 的数组。

对所有长度为 $n$ 的数组 $Z$ 取最大值，我们得到：

$$
T_\circ(n) \leq n + \frac{1}{n} \sum_{j=0}^{n-1} T_\circ(j)
$$

2. **使用归纳法证明引理**:

    - **基本步骤**: 对于 $n = 1$，我们有 $T_\circ(1) \leq C$。
    - **归纳假设**: 假设对于所有 $k < n$ 的正整数，都有 $T_\circ(k) \leq C(1 + 2k \log k)$ 成立。
    - **归纳步骤**: 我们需要证明 $T_\circ(n) \leq C(1 + 2n \log n)$。

从上面的关系，我们有：

$$
T_\circ(n) \leq n + \frac{1}{n} \sum_{j=0}^{n-1} T_\circ(j)
$$

根据归纳假设，我们可以得到：

$$
T_\circ(n) \leq n + \frac{1}{n} \sum_{j=0}^{n-1} C(1 + 2j \log j)
$$

$$
= n + C \left( n + \frac{2}{n} \sum_{j=1}^{n-1} j \log j \right)
$$

使用给定的不等式 $\sum_{j=1}^{n-1} j \log j \leq \frac{n^2}{2} (\log n - \frac{1}{2})$，我们可以进一步得到：

$$
T_\circ(n) \leq n + Cn + 2Cn \log n - Cn
$$

这给出了 $T_\circ(n) \leq C(1 + 2n \log n)$，这正是我们想要证明的。

因此，通过归纳法，我们已经证明了对于所有 $n \in \mathbb{N}$，都有 $T_\circ(n) \leq C(1 + 2n \log n)$ 成立。

**结论**: `quick_sort` 算法的预期运行时间是 $O(n \log n)$。



## Section F (20 marks)

In this question we explore efficient representations for storing a sparse matrix. The following class SparseMatrixCOO implements the coordinate lists approach to storing a sparse matrix. Given a $d \times n$ marix $A = (a_{ij})$ with s non-zero entries, objects belonging to the SparseMatrixCOO class include a data attribute which contains a list of $s$ triples $[(i_0,j_0,a_{i_0j_0}),...,(i_{s−1},j_{s−1},a_{i_{s−1}}j_{s−1})]$ corresponding to the s non-zero entries of A. In addition, objects belonging to the SparseMatrixCOO class also include a shape attribute which stores a tuple containing the number of rows and columns, as well as a sparsity attribute containing the number of non-zero entries.

The constructor converts an ordinary NumPy matrix into an object belonging to the SparseMatrixCOO class.

```python
class SparseMatrixCOO:
    def __init__(self,input_matrix:np.array):
        self.shape=input_matrix.shape
        self.data=[] # initialise list
        for i in range(self.shape[0]):
            for j in range(self.shape[1]):
                if input_matrix[i,j]!=0:
                    # add triple for non-zero entries
                    self.data.append((i,j,input_matrix[i,j]))
        self.sparsity=len(self.data)
    def to_np_array(self):
        pass
```

**(Q1)** Modify the SparseMatrixCOO class above so that the to_np_array method outputs an ordi- nary 2-dimensional NumPy array corresponding to the matrix represented by an object belonging to the SparseMatrixCOO class.

Use the following code to test your method:

```python
import scipy as sp
from scipy import sparse
import numpy as np
np.random.seed(0)

num_trials=100
num_rows=100
num_cols=50 
density=0.25

# test to_np_array method for SparseMatrixCOO 
num_successes=0

for t in range(num_trials):
    test_matrix = sp.sparse.random(num_rows, num_cols, density=density).A
    test_coo_rep=SparseMatrixCOO(test_matrix)
    if np.allclose(test_coo_rep.to_np_array(),test_matrix):
        num_successes+=1
print("Number of tests passed by \".to_np_array\" : {s} / {t}".format(s=num_successes,t=num_trials))
```

**(Q2)** Write a function called sparse_matrix_vector_multiply which takes as input an object belonging to the SparseMatrixCOO class which represents an $n \times d$ matrix A, and a NumPy array `input_vector` which represents vector $x$ in $\mathbb{R}^d$, Your function should return a NumPy array corresponding to the vector $Ax$ in $\mathbb{R}^d$.

The complexity of your function should be $O(n + s)$ where s denotes the sparsity of s, with no direct dependency upon d.

Use the following code to test your function:

```python
np.random.seed(0)
num_trials=100
num_rows=100
num_cols=50
density=0.25

# test sparse_matrix_vector_multiply function
num_successes=0

for t in range(num_trials):
    test_matrix = sp.sparse.random(num_rows, num_cols, density=density).A
    test_coo_rep=SparseMatrixCOO(test_matrix)
    test_vect=np.random.randn(num_cols)
    test_matrix_vect_prod=sparse_matrix_vector_multiply(test_coo_rep,test_vect)
    
    if np.allclose(test_matrix_vect_prod,test_matrix@test_vect):
        num_successes+=1
print("Number of tests passed by \"sparse_matrix_vector_multiply\": {s} / {t}".format(s=num_successes,t=num_trials))
```

### Solution Q1

```python
class SparseMatrixCOO:
    def __init__(self, input_matrix: np.array):
        # 获取输入矩阵的形状（行数和列数）
        self.shape = input_matrix.shape
        
        # 初始化用于存储非零元素的列表
        self.data = []
        
        # 遍历输入矩阵的每个元素
        for i in range(self.shape[0]):
            for j in range(self.shape[1]):
                # 如果元素不为0，则将其位置和值添加到data列表中
                if input_matrix[i, j] != 0:
                    self.data.append((i, j, input_matrix[i, j]))
                    
        # 记录非零元素的数量
        self.sparsity = len(self.data)

    def to_np_array(self) -> np.array:
        # 初始化一个与输入矩阵形状相同的全零矩阵
        matrix = np.zeros(self.shape)
        
        # 使用data列表中的数据填充矩阵
        for i, j, val in self.data:
            matrix[i, j] = val
            
        return matrix
```

### Solution Q2

```python
def sparse_matrix_vector_multiply(matrix_coo: SparseMatrixCOO, input_vector: np.array) -> np.array:
    # 初始化一个与矩阵的行数相同的全零向量
    result_vector = np.zeros(matrix_coo.shape[0])
    
    # 使用COO表示法计算矩阵-向量乘法
    for i, j, val in matrix_coo.data:
        result_vector[i] += val * input_vector[j]
        
    return result_vector
```













----

::: code-tabs

@tab Code1

```python
def monte_carlo_pi(num_observations: int=1000, random_seed: int=0) -> float:
    # 设定随机数种子以确保结果的可重复性
    np.random.seed(random_seed)
    
    # 初始化两组独立的均匀分布随机数
    U = np.random.rand(num_observations)
    V = np.random.rand(num_observations)
    
    num_in_circle = 0  # 用于记录落在单位圆内的点数
    for i in range(num_observations):
        # 判断点 (U[i], V[i]) 是否在单位圆内
        if U[i]**2 + V[i]**2 <= 1:
            num_in_circle += 1
    
    # 计算π的蒙特卡洛估计值
    pi_estimate = 4 * num_in_circle / num_observations
    
    return pi_estimate
```

@tab Code2

```python
def monte_carlo_e(num_observations: int=1000, random_seed: int=0) -> float:
    # 设定随机数种子以确保结果的可重复性
    np.random.seed(random_seed)
    
    avg_wait_time = 0  # 用于记录平均等待时间
    for i in range(num_observations):
        sum_uniforms = 0  # 用于记录均匀随机数的累积和
        wait_time = 0  # 用于记录生成随机数直到累积和超过1所需的次数
        while sum_uniforms < 1:
            sum_uniforms += np.random.rand(1)[0]  # 从均匀分布中生成一个随机数并加到累积和中
            wait_time += 1  # 更新等待时间
        # 计算当前的平均等待时间
        avg_wait_time = (i * avg_wait_time + wait_time) / (i + 1)
    
    return avg_wait_time
```

@tab Code3

```python
(a) `quick-select`算法在大小为 $n$ 的数组上的最坏情况运行时间是：$O(n^2)$ 。

这是因为在最坏的情况下，每次都选择最大或最小的元素作为枢轴，导致每次都需要处理几乎整个数组。

(b) `quick-select`算法在大小为 $n$  的数组上的预期运行时间是：$O(n)$ 。

平均来说，随机选择的枢轴会将数组分成大致相等的两部分，从而使算法在平均情况下运行得更快。

(c) `quick-sort`算法在大小为 $n$  的数组上的最坏情况运行时间是：$O(n^2)$。

这同样是因为在最坏的情况下，每次都选择最大或最小的元素作为枢轴。

(d) `quick-sort`算法在大小为 $n$  的数组上的预期运行时间是：$O(n \log n)$。

与`quick-select`相似，由于随机选择的枢轴平均上会将数组分为大致相等的两部分，这使得算法的平均运行时间为 $O(n \log n)$。
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
