---
title: 09-Lab 9：Time complexity. More practice on debugging and programming
icon: blog
date: 2025-10-08 14:17:57
author: bornforthis
isOriginal: true
sticky: false
star: false
article: true
timeline: true
image: false
navbar: true
sidebarIcon: true
comment: true

backToTop: true
toc: true
---

## 1. Objectives

The purpose of this week's lab is to:

- Analyse time complexity of certain programs.
- Practice debugging code again.
- Practice more programming problems.

**If you have any questions about any of the material in the previous labs, now is a good time to ask your tutor for help during the lab.**

::: info

If you do not have time to finish all exercises (in particular, the programming problems) during the lab time, you should continue working on them later.

:::

## 2. Time complexity

As we have seen in the lecture last week, the big-O notation is used to denote the *worst-case* time complexity of an algorithm to solve a certain problem. If the problem size is n*n* and the algorithm needs $x \times n$ numerical *operations* to solve it, where c*c* is a constant number (thus independent of $n$), we say that the algorithm has a *linear* time complexity $O(n)$. Here, we assume that each operation has a constant time complexity $O(1)$. (Otherwise, the algorithm won't have a linear complexity anymore.)

For example, the following function finds the index of an element in a sequence, (returning `-1` if the element is not found):

```python
def find_element(sequence, element):
    for i in range(len(sequence)):
        if sequence[i] == element:
            return i
    return -1        
```

It has time complexity of $O(n)$, where n*n* is the length of the sequence. This is because the main `for` loop needs n*n* comparisons in the worst-case, namely when the element we are looking for does not appear in the sequence.

As a rule of thumb, a `for` or `while` loop with n*n* iterations indicates that the code may have a complexity of $O(n)$. If there are two loops nested within each other, the code might have a *quadratic* time complexity of $O(n2)$.

Let's look at an example: the following code computes the minimum absolute difference between any pairs of elements in a numerical sequence:

```python
def smallest_difference(sequence):
    min_diff = abs(sequence[0]-sequence[1])
    for i in range(len(sequence)-1):
        for j in range(i+1, len(sequence)):
            diff = abs(sequence[i] - sequence[j])
            if diff < min_diff:
                min_diff = diff
    return min_diff
```

Let's analyse the time complexity of this code. Let n*n* be the length of the input sequence. The outer `for` loop has $n−1$ iterations using index $i$. In the first iteration of the outer loop, i.e., when $i=0$, the inner loop iterates in `range(1,n)`, each doing four operations (subtraction, `abs`, comparison, and assignment), totalling $4(n−1)$ operations. In the 2nd iteration of the outer loop ($i=1$), the inner loop iterates over `range(2,n)`, which means $n−2$ iterations. And so on. Summing all together, the total number of operations is:
$$
4(n - 1) + 4(n - 2) + \cdots + 4 = 4n \frac{n - 1}{2} = 2n^2 - 2n
$$
Now, when $n$ is large enough, the $n^2$ term will dominate over the n*n* term. We can also ignore the constant $2$ multiplying this leading term. That means that the function `smallest_difference` has time complexity $O(n2)$.

## 3. Exercise 1.0

Each of the following three functions takes as input an integer n. For each function, give its computational complexity in big-O notation in terms of n.

It is important you to format your answer exactly. If the algorithm has linear time complexity, you should answer:

$O(n)$

If the algorithm has cubic time complexity, then either of the following are acceptable:

$O(n^3)$

$O(n**3)$

Other possible time complexities should be formatted similarly.

### 3.1 Question 1

```python
def func_a(n):
    total = 0
    for i in range(n):
        for j in range(n):
            total = total + i * j
    return total
```

> $O(n^2)$

### 3.2 Question 2

```python
def fun_b(n):
    total = 0
    for i in range(100 * n):
        for j in range(10):
            total = total + i * j
    return total
```

> 外层 `100*n`、内层常数 `10`，常数忽略：
>
> $O(n)$

### 3.3 Question 3

```python
def fun_c(n):
    total = 0
    for i in range(100):
        for j in range(n):
            total = total + i * j
        for k in range(n):
            total = total + i * k
        for l in range(100):
            total = total + i * l
    return l
```

> 外层常数 `100`；内有两个 `range(n)` 和一个常数 `range(100)`，总体仍线性于 `n`：
>
> $O(n)$

## 4. Exercise 1.1: Efficient Implementation of smallest_difference

It turns out that there is another algorithm for `smallest_difference` with a time complexity of only $O(n \log(n))$. Can you figure it out? Write your solution in the scaffold file `smallest_difference.py` with that time complexity.

::: info

After thinking about it and you still can't find it out, click the spoiler below for a hint!

:::

**Expand：** What if the sequence is sorted? What is the time for sorting?

**smallest_difference.py**

```python
def smallest_difference(sequence):
    # TODO: Find the smallest difference 
    # between numbers in the sequence
    # in worst-case O(n log(n)) time.
    pass
```

```python
def smallest_difference(sequence):
    """
    Return the smallest absolute difference between any two numbers in sequence.
    Worst-case time: O(n log n) due to sorting; the scan is O(n).

    Assumes len(sequence) >= 2. Raises ValueError otherwise.
    """
    if len(sequence) < 2:
        raise ValueError("sequence must contain at least two elements")

    seq = sorted(sequence)
    min_diff = abs(seq[1] - seq[0])
    for i in range(2, len(seq)):
        d = abs(seq[i] - seq[i - 1])
        if d < min_diff:
            min_diff = d
            if min_diff == 0:  # early exit: duplicate values
                return 0
    return min_diff
```



## 5. Exercise 1.2: Largest Difference

Here is an implementation to compute the maximum absolute difference in a similar style to `smallest_difference`:

```python
def largest_difference(sequence):
    max_diff = abs(sequence[0]-sequence[1])
    for i in range(1, len(sequence)):
        for j in range(i):
            diff = abs(sequence[i] - sequence[j])
            if max_diff < diff:
                max_diff = diff
    return max_diff
```

It has a time complexity of $O(n^2)$. You can of course use the same idea from exercise 1.1 to reduce the complexity to $O(n \log(n))$.

However, it turns out there is another algorithm with linear time complexity: $O(n)$. Can you work it out? Provide a solution to the `largest_difference` function with that time complexity.

**largest_difference.py**

```python
def largest_difference(sequence):
    # TODO: Find the largest difference 
    # between numbers in the sequence
    # in worst-case O(n log(n)) time
    pass
```

---

性质：最大绝对差值 = `max(sequence) - min(sequence)`（单次线性扫描即可）。

```python
def largest_difference(sequence):
    """
    Return the largest absolute difference between any two numbers in sequence.
    Worst-case time: O(n).

    Assumes len(sequence) >= 2. Raises ValueError otherwise.
    """
    if len(sequence) < 2:
        raise ValueError("sequence must contain at least two elements")

    it = iter(sequence)
    first = next(it)
    min_val = max_val = first
    for x in it:
        if x < min_val:
            min_val = x
        elif x > max_val:
            max_val = x
    return max_val - min_val
```



## 6. Exercise 1.3: Visualise Runtimes

We now want to plot the real running times of these algorithms on a computer. The provided program plots the running time for the $O(n^2)$ `smallest_difference` solution.

**Copy in your solution to exercise 1.1 and compare the graphs.**

::: info

To see the graphs on EdStem, enter the terminal and type in `python plot_time.py` to run the file.

:::

**Bonus (if you have extra time):** compare the $O(n2)$ solution of the largest difference problem to the $O(n)$ solution of the largest difference problem.

**plot_time.py**

::: code-tabs

@tab 题目

```python
import random
import time
import matplotlib.pyplot as plt

def plot_time(file_name, func, steps):
    seq = [random.random() for i in range(steps)]

    elapsed_times = []
    for n in range(2,steps):
        start_time = time.time()
        # run 10 times to reduce fluctuation
        for i in range(10):
            func(seq[:n])
        end_time = time.time()
        elapsed_times.append((end_time - start_time)/10)
    
    plt.figure()
    
    plt.plot(range(2,steps),elapsed_times)
    
    plt.xlabel("Size of Sequence")
    plt.ylabel("Running Time (s)")
    
    plt.savefig(file_name)
    plt.close()
    
    print("Total runtime: " + str(sum(elapsed_times)) + " seconds")



def smallest_difference_slow(sequence):
    min_diff = abs(sequence[0]-sequence[1])
    for i in range(len(sequence)-1):
        for j in range(i+1, len(sequence)):
            diff = abs(sequence[i] - sequence[j])
            if diff < min_diff:
                min_diff = diff
    return min_diff

if __name__ == "__main__":
    plot_time("smallest_difference_slow_300.png", smallest_difference_slow, 300)
```

@tab 答案

```python
import random
import time
import matplotlib.pyplot as plt

def plot_time(file_name, func, steps):
    seq = [random.random() for _ in range(steps)]

    elapsed_times = []
    for n in range(2, steps):
        start_time = time.time()
        # run 10 times to reduce fluctuation
        for _ in range(10):
            func(seq[:n])
        end_time = time.time()
        elapsed_times.append((end_time - start_time) / 10)

    plt.figure()
    plt.plot(range(2, steps), elapsed_times)
    plt.xlabel("Size of Sequence")
    plt.ylabel("Running Time (s)")
    plt.savefig(file_name)
    plt.close()

    print("Total runtime:", sum(elapsed_times), "seconds")

def smallest_difference_slow(sequence):
    # O(n^2)
    if len(sequence) < 2:
        raise ValueError("sequence must contain at least two elements")
    min_diff = abs(sequence[0] - sequence[1])
    for i in range(len(sequence) - 1):
        for j in range(i + 1, len(sequence)):
            diff = abs(sequence[i] - sequence[j])
            if diff < min_diff:
                min_diff = diff
    return min_diff

def smallest_difference_fast(sequence):
    # O(n log n): sort + scan neighbors
    if len(sequence) < 2:
        raise ValueError("sequence must contain at least two elements")
    seq = sorted(sequence)
    min_diff = abs(seq[1] - seq[0])
    for i in range(2, len(seq)):
        d = abs(seq[i] - seq[i - 1])
        if d < min_diff:
            min_diff = d
            if min_diff == 0:
                return 0
    return min_diff

if __name__ == "__main__":
    plot_time("smallest_difference_slow_300.png", smallest_difference_slow, 300)
    plot_time("smallest_difference_fast_300.png", smallest_difference_fast, 300)
```

:::



## 7. Debugging problems

Learning to read, understand and debug code is a very important skill. There may be a debugging question in the final exam. So here are some debugging exercises to practice this skill.

### 7.1 Exercise 2.1

The following are attempts to define a function that takes three (numeric) arguments and checks if any one of them is equal to the sum of the other two. For example, `any_one_is_sum(1, 3, 2)` should return `True` (because `3 == 1 + 2`), while `any_one_is_sum(0, 1, 2)` should return `False`.

However, the function below is incorrect.

- Find examples of arguments that cause it to *return* the wrong answer.
- Can you work out how they are *intended* to work? That is, what was the idea of the programmer who wrote them? What comments would be useful to add to explain the thinking? Is it possible to fix them by making only a small change to each function?

#### 7.1.1 Question 1

```python
def any_one_is_sum(a,b,c):
    sum_c=a+b
    sum_b=a+c
    sum_a=b+c
    if sum_c == a+b:
        if sum_b == c+a:
            if sum_a == b+c:
                return True
    else:
        return False
```

::: details

- **现象**：几乎对任意输入都返回 `True`，因为它把“和”的变量又和同一表达式比较（恒真），例如 `(1,2,10)` 本应 `False`，却返回 `True`。

- **意图**：应检查是否有一个数等于另两个数之和。

**修正版（最小改动 + 明确逻辑）：**

```python
def any_one_is_sum(a, b, c):
    # True if ANY of: c == a + b, b == a + c, a == b + c
    if c == a + b:
        return True
    if b == a + c:
        return True
    if a == b + c:
        return True
    return False
```



:::

#### 7.1.2 Question 2

```python
def any_one_is_sum(a,b,c):
    if b + c == a:
        print(True)
    if c + b == a:
        print(True)
    else:
        print(False)
    return False
```

::: details

- **问题**：使用 `print` 而非 `return`；第二个 `if` 的 `else` 只对应第二个判断；函数**总是**返回 `False`。
- **例子**：`(2,1,1)` 本应 `True`，函数打印一些东西后仍返回 `False`。

**修正版（保持风格但正确返回）：**

```python
def any_one_is_sum(a, b, c):
    if a == b + c or b == a + c or c == a + b:
        return True
    else:
        return False
```





:::



#### 7.1.3 Question 3

```python
def any_one_is_sum(a, b, c):
    if a+b==c and a+c==b:
        return True
    else:
        return False
```

::: details

- **问题**：用了 `and`，要求同时满足两条等式，几乎不可能（除非都为 0）。
- **例子**：`(1,3,2)` 本应 `True`，却返回 `False`。

**修正版（把 and 改为 or）：**

```python
def any_one_is_sum(a, b, c):
    return (a + b == c) or (a + c == b) or (b + c == a)
```



:::

### 7.2 Exercise 2.2

Here is a function that is meant to return the position (index) of a given element in a sequence; if the element does not appear in the sequence, it returns the length of the sequence. For example, `find_element([3,2,1,4], 1)` should return `2`, since that is the index where we find a `1`.

```python
def find_element(sequence, element):
    i = 0
    while sequence[i] != element:
        if i < len(sequence):
            i = i + 1
        i = i + 1
    return i
```

However, the function is not correct. For some inputs it will cause a runtime error. Find an example of arguments that cause an error to occur. Can you correct the error without introducing another?

::: details

- **错误示例**：`find_element([1,2,3], 99)` 触发 `IndexError`。原因：`i` 每轮可能加两次，并且没有在访问前检查 `i < len(sequence)`。
- **正确思路**：循环条件里同时检查**没越界**且**尚未命中**。

**修正版：**

```python
def find_element(sequence, element):
    i = 0
    while i < len(sequence) and sequence[i] != element:
        i += 1
    return i  # 若未找到，i == len(sequence)
```

> 可选：若你希望“未找到时返回 -1”，把最后一行改为：`return i if i < len(sequence) else -1`。

:::

### 7.3 Exercise 2.3

Here is a function that is meant to count the number of repetitions of a substring in a string. For example, if the string is `'abcdabcf'` and the substring is `'ab'`, the count should be 2. (Of course, for any of the substrings `'a'`, `'b'`, `'c'`, `'ab'`, `'bc'` or `'abc'`, the count should be 2.)

```python
def count_repetitions(string, substring):
    '''
    Count the number of repetitions of substring in string. Both
    arguments must be strings.
    '''
    n_rep = 0
    # p is the next position in the string where the substring starts
    p = string.find(substring)
    # str.find returns -1 if the substring is not found
    while p >= 0:
        n_rep = n_rep + 1
        # find next position where the substring starts
        p = string[p + 1:len(string) - p].find(substring)
    return n_rep
```

However, the function is not correct. For some inputs it will return the wrong answer, and for some inputs it will get stuck in an infinite loop. Find examples of arguments that cause these errors to happen.

Among the many string methods, there is one that does what this function is meant to do: `'abcdabcf'.count('abc')` will return 2. Can you fix the function above *without* using the string `count` method, i.e., keeping the idea of the original function and only correcting the error?

::: details

原始代码会：

- 用切片 `string[p + 1:len(string) - p]` 继续找，索引**不再对应原串**，导致计数错误；
- 对某些输入可能死循环；
- 对空子串 `''` 也会异常。

**错误示例：**

- `count_repetitions('aaaa', 'aa')` 期望（若允许重叠）是 `3`（位置 0、1、2），原实现会算错。
- `count_repetitions('abc', '')` 可能异常或逻辑混乱。

**修正版（保留“从上次起点+1 开始查找”= 允许重叠）：**

```python
def count_repetitions(string, substring):
    '''
    Count the number of repetitions of substring in string (allow overlaps).
    '''
    if not isinstance(string, str) or not isinstance(substring, str):
        raise TypeError("Both arguments must be strings")
    if substring == "":
        # 常见约定：空子串次数要么定义为 0，要么为 len(string)+1。
        # 这里统一返回 0，避免歧义和潜在死循环。
        return 0

    n_rep = 0
    p = string.find(substring)
    while p >= 0:
        n_rep += 1
        p = string.find(substring, p + 1)  # 允许重叠：下一次从 p+1 开始
    return n_rep
```

若你需要**不允许重叠**（与 `str.count` 一致），把 `p + 1` 改为 `p + len(substring)`。

:::

### 7.4 Exercise 2.4

Here is another string function. This function is meant to remove all occurrences of a substring from a string, and return the result. For example, if the string is `'abcdabcf'` and the substring is `'bc'`, we want the function to return `'adaf'`.

```python
def remove_substring_everywhere(string, substring):
    '''
    Remove all occurrences of substring from string, and return
    the resulting string. Both arguments must be strings.
    '''
    p = string.find(substring)
    lsub = len(substring) # length of the substring
    while p >= 0:
        string[p : len(string) - lsub] = string[p + lsub : len(string)]
        p = string.find(substring)
    return string
```

This function is also not correct, and should cause a runtime error on almost any input. Like in the previous problem, try to make the function do what it is supposed to while keeping the idea of the original function Can you also find a string method that does (or can be made to do) what this function is intended to do?

::: details

- **问题**：对字符串做切片赋值（`string[...] = ...`）——Python 字符串是**不可变**的，会 TypeError。
- **正确思路**：每次找到位置 `p`，用切片**构造新字符串**并继续查找。

**修正版（不允许重叠/允许都可以，下面示例不重叠）：**

```python
def remove_substring_everywhere(string, substring):
    '''
    Remove all occurrences of substring from string and return the result.
    '''
    if not isinstance(string, str) or not isinstance(substring, str):
        raise TypeError("Both arguments must be strings")
    if substring == "":
        return string  # 约定：移除空子串无意义，直接返回原串

    lsub = len(substring)
    p = string.find(substring)
    while p >= 0:
        string = string[:p] + string[p + lsub:]
        p = string.find(substring)
    return string
```

> **等价库方法**：`string.replace(substring, "")` 一行即可完成同样的工作（默认不重叠地移除全部出现）。

**小测试（可选）**

```python
assert smallest_difference([5, 2, 9, 4]) == 1  # 4 与 5
assert largest_difference([5, 2, 9, 4]) == 7   # 9 - 2

assert any_one_is_sum(1, 3, 2) is True
assert any_one_is_sum(0, 1, 2) is False

assert find_element([3,2,1,4], 1) == 2
assert find_element([3,2,1,4], 99) == 4

assert count_repetitions('abcdabcf', 'ab') == 2
assert count_repetitions('aaaa', 'aa') == 3  # 允许重叠的版本
assert remove_substring_everywhere('abcdabcf', 'bc') == 'adaf'
```



:::



::: details 公众号：AI悦创【二维码】

![](https://blog.images.bornforthis.cn/docs-images/sha256/77/77f67d48a67ec6a44a4ef1f01ffc85830eb3c121b1ece45dc5ada06e20e2f52b.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Web、Linux」，招收学员面向国内外，国外占 80%。全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](https://blog.images.bornforthis.cn/docs-images/sha256/30/3087c629da73428daa0ee050f5b31709c30f650686164b54c724b892a422c585.jpg)