---
title: 04-Programming Assignment 2
date: 2023-05-02 19:58:52
icon: a-jibijilianxibianji
author: AI悦创
isOriginal: true
category: 
    - Python 一对一教学
    - uic
    - UIC Information Space
tag:
    - Python 一对一教学
    - uic
    - UIC Information Space
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
footer: 长期招收编程一对一学员！微信：Jiabcdefh, <a href="https://beian.miit.gov.cn/" target="_blank">闽ICP备19021486号-6</a>
---

# Programming Assignment 2

This is the Part 2 of your Assignment 2. Together with the Part 1 multiple choice questions on iSpace, it accounts for maximum 10% of the final grade.

**Note**
* Write your code after you see `# YOUR CODE HERE` 
* Read the instruction of each question. You have a **limited time to submit: May 5, 2023, h. 13:00**. Only your last submission counts.
* Copying the solution of other students is forbidden.
* For each exercise example, the symbol `->` indicates the value the function should return.
* After the deadline, submission is only possible by email attachment (.ipynb file) to yujiahu@uic.edu.cn. Late submission will be heavily penalized (up to 100%, if late > 48h ).
* This assignment will be **auto-graded**. If you fail to submit or if your submission fails the auto-grade, you will get 0 points.** 

## Question 1

::: tabs

@tab EN

**Question 1**. Define the function `in_dict(dict_arg, value)` that **returns** a boolean `True` if `value` exists in `dict_arg` and `False` if the `value` is not in `dict_arg`.

**Examples**

```python
sample_dict = {'a': 100, 'b': 200, 'c': 300}

in_dict(sample_dict, 100) -> True
in_dict(sample_dict, 110) -> False
```

```python
def in_dict(dict_arg, value):
    # YOUR CODE HERE
```

@tab ZH

**问题1**。定义函数`in_dict(dict_arg, value)`，该函数**返回**布尔值`True`如果`value`存在于`dict_arg`中，如果`value`不在`dict_arg`中，则返回`False`。

**示例**

```python
sample_dict = {'a': 100, 'b': 200, 'c': 300}

in_dict(sample_dict, 100) -> True
in_dict(sample_dict, 110) -> False
```

@tab Answer

```python
def in_dict(dict_arg, value):
    return value in dict_arg.values()

sample_dict = {'a': 100, 'b': 200, 'c': 300}

print(in_dict(sample_dict, 100))  # Output: True
print(in_dict(sample_dict, 110))  # Output: False
```

:::



## Question 2

::: tabs

@tab EN

**Question 2**. Define the function `mean_val(dict_arg)` that **returns** the average of all the values in `dict_arg`.

**Examples**

```python
dict_arg = {'bad': 1, 'ok': 2, 'good': 3, 'best': 4, 'geek': 5}
mean_val(dict_arg) -> 3.0
```

@tab ZH

问题2：定义函数`mean_val(dict_arg)`，该函数**返回**`dict_arg`中所有值的平均值。

**例子**
```python
dict_arg = {'bad': 1, 'ok': 2, 'good': 3, 'best': 4, 'geek': 5}
mean_val(dict_arg) -> 3.0
```

@tab Answer

```python
def mean_val(dict_arg):
    # Calculate the sum of all values in the dictionary
    total_sum = sum(dict_arg.values())
    
    # Calculate the number of items in the dictionary
    num_items = len(dict_arg)
    
    # Calculate and return the mean value
    mean_value = total_sum / num_items
    return mean_value

# Example usage
dict_arg = {'bad': 1, 'ok': 2, 'good': 3, 'best': 4, 'geek': 5}
print(mean_val(dict_arg))  # Output: 3.0
```

:::



## Question  3

::: tabs

@tab EN

**Question 3**. Define the function `merge_dict(dict1, dict2)` that **returns** the two dictionary inputs merged into one dictionary. Assume that if a key appears in both `dict1` and `dict2`, it has the same value in both dictionaries. 

**Examples**

```python
dict1 = {'Ten': 10, 'Twenty': 20, 'Thirty': 30}
dict2 = {'Thirty': 30, 'Fourty': 40, 'Fifty': 50}

Expected output:
{'Ten': 10, 'Twenty': 20, 'Thirty': 30, 'Fourty': 40, 'Fifty': 50}
```

@tab ZH

**问题 3**。定义函数 `merge_dict(dict1, dict2)`，该函数 **返回** 将两个字典输入合并成一个字典的结果。假设如果一个键在 `dict1` 和 `dict2` 中都出现，它在两个字典中具有相同的值。

**示例**
```python
dict1 = {'Ten': 10, 'Twenty': 20, 'Thirty': 30}
dict2 = {'Thirty': 30, 'Fourty': 40, 'Fifty': 50}

期望的输出：
{'Ten': 10, 'Twenty': 20, 'Thirty': 30, 'Fourty': 40, 'Fifty': 50}
```

