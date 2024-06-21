---
title: 05-Pygame 接球游戏「PyCatchBall」
date: 2023-04-21 19:11:53
author: AI悦创
isOriginal: true
category: 
    - 轻松入门 Python—玩中学
    - Pygame
tag:
    - 轻松入门 Python—玩中学
    - Pygame
icon: Games
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

## 0. 目录

- 游戏介绍
- 接球游戏—小球
- 接球游戏——接杆

## 1. 游戏介绍

白色小球随机从上方位置出现，并垂直下落。通过接杆接住小球积一分，接杆由鼠标左、右键控制，进行左右移动，积分分数会显示在终端命令行中。



## 2.接球游戏—小球

### 2.1 新建代码文件并导入所需要的库

```python
import pygame
import sys
import random
from pygame.locals import *
```

### 2.2 为游戏提前创建所需要的参数

提前创建参数，方便我们后面代码的调用。

```python
# 背景色
BLACK = (0, 0, 0)

# 素材色
WHITE = (255, 255, 255)

# 背景颜色
bg_color = (0, 0, 70)

# 屏幕大小
SCREEN_SIZE = [20, 5]

# 球大小
BALL_SIZE = [15, 15]
```



































