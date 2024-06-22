---
title: Assignment 10 Node.js
icon: php
date: 2023-05-08 00:05:43
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

For our last macro assignment you will be building a custom Node.js website using the `express` framework.  The actual content and design for this site are very  flexible, so be creative!  Your site should incorporate the following  technical features:

> 对于我们的最后一项宏观任务，您将使用`express`框架构建一个自定义的Node.js网站。实际的内容和设计非常灵活，因此要有创意！您的网站应包含以下技术特性：

## OPTION #1: An Express-based Content Management System

> 选项1：基于Express的内容管理系统

Build an `express` based Node.js system that includes the following features:

> 构建一个基于 `express` 的 Node.js 系统，该系统包含以下特性：

- A landing route that welcomes users to your site

> 一个欢迎用户来到您网站的着陆页。

- Four additional `get` routes (e.g. `/about` for an 'about this site' page, `/contact` for a 'contact me' page, etc.)

> 四个额外的`get`路由（例如`/about`用于关于本网站的页面，`/contact`用于联系我页面等）。

- Use of an image on at least one route

> 至少在一条路线上使用一张图片。

- At least one form that sends `post` data to another route on the site

> 至少有一种表单将“post”数据发送到站点上的另一个路由。

- Permanent file storage (both reading and writing)  used somewhere on the site (e.g. asking the user to fill in a form and  then displaying that data somewhere else on the site)

> 永久文件存储（包括读取和写入），用于网站的某个地方（例如，要求用户填写表格，然后在网站的其他地方显示该数据）。

- Use of templates to create reusable presentation logic for every page on the site

> 使用模板创建可重用的演示逻辑，用于网站上的每个页面。

## OPTION #2: An Express-based Real-time Collaboration Site

> 选项 #2：基于 Express 的实时协作网站

Build an `express` based Node.js system that uses the `socket.io` library for real-time collaboration.  Your site should includes the following features:

> 构建一个基于 `express` 的 Node.js 系统，使用 `socket.io` 库实现实时协作。你的网站应包括以下功能：

- A landing route that welcomes users to your site

> 一个欢迎用户来到您网站的着陆路线。

- One additional `get` routes (e.g. `/howtoplay` for a 'how to play the game' page, a `/contact` for a 'contact me' page, etc.)

> 另外还有一些`get`路由（例如`/howtoplay`表示'如何玩游戏'页面，`/contact`表示'联系我'页面等等）。

- Use of templates to create reusable presentation logic for every page on the site

> 使用模板创建可重用的演示逻辑，以便为站点上的每个页面提供一致的展示方式。

- Create some kind of creative activity that allows  the user to indicate their preference (adding elements to the page,  updating elements, drawing on a canvas, etc.)  The user's preference  should be transmitted to the server using the `socket.io`  library which should, in turn, communicate those preferences in  real-time to other logged in clients. Write both client-side and  server-side code to mediate these interactions.           

> 创建某种创意活动，允许用户表达他们的喜好（例如添加页面元素、更新元素、在画布上绘画等）。用户的喜好应该使用 `socket.io` 库传输到服务器，服务器应该实时将这些喜好传达给其他已登录的客户端。编写客户端和服务器端代码以促进这些交互。    

