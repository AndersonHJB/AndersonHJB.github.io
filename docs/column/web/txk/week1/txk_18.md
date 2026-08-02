---
title: 3-4 认识 HTML5 骨架
date: 2023-01-04 22:48:30
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

## 1. 认识 HTML5 骨架

你好，我是悦创。

在前面的课程中，我已经告诉你，使用 `!`  就可以快速生成 HTML5 的骨架。

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
    
</body>
</html>
```

那么这节课，我将带你好好认识一下 HTML5 的骨架。

- `<!DOCTYPE html>` ：文档类型声明 DTD
- `<head></head>`：网页的配置

![](https://blog.images.bornforthis.cn/docs-images/sha256/23/231409be53019c9f9ec866fe6692c0fdfe511a99c14775291a6f0c6590bd9769.png)

- HTML 文件第一行必须是 DTD（Document Type Definition，文档类型声明）
- 不写 DTD 会引发浏览器的一些兼容问题
- 不同版本的 HTML 有不同的 DTD 写法

例如：

- HTML5：`<!DOCTYPE html>`
- HTML4.01严格版：`<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">`
- HTML4.01过渡版：`<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">`
- HTML4.01框架版：`<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">`

## 2. W3C 组织

- W3C（The World Wide Web Consortium，万维网联合会）是万维万的主要国际标准组织。该联盟成立于 1994年，负责制定 Web 标准，主要是 HTML 和 CSS。

![](https://blog.images.bornforthis.cn/docs-images/sha256/1c/1ca91a8175977c3a780aad1f67aec0efd0d0e99d160c2017c07f0e95440dffd2.png)

## 3. 认识 `<html>` 标签对

![](https://blog.images.bornforthis.cn/docs-images/sha256/09/09bb072c70a763c27ee2a3f21f1db331b6610f25fd482ef0701fb25dccab1be1.png)

- 什么时候需要修改 lang 呢？——除非你公司有需要多语言版本的时候，你公司的运维工程师会把这个地方，进行相对应地修改。

## 4. 认识 `<head>` 和 `<body>` 标签对

![](https://blog.images.bornforthis.cn/docs-images/sha256/cf/cf957d9d4b42937a906936fd4e8529ad872d564a7985c1cff32a6c3d0dfc8cd1.png)

## 5. 多选题

以下说法中，错误的是？（选择两项）

![](https://blog.images.bornforthis.cn/docs-images/sha256/c0/c0ac59bd39bff87e79f9c5ccd880951b4325f5768ae96106bb8e93c4884b0d91.png)

::: details 答案

正确答案： B,C 你的答案： B,C

参考解析：

本题考查 html 文档的基本结构与配置。

页面中显示的内容要放在 body 中，A说法正确。

Head 中存放的是页面的一些配置，网页中显示的内容，不管是头部，主体还是尾部，都要放在 body 中，B 说法错误。

lang 属性在 html 标签中配置，如 `<html>` ，C 说法错误。

lang 是英文单词 language（语言）的简写，所以表示网页中的语言，D 说法正确。

所以本题答案为 BC。

:::

## 6. 单选题

下面不属于 HTML 标签的是？（选择一项）

![](https://blog.images.bornforthis.cn/docs-images/sha256/02/028a88bc908d1819a32b6ab11df0a6c13f9f5a33c5c471eea761bba667caf614.png)

::: details 答案

正确答案： C 你的答案： C

参考解析：

本题考查 html 页面结构。

`<html><body><head>` 标签是 html 文档结构标签，`<!DOCTYPE HTML>` 不属于 html 标签，它用于定义文档类型，所以本题答案为 C。

:::

## 7. 单选题

下列代码，能正确定义文档类型的是？（选择一项）

![](https://blog.images.bornforthis.cn/docs-images/sha256/2d/2df22d5baee10209df3f307c5bf16bbea690201e498e776c71ea8c239e1ab185.png)

::: details 答案

正确答案： B 你的答案： B

参考解析：

本题考查的是定义文档类型的正确写法。

`<html>` 是HTML标签，定义文档类型代码是 `<!DOCTYPE HTML>` 。

所以本题答案为 B。

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
