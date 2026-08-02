---
title: JavaScript实现计算器的多种方式
date: 2023-02-25 09:34:23
author: AndersonHJB
isOriginal: true
icon: javascript
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
head:
  - - meta
    - name: keywords
      content: 一对一辅导编程,编程一对一辅导,少儿编程一对一,Python 1v1,AI悦创,一对一,Python,编程一对一,C++,Java,AI,人工智能,黄家宝,Python一对一教学,Python辅导,全网3000+学员,值得信赖
  - - meta
    - name: description
      content: 一对一辅导编程,编程一对一辅导,少儿编程一对一,Python 1v1,AI悦创,一对一,Python,编程一对一,C++,Java,AI,人工智能,黄家宝,Python一对一教学,Python辅导,全网3000+学员,值得信赖
---

你好，我是悦创。

接下来，为你分享多种计算器。

## 1. 界面一

![界面一](https://blog.images.bornforthis.cn/docs-images/sha256/6f/6f12d3bdece26f36c039e9827b56ec4c7255b2819631ea11695115d28395208e.png)

::: code-tabs#html

@tab html

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Calculator</title>
    <style>
        label {
            display: inline-block;
            width: 80px;
            text-align: right;
        }

        input[type=number] {
            width: 100px;
            box-sizing: border-box;
            padding: 5px;
        }

        select {
            width: 50px;
            box-sizing: border-box;
            padding: 5px;
        }

        #equal {
            width: 50px;
            font-size: 20px;
        }
    </style>
    <script src="calculator.js"></script>
</head>
<body>
<label for="number1">Number 1:</label>
<input type="number" id="number1">

<select id="operation">
    <option value="add">+</option>
    <option value="subtract">-</option>
    <option value="multiply">*</option>
    <option value="divide">/</option>
</select>

<label for="number2">Number 2:</label>
<input type="number" id="number2">

<button id="equal" onclick="calculate()">=</button>

<span id="output"></span>
</body>
</html>
```

@tab calculator.js

```javascript
function calculate() {
    const num1 = parseInt(document.getElementById("number1").value);
    const num2 = parseInt(document.getElementById("number2").value);
    const operation = document.getElementById("operation").value;
    let result;
    switch (operation) {
        case "add":
            result = num1 + num2;
            break;
        case "subtract":
            result = num1 - num2;
            break;
        case "multiply":
            result = num1 * num2;
            break;
        case "divide":
            result = num1 / num2;
            break;
    }
    document.getElementById("output").textContent = result;
}
```

:::

## 2. 界面二

![界面二](https://blog.images.bornforthis.cn/docs-images/sha256/27/273c30a3caae6d6cee1034cb41cd07b040c44e12b58a19f18a0843253459b3a0.png)

::: code-tabs#html

@tab html

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Calculator</title>
    <style>
        input[type=number] {
            width: 100px;
            box-sizing: border-box;
            padding: 5px;
        }

        select {
            width: 50px;
            box-sizing: border-box;
            padding: 5px;
        }

        #equal {
            width: 50px;
            font-size: 20px;
        }
    </style>
    <script src="calculator.js"></script>
</head>
<body>
<input type="number" id="number1">

<select id="operation">
    <option value="add">+</option>
    <option value="subtract">-</option>
    <option value="multiply">*</option>
    <option value="divide">/</option>
</select>

<input type="number" id="number2">

<button id="equal" onclick="calculate()">=</button>

<span id="output"></span>
</body>
</html>
```

@tab calculator.js

```javascript
function calculate() {
    const num1 = parseInt(document.getElementById("number1").value);
    const num2 = parseInt(document.getElementById("number2").value);
    const operation = document.getElementById("operation").value;
    let result;
    switch (operation) {
        case "add":
            result = num1 + num2;
            break;
        case "subtract":
            result = num1 - num2;
            break;
        case "multiply":
            result = num1 * num2;
            break;
        case "divide":
            result = num1 / num2;
            break;
    }
    document.getElementById("output").textContent = result;
}
```

:::

## 3. 界面三

![界面三](https://blog.images.bornforthis.cn/docs-images/sha256/84/84edd8e45cfd853f77c14d26b73314e6779743bbcf872f8d816a8a2ec291f6a7.png)

::: code-tabs#html

@tab html

```html
<!DOCTYPE html>
<html>
<head>
    <title>Calculator</title>
    <meta charset="UTF-8">
    <style>
        #calculator {
            display: inline-block;
            border: 1px solid black;
            padding: 20px;
        }
        input[type="text"], select, input[type="button"] {
            padding: 10px;
            font-size: 16px;
        }
        input[type="button"] {
            background-color: #4CAF50;
            color: white;
            border: none;
            cursor: pointer;
            margin-left: 10px;
        }
        input[type="button"]:hover {
            background-color: #3E8E41;
        }
        #output {
            display: inline-block;
            font-size: 20px;
            padding: 10px;
            border: 1px solid black;
            margin-left: 10px;
        }
    </style>
</head>
<body>
<div id="calculator">
    <input type="text" id="number1" placeholder="Enter number 1">
    <select id="operation">
        <option value="add">+</option>
        <option value="subtract">-</option>
        <option value="multiply">*</option>
        <option value="divide">/</option>
    </select>
    <input type="text" id="number2" placeholder="Enter number 2">
    <input type="button" id="equal" value="=">
    <span id="output"></span>
</div>

<script>
    // Get DOM elements
    const number1Input = document.getElementById('number1');
    const number2Input = document.getElementById('number2');
    const operationSelect = document.getElementById('operation');
    const equalButton = document.getElementById('equal');
    const outputSpan = document.getElementById('output');

    // Add event listener to equal button
    equalButton.addEventListener('click', () => {
        // Get input values
        const number1 = Number(number1Input.value);
        const number2 = Number(number2Input.value);
        const operation = operationSelect.value;

        // Calculate result
        let result;
        switch (operation) {
            case 'add':
                result = number1 + number2;
                break;
            case 'subtract':
                result = number1 - number2;
                break;
            case 'multiply':
                result = number1 * number2;
                break;
            case 'divide':
                result = number1 / number2;
                break;
        }

        // Display result
        outputSpan.textContent = result;
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

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Linux、Web全栈」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](https://blog.images.bornforthis.cn/docs-images/sha256/30/3087c629da73428daa0ee050f5b31709c30f650686164b54c724b892a422c585.jpg)
