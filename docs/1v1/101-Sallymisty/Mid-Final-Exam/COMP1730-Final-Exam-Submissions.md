---
title: COMP1730 Final Exam Submissions
icon: blog
date: 2026-02-17 10:06:49
author: AI悦创
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

## Question 1: Improving code quality (5/40)

An integer $b$ is called a *non-trivial divisor* of a positive integer $n$ if $b$ is between 2 and $n−1$ such that n*n* is divisible by $b$, meaning that the remainder of the integer division n*n* by $b$ is zero. The following **correct** function takes as input a positive integer, and returns how many non-trivial divisors are there for the given input.

```python
def do_it(xxx):
    tHeReSuLt=0
    u=1
    while u<=xxx//1:
        # check if divides
        if xxx%u==0:
            # exclude some random numbers
            if not(u==1 or u==xxx):
                tHeReSuLt=tHeReSuLt+1
        else:
            pass # do nothing lol
        # increment but not really important
        u=u+1-0
    return int(str(tHeReSuLt))
```

Describe all **distinct** ways in which the quality of the code above can be improved without affecting to its functional correctness.

To gain marks, your suggested improvements must be specific. For example, if you think that naming should be improved, you must give at least one specific example of which names should be changed and to what; just answering "better names" is not enough. Do not simply write your suggested improvements as comments inside the function. Writing a new function or rewriting the function is not an acceptable answer, regardless of whether it is correct or not.

**Response**

::: tabs

@tab 题目

1. The value name 

    ```python
    def do_it(xxx):
    ```

    should be changed to

    ```python
    def count_non_trivial_divisors(n):
    ```

2. The value name 

    ```python
    xxx
    ```

    should be changed to

    ```python
    n
    ```

3. The value name 

    ```python
    tHeReSuLt
    ```

    should be changed to

    ```python
    count
    ```

4. The code

    ```python
    u
    ```

    should be changed to

    ```python
    divisor
    ```

5. The code 

    ```python
    while u<=xxx//1:
    ```

    should be changed to

    ```python
    while divisor <= n:
    ```

    （因为 `xxx//1` 恒等于 `xxx`，可直接写清楚；同时配合变量名更清晰）

6. The code

    ```python
    # exclude some random numbers
    if not(u==1 or u==xxx):
        tHeReSuLt=tHeReSuLt+1
    ```

    should be changed to

    ```python
    # exclude trivial divisors 1 and n
    if divisor != 1 and divisor != n:
        count += 1
    ```

    （注释更准确；条件更直观；用 `+=` 更清晰）

7. The code

    ```python
    else:
        pass # do nothing lol
    ```

    can be removed. （`else: pass` 完全多余，删掉不影响功能）

8. The code

    ```python
    u=u+1-0
    ```

    can be changed to

    ```python
    divisor += 1
    ```

    （`-0` 多余；`+= 1` 更规范易读）

9. The code

    ```python
    tHeReSuLt=tHeReSuLt+1
    ```

    can be changed to

    ```python
    count += 1
    ```

    （更 Pythonic，更易读）

10. The code

    ```python
    return int(str(tHeReSuLt))
    ```

    should be changed to

    ```python
    return count
    ```

    （`int(str(...))` 是无意义的绕路：`tHeReSuLt` 本来就是整数计数；直接返回即可）

11. The code

    ```python
    if xxx%u==0:
        ...
    ```

    can be changed to

    ```python
    if n % divisor == 0 and divisor != 1 and divisor != n:
        count += 1
    ```

12. The code

    ```python
    # check if divides
    ```

    should be changed to

    ```python
    # check whether divisor divides n
    ```

    （注释更具体，明确“谁整除谁”）

13. The code

    ```python
    # increment but not really important
    ```

    should be changed to

    ```python
    # move to the next candidate divisor
    ```

    （原注释不专业且信息价值低；改为描述真实意图）

14. The code

    ```python
    # exclude some random numbers
    ```

    should be changed to

    ```python
    # exclude trivial divisors (1 and n)
    ```

    （避免“random numbers”这种误导性说法，提升代码可维护性）

15. The code

    ```python
    tHeReSuLt=0
    u=1
    ```

    can be changed to

    ```python
    count = 0
    divisor = 1
    ```

    （增加空格符合 PEP 8；变量名表达含义更清楚）

16. The code

    ```python
    while u<=xxx//1:
    ```

    can be changed to

    ```python
    while divisor <= n:
    ```

    （表达更直接；去掉无意义的 `//1`）

@tab 学生提交

1. The value name 

    ```python
    xxx
    ```

    should be changed to

    ```python
    the_number_n
    ```

2. The value name 

    ```python
    u
    ```

    should be changed to

    ```python
    the_number_b
    ```

3. The value name 

    ```python
    tHeReSuLt
    ```

    should be changed to

    ```python
    number_of_non_trivial_divisors
    ```

