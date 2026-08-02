---
title: Excel TRIM 入门学习
icon: blog
date: 2025-10-26 10:04:35
author: bornforthis
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

## 1. TRIM 函数的作用

**TRIM 函数** 用来**删除文本中的多余空格**，只保留单词之间的一个空格。

### 1.1 功能总结：

- 去掉文本**开头**和**结尾**的所有空格；
- 将文本中**连续的多个空格**变成**一个空格**。

### 1.2 语法

```excel
=TRIM(text)
```

**参数说明：**

| 参数 | 说明                                             |
| ---- | ------------------------------------------------ |
| text | 要去除多余空格的文本，或者包含文本的单元格引用。 |

### 1.3 示例讲解

| 原始文本                  | 公式        | 结果                   |
| ------------------------- | ----------- | ---------------------- |
| `"   Hello   World   "`   | `=TRIM(A1)` | `Hello World`          |
| `"  Excel   TRIM  函数 "` | `=TRIM(A1)` | `Excel TRIM 函数`      |
| `"无空格文本"`            | `=TRIM(A1)` | `无空格文本`（无变化） |



### 1.4 注意事项

1. **TRIM 只删除普通空格（ASCII 32）**，不能删除一些特殊空格（例如网页中的不间断空格 `CHAR(160)`）。

    👉 如果网页复制的内容含这种空格，可用：

    ```excel
    =TRIM(SUBSTITUTE(A1,CHAR(160),""))
    ```

2. TRIM 常用于清理数据表中因复制或导入导致的多余空格。

### 1.5 实战应用

假设你有一列姓名，部分含有多余空格：

| A列（原始） |
| ----------- |
| `" 张三 "`  |
| `" 李 四"`  |
| `" 王 五 "` |

可以在 B1 输入：

```excel
=TRIM(A1)
```

然后向下填充。

这样 B 列就是清理过的干净姓名列表。

## 2. 实操

- [https://github.com/AndersonHJB/BornforthisData/blob/main/bornforthis.cn/blog/2025/10month/Excel-TRIM/TRIM%E5%87%BD%E6%95%B0%E7%BB%83%E4%B9%A0.xlsx](https://github.com/AndersonHJB/BornforthisData/blob/main/bornforthis.cn/blog/2025/10month/Excel-TRIM/TRIM%E5%87%BD%E6%95%B0%E7%BB%83%E4%B9%A0.xlsx)

















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