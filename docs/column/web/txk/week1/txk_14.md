---
title: 2-1 互联网基本原理「了解即可」
date: 2022-11-25 12:54:05
author: AI悦创
isOriginal: true
category: web 专栏
tag:
    - web 专栏
icon: web
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

## 1. 在本地开发，在服务器共享

这是什么意思呢？

这是说，我们程序员开发网站都是在自己电脑上开发的，我们管这样的环境称为本地。也就是，我们所有的开发操作都是在本地上完成的。

![本地开发的程序员](https://blog.images.bornforthis.cn/docs-images/sha256/8f/8f264f78ebeef51691432533497a0dbd3a371131591c5582b93f8724da10a0f3.jpg)

我们开发的 `.html` 、`.css` 、`.js` 等文件，是需要上传到服务器后，才能被用户看见的。

![img](https://blog.images.bornforthis.cn/docs-images/sha256/e4/e47b668a7514e69ac9993e780036a8c25b1d7ebc4aa3e4cfd6cbccf07099468c.jpg)

![image-20221126091728915](https://blog.images.bornforthis.cn/docs-images/sha256/f2/f2ae1322e23677e0686aa25ffa841b6ba9d3ae362a563a83a17613f77a0957dc.png)



服务器在上方的右边，这是一个服务器的机群，服务器实际上就是“性能”非常高的——计算机，这些计算机 24h 不断电。因为，一旦断电别的用户就不能看见我们做好的网页了。

**我们的开发人员，就是在本地将 HTML、CSS、Js，把这些开发好，上传这些文件到服务器当中，那服务器中就存储了这些文件。为什么要把文件上传到服务器？——因为，服务器有共享文件的能力。**

::: tip

比如将 `bornforthis.html` 文件传输到慕课网服务器的 b 文件夹中，此时这个文件就拥有了网址：`https://bornforthis.cn/b/bornforthis.html` 所有用户都可以访问这个网址，看见我们做的网页啦。

:::

我们要更新或者修改网站，你也只需本地修改再上传覆盖等都可以。

## 2. HTTP 协议

我们刚刚说，做好的程序或者网页，都会存储到服务器上，那么用户可能会用：笔记本电脑、iPad、手机等来访问我们的网页。

**那么，用户是怎么访问网页的呢？**

相信大家会有类似的经历，其实就是输入网址，也有可能扫描二维码进入网站。——那输入网址就是 **HTTP 请求** 。那什么是 HTTP 请求呢？我们一会给你一个定义。

服务器会正确识别发来的 HTTP 请求，分析出用户想看的是哪个文件夹中的哪个文件。然后返回给用户所请求的网页：

![image-20221126100921230](https://blog.images.bornforthis.cn/docs-images/sha256/0b/0bc267a4b79040527f5931e382bcadf394f462d6fdae992c62875417044a7e5b.png)

这样的我们称为 **HTTP 响应** 。

[03-从输入 url 到页面展现发生了什么？](https://bornforthis.cn/column/crawler/replenish03.html)

- HTTP 协议（Hypertext Transfer Protocol，超文本传输协议）是互联网数据传输的常见协议。
- 一次 HTTP 事务由“HTTP 请求” 和 “HTTP 响应” 构成的。
- 网址前的 `http://` 就表示用 http 协议请求页面

## 3. 什么是前端、后端？

![image-20221126120140068](https://blog.images.bornforthis.cn/docs-images/sha256/5d/5d2da6680491cf28f1eddc05c4048153bac5e4c3838ef38d85ab3f3e85f72dff.png)



举个例子：

![image-20221126162348972](https://blog.images.bornforthis.cn/docs-images/sha256/da/dae86be5fa5a1b2cd273dc40a5fc653475ad96f56d33d63c4ef8fae9b25c608e.png)

你现在看见的是我的个人网站，那这个网站要被用户看见，要前端开发工程师和后端开发工程师共同配合的结果。——这是什么意思呢？

![image-20221126162514205](https://blog.images.bornforthis.cn/docs-images/sha256/1d/1d33771088e8a54b05248f7cb0161b9d41abae0c2461b4dfb2076e1649792fed.png)

这个网站的文章、标题、分类数据、数量等是这些数据，实际上是从数据库中检索而来的。然后把数据给前端，前端来进行渲染搭建。

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









