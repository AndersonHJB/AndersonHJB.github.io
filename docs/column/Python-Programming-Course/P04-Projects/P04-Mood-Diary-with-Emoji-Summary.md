---
title: P04-数字情绪日记（Mood Diary with Emoji Summary）
icon: shequ-jihuo
date: 2025-07-02 20:43:10
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

## 1. 项目简介

用户每天输入一句话记录当天心情，程序自动进行关键词提取并判断情绪（快乐、悲伤、愤怒等），然后：

- 用 Emoji 表示情绪；
- 保存当天的“心情记录”；
- 显示一周心情概览（带 emoji 小日历）



## 2. 基础功能（适合初学者）

1. **文本输入界面**（可用 CLI）
2. **情绪关键词匹配判断**（简单词库 + `in` 语句）
3. **自动生成 emoji 情绪标签**
4. **以日期为键保存数据到本地文件（JSON）**
5. **查看历史记录功能（近7天）**

## 3. 示例效果

```python
请输入你今天的心情日记：
今天在图书馆看了一本好书，感觉很放松。

🤖 检测情绪：平静 😊
📅 已保存到 2025-06-08 的心情记录

📆 本周心情回顾：
Mon 😐 | Tue 😠 | Wed 😊 | Thu 😊 | Fri 😐 | Sat 😞 | Sun 😊
```



## 4. 技术点覆盖

| 技术            | 用法               |
| --------------- | ------------------ |
| `input()`       | 获取用户输入       |
| 字符串操作      | 分词、关键词匹配   |
| `datetime`      | 获取日期           |
| `json`          | 数据存储和读取     |
| `os` / 文件读写 | 持久化本地记录     |
| 字典、列表      | 存储和查找心情数据 |

## 5. 进阶功能（选做）

- 使用情感分析库（如 `textblob`, `snownlp`, `jieba + 词典`）替代手动关键词
- 使用 `matplotlib` 画一周心情图（柱状图或折线图）
- 制作图形化界面（用 `tkinter`）
- 添加“最常见情绪”“最多关键词”等统计

## 6. 为什么它创新？

- 不是死板记账/词典类项目，而是**结合 NLP + 实用情境**
- 可以每天用、带情绪分析、有“可视化”的乐趣
- 教会初学者数据结构、基本 NLP 思路、日期处理与持久化







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