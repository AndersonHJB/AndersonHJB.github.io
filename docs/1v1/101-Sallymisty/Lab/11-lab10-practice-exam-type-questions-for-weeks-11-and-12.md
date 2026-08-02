---
title: Lab 10：Practice exam-type questions (weeks 11 and 12)
icon: blog
date: 2025-10-16 17:06:57
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

::: info

Recall that the final exam will be performed in the lab using the lab computers. If you have never logged into the lab computers before, you must try to do so successfully in advance, such as in your weekly labs. Otherwise, you may experience some important delays the day of the exam in order to be able to login into the lab computers. **We will NOT consider this as a reason to extend your exam beyond the established 3 hours and 15 minutes.**

:::

This lab contains some examples of the types of problems you may encounter on the final exam. The exam will in general cover all topics covered in lectures and labs, for example, to check your ability to (*but not limited to*):

- Improve the quality of certain code
- Propose "good" test cases for some function without needing to know the code
- Read, understand, and debug certain code
- Analyse time complexity
- Write Python code to solve certain programming problems

Problems are presented in no particular order. Don't assume that the first is easier than the second, and so on.

Tutors will be busy talking with students about the project assignment during week 11, but you can ask them during week 12 if you have any questions. 



## 2. Improve Code Quality

Good code quality is essential for a successful development of a large program. Aspects of good code quality include: good docstrings/comments, good variable/function names, good code organisation, and code efficiency (when necessary). In the following you will exercise how to improve the quality of certain code.

### Question 1

The following function splits a string into a list of substrings, where each substring consists of only letters, and returns the list. For example: `my_func("hello everONE 12 hh3")` returns `['hello', 'everONE', 'hh']`.

```python
def my_func(astring):
    l = []
    s = ""
    for i in range(len(astring)):
        if "a" <= astring[i] <= "z": # lower-case letter
            s = s + astring[i]
            # do special thing with first element
            if i == len(astring)-1:
               l = l+[s]
        elif "A" <= astring[i] <= "Z": # character is a number
            s = s + astring[i]
            # do special thing with first element
            if i == len(astring)-1:
               l = l+[s]
        else:
            # upper-case letter
            if len(s) == 0:
               i = i-1+1
            else:
               l=l+[s]
               
            s="" # set s to empty string
    return l
```

Describe all **distinct** ways in which the quality of the code above can be improved without affecting to its functional correctness.

To gain marks, your suggested improvements must be specific. For example, if you think that naming should be improved, you must give at least one specific example of which names should be changed and to what; just answering "better names" is not enough. Do not simply write your suggested improvements as comments inside the function. Writing a new function or rewriting the function is not an acceptable answer, regardless of whether it is correct or not.

::: details

针对给定 `my_func(astring)`，在**不改变功能**的前提下，可改进之处（**具体**）：

1. **函数名与文档**

    - 将 `my_func` 改为更语义化的 `split_alpha_runs`。

    - 添加清晰 docstring：说明参数/返回值/示例与边界（空串、全非字母、混合等）。

2. **变量命名**

    - `l` → `parts`（避免与内置 `list` 混淆，且表达含义）。
    - `s` → `current`（当前累计子串）。
    - `i` → `idx`（提升可读性）。

3. **去除重复逻辑**

    - 两段完全相同的拼接代码：

        ```python
        if "a" <= astring[i] <= "z": ...
        elif "A" <= astring[i] <= "Z": ...
        ```

    可以先用统一的**字母判断**，减少重复分支；例如使用 `str.isalpha()`（功能等价，且覆盖非英文字母会改变行为——若必须保持仅 A–Z/a–z，可用 `('a'<=ch<='z') or ('A'<=ch<='Z')` 封装成 `_is_ascii_alpha(ch)` 辅助函数）。

4. **边界处理位置**

    - 目前用 `if i == len(astring)-1: l = l+[s]` 在循环内部多处收尾；更好的方式是**循环结束后**统一判断 `current` 非空再追加一次，减少分支与重复。
    - 移除“占位无效语句”：

    ```python
    if len(s) == 0:
        i = i-1+1
    ```

    对逻辑无任何效果（死代码），应删除。

5. **效率**

    - 多次使用 `l = l + [s]` 会创建新列表，建议改为 `parts.append(current)`。
    - 逐字符用 `s = s + astring[i]` 每次复制字符串，建议使用 `list` 收集字符后 `''.join()`，或保留但可接受（输入通常较短）。

6. **注释准确性**

    注释与代码不符

    - `# character is a number` 写在了大写字母分支上；
    - `# upper-case letter` 出现在 `else` 分支。

    需修正注释，使注释与逻辑一致。

7. **避免魔法数字/表达式重复**

    - `len(astring)` 多次调用，可在循环前存入 `n = len(astring)`。

8. **类型与输入健壮性（可选）**

    - 可在 docstring 或开头断言/早退：`if not isinstance(astring, str): raise TypeError(...)`（若课程风格允许）。

> 小结：主要集中在**命名、重复逻辑合并、边界统一收尾、注释改正、append 替代拼接**与**删除死代码**。

:::





### Question 2

In a sequence of numbers, we say that there is a *peak* at index *i* if the value at *i* is greater than both the neighbouring values, at *i-1* and at *i+1*. The first and last number in the sequence are also peaks, if they are greater than their one neighbouring value. For example, in the sequence

[13.0, 9.6, 14.2, 17.5, 8.9, 9.7, 15.7, 20.4, 14.8, 13.2, 13.6, 15.6, 17.9, 24.1, 19.2]

there are peaks at indices 0 (because `13.0 > 9.6`), 3 (because `14.2 < 17.5 > 8.9`), 7 (because `15.7 < 20.4 > 14.8`) and 13 (because `17.9 < 24.1 > 19.2`).

The following function takes as argument a numeric sequence and returns average distance between all the peaks in it. The distance between two peaks at indices `i` and `j` is defined as `abs(i-j)`.

```python
def my_func(s):
    x = [] # sets x to empty list
    for i in range(len(s)):
        if i - 1 >= 0 and i + 1 < len(s):
            if s[i] > s[i-1] and s[i] > s[i+1]:
                x.append(i)
        elif i - 1 >= 0 and i + 1 >= len(s):
            # i is the first element
            if s[i] > s[i-1]:
                x.append(i)
        elif i - 1 < 0 and i + 1 < len(s):
            # i is the last element
            if s[i] > s[i+1]:
                x.append(i)
    if len(x) < 2:
        return 0.0
    else:
        count = 0
        t = 0
        for i in range(len(x)):
            for j in range(i + 1, len(x)):
                count += 1
                t += abs(x[i] - x[j])
        return t / count
```

Describe all **distinct** ways in which the quality of the code above can be improved without affecting to its functional correctness.

To gain marks, your suggested improvements must be specific. For example, if you think that naming should be improved, you must give at least one specific example of which names should be changed and to what; just answering "better names" is not enough. Do not simply write your suggested improvements as comments inside the function. Writing a new function or rewriting the function is not an acceptable answer, regardless of whether it is correct or not.

::: details

针对“峰值平均距离”函数：

1. **函数与变量命名**

    - `my_func` → `average_peak_distance`
    - `s` → `seq`；`x` → `peak_indices`；`t` → `total_distance`；`count` → `pair_count`。

2. **注释与分支语义修正**

    - 分支注释颠倒：

    ```python
    elif i - 1 >= 0 and i + 1 >= len(s):
        # i is the first element  # ❌ 实为“最后一个元素”
    elif i - 1 < 0 and i + 1 < len(s):
        # i is the last element   # ❌ 实为“第一个元素”
    ```

    需把注释改正，避免误导。

3. **边界判断更清晰**

    - 使用结构：
        - 若 `i == 0`：检查 `s[0] > s[1]`（长度>1时）；
        - 若 `i == n-1`：检查 `s[n-1] > s[n-2]`；
        - 否则：常规两侧比较。
             这样避免复杂复合条件并减少索引越界风险。

4. **空与长度为 1 的输入**：现在若 `len(s)==1`，循环中不会添加峰值，返回 0.0；与定义（“首尾也算峰，如果比唯一邻居大”）一致，但**单元素**按常见约定通常也可视为峰（因无邻居）。这里至少应**在 docstring 中明确**约束或在代码顶端**特判**：长度 1 → 峰数 <2 则返回 0.0（与现实现一致）。

5. **复杂度与实现**：寻找峰值 O(n)；平均距离双重循环 O(p²)（p 为峰个数）。如需要提升效率，可仅统计**两两距离和**的等价线性公式（对有序下标 `x[0..p-1]`，
     `sum_{i<j} (x[j]-x[i]) = Σ_j (2j-p+1)*x[j]`），把 O(p²) 降为 O(p)。若不改变功能，此为**可选优化建议**。

6. **一致的返回类型与浮点除法**：当前 `t / count` 在 Python3 为浮点除法，返回 `float`，符合题意。为明确可写 `return float(total_distance) / pair_count`。

7. **避免重复 `len(s)` 计算**：赋值 `n = len(s)`，统一使用。

8. **Docstring 完善**：指明：输入要求（数值序列）、返回定义（无或一个峰 → 返回 0.0）、复杂度与示例。

:::

## 3. Testing

Testing is an important skill. Software testers usually need to think about designing a small enough set of good test cases that still cover a large spectrum of parameters to ensure that the code runs correctly for most or all parameters. In the following you will exercise how to carefully design good test cases for some function without even knowing the code of the function.

### Question 1

We want to write tests for a function with signature and docstring defined as follows:

```python
def smallest_non_negative(number_list):
    """
    Argument is a list of numeric values (integer or float).
    Returns the smallest non-negative value in the list,
    and zero if there is no such value.
    """
```

Write **at most** **4** test cases for this function (every test case after the first four will be ignored). For each test case, you must write down the input (argument to the function) and the expected return value. Each test case should specify valid arguments for the function (e.g., an input list with elements of different types is not a valid argument). Your test cases should cover relevant corner cases.

::: details

最多 4 个用例，覆盖：无非负、含 0、多浮点、重复与顺序。

1. 输入：`[-5, -1, -0.1]` → 期望：`0`（无非负）
2. 输入：`[0, 3, 2, 0.5]` → 期望：`0`（最小非负为 0）
3. 输入：`[1.2, 3.4, 0.1, 0.1]` → 期望：`0.1`（浮点&重复）
4. 输入：`[5, 2, 3, 4]` → 期望：`2`（最小正数）

:::



### Question 2

We want to write tests for a function with signature and docstring defined as follows:

```python
def sequence_similarity(s1, s2)
    """
    s1 and s2 are two sequences of the same length.
    Returns the number of i-th elements that are equal 
    between two sequences, i.e., where s1[i] == s2[i]
    """
```

Write **at most** **4** test cases for this function (every test case after the first four will be ignored). For each test case, you must write down the input (argument to the function) and the expected return value. Each test case should specify valid arguments for the function (e.g., an input list with elements of different types is not a valid argument). Your test cases should cover relevant corner cases.

