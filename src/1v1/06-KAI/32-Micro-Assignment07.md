---
title: Micro Assignment 07
icon: php
date: 2023-04-06 07:36:44
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
    - php
    - 留学生作业辅导
tag:
    - 1v1
    - java 1v1
    - php
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

Micro assignment 06 focuses on the following concepts:

> 微任务06主要关注以下概念：

- PHP File I/O「PHP 文件输入输出」
- Cookies vs. LocalStorage「Cookies 与 LocalStorage 的比较」
- Using cookies with PHP「使用 PHP 操作 Cookies」

This micro assignment contains a series of videos along with a programming challenge, which you should attempt after watching the videos. The challenge is set up with a "Mark" button that will let you immediately see if you solved it correctly. You will get credit for the micro assignment by attempting and solving this challenge, and you are allowed to attempt the challenge as many times as you'd like.

> 这个微任务包含一系列视频，以及一个编程挑战，你应该在观看完视频后尝试。挑战设有一个“标记”按钮，让你立即知道是否解决了问题。通过尝试和解决这个挑战，你将获得微任务的学分，而且你可以尝试挑战任意次数。

Remember that micro assignments are time sensitive! You should try and complete each micro assignment before class on the day it is set to be due. Micro assignments must be turned in by the end of the day on which they are due in order to be worth full credit. Completing a micro assignment after the due date is possible, but you will be marked late and this can affect your grade in the course. Please refer to the [course schedule](https://cs.nyu.edu/courses/spring23/CSCI-UA.0061-001/schedule.html) page for the due date of all micro assignments. 

> 请记住，微任务是时间敏感的！你应该在截止日期前的课程当天尽量完成每个微任务。为了获得全部学分，微任务必须在截止日期当天结束前提交。在截止日期后完成微任务是可能的，但你会被标记为迟交，这可能会影响你在课程中的成绩。请参考[课程日程](https://cs.nyu.edu/courses/spring23/CSCI-UA.0061-001/schedule.html)页面查看所有微任务的截止日期。

## PHP File I/O

<VidStack src="/1v1/06-KAI/32-Micro-Assignment07/01-php-fileIO.mp4" />



## Cookies vs. LocalStorage

<VidStack src="/1v1/06-KAI/32-Micro-Assignment07/02-cookies-vs-localstorage.mp4" />



## PHP Cookies

<VidStack src="/1v1/06-KAI/32-Micro-Assignment07/03-cookies-and-php.mp4" />

<VidStack src="/1v1/06-KAI/32-Micro-Assignment07/04-practical-cookies.mp4" />

## Programming Challenge

::: info

This micro assignment is not an auto-graded assignment.  Instead, you will be writing a program on your computer using MAMP to solve the challenge described below.  When you are finished please upload your program to the i6 server so we can run it.  We should be able to visit your main landing page (e.g. https://i6.cims.nyu.edu/~NETID/webdev) and find a link to your project.

**Please submit a ZIP archive of your work to Brightspace by the due date to get on-time credit for this micro assignment.**  

> 这个微任务不是自动评分的任务。相反，你将在自己的计算机上使用 MAMP 编写一个程序来解决下面描述的挑战。完成后，请将你的程序上传到 i6 服务器，以便我们可以运行它。我们应该能够访问你的主要登录页面（例如 https://i6.cims.nyu.edu/~NETID/webdev），并找到你的项目链接。
>
> 请在截止日期前将你的作品的 ZIP 归档文件提交到 Brightspace，以便按时获得这个微任务的学分。

:::

::: warning

This micro assignment requires NO JAVASCRIPT. You should ONLY be using HTML, CSS and PHP to solve this problem.

> 这个微任务不需要使用 JavaScript。你应该仅使用 HTML、CSS 和 PHP 来解决这个问题。

:::

Make a copy of the files you created for Micro Assignment #06 - call them "micro07.php" and "micro07_process.php"

> 为你创建的微任务＃06制作一个文件副本，将它们命名为 "micro07.php" 和 "micro07_process.php"。

Create a 'data' folder to hold some textual data on the server.

> 在服务器上创建一个"data"文件夹，用于存储一些文本数据。

Update "micro07_process.php" to save a file on the server to keep track of the following events:

> 更新 "micro07_process.php"，在服务器上保存一个文件，以记录以下事件：

- A record of successful logins「记录成功登录的事件」
- A record of unsuccessful logins「记录登录失败的事件」
- A record of logins that were missing either a username or a password「记录缺少用户名或密码的登录事件」

For example, you could create a file on the server that looks like the following (each line represents an event that you are logging):「记录缺少用户名或密码的登录事件」

```php
successful
successful
successful
unsuccessful
missing
missing
missing
successful
```

If the user successfully logs in you should drop a cookie on their computer to "remember" this. If this cookie is present the user should be shown a special "you are logged in" message when visiting "micro07.php". You should also hide the login form if this cookie is present.

> 翻译：如果用户成功登录，你应该在他们的计算机上放置一个 Cookie 以“记住”这个状态。如果存在这个 Cookie，当访问 "micro07.php" 时，用户应该看到一个特殊的“您已登录”的信息。如果存在这个 Cookie，你还应该隐藏登录表单。

Use the same username / password combination as you used for micro 06 **("pikachu" / "pokemon")**

> 使用与微任务 06 相同的用户名/密码组合 **("pikachu" / "pokemon")**

When publishing this file to the server make sure you either (1) use the `getcwd()` function to obtain the absolute file path or (2) update the 'path' manually to point to the 'data' folder on the i6 server. Because the i6 server has a different file structure as compared to your local filesystem this information will be different on the server. You can obtain the absolute file path on the i6 server by logging into the server using a terminal command, navigating to the data folder and running the 'pwd' command. Alternately you can log in using an FTP program and right-click (or command-click on a mac) on the 'data' folder to find the server path of the folder. In addition, ensure that the 'data' folder has full permissions set on it (777). Don't upload your data file - instead, let apache on the server create this file (if you upload your own file you will also need to set its permissions to 777 on the server as well)

> 将此文件发布到服务器时，请确保要么（1）使用 `getcwd()` 函数获取绝对文件路径，要么（2）手动更新路径以指向 i6 服务器上的 'data' 文件夹。由于 i6 服务器与您的本地文件系统具有不同的文件结构，因此服务器上的此信息将不同。您可以通过使用终端命令登录到服务器、导航到数据文件夹并运行 'pwd' 命令来获取 i6 服务器上的绝对文件路径。或者，您可以使用 FTP 程序登录，然后右键单击（或在 Mac 上使用命令单击）'data' 文件夹，以查找文件夹的服务器路径。此外，请确保 'data' 文件夹具有完全权限设置（777）。不要上传您的数据文件，而是让服务器上的 Apache 创建这个文件（如果您上传自己的文件，您还需要将其权限设置为 777 服务器上）

::: code-tabs

@tab micro07.php

```php
<!DOCTYPE html>
<html>
<head>
    <title>Micro07</title>
</head>
<body>
<?php
if (isset($_COOKIE['loggedin']) && $_COOKIE['loggedin'] == 'yes') {
    echo "<p style='color:green;'>You are logged in. Welcome, Pikachu! Secret text: PHP is awesome!</p>";
} else {
    if (isset($_GET['error'])) {
        $error = $_GET['error'];
        if ($error == 'username_missing') {
            echo "<p style='color:red;'>Error: Username is missing.</p>";
        } elseif ($error == 'password_missing') {
            echo "<p style='color:red;'>Error: Password is missing.</p>";
        } elseif ($error == 'incorrect_credentials') {
            echo "<p style='color:red;'>Error: Incorrect username/password combination.</p>";
        }
    }
    ?>

    <form action="micro07_process.php" method="post">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username">
        <br>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password">
        <br>
        <input type="submit" value="Submit">
    </form>

<?php } ?>
</body>
</html>
```

@tab micro07_process.php

```php
<?php
$data_path = 'data/login_attempts.txt';

function log_event($event, $data_path) {
    file_put_contents($data_path, $event . PHP_EOL, FILE_APPEND);
}

if (!empty($_POST)) {
    $username = isset($_POST['username']) ? $_POST['username'] : '';
    $password = isset($_POST['password']) ? $_POST['password'] : '';

    if (empty($username)) {
        log_event('missing', $data_path);
        header('Location: micro07.php?error=username_missing');
        exit;
    } elseif (empty($password)) {
        log_event('missing', $data_path);
        header('Location: micro07.php?error=password_missing');
        exit;
    } elseif ($username != 'pikachu' || $password != 'pokemon') {
        log_event('unsuccessful', $data_path);
        header('Location: micro07.php?error=incorrect_credentials');
        exit;
    } else {
        log_event('successful', $data_path);
        setcookie('loggedin', 'yes', time() + 86400, '/'); // 86400 seconds = 1 day
        header('Location: micro07.php');
        exit;
    }
} else {
    header('Location: micro07.php');
    exit;
}
```

:::

1. 在 `micro07.php` 文件中，我添加了一个判断来检查是否存在名为 "loggedin" 的 cookie，并且其值为 "yes"。如果满足条件，它将显示 "You are logged in" 的信息，同时隐藏登录表单。这部分代码是新添加的。
2. 在 `micro07_process.php` 文件中，我添加了一个名为 `log_event` 的函数，它用于将登录事件记录到服务器上的 "`data/login_attempts.txt`" 文件中。这个函数是新添加的。
3. 在处理表单提交的逻辑中，我为成功登录、登录失败以及缺少用户名或密码的情况分别调用了 `log_event` 函数，以记录相应的事件。这部分代码是修改过的。
4. 当用户成功登录时，我设置了一个名为 "loggedin" 的 cookie。这部分代码是新添加的。





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