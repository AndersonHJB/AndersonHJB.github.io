---
title: Practice Exam 1
icon: blog
date: 2025-10-28 14:42:37
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

::: info Before attempting this practice exam, please complete lab 10 with exam-type questions first!

:::

::: warning Read all instructions carefully!

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

## 2. Question 1: Improving code quality (5/40)

Given two strings, the **correct** function below returns `True` if the second string can be formed using characters in the first string, and `False` otherwise. For example, `can_make_str2_from_str1("#COOMP1730#","COMP1730")` returns `True`,  as the string `"COMP1730"` can be formed using the characters `C`, `O`, `M`, `P`, `1`, `7`, `3`, and `0` in the first string. However, `can_make_str2_from_str1("#COOMP1730#","COOOMP1730")` returns `False`, as we need three `O` characters to form `"COOOMP1730"` and there are only two `O` characters available in `#COOMP1730#`.

```python
def can_make_str2_from_str1(zzz, cccABc):
    xxx = {}
    for i in range(len(zzz)):
       xxx[zzz[i]]=0 # Assign the key zzz[i] the value 0
     
    for i in range(len(zzz)):
        xxx[zzz[i]] += 1

    # Calculate the minimum among all values in the dictionary
    m=-1
    for (key,val) in xxx.items():
        if val>m:
           m=val
     
    for i in range(len(cccABc)):
        if (xxx.get(cccABc[i]) == None): 
            return False 
        if (xxx.get(cccABc[i]) == None or xxx[cccABc[i]] == 0):
            return False
        xxx[cccABc[i]] -= 1
    return True
```

Describe all **distinct** ways in which the quality of the code above can be improved without affecting to its functional correctness.

To gain marks, your suggested improvements must be specific. For example, if you think that naming should be improved, you must give at least one specific example of which names should be changed and to what; just answering "better names" is not enough. Do not simply write your suggested improvements as comments inside the function. Writing a new function or rewriting the function is not an acceptable answer, regardless of whether it is correct or not.

**不改变功能正确性的前提下，可以做的改进（每一点都是“不同类型”的改进，并给出具体示例）：**

::: tabs

@tab 1. 有意义的变量名 🌟（送分题）

- `zzz` → `source_str`（表示可用字符的来源字符串）

- `cccABc` → `target_str`（表示要拼出的目标字符串）

- `xxx` → `char_counts`（表示字符频数字典）

    现在的名字完全看不出含义，严重影响可读性和维护性。

@tab 2. 去掉重复循环，合并计数字典的构建 🌟🌟🌟

现有代码：

```python
for i in range(len(zzz)):
    xxx[zzz[i]] = 0
for i in range(len(zzz)):
    xxx[zzz[i]] += 1
```

第一个循环只是把所有键对应的值初始化为 0，第二个循环再计数。

质量更高的写法是只用一次循环直接计数，例如：

```python
for ch in source_str:
    char_counts[ch] = char_counts.get(ch, 0) + 1
```

这样减少了不必要的遍历，也减少了代码行数，更高效、更清晰。

@tab 3. 用“直接遍历字符”代替“用下标访问字符串” 🌟🌟

代码里大量写 `for i in range(len(zzz))` 然后用 `zzz[i]`。

Python 风格更好（也更少出错）的写法是：

```python
for ch in source_str:
    ...
```

以及：

```python
for ch in target_str:
    ...
```

这能去掉多余的 `range(len(...))`，符合 Python 可读性规范（PEP 8 也鼓励这种写法）。

:::

::: tabs

@tab 4. 删掉无用变量/无用计算 🌟🌟

代码中：

```python
m=-1
for (key,val) in xxx.items():
    if val>m:
       m=val
```

变量 `m`（最大出现次数）之后根本没被用到。

这种“死代码”会误导读者，以为最大值有意义。应当完全移除。

@tab 5. 减少重复、矛盾的条件判断 🌟

