---
title: P2-Project2-CompRPG
date: 2024-09-28 22:11:00
author: AI悦创
isOriginal: true
icon: blog
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
watermark: true
---

## Introduction

This project is inspired by a genre of video game, where players choose the actions that their characters take in a turn-based battle. Some examples include the battle systems in Super Mario RPG, Pokémon, Final Fantasy and table-top games like Dungeons and Dragons.

![Super Mario RPG Battle](https://blog.images.bornforthis.cn/docs-images/sha256/88/8860c53feac20eb9a36bc965e6dd1e8f805f877242ef0a696828054b7af7183a.jpg)

Super Mario RPG Battle

The characters will have various stats, such as health or hp, that will decrease when the opponent's characters successfully attack.

![Pokémon Battle](https://blog.images.bornforthis.cn/docs-images/sha256/d8/d8d73713c5aa3a5087c70eec4229eb64ce6759b35d6d15e0c37903d6c09d2261.webp)

Pokémon Battle, https://essentialsdocs.fandom.com/wiki/Battles

During the player's turn, they pick actions for their characters. The player needs to consider their strategy and some actions will be more effective than others in different situations.



![Final Fantasy Battle System](https://blog.images.bornforthis.cn/docs-images/sha256/79/792373e218511e225ee065884dfd02e8085b3911cc4059b13c7c6576569317ab.webp)

Final Fantasy Battle System, https://finalfantasy.fandom.com/wiki/Battle_system

Some games have special action types that use magic or some other special resource. Many games have an item system, where the player can choose to use an item that they have obtained that will have some special effects.

![Dungeons and Dragons game tabletop RPG](https://blog.images.bornforthis.cn/docs-images/sha256/14/14ba918ce0aa06a2d4712049ac35a6c94f94bc5aa08368f95981ec67086e673b.jpg)





## Your Tasks

This project will ask you to complete the following tasks:

- In task 1 you will be producing a csv file with information about the action history of a game.
- In task 2 you will be loading in a saved game state from a file.
- In task 3 you will be checking whether an action list is valid, given the state of the game.
- In task 4 you will be doing some image manipulation to create stat bars for the game.
- In task 5 you will be creating a player agent to play against other agent in a tournament



## An overview of how to play this game:

Your player has a team of five characters, up to two of which can be actively fighting for your side at any time. Each character has its own attack and defend moves, so it is important to select (or swap during battle) to form a suitable pair to face your opponent's pair.

For each turn, you will decide on an action for each active character. This might be to attack using one of your character's attack moves, defend with a defensive move, use an item, or swap to make a different character from your team active. Your opponent will also choose actions for their own active characters.

Your characters have some stats that begin the match as full and will be affected by the actions you and your opponent take. One of these is health, which is individual for each character and can be lowered by things like your opponent's attacks or a move backfiring. The other is electricity, which is used up by choosing actions that have an electricity cost and is shared across your team.







## Action Format

In this game, the player will select up to one action for each active character they currently have (active at the start of the turn). An action can be an attack, a defend move, using an item, or swapping an active character out for one of their other characters.

We will represent each action as a tuple of varying length (depending on the type of action) and the first two elements of the tuple are the name of the character performing the action and then the action type.

For the specific action types:

- An attack action has the name of the character performing the action, the action type (`'attack'`), the attack move name, the damage it can inflict, the number of opponent active characters it can target, the electricity cost, and a list of the opponent active characters targeted.
- A defend action has the name of the character performing the action, the action type (`'defend'`), the defend move name, the amount of protection provided, and the electricity cost.
- An item action has the name of the character using the item, the action type (`'item'`), and the item name.
- A swap action has the name of the character being swapped out, the action type (`'swap'`), and the name of the character being swapped in.

**汇总出来的元组：**

```python
attack = (角色名称, 动作类型, 攻击名称「技能名称」, 可以造成的伤害, 攻击数量, 电力成本, 攻击的目标)
defence = (角色名称, 动作类型, 防御动作的名称, 防御数量, 电力成本)
赋予使用工具 = ('Python Pal', 'item', 'Debugging Tool')
```



## Some examples:

```python
action1 = ('Network Ninja', 'attack', 'DDoS', 3, 1, 1, ['Python Pal'])
```

The above action is an attack action, where Network Ninja is performing DDoS attack on Python Pal. This action can inflict 3 damage to a single opponent active character and will cost 1 electricity.

```python
action2 = ('HTML Hero', 'defend', 'Firewall', 2, 0)
```

In action 2, we see HTML Hero using a defend action called Firewall. This can provide 2 protection and is free (0 electricity!).

```python
action3 = ('Python Pal', 'item', 'Debugging Tool')
```

Here in action 3, Python Pal is using an item called Debugging Tool.

```python
action4 = ('HTML Hero', 'swap', 'Binary Bot')
```

Action 4 is a swap action - The active character, HTML Hero, is swapping places with Binary Bot, so Binary Bot will become an active character and HTML Hero becomes inactive.



## Task 1: Calculate Game Stats (2 marks)

For this task you will be calculating some statistics about the game based on the given history of all actions played so far.

The `history` is a list, with each element being one of the players actions for that turn. There are two players who alternate turns. Player 0 first actions are at `history[0]`, then player 1's actions are at `history[1]`, then player 0's next actions are at `history[2]`, etc.

The player's actions for that turn are formatted as a list of actions in the order performed. See the previous slide for how we represent actions in this game.

For this part of the task, write a function called `calculate_comprpg_stats(history, filename)` that takes the history and a string `filename` and calculates some statistics on the actions played in the game.

Your function should calculate the number of attacks, defends, items, swaps, attempted damage, attempted protection, electricity used, and turns taken for each player based on game history and save this in csv format to the specified file name.

You may assume that the actions are formatted correctly and are the correct length for their action type.

### Example 1:

```python
>>> history = [[('Haskell Heroine', 'defend', 'Recursion Rebuff', 2, 0), ('Python Pal', 'item', 'Screen Repair Kit')], [('Linux Legend', 'attack', 'Root Reckoning', 4, 2, 5, ['Haskell Heroine', 'Python Pal']), ('Binary Bot', 'item', 'Debugging Tool')], [('Haskell Heroine', 'attack', 'Lambda Lunge', 3, 1, 0, ['Linux Legend']), ('Python Pal', 'item', 'RAM Boost')], [('Linux Legend', 'attack', 'Kernel Kick', 4, 1, 3, ['Python Pal']), ('Binary Bot', 'swap', 'Network Ninja')]]
>>> calculate_comprpg_stats(history, "example_game1_stats.csv")
```

Should produce the file:

```python
player,attacks,defends,items,swaps,attempted damage,attempted protection,electricity used,turns taken
0,1,1,2,0,3,2,0,2
1,2,0,1,1,8,0,8,2

```

### Example 2:

```python
>>> history = [[('C Charmer', 'item', 'RAM Boost'), ('Binary Bot', 'swap', 'Linux Legend')], [('Hardware Hacker', 'swap', 'HTML Hero')], [('C Charmer', 'attack', 'Segfault Slam', 2, 2, 2, ['HTML Hero', 'Python Pal']), ('Linux Legend', 'attack', 'Bash Bonk', 2, 1, 0, ['HTML Hero'])], [('HTML Hero', 'attack', 'Entity Eruption', 2, 2, 2, ['C Charmer', 'Linux Legend']), ('Python Pal', 'attack', 'Syntax Strike', 4, 1, 3, ['Linux Legend'])], [('C Charmer', 'defend', 'Buffer Overflow Block', 7, 5), ('Linux Legend', 'defend', 'Firewall', 2, 0)], [('HTML Hero', 'swap', 'Haskell Heroine')], [('C Charmer', 'swap', 'Binary Bot')], [('Haskell Heroine', 'attack', 'Lambda Lunge', 3, 1, 0, ['Binary Bot']), ('Python Pal', 'swap', 'C Charmer')], [('Binary Bot', 'attack', 'Keyboard Bash', 2, 1, 0, ['C Charmer']), ('Linux Legend', 'attack', 'Root Reckoning', 4, 2, 5, ['C Charmer', 'Haskell Heroine'])], [('Haskell Heroine', 'attack', 'Monadic Might', 5, 1, 2, ['Linux Legend']), ('C Charmer', 'defend', 'Compiler Crash', 3, 0)]]
>>> calculate_comprpg_stats(history, "example_game2_stats.csv")
```

Should produce the file:

```python
player,attacks,defends,items,swaps,attempted damage,attempted protection,electricity used,turns taken
0,4,2,1,2,10,9,12,5
1,4,1,0,3,14,3,7,5

```









::: details 公众号：AI悦创【二维码】

![](https://blog.images.bornforthis.cn/docs-images/sha256/77/77f67d48a67ec6a44a4ef1f01ffc85830eb3c121b1ece45dc5ada06e20e2f52b.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Web、Linux」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](https://blog.images.bornforthis.cn/docs-images/sha256/30/3087c629da73428daa0ee050f5b31709c30f650686164b54c724b892a422c585.jpg)



