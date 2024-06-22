---
title: Dodgy Brothers Price List
date: 2023-03-17 16:06:25
author: AI悦创
isOriginal: true
category: 
    - 墨尔本大学CS
    - Python一对一辅导
    - unimelb
tag:
    - 墨尔本大学CS
    - Python一对一辅导
    - unimelb
icon: python
sticky: false
star: false
article: true
timeline: true
image: false
navbar: true
sidebarIcon: true
headerDepth: 5
comment: true
lastUpdated: true
editLink: false
backToTop: true
toc: true
---

## Dodgy Brothers Price List

> Dodgy Brothers价目表

The Dodgy Brothers sell a remarkable array of objects, all of dubious nature, and all at outlandish prices. To help them stay on top of their inventory, write a function to help them format item information more clearly. 

The function `dodgy_inventorise(item)` should take a single tuple argument `item` (containing an item volume, description and price, respectively). You will need to use an f-string to present the item as a fixed-width column according to the following specification:

- Volume is up to 6 characters and left-justified. You can assume that all volumes are integers under 100,000
- Name is up to 20 characters (with any additional characters ignored) and right-justified
- Price is up to 10 characters (in dollars and cents) and right-justified. You can assume that all prices are under $10,000,000

```python
>>> dodgy_inventorise((1, "rust bucket car", 150000))
'1          rust bucket car 150000.00'
>>> dodgy_inventorise((10000, "chunky, chunky, chunky custard", 4.5))
'10000 chunky, chunky, chun      4.50'
```

杂货兄弟销售一系列引人注目的物品，所有这些物品的性质都很可疑，而且价格都非常离谱。

为了帮助他们更好地管理库存，请编写一个函数来帮助他们更清晰地格式化物品信息。这个函数名为 `dodgy_inventorise(item)`，它接受一个元组参数 item（分别包含物品的体积、描述和价格）。你需要使用 `f-string` 将物品按照固定宽度列的格式进行展示，具体规范如下：

## 答案

```python
def dodgy_inventorise(item):
    volume, description, price = item
    formatted_volume = f"{volume:<6}"
    formatted_description = f"{description[:20]:>20}"
    formatted_price = f"{price:10.2f}"
    return f"{formatted_volume}{formatted_description}{formatted_price}"
```









```python
def dodgy_inventorise(a, b, c):
    if a < 100000:
        return f'{a:<.6s}{b}{c}'
    
        
print(dodgy_inventorise((1, "rust bucket car", 150000)))
```



::: details 公众号：AI悦创【二维码】

![](/gzh.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Web、Linux」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](/zsxq.jpg)
