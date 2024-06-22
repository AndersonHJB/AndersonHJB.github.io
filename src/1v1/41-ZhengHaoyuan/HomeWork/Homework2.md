---
title: NYU, Tandon School of Engineering Algorithms — Fall 2023 Homework #2
date: 2023-09-29 08:45:00
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

## Question 1:

Use the definitions of $O$ and of $Θ$ in order to show the following:

a. $5n^3 + 2n^2 + 3n = O(n^3)$

::: tabs

@tab shy

要证明这一点，我们需要找到常数 C 和 $n_0$ 使得对于所有 $n \geq n_0$，都有：

$5n^3 + 2n^2 + 3n \leq C · n^3$

我们可以选择 $C = 10$ 作为一个例子。当 $n \geq 1$ 时：

$5n^3 \leq 5n^3$

$2n^2 \leq 2n^3$

$3n \leq 3n^3$

把它们加起来得到：

$5n^3 + 2n^2 + 3n \leq 10n^3$

所以 $5n^3 + 2n^2 + 3n = O(n^3)$

@tab DH

要证明 \($5n^3 + 2n^2 + 3n = O(n^3)$\)，我们要根据 \(O\) 大O 符号的定义来进行。

根据大 O 的定义，函数 \($f(n) = O(g(n))$\) 如果存在常数 \(c\) 和 \($n_0$\) 使得对于所有的 ($n > n_0$)，都有 \($|f(n)| \leq c \cdot |g(n)|$\)。

考虑函数 \($f(n) = 5n^3 + 2n^2 + 3n$\) 和 ($g(n) = n^3$)。

为了证明 ($5n^3 + 2n^2 + 3n = O(n^3)$)，我们需要找到合适的常数 (c) 和 ($n_0$)。

对于所有的 \($n > 1$\)，我们有：

1) \($5n^3 \leq 5n^3$\)
2) ($2n^2 \leq 2n^3$)
3) ($3n \leq 3n^3$)

将这三个不等式加起来得到：

\[$5n^3 + 2n^2 + 3n \leq 5n^3 + 2n^3 + 3n^3 = 10n^3$\]

所以，对于 \($c = 10$\) 和 \($n_0 = 1$\)，我们有对于所有的 \($n > n_0$\)，\($5n^3 + 2n^2 + 3n \leq 10n^3$\)。

这就证明了 \($5n^3 + 2n^2 + 3n = O(n^3)$\)。

@tab 临时

:::

b. $\sqrt{7n^2 + 2n - 8} = Θ(n)$

::: details

首先，证明 $\sqrt{7n^2 + 2n - 8} = O(n)$:

选择 $C = \sqrt{7}$  和 $n_0 = 1$，则对于所有 $n \geq n_0$:

$7n^2 \geq 7n^2$

$2n \geq 0$

$-8 \geq -8$

因此，我们有：

$\sqrt{7n^2 + 2n - 8} \leq \sqrt{7n^2} = \sqrt{7}n$

所以，

---

考虑 $n \geq 1$ 时：

$\large 7n^2 + 2n - 8 \leq 7n^2 + 2n + n^2 = 8n^2 + 2n \leq 8n^2 + 2n^2 = 10n^2$

从而

$\large \sqrt{7n^2 + 2n - 8} \leq \sqrt{10n^2} = \sqrt{10}·n$

---

为了证明 $(\sqrt{7n^2 + 2n - 8} = Θ(n))$，我们需要使用大 ($O$) 和大 ($Θ$) 的定义。

首先，我们来定义大 (O) 和大 ($Θ$)：

1. ($f(n) = O(g(n))$) 如果存在正常数 (c) 和 ($n_0$)，使得当 \(n > n_0\) 时，有 \(0 \leq f(n) \leq c \cdot g(n)\)。
2. \(f(n) = Θ(g(n))\) 如果 \(f(n) = O(g(n))\) 并且 \(g(n) = O(f(n))\)。

为了证明 \(\sqrt{7n^2 + 2n - 8} = Θ(n)\)，我们需要做两件事：

1. 证明 $(\sqrt{7n^2 + 2n - 8})$ 是 ($O(n)$)。
2. 证明 ($n$) 是 ($O(\sqrt{7n^2 + 2n - 8})$)。

**证明1**：($\sqrt{7n^2 + 2n - 8}$) 是 ($O(n)$)

注意到 ($7n^2$) 是 ($7n^2 + 2n - 8$) 中的主导项，所以当 (n\) 足够大时，其他项相对于 ($7n^2$\) 的影响是可以忽略的。因此：

