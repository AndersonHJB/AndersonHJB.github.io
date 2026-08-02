---
title: 01-Windows 实现远程 SSH
date: 2025-02-16 21:29:28
icon: rengongzhineng
author: AI悦创
isOriginal: true
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
footer: 长期招收编程一对一学员！微信：Jiabcdefh, <a href="https://beian.miit.gov.cn/" target="_blank">闽ICP备19021486号-6</a>
---

你好，我是悦创。

每次要使用 Windows 都需要使用远程软件来控制，但操作仅限命令行或几个软件。但是我又习惯直接 MacOS 远程，所以想着在 MacOS 上远程 SSH 连接 Windows。

## 步骤 1：安装 OpenSSH 服务器

1. 打开 PowerShell（管理员权限），运行以下命令以安装 OpenSSH 服务器：

    ```bash
    Add-WindowsCapability -Online -Name OpenSSH.Server~~~~0.0.1.0
    ```

2. 安装完成后，启动 SSH 服务：

    ```bash
    Start-Service sshd
    ```

3. 设置 SSH 服务自动启动：

    ```bash
    Set-Service -Name sshd -StartupType Automatic
    ```

## 步骤 2：确认防火墙设置

确保 Windows 防火墙允许 SSH 连接。可以运行以下命令添加防火墙规则：

```bash
New-NetFirewallRule -Name sshd -DisplayName 'OpenSSH Server (sshd)' -Enabled True -Protocol TCP -Action Allow -LocalPort 22
```

## 步骤 3：获取 Windows 的 IP 地址

在 PowerShell 中运行以下命令来获取 IP 地址：

```bash
ipconfig
```

## 步骤 4：从 macOS 使用 SSH 连接

现在，你可以在 macOS 的终端中使用以下命令连接到 Windows：

```bash
ssh username@192.168.x.x
```

其中 `username` 是你 Windows 上的用户名，`192.168.x.x` 是你从 `ipconfig` 命令中获得的 IP 地址。

## 关于密码

密码是你在 Windows 上的 **用户账户密码**，也就是你用来登录 Windows 的那个密码。

在通过 SSH 连接时，macOS 会提示你输入密码以验证身份。如果你没有设置密码，或者不记得密码，可以在 Windows 上更改密码：

### 更改或设置 Windows 密码

1. **打开设置**：点击开始菜单 > **设置** > **账户**。
2. 在左侧选择 **登录选项**，然后在 **密码** 部分点击 **更改**。
3. 输入当前密码，并设置一个新的密码。

### 如果没有设置密码

你也可以选择在 Windows 上为该账户设置一个密码，或者如果账户是本地账户而不是 Microsoft 账户，你可以在没有密码的情况下进行 SSH 登录，但这样会降低安全性，不推荐这样做。

如果你用的是 **Microsoft 账户** 登录 Windows，密码是你在 Microsoft 账户上设置的密码。

如果有其他问题，或者无法设置密码，随时告诉我！

欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！

::: details 公众号：AI悦创【二维码】

![](https://blog.images.bornforthis.cn/docs-images/sha256/77/77f67d48a67ec6a44a4ef1f01ffc85830eb3c121b1ece45dc5ada06e20e2f52b.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](https://blog.images.bornforthis.cn/docs-images/sha256/30/3087c629da73428daa0ee050f5b31709c30f650686164b54c724b892a422c585.jpg)