- You **cannot** use one of the  samples that I gave "as-is" and just make small modifications (e.g. I  wrote the "grid game" in class, and there's an example on how to write a chatroom -- both of these concepts are off limits and cannot be re-used for this assignment)

> 你**不能**直接使用我提供的样本之一并进行少量修改（例如，我在课上编写了“网格游戏”，还有一个编写聊天室的示例——这两个概念都是禁用的，不能用于此作业）。

- Permanent file storage (both reading and writing)  used somewhere on the site (e.g. keeping track of player stats, etc.) -  make sure carefully choose where you put your file I/O logic, as doing  this inside of your `socket` handler could causer the server  to try and access the hard drive in rapid succession, which could cause  your app to fail.  Hint: do this when the server goes down and keep  track of data in memory while the server is running.

> 永久性文件存储（包括读写）用于站点某处（例如跟踪玩家统计信息等）- 确保仔细选择放置文件I/O逻辑的位置，因为在`socket`处理程序内部执行此操作可能会导致服务器尝试快速连续地访问硬盘，从而导致应用程序失败。提示：在服务器关闭时执行此操作，并在服务器运行时在内存中跟踪数据。

The quickest way to get started with this project is to visit the [Node.js Examples Ed Stem lessons page](https://edstem.org/us/courses/32515/lessons/).  These lessons contain a large number of examples Node.js projects that you can use to get started. In addition, the lessons contains a  "Node.js Sandbox" section that you can use to begin writing your code.   This sandbox has the following node packages installed for you:

> 最快入门此项目的方法是访问 [Node.js Examples Ed Stem lessons page](https://edstem.org/us/courses/32515/lessons/)。这些课程包含大量的Node.js项目示例，可以帮助您入门。此外，这些课程还包含一个名为“Node.js Sandbox”的部分，您可以在其中开始编写代码。这个沙盒为您安装了以下的Node.js包：

`express`                `body-parser`                `fs`                `hogan.js`                `socket.io` (only day 25)            

`express`：一个流行的 Node.js web 应用框架，用于简化 web 应用的开发和管理。

`body-parser`：一个 Node.js 中间件，用于解析来自 HTTP POST 请求的请求体，常用于处理表单数据。

`fs`：一个 Node.js 核心模块，提供了访问文件系统的 API，例如读取、写入、重命名和删除文件等。

`hogan.js`：一个快速、简单且具有可扩展性的 JavaScript 模板引擎，用于将数据渲染到 HTML 页面上。

`socket.io` (仅第 25 天)：一个基于事件的实时通信库，用于在服务器和客户端之间建立双向通信。

When you are finished working on your site you will need to publish it to i6 so that others can use it.  [You can do this by following the steps listed in this lesson slide.](https://edstem.org/us/courses/32515/lessons/61742/slides/342441)

> 当你完成网站制作后，你需要将其发布到i6，这样其他人才能使用它。[你可以按照本课程幻灯片中列出的步骤进行操作。](https://edstem.org/us/courses/32515/lessons/61742/slides/342441)

Post a hyperlink to your live server (e.g. `http://i6.cims.nyu.edu:1000`) to Brightspace under the 'Macro Assignment 10' category. Also create a  ZIP archive of your work and submit it to Brightspace under the 'Macro  Assignment 10' category.

> 请在Brightspace的“Macro Assignment 10”类别下发布指向您的实时服务器（例如 `http://i6.cims.nyu.edu:1000`）的超链接。同时，创建一个ZIP归档文件并在“Macro Assignment 10”类别下提交。



```js
For our last macro assignment you will be building a custom Node.js website using the `express` framework.  The actual content and design for this site are very  flexible, so be creative!  Your site should incorporate the following  technical features:

## OPTION #1: An Express-based Content Management System

Build an `express` based Node.js system that includes the following features:

- A landing route that welcomes users to your site
- Four additional `get` routes (e.g. `/about` for an 'about this site' page, `/contact` for a 'contact me' page, etc.)
- Use of an image on at least one route
- At least one form that sends `post` data to another route on the site
- Permanent file storage (both reading and writing)  used somewhere on the site (e.g. asking the user to fill in a form and  then displaying that data somewhere else on the site)
- Use of templates to create reusable presentation logic for every page on the site

## OPTION #2: An Express-based Real-time Collaboration Site

Build an `express` based Node.js system that uses the `socket.io` library for real-time collaboration.  Your site should includes the following features:

- A landing route that welcomes users to your site
- One additional `get` routes (e.g. `/howtoplay` for a 'how to play the game' page, a `/contact` for a 'contact me' page, etc.)
- Use of templates to create reusable presentation logic for every page on the site
- Create some kind of creative activity that allows  the user to indicate their preference (adding elements to the page,  updating elements, drawing on a canvas, etc.)  The user's preference  should be transmitted to the server using the `socket.io`  library which should, in turn, communicate those preferences in  real-time to other logged in clients. Write both client-side and  server-side code to mediate these interactions.                
- You **cannot** use one of the  samples that I gave "as-is" and just make small modifications (e.g. I  wrote the "grid game" in class, and there's an example on how to write a chatroom -- both of these concepts are off limits and cannot be re-used for this assignment)
- Permanent file storage (both reading and writing)  used somewhere on the site (e.g. keeping track of player stats, etc.) -  make sure carefully choose where you put your file I/O logic, as doing  this inside of your `socket` handler could causer the server  to try and access the hard drive in rapid succession, which could cause  your app to fail.  Hint: do this when the server goes down and keep  track of data in memory while the server is running.

The quickest way to get started with this project is to visit the [Node.js Examples Ed Stem lessons page](https://edstem.org/us/courses/32515/lessons/).  These lessons contain a large number of examples Node.js projects that you can use to get started. In addition, the lessons contains a  "Node.js Sandbox" section that you can use to begin writing your code.   This sandbox has the following node packages installed for you:

`express`                `body-parser`                `fs`                `hogan.js`                `socket.io` (only day 25)            

When you are finished working on your site you will need to publish it to i6 so that others can use it.  [You can do this by following the steps listed in this lesson slide.](https://edstem.org/us/courses/32515/lessons/61742/slides/342441)

Post a hyperlink to your live server (e.g. `http://i6.cims.nyu.edu:1000`) to Brightspace under the 'Macro Assignment 10' category. Also create a  ZIP archive of your work and submit it to Brightspace under the 'Macro  Assignment 10' category.
```

## Answer 1

要完成选项1，即基于Express的内容管理系统，你需要遵循以下步骤：

1. **安装必要的依赖项**：在你的项目文件夹中，使用`npm init`创建一个`package.json`文件。然后安装必要的依赖项，例如`express`、`body-parser`、`fs`和`hogan.js`。可以使用以下命令进行安装：

   ```
   npm install express body-parser fs hogan.js
   npm install hjs
   npm install express-handlebars
   ```

2. **设置Express应用程序**：创建一个`app.js`文件，并在其中设置你的Express应用程序。引入所需的依赖项并初始化一个Express实例：

   ```javascript
   const express = require('express');
   const bodyParser = require('body-parser');
   const fs = require('fs');
   const hogan = require('hogan.js');

   const app = express();
   ```

   接下来，使用`body-parser`中间件解析请求正文：

   ```javascript
   app.use(bodyParser.urlencoded({ extended: false }));
   app.use(bodyParser.json());
   ```

3. **创建欢迎用户的着陆路由**：定义一个GET路由，用于向访问主页的用户显示欢迎消息：

   ```javascript
   app.get('/', (req, res) => {
     res.send('Welcome to my custom Node.js website!');
   });
   ```

4. **添加四个额外的GET路由**：为其他页面（如关于、联系、博客和图库）创建四个GET路由。例如：

   ```javascript
   app.get('/about', (req, res) => {
     res.send('About this site');
   });

   app.get('/contact', (req, res) => {
     res.send('Contact me');
   });

   app.get('/blog', (req, res) => {
     res.send('My blog');
   });

   app.get('/gallery', (req, res) => {
     res.send('Image gallery');
   });
   ```

5. **在至少一个路由上使用图片**：在`/gallery`路由中，可以使用`<img>`标签插入图片。例如：

   ```javascript
   app.get('/gallery', (req, res) => {
     res.send('<h1>Image Gallery</h1><img src="/path/to/your/image.jpg" alt="Sample image">');
   });
   ```

6. **创建一个发送POST数据的表单**：在`/contact`路由中，添加一个表单，用于收集用户的姓名和电子邮件。表单应当通过POST方法提交数据：

   ```javascript
   app.get('/contact', (req, res) => {
     res.send(`
       <h1>Contact me</h1>
       <form action="/contact-submit" method="POST">
         <label for="name">Name:</label>
         <input type="text" id="name" name="name" required>
         <label for="email">Email:</label>
         <input type="email" id="email" name="email" required>
         <button type="submit">Submit</button>
       </form>
     `);
   });
   
        app.post('/contact-submit', (req, res) => {
          const { name, email } = req.body;
          // 保存表单数据到文件或数据库，并显示确认消息
          fs.appendFile('contacts.txt', `${name}, ${email}\n`, (err) => {
            if (err) {
              console.error(err);
              res.status(500).send('An error occurred while saving your information.');
              return;
            }
            res.send('Thank you! Your information has been saved.');
          });
        });

7. **使用模板创建可重用的表示逻辑**：首先，将页面布局、导航等公共部分提取到一个单独的模板文件（例如`layout.hjs`）。然后，为每个路由创建一个模板文件（例如`about.hjs`、`contact.hjs`等），并使用`layout.hjs`作为基本布局。

```html
<!-- layout.hjs -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{title}}</title>
</head>
<body>
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/contact">Contact</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/gallery">Gallery</a></li>
    </ul>
  </nav>
  <main>
    {{{content}}}
  </main>
</body>
</html>
```

接下来，将每个路由的内容更新为使用模板引擎。例如，对于`/about`路由：

```javascript
app.get('/about', (req, res) => {
  res.render('about', { title: 'About this site', content: 'This is a custom Node.js website using the Express framework.' });
});
```

8. **启动服务器**：设置一个端口并启动服务器：

```javascript
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
```

按照这些步骤，你就可以完成一个基于Express的内容管理系统。最后，确保按照题目要求提交你的作品。

::: info 图片路径貌似无法正常加载，图片我已经放在 `static/images/img.png` 里面了

要在Express应用程序中加载静态资源（如图片、CSS文件或JavaScript文件），你需要使用`express.static`中间件。首先，在`app.js`文件中，添加以下代码以将`/static`目录设置为存放静态资源的地方：

```javascript
app.use('/static', express.static('static'));
```

然后，将图片放在`static/images`文件夹中，并确保该文件夹位于与`app.js`相同的目录层次下。

最后，在路由中使用正确的图片路径，例如：

```javascript
app.get('/gallery', (req, res) => {
  res.send('<h1>Image Gallery</h1><img src="/static/images/img.png" alt="Sample image">');
});
```

现在，当你访问`/gallery`路由时，图片应该可以正常显示。

:::

---

Hosting your Node.js application the i6 server will involve more than just SFTPing your files and relying on Apache to fetch and execute them for you.  The following steps can be used to deploy your application:

- Configure your application to use a unique port number so that your application doesn't conflict with another application running on the server.  [You can obtain a pre-assigned port number by filling out this form](https://cs.nyu.edu/courses/spring23/CSCI-UA.0061-001/assignment10_portlookup.php).
- Create a folder on i6. This should be in your home directory, not your `public_html` directory.  For the purpose of this demo we will call this directory `mynodeapp`
- SFTP your JavaScript files, static media folder (`public`), and template folder (`views`) to the server under the `mynodeapp` folder.
- Open a terminal connection to [i6.cims.nyu.edu](http://i6.cims.nyu.edu/)
- Navigate to the `mynodeapp` directory.
- Initialize npm (Node Package Manager) by issuing this command:

```python
npm init
```

- Install the necessary node modules by issuing the following commands, depending on which ones you are using:

    npm install express npm install body-parser npm install fs npm install hogan.js npm install socket.io

- You can start up your server by issuing the `node filename` command, where `filename` is the name of your application file.

- Your server will begin running immediately and you should be able to test it by going to the browser and accessing `http://i6.cims.nyu.edu:YOUR_PORT_NUMBER`

- **Important**: Make sure you are accessing your application over `http` not `https`. We did not go through the process of setting up our app to work with `https` encryption, which will involve obtaining a special SSL certification along with additional setup and configuration.

As soon as you log out of your terminal connection to the server your app will quit.  In order to fix this we need to tell the i6 server to bring up our server on our behalf even if we aren't logged in.  We can do this using a **cronjob**.  A cronjob is a time-based scheduler in Unix-like operating systems which executes a command or script at a specific time and frequency.  They are often used for recurring tasks.  We are going to use a cronjob to check to see whether our Node.js app is running and, if not, to start it up on our behalf.  

To do this begin by creating a file named `keepalive.sh` inside of your `mynodeapp` directory.  Add the following data to this file:

```sh
#!/bin/bash

PORT=YOUR_PORT_NUMBER_HERE
APP_DIR="/home/NETID/mynodeapp"
APP_FILENAME="application_filename.js"
LOG_FILE="$APP_DIR/restart.log"

# Check if the app is running
if /usr/sbin/lsof -i :$PORT >/dev/null; then
  # it's running, do nothing
  true
else
  # it's not running, restart the app
  echo "App is not running, restarting..."
  cd $APP_DIR
  nohup node $APP_FILENAME >> $LOG_FILE 2>&1 &
  echo "Application restarted at $(date)" >> $LOG_FILE
fi
```

Replace the bold text with your own values.  For example:

```sh
PORT=10000
APP_DIR="/home/cmk380/mynodeapp"
APP_FILENAME="my_app.js"
```

Next, give yourself full permission to run this file:

```sh
chmod 700 keepalive.sh
```

Run the file by issuing this command:

```sh
/home/NETID/mynodeapp/keepalive.sh
```

Be sure to substitute your own information into this command.  You should see that the program will run and start up your application.  Try running the program a second time, and you should see that the program is already running.

Finally, we need to schedule the `keepalive.sh` program to run periodically to handle situations where your app crashes or the server goes down and kills your app.  You can do this by setting up a cronjob to run this file on a regular basis.  Begin by creating a new file named `crontab.text` and paste in the following information.  Make sure the command at the end of the line matches the one you ran in the previous step.

```sh
*/5 * * * * /home/NETID/mynodeapp/keepalive.sh
```

A crontab file describes when a certain command should be run. This particular line says "every 5th minute, of every hour, of every day, of every month, of every year, run this program".  [You can learn more about crontab syntax on this site](https://crontab.guru/).

Save your file.  Finally, we need to set up our cronjob.  You can do this by issuing this command:

```sh
crontab crontab.text
```

You can check to see that your cronjob has been loaded by issuing this command:

```sh
crontab -l
```

You should now be able to wait until the time hits a multiple of 5 (12:00, 12:05, 12:10, etc.) -- after that your server should be brought online automatically.  The crontab system will check every 5 minutes after that to ensure that your server stays up and running.

> Important note: If you need to make changes to your site (updating templates, changing application logic, etc.) you won't be able to just upload new code to the server and have it work right away. This is because your application is a server that is constantly running in the background, and the code it is using is based on the last time it was started. You can force your server to shut down by doing the following:

- Open a terminal connection to the i6 server
- Type the following command:  `lsof -i :**YOUR_PORT_NUMBER**`
- A line that looks like the following should appear:

```sh
COMMAND  PID  USER  FD  TYPE DEVICE SIZE/OFF NODE NAME
node   13401 cmk380  18u IPv6 133776461 0t0 TCP *:ndmp (LISTEN)
```

- Find the number listed in the PID column (which stands for "Process ID") and issue the following command:  `kill **YOUR_PID_HERE**`
- Your server will be brought down, and you won't be able to access it again until you restart it yourself, or your cronjob restarts for you.

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