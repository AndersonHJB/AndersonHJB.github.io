---
title: 数据预测项目
date: 2024-11-27 20:30:40
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

comment: true

backToTop: true
toc: true
---

## 1. 需求描述

现有数据集“China_Automobile_Sales_Data.csv”，对数据集使用 Python 的 PyMC3、pystan 、numpy 、pandas、matplotlib 等进行贝叶斯分析，分析中国未来5年汽车销售的情况。

**任务1 数据准备**：清洗数据，将数据划分为训练集（80%）和测试集（20%）；

**任务2 初步分析**：使用完整“China_Automobile_Sales_Data.csv”数据（也就是未分成训练集和测试集的数据）画“时间 VS. 汽车销量增长”图和“ 数据集摘要表格”；

**任务 3 汽车销量增长预测 (units_sold)**：

- **模型**：贝叶斯线性回归，用于建模时间与 units_sold 之间的关系。
    1. 将时间（按月数据）转换为数值格式。
    2. 根据历史销量趋势为 y 斜率和截距定义先验分布。
    3. 拟合模型并计算后验分布。
    4. 使用后验预测分布预测未来5年的销量。
    5. 进行后验预测检查 Posterior Predictive Check, PPC
    6. **可视化**：
        1. 斜率和截距的后验分布图。
        2. 实际销量与预测销量的时间序列图（含置信区间）。

**任务 4 电动车增长预测(is_ev)**：



---

现有数据集“China_Automobile_Sales_Data.csv”，对数据集使用 Python 的 PyMC3、pystan 、numpy 、pandas、matplotlib 等进行贝叶斯分析，分析中国未来5年汽车销售的情况。

**任务1 数据准备**：清洗数据，将数据划分为训练集（80%）和测试集（20%）；

**任务2 初步分析**：使用完整“China_Automobile_Sales_Data.csv”数据（也就是未分成训练集和测试集的数据）画“时间 VS. 汽车销量增长”图和“ 数据集摘要表格”；

**任务 3 汽车销量增长预测 (units_sold)**：

- **模型**：贝叶斯线性回归，用于建模时间与 units_sold 之间的关系。
- **可视化**：
    1. 斜率和截距的后验分布图。
    2. 实际销量与预测销量的时间序列图（含置信区间）。



















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
