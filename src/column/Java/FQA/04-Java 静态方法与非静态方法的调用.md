---
title: 04-Java 静态方法与非静态方法的调用
date: 2022-10-11 10:14:18
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

你好，我是悦创。

调用静态方法一般格式如下：`类名.方法()` // 应为静态方法属于类本身,在同一个类中可以直接调用 方法()

调用非静态方法格式：`对象名.方法()`

一个小 demo 方便理解

```java
package me;
public class Book {
    public void info() { //定义一个方法
        String name = "英语"; //局部变量
        System.out.println(name);
    }
 
    public static void me(){
        String name = "数学";
        System.out.println(name);
    }
    public static void main(String[] args) {
        Book book = new Book();
        book.info(); //非静态方法调用  对象名.方法()
 
        Book.me(); //静态方法调用 类名.方法()
//        me(); //当然可以直接使用 因为静态是Book类共享的
    }
}
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

