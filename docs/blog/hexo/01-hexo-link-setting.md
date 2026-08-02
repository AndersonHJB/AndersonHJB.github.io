---
title: Hexo 博客生成永久链接
date: 2024-08-07 22:01:09
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

![封面](https://blog.images.bornforthis.cn/docs-images/sha256/06/06f51214ec48f4130b83761ee0ac5a7a55eff124412740c393678516f4f57f38.png)

::: tip 插件链接

先放上插件链接：[hexo-abbrlink](https://github.com/Rozbo/hexo-abbrlink)

:::

## 1. 前言

Hexo 文章链接默认的生成规则是：`:year/:month/:day/:title`，是按照年、月、日、标题来生成的。

这样的话，生成的链接非常长长长长长，而且如果我们的 Markdown 使用中文标题，那就更惨了，URL 一转码，将是一场灾难。

更难受的是如果我们修改了文章的日期或者标题，那么将导致链接改变，别人或者你分享出去的文章就会 404，这非常的蛋疼啊，所以就有了这种插件，不论你如何修改文章的日期、名称，只要不改变 footer-matter 中的 id 值，那么文章链接永远不会变。

## 2. 安装插件

```bash
npm install hexo-abbrlink --save
```

## 3. 使用

修改 `_config.yml` ：

```bash
## permalink: :year/:month/:day/:title/
permalink: posts/:abbrlink.html  ## 此处可以自己设置
```

增加以下配置：（还是这个 yml）

```bash
## abbrlink config
abbrlink:
  alg: crc32      #support crc16(default) and crc32 进制
  rep: hex        #support dec(default) and hex  算法
  drafts: false   #(true)Process draft,(false)Do not process draft. false(default) 
  ## Generate categories from directory-tree
  ## depth: the max_depth of directory-tree you want to generate, should > 0
  auto_category:
     enable: true  #true(default)
     depth:        #3(default)
     over_write: false 
  auto_title: false #enable auto title, it can auto fill the title by path
  auto_date: false #enable auto date, it can auto fill the date by time today
  force: false #enable force mode,in this mode, the plugin will ignore the cache, and calc the abbrlink for every post even it already had abbrlink.
```

其他配置意义可查看插件文档哦，链接在顶部。

记着要先 `hexo clean` 再 `hexo g` 哦～～～

生成的链接示意：

![](https://blog.images.bornforthis.cn/docs-images/sha256/6d/6dfd7a7df4724ab87535ddbd9a272c0e263c121964e97ad947b874b77505e71f.png)



## 4. 致谢🙏

原文：[https://imbhj.com/posts/b6a99401/](https://imbhj.com/posts/b6a99401/)

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





