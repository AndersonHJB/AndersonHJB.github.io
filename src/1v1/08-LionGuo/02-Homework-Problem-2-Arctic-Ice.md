---
title: Homework Problem \#2 - Arctic Ice
icon: python
date: 2022-10-06 18:15:28
author: AI悦创
isOriginal: true
category: 
    - python 1v1
    - 1v1
    - 物理
tag:
    - python 1v1
    - 1v1
    - 物理
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

- [/1v1/08-LionGuo/02-Homework-Problem-2-Arctic-Iceproblem_2.ipynb](/1v1/08-LionGuo/02-Homework-Problem-2-Arctic-Ice/problem_2.ipynb)

- [/1v1/08-LionGuo/02-Homework-Problem-2-Arctic-Ice/day_2.ipynb](/1v1/08-LionGuo/02-Homework-Problem-2-Arctic-Ice/day_2.ipynb)

**Hand-in format:** IPython Notebook or python program. Submit via email.

As a reminder: please make sure your code is clean, documentated, and understandable. Make sure it runs without errors.

> **提交格式:** IPython Notebook或python程序。通过电子邮件提交。
>
> 作为一个提醒:请确保您的代码是干净的、有文档记录的和可理解的。确保它没有错误地运行。

## Background

The purpose of this problem is to become familiar with loading, manipulating, and analyzing image-like data, plotting it. We will use a dataset collected by the AMSR-E instrument [Aqua](http://en.wikipedia.org/wiki/Aqua_%28satellite%29) satellite.

> 这个问题的目的是熟悉加载、操作和分析类似图像的数据，并绘制它。我们将使用AMSR-E仪器[Aqua](http://en.wikipedia.org/wiki/Aqua_%28satellite%29)卫星收集的数据集。

The data consists of maps of the concentration of ice in the Arctic collected between 2006 and 2011. The data obtained from the [amsr database](http://www.iup.uni-bremen.de/seaice/amsr/) and converted into a single HDF5 file format.

> 这些数据由2006年至2011年收集的北极冰浓度地图组成。从[amsr数据库](http://www.iup.uni-bremen.de/seaice/amsr/)获得的数据，并转换为单一的HDF5文件格式。

## Part 1 - Examining a single map

> 第1部分-检查单个地图

Begin by examining the HDF5 file - you can use `h5ls` at the command line, or `h5py` inside the notebook.

> 从检查HDF5文件开始-你可以在命令行中使用' h5ls '，或者在笔记本中使用' h5py '。

> If you don't remember how to open HDF5 files, and read datasets from HDF5 files, look at our Day 2 lecture.

> 如果你不记得如何打开 HDF5 文件，并从 HDF5 文件中读取数据集，请参考我们第2天的课程。

> There are many datasets, each with a name of the format `YYYYMMDD`, giving the data. Each dataset is a single map (i.e. 2D array), where the values give the ice concentration (fraction, from 0.0 to 100.0) in that pixel of the map. Careful of NaN values!

> 有许多数据集，每个数据集的名称格式为“YYYYMMDD”，用于提供数据。每个数据集都是一个单一的地图(即2D数组)，其中的值给出了地图像素中的冰浓度(从0.0到100.0的分数)。小心NaN值!

Read one of the maps, and plot it with Matplotlib.

> 阅读其中一张地图，并使用Matplotlib绘制它。

Note: to get the correct orientation, you need the `origin='lower'` argument for `imshow()`. Include a colorbar. Remove the tick labels (`0`, `100`, and so on, indicating pixel number) since they are not useful.

> 注意:为了获得正确的方向，你需要' origin='lower' '参数为' imshow() '。包括一个colorbar。删除标记(“0”、“100”等，表示像素数)，因为它们没有用。

## 答案

```python
# -*- coding: utf-8 -*-
# @Time    : 2022/10/6 18:26
# @Author  : AI悦创
# @FileName: hw2.py
# @Software: PyCharm
# @Blog    ：https://bornforthis.cn/
import h5py


# f = h5py.File('p2_icedata_area.hdf5', 'r')
# # f = h5py.File('p2_icedata.hdf5', 'r')
# print(f)
# print(f.keys())
# dataset = f["pixel_areas"]
# print(dataset)
# print(dataset.shape)
# print(dataset.dtype)

def read_hdf5(path):
    f = h5py.File(path, 'r')
    keys = f.keys()
    for key in keys:
        # print(key)
        dataset = f[key]
        print(key, dataset.shape, dataset.dtype, sep="\t")


if __name__ == '__main__':
    read_hdf5("p2_icedata.hdf5")

```

```python
import matplotlib.pyplot as plt
import h5py
def read_hdf5(path):
    year_lst = []
    dataset_lst = []
    f = h5py.File(path, 'r')
    keys = f.keys()
    for key in keys:
        # print(key)
        dataset = f[key]
#         print(key, dataset.shape, dataset.dtype, sep="\t")
        year_lst.append(key)
        dataset_lst.append(dataset.shape)
    # "g" 表示红色，marksize用来设置'D'菱形的大小
    plt.plot(year_lst, dataset_lst, "g", marker='D', markersize=5, label="year")
    # 绘制坐标轴标签
    plt.xlabel("年")
    plt.ylabel("数据")
    plt.title("HDF5")
    # 显示图例
    plt.legend(loc="lower right")
    # 调用 text()在图像上绘制注释文本
    # x1、y1表示文本所处坐标位置，ha参数控制水平对齐方式, va控制垂直对齐方式，str(y1)表示要绘制的文本
#     for x1, y1 in zip(year_lst, dataset_lst):
#         plt.text(x1, y1, str(y1), ha='center', va='bottom', fontsize=10)
    # 保存图片
    plt.savefig("1.jpg")
    plt.show()


read_hdf5("p2_icedata.hdf5")
```



## Part 2 - Ice concentration versus time

> 第二部分-冰浓度与时间的关系

We want to make a plot of the ice concentration over time.

> 我们要画出冰浓度随时间变化的曲线。

First, write a loop to read all the datasets of the HDF5 file (e.g. into a dict).

> 首先，编写一个循环来读取HDF5文件的所有数据集(例如到字典中)。

Then, write an analysis function `frac_pixels_above(dict,value)` which, for each array in the input dict, computes the fraction of pixels above the input `value`. Use this to make a plot of the number of pixels with concentration above 50%, versus time.

> 然后，编写一个分析函数' frac_pixels_above(dict,value) '，该函数对于输入dict中的每个数组，计算输入' value '以上像素的百分比。使用此方法绘制浓度超过50%的像素数量与时间的关系图。

> Note: to include "time" on the x-axis of a plot, you may want to write a helper function to convert the dict keys from their `YYYYMMDD` string format into a 3-tuple of (year, month, day) integer values.

> 注意:要在图形的x轴上包含“时间”，您可能需要编写一个helper函数来将字典键从它们的“YYYYMMDD”字符串格式转换为3元组(年、月、日)整数值。

> This can then be converted into fractional years (e.g. 1 July 2012 is `2012.5`). For simplicity you can assume each month has 30 days.

> 这可以转换为小数年(例如，2012年7月1日为“2012.5”)。为了简单起见，你可以假设每个月有30天。

> Try experimenting with matplotlib `set_major_formatter` to get a good [representation of dates in the tick labels](https://matplotlib.org/3.5.1/gallery/text_labels_and_annotations/date.html).

> 尝试使用matplotlib ' set_major_formatter '来获得一个很好的[在标记标签中日期的表示](https://matplotlib.org/3.5.1/gallery/text_labels_and_annotations/date.html)。

Describe what you see in the plot.

> 描述你在情节中看到了什么。

```python
def read_hdf5(path):
    # year_lst = []
    dataset_lst = []
    f = h5py.File(path, 'r')
    keys = f.keys()
    for key in keys:
        # print(key)
        dataset = f[key]
        # print(key, dataset.shape, dataset.dtype, sep="\t")
        # year_lst.append(key)
        dataset_lst.append((key, dataset.shape))
    return dict(dataset_lst)
```





## Part 3 - Physical units

> 第3部分-物理单元

To be more quantitative we will compute the actual surface area of Earth in $\rm{km}^2$ over which the ice concentration is above a given threshold.

> 为了更定量，我们将以$\rm{km}^2$为单位计算地球的实际表面积，在此范围内冰浓度超过给定的阈值。

However, these maps are projections of a spherical surface, so [pixels have different area](https://en.wikipedia.org/wiki/Tissot%27s_indicatrix).

> 然而，这些地图是球面的投影，所以[像素有不同的面积](https://en.wikipedia.org/wiki/Tissot%27s_indicatrix)。

> Every map uses the same projection, so the pixel areas in each are the same.

> 每个地图使用相同的投影，所以每个地图中的像素区域是相同的。

The areas (in $\rm{km}^2$) are available in the file named `data/p2_icedata_area.hdf5`. Inspect, then load, this datafile. Plot it (with colorbar and units).

> 区域(在$\rm{km}^2$中)在名为“data/p2_icedata_area.hdf5”的文件中可用。检查并加载这个数据文件。绘制它(用颜色条和单位)。

- [p2_icedata_area.hdf5](/1v1/08-LionGuo/02-Homework-Problem-2-Arctic-Ice/p2_icedata_area.hdf5)
- [p2_icedata.hdf5](/1v1/08-LionGuo/02-Homework-Problem-2-Arctic-Ice/p2_icedata.hdf5)

## 文件读取











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
