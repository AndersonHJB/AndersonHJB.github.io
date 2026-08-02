---
title: 这个网站，可以一键爬取网页上的所有图片！
date: 2023-01-04 14:18:21
author: AndersonHJB
isOriginal: true
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
head:
  - - meta
    - name: keywords
      content: 一对一辅导编程,编程一对一辅导,少儿编程一对一,Python 1v1,AI悦创,一对一,Python,编程一对一,C++,Java,AI,人工智能,黄家宝,Python一对一教学,Python辅导,全网3000+学员,值得信赖
  - - meta
    - name: description
      content: 一对一辅导编程,编程一对一辅导,少儿编程一对一,Python 1v1,AI悦创,一对一,Python,编程一对一,C++,Java,AI,人工智能,黄家宝,Python一对一教学,Python辅导,全网3000+学员,值得信赖
---

你好，我是悦创。

![image-20230104142030738](https://blog.images.bornforthis.cn/docs-images/sha256/32/3267c77285908ad1f5bc4684486c3967f7d404228a776bee79a8a4a7565da71d.png)

今天给大家推荐一个网站，可以一键下载分析和获取网页上的所有图片，并且可以一键打包下载！

## 介绍

开门见山了，这个网站的链接是：[extract.pics/](https://extract.pics)

长这个样子：

![image-20230104142030738](https://blog.images.bornforthis.cn/docs-images/sha256/32/3267c77285908ad1f5bc4684486c3967f7d404228a776bee79a8a4a7565da71d.png)

大家可以看到，打开之后就是一个醒目的输入框，可以直接输入一个网站链接，然后它就可以把网站上的图片都爬取下来。

我们来做一个测试吧。

比如我随便搜了一个包含一些手机壁纸图片的链接：[https://www.sohu.com/a/582693827_121123945](https://www.sohu.com/a/582693827_121123945)

那我们就直接把这个链接贴到 [extract.pics/](https://extract.pics) 就好了：

![image-20230104142256862](https://blog.images.bornforthis.cn/docs-images/sha256/b7/b79c5da30f1d9d2844a0372ca62228f5b1ac000cee296fdb4f8b22915eb5e8bc.png)

接下来，直接点击 EXTRACT 按钮即可。

这时候我们可以在网站下方看到一些“爬取”进度，比如启动爬取器、分析、滚动、提取等等。

稍等片刻，我们就可以发现所有的图片都被分析出来了：

![image-20230104142313871](https://blog.images.bornforthis.cn/docs-images/sha256/38/38e0d23dbe7efddb6a63c0e0d1b805783bac15f9dcaa38bf7b6066c4500c1706.png)

看，所有好看的壁纸都在这里了！

接下来我们可以直接选中想要的图片，就可以直接下载到本地了，不用一个个保存～

当然也可以自行选择某张图片下载，非常方便！

## 原理

好，其实这个网站基本功能就这么多，当我们想要批量下载某个网页上的图片的时候，它就是一个不错的选择～

下面我们看看这个网站的原理究竟是啥。

滚动到页面下方，其实可以看到网站的一些介绍内容：

![image-20230104142403338](https://blog.images.bornforthis.cn/docs-images/sha256/99/9930e62fcce1650b068d1baaa5dae542adb970d5013bcf71f3d20e248e813af2.png)

和我们理解的一样，就是用来快速提取公开网站图片的一个网站。

当然网站还提供了排序、搜索功能，让我们能更方便地找到想要的图片，也可以多选直接将多张图片以 zip 压缩包的形式下载下来。

网站同时也是完全免费的，当然我们也可以选择捐赠支持。

怎么运作的呢？

接着看。

![image-20230104142430953](https://blog.images.bornforthis.cn/docs-images/sha256/af/af9453b4d26bdcedfcba5a9d7671df4fc6ee11e63323a6d009bd745ce8b75833.png)

其实原理也非常简单了，其实背后就是开了一个 Google Chrome 的浏览器，就是一个 Headless 的 WebDriver，估计大概率就是基于 Selenium、Pyppeteer、Playwright 等做的，然后自动化地把这个页面渲染出来，然后提取所有的图片并返回结果就行了。

似乎对于我们专门做爬虫的程序员来说，没什么稀奇的哈哈。

关于更多内容大家也可以到网站里面去了解下。

今天的分享就先到这里啦，感谢大家！

非常感谢你的阅读，更多精彩内容，请关注我的公众号「AI悦创」。

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
