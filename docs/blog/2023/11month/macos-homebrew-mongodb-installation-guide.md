---
title: 在 macOS 上通过 Homebrew 安装 MongoDB：全面指南
date: 2023-11-16 16:37:53
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

在 macOS 上安装 MongoDB 的过程也可以通过 Homebrew 来简化。以下是具体的安装步骤：

1. **打开终端**：你可以通过点击 Finder 中的“应用程序”>“实用工具”>“终端”，或者使用 Spotlight 搜索“终端”来打开。

2. **确保 Homebrew 已安装**：如果你还没有安装 Homebrew，请参考之前关于安装 MySQL 时提到的步骤来安装 Homebrew。

3. **使用 Homebrew 安装 MongoDB**：在终端中输入以下命令来安装 MongoDB：
   
   ```shell
   brew tap mongodb/brew
   brew update
   brew install mongodb-community@7.0
   ```
   这些命令会添加 MongoDB 的官方 Homebrew仓库，并安装 MongoDB。这里以安装版本5.0为例，你可以根据需要安装其他版本。
   
4. **启动 MongoDB 服务**：安装完成后，使用以下命令来启动 MongoDB 服务：
   
   ```shell
   brew services start mongodb/brew/mongodb-community
   ```
   这将启动 MongoDB 服务，并确保它在系统启动时自动运行。
   
5. **验证安装**：通过运行以下命令来验证 MongoDB 是否正确安装并运行：
   
   ```shell
   mongo
   ```
   如果安装成功，这个命令将连接到本地 MongoDB 服务器，并显示 MongoDB 的命令行接口。

通过上述步骤，你应该能够在你的 macOS 上成功安装并运行 MongoDB。如果你需要进一步的配置或想要了解 MongoDB 的更多使用方法，建议查阅 MongoDB 的官方文档。

- [https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/)





## 2. 实际操作

### 2.1 安装

```shell
(base) ➜  ~ brew tap mongodb/brew
==> Tapping mongodb/brew
Cloning into '/opt/homebrew/Library/Taps/mongodb/homebrew-brew'...
remote: Enumerating objects: 1301, done.
remote: Counting objects: 100% (586/586), done.
remote: Compressing objects: 100% (197/197), done.
remote: Total 1301 (delta 442), reused 484 (delta 388), pack-reused 715
Receiving objects: 100% (1301/1301), 285.84 KiB | 1.14 MiB/s, done.
Resolving deltas: 100% (737/737), done.
Tapped 17 formulae (36 files, 373.2KB).
```

```shell
(base) ➜  ~ brew update
Already up-to-date.
```

```shell
(base) ➜  ~ brew install mongodb-community@7.0
==> Fetching dependencies for mongodb/brew/mongodb-community: mongodb/brew/mongodb-database-tools, c-ares, libuv, node and mongosh
==> Fetching mongodb/brew/mongodb-database-tools
==> Downloading https://fastdl.mongodb.org/tools/db/mongodb-database-tools-macos-arm64-100.9.1.zip
################################################################################################################################################################################################ 100.0%
==> Fetching c-ares
==> Downloading https://mirrors.tuna.tsinghua.edu.cn/homebrew-bottles//c-ares-1.22.0.arm64_monterey.bottle.tar.gz
################################################################################################################################################################################################ 100.0%
==> Fetching libuv
==> Downloading https://mirrors.tuna.tsinghua.edu.cn/homebrew-bottles//libuv-1.47.0.arm64_monterey.bottle.tar.gz
################################################################################################################################################################################################ 100.0%
==> Fetching node
==> Downloading https://mirrors.tuna.tsinghua.edu.cn/homebrew-bottles//node-21.2.0.arm64_monterey.bottle.tar.gz
################################################################################################################################################################################################ 100.0%
==> Fetching mongosh
==> Downloading https://mirrors.tuna.tsinghua.edu.cn/homebrew-bottles//mongosh-2.0.2.arm64_monterey.bottle.tar.gz
################################################################################################################################################################################################ 100.0%
==> Fetching mongodb/brew/mongodb-community
==> Downloading https://fastdl.mongodb.org/osx/mongodb-macos-arm64-7.0.2.tgz
################################################################################################################################################################################################ 100.0%
==> Installing mongodb-community from mongodb/brew
==> Installing dependencies for mongodb/brew/mongodb-community: mongodb/brew/mongodb-database-tools, c-ares, libuv, node and mongosh
==> Installing mongodb/brew/mongodb-community dependency: mongodb/brew/mongodb-database-tools
🍺  /opt/homebrew/Cellar/mongodb-database-tools/100.9.1: 13 files, 114.2MB, built in 4 seconds
==> Installing mongodb/brew/mongodb-community dependency: c-ares
==> Pouring c-ares-1.22.0.arm64_monterey.bottle.tar.gz
🍺  /opt/homebrew/Cellar/c-ares/1.22.0: 153 files, 762.6KB
==> Installing mongodb/brew/mongodb-community dependency: libuv
==> Pouring libuv-1.47.0.arm64_monterey.bottle.tar.gz
🍺  /opt/homebrew/Cellar/libuv/1.47.0: 19 files, 1.1MB
==> Installing mongodb/brew/mongodb-community dependency: node
==> Pouring node-21.2.0.arm64_monterey.bottle.tar.gz
🍺  /opt/homebrew/Cellar/node/21.2.0: 2,205 files, 63.4MB
==> Installing mongodb/brew/mongodb-community dependency: mongosh
==> Pouring mongosh-2.0.2.arm64_monterey.bottle.tar.gz
🍺  /opt/homebrew/Cellar/mongosh/2.0.2: 10,001 files, 48.2MB
==> Installing mongodb/brew/mongodb-community
==> Caveats
To start mongodb/brew/mongodb-community now and restart at login:
  brew services start mongodb/brew/mongodb-community
==> Summary
🍺  /opt/homebrew/Cellar/mongodb-community/7.0.2: 11 files, 265.6MB, built in 3 seconds
==> Running `brew cleanup mongodb-community`...
Disable this behaviour by setting HOMEBREW_NO_INSTALL_CLEANUP.
Hide these hints with HOMEBREW_NO_ENV_HINTS (see `man brew`).
==> Caveats
==> mongodb-community
To start mongodb/brew/mongodb-community now and restart at login:
  brew services start mongodb/brew/mongodb-community
```

The installation includes the following binaries:

- The [`mongod`](https://www.mongodb.com/docs/manual/reference/program/mongod/#mongodb-binary-bin.mongod) server
- The [`mongos`](https://www.mongodb.com/docs/manual/reference/program/mongos/#mongodb-binary-bin.mongos) sharded cluster query router
- The MongoDB Shell, [`mongosh`](https://www.mongodb.com/docs/mongodb-shell/#mongodb-binary-bin.mongosh)





























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
