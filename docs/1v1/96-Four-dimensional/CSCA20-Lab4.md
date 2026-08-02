---
title: CSCA20 - Lab 4
date: 2024-11-20 22:17:33
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

## CSCA20 - Lab 4

#### Loops & Lists

:::

## 1. Learning Objectives

This lab focuses on looping and lists, and in particular getting comfortable with the 3 types of loops (elemental for, counted for, and while loops)

## 2. Prelab

We’ve provided you with some starter code that prints a menu and asks the user to choose an option. Before your tutorial, you should get this code running, and try to implement the at least the add data, and end program options. For the other options, just have it print something like: 

```python
Get Overload Days Here
```

## 3. Demonstration & Evaluation

This lab allows the demonstration of User Input/Output, Lists, and Selection.

## 4. The Scenario

The Union for Tracking Seaborn Contaminants (UTSC) has asked you to build a tool to track the number of kilograms of plastic their ocean cleanup rigs clean on a daily basis[^1]. They want to be able to add the kilograms cleaned each day, calculate the total amount removed over certain time periods, and the number of days that their rigs were pushed beyond their approved limits by collecting too much plastic.

## 5. Menu

The starter code presents a simple menu that gives the user options for entering data, retrieving information, or quitting.

If the user enters any other letter, the code should say **invalid input: please try again and present the menu again.**

## 6. Adding Data

Your code should prompt the user with the date and ask for input. e.g., **Enter kg of plastic removed on day 17:**



## 7. Calculating Totals

Your code should prompt the user to select $A$ for the total removed in all days entered, or $R$ for the total removed in a range of days. If the user chooses $R$, they should then be prompted for the start and end dates of that range. The user should then be presented with the total kg removed during the specified time.



## 8. Calculating Overload Days

Your code should prompt the user to select A for all overload days, or R for overload days within a range of days. Then the user should be prompted for the threshold (max kg rigs are meant to collect) and then be presented with the total number of days where the collected amount exceeded the threshold during the specified time.

## 9. Hints

Here are a few hints that might help you with this assignment:

- Break the problem down: don’t worry about calculating totals while you’re worried about getting user input. Do all the user input parts first and just leave a comment saying `#calculate total here or #calculate overload days here`, and come back to those separately
- Use comments: this is a big lab, it can be easy to get lost. Plan out your code with comments first, and make sure you use your comments to remind yourself what you’re doing where.
- Think about your if statements: you can do this just using lots of ifs, but your life will be easier if you set up appropriate if/elif/else structures

## 10. Extra Practice

If you finish early and want to practice more, here are a few things you can try:

- Completing the mastery portion isn’t a lot of work, but it is time consuming. Making idiot proof code is difficult, because there are a lot of very resourceful idiots out there.
- Try to add additional options such as retrieving the maximum or minimum amount of plastic removed in a given date range.
- Try to improve the user input experience, so that the user can enter several days at once (e.g., “enter plastic for next day or ‘E’ to exit”)







[^1]: This is a real project... just not the real name for it, check out [https://theoceancleanup.com/oceans/](https://theoceancleanup.com/oceans/) for more info.





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
