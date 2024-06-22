---
title: Postfix Calculator
icon: java
date: 2023-03-09 10:06:37
author: AI悦创
isOriginal: true
category: 
    - 1v1
    - java 1v1
    - 纽约大学一对一
    - NYU 1v1
    - web 一对一
    - 数据结构一对一
    - 留学生辅导
    - 留学生作业辅导
tag:
    - 1v1
    - java 1v1
    - 纽约大学一对一
    - NYU 1v1
    - web 一对一
    - 留学生辅导
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

## Postfix Calculator

> 后缀计算器

**Introduction**

> 简介

The purpose of this lab is to design a program to implement a calculator, but there is a difference this time around: the calculator will first perform an infix to postfix conversion and then evaluate the resulting postfix expression.

> 本实验的目的是设计一个实现计算器的程序，但这次有一个不同之处:计算器将首先执行中缀到后缀的转换，然后计算得到的后缀表达式。

You should implement the calculator in two parts:

> 你应该分两部分实现计算器:

A Converter class that will convert the input string to postfix expression. A Calculator class that will evaluate the postfix expression.

> 将输入字符串转换为后缀表达式的Converter类。计算后缀表达式的Calculator类。

Both the Converter and Calculator classes should use either the ArrayStack or the LinkedStack adapted from the book. You are not allowed to use any pre-built classes in the Java library (such as ArrayList or something else).

> 转换器和计算器类都应该使用 ArrayStack 或LinkedStack从书中改编。不允许使用Java库中的任何预构建类(例如ArrayList或其他)。

## Implementation and Design

> 实施及设计

The PostfixCalculator class

> PostfixCalculator类

You will need to do the following in your PostfixCalculator class:

> 你需要在你的PostfixCalculator类中做以下事情:

- The Calculator class will instantiate an object of the Converter class in order to have the infix expression converted to a postfix expression.「Calculator类将实例化Converter类的一个对象，以便将中缀表达式转换为后置表达式。」

- An additional operator, "`^`", will be added. Java has a built in exponent function: Math.pow(x, y). Use this to evaluate $x^y$.「将添加一个额外的操作符“`^`”。Java有一个内置的指数函数:Math。`pow(x, y)`用这个来求`x^y`的值。」
- An additional operator, "`^`", will be added. Java has a built in exponent function: `Math.pow(x, y)`. Use this to evaluate `x^y`.「一个额外的运算符 , "^",  将被添加。Java有一个内置的指数函数:Math。战俘(x, y)。用这个来求x`^`y。」
- Parentheses are legal in the infix expression (Note: the parentheses are needed in the infix expression. After your Converter class' algorithm converts the expression to postfix, it will no longer have parentheses because they are not necessary in postfix expressions.)「括号在中缀表达式中是合法的(注意:在中缀表达式中需要括号。在Converter类的算法将表达式转换为后缀后，它将不再有括号，因为括号在后缀表达式中是不必要的。)」





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