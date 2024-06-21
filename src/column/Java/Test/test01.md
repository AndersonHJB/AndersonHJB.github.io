---
title: 01-Java 数据类型转换
date: 2023-08-10 11:22:10
icon: java
author: AI悦创
isOriginal: true
category: 
    - Java Quiz
tag:
    - Java Quiz
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

## Question 1: 烹饪配料转换

::: tabs

@tab 涉及 Scanner

假设你正在烹饪一款菜，菜谱上的配料量都是以克为单位，但你的秤只能测量千克。你要写一个 Java 程序，接受用户输入的千克数（浮点数），然后将其转换为克（整数）。注意，我们要把千克中的小数部分转换成克，并且如果小数部分大于等于 0.5，就应该向上取整。

@tab 不涉及 Scanner

你正在烹饪一款菜，菜谱上的配料量都是以克为单位。现在，你有一个精确到千克的秤，假设你测量出的重量为2.5千克。编写一个Java函数，将这个浮点数转换为以克为单位的整数。如果千克的小数部分大于等于0.5，则向上取整。

```java
double weightInKg = 2.5;
// 将 weightInKg 转换为以克为单位的整数
```

:::





## Question 2: char 与 int 的转换「字母大小写转换」

创建 Java 代码，创建变量 ch，赋值为：`a`，输出为：`A`。

注意点：当 ch 所被赋予的值被修改后，对应的大写字母也将改变。

例如：

```java
ch = 'a';
// output: A

ch = 'p';
// output: P

ch = 'w';
// output: W
```



## Question 3: 身高单位转换

::: tabs

@tab 涉及 Scanner

在很多国家，人们习惯以英寸和英尺来度量身高，如5'11''是指5英尺11英寸。但在很多其他地方，我们习惯以厘米为单位。现在你需要写一个Java程序，将用户输入的身高（以英尺和英寸为单位，如5.11）转换为厘米（整数）。注意，1英尺等于12英寸，1英寸等于2.54厘米。



@tab 不涉及 Scanner

:::













**问题二：赛车比赛时间转换**
在一场赛车比赛中，你的车队希望更精确地了解每圈的时间。赛车系统提供的时间是秒，但你们希望把它转换成分钟和秒的形式。例如，123秒应该被表示为 "2分钟3秒"。你需要编写一个Java程序，将用户输入的秒数（整数）转换为分钟和秒的形式（字符串）。

**问题三：身高单位转换**
在很多国家，人们习惯以英寸和英尺来度量身高，如5'11''是指5英尺11英寸。但在很多其他地方，我们习惯以厘米为单位。现在你需要写一个Java程序，将用户输入的身高（以英尺和英寸为单位，如5.11）转换为厘米（整数）。注意，1英尺等于12英寸，1英寸等于2.54厘米。





**问题三：身高单位转换** 你获取到了一个人的身高数据，格式为 "英尺.英寸"，例如 "5.11"，这表示5英尺11英寸。编写一个Java函数，将这个浮点数转换为整数厘米。注意，1英尺等于12英寸，1英寸等于2.54厘米。

```java
double heightInFeetAndInches = 5.11;
// 将 heightInFeetAndInches 转换为整数厘米

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