---
title: Homework Problem \#3 - Finding an exoplanet
icon: python
date: 2022-10-06 18:18:52
author: AI悦创
isOriginal: true
category: 
    - python 1v1
    - 1v1
tag:
    - python 1v1
    - 1v1
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
editLink: true
backToTop: true
toc: true
---

[/1v1/08-LionGuo/03-Homework-Problem-3-Finding-an-exoplanet/problem_3.ipynb](/1v1/08-LionGuo/03-Homework-Problem-3-Finding-an-exoplanet/problem_3.ipynb)

**Hand-in format:** IPython Notebook or python program. Submit via email.

As a reminder: please make sure your code is clean, documentated, and understandable. Make sure it runs without errors.

## Background

In this problem set, we will analyze a dataset that contains the [radial velocity](https://en.wikipedia.org/wiki/Radial_velocity) of a star versus time. The radial velocity is the velocity with which the star is moving towards or away from us (positive velocities indicate it is moving away from us).

> 在这个问题集中，我们将分析一个数据集，其中包含恒星的径向速度(https://en.wikipedia.org/wiki/Radial_velocity)随时间的变化。视向速度是恒星向我们移动或远离我们的速度(正速度表示它正在远离我们)。

If a star is not close to any other objects, there is no reason why the radial velocity should change over time. However, in the case where a second object is orbiting a star (such as a planet or another star), the star and the object will both orbit the center of mass of the system. Therefore, the star will show periodic variations in its velocity over time. 

> 如果一颗恒星不接近任何其他物体，那么它的视向速度就没有理由随时间变化。然而，如果有第二个物体绕着一颗恒星运行(如行星或另一颗恒星)，那么恒星和物体都会绕着系统的质心运行。因此，随着时间的推移，恒星的速度会出现周期性的变化。

These changes in velocity then cause a shift in spectral lines via the [Doppler effect](https://en.wikipedia.org/wiki/Doppler_effect), which we can measure with specographs on telescopes.

> 这些速度的变化会通过[多普勒效应](https://en.wikipedia.org/wiki/Doppler_effect)引起谱线的偏移，我们可以用望远镜上的光谱图来测量。

> The smaller the second object, the less the star will be affected. For example, the Earth causes the Sun to change its velocity with an amplitude of 0.1 m/s over 1 year.

> 第二个物体越小，恒星受到的影响就越小。例如，地球使太阳的速度在一年内以0.1米/秒的幅度变化。

Watch the following video to see an example of a large planet orbiting a star, and the effect on the observed spectral lines of the sta:

> 观看下面的视频，看看一个绕恒星运行的大行星的例子，以及它对观测到的sta光谱线的影响:

```python
from IPython.display import YouTubeVideo
YouTubeVideo("-BuwWtMygxU")
```

Looking for small changes for the radial velocities of stars is one method to find planets outside our own Solar System ("exoplanets").

> The other common technique is the [transit method](https://de.wikipedia.org/wiki/Transitmethode), which we will not consider.

## Our goal

> 我们的目标

In this problem set, we want to find out whether a particular star has a companion object, and if so, we want to estimate the probability that the companion object is a planet.

> 在这个问题集中，我们想知道某颗恒星是否有伴星，如果有，我们想估计伴星是行星的概率。

The data file required for this exercise is [data/p3_rv.txt](/1v1/08-LionGuo/03-Homework-Problem-3-Finding-an-exoplanet/problem_3.ipynb/p3_rv.txt), a CSV file (whitespace separated) with three columns (and three header lines prefixed by `#`):

> 本练习所需的数据文件是 [data/p3_rv.txt](/1v1/08-LionGuo/03-Homework-Problem-3-Finding-an-exoplanet/problem_3.ipynb/p3_rv.txt) ，这是一个 CSV 文件(空格分隔)，有三列(以及三个标题行以“#”为前缀):

* column 1: time [days]

> 第1栏:时间[天]

* column 2: radial velocity [m/s]

> 第二列:径向速度[m/s]

* column 3: radial velocity uncertainty [m/s]

> 第3列:径向速度不确定度[m/s]

## Part 1 - Visualizing the data

> 第1部分-可视化数据

To start we want to see whether the star does indeed show periodic variations, and if so, we want to measure the period and amplitude.

> 首先，我们想看看恒星是否确实表现出周期性变化，如果是的话，我们想测量周期和振幅。

Read in the data and make a plot of the radial velocity in the file. Include axis labels, units, and error bars.

> 读取数据并在文件中绘制径向速度图。包括轴标签、单位和误差条。

Is the time spacing in the data equal? Do you see any clear periodic variations "by eye"?

> 数据中的时间间隔相等吗?你肉眼能看到任何明显的周期性变化吗?

```python
# -*- coding: utf-8 -*-
# @Time    : 2022/10/6 22:20
# @Author  : AI悦创
# @FileName: pr3.py
# @Software: PyCharm
# @Blog    ：https://bornforthis.cn/
def read_file(path):
    with open(path, "r", encoding="utf-8") as f:
        return f.readlines()[3:]


def parse(content_lst):
    # print(content_lst)
    BJD_lst = []
    Radial_Velocity = []
    Radial_Velocity_Uncertainty = []
    for line in content_lst:
        line = line.replace("\n", "")
        line_lst = line.strip().split()
        # print(line_lst)
        BJD_lst.append(line_lst[0])
        Radial_Velocity.append(line_lst[1])
        Radial_Velocity_Uncertainty.append(line_lst[2])
    # print(BJD_lst, Radial_Velocity, Radial_Velocity_Uncertainty, sep="\n")


content_lst = read_file("p3_rv.txt")
parse(content_lst)
```



欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！

::: details 公众号：AI悦创【二维码】

![](/gzh.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](/zsxq.jpg)
