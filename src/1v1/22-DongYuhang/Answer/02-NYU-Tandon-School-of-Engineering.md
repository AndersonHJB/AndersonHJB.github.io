---
title: 02-CS-NYU HomeWork01-Answer
date: 2023-02-04 09:27:56
author: AI悦创
isOriginal: true
category:
    - Python
    - Python一对一教学
    - Python一对一辅导
    - Python 辅导
    - 编程一对一教学
    - 少儿编程一对一
    - NYU编程辅导
    - NYU Python辅导
tag:
    - Python
    - Python一对一教学
    - Python一对一辅导
    - Python 辅导
    - 编程一对一教学
    - 少儿编程一对一
    - NYU编程辅导
    - NYU Python辅导
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
backToTop: true
toc: true
---

- [krowemoH01](/1v1/22-DongYuhang/hw/README.pdf)

## CS-UY 1114 Spring 2023 

> CS-UY 1114 2023年春季

Due: 1159pm, Thursday, February 9th, 2023 

> 截止时间:2023年2月9日星期四晚上11点至59分

## Submission instructions 

> 提交说明

1. You should submit your homework on Gradescope. 

> 你应该在 Gradescope 上提交作业。

For this assignment you should turn in 4 separate `.py` files named according to the following pattern: `hw1_q1.py`, `hw1_q2.py`, etc.

> 在这个分配中，你应该提交4个独立的“。py”文件，命名模式如下:“hw1_q1.py”，“hw1_q2.py”，等等。

3. Each Python file you submit should contain a header comment block as follows:

> 你提交的每个Python文件都应该包含一个头注释块，如下所示:

```python
"""
Author: [Your name here]
Assignment / Part: HW1 - Q1 (etc.)
Date due: 2023-02-09, 11:59pm
I pledge that I have completed this assignment without
collaborating with anyone else, in conformance with the
NYU School of Engineering Policies and Procedures on
Academic Misconduct.
"""
```

**No late submissions will be accepted.**

> 逾期提交的资料恕不受理。

REMINDER: Do not use any Python structures that we have not learned in class. 

> 提醒:不要使用任何我们在课堂上没有学过的Python结构。

For this specific assignment, you may use everything we have learned up to, and including, variables, types, mathematical and boolean expressions, user IO (i.e. `print()` and `input()`), number systems, and the `math` / `random` modules. Please reach out to us if you're at all unsure about any instruction or whether a Python structure is or is not allowed.

> 对于这个特定的作业，你可以使用我们学过的所有东西，包括变量，类型，数学和布尔表达式，用户IO(即。' print() '和' input() ')，数字系统，以及' math ' / ' random '模块。如果您不确定任何指令或Python结构是否被允许，请与我们联系。

Do not use, for example, selection statements (i.e. `if`, `elif`, `else`), `for`- and `while`-loops, modules, user- defined functions (except for `main()` if your instructor has covered it during lecture), strings and string methods, file `i/o`, exception handling, dictionaries, lists, tuples, `and/or` object-oriented programming. 

> 不要使用，例如，选择语句(即。' if '， ' elif '， ' else ')， ' for ' -和' while ' -循环，模块，用户定义函数(' main() '除外，如果你的讲师在课堂上讲过的话)，字符串和字符串方法，文件' i/o '，异常处理，字典，列表，元组，'和/或'面向对象编程。

Failure to abide by any of these instructions will make your submission subject to point deductions. 

> 如不遵守上述任何一项规定，您的投稿将被扣分。

## Question 01: Hello, You!

> 问题01:你好，你!

Write a program that asks for the userʼs name, their age and prints a personalized welcome message for them. 

> 编写一个程序，询问用户的姓名、年龄，并为他们打印个性化的欢迎信息。

For example, an execution could look like this:

> 例如，执行可以是这样的:

```python
Please enter your name: Aika
Please enter your age: 29
Aika, 29, is taking CS-UY 1114.
```

The format of your output need not look exactly the same as ours, but it must still ask the user for their name and age, and print them out as part of some sort of sentence. 

> 输出的格式不必与我们的完全相同，但它仍然必须询问用户的姓名和年龄，并将它们作为某种句子的一部分打印出来。

## Answer 01

