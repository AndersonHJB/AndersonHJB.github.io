---
title: web test
icon: web1
date: 2023-03-15 10:42:08
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

## Multiple Choice Questions

> 多项选择题

### Question 1(1 point)

You are building a website that involves showing the user two images for a short period oftime, after which the images should disappear. Which of the following techniques makes themost sense?

> 你正在构建一个网站，其中包括在短时间内向用户显示两张图像，之后图像应该消失。下面哪个技巧最有意义?

- use the setInterval function to schedule a function to run in the future. This functionwill make the images invisible.

> 使用setInterval函数来安排一个函数在未来运行。这个功能将使图像不可见

- use the setTimeout function to schedule a function to run in the future. This function willmake the images invisible.

> 使用setTimeout函数来安排一个函数在将来运行。这个函数将使图像不可见。

- Set up an event listener so that when the user clicks on the images they become invisible.

> 设置一个事件监听器，这样当用户点击图像时，图像就不可见了。

- Use a 'while' loop to cause a delay in your code, after which you can make the images vinvisible.

> 使用'while'循环在代码中引起延迟，之后您可以使图像可视。

You are building a website that involves showing the user two images for a short period oftime, after which the images should disappear. Which of the following techniques makes themost sense? 

A. use the setInterval function to schedule a function to run in the future. This functionwill make the images invisible. 

B. use the setTimeout function to schedule a function to run in the future. This function willmake the images invisible. 

C. Set up an event listener so that when the user clicks on the images they become invisible. 

D. Use a 'while' loop to cause a delay in your code, after which you can make the images vinvisible.

### B

---

## Question 2 (1 point)

Which of the following statements is true about "named" JavaScript functions?For example:

```html
function test() (}
```

- Named functions can only be called once they have been defined.
- Named functions can be called before they are defined.
- Named functions can only be defined inside other functions.
- Named functions can only be defined in separate JavaScript files.
- None of the above

Which of the following statements is true about "named" JavaScript functions?For example: 

`function test() (}`

A. Named functions can only be called once they have been defined. 

B. Named functions can be called before they are defined. 

C. Named functions can only be defined inside other functions. 

D. Named functions can only be defined in separate JavaScript files. 

E. None of the above

### B

## Question 3(1 point)

What is the data type of this statement: 5+2+3 . 2+2

A. String

B. Boolean

C. Error

D. Object

E. Array

F. Number

### F

## Question 4 (1 point)

Which of the following statements about the difference between `event.target` and `event.currentTarget` are true:

A. `event.target` always refers to the element on which the event was triggered, while `event.currentTarget` refers to the element to which the event handler is attached.

B. `event.currentTarget` always refers to the element on which the event was triggered, while `event.target` refers to the element to which the event handler is attached.

C. `event.target` and `event.currentTarget` always refer to the same element.

D. `event.target` is not a valid property of an event object, but `event.currentTarget` is.

### A

## Question 5(1 point)

What is the maximum number of HTML elements that can be returned by the querySelector function?

A. 0, this function does not return any HTML elements

B. Exactly 1

C. Potentially unlimited (function returns an array of elements)

### B

## Question 6(1 point)

Which of the following statements is True?

A. HTML attributes that exist on an element can be changed by JavaScript.

B. New HTML attributes can be applied to an element using JavaScript.

C. JavaScript has the ability to read attributes on an HTML element

D. JavaScript can remove attributes on an HTML element

E. All of the above

### E

## Question 7 (1 point)

Which of the following statements about the Document Object Model (DOM) is true?

A. The DOM is a programming interface for HTML documents

B. The DOM is a server-side technology used to create dynamic web pages.

C. The DOM is a self-contained scripting language used to enhance the functionality of web pages.

D. The DOM is used primarily for styling web pages using CSS

E. The DOM is not an important concept for front-end web development

### A

## Question 8 (1 point)

Which of the following statements are true about objects in JavaScript?

A. Objects store key-value pairs of data

B. Objects can store references to functions as values

C. Objects are mutable data types and can be changed after being defined

D. Objects are immutable data types and cannot be changed after being defined

E. You can access an object property using dot notation and bracket syntax

F. Objects are ordered data types and, and you can use an integer-based index to accessdata stored in an object

