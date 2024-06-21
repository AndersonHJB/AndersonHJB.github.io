---
title: 13-使用 Excel 画像素画
date: 2024-04-22 14:41:58
author: AI悦创
isOriginal: true
category: Python 办公自动化
tag:
    - Python 办公自动化
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
editLink: true
backToTop: true
toc: true
---

## 1. Excel 和图片类似

Excel 文件，单元格支持编辑内容和设置背景色。

一张图片，都是由密密麻麻的像素组成，且每个像素都是一个 rgb 的颜色值。

那是否可以读取图片每个像素的颜色，填充到 Excel 中，就可以做到 Excel 中画图。

这么想，是可以的。理论上也是可行的，那接下来就开始写代码。

## 2. 打开文件和图片

第一步，导入所需库，分别是 xlsxwriter 和图片的 Image 库。使用 xlsxwriter 的理由，是 xls 内容有限，图片的像素可是很多的，所以最好是使用 xlsx 格式。

```python
import xlsxwriter
from PIL import Image
```

如果，你没有安装则使用如下命令安装：

```bash
pip install Pillow
```

导入之后，准备图片，并读取图片的宽高，以及像素对象：

::: code-tabs

@tab Code1

```python
path = '1.png'
img = Image.open(path)
imgL = img.convert("P").convert("RGB")
pix = imgL.load()
w, h = imgL.size
```

@tab Code2

```python
# 定义变量 'path'，存储图像文件的路径。这里指向名为 '1.png' 的文件。
path = '1.png'

# 使用 Image 模块的 open 函数打开文件。这一步读取 '1.png' 文件并创建一个 Image 对象 'img'。
img = Image.open(path)

# 将图像转换为 'P' 模式（即调色板模式），然后再转换为 'RGB' 模式。
# 第一次转换到 'P' 模式可能是为了降低处理复杂性或进行某种形式的优化（例如减少颜色数量）。
# 然后，再次转换为 'RGB' 模式，因为很多图像处理或视觉输出库都需要 RGB 格式的数据。
# 'imgL' 现在是一个转换后的 RGB 图像副本。
imgL = img.convert("P").convert("RGB")

# 使用 load 方法加载图像，这将允许我们通过坐标访问图像的每个像素。
# 'pix' 是一个像素访问对象，可以用来读取或修改像素的颜色。
pix = imgL.load()

# 获取图像的尺寸。'size' 属性返回一个元组，包含图像的宽度和高度。
# 'w' 和 'h' 分别被赋值为图像的宽度和高度。
w, h = imgL.size
```

:::

![](./auto_base13.assets/1575945803624754.png)

使用 Image 读取图片对象，获取宽和高，以及 pix 这像素对象，通过 `pix[1,1]` 拿到具体的颜色 RGB 值，然后转换成 16 进制的颜色值，进行背景色的写入。

## 3. 准备一个特殊函数

现在打开一个 xlsx 文件，文件名任意，如下代码：

```python
wb = xlsxwriter.Workbook('demo2.xlsx')
ws = wb.add_worksheet('sheet1')
```

然后找一个 RGB 转 16 进制的函数，因为 RGB 是 10 进制的，方式就是通过 hex 函数转换成 16 进制，然后加上 x 和 0，并全部大写，就可以了。如下函数：

```python
def RGB_to_Hex(tmp):
    rgb = list(tmp)
    strs = '#'
    for i in rgb:
        num = int(i)
        strs += str(hex(num))[-2:].replace('x', '0').upper()
    return strs
```

为什么一定要 16 进制？因为 sheet 中，写入背景色时，颜色必须是 16 进制才可以。

## 4. 读取和写入

下面就是循环的逐个单元格设置背景色，且不需要写入内容。如下代码：

```python
for i in range(w):
    for j in range(h):
        rgb = pix[i, j]
        color = RGB_to_Hex(rgb)
        style = wb.add_format({'bg_color': '{}'.format(color)})
        ws.write(j, i, '', style)
        ws.set_row(j, 1)
ws.set_column(0, w-1, 0.5)

wb.close()
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