代码中在检查目标字符时写了两次几乎一样的判断：

```python
if (xxx.get(cccABc[i]) == None): 
    return False 
if (xxx.get(cccABc[i]) == None or xxx[cccABc[i]] == 0):
    return False
```

第一条判断已经检查了 key 是否存在；第二条又重复了一遍同样的检查。这是重复且让逻辑显得混乱。

可以合并成一个更清晰的检查：“不存在或没剩余次数就失败”，例如：

```python
if c not in char_counts or char_counts[c] == 0:
    return False
```

这提高了可读性和避免重复调用 `dict.get()`。

@tab 6. 避免魔法数式的风格/多余括号，遵守 PEP 8 代码风格🌟🌟

当前代码：

```python
if (xxx.get(cccABc[i]) == None):
```

- Python 风格里布尔判断不需要多余的括号。

- 对空值建议用 `is None` 而不是 `== None`。

- 变量和运算符周围的空格也不统一。

改成：

```python
if char_counts.get(c) is None:
```

会让风格一致、专业。

:::

::: tabs

@tab 7. 添加函数文档字符串 (docstring) 说明用途、参数和返回值 🌟

目前函数没有任何说明，别人只能猜。应当在函数开头加：

```python
def can_make_str2_from_str1(source_str, target_str):
    """
    返回 True/False：
    target_str 是否可以仅用 source_str 中的字符（按出现次数计）拼出。
    """
```

这能让读者立刻明白函数作用以及参数意义。

@tab 8. 给变量起更清晰的循环变量名 🌟🌟

现在所有 for 循环都用 `i`，但 `i` 有时表示 “`source_str` 的索引”，有时表示 “`target_str` 的索引”。

这会让人阅读时混乱。

例如：

```python
for ch in target_str:
    ...
```

`ch` 明确表示“正在处理的那个字符”，比用 `i` 再去 `target_str[i]` 直观得多。

:::

::: tabs

@tab 9. 减少不必要的注释 / 写出真正有帮助的注释 🌟🌟（可选，不推荐。）

当前有注释：

```python
xxx[zzz[i]]=0 # Assign the key zzz[i] the value 0
```

这个注释只是把代码逐字翻译成英语，没有传达额外信息。更有价值的注释应该解释“为什么这么做”，比如“初始化每个出现过的字符的计数为 0”。

低质量注释会让代码变得更难读，因为读者必须分辨哪些注释是有意义的。

@tab 10. 类型假设可以写成类型注解，帮助后续调试/静态检查 🌟

我们可以为函数签名增加类型注解，例如：

```python
def can_make_str2_from_str1(source_str: str, target_str: str) -> bool:
    ...
```

这让调用者知道：两个参数都应该是字符串，返回布尔值。对后续调试和自动检查非常有用。

:::

::: tabs

@tab 思路汇总

> 课后进行思路设计，设计完成之后发给我看；
>
> 这其实不是编程，但是也是编程。生活中各个场景都会遇到：你办理一场活动，你作为总负责人，你是不是得考虑所有情况、具体流程，并且具体流程最清楚的那个人！只有自己熟悉活动全流程，才不至于

1. 先看看变量名是否有问题；
2. 再看看逻辑当中有没有重复；
3. 如果看到一个变量在某次创建，但是在后续没有使用到，可以考虑有可能是多余的变量！（最好就是删除试一试，会不会影响题目的实现效果）
4. 说函数没有注释说明，也是不错的取巧得分点；
5. 一定要学会运行！运行代码，看题目提供的代码是否正确，不正确就要找出错误的点。对于现在的你来说，较难。
6. 类型注解是个不错的答案，老外特别喜欢写类型注解，考试的时候可以多多考虑。
7. **总结**：主要问题是——乱命名、冗余循环、死代码、重复判断、风格不统一、没有文档。逐一修正后，代码在保持功能正确的同时，会更短、更清晰、也更不容易被后续维护的人误解。

