---
title: Assignment1
icon: python
date: 2023-04-02 20:48:25
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
editLink: false
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

## Question 01: Hello,You!

Write a program that asks for the user's name, their age and prints a personalized welcome message for them.

For example, an execution could look like this:

```python
Please enter your name: Aika
Please enter your age: 29
Aika, 29, is taking CS-UY 1114.
```

The format of your output need not look exactly the same as ours, but it must still ask the user for their name and age, and print them out as part of some sort of sentence.

## Question 02: Some Have Gone and Some Remain

The U.S. Census provides information on its [web page Census.gov](https://www.census.gov/) about the current U.S. population as well as approximate rates of change. Four rates of change are provided:
- There is a birth every 7 seconds.
- There is a death every 15 seconds.
- There is a new immigrant every 42 seconds.
- There is a new emigration (i.e. somebody moves out of the country) every 1.25 minutes.

These are, naturally, approximations of birth, death, and immigration rates, but they can assist in providing population estimates in the near term.

Write a program that takes a year as input (an integer—you may assume that this will value will always be greater than or equal to 2023) and prints out an estimated population (as an integer). Assume that the current population is 330,109,174, and assume that there are always exactly 365 days in a year.

Sample execution:

```text
Please enter a year greater than 2023:
2042
The population in year 2042 will be 382038453
```

The format of your output need not look exactly the same as ours, but it must still ask the user to enter an integer representing a year, and it must always output the estimated population of that year.

## Question 03: Penny Pinching

Write a program that asks the user to enter a number of quarters, dimes, nickels and pennies and then outputs the monetary value of the coins in the format of dollars and remaining cents.

Your program should interact with the user, and output its results, **exactly** as it is shown in the following example:

```text
Please enter number of coins:
Number of quarters: 13
Number of dimes: 4
Number of nickels: 11
Number of pennies: 17
The total is 4 dollar(s) and 37 cent(s)
```

## Question 04: Mad as a Hatter, Thin as a Dime

Write a program that asks the user to enter an amount of money in the format of dollars and remaining cents. The program should calculate and print the minimum number of coins (quarters, dimes, nickels and pennies) that are equivalent to the amount input by the user.

Your program should interact with the user, and display its results, **exactly** as it shows in the following example:

```text
Please enter your amount of dollars and cents, in two separate lines.
4
37
4 dollars and 37 cents are: 17 quarters, 1 dimes, 0 nickels and 2 pennies
```

**Hint**: In order to find the minimum number of coins, first find the maximum number of quarters that fit within the amount of money input by the user, then find the maximum number of dimes that fit in the remaining amount, and so on.

## Question 05: BMI Calculator

Body mass index (BMI) is a number calculated from a person’s weight and height. The BMI is a convenient rule of thumb used to broadly categorize the weight of a person based on tissue mass (muscle, body fat, and bone) and height (although it's really rather unreliable otherwise). The formula for BMI is the following:

::: tip BMI calculation formula 

BMI = weight / height - squared

:::

### PART A:

Write a program that prompts for metric weight and height and outputs the BMI. For example, an execution could look like this:

```text
Please enter weight in kilograms: 50
Please enter height in meters: 1.58
BMI is: 20.0288415
```

### PART B:

Write a program that prompts for weight in pounds and height in inches, converts the values to metric, and then calculates the BMI.

**Note**: 1 pound is equal to 0.453592 kilograms and 1 inch is equal to 0.0254 meters.

For example, an execution could look like this:

```text
Please enter weight in pounds: 135
Please enter height in inches: 71
BMI is: 18.82849431
```

Both part A and part B must be written in two separate py files.

## Question 06: Don't Believe The Gacha

In certain video games, you can spend either in-game currency or real money to get a series of often-random items to "improve" your gameplay experience. These mechanics are commonly referred to as **[gacha](https://en.wikipedia.org/wiki/Gacha_game)**, or **[loot boxes](https://en.wikipedia.org/wiki/Loot_box)**, and are some of the most **[controversial](https://www.theverge.com/2019/2/19/18226852/loot-boxes-gaming-regulation-gambling-free-to-play)** topics in video game development.

Let's pretend that the chances of getting a rare item in a video game are from **0% to 100%**, and our video game has a player start at level 1 and end at level 5 . At level 1 , the player has an **100%** chance of getting a rare item. At level 2 the player has an **80%** chance of getting a rare item. At level 3 , **60%**. At level 4 , **40%**, and at level 5 , only **20%**.

Write a program that asks the user for their current level in the video game, determines whether they have received a rare item in a loot box, and lets them know in a message.

```text
What is your level? 1
Your loot box contains a rare item: True

What is your level? 2
Your loot box contains a rare item: False

What is your level? 3
Your loot box contains a rare item: True

What is your level? 4
Your loot box contains a rare item: False

What is your level? 5
Your loot box contains a rare item: False
```

**Note**: random

```python
random_num = random(1, 100)
```



## Question 07: Collective Timetables

Suppose Semi and Ollie worked for some time, and we want to calculate the total time both of them worked.

Write a program that reads a number of days, hours, and minutes minutes each of them worked,and prints the total time both of them worked together as days, hours, and minutes.

For example, an execution could look like this:

```text
Please enter the number of days Semi has worked: 2
Please enter the number of hours Semi has worked: 12
Please enter the number of minutes Semi has worked: 15
Please enter the number of days Ollie has worked: 3
Please enter the number of hours Ollie has worked: 15
Please enter the number of minutes Ollie has worked: 20
The total time both of them worked together is: 6 days, 3 hours and 35 minutes.
```

**Note**: There are 24 hours in a day and 60 minutes in an hour.







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