::: details

覆盖：全等、全不等、空序列、含不同类型但可比较。

1. 输入：`([1,2,3], [1,2,3])` → 期望：`3`
2. 输入：`([1,2,3], [3,2,1])` → 期望：`1`（仅中间相等）
3. 输入：`([], [])` → 期望：`0`
4. 输入：`(('a','b','c'), ('a','x','c'))` → 期望：`2`

:::



### Question 3

For a sequence of strings and an integer k, we want to find a substring of length k that is common to the most strings and must occur at least twice. For example, for the sequence `['honestness', 'honestly', 'dishonest', 'fairly']` and `k=6`, the answer is `'honest'` because it appears in 3 strings and no substring of length 6 appears in all 4 strings. For the same list of strings and `k=5`, the answer is `'hones'` or `onest`. When there is more than one solution like this, it is OK to report one of them. For `k=7`, the answer is `''` (empty string) because there is no substring of length 7 that occurs in 2 or more strings.

Here is a function with its docstring which aims to implement this:

```python
def most_common_substr(seq_strings, k):
    """
    seq_strings is a sequence of strings with at least 2 elements.
    k is a positive integer.
    Returns a string of length exactly k which appears as a 
    sub-string in the most elements of seq_strings. 
    If no substrings of length k exist in 2 or more elements 
    of seq_strings, the empty string is returned.
    If two or more substrings of length k appear in the same number 
    of elements of seq_strings only one will be returned.    
    """
```

Write **at most** 5 test cases for this function (every test case after the first four will be ignored). For each test case, you must write down the input (argument to the function) and the expected return value. Each test case should specify valid arguments for the function (e.g., an input list with elements of different types is not a valid argument). Your test cases should cover relevant corner cases.

::: details

题干已有示例，接着补全覆盖：无解、唯一解、并列解、大小写/重复、边界 k=1。

1. 输入：`(['honestness','honestly','dishonest','fairly'], 7)` → 期望：`''`（无长度 7 的公共子串≥2 次）
2. 输入：`(['ababa','babab','aba'], 3)` → 期望：`'aba'` 或 `'bab'`（并列解，返回其一）
3. 输入：`(['xxx','xx','xxxx'], 2)` → 期望：`'xx'`（出现于 3 个字符串）
4. 输入：`(['a','b','c','a'], 1)` → 期望：`'a'`（最常见字符，出现 2 次）

> 说明：若判题需要**唯一答案**，应在说明中接受“任一并列最优”。

:::



## 4. Debugging

Debugging is also an important skill. In a complex software, developers may find themselves spend more time to find mistakes in their codes than writing them in the first place. In the following you will exercise how to find errors and bugs in prewritten codes.

### Question 1

We call a dictionary invertible if every key in it maps to a unique value, or in other words, for every value appearing in the dictionary, there is only one key that maps to that value. Below are three attempts to define a function `is_invertible(adict)`, which takes as argument a dictionary and returns `True` if the dictionary is invertible, and `False` otherwise.

For example, `is_invertible({ 'a' : 'b', 'b' : 'e', 'c' : 'f' })` should return `True`, but `is_invertible({ 'a' : 'b', 'b' : 'e', 'c' : 'b' })` should return `False`, because keys `'a'` and `'c'` both map to the same value, `'b'`.

For each of the functions below, determine whether it is correct or not. Correct mean that the function runs without error and returns the right answer for any dictionary. If a function is not correct, explain precisely what is wrong with it.

**(a)**

```python
def is_invertible(adict):
    return sorted(adict.keys()) == sorted(adict.values())
```

**(b)**

```python
def is_invertible(adict):
    d = {}
    for value in adict.values():
        if value in d:
            return False
        else:
            d[value] = 1
    return True
```

**(c)**

Note: This implementation of the function uses another function, `make_inv_dict`, which is also defined below.

```python
def is_invertible(adict):
    inv_dict = make_inv_dict(adict)
    return adict == inv_dict

def make_inv_dict(adict):
    if len(adict) > 0:
        key, val = adict.popitem()
        adict = make_inv_dict(adict)
        if val not in adict.values():
            adict[key] = val
        return adict
    else:
        return {}
```

::: details

**(a)** `return sorted(adict.keys()) == sorted(adict.values())`

**错误**：把“键集合排序”与“值集合排序”比较。可逆要求“值不重复”（值集合大小等于键集合大小），而不是“键的多重集与值的多重集相同”。反例：`{'a':1,'b':2}`可逆，但键排序 `['a','b']` 与值排序 `[1,2]` 不相等。

**(b)** 正确。逻辑：遍历所有值，若某值已出现过则重复→不可逆；否则记录。返回 True。当值是**可哈希**时成立（题设默认字典键/值常用可哈希类型）。时间 O(n)、空间 O(n)。

**(c)** 错误，且有两点：

1. `make_inv_dict` 使用 `popitem()` **就地修改了入参** `adict`，破坏原字典；调用后 `adict` 被清空或改变。
2. `is_invertible` 返回 `adict == inv_dict` 比较**原字典**与**“去重值”字典**是否相等，而可逆性的充分必要条件并非两者相等（它试图构造“值不重复”的子字典，但比较对象错误）。此外，若存在重复值，`inv_dict` 会**丢掉**其中一个键（因为 `if val not in adict.values(): adict[key] = val` 这段逻辑也混淆了“键/值空间”——这里 `adict` 在递归后成了“剩余键到值”的映射，`val not in adict.values()` 不能保证唯一映射构造的正确性）。

:::





### Question 2

Here is a function that takes as argument a sequence:

```python
def funX(a_list):
    index = 0
    while index < len(sorted(a_list)) // 2:
        index = index + 1
    return sorted(a_list)[index]
```

**(a)** Explain what `funX` does *in general*. A good answer is one that describes the purpose of the function - something you would write in its docstring.

**(b)** `funX` is unnecessarily inefficient. Rewrite the function so that it does the same thing, but as efficiently as possible.

::: details

**(a) 作用**
 返回**已排序后**序列中索引为 `len(s)//2` 的元素（上中位数；若长度偶数，取右侧那个；若奇数，取中位数）。

**(b) 更高效写法（去冗余排序与无意义循环）**

```python
def funX(a_list):
    s = sorted(a_list)
    return s[len(s)//2]
```

> 原函数做了两次 `sorted(a_list)` 且用 while 做“数到一半”的自增，都是冗余。

:::

### Question 3

Here is another function that takes a sequence as argument:

```python
def funY(x):
    i = 0
    while i < len(x):
        i = i + x[i] % len(x)
    return i
```

**(a)** Give an example, if possible, of an argument sequence that causes `funY` to get stuck in an infinite loop, as well as an argument sequence for which the function executes without error and returns a value.

**(b)** What are the runtime errors that can occur in `funY`, assuming the argument is of type `list`? For each error, give an example of an argument list that causes the error.

::: details

```python
def funY(x):
    i = 0
    while i < len(x):
        i = i + x[i] % len(x)
    return i
```

**(a)**

- **会死循环的示例**：`[0]`（`len=1`，`x[0]%1==0`，i 始终为 0）；或 `[2, 1]`（`len=2`，起点 `i=0`，`x[0]%2==0`，停在 0）。
- **能正常返回的示例**：`[1,1,1]`（依次跳 1、2、3，最后返回 3）。

**(b) 可能的运行时错误**

- `ZeroDivisionError`：空列表 `[]`，因为 `len(x)==0`，取模除以 0。
- `TypeError`：元素非数值、不可与 `int` 取模，例如 `['a']`。
- （一般无 `IndexError`：因为 `i < len(x)` 时才取 `x[i]`，且 `i` 的更新使用 `% len(x)`，结果在 `[0, len-1]` 之间，不会越界。但若把 `% len(x)` 移除就可能。)

:::

### Question 4

A *strictly increasing consecutive subsequence* is a part of a sequence in which every element is strictly greater than the previous element. Because "strictly increasing consecutive subsequence" is a bit long, we will call this a *streak*. For example, in the sequence `(1,5,2,4,7,2)`, the subsequences `(1,5)` and `(2,4,7)` are streaks. (Of course, by definition, any subsequence of a streak is also a streak.) `(2,4,7)` is the longest streak among all streaks of that input sequence.

Below is a function that takes as argument a sequence of numbers, and it aims to return the length of the longest streak of the input sequence:

```python
def longest_streak(seq):
    i=0
    counter=1
    narray=[]
    #base case
    if len(seq)==0:
        return(0)
    while i < len(seq)-1:
        if seq[i] < seq[i+1]:
            counter=counter+1
            i=i+1
        else:
            narray.append(counter)
            counter=1
            i=i+1
    if len(narray)==0:
        return(counter)
    else:
        return(max(narray))
```

However, the function above is not correct.

**(a)** Provide an example of argument, of correct types, that makes this function return the wrong answer or that causes a runtime error. The argument must be a sequence of numbers.

**(b)** Explain the cause of the error that you have found, i.e., what is wrong with this function. Your answer must explain what is wrong with the function as given. Writing a new function is not an acceptable answer, regardless of whether it is correct or not.

::: details

**(a) 反例**

`[1, 2, 0, 1, 2, 3]`。

正确答案应为 4（子序列 `0,1,2,3`），而给定函数返回 2 或 3（取决于数据），因为**最后一段递增 streak 未被加入 `narray`**。

**(b) 原因说明**

循环在遇到“非递增”时把当前 `counter` 追加到 `narray`，但**当序列以递增结束**时，**最后一个递增 streak 没有被 append**。函数结束后若 `narray` 非空，则直接取 `max(narray)`，从而忽略了可能**更长**的末尾 streak。应在循环结束后再做一次 `narray.append(counter)` 或单独比较末尾 `counter`。

:::

## 5. Time Complexity

### Question 1

Simplify the following big O expressions as much as possible:

- $O(n + 10)$  
- $O(100 \times n)$  
- $O(25)$  
- $O(n^2 + n^3)$  
- $O(n + n + n + n)$  
- $O(1000 \times \log n + n)$  
- $O(1000 \times n \times \log n + n)$  
- $O(2^n + n^2)$  
- $O(10^{12} + 5 + 3 + 1)$  
- $O(n + \sqrt{n} + n^2 + n \times \log n)$

::: details

- $O(n + 10) = O(n)$
- $O(100 \times n) = O(n)$
- $O(25) = O(1)$
- $O(n^2 + n^3) = O(n^3)$
- $O(n + n + n + n) = O(n)$
- $O(1000 \times \log n + n) = O(n)$
- $O(1000 \times n \times \log n + n) = O(n \log n)$
- $O(2^n + n^2) = O(2^n)$
- $O(10^{12} + 5 + 3 + 1) = O(1)$
- $O(n + \sqrt{n} + n^2 + n \log n) = O(n^2)$

