---
title: Assignment2 Solution
icon: python
date: 2024-01-12 00:20:39
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

Solution 01:

```python
input_numbers = input('Enter the list of numbers:').replace(' ', '').split(",")
numbers = list(map(int, input_numbers))
max_number = len(numbers) + 1
expected_sum = max_number * (max_number + 1) // 2
missing_number = expected_sum - sum(numbers)
print(f'The missing number is {missing_number}.')
```



::: details ZH

获取用户输入，用户输入特定列表，这个列表是的元素数字且是连续的。但是其中会缺少一个数字，请编写一个程序，在不使用内置函数的情况下找出缺少的数字。

Sample Test 1:

```python
Enter the list of numbers: 1, 2, 3, 4, 6, 7, 8
The missing number is 5.
```

Sample Test 2:

```python
Enter the list of numbers: 1, 2, 4, 5, 6, 7, 8
The missing number is 3.
```

:::

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

::: details ZH

获取用户输入，用户输入特定的一系列数字以逗号分隔，最后一个数字代表将列表左旋到指定位置。最后一个数字之前的都是列表的元素，不使用任何内置函数。

:::

Solution 02:

```python
# 用户输入的数字序列
user_input = input('Please enter a series of numbers separated by commas:').replace(' ', '').split(',')
# 将字符串转换为整数列表
numbers_list = list(map(int, user_input))
# 从列表中提取旋转次数和剩余的数字
# *rotating_elements, rotation_count = numbers
rotating_elements, rotation_count = numbers_list[:-1], numbers_list[-1]
# 执行左旋转操作
rotated_list = rotating_elements[rotation_count:] + rotating_elements[:rotation_count]
# 输出结果
print(f"List {rotating_elements} after {rotation_count} left rotations: {rotated_list}")
```



## Question 03: Shallow Copy Verification

Demonstrate shallow copying of a list and show how it differs from a deep copy.



Solution 03:

```python
# Demonstrating shallow copying and deep copying in Python

# Original list
original_list = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

# Shallow copy of the list
shallow_copy = original_list.copy()

# Deep copy of the list
import copy
deep_copy = copy.deepcopy(original_list)

# Altering the original list to show the difference
original_list[0][0] = 'X'

# Displaying the original list, shallow copy, and deep copy to illustrate the differences
print("Original:", original_list)
print("Shallow Copy:", shallow_copy)
print("Deep Copy:", deep_copy)
```

To demonstrate the difference between shallow and deep copying, let's analyze the results after modifying the original list:

1. **Original List**: After modification, the original list becomes `[['X', 2, 3], [4, 5, 6], [7, 8, 9]]`. We changed the first element of the first sub-list from `1` to `'X'`.

2. **Shallow Copy**: The shallow copy also reflects this change, showing `[['X', 2, 3], [4, 5, 6], [7, 8, 9]]`. In a shallow copy, the nested lists are not copied, so when the nested lists in the original list are modified, the changes appear in the shallow copy as well.

3. **Deep Copy**: The deep copy remains unchanged, showing `[[1, 2, 3], [4, 5, 6], [7, 8, 9]]`. This is because a deep copy creates a new independent copy of the entire data structure, including all nested objects. Thus, changes in the original list do not affect the deep copy.

This comparison illustrates that a shallow copy only copies the outer list, while a deep copy copies both the outer list and all nested lists.





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

::: details zh

获取用户输入列表、和特定间隔符号，使用户输入的列表以特定间隔组成字符串。

:::

```python
# Prompt the user to enter a list of elements, assuming they are separated by commas
elements_input = input("Please enter a list of elements, separated by commas: ")

# Prompt for the delimiter the user wants to use
delimiter = input("Please enter the delimiter you wish to use: ")

# Split the input string into a list based on commas
elements_list = elements_input.split(',')

# Join the elements of the list into a string, using the specified delimiter
custom_string = delimiter.join(elements_list)

# Print the resulting string
print(custom_string)
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



Solution 05:

```python
# Get user input
user_input = input("Enter a list of items separated by commas: ").replace(' ', '')

# Convert the input string to a list
# The elements will remain as string type
lst = user_input.split(',')

# Check if the list is symmetric
is_symmetric = lst == lst[::-1]

print(f"Is the entered list symmetric: {is_symmetric}")
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



::: details zh

获取用户输入，用户输入一系列数字，倒数第一和第二是待交换的下标。

::: 

```python
# 用户在一行内输入列表和两个交换位置，用空格分隔
input_data = input("Enter list elements followed by two positions to swap, all separated by space: ").replace(' ', '')

# 解析输入数据
parts = input_data.split(',')
lst = parts[:-2]
pos1 = int(parts[-2])
pos2 = int(parts[-1])

# 执行交换
lst[pos1], lst[pos2] = lst[pos2], lst[pos1]

# 打印结果
print("List after swapping elements:", lst)
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