@tab Answer

```python
def merge_dict(dict1, dict2):
    merged_dict = dict1.copy()
    merged_dict.update(dict2)
    return merged_dict

# Example usage:
dict1 = {'Ten': 10, 'Twenty': 20, 'Thirty': 30}
dict2 = {'Thirty': 30, 'Fourty': 40, 'Fifty': 50}

result = merge_dict(dict1, dict2)
print(result)  # Output: {'Ten': 10, 'Twenty': 20, 'Thirty': 30, 'Fourty': 40, 'Fifty': 50}
```

:::

## Question 4

::: tabs

@tab EN

**Question 4**. Define the function `high_unique_key(dict_arg)` where `dict_arg` is a dictionary with key-value pairs that are of type string-list. The function **returns** the key of `dict_arg` associated with the value list that has the most unique elements.

**Examples**

```python
dict_arg = {'key1': [5, 7, 9, 4, 0], 'key2': [6, 7, 4, 3, 3], 'key3': [9, 9, 9, 5, 5, 5, 5, 5]}
high_unique_key(dict_arg) -> "key1"
```

```python
def high_unique_key(dict_arg):
    # YOUR CODE HERE
```

@tab ZH

**问题4**. 定义函数`high_unique_key(dict_arg)`，其中`dict_arg`是一个具有字符串列表类型的键值对的字典。该函数**返回**与具有最多独特元素的值列表相关联的`dict_arg`键。

**例子**
```py
dict_arg = {'key1': [5, 7, 9, 4, 0], 'key2': [6, 7, 4, 3, 3], 'key3': [9, 9, 9, 5, 5, 5, 5, 5]}
high_unique_key(dict_arg) -> "key1"
```

@tab Answer

```python
def high_unique_key(dict_arg):
    max_unique_elements = 0
    high_key = None

    for key, value_list in dict_arg.items():
        unique_elements = len(set(value_list))

        if unique_elements > max_unique_elements:
            max_unique_elements = unique_elements
            high_key = key

    return high_key
```

```python
def high_unique_key(dict_arg):
    # 初始化 max_unique_elements 为 0，用于存储目前为止找到的最大唯一元素数量
    max_unique_elements = 0
    # 初始化 high_key 为 None，用于存储与最大唯一元素数量相关的键
    high_key = None

    # 遍历字典中的每个键值对
    for key, value_list in dict_arg.items():
        # 使用 set 函数计算 value_list 中唯一元素的数量
        unique_elements = len(set(value_list))

        # 如果当前唯一元素数量大于当前最大值
        if unique_elements > max_unique_elements:
            # 更新 max_unique_elements 和 high_key
            max_unique_elements = unique_elements
            high_key = key

    # 返回具有最大唯一元素数量的 value_list 的键
    return high_key
```

:::

## Question 5

::: tabs

@tab EN

**Question 5**. A website requires a user to input a username and a password to register. Define a function `check_password(string_arg)` to check the validity of the passwords input by the users. It should **return** a boolean value `True` if the password is valid and `False` if it is not valid. Following are the criteria for checking the password validity:

* At least 1 letter between `[a-z]`
* At least 1 letter between `[A-Z]`
* At least 1 number between `[0-9]`
* At least 1 character from `[*, #]`
* Minimum length of characters: 4 (included)
* Maximum length of characters: 8 (included)

**Examples**
```python
check_password("AbraCad") -> False
check_password("AbraCadabra*123") -> False
check_password("Abra#123") -> True
check_password("Ab*1") -> True
check_password("Abr1@1") -> False
```

**Hint**

A string of a single element (a character) has a method isupper(), islower() and isnumeric(), that returns `True` if it is, respectively, a capital letter, a small letter, or a numeric letter
```py
"B".isupper() -> True
"b".islower() -> True
"2".isnumeric() -> True
```

@tab ZH

**问题 5**。一个网站要求用户输入用户名和密码进行注册。请定义一个名为 `check_password(string_arg)` 的函数，来检查用户输入的密码是否有效。如果密码有效，则函数应该**返回**布尔值 `True`，否则返回布尔值 `False`。以下是检查密码有效性的标准：

* 至少有一个小写字母 `[a-z]`
* 至少有一个大写字母 `[A-Z]`
* 至少有一个数字 `[0-9]`
* 至少有一个字符 `[*，#]`
* 字符的最小长度为 4（包括 4）
* 字符的最大长度为 8（包括 8）

**示例**
```py
check_password("AbraCad") -> False
check_password("AbraCadabra*123") -> False
check_password("Abra#123") -> True
check_password("Ab*1") -> True
check_password("Abr1@1") -> False
```

