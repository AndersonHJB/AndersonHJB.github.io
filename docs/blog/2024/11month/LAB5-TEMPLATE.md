---
title: TFS_VGC104_Assignment5_Instructions
date: 2024-11-27 11:36:14
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

LAB #5 DUE DATE: SUNDAY OF WEEK 8

## Title

Number Wizard Part 1

## Learning Objectives

- Select appropriate control structures used to create games



## Instructions

In a team of up to two people, create a webpage that re-creates the Magic Number game. The game should randomly choose a number between 1-100. Players should be able to input guesses of a number between 1-100 and should be unable to input non-numerical values. 

When a guess is submitted, the game should indicate if the guess was correct, higher, or lower than the correct value. The game should track the number of guesses it takes to reach the number.



## Code template

### index.html

```html
<html>
	<head>
		<title>LAB 3 - GUESSING GAME</title>
		<script language="javascript" src="scripts/script.js"></script>
	</head>
	
	<body>
		<div id="title">
			<h1>GUESSING GAME</h1>
		<div>
		<div id="ui">
			<form>
				<input id="input1" name="input1" type="text" />
				<input id="guess" name="guess" type="button" value="GUESS" onclick="checkGuess();" />
			</form>
		<div>
		<div id="result">
			<h1 id="output">MAKE A GUESS</h1>
		<div>
	</body>
</html>
```

### script.js

```javascript
// DO NOT CHANGE THIS VALUE
const var magicNum = 42;

function checkGuess()
{
	// Create a variable and set equal to input's value
	
	
	// Create a variable and set equal to output
	
	
	// Check if input is less than the magic number and print a message to the output
	
	
	// Check if input is greater than the magic number and print a message to the output
	
	
	// Check if input is equal to the magic number and print a winning message to the output
	
	
	// For any other input print an error message
	
	
}
```





## Deliverables

- Submit your web page and all external files
- Naming Convention: VGC104_L05_Lastname_Firstname.zip



## Percentage of Final Grade

12.5%



## Solution

::: code-tabs

@tab HTML

```html
<!doctype html>
<html lang="en">
	<head>
		<title>LAB 3 - GUESSING GAME</title>
		<meta charset="UTF-8">
		<meta name="viewport"
			  content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
		<meta http-equiv="X-UA-Compatible" content="ie=edge">
		<script language="javascript" src="scripts/script.js"></script>
	</head>

	<body>
		<div id="title">
			<h1>GUESSING GAME</h1>
		</div>
		<div id="ui">
			<form>
				<input id="input1" name="input1" type="text" />
				<input id="guess" name="guess" type="button" value="GUESS" onclick="checkGuess();" />
			</form>
		</div>
		<div id="result">
			<h1 id="output">MAKE A GUESS</h1>
		</div>
	</body>
</html>
```

@tab JS

```javascript
// 随机生成一个 1 到 100 之间的数字
let magicNum = Math.floor(Math.random() * 100) + 1;

let guessCount = 0; // 用于记录猜测次数

function checkGuess() {
    // 获取用户输入的值
    const userGuess = document.getElementById('input1').value;

    // 获取输出结果的元素
    const output = document.getElementById('output');

    // 检查输入是否为数字
    if (isNaN(userGuess) || userGuess === '') {
        output.innerHTML = '请输入一个有效的数字！';
        return; // 如果输入无效，结束函数
    }

    // 转换为整数类型
    const guess = parseInt(userGuess);

    // 增加猜测次数
    guessCount++;

    // 判断猜测结果
    if (guess < magicNum) {
        output.innerHTML = `你的猜测 ${guess} 太小了，再试试！`;
    } else if (guess > magicNum) {
        output.innerHTML = `你的猜测 ${guess} 太大了，再试试！`;
    } else {
        output.innerHTML = `恭喜你，猜对了！你一共猜了 ${guessCount} 次。`;
    }
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
