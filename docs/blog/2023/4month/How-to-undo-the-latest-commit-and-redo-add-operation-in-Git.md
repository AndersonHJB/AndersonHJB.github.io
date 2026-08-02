---
title: Question1:如何在Git中撤销最近的commit并重新执行add操作？「有问必答」
date: 2023-04-06 16:57:59
author: AI悦创
isOriginal: true
category: 
    - Python 问卷调查
    - 办公自动化
tag:
    - Python 问卷调查
    - 办公自动化
icon: python
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

你好，我是悦创。

这是有问必答系列，你可以把你的问题在文章下评论，无论什么问题，我都会为你解答。

![](https://blog.images.bornforthis.cn/docs-images/sha256/f5/f5d14ef9ef73a91ee845184b918f93fd8f65c170bfd5420dcd46a419392ce671.png)

如果你想撤销最近的一次提交并将更改重新放回暂存区（staging area），可以使用如下命令：

```bash
git reset --soft HEAD^
```

这将撤销最近的一次提交，同时保留更改在暂存区。之后，你可以使用 git add 将你想要的更改重新添加到暂存区，然后进行新的提交。

如果你想完全撤销最近的一次提交并丢弃所有更改，可以使用如下命令：

```bash
git reset --hard HEAD^
```

这将撤销最近的一次提交并丢弃所有更改。请谨慎使用这个命令，因为它会永久删除你的更改。



欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！

::: details 公众号：AI悦创【二维码】

![](https://blog.images.bornforthis.cn/docs-images/sha256/77/77f67d48a67ec6a44a4ef1f01ffc85830eb3c121b1ece45dc5ada06e20e2f52b.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Linux、Web全栈」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](https://blog.images.bornforthis.cn/docs-images/sha256/30/3087c629da73428daa0ee050f5b31709c30f650686164b54c724b892a422c585.jpg)





