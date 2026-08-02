---
title: TFS_VGC104_Assignment3_Instructions「多伦多电影学院
date: 2024-11-16 10:41:39
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

::: center

## Toronto Film School

:::

LAB #3 DUE DATE: SUNDAY OF WEEK 5

## Title

CSS Animation

## Learning Objectives

Select appropriate control structures used to create games

## Instructions

This project aims to enhance your understanding of CSS animations by using sprites to create a flipbook animations. In teams of up to two people, create four different animations from the provided sprites.

Use the given sprites to generate a spritesheet. Each row of the spritesheet should represent a different animation sequence. Create an HTML page that will be used to display your animations. You will create four separate animations representing different actions:

- Idle
- Walk
- Punch
- Kick

Ensure that each animation loops infinitely. For this assignment, the focus is on the animation sequences themselves, so do not add any additional display effects or transitions.

## Deliverables

- Submit your web page and all external files
- Naming Convention: VGC104_L03_Lastname_Firstname.zip



## Percentage of Final Grade

![](https://blog.images.bornforthis.cn/docs-images/sha256/e7/e7d4f018c4a7062889f4838d6d1ac507cf05986a6a6a76f317537dc4e73ffcab.png)

::: code-tabs

@tab index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sprite Animations</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="animation idle"></div>
    <div class="animation kick"></div>
    <div class="animation punch"></div>
    <div class="animation walk"></div>
</body>
</html>
```

@tab style.css

```css
body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f0f0f0;
}

.animation {
    width: 80px; /* 替换为图片宽度 */
    height: 80px; /* 替换为图片高度 */
    margin: 10px;
    background-size: cover;
}

/* Idle 动画 */
.idle {
    animation: idle-animation 1s steps(1) infinite;
}

@keyframes idle-animation {
    0% { background-image: url('images/idle/ken-idle-1.png'); }
    25% { background-image: url('images/idle/ken-idle-2.png'); }
    50% { background-image: url('images/idle/ken-idle-3.png'); }
    75% { background-image: url('images/idle/ken-idle-4.png'); }
    100% { background-image: url('images/idle/ken-idle-1.png'); }
}

/* Kick 动画 */
.kick {
    animation: kick-animation 1s steps(1) infinite;
}

@keyframes kick-animation {
    0% { background-image: url('images/kick/ken-kick-1.png'); }
    33% { background-image: url('images/kick/ken-kick-2.png'); }
    67% { background-image: url('images/kick/ken-kick-3.png'); }
    100% { background-image: url('images/kick/ken-kick-1.png'); }
}

/* Punch 动画 */
.punch {
    animation: punch-animation 1s steps(1) infinite;
}

@keyframes punch-animation {
    0% { background-image: url('images/punch/ken-punch-1.png'); }
    20% { background-image: url('images/punch/ken-punch-2.png'); }
    40% { background-image: url('images/punch/ken-punch-3.png'); }
    60% { background-image: url('images/punch/ken-punch-4.png'); }
    80% { background-image: url('images/punch/ken-punch-5.png'); }
    100% { background-image: url('images/punch/ken-punch-1.png'); }
}

/* Walk 动画 */
.walk {
    animation: walk-animation 1s steps(1) infinite;
}

@keyframes walk-animation {
    0% { background-image: url('images/walk/ken-walk-1.png'); }
    20% { background-image: url('images/walk/ken-walk-2.png'); }
    40% { background-image: url('images/walk/ken-walk-3.png'); }
    60% { background-image: url('images/walk/ken-walk-4.png'); }
    80% { background-image: url('images/walk/ken-walk-5.png'); }
    100% { background-image: url('images/walk/ken-walk-1.png'); }
}
```

@tab index.html 注释

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sprite Animations</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- 动画容器：每个动作对应一个 <div> 元素 -->
    <!-- Idle 动作动画 -->
    <div class="animation idle"></div>

    <!-- Kick 动作动画 -->
    <div class="animation kick"></div>

    <!-- Punch 动作动画 -->
    <div class="animation punch"></div>

    <!-- Walk 动作动画 -->
    <div class="animation walk"></div>
</body>
</html>
```

