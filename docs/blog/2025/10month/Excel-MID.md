---
title: Excel MID 入门学习
icon: blog
date: 2025-10-26 10:16:03
author: AI悦创
isOriginal: true
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

你好，我是悦创。

Excel 中的 **MID** 函数用于从一个文本字符串的中间提取指定数量的字符。它的语法如下：

```excel
MID(text, start_num, num_chars)
```

## 1. 参数说明

- **text**：这是你要从中提取字符的文本字符串。
- **start_num**：从文本字符串的哪个位置开始提取。第一个字符的位置是 1。
- **num_chars**：你希望提取的字符数。

## 2. 示例

### 2.1 示例 1

假设单元格 A1 的内容是 `"Excel1234"`，你想从第 6 个字符开始提取 4 个字符。

```excel
=MID(A1, 6, 4)
```

**结果**：`1234`

### 2.2 示例 2

如果 A2 中是 `"Hello World"`，你想提取从第 7 个字符开始的 5 个字符：

```excel
=MID(A2, 7, 5)
```

**结果**：`World`

## 3. 注意

- `start_num` 的位置是基于字符串的字符位置。
- 如果 `start_num` 超出了文本的总长度，或者 `num_chars` 的字符数超过了文本的剩余字符数，`MID` 会返回剩余的字符。

这样，你可以根据需求灵活使用 **MID** 函数来提取不同位置的字符。

## 4. 实操

- [https://github.com/AndersonHJB/BornforthisData/blob/main/bornforthis.cn/blog/2025/10month/Excel-MID/MID%20%E5%87%BD%E6%95%B0%E7%BB%83%E4%B9%A0.xlsx](https://github.com/AndersonHJB/BornforthisData/blob/main/bornforthis.cn/blog/2025/10month/Excel-MID/MID%20%E5%87%BD%E6%95%B0%E7%BB%83%E4%B9%A0.xlsx)





























::: details 公众号：AI悦创【二维码】

![](https://blog.images.bornforthis.cn/docs-images/sha256/77/77f67d48a67ec6a44a4ef1f01ffc85830eb3c121b1ece45dc5ada06e20e2f52b.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Web、Linux」，招收学员面向国内外，国外占 80%。全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](https://blog.images.bornforthis.cn/docs-images/sha256/30/3087c629da73428daa0ee050f5b31709c30f650686164b54c724b892a422c585.jpg)