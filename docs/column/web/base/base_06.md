---
title: 07-实战：萨摩耶“猎豹”的第二篇成长日记
date: 2022-08-02 16:43:57
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

prev: base_05.md
next: base_07.md
backToTop: true
toc: true
---

## “猎豹”的第二篇成长日记

嗨，你还记得我吗？我是萨摩耶“猎豹”。今天我的主人 Lisa 亲手做了一份晚餐给我吃。

味道好极了！你能帮我写一篇日记记录这美好的一天吗？

![HTML实战](https://blog.images.bornforthis.cn/docs-images/sha256/30/308ff0e2f43c3ee0591ba90c4a29c525052d3dea7553ea7db8fd65f316d60479.jpg)

## 第1步 找到文件

请你在编译器中找到在做第一章实战练习时，保存下来的index.html文件并打开它。

找到 body 中的最后一个 `<p>` 元素的结束标签 `</p>` ,把光标移动到它后面，然后点击回车，将光标移到新的一行。

![image-20220802185215729](https://blog.images.bornforthis.cn/docs-images/sha256/c8/c8f9ef3e09a3d6394058bcb18ee17c7226451748da852353b42bd8fb17a6d0c9.png)

## 第 2 步 标题

我们要再为猎豹写一篇日记。就得接在第一篇日记后面写。

日记结构依然由标题、图片、段落 3 个元素组成。

![未命名表单](https://blog.images.bornforthis.cn/docs-images/sha256/80/80d2910fa7adfd019e08b3bfced1f08aa9e75006ebef43de0bd5e522d232b231.png)

这次，请尝试自己写代码和文本：

写日记首先从写日期开始。我们将日期作为第二篇日记的 **标题** ，采用 `<h2></h2>` 包围文本“ **2019年7月31日** ”。

![image-20220802191012599](https://blog.images.bornforthis.cn/docs-images/sha256/7f/7fdf6e4e6dd15a39e8be383987686a8eceb0ae22dc456c2af1e688690b255fb2.png)

为什么不使用 `<h1>` 元素包围文本呢？

对于 `index.html` 这个文件来说，我们已有了一级标题—— `<h1>` 猎豹的成长日记 `</h1>` 。

![image-20220802191321924](https://blog.images.bornforthis.cn/docs-images/sha256/27/2745d2c94774411e378d60a72658b61afe8a4fc89f8c64b68ac7f942481c2314.png)

为了使猎豹的网页版成长日记看起来结构清晰，我们将日记中的日期都用 `<h2></h2>` 包围起来。

你也可以理解为文本 **2022年7月13日** 与 **2022年8月02日** 是 **平级关系** 。字号统一。

## 第 3 步 图片

这是 Lisa 为猎豹亲手制作的美味晚餐照片。

<img src="https://blog.images.bornforthis.cn/docs-images/sha256/a4/a413f8133196afe785ce598525cbb2fc61de2b40f356cfa35f7966e3eab30d92.png" alt="猎豹的晚餐" style="zoom:25%;" />

这张照片是网页上的第二张图片。我们将它命名为 `pic2.png` 。

将 pic2 保存在 img（专门存放图片的）文件夹中。

![image-20220802203422653](https://blog.images.bornforthis.cn/docs-images/sha256/d3/d3ff014b56460402f2728df5ab1956100838ef123b0039991eb5ae8a4731f31f.png)

还记得图片对应哪个元素吗？

对应 `<img>` 元素。

但光有 `<img>` 元素没用, 我们要为它添加 src 属性：`<img src="">` 

还记得 `src=""` 中的引号内要填入什么吗?

应填入图片的存储路径。

对于本例来说，pic2 这张图片存储在 img 文件夹中，因此路径是：`img/pic2.jpg` 。

![image-20220802203854960](https://blog.images.bornforthis.cn/docs-images/sha256/56/56816ef2161efc52eb581c1ed9fe8fb8b1c36e34c3fdaf976414ade9a21d3694.png)

注意：

- **要将图片的文件格式一起写入。** 本例的文件格式是 jpg。HTML 能运行多种格式的图片。比如：`png`, `jpg` ,`svg` 等。
- **`<br>` 也是空元素。它的作用是折行。**「换行」 它能够使图片和下面的段落文本分离成两行。这样能使网页结构更加清晰，看起来更加美观。

## 第 4 步 列表

接下来，我们要为猎豹的美味晚餐配上文字。

Lisa想这样写：

**猎豹今日晚餐食材：西蓝花5g、胡萝卜5g、土豆5g、苹果5g、三文鱼10g、鸡胸肉10g、牛肉10g、豆腐5g、燕麦2g、鸡蛋黄2个。**

制作步骤：

1. 敲 2 个鸡蛋，只取蛋黄

2. 把西蓝花、胡萝卜、土豆、苹果、三文鱼、鸡胸肉、牛肉、豆腐洗净，切碎。豆腐和成泥装盘独放。再取少许燕麦，将蛋黄和切碎的食材一起（除豆腐外）放入料理机打成泥状。

3. 从料理机中取出食材装盘。将泥状食材与豆腐混合搓成乒乓球大小的泥团。

4. 将泥团放入锅中蒸煮，10分钟即可。

**看完 Lisa 的文字，你是不是有了制作列表的灵感？**

我们可先将内容分为 2 个部分，分别用 2 个段落处理：

`<p>猎豹今日晚餐食材</p>`

`<p>制作步骤</p>`

![image-20220802210703419](https://blog.images.bornforthis.cn/docs-images/sha256/6f/6fc8f9a5e926a20318e33e4c337f3c3de9925cd2a76daf5b6e7bbe58a0e5e2c7.png)

我们将具体的食材和用量用 **无序列表** 处理：

![image-20220802212321962](https://blog.images.bornforthis.cn/docs-images/sha256/61/617a8cf2660481e5521fcfa7fe146c2bedc35e51a861f42dffb1a6316498c7ab.png)

我们再将制作步骤用 **有序列表** 处理：

![image-20220802212556776](https://blog.images.bornforthis.cn/docs-images/sha256/b7/b73f810acdcd1f3c2e30677a31cae913e41734489e51d88642191592e9fb3e78.png)

## 第 5 步 超链接

我们还可以考虑使用 `<a>` 元素，为不常见的食材添加百度百科的超链接。比如：为"燕麦”添加超链接。

首先将"燕麦”用 `<a></a>` 包围。

![image-20220802213036797](https://blog.images.bornforthis.cn/docs-images/sha256/de/de9a54c8a21a740c10ec3787cd0b02996c92243ddc75a41cc49769a7e5ad7025.png)

找到 `<a>` 元素的开始标签，空一格，在空格后添加上 href 属性，补充等号，将燕麦的百度百科地址封装在引号中：

![image-20220802213409423](https://blog.images.bornforthis.cn/docs-images/sha256/7c/7c168f08aac1f9ad742bbbf6db4d922d8c29db8f895fc37c112909f809b467ff.png)

到此，猎豹的第二篇日记就写好了。

记得点击“保存（save）”，确保你的实战成果都保存在编译器的 `index.html` 文件中。

## 附加题

我们可以为猎豹晚餐的重点制作步骤添加强调效果。比如：加粗或是斜体。

![image-20220802213934582](https://blog.images.bornforthis.cn/docs-images/sha256/3f/3f6d68168155e45cf5ff62dcb936188c9a28a5f3de989ce33da98a04185b8b12.png)

- `<strong>` 元素的效果是加粗; 
- `<em>` 元素的效果是斜体。

![image-20220802214108809](https://blog.images.bornforthis.cn/docs-images/sha256/46/46a84fbe653c12b52f0dfed367c19d5b8cad381f24509cc817511a1d20350069.png)

## 第 6 步 测试

如果你一直跟着我的步骤，在编译器中编写代码，猎豹的第二篇日记已经完工啦！

请将 `index.html` 文件再次拖入浏览器中，测试运行效果。

![image-20220802214436380](https://blog.images.bornforthis.cn/docs-images/sha256/91/91a7a2d1c26f9cf9328e6107291821bf40ef70a9d571f08c743c255cfe03b5d0.png)

经过第二章的学习，你已经：

**1. 理解了HTML的定义和作用；**

**2. 理解了HTML的元素和属性、元素的嵌套、块级元素、内联元素和空元素。**

**3. 掌握了HTML的常见元素。**

**4. 为猎豹编写了第二篇成长日记！**

**5. HTML 入门了！**

下一章，我们将带领你入门CSS。CSS将使猎豹的成长日记变得更加美观。

## 优化

![image-20220802215317895](https://blog.images.bornforthis.cn/docs-images/sha256/2f/2f3deb33418af71666392624cde115decb8b3f4b7e21db1e1c4fa054494c3230.png)

![image-20220802215421253](https://blog.images.bornforthis.cn/docs-images/sha256/ee/ee71c9104fc276d0acd2f583f4398d877840fea5e74dc34b5177c9abe860d4d9.png)

<button name="button" style="color: black"><a href="https://web.online.bornforthis.cn/web_base/base_06/index.html" target="_blank">成品</a></button>

<button name="button" style="color: black"><a href="https://web.online.bornforthis.cn/web_base/base_06/base_06.html" target="_blank">在线试一试</a></button>

## 代码下载 

<button name="button" style="color: black"><a href="https://web.online.bornforthis.cn/data/base_06/base_06.zip" target="_blank">代码下载</a></button>

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









