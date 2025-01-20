---
title: 在服务器上添加多个 SSH 公钥以支持多台电脑登录
tags:
  - Github
  - 服务器
categories:
  - IT小技巧
description: 悦创介绍了如何通过 SSH 实现多台电脑（包括 Windows、MacBook Pro 16、MacBook Pro 13、iMac）与同一台服务器的免密登录和数据同步。本文详细步骤说明了如何将新电脑的 SSH 公钥添加到服务器的 authorized_keys 文件中，支持多台设备无密码访问。还特别提到如何解决 SSH 连接时遇到的主机密钥变化警告，提供了解决方法，包括删除旧的密钥或禁用主机密钥验证。通过这些操作，用户可以轻松配置多台设备之间的 SSH 无密码登录，优化工作效率并保障服务器连接安全。
top_img: /img/posts/P03-Tips/03-服务器配置多台电脑ssh/03-服务器配置多台电脑ssh.png
cover: /img/posts/P03-Tips/03-服务器配置多台电脑ssh/03-服务器配置多台电脑ssh.webp
comments: true
toc: true
highlight_shrink: false
swiper_index: 1
top_group_index: 1
background: '#fff'
aside: true
ai:
  - 当你需要将多台电脑通过 SSH 访问同一台服务器时，可以通过将每台电脑的公钥添加到服务器的 `authorized_keys` 文件中。本文将详细介绍如何将新电脑的 SSH 公钥添加到已经存在的服务器中。
  - 悦创介绍了如何将多台电脑（如 Windows、MacBook Pro 和 iMac）通过 SSH 访问同一台服务器，实现免密登录和数据同步。文章详细解释了如何获取新电脑的 SSH 公钥并将其添加到服务器的 authorized_keys 文件中，以支持多台电脑同时进行免密登录。接着，文中讲解了如何处理 SSH 连接时可能遇到的错误，包括如何解决主机密钥发生变化的警告，并提供了删除旧密钥或禁用密钥检查的解决方案。最终，读者可以通过简单的步骤实现多台电脑与服务器的无密码登录。
abbrlink: 518b3eef
date: 2025-01-20 22:13:27
toc_number:
toc_style_simple:
aplayer:
---

你好，我是悦创。

我有四台电脑，其中 Windows 1台、Apple：MacBook Pro 16、MacBook Pro 13、iMac 各一台。所以在工作中，变换电脑是必不可免的。

有时会经常往返市区和家中或者各个房间陪着老婆孩子，所以数据的协同或者网站的部署就需要支持多台密钥，也就是：一台服务器要同时支持多台电脑进行免密登陆，便于部署或者交互 Github。

📝以下作为记录，以及部分报错记录：

---

当你需要将多台电脑通过 SSH 访问同一台服务器时，可以通过将每台电脑的公钥添加到服务器的 `authorized_keys` 文件中。本文将详细介绍如何将新电脑的 SSH 公钥添加到已经存在的服务器中。

## 步骤 1: 获取新电脑的 SSH 公钥

首先，需要在新电脑上获取 SSH 公钥。打开新电脑的终端，运行以下命令：

```bash
cat ~/.ssh/id_rsa.pub
```

这将显示新电脑的公钥，通常是以 `ssh-rsa` 开头的一长串字符。

## 步骤 2: 连接到服务器

使用已有的 SSH 密钥登录到目标服务器。可以通过以下命令连接：

```bash
ssh 用户名@服务器IP
```

例如：

```bash
ssh root@192.168.1.100
```

## 步骤 3: 将新公钥添加到 `authorized_keys`

一旦登录到服务器，接下来需要将新电脑的公钥添加到服务器的 `~/.ssh/authorized_keys` 文件中。您可以通过以下命令将公钥追加到文件**末尾**：

```bash
echo "这里修改为你的新公钥内容" >> ~/.ssh/authorized_keys
```

如果希望手动编辑 `authorized_keys` 文件，可以使用文本编辑器，例如 `nano` 或 `vi`：

```bash
nano ~/.ssh/authorized_keys
```

然后将新公钥粘贴到文件末尾并保存。

## 步骤 4: 设置正确的权限

确保 `~/.ssh` 目录和 `authorized_keys` 文件的权限设置正确。运行以下命令以确保它们的权限正确：

```bash
chmod 700 ~/.ssh
chmod 600 ~/.ssh/authorized_keys
```

## 步骤 5: 测试 SSH 登录

退出服务器，并从新电脑尝试通过 SSH 登录服务器，确保可以无密码登录：

```bash
ssh 用户名@服务器IP
```

如果没有输入密码并成功登录，说明您已经成功将新电脑的公钥添加到服务器。

## 小结

通过将多台电脑的公钥添加到服务器的 `~/.ssh/authorized_keys` 文件中，可以轻松地实现多台机器无密码 SSH 登录。如果您有多台电脑需要访问服务器，只需要重复上述步骤，将每台电脑的公钥追加到 `authorized_keys` 文件中即可。