4. The code

    ```python
    if xxx%u==0:
        if not(u==1 or u==xxx):
            tHeReSuLt=tHeReSuLt+1
    ```

    should be changed to

    ```python
    if xxx%u == 0 and not u == xxx:
        tHeReSuLt += 1           
    ```

5. The code 

    ```python
    else:
        pass
    ```

    can be removed.

6. The code

    ```python
    u=u+1-0
    ```

    can be changed to

    ```python
    u += 1
    ```

7. The code 

    ```python
    return int(str(tHeReSuLt))
    ```

    can be changed to

    ```python
    return tHeReSuLt
    ```

@tab  题目一：统计偶数个数（Improving code quality）

#### Question 1 (5/40)

一个整数列表中，偶数是指可以被 2 整除的整数。下面这个函数功能是**正确的**：它接收一个整数列表，返回列表中偶数的个数。

```python
fdef f(aAa):
    ReS=0
    i=0
    while i<=len(aAa)-1:
        if aAa[i]%2==0:
            ReS=ReS+1
        else:
            pass
        i=i+1-0
    return int(str(ReS))
```

#### 要求

请描述所有**不同的**代码质量改进方式（不能改变功能）。

- 不允许重写函数
- 不允许直接给出优化后完整代码
- 必须具体说明哪一行应改成什么

1. The function name

    ```python
    def f(aAa):
    ```

    should be changed to

    ```python
    def count_evens(numbers):
    ```

2. def count_evens(numbers):

    ```python
    aAa
    ```

    should be changed to

    ```python
    numbers
    ```

3. The value name

    ```python
    ReS
    ```

    should be changed to

    ```python
    count
    ```

4. The value name

    ```python
    i
    ```

    should be changed to

    ```python
    index
    ```

5. The code

    ```python
    ReS=0
    ```

    should be changed to

    ```python
    count = 0
    ```

    （符合 PEP8：等号两边空格）

6. The code

    ```python
    while i<=len(aAa)-1:
    ```

    should be changed to

    ```python
    while index < len(numbers):
    ```

    （更直观，避免 `<= len()-1` 的写法）

7. The code

    ```python
    else:
        pass
    ```

    can be removed.

    （`else: pass` 完全冗余，不影响功能）

8. The code

    ```python
    i=i+1-0
    ```

    can be changed to

    ```python
    index += 1
    ```

    （`-0` 无意义；`+= 1` 更简洁）

9. The code

    ```python
    ReS=ReS+1
    ```

    can be changed to

    ```python
    count += 1
    ```

10. The code

    ```python
    return int(str(ReS))
    ```

    should be changed to

    ```python
    return count
    ```

    （`int(str(...))` 是无意义类型转换）

11. The code

    ```python
    if aAa[i]%2==0:
    ```

    can be changed to

    ```python
    if numbers[index] % 2 == 0:
    ```

    （增加空格、变量名更语义化）

:::

::: tabs

@tab 题目 1：统计“相邻不相等”的次数

我们要为下面函数写测试用例：

```python
def count_adjacent_changes(seq):
    """
    seq 是一个序列（长度可以为 0 或更大）
    返回 seq 中相邻元素不相等的次数
    也就是统计满足 seq[i] != seq[i-1] 的 i 的个数（i 从 1 开始）
    假设元素之间的 != 比较总是有效并返回 True/False
    """
```

**要求：** 写 **最多 4 个** test cases（多于 4 个会被忽略）。每个 test case 给出**输入**和**期望输出**，并覆盖关键边界情况。

```python
def test_count_adjacent_changes():
    # 1) 空序列：没有相邻元素可比较，所以变化次数为 0
    assert count_adjacent_changes([]) == 0

    # 2) 长度为 1：同样没有相邻对，变化次数为 0
    assert count_adjacent_changes([7]) == 0

    # 3) 全部相同：任意相邻元素都相等，变化次数为 0
    assert count_adjacent_changes([1, 1, 1]) == 0

    # 4) 混合情况：逐对比较
    #    [1, 2, 2, 3, 1]
    #    1!=2 (1), 2==2 (0), 2!=3 (1), 3!=1 (1) => 总计 3
    assert count_adjacent_changes([1, 2, 2, 3, 1]) == 3
```



@tab 题目 2：统计“以某个前缀开头”的字符串数量

我们要为下面函数写测试用例：

```python
def count_with_prefix(strings, prefix):
    """
    strings 是字符串列表
    prefix 是字符串
    返回 strings 中以 prefix 作为开头的字符串数量
    使用 Python 的规则理解“开头”：比如 "abc" 以 "a" 开头，"" 以 "" 开头
    假设参数类型总是有效
    """
```

**要求：** 写 **最多 4 个** test cases。每个 test case 给出**输入**和**期望输出**，覆盖关键边界情况（例如空列表、空前缀、大小写敏感等）。

