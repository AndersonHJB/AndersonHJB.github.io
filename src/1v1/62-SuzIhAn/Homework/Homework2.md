---
title: Homework 2
icon: python
date: 2023-10-28 23:48:07
author: AI悦创
isOriginal: true
category: 
    - 1v1
    - python 1v1
    - 数据结构一对一
    - 留学生辅导
    - 留学生作业辅导
tag:
    - northeastern一对一辅导
    - 东北大学Python辅导
    - 东北大学Python一对一辅导
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

## Heart Health

Your *heart-rate* is defined as the number of contractions (i.e. beats) of your heart per minute. (A good place to feel your heart beat is on your neck right under the corner of your jaw. If you press two fingers there, and count the number of beats in a single minute, this gives you an estimate for your heart rate).

Your *resting heart rate* is your heart rate when you have been resting -- i.e., sitting or lying for at least 20 minutes.

Your *maximum heart rate* is the highest heart rate you can achieve without hurting yourself! One way to find your maximum heart rate is through exercise. For our purposes though, we'll just define the maximum heart rate as

max_heart_rate = 208 - 0.7 * age

which is an equation commonly used in medicine.

When you work out, your heart rate falls within different *training zones*. You can think of these training zones as a percentage of your maximum heart rate. Thus, 100% means you're exercising as hard as you can!

- **Zone 1 (from 50% to just under 60%):** This zone should feel super easy -- almost like you didn't work out at all.
- **Zone 2 (from 60% to just under 70%):** This is the "average effort" level where it is still possible to hold a conversation.
- **Zone 3 (from 70% to just under 80%):** This is the "above average effort" level where you can only talk in one- or two- word answers.
- **Zone 4 (from 80% to just under 93%):** This is the "hard effort" level. Your breathing is labored, your arms and legs feel heavy, and you can't sustain the pace for much more than an hour (at best).
- **Zone 5 (from 93% to 100%):** This is the "all out" level. You can sustain this pace for a few seconds to maybe five minutes.

The great thing about training zones is you can use them to help plan your work out. Let's say your goal is to maintain good heart health. Then, ideally, you'd want to spend most of your workout within zone 2. So the question is, what range of heart rates corresponds to zone 2? The purpose of this assignment is to answer this question.

## Project Description

This assignment asks you to create a Python program that takes a users age and resting heart rate, and computes the range of heart rates that correspond to each of the zones above.

There are three steps in order to compute the range of heart rates for each zone:

1. Compute the maximum heart rate using the equation given above.
2. Subtract the resting heart rate from the maximum heart rate. This is called your heart rate *reserve*.
3. Multiply your reserve by the corresponding percentage and then add this to your resting heart rate: rest_heart_rate + reserve * X%

For example, suppose you are 20 years old and your resting heart rate is 70 beats per minute. Here are the three steps you would go through to figure out the range of heart rates for zone 2:

- Your maximum heart rate is 208-0.7 * 20 = 194 bpm.
- Your reserve is 194 - 70 = 124 bpm
- At 60%, your heart rate should be 70 + 124 * 0.6 = 144 bpm. At 70%, your heart rate should be 70 + 124 * 0.7 = 156 bpm.

Thus, if you want to work out at zone 2, your heart rate should be between 144 and 156 bpm.

## Getting Started

Create your `hw02` directory inside `cs5001` and download the [starter code for this assignmentLinks to an external site.](https://course.ccs.neu.edu/cs5001f20-sea/secure/training_zones_starter.py) into that directory (to download the .py file, you can right-click the link and choose 'save' in your browser).

1. Open the starter file in your editor. There is already code in this class for reading the age and resting heart rate from the keyboard. All the code for this program will be contained in the `main` function.
2. Finish writing the `main` function. In particular, given a user's age and resting heart rate, compute the range of heart rates that corresponds to each zone. Your output should display zones to no more than 2 decimal places (see the notes below for how to do that). Here is an example of what your program should produce:

```python
 tmullen$ python training_zones.py
 Please enter your age: 47
 Please enter your resting heart rate: 67
 =======================================
 Your heart rate reserve is: 108.1 bpm
 Here is a breakdown of your training zones:
 Zone 1: 121.05 to 131.85 bpm
 Zone 2: 131.86 to 142.66 bpm
 Zone 3: 142.67 to 153.47 bpm
 Zone 4: 153.48 to 167.52 bpm
 Zone 5: 167.53 to 175.1 bpm
```

**Notes:**

- When you first open the starter code, your editor may give you some warnings about the `age` and `restHR` variables. Read those warnings so you know why the editor is concerned, but don't worry about them.
- You can round a floating point number to a fixed number of decimal places by using the built-in `round` function. The first argument of the function is the number you want to round, and the second argument is the number of decimal places. So, for example `round(3.14159265359, 2)` will output the value `3.14`.
- The zones are measured to two decimal places. The lowest value for a given zone should be 0.01 greater than the highest value for the previous zone.

## Submitting

Submit your code as `training_zones.py` on Canvas.

## Style Guide

You will not be graded on style at this point in the course, but it's good to start thinking about it.

Please familiarize yourself with the [PEP 8 Python Style guideLinks to an external site.](https://www.python.org/dev/peps/pep-0008/#a-foolish-consistency-is-the-hobgoblin-of-little-minds). These are excellent tips for writing clear Python code and you should follow this style.

Before you submit your assignment, go through the checklist below and make sure your code conforms to the style guide.

- No unused variables or commented-out code is left in the class
- Your code has explanatory comments in places where they are appropriate
- All numbers have been replaced with constants (i.e. no "magic numbers").
- Proper capitalization of any names used: snake_case for ordinary variables and functions, CapWords for class names, and ALL_CAPS for constants
- Use white space to separate different sections of your code in a way that makes the code clear and readable



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

