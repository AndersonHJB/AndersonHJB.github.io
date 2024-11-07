---
title: 兰州财经大学Python期中试卷2024-2025
tags:
  - Python题目
  - 小红书
categories:
  - Python接单
description: Python期中试卷2024-2025，兰州财经大学Python期中考试
top_img: /img/posts/P02-Python/02-Python考试张雅欣/02-Python考试张雅欣.png
cover: /img/posts/P02-Python/02-Python考试张雅欣/02-Python考试张雅欣.webp
comments: true
toc: true
mathjax: false
katex: false
highlight_shrink: true
swiper_index: 1
top_group_index: 1
background: '#fff'
aside: true
ai:
  - Python期中试卷2024-2025，兰州财经大学Python期中考试
abbrlink: 1efa71b7
date: 2024-11-07 18:31:07
toc_number:
toc_style_simple:
aplayer:
---

# 1. 简答题

计算后在此输入理论距离阵（20*20）节点的经纬度，节点1设为开始节点，节点20设为结束节点。(自行设定经纬度区间，并随机不等距划分为20个节点坐标，模板如下，将答案以 XLS文件粘贴即可!)

- [经纬度及邻接矩阵.xlsx](/static/PostsData/02-Python考试张雅欣/经纬度及邻接矩阵.xlsx)

{% tabs Q1 %}

<!-- tab 1. Zhang Solution -->
```python
import pandas as pd
import numpy as np
from geopy.distance import geodesic

# 定义经纬度范围，用于生成随机坐标
latitude_range = (30.0, 40.0)  # 例如中国区域的近似范围
longitude_range = (100.0, 110.0)

# 生成20个节点的随机经纬度
num_nodes = 20
np.random.seed(42)  # 设置随机种子以保证结果可重复
latitudes = np.random.uniform(*latitude_range, num_nodes)
longitudes = np.random.uniform(*longitude_range, num_nodes)

# 创建 DataFrame 存储节点的经纬度信息
coordinates_df = pd.DataFrame({
    '节点': range(1, num_nodes + 1),
    '经度': longitudes,
    '纬度': latitudes
})

# 计算理论距离矩阵，使用 geodesic 函数计算两点间的地理距离
distance_matrix = np.zeros((num_nodes, num_nodes))

for i in range(num_nodes):
    for j in range(num_nodes):
        if i != j:
            # 计算距离，单位为公里
            distance_matrix[i, j] = geodesic((latitudes[i], longitudes[i]), (latitudes[j], longitudes[j])).kilometers

# 创建 DataFrame 存储距离矩阵，并添加节点标签
distance_matrix_df = pd.DataFrame(distance_matrix, index=range(1, num_nodes + 1), columns=range(1, num_nodes + 1))
distance_matrix_df.insert(0, '节点', range(1, num_nodes + 1))

# 将结果保存到 Excel 文件
output_path = '经纬度_及_理论距离阵.xlsx'
with pd.ExcelWriter(output_path) as writer:
    coordinates_df.to_excel(writer, sheet_name='经纬度', index=False)
    distance_matrix_df.to_excel(writer, sheet_name='理论距离阵', index=False)

print(f"文件已保存为：{output_path}")
```
<!-- endtab -->

<!-- tab 2. Yu Solution -->
```python
import pandas as pd
import numpy as np
from geopy.distance import geodesic

# 定义经纬度范围，用于生成随机坐标
latitude_range = (30.0, 40.0)  # 例如中国区域的近似范围
longitude_range = (100.0, 110.0)

# 生成20个节点的随机经纬度
num_nodes = 20
np.random.seed(43)  # 设置随机种子以保证结果可重复
latitudes = np.random.uniform(*latitude_range, num_nodes)
longitudes = np.random.uniform(*longitude_range, num_nodes)

# 创建 DataFrame 存储节点的经纬度信息
coordinates_df = pd.DataFrame({
    '节点': range(1, num_nodes + 1),
    '经度': longitudes,
    '纬度': latitudes
})

# 计算理论距离矩阵，使用 geodesic 函数计算两点间的地理距离
distance_matrix = np.zeros((num_nodes, num_nodes))

for i in range(num_nodes):
    for j in range(num_nodes):
        if i != j:
            # 计算距离，单位为公里
            distance_matrix[i, j] = geodesic((latitudes[i], longitudes[i]), (latitudes[j], longitudes[j])).kilometers

# 创建 DataFrame 存储距离矩阵，并添加节点标签
distance_matrix_df = pd.DataFrame(distance_matrix, index=range(1, num_nodes + 1), columns=range(1, num_nodes + 1))
distance_matrix_df.insert(0, '节点', range(1, num_nodes + 1))

# 将结果保存到 Excel 文件
output_path = '经纬度_及_理论距离阵.xlsx'
with pd.ExcelWriter(output_path) as writer:
    coordinates_df.to_excel(writer, sheet_name='经纬度', index=False)
    distance_matrix_df.to_excel(writer, sheet_name='理论距离阵', index=False)

print(f"文件已保存为：{output_path}")
```
<!-- endtab -->
{% endtabs %}