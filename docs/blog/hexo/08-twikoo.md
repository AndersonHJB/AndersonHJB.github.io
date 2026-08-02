---
title: twikoo邮箱通知模板分享
date: 2024-08-21 23:05:10
author: AI悦创
isOriginal: true
icon: blog
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

::: info

7bu 图床在上传相同图片时，生成的链接是一样的～可以减少成本，但是对客户来说无疑一个人没有那么多访问量的情况下，导致达到那么多。好筹划。

:::

## 1. 效果预览

::: tabs

@tab MAIL_TEMPLATE 预览效果

![MAIL_TEMPLATE](https://blog.images.bornforthis.cn/docs-images/sha256/61/6188cb1f13d093c9b8b7c98883d530ee51c00debab75607de6e0c7827f6d1246.png)

@tab MAIL_TEMPLATE_ADMIN 模板预览效果

![MAIL_TEMPLATE_ADMIN](https://blog.images.bornforthis.cn/docs-images/sha256/4e/4e15480ba0a076c96574ed41e61f7a44c124ddd184cbc4d18148957f71712f75.png)

:::



## 2. 参考文章

- [https://satera.cn/posts/af320382/](https://satera.cn/posts/af320382/)
- 全部代码：[https://github.com/AndersonHJB/BornforthisData/tree/main/bornforthis.cn/blog/hexo/08-twikoo](https://github.com/AndersonHJB/BornforthisData/tree/main/bornforthis.cn/blog/hexo/08-twikoo)

## 3. MAIL_TEMPLATE 模板

代码已经分享到了 [CodePen](https://codepen.io/SNTube/pen/QWzmoPb)

将代码压缩(例如 [minify](https://www.minifier.org/html-minifier))，然后进到 twikoo 后台-配置管理-邮件通知

在 `MAIL_TEMPLATE` 一项填入压缩后的代码

代码如下：

::: tabs

@tab 模版

- [http://codemark.bornforthis.cn/share/b7361051-3f75-4ff4-b856-1c4e2526cc69_20250330201905](http://codemark.bornforthis.cn/share/b7361051-3f75-4ff4-b856-1c4e2526cc69_20250330201905)



@tab 02-我的修改

- [http://codemark.bornforthis.cn/share/ea946d57-73e2-4ac0-baf7-2fe90c0d478c_20250330201959](http://codemark.bornforthis.cn/share/ea946d57-73e2-4ac0-baf7-2fe90c0d478c_20250330201959)

@tab CodePen「防止链接失效｜备份」

- [http://codemark.bornforthis.cn/share/9505bf48-86f5-4932-a058-03710e2966ab_20250330202050](http://codemark.bornforthis.cn/share/9505bf48-86f5-4932-a058-03710e2966ab_20250330202050)

@tab 我压缩后的代码

- [http://codemark.bornforthis.cn/share/e9a73698-00d4-41d2-b3fc-7cf819762294_20250330202125](http://codemark.bornforthis.cn/share/e9a73698-00d4-41d2-b3fc-7cf819762294_20250330202125)

:::

## 4. MAIL_TEMPLATE_ADMIN 模板

如果还需要 MAIL_TEMPLATE_ADMIN 的模板代码

也分享到 [CodePen](https://codepen.io/SNTube/pen/YzdamxM) 了

代码如下：

::: tabs

@tab 模版

- [http://codemark.bornforthis.cn/share/ac214afa-6fb6-4ae3-9ffa-1384b2e2e1ae_20250330202222](http://codemark.bornforthis.cn/share/ac214afa-6fb6-4ae3-9ffa-1384b2e2e1ae_20250330202222)

@tab 我的修改

- [http://codemark.bornforthis.cn/share/26181073-5510-47c1-9681-b04a906a1431_20250330202252](http://codemark.bornforthis.cn/share/26181073-5510-47c1-9681-b04a906a1431_20250330202252)

@tab 压缩后的代码

- [http://codemark.bornforthis.cn/share/c14ad833-3124-4101-982f-e18fe9eaf36d_20250330202337](http://codemark.bornforthis.cn/share/c14ad833-3124-4101-982f-e18fe9eaf36d_20250330202337)

@tab CodePen「防止链接丢失｜备份」

- [http://codemark.bornforthis.cn/share/132dbee3-5c66-4ff6-8ba4-c1570999ec84_20250330202416](http://codemark.bornforthis.cn/share/132dbee3-5c66-4ff6-8ba4-c1570999ec84_20250330202416)

:::



## 5. 问题

对于谷歌邮箱是有问题的，有能力的可以修复评论给我哈～

![](https://blog.images.bornforthis.cn/docs-images/sha256/7b/7b9a3249931d9e13de4e848aa474b50c4052cd65ef60994663a4ae53096faf48.png)

::: tabs

@tab Code1

- [http://codemark.bornforthis.cn/share/508ac494-a000-406f-bd1e-f948d719fa76_20250330202448](http://codemark.bornforthis.cn/share/508ac494-a000-406f-bd1e-f948d719fa76_20250330202448)

@tab Code2

- [http://codemark.bornforthis.cn/share/a045d8e4-1d00-4c16-a384-aa81af328323_20250330202523](http://codemark.bornforthis.cn/share/a045d8e4-1d00-4c16-a384-aa81af328323_20250330202523)



:::

## 6. 修复记录

### 6.1 第一次修复

- 修复了在谷歌邮箱中不正确显示的问题(删除了不兼容的 position、justify-content、flex-wrap、align-items、top、flex-direction)

::: tabs

@tab CodePen「MAIL_TEMPLATE 模板」

- [http://codemark.bornforthis.cn/share/8f558734-5d90-492c-89ca-9286dec0f83b_20250330202554](http://codemark.bornforthis.cn/share/8f558734-5d90-492c-89ca-9286dec0f83b_20250330202554)

@tab 我的修改「MAIL_TEMPLATE 模板」

- [http://codemark.bornforthis.cn/share/a80eacca-8cea-460b-bdfe-4fd1cda1de35_20250330202623](http://codemark.bornforthis.cn/share/a80eacca-8cea-460b-bdfe-4fd1cda1de35_20250330202623)

@tab 压缩后「MAIL_TEMPLATE 模板」

- [http://codemark.bornforthis.cn/share/ec9f25e6-84c9-46de-81ae-523d48faec41_20250330202705](http://codemark.bornforthis.cn/share/ec9f25e6-84c9-46de-81ae-523d48faec41_20250330202705)



:::

::: tabs

@tab CodePen「MAIL_TEMPLATE_ADMIN 模板」

- [http://codemark.bornforthis.cn/share/63c22c35-5f35-42d2-9726-1ea057888572_20250330202754](http://codemark.bornforthis.cn/share/63c22c35-5f35-42d2-9726-1ea057888572_20250330202754)

@tab 我的修改

- [http://codemark.bornforthis.cn/share/226929ea-99ac-4e3e-bcb0-e6c4f4a0c9dd_20250330202823](http://codemark.bornforthis.cn/share/226929ea-99ac-4e3e-bcb0-e6c4f4a0c9dd_20250330202823)

@tab 我的压缩

- [http://codemark.bornforthis.cn/share/9236e8d0-8dd9-454c-bcf6-1cb4c50d6fdb_20250330202850](http://codemark.bornforthis.cn/share/9236e8d0-8dd9-454c-bcf6-1cb4c50d6fdb_20250330202850)

:::

### 6.2 第二次修复

::: tabs

@tab MAIL_TEMPLATE模板

- [http://codemark.bornforthis.cn/share/a9f415ed-4d2e-4594-948d-dfd161d4bcef_20250330202931](http://codemark.bornforthis.cn/share/a9f415ed-4d2e-4594-948d-dfd161d4bcef_20250330202931)

@tab MAIL_TEMPLATE模板压缩

- [http://codemark.bornforthis.cn/share/11bae9aa-96eb-4c09-90e8-eefedfa8d453_20250330202958](http://codemark.bornforthis.cn/share/11bae9aa-96eb-4c09-90e8-eefedfa8d453_20250330202958)

@tab MAIL_TEMPLATE_ADMIN模板

- [http://codemark.bornforthis.cn/share/7278e641-c1f2-4b01-8c6e-20effc177405_20250330203024](http://codemark.bornforthis.cn/share/7278e641-c1f2-4b01-8c6e-20effc177405_20250330203024)

@tab MAIL_TEMPLATE_ADMIN模板

- [http://codemark.bornforthis.cn/share/b4ef311f-870d-4aa4-83ce-4c7d059ae3ec_20250330203047](http://codemark.bornforthis.cn/share/b4ef311f-870d-4aa4-83ce-4c7d059ae3ec_20250330203047)



:::

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





