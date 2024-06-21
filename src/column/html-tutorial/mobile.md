---
title: 15-移动设备网页设计
date: 2022-11-23 20:53:38
author: AI悦创
isOriginal: true
category: 
    - html
    - web
tag:
    - html
    - web
icon: web
sticky: false
star: false
article: true
timeline: true
image: false
navbar: true
sidebarIcon: true
headerDepth: 3
comment: true
lastUpdated: true
editLink: false
backToTop: true
---

## `<meta>`的 viewport 设置

`<meta>`的 viewport 设置用来控制网页的视觉大小。

```html
<meta name="viewport" content="initial-scale=1">
```

这表示网页初始加载不进行放大或缩小。

下面代码指定网页适配的视口宽度。

```html
<meta name="viewport" content="width=320">
```

下面代码指定网页宽度为设备宽度。

```html
<meta name="viewport" content="width=device-width">
```

下面代码指定用户不能放大网页。

```html
<meta name="viewport" content="maximum-scale=1">
```

适用手机的网页，一般要写成下面这样。

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！

::: details 公众号：AI悦创【二维码】

![](/gzh.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发，Web，Linux」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](/zsxq.jpg)