@tab syle.css

```css
/* 
通用样式：
1. 使用 Flexbox 布局，将动画容器在页面中垂直和水平居中。
2. 设置每个动画容器的大小（宽度和高度），确保与图片尺寸匹配。
3. 背景图片通过 `background-size: cover` 填充容器，按比例缩放。
4. 为每个动画容器设置间距，避免视觉重叠。
*/

body {
    display: flex; /* 使用 Flexbox 布局 */
    flex-direction: column; /* 子元素垂直排列 */
    align-items: center; /* 子元素水平居中 */
    justify-content: center; /* 子元素垂直居中 */
    height: 100vh; /* 设置视窗高度为 100% */
    background-color: #f0f0f0; /* 设置页面背景颜色 */
}

.animation {
    width: 80px; /* 设置每帧图片的宽度 */
    height: 80px; /* 设置每帧图片的高度 */
    margin: 10px; /* 设置每个动画之间的间距 */
    background-size: cover; /* 确保背景图片按比例填充整个容器 */
}

/* 
Idle 动作动画：
1. 切换背景图片实现翻页效果。
2. 定义 4 帧动画，每帧图片对应时间占比为 25%。
3. 动画持续 1 秒，无限循环播放。
*/
.idle {
    animation: idle-animation 1s steps(1) infinite;
}

@keyframes idle-animation {
    0% { background-image: url('images/idle/ken-idle-1.png'); } /* 第1帧 */
    25% { background-image: url('images/idle/ken-idle-2.png'); } /* 第2帧 */
    50% { background-image: url('images/idle/ken-idle-3.png'); } /* 第3帧 */
    75% { background-image: url('images/idle/ken-idle-4.png'); } /* 第4帧 */
    100% { background-image: url('images/idle/ken-idle-1.png'); } /* 回到第1帧 */
}

/* 
Kick 动作动画：
1. 3 帧动画，时间占比分别为 33%。
2. 动画持续 1 秒，无限循环播放。
*/
.kick {
    animation: kick-animation 1s steps(1) infinite;
}

@keyframes kick-animation {
    0% { background-image: url('images/kick/ken-kick-1.png'); } /* 第1帧 */
    33% { background-image: url('images/kick/ken-kick-2.png'); } /* 第2帧 */
    67% { background-image: url('images/kick/ken-kick-3.png'); } /* 第3帧 */
    100% { background-image: url('images/kick/ken-kick-1.png'); } /* 回到第1帧 */
}

/* 
Punch 动作动画：
1. 5 帧动画，时间占比分别为 20%。
2. 动画持续 1 秒，无限循环播放。
*/
.punch {
    animation: punch-animation 1s steps(1) infinite;
}

@keyframes punch-animation {
    0% { background-image: url('images/punch/ken-punch-1.png'); } /* 第1帧 */
    20% { background-image: url('images/punch/ken-punch-2.png'); } /* 第2帧 */
    40% { background-image: url('images/punch/ken-punch-3.png'); } /* 第3帧 */
    60% { background-image: url('images/punch/ken-punch-4.png'); } /* 第4帧 */
    80% { background-image: url('images/punch/ken-punch-5.png'); } /* 第5帧 */
    100% { background-image: url('images/punch/ken-punch-1.png'); } /* 回到第1帧 */
}

/* 
Walk 动作动画：
1. 5 帧动画，时间占比分别为 20%。
2. 动画持续 1 秒，无限循环播放。
*/
.walk {
    animation: walk-animation 1s steps(1) infinite;
}

@keyframes walk-animation {
    0% { background-image: url('images/walk/ken-walk-1.png'); } /* 第1帧 */
    20% { background-image: url('images/walk/ken-walk-2.png'); } /* 第2帧 */
    40% { background-image: url('images/walk/ken-walk-3.png'); } /* 第3帧 */
    60% { background-image: url('images/walk/ken-walk-4.png'); } /* 第4帧 */
    80% { background-image: url('images/walk/ken-walk-5.png'); } /* 第5帧 */
    100% { background-image: url('images/walk/ken-walk-1.png'); } /* 回到第1帧 */
}
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
