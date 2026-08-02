---
title: Python烟花课设
date: 2023-06-16 11:54:57
author: AI悦创
isOriginal: true
category: 
    - Python期末辅导
    - Python期末1v1辅导
    - python课设
tag:
    - Python毕业设计辅导
    - Python毕业设计1v1辅导
    - python课设
icon: python
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

## 1. 导入模块

```python
import pygame
import random
import math
```
我们导入了三个模块：pygame（用于创建游戏和实现图形界面），random（用于生成随机数），math（用于数学计算）。

## 2. 初始化 pygame

```python
pygame.init()
```
在使用 pygame 前，我们需要先初始化它。

## 3. 设置屏幕大小并创建一个窗口

```python
size = (800, 600)
screen = pygame.display.set_mode(size)
```
我们设定了屏幕的大小为 `800*600` ，然后创建了一个这样大小的窗口。

## 4. 设置窗口标题

```python
pygame.display.set_caption("烟花按大键盘的1-4切换")
```
我们给窗口设置了一个标题，显示为"烟花按大键盘的1-4切换"。

## 5. 定义颜色

```python
BLACK = (0, 0, 0)
WHITE = (255, 255, 255)
RED = (255, 0, 0)
GREEN = (0, 255, 0)
BLUE = (0, 0, 255)
YELLOW = (255, 255, 0)
PURPLE = (255, 0, 255)
CYAN = (0, 255, 255)
```
我们定义了一些常用的颜色。在 pygame 中，颜色由 RGB 值表示，每种颜色的RGB值都是一个元组，包含三个介于 0 到 255 之间的整数。

## 6. 定义场景

```python
scenes = {
    'birthday': {'name': '生日', 'colors': [RED, YELLOW, GREEN, CYAN], 'num': 100, 'speed': (1, 5)},
    'new_year': {'name': '新年', 'colors': [YELLOW, WHITE], 'num': 200, 'speed': (1, 10)},
    'wedding': {'name': '婚礼', 'colors': [WHITE, PURPLE,GREEN], 'num': 50, 'speed': (2, 8)},
    'national_day': {'name': '国庆', 'colors': [RED, YELLOW,BLUE], 'num': 500, 'speed': (1, 3)}
}
```
我们定义了四个场景：生日、新年、婚礼、国庆。每个场景都有一个名字、一组颜色、一个粒子数和一个速度范围。

接下来的部分就是两个主要的类：Firework（烟花）和 Particle（粒子）。烟花由多个粒子组成，烟花爆炸后粒子会向四处飞散。每个类都有自己的更新（update）和绘制（draw）方法，这些方法用于改变对象的状态并在屏幕上显示对象。

## 7. Firework 类

```python
class Firework():
    def __init__(self, x, y, color):
        self.color

 = color
        self.particles = []
        self.x = x
        self.y = y
        self.exploded = False

        for i in range(50):
            speed = random.uniform(scenes[scene]['speed'][0], scenes[scene]['speed'][1])
            angle = random.uniform(0, 2 * math.pi)
            particle = Particle(x, y, speed * math.cos(angle), -speed * math.sin(angle), color)
            self.particles.append(particle)
    def update(self):
        if self.exploded:
            for particle in self.particles:
                particle.update()
        else:
            self.y += -10

    def draw(self):
        if not self.exploded:
            pygame.draw.circle(screen, self.color, (int(self.x), int(self.y)), 5)
        else:
            for particle in self.particles:
                particle.draw()
```

## 8. Particle 类

```python
class Particle():
    def __init__(self, x, y, dx, dy, color):
        self.color = color
        self.x = x
        self.y = 300
        self.dx = dx
        self.dy = dy
        self.lifetime = random.randint(20, 30)

    def update(self):
        self.x += self.dx
        self.y += self.dy
        self.lifetime -= 1

    def draw(self):
        pygame.draw.circle(screen, self.color, (int(self.x), int(self.y)), 3)
```

接下来是主要的游戏循环，包含事件处理、状态更新、对象绘制和屏幕更新等步骤。

## 9. 游戏主循环

```python
done = False
clock = pygame.time.Clock()
while not done:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            done = True
        elif event.type == pygame.KEYDOWN:
            if event.key == pygame.K_1:
                scene = 'birthday'
            elif event.key == pygame.K_2:
                scene = 'new_year'
            elif event.key == pygame.K_3:
                scene = 'wedding'
            elif event.key == pygame.K_4:
                scene = 'national_day'
    screen.fill(BLACK)
    if random.randint(1, 100) < 5:
        x = random.uniform(0, size[0])
        y = size[1]
        color = random.choice(scenes[scene]['colors'])
        fireworks.append(Firework(x, y, color))
    for firework in fireworks:
        firework.update()
        firework.draw()
        if not firework.exploded and firework.y <= size[1] / 2:
            firework.exploded = True
    fireworks = [firework for firework in fireworks if not firework.exploded or len(firework.particles) > 0]
    pygame.display.flip()
    clock.tick(60)
```

## 10. 结束游戏

```python
pygame.quit()
```
在退出游戏前，我们需要调用 `pygame.quit()` 函数来清理 pygame 使用的资源。





欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！

::: details 公众号：AI悦创【二维码】

![](https://blog.images.bornforthis.cn/docs-images/sha256/77/77f67d48a67ec6a44a4ef1f01ffc85830eb3c121b1ece45dc5ada06e20e2f52b.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Linux、Web 全栈」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](https://blog.images.bornforthis.cn/docs-images/sha256/30/3087c629da73428daa0ee050f5b31709c30f650686164b54c724b892a422c585.jpg)





