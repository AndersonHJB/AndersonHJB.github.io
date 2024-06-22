---
title: UIC All QUIZ 类似题目-模拟考
date: 2023-05-24 10:15:41
icon: a-jibijilianxibianji
author: AI悦创
isOriginal: true
category: 
    - Python 一对一教学
    - uic
    - UIC Information Space
    - codingbat
tag:
    - Python 一对一教学
    - uic
    - UIC Information Space
    - codingbat
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

## 难度：🌟

### 问题1:

::: tabs

@tab 题目

编写一个函数`count_character_in_string(string, char)`，用于计算指定字符在给定字符串中出现的次数。

示例:
```python
string = "Python programming is fun."
char = 'n'
```

期望的输出:
```python
3
```

@tab Answer

```python
def count_character_in_string(string, char):
    return string.count(char)

string = "Python programming is fun."
char = 'n'
print(count_character_in_string(string, char))  # Expected output: 3
```

:::

### 问题2:

::: tabs

@tab 题目

编写一个函数`count_word_in_sentence(sentence, word)`，该函数要找出一个单词在给定句子中出现的次数。请注意，函数应区分大小写。

示例:
```python
sentence = "Artificial intelligence is the future. Intelligence can change the world."
word = "intelligence"
```

期望的输出:
```python
1
```

@tab Answer

```python
def count_word_in_sentence(sentence, word):
    # Split the sentence into words
    words = sentence.split()

    # Initialize counter for the word
    count = 0

    # Check each word in the sentence
    for w in words:
        if w == word:
            count += 1

    return count

sentence = "Artificial intelligence is the future. Intelligence can change the world."
word = "intelligence"
print(count_word_in_sentence(sentence, word))  # Expected output: 1
```

:::



## 难度：🌟🌟

以下是两个更有挑战性的问题，它们涉及字符串处理和子字符串搜索的知识点：

### 问题1：

::: tabs

@tab 题目

编写一个函数 `find_pattern(text, pattern)`，找出一个特定的模式（pattern）在给定的字符串中出现的所有索引位置。这个函数应返回一个包含所有索引位置的列表。如果模式没有在文本中出现，返回空列表。

示例：
```py
text = "The quick brown fox jumps over the lazy dog. The dog is not that lazy after all."
pattern = "the"
```

期望的输出：
```py
[4, 31, 35, 64]
```

@tab Answer

```python
def find_pattern(text, pattern):
    text = text.lower()
    pattern = pattern.lower()
    indices = []
    index = -1  # Start at -1 so the first run adds 0 to start the search
    while True:
        # Find the next occurrence of the pattern
        index = text.find(pattern, index + 1)
        # If no more occurrences, break the loop
        if index == -1:
            break
        # Otherwise, append the index to the list
        indices.append(index)
    return indices

text = "The quick brown fox jumps over the lazy dog. The dog is not that lazy after all."
pattern = "the"
print(find_pattern(text, pattern))
```

请注意，这个函数是大小写敏感的。如果您希望该函数忽略大小写，您可以将文本和模式都转换为小写或大写。例如：

```python
def find_pattern(text, pattern):
    text = text.lower()
    pattern = pattern.lower()
    indices = []
    index = -1  # Start at -1 so the first run adds 0 to start the search
    while True:
        # Find the next occurrence of the pattern
        index = text.find(pattern, index + 1)
        # If no more occurrences, break the loop
        if index == -1:
            break
        # Otherwise, append the index to the list
        indices.append(index)
    return indices

text = "The quick brown fox jumps over the lazy dog. The dog is not that lazy after all."
pattern = "the"
print(find_pattern(text, pattern))
```

:::

### 问题2：

::: tabs

@tab 题目

编写一个函数 `longest_substring_without_repeating_characters(string)`，找出给定字符串中最长的不包含重复字符的子字符串，并返回该子字符串的长度。

示例：
```py
string = "abcabcbb"
```

期望的输出：
```py
3
```
解释：最长的无重复字符子字符串是 "abc"，所以其长度为3.



@tab Answer

你可以使用一个滑动窗口的方法来解决这个问题。下面是用 Python 编写的函数：

```python
def longest_substring_without_repeating_characters(s):
    char_index = {}  # 记录字符的索引
    max_length = 0   # 最大长度
    start = 0        # 滑动窗口开始的位置

    for i, char in enumerate(s):
        if char in char_index and start <= char_index[char]:
            start = char_index[char] + 1
        else:
            max_length = max(max_length, i - start + 1)
        
        char_index[char] = i

    return max_length
```

