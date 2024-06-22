---
title: Micro Assignment 06
icon: web1
date: 2023-03-23 09:13:21
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

## Micro Assignment 06

Micro assignment 06 focuses on the following concepts:

> 微作业06主要关注以下概念:

- Review of PHP fundamentals

> PHP基础知识回顾

- Sending data to PHP scripts using the Common Gateway Interface (GET & POST requests)

> 使用公共网关接口向PHP脚本发送数据(GET和POST请求)

- PHP 'header' function

> PHP 'header'函数

- PHP debugging tips & tricks

> PHP调试技巧

This micro assignment contains a series of videos along with a programming challenge, which you should attempt after watching the videos. The challenge is set up with a "Mark" button that will let you immediately see if you solved it correctly. You will get credit for the micro assignment by attempting and solving this challenge, and you are allowed to attempt the challenge as many times as you'd like.

> 这个微作业包含一系列视频和一个编程挑战，你应该在看完视频后尝试一下。挑战设置了一个“标记”按钮，让你立即看到你是否正确解决了它。你可以通过尝试并解决这个挑战来获得微作业的学分，你可以尝试很多次你想要的挑战。

Remember that micro assignments are time sensitive! You should try and complete each micro assignment before class on the day it is set to be due. Micro assignments must be turned in by the end of the day on which they are due in order to be worth full credit. Completing a micro assignment after the due date is possible, but you will be marked late and this can affect your grade in the course. Please refer to the [course schedule](https://cs.nyu.edu/courses/spring23/CSCI-UA.0061-001/schedule.html) page for the due date of all micro assignments. 

> 记住，微作业是时间敏感的!你应该试着在规定的截止日期前完成每一项微作业。微作业必须在截止日期当天结束前交上来，这样才能拿到全部学分。在截止日期之后完成微作业是可以的，但你会被标记得晚，这可能会影响你在课程中的成绩。所有微作业的截止日期请参考【课程安排】(https://cs.nyu.edu/courses/spring23/CSCI-UA.0061-001/schedule.html)页面。

## PHP Fundamentals (review)

> PHP基础(回顾)

<VidStack src="/1v1/06-KAI/29-Micro-Assignment06/01-php-fundamentals-v2.mp4" />

## PHP CGI (GET & POST requests)

> PHP CGI (GET & POST请求)

<VidStack src="/1v1/06-KAI/29-Micro-Assignment06/02-php-cgi.mp4" />

## PHP 'header' function

> PHP 'header'函数

<VidStack src="/1v1/06-KAI/29-Micro-Assignment06/03-php-header.mp4" />

## PHP Debugging Techniques

> PHP调试技术

<VidStack src="/1v1/06-KAI/29-Micro-Assignment06/05-php-debugging.mp4" />

## Additional Topics

> 额外的话题

<VidStack src="/1v1/06-KAI/29-Micro-Assignment06/06-linux-command-line.mp4" />

## Programming Challenge

> 编程的挑战

This micro assignment is not an auto-graded assignment.  Instead, you will be writing a program on your computer using MAMP to solve the challenge described below.  When you are finished please upload your program to the i6 server so we can run it.  We should be able to visit your main landing page (e.g. https://i6.cims.nyu.edu/~NETID/webdev) and find a link to your project.

**Please submit a ZIP archive of your work to Brightspace by the due date to get on-time credit for this micro assignment.**  

> 这个微作业不是自动评分作业。相反，您将使用MAMP在您的计算机上编写一个程序来解决下面描述的挑战。当您完成后，请将您的程序上传到i6服务器，以便我们运行它。我们应该能够访问您的主登陆页面(例如https://i6.cims.nyu.edu/~NETID/webdev)，并找到您的项目的链接。
>
> 请在截止日期之前将你的工作ZIP文件提交给Brightspace，以获得这次微作业的准时学分。

::: warning

This micro assignment requires NO JAVASCRIPT. You should ONLY be using HTML, CSS and PHP to solve this problem.

> 这个微作业不需要JAVASCRIPT。你应该只使用HTML, CSS和PHP来解决这个问题。

:::

Create two webpages - "micro06.php" and "micro06_process.php"

> 创建两个网页"micro06.php"和"micro06_process.php"

On "micro06.php" create a form that the user should fill out. This form should include blanks for them to type in a username and a password. When the user hits a submit button the data they entered into the form should be sent to "micro06_process.php" using the POST method.

> 在“micro06.php”上创建一个用户需要填写的表单。这个表格应该包括空格，让他们输入用户名和密码。当用户点击提交按钮时，他们输入到表单中的数据应该使用POST方法发送到“micro06_process.php”。

When "micro06_process.php" receives this data it should respond in the following way:

> 当"micro06_process.php"收到这些数据时，它应该以以下方式进行响应:

- If the user left the "username" field empty, the page should redirect back to the "micro06.php" page with a GET variable attached to it. This variable should inform the "micro06.php" page that the username was missing and an appropriate error message should appear.

> 如果用户将“username”字段保留为空，则页面应该重定向回“micro06.php”页面，并附加一个GET变量。这个变量应该通知“micro06.php”页面缺少用户名，并出现适当的错误消息。

- If the user left the "password" field empty, the page should redirect back to the "micro06.php" page with a GET variable attached to it. This variable should inform the "micro06.php" page that the password was missing and an appropriate error message should appear.

> 如果用户将“password”字段留空，则页面应该重定向回“micro06.php”页面，并附加一个GET变量。这个变量应该通知“micro06.php”页面密码丢失，并出现相应的错误消息。

- If both the "username" and "password" fields are filled in but they do not match the correct username / password ("pikachu" / "pokemon") the browser should be redirected back to "micro06.php" with a GET variable attached to it. This variable should inform the "micro06.php" page that the username/password combo is incorrect and an appropriate error message should appear.

> 如果“用户名”和“密码”字段都填写了，但它们不匹配正确的用户名/密码(“皮卡丘”/“口袋妖怪”)，浏览器应该重定向回“micro06.php”，并附加一个GET变量。这个变量应该通知“micro06.php”页面用户名/密码组合不正确，并应该出现适当的错误消息。

- If both the "username" and "password" fields are filled in AND they are correct ("pikachu" / "pokemon" the browser should be redirected back to "micro06.php" with a GET variable attached. Some secret text should appear on the page at this point since the user can be considered "logged in" (note that this is NOT how we would do this on a "real" website, but it's a good demo to learn about the moving parts of a server-side application!)

> 如果“用户名”和“密码”字段都填写了，并且它们是正确的(“皮卡丘”/“口袋妖怪”，浏览器应该重定向回“micro06.php”，并附加一个GET变量。此时页面上应该出现一些秘密文本，因为用户可以被认为是“登录”的(注意，这不是我们在“真正的”网站上所做的，但这是一个很好的演示，可以了解服务器端应用程序的移动部分!)

---

运行命令：`php -S localhost:8081`

::: code-tabs

@tab micro06.php

```php
<!DOCTYPE html>
<html>
<head>
    <title>Micro06</title>
</head>
<body>
    <?php
    if (isset($_GET['error'])) {
        $error = $_GET['error'];
        if ($error == 'username_missing') {
            echo "<p style='color:red;'>Error: Username is missing.</p>";
        } elseif ($error == 'password_missing') {
            echo "<p style='color:red;'>Error: Password is missing.</p>";
        } elseif ($error == 'incorrect_credentials') {
            echo "<p style='color:red;'>Error: Incorrect username/password combination.</p>";
        } elseif ($error == 'success') {
            echo "<p style='color:green;'>Welcome, Pikachu! Secret text: PHP is awesome!</p>";
        }
    }
    ?>

    <form action="micro06_process.php" method="post">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username">
        <br>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password">
        <br>
        <input type="submit" value="Submit">
    </form>
</body>
</html>
```

@tab micro06_process.php

```php
<!DOCTYPE html>
<html>
<head>
    <title>Micro06</title>
</head>
<body>
    <?php
    if (isset($_GET['error'])) {
        $error = $_GET['error'];
        if ($error == 'username_missing') {
            echo "<p style='color:red;'>Error: Username is missing.</p>";
        } elseif ($error == 'password_missing') {
            echo "<p style='color:red;'>Error: Password is missing.</p>";
        } elseif ($error == 'incorrect_credentials') {
            echo "<p style='color:red;'>Error: Incorrect username/password combination.</p>";
        } elseif ($error == 'success') {
            echo "<p style='color:green;'>Welcome, Pikachu! Secret text: PHP is awesome!</p>";
        }
    }
    ?>

    <form action="micro06_process.php" method="post">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username">
        <br>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password">
        <br>
        <input type="submit" value="Submit">
    </form>
</body>
</html>
```

@tab micri06-注释.php

```php
<!DOCTYPE html>
<html>
<head>
    <title>Micro06</title>
</head>
<body>
    <?php
    // 如果存在 GET 参数 'error'，则处理不同的错误情况
    if (isset($_GET['error'])) {
        $error = $_GET['error'];
        // 如果错误为 'username_missing'，显示用户名缺失错误消息
        if ($error == 'username_missing') {
            echo "<p style='color:red;'>Error: Username is missing.</p>";
        }
        // 如果错误为 'password_missing'，显示密码缺失错误消息
        elseif ($error == 'password_missing') {
            echo "<p style='color:red;'>Error: Password is missing.</p>";
        }
        // 如果错误为 'incorrect_credentials'，显示用户名/密码组合错误消息
        elseif ($error == 'incorrect_credentials') {
            echo "<p style='color:red;'>Error: Incorrect username/password combination.</p>";
        }
        // 如果错误为 'success'，显示欢迎消息和秘密文本
        elseif ($error == 'success') {
            echo "<p style='color:green;'>Welcome, Pikachu! Secret text: PHP is awesome!</p>";
        }
    }
    ?>

    <!-- 创建表单，包括用户名和密码输入字段，提交按钮 -->
    <form action="micro06_process.php" method="post">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username">
        <br>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password">
        <br>
        <input type="submit" value="Submit">
    </form>
</body>
</html>


<!-- 
上述代码中，`micro06_process.php` 负责处理用户提交的表单数据。它首先检查是否收到了 POST 数据。如果没有收到 POST 数据，它会将用户重定向回 `micro06.php` 页面。

在处理 POST 数据的过程中，`micro06_process.php` 根据提交的用户名和密码进行不同的操作。如果用户名或密码为空，它将用户重定向回 `micro06.php`，并附加表示错误类型的 GET 变量。如果用户名和密码都不为空，但不正确，它将执行相同的操作，但会附加不同的错误类型。

最后，如果用户名和密码都正确，`micro06_process.php` 将用户重定向回 `micro06.php`，并附加表示成功的 GET 变量。
 -->
```

@tab micro06_process-注释.php

```php
<?php
// 检查是否接收到 POST 数据
if (!empty($_POST)) {
    // 从 POST 数据中获取用户名和密码，如果没有设置则为空字符串
    $username = isset($_POST['username']) ? $_POST['username'] : '';
    $password = isset($_POST['password']) ? $_POST['password'] : '';

    // 检查用户名是否为空
    if (empty($username)) {
        // 如果为空，将用户重定向回 micro06.php，并附加一个表示错误类型的 GET 变量
        header('Location: micro06.php?error=username_missing');
        exit;
    }
    // 检查密码是否为空
    elseif (empty($password)) {
        // 如果为空，将用户重定向回 micro06.php，并附加一个表示错误类型的 GET 变量
        header('Location: micro06.php?error=password_missing');
        exit;
    }
    // 检查用户名和密码是否正确
    elseif ($username != 'pikachu' || $password != 'pokemon') {
        // 如果不正确，将用户重定向回 micro06.php，并附加一个表示错误类型的 GET 变量
        header('Location: micro06.php?error=incorrect_credentials');
        exit;
    } else {
        // 如果用户名和密码都正确，将用户重定向回 micro06.php，并附加一个表示成功的 GET 变量
        header('Location: micro06.php?error=success');
        exit;
    }
} else {
    // 如果没有收到 POST 数据，将用户重定向回 micro06.php
    header('Location: micro06.php');
    exit;
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