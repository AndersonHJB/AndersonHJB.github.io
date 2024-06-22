---
title: 05-Web Hw
date: 2023-03-04 12:17:46
author: AI悦创
isOriginal: true
category:
    - Python
    - Python一对一教学
    - Python一对一辅导
    - Python 辅导
    - 编程一对一教学
    - 少儿编程一对一
    - NYU编程辅导
    - NYU Python辅导
tag:
    - Python
    - Python一对一教学
    - Python一对一辅导
    - Python 辅导
    - 编程一对一教学
    - 少儿编程一对一
    - NYU编程辅导
    - NYU Python辅导
icon: web
sticky: false
star: false
article: true
timeline: true
image: false
navbar: true
sidebarIcon: true
headerDepth: 5
comment: true
lastUpdated: true
backToTop: true
toc: true
---

## 1. div 块的作用

在 HTML 中，div（或称为“division”）是一种用于将 HTML 文档分割成可管理的部分的元素。Div 没有特定的含义或语义，它只是用于将 HTML 文档中的内容分组并在页面上创建容器。通过使用 CSS，我们可以根据需要在 div 中放置内容并样式化该内容。

Div 元素通常用于以下目的：

1. 分割页面：通过将页面分成多个 div，可以使网页的结构更清晰，并使其更易于管理和维护。例如，您可以将网页分成页眉，侧栏，主体和页脚，并在每个部分中使用单独的 div 元素。
2. CSS 样式：Div 元素可以用于将 CSS 样式应用于特定部分的 HTML 页面。例如，您可以使用 CSS 将特定 div 中的文本颜色更改为蓝色。
3. JavaScript 操作：使用 div 元素可以在 HTML 中创建 JavaScript 操作的容器。例如，您可以使用 JavaScript 在 div 中创建滑动动画。

总之，div 元素是 HTML 的基本构建块之一，用于将内容分组并在网页上创建容器。它可以用于多种用途，例如分割页面，应用 CSS 样式和 JavaScript 操作。

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Website</title>
    <style>
      /* 定义样式 */
      #header {
        background-color: #ccc;
        height: 100px;
        text-align: center;
      }
      
      #sidebar {
        background-color: #eee;
        width: 200px;
        float: left;
        height: 500px;
      }
      
      #content {
        margin-left: 220px;
        padding: 20px;
        height: 500px;
      }
      
      #footer {
        background-color: #ccc;
        height: 100px;
        clear: both;
        text-align: center;
      }
    </style>
  </head>
  <body>
    <div id="header">
      <h1>Welcome to My Website!</h1>
    </div>
    
    <div id="sidebar">
      <h2>Sidebar</h2>
      <ul>
        <li><a href="#">Link 1</a></li>
        <li><a href="#">Link 2</a></li>
        <li><a href="#">Link 3</a></li>
      </ul>
    </div>
    
    <div id="content">
      <h2>Main Content</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu enim purus. Fusce sagittis auctor semper. Ut vel metus lorem. Morbi ultrices leo nec ipsum faucibus euismod. Praesent ullamcorper massa sit amet lorem eleifend feugiat. Quisque tempor dolor nec arcu tincidunt, vel suscipit sapien consectetur. Sed ut sapien tincidunt, vestibulum libero non, eleifend nulla. In tincidunt hendrerit metus sit amet egestas. Donec vel ipsum quis lectus bibendum rutrum at ut augue. </p>
    </div>
    
    <div id="footer">
      <p>&copy; 2023 My Website</p>
    </div>
  </body>
</html>

```

在这个示例中，我们使用了4个div元素：`#header`，`#sidebar`，`#content` 和 `#footer`。`#header` 用于放置网页的标题和标语。`#sidebar` 用于放置侧栏导航菜单。`#content` 用于放置网页的主要内容，包括标题和段落文本。`#footer` 用于放置版权信息和其他页脚元素。

在 CSS 样式中，我们使用ID选择器（以 `#` 开头）对每个 div 元素进行样式设置。例如，我们将 `#header` 的背景颜色设置为灰色，并将其高度设置为 100 像素。我们还将 `#sidebar` 的宽度设置为 200 像素，并将其浮动到左侧。

总之，使用 div 元素可以将网页内容分组并在页面上创建容器，使网页的结构更加清晰和易于管理。



## 2. 图片并排显示

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Photo Wall Website</title>
    <style>
      .photo {
        display: inline-block;
        position: relative;
        margin: 10px;
        overflow: hidden;
        border-radius: 10px;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
      }
      
      .photo img {
        display: block;
        width: 100%;
        height: auto;
        transition: transform 0.5s ease;
      }
      
      .photo:hover img {
        transform: scale(1.1) rotate(5deg);
      }
      
      .photo .caption {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 10px;
        background-color: rgba(0, 0, 0, 0.5);
        color: #fff;
        text-align: center;
        transition: bottom 0.5s ease;
      }
      
      .photo:hover .caption {
        bottom: -50px;
      }
    </style>
  </head>
  
  <body>
    <div class="photo">
      <img src="https://bornforthis.cn/aiyc.svg" alt="Photo 1">
      <div class="caption">Flying over the mountains</div>
    </div>
    
    <div class="photo">
      <img src="https://bornforthis.cn/aiyc.svg" alt="Photo 2">
      <div class="caption">Sailing into the sunset</div>
    </div>
    
    <div class="photo">
      <img src="https://bornforthis.cn/aiyc.svg" alt="Photo 3">
      <div class="caption">Exploring the city from above</div>
    </div>
    
    <div class="photo">
      <img src="https://bornforthis.cn/aiyc.svg" alt="Photo 4">
      <div class="caption">Admiring the architecture</div>
    </div>
    
    <div class="photo">
      <img src="https://bornforthis.cn/aiyc.svg" alt="Photo 5">
      <div class="caption">Enjoying the beach life</div>
    </div>
  </body>
</html>
```

CSS 代码中，我们定义了一个名为“photo”的类，用于包装每个照片。该类设置了一些 CSS 属性，例如“`display: inline-block`”以使其水平排列，以及“`border-radius: 10px`”以获得圆角矩形效果。

在照片类中，我们还定义了另一个名为“caption”的类，用于包装照片标题。此类使用绝对定位放置在照片的底部，并使用CSS过渡使标题在鼠标悬停时动画滑出。

最后，我们在 HTML 中包含了一些样本照片和标题，例如“`Flying over the mountains`”和“`Sailing into the sunset`”。您可以将这些示例更改为您自己的照片和标题，以制作自己的照片墙网。





::: details 公众号：AI悦创【二维码】

![](/gzh.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Web、Linux」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](/zsxq.jpg)
