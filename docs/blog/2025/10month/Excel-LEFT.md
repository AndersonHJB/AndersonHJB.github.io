---
title: Excel LEFT 函数入门
icon: blog
date: 2025-10-25 20:08:08
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

我来一步步教你认识并使用 **Excel 的 `LEFT` 函数**。

## 1. LEFT 函数的作用

`LEFT` 函数用于**从文本字符串的左侧开始，提取指定数量的字符**。

## 2. 基本语法

```excel
=LEFT(text, [num_chars])
```

| 参数          | 说明                                                         |
| ------------- | ------------------------------------------------------------ |
| **text**      | 必需。要从中提取字符的文本（可以是单元格引用或直接输入的文本）。 |
| **num_chars** | 可选。要提取的字符数。如果省略，则默认提取 1 个字符。        |

## 3. 举例说明

### 3.1 示例 1：提取前两个字符

假设单元格 `A1` 内容是：

```excel
12-2024-10-5678-A-B
```

你想提取前两个数字：

```excel
=LEFT(A1, 2)
```

✅ 结果：`12`

### 3.2 示例 2：只取第一个字符

```excel
=LEFT(A1)
```

✅ 结果：`1`

（因为省略了第二个参数，默认只取 1 个字符）

### 3.3 示例 3：结合其他函数使用

假设 A1 内容是 `"ABCD1234"`，想提取前 4 个字母：

```excel
=LEFT(A1, 4)
```

✅ 结果：`ABCD`

## 4. 注意事项

1. **`LEFT` 函数处理的是文本**，即使原始数据是数字，也会以文本形式返回。

    如果需要保持数值类型，可以用 `VALUE()` 转换：

    ```excel
    =VALUE(LEFT(A1, 2))
    ```

2. 如果文本少于指定的字符数，不会报错，而是返回整个文本。

## 5. 实操

- [https://github.com/AndersonHJB/BornforthisData/blob/main/bornforthis.cn/blog/2025/10month/Excel-LEFT/Excel_LEFT_%E7%BB%83%E4%B9%A0%E5%8C%85.xlsx](https://github.com/AndersonHJB/BornforthisData/blob/main/bornforthis.cn/blog/2025/10month/Excel-LEFT/Excel_LEFT_%E7%BB%83%E4%B9%A0%E5%8C%85.xlsx)



















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