```python
def test_count_with_prefix():
    # 1) 空列表：不管前缀是什么，都匹配不到任何字符串
    assert count_with_prefix([], "a") == 0

    # 2) 空前缀：按 Python 规则，所有字符串都以 "" 开头（包括空字符串）
    assert count_with_prefix(["", "a", "ab"], "") == 3

    # 3) 大小写敏感： "Apply" 不是以 "app" 开头
    #    "apple" ✓, "app" ✓, "Apply" ✗, "ap" ✗ => 2
    assert count_with_prefix(["apple", "app", "Apply", "ap"], "app") == 2

    # 4) 正常情况 + 再次验证大小写敏感： "Helo" 不是以 "he" 开头
    #    "hello" ✓, "he" ✓, "hey" ✓, "Helo" ✗ => 3
    assert count_with_prefix(["hello", "he", "hey", "Helo"], "he") == 3
```



@tab 题目 3：统计区间列表里“包含目标点”的区间数

我们要为下面函数写测试用例：

```python
def count_intervals_containing(intervals, x):
    """
    intervals 是一个列表，其中每个元素是 (start, end) 二元组
    并且保证 start <= end
    x 是一个数字
    返回 intervals 中满足 start <= x <= end 的区间个数（两端都算包含）
    假设比较运算总是有效
    """
```

**要求：** 写 **最多 4 个** test cases。每个 test case 给出**输入**和**期望输出**，覆盖关键边界情况（例如空列表、点在端点上、负数区间、多个区间同时包含等）。

```python
def test_count_intervals_containing():
    # 1) 空区间列表：没有区间，自然包含数为 0
    assert count_intervals_containing([], 5) == 0

    # 2) 端点包含 + 退化区间：
    #    (1,1) 表示只包含点 1；(0,2) 也包含 1 => 2 个
    assert count_intervals_containing([(1, 1), (0, 2)], 1) == 2

    # 3) 含负数区间 + 跨越 0：
    #    (-3,-1) 包含 -2；(-2,2) 也包含 -2；(3,5) 不包含 => 2 个
    assert count_intervals_containing([(-3, -1), (-2, 2), (3, 5)], -2) == 2

    # 4) 再次验证“端点也算包含”：
    #    x=3 在 (1,3) 的右端点上，算包含；也在 (3,7) 的左端点上，算包含；
    #    (4,6) 不包含 => 2 个
    assert count_intervals_containing([(1, 3), (3, 7), (4, 6)], 3) == 2
```



:::

## Question 2: Testing (5/40)

We want to write tests for a function with signature and docstring defined as follows:

```python
def sequence_dissimilarity(s1, s2)
    """
    s1 and s2 are two sequences of the same length
    Returns the number of i-th elements that are NOT equal
    between two sequences, i.e., where s1[i] != s2[i]
    Assume that this comparison is always valid and evaluates to True or False
    """
def sequence_dissimilarity(s1, s2)
    """
    s1 和 s2 是两个长度相同的序列
    返回两个序列中“对应位置 i 的元素不相等”的位置数量
    也就是统计满足 s1[i] != s2[i] 的 i 的个数
    假设这种比较总是合法的，并且比较结果一定是 True 或 False
    """
```

Write **at most** 4 test cases for this function (every test case after the first four will be ignored). For each test case, you must write the inputs (arguments to the function) and the expected return value. You may format your answer in anyway, provided that **the inputs and output can be clearly identified**. Each test case should specify **valid arguments** for the function. Your test cases should cover relevant **corner cases**.

::: tip

下面给出 **4 个**覆盖关键边界情况的测试用例（输入 + 期望输出）：

1. **两个空序列（长度为 0）**

    - 输入：`s1 = []`, `s2 = []`

    - 期望输出：`0`

2. **完全相同（无任何不相等）**

    - 输入：`s1 = [1, 2, 3]`, `s2 = [1, 2, 3]`

    - 期望输出：`0`

3. **完全不同（每个位置都不相等）**

    - 输入：`s1 = "abc"`, `s2 = "XYZ"`

    - 期望输出：`3`

4. **部分不同 + 混合类型（比较始终合法）**

    - 输入：`s1 = [1, "2", 3, "x"]`, `s2 = [1, 2, 4, "x"]`

    - 逐位比较：`1==1`(相同), `"2"!=2`(不同), `3!=4`(不同), `"x"=="x"`(相同)

    - 期望输出：`2`

```python
def test_sequence_dissimilarity():
    # 1) 两个空序列（长度为0）
    assert sequence_dissimilarity([], []) == 0

    # 2) 完全相同（无任何不相等）
    assert sequence_dissimilarity([1, 2, 3], [1, 2, 3]) == 0

    # 3) 完全不同（每个位置都不相等）
    assert sequence_dissimilarity("abc", "XYZ") == 3

    # 4) 部分不同 + 混合类型（比较始终合法）
    assert sequence_dissimilarity([1, "2", 3, "x"], [1, 2, 4, "x"]) == 2
```



:::

## Question 3: Debugging (5/40)

