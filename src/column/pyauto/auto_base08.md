---
title: 08-数据库和 sqlite 介绍
date: 2022-07-17 10:26:27
author: AI悦创
isOriginal: true
category: Python 办公自动化
tag:
    - Python 办公自动化
icon: python
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

## 什么是数据库

数据库是“**按照数据结构来组织、存储和管理数据的仓库**”，是一个长期存储在计算机内的、有组织的、有共享的、统一管理的数据集合。

数据库是以一定方式储存在一起、能与多个用户共享、具有尽可能小的冗余度、与应用程序彼此独立的数据集合，可视为电子化的文件柜。

## 有哪些数据库

#### 数据库类型 

大型数据库：[甲骨文Oracle](https://baike.baidu.com/item/甲骨文公司/430115?fromtitle=Oracle&fromid=301207&fr=aladdin)。

分布式数据库：[HBase](https://baike.baidu.com/item/HBase/7670213?fr=aladdin)。

中型数据库：[SqlServer](https://baike.baidu.com/item/SqlServer/463101?fr=aladdin)、[Mysql](https://baike.baidu.com/item/MySQL/471251)、[MariaDB](https://baike.baidu.com/item/mariaDB/6466119?fr=aladdin)、[PostgreSQL](https://baike.baidu.com/item/PostgreSQL/530240?fr=aladdin)、[Redis](https://baike.baidu.com/item/Redis/6549233)等。

小型数据库：[Sqlite](https://baike.baidu.com/item/SQLite/375020?fr=aladdin)、[Access](https://baike.baidu.com/item/Microsoft%20Office%20Access/7748166?fromtitle=access&fromid=10275&fr=aladdin) 。

#### 如何选择 

大集团：Oracle、HBase。

发展中公司：PostgreSQL、Mysql。

app 的临时数据库：Sqlite。

#### Sqlite

- 方便携带、易于操作、随时创建、Python 原生支持的小型数据库文件。
- 轻型的数据库，遵守 ACID 的关系型数据库管理系统，它包含在一个相对小的 C 库中。
- `D.RichardHipp` 建立的公有领域项目。
- 设计目标是嵌入式的，而且已经在很多嵌入式产品中使用了它，它占用资源非常的低，在嵌入式设备中，可能只需要几百 K 的内存就够了。
- 支持 Windows/Linux/Unix 等等主流的操作系统。
- 能够跟很多程序语言相结合，比如 Tcl、C#、PHP、Java 等，还有 ODBC 接口。
- 比起 Mysql、PostgreSQL 这两款开源的世界著名数据库管理系统来讲，它的处理速度比他们都快。
- 第一个 Alpha 版本诞生于 2000年5月。 至 2015年已经有 15 个年头，SQLite 也迎来了一个版本 SQLite 3 已经发布。
- Python 自带 sqlite3 这个库，方便且直接的创建和读取 sqlite3 数据库。

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