:::

## 3. Question 2: Testing (5/40)

We want to write tests for a function with signature and docstring defined as follows:

```python
def count_consonants(string):
  """
  Given an input string, returns the number of English consonants
  in the string. Duplicate consonants are counted. A consonant in 
  English is a letter in the range A to Z or in the range a to z 
  which is not a vowel. Vowels in English are the letters a, e, i, 
  o, and u, and their upper-case variants A, E, I, O, and U.
  """
```

Thus, for example, `count_consonants("Hello world!")` returns `7`, and `count_consonants("#COMP1730 exam!#")` returns `5`.

Write **at most** 4 test cases for this function (every test case after the first four will be ignored). For each test case, you must write down the input (argument to the function) and the expected return value. Each test case should specify valid arguments for the function. Your test cases should cover relevant corner cases.

::: tabs

@tab 核心点！！！🌟

这类题目主要抓住：程序要实现什么功能，以及函数接受什么参数、返回什么结果！

这些来源哪里？——从题目中获取，这个地方比较简单的是：理解题目，但不用思考具体如何实现！

题目会给函数注释、以及调用例子！看懂、分析就可以拿下！

按分析出的结果，编写测试：

请给出最多 4 个测试用例。每个写成“输入 → 期望返回值”。

1. `count_consonants("")  →  0`

    空字符串，应该没有辅音字母。

2. `count_consonants("aeiouAEIOU")  →  0`

    全是元音（大小写都有），应计数为 0。

3. `count_consonants("Hello world!")  →  7`

    示例里的经典句子，检查常见混合大小写+空格+标点。

4. `count_consonants("#COMP1730 exam!#")  →  5`

    含有数字、符号、大小写字母，检查是否正确忽略非字母并正确计数辅音。

```python
assert count_consonants("Where are you?") == 5
assert count_consonants("Who is that") == 6
assert count_consonants("Why you do that") == 8
assert count_consonants("It is python") == 7
```

```python
def count_consonants(string):
    vowels = "aeiouAEIOU"
    count = 0
    for ch in string:
        if ch.isalpha():
            if ch not in vowels:
                count += 1
    return count


def count_consonants(string):
    vowels = "aeiouAEIOU"
    total_count = 0
    y_count = 0
    for ch in string:
        if ch.isalpha():
            total_count += 1
        if ch in vowels:
            y_count += 1
    return total_count - y_count

def count_consonants(string):
    vowels = "aeiouAEIOU"
    count = 0
    for ch in string:
        if ch.isalpha() and (ch not in vowels):
            count += 1
    return count
```

:::

## 4. Question 3: Debugging (5/40)

Given a sequence of integer numbers, `seq`, and a positive integer number `stride`, assumed to be smaller or equal than the length of `seq`, the following function aims to return the sum of the elements in the sequence.

```python
def strided_sum(seq,stride):
  n=len(seq)
  assert stride>0 and stride<=n
  quotient=n//stride
  s=0
  for i in range(0,stride):
    current=i
    for j in range(0,quotient):
        s+=seq[current]
        current+=stride

  return s 
```

However, the function above is not correct:

**(a)** Provide an example of function call with arguments of correct type that makes this function return an incorrect result. `seq` must be a sequence of integer numbers, and `stride` must be a positive integer smaller or equal than the length of `seq`.

::: details (a) 给出一个会返回错误结果的调用示例

**调用**：

```python
strided_sum([1,2,3,4,5,6,7], 3)
```



:::

**(b)** Explain the cause of the error that you have found, i.e., what is wrong with this function. Your answer must explain what is wrong with the function as given. Writing a new function or rewriting/fixing the function is not an acceptable answer, regardless of whether it is correct or not.

## 5. Question 4: Time complexity (5/40)

**NOTE: There are two questions 4.1 and 4.2 below.**

