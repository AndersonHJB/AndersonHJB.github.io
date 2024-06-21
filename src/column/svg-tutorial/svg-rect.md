---
title: SVG <rect>
date: 2022-11-03 11:38:48
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

## SVG Shapes

SVG有一些预定义的形状元素，可被开发者使用和操作：

- 矩形 `<rect>`
- 圆形 `<circle>`
- 椭圆 `<ellipse>`
- 线 `<line>`
- 折线 `<polyline>`
- 多边形 `<polygon>`
- 路径 `<path>`

下面的章节会为您讲解这些元素，首先从矩形元素开始。

------

## SVG 矩形 - `<rect>`

### 实例 1

`<rect>` 标签可用来创建矩形，以及矩形的变种：

下面是 SVG 代码：

```html
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <rect width="300" height="100"
  style="fill:rgb(0,0,255);stroke-width:1;stroke:rgb(0,0,0)"/>
</svg>
```

<button name="button" style="color: black"><a href="https://bornforthis.cn/web_runing/svg/04/04.html" target="_blank">尝试一下</a></button>

对于 Opera 用户： [查看SVG文件](https://bornforthis.cn/web_runing/svg/04/rect1.svg)（右键单击SVG图形预览源）。

**代码解析:**

- rect 元素的 width 和 height 属性可定义矩形的高度和宽度
- style 属性用来定义 CSS 属性
- CSS 的 fill 属性定义矩形的填充颜色（rgb 值、颜色名或者十六进制值）
- CSS 的 stroke-width 属性定义矩形边框的宽度
- CSS 的 stroke 属性定义矩形边框的颜色

### 实例 2

让我们看看另一个例子，它包含一些新的属性：

```html
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <rect x="50" y="20" width="150" height="150"
  style="fill:blue;stroke:pink;stroke-width:5;fill-opacity:0.1;
  stroke-opacity:0.9"/>
</svg>
```

```html
<!DOCTYPE html>
<html>
<body>

<svg width="400" height="180">
  <rect x="50" y="20" width="150" height="150" style="fill:blue;stroke:pink;stroke-width:5;fill-opacity:0.1;stroke-opacity:0.9" />
  Sorry, your browser does not support inline SVG.  
</svg>
 
</body>
</html>
```

<button name="button" style="color: black"><a href="https://bornforthis.cn/web_runing/svg/04/04-1.html" target="_blank">尝试一下</a></button>

**代码解析：**

- x 属性定义矩形的左侧位置（例如，`x="0"`  定义矩形到浏览器窗口左侧的距离是 `0px`）
- y 属性定义矩形的顶端位置（例如，`y="0"` 定义矩形到浏览器窗口顶端的距离是 `0px`）
- CSS 的 `fill-opacity` 属性定义填充颜色透明度（合法的范围是：0 - 1）
- CSS 的 `stroke-opacity` 属性定义轮廓颜色的透明度（合法的范围是：0 - 1）

### 实例 3

定义整个元素的不透明度：

下面是 SVG 代码：

```html
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <rect x="50" y="20" width="150" height="150"
  style="fill:blue;stroke:pink;stroke-width:5;opacity:0.5"/>
</svg>
```

<button name="button" style="color: black"><a href="https://bornforthis.cn/web_runing/svg/04/04-2.html" target="_blank">尝试一下</a></button>

- CSS opacity 属性用于定义了元素的透明值 (范围: 0 到 1)。

### 实例 4

最后一个例子，创建一个圆角矩形：

下面是 SVG 代码：

```html
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <rect x="50" y="20" rx="20" ry="20" width="150" height="150"
  style="fill:red;stroke:black;stroke-width:5;opacity:0.5"/>
</svg>
```

- rx 和 ry 属性可使矩形产生圆角。

<button name="button" style="color: black"><a href="https://bornforthis.cn/web_runing/svg/04/04-3.html" target="_blank">尝试一下</a></button>





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