---
title: CSCA20 - Lab 1
date: 2024-11-12 06:09:56
author: AI悦创
isOriginal: true
icon: blog
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
watermark: true
---

::: center

## CSCA20 - Lab 1

#### Input/Output and Variables

:::

## 1. Learning Objectives

This lab focuses on interacting with a user through **input** and **print** statements, and also manip-ulating and using variables, specifically numbers and strings.



## 2. Prelab

Hopefully by now, you are comfortable running python files at home and/or in the lab. But just to be sure, you should arrive at your lab with working code that asks a user for their name, and then greets them, as below:

```python
What is your name? Brian
Hello Brian
```

## 2. Demonstration & Evaluation

Successfully completing this lab will demonstrate mastery of: user input/output.

If you show up with your prelab done and work hard during the tutorial, you will be awarded with ’attempted’ on this skill. If you successfully demonstrate working code by the end of the tutorial, you will be awarded with ’practiced’. At the beginning of next week’s tutorial, there will be a quiz where you will be asked to modify your working solution to the lab (if you can’t get your solution working during the tutorial, you can continue to work throughout the week asking for help on Piazza). If you can successfully complete that quiz, you will be awarded with ‘modified’ for this skill.

This is our first chance to evaluate a skill, but it won’t be our last. If you can’t get your code working by the end of the lab, or you can’t write the quiz next week, Don’t panic. You will have multiple opportunities to demonstrate each level of each component (especially input/output, pretty much every lab from here on in allows you to demonstrate this one).

## 3. The Scenario

The Universal Tap-dancing School of Casablanca (UTSC) has asked you to build them a tool to help format their tap-dancing students scores in a way that is compatible with their record keeping system. Eventually, we’ll learn how to do this with files and loops... but for now, they just need a system that will prompt the user for the student’s name, student number, courses and grades, and then prints out a properly formatted student record with a grade average.

## 4. The Input

The system should ask for a student's given name first, then their family name (because that's the way most students will be addressed in person), then their student number, followed by a list of the 4 courses they took this semester. Then, for each of the courses, the system should ask the user for the grade the student got in that course. Because UTSC faculty aren’t always super smart, it’s important that each time we ask them for input, we remind them which course they’re inputting the grade for. (Reminder: the courses in the "Enter grade" prompts should match whatever the users entered in the "Enter course code" prompts).

So the prompts for input would look something like this (the parts after the semi-colons are user input).

```python
Enter student given name: Brian
Enter student family name: Harrington
Enter the student number for Brian Harrington: 12345
Enter course code #1: CSCA20
Enter course code #2: ENGA01
Enter course code #3: HISB02
Enter coures code #4: XYZC03
Enter grade for CSCA20: 99
Enter grade for ENGA01: 86
Enter grade for HISB02: 75
Enter grade for XYZC03: 58
```

## 5. The Output

After all the information is entered, your system should output the student record in the format:

```python
Family Name, Given Name, Student Number, Average
```

Where average is the average grade (add up the grades and divide by 4). So the output for the input above would be

```python
Harrington,Brian,12345,79.5
```

## 6. Hints

Here are a few hints that might help you with this assignment:

- Even though the student number is a number, do you ever need to store it as a number?The type of a variable isn’t about its meaning, it’s about what you plan to do with it.
- you’re going to need to store 2 names, 1 student number, 4 course codes and 4 averages, so start out by planning variables appropriately.
- When a user types input into the shell, python will assume it’s a string unless you specifically tell it otherwise.
- You aren’t responsible for your code working if the user doesn’t type sensible input, so if you ask for a grade and the user types “BAD”, your code is allowed to crash (for now).

## 7. Extra Practice

If you get this working and want to move beyond the basics, there are several things you can do:

- Think about your variables: there is a way to do this without actually storing 4 separate grade variables.

- Can you make it so that output is always formatted into neat columns that line up regardless of the number of letters in the person’s name? (you’ll need to look up the documentation for str).

- (once you’ve learned selection) come back to this and see if you can do some error checking: if the user inputs an invalid course code or grade, tell them

- (once you’ve learned loops + lists) ask the user how many courses the student took, ask them first and then prompt them for that many codes & marks.

    









::: details 公众号：AI悦创【二维码】

![](https://blog.images.bornforthis.cn/docs-images/sha256/77/77f67d48a67ec6a44a4ef1f01ffc85830eb3c121b1ece45dc5ada06e20e2f52b.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Web、Linux」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](https://blog.images.bornforthis.cn/docs-images/sha256/30/3087c629da73428daa0ee050f5b31709c30f650686164b54c724b892a422c585.jpg)

