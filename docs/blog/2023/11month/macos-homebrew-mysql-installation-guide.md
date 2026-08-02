---
title: macOS上 通过 Homebrew 安装 MySQL：简易指南
date: 2023-11-16 15:33:40
author: AI悦创
isOriginal: true
icon: mac
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

## 1. 快速步骤

你好，我是悦创。

在 macOS 上使用 Homebrew 来安装 MySQL 是一个简便的过程。请按照以下步骤操作：

1. **打开终端**：可以通过点击 Finder 中的“应用程序”>“实用工具”>“终端”，或使用 Spotlight 搜索“终端”来打开。

2. **安装 Homebrew**（如果你尚未安装）：在终端中输入以下命令：
   
   ```shell
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```
   这个命令会下载并运行Homebrew的安装脚本。
   
3. **使用 Homebrew 安装 MySQL**：安装 Homebrew 后，输入以下命令来安装 MySQL：
   
   ```shell
   brew install mysql
   ```
   这将自动下载并安装 MySQL 的最新版本。
   
4. **启动MySQL服务**：安装完成后，使用以下命令来启动 MySQL 服务：
   
   ```shell
   brew services start mysql
   ```
   这将启动 MySQL 服务，并确保在系统启动时自动运行。
   
5. **安全设置**：为了使你的 MySQL 安装更安全，运行以下命令进行安全设置：
   
   ```shell
   mysql_secure_installation
   ```
   此命令将引导你设置 root 用户密码，移除匿名用户，禁止 root 用户远程登录，以及删除测试数据库。
   
6. **登录MySQL**：设置完密码后，你可以使用以下命令登录 MySQL：
   
   ```shell
   mysql -u root -p
   ```
   系统会提示你输入在 `mysql_secure_installation` 步骤中设置的密码。

完成以上步骤后，你就可以开始使用 MySQL 了。如果你需要进一步配置或了解 MySQL 的使用方法，可以查看其官方文档。

## 2. 实际操作

### 2.1 安装

```shell
(base) ➜  ~ brew install mysql
==> Fetching dependencies for mysql: libevent, libcbor, libfido2, protobuf@21, zlib and xz
==> Fetching libevent
==> Downloading https://mirrors.tuna.tsing
Already downloaded: /Users/huangjiabao/Library/Caches/Homebrew/downloads/7b79205cf8eaf89a807ed741ffcb36e9032eccb73328e2ecf8977173b52cd5c0--libevent-2.1.12_1.arm64_monterey.bottle.tar.gz
==> Fetching libcbor
==> Downloading https://mirrors.tuna.tsing
Already downloaded: /Users/huangjiabao/Library/Caches/Homebrew/downloads/045ca14f25346049bae79c865ee3b44559ea7fe53022f43d42a4a8edda42897e--libcbor-0.10.2.arm64_monterey.bottle.tar.gz
==> Fetching libfido2
==> Downloading https://mirrors.tuna.tsing
################################### 100.0%
==> Fetching protobuf@21
==> Downloading https://mirrors.tuna.tsing
################################### 100.0%
==> Fetching zlib
==> Downloading https://mirrors.tuna.tsing
################################### 100.0%
==> Fetching xz
==> Downloading https://mirrors.tuna.tsing
################################### 100.0%
==> Fetching mysql
==> Downloading https://mirrors.tuna.tsing
################################### 100.0%
==> Installing dependencies for mysql: libevent, libcbor, libfido2, protobuf@21, zlib and xz
==> Installing mysql dependency: libe
==> Pouring libevent-2.1.12_1.arm64_monter
🍺  /opt/homebrew/Cellar/libevent/2.1.12_1: 57 files, 2.2MB
==> Installing mysql dependency: libc
==> Pouring libcbor-0.10.2.arm64_monterey.
🍺  /opt/homebrew/Cellar/libcbor/0.10.2: 31 files, 193.5KB
==> Installing mysql dependency: libf
==> Pouring libfido2-1.14.0.arm64_monterey
🍺  /opt/homebrew/Cellar/libfido2/1.14.0: 553 files, 1.3MB
==> Installing mysql dependency: prot
==> Pouring protobuf@21-21.12.arm64_monter
🍺  /opt/homebrew/Cellar/protobuf@21/21.12: 342 files, 20.4MB
==> Installing mysql dependency: zlib
==> Pouring zlib-1.3.arm64_monterey.bottle
🍺  /opt/homebrew/Cellar/zlib/1.3: 13 files, 399.2KB
==> Installing mysql dependency: xz
==> Pouring xz-5.4.5.arm64_monterey.bottle
🍺  /opt/homebrew/Cellar/xz/5.4.5: 163 files, 2.6MB
==> Installing mysql
==> Pouring mysql-8.1.0.arm64_monterey.bot
==> /opt/homebrew/Cellar/mysql/8.1.0/bin/m
==> Caveats
We've installed your MySQL database without a root password. To secure it run:
    mysql_secure_installation

MySQL is configured to only allow connections from localhost by default

To connect run:
    mysql -u root

To start mysql now and restart at login:
  brew services start mysql
Or, if you don't want/need a background service you can just run:
  /opt/homebrew/opt/mysql/bin/mysqld_safe --datadir\=/opt/homebrew/var/mysql
==> Summary
🍺  /opt/homebrew/Cellar/mysql/8.1.0: 325 files, 307.9MB
==> Running `brew cleanup mysql`...
Disable this behaviour by setting HOMEBREW_NO_INSTALL_CLEANUP.
Hide these hints with HOMEBREW_NO_ENV_HINTS (see `man brew`).
==> Caveats
==> mysql
We've installed your MySQL database without a root password. To secure it run:
    mysql_secure_installation

MySQL is configured to only allow connections from localhost by default

To connect run:
    mysql -u root

To start mysql now and restart at login:
  brew services start mysql
Or, if you don't want/need a background service you can just run:
  /opt/homebrew/opt/mysql/bin/mysqld_safe --datadir\=/opt/homebrew/var/mysql
```