这个函数遍历给定的字符串，并使用一个字典`char_index`来记录每个字符出现的最后位置。如果遇到重复的字符，并且这个字符在当前的滑动窗口内，我们就需要移动窗口的开始位置来排除这个字符。然后，我们更新当前字符的索引，并检查当前窗口的长度是否大于最大长度，如果是，我们就更新最大长度。在函数的最后，我们返回找到的最大长度。

使用你给出的例子，这个函数会返回结果为3，因为"abc"是最长的没有重复字符的子字符串。

```python
print(longest_substring_without_repeating_characters("abcabcbb"))  # 输出: 3
```

```python
def longest_substring_without_repeating_characters(s):
    # 初始化一个字典来保存字符及其在字符串中的索引。
    char_index = {}

    # 初始化变量max_length为0，用于记录最长不重复子字符串的长度。
    max_length = 0

    # 初始化变量start为0，表示当前考虑的子字符串的开始位置，这个变量会随着我们的遍历逐步向后移动。
    start = 0

    # 遍历字符串中的每一个字符，获取字符及其索引
    for i, char in enumerate(s):
        # 如果当前字符已经在字典中（即之前出现过），并且这个字符的位置在当前考虑的子字符串内，我们就需要移动子字符串的开始位置
        if char in char_index and start <= char_index[char]:
            start = char_index[char] + 1  # 移动开始位置到重复字符的下一位置

        # 如果当前字符是首次出现，或者出现的位置不在当前考虑的子字符串内，我们就可以继续考虑当前的子字符串。
        else:
            # 检查当前子字符串的长度是否大于最大长度，如果是，我们就更新最大长度。
            max_length = max(max_length, i - start + 1)

        # 不论当前字符是否重复，我们都需要更新字典中当前字符的位置。
        char_index[char] = i

    # 遍历完所有的字符后，返回最大长度。
    return max_length

```

:::

## Question 1

题目一：编写一个函数 `replace_item(list1, old_item, new_item)`，该函数接收一个列表和两个项作为参数，将列表中所有的 `old_item` 替换为 `new_item`。

示例：
```py
list1 = [5, 20, 15, 20, 25, 50, 20]
old_item = 20
new_item = 100
```

预期输出：
```py
[5, 100, 15, 100, 25, 50, 100]
```

题目二：编写一个函数 `count_item(list1, item)`，该函数接收一个列表和一个项作为参数，返回这个项在列表中出现的次数。

示例：
```py
list1 = [5, 20, 15, 20, 25, 50, 20]
item = 20
```

预期输出：
```py
3
```
这两个题目都涉及到对列表进行操作，如移除、替换和计数等。

## Question 2

题目一：编写一个函数 `find_common(list1, list2)`，该函数接收两个列表作为参数，返回这两个列表的共同元素（如果有的话）。请注意，返回的列表应该只包含唯一的元素，不要有重复。

示例：
```py
list1 = [5, 20, 15, 20, 25, 50, 20]
list2 = [15, 20, 30, 40, 50]
```

预期输出：
```py
[20, 15, 50]
```

题目二：编写一个函数 `flatten_list(nested_list)`，它接收一个嵌套的列表作为参数，返回一个扁平的列表，其中不再有嵌套。

示例：
```py
nested_list = [[1, 2, [3, 4, [5, 6]]], 7, [8, [9, 10]]]
```

预期输出：
```py
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```
这两个题目相较于之前的题目难度提高，需要理解如何遍历列表、处理嵌套列表以及如何使用集合等概念。

::: details

问题一的解决方案：

```python
def find_common(list1, list2):
    set1 = set(list1)
    set2 = set(list2)
    common = set1.intersection(set2)
    return list(common)
```
你可以通过下面的方式调用该函数：
```python
list1 = [5, 20, 15, 20, 25, 50, 20]
list2 = [15, 20, 30, 40, 50]
print(find_common(list1, list2))  # 输出: [20, 15, 50]
```
问题二的解决方案：

这是一个更复杂的问题，因为它涉及到递归。递归是指在函数内部调用自身的方法。