## 知识点学习📑

将新的公钥追加到 ~/.ssh/authorized_keys 文件的末尾是安全的，不会与已有的公钥冲突。每一行代表一个独立的公钥，SSH 会分别验证每一个公钥。

**为什么追加到末尾不会冲突？**

- 每个公钥都是一行文本，格式通常是 `ssh-rsa <公钥内容> <用户名@主机名>`。
- SSH 会逐行检查 `authorized_keys` 文件中每一个公钥，匹配成功后即允许连接。因此，多个公钥共存时，SSH 会根据匹配情况逐一验证，并且不会出现冲突。
- 只要每个公钥都位于文件的不同一行，SSH 就能正确识别并使用它们。

### 例子

假设原本的 `authorized_keys` 文件已经包含了如下公钥：

```bash
ssh-rsa AAAAB3...xyz1== user1@server
```

当我们将新的公钥追加到末尾后，`authorized_keys` 文件将变成：

```bash
ssh-rsa AAAAB3...xyz1== user1@server
ssh-rsa AAAAB3...xyz2== user2@other-server
```

这样，SSH 会检查两个公钥，第一个公钥用于从 `user1@server` 登录，第二个公钥用于从 `user2@other-server` 登录，而不会发生任何冲突。

> 只要每个公钥都位于 `authorized_keys` 文件中的一行，并且每行的内容正确，追加新的公钥是完全没有问题的，SSH 会逐一验证每个公钥。

## 报错处理

在使用 SSH 连接远程服务器时，遇到以下警告信息：

```
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
IT IS POSSIBLE THAT SOMEONE IS DOING SOMETHING NASTY!
Someone could be eavesdropping on you right now (man-in-the-middle attack)!
It is also possible that a host key has just been changed.
The fingerprint for the ED25519 key sent by the remote host is
SHA256:EFwUHe6V5x2GawwukXX+7/iL22jWJxKlQ7tvokIOXRc.
Please contact your system administrator.
Add correct host key in /Users/huangjiabao/.ssh/known_hosts to get rid of this message.
Offending ECDSA key in /Users/huangjiabao/.ssh/known_hosts:9
Host key for 121.89.218.11 has changed and you have requested strict checking.
Host key verification failed.
```

这是因为服务器的 SSH 主机密钥发生了变化，或的计算机的 `known_hosts` 文件记录了一个不同的密钥。为了解决此问题，可以按以下步骤操作。

### 解决方案

#### 方法 1: 删除 `known_hosts` 文件中的旧密钥

1. **编辑 `known_hosts` 文件**，找到并删除与此 IP 地址相关的旧密钥。

   打开 `known_hosts` 文件：

   ```bash
   nano ~/.ssh/known_hosts
   ```

   根据提示信息中的内容，删除第 9 行（因为它指出“Offending ECDSA key in /Users/huangjiabao/.ssh/known_hosts:9”），这意味着第 9 行是问题所在。

   删除对应行后，保存并退出。

2. **重新连接**，SSH 会提示您接受新的主机密钥：

   ```bash
   ssh root@121.89.218.11
   ```

   当您看到如下提示时，输入 `yes` 来信任新的密钥：

   ```
   The authenticity of host '121.89.218.11' can't be established.
   ED25519 key fingerprint is SHA256:EFwUHe6V5x2GawwukXX+7/iL22jWJxKlQ7tvokIOXRc.
   Are you sure you want to continue connecting (yes/no)?
   ```

#### 方法 2: 自动删除旧的 `known_hosts` 记录

如果您不想手动编辑文件，可以使用以下命令直接从 `known_hosts` 文件中删除与此 IP 相关的记录：

```bash
ssh-keygen -R 121.89.218.11
```

这将自动删除 `known_hosts` 文件中的相关记录，然后您可以再次尝试 SSH 连接：

```bash
ssh root@121.89.218.11
```

#### 方法 3: 禁用主机密钥检查（不推荐，除非您理解风险）

如果您暂时不想处理密钥检查问题，可以通过使用 `-o StrictHostKeyChecking=no` 选项来禁用主机密钥验证，但这并不推荐，因为它会降低安全性：

```bash
ssh -o StrictHostKeyChecking=no root@121.89.218.11
```

#### 总结

推荐的方法是 **删除旧的密钥** 并接受新的密钥，以确保您连接的是正确的服务器，并保持连接的安全性。如果有疑问，可以先核实一下服务器是否真的进行了更换或更新，以确保您的连接安全。

{% span center log large blue, 🪧 %}

{% folding blue close, 公众号：AI悦创【二维码】 %}

![](https://bornforthis.cn/gzh.jpg)

{% endfolding %}

{% tip info %}AI悦创·编程一对一

> AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Web、Linux」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh
>
> C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh
>
> 方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)
>
> 方法二：微信：Jiabcdefh

{% endtip %}