The `argmin` of a sequence is the index (position) of the smallest element in the sequence. For example, if the sequence is `[3,4,5]`, the `argmin` is 0, because the smallest value is 3 and is at index 0. If the smallest value is not unique, the `argmin` function can return any index where it appears. For example, if the sequence is `[5,5,5]`, any of the indices 0, 1 or 2 is a valid answer. We assume that the input sequence is non-empty.

Below is an implementation of the `argmin` function:

```python
def argmin(a):
    a = list(a)
    p = 0
    i = 0
    a.sort()
    for x in a:
        if x < a[p]:
            p = i
        i = i + 1
    return p
```

However, the function above is not correct:

**(a)** Provide an example of function call with arguments of correct type that makes this function return an incorrect result. `a` must be a non-empty sequence of numbers.

**(b)** Explain the cause of the error that you have found, i.e., what is wrong with this function. Your answer must explain what is wrong with the function as given. Writing a new function or rewriting/fixing the function is not an acceptable answer, regardless of whether it is correct or not.

::: details 答案

#### (a) 反例（会返回错误结果的调用）

```python
argmin([2, 1])
```

正确的 `argmin` 应该返回 `1`（最小值 1 在原序列的索引是 1），但这段代码会返回 `0`。

你也可以用更明显的例子：

```python
argmin([3, 1, 2])
```

正确答案应为 `1`，但函数会返回 `0`。

#### (b) 错误原因解释（这段函数“哪里错了”）

核心问题是：**它在计算索引之前把 `a` 排序了**。

- 一开始 `a = list(a)` 把输入变成列表没问题。
- 但紧接着执行了 `a.sort()`：这一步会**原地排序**，把元素顺序改掉。
- `argmin` 要返回的是“**原始输入序列**中最小元素的位置（索引）”，而排序以后：
    - 最小元素必然跑到排序后列表的第 0 个位置
    - 所以这个函数基本上总会返回 0（除非你想象它还会找到更小的，但排序后不可能有 `x < a[0]`）

更具体地说，在 `for x in a:` 这段循环中：

- 排序后 `a[p]` 初始是 `a[0]`，也就是最小值
- 对任何元素 `x` 来说，都不可能满足 `x < a[p]`（因为 `a[p]` 已经是最小）
- 因此 `p` 永远不会更新，始终是 0
- 最终 `return p` 返回 0，**这不是原序列的 argmin，而是“排序后序列”的位置**

总结一句：**排序破坏了原始索引信息，导致返回的索引与输入序列的位置无关**。

:::

::: tabs

@tab 题目 1：`argmax`（最大值位置）

#### 题目描述

`argmax` 返回序列中**最大元素**的索引。如果最大值不唯一，返回任意一个最大值索引都算对。输入保证非空，且元素可比较。

下面实现试图计算 argmax，但不正确：

#### 模版代码（有 bug）

```python
def argmax(a):
    a = list(a)
    p = 0
    i = 0
    a.sort()              # 企图“帮忙”处理，但这里埋雷
    for x in a:
        if x > a[p]:
            p = i
        i = i + 1
    return p
```

#### 你需要完成

**(a)** 找一个合法调用，使它返回错误索引

**(b)** 解释错误原因（为什么这个实现会错）

#### 测试（例子全面）

```python
def test_argmax_examples():
    # 单元素：通常会“碰巧正确”
    assert argmax([7]) == 0

    # 严格递增：返回的索引会和原序列索引不一致（提示：这里有坑）
    # 你可以自己打印 argmax([1,2,3]) 看看输出
    _ = argmax([1, 2, 3])

    # 严格递减：同理
    _ = argmax([3, 2, 1])

    # 含重复最大值：允许返回任意一个最大值位置（但必须是原序列的位置！）
    _ = argmax([5, 1, 5, 2])

    # 含负数
    _ = argmax([-10, -3, -7])

    # 非 list 的序列也应支持（例如 tuple）
    _ = argmax((2, 9, 1))
```

#### 答案

##### (a) 反例（合法调用但返回错误）

```python
argmax([2, 9, 1])
```

**正确 argmax** 应该返回索引 `1`（因为最大值 9 在原序列下标 1）。

但该实现会先 `sort()` 变成 `[1, 2, 9]`，最后返回 `2`（排序后最大值的位置），因此 **返回错误**。

（同类反例很多：`argmax([3,1,2])`、`argmax([1,3,2])`、`argmax((5,0,4))` 等）

##### (b) 错误原因解释

函数在寻找最大值索引之前对 `a` 进行了 **原地排序**（`a.sort()`），这会改变元素的顺序，从而 **破坏“索引”相对于原输入序列的含义**。

最终返回的 `p` 是“排序后列表里最大元素的位置”，而不是“原始序列里最大元素的位置”，所以会给出错误结果。

@tab 题目 2：`first_index_of`（查找元素首次出现的位置）

#### 题目描述

`first_index_of(s, target)` 返回 `target` 在序列 `s` 中**第一次出现**的索引；若不存在则返回 `-1`。输入 `s` 是序列（非空或空都可能），元素可与 `target` 做相等比较。

