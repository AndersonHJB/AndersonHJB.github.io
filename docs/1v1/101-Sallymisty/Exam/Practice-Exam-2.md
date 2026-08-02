---
title: Practice Exam 2
icon: blog
date: 2025-10-28 14:59:34
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

## 1. Instructions

::: warning **Read all instructions carefully!**

:::

The exam consists of two types of questions:

- Questions 1-4: require you to write an explanation (free text answer) and
- Questions 5-7: require you to write a piece of Python code.

The questions are not equally weighted. The maximum marks for each question is specified in the question specification. Questions are not ordered by difficulty: you should read through the questions first, then decide the order in which you want to attempt them.

The total sum of marks is 40. It is a hurdle: you need to obtain **at least 10 of 40** to be eligible to pass this course.

### 1.1 Answers for questions 1-4

For Questions 1 - 4, you should write your answers into the corresponding text box. There is no limit on the length of answers, but ***the best answers are precise***. Answers that contain irrelevant or incorrect statements may receive a lower mark, even if they also contain a correct answer or part thereof.

### 1.2 Answers for questions 5-7

For the programming problems (Questions 5 - 7), you must write your solutions into the scaffold files provided and press the "Submit" button in Ed. You can re-submit your solution as many times as you wish before the deadline. However, we will only mark the last version submitted.

Solutions to programming problems will be **marked on the basis of functionality only**. To be fully functional means solving the problem that is described in the question. You can directly test the code by clicking "Test" button in Ed. Each scaffold file also includes a testing function in case you want to use an IDE and manually run the tests. These tests are designed to help you understand the problem and debug your solution. Passing all these tests does not prove that your solution is correct. **Failing any test proves that your solution is wrong**. A partially functional solution may receive some marks, but marks are not proportional to the number of tests passed. A submission that does not run (for example, due to syntax errors), that violates the format instructions, or that fails every test case will receive zero marks.

## 2. Question 1: Code quality (5/40)

Given three strings, the **correct** function below returns a new string resulting from replacing in the first string all occurrences of the second string by the third string. For example, `replace_substring("#COMP1730#COMP1730#", "COMP1730", "COMP6730")` returns the string `"#COMP6730#COMP6730#"`.

```python
def replace_substring(XxA, JKL, AbC):
    zzz = ""
    i = 0 # Initialize i to zero
    while i < len(XxA):
        if XxA[i:i+len(JKL)] == JKL:
            zzz += AbC
            i += len(JKL)
        elif XxA[i:i+len(JKL)] != JKL:
            zzz += XxA[i]
            i += 1

    # Alphabetically order zzz in ascending order
    m="a"
    for e in zzz:
        if (ord(e)>ord(m)):
            m=e        
    
    return zzz # Return zzz
```

Describe all **distinct** ways in which the quality of the code above can be improved without affecting to its functional correctness.

To gain marks, your suggested improvements must be specific. For example, if you think that naming should be improved, you must give at least one specific example of which names should be changed and to what; just answering "better names" is not enough. Do not simply write your suggested improvements as comments inside the function. Writing a new function or rewriting the function is not an acceptable answer, regardless of whether it is correct or not.

::: tabs

@tab 变量命名更具语义化

- `XxA` → `text`

- `JKL` → `old`

- `AbC` → `new`

- `zzz` → `result`

这样能让代码更易读，不再混乱。

@tab 删除无用变量和语句

变量 `m` 和循环

```python
m="a"
for e in zzz:
    if (ord(e)>ord(m)):
        m=e
```

完全没有被使用，对结果无影响，应删除。

@tab 去掉多余的判断分支

```python
elif XxA[i:i+len(JKL)] != JKL:
```

可以简化为 `else:`，因为条件互斥。

@tab 增加文档字符串和注释

增加函数说明，解释参数和返回值，提升可维护性。

@tab 命名和结构更清晰

如下伪改进（不影响功能，仅示例命名结构）：

```python
def replace_substring(text, old, new):
    result = ""
    i = 0
    while i < len(text):
        if text[i:i+len(old)] == old:
            result += new
            i += len(old)
        else:
            result += text[i]
            i += 1
    return result
```



:::

## 3. Question 2: Testing (5/40)

We want to write tests for a function with signature and docstring defined as follows:

```python
def count_runs(l):
    """
    Given a list l, assumed to have elements of the same type, 
    returns how many runs of consecutive equal elements there are
    in the list. A run must have at least 2 elements.
    """
```

