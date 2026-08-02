---
title: 04-Python科学计算：用NumPy快速处理数据-2
icon: blog
date: 2026-03-16 18:44:07
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

我来分享一下数据分析中 Numpy 库的使用，本文内容较多，不可能每段代码的输出过程、输出结果分析这显然工作量不是一点点。但我都结合了大量的代码块，希望小伙伴动手运行代码并分析所得到的结果。当你能做到这点的时候，在未来：不管是 Numpy 版本升级导致 API 变化还是其他，你都可以游刃有余的去解决和学习新知识。

## 1. 数据分析基础

也就是我们来看看，数据分析当中最底层的东西——数组「Array」，这也是其中最关键的概念，所以接下来我们来看看数组的概念。

### 1.1 什么是数组？

简单说就是有序的元素序列。比如列表 `[1,2,3,4]` ，这个是简单的一维数组，只有 4 个元素，并且不能被拆分为其他的数组组合；复杂一点呢， `[[1,2,3]，[4,5,6]]` 是一个二维数组，由两个一维数组组成。

有同学说，数组这东西不知道是什么东西，其实很简单：把数字编成组，当然它这一组数字肯定有不同的方式进行排列。我们可以看到下图：1D、2D、3D 是什么意思？其实也就是：一维数组、二维数组、三维数组。

所以，也就是说，我们对数字进行排列的时候我可以以一维的方式进行排列，那一维的长啥样呢？也就是下图的左边第一个图。那二维的呢？有点像个表格，也就是下图的中间「第二个图」。三维的就变成了这样的立方体，也就是下图的最右边的图形。