下面实现不正确：

#### 模版代码（有 bug）

```python
def first_index_of(s, target):
    i = 0
    for x in s:
        if x == target:
            return i + 1     # <- 这里可能有问题
        i = i + 1
    return -1
```

### 你需要完成

**(a)** 找一个合法调用，使它返回错误结果

**(b)** 解释错误原因（只能解释，不要修复）

#### 测试（覆盖全面）

```python
def test_first_index_of_examples():
    # 空序列：应返回 -1
    assert first_index_of([], 3) == -1

    # 在开头
    _ = first_index_of([9, 1, 2], 9)

    # 在中间
    _ = first_index_of([9, 1, 2], 1)

    # 在结尾
    _ = first_index_of([9, 1, 2], 2)

    # 不存在
    assert first_index_of([9, 1, 2], 7) == -1

    # 重复元素：必须返回首次出现的索引
    _ = first_index_of([5, 5, 5], 5)

    # 也支持字符串（序列）
    _ = first_index_of("banana", "a")
```

#### 答案

##### (a) 反例（合法调用但返回错误）

```python
first_index_of([9, 1, 2], 9)
```

正确结果应为 `0`（9 在第 0 位首次出现）。

但实现命中后返回 `i + 1`，所以会返回 `1`，**错误**。

（同类反例：`first_index_of("banana","b")` 应为 0 但会返回 1）

#### (b) 错误原因解释

该函数在找到目标元素后返回了 `i + 1`，也就是把索引 **多加了 1**。

这属于典型的 **off-by-one（下标偏移 1）** 错误：循环变量 `i` 已经是当前元素的正确索引，但返回时又额外加 1，导致所有“找到”的情况都返回错误的索引。



@tab 题目 3：`count_runs`（统计连续段数量）

### 题目描述

“连续段（run）”指相同元素连续出现的一段。

例如序列 `[1,1,2,2,2,1]` 有 3 段：`[1,1]`、`[2,2,2]`、`[1]`，所以返回 3。

约定：空序列返回 0。

下面实现试图统计 runs，但不正确：

#### 模版代码（有 bug）

```python
def count_runs(a):
    if a == []:
        return 0
    count = 0
    prev = a[0]
    for x in a:
        if x != prev:
            count = count + 1
        prev = x
    return count
```

#### 你需要完成

**(a)** 找一个合法调用，使它返回错误结果

**(b)** 解释错误原因（只能解释，不要修复）

#### 测试（覆盖全面）

```python
def test_count_runs_examples():
    # 空序列
    assert count_runs([]) == 0

    # 单元素：应该是 1 段
    _ = count_runs([7])

    # 全相同：应该是 1 段
    _ = count_runs([1, 1, 1, 1])

    # 全不同：每个元素都是一段
    _ = count_runs([1, 2, 3, 4])

    # 有多段
    _ = count_runs([1, 1, 2, 2, 2, 1])

    # 含字符串元素也应可用
    _ = count_runs(["a", "a", "b", "b", "a"])

    # 含 None
    _ = count_runs([None, None, 0, 0, None])
```

#### 答案

##### (a) 反例（合法调用但返回错误）

```python
count_runs([7])
```

正确答案应为 `1`（单元素就是一段）。

但该实现返回 `0`，**错误**。

（同类反例：`count_runs([1,1,1])` 正确 1，但会返回 0；`count_runs([1,2,3])` 正确 3，但会返回 2）

##### (b) 错误原因解释

变量 `count` 初始化为 `0`，并且只在遇到“当前元素和前一个元素不同”时才加 1。

这意味着它统计的是“段与段之间发生变化的次数”（变化点数量），而不是段数本身。

对于非空序列：

- 段数 = 变化次数 + 1

    但该函数没有把“第一段”计入（也没有在最后补 +1），所以对所有非空输入都会 **少算 1 段**，导致结果偏小。

:::

## Question 4.1: Time complexity (2/40)

Consider the function:

```python
def g(A):
    res = 0.0
    for i in range(A.shape[0]):
        for j in range(i, A.shape[1]):
            res += A[i, j]
    return res
```

where `A` is an `n` by `n` 2D NumPy array of floating-point numbers (`A.shape[0] == A.shape[1] == n`).

Write down the time complexity of `g(A)` in big-O notation as a function of `n` . **Explain the reason why**, e.g., by analysing the code line by line and summarising it**.** Correct time complexity without sufficient explanation and reasoning will receive zero marks.

::: details

**题目代码**

```python
def g(A):
    res = 0.0
    for i in range(A.shape[0]):
        for j in range(i, A.shape[1]):
            res += A[i, j]
    return res
```

已知：

- `A` 是一个 `n × n` 的 NumPy 数组
- `A.shape[0] == A.shape[1] == n`

**🔍 第一步：逐行分析**

- ① `res = 0.0`

    这是常数时间操作：$O(1)$

