---
title: Hexo 我在主题内做的修改
date: 2024-08-17 13:23:51
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

## 1. custom.css

```bash {3}
# /themes/anzhiyu/source/css/_extra/anzhiyu/custom.css
h1#site-title {
  display: none !important;
  font-size: 3em !important;
}
```

## 2. 朋友圈版权修改

- Path: `AndersonHJB.github.io/source/static/js/friends.js`

```javascript
ii("a",{href:"https://bornforthis.cn/",target:"_blank"},"AI悦创")],-1))),Dz=Mz((()=>ii("div",null,[li(" FrontEnd by "),ii("a",{href:"https://bornforthis.cn/",target:"_blank"},"Bornforthis")],-1)))
```

- 朋友圈前端：[https://github.com/AndersonHJB/hexo-circle-of-friends-front](https://github.com/AndersonHJB/hexo-circle-of-friends-front)
- 朋友圈后端：[https://github.com/AndersonHJB/hexo-circle-of-friends](https://github.com/AndersonHJB/hexo-circle-of-friends)

## 3. 评论区框

```bash
欢迎光临AI悦创！🥳 <br>留下您的想法与意见！💕 <br>祝您有愉快的一天！🤣
```

## 4. 地区欢迎卡片

- 保存 JS 代码并修改里面的经纬度为你自己的：[https://blog.bornforthis.cn/static/js/welcome.js](https://blog.bornforthis.cn/static/js/welcome.js)

```javascript
// let dist = Bornforthis.getDistance(填写你的经度, 填写你的纬度, ipStore.data.lng, ipStore.data.lat),
let dist = Bornforthis.getDistance(118.9929, 25.4536, ipStore.data.lng, ipStore.data.lat),
```



















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





