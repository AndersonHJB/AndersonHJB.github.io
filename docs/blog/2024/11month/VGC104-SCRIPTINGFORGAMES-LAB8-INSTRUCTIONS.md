---
title: TFS_VGC104_Assignment8_Instructions Rock-Paper-Scissors Part 2「多伦多电影学院」
date: 2024-12-16 11:42:03
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

LAB #8  DUE DATE: WEEK 11

## Title

Rock-Paper-Scissors Part 2

## Learning Objectives

Select appropriate control structures used to create games

## Instructions

Extend the functionality of the rock paper scissors game to include interactivity using JavaScript. Create an AI to make decisions for player 2, determine the winner after each round and allow the player with the best of five rounds to win the game.

## Deliverables

- Submit your web page and all external files
- Naming Convention: VGC104_L08_Lastname_Firstname.zip

::: code-tabs

@tab index.html

```html
<!doctype html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>石头剪刀布</title>
    <link rel="stylesheet" href="static/css/style.css">
    <script src="static/js/game.js" defer></script>
</head>
<body>
<div class="game-container">
    <h1>石头 剪刀 布</h1>
    <div class="choices">
        <button onclick="makeChoice('rock')">石头</button>
        <button onclick="makeChoice('paper')">布</button>
        <button onclick="makeChoice('scissors')">剪刀</button>
    </div>
    <div class="display">
        <div>
            <p>玩家选择：</p>
            <div id="player1Choice">
                <img src="./Images/pick.png" alt="选择">
            </div>
        </div>
        <div>
            <p>AI 选择：</p>
            <div id="aiChoice">
                <img src="./Images/pick.png" alt="选择">
            </div>
        </div>
        <p id="result"></p>
    </div>
    <p>局数：<span id="currentRound">1</span>/5</p>
    <p>得分：玩家 - <span id="playerScore">0</span> | AI - <span id="aiScore">0</span></p>
    <div id="finalResult" style="display: none; margin-top: 20px; font-weight: bold;"></div>
    <button onclick="resetGame()" class="reset">重置游戏</button>
</div>
</body>
</html>
```

@tab Style.css

```css
/* 通用样式 */
body {
    font-family: 'Arial', sans-serif;
    text-align: center;
    background: linear-gradient(to bottom right, #89f7fe, #66a6ff);
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

h1 {
    font-size: 2.5em;
    color: #fff;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    margin-bottom: 20px;
}

.game-container {
    background-color: rgba(255, 255, 255, 0.9);
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    width: 360px;
}

/* 选择按钮样式 */
.choices button {
    margin: 5px;
    padding: 15px 20px;
    font-size: 16px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    background: linear-gradient(to bottom right, #ff9a9e, #fad0c4);
    color: white;
    font-weight: bold;
    transition: transform 0.2s, box-shadow 0.2s;
}

.choices button:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.choices button:disabled {
    background: #ddd;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
}

/* 显示结果的区域 */
.display {
    margin: 20px 0;
}

.display p {
    margin: 10px 0;
    font-size: 1.2em;
    font-weight: bold;
    color: #333;
}

.display div img {
    width: 80px;
    height: 80px;
    border: 2px solid #ddd;
    border-radius: 10px;
    background: white;
    padding: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

/* 分数与结果 */
#result {
    margin-top: 20px;
    font-size: 1.2em;
    color: #555;
    font-weight: bold;
}

#finalResult {
    font-size: 1.5em;
    color: #333;
    margin-top: 20px;
    padding: 10px;
    background-color: rgba(0, 128, 0, 0.1);
    border: 2px solid rgba(0, 128, 0, 0.3);
    border-radius: 10px;
    display: none;
}

/* 分数与局数 */
p {
    font-size: 1em;
    color: #555;
}

#currentRound {
    font-weight: bold;
    color: #007bff;
}

.reset {
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 16px;
    background: linear-gradient(to bottom right, #76b852, #8dc26f);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    transition: transform 0.2s, box-shadow 0.2s;
}

.reset:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

@media (max-width: 480px) {
    .game-container {
        width: 90%;
    }

    h1 {
        font-size: 2em;
    }

    .choices button {
        padding: 10px 15px;
        font-size: 14px;
    }

    .display div img {
        width: 60px;
        height: 60px;
    }
}
```

@tab game.js

```javascript
let playerScore = 0;
let aiScore = 0;
let roundsPlayed = 0;

function makeChoice(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const aiChoice = choices[Math.floor(Math.random() * choices.length)];
    updateChoices(playerChoice, aiChoice);
    determineWinner(playerChoice, aiChoice);
    roundsPlayed++;
    updateRound();
    checkGameOver();
}

function updateChoices(playerChoice, aiChoice) {
    document.getElementById('player1Choice').innerHTML = `<img src="./Images/${playerChoice}.png" alt="${playerChoice}" />`;
    document.getElementById('aiChoice').innerHTML = `<img src="./Images/${aiChoice}.png" alt="${aiChoice}" />`;
}

function determineWinner(playerChoice, aiChoice) {
    if (playerChoice === aiChoice) {
        document.getElementById('result').textContent = '这一局是平局！';
    } else if (
        (playerChoice === 'rock' && aiChoice === 'scissors') ||
        (playerChoice === 'scissors' && aiChoice === 'paper') ||
        (playerChoice === 'paper' && aiChoice === 'rock')
    ) {
        document.getElementById('result').textContent = '玩家赢了这一局！';
        playerScore++;
        document.getElementById('playerScore').textContent = playerScore;
    } else {
        document.getElementById('result').textContent = 'AI 赢了这一局！';
        aiScore++;
        document.getElementById('aiScore').textContent = aiScore;
    }
}

function updateRound() {
    document.getElementById('currentRound').textContent = roundsPlayed + 1;
}

function checkGameOver() {
    if (roundsPlayed === 5) {
        const winner = playerScore > aiScore ? '玩家' : 'AI';
        const finalResult = `比赛结束！${winner} 获胜！\n最终比分：玩家 ${playerScore} - AI ${aiScore}`;
        displayFinalResult(finalResult);
    }
}

function displayFinalResult(finalResult) {
    const resultDisplay = document.getElementById('finalResult');
    resultDisplay.textContent = finalResult;
    resultDisplay.style.display = 'block';
    disableGameControls();
}

function disableGameControls() {
    const buttons = document.querySelectorAll('.choices button');
    buttons.forEach(button => button.disabled = true);
}

function resetGame() {
    playerScore = 0;
    aiScore = 0;
    roundsPlayed = 0;
    document.getElementById('playerScore').textContent = '0';
    document.getElementById('aiScore').textContent = '0';
    document.getElementById('currentRound').textContent = '1';
    document.getElementById('result').textContent = '';
    document.getElementById('player1Choice').innerHTML = '<img src="./Images/pick.png" alt="选择" />';
    document.getElementById('aiChoice').innerHTML = '<img src="./Images/pick.png" alt="选择" />';
    const resultDisplay = document.getElementById('finalResult');
    resultDisplay.textContent = '';
    resultDisplay.style.display = 'none';
    enableGameControls();
}

function enableGameControls() {
    const buttons = document.querySelectorAll('.choices button');
    buttons.forEach(button => button.disabled = false);
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