For example, `count_runs([10,10,10,5,5,5,5,7,33,33])` returns `3`, because there are 3 runs of `10`'s, `5`'s and `33`'s. Element `7` does not form a run because it's a single element.

Write **at most** **4** test cases for this function (every test case after the first four will be ignored). For each test case, you must write down the input (argument to the function) and the expected return value. Each test case should specify valid arguments for the function (e.g., an input list with elements of different types is not a valid argument). Your test cases should cover relevant corner cases.

::: details 四个测试覆盖：空列表、无重复、单一重复、多个不同重复。

| Test Case | Input                         | Expected Output | Description            |
| --------- | ----------------------------- | --------------- | ---------------------- |
| 1         | `[]`                          | `0`             | 空列表，没有 run       |
| 2         | `[1, 2, 3]`                   | `0`             | 没有连续重复元素       |
| 3         | `[5, 5, 5, 5]`                | `1`             | 全部相同，只有一个 run |
| 4         | `[10,10,5,5,5,7,33,33,33,33]` | `3`             | 三个 run：10、5、33    |

代码实现：

```python
def count_runs(l):
    """
    Given a list l, assumed to have elements of the same type, 
    returns how many runs of consecutive equal elements there are
    in the list. A run must have at least 2 elements.
    """
    # 如果列表是空的，肯定没有“连续段(run)”，直接返回 0
    if not l:
        return 0

    # 用来统计最终有多少个“连续相同元素的段”
    run_count = 0

    # 当前正在统计的这一段的长度。刚开始看到第一个元素，所以长度先记为 1
    current_run_length = 1

    # 从第二个元素开始遍历（索引 1），因为我们要和前一个元素做比较
    for i in range(1, len(l)):
        # 如果当前元素和前一个元素相同，说明还在同一段里，就把这一段长度 +1
        if l[i] == l[i - 1]:
            current_run_length += 1
        else:
            # 否则说明当前这一段结束了
            # 如果刚结束的这一段长度 ≥ 2，才算一个“run”
            if current_run_length >= 2:
                run_count += 1
            # 不管刚才那段算不算 run，新的元素要重新开始一段，长度重置为 1
            current_run_length = 1

    # for 循环结束后，还要再检查一次“最后一段”
    # 因为最后一段如果是相同元素结尾的，在循环里不会触发上面的 else 分支
    if current_run_length >= 2:
        run_count += 1

    # 返回统计到的 run 个数
    return run_count
```

下面把刚才的 4 个测试用例也写出来，顺便加点说明（这部分你可以按你作业格式去写，不一定写成代码）：

```python
# 1) 普通示例：题目里的例子
# 连续段：10...、5...、33...
print(count_runs([10, 10, 10, 5, 5, 5, 5, 7, 33, 33]))  # 期望 3

# 2) 没有任何连续元素
print(count_runs([1, 2, 3, 4, 5]))  # 期望 0

# 3) 多个 run 混合
print(count_runs([1, 1, 2, 2, 2, 3, 3, 3]))  # 期望 3（1 的一段、2 的一段、3 的一段）

# 4) 全部一样
print(count_runs([5, 5, 5, 5]))  # 期望 1
```



:::



## 4. Question 3: Debugging (5/40)

We say that a list that contains lists is **nested**. The function `unnest_list_into_set(nested_list)` returns a set resulting from **unnesting** the nested list `nested_list`, which is assumed to be composed of elements which are either lists or integer numbers. The result of **unnesting** a nested list is a set with the same non-list elements as the nested list (of course, without repeated elements).

For example, `unnest_list_into_set([1,2,3,2,1])` returns the set `{1,2,3}`, while `unnest_list_into_set([1,2,[3,2,1]])` also returns `{1,2,3}.` 

You are given the following definition statement:

```python
def unnest_list_into_set(nested_list):
   ret = set()
   for e in nested_list:
      if type(e)==list:
         ret=ret.union(e)
      else:
         ret.add(e)
   return ret  
```

However, the function above is not correct:

**(a)** Provide an example of function call with arguments of correct type that makes this function generate a run-time error.

**(b)** Explain the cause of the error that you have found, i.e., what is wrong with this function. Your answer must explain what is wrong with the function as given. Writing a new function or rewriting/fixing the function is not an acceptable answer, regardless of whether it is correct or not.