### 5.1 Question 4.1: Time complexity (2/40)

Given the following function definition statement:

```python
def func(my_list,i):
    if (i<len(my_list)):
      return my_list[i]+func(my_list,i+1)
    else:
      return 0
```

where `my_list` is assumed to be a list of numbers, and `i` a non-negative integer number, write down the time complexity in big-O notation of a call `func(my_list,0)` as a function of **n** being the length of the input list `my_list`. **Explain the reason why.** Correct answers without any explanation will receive zero marks.

### 5.2 Question 4.2: Time complexity (3/40)

Given the following function definition statement:

```python
def g(A):
    res=0.0
    for i in range(0,A.shape[0]):
        for j in [0,A.shape[1]-1]:
            res=res+A[i,j]

    for i in [0,A.shape[0]-1]:
        for j in range(1,A.shape[1]-1):
            res=res+A[i,j]
    return res
```

where `A` is assumed be an square (i.e., same number of rows and columns) 2D NumPy array of floating point numbers, write down the time complexity in big-O notation as a function of n*n* being the number of rows and columns of `A`. **Explain the reason why.** Correct answers without any explanation will receive zero marks.

## 6. Question 5: Count isograms (7/40)

An isogram is a string where each of its characters occurs the same number of times. A lower-case letter is different from an upper-case letter and the function should work with non-letter characters. For example, the string `"abaCCb"` is an isogram as the characters `"a"`, `"b"`, `"C"` occur two times each. The string `"aBaCCb"` is not an isogram because `"a"`, `"B"`, `"C"`, and `"b"` occur twice, once, twice, and once, respectively (`"B"` is different from `"b"`).

Write a function `count_isograms` that takes a list of strings as input and returns the number of strings in the list are isograms.

A scaffold file `count_isograms.py` is provided. You must write your solution into this file.

Requirements:

- The function that you write must be named `count_isograms` and it must have a single parameter.
- You can assume that the parameter is of type`list.`
- You can assume that all elements in the list are of type `str.`
- The function must return an integer.

Your solution will be marked on functionality only (no code quality considered). To be fully functional means that it returns the correct value for all valid arguments. You can test it by either clicking the "Test" button in Ed or running `test_count_isograms` provided in the scaffold file. Passing the tests does not prove that your solution is correct. **Failing any test proves that your function is wrong.** Code that does not run (for example due to syntax errors) or that fails every test case will receive **zero marks**.

**count_isograms.py**

```python
def count_isograms(strings):
    pass

def test_count_isograms():
    assert count_isograms([])==0
    assert count_isograms(["a"])==1
    assert count_isograms(["aa","abC"])==2
    assert count_isograms(["abaCCb","abaCCb"])==2
```

