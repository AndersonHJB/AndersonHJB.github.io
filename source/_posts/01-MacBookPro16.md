---
title: MacOS 常用指令
abbrlink: daebc472
date: 2024-08-16 17:42:17
top_img: /img/posts/01-MacBookPro16/macbook.png
cover: /img/posts/01-MacBookPro16/macbook.png
tags:
  - 日常
  - 评测
categories: 好物推荐
---

你好，我是悦创。

现在 m2 pro 都出了，主要是性能提升并不是很大，似乎 cpu 只有 10% 不到，而且我也用不上 GPU，为了升级 m2pro 要多花 3000 块钱，考虑再三还是放弃了，买了我的 m1pro 的 macbookpro，续航最强的 16寸版本。

# 1. 为什么 16 寸

我在买电脑之前一直想象自己要买一个 14寸的笔记本，因为着实受不了这个重量。后来考虑到做设计和写代码比较需要大屏幕，再加上我不太可能外界屏幕（因为家里公司都没有外接显示器）也不打算配一个，因为我之前 16寸的 19款 MacBook Pro 的尺寸非常合适，所以最终考虑了三个多小时，还是选的 16寸。（最终，我还是 16寸➕两个显示屏）这你，受得了吗......

对于 16寸和 14寸的选择，我的建议是：

- 写代码工作因为有的时候一行会比较长，较宽的屏幕更好展现

- 写代码 app 时右侧挂虚拟机，查看预览效果，所以较宽的屏幕更好展现

- 经常出差建议 macbookair 或者 14寸 pro

- 如果不打算外接显示器使用，建议酌情考虑 16寸

- 需要长续航选择16寸

# 2. 命令行

## 2. 应用损坏

- 移除应用的安全隔离属性:


打开 “终端” 执行如下命令（根据提示输入您的密码即可）：

```bash
sudo xattr -dr com.apple.quarantine /Applications/name.app
```

`/Applications/name.app` 如果不知道该如何输入，将 App 直接拖拽 `sudo xattr -rd com.apple.quarantine`（中间有个空格）后面即可。