![](https://blog.images.bornforthis.cn/docs-images/sha256/91/91d835cbd0100f28ef48ddc0216bc3204d111ae3068b3817223af5cd84c4a7a8.png)

所以，这样大家看上图基本上可以看出来是什么意思：

- 一维的数组它就只有一个方向；
- 二维的数组它就是两个方向；
- 三维的数组自然也就是三个方向「也就是在二维的基础上加了一个方向」；

## 2. 数据处理的一般流程

![](https://blog.images.bornforthis.cn/docs-images/sha256/3f/3f77ab6fcae1607d37013f1028ecab42c4cfd4c98fd72483d7638c03798c1f7b.png)



接下来，我们来看看我们对于数据分析一般来说会有怎样的流程，一般来说会有如上所示的四步：

1. **数据收集** ：第一步其实也是很重要的，也就是我们的数据从哪里来。

2. **数据预处理** ：在正式处理数据之前，我们要做数据预处理。

    **那有同学可能会问：预处理和处理有什么区别？**

    - 数据处理这一步呢，是我正式的要对数据进行处理和分析。
    - 预处理，它的作用是为了方便我们在第三部数据处理而做的数据预处理。

3. **数据展示** ：到这里也就是，我数据处理和分析完成了，我如何来把我们分析得出来的结果更加直观。



### 2.1 数据收集

数据收集有如下几种常用的方法：

- **网络爬虫**：可以自己写爬虫代码，自由度较高，麻烦的就是自己得写爬虫；（你想抓取谁，就写那个网站的代码。而不用被限制与当下现有的产品。）

- **公开数据**：比如一些新闻数据、微博评论数据等等，一些可以为你提供下载的数据集；

    > 为什么很多数据本身是公开的，但是又要被反爬？——举个微博平台评论例子。
    >
    > 对于评论来说：评论数据是公开，毕竟是大家互相交换想法的地方之一。
    >
    > 但是这些数据是基于谁产生的？——>基于用户，但也离不开微博平台的运营。所以这个数据如果按所有权，应该是归属于：网友与平台。（**现实**：归属平台的生产资料｜平台想要删除、修改、添加都是归于平台所有。）
    >
    > 假设：
    >
    > - 如果是一个人来微博看评论，会给平台带来什么？——流量、Money；
    >
    > - 而如果是一个爬虫呢？不具有任何价值！爬虫的目的：代替人工，批量抓取数据。期间：产生流量（企业要付费），但不产生任何价值。
    >
    > **这就是为什么：数据公开，却被反爬！**

- **购买数据**：

    - 有专门的爬虫公司，可以为你的需求进行编写特定代码获取数据；
    - 还有专门做数据的公司，专门倒卖数据（本质就是爬虫公司）；
    - 一般来说：本公司自身的，不会自己拿出来卖。（那就【开的价】不够多！）

- **公司内部直接提供**：比如你是做运营的，利用数据分析给运营看见销售情况等等；

- **其它渠道获取数据**：调查问卷等其它形式；

### 2.2 数据预处理

这里我简单的给大家列一下，不理解也是没有关系的：

- 归一化；
- 二值化；
- 维度变换；
- 去重；
- 无效数据过滤；
- ……

#### 2.2.1 归一化

归一化方法有两种形式，一种是把数变为 `(0,1)` 之间的[小数](https://baike.baidu.com/item/小数/2172615)，一种是把有量纲表达式变为无量纲表达式。主要是为了数据处理方便提出来的，把数据映射到 0～1 范围之内处理，更加便捷快速，应该归到[数字信号处理](https://baike.baidu.com/item/数字信号处理/5009)范畴之内。

把数变为 `(0,1)` 之间的小数。

**解：**

- $2.5 + 3.5 + 0.5 + 1.5  = 8$
- $\frac{2.5}{8} = 0.3125$
- $\frac{3.5}{8} = 0.4375$
- $\frac{0.5}{8} = 0.0625$
- $\frac{1.5}{8} = 0.1875$

这个归一化就是将括号里面的总和变成1，然后写出每个数的比例。

#### 2.2.2 无量纲表达式「选看」

归一化是一种简化计算的方式，即将有[量纲](https://baike.baidu.com/item/量纲)的表达式，经过变换，化为无量纲的表达式，成为[纯量](https://baike.baidu.com/item/纯量)。

**在统计学中，归一化的具体作用是归纳统一样本的**[**统计分布**](https://baike.baidu.com/item/统计分布)**性。归一化在0-1之间是统计的**[**概率**](https://baike.baidu.com/item/概率)**分布，归一化在-1--+1之间是统计的坐标分布。**

**归一化化定义** ：归一化就是要把需要处理的数据经过处理后（通过某种算法）限制在你需要的一定范围内。

- 首先归一化是为了后面数据处理的方便，其次是保证程序运行时收敛加快。
- 归一化的具体作用是 **归纳统一样本的统计分布性** 。
- 归一化在 0-1之间是 **统计的概率分布** ，归一化在某个区间上是 **统计的坐标分布** 。
- **归一化有同一、统一和合一的意思。**

如果是区间上的值，则可以用区间上的相对位置来归一化，即选中一个相位参考点，用相对位置和整个区间的比值或是整个区间的给定值作比值，得到一个归一化的数据，比如类似于一个概率值 `0<=p<=1`；

如果是数值，则可以用很多常见的数学函数进行归一化，使它们之间的可比性更显然，更强，比如对数归一，指数归一，三角or反三角函数归一等，归一的目的：**可能是使得没有可比性的数据变得具有可比性** ，但又还会保持相比较的两个数据之间的相对关系，如大小关系，大的仍然大，小的仍然小，或是为了作图，原来很难在一张图上作出来，归一化后就可以很方便的给出图上的相对位置等；

从集合的角度来看，可以做维度的维一，即抽象化归一，把不重要的，不具可比性的集合中的元素的属性去掉，保留人们关心的那些属性，这样，本来不具有可比性的对象或是事物，就可以归一，即归为一类，然后就可以比较了，并且，人们往往喜欢用相对量来比较，比如人和牛，身高体重都没有可比性，但身高/体重的值，就可能有了可比性，人吃多少，牛吃多少，可能也没有直接的可比性，但相对于体重，或是相对于一天的各自的能量提供需要的食量，就有了可比性；这些，从数学角度来看，可以认为是把有纲量变成了无纲量了。

**数据标准化方法（Data Normalization Method）**

数据处理之标准化/归一化，形式上是变化表达，**本质上是为了比较认识** 。数据的标准化是将数据按比例缩放，使之落入一个小的特定区间。由于信用指标体系的各个指标度量单位是不同的，为了能够将指标参与评价计算，需要对指标进行规范化处理，通过函数变换将其数值映射到某个数值区间。

#### 2.2.3 二值化

::: tabs

@tab 原图：

![](https://blog.images.bornforthis.cn/docs-images/sha256/9b/9b312fa75af110b13089e6a5f10e3426664662311bba03cebf3153c2caf6b485.png)

@tab 二值化之后的效果

![](https://blog.images.bornforthis.cn/docs-images/sha256/ee/ee4d266c2a65d2227b8c84fea0c76522b0f976a088e63f6b165120db46337761.png)

:::

**二值化**（英语：Binarization）是[图像分割](https://zh.wikipedia.org/wiki/图像分割)的一种最简单的方法。二值化可以把[灰度图像](https://zh.wikipedia.org/wiki/灰度图像)转换成[二值图像](https://zh.wikipedia.org/wiki/二值图像)。把大于某个**临界灰度值**的像素灰度设为灰度极大值，把小于这个值的像素灰度设为灰度极小值，从而实现二值化。

根据阈值选取的不同，二值化的算法分为**固定阈值**和**自适应阈值**。 比较常用的二值化方法则有：**双峰法**、**P参数法**、**迭代法**和[**OTSU法**](https://zh.wikipedia.org/wiki/大津算法)等。

::: tip 二值化就是

我可能一堆数据，我们拿到手之后直接把它分成两类：低的跟高的，就类似于这样。

:::

> **二值化的关键不是“变黑白”，而是“那个分界线（阈值）怎么选”。**

::: tabs

@tab 第一层：固定阈值 vs 自适应阈值

1. 固定阈值（Fixed Threshold）

    整张图只用 **一个统一的数值**，例如：`阈值 = 128`。

    规则：

    - 像素 > 128 → 白色（255）
    - 像素 ≤ 128 → 黑色（0）

    特点：简单、快，但容易失败（光照不均就崩）。

    适合：背景干净、光照均匀的图。

2. 自适应阈值（Adaptive Threshold）

    不同区域用不同阈值，比如：

    - 左边亮 → 阈值高一点
    - 右边暗 → 阈值低一点

    特点：更智能、能处理阴影、光照不均。

    本质：“每个小区域自己算一个阈值”。

@tab 第二层：那些“方法名”到底是啥？

你看到的：双峰法、P参数法、迭代法、OTSU 法，其实都是在解决同一件事：**怎么自动找到“最合适的阈值”**。

1. 双峰法（Bimodal Method）

    **思想**：图像灰度直方图会有两个峰（背景 + 前景）

    ```bash
          ▲       ▲
         背景     物体
    ```
    
    **做法**：找两个峰中间的“谷” → 当阈值。
    
    直觉理解：两堆人中间那条分界线。
    
2. 迭代法（Iterative Method）

:::

#### 2.2.4 二值化辅助理解

**1. 图像分割**

在[计算机视觉](https://zh.wikipedia.org/wiki/计算机视觉)领域，**图像分割**（segmentation）指的是将[数字图像](https://zh.wikipedia.org/wiki/数字图像)细分为多个图像子区域（像素的[集合](https://zh.wikipedia.org/wiki/集合)）（也被称作超像素）的过程。图像分割的目的是简化或改变图像的表示形式，使得图像更容易理解和分析。[[1\]](https://zh.wikipedia.org/wiki/图像分割#cite_note-computervision-1)图像分割通常用于定位图像中的物体和[边界](https://zh.wikipedia.org/wiki/边界)（[线](https://zh.wikipedia.org/wiki/线)，[曲线](https://zh.wikipedia.org/wiki/曲线)等）。更精确的，图像分割是对图像中的每个[像素](https://zh.wikipedia.org/wiki/像素)加[标签](https://zh.wikipedia.org/wiki/标签)的一个过程，这一过程使得具有相同标签的像素具有某种共同视觉特性。

图像分割的结果是图像上子区域的集合（这些子区域的全体覆盖了整个图像），或是从图像中提取的[轮廓](https://zh.wikipedia.org/w/index.php?title=轮廓&action=edit&redlink=1)线的集合（例如[边缘检测](https://zh.wikipedia.org/wiki/边缘检测)）。一个子区域中的每个像素在某种特性的度量下或是由计算得出的特性都是相似的，例如[颜色](https://zh.wikipedia.org/wiki/颜色)、[亮度](https://zh.wikipedia.org/wiki/亮度)、[纹理](https://zh.wikipedia.org/wiki/紋理)。[邻接](https://zh.wikipedia.org/w/index.php?title=邻接&action=edit&redlink=1)区域在某种特性的度量下有很大的不同。[[1\]](https://zh.wikipedia.org/wiki/图像分割#cite_note-computervision-1)

**2. 灰度**

在[计算机](https://zh.wikipedia.org/wiki/計算機)领域中，**灰度**（Gray scale）[数字图像](https://zh.wikipedia.org/wiki/数字图像)是每个像素只有一个采样[颜色](https://zh.wikipedia.org/wiki/顏色)的图像。这类图像通常显示为从最暗[黑色](https://zh.wikipedia.org/wiki/黑色)到最亮的[白色](https://zh.wikipedia.org/wiki/白色)的[灰度](https://zh.wikipedia.org/wiki/灰度)，尽管理论上这个采样可以是任何颜色的不同深浅，甚至可以是不同亮度上的不同颜色。灰度图像与[黑白图像](https://zh.wikipedia.org/w/index.php?title=黑白圖像&action=edit&redlink=1)不同，在计算机图像领域中黑白图像只有黑白两种颜色，灰度图像在黑色与白色之间还有许多级的颜色深度。但是，在数字图像领域之外，“黑白图像”也表示“灰度图像”，例如灰度的[照片](https://zh.wikipedia.org/wiki/照片)通常叫做“黑白照片”。在一些关于数字图像的文章中[**单色图像**](https://zh.wikipedia.org/w/index.php?title=單色圖像&action=edit&redlink=1)等同于灰度图像，在另外一些文章中又等同于黑白图像。

灰度图像经常是在单个[电磁波频谱](https://zh.wikipedia.org/wiki/電磁波頻譜)如可见光内测量每个像素的[亮度](https://zh.wikipedia.org/wiki/亮度)得到的。

用于显示的灰度图像通常用每个采样像素8 bits的[非线性尺度](https://zh.wikipedia.org/wiki/伽瑪校正)来保存，这样可以有256种灰度（8bits就是2的8次方=256）。这种精度刚刚能够避免可见的条带[失真](https://zh.wikipedia.org/wiki/失真)，并且非常易于编程。在[医学图像](https://zh.wikipedia.org/wiki/医学图像)与[遥感图像](https://zh.wikipedia.org/w/index.php?title=遙感圖像&action=edit&redlink=1)这些技术应用中经常采用更多的级数以充分利用每个采样10或12 bits的[传感器](https://zh.wikipedia.org/wiki/传感器)精度，并且避免计算时的近似误差。在这样的应用领域流行使用16 bits即65536个组合（或65536种颜色）。

**3. 二值图像**

**二值图像**是每个像素只有两个可能值的[数字图像](https://zh.wikipedia.org/wiki/数字图像)。人们经常用*黑白*、*B&W*、[单色](https://zh.wikipedia.org/wiki/單色)图像表示二值图像，但是也可以用来表示每个像素只有一个采样值的任何图像，例如[灰度图像](https://zh.wikipedia.org/wiki/灰度图像)等。

二值图像经常出现在[数字图像处理](https://zh.wikipedia.org/wiki/数字图像处理)中作为图像[掩码](https://zh.wikipedia.org/wiki/掩码)或者在[图像分割](https://zh.wikipedia.org/wiki/图像分割)、[二值化](https://zh.wikipedia.org/wiki/二值化)和[dithering](https://zh.wikipedia.org/w/index.php?title=Dithering&action=edit&redlink=1)的结果中出现。一些输入输出设备，如[激光打印机](https://zh.wikipedia.org/wiki/激光打印机)、[传真机](https://zh.wikipedia.org/wiki/傳真機)、单色[计算机显示器](https://zh.wikipedia.org/wiki/计算机显示器)等都可以处理二值图像。

二值图像经常使用[位图](https://zh.wikipedia.org/wiki/位图)格式存储。

二值图像可以解释为*二维整数格* *Z*2，[图像变形处理](https://zh.wikipedia.org/wiki/图像变形处理)领域很大程度上就是受到这个观点启发。

#### 2.2.5 维度变换

可以理解为：二维变一维数组这样的变换。

#### 2.2.6 去重

如果重复的数据较多，我们可以在数据预处理的时候处理掉。

#### 2.2.7 无效数据过滤

有可能数据缺漏不全之类的。

**举个例子🌰：** 

::: tabs

@tab 场景

假设我们有一个关于用户购买记录的数据集，其中包括以下字段：

- **用户 ID（UserID）**：标识用户的唯一编号。
- **购买金额（PurchaseAmount）**：用户一次购买的金额。
- **购买日期（PurchaseDate）**：购买发生的日期。

@tab 数据样例（原始数据）

| UserID | PurchaseAmount | PurchaseDate |
| ------ | -------------- | ------------ |
| 101    | 50.0           | 2024-11-01   |
| 102    |                | 2024-11-02   |
| 103    | 75.5           | 2024-11-03   |
|        | 100.0          | 2024-11-04   |
| 105    | -25.0          | 2024-11-05   |
| 106    | 120.0          |              |

@tab 无效数据过滤规则

1. **购买金额缺失或无效**：`PurchaseAmount` 应该为正数，缺失或小于等于 0 的数据为无效。
2. **用户ID 缺失**：`UserID` 为空的数据为无效。
3. **购买日期缺失**：`PurchaseDate` 为空的数据为无效。

@tab Pandas 初体验

```python
import pandas as pd

# 创建数据集
data = {
    "UserID": [101, 102, 103, None, 105, 106],
    "PurchaseAmount": [50.0, None, 75.5, 100.0, -25.0, 120.0],
    "PurchaseDate": ["2024-11-01", "2024-11-02", "2024-11-03", "2024-11-04", "2024-11-05", None],
}
df = pd.DataFrame(data)

# 过滤无效数据
filtered_df = df.dropna(subset=["UserID", "PurchaseDate"])  # 移除 UserID 或 PurchaseDate 缺失的行
filtered_df = filtered_df[filtered_df["PurchaseAmount"] > 0]  # 移除购买金额 <= 0 或缺失的行

# 查看过滤后的数据
print(filtered_df)
```

@tab 过滤后的数据

| UserID | PurchaseAmount | PurchaseDate |
| ------ | -------------- | ------------ |
| 101    | 50.0           | 2024-11-01   |
| 103    | 75.5           | 2024-11-03   |

@tab 总结

通过这种方式，我们可以确保后续分析或处理的数据质量较高，减少因无效数据引发的错误。

:::



### 2.3 数据处理

1. **数据排序**：类似从大到小排序；
2. **数据查找**：按某种条件进行查找；
3. **数据统计分析**；

这里其实有很多，我只是列了几个而已。

### 2.4 数据展示

![](https://blog.images.bornforthis.cn/docs-images/sha256/a3/a31fca5b392e27765bdaac780cee74d27ec1a0fddfef86bbdccddbeea601726e.jpeg)

1. 列表；
2. 图表；
3. 动态交互图形；

以上就是数据处理的基本流程。

## 3. 为什么使用 Numpy

- 高性能；
- 开源；
- 数组运算；
- 读写迅速；

简单来讲，Python  内置的若干种数据类型，无法高效地应对计算密集型场景，比如矩阵运算。因此 Numpy  随之应运而生，并被认为是高性能科学计算和数据分析的基础包。

数据分析中所介绍到几乎所有的高级工具，都是基于 Numpy  开发的。因为  NumPy  的大部分代码都是用 C 语言写的，其底层算法在设计时就有着极优异的性能，所以使得 NumPy  比纯 Python  代码高效得多。作为基础工具，其实玩转 Numpy 很简单，只要掌握三个关键知识点，即：数据类型的创建、数据层的索引切片、数组运算。下面我们分不同的篇幅一一展开。

对于新入门的同学，尤其需要注意的是，**虽然大多数的数据分析工作并不会直接操作 Numpy 对象，但是深谙面向数组的编程方式和逻辑能力是成为 Python 数据分析大牛的关键**，切记磨刀不误砍柴工。

面向数组的编程方式，最大的特点就是用数组表达式完成数据操作任务，无需写大量循环。向量化的数组操作会比纯 Python 的等价实现快一到两个数量级。在后续的学习中，我们会有机会细细品味其中的差别和优势。

接下来，我们用一个简单的代码来带你体验 Numpy 的高性能！

::: code-tabs

@tab Code

```python
import numpy as np
import time

# 原生 Python 列表操作
list_array = list(range(int(1e6)))  # 10 的 6次方
start_time = time.time()
python_array = [val * 5 for val in list_array]  # 一百万个数字，里面每个数字都乘于 5
# python_array = []
# for val in list_array:
#     python_array.append(val * 5)
end_time = time.time()
print('Python array time: {}ms'.format(round((end_time - start_time) * 1000, 2)))

# NumPy 数组操作
np_array = np.arange(1e6)
start_time = time.time()
np_array = np_array * 5
end_time = time.time()
print('Numpy array time: {}ms'.format(round((end_time - start_time) * 1000, 2)))
print('What sup!')
```

@tab 输出

```python
Python array time: 30.36ms
Numpy array time: 1.24ms
What sup!
```

:::

## 4. 安装 Numpy

::: code-tabs

@tab Mac

```bash
pip3 install numpy
```

@tab Windows

```bash
pip install numpy
```

:::

## 5. 使用 Numpy 模块

### 5.1 新建一个 Python 文件

1. 导入 Numpy 模块；

    ```python
    import numpy as np
    ```

2. `as np` 表示在接下来的程序里 **用 np 表示 numpy**；

3. `import` 某某模块 `as` 一个缩写；

### 5.2 Numpy 的基础类型——ndarray

Numpy 最重要的一个特点就是它可以快速地创建一个 N 维数组对象（即 ndarray ，本文在 ndarray 对象和 **数组** 并不做概念上的区分），然后你可以利用 ndarray 这种数据结构非常高效地执行一些数学运算，并且语法风格和 Python 基本一致。

#### 5.2.1 创建数组

::: tabs

@tab 一维数组

创建一个 ndarray 数组，我们在 Python 里面直接创建数组原本是这样创建的：

```python
data = [2, 4, 6.5, 8]
```

创建 ndarray 最简单的方法就是使用 array 函数，它接受一个序列型对象（比如列表），并转化为 ndarray 对象。所以，如果要创建一个 Numpy 类型的 **一维数组** ，就需要如下编写代码：

```python
data = np.array([2, 4, 6.5, 8]) # np.array() 里面直接填一个由数字组成的列表
```

当然，你有可能想把列表单独的写出来，那就可以像下面这么来写：

```python
python_list = [2, 4, 6.5, 8]
data = np.array(python_list)
print(data)

# ---output---
array([2. , 4. , 6.5, 8. ])
```



:::















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