($\sqrt{7n^2 + 2n - 8} \leq \sqrt{7n^2 + 2n^2 + n^2} = \sqrt{10n^2} = \sqrt{10} \cdot n$)

这里，我们可以选择 $(c = \sqrt{10}$) 和 ($n_0 = 1$\)。因此，($\sqrt{7n^2 + 2n - 8}$) 是 ($O(n)$)。

**证明2**：($n$) 是 ($O(\sqrt{7n^2 + 2n - 8})$)

同样，我们注意到 ($7n^2$) 是 ($7n^2 + 2n - 8$) 中的主导项，所以：

($n \leq \sqrt{7n^2} = \sqrt{7} \cdot n$)

这里，我们可以选择 ($c = \sqrt{7}$) 和 ($n_0 = 1$)。因此，(n\) 是 ($O(\sqrt{7n^2 + 2n - 8})$\)。

由上述两个证明，我们得出结论：($\sqrt{7n^2 + 2n - 8} = Θ(n)$)。

:::

c. Show that if $d(n) = O(f(n))$ and $e(n) = O(g(n))$ , then the product $d(n)e(n)$ is $O(f(n)g(n))$ .

1. ($d(n) = O(f(n))$) 的定义是存在两个正数 \($c_1$\) 和 \($n_0$\)，对于所有 \($n \geq n_0$\)，有 \($d(n) \leq c_1 \cdot f(n)$\)。

2. \($e(n) = O(g(n))$\) 的定义是存在两个正数 \($c_2$\) 和 \($n_1$\)，对于所有 \($n \geq n_1$\)，有 \($e(n) \leq c_2 \cdot g(n)$\)。

现在我们要证明 \($d(n)e(n) = O(f(n)g(n))$\)。

给定上述的定义，当 \($n \geq \max(n_0, n_1)$\)，我们有：

\($d(n) \leq c_1 \cdot f(n)$\) 且 \($e(n) \leq c_2 \cdot g(n)$\)。

将两边相乘，我们得到：

\($d(n)e(n) \leq c_1 \cdot c_2 \cdot f(n) \cdot g(n)$\)。

此时，$(c_1 \cdot c_2)$ 是一个正常数，我们可以叫它为 \(c\)，且对于所有的 \($n \geq \max(n_0, n_1)$\)，都满足 \($d(n)e(n) \leq c \cdot f(n) \cdot g(n)$\)。这正好符合 \($d(n)e(n) = O(f(n)g(n))$\) 的定义。

因此，我们证明了当 \($d(n) = O(f(n))$\) 和 \($e(n) = O(g(n))$\) 时，乘积 \($d(n)e(n)$\) 是 \($O(f(n)g(n))$\)。

4284 1805 0409 2288



## Question 2:

Give a $θ$ characterization, in terms of $n$, of the running time of the following four functions:

```python
def example1(lst):
    """Return the sum of the prefix sums of sequence S."""
    n = len(lst)
    total = 0
    for j in range(n):
        for k in range(1 + j):
            total += lst[k]
    return total


def example2(lst):
    """Return the sum of the prefix sums of sequence S."""
    n = len(lst)
    prefix = 0
    total = 0
    for j in range(n):
        prefix += lst[j]
        total += prefix
    return total


def example3(n):
    i = 1
    sum = 0
    while i < (n * n):
        i *= 2
        sum += i
    return sum


def example4(n):
    i = n
    sum = 0
    while i > 1:
        for j in range(i):
            sum += i * j
        i //= 2
    return sum
```

::: details

这四个函数的时间复杂度分别是：

1. `example1`:
```python
def example1(lst):
    n = len(lst)
    total = 0
    for j in range(n):         # 这个循环运行了 n 次
        for k in range(1 + j): # 这个循环在第一次运行 1 次，在第二次运行 2 次，...，在最后一次运行 n 次。
            total += lst[k]
    return total
```
时间复杂度为：
\[$1 + 2 + 3 + \ldots + n = \frac{n(n + 1)}{2}$ \]
所以，时间复杂度是 ($O(n^2)$).

2. `example2`:
```python
def example2(lst):
    n = len(lst)
    prefix = 0
    total = 0
    for j in range(n):    # 这个循环运行了 n 次
        prefix += lst[j]
        total += prefix
    return total
```
每次循环的操作是常数时间，所以总的时间复杂度是 ($O(n)$).