:::

### Question 2

Given the following function definition statement:

```python
def elements_at_even_index(seq):
  result=[]
  for i in range(len(seq)): 
    if i%2==0:
        result.append(seq[i])
  return seq
```

Write down the time complexity in big-O notation as a function of *n* being the number of elements in seq. **Explain the reason why.** Correct answers without any explanation will not receive marks.

Note: complexity of the `len()` function and `append()` method is $O(1)$

::: details

```python
def elements_at_even_index(seq):
  result=[]
  for i in range(len(seq)): 
    if i%2==0:
        result.append(seq[i])
  return seq
```

- **时间复杂度**：$O(n)$。单一 `for` 从 0 到 `len(seq)-1` 一次遍历；`len()` 与 `append()` 为 $O(1)$。

    （另外：此函数**应返回 `result`** 才符合语义，但这不影响复杂度结论。）

:::

### Question 3

Given the following function definition statement:

```python
def matmul(A,x):
    assert len(shape(A))==2
    assert len(shape(x))==1
    assert A.shape[0]==A.shape[1]
    assert A.shape[1]==x.shape[0]
    y=x.copy()
    for i in range(A.shape[0]):
        y[i]=0.0
        for j in range(A.shape[1]):
            y[i]+=A[i,j]*x[j]
    return y
```

Write down the time complexity in big-O notation as a function of *n* being the number of rows and columns in the 2D Numpy array `A`. **Explain the reason why.** Correct answers without any explanation will receive zero marks.

::: details

矩阵-向量乘（方阵 $n\times n$）

* 外层 `i` 迭代 (n) 次，内层 `j` 迭代 (n) 次，常数操作相加乘。
* **时间复杂度**：$O(n^2)$。

:::

### Question 4

Given the following function definition statement:

```python
def first_or_last_is_even(seq):
  assert len(seq)>0

  first_is_even=False
  if seq[0]%2 == 0:
    first_is_even=True

  last_is_even=False
  if seq[-1]%2 == 0:
    last_is_even=True 
  
  return first_is_even or last_is_even
```

Write down the time complexity in big-O notation as a function of *n* being the number of elements in `seq`. **Explain the reason why.** Correct answers without any explanation will receive zero marks.

::: details

`first_or_last_is_even` 只访问 `seq[0]` 与 `seq[-1]`，常数次操作。

* **时间复杂度**：$O(1)$。

:::

### Question 5

Given the following function definition statement:

```python
def power(x,n):
  assert n>=0
  if n==0:
    return 1 
  else:
    if (n%2==0):
        return power(x*x,n//2)
    else:
        return x*power(x*x,n//2)    
```

Write down the time complexity in big-O notation as a function of *n*. **Explain the reason why.** Correct answers without any explanation will receive zero marks.

::: details

幂的二分递归（快速幂）：

* 每次把指数 `n` 变为 `n//2`，递归深度 (\lfloor \log_2 n \rfloor + 1)。
* **时间复杂度**：$O(\log n)$。

:::

### Question 6

Given the following function definition statement:

```python
def f(n):
    assert n>=0
    if n==0:
        return 0
    elif n==1:
        return 1
    else: 
        return f(n-1)+f(n-1)
```

Write down the time complexity in big-O notation as a function of *n*. **Explain the reason why.** Correct answers without any explanation will receive zero marks.

::: details

```python
return f(n-1)+f(n-1)
```

递推：$T(n)=2T(n-1)+O(1)$ → **指数级** $T(n)=O(2^n)$。

:::

### Question 7

Given the following function definition statement:

```python
def sum_scan(l):
   result = [0 for i in range(len(l))]
   for i in range(len(l)):
      for j in range(i+1):
         result[i]=result[i]+l[j]
   return result
```

**(a)** Write down the time complexity in big-O notation as a function of n*n* being the length of the input list `l`.

**(b)** Is there a way to re-write this function such that it has a reduced order of complexity? If yes, explain with words what would you do to achieve such an objective.

::: details

```python
for i in range(len(l)):
  for j in range(i+1):
     ...
```

* (a) 双层三角循环，操作次数 $\sum_{i=0}^{n-1}(i+1)=n(n+1)/2$ → **(O(n^2))**。
* (b) 可降到 **$O(n)$**：维护一个**前缀和**变量 `running`，一次遍历中依次 `running += l[i]` 并写入 `result[i] = running`。

:::

## 6. Programming problems

For each problem there is a problem description and a scaffold file for you to write your solution into. As usual, you can click the "Test" button to test your code. The scaffold file also has a testing function that runs several test cases on your functions if you want to test the function on your local IDE.

Remember that the set of tests provided is never complete. Your task is to write a function that solves the problem that is described for all valid arguments (i.e., all arguments that meet the restrictions given in the problem description). Passing the tests does not prove that your implementation is correct, but *failing any test proves that your code is wrong*.

### 6.1 Problem 1: Super Increasing

A sequence of numbers is called *super-increasing* if and only if every number in the sequence is strictly greater than the sum of all numbers preceding it in the sequence. The first element in the sequence can be any number.

For example, the sequences `1,3,5,11,21` and `-2,1,2` are both super-increasing; the sequence `1,3,5,7,19` is increasing, but not super-increasing.

Write a function `super_increasing(seq)` that takes as argument a sequence of numbers and returns True if the sequence is super-increasing and False if it is not.

- You can assume that the argument is a non-empty sequence of numbers.
- You should not assume that values in the sequence are unique or increasing.
- You should not make any assumption about the type of the argument other than that it is a sequence type; likewise, you should not make any assumption about the type of the numbers in the sequence, other than that they are numbers.
- The function must not modify the argument sequence.
- The function must return a truth value (a value of type `bool`).

You should write your solution into the file `super_increasing.py`. Remember that:

- The file must contain only syntactically correct python code (and comments).
- Do not import any module that you do not use.
- You must define a function named `super_increasing` that has one parameter. You may also define additional functions if it helps you break down or solve the problem.

**Testing**

You can click the "Test" button to test your code. The scaffold code file also includes a testing function, `test_super_increasing`, which will run the same tests on your function and raise an error if any test fails. Passing the tests does not prove that your solution is correct. *Failing any test proves that your function is wrong*.

::: code-tabs

@tab Code1

```python
# Implement the function super_increasing below.
# You can define other functions if it helps you decompose and solve
# the problem.
# Do not import any module that you do not use!

# Remember that if this were an exam problem, in order to be marked
# this file must meet certain requirements:
# - it must contain ONLY syntactically valid python code (any syntax
#   or indentation error that stops the file from running would result
#   in a mark of zero);
# - you MAY NOT use global variables; the function must use only the
#   input provided to it in its arguments.


def super_increasing(seq):
    pass


def test_super_increasing():
    """
    This function runs a number of tests of the super_increasing function.
    If it works ok, you will just see the output ("all tests passed") at
    the end when you call this function; if some test fails, there will
    be an error message.
    """

    assert not super_increasing((1, 3, 5, 7, 19)), "sum(1, 3, 5) = 9 >= 7"
    assert super_increasing([1, 3, 5, 11, 21]), "sum(1) = 1 < 3; sum(1,3) = 4 < 5; sum(1, 3, 5) = 9 < 11; sum(1, 3, 5, 11) = 20 < 21"
    assert super_increasing((0, 1, 2, 4)), "sum(0) = 0 < 1; sum(0, 1) = 1 < 2; sum(0, 1, 2) = 3 < 4"
    assert not super_increasing([0, 0, 1, 2]), "sum(0) = 0 >= 0"
    assert super_increasing((-1, 0, 0, 1)), "sum(-1) = -1 < 0; sum(-1, 0) = -1 < 0; sum(-1, 0, 0) = -1 < 1"
    assert not super_increasing((1, 2, 0, 4)), "sum(1, 2) = 3 >= 0"
    assert super_increasing((-1, 3, 4)), "sum(-1) < 3; sum(-1, 3) = 2 < 4"
    assert not super_increasing((-1, 3, 4, 5)), "sum(-1, 3, 4) = 6 >= 5"
    assert super_increasing((-2, -1, -2)), "sum(-2) < -1; sum(-2, -1) = -3 < -2"
    assert not super_increasing((-2, -1, -4)), "sum(-2, -1) = -3 >= -4"

    print("all tests passed")
```

@tab 答案

```python
# Implement the function super_increasing below.
# You can define other functions if it helps you decompose and solve
# the problem.
# Do not import any module that you do not use!

def super_increasing(seq):
    """
    Return True iff seq is super-increasing:
    for every index i>0, seq[i] > sum(seq[:i]).
    The first element can be any number.
    """
    total = seq[0]
    for x in seq[1:]:
        if x <= total:
            return False
        total += x
    return True



def test_super_increasing():
    """
    This function runs a number of tests of the super_increasing function.
    If it works ok, you will just see the output ("all tests passed") at
    the end when you call this function; if some test fails, there will
    be an error message.
    """

    assert not super_increasing((1, 3, 5, 7, 19)), "sum(1, 3, 5) = 9 >= 7"
    assert super_increasing([1, 3, 5, 11, 21]), "sum(1) = 1 < 3; sum(1,3) = 4 < 5; sum(1, 3, 5) = 9 < 11; sum(1, 3, 5, 11) = 20 < 21"
    assert super_increasing((0, 1, 2, 4)), "sum(0) = 0 < 1; sum(0, 1) = 1 < 2; sum(0, 1, 2) = 3 < 4"
    assert not super_increasing([0, 0, 1, 2]), "sum(0) = 0 >= 0"
    assert super_increasing((-1, 0, 0, 1)), "sum(-1) = -1 < 0; sum(-1, 0) = -1 < 0; sum(-1, 0, 0) = -1 < 1"
    assert not super_increasing((1, 2, 0, 4)), "sum(1, 2) = 3 >= 0"
    assert super_increasing((-1, 3, 4)), "sum(-1) < 3; sum(-1, 3) = 2 < 4"
    assert not super_increasing((-1, 3, 4, 5)), "sum(-1, 3, 4) = 6 >= 5"
    assert super_increasing((-2, -1, -2)), "sum(-2) < -1; sum(-2, -1) = -3 < -2"
    assert not super_increasing((-2, -1, -4)), "sum(-2, -1) = -3 >= -4"

    print("all tests passed")
    
test_super_increasing()
```

:::

### 6.2 Problem 2: Interval Intersection

A closed interval of the real number line is defined by its lower and upper end points. Write a function `interval_intersection(lower_a, upper_a, lower_b, upper_b)` that returns the length of the intersection of two intervals *A* and *B*. Arguments `lower_a` and `upper_a` are the lower and upper end points of interval *A*, and `lower_b` and `upper_b` are the lower and upper end points of interval *B*. If the intervals do not intersect, the function should return 0.

For example, `interval_intersection(0, 3, 1, 5)` should return `2`, because the intersection of the two intervals [*0,3*] and [*1,5*] is [*1,3*], which has a length of *3 - 1 = 2*.