- ② 外层循环

    ```python
    for i in range(A.shape[0]):
    ```

    因为 `A.shape[0] = n`，所以外层循环执行：$n \text{ 次}$

- ③ 内层循环

    ```python
    for j in range(i, A.shape[1]):
    ```

    这里是关键，当 `i = 0` 时：

    ```python
    j 从 0 到 n-1
    执行 n 次
    ```

    当 `i = 1` 时：

    ```python
    j 从 1 到 n-1
    执行 n-1 次
    ```

    当 `i = 2` 时：

    ```python
    执行 n-2 次
    ```

    ……

    当 `i = n-1` 时：

    ```python
    执行 1 次
    ```

**🔢 总执行次数计算**

总的 `res += A[i, j]` 执行次数为：
$$
n + (n-1) + (n-2) + \dots + 1
$$


这是一个等差数列求和：
$$
\frac{n(n+1)}{2}
$$


展开：
$$
= \frac{n^2 + n}{2}
$$


**🎯 时间复杂度分析**

最高阶项是：
$$
\frac{n^2}{2}
$$
在 Big-O 表示法中：

- 忽略常数
- 忽略低阶项

所以：
$$
O(n^2)
$$


**📌 更直观理解**

这段代码：

- 不是遍历整个矩阵
- 而是遍历矩阵的**上三角部分（包括对角线）**

矩阵一共有：
$$
n^2
$$


个元素。

而代码访问了：
$$
\frac{n(n+1)}{2}
$$


个元素，这仍然是二次级别增长。

**最终答案**
$$
\boxed{O(n^2)}
$$


**📌 总结一句话**

虽然内层循环从 `i` 开始减少了次数，但所有迭代次数加起来仍然是：
$$
\frac{n(n+1)}{2}
$$


其增长阶为：
$$
O(n^2)
$$




:::





## 时间复杂度汇总

### 1. 时间复杂度怎么判断（核心规则）

把程序想象成：输入规模为 `n` 时，会执行多少次“基本操作”（比较、加减、赋值、访问数组等）。

- **忽略常数**：`3n + 20` 记为 `O(n)`
- **只看最高阶**：`n^2 + n` 记为 `O(n^2)`
- **顺序相加**：先做 A 再做 B → `O(A + B)`
- **嵌套相乘**：外层 `n` 次、内层 `n` 次 → `O(n * n) = O(n^2)`
- **每次规模减半**：`n → n/2 → n/4 ...` 是 `O(log n)`
- **分支暴增**（枚举子集/排列）通常是指数级或阶乘级

### 2. O(1) 常数时间

**特点**：执行次数不随 `n` 变。

**代码示例：数组索引访问**

```python
def get_middle(a):
    return a[len(a)//2]  # 访问一次
```

**为什么是 O(1)**：无论 `a` 多长，都只做固定次数操作（求长度、除法、一次索引）。

> 典型：取数组某个位置、交换两个变量、栈/队列的 push/pop（在实现良好时）。

### 3. O(log n) 对数时间

**特点**：每一步把问题规模“砍半/按比例缩小”。

**代码示例：二分查找**

```python
def binary_search(a, target):
    lo, hi = 0, len(a) - 1
    while lo <= hi:
        mid = (lo + hi) // 2
        if a[mid] == target:
            return mid
        elif a[mid] < target:
            lo = mid + 1
        else:
            hi = mid - 1
    return -1
```

**为什么是 O(log n)**：每次循环把区间缩小一半：`n → n/2 → n/4 → ... → 1` 需要的步数是 `log2(n)` 级别。

### 4. O(√n)（很常见但容易忽略）

**特点**：循环到 `sqrt(n)` 就能解决（常见于数论）。

**代码示例：判断是否有非平凡因子（试除到 √n）**

```python
def has_divisor(n):
    i = 2
    while i * i <= n:
        if n % i == 0:
            return True
        i += 1
    return False
```

**为什么是 O(√n)**：`i*i <= n` ⇒ `i <= √n`，最多尝试约 `√n` 次。

### 4. O(n) 线性时间

**特点**：把输入完整扫一遍。

**代码示例：线性查找**

```python
def linear_search(a, target):
    for i, x in enumerate(a):
        if x == target:
            return i
    return -1
```

**为什么是 O(n)**：最坏情况下要检查 `n` 个元素。

> 注意：有些操作“看起来一行”，但可能是 O(n)，例如 Python 的 `x in list`、`list.count`、`list.remove` 等都要线性扫描。

### 5. O(n + m)（两个规模相加）

**特点**：分别扫两份数据，各扫一遍。

**代码示例：合并两个数组（不排序）**

```python
def concat(a, b):
    res = []
    for x in a:
        res.append(x)
    for y in b:
        res.append(y)
    return res
```

**为什么是 O(n + m)**：第一段做 `n` 次，第二段做 `m` 次，总计相加。

> 图算法里常见 `O(V + E)`（点+边），也是同理。

### 6. O(n log n)（最常见的“高效排序/分治”复杂度）

