---
title: 09-sqlite 创建表格
date: 2022-07-17 10:39:49
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

comment: true

backToTop: true
toc: true
---

## sqlitestudio 介绍

本节内容的目的，是教大家如何在非代码的情况下，创建 sqlite3 数据库文件和表格编辑操作。

既然不写代码，就肯定需要借助软件来操作。本节课对应的源码中，准备好了 windows、macos、linux 三个系统的 sqlitestudio 软件，如下图：

![image-20220717104603622](https://blog.images.bornforthis.cn/docs-images/sha256/1b/1b223859cf1d36550cd82e3e25329a835ff9e69c2b2eec2f5c5ea1f2efa10463.png)

> windows 使用 zip；macos 使用 dmg；linux 使用 tar.xz；

sqlitestudio 是一款绿色软件，安装你的操作系统所对应的 sqlitestudio 软件，然后执行，就可以得到启动界面。

![image-20220717104952779](https://blog.images.bornforthis.cn/docs-images/sha256/79/79c87101499efbc455cd63bbfc62020b3afe26b6a446a3ed9b06cd564a895fc9.png)

## 新建  sqlite 数据库文件

点击左上角的数据库，选择添加数据库，则会弹框，让你选择某个数据库文件，或者创建一个新的 sqlite 文件

![image-20220717120252540](https://blog.images.bornforthis.cn/docs-images/sha256/be/bea27f69d7ce0f4fe680b35821254955e0f824d63bfe85523e744f9f184cd91a.png)

点击黄色的文件夹，是指打开某个存在的 sqlite 文件。

点击 `绿色的+` ，是新建一个 sqlite 文件，并且你也需要指定存储的具体位置。

选择在三个 sqlitestudio 安装包旁边，新建一个名为 `first.db` 的文件，如下截图：

![image-20220717120453407](https://blog.images.bornforthis.cn/docs-images/sha256/31/3181d70f3b4e32ba41747a89dc31dee73674e59a57d0deb53bb13cfc123514a5.png)

并且，文件也有对应的生成。

![image-20220717133154926](https://blog.images.bornforthis.cn/docs-images/sha256/cb/cb32433806bd420a1db8aa2b913420955ea7574abd19297cc14488efe1829b15.png)

## 新增数据

回到 sqlitestudio 软件界面，打开刚新建的 `first.db` ，里面什么都没有，表格是空的，现在来新建一个表格。

鼠标右键点击 Tables，然后选择新建表格，在新出的界面中，写表格名、字段名和字段类型，如下图：

**方法一：**

![image-20220717133809389](https://blog.images.bornforthis.cn/docs-images/sha256/54/541730dc2b773643c89f3dc2b4b04cfe333f4a08aa62dec0475903efab8ca6c9.png)

**方法二：**

![image-20220717133940556](https://blog.images.bornforthis.cn/docs-images/sha256/87/87e8189e1479964b825886f671f3972abcae88ffbba459ddfae86b6f66c7b02e.png)

---

![image-20220717134958299](https://blog.images.bornforthis.cn/docs-images/sha256/d6/d63d99efda0ca3b33d929d8e09e4b65ed988629ecce01d0b9bb0d2b0c0a460c0.png)

![image-20220717135817135](https://blog.images.bornforthis.cn/docs-images/sha256/6f/6fba0d7e72961a1117a773bd8b7ad34a81c09897f2565281b4f9fddb27c9b0b0.png)

Table Name 表格名，输入具体名称。最上方框中的那个按钮，是增列字段的按钮，点击按钮弹出中间的字段信息，输入字段名、类型、大小等。

这里写了id title content author 四个字段信息，然后点击绿色的勾，保存表格即可。

![image-20220717141101312](https://blog.images.bornforthis.cn/docs-images/sha256/7e/7e49862303a0b103c3265c924dda6ed754abe1f15dfd39125b3a78b8254004b9.png)

![image-20220717141230058](https://blog.images.bornforthis.cn/docs-images/sha256/79/79a98f2e936d9d9b92a6fa8f087e105797ca05f6fc959ff2d1c71f62e77a953c.png)

保存了文件，重新刷新页面，就可以查看数据栏，如下：

![image-20220717141304198](https://blog.images.bornforthis.cn/docs-images/sha256/f8/f85982fa1669a12650c6756084c83c30fca641df4e92538eb7fe669c186639a3.png)

![image-20220717141702850](https://blog.images.bornforthis.cn/docs-images/sha256/53/53fbd4a5cf34c8974f137f386cf49820818a001184605e5d3a7f97846e07b1c3.png)

点击`绿色的+`号，然后增加几条数据，方便我们下节课的代码练习。图中有三条。

sqlitestudio 也要保留，方便我们下节课，查看代码练习的数据变化结果。

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