![](https://blog.images.bornforthis.cn/docs-images/sha256/da/daf30082c0a8c5501db63594ee432c8ef70a98b84ba6678fed4ee7b551bcfe00.png)

::: code-tabs

@tab 答案

```python
def count_isograms(strings):
    total = 0
    for s in strings:
        freq = {}
        for ch in s:
            freq[ch] = freq.get(ch, 0) + 1
        # 所有出现次数放入一个集合
        counts = set(freq.values())
        # 如果这个集合的大小 <= 1，说明所有字符次数都一致
        if len(counts) <= 1:
            total += 1
    return total


def test_count_isograms():
    assert count_isograms([])==0
    assert count_isograms(["a"])==1
    assert count_isograms(["aa","abC"])==2
    assert count_isograms(["abaCCb","abaCCb"])==2
```



:::

## 7. Question 6: Extract k-th diagonal of a matrix (7/40)

A square matrix is a matrix with the same number of rows and columns, n*n*. We will use list of lists to store a square matrix. The main diagonal is defined as a list of elements with the same row and column indices, i.e., `[0][0]`, `[1][1]`, `[2][2]`, and so on. For example, given the 4-by-4 matrix `[[1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,15,16]]`:
$$
\begin{bmatrix}
1 & 2 & 3 & 4 \\
5 & 6 & 7 & 8 \\
9 & 10 & 11 & 12 \\
13 & 14 & 15 & 16
\end{bmatrix}
$$
The main diagonal is `[1, 6, 11, 16]`. More generally, we define the $k$-th diagonal of a square matrix,where $−n < k < n$, is a list of those elements in a diagonal parallel to the main diagonal at a distance $k$ to the main diagonal.$k > 0$ means that the *k*-th diagonal is located to the right of the main diagonal, and $k < 0$ means that it is located at the left.For *k* = 0, the $k$-th diagonal is the same as the main diagonal. Figure below illustrates this:

![](https://blog.images.bornforthis.cn/docs-images/sha256/10/1067640b2aaa9d1b5bf1534d7583c33376361bfe564662f4eb93a5b882a9805f.png)

In this example, for $k = 1$ the 1st diagonal is $[2, 7, 12]$, and for $k = -2$ the (-2)th diagonal is $[9, 14]$.

Note that the elements in the \(k\)-th diagonal must go from the top left to the bottom right of the matrix.

Write a function `kth_diagonal` that takes a square matrix represented as a list of lists and a value of $k$ as input. It should return the $k$-th diagonal of the matrix as a list. The elements in the list of lists can be of any type, and different elements may be of different types. 

More examples:

- `kth_diagonal([[1,2,[1,2,3]],[4,5,6],[7,8,"comp7130"]],2)` , must return the list `[[1,2,3]]`, and
- `kth_diagonal([[1,2,[1,2,3]],[4,5,6],[7,8,"comp7130"]],0),` must return the list `[1,5,"comp7130"]`.

A scaffold file `kth_diagonal.py` is provided. You must write your solution into this file.

Requirements:

- The function that you write must be named `kth_diagonal` and it must have two parameters.
- You can assume the first parameter to be a list of lists and the second parameter an integer.
- The elements in the list of lists can be of any type, and different elements may have different types.
- The function must return a list.

Your solution will be marked on functionality only (no code quality considered). To be fully functional means that it returns the correct value for all valid arguments. You can test it by either clicking the "Test" button in Ed or running `test_kth_diagonal` provided in the scaffold file. Passing the tests does not prove that your solution is correct. **Failing any test proves that your function is wrong.** Code that does not run (for example due to syntax errors) or that fails every test case will receive **zero marks**.

**kth_diagonal.py**

```python
def kth_diagonal(matrix,k):
    pass

def test_kth_diagonal():
    assert kth_diagonal([[1,2,[1,2,3]],[4,5,6],[7,8,"comp7130"]],2)==[[1,2,3]]
    assert kth_diagonal([[1,2,[1,2,3]],[4,5,6],[7,8,"comp7130"]],0)==[1,5,"comp7130"]    
```

![](https://blog.images.bornforthis.cn/docs-images/sha256/2d/2da3c12c6e772626e3247ca22713bf66da1c4c30a920ba7b6ed482fd03349940.png)

::: code-tabs

@tab 答案

```python
def kth_diagonal(matrix, k):
    n = len(matrix)
    diag = []
    if k >= 0:
        # 从 (0, k) 开始，走到 (n-k-1, n-1)
        for i in range(0, n - k):
            diag.append(matrix[i][i + k])
    else:
        # k < 0，从 (-k, 0) 开始
        # n + k 等价于 n - (-k)
        for i in range(0, n + k):
            diag.append(matrix[i - k][i])
    return diag


def test_kth_diagonal():
    assert kth_diagonal([[1,2,[1,2,3]],[4,5,6],[7,8,"comp7130"]],2)==[[1,2,3]]
    assert kth_diagonal([[1,2,[1,2,3]],[4,5,6],[7,8,"comp7130"]],0)==[1,5,"comp7130"]    
```



:::

## 8. Question 7: Count twin primes pairs (6/40)

A prime number is an integer larger than $1$ that has only two integer divisors: $1$ and itself. A composite number is an integer greater than $1$ that is not a prime number.

Two prime numbers are called twin if there is exactly one composite number between them. For example, $2$ and $3$ are not twin primes, as there is no composite number between them. However, $3$ and $5$ are twins, as there is one and only composite number between them: $4$. Besides, $7$ and $11$ are not twin prime numbers, as there are three composite numbers between them: 8, 9, 10.

Write a function `twin_primes` that takes as input a positive integer n*n*, and returns how many twin primes are there that are smaller than or equal to n*n*. For example, if $n=7$, the function must return 3, as there are three twin primes up to 7: `(2,5), (3,5)`, and `(5,7)`.

A scaffold file `twin_primes.py` is provided. You must write your solution into this file.

Requirements:

- The function that you write must be named `twin_primes` and it must have a single parameter.
- You can assume that the parameter is a positive integer.

Your solution will be marked on functionality only (no code quality considered). To be fully functional means that it returns the correct value for all valid arguments. You can test it by either clicking the "Test" button in Ed or running `test_twin_primes` provided in the scaffold file. Passing the tests does not prove that your solution is correct. **Failing any test proves that your function is wrong.** Code that does not run (for example due to syntax errors) or that fails every test case will receive **zero marks**.

**twin_primes.py**

```python
def twin_primes(n):
    pass

def test_twin_primes():
    assert twin_primes(7) == 3
    assert twin_primes(10) == 3
    assert twin_primes(20) == 5
```

![](https://blog.images.bornforthis.cn/docs-images/sha256/75/75517976f6bee533e98220d2bbe124004fd77f8843c2767b875c7f3b42ee9754.png)

::: code-tabs

@tab 答案 1（超时）

```python
def twin_primes(n):
    # 辅助：判断质数
    def is_prime(x):
        if x <= 1:
            return False
        if x == 2:
            return True
        if x % 2 == 0:
            return False
        d = 3
        while d * d <= x:
            if x % d == 0:
                return False
            d += 2
        return True

    # 先收集 <= n 的所有质数
    primes = [p for p in range(2, n + 1) if is_prime(p)]

    count = 0
    # 枚举所有 p<q 的质数组合
    for i in range(len(primes)):
        for j in range(i + 1, len(primes)):
            p = primes[i]
            q = primes[j]
            # 数一数 p 和 q 之间有多少“合数”
            composite_between = 0
            for m in range(p + 1, q):
                # 合数定义：>1 且不是质数
                if m > 1 and (not is_prime(m)):
                    composite_between += 1
            if composite_between == 1:
                count += 1

    return count


def test_twin_primes():
    assert twin_primes(7) == 3
    assert twin_primes(10) == 3
    assert twin_primes(20) == 5

```

@tab 答案 2（通过）

```python
def twin_primes(n):
    # 用埃拉托斯特尼筛法找出 <= n 的所有质数
    if n < 2:
        return 0

    import math
    sieve = [True] * (n + 1)
    sieve[0] = False
    sieve[1] = False

    limit = int(math.isqrt(n))
    for p in range(2, limit + 1):
        if sieve[p]:
            start = p * p
            step = p
            sieve[start:n + 1:step] = [False] * (((n - start) // step) + 1)

    primes = [x for x in range(2, n + 1) if sieve[x]]

    # 思路关键：如果 p 和 q 是两个质数（p < q）
    # 设它们之间的合数个数 = 1
    #
    # 可以证明这个条件等价于：
    #    (q - j) - (p - i) == 1
    # 其中 i,j 是 p,q 在质数序列里的索引（从0开始）
    #
    # 也就是令 v_i = prime[i] - i
    # 则每一对 (i,j) 构成一对 twin，当且仅当 v_j == v_i + 1
    #
    # 因为 v_i 是非递减的，我们可以按数值分组计数，然后做相邻组乘积。

    freq = {}  # 统计每个 v = prime_indexed_value 的出现次数
    for idx, p in enumerate(primes):
        v = p - idx
        freq[v] = freq.get(v, 0) + 1

    # 现在，如果某个值 v 出现了 a 次，而 v+1 出现了 b 次，
    # 那么所有 (v 的那些质数, v+1 的那些质数) 都满足条件，
    # 并且这些质数的索引次序天然是先 v 后 v+1，不会乱序。
    #
    # 这意味着贡献是 a * b
    total_pairs = 0
    for v, cnt in freq.items():
        nxt = freq.get(v + 1, 0)
        if nxt:
            total_pairs += cnt * nxt

    return total_pairs


def test_twin_primes():
    assert twin_primes(7) == 3
    assert twin_primes(10) == 3
    assert twin_primes(20) == 5
```

@tab 答案 3 (通过)

```python
def twin_primes(n):
    # --- 第一步：用筛法找出 2~n 之间的所有质数 ---
    if n < 2:
        return 0

    sieve = [True] * (n + 1)
    sieve[0] = False
    sieve[1] = False

    limit = int(n ** 0.5)
    for p in range(2, limit + 1):
        if sieve[p]:
            # 把 p 的倍数标记成合数
            for m in range(p * p, n + 1, p):
                sieve[m] = False

    # 把所有是质数的数收集起来，按从小到大
    primes = [x for x in range(2, n + 1) if sieve[x]]

    # --- 第二步：把每个质数 p 和它在质数列表里的位置 i 关联起来 ---
    # 关键结论（不用背公式，只要相信它）：
    #   对于两个质数 primes[i] 和 primes[j] (i<j)
    #   它们构成题目要求的一对“twin”
    #   当且仅当  (primes[j] - j)  比  (primes[i] - i)  正好多 1
    #
    # 所以我们先计算 key = prime - index，然后统计每个 key 出现了多少次
    counts = {}
    for i, p in enumerate(primes):
        key = p - i
        counts[key] = counts.get(key, 0) + 1

    # --- 第三步：统计成对数量 ---
    # 如果某个 key 出现了 a 次，而 key+1 出现了 b 次，
    # 那么它们之间会形成 a*b 个合法的配对
    total = 0
    for key, a in counts.items():
        b = counts.get(key + 1, 0)
        total += a * b

    return total



def test_twin_primes():
    assert twin_primes(7) == 3
    assert twin_primes(10) == 3
    assert twin_primes(20) == 5

```

@tab 答案 4（通过）

```python
def twin_primes(n):
    # 辅助函数：判断是否为质数
    def is_prime(x):
        if x <= 1:
            return False
        for i in range(2, int(x ** 0.5) + 1):
            if x % i == 0:
                return False
        return True

    # 先找出所有 <= n 的质数
    primes = [i for i in range(2, n + 1) if is_prime(i)]

    # 用公式化简：p_j - j 与 p_i - i 的差值为 1
    values = [p - i for i, p in enumerate(primes)]

    # 统计相邻差为 1 的情况
    count = 0
    for v in values:
        if (v + 1) in values:
            count += 1

    return count


def test_twin_primes():
    assert twin_primes(7) == 3
    assert twin_primes(10) == 3
    assert twin_primes(20) == 5
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

[.](https://chatgpt.com/g/g-p-675fd5661620819195b2cc64724e6db8-si-jiao-xue-sheng-shang-ke/shared/c/69021be9-0c68-832c-ad94-0fdb6d02b2ec?owner_user_id=user-bHrTM2QL76fKDxPar35Yq951)

[.](https://chatgpt.com/g/g-p-675fd5661620819195b2cc64724e6db8-si-jiao-xue-sheng-shang-ke/c/69021be9-0c68-832c-ad94-0fdb6d02b2ec)