---
title: Assignment2
icon: python
date: 2023-04-02 21:08:35
author: AI悦创
isOriginal: true
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
editLink: true
backToTop: true
toc: true
---

## Submission instructions

1. You should submit your homework on [GitHub](https://github.com/CodeClass1v1).
2. For this assignment you should turn in 4 separate `.py` files named according to the following pattern:
    `hw1_q1.py`, `hw1_q2.py`, etc.
3. Each Python file you submit should contain a header comment block as follows:

```text
"""
Author: [Your name here]
Assignment / Part: HW1 - Q1 (etc.)
Date due: 2023-02-09, 11:59pm
I pledge that I have completed this assignment without
collaborating with anyone else, in conformance with the
Bornforthis 1v1 School of Computer Science and Procedures on
Academic Misconduct.
"""
```

**No late submissions will be accepted.**

**REMINDER**: Do not use any Python structures that we have not learned in class.

::: warning

下面英文有可能表述没那么到位，如果感觉英文表达有优化的地方，欢迎在评论区留言指出来哈。不胜感激～

:::

## Question 01: Find the Missing Number

Acquire user input, where the user inputs a specific list. This list consists of consecutive numerical elements. However, one number is missing. Please write a program to find the missing number without using any built-in functions.

Sample Test 1:

```python
Enter the list of numbers: 1, 2, 3, 4, 6, 7, 8
The missing number is 5.
```

Sample Test 2:

```python
Enter the list of numbers: 1,2, 4, 5,6, 7,8
The missing number is 3.
```

**Note:** Here's a useful hint for the map function and a tip for solving the problem.

**Map Function Usage:**

- The `map()` function in Python applies a given function to each item of an iterable (like a list) and returns a map object (which is an iterator). 

```python
string_numbers = ['1', '2', '3', '99', '101', '131']
int_numbers = list(map(int, string_numbers))
print(int_numbers)


# ---output---
[1, 2, 3, 99, 101, 131]
```



## Question 02: List Rotation

Prompt the user to input a specific series of numbers separated by commas. The last number represents the position to which the list will be left-rotated. All numbers before the last one are elements of the list. Do not use any built-in functions. 

Sample Test:

```python
Please enter a series of numbers separated by commas: 1, 2, 3, 4, 5, 2
List [1, 2, 3, 4, 5] After left-hand rotation [3, 4, 5, 1, 2]
```

**Note:** Here's a useful hint for the map function and a tip for solving the problem.

**Map Function Usage:**

- The `map()` function in Python applies a given function to each item of an iterable (like a list) and returns a map object (which is an iterator). 

```python
string_numbers = ['1', '2', '3', '99', '101', '131']
int_numbers = list(map(int, string_numbers))
print(int_numbers)


# ---output---
[1, 2, 3, 99, 101, 131]
```





## Question 03: Shallow Copy Verification

Demonstrate shallow copying of a list and show how it differs from a deep copy.



## Question 04: List to String Conversion

Obtain a user-input list and a specific delimiter, and concatenate the items in the user-input list into a string using the specified delimiter.

Sample Test 1:

```python
Please enter a list of elements, separated by commas: apple, banana, orange
Please enter the delimiter you wish to use: ;
apple; banana; orange
```

Sample Test 2:

```python
Please enter a list of elements, separated by commas: dog, cat, mouse
Please enter the delimiter you wish to use:  - 
dog -  cat -  mouse
```

Sample Test 3:

```python
Please enter a list of elements, separated by commas: Monday, Tuesday, Wednesday, Thursday, Friday
Please enter the delimiter you wish to use: , 
Monday,  Tuesday,  Wednesday,  Thursday,  Friday
```

Sample Test 4:

```python
Please enter a list of elements, separated by commas: 1, 2, 3, 4, 5
Please enter the delimiter you wish to use:  * 
1 *  2 *  3 *  4 *  5
```





## Question 05: List Symmetry Check

Check if a list is symmetric (the same forwards and backwards).

Sample Test 1:

```python
Enter a list of items separated by commas: 1, 2, 3, 2, 3
Is the entered list symmetric: False
```

Sample Test 2:

```python
Enter a list of items separated by commas: 1,2, 3, 2, 1
Is the entered list symmetric: True
```





## Question 06: List Element Swapping

Write a program to swap two elements in a list.

Receive user input, where the user inputs a series of numbers. The last two numbers are the indices to be swapped.

Sample Test 1:

```python
Enter list elements followed by two positions to swap, all separated by space: 1, 2, 3, 4, 5, 1, 3
List after swapping elements: ['1', '4', '3', '2', '5']
```

Sample Test 2:

```python
Enter list elements followed by two positions to swap, all separated by space: a,b, c, d, e , 0, 3
List after swapping elements: ['d', 'b', 'c', 'a', 'e']
```



































欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！

::: details 公众号：AI悦创【二维码】

![](/gzh.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](/zsxq.jpg)

