---
title: Web Lab03-NYU
icon: web
date: 2023-02-24 22:03:04
author: AI悦创
isOriginal: true
category: 
    - 1v1
    - java 1v1
    - 纽约大学一对一
    - NYU 1v1
    - web 一对一
    - 数据结构一对一
    - 留学生辅导
    - 留学生作业辅导
tag:
    - 1v1
    - java 1v1
    - 纽约大学一对一
    - NYU 1v1
    - web 一对一
    - 留学生辅导
    - 留学生作业辅导
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
editLink: false
backToTop: true
toc: true
---

## Programming Challenge

Please read the directions below and write a program that implements the described features. Please do not add any additional features beyond what is being described here. You can check your work at any time by clicking the "Mark" button, which will trigger a series of automated tests. Your program must pass all of these tests to earn full credit. Note that you should not add in any "DOM Content Loaded" event listeners as this will interfere with the automated tests.

Your task is to edit the index.html HTML document and build a working "calculator" webpage. This page will allow the user to type in two numbers and select a basic math operation. Once the user clicks the "equal" sign the answer will should computed and displayed for the user. 

Here's a quick video showing the expected final output of your assignment:

Here's a complete outline of what you need to do to solve this challenge:

Interface setup

Create a text box for number1 where the user can type a value - ensure that this text box has an id of number1 

Create a text box for number2 where the user can type a value - ensure that this text box has an id of number2 

Create a drop-down list for the user's desired operation - ensure that the drop down box has an id of operation . The drop down box should include four options for the four basic math operations (addition, subtraction, multiplication and division). Ensure that these options all have values that match their sign ("add", "subtract", "multiply" and "divide") and visible text that shows the math operation ("+", "-", "*", and "/")

Create a button for the equal sign - ensure that this text box has an id of equal and visible text that shows the equal sign ("=")
Create a span for the output of the desired math expression to appear to the right of the equal sign - ensure that this span has an id of output 

Program logic

The user will type values into the two text boxes (number1 and number2). You can assume these values will always be integers.
The user will select one of the four op

::: tabs

@tab HTML

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Calculator</title>
    </style>
    <script src="calculator.js"></script>
</head>
<body>
<input type="text" id="number1">

<select id="operation">
    <option value="add">+</option>
    <option value="subtract">-</option>
    <option value="multiply">*</option>
    <option value="divide">/</option>
</select>

<input type="text" id="number2">

<button id="equal" onclick="calculate()">=</button>

<span id="output"></span>
</body>
</html>
```

@tab JS

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









欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！


::: details 公众号：AI悦创【二维码】

![](/gzh.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](/zsxq.jpg)