---
title: 如何在 Mac 上为 GitHub 设置 SSH Key（2022）
date: 2022-12-18 01:12:01
author: 小綿尾巴
isOriginal: true
category: 
    - github
tag:
    - github
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

SSH(Secure Shell) 是允许两台电脑之间通过安全连接进行数据交换的网络协议。

在本地电脑生成 SSH Key 私钥，再将 SSH Key 公钥添加到 GitHub，就实现了本地电脑和 GitHub 服务器安全连接，可以把本地仓库推送到 GitHub 远程仓库，或把 GitHub 远程仓库拉取到本地仓库，即两台电脑间的数据交换。

**Noted**：GitHub 在 2022 年 5 月添加了 SSH 安全性，以往添加 SSH Key 的教程在有些细节处可能不适用，这是 2022 年下半年添加 SSH Key 的教程。

## 生成 SSH Key

1. 点开 [ GitHub ](https://github.com/) 账号头像下的 `Settings`

![img](https://blog.images.bornforthis.cn/docs-images/sha256/90/90eb989583bfb4e35c83007926eef54eb19b178e9c1cb3b9554635cde387f52b.png)

2. 找到 `Settings` 下的 `SSH and GPG keys`，点击 `generating SSH keys`，点击后会打开一个新的页面。

![img](https://blog.images.bornforthis.cn/docs-images/sha256/c7/c7e7d3beb42b3758aef6a9564e9caa66522b60d00d313595850a2e3a701a8ca2.png)

3. 在新的页面中选择 `Generating a new SSH key and adding it to the ssh-agent`

![img](https://blog.images.bornforthis.cn/docs-images/sha256/bb/bb78effded8ac0a70d4af1052e674ea13126f6d5b7166569357e6e4b5370babb.png)

4. 注意选择对应操作系统的教程。

![img](https://blog.images.bornforthis.cn/docs-images/sha256/89/89666b780c59ee3cea736aabcc0afb5a02d134b5033a6ee72e7f9907898c2773.png)

5. 往下滑动页面会看到 GitHub 给出的 Mac 下生成 SSH Key 的指南，按照指南的步骤一步一步进行。

![img](https://blog.images.bornforthis.cn/docs-images/sha256/a9/a92c392ddbff2f88223a41d2e3dc4ebc65f07cbccf4f79739fec66c460afaa19.png)

6. 打开终端（Terminal），复制粘贴以下文本到终端，把 `your_email@example.com` 替换成你注册 GitHub 时使用的邮箱，然后按下Enter键。

```shell
ssh-keygen -t ed25519 -C "your_email@example.com"
```

![img](https://blog.images.bornforthis.cn/docs-images/sha256/02/020d56a2ba8cfa4303517a5da83b3608aec279b9d0634d2c39cab39d3a7ab6db.png)

- 如果你不记得注册 GitHub 时使用的邮箱，可以从 `Settings` 中的 `Emails` 中查看。

![img](https://blog.images.bornforthis.cn/docs-images/sha256/a6/a661c956698c1082ea6ab0ed574797e10c7649423708b2007b8ea388dfe5754c.png)

7. 出现 `Enter file in which to save the key(...)` ，按下 `Enter` 键，一直按 `Enter` 直到出现以下画面。

![img](https://blog.images.bornforthis.cn/docs-images/sha256/16/165cd0e7d0b5bbad14143d56e4b64f8c1bb71f28f7a8272738ffa1388c6af299.png)

8. 🎉 恭喜你的 SSH Key 已经生成成功，接下来把生成的 SSH Key 添加到 ssh-agent。

## 添加 SSH Key 到 ssh-agent

1. 在终端（Terminal）中输入命令：

```shell
eval "$(ssh-agent -s)"
```

- 命令执行后终端会给出 **Agent pid**

2. 如果你使用的是[ **macOS Siera 10.12.2或以上的版本**](https://docs.github.com/cn/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#adding-your-ssh-key-to-the-ssh-agent)，你需要修改 `~/.ssh/config` 文件来自动加载密钥到 ssh-agent 和储存 passphrases 到你的钥匙链。

- 首先，检查电脑中是否存在 `~/.ssh/config` 文件

```shell
open ~/.ssh/config
```

- 如果像我一样显示这个 config 文件不存在，则创建这个文件

![img](https://blog.images.bornforthis.cn/docs-images/sha256/f0/f03d5aade2149d8e47f01dad3c5a91543eb04172afb3e72cbca8214a29bac735.png)

```shell
touch ~/.ssh/config	
```

- 用编辑器打开 `~/.ssh/config` 文件

```shell
nano ~/.ssh/config
```

- 在 nano 窗口中复制粘贴以下代码：

```shell
Host *
	AddKeysToAgent yes
	UseKeychain yes
	IdentityFile ~/.ssh/id_ed25519
```

- 粘贴代码后按 `control+X` 退出编辑器

![img](https://blog.images.bornforthis.cn/docs-images/sha256/48/480ccbbee27d7c7c3e2c56a77c0c24481dbfc9e060eba34fec6f549d8dc353c0.png)

- 输入 `y` 保存更改

![img](https://blog.images.bornforthis.cn/docs-images/sha256/64/646803fa9ed1d25a1dfd5674f0459e64751aae0fb71b1c913923b72177b1e7d8.png)



- 出现这个画面后再按 `Enter` 键

![img](https://blog.images.bornforthis.cn/docs-images/sha256/5e/5e4793bb2013eae33ccd2af1b2bbd4d34b91c011239502fa41b6213bd1c3cc6e.png)

3. 将 SSH Key 添加到 ssh-agent。如果你使用的是[ **Mac Monterey(12.0)及以上版本**](https://docs.github.com/cn/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#adding-your-ssh-key-to-the-ssh-agent)，请使用以下命令（~~因为在Mac Monterey(12.0)及以上版本中，`-K` 标志已经被废弃，被 `--apple-use-keychain` 代替~~）。

```shell
ssh-add --apple-use-keychain ~/.ssh/id_ed25519
```

- 如果不是 Mac Monterey(12.0) 及以上版本，使用以下命令：

```shell
ssh-add -K ~/.ssh/id_ed25519
```

- 🎉 出现 `Identity added` 即表示添加成功。

![img](https://blog.images.bornforthis.cn/docs-images/sha256/f6/f669704613b85c0449523bdf57f5f5b9a7ef45359e79f9c33a22a5faa0040b76.png)

## 添加 SSH Key 到 GitHub

1. 在终端输入以下命令， `pbcopy` 会复制 SSH Key 内容到剪贴板

```shell
pbcopy < ~/.ssh/id_ed25519.pub
```

2. 再次打开 GitHub `Settings` 下的 `SSH and GPG Key` ，点击 `New SSH key`

![img](https://blog.images.bornforthis.cn/docs-images/sha256/1e/1e833a58705785194d9225afd9fc16fbf52c39c17f734b117b3d34c92245d58c.png)

3. 添加本机生成的 SSH Key 到 GitHub：

- 在 **Title** 中给这个 SSH Key 命名
- **Key Type** 选择 `Authentication Key`
- 在 **Key** 中 `Command+V` 粘贴刚刚复制的 SSH Key
- 添加后点击

![img](https://blog.images.bornforthis.cn/docs-images/sha256/18/187f5cfaf67275087a280ebe49a777f4c45969e3236ac34acf9d549f313f2439.png)

4. 🎉 添加完成。

## 测试 SSH Key 是否添加成功

1. 选择一个要用 SSH Key clone 的仓库，复制这个仓库的 SSH 链接。

![img](https://blog.images.bornforthis.cn/docs-images/sha256/e8/e824cd4c9a7c5d3e43d52cab3aa3c945f0c7d2cf66e50edc9c0cb6ac79d494ad.png)

2. 在终端输入:

```shell
git clone [ssh-url]
```

![img](https://blog.images.bornforthis.cn/docs-images/sha256/9f/9f4b3ac3e6f3f2b5e5b7b5182ba3fe58624e7b0f68736c9f020df683ef59dd48.png)

1. 🎉 clone 成功即代表 SSH Key 添加成功。

## Reference

- [How to Set Up an SSH Key to GitHub on Mac](https://www.youtube.com/watch?v=_RsP81Et12s)

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
