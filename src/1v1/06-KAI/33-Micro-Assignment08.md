---
title: Micro Assignment 08
icon: php
date: 2023-04-06 08:35:05
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

- JavaScript Promises
- The "fetch" API for making asynchronous network calls in client-side JavaScript to the server

This micro assignment contains a series of videos along with a programming challenge, which you should attempt after watching the videos. The challenge is set up with a "Mark" button that will let you immediately see if you solved it correctly. You will get credit for the micro assignment by attempting and solving this challenge, and you are allowed to attempt the challenge as many times as you'd like.

Remember that micro assignments are time sensitive! You should try and complete each micro assignment before class on the day it is set to be due. Micro assignments must be turned in by the end of the day on which they are due in order to be worth full credit. Completing a micro assignment after the due date is possible, but you will be marked late and this can affect your grade in the course. Please refer to the [course schedule](https://cs.nyu.edu/courses/spring23/CSCI-UA.0061-001/schedule.html) page for the due date of all micro assignments. 

## JavaScript Promises

<VidStack src="/1v1/06-KAI/33-Micro-Assignment08/webdev-micro08-promises.mp4" />

## The "fetch" API

<VidStack src="/1v1/06-KAI/33-Micro-Assignment08/webdev-micro08-fetch.mp4" />

**Making a Basic Fetch Request in Code**

```php
fetch(URL_TO_FILE_ON_SERVER)
    .then( function(result) {
        if (result.ok) {
            console.log("Success!");
            return result.text();
            // note you can also parse the text into a JSON object, if the
            // data is going to be formatted this way.  to do this use the
            // 'json' method instead of the 'text' method.  for example:
            // return result.json();
        }
        else {
            let myError = new Error("Issue!");
            throw myError;
        }
    })
    .then( function(text) {
        console.log("Got it!");
        console.log(text);
    })
    .catch( function(error) {
        console.log("Error!");
        console.log(error);
    });
```

## "fetch" convenience function

Here is a convenience function that you can use to fetch data from the server using both 'GET' and 'POST' requests.  Note that this function utilizes two "callback" functions that will be called once the promise resolves itself.

```python
function performFetch(args) {
    /* args is an object that is formatted as follows:

        {
            // the URL to contact on the server
            url: url_to_contact

            // request method ('get' or 'post')
            method: 'get',

            // object of variables to send to the server
            data: {
                var1: value1,
                var2: value2,
                var3: value3 // ... etc
            },

            // function to run if request succeeds, should accept a single argument which is the data returned by the server
            success: function(data), 

            // function to run if request fails, should accept a single argument which is the error message
            error: function(error) 
        }
        
    */

    // GET requests
    if (args.method && args.method.toLowerCase() == 'get') {

        // package up the data to send to the server
        const params = new URLSearchParams();
        for (const varName in args.data) {
            params.append(varName, args.data[varName]);
        }

        // append variables to URL
        args.url += '?' + params.toString();

        // perform the fetch request
        fetch(args.url)
            .then(function(response) {
                if (response.ok) {
                    return response.text();
                }
                else {
                    let error = new Error("server error");
                    throw error;
                }
            })
            
            // call the provided success callback function
            .then(function(text) {
                args.success(text);
            })
            
            // call the provided error callback function
            .catch(function(error) {
                args.error(error);
            });

    } // end GET request

    // POST requests
    else if (args.method && args.method.toLowerCase() == 'post') {

        // package up the data to send to the server
        // note that this is designed specifically to contact a PHP script
        // we will use a slightly different approach when we contact
        // node.js scripts in the next unit
        const formData = new FormData();
        for (const key in args.data) {
            if (args.data.hasOwnProperty(key)) {
                formData.append(key, args.data[key]);
            }
        }

        // perform the fetch request
        fetch(args.url, {
            method: "POST",
            body: formData,
        })
        .then(function(response) {
            if (response.ok) {
                return response.text();
            }
            else {
                let error = new Error("server error");
                throw error;
            }
        })
        
        // call the provided success callback function        
        .then(function(text) {
            args.success(text);
        })
        
        // call the provided error callback function        
        .catch(function(error) {
            args.error(error);
        });

    } // end POST request

}

// demo usage -- contact a script using the 'GET' method
performFetch({
    url: 'fetch/generate_data.php',
    method: 'get',
    data: {
        name: 'pikachu'
    },
    success: function(data) {
        console.log("success GET:", data);
    },
    error: function(error) {
        console.log("error GET:", error);
    }
});


// demo usage -- contact a script using the 'POST' method
performFetch({
    url: 'fetch/generate_data_post.php',
    method: 'post',
    data: {
        name: 'squirtle'
    },
    success: function(data) {
        console.log("success POST:", data);
    },
    error: function(error) {
        console.log("error POST:", error);
    }
});
```

## Programming Challenge

::: info

This micro assignment is not an auto-graded assignment.  Instead, you will be writing a program on your computer using MAMP to solve the challenge described below.  When you are finished please upload your program to the i6 server so we can run it.  We should be able to visit your main landing page (e.g. https://i6.cims.nyu.edu/~NETID/webdev) and find a link to your project.

**Please submit a ZIP archive of your work to Brightspace by the due date to get on-time credit for this micro assignment.**  

:::

In this program you are going to create a "sticky" website that allows a user to add a series of colored boxes to the page. Every time a box is added a 'fetch' request should be made to a PHP script on the server to save the box being created in a text file. In addition, when the page initially loads the program should contact the server and obtain the current text file and "recreate" all previously generated boxes.

> 在这个程序中，您将创建一个“粘性”的网站，允许用户向页面添加一系列彩色框。每次添加一个框时，都应该向服务器上的一个PHP脚本发起一个“获取”请求，以将创建的框保存在文本文件中。此外，当页面最初加载时，程序应该联系服务器并获取当前的文本文件，并“重新创建”所有先前生成的框。

All of the HTML, CSS and PHP has been written for this program, along with a SQLite database. Your job is to edit the JavaScript on `micro08.html` to make these 'fetch' requests and parse the results that you receive. 

> 这个程序的所有HTML、CSS和PHP都已经编写好了，同时还有一个SQLite数据库。你的工作是编辑 `micro08.html` 文件中的JavaScript代码，以执行这些“fetch”请求并解析接收到的结果。

You can download the starter code here:

[/1v1/06-KAI/33-Micro-Assignment08/micro08_starter_code.zip](/1v1/06-KAI/33-Micro-Assignment08/micro08_starter_code.zip)







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