```python
"""
Author: AiYueChuang
Assignment / Part: HW1 - Q1 (etc.)
Date due: 2023-02-09, 11:59pm
I pledge that I have completed this assignment without
collaborating with anyone else, in conformance with the
NYU School of Engineering Policies and Procedures on
Academic Misconduct.
"""
username = input("Please enter your name:")
age = input("Please enter your age:")
# output = f"{username}, {29}, is taking CS-UY 1114"
output = username + ", " + "age" + "," + " is taking CS-UY 1114"
print(output)
```



## Question 02: Some Have Gone and Some Remain

> 问题02:有些人走了，有些人留了

(Textbook P84, Q4): The U.S. Census provides information on its web page about the current U.S. population as well as approximate rates of change. Four rates of change are provided: 

> (教科书P84, Q4):美国人口普查在其网页上提供了有关当前美国人口的信息以及大约的变化率。提供了四种变化率:

- There is a birth every 7 seconds.

> 每7秒就有一个新生儿。

- There is a death every 15 seconds. 

> 每15秒就有一人死亡。

- There is a new immigrant every 42 seconds. 

> 每42秒就有一个新移民。

- There is a new emigration (i.e. somebody moves out of the country) every 1.25 minutes. 

> 每1.25分钟就有一个新的移民(即有人离开这个国家)。

These are, naturally, approximations of birth, death, and immigration rates, but they can assist in providing population estimates in the near term. 

> 这些自然是出生、死亡和移民率的近似值，但它们可以帮助提供近期的人口估计。

Write a program that takes a year as input (an integer—you may assume that this will value will always be greater than or equal to `2023`) and prints out an estimated population (as an integer). Assume that the current population is 330,109,174, and assume that there are always exactly 365 days in a year. 

> 编写一个程序，将一年作为输入(一个整数—您可以假设这个值总是大于或等于2023)，并打印出估计的人口(一个整数)。假设当前人口为330,109,174，并假设一年总是恰好有365天。

Sample execution:

```python
Please enter a year greater than 2023:
2042
The population in year 2042 will be 382038453
```

The format of your output need not look exactly the same as ours, but it must still ask the user to enter an integer representing a year, and it must always output the estimated population of that year. 

> 输出的格式不必与我们的完全相同，但它仍然必须要求用户输入一个表示年份的整数，并且它必须始终输出该年的估计人口。

## Answer 02

::: tabs

@tab 取整

```python
"""
Author: [AiYueChuang]
Assignment / Part: HW1 - Q2 (etc.)
Date due: 2023-02-09, 11:59pm
I pledge that I have completed this assignment without
collaborating with anyone else, in conformance with the
NYU School of Engineering Policies and Procedures on
Academic Misconduct.
"""
year_days = 365
year_to_second = year_days * 24 * 60 * 60
year_to_min = year_days * 24 * 60
new_birth = year_to_second // 7
death = year_to_second // 15
immigrant = year_to_second // 42
emigrant = year_to_min // 1.25
user_year = input("Please enter a year greater than 2023:")
# print(new_birth)
total = 330109174 + ((int(user_year) - 2023) * (new_birth - death + immigrant - emigrant))
print("The population in year " + user_year + " will be " + str(total))
# print(year_to_second)
```

@tab math.ceil

```python
"""
Author: [AiYueChuang]
Assignment / Part: HW1 - Q2 (etc.)
Date due: 2023-02-09, 11:59pm
I pledge that I have completed this assignment without
collaborating with anyone else, in conformance with the
NYU School of Engineering Policies and Procedures on
Academic Misconduct.
"""
import math
year_days = 365
year_to_second = year_days * 24 * 60 * 60
year_to_min = year_days * 24 * 60
new_birth = math.ceil(year_to_second / 7)
death = math.ceil(year_to_second // 15)
immigrant = math.ceil(year_to_second // 42)
emigrant = math.ceil(year_to_min // 1.25)
user_year = input("Please enter a year greater than 2023:")
# print(new_birth)
total = 330109174 + ((int(user_year) - 2023) * (new_birth - death + immigrant - emigrant))
print("The population in year " + user_year + " will be " + str(total))
print(year_to_second)
```

@tab round() 四舍五入

