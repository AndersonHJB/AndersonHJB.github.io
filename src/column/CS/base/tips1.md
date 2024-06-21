---
title: 补充2：委托和事件
date: 2024-05-07 22:43:06
author: AI悦创
isOriginal: true
category: 
    - C#教程
tag:
    - C#教程
icon: c
sticky: false
star: false
article: true
timeline: true
image: false
navbar: true
sidebarIcon: true
headerDepth: 3
comment: true
lastUpdated: true
editLink: false
backToTop: true
---

你好，我是悦创。

在 C# 中，**委托（Delegate）**和**事件（Event）**是两个密切相关的概念。它们通常用于实现事件驱动编程。以下是它们的定义和区别：

## 1. 委托

委托是一个数据结构，它定义了一种类型，可以存储一个或多个方法的引用。委托类似于 C++ 中的函数指针，但更安全。它允许你将方法作为参数传递，并且可以动态调用这些方法。使用委托的主要步骤如下：
1. 定义委托类型：
   ```csharp
   public delegate void MyDelegate(string message);
   ```
2. 创建委托实例：
   ```csharp
   MyDelegate del = new MyDelegate(SomeMethod);
   ```
3. 调用委托：
   ```csharp
   del("Hello, World!");
   ```

## 2. 事件

事件是基于委托的更高级别的抽象。它用于在一个对象中发布消息，而另一个对象中订阅该消息。当事件被触发时，所有订阅者都会被通知。事件通常有三个主要组成部分：
1. **事件声明：**通常以 `event` 关键字和委托类型声明一个事件。
   
   ```csharp
   public event MyDelegate MyEvent;
   ```
2. **事件订阅：**订阅事件以添加一个或多个事件处理程序。事件处理程序是与事件关联的方法，当事件发生时，这些方法会被调用。
   ```csharp
   myObject.MyEvent += new MyDelegate(EventHandlerMethod);
   ```
3. **触发事件：**通过调用事件，触发所有已订阅的处理程序。
   ```csharp
   MyEvent?.Invoke("Event triggered!");
   ```

## 3. 区别

- **语法和使用：**委托可以直接被实例化和调用，而事件通常在类中声明，并且只能在类的内部进行触发。
- **访问权限：**委托可以被任何人调用，但事件只能在它们所声明的类中被触发。
- **目的：**委托通常用于传递函数引用或作为回调，而事件用于在对象之间进行异步通知。

通过了解委托和事件，你可以在 C# 中实现灵活的事件驱动编程模式。















::: details 公众号：AI悦创【二维码】

![](/gzh.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Linux、Web、Sql」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](/zsxq.jpg)