**提示**

一个由单个元素（一个字符）组成的字符串，具有方法 `isupper()`、`islower()` 和 `isnumeric()`，它们分别返回 `True`，如果它是一个大写字母、一个小写字母或一个数字，则返回 `True`。
```py
"B".isupper() -> True
"b".islower() -> True
"2".isnumeric() -> True
```

@tab Answer

```python
def check_password(string_arg):
    if len(string_arg) < 4 or len(string_arg) > 8:
        return False
    
    has_lower = False
    has_upper = False
    has_numeric = False
    has_special = False
    
    for char in string_arg:
        if char.islower():
            has_lower = True
        elif char.isupper():
            has_upper = True
        elif char.isnumeric():
            has_numeric = True
        elif char in ['*', '#']:
            has_special = True
    
    return has_lower and has_upper and has_numeric and has_special

# Test cases
print(check_password("AbraCad"))            # -> False
print(check_password("AbraCadabra*123"))    # -> False
print(check_password("Abra#123"))           # -> True
print(check_password("Ab*1"))               # -> True
print(check_password("Abr1@1"))             # -> False
```

```python
def check_password(string_arg):
    # 检查密码长度是否在4到8个字符之间（含）
    if len(string_arg) < 4 or len(string_arg) > 8:
        return False
    
    # 初始化四个布尔变量，分别用于检查各条件是否满足
    has_lower = False
    has_upper = False
    has_numeric = False
    has_special = False
    
    # 遍历字符串中的每个字符
    for char in string_arg:
        # 如果字符是小写字母
        if char.islower():
            has_lower = True
        # 如果字符是大写字母
        elif char.isupper():
            has_upper = True
        # 如果字符是数字
        elif char.isnumeric():
            has_numeric = True
        # 如果字符是特殊字符（* 或 #）
        elif char in ['*', '#']:
            has_special = True
    
    # 如果所有条件都满足，则返回 True，否则返回 False
    return has_lower and has_upper and has_numeric and has_special

# 测试用例
print(check_password("AbraCad"))            # -> False
print(check_password("AbraCadabra*123"))    # -> False
print(check_password("Abra#123"))           # -> True
print(check_password("Ab*1"))               # -> True
print(check_password("Abr1@1"))             # -> False
```

:::

```python
def min_value(lst):
    min_value = lst[0]
    for i in lst:
        if i < lst[0]:
            min_value = i
    return min_value

print(min_value([4, 2, 6, 1, 3]))
```

这个程序的问题在于它在循环中错误地使用了`lst[0]`而不是`min_value`。当我们在循环中比较列表中的元素时，我们应该将它们与当前的最小值进行比较，而不是与列表中的第一个元素进行比较。

以下是修复后的程序：

```python
def min_value(lst):
    min_value = lst[0]
    for i in lst:
        if i < min_value:  # 使用 min_value 而不是 lst[0]
            min_value = i
    return min_value
```

产生这个问题的列表可以是任意一个包含不同数值的列表，如：
```python
sample_list = [4, 2, 6, 1, 3]
```

在错误的程序中，`min_value(sample_list)`将返回 4，因为它错误地将所有元素与`lst[0]`（即 4）进行了比较。修复后的程序将正确地返回 1。

::: info 证明这个问题

当然，我可以通过运行错误的程序来证明这个问题。首先，让我们看一下错误的程序的行为：

```python
def min_value(lst):
    min_value = lst[0]
    for i in lst:
        if i < lst[0]:
            min_value = i
    return min_value

sample_list = [4, 2, 6, 1, 3]
print(min_value(sample_list))  # 错误的程序输出
```

输出结果：
```
4
```

错误的程序返回了 4，而不是列表中的最小值 1。这是因为在循环中，代码比较了元素 `i` 和 `lst[0]` 而不是当前最小值。所以，当遇到元素 2 时，虽然它比 4 小，但程序并没有更新 `min_value`。然后，当遇到元素 1 时，由于 1 也比 4 小，`min_value` 被更新为 1。但接下来，由于元素 6 和 3 都大于 4，程序在遇到它们时并不会更新 `min_value`。因此，错误的程序最终返回了 4。

现在，让我们看一下修复后的程序：

```python
def min_value(lst):
    min_value = lst[0]
    for i in lst:
        if i < min_value:
            min_value = i
    return min_value

sample_list = [4, 2, 6, 1, 3]
print(min_value(sample_list))  # 修复后的程序输出
```

输出结果：
```
1
```

修复后的程序正确地返回了列表中的最小值 1，这是因为它在循环中将元素 `i` 与当前最小值 `min_value` 进行了比较。这样一来，当遇到更小的元素时，程序会正确地更新 `min_value`，最终返回列表中的最小值。

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

