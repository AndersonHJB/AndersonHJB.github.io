---
title: Excel FIND 函数入门
icon: blog
date: 2025-10-25 20:27:57
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

下面我来**系统讲解 Excel 的 FIND 函数**，并配上示例和练习思路。

## 1. FIND 函数的作用

**功能：** 在一个文本字符串中，**查找指定字符或字符串首次出现的位置**，并返回其位置（数字）。

> ✅ FIND区分大小写。
>
> ✅ 如果找不到目标字符，会返回错误值 `#VALUE!`



## 2. 语法

```excel
=FIND(find_text, within_text, [start_num])
```

| 参数                   | 说明                             |
| ---------------------- | -------------------------------- |
| **find_text**          | 要查找的文本（或单个字符）。     |
| **within_text**        | 要在其中搜索的目标文本。         |
| **start_num** *(可选)* | 从第几个字符开始搜索，默认是 1。 |



## 3. 例子讲解

| A列（原文本）  | 公式                | 结果    | 说明                              |
| -------------- | ------------------- | ------- | --------------------------------- |
| Excel 公式教学 | `=FIND("教", A2)`   | 6       | “教”在第 6 个字符位置             |
| Excel 公式教学 | `=FIND("e", A2)`    | 2       | “e” 在第 2 个字符位置             |
| Excel 公式教学 | `=FIND("x", A2, 3)` | #VALUE! | 从第 3 个字符开始找不到 “x”       |
| ABCpbc         | `=FIND("a", A5)`    | #VALUE! | 因为区分大小写，找不到小写 a      |
| ABCabc         | `=FIND("a", A5, 4)` | 4       | 从第 4 位开始找，小写 a 在第 4 位 |



## 4. 常见用法组合

1. 配合 LEFT 或 MID 提取文本

    ```excel
    =LEFT(A2, FIND("-", A2)-1)
    ```

    👉 提取文本中第一个 “`-`” 左边的内容。

2. 查找某字符是否存在

    ```excel
    =IF(ISNUMBER(FIND("Y", A2)), "有Y", "无Y")
    ```

    👉 如果能找到“Y”，返回“有Y”，否则“无Y”。

## 5. 实操

- [https://github.com/AndersonHJB/BornforthisData/blob/main/bornforthis.cn/blog/2025/10month/Excel-FIND/Excel_FIND_%E7%BB%83%E4%B9%A0.xlsx](https://github.com/AndersonHJB/BornforthisData/blob/main/bornforthis.cn/blog/2025/10month/Excel-FIND/Excel_FIND_%E7%BB%83%E4%B9%A0.xlsx)

















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