**特点**：通常是 **分治**：分成若干份（log 层），每层做 O(n) 工作。

**代码示例：归并排序（经典）**

```python
def merge_sort(a):
    if len(a) <= 1:
        return a
    mid = len(a) // 2
    left = merge_sort(a[:mid])
    right = merge_sort(a[mid:])
    return merge(left, right)

def merge(left, right):
    i = j = 0
    res = []
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            res.append(left[i]); i += 1
        else:
            res.append(right[j]); j += 1
    res.extend(left[i:])
    res.extend(right[j:])
    return res
```

**为什么是 O(n log n)**：

- 分裂次数：`n → n/2 → ...` 有 `log n` 层
- 每一层合并总工作量：把所有元素合并一遍，总计 `O(n)`
- 所以总计：`O(n) * O(log n) = O(n log n)`

> 现实中：大多数比较排序在平均/最坏可做到 `O(n log n)`（归并、堆排序），快速排序平均 `O(n log n)` 但最坏 `O(n^2)`。

### 7. O(n²) 二次时间（双重循环/两两比较）

**特点**：所有“成对组合”类问题很容易出现。

**代码示例：统计所有配对 (i, j)**

```python
def count_pairs(a):
    n = len(a)
    c = 0
    for i in range(n):
        for j in range(n):
            c += 1
    return c
```

**为什么是 O(n²)**：外层 n 次，内层 n 次，总 `n*n`。

**更真实一点：两两比较是否相等**

```python
def has_duplicate_slow(a):
    n = len(a)
    for i in range(n):
        for j in range(i + 1, n):
            if a[i] == a[j]:
                return True
    return False
```

这里比较次数约为 `n(n-1)/2`，仍是 `O(n²)`（忽略常数 1/2）。

### 8. O(n³) 三次时间（3 层嵌套/某些 DP）

### 代码示例：三重循环

```python
def triple_work(n):
    c = 0
    for i in range(n):
        for j in range(n):
            for k in range(n):
                c += 1
    return c
```

**为什么是 O(n³)**：`n * n * n`。

> 典型：Floyd-Warshall 全源最短路就是 `O(n³)`（n 个点）。

### 9. O(2^n) 指数时间（枚举所有子集 / 爆炸）

**代码示例：生成所有子集**

```python
def all_subsets(a):
    n = len(a)
    res = []
    for mask in range(1 << n):      # 2^n 个 mask
        subset = []
        for i in range(n):          # 每个 mask 扫 n 位
            if mask & (1 << i):
                subset.append(a[i])
        res.append(subset)
    return res
```

**复杂度**：严格说是 `O(n * 2^n)`（因为每个子集构造要扫 n 位）。

**为什么会爆炸**：子集数量本身就是 `2^n`，规模增长极快。



### 10. O(n!) 阶乘时间（排列）

**代码示例：生成全排列（回溯）**

```python
def permutations(a):
    res = []
    used = [False] * len(a)
    path = []

    def dfs():
        if len(path) == len(a):
            res.append(path.copy())
            return
        for i in range(len(a)):
            if not used[i]:
                used[i] = True
                path.append(a[i])
                dfs()
                path.pop()
                used[i] = False

    dfs()
    return res
```

**为什么是 O(n!)**：第 1 位有 n 种选法，第 2 位 n-1 … ⇒ `n*(n-1)*...*1 = n!`。

### 11. 递归复杂度的两个典型模板（看一眼就会用）

**A. “每次减半”的递归：O(log n)**

```python
def rec_half(n):
    if n <= 1:
        return 1
    return rec_half(n // 2) + 1
```

每次 `n → n/2`，递归层数 `log n`。

**B. 经典斐波那契（错误示范）：O(2^n)**

```python
def fib_slow(n):
    if n <= 1:
        return n
    return fib_slow(n-1) + fib_slow(n-2)
```

递归树分叉，节点数指数级增长（重复计算大量子问题）。

### 12. 常见“陷阱”：看起来是 O(n)，其实是 O(n²)

**代码示例：循环里用了 `.count()`（每次 O(n)）**

```python
def count_freq_bad(a):
    freq = {}
    for x in a:
        freq[x] = a.count(x)   # count 是 O(n)，外层又 n 次 => O(n^2)
    return freq
```

**为什么是 O(n²)**：外层 `n` 次，每次 `count` 扫 `n` ⇒ `n*n`。

✅ 改成真正 O(n)：

```python
def count_freq_good(a):
    freq = {}
    for x in a:
        freq[x] = freq.get(x, 0) + 1
    return freq
```



### 13. 一张“常见复杂度-典型原因”速查

- `O(1)`：固定次数操作
- `O(log n)`：每轮规模按比例缩小（/2、/3…）
- `O(√n)`：循环到平方根（试除、某些优化）
- `O(n)`：扫一遍输入
- `O(n + m)`：扫两份输入
- `O(n log n)`：分治（log 层 × 每层 O(n)）
- `O(n²)`：两两组合/双重循环
- `O(n³)`：三重循环/某些全局 DP
- `O(2^n)`：枚举子集/指数分叉递归
- `O(n!)`：枚举排列