- You can assume that the function's arguments are numbers, but NOT that they are integers, or positive.
- Your function must return a number.

You should write your solution into the scaffold file `interval_intersection.py`. Remember that:

- The file must contain only syntactically correct python code (and comments).
- Do not import any module that you do not use.
- You must define a function named `interval_intersection` that has four parameters. You may also define additional functions if it helps you break down or solve the problem.

**Testing**

You can click the "Test" button to test your code. The scaffold code file also includes a testing function, `test_interval_intersection`, which will run the same tests on your function and raise an error if any test fails. Passing the tests does not prove that your solution is correct. *Failing any test proves that your function is wrong*.

::: code-tabs

@tab Code1

```python
# Implement the function interval_intersection below.
# You can define other functions if it helps you decompose and solve
# the problem.
# Do not import any module that you do not use!

# Remember that if this were an exam problem, in order to be marked
# this file must meet certain requirements:
# - it must contain ONLY syntactically valid python code (any syntax
#   or indentation error that stops the file from running would result
#   in a mark of zero);
# - you MAY NOT use global variables; the function must use only the
#   input provided to it in its arguments.


def interval_intersection(lower_a, upper_a, lower_b, upper_b):
    pass


def test_interval_intersection():
    """
    This function runs a number of tests of the interval_intersection function.
    If it works ok, you will just see the output ("all tests passed") at
    the end when you call this function; if some test fails, there will
    be an error message.
    """

    assert interval_intersection(0, 2, 4, 7.5) == 0.0, "no intersection (uA < lB)"
    assert interval_intersection(1, 3, 2.5, 6) == 0.5, "intersection is [2.5, 3]"
    assert interval_intersection(1, 3, 1.5, 5) == 1.5, "intersection is [1.5, 3]"
    assert interval_intersection(0, 2, -2, 1.5) == 1.5, "intersection is [0, 1.5]"
    assert interval_intersection(1, 3, 0, 3.5) == 2.0, "A is contained in B"
    assert interval_intersection(1.5, 3.5, 0, 3.5) == 2.0, "A is contained in B"

    print("all tests passed")
```

@tab 答案

```python
# Implement the function interval_intersection below.
# You can define other functions if it helps you decompose and solve
# the problem.
# Do not import any module that you do not use!

def interval_intersection(lower_a, upper_a, lower_b, upper_b):
    """
    Return the length of intersection of closed intervals [lower_a, upper_a]
    and [lower_b, upper_b]. If disjoint, return 0.0.
    """
    left = max(lower_a, lower_b)
    right = min(upper_a, upper_b)
    length = right - left
    return float(length) if length > 0 else 0.0


def test_interval_intersection():
    """
    This function runs a number of tests of the interval_intersection function.
    If it works ok, you will just see the output ("all tests passed") at
    the end when you call this function; if some test fails, there will
    be an error message.
    """

    assert interval_intersection(0, 2, 4, 7.5) == 0.0, "no intersection (uA < lB)"
    assert interval_intersection(1, 3, 2.5, 6) == 0.5, "intersection is [2.5, 3]"
    assert interval_intersection(1, 3, 1.5, 5) == 1.5, "intersection is [1.5, 3]"
    assert interval_intersection(0, 2, -2, 1.5) == 1.5, "intersection is [0, 1.5]"
    assert interval_intersection(1, 3, 0, 3.5) == 2.0, "A is contained in B"
    assert interval_intersection(1.5, 3.5, 0, 3.5) == 2.0, "A is contained in B"

    print("all tests passed")
```



:::

### 6.3 Problem 3: Counting Dictionary

Let's say that a *counting dictionary* is a dictionary in which all values (not keys) are positive integers. (In other words, it's the kind of dictionary you get when you use a dictionary to count repetitions of keys.) Given two counting dictionaries, `a` and `b`, the *difference between `a` and `b`* is another counting dictionary that contains the key-value pairs `(k, n)` where `n = a[k] - b[k]` for exactly those keys `k` such that `n > 0` or `k` appears only in `a`.

Write a function `count_dict_difference(a, b)` that takes as arguments two counting dictionaries and returns a new dictionary that is the difference between them.

- You can assume that both arguments are dictionaries, and the values stored in them are integers.
- You should make *no* assumption about the types of keys that can appear in the dictionaries.
- Your function *must not* modify either of the argument dictionaries.
- Your function should value of type `dict`.

**Example:**

For example if `a = {'s': 4, 'm': 1, 'p': 2, 'i': 4}` (that's the letter counts for the word 'mississippi') and `b = {'e': 1, 's': 3, 'm': 1, 'p': 1, 'i': 2, 't': 1}` (that's the letter counts for the word 'pessimist'), the difference of `a` and `b` is the dictionary `{'s' : 1, 'p' : 1, 'i' : 2}` (note how `'m'` is not in the difference because `a['m'] - b['m'] == 0`).

You should write your solution into the scaffold file `count_dict_difference.py`. Remember that:

- The file must contain only syntactically correct python code (and comments).
- Do not import any module that you do not use.
- You must define a function named `count_dict_difference` that has two parameters. You may also define additional functions if it helps you break down or solve the problem.

**Testing**

You can click the "Test" button to test your code. The scaffold code file also includes a testing function, `test_count_dict_difference`, which will run the same tests on your function and raise an error if any test fails. Passing the tests does not prove that your solution is correct. *Failing any test proves that your function is wrong*.

::: code-tabs

@tab Code1

```python
# Implement the function count_dict_difference below.
# You can define other functions if it helps you decompose and solve
# the problem.
# Do not import any module that you do not use!

# Remember that if this were an exam problem, in order to be marked
# this file must meet certain requirements:
# - it must contain ONLY syntactically valid python code (any syntax
#   or indentation error that stops the file from running would result
#   in a mark of zero);
# - you MAY NOT use global variables; the function must use only the
#   input provided to it in its arguments.

def count_dict_difference(a, b):
    return {}


def test_count_dict_difference():
    """
    This function runs a number of tests of the count_dict_difference function.
    If it works ok, you will just see the output ("all tests passed") at
    the end when you call this function; if some test fails, there will
    be an error message.
    """

    assert count_dict_difference({'d': 3, 'e': 1, 'z': 1, 's': 1, 'i': 1, 'r': 1, 'a': 2, 'n': 1, 't': 1}, {'e': 2, 'x': 1, 'g': 1, 's': 1, 'p': 1, 'i': 1, 't': 1, 'a': 2, 'n': 1, 'r': 1}) == {'z': 1, 'd': 3}
    assert count_dict_difference({'m': 1, 'o': 1, 'c': 2, 'r': 1, 'i': 2, 't': 1, 'a': 2, 'n': 1, 'l': 2, 'u': 1}, {'m': 2, 'o': 2, 'c': 1, 'z': 1, 'a': 2, 'i': 5, 'u': 1, 'r': 2, 'n': 2, 's': 1, 't': 2}) == {'l': 2, 'c': 1}
    assert count_dict_difference({'g': 1, 'c': 1, 'a': 2, 'i': 2, 'u': 1, 'r': 1, 'n': 1, 'l': 1, 't': 2}, {'g': 1, 'c': 1, 's': 1, 'a': 2, 'i': 2, 't': 2, 'r': 2, 'l': 2, 'u': 2}) == {'n': 1}
    assert count_dict_difference({'o': 1, 's': 5, 'i': 2, 'a': 3, 'n': 2, 't': 1}, {'o': 1, 'c': 1, 'z': 1, 'i': 2, 't': 2, 'a': 3, 'n': 1, 'l': 1, 'u': 1}) == {'s': 5, 'n': 1}
    assert count_dict_difference({'o': 2, 'c': 1, 'e': 2, 's': 2, 'r': 2, 'n': 2, 't': 1}, {'d': 2, 'c': 1, 'e': 3, 'a': 1, 't': 1, 'r': 2, 'o': 2, 'v': 1}) == {'s': 2, 'n': 2}
    assert count_dict_difference({'e': 4, 'g': 2, 's': 5, 'a': 1, 'i': 1, 'r': 1, 'n': 1, 'v': 1}, {'o': 1, 'i': 1, 'g': 1, 'c': 2, 'e': 1, 'a': 2, 'k': 1, 'u': 1, 'r': 1, 'n': 2, 't': 3}) == {'s': 5, 'e': 3, 'g': 1, 'v': 1}
    
    assert count_dict_difference({0: 1, 17: 2, 2: 1, 19: 2, 4: 1, 8: 2, 18: 1, 13: 1, 14: 1, 15: 1}, {0: 2, 17: 1, 2: 1, 19: 2, 4: 1, 8: 2, 20: 1, 11: 1, 13: 1, 14: 1, 15: 1}) == {17: 1, 18: 1}
    assert count_dict_difference({0: 1, 17: 1, 18: 2, 19: 1, 4: 1, 8: 4, 11: 1, 12: 1}, {0: 1, 17: 2, 2: 1, 19: 1, 4: 2, 8: 1, 20: 1, 11: 2, 12: 1, 13: 1, 14: 1}) == {8: 3, 18: 2}
    assert count_dict_difference({0: 1, 17: 1, 18: 3, 3: 1, 4: 3, 6: 2, 13: 1}, {0: 2, 17: 1, 2: 1, 3: 1, 4: 1, 8: 1, 24: 1, 18: 1, 12: 1, 13: 1, 14: 1}) == {18: 2, 4: 2, 6: 2}
    assert count_dict_difference({0: 3, 3: 1, 4: 1, 6: 1, 11: 1, 13: 1, 14: 1, 18: 1, 19: 1, 20: 1, 21: 1, 24: 1}, {17: 1, 18: 1, 3: 1, 4: 2, 21: 1, 6: 1, 8: 1, 20: 1, 11: 1, 13: 1, 14: 1}) == {0: 3, 24: 1, 19: 1}
    assert count_dict_difference({17: 2, 2: 1, 3: 2, 4: 2, 13: 1, 18: 1, 14: 2, 15: 1}, {0: 1, 17: 2, 2: 1, 4: 2, 5: 1, 18: 1, 12: 1, 13: 3, 14: 2, 15: 1}) == {3: 2}
    assert count_dict_difference({0: 1, 18: 6, 4: 2, 11: 1, 12: 1, 13: 1}, {0: 1, 17: 1, 2: 1, 19: 1, 4: 2, 6: 1, 11: 1, 12: 1, 13: 1, 14: 2}) == {18: 6}

    assert count_dict_difference({'in': 1, 'ti': 1, 'iv': 1, 'se': 1, 've': 1, 'en': 1, 'ns': 2, 'it': 1, 'si': 1}, {'ve': 1, 'ti': 1, 'iv': 1, 'si': 1, 'it': 1, 'ns': 2, 'st': 1, 'ra': 1, 'tr': 1, 'in': 1, 'an': 1}) == {'se': 1, 'en': 1}
    assert count_dict_difference({'th': 1, 'gt': 1, 'le': 1, 'en': 2, 'ng': 1, 'he': 1, 'ed': 1, 'ne': 1}, {'th': 1, 'ed': 1, 'ng': 1, 'en': 2, 'gt': 1, 'st': 1, 'he': 1, 're': 1, 'tr': 1, 'ne': 1}) == {'le': 1}
    assert count_dict_difference({'sm': 2, 'ri': 1, 'me': 2, 'es': 1, 'is': 1, 'er': 1}, {'di': 1, 'er': 1, 'st': 1, 'is': 1, 're': 1, 'dn': 1, 'si': 1, 'ne': 1, 'in': 1, 'ed': 1, 'nt': 1, 'es': 3, 'se': 1, 'ss': 1, 'te': 2}) == {'me': 2, 'ri': 1, 'sm': 2}
    assert count_dict_difference({'iz': 1, 'on': 1, 'al': 1, 'ze': 1, 'li': 1, 'at': 1, 'na': 2, 'ti': 1, 'io': 1}, {'za': 1, 'ra': 1, 'on': 2, 'al': 1, 'li': 1, 'iz': 1, 'at': 2, 'na': 1, 'ti': 2, 'io': 2}) == {'ze': 1, 'na': 1}

    assert count_dict_difference({(0, 5, 6): 1, (0, 5): 1, (5, 5): 2, (5, 0): 1, (5, 6): 1, (5, 5, 0): 1, (6, 5, 5): 1, (5, 5, 5): 1, (6, 5): 1, (5, 6, 5): 1}, {(0, 5, 5): 1, (5, 5, 6): 1, (0, 5): 1, (5, 5): 2, (5, 0): 1, (5, 6): 1, (6, 5, 0): 1, (5, 5, 5): 1, (6, 5): 1, (5, 6, 5): 1}) == {(0, 5, 6): 1, (5, 5, 0): 1, (6, 5, 5): 1}
    assert count_dict_difference({(2, 0): 1, (7, 7, 7): 2, (8, 7): 1, (8, 7, 7): 1, (7, 2, 0): 1, (7, 7): 3, (7, 2): 1, (7, 7, 2): 1}, {(8, 7, 7): 1, (2, 0): 1, (7, 2, 0): 1, (8, 7): 1, (7, 8, 7): 1, (7, 7, 8): 1, (7, 8): 1, (7, 7): 2, (7, 2): 1, (7, 7, 2): 1}) == {(7, 7, 7): 2, (7, 7): 1}
    assert count_dict_difference({(8, 8, 5): 1, (0, 8, 8): 1, (8, 8): 1, (8, 5, 3): 1, (5, 3, 0): 1, (3, 0): 1, (3, 0, 8): 1, (0, 8): 2, (8, 5): 1, (5, 3): 1}, {(8, 8, 5): 1, (3, 0, 0): 1, (8, 8): 2, (8, 5, 3): 1, (5, 3, 0): 1, (3, 0): 1, (8, 8, 8): 1, (8, 5): 1, (0, 0): 1, (5, 3): 1}) == {(3, 0, 8): 1, (0, 8, 8): 1, (0, 8): 2}
    
    print("all tests passed")
```

