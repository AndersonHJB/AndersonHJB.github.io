---
title: COMP1005/5005 - Practical Test 2
date: 2024-04-17 18:44:52
author: AI悦创
isOriginal: true
icon: python
sticky: false
star: false
article: true
timeline: true
image: false
navbar: true
sidebarIcon: true
headerDepth: 3
comment: true
lastUpdated: true
editLink: false
backToTop: true
toc: true
---

- Within your work area, create a PracTest2 directory to work in.
- Run a web browser in the Virtual Machine and download the code file from Blackboard/Assessments and put it in the PracTest2 directory.
- Edit as needed to get it running (drawing a line plot)
- Then complete the four tasks below - one mark for each task

```python
"""
pup.py - assess and plot comparison of different types of dogs

Student Name   : 
Student Number :

"""
categories = ["Name", "Size", "Friendly", "Clever", "Strong"]

plist = [["Pug", 1, 3, 3, 1]]

plt.([1,5,3,6])
plt.show()
```

1. **Extend plist in the given code to have ratings for three more dogs. You should choose different ones to the examples given. Do a bar plot of one of the dogs with a title, category labels and the y limit set to 5 (use this limit throughout the test).**
2. **Use a loop to make a line plot including each of the dogs, labels and categories.**
3. **Plot each type of dog separately within a 2x2 subplot, updating the colour to match each of the dogs.**
4. **Create a grouped bar plot with category names, legend and colours as used in Task 3**

**README and history**

- Record the history of the commands you’ve used:**history > hist.txt**
- Update a README file to include info on your code and images

要按照你的要求执行以下步骤，我们先需要纠正和完善现有的 Python 代码，然后逐步完成四个指定的绘图任务。首先，让我们开始修正和准备初始的代码：

1. **修正 Python 代码：**
   - 完整的导入 matplotlib.pyplot 用于绘图。
   - 修正 plt.([1,5,3,6]) 这一行的语法错误。
   - 增加更多狗的种类及其评分数据。

```python
import matplotlib.pyplot as plt

categories = ["Name", "Size", "Friendly", "Clever", "Strong"]
plist = [
    ["Pug", 1, 3, 3, 1],
    ["Labrador", 3, 5, 4, 3],
    ["German Shepherd", 4, 3, 5, 5],
    ["Beagle", 2, 4, 3, 2]
]

# 基本的绘图来测试代码是否可以运行
plt.plot([1, 5, 3, 6])  # 这行代码本身是无关的，仅为示例
plt.show()
```

完成以上的代码修正后，我们可以继续完成每一个具体的绘图任务。

### 任务 1
为其中一种狗绘制一个条形图，并设置标题、类别标签以及 y 轴的限制。

```python
# 选择一个狗的数据，例如 Labrador
dog_data = plist[1][1:]  # 选取除了名字之外的数据
plt.figure(figsize=(8, 4))
plt.bar(categories[1:], dog_data, color='blue')  # categories[1:] 排除"Name"类别
plt.title("Labrador Characteristics")
plt.ylim(0, 5)
plt.show()
```

### 任务 2
使用循环为每种狗创建一个线形图。

```python
plt.figure(figsize=(10, 5))
for dog in plist:
    plt.plot(categories[1:], dog[1:], label=dog[0])  # dog[0] 是名字，用作标签

plt.legend()
plt.title("Comparison of Dog Characteristics")
plt.ylim(0, 5)
plt.show()
```

### 任务 3
在 2x2 子图中单独绘制每种狗的特征，更新每种狗对应的颜色。

```python
colors = ['red', 'green', 'blue', 'orange']
fig, axs = plt.subplots(2, 2, figsize=(10, 10))
for ax, dog, color in zip(axs.flatten(), plist, colors):
    ax.bar(categories[1:], dog[1:], color=color)
    ax.set_title(f"{dog[0]} Characteristics")
    ax.set_ylim(0, 5)

plt.show()
```

### 任务 4
创建一个分组条形图，显示类别名称、图例和任务 3 中使用的颜色。

```python
import numpy as np

x = np.arange(len(categories) - 1)  # 类别数减去 "Name"
width = 0.2  # 条形宽度

fig, ax = plt.subplots()
for i, dog in enumerate(plist):
    ax.bar(x + i * width, dog[1:], width, label=dog[0], color=colors[i])

ax.set_xticks(x + width)
ax.set_xticklabels(categories[1:])
ax.legend()
plt.title("Grouped Characteristics of Dogs")
plt.ylim(0, 5)
plt.show()
```

以上就是使用 Python 和 matplotlib 完成的四个绘图任务的步骤。每一步都包含了必要的代码和简短的说明。如果你有任何特定的修改或者额外的需求，请告知！



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