3. `example3`:
```python
def example3(n):
    i = 1
    sum = 0
    while i < (n * n):   # 最坏的情况下这个循环运行了 log(n^2) 次，即 2log(n) 次。
        i *= 2
        sum += i
    return sum
```
时间复杂度是 ($O(\log n)$).

4. `example4`:
```python
def example4(n):
    i = n
    sum = 0
    while i > 1:        # 这个外部循环在最坏的情况下运行了 log(n) 次。
        for j in range(i):  # 这个内部循环在第一次运行了 n 次，在第二次运行了 n/2 次，等等。
            sum += i * j
        i //= 2
    return sum
```
时间复杂度为：
\[$n + \frac{n}{2} + \frac{n}{4} + \ldots + 1$ \]

这是一个几何级数，总和是常数倍的 n，所以时间复杂度是 \($O(n \log n)$\).

综上所述，四个函数的时间复杂度分别是：
1. \($O(n^2)$\)
2. \($O(n)$\)
3. \($O(\log n)$\)
4. ($O(n \log n)$)

:::

## Question 3:

Implement a function `def factors(num)`. This function is given a positive integer num, and returns a generator, that when iterated over, it will have all of num’s divisors in an **ascending order**.

For Example, if we execute the following code:

```python
for curr_factor in factors(100):
    print(curr_factor)
```

The expected output is:

```python
1 2 4 5 10 20 25 50 100
```

Implementation requirement: Pay attention to the running time of your implementation. The **for** loop like the above, should run in a total cost of $Θ(\sqrt{𝑛𝑢𝑚})$.

::: code-tabs

@tab shy

```python
def factors(num):
    # 用于存储大于 sqrt(num) 的因子
    # 因为当我们在 1 到 sqrt(num) 的范围内找到一个因子 i 时，
    # num/i 也将是一个因子，并且 num/i 大于 sqrt(num)。
    larger_factors = []

    # 初始化 i 为 1，并开始遍历
    i = 1
    # 只需遍历到 sqrt(num) 
    while i * i <= num:
        # 检查 i 是否是 num 的一个因子
        if num % i == 0:
            # 如果是，那么我们产生（yield）这个因子
            yield i
            # 如果 i 不是 num 的平方根，那么 num/i 也是 num 的一个因子
            # 我们不直接产生这个大的因子，而是先存储起来，稍后再产生
            if i != num // i:
                larger_factors.append(num // i)
        # 继续检查下一个整数
        i += 1

    # 在遍历完 1 到 sqrt(num) 后，我们从大到小产生存储的较大的因子
    # 通过 reversed 函数，我们可以逆序遍历列表
    for factor in reversed(larger_factors):
        yield factor

# 测试函数
for curr_factor in factors(100):
    print(curr_factor)
```

@tab dh

```python
def factors(num):
    # 初始化一个空列表来存储大于平方根的因子
    large_factors = []
    
    # 遍历从1到num的平方根的每个整数
    for i in range(1, int(num**0.5) + 1):  
        
        # 检查i是否是num的一个因子
        if num % i == 0:  
            # 如果i是num的一个因子，那么直接yield i
            yield i  
            
            # 检查i和num除以i是否相同（这对完全平方数是重要的）
            if i != num // i:  
                # 如果不相同，将num除以i的结果添加到大因子列表中
                large_factors.append(num // i)
                
    # 为了维护升序，从后往前yield大于平方根的因子
    for factor in reversed(large_factors):
        yield factor

# 测试函数
for curr_factor in factors(100):
    # 打印每一个因子
    print(curr_factor)
```

:::

## Question 4:

The number **e** is an important mathematical constant that is the base of the natural logarithm. **e** also arises in the study of compound interest, and in many other applications.

