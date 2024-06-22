---
title: 7.6.1 Basic Data Structures Quiz
icon: python
date: 2023-10-08 23:34:57
author: AI悦创
isOriginal: true
category: 
    - 1v1
    - java 1v1
    - 高中生Python辅导
    - web 一对一
    - 数据结构一对一
    - 留学生辅导
    - creanlutheran.org
    - 留学生作业辅导
tag:
    - 1v1
    - java 1v1
    - 高中生Python辅导
    - web 一对一
    - 数据结构一对一
    - 留学生辅导
    - creanlutheran.org
    - 留学生作业辅导
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

## Question: 1

What kind of data structure is `user_data` in the following declaration?

```python
user_data = ("TJ", 24, "artLover123")
```

A. Tuple

B. List

C. String

D. 2d List

## Question: 2

What kind of data structure is `user_data` in the following declaration?

```python
user_data = ["TJ", 24, "artLover123"]
```

A. Tuple

B. List

C. String

D. 2d List

## Question: 3

Which of the following lines of code will cause an error?

Use the following definition of `ages`:

```python
ages = (12, 5, 8)
```

A. `ages = ages +  (1, 3, 5)`

B. `print (ages[2])`

C. `ages = ages[2:]`

D. `ages[0] = 3`



## Question: 4

What does this code snippet print?

```python
fruit = ["b", "n", "n"]
print ("a".join(fruit))
```

A. bnn

B. ba na na

C. banan

D. banana

## Question: 5

What is the value of `num` after this code runs?

```python
shapes = ["triangle", "square", "hexagon", "circle", "pentagon"]
num = len(shapes)
```

A. 0

B. 4

C. 5

D. 35

## Question: 6

What does this program print?

```python
sentence = "My favorite animal is a dog or chipmunk"
sentence_list = sentence.split()
sentence_list[-3] = "penguin"
sentence = " ".join(sentence_list)
print (sentence)
```

A. My favorite animal is a dog or penguin

B. My favorite animal is a penguin or chipmunk

C. My favorite animal is a dog penguin chipmunk

D. My favorite animal is a dog or chipmunk

## Question: 7

Which of the following data structures is immutable?

A. Tuple

B. List

C. Dictionary

D. 2d List

## Question: 8

What does this program print?

```python
heights = [65, 56, 67, 48, 64]
heights.sort()
heights.extend([60, 61, 62])
heights.remove(67)
print (heights)
```

A. `[48, 56, 64, 65, [60, 61, 62]]`

B. `[48, 56, 60, 61, 62, 64, 65]`

C. `[48, 56, 64, 65, 60, 61, 62]`

D. The program will error.



## Question: 9

How many times does this program print `That's a large class!`?

```python
num_students = [23, 21, 33, 35, 24, 35]

for num in num_students:
    if num > 23:
        print ("That's a large class!")
```

A. 0

B. 1

C. 4

D. 6

## Question: 10

What would the following program print to the screen when run?

```python
my_list = [7, 0, 0, "d", "n", "o", "B"]

my_list.reverse()

for thing in my_list:
    print (thing)
```



## Question: 11

Given the following list:

`my_list = ["s", "Z", "e", "c", "c", "e", "r", "h", "e", "p", "t"]`

which program below would give the following output:

```python
s
e
c
r
e
t
```

A. 

```python
for index in my_list:
    if index % 2 == 0:
        print (my_list[index])
```

B. 

```python
for index in range(my_list):
    if index % 2 == 0:
        print (my_list[index])
```

C. 

```python
for index in len(my_list):
    if index % 2 == 0:
        print (my_list[index])
```

D. 

```python
for index in range(len(my_list)):
    if index % 2 == 0:
        print (my_list[index])
```

## Question: 12

Which values entered into ‘my_list’ would print a value of ‘-1’ after the program has run?

```python
my_list = [...]
num = 0

for thing in my_list:
    num = num - thing

print (num)
```

A. 5, -10, 6

B. -10, -5, 6

C. -5, 10, 6

D. -5, 0, 10, 6

## Question: 13

Which of the following programs would produce the following output:

```python
1. honey
2. bread
3. jelly
4. plates
```

A.

```python
my_list = ["honey", "bread", "jelly", "plates"]

for index in range(len(my_list)):
    print (str(index) + ". " + my_list)
```

B. 

```python
my_list = ["honey", "bread", "jelly", "plates"]

for index in range(len(my_list)):
    print (str(index+1) + ". " + my_list[index])
```

C. 

```python
my_list = ["honey", "bread", "jelly", "plates"]

for index in my_list:
    print (str(index+1) + ". " + my_list[index])
```

D. 

```python
my_list = ["honey", "bread", "jelly", "plates"]

for index in len(my_list):
    print (str(index) + ". " + my_list[index])
```

## Question: 14

Which of the following programs would alter `my_list` to consist of the following:

```python
[‘red’, ‘green’, ‘blue’, ‘orange’, ‘yellow’]
```

A. 

```python
my_list = ['red', 'green', 'blue', 'orange']

my_list.append('yellow')
```

B. 

```python
my_list = ['red', 'green', 'blue', 'orange']

my_list.extend('yellow')
```

C. 

```python
my_list = ['red', 'green', 'blue', 'orange']

my_list.replace('yellow')
```

D. 

```python
my_list = ['red', 'green', 'blue', 'orange']

my_list.add('yellow')
```

## Question: 15

What will be the output of the following program?

```python
my_list = [1, 2, 3, 4]
num = 5

for index in range(len(my_list)):
    my_list.append(num + index)

print (my_list)
```

A. `[1, 2, 3, 4, 5, 5, 5, 5]`

B. `[1, 2, 3, 4, 5]`

C. `[1, 2, 3, 4, 6, 7, 8, 9]`

D. `[1, 2, 3, 4, 5, 6, 7, 8]`



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
