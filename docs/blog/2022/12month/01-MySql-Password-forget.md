---
title: 忘记MySQL数据库的root密码时如何重置密码
date: 2022-12-03 12:39:47
author: AndersonHJB
isOriginal: true
category: 
    - mysql
tag:
    - mysql
icon: jiediansql
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
---

#### 此文章成功率极低，和网络大部分文章一样，最终我想起了密码，所有修改 mysql 密码的指令在非安全模式下都不能使用。如果你有好的方法欢迎留言。

![知识库](https://blog.images.bornforthis.cn/docs-images/sha256/c0/c0e19778c164b04245051f03138570e7fda6b73352c1c838395ed12bf2b5368f.jpg)

## 0. 概述

本文主要介绍忘记 MySQL 数据库的 root 密码时如何重置密码。

## 1. 关闭 mysql 服务

```sh
➜  ~ mysql.server stop
Shutting down MySQL
. SUCCESS!
```

> 启动命令：`mysql.server start` 

## 2. 查找 mysql 位置

```sh
➜  ~ where mysql
/opt/homebrew/bin/mysql
```

## 3. 进入 mysql 目录&进入安全模式

```sh
➜  /Users cd /opt/homebrew/bin
➜  bin git:(master) mysqld_safe --skip-grant-tables
2022-12-03T06:40:24.6NZ mysqld_safe Logging to '/opt/homebrew/var/mysql/huangjibaodeMBP.err'.
2022-12-03T06:40:24.6NZ mysqld_safe Starting mysqld daemon with databases from /opt/homebrew/var/mysql
```

> sudo mysqld_safe --skip-grant-tables
>
> 这个地方，如果你 alias 了 mysqlld_safe 这个命令，那么可以直接复制粘贴；如果没有，则需要加上正确的路径。在 Linux/OS X 系统下，默认路径是 /usr/local/mysql/bin/mysqld/usafe。

说是安全模式，其实是超级危险模式！如果你是在本地修改，那没问题；如果是在服务器上，那你得保证这个时候没有任何人登录到系统。因为一旦进入了安全模式，任何人都可以使用任何密码通过 root 用户登录入到 MySQL ，可以执行任何想执行的操作。

这也是为什么，当我们密码忘记了的时候，我们可以这样来修改密码。凡事有利有弊，你可以用这种方式来做好事；而同样，可以用来做坏事。

## 4. 新打开一个终端，进入 MySQL

```sql
mysql -u root -p
```

![image-20221203144503089](https://blog.images.bornforthis.cn/docs-images/sha256/48/48ecf5761b3ad7edd5cef9f557b54c245d4a230b2fc07b9d1281fe1dc7670948.png)

这里也和 `mysqld_safe` 一样。如果你是 OS X 上新装的 MySQL ，那么很有可能并不能直接使用 mysql 这个命令。而是要使用它的绝对路径：` /usr/local/mysql/bin/mysql -u root -p`

然后输入任意密码就可以进入 MySQL 了。

## 5. 修改密码

```sql
ALTER USER 'root'@'localhost' IDENTIFIED WITH caching_sha2_password BY '123123';
```











以下无效：

---

进入了之后先不要急着使用 update 命令修改密码，先看看表中的字段名。不同版本密码的字段名可能不一样。

MySQL 的用户信息是存在 `mysql.user` 这个表里面的。于是可以先选择 mysql 这个数据库，再看数据库中 user 表中的字段名称。

```sql
use mysql; //切换数据库
describe user; //查看 user 表的字段
```

然后确定密码字段的名称，一般可能是 Password。然而在 OS X 的 MySQL 5.7 这个版本中，密码字段名称是 `authentication_string` 。记住这个字段名。

然后修改密码啊：`UPDATE mysql.user SET authentication_string=PASSWORD('123456') where User='root';` //将 root 用户密码改成 123456。

```sql
UPDATE mysql.user SET authentication_string=PASSWORD('123456') where User='root';
```



欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！

::: details 公众号：AI悦创【二维码】

![](https://blog.images.bornforthis.cn/docs-images/sha256/77/77f67d48a67ec6a44a4ef1f01ffc85830eb3c121b1ece45dc5ada06e20e2f52b.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Linux、」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](https://blog.images.bornforthis.cn/docs-images/sha256/30/3087c629da73428daa0ee050f5b31709c30f650686164b54c724b892a422c585.jpg)
