---
title: NYU – Tandon School of Engineering CS-UY 1114 Final Review
date: 2023-05-10 18:53:53
author: AI悦创
isOriginal: true
category: 
    - python 1v1
tag:
    - NYU – Tandon School of Engineering
icon: a-jibijilianxibianji
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

## The Story 

Professor and Pokémon trainer Katz wants to be the very best that no one ever was. To that end, he has travelled across the land and caught and trained a bunch of [Eevees](https://en.wikipedia.org/wiki/Eevee) , which have now evolved. His team looks like this at the moment:

> 教授和宠物小精灵训练师卡兹想成为最棒的人，无人能及。为此，他走遍大地，抓住并训练了许多伊布。现在他的队伍看起来像这样：

- Blitzeon -> Andy
- Empatheon -> Daniel 
- Acideon -> Apoorva 
- Poppeon -> Cindy
- Arcteon -> Kevin 
- Sireon -> Kimberly 
- Scaldeon -> Neha 
- Clairon -> Anna 
- Pitayeon -> Niharika 
- Clairon -> Ting 

::: details

- Blitzeon -> Andy（安迪）
- Empatheon -> Daniel（丹尼尔）
- Acideon -> Apoorva（阿普尔瓦）
- Poppeon -> Cindy（辛迪）
- Arcteon -> Kevin（凯文）
- Sireon -> Kimberly（金伯利）
- Scaldeon -> Neha（内哈）
- Clairon -> Anna（安娜）
- Pitayeon -> Niharika（尼哈里卡）
- Clairon -> Ting（婷）

:::

He feels confident enough to take on the strongest trainers in New York: The Tandon League, whose leader is [Sebastian Romero Cruz](https://bulbapedia.bulbagarden.net/wiki/Gary_Oak) . Gary's team looks like this: 

> 他感到足够自信，可以挑战纽约最强的训练师：塔敦联盟，其领袖是[塞巴斯蒂安·罗梅罗·克鲁兹](https://bulbapedia.bulbagarden.net/wiki/Gary_Oak)。加里的队伍看起来是这样的：

- Mytheon -> Jun 

- Tsuneon -> Meghana 

- Infernon -> Amalie 

- Polareon -> Sarah 

- Faeron -> Justin 

- Blitzeon -> Semi 

- Spectreon -> Tanvi 

- Aureon -> Trisha 

- Pitayeon -> Ricky 

- Clairon -> Yeseon 

- Faeron -> Tinos 

::: details

- Mytheon -> Jun （迈西昂 -> 君）
- Tsuneon -> Meghana（月神 -> 梅格哈娜）
- Infernon -> Amalie（炎神 -> 阿玛莉）
- Polareon -> Sarah（极光神 -> 莎拉）
- Faeron -> Justin（妖精神 -> 贾斯汀）
- Blitzeon -> Semi（闪电神 -> 塞米）
- Spectreon -> Tanvi（幽灵神 -> 坦薇）
- Aureon -> Trisha（黄金神 -> 特里莎）
- Pitayeon -> Ricky（蜥蜴神 -> 里基）
- Clairon -> Yeseon（音波神 -> 叶善）
- Faeron -> Tinos（妖精神 -> 提诺斯）

:::

[Source ](https://inprogresspokemon.tumblr.com/eeveelutions)

Our job is to make that happen through the power of all of the concepts that you have learned throughout the semester. Good luck. 

> 我们的工作就是通过你在本学期学到的所有概念的力量使之成为现实。祝你好运。

P.S.: If you've never played/watched Pokémon, or a similar game/show, I'm so sorry

> 附言：如果你从未玩过/观看过《宠物小精灵》或类似的游戏/节目，我很抱歉。

P.P.S.: Please don't post this online anywhere else. I don't want to get sued by Nintendo 

> P.P.S.：请不要在其他任何地方在线发布此内容。我不想被任天堂起诉。

NOTE: All of our code will go in one file 

> 注意：我们所有的代码都将放在一个文件中。

## Problem 1: The **Pokemon** Class

Let's start with creating our professor's Pokémon. In our file, create a class called **Pokemon**. The **Pokemon** class will have the following methods, which we will tackle one-by-one: 

> 让我们从创建我们教授的宠物精灵开始。在我们的文件中，创建一个名为Pokemon的类。 Pokemon类将具有以下方法，我们将逐一解决：

| Method                      | Type of Method    | Returns   | Notes                                                        |
| --------------------------- | ----------------- | --------- | ------------------------------------------------------------ |
| `__init__()`                | `Dunder/Special ` | None      | The constructor of the `Pokemon` class.                      |
| `__str__()`                 | `Dunder/Special ` | str       | Returns informal string representation of `Pokemon` object.  |
| `__gt__()`                  | `Dunder/Special ` | bool      | Returns whether this `Pokemon` object has a greater **speed** stat than another Pokemon object. |
| `attack()`                  | `Public`          | float/int | Returns the damage that the `Pokemon` object will inflict in a single attack. |
| `_will_land_critical_hit()` | `Private`         | bool      | Returns whether a Pokemon will land a critical hit.          |

It might look like a lot to do, but a lot of these methods are very short and easy. So take it one step at a time and don't move on to the next section until you understand everything that's going on in what you've already implemented! 

> 这可能看起来需要做很多事情，但其中很多方法都非常简短和容易。因此，请逐步进行，直到您完全理解已经实现的内容，再继续下一部分！

### 1.1: The `__init__()` Method

Write your **Pokemon** class's constructor so that it contains the following attributes (note that type 1 and type 2, along with strength and speed are accepted as separate parameters in the constructor, but are not necessarily a separate attribute in the class): 

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
