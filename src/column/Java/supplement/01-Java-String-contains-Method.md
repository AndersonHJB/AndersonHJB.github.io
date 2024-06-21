---
title: 01-Java String contains() Method
date: 2022-11-12 21:35:55
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

Find out if a string contains a sequence of characters:

> 找出一个字符串是否包含一个字符序列:

```java
String myStr = "Hello";
System.out.println(myStr.contains("Hel"));   // true
System.out.println(myStr.contains("e"));     // true
System.out.println(myStr.contains("Hi"));    // false
```

## Definition and Usage

> 定义和用法

The `contains()` method checks whether a string contains a sequence of characters.

> `contains()`方法检查字符串是否包含字符序列。

Returns `true` if the characters exist and `false` if not.

> 如果字符存在返回' true '，如果不存在返回' false '。

## Syntax

> 语法

```java
public boolean contains(CharSequence chars)
```

## Parameter Values

> 参数值

| Parameter                                 | Description                                         |
| :---------------------------------------- | :-------------------------------------------------- |
| CharSequence *chars*<br />字符序列 *字符* | The characters to be searched for<br />要搜索的字符 |

::: tip

The CharSequence interface is a readable sequence of char values, found in the java.lang package.

> CharSequence 接口是一个可读的 char 值序列，可在 java.lang 包中找到。

:::

## Technical Details

::: left

| Returns:      | A `boolean`, indicating whether a sequence of characters exist in the specified string:<br />1. `true` - sequence of characters exists<br />2. `false` - sequence of characters do not exist | A `boolean`，表示指定字符串中是否存在一个字符序列：<br />1. `true`- 存在字符序列<br />2. `false`- 字符序列不存在 |
| :------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Throws:       | `NullPointerException` - if the returned value is null<br />`NullPointerException`- 如果返回值为 null |                                                              |
| Java Version: | 1.5                                                          |                                                              |

:::

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