## 表 1：常见时间复杂度（带代码结构 + 原因推导）

> 记 `n` 为输入规模（如列表长度），`m` 为另一份输入规模（如第二个列表长度），`V/E` 为图的点/边数。

| 时间复杂度     | 典型代码结构（Python 形式）                     | 为什么是这个复杂度（次数估算）                               | 常见场景                                        |
| -------------- | ----------------------------------------------- | ------------------------------------------------------------ | ----------------------------------------------- |
| **O(1)**       | `x = a[i]` / `a[i] = 0` / 交换变量              | 操作次数固定，不随 `n` 变化                                  | 数组下标访问、常量计算、取字典键（平均）        |
| **O(log n)**   | `while lo<=hi: mid=(lo+hi)//2; ...`             | 每轮把规模按比例缩小（通常减半）：`n → n/2 → n/4 → ...`，轮数约 `log2(n)` | 二分查找、某些分治递归层数                      |
| **O(√n)**      | `i=2; while i*i<=n: i+=1`                       | 循环上界由 `i*i<=n` 得到 `i<=√n`                             | 试除找因子、数论优化                            |
| **O(n)**       | `for x in a: ...`                               | 最坏情况下遍历所有元素，执行约 `n` 次                        | 线性查找、求和、统计频次（正确写法）            |
| **O(n+m)**     | `for x in a: ...; for y in b: ...`              | 两段遍历相加：`n + m`                                        | 合并两份数据、两列表分别处理                    |
| **O(n log n)** | 分治：拆分 + 合并（如归并）                     | `log n` 层；每层处理总量 `n`（合并/扫描），总 `n * log n`    | 归并排序、堆排序；很多“分治+每层线性处理”       |
| **O(n²)**      | `for i in range(n): for j in range(n): ...`     | 外层 `n` 次 × 内层 `n` 次 = `n²`                             | 两两比较、朴素去重、简单 DP、部分排序的最坏情况 |
| **O(n³)**      | 三重循环 `for i.. for j.. for k..`              | `n * n * n`                                                  | Floyd-Warshall、某些三维 DP                     |
| **O(2^n)**     | `for mask in range(1<<n): ...` 或递归每步两分支 | 子集数量本身是 `2^n`；若每个子集还要扫一遍元素则常见为 `O(n*2^n)` | 枚举所有子集、暴力状态搜索                      |
| **O(n!)**      | 全排列回溯：第一位 `n` 种、第二位 `n-1` 种…     | 乘法规则：`n*(n-1)*...*1 = n!`                               | 枚举排列、旅行商暴力                            |
| **O(V+E)**     | 图遍历 BFS/DFS（邻接表）                        | 每个点/边最多被处理常数次                                    | BFS/DFS、拓扑排序（邻接表实现）                 |
| **O(V²)**      | 图用邻接矩阵 + 对每个点扫一整行                 | 每个点扫描 `V` 个可能邻居：`V * V`                           | 稠密图的某些实现、朴素 Dijkstra（邻接矩阵版）   |

## 表 2：Python 常见操作的时间复杂度速查（很实用）

> 这里默认 **平均情况**（哈希结构会注明“平均/极端”）。`n` 是容器大小。

| 容器/操作                                 | 时间复杂度           | 备注（原因）                                                 |
| ----------------------------------------- | -------------------- | ------------------------------------------------------------ |
| `list` 下标访问 `a[i]`                    | O(1)                 | 连续内存/数组索引                                            |
| `list.append(x)`                          | 平均 O(1)            | 动态扩容导致“摊还”常数；偶尔扩容会更慢                       |
| `list.pop()`（末尾）                      | O(1)                 | 末尾删除不需要搬移                                           |
| `list.pop(0)` / `list.insert(0,x)`        | O(n)                 | 需要整体搬移元素                                             |
| `x in list`                               | O(n)                 | 线性扫描比较                                                 |
| `list.count(x)`                           | O(n)                 | 要扫一遍统计                                                 |
| `list.remove(x)`                          | O(n)                 | 先找再搬移                                                   |
| `sorted(a)` / `a.sort()`                  | 平均/最坏 O(n log n) | Python Timsort；对“几乎有序”可能接近 O(n)                    |
| `set.add(x)` / `x in set`                 | 平均 O(1)            | 哈希定位；极端碰撞下可能退化                                 |
| `dict[k]=v` / `k in dict` / `dict.get(k)` | 平均 O(1)            | 同上（哈希表）                                               |
| `deque.append(x)` / `deque.popleft()`     | O(1)                 | 双端队列两端操作稳定常数                                     |
| 字符串拼接 `s += t`（循环里多次）         | 容易变 O(n²)         | 字符串不可变，反复拼接会反复复制；用 `''.join(...)` 更好（总体 O(n)） |









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