## 5. Question 4: Time complexity (5/40)

::: center

**NOTE: There are two questions 4.1 and 4.2 below.**

:::

### 5.1 Question 4.1: Time complexity (3/40)

Given the following function definition statement:

```python
def g(A):
   res=0.0
   for i in range(0,A.shape[0]):
      for j in range(0,A.shape[1]):
          if i==j:
            res=res+A[i,j]
   return res
```

where `A` is assumed to be an square (i.e., same number of rows and columns) 2D NumPy array of floating point numbers, answer the following questions:

**(a)** Write down the time complexity in big-O notation as a function of n*n* being the number of rows and columns in the 2D Numpy array `A`. **Explain the reason why.** Correct answers without any explanation will receive zero marks.

::: details (a) Time Complexity

- 外层循环运行 `n` 次；
- 内层循环也运行 `n` 次；
- 总共执行 `n * n = n²` 次比较；
- 每次比较常数时间。

**复杂度：O(n²)**：因为访问矩阵中所有元素一次以检查是否 `i == j`。

:::

**(b)** Is there a way to re-write `g` such that it has a reduced order of complexity? If yes, explain with words what would you do to achieve such an objective.

::: details (b) Can we reduce it?

是的。

由于仅当 `i == j` 时才计算 `A[i, j]`，我们只需遍历主对角线。所以可以直接：

```python
for i in range(n):
    res += A[i, i]
```

**复杂度降为 O(n)**。

:::

### 5.2 Question 4.2: Time complexity (2/40)

Given the following function definition statement:

```python
def f(A,i):
    res=0.0
    if (i>A.shape[0]):
        return res
    for j in range(i,A.shape[1]):
        res=res+A[i,j]
    for j in range(i+1,A.shape[0]):
        res=res+A[j,i]
    res=res+f(A,i+1)
    return res
```

where `A` is  assumed to be an square (i.e., same number of rows and columns) 2D NumPy array of floating point numbers  and `i` a non-negative integer number, write down the time complexity in big-O notation of a call `f(A,0)` as a function of n*n* being the number of rows and columns in the 2D Numpy array `A`. **Explain the reason why.** Correct answers without any explanation will receive zero marks.

## 6. Question 5: Longest common prefix (7/40)

Given a string, a prefix of that string is defined as the substring starting at position 0. Write a function `longest_common_prefix` that takes a list of strings as input, and returns the longest string that is the prefix of all strings in the list. If there exists no common prefix, it should return an empty string.

For example, `longest_common_prefix(["hello", "hell", "helium"])` must return `"hel`". Whereas `"h"` and  `"he"` are also common prefix but not the longest one.

A scaffold file `longest_common_prefix.py` is provided. You must write your solution into this file.

Requirements:

- The function that you write must be named `longest_common_prefix` and it must have a single parameter.
- You can assume the input parameter to be a list of strings.
- The function must return a string.

Your solution will be marked on functionality only (no code quality considered). To be fully functional means that it returns the correct value for all valid arguments. You can test it by either clicking the "Test" button in Ed or running `test_longest_common_prefix` provided in the scaffold file. Passing the tests does not prove that your solution is correct. **Failing any test proves that your function is wrong.** Code that does not run (for example due to syntax errors) or that fails every test case will receive **zero marks**.  

**longest_common_prefix.py**

```python
def longest_common_prefix(strings):
    pass


def test_longest_common_prefix():
    assert longest_common_prefix(["flower", "flow", "flight"]) == "fl"
    assert longest_common_prefix(["hello", "hell", "helium"]) == "hel"
```

