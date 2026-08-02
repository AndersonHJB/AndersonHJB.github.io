---
title: VGC104-SCRIPTINGFORGAMES-LAB4「多伦多电影学院」
date: 2024-11-23 09:17:42
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

LAB #4 DUE DATE: SUNDAY OF WEEK 6

## Title

Wack-a-Mole

## Learning Objectives

- Identify HTML tags which facilitate game creation
- Identify CSS attributes which facilitate game layout

## Instructions

In a team of up to two people, create a web page which displays the images supplied:

- LEFT IMAGE: Monty Mole Idle frame 1
- RIGHT IMAGE: Luigi Wack frame 1

The two images are arranged horizontally, adjacent to each other. Below the images, write the text HITS: and display a counter variable value, indicating the number of hits Luigi triggered.

Luigi should monitor for mouse clicks down and up. When the mouse click is down, change the image sources to:

- LEFT IMAGE: Monty Mole Idle frame 2
- RIGHT IMAGE: Luigi Wack frame 2

In addition, decrease the width and height of the left image by 5 pixels after each click, and update the hit counter.

When the mouse click is up, change the image sources back to:

- LEFT IMAGE: Monty Mole Idle frame 1
- RIGHT IMAGE: Luigi Wack frame 1

Monty Mole should monitor for mouse clicks, and when clicked, will reset the left image to its original size. The hit counter text should be formatted with an H1 header and will be controlled by a variable tracking the number of clicks.

> Use document.getElementById to access the HTML tag attributes. Do not use document.write to display text.

You can use naturalWidth and naturalHeight to reset the image size.

## Deliverables

- Submit your web page and all external files
- Naming Convention:VGC104_L04_Lastname_Firstname.zip

::: code-tabs

@tab Code

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Luigi 和 Monty Mole</title>
    <style>
        body {
            text-align: center;
            font-family: Arial, sans-serif;
        }
        .container {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        img {
            margin: 10px;
            cursor: pointer;
        }
        h1 {
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <img id="montyMole" src="montymole-idle1.png" alt="Monty Mole" width="64" height="64">
        <img id="luigi" src="luigi-wack1.png" alt="Luigi" width="100" height="100">
    </div>
    <h1>HITS: <span id="hits">0</span></h1>

    <script>
        // 获取DOM元素
        const montyMole = document.getElementById('montyMole');
        const luigi = document.getElementById('luigi');
        const hitsCounter = document.getElementById('hits');

        // 变量
        let hits = 0;

        // Luigi 的鼠标按下事件
        luigi.addEventListener('mousedown', () => {
            // 更改图片
            montyMole.src = "montymole-idle2.png";
            luigi.src = "luigi-wack2.png";

            // 减小 Monty Mole 的尺寸
            montyMole.width -= 5;
            montyMole.height -= 5;

            // 更新点击计数
            hits++;
            hitsCounter.textContent = hits;
        });

        // Luigi 的鼠标松开事件
        luigi.addEventListener('mouseup', () => {
            // 恢复图片
            montyMole.src = "montymole-idle1.png";
            luigi.src = "luigi-wack1.png";
        });

        // Monty Mole 的点击事件
        montyMole.addEventListener('click', () => {
            // 恢复原始大小
            montyMole.width = montyMole.naturalWidth;
            montyMole.height = montyMole.naturalHeight;
        });
    </script>
</body>
</html>
```

@tab Code2

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Luigi 和 Monty Mole</title>
    <style>
        body {
            /* 设置页面字体和文本居中 */
            text-align: center;
            font-family: Arial, sans-serif;
        }
        .container {
            /* 使用 Flexbox 布局，将图片水平排列并居中 */
            display: flex;
            justify-content: center;
            align-items: center;
        }
        img {
            /* 设置图片的外边距和鼠标悬停样式 */
            margin: 10px;
            cursor: pointer;
        }
        h1 {
            /* 设置标题的顶部外边距 */
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <!-- 图片容器，包含 Monty Mole 和 Luigi -->
    <div class="container">
        <!-- Monty Mole 初始图片 -->
        <img id="montyMole" src="montymole-idle1.png" alt="Monty Mole" width="64" height="64">
        <!-- Luigi 初始图片 -->
        <img id="luigi" src="luigi-wack1.png" alt="Luigi" width="100" height="100">
    </div>
    <!-- 显示点击次数的计数器，格式为 HITS: 数字 -->
    <h1>HITS: <span id="hits">0</span></h1>

    <script>
        // 获取 HTML 中的 Monty Mole 图片元素
        const montyMole = document.getElementById('montyMole');
        // 获取 HTML 中的 Luigi 图片元素
        const luigi = document.getElementById('luigi');
        // 获取显示点击次数的 <span> 元素
        const hitsCounter = document.getElementById('hits');

        // 初始化点击次数变量
        let hits = 0;

        // Luigi 的鼠标按下事件
        luigi.addEventListener('mousedown', () => {
            // 将 Monty Mole 的图片切换为点击状态 (frame 2)
            montyMole.src = "montymole-idle2.png";
            // 将 Luigi 的图片切换为点击状态 (frame 2)
            luigi.src = "luigi-wack2.png";

            // 每次点击时，将 Monty Mole 的宽度和高度分别减少 5 像素
            montyMole.width -= 5;
            montyMole.height -= 5;

            // 增加点击计数
            hits++;
            // 更新计数器文本内容
            hitsCounter.textContent = hits;
        });

        // Luigi 的鼠标松开事件
        luigi.addEventListener('mouseup', () => {
            // 将 Monty Mole 的图片切换回初始状态 (frame 1)
            montyMole.src = "montymole-idle1.png";
            // 将 Luigi 的图片切换回初始状态 (frame 1)
            luigi.src = "luigi-wack1.png";
        });

        // Monty Mole 的点击事件
        montyMole.addEventListener('click', () => {
            // 将 Monty Mole 的图片大小恢复到原始尺寸
            montyMole.width = montyMole.naturalWidth; // 使用 naturalWidth 恢复原始宽度
            montyMole.height = montyMole.naturalHeight; // 使用 naturalHeight 恢复原始高度
        });
    </script>
</body>
</html>
```



:::



欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！

::: details 公众号：AI悦创【二维码】

![](https://blog.images.bornforthis.cn/docs-images/sha256/77/77f67d48a67ec6a44a4ef1f01ffc85830eb3c121b1ece45dc5ada06e20e2f52b.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Linux、Web 全栈」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](https://blog.images.bornforthis.cn/docs-images/sha256/30/3087c629da73428daa0ee050f5b31709c30f650686164b54c724b892a422c585.jpg)