@tab 答案

```python
# Implement the function count_dict_difference below.
# You can define other functions if it helps you decompose and solve
# the problem.
# Do not import any module that you do not use!

def count_dict_difference(a, b):
    """
    Given counting dicts a and b (values are integers),
    return dict of keys k with n = a[k] - b.get(k,0) > 0.
    Do not mutate a or b.
    """
    result = {}
    for k, va in a.items():
        n = va - b.get(k, 0)
        if n > 0:
            result[k] = n
    return result


def test_count_dict_difference():
    """
    This function runs a number of tests of the count_dict_difference function.
    If it works ok, you will just see the output ("all tests passed") at
    the end when you call this function; if some test fails, there will
    be an error message.
    """

    assert count_dict_difference({'d': 3, 'e': 1, 'z': 1, 's': 1, 'i': 1, 'r': 1, 'a': 2, 'n': 1, 't': 1}, {'e': 2, 'x': 1, 'g': 1, 's': 1, 'p': 1, 'i': 1, 't': 1, 'a': 2, 'n': 1, 'r': 1}) == {'z': 1, 'd': 3}
    assert count_dict_difference({'m': 1, 'o': 1, 'c': 2, 'r': 1, 'i': 2, 't': 1, 'a': 2, 'n': 1, 'l': 2, 'u': 1}, {'m': 2, 'o': 2, 'c': 1, 'z': 1, 'a': 2, 'i': 5, 'u': 1, 'r': 2, 'n': 2, 's': 1, 't': 2}) == {'l': 2, 'c': 1}
    assert count_dict_difference({'g': 1, 'c': 1, 'a': 2, 'i': 2, 'u': 1, 'r': 1, 'n': 1, 'l': 1, 't': 2}, {'g': 1, 'c': 1, 's': 1, 'a': 2, 'i': 2, 't': 2, 'r': 2, 'l': 2, 'u': 2}) == {'n': 1}
    assert count_dict_difference({'o': 1, 's': 5, 'i': 2, 'a': 3, 'n': 2, 't': 1}, {'o': 1, 'c': 1, 'z': 1, 'i': 2, 't': 2, 'a': 3, 'n': 1, 'l': 1, 'u': 1}) == {'s': 5, 'n': 1}
    assert count_dict_difference({'o': 2, 'c': 1, 'e': 2, 's': 2, 'r': 2, 'n': 2, 't': 1}, {'d': 2, 'c': 1, 'e': 3, 'a': 1, 't': 1, 'r': 2, 'o': 2, 'v': 1}) == {'s': 2, 'n': 2}
    assert count_dict_difference({'e': 4, 'g': 2, 's': 5, 'a': 1, 'i': 1, 'r': 1, 'n': 1, 'v': 1}, {'o': 1, 'i': 1, 'g': 1, 'c': 2, 'e': 1, 'a': 2, 'k': 1, 'u': 1, 'r': 1, 'n': 2, 't': 3}) == {'s': 5, 'e': 3, 'g': 1, 'v': 1}
    
    assert count_dict_difference({0: 1, 17: 2, 2: 1, 19: 2, 4: 1, 8: 2, 18: 1, 13: 1, 14: 1, 15: 1}, {0: 2, 17: 1, 2: 1, 19: 2, 4: 1, 8: 2, 20: 1, 11: 1, 13: 1, 14: 1, 15: 1}) == {17: 1, 18: 1}
    assert count_dict_difference({0: 1, 17: 1, 18: 2, 19: 1, 4: 1, 8: 4, 11: 1, 12: 1}, {0: 1, 17: 2, 2: 1, 19: 1, 4: 2, 8: 1, 20: 1, 11: 2, 12: 1, 13: 1, 14: 1}) == {8: 3, 18: 2}
    assert count_dict_difference({0: 1, 17: 1, 18: 3, 3: 1, 4: 3, 6: 2, 13: 1}, {0: 2, 17: 1, 2: 1, 3: 1, 4: 1, 8: 1, 24: 1, 18: 1, 12: 1, 13: 1, 14: 1}) == {18: 2, 4: 2, 6: 2}
    assert count_dict_difference({0: 3, 3: 1, 4: 1, 6: 1, 11: 1, 13: 1, 14: 1, 18: 1, 19: 1, 20: 1, 21: 1, 24: 1}, {17: 1, 18: 1, 3: 1, 4: 2, 21: 1, 6: 1, 8: 1, 20: 1, 11: 1, 13: 1, 14: 1}) == {0: 3, 24: 1, 19: 1}
    assert count_dict_difference({17: 2, 2: 1, 3: 2, 4: 2, 13: 1, 18: 1, 14: 2, 15: 1}, {0: 1, 17: 2, 2: 1, 4: 2, 5: 1, 18: 1, 12: 1, 13: 3, 14: 2, 15: 1}) == {3: 2}
    assert count_dict_difference({0: 1, 18: 6, 4: 2, 11: 1, 12: 1, 13: 1}, {0: 1, 17: 1, 2: 1, 19: 1, 4: 2, 6: 1, 11: 1, 12: 1, 13: 1, 14: 2}) == {18: 6}

    assert count_dict_difference({'in': 1, 'ti': 1, 'iv': 1, 'se': 1, 've': 1, 'en': 1, 'ns': 2, 'it': 1, 'si': 1}, {'ve': 1, 'ti': 1, 'iv': 1, 'si': 1, 'it': 1, 'ns': 2, 'st': 1, 'ra': 1, 'tr': 1, 'in': 1, 'an': 1}) == {'se': 1, 'en': 1}
    assert count_dict_difference({'th': 1, 'gt': 1, 'le': 1, 'en': 2, 'ng': 1, 'he': 1, 'ed': 1, 'ne': 1}, {'th': 1, 'ed': 1, 'ng': 1, 'en': 2, 'gt': 1, 'st': 1, 'he': 1, 're': 1, 'tr': 1, 'ne': 1}) == {'le': 1}
    assert count_dict_difference({'sm': 2, 'ri': 1, 'me': 2, 'es': 1, 'is': 1, 'er': 1}, {'di': 1, 'er': 1, 'st': 1, 'is': 1, 're': 1, 'dn': 1, 'si': 1, 'ne': 1, 'in': 1, 'ed': 1, 'nt': 1, 'es': 3, 'se': 1, 'ss': 1, 'te': 2}) == {'me': 2, 'ri': 1, 'sm': 2}
    assert count_dict_difference({'iz': 1, 'on': 1, 'al': 1, 'ze': 1, 'li': 1, 'at': 1, 'na': 2, 'ti': 1, 'io': 1}, {'za': 1, 'ra': 1, 'on': 2, 'al': 1, 'li': 1, 'iz': 1, 'at': 2, 'na': 1, 'ti': 2, 'io': 2}) == {'ze': 1, 'na': 1}

    assert count_dict_difference({(0, 5, 6): 1, (0, 5): 1, (5, 5): 2, (5, 0): 1, (5, 6): 1, (5, 5, 0): 1, (6, 5, 5): 1, (5, 5, 5): 1, (6, 5): 1, (5, 6, 5): 1}, {(0, 5, 5): 1, (5, 5, 6): 1, (0, 5): 1, (5, 5): 2, (5, 0): 1, (5, 6): 1, (6, 5, 0): 1, (5, 5, 5): 1, (6, 5): 1, (5, 6, 5): 1}) == {(0, 5, 6): 1, (5, 5, 0): 1, (6, 5, 5): 1}
    assert count_dict_difference({(2, 0): 1, (7, 7, 7): 2, (8, 7): 1, (8, 7, 7): 1, (7, 2, 0): 1, (7, 7): 3, (7, 2): 1, (7, 7, 2): 1}, {(8, 7, 7): 1, (2, 0): 1, (7, 2, 0): 1, (8, 7): 1, (7, 8, 7): 1, (7, 7, 8): 1, (7, 8): 1, (7, 7): 2, (7, 2): 1, (7, 7, 2): 1}) == {(7, 7, 7): 2, (7, 7): 1}
    assert count_dict_difference({(8, 8, 5): 1, (0, 8, 8): 1, (8, 8): 1, (8, 5, 3): 1, (5, 3, 0): 1, (3, 0): 1, (3, 0, 8): 1, (0, 8): 2, (8, 5): 1, (5, 3): 1}, {(8, 8, 5): 1, (3, 0, 0): 1, (8, 8): 2, (8, 5, 3): 1, (5, 3, 0): 1, (3, 0): 1, (8, 8, 8): 1, (8, 5): 1, (0, 0): 1, (5, 3): 1}) == {(3, 0, 8): 1, (0, 8, 8): 1, (0, 8): 2}
    
    print("all tests passed")
```