```python
"""
Author: [AiYueChuang]
Assignment / Part: HW1 - Q2 (etc.)
Date due: 2023-02-09, 11:59pm
I pledge that I have completed this assignment without
collaborating with anyone else, in conformance with the
NYU School of Engineering Policies and Procedures on
Academic Misconduct.
"""
year_days = 365
year_to_second = year_days * 24 * 60 * 60
year_to_min = year_days * 24 * 60
new_birth = round(year_to_second / 7)
death = round(year_to_second // 15)
immigrant = round(year_to_second // 42)
emigrant = round(year_to_min // 1.25)
user_year = input("Please enter a year greater than 2023:")
# print(new_birth)
total = 330109174 + ((int(user_year) - 2023) * (new_birth - death + immigrant - emigrant))
print("The population in year " + user_year + " will be " + str(total))
```

:::

## Question 03: Penny Pinching

> 问题03:精打细算

Write a program that asks the user to enter a number of quarters, dimes, nickels and pennies and then outputs the monetary value of the coins in the format of dollars and remaining cents. 

> 编写一个程序，要求用户输入25美分、10美分、5美分和1美分的数字，然后以美元和剩余美分的格式输出这些硬币的货币价值。

Your program should interact with the user, and output its results, `exactly` as it is shown in the following example:

> 你的程序应该与用户交互，并输出结果，正如下面的例子所示:

```python
Please enter number of coins:
Number of quarters: 13
Number of dimes: 4
Number of nickels: 11
Number of pennies: 17
The total is 4 dollar(s) and 37 cent(s)
```

## Answer 3

```python
# 1美元 = 100美分
print("Please enter number of coins:")
quarters = float(input("Number of quarters:")) * 0.25
dimes = float(input("Number of dimes:")) * 0.10
nickels = float(input("Number of nickels:")) * 0.05
pennies = float(input("Number of pennies:")) * 0.01

# print(quarters, dimes, nickels, pennies)
total = pennies + nickels + dimes + quarters
dollar, cent = str(total).split(".")

print("The total is " + str(dollar) + " dollar(s) and " + str(cent) + " cent(s)")
```



## Question 04: Mad as a Hatter, Thin as a Dime

> 问题04:疯狂如帽匠，瘦如硬币

Write a program that asks the user to enter an amount of money in the format of dollars and remaining cents. The program should calculate and print the minimum number of coins (quarters, dimes, nickels and pennies) that are equivalent to the amount input by the user.

> 编写一个程序，要求用户以美元和剩余美分的格式输入一笔钱。该程序应计算并打印与用户输入的金额相等的最小硬币数量(25美分，10美分，5美分和便士)。

Your program should interact with the user, and display its results, **exactly** as it shows in the following example:

```python
Please enter your amount of dollars and cents, in two separate lines.
4
37
4 dollars and 37 cents are: 17 quarters, 1 dimes, 0 nickels and 2 pennies
```

**Hint**: In order to find the minimum number of coins, first find the maximum number of quarters that fit within the amount of money input by the user, then find the maximum number of dimes that fit in the remaining amount, and so on.

> **提示**:为了找到最小的硬币数量，首先找到用户输入的金钱数量中适合的最大25美分数量，然后找到适合剩余金额的最大10美分数量，以此类推。

## Answer 4

```python
# Get user input
print("Please enter your amount of dollars and cents, in two separate lines.")
dollars = int(input())
cents = int(input())

# Convert dollars to cents
total_cents = dollars * 100 + cents

# Calculate number of coins
quarters = total_cents // 25
total_cents = total_cents % 25

dimes = total_cents // 10
total_cents = total_cents % 10

nickels = total_cents // 5
total_cents = total_cents % 5

pennies = total_cents

# Print results
# print("Quarters:", quarters)
# print("Dimes:", dimes)
# print("Nickels:", nickels)
# print("Pennies:", pennies)
print(str(dollars) + " dollars and " + str(cents) + " cents are: " + str(quarters) + " quarters, " + str(dimes) + " dimes, " + str(nickels) + " nickels and " + str(pennies) + " pennies")
```

```python
print("Please enter your amount of dollars and cents, in two separate lines.")
dollars = int(input())
cents = int(input())

sum_cents = dollars * 100 + cents

quarters = sum_cents // 25
sum_cents %= 25

dimes = sum_cents // 10
sum_cents %= 10

nickels = sum_cents // 5
pennies = sum_cents % 5

print(str(dollars) + " dollars and " + str(cents) + " cents are: " + str(quarters) + " quarters, " + str(dimes) + " dimes, " + str(nickels) + " nickels and " + str(pennies) + " pennies")
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
