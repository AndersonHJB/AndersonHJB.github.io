---
title: xxx.app 已损坏，无法打开，你应该将它移到废纸篓/打不开 xxx，因为它来自身份不明的开发者解决方法
date: 2022-12-11 20:47:55
author: AndersonHJB
isOriginal: true
category: 
    - MacOS
tag:
    - MacOS
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

## xxx.app 已损坏，无法打开，你应该将它移到废纸篓/打不开 xxx，因为它来自身份不明的开发者解决方法

## 常见的几种报错

- xxx已损坏，无法打开，你应该将它移到废纸篓解决办法
- 打不开 xxx，因为它来自身份不明的开发者
- 打不开xxxx，因为 Apple 无法检查其是否包含恶意软件
- 在安装的时候提示加载失败！

## 为什么会出现？

这是 macOS 启用了新的安全机制的问题。

苹果默认是只允许安装自家【App Store】来源的应用，如果你想安装第三方的应用，那么需要在【系统偏 好设置 -> 安全性与隐私 -> 通用】中勾选【App Store 和被认可的开发者】选项。

而被认可的开发者是需要购买苹果的企业证书对应用进行签名，然后再提交给苹果审核才可以，这对破解应用来说很不现实，因为破解应用必定会修改应用的文件从而导致签名失效而运行显示【已损坏】。

另外一些开源免费类应用没有收益（用户主动打赏太难了），所以开发者一般也不会购买证书签名。

解决方法就是去开启【任何来源】选项了，但是 macOS 默认是隐藏了这个设置的，需要用户手动通过终端执行命令行代码来开启。

下面就让AI悦创教大家使用命令行代码开启隐藏的任何来源选项。

## 开启任何来源（主要）

先打开 `系统偏好设置 -> 安全与隐私 -> 通用` 选项卡，检查是否已经启用了 `任何来源` 选项。「旧版本系统」

新版本系统看图：

![image-20221211210052091](https://blog.images.bornforthis.cn/docs-images/sha256/ca/cad3145ce5d1feeedcbef295183c8d7450956a848be47f978404fe7a1ac5b4b7.png)

![image-20221211210125098](https://blog.images.bornforthis.cn/docs-images/sha256/ee/ee729058b4b53a2c1fd6ae52bf49d58e83b46e2adc391aa7788e0c9ccc8c09d3.png)

如果没有这个选项，复制以下面的命令：

```bash
sudo spctl --master-disable
```

打开`终端`：

![image-20221211210210968](https://blog.images.bornforthis.cn/docs-images/sha256/07/0780378bb23e4867db7db0fc5316e3e4bd4e090a2e8fa083a534b6752bab2aed.png)

将刚刚复制的命令粘贴到终端中。

然后按下键盘的回车键（return）

输入密码，恭喜您，`您已成功开启任何来源`。

## 发现还是显示“已损坏，无法打开。 您应该将它移到废纸篓”，不急，接下来用这种方法：

如果你是在安装软件的时候出现了下图的这个提示：

![img](https://blog.images.bornforthis.cn/docs-images/sha256/f8/f8ef322fc34d1097c48cccdde9c186a564652135478c7e67070f7c46e869a1d3.png)

## 绕过公证（扩展）

打开终端，输入以下命令：

```bash
sudo xattr -rd com.apple.quarantine /Applications/xxxxxx.app
```

将上面的 `xxxxxx`.app 换成你的 App 名称，比如 `Sketch.app`

```bash
sudo xattr -rd com.apple.quarantine /Applications/Sketch.app
```

或者复制以下命令粘贴到终端后

```bash
sudo xattr -rd com.apple.quarantine
```

> `sudo xattr -r -d com.apple.quarantine /Applications/WebStrom.app`

打开Finder（访达），点击左侧的 `应用程序`，将应用拖进终端中，然后按键盘的回车键（return），输入密码，再按回车键，完成。

> 注意 `quarantine `后面必须有个空格

好了再看一下是不是可以打开APP了！到这里一般情况下 90% 的应用都可以安装运行了（在 MacWk 下载安装的几乎不会有这种情况）

如果还不行，那就需要对应用进行本地签名操作了！

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