:::

### 6.4 Problem 4: Remove All

Write a function `remove_all(a_list, element)`, which removes *all* occurrences of `element` from `a_list`. You can assume that the first argument to the function, `a_list`, is a list. The function should not return any value (i.e., return `None`) but should modify the argument list. For example,

```python
In [1]: my_list = [1,2,3,2,3,1,2]
In [2]: remove_all(my_list, 2)
In [3]: my_list
Out [3]: [1,3,3,1]
```

You should write your solution into the scaffold file `remove_all.py`. Remember that:

- The file must contain only syntactically correct python code (and comments).
- Do not import any module that you do not use.
- You must define a function named `remove_all` that has two parameters. You may also define additional functions if it helps you break down or solve the problem.

**Testing**

You can click the "Test" button to test your code. The scaffold code file also includes a testing function, `test_remove_all`, which will run the same tests on your function and raise an error if any test fails. Passing the tests does not prove that your solution is correct. *Failing any test proves that your function is wrong*.

::: code-tabs

@tab Code1

```python
# Implement the function remove_all below.
# You can define other functions if it helps you decompose and solve
# the problem.
# Do not import any module that you do not use!

# Remember that if this were an exam problem, in order to be marked
# this file must meet certain requirements:
# - it must contain ONLY syntactically valid python code (any syntax
#   or indentation error that stops the file from running would result
#   in a mark of zero);
# - you MAY NOT use global variables; the function must use only the
#   input provided to it in its arguments.

def remove_all(a_list, element):
    pass


def list_after_remove(list_in, element):
    """
    Wrapper function for testing remove_all; creates a copy of the
    input list, calls remove_all on the copy, and returns the copy
    after the call.
    """
    test_list = list_in[:] # make a shallow copy of the input list
    remove_all(test_list, element)
    return test_list

def test_remove_all():
    """
    This function runs a number of tests of the remove_all function.
    If it works ok, you will just see the output ("all tests passed") at
    the end when you call this function; if some test fails, there will
    be an error message.
    """

    assert list_after_remove([1,2,3,4,5], 1) == [2,3,4,5], "should remove 1"
    assert list_after_remove([1,2,3,4,5], 3) == [1,2,4,5], "should remove 3"
    assert list_after_remove([1,2,3,4,5], 5) == [1,2,3,4], "should remove 5"
    assert list_after_remove([1,2,3,4,5], 7) == [1,2,3,4,5], "7 not in list, so should be unmodified"
    assert list_after_remove([[1,2],[1,2,3],[2,3]], [1,2,3]) == [[1,2], [2,3]], "should remove [1,2,3]"

    assert list_after_remove([1,2,3,2,3], 1) == [2,3,2,3], "should remove 1"
    assert list_after_remove([1,2,3,2,3], 2) == [1,3,3], "should remove both 2s"
    assert list_after_remove([2,2,2], 1) == [2,2,2], "1 not in list, so should be unmodified"
    assert list_after_remove([2,2,2], 2) == [], "should remove all three 2s"

    print("all tests passed")
```

@tab 答案

```python
# Implement the function remove_all below.
# You can define other functions if it helps you decompose and solve
# the problem.
# Do not import any module that you do not use!

def remove_all(a_list, element):
    """
    Remove all occurrences of `element` from `a_list` in place.
    """
    # slice assignment keeps original list object, as required
    a_list[:] = [x for x in a_list if x != element]


def list_after_remove(list_in, element):
    """
    Wrapper function for testing remove_all; creates a copy of the
    input list, calls remove_all on the copy, and returns the copy
    after the call.
    """
    test_list = list_in[:] # make a shallow copy of the input list
    remove_all(test_list, element)
    return test_list

def test_remove_all():
    """
    This function runs a number of tests of the remove_all function.
    If it works ok, you will just see the output ("all tests passed") at
    the end when you call this function; if some test fails, there will
    be an error message.
    """

    assert list_after_remove([1,2,3,4,5], 1) == [2,3,4,5], "should remove 1"
    assert list_after_remove([1,2,3,4,5], 3) == [1,2,4,5], "should remove 3"
    assert list_after_remove([1,2,3,4,5], 5) == [1,2,3,4], "should remove 5"
    assert list_after_remove([1,2,3,4,5], 7) == [1,2,3,4,5], "7 not in list, so should be unmodified"
    assert list_after_remove([[1,2],[1,2,3],[2,3]], [1,2,3]) == [[1,2], [2,3]], "should remove [1,2,3]"

    assert list_after_remove([1,2,3,2,3], 1) == [2,3,2,3], "should remove 1"
    assert list_after_remove([1,2,3,2,3], 2) == [1,3,3], "should remove both 2s"
    assert list_after_remove([2,2,2], 1) == [2,2,2], "1 not in list, so should be unmodified"
    assert list_after_remove([2,2,2], 2) == [], "should remove all three 2s"

    print("all tests passed")

```



:::

### 6.5 Problem 5: Moving Average

The *moving average* of a numeric sequence is a sequence of averages of subsequences of the original sequence; the subsequences are known as *windows* (or a *sliding window*), and the length of the subsequence used is called the *window size*. More precisely, given a sequence `S`, the moving average with window size `w` is sequence `A` such that the first element in `A` is the average of `w` consecutive elements in `S` starting with the first, the second element in `A` is the average of `w` consecutive elements in `S` starting with the second, and so on until the last element in `A`, which is the average of `w` consecutive elements in `S` ending with the last.

**Example:**

If `S = (2, 0, -2, 2)` and `w = 2`, the moving average is `[1, -1, 0]`. `1` is the average of `(2, 0)`, `-1` is the average of `(0, -2)`, and `0` is the average of `(-2, 2)`.

Write a function `moving_average(seq, w_size)` that computes and returns the moving average of `seq` with window size `w_size`.

- You should assume that the argument is a sequence of numbers (integer or floating point, or a mix of them).
- You should NOT make any assumption about the type of the sequence (e.g., it could be list, tuple or NumPy array).
- You can assume that `w_size` is an integer, at least 1, and less than or equal to the length of `seq`.
- Your function must return a sequence of numbers (this can be, for example, a list, a tuple or NumPy array).

You should write your solution into the scaffold file `moving_average.py`. Remember that:

- The file must contain only syntactically correct python code (and comments).
- Do not import any module that you do not use.
- You must define a function named `moving_average` that has two parameters. You may also define additional functions if it helps you break down or solve the problem.

**Testing**

You can click the "Test" button to test your code. The scaffold code file also includes a testing function, `test_moving_average`, which will run the same tests on your function and raise an error if any test fails. Passing the tests does not prove that your solution is correct. *Failing any test proves that your function is wrong*.

::: code-tabs

@tab Code1

