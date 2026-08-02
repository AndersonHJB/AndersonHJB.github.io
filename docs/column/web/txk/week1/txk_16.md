---
title: 3-2 浏览网页的方法
date: 2023-01-03 10:42:27
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

backToTop: true
toc: true
---

## 1. 浏览网页的方法

你好，我是悦创。

上一节课，我们学习了，如何快速的创建一个简单的 HTML 文件，但是我们要怎么浏览或者准确来说，怎么运行呢？

## 2. 网页的浏览-方法一

- 直接在文件夹中双击网页图标，即可查看网页。
- Chrome 浏览器非常适合开发， **所以要将 Chrome 浏览器设置为默认的浏览器** ，杀毒软件、管家通常会阻止这个操作，请妥善设置杀毒软件的相关设置。

现在打开如下图，空白页面：

<img src="https://blog.images.bornforthis.cn/docs-images/sha256/95/952b0dac71d1bd1e620229240d6465d9970a2125a73037d854ec44e0b34d14f9.png" alt="image-20230103105929267" style="zoom:25%;" />

我们如果要让其中存在内容，例如文字。那我们就需要在 VSCode 中进行编辑。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    你好！我一定好好学习前端开发！
</body>
</html>
```

![image-20230103110227193](https://blog.images.bornforthis.cn/docs-images/sha256/95/95f2a4d4ed3ca2ab3fa079ed2057f3f0d0b8ad81c4ca5f6334f54160c12c8dfa.png)

效果如下：「记得刷新页面」

![image-20230103110457299](https://blog.images.bornforthis.cn/docs-images/sha256/26/267b07098d1a0e1757af3612ed0c34bcb0fa20279fc8f215c528757b4a48f6bd.png)



## 3. 网页的浏览-方法二

- 给 VSCode 安装 Live Server 插件，顾名思义，这个插件可以让网页“实时热更新”，自动刷新网页。
- 安装完插件后，在 html 文件中，按 ctrl + shift + p 键，选择 “Open With Live Server” 即可。
- 使用这种方法必须注意：网页必须存放在文件夹中，且 VSCode 已经打开这个文件夹。

![image-20230104213401027](https://blog.images.bornforthis.cn/docs-images/sha256/11/11d96f11cd0edfd352cba0bccc9871b681daff3cbed583eebaed71a10b7e11e7.png)

![image-20230104213459597](https://blog.images.bornforthis.cn/docs-images/sha256/91/91f7885dfa0782bab6ca88bf90b6cd355f6e930f53657082ff5670f2ac93f498.png)

安装完成后，两种运行方式：

- 方法一：鼠标右键，选择 Live Server 进行运行
- 方法二：也可以使用 Ctrl + Shift + P，输入 Live Server 也可以。

::: tabs

@tab 方法一

![方法一](https://blog.images.bornforthis.cn/docs-images/sha256/30/300bbd000b510c4bfd287495ef3a86f04771e8ffaeda75915e86d4d4959f366f.png)

@tab 方法二

![方法二](https://blog.images.bornforthis.cn/docs-images/sha256/51/51c24663c41b84127d97169554a9d5ff6eef433e27f3a2a0f395848166a66067.png)

:::

::: tip 提示

接下来，你随意修改，看看浏览器会不会更新吧，GO！

这个插件，你必须！打开文件夹，不能只是打开一个 HTML 文件。

:::



::: details 公众号：AI悦创【二维码】

![](https://blog.images.bornforthis.cn/docs-images/sha256/77/77f67d48a67ec6a44a4ef1f01ffc85830eb3c121b1ece45dc5ada06e20e2f52b.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Linux、Web」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](https://blog.images.bornforthis.cn/docs-images/sha256/30/3087c629da73428daa0ee050f5b31709c30f650686164b54c724b892a422c585.jpg)









