---
title: 13-实战：萨摩耶“猎豹”的互动成长日记
date: 2022-08-04 23:22:35
author: AI悦创
isOriginal: true
category: web 专栏
tag:
    - web 专栏
icon: web
sticky: false
star: false
article: true
timeline: true
image: false
navbar: true
sidebarIcon: true

comment: true

prev: base_11.md
next: ../txk/txk_01.md
backToTop: true
toc: true
---

## 萨摩耶“猎豹”的互动成长日记

大家好! 我是 Lisa 的宠物犬萨摩耶, 猎豹。

我很想和朋友们互动，你能帮我在我的网页日记上添加一些互动效果，使它对用户更加友好吗？

![JS实战](https://blog.images.bornforthis.cn/docs-images/sha256/5a/5aadc01f111cca18cc5070ef8c12b3b295dbb50ff4ddcaa6d84bb850357d1af1.jpg)

## 第1步 修改标题

我们将使用 JS 修改标题, 使你感性认识 JS 发挥的作用。

首先得为存放 JS 文件新建一个文件夹，它将专门用于存放项目中的 script（脚本）文件：

![image-20220804233322279](https://blog.images.bornforthis.cn/docs-images/sha256/1d/1d99df9c4e568c12f351d324648d88bd1e4fddc1011d326b414ac185a960125b.png)

新建一个 js 文件：

![image-20220804233403297](https://blog.images.bornforthis.cn/docs-images/sha256/94/94f737b7bf7a005e8496bbce10def5b516faa441d226be68f15a6590f1180d78.png)



代码如下：

```javascript
window.onload = function () {
    let myHeading = document.querySelector('h1');
    myHeading.textContent = 'Hello, my friends!';
};
```

![image-20220804233457133](https://blog.images.bornforthis.cn/docs-images/sha256/08/0860d4cb3172f2f839389fede2cc437621b9fd9d10b50b8b6ae47a21f79fe65d.png)

再将以下代码，复制到 `index.html` 文件中的 `<head>` 和 `</head>` 之间：

```html
<script src="script/first_js.js"></script>
```

![image-20220804233637478](https://blog.images.bornforthis.cn/docs-images/sha256/ae/aebee8ffcb0a121726336e6816a2f9606e5f94521d27b76d6000c1d50e6dd16c.png)

接着，保存 html 文件，将 `index.html` 拖入浏览器，看看变化;

### Before

![image-20220804233808070](https://blog.images.bornforthis.cn/docs-images/sha256/10/108f6435f9840397bee599a148ae6c736dc75aa12738b45b077148db2adc8c68.png)

### After

![image-20220804233730539](https://blog.images.bornforthis.cn/docs-images/sha256/79/796f9df1432799cc085e338a255ecda583a376b0c6bc56d859f61de73d30c0d9.png)

使用 JS 使标题内容发生了改变。

你也可以此为示例，对网页的其它部分进行修改。

## 第2步 添加图像切换器

为了增加网页的互动性，我们将用 JS 为猎豹的成长日记添加一个图片切换器。

它能使用户在点击图片时自动切换到另一张图片。

为此我们向 Lisa 索要了猎豹的新照片，并把这张照片命名为 pic3 保存在 img 文件夹中。

![pic3](https://blog.images.bornforthis.cn/docs-images/sha256/92/92d434538af018555faaabfc708891efb8e8a9c89e73f3fbbacf245b05b20f82.jpg)

请在你的编译器中，打开 `first_js.js` 文件，首先删除在第 1 步中更改标题所用的"Hello, myfriends!"的那段代码。

将下列代码复制到当前文件中：

```javascript
window.onload = function () {

    let myImage = document.querySelector('img');

    myImage.onclick = function () {
        let mySrc = myImage.getAttribute('src');
        if (mySrc === 'img/dog.jpg') {
            myImage.setAttribute('src', 'img/pic3.JPG');
        } else {
            myImage.setAttribute('src', 'img/dog.jpg');
        }
    }
};
```

![image-20220804234715312](https://blog.images.bornforthis.cn/docs-images/sha256/e3/e38f03f24a30bade401f0e7f7c41b67d46cea813faaf4210cd9ffa610e841456.png)

保存当前文件。

将 `index.html` 拖入浏览器中，点击第一张图标，看看是否完成了图片切换效果。

<button name="button" style="color: black"><a href="https://web.online.bornforthis.cn/web_base/base_13/01/base_13-1.html" target="_blank">尝试一下</a></button>

当你点击图片上图，它能自动切换，你的图像切换器就制作完成啦！

本步骤用到了 `if...else...` 语句，如果你仅仅复制了代码而并不知道原理所在，请复习这个知识点。

这样你就能为猎豹切换出更多图片啦！

## 第3步 添加个性化欢迎界面

接下来，我们要为除此访问猎豹成长日记的用户添加一个欢迎界面。即在标题中添加访问者的名字。

即使用户关闭页面之后再重新打开，仍可获得信息。

还会添加一个选项，根据需要改变用户名字以更新欢迎信息。

请打开 `index.html` 文件，在 `<body></body>` 之间添加以下代码：

```java
<button>切换用户</button>
```

如图操作，我们将其置于 `<h1>` 下面：

![image-20220804235438471](https://blog.images.bornforthis.cn/docs-images/sha256/a1/a1c144c8233ed6f0b17711d2f0761e3d18a9f88a73a2c0c67f732c9238a33acb.png)

将以下代码复制到 `first_js.js` 的文件中，并保存当前文件及 html 文件。

```javascript
window.onload = function () {
    let myImage = document.querySelector('img');
    myImage.onclick = function () {
        let mySrc = myImage.getAttribute('src');
        if (mySrc === 'img/dog.jpg') {
            myImage.setAttribute('src', 'img/pic3.JPG');
        } else {
            myImage.setAttribute('src', 'img/dog.jpg');
        }
    }

    function setHeading(Lisa) {
        let myHeading = document.querySelector('h1');
        myHeading.textContent = 'Hello!' + Lisa + '!';
    }

    function setUserName() {
        let myName = prompt('请输入你的名字');
        localStorage.setItem('name', myName);
        setHeading(myName);
    }

    let storedName = localStorage.getItem('name');
    if (!storedName) {
        setUserName();
    } else {
        setHeading(storedName);
    }
    let myButton = document.querySelector('button');
    myButton.onclick = setUserName;
};
```

如果你跟着我们的步骤，你会得到一个个性化欢迎界面：

![image-20220804235853730](https://blog.images.bornforthis.cn/docs-images/sha256/f4/f42c75e5b31eacd27106ff48287f6e49db96d38a955d6c41d115ce23eb956935.png)

![image-20220804235910941](https://blog.images.bornforthis.cn/docs-images/sha256/a9/a92d084e1b29dfa49a8afa08a684869bb90cfd15f6b3de95e736d466408672e9.png)

![image-20220804235928828](https://blog.images.bornforthis.cn/docs-images/sha256/4e/4eb5658486225208e2153ecb3c2d4d1b52d8e0662ce60b9956d2e22011974cb4.png)

<button name="button" style="color: black"><a href="https://web.online.bornforthis.cn/web_base/base_13/01/base_13-2.html" target="_blank">尝试一下</a></button>



## 代码下载

<button name="button" style="color: black"><a href="https://web.online.bornforthis.cn/data/base_13/base_13.zip" target="_blank">尝试一下</a></button>

::: details 公众号：AI悦创【二维码】

![](https://blog.images.bornforthis.cn/docs-images/sha256/77/77f67d48a67ec6a44a4ef1f01ffc85830eb3c121b1ece45dc5ada06e20e2f52b.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](https://blog.images.bornforthis.cn/docs-images/sha256/30/3087c629da73428daa0ee050f5b31709c30f650686164b54c724b892a422c585.jpg)









