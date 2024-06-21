---
title: 02-Java 字符串和数字间的转换
date: 2022-10-08 00:11:33
icon: java
author: AI悦创
isOriginal: true
category: 
    - Java体系课
    - Java FQA
tag:
    - Java体系课
    - Java FQA
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

## 一、字符串转数字

1. 通过基本类型对应的包装类则可以实现把字符串转换成基本类型。Java 几个包装类都提供了一个 `parseXxx(String str)` 静态方法用于将字符串转换成基本类型。（**注意：如果字符串不是数值型字符串，转换将导致一个运行时错误。**）

```java
String s = "123";

byte b = Byte.parseByte(s);
short t = Short.parseShort(s);
int i = Integer.parseInt(s);
long l = Long.parseLong(s);
float f = Float.parseFloat(s);
double d = Double.parseDouble(s);
boolean bo = Boolean.parseBoolean(s);
```

2、`i = Integer.valueOf(s).intValue();`

**总结：** 方法 1 直接使用静态方法，不会产生多余的对象，但会抛出异常。方法 2，`Integer.valueOf(s)` 相当于 `new Integer(Integer.parseInt(s))`，也会抛异常，但会多产生一个对象。

## 待整理！



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

[https://www.runoob.com/w3cnote/java-string-and-int-convert.html](https://www.runoob.com/w3cnote/java-string-and-int-convert.html)

[https://blog.csdn.net/allenchan3721/article/details/71437394](https://blog.csdn.net/allenchan3721/article/details/71437394)