```python
def flatten_list(nested_list):
    flat_list = []
    for element in nested_list:
        if isinstance(element, list):
            flat_list.extend(flatten_list(element))
        else:
            flat_list.append(element)
    return flat_list
```
你可以通过下面的方式调用该函数：
```python
nested_list = [[1, 2, [3, 4, [5, 6]]], 7, [8, [9, 10]]]
print(flatten_list(nested_list))  # 输出: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

请注意，这些解决方案在处理大量数据时可能会有性能问题。对于大型列表，你可能需要寻找更优化的方法。

:::

## Question 3

1. 编程题目一：定义函数 `word_frequency(words_list)` 该函数接收一个单词列表，并计算每个单词的出现次数，返回一个字典，键为单词，值为其出现的次数。

   示例：
   ```py
   words_list = ['apple', 'banana', 'apple', 'pear', 'banana', 'banana', 'kiwi']
   ```

   预期输出：
   ```py
   {'apple': 2, 'banana': 3, 'pear': 1, 'kiwi': 1}
   ```

   提示：
   * 你可以使用或者不使用 `collections` 模块中的 `Counter`。

2. 编程题目二：定义函数 `char_frequency(string)` 该函数接收一个字符串，并计算每个字符的出现次数（包括空格），返回一个字典，键为字符，值为其出现的次数。

   示例：
   ```py
   input_string = 'Hello, World!'
   ```

   预期输出：
   ```py
   {'H': 1, 'e': 1, 'l': 3, 'o': 2, ',': 1, ' ': 1, 'W': 1, 'r': 1, 'd': 1, '!': 1}
   ```

   提示：
   * 你可以使用或者不使用 `collections` 模块中的 `Counter`。

---

1. **反转元组：** 编写一个Python程序来反转一个元组。

2. **元组和列表的转换：** 编写一个Python程序，将一个列表转换为元组，将一个元组转换为列表。

3. **元组排序：** 编写一个Python程序来对元组进行排序

4. **元组中的最大和最小值：** 编写一个Python程序来找到元组中的最大和最小值。

5. **删除元组的特定元素：** 因为你不能直接从元组中删除元素，所以试着编写一个Python程序来删除元组的特定元素

6. **元组切片：** 编写一个Python程序来展示元组切片的操作。

7. **元组的嵌套：** 编写一个Python程序来处理嵌套的元组（元组中的元组）。

8. **合并元组：** 编写一个Python程序来合并多个元组。

9. **计算元组中的元素个数：** 编写一个Python程序，统计元组中元素的个数。

1. **反转元组：**
```python
def reverse_tuple(t):
    return t[::-1]

print(reverse_tuple((1, 2, 3, 4, 5)))  # 输出：(5, 4, 3, 2, 1)
```

2. **元组和列表的转换：**
```python
def tuple_to_list(t):
    return list(t)

def list_to_tuple(lst):
    return tuple(lst)

print(tuple_to_list((1, 2, 3, 4, 5)))  # 输出：[1, 2, 3, 4, 5]
print(list_to_tuple([1, 2, 3, 4, 5]))  # 输出：(1, 2, 3, 4, 5)
```

3. **元组排序：**
```python
def sort_tuple(t):
    return tuple(sorted(t))

print(sort_tuple((3, 1, 2, 5, 4)))  # 输出：(1, 2, 3, 4, 5)
```

4. **元组中的最大和最小值：**
```python
def min_max_tuple(t):
    return min(t), max(t)

print(min_max_tuple((3, 1, 2, 5, 4)))  # 输出：(1, 5)
```

5. **删除元组的特定元素：**
```python
def remove_element(t, element):
    return tuple(x for x in t if x != element)

print(remove_element((3, 1, 2, 5, 4), 3))  # 输出：(1, 2, 5, 4)
```

6. **元组切片：**
```python
def slice_tuple(t, start, end):
    return t[start:end]

print(slice_tuple((1, 2, 3, 4, 5), 1, 4))  # 输出：(2, 3, 4)
```

7. **元组的嵌套：**（假设我们只展示如何访问嵌套元组）
```python
nested_tuple = ((1, 2, 3), (4, 5, 6), (7, 8, 9))

print(nested_tuple[0])  # 输出：(1, 2, 3)
print(nested_tuple[0][1])  # 输出：2
```

8. **合并元组：**
```python
def merge_tuples(*tuples):
    return tuple(x for t in tuples for x in t)

print(merge_tuples((1, 2, 3), (4, 5, 6)))  # 输出：(1, 2, 3, 4, 5, 6)
```

9. **计算元组中的元素个数：**
```python
def count_elements(t):
    return len(t)

print(count_elements((1, 2, 3, 4, 5)))  # 输出：5
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

