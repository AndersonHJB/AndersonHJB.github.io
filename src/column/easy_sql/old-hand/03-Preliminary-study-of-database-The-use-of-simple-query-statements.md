---
title: 03｜初探数据库-简单查询语句的使用
date: 2022-12-08 10:47:16
author: AI悦创
isOriginal: true
category: 
    - sql
    - easy sql
tag:
    - sql
    - easy sql
icon: jiediansql
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

::: center

![img](./03-Preliminary-study-of-database-The-use-of-simple-query-statements.assets/5f2789ff0001eb8d06400426.jpg)

:::

::: tip 

耐心是一切聪明才智的基础。——柏拉图

:::

你好，我是悦创。

在上一节，我们已经对数据库、表和 SQL 语句的概念有了基本的了解，本节进一步和大家一起学习如何编写和执行查询语句。

## 3.1 客户端工具

访问数据库(包括执行查询语句)需要借助工具，就像从井里打水需要绳子和水桶一样，在安装好数据库之后，数据库服务器都自带命令行工具，比如 Oracle 的 Sql*plus ，尽管这些命令行工具功能很强大，基本满足了我们操作数据库的需求，但为了更方便更友好的访问数据库，最好还是使用客户端工具，值得推荐的几款客户端工具有：连接访问 Oracle 的 PL/SQL Developer，连接访问 SQLServer 的SQL Server Management Studio， 而 Navicat Premium 功能比较丰富，可以连接 Oracle、MySQL、SQLServer、PostgreSQL 和 SQLlite 等多种数据库。

Navicat Premium 的官网地址为:[http://www.navicat.com.cn](http://www.navicat.com.cn/)，根据自己的计算机环境下载对应的软件版本(32位或64位)，下载软件后双击按照提示一步步的安装即可。

















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