### The true statements about objects in JavaScript are: A, B, C, and E. Therefore, the answer choices are A, B, C, and E.

## Question 9 (1 point)

Given the following HTML document:

> 给定以下HTML文档:

```html
<!DOCTYPE html>
<html>
<head>
    <title>DOM Queries</title>
</head>
<body>
<div>
    <span>Grape</span>
    <a href="#">Cherry</a>
</div>

<ul>

    <li>Orange</li>
    <li>Blueberry</li>
    <li>Banana
        <ul>
            <li>Pineapple</li>
            <li>Papaya</li>
        </ul>
    </li>
</ul>

<div>
    <span>Apple</span>
    <a href="#">Pear</a></div>
<h1>DoM Queries</h1>
</body>
</html>
```

Which of the following DOM queries will successfully isolate this element?

> 下面哪个DOM查询将成功隔离该元素?

```html
<span>Grape</span>
```

A. document.querySelector('div span').parentElement.parentElement.firstElementChild.children[0]

B. document.querySelectorAll('ul li')[0].parentElement.parentElement.children[0].children[0]

C. document.querySelector('body').children[0].firstElementChild

D. document.querySelector('span!')

E. document.querySelectorAll('div')[0].nextElementSibling.parentElement.children[0]

F. document.querySelector('a').parentElement.firstElementSibling

G. document.querySelector('html').children[1].children[0]

H. document.getElementsByTagName('span')

### A

## Question 10(1 point)

Which of the following statements is true about let, var, and const?

A. let and var both declare variables that can be reassigned, while const declares variables that cannot be reassigned.

B. var and const both declare variables that cannot be reassigned, while let declares variables that can be reassigned.

C. let and const both declare variables that cannot be reassigned, while var declares variables that can be reassigned.

D. All three keywords (1et, var, and const) declare variables that cannot be reassigned.

### A

## Question 11(1 point)

Predict the output of the following program:

> 预测以下程序的输出:

```javascript
    let functions = [];
    for (let i = 0; i < 3; i++) {

        let tempFunction = function () {
            console.log(i);
        }

        functions.push(tempFunction);
    }

    functions[0]();
    functions[1]();
    functions[2]();
```

```javascript
0
1
2
```

## Question 12 (1 point)

What will happen when the following page is rendered by a browser?

> 当浏览器呈现下面的页面时会发生什么?

You can assume that the browser just cleared its browsing data. so all cookies. cache and localStorage are currently empty.

> 您可以假设浏览器刚刚清除了它的浏览数据。所有的饼干。cache和localStorage当前为空。

```html
<!DOCTYPE html>
<html>
<head>
    <title>Demo Page</title>
</head>
<body>
<h1>Demo Page</h1>

<script>
    let c = window.localStorage.getItem('apple');
    if (c) {
        c = parseInt(c) + 1;
        window.localStorage.setItem('apple', c);
    } else {
        c = 3;
        window.localStorage.setItem('apple', 3);
    }
    document.querySelector('h1').innerText = c;
</script>
</body>
</html>
```

A. The h1 tag will display the text "4" (no quotes)

B. The h1 tag will display the text "Demo Page" (no quotes)

C. The page will crash

D. The h1 tag will display the text "5" (no quotes)

E. The h1 tag will display the text "2" (no quotes)

F. The h1 tag will display the text "6" (no quotes)

G. The h1 tag will display nothing

H. The h1 tag will display the text "1" (no quotes)

I. The h1 tag will display the text "3" (no quotes)

> A. h1标签将显示文本“4”(不带引号)
>
> B. h1标签将显示文本“Demo Page”(不加引号)
>
> C.页面会崩溃
>
> D. h1标签将显示文本“5”(不带引号)
>
> E. h1标签将显示文本“2”(不带引号)
>
> F. h1标签将显示文本“6”(不带引号)
>
> G. h1标签将不显示任何内容
>
> H. h1标签将显示文本“1”(不带引号)
>
> 一、h1标签将显示文本“3”(不带引号)

### A

## Question 13 (1 point)

Consider the following code:

> 考虑下面的代码:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Demo Page</title>
</head>
<style>
    #outer {
        width: 200px;
        height: 200px;
        background-color: grey;
    }

    #middle {
        width: 100px;
        height: 100px;
        background-color: pink;
    }

    #inner {
        width: 50px;
        height: 50px;
        background-color: yellow;
    }