```python
# Implement the function moving_average below.
# You can define other functions if it helps you decompose and solve
# the problem.
# Do not import any module that you do not use!

# Remember that if this were an exam problem, in order to be marked
# this file must meet certain requirements:
# - it must contain ONLY syntactically valid python code (any syntax
#   or indentation error that stops the file from running would result
#   in a mark of zero);
# - you MAY NOT use global variables; the function must use only the
#   input provided to it in its arguments.

import numpy as np

def moving_average(seq, w_size):
    return []


def seq_matches(seq1, seq2):
    """
    Return True if two sequences of numbers match with a tolerance of 0.001
    """
    if len(seq1) != len(seq2):
        return False
    for i in range(len(seq1)):
        if abs(seq1[i] - seq2[i]) > 1e-3:
            return False
    return True

def test_moving_average():
    """
    This function runs a number of tests of the moving_average function.
    If it works ok, you will just see the output ("all tests passed") at
    the end when you call this function; if some test fails, there will
    be an error message.
    """
    
    assert seq_matches(moving_average((-1, 0, 0, -2, 1), 2), (-0.5, 0.0, -1.0, -0.5))
    assert seq_matches(moving_average([-1, 0, 0, -2, 1], 3), (-0.334, -0.667, -0.334))
    assert seq_matches(moving_average(np.array([-1, 0, 0, -2, 1]), 4), (-0.75, -0.25))
    assert seq_matches(moving_average((0, 1, 2, 0, 2), 2), (0.5, 1.5, 1.0, 1.0))
    assert seq_matches(moving_average((0, 1, 2, 0, 2), 3), (1.0, 1.0, 1.333))
    assert seq_matches(moving_average((0, 1, 2, 0, 2), 4), (0.75, 1.25))

    assert seq_matches(moving_average((-0.4, -0.4, 1.2, -1.6, 1.2), 2), (-0.4, 0.4, -0.2, -0.2))
    assert seq_matches(moving_average((-0.4, -0.4, 1.2, -1.6, 1.2), 3), (0.133, -0.267, 0.266))
    assert seq_matches(moving_average((-0.4, -0.4, 1.2, -1.6, 1.2), 4), (-0.3, 0.1))
    assert seq_matches(moving_average((0.8, 2.0, 0.2, 1.0, 0.4), 2), (1.4, 1.1, 0.6, 0.7))
    assert seq_matches(moving_average((0.8, 2.0, 0.2, 1.0, 0.4), 3), (1.0, 1.066, 0.533))
    assert seq_matches(moving_average((0.8, 2.0, 0.2, 1.0, 0.4), 4), (1.0, 0.9))

    assert seq_matches(moving_average((-1.5, -4.0, -3.0, 3.5, 4.5, 0.0, -3.5, -0.5, 4.0, 0.5), 2), (-2.75, -3.5, 0.25, 4.0, 2.25, -1.75, -2.0, 1.75, 2.25))
    assert seq_matches(moving_average((-1.5, -4.0, -3.0, 3.5, 4.5, 0.0, -3.5, -0.5, 4.0, 0.5), 5), (-0.1, 0.2, 0.3, 0.8, 0.9, 0.1))
    assert seq_matches(moving_average((-1.5, -4.0, -3.0, 3.5, 4.5, 0.0, -3.5, -0.5, 4.0, 0.5), 8), (-0.563, 0.125, 0.687))
    assert seq_matches(moving_average((2.5, -1.0, 1.0, 3.5, -5.0, -0.5, 4.5, -5.0, 5.0, -3.5), 2), (0.75, 0.0, 2.25, -0.75, -2.75, 2.0, -0.25, 0.0, 0.75))
    assert seq_matches(moving_average((2.5, -1.0, 1.0, 3.5, -5.0, -0.5, 4.5, -5.0, 5.0, -3.5), 5), (0.2, -0.4, 0.7, -0.5, -0.2, 0.1))
    assert seq_matches(moving_average((2.5, -1.0, 1.0, 3.5, -5.0, -0.5, 4.5, -5.0, 5.0, -3.5), 8), (0.0, 0.312, 0.0))
    assert seq_matches(moving_average((2.5, -2.0, -2.5, 2.5, -0.5, -2.5, 0.5, -5.0, 4.5, -4.5, 3.0, 3.5, -4.0, 1.0, 5.0, 1.0, -1.0, 2.0, 4.0, -2.0), 2), (0.25, -2.25, 0.0, 1.0, -1.5, -1.0, -2.25, -0.25, 0.0, -0.75, 3.25, -0.25, -1.5, 3.0, 3.0, 0.0, 0.5, 3.0, 1.0))
    assert seq_matches(moving_average((2.5, -2.0, -2.5, 2.5, -0.5, -2.5, 0.5, -5.0, 4.5, -4.5, 3.0, 3.5, -4.0, 1.0, 5.0, 1.0, -1.0, 2.0, 4.0, -2.0), 5), (0.0, -1.0, -0.5, -1.0, -0.6, -1.4, -0.3, 0.3, 0.5, -0.2, 1.7, 1.3, 0.4, 1.6, 2.2, 0.8))
    assert seq_matches(moving_average((2.5, -2.0, -2.5, 2.5, -0.5, -2.5, 0.5, -5.0, 4.5, -4.5, 3.0, 3.5, -4.0, 1.0, 5.0, 1.0, -1.0, 2.0, 4.0, -2.0), 8), (-0.875, -0.625, -0.938, -0.25, -0.125, -0.563, -0.125, 0.437, 1.187, 0.5, 1.312, 1.437, 0.75))
    assert seq_matches(moving_average((2.5, -2.0, -2.5, 2.5, -0.5, -2.5, 0.5, -5.0, 4.5, -4.5, 3.0, 3.5, -4.0, 1.0, 5.0, 1.0, -1.0, 2.0, 4.0, -2.0), 13), (-0.347, -0.462, 0.076, 0.346, 0.076, 0.269, 0.769, 0.576))
    assert seq_matches(moving_average((-2.5, 3.5, 0.0, 3.5, 1.0, -2.5, -4.0, 1.5, -3.5, -3.0, 1.5, 0.0, 1.5, -3.5, -4.0, 3.5, 4.5, 2.5, 0.5, 0.5), 2), (0.5, 1.75, 1.75, 2.25, -0.75, -3.25, -1.25, -1.0, -3.25, -0.75, 0.75, 0.75, -1.0, -3.75, -0.25, 4.0, 3.5, 1.5, 0.5))
    assert seq_matches(moving_average((-2.5, 3.5, 0.0, 3.5, 1.0, -2.5, -4.0, 1.5, -3.5, -3.0, 1.5, 0.0, 1.5, -3.5, -4.0, 3.5, 4.5, 2.5, 0.5, 0.5), 5), (1.1, 1.1, -0.4, -0.1, -1.5, -2.3, -1.5, -0.7, -0.7, -0.7, -0.9, -0.5, 0.4, 0.6, 1.4, 2.3))
    assert seq_matches(moving_average((-2.5, 3.5, 0.0, 3.5, 1.0, -2.5, -4.0, 1.5, -3.5, -3.0, 1.5, 0.0, 1.5, -3.5, -4.0, 3.5, 4.5, 2.5, 0.5, 0.5), 8), (0.062, -0.063, -0.875, -0.688, -1.125, -1.063, -1.188, -1.188, -0.938, 0.062, 0.75, 0.625, 0.687))
    assert seq_matches(moving_average((-2.5, 3.5, 0.0, 3.5, 1.0, -2.5, -4.0, 1.5, -3.5, -3.0, 1.5, 0.0, 1.5, -3.5, -4.0, 3.5, 4.5, 2.5, 0.5, 0.5), 13), (-0.231, -0.308, -0.885, -0.616, -0.539, -0.424, -0.193, 0.153))

    print("all tests passed")
```

@tab 答案

```python
# Implement the function moving_average below.
# You can define other functions if it helps you decompose and solve
# the problem.
# Do not import any module that you do not use!

import numpy as np

def moving_average(seq, w_size):
    """
    Return the moving average of seq with window size w_size.
    Works for list/tuple/numpy array; returns a list of floats.
    """
    n = len(seq)
    if w_size < 1 or w_size > n:
        raise ValueError("invalid window size")
    # Convert to simple list of floats (np scalars ok)
    data = [float(seq[i]) for i in range(n)]
    # Sliding window in O(n)
    win_sum = sum(data[:w_size])
    out = [win_sum / w_size]
    for i in range(w_size, n):
        win_sum += data[i] - data[i - w_size]
        out.append(win_sum / w_size)
    return tuple(out)  # tuple/list均可，通过容差比较

def seq_matches(seq1, seq2):
    """
    Return True if two sequences of numbers match with a tolerance of 0.001
    """
    if len(seq1) != len(seq2):
        return False
    for i in range(len(seq1)):
        if abs(seq1[i] - seq2[i]) > 1e-3:
            return False
    return True

def test_moving_average():
    """
    This function runs a number of tests of the moving_average function.
    If it works ok, you will just see the output ("all tests passed") at
    the end when you call this function; if some test fails, there will
    be an error message.
    """
    
    assert seq_matches(moving_average((-1, 0, 0, -2, 1), 2), (-0.5, 0.0, -1.0, -0.5))
    assert seq_matches(moving_average([-1, 0, 0, -2, 1], 3), (-0.334, -0.667, -0.334))
    assert seq_matches(moving_average(np.array([-1, 0, 0, -2, 1]), 4), (-0.75, -0.25))
    assert seq_matches(moving_average((0, 1, 2, 0, 2), 2), (0.5, 1.5, 1.0, 1.0))
    assert seq_matches(moving_average((0, 1, 2, 0, 2), 3), (1.0, 1.0, 1.333))
    assert seq_matches(moving_average((0, 1, 2, 0, 2), 4), (0.75, 1.25))

    assert seq_matches(moving_average((-0.4, -0.4, 1.2, -1.6, 1.2), 2), (-0.4, 0.4, -0.2, -0.2))
    assert seq_matches(moving_average((-0.4, -0.4, 1.2, -1.6, 1.2), 3), (0.133, -0.267, 0.266))
    assert seq_matches(moving_average((-0.4, -0.4, 1.2, -1.6, 1.2), 4), (-0.3, 0.1))
    assert seq_matches(moving_average((0.8, 2.0, 0.2, 1.0, 0.4), 2), (1.4, 1.1, 0.6, 0.7))
    assert seq_matches(moving_average((0.8, 2.0, 0.2, 1.0, 0.4), 3), (1.0, 1.066, 0.533))
    assert seq_matches(moving_average((0.8, 2.0, 0.2, 1.0, 0.4), 4), (1.0, 0.9))

    assert seq_matches(moving_average((-1.5, -4.0, -3.0, 3.5, 4.5, 0.0, -3.5, -0.5, 4.0, 0.5), 2), (-2.75, -3.5, 0.25, 4.0, 2.25, -1.75, -2.0, 1.75, 2.25))
    assert seq_matches(moving_average((-1.5, -4.0, -3.0, 3.5, 4.5, 0.0, -3.5, -0.5, 4.0, 0.5), 5), (-0.1, 0.2, 0.3, 0.8, 0.9, 0.1))
    assert seq_matches(moving_average((-1.5, -4.0, -3.0, 3.5, 4.5, 0.0, -3.5, -0.5, 4.0, 0.5), 8), (-0.563, 0.125, 0.687))
    assert seq_matches(moving_average((2.5, -1.0, 1.0, 3.5, -5.0, -0.5, 4.5, -5.0, 5.0, -3.5), 2), (0.75, 0.0, 2.25, -0.75, -2.75, 2.0, -0.25, 0.0, 0.75))
    assert seq_matches(moving_average((2.5, -1.0, 1.0, 3.5, -5.0, -0.5, 4.5, -5.0, 5.0, -3.5), 5), (0.2, -0.4, 0.7, -0.5, -0.2, 0.1))
    assert seq_matches(moving_average((2.5, -1.0, 1.0, 3.5, -5.0, -0.5, 4.5, -5.0, 5.0, -3.5), 8), (0.0, 0.312, 0.0))
    assert seq_matches(moving_average((2.5, -2.0, -2.5, 2.5, -0.5, -2.5, 0.5, -5.0, 4.5, -4.5, 3.0, 3.5, -4.0, 1.0, 5.0, 1.0, -1.0, 2.0, 4.0, -2.0), 2), (0.25, -2.25, 0.0, 1.0, -1.5, -1.0, -2.25, -0.25, 0.0, -0.75, 3.25, -0.25, -1.5, 3.0, 3.0, 0.0, 0.5, 3.0, 1.0))
    assert seq_matches(moving_average((2.5, -2.0, -2.5, 2.5, -0.5, -2.5, 0.5, -5.0, 4.5, -4.5, 3.0, 3.5, -4.0, 1.0, 5.0, 1.0, -1.0, 2.0, 4.0, -2.0), 5), (0.0, -1.0, -0.5, -1.0, -0.6, -1.4, -0.3, 0.3, 0.5, -0.2, 1.7, 1.3, 0.4, 1.6, 2.2, 0.8))
    assert seq_matches(moving_average((2.5, -2.0, -2.5, 2.5, -0.5, -2.5, 0.5, -5.0, 4.5, -4.5, 3.0, 3.5, -4.0, 1.0, 5.0, 1.0, -1.0, 2.0, 4.0, -2.0), 8), (-0.875, -0.625, -0.938, -0.25, -0.125, -0.563, -0.125, 0.437, 1.187, 0.5, 1.312, 1.437, 0.75))
    assert seq_matches(moving_average((2.5, -2.0, -2.5, 2.5, -0.5, -2.5, 0.5, -5.0, 4.5, -4.5, 3.0, 3.5, -4.0, 1.0, 5.0, 1.0, -1.0, 2.0, 4.0, -2.0), 13), (-0.347, -0.462, 0.076, 0.346, 0.076, 0.269, 0.769, 0.576))
    assert seq_matches(moving_average((-2.5, 3.5, 0.0, 3.5, 1.0, -2.5, -4.0, 1.5, -3.5, -3.0, 1.5, 0.0, 1.5, -3.5, -4.0, 3.5, 4.5, 2.5, 0.5, 0.5), 2), (0.5, 1.75, 1.75, 2.25, -0.75, -3.25, -1.25, -1.0, -3.25, -0.75, 0.75, 0.75, -1.0, -3.75, -0.25, 4.0, 3.5, 1.5, 0.5))
    assert seq_matches(moving_average((-2.5, 3.5, 0.0, 3.5, 1.0, -2.5, -4.0, 1.5, -3.5, -3.0, 1.5, 0.0, 1.5, -3.5, -4.0, 3.5, 4.5, 2.5, 0.5, 0.5), 5), (1.1, 1.1, -0.4, -0.1, -1.5, -2.3, -1.5, -0.7, -0.7, -0.7, -0.9, -0.5, 0.4, 0.6, 1.4, 2.3))
    assert seq_matches(moving_average((-2.5, 3.5, 0.0, 3.5, 1.0, -2.5, -4.0, 1.5, -3.5, -3.0, 1.5, 0.0, 1.5, -3.5, -4.0, 3.5, 4.5, 2.5, 0.5, 0.5), 8), (0.062, -0.063, -0.875, -0.688, -1.125, -1.063, -1.188, -1.188, -0.938, 0.062, 0.75, 0.625, 0.687))
    assert seq_matches(moving_average((-2.5, 3.5, 0.0, 3.5, 1.0, -2.5, -4.0, 1.5, -3.5, -3.0, 1.5, 0.0, 1.5, -3.5, -4.0, 3.5, 4.5, 2.5, 0.5, 0.5), 13), (-0.231, -0.308, -0.885, -0.616, -0.539, -0.424, -0.193, 0.153))

    print("all tests passed")

```



