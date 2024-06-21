---
title: SVG 在 HTML 页面
date: 2022-11-01 22:34:03
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

SVG 文件可通过以下标签嵌入 HTML 文档：`<embed>` 、`<object>` 或者 `<iframe>`。

SVG 的代码可以直接嵌入到 HTML 页面中，或您可以直接链接到 SVG 文件。



## 使用 `<embed>` 标签

`<embed>` :

- 优势：所有主要浏览器都支持，并允许使用脚本
- 缺点：不推荐在 HTML4 和 XHTML 中使用（但在 HTML5 允许）

**语法:**

```python
<embed src="circle1.svg" type="image/svg+xml" />
```

## 使用 `<object>` 标签

`<object>`:

- 优势：所有主要浏览器都支持，并支持 HTML4，XHTML 和 HTML5 标准
- 缺点：不允许使用脚本。

```html
<object data="circle1.svg" type="image/svg+xml"></object>
```



## 使用 `<iframe>` 标签

- 优势：所有主要浏览器都支持，并允许使用脚本
- 缺点：不推荐 在HTML4 和 XHTML 中使用（但在HTML5允许）

**语法:**

```html
<iframe src="circle1.svg"></iframe>
```



## 直接在HTML嵌入SVG代码

在Firefox、Internet Explorer9、谷歌 Chrome 和 Safari 中，你可以直接在 HTML 嵌入 SVG 代码。

```html
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
   <circle cx="100" cy="50" r="40" stroke="black" stroke-width="2" fill="red" />
</svg>
```

<button name="button" style="color: black"><a href="https://bornforthis.cn/web_runing/svg/03/03.html" target="_blank">尝试一下</a></button>

## 链接到 SVG 文件

您还可以用 `<a>` 标签链接到一个 SVG 文件：链接到 SVG 文件

您还可以用 `<a>` 标签链接到一个 SVG 文件：

```html
<a href="circle1.svg">查看 SVG 文件</a>
```

**结果:**[查看 SVG 文件](https://bornforthis.cn/web_runing/svg/03/circle1.svg)

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