### 2.2 按上面安装提示操作

```shell
mysql_secure_installation
mysql -u root
brew services start mysql
```

```shell
(base) ➜  ~ brew services start mysql
==> Successfully started `mysql` (label: homebrew.mxcl.mysql)
```

```shell {1,12,20,23,25,28,36,44,53,63}
(base) ➜  ~ mysql_secure_installation

Securing the MySQL server deployment.

Connecting to MySQL using a blank password.

VALIDATE PASSWORD PLUGIN can be used to test passwords
and improve security. It checks the strength of password
and allows the users to set only those passwords which are
secure enough. Would you like to setup VALIDATE PASSWORD plugin?

Press y|Y for Yes, any other key for No: y

There are three levels of password validation policy:

LOW    Length >= 8
MEDIUM Length >= 8, numeric, mixed case, and special characters
STRONG Length >= 8, numeric, mixed case, special characters and dictionary                  file

Please enter 0 = LOW, 1 = MEDIUM and 2 = STRONG: 0
Please set the password for root here.

New password: 

Re-enter new password: 

Estimated strength of the password: 100 
Do you wish to continue with the password provided?(Press y|Y for Yes, any other key for No) : y
By default, a MySQL installation has an anonymous user,
allowing anyone to log into MySQL without having to have
a user account created for them. This is intended only for
testing, and to make the installation go a bit smoother.
You should remove them before moving into a production
environment.

Remove anonymous users? (Press y|Y for Yes, any other key for No) : y
Success.


Normally, root should only be allowed to connect from
'localhost'. This ensures that someone cannot guess at
the root password from the network.

Disallow root login remotely? (Press y|Y for Yes, any other key for No) : y
Success.

By default, MySQL comes with a database named 'test' that
anyone can access. This is also intended only for testing,
and should be removed before moving into a production
environment.


Remove test database and access to it? (Press y|Y for Yes, any other key for No) : y
 - Dropping test database...
Success.

 - Removing privileges on test database...
Success.

Reloading the privilege tables will ensure that all changes
made so far will take effect immediately.

Reload privilege tables now? (Press y|Y for Yes, any other key for No) : y
Success.

All done!
```

```shell {1,2}
(base) ➜  ~ mysql -u root -p
Enter password: 
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 13
Server version: 8.1.0 Homebrew

Copyright (c) 2000, 2018, Oracle and/or its affiliates. All rights reserved.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql> 
```



































欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！

::: details 公众号：AI悦创【二维码】

![](https://blog.images.bornforthis.cn/docs-images/sha256/77/77f67d48a67ec6a44a4ef1f01ffc85830eb3c121b1ece45dc5ada06e20e2f52b.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Linux、Web 全栈」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](https://blog.images.bornforthis.cn/docs-images/sha256/30/3087c629da73428daa0ee050f5b31709c30f650686164b54c724b892a422c585.jpg)
