---
title: 01-codewars专项练习「集训营」
date: 2023-02-23 22:02:23
author: AI悦创
isOriginal: true
category: 
    - 日本
    - 青英大学
    - 青英大学Python一对一教学
    - Python一对一辅导
    - 日本本科CS辅导
    - codewars专项练习「集训营」
    - codewars真题练习「集训营」
tag:
    - 日本
    - 青英大学
    - 青英大学Python一对一教学
    - Python一对一辅导
    - 日本本科CS辅导
    - codewars专项练习「集训营」
    - codewars真题练习「集训营」
icon: python
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

## Question 1 Duplicate Encoder

- 题目链接：[https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/python](https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/python)

The goal of this exercise is to convert a string to a new string where each character in the new string is `"("` if that character appears only once in the original string, or `")"` if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

> 这个练习的目标是将一个字符串转换为一个新字符串，如果该字符在原始字符串中只出现一次，则新字符串中的每个字符都是“(”;如果该字符在原始字符串中出现多次，则新字符串中的每个字符都是“)”。当确定一个字符是否重复时，忽略大小写。

### Examples

```python
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
```

### Notes

Assertion messages may be unclear about what they display in some languages. If you read `"...It Should encode XXX"`, the `"XXX"` is the expected result, not the input!

> 断言消息在某些语言中显示的内容可能不清楚。如果你读到‘”……它应该编码XXX”，“XXX”是预期的结果，而不是输入!

::: tabs

@tab 学员代码

```python
def duplicate_encode(word):
    n = 0
    result = ''
    for n in range(len(word)-1):
        m = count(word[n], beg= 0, end=len(word)-1 )
        if m >=1:
            result + ')'
        else:
            result + '('
        n += 1
    return result
```

@tab Answer1

```python
def duplicate_encode(word):
    # Convert the string to lowercase to ignore capitalization
    word = word.lower()
    # Create a dictionary to store the count of each character
    char_count = {}
    for char in word:
        if char in char_count:
            char_count[char] += 1
        else:
            char_count[char] = 1
    # Create the new string based on the count of each character
    new_string = ""
    for char in word:
        if char_count[char] == 1:
            new_string += "("
        else:
            new_string += ")"
    return new_string
```

@tab Answer 2

```python
def duplicate_encode(word):
    # 转换小写
    word = word.lower()
    # 先统计字母重复次数，字母:次数>>>字典
    char_count = {}
    for char in word:
        if char in char_count:
            char_count[char] += 1
        else:
            char_count[char] = 1

    new_word = ""
    for char in word:
        if char_count[char] == 1:
            new_word += "("
        else:
            new_word += ")"
    return new_word


print(duplicate_encode("din"))  # "((("
print(duplicate_encode("recede"))  # "()()()"
print(duplicate_encode("Success"))  # ")())())"
print(duplicate_encode("(( @"))  # "))(("
```

:::

## Question 2 Find the unknown digit

To give credit where credit is due: This problem was taken from the ACMICPC-Northwest Regional Programming Contest. Thank you problem writers.

> 这道题摘自acmicpc -西北地区编程竞赛。谢谢问题作者。

You are helping an archaeologist decipher some runes. He knows that this ancient society used a Base 10 system, and that they never start a number with a leading zero. He's figured out most of the digits as well as a few operators, but he needs your help to figure out the rest.

> 你正在帮助考古学家破译一些符文。他知道这个古代社会使用10进制，而且他们从来不会以0作为数字的前导。他算出了大部分数字和一些运算符，但他需要你的帮助才能算出剩下的。

The professor will give you a simple math expression, of the form

> 教授会给你一个简单的数学表达式

```python
[number][op][number]=[number]
```

He has converted all of the runes he knows into digits. The only operators he knows are addition (`+`),subtraction(`-`), and multiplication (`*`), so those are the only ones that will appear. Each number will be in the range from -1000000 to 1000000, and will consist of only the digits 0-9, possibly a leading -, and maybe a few ?s. If there are ?s in an expression, they represent a digit rune that the professor doesn't know (never an operator, and never a leading -). All of the ?s in an expression will represent the same digit (0-9), and it won't be one of the other given digits in the expression. No number will begin with a 0 unless the number itself is 0, therefore 00 would not be a valid number.

> 他把他知道的所有符文都转换成了数字。他唯一知道的运算符是加法(+)、减法(-)和乘法(*)，所以只有这些运算符会出现。每个数字的范围将在-1000000到1000000之间，并且将仅由数字0-9组成，可能是前导-，也可能是几个?。如果表达式中有?，它们表示教授不知道的数字符文(绝不是操作符，也绝不是前导-)。表达式中的所有?将表示相同的数字(0-9)，而不会是表达式中的其他给定数字之一。没有数字会以0开头，除非数字本身是0，因此00不是一个有效的数字。

Given an expression, figure out the value of the rune represented by the question mark. If more than one digit works, give the lowest one. If no digit works, well, that's bad news for the professor - it means that he's got some of his runes wrong. output -1 in that case.

> 给定一个表达式，求出问号所代表的符文的值。如果多于一个数字，给出最小的一个。如果没有数字正确，那对教授来说是个坏消息——这意味着他的一些符文错了。在这种情况下输出-1。

Complete the method to solve the expression to find the value of the unknown rune. The method takes a string as a paramater repressenting the expression and will return an int value representing the unknown rune or -1 if no such rune exists.

> 完成求解表达式的方法，找到未知符文的值。该方法接受一个字符串作为表示表达式的参数，并返回一个表示未知符文的int值，如果不存在这种符文，则返回-1。

```python
def solve_runes(runes):
    # Your code here
    pass
```

::: tabs

@tab Answer 1

```python

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
