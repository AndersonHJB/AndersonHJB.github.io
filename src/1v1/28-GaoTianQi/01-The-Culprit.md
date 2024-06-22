---
title: The Culprit
date: 2023-03-09 16:20:57
author: AI悦创
isOriginal: true
category: 
    - 墨尔本大学CS
    - Python一对一辅导
    - unimelb
tag:
    - 墨尔本大学CS
    - Python一对一辅导
    - unimelb
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

## The Culprit

> 罪魁祸首

James Bond has captured 7 of his arch nemeses. He knows that one of them is the culprit behind the most dastardly plan in the universe, but is not sure which one. However, he has a trick up his sleeve. He knows that Hugo (one of the 7) is not very clever and also that Hugo knows who did it. So he will present Hugo with a list of names with some confusing information next to them, and then quickly ask him who did it. Hugo is smart enough not to say exactly who did it, but he will instead always say the name of the *preceding* person in the list, which will be numbered from 1 to 7 (with a response of 1 indicating that it is person 2, and 7 indicating that the culprit is person 1).

> 詹姆斯·邦德抓住了7个死对头。他知道他们中的一个人是宇宙中最卑鄙的计划背后的罪魁祸首，但不确定是哪一个。然而，他有一个诡计在他的袖子。他知道雨果(七人之一)不是很聪明，雨果也知道是谁干的。所以他会给雨果一份名单，旁边有一些令人困惑的信息，然后迅速问他是谁干的。Hugo很聪明，他不会说到底是谁干的，但他总是说名单中前一个人的名字，编号从1到7(响应1表示是第二个人，7表示罪犯是第一个人)。

Write a program that asks Hugo to give the number of the culprit, and returns the name of the person who did it along with the data associated with that individual (i.e. everything that comes after the name in the tuple). The list of possible culprits should be stored as a list of tuples, as below, where each tuple contains a name (a string) and a variable number of data points associated with that individual (each of which is a string). Assume the input is a positive integer. The data associated with the individual must be returned in the form of a tuple (possibly empty).

> 编写一个程序，要求Hugo给出罪犯的号码，并返回罪犯的姓名以及与此人相关的数据(即元组中名字后面的所有内容)。可能的罪魁祸首列表应该存储为一个元组列表，如下所示，其中每个元组包含一个名称(字符串)和与该个体相关的可变数量的数据点(每个数据点都是字符串)。假设输入是一个正整数。与个人相关的数据必须以元组(可能为空)的形式返回。

```python
[("Max Zorin", "Kills with guns", "Chip Tycoon"),
 ("Hugo Drax",),
 ("Jaws", "Bites people", "Mutant"),
 ("Nick Nack", "Really short"),
 ("Le Chiffre", "Good at poker", "Really evil"),
 ("Francisco Scaramanga", "Has a Golden Gun", "Probably will melt"),
 ("Mr Big", "Also the name of a rock band", "Dictator of San Monique")]
```

Your program should function as below:

> 你的程序应该如下所示:

```python
WHO DID IT HUGO!? 2
It was Jaws
Data: ('Bites people', 'Mutant')
```

```python
谁干的，雨果!?2
是《大白鲨》
数据:(“咬人”，“变种人”)
```

```python
WHO DID IT HUGO!? 7
It was Max Zorin
Data: ('Kills with guns', 'Chip Tycoon')
```

```python
谁干的，雨果!?7
是马克斯·佐林
数据:(《持枪杀人》、《芯片大亨》)
```

Avoid the temptation of using an `if` statement with six `elif` statements to solve this problem! That would be very inflexible and repetitive code. Make use of the list indexing and slicing we have just learned about.

> 避免使用if语句和六个elif语句来解决这个问题!这将是非常不灵活和重复的代码。利用我们刚刚学过的列表索引和切片。

## Zero offset and nested lists

> 零偏移量和嵌套列表

Remember that lists are indexed from 0. Also, you may find **nested** indexing useful here.

> 记住，列表是从0开始索引的。另外，你可能会发现这里的嵌套索引很有用。

```python
my_list = [(4, 8)]
print(my_list[0][0])
print(my_list[0][1])
```

## 答案

```python
suspects = [("Max Zorin", "Kills with guns", "Chip Tycoon"), ("Hugo Drax",), ("Jaws", "Bites people", "Mutant"),
            ("Nick Nack", "Really short"), ("Le Chiffre", "Good at poker", "Really evil"),
            ("Francisco Scaramanga", "Has a Golden Gun", "Probably will melt"),
            ("Mr Big", "Also the name of a rock band", "Dictator of San Monique")]

index = int(input('WHO DID IT HUGO!? '))

if index == 7:
    index = 0

target = suspects[index]
# print(target)
print(f"It was {target[0]}")
print(f"Data: {target[1:]}")
```

```python
suspects = [("Max Zorin", "Kills with guns", "Chip Tycoon"), ("Hugo Drax",), ("Jaws", "Bites people", "Mutant"),
            ("Nick Nack", "Really short"), ("Le Chiffre", "Good at poker", "Really evil"),
            ("Francisco Scaramanga", "Has a Golden Gun", "Probably will melt"),
            ("Mr Big", "Also the name of a rock band", "Dictator of San Monique")]

index = int(input('WHO DID IT HUGO!? '))

if index == 7:
    index = 0

target = suspects[index]
# print(target)
print(f"It was {target[0]}")
print(f"Data: {target[1:]}")

print("It was {}".format(target[0]))
print("Data: {}".format(target[1:]))

print("It was ", target[0])
print("Data: ", target[1:])

print("It was " + str(target[0]))
print("Data: " + str(target[1:]))
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