Background of **e**: [https://en.wikipedia.org/wiki/E_(mathematical_constant)](https://en.wikipedia.org/wiki/E_(mathematical_constant))

**e** can be calculated as the sum of the infinite series:

$e = 1 + \frac{1}{1!} + \frac{1}{2!} + \frac{1}{3!} + \frac{1}{4!} + ···$

The value of **e** is approximately equal to 2.71828. We can get an approximate value of **e**, by calculating only a partial sum of the infinite sum above (the more addends we add, the better approximation we get).

Implement the function `def e_approx(n)`. This function is given a positive integer n, and returns an approximation of **e**, calculated by the sum of the first (n+1) addends of the infinite sum above.

To test your function, use the following main:

```python
def main():
    for n in range(15):
        curr_approx = e_approx(n)
        approx_str = "{:.15f}".format(curr_approx)
        print("n =", n, "Approximation:", approx_str)
```

Note: Pay attention to the running time of `e_approx`. By calculating the factorials over for each addend, your running time could get inefficient.An efficient implementation would run in $Θ(𝑛)$.

::: code-tabs

@tab shy

```python
def e_approx(n):
    # 初始项是 1
    total_sum = 1
    current_addend = 1
    for i in range(1, n + 1):
        # 每一项都是前一项的 1 / i
        current_addend *= 1 / i
        total_sum += current_addend
    return total_sum


def main():
    for n in range(15):
        curr_approx = e_approx(n)
        approx_str = "{:.15f}".format(curr_approx)
        print("n =", n, "Approximation:", approx_str)


main()
```

@tab dh

```python
def e_approx(n):
    approx = 1.0
    factorial = 1.0  # 初始时为0的阶乘

    for i in range(1, n+1):
        factorial *= i  # 计算 i 的阶乘
        approx += 1 / factorial  # 将阶乘的倒数加到近似值上

    return approx

def main():
    for n in range(15):
        curr_approx = e_approx(n)
        approx_str = "{:.15f}".format(curr_approx)
        print("n =", n, "Approximation:", approx_str)

main()
```



:::

## Question 5:

Implement the function `def split_parity(lst)`. That takes lst, a list of integers. When called, the function changes the order of numbers in lst so that all the odd numbers will appear first, and all the even numbers will appear last. Note that the inner order of the odd numbers and the inner order of the even numbers don’t matter.

For example, if lst is a list containing [1, 2, 3, 4], after calling `split_parity`, lst could look like: [3, 1, 2, 4].

Implementation requirements:

1. You are **not allowed** to use an auxiliary list (a temporary local list).

2. Pay attention to the running time of your implementation. An efficient implementation would run in a linear time. That is, if *n* is the length of lst, the

    running time should be $Θ(𝑛)$.

::: details zh

实现函数 `def split_parity(lst)`。该函数接受一个整数列表 lst。当调用该函数时，函数会改变 lst 中数字的顺序，使得所有奇数首先出现，然后是所有偶数。注意奇数和偶数的内部顺序并不重要。

例如，如果 lst 是包含 [1, 2, 3, 4] 的列表，在调用 `split_parity` 后，lst 可能变成 [3, 1, 2, 4]。

实现要求：

1. **不允许**使用辅助列表（临时本地列表）。

2. 注意你实现的运行时间。一个有效的实现应该在线性时间内运行。也就是说，如果 *n* 是 lst 的长度，则运行时间应为 $Θ(𝑛)$。

:::

::: code-tabs

@tab zhy

```python
def split_parity(lst):
    # 左指针从前向后
    left = 0
    # 右指针从后向前
    right = len(lst) - 1

    while left < right:
        # 如果左边是奇数，左指针右移
        while left < right and lst[left] % 2 != 0:
            left += 1
        # 如果右边是偶数，右指针左移
        while left < right and lst[right] % 2 == 0:
            right -= 1
        # 交换两个数
        if left < right:
            lst[left], lst[right] = lst[right], lst[left]
            left += 1
            right -= 1

lst = [1, 2, 3, 4]
split_parity(lst)
print(lst)  # 可能的输出：[3, 1, 2, 4]
```

@tab dh

```python
def split_parity(lst):
    i = 0
    end = len(lst)
    while i < end:
        # 如果当前数是偶数
        if lst[i] % 2 == 0:
            # 将它移动到列表尾部
            lst.append(lst.pop(i))
            # 不增加索引，因为当前位置的数已经被移除，新的数移动到了这个位置
            end -= 1
        else:
            i += 1
```

@tab dh

```python
def split_parity(lst):
    """
    将列表中的奇数和偶数进行分隔，使所有奇数都出现在前面，所有偶数都出现在后面。
    这个函数会直接修改传入的列表。

    :param lst: 列表，包含整数
    """
    
    # 初始化一个指针 start，从列表开始
    start = 0

    for i in range(len(lst)):
        # 如果当前数字是奇数
        if lst[i] % 2 == 1:
            # 将奇数交换到 start 指针所在的位置
            lst[start], lst[i] = lst[i], lst[start]
            # 移动 start 指针
            start += 1

# 测试代码
lst = [1, 2, 3, 4]
split_parity(lst)
print(lst)  # 输出可能为 [1, 3, 2, 4] 或其他奇数在前，偶数在后的组合
```

@tab zhy

```python
def split_parity(lst):
    """
    将列表中的奇数和偶数进行分隔，使所有奇数都出现在前面，所有偶数都出现在后面。
    这个函数会直接修改传入的列表。

    :param lst: 列表，包含整数
    """
    
    # 初始化两个指针，left 指针从列表开始，right 指针从列表末尾开始
    left, right = 0, len(lst) - 1

    while left < right:
        # 如果 left 指针指向的数字是奇数，则 left 向右移动
        while left < right and lst[left] % 2 == 1:
            left += 1

        # 如果 right 指针指向的数字是偶数，则 right 向左移动
        while left < right and lst[right] % 2 == 0:
            right -= 1

        # 交换 left 和 right 指针指向的元素
        lst[left], lst[right] = lst[right], lst[left]

# 测试代码
lst = [1, 2, 3, 4]
split_parity(lst)
print(lst)  # 输出可能为 [3, 1, 2, 4] 或其他奇数在前，偶数在后的组合
```

:::





## Question 6:

Implement the function `def two_sum(srt_lst, target)`. This function is given:

- `srt_lst` - a list of integers arranged in a **sorted** order
- target - an integer

When called, it returns two indices (collected in a tuple), such that the elements in their positions add up to target. If there are no such indices, the function should return None.

For example, if `srt_lst=[-2, 7, 11, 15, 20, 21]`, and `target=22`, your function would `return (1, 3)` because `srt_lst[1]+ srt_lst[3]=7+15=22`

Note: Pay attention to the running time of your function. Aim for a linear time algorithm.

::: details

实现函数 `def two_sum(srt_lst, target)`。该函数给定：

- `srt_lst` - 按**升序**排列的整数列表
- `target` - 一个整数

当调用时，它返回两个索引（以元组形式收集），使得它们位置上的元素相加等于目标值。如果没有这样的索引，函数应返回 None。

例如，如果 `srt_lst=[-2, 7, 11, 15, 20, 21]`，且 `target=22`，你的函数应 `返回 (1, 3)`，因为 `srt_lst[1] + srt_lst[3] = 7 + 15 = 22`。

注意：注意你函数的运行时间。目标是实现一个线性时间的算法。

:::

::: code-tabs

@tab zhy

```python
def two_sum(srt_lst, target):
    left, right = 0, len(srt_lst) - 1

    while left < right:
        current_sum = srt_lst[left] + srt_lst[right]

        if current_sum == target:
            return (left, right)
        elif current_sum < target:
            left += 1
        else:
            right -= 1

    return None


srt_lst = [-2, 7, 11, 15, 20, 21]
target = 22
print(two_sum(srt_lst, target))
```

@tab dh

```python
def two_sum(srt_lst, target):
    """
    在已排序的整数列表中查找两个数字，使它们的和为给定的目标值。
    
    :param srt_lst: 一个已排序的整数列表
    :param target: 一个整数，目标和
    :return: 一个元组，包含两个索引，或者None（如果没有找到这样的数字）
    """
    
    # 初始化一个哈希表，用于存储每个数字的索引
    num_to_index = {}
    
    for index, num in enumerate(srt_lst):
        # 计算目标值与当前数字的差
        complement = target - num
        
        # 如果差在哈希表中，返回差的索引和当前数字的索引
        if complement in num_to_index:
            return (num_to_index[complement], index)
        
        # 将当前数字及其索引存入哈希表
        num_to_index[num] = index
    
    # 如果循环结束还没有找到，返回None
    return None

# 测试代码
srt_lst = [-2, 7, 11, 15, 20, 21]
target = 22
print(two_sum(srt_lst, target))  # 输出可能为 (1, 3) 或其他满足条件的组合
```

@tab dh

```python
def two_sum(srt_lst, target):
    """
    在已排序的整数列表中查找两个数字，使它们的和为给定的目标值。
    
    :param srt_lst: 一个已排序的整数列表
    :param target: 一个整数，目标和
    :return: 一个元组，包含两个索引，或者None（如果没有找到这样的数字）
    """
    
    # 初始化两个指针，left指向列表的开始，right指向列表的末尾
    left, right = 0, len(srt_lst) - 1
    
    while left < right:
        current_sum = srt_lst[left] + srt_lst[right]
        
        # 如果当前和小于目标值，增加left指针
        if current_sum < target:
            left += 1
        # 如果当前和大于目标值，减少right指针
        elif current_sum > target:
            right -= 1
        # 找到了两个数字
        else:
            return (left, right)
    
    # 如果循环结束还没有找到，返回None
    return None

# 测试代码
srt_lst = [-2, 7, 11, 15, 20, 21]
target = 22
print(two_sum(srt_lst, target))  # 输出 (1, 3)
```

:::

## Question 7:

Implement the function `def findChange(lst01)`. This function is given `lst01`, a list of integers containing a sequence of 0s followed by a sequence of 1s. When called, it returns the index of the first 1 in `lst01`.

For example, if `list01` is a list containing `[0, 0, 0, 0, 0, 1, 1, 1]` , calling `findChange(lst01)` will return 5.

Note: Pay attention to the running time of your function. If `lst01` is a list of size n, an efficient implementation would run in logarithmic time (that is $Θ(𝑙𝑜𝑔_2(𝑛))$).

::: details

实现函数 `def findChange(lst01)`。该函数给定 `lst01`，一个包含一串0后跟一串1的整数列表。当调用时，它返回 `lst01` 中第一个1的索引。

例如，如果 `list01` 是包含 `[0, 0, 0, 0, 0, 1, 1, 1]` 的列表，调用 `findChange(lst01)` 将返回 5。

注意：注意你函数的运行时间。如果 `lst01` 是长度为 n 的列表，一个有效的实现应该在对数时间内运行（即 $Θ(𝑙𝑜𝑔_2(𝑛))$）。

:::

::: code-tabs

@tab zhy

```python
def findChange(lst01):
    if not lst01:
        return None

    # 第一步：指数回溯来找到一个1
    index = 1
    while index < len(lst01) and lst01[index] == 0:
        index *= 2

    # 设置二分查找的左边界和右边界
    left = index // 2
    right = min(index, len(lst01) - 1)

    # 第二步：在left和right之间使用二分查找来找到第一个1
    while left <= right:
        mid = (left + right) // 2
        if lst01[mid] == 0:
            left = mid + 1
        else:
            if mid == 0 or lst01[mid - 1] == 0:
                return mid
            else:
                right = mid - 1
    return None  # 如果没有1，返回None

# 测试
lst01 = [0, 0, 0, 0, 0, 1, 1, 1]
print(findChange(lst01))  # 输出：5
```

@tab dh

```python
def findChange(lst01):
    if not lst01:
        return None

    # 第一步：指数回溯来找到一个1
    index = 1
    while index < len(lst01) and lst01[index] == 0:
        index *= 2

    # 设置二分查找的左边界和右边界
    left = index // 2
    right = min(index, len(lst01) - 1)

    # 第二步：在left和right之间使用二分查找来找到第一个1
    while left <= right:
        mid = (left + right) // 2
        if lst01[mid] == 0:
            left = mid + 1
        else:
            if mid == 0 or lst01[mid - 1] == 0:
                return mid
            else:
                right = mid - 1
    return None  # 如果没有1，返回None

# 测试
lst01 = [0, 0, 0, 0, 0, 1, 1, 1]
print(findChange(lst01))  # 输出：5
```

@tab dh

```python
def findChange(lst01):
    """
    在一个由0后跟1组成的列表中找到第一个1的索引。
    
    :param lst01: 一个整数列表，先是一系列的0，然后是一系列的1
    :return: 第一个1的索引
    """
    
    # 初始化一个指针，表示当前搜索的位置
    index = 1
    
    # 扩展搜索范围，直到找到1或超出列表范围
    while index < len(lst01) and lst01[index] == 0:
        index *= 2
    
    # 使用二分查找在当前搜索范围内找到第一个1
    left = index // 2
    right = min(index, len(lst01) - 1)
    
    while left <= right:
        mid = (left + right) // 2
        
        # 如果中间位置是1，并且它前面的位置是0或它是列表的第一个元素
        if lst01[mid] == 1 and (mid == 0 or lst01[mid - 1] == 0):
            return mid
        # 如果中间位置是0，增加left指针
        elif lst01[mid] == 0:
            left = mid + 1
        # 如果中间位置是1，但它前面的位置也是1，减少right指针
        else:
            right = mid - 1
    
    # 如果循环结束还没有找到，返回None（这种情况不太可能发生，除非列表只包含0）
    return None

# 测试代码
lst01 = [0, 0, 0, 0, 0, 1, 1, 1]
print(findChange(lst01))  # 输出 5
```



:::











yue

149 

year

1200 一年纯粹卡，

120 月，1000







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