:::

### 6.6 Problem 6: Unnest

We say that a list that contains lists is *nested*. The result of *unnesting* (also known as "flattening") a nested list is a list that contains the same non-list elements as the nested list, in the same order, but in a single list.

For example, `[1, [2], [[3], [[4], 5]]]` is a nested list. The unnesting of this list is `[1, 2, 3, 4, 5]`.

Write a function called `unnest` that takes as argument a list, which may be nested, and returns the unnesting of the argument list.

- You should assume that the argument is a list, and that all elements in the list are either lists or some non-sequence type.
- Your function *must not* modify the argument list. It must return a value of type `list`.

You should write your solution into the scaffold file `unnest.py`. Remember that:

- The file must contain only syntactically correct python code (and comments).
- Do not import any module that you do not use.
- You must define a function named `unnest` that has one parameter. You may also define additional functions if it helps you break down or solve the problem.

**Testing**

You can click the "Test" button to test your code. The scaffold code file also includes a testing function, `test_unnest`, which will run the same tests on your function and raise an error if any test fails. Passing the tests does not prove that your solution is correct. *Failing any test proves that your function is wrong*.

::: code-tabs

@tab Code1

```python
# Implement the function unnest below.
# You can define other functions if it helps you decompose and solve
# the problem.
# Do not import any module that you do not use!

# Remember that if this were an exam problem, in order to be marked
# this file must meet certain requirements:
# - it must contain ONLY syntactically valid python code (any syntax
#   or indentation error that stops the file from running would result
#   in a mark of zero);
# - you MAY NOT use global variables; the function must use only the
#   input provided to it in its arguments.

def unnest(a_list):
    pass


def test_unnest():
    """
    This function runs a number of tests of the unnest function.
    If it works ok, you will just see the output ("all tests passed") at
    the end when you call this function; if some test fails, there will
    be an error message.
    """
    
    assert unnest([2, 1, 3, [0, 4]]) == [2, 1, 3, 0, 4]
    assert unnest([1, [3], [2, 4], 0]) == [1, 3, 2, 4, 0]
    assert unnest([[[3, 0], 1], 4, 2]) == [3, 0, 1, 4, 2]
    assert unnest([1, [2], [[3], [[4], 5]]]) == [1, 2, 3, 4, 5]
    assert unnest([0, [[2, [1], 4]], [[3]]]) == [0, 2, 1, 4, 3]
    assert unnest([[[0], 2], 3, 1, 4]) == [0, 2, 3, 1, 4]
    assert unnest([[9, 5, 0, 4], [8, 7, 1], 6, 3, 2]) == [9, 5, 0, 4, 8, 7, 1, 6, 3, 2]
    assert unnest([6, 9, [2, 8, 7, 4], [[0, [5]], 1, 3]]) == [6, 9, 2, 8, 7, 4, 0, 5, 1, 3]

    assert unnest([[0], [[[2, 4, 3]], [1]]]) == [0, 2, 4, 3, 1]
    assert unnest([[4, [[1]]], 0, 2, 3]) == [4, 1, 0, 2, 3]
    assert unnest([[[1, 3, 4, [[[[2]]]]]], 0]) == [1, 3, 4, 2, 0]
    assert unnest([[4], 1, [[3, [0], [[2]]]]]) == [4, 1, 3, 0, 2]
    assert unnest([[[0]], 4, [[[3]]], [1, 2]]) == [0, 4, 3, 1, 2]
    assert unnest([7, [[5], [2], 4], 6, [[[0, [8], 1]], 9], [[3]]]) == [7, 5, 2, 4, 6, 0, 8, 1, 9, 3]
    assert unnest([[2, 6, [[[5]]], [7], 4, 9, 1, 0, 8], [[3]]]) == [2, 6, 5, 7, 4, 9, 1, 0, 8, 3]
    assert unnest([8, 6, 2, 1, 5, 7, 3, 9, [[[[[[[4]]]]]]], [0]]) == [8, 6, 2, 1, 5, 7, 3, 9, 4, 0]
    assert unnest([[4, [[[1]], 5, 2, 8, [[[3]], 0, 6]], 7, 9]]) == [4, 1, 5, 2, 8, 3, 0, 6, 7, 9]
    assert unnest([[[[1, 9], [3]], [2, [7, 5, 8], 6, 0]], 4]) == [1, 9, 3, 2, 7, 5, 8, 6, 0, 4]

    assert unnest([1, [], [2], [[3], [], [[4], [], 5]]]) == [1, 2, 3, 4, 5]
    assert unnest([1, [[3], []], [], [[], 2, 4], 0]) == [1, 3, 2, 4, 0]
    assert unnest([0, [[], [2, [1], 4]], [[], [3]]]) == [0, 2, 1, 4, 3]
    assert unnest([[], [[], [[], 3, 0], 1], [], 4, 2]) == [3, 0, 1, 4, 2]
    assert unnest([[[0], [], 2], [], [], 3, 1, [], 4]) == [0, 2, 3, 1, 4]
    assert unnest([2, [[]], 1, [3], [[0, 4]]]) == [2, 1, 3, 0, 4]
    assert unnest([[[]]]) == []

    print("all tests passed")
```

@tab 答案

```python
# Implement the function unnest below.
# You can define other functions if it helps you decompose and solve
# the problem.
# Do not import any module that you do not use!

def unnest(a_list):
    """
    Flatten a (possibly nested) list into a simple list (non-destructive).
    Assumes elements are either lists or non-sequence scalars.
    """
    out = []
    stack = [iter(a_list)]
    while stack:
        try:
            x = next(stack[-1])
        except StopIteration:
            stack.pop()
            continue
        if isinstance(x, list):
            stack.append(iter(x))
        else:
            out.append(x)
    return out


def test_unnest():
    """
    This function runs a number of tests of the unnest function.
    If it works ok, you will just see the output ("all tests passed") at
    the end when you call this function; if some test fails, there will
    be an error message.
    """
    
    assert unnest([2, 1, 3, [0, 4]]) == [2, 1, 3, 0, 4]
    assert unnest([1, [3], [2, 4], 0]) == [1, 3, 2, 4, 0]
    assert unnest([[[3, 0], 1], 4, 2]) == [3, 0, 1, 4, 2]
    assert unnest([1, [2], [[3], [[4], 5]]]) == [1, 2, 3, 4, 5]
    assert unnest([0, [[2, [1], 4]], [[3]]]) == [0, 2, 1, 4, 3]
    assert unnest([[[0], 2], 3, 1, 4]) == [0, 2, 3, 1, 4]
    assert unnest([[9, 5, 0, 4], [8, 7, 1], 6, 3, 2]) == [9, 5, 0, 4, 8, 7, 1, 6, 3, 2]
    assert unnest([6, 9, [2, 8, 7, 4], [[0, [5]], 1, 3]]) == [6, 9, 2, 8, 7, 4, 0, 5, 1, 3]

    assert unnest([[0], [[[2, 4, 3]], [1]]]) == [0, 2, 4, 3, 1]
    assert unnest([[4, [[1]]], 0, 2, 3]) == [4, 1, 0, 2, 3]
    assert unnest([[[1, 3, 4, [[[[2]]]]]], 0]) == [1, 3, 4, 2, 0]
    assert unnest([[4], 1, [[3, [0], [[2]]]]]) == [4, 1, 3, 0, 2]
    assert unnest([[[0]], 4, [[[3]]], [1, 2]]) == [0, 4, 3, 1, 2]
    assert unnest([7, [[5], [2], 4], 6, [[[0, [8], 1]], 9], [[3]]]) == [7, 5, 2, 4, 6, 0, 8, 1, 9, 3]
    assert unnest([[2, 6, [[[5]]], [7], 4, 9, 1, 0, 8], [[3]]]) == [2, 6, 5, 7, 4, 9, 1, 0, 8, 3]
    assert unnest([8, 6, 2, 1, 5, 7, 3, 9, [[[[[[[4]]]]]]], [0]]) == [8, 6, 2, 1, 5, 7, 3, 9, 4, 0]
    assert unnest([[4, [[[1]], 5, 2, 8, [[[3]], 0, 6]], 7, 9]]) == [4, 1, 5, 2, 8, 3, 0, 6, 7, 9]
    assert unnest([[[[1, 9], [3]], [2, [7, 5, 8], 6, 0]], 4]) == [1, 9, 3, 2, 7, 5, 8, 6, 0, 4]

    assert unnest([1, [], [2], [[3], [], [[4], [], 5]]]) == [1, 2, 3, 4, 5]
    assert unnest([1, [[3], []], [], [[], 2, 4], 0]) == [1, 3, 2, 4, 0]
    assert unnest([0, [[], [2, [1], 4]], [[], [3]]]) == [0, 2, 1, 4, 3]
    assert unnest([[], [[], [[], 3, 0], 1], [], 4, 2]) == [3, 0, 1, 4, 2]
    assert unnest([[[0], [], 2], [], [], 3, 1, [], 4]) == [0, 2, 3, 1, 4]
    assert unnest([2, [[]], 1, [3], [[0, 4]]]) == [2, 1, 3, 0, 4]
    assert unnest([[[]]]) == []

    print("all tests passed")

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