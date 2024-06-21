---
title: 02-Java String charAt() Method
date: 2022-11-13 11:14:51
icon: java
author: AI悦创
isOriginal: true
category: 
    - Java体系课
    - Java FQA
    - Java supplement
tag:
    - Java体系课
    - Java FQA
    - Java supplement
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

## Example

Return the first character (0) of a string:

> 返回字符串的第一个字符(0):

```java
String myStr = "Hello";
char result = myStr.charAt(0);
System.out.println(result);  // H
```

## Definition and Usage

> 定义和用法

The `charAt()` method returns the character at the specified index in a string.

> 该 `charAt()` 方法返回字符串中指定索引处的字符。

The index of the first character is 0, the second character is 1, and so on.

> 第一个字符的索引为 0，第二个字符为 1，以此类推。

## Syntax

```java
public char charAt(int index)
```

## Parameter Values

| Parameter | Description                                                  |
| :-------- | :----------------------------------------------------------- |
| *index*   | An `int` value representing the index of the character to return<br />一个int值，表示要返回字符的索引 |

## Technical Details

> 技术细节

| Returns: | A `char` value at the specified index of this string. The first char value is at index 0 | `char`此字符串的指定索引处的值。 第一个 char 值位于索引 0    |
| :------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Throws:  | `IndexOutOfBoundsException` - if index is negative or not less than the length of the specified string | `IndexOutOfBoundsException`- 如果 index 为负数或不小于指定字符串的长度 |

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