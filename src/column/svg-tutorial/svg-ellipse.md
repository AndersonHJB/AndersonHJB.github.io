---
title: SVG <ellipse>
date: 2022-11-03 15:27:36
author: AI悦创
isOriginal: true
category: 
    - svg
    - web
    - 前端
tag:
    - svg
    - web
    - 前端
icon: svg
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

## SVG 椭圆 - `<ellipse>`

### 实例 1

`<ellipse>` 元素是用来创建一个椭圆：

椭圆与圆很相似。不同之处在于椭圆有不同的 x 和 y 半径，而圆的 x 和 y 半径是相同的：

下面是 SVG 代码：

```html
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <ellipse cx="300" cy="80" rx="100" ry="50"
  style="fill:yellow;stroke:purple;stroke-width:2"/>
</svg>
```

<button name="button" style="color: black"><a href="https://bornforthis.cn/web_runing/svg/06/06.html" target="_blank">尝试一下</a></button>

**代码解析：**

- CX 属性定义的椭圆中心的 x 坐标
- CY 属性定义的椭圆中心的 y 坐标
- RX 属性定义的水平半径
- RY 属性定义的垂直半径

## 实例 2

下面的例子创建了三个累叠而上的椭圆：

下面是 SVG 代码：

```html
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <ellipse cx="240" cy="100" rx="220" ry="30" style="fill:purple"/>
  <ellipse cx="220" cy="70" rx="190" ry="20" style="fill:lime"/>
  <ellipse cx="210" cy="45" rx="170" ry="15" style="fill:yellow"/>
</svg>
```

<button name="button" style="color: black"><a href="https://bornforthis.cn/web_runing/svg/06/06-1.html" target="_blank">尝试一下</a></button>

## 实例 3

下面的例子组合了两个椭圆（一个黄的和一个白的）：

下面是 SVG 代码：

```html
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <ellipse cx="240" cy="50" rx="220" ry="30" style="fill:yellow"/>
  <ellipse cx="220" cy="50" rx="190" ry="20" style="fill:white"/>
</svg>
```

<button name="button" style="color: black"><a href="https://bornforthis.cn/web_runing/svg/06/06-2.html" target="_blank">尝试一下</a></button>

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