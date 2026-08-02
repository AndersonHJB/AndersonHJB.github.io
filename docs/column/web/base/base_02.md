---
title: 03-实战：萨摩耶“猎豹”的第一篇成长日记
date: 2022-07-12 22:28:48
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

prev: base_01.md
next: base_03.md
backToTop: true
toc: true
---

## “猎豹”的成长日记

如果你跟着我们的步骤并动手尝试一下，这只萨摩耶“猎豹”就能拥有它的第一篇成长日记了！

![美图秀 (1)](https://blog.images.bornforthis.cn/docs-images/sha256/6b/6bbdfd0dddf5aa06ef8f53faf06cc7423235cffe5b96e8e7b9c2017c9d8b9a95.jpg)

## 第1步 构思

开始实战作业之前，请先做好工具准备。：

- **一个编译器**
- **两款浏览器**

![准备](https://blog.images.bornforthis.cn/docs-images/sha256/41/414c0f5f2805af78210f569ce0a9236f5d04345c855fcd9caecc1256c250cadc.png)

接下来，请思考以下问题：

- **你想通过网页展示什么内容？** 展示你的陶艺作品？还是想展示朋友婚礼的全景？
- **你想用什么类型的资源展示你的网页内容？** 几段话？还是几张图片？
- **你的网页布局是怎么样的？** 图片在上，文字在下？还是相反？

如果你暂时没有好主意，不如帮助萨摩耶“猎豹”制作它的成长日记吧！

1. “猎豹的成长日记”是我们想展示的网页主题。把它设为一级标题，首先展示。

2. 对于很多访问者来说，他们并不知道“猎豹”是谁。我们用一句话介绍一下，如：你好！我是萨摩耶“猎豹”。这句话可以处理成一个段落。
3. 作为日记体网页，时间线索是重点。把日期定为二级标题展示。
4. 放上日记内容和相关图片。

以上是我们的设想，把心中所想落实成草图。

如果你不会使用软件制作草图，不妨拿出纸和笔亲手绘制。以下作为参考：

<img src="https://blog.images.bornforthis.cn/docs-images/sha256/80/80dd6dca187c1a016c63ef3b574a645835a3e532a2f57b047b2658f0a70eec38.png" alt="Snipaste_2022-07-11_08-46-40" style="zoom:25%;" />

- **标题：** 在 html 的元素中，标题用 `<h>` 表示。`<h1>` 至 `<h6>` 分别表示 1 级至 6 级标题，1 至 6 级的标题字体逐渐变小。
- **段落：** 在 html 的元素中，段落用 `<p>` 表示。段落是文本。它可以是：词、句子、一段或几段的段落。
- **图片：** 在 html 的元素中，图片用 `<img>` 表示。图片格式可以是 `png` , `jpg`，`svg`等。

以上三个元素的布局可以多种多样，但对于初学者来说，不妨先从简单的布局开始。如上图。

## 第2步 整合资源

通过构思草图，我们确定了标题和段落的内容，也找好了图片。

虽然手中的资源不多，但也要按规范整合。只有这样，网页才能顺利的运行。

**首先，** 在桌面新建一个文件夹并用英文小写字母命名，如：`my_first_page`。它将用来存放你第一张网页所需的所有资源。接下来，在这个文件夹下新建一个文件夹并使用英文小写字母命名，如：img。这个文件夹将专门用于存放网页中的图片。

<img src="https://blog.images.bornforthis.cn/docs-images/sha256/1a/1a79f39d9170dcc6ca65ca6ff79a55f8ac81120973a3336d9c6b2d8f319ecdf4.png" alt="image-20220712230545519" style="zoom:50%;" />

**下一步，** 为萨摩耶“猎豹”的图片命名。如：`dog.png` 。将其放入 img 文件夹中。

![image-20220712231419077](https://blog.images.bornforthis.cn/docs-images/sha256/c9/c98947602484ff539e44c6e8db790d7b4ae57869d7c64384b9f0edd0a59bd89e.png)

**最后，** 打开编译器。将下列代码块复制到你的编译器中。

> 尽管你还不能理解这些代码，但请从复制它们开始！很多程序员，也常把优秀代码复制下来，然后修改内容，最终做出自己的产品。

创建 `index.html` 文件：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>萨摩耶“猎豹”的第一篇成长日记</title>
</head>
<body>
    <h1></h1>
    <p></p>
    <h2></h2><br>
    <img src=""><br>
<p></p>
</body>
</html>
```

## 第3步 初涉 html 代码（上）

- **`<h1>` 元素：** 在代码中找到 `<h1>` 元素。在 `<h1></h1>` 之间写入1 级标题的内容。如: 猎豹的成长日记。

![image-20220712232750469](https://blog.images.bornforthis.cn/docs-images/sha256/05/0543f9c7dc41303173ae69dc685f24db2a1cee2d3d398d6573dd897f849429ee.png)

- **`<p>` 元素：**在 `<h1>` 元素下找到 `<p>` 元素。在 `<p></p>` 元素之间写入段落内容。如：一句话介绍“猎豹”——我叫猎豹。我是一只萨摩耶。

![image-20220712233102373](https://blog.images.bornforthis.cn/docs-images/sha256/d0/d03a895749b44fde333797cd45f7df8a6b62ee8b634d8933e1c702e93bdfa537.png)

- **`<h2>` 元素：** 在代码中找到 `<h2>` 元素。在 `<h2></h2>` 之间写入2级标题内容。如：将日记的时间作为 2 级标题——2022年7月13日。

![image-20220712233722866](https://blog.images.bornforthis.cn/docs-images/sha256/a5/a552d1a7119f45b89f4f49d6b6efcd6982b171f458d2ec8e8915d5352274acc4.png)

目前代码：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>萨摩耶“猎豹”的第一篇成长日记</title>
</head>
<body>
    <h1>猎豹的成长日记</h1>
    <p>我叫猎豹。我是一只萨摩耶。</p>
    <h2>2022年7月13日</h2><br>
    <img src=""><br>
<p></p>
</body>
</html>
```



## 第4步 初涉 html 代码（下）

- **`<img>` 元素：** 在代码中找到 `<img>` 元素。在 `<img>` 中的 `src=""` 的双引号之间写入图片路径。

**图片路径怎么编写呢？**

1. 复制图片文件夹名称：img；
2. 在英文状态下，在 img 后输入符号 “`/`”；

3. 打开 img 文件夹，复制图片名称：`dog.jpg` 。

**注意：别忘了连同图片格式“jpg”一起复制！**

4. 在代码中找到 `<img>` 元素。在 `<img>` 中的 `src=""` 的双引号之间输入图片路径：`img/dog.jpg`

![image-20220712234128191](https://blog.images.bornforthis.cn/docs-images/sha256/03/03d9cb1efdf9a1546721f68dd658471ae25465a2bc6583826a728fc8bb3ffaf6.png)

- **`<p>` 元素：** 在 `<img>` 元素下找到 `<p>` 元素，在 `<p>` 和 `</p>` 之间写入你想表达的段落内容。如，为“猎豹”的满月照片添加描述——我今天满月啦！主人带我到公园散步。我好喜欢这里的草地。

![image-20220712234330618](https://blog.images.bornforthis.cn/docs-images/sha256/6b/6b3ff2e36169a0f7b2484ada726d87e3a652fd677c1edf6c88777e76209468f6.png)

现在的代码：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>萨摩耶“猎豹”的第一篇成长日记</title>
</head>
<body>
    <h1>猎豹的成长日记</h1>
    <p>我叫猎豹。我是一只萨摩耶。</p>
    <h2>2022年7月13日</h2><br>
    <img src="img/dog.jpg"><br>
    <p>我今天满月啦！主人带我到公园散步。我好喜欢这里的草地。</p>
</body>
</html>
```

## 第5步 保存 index 文件

- **保存：** 请在编译器中，点击“文件”菜单，找到“保存”。

把当前文件命名为 `index` ，并选择 `html` 格式，保存在你的项目文件夹中。如：我们之前命名的 "`my_first_page`" 文件夹。

**注：index 即首页。**

保存的路径选择和 img 同路径即可。如下图片：

![image-20220712234831298](https://blog.images.bornforthis.cn/docs-images/sha256/1d/1d5b0f8067de2510b1ddf95cbc595b01dcc501c79dff34134aab01a4b2b88ee2.png)

## 第6步 测试运行

- **运行：** 将 html 文件拖入浏览器。查看效果。

> 也可以直接双击，一般未修改的情况，html 文件默认使用浏览器打开。

![image-20220712235256551](https://blog.images.bornforthis.cn/docs-images/sha256/bf/bf1fb63071a07fd722c58fb99bcdfc699a8c80db2d819d5f4a3931ebf376e288.png)

如果你一直跟着我们的步骤操作。相信你已：

- **为“猎豹”写了第一篇成长日记。**
- **输出了第一行代码。**
- **在自己的计算机本地运行了第一个网页。**
- **Web 入门了！**

因为你仅初步了解了 HTML，所以第一个网页看起来还很简陋。

但随着进一步了解 `HTML` ,`CSS` ,`JS` 之后，你的网页会更加漂亮！

## 资料下载：

<button name="button" style="color: black"><a href="https://web.online.bornforthis.cn/data/base_02/my_first_page.zip" target="_blank">资料下载</a></button>

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