![](https://blog.images.bornforthis.cn/docs-images/sha256/0e/0ec8720bccc11e057cdc6f8dfda4968daf97e1da4cbc42762a1c4b730715771a.png)

::: code-tabs

@tab 答案

```python
def longest_common_prefix(strings):
    if not strings:
        return ""
    prefix = strings[0]
    for s in strings[1:]:
        while not s.startswith(prefix):
            prefix = prefix[:-1]
            if prefix == "":
                return ""
    return prefix



def test_longest_common_prefix():
    assert longest_common_prefix(["flower", "flow", "flight"]) == "fl"
    assert longest_common_prefix(["hello", "hell", "helium"]) == "hel"
```

:::

## 7. Question 6: Extract matrix boundary clock-wise (7/40)

Write a function, `boundary_clockwise` that takes as input a matrix $A$ represented by a 2D NumPy array, and returns a 1D NumPy array with the elements in the boundary of **A** in clock-wise ordering starting from row index 0 and column index 0 (i.e., the element at the upper left corner). The elements in the boundary are those which are located in the first row, last row, first column, or last column. The matrix **A** might be rectangular, i.e., the number of rows and columns might be different.

For example, given the following rectangular matrix with 3 rows and 4 columns:
$$
\begin{bmatrix}
1 & 2 & 3 & 4 \\
5 & 6 & 7 & 8 \\
9 & 10 & 11 & 12
\end{bmatrix}
$$
`boundary_clockwise` must return a 1D NumPy array with the elements of its boundary ordered as $1,2,3,4,8,12,11,10,9,5$.

A scaffold file `boundary_clockwise.py` is provided. You must write your solution into this file.

Requirements:

- The function that you write must be named `boundary_clockwise` and it must have a single parameter.
- You can assume that the parameter is a 2D NumPy array.
- The function must return a 1D NumPy array with element type equivalent to the one of the input matrix.

Your solution will be marked on functionality only (no code quality considered). To be fully functional means that it returns the correct value for all valid arguments. You can test it by either clicking the "Test" button in Ed or running `test_boundary_clockwise` provided in the scaffold file. Passing the tests does not prove that your solution is correct. **Failing any test proves that your function is wrong.** Code that does not run (for example due to syntax errors) or that fails every test case will receive **zero marks**.

**boundary_clockwise.py**

```python
import numpy as np

def boundary_clockwise(matrix):
    pass

def test_boundary_clockwise():
    in_1 = np.arange(1, 13).reshape((3, 4))
    out_1 = np.array([1, 2, 3, 4, 8, 12, 11, 10, 9, 5])
    in_2 = np.arange(1, 13).reshape((4, 3))
    out_2 = np.array([1, 2, 3, 6, 9, 12, 11, 10, 7, 4])
    in_3 = np.arange(1, 17).reshape((4, 4))
    out_3 = np.array([1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5])
    in_4 = np.arange(1, 5).reshape((2, 2))
    out_4 = np.array([1, 2, 4, 3])
    assert np.all(boundary_clockwise(in_1) == out_1)
    assert np.all(boundary_clockwise(in_2) == out_2)
    assert np.all(boundary_clockwise(in_3) == out_3)
    assert np.all(boundary_clockwise(in_4) == out_4)    
```

![](https://blog.images.bornforthis.cn/docs-images/sha256/df/df3a556bb5640ec38f6caa297f4573ede5f0e520b2f0417ab08e23c3d4f96f3d.png)

::: code-tabs

@tab 答案

```python
import numpy as np

def boundary_clockwise(matrix):
    rows, cols = matrix.shape
    empty = np.array([], dtype=matrix.dtype)

    # 空矩阵或任一维为 0
    if rows == 0 or cols == 0:
        return empty

    # 顶边：整行
    top = matrix[0, :]

    # 右边列：从第 2 行到最后一行，始终取最后一列。
    # 注意：即使 cols == 1，这也是“同一列向下”的情形，需要包含！
    right = matrix[1:rows, -1] if rows > 1 else empty

    # 底边（反向）：仅在行数>1 且 列数>1 时取，从倒数第二列到第 0 列
    bottom = matrix[-1, -2::-1] if (rows > 1 and cols > 1) else empty

    # 左边列（反向）：仅在列数>1 且 行数>2 时取，从倒数第二行到第 1 行
    left = matrix[-2:0:-1, 0] if (cols > 1 and rows > 2) else empty

    return np.concatenate((top, right, bottom, left))



def test_boundary_clockwise():
    in_1 = np.arange(1, 13).reshape((3, 4))
    out_1 = np.array([1, 2, 3, 4, 8, 12, 11, 10, 9, 5])
    in_2 = np.arange(1, 13).reshape((4, 3))
    out_2 = np.array([1, 2, 3, 6, 9, 12, 11, 10, 7, 4])
    in_3 = np.arange(1, 17).reshape((4, 4))
    out_3 = np.array([1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5])
    in_4 = np.arange(1, 5).reshape((2, 2))
    out_4 = np.array([1, 2, 4, 3])
    assert np.all(boundary_clockwise(in_1) == out_1)
    assert np.all(boundary_clockwise(in_2) == out_2)
    assert np.all(boundary_clockwise(in_3) == out_3)
    assert np.all(boundary_clockwise(in_4) == out_4)    
```

@tab 答案 2

```python
import numpy as np

import numpy as np

def boundary_clockwise(matrix):
    """
    以顺时针顺序提取矩阵（2D numpy 数组）边界元素，起点为左上角 (0, 0)。
    返回 1D numpy 数组，元素 dtype 与输入矩阵一致。

    规则（避免重复角点）：
    1) 顶边：      (0, 0) -> (0, cols-1)
    2) 右边：      (1, cols-1) -> (rows-1, cols-1)
    3) 底边逆向：  (rows-1, cols-2) -> (rows-1, 0)
    4) 左边逆向：  (rows-2, 0) -> (1, 0)

    复杂度：O(rows + cols)
    """
    rows, cols = matrix.shape

    # 情况 A：任一维为 0（空矩阵）→ 返回空 1D 数组，dtype 与输入保持一致
    if rows == 0 or cols == 0:
        return np.array([], dtype=matrix.dtype)

    # 情况 B：只有一行 → 边界就是这一整行
    if rows == 1:
        # 已是 1D 视图，拷贝以避免外部修改影响
        return matrix[0, :].copy()

    # 情况 C：只有一列 → 边界就是这一整列（自上而下）
    if cols == 1:
        return matrix[:, 0].copy()

    # 情况 D：一般矩阵（rows >= 2 且 cols >= 2）
    out = []

    # 1) 顶边：列从左到右（包含左上角和右上角）
    for j in range(cols):
        out.append(matrix[0, j])

    # 2) 右边：行从 1 到 rows-1（从右上角的下一行开始，直到右下角）
    for i in range(1, rows):
        out.append(matrix[i, cols - 1])

    # 3) 底边（逆向）：列从 cols-2 到 0（避开右下角，直到左下角）
    for j in range(cols - 2, -1, -1):
        out.append(matrix[rows - 1, j])

    # 4) 左边（逆向）：行从 rows-2 到 1（避开左下角和左上角）
    for i in range(rows - 2, 0, -1):
        out.append(matrix[i, 0])

    # 转回 numpy 1D，保持 dtype 一致
    return np.array(out, dtype=matrix.dtype)




def test_boundary_clockwise():
    in_1 = np.arange(1, 13).reshape((3, 4))
    out_1 = np.array([1, 2, 3, 4, 8, 12, 11, 10, 9, 5])
    in_2 = np.arange(1, 13).reshape((4, 3))
    out_2 = np.array([1, 2, 3, 6, 9, 12, 11, 10, 7, 4])
    in_3 = np.arange(1, 17).reshape((4, 4))
    out_3 = np.array([1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5])
    in_4 = np.arange(1, 5).reshape((2, 2))
    out_4 = np.array([1, 2, 4, 3])
    assert np.all(boundary_clockwise(in_1) == out_1)
    assert np.all(boundary_clockwise(in_2) == out_2)
    assert np.all(boundary_clockwise(in_3) == out_3)
    assert np.all(boundary_clockwise(in_4) == out_4)    
```



:::



## 8. Question 7: Unnest a nested dictionary (6/40)

We define a **nested dictionary** in a recursive way as follows. A **nested dictionary** is a dictionary (type `dict`) where its keys are strings and its values are either of any non-dictionary type or a **nested dictionary**. For example, `{"h": {"a": 3, "b": {"c": [1,2], "d": [3,4]}}, "l": 4}` is a nested dictionary. 

The aim of this question is to flatten a nested dictionary `D` so that all values become non-dictionary. For every `(key, value)` pair of `D`, where `value` is not a dictionary, we keep it untouched. Otherwise, if `value` is a nested dictionary (you may assume `value` is not empty) `{key1: value1, ..., keyn: valuen}`, then we replace the `key: value` of `D` by `n` pairs `key.key1:value1`,..., `key.keyn:valuen`, where `key.key1` means that we concatenate the string `key` with a dot `"."` and with the string `key1`. And so on. We will do this until all values of `D` are non-dictionary. For example, the above nested dictionary can be flattened to `{"h.a": 3, "h.b.c": [1,2], "h.b.d": [3,4], "l": 4}`.

Write a function `flatten_dictionary` that takes as input a nested dictionary, and returns a **new** flattened dictionary of the input  dictionary. That means, you are **not allowed** to modify the content of the input dictionary, but should return a new output dictionary.

For example, `flatten({"h": {"a": 3, "b": {"c": [1,2], "d": [3,4]}}, "l": 4})` must return the flattened dictionary `{"h.a": 3, "h.b.c": [1,2], "h.b.d": [3,4], "l": 4}`.

A scaffold file `flatten_dictionary.py` is provided. You must write your solution into this file.

Requirements:

- The function that you write must be named `flatten_dictionary` and it must have a single parameter.
- This single parameter must be of type dictionary, and all its keys are of type string.
- You can assume that keys in the input dictionary do not contain the `"."` character.

Your solution will be marked on functionality only (no code quality considered). To be fully functional means that it returns the correct value for all valid arguments. You can test it by either clicking the "Test" button in Ed or running `test_flatten_dictionary` provided in the scaffold file. Passing the tests does not prove that your solution is correct. **Failing any test proves that your function is wrong.** Code that does not run (for example due to syntax errors) or that fails every test case will receive **zero marks**.

**flatten_dictionary.py**

```python
def flatten_dictionary(adict):
    pass

def test_flatten_dictionary():
    in_d1 = {"h": {"a": 3, "b": {"c": [1, 2], "d": [3, 4]}}, "l": 4}
    out_d1 = {"h.a": 3, "h.b.c": [1, 2], "h.b.d": [3, 4], "l": 4}
    assert flatten_dictionary(in_d1) == out_d1

    in_d2 = {k: v for k, v in zip("abcde", range(5))}
    assert flatten_dictionary(in_d2) == in_d2
    
    assert flatten_dictionary({}) == {}
```

![](https://blog.images.bornforthis.cn/docs-images/sha256/f8/f8143c9d7b6c24a55a55cd0e13d216b819098c308ddac2d14107224c31981247.png)

![](https://blog.images.bornforthis.cn/docs-images/sha256/ae/ae37c455fd8873f30213297732d3f61c675b9c7f439444411784c1652ad67671.png)

::: code-tabs

@tab 答案

```python
def flatten_dictionary(adict):
    result = {}

    def helper(d, prefix=""):
        for k, v in d.items():
            new_key = f"{prefix}.{k}" if prefix else k
            if isinstance(v, dict):
                helper(v, new_key)
            else:
                result[new_key] = v

    helper(adict)
    return result


def test_flatten_dictionary():
    in_d1 = {"h": {"a": 3, "b": {"c": [1, 2], "d": [3, 4]}}, "l": 4}
    out_d1 = {"h.a": 3, "h.b.c": [1, 2], "h.b.d": [3, 4], "l": 4}
    assert flatten_dictionary(in_d1) == out_d1

    in_d2 = {k: v for k, v in zip("abcde", range(5))}
    assert flatten_dictionary(in_d2) == in_d2
    
    assert flatten_dictionary({}) == {}
```

@tab 答案 2

```python
def flatten_dictionary(adict):
    """
    扁平化嵌套字典。将字典中所有的键通过点（"."）连接成新的键。
    如果字典中的值是一个字典，则递归展开。
    """
    result = {}

    # 使用栈结构来模拟递归展平过程
    stack = [(adict, '')]  # 堆栈中存储字典和当前的 prefix
    while stack:
        current_dict, prefix = stack.pop()

        # 遍历字典中的每一项
        for key, value in current_dict.items():
            new_key = f"{prefix}.{key}" if prefix else key
            if isinstance(value, dict):
                # 如果值是字典，压入栈中以便进一步展开
                stack.append((value, new_key))
            else:
                # 否则直接加入结果
                result[new_key] = value

    return result


def test_flatten_dictionary():
    in_d1 = {"h": {"a": 3, "b": {"c": [1, 2], "d": [3, 4]}}, "l": 4}
    out_d1 = {"h.a": 3, "h.b.c": [1, 2], "h.b.d": [3, 4], "l": 4}
    assert flatten_dictionary(in_d1) == out_d1

    in_d2 = {k: v for k, v in zip("abcde", range(5))}
    assert flatten_dictionary(in_d2) == in_d2
    
    assert flatten_dictionary({}) == {}
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

[.](https://chatgpt.com/c/6904ab24-d154-8328-8181-951b4294e4b7?ref=mini)