---
title: TFS_VGC104_Assignment5_Instructions Rock Paper Scissors「多伦多电影学院」
date: 2024-12-15 11:03:55
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

ASSIGNMENT #5

| Title                   | Rock Paper Scissors – Part 1                                 |
| ----------------------- | ------------------------------------------------------------ |
| **Learning objectives** | JavaScript Functions                                         |
| **Instructions**        | Lay the foundations for a rock paper scissors game by using html to place the selection buttons (for Rock, Paper, and Scissors) and an area for both player 1 and player 2’s choice to appear.<br />Create functions for player 1 to make their choice of either Rock, Paper, or Scissors and have their area update accordingly. |
| **Deliverables**        | Functional webpage for the game with clean layout.<br />Clean and readable code.<br />Selection images for Rock, Paper, Scissors.<br />Clicking on a selection image updates player 1’s choice.<br />Reset Button to clear values to their starting state. |

::: code-tabs

@tab index.html

```html
<!doctype html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Rock Paper Scissors</title>
    <link rel="stylesheet" href="CSS/style.css">

    <script>
        function Rock() {
            document.getElementById("player1Choice").innerHTML = "<img src='./Images/rock.png' alt='Rock' />";
        }

        function Paper() {
            document.getElementById("player1Choice").innerHTML = "<img src='./Images/paper.png' alt='Paper' />";
        }

        function Scissors() {
            document.getElementById("player1Choice").innerHTML = "<img src='./Images/scissors.png' alt='Scissors' />";
        }

        function Reset() {
            document.getElementById("player1Choice").innerHTML = "<img src='./Images/pick.png' alt='Pick' />";
        }


    </script>
</head>

<body>
<h1>Rock Paper Scissors</h1>


<div class="game-container">
    <div class="choices">
        <button onclick="Rock()">Rock</button>
        <button onclick="Paper()">Paper</button>
        <button onclick="Scissors()">Scissors</button>
    </div>
    <div class="display">
        <div id="player1Choice">
            <img src="./Images/pick.png" alt="Pick">
        </div>
    </div>
    <button onclick="Reset()" class="reset">Reset</button>
</div>


</body>
</html>
```

@tab Style.css

```css
body {
    font-family: Arial, sans-serif;
    text-align: center;
    background-color: #f4f4f4;
}

h1 {
    color: #333;
}

.game-container {
    margin: 20px auto;
    padding: 20px;
    width: 300px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.choices button {
    margin: 5px;
    padding: 10px;
    font-size: 16px;
    cursor: pointer;
}

.display {
    margin: 20px 0;
}

.reset {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.reset:hover {
    background-color: #0056b3;
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