</style>
<body>
<h1>Demo Page</h1>

<div id="outer">
    <div id="middle">
        <div id="inner"></div>
    </div>
</div>
<script>
    document.querySelector('#inner').addEventListener('click', function (event) {
        console.log('inner clicked');
    })

    document.querySelector('#middle').addEventListener('click', function (event) {
        console.log('middle clicked');
    })

    document.querySelector('#outer').addEventListener('click', function (event) {
        console.log('outer clicked');
    })
</script>
</body>
</html>
```

What will display in the console if the user clicks on the "inner" div?

> 如果用户单击“内部”div，控制台将显示什么?

```html
inner clicked
middle clicked
outer clicked
```



## Question 14 (1 point)

Which of the following is an appropriate way to assign an inline style to an element using JavaScript?

A. element.style.backgroundColor = "blue";

B. element.setStyle('background-color', "blue");

C. element.style = {backgroundColor:"blue" };

D. None of the other choices

E. element.style ="background-color: blue;"

F. element.style.background-color ="blue";

### A

## Question 15 (1 point)

What is JavaScript obfuscation?

A. A way to prevent JavaScript code from running on unauthorized websites.

B. A method for optimizing the performance of JavaScript code.

C. A technique for making JavaScript code more readable and easier to understand.

D. None of the other choices

E. A process for encrypting and hiding JavaScript code to make it more difficult to understand and reverse engineer.

### E

## Question 16(1 point)

addEventListener can only be used to attach one event handler to an element, whereas onclick can attach multiple event handlers.

A. True

B. False

### B

## Question 17 (1 point)

Which classList method can be used to remove a class from an element?

A. classList.destroy

B. classList.erase

C. classList.delete

D. None of the other choices

E. classList.remove

### E

## Question 18(1 point)

Consider the following code：

```javascript
element.onclick = doSomething()
function doSomething() {
        alert("Hello,world!")
    }
```

Assuming 'element' is a valid reference, what will immediately happen when the page loads:

A. Nothing

B. The text "Hello, world!" will be displayed in a pop-up window

C. The text "Hello, world!" will be displayed in the browser console

D. The code will crash because the function is being referenced before it is defined

### B

## Question 19 (1 point)

Which of the following is true about working with the i6 server?

A. When you SFTP an HTML document to the server it must be placed in a specific folder forthe web server to be able to access it

B. JavaScript code is run and evaluated every time you upload a file to the server

C. You can use a terminal program to access the command line interface on the i6 server

D. Uploading buggy JavaScript code in an HTML document to the i6 server could cause theserver to crash

### A、C

## Question 20 (5 points)

Click here to access your question and write your code using a web-based editor. This editorwill automatically load a starter HTML document along with any required assets.



## Question21

The 'create grid.js' script will create 400 elements that will appear in the 'container' div as a grid of boxes.

Run the program to see this before you continue. These elements have been styled to display themselves in a 20 x 20 grid.

The newly created elements will be organized as follows:

```html
<div id="box_0" class="box" style="background-color: rgb(100,200,250);"></div>
<div id="box_1" class="box" style="background-color: rgb(50,99,124);"></div>
<div id="box_2" class="box" style="background-color: rgb(12,13,166);"></div>
```

Your task for this problem is to remove the background-color style from all elements EXCEPT for the ones included in the 'object' variable that has been predefined for you. This will reveal a short string which is theanswer to this question. Type the string that appears into Brightspace as your answer.



## Question22

Consider the following code:

> 考虑下面的代码:

```javascript
element.onclick = doSomething
function doSomething() {
    alert("Hello, world!")
}
```

Assuming 'element' is a valid reference, what will happen when this code is run?

> 假设'element'是一个有效的引用，当运行这段代码时会发生什么?

A. Nothing

> 答:没有

B. The text "Hello, world!" will be displayed in a pop-up window

> B.文本“Hello, world!”将显示在一个弹出窗口中

C. The text "Hello, world!" will be displayed in the browser console

> C.文本“Hello, world!”将显示在浏览器控制台上

D. The code will crash because the function is being referenced before it is defined

> D.代码会崩溃，因为函数在定义之前就被引用了

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