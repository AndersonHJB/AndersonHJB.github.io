---
title: 「2024-2025」兰州财经大学Python期中试卷
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
highlight_shrink: false
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

**你们直接安装库和运行自己对应的代码即可！你们两个的代码都可以运行后会保存成一个 Excel 文件，具体如何提交自行操作。**

```python
pip install pandas geopy numpy
```

{% tabs Q1 %}

<!-- tab 1. Zhang Solution -->
```python
import pandas as pd
import numpy as np
from geopy.distance import geodesic

# 定义经纬度范围，用于生成随机坐标
# 定义甘肃省的经纬度范围
latitude_range = (32.0, 42.0)  # 甘肃的纬度范围
longitude_range = (92.0, 108.0)  # 甘肃的经度范围

# 生成20个节点的随机经纬度
num_nodes = 20
# np.random.seed(43)  # 设置随机种子以保证结果可重复
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
import numpy as np
import pandas as pd
import math

# 随机生成20个节点的经纬度坐标
np.random.seed(42)
num_nodes = 20
lat_lon_data = pd.DataFrame({
    '节点': range(1, num_nodes + 1),
    '经度': np.random.uniform(100, 120, num_nodes),
    '维度': np.random.uniform(30, 50, num_nodes)
})

# 使用Haversine公式计算理论距离阵（节点之间的直线距离）
def haversine(lon1, lat1, lon2, lat2):
    R = 6371  # 地球半径，单位为公里
    lon1, lat1, lon2, lat2 = map(math.radians, [lon1, lat1, lon2, lat2])
    dlon = lon2 - lon1 
    dlat = lat2 - lat1 
    a = math.sin(dlat/2)**2 + math.cos(lat1) * math.cos(lat2) * math.sin(dlon/2)**2
    c = 2 * math.asin(math.sqrt(a)) 
    return R * c

# 计算理论距离矩阵
theoretical_distance_matrix = np.zeros((num_nodes, num_nodes))
for i in range(num_nodes):
    for j in range(num_nodes):
        if i != j:
            lat1, lon1 = lat_lon_data.iloc[i][['维度', '经度']]
            lat2, lon2 = lat_lon_data.iloc[j][['维度', '经度']]
            theoretical_distance_matrix[i, j] = haversine(lon1, lat1, lon2, lat2)

theoretical_distance_df = pd.DataFrame(theoretical_distance_matrix, columns=range(1, num_nodes + 1), index=range(1, num_nodes + 1))

print("随机生成的经纬度坐标：")
print(lat_lon_data)
print("\n生成的理论距离矩阵：")
print(theoretical_distance_df)

# 将随机生成的经纬度和理论距离矩阵保存到Excel文件
with pd.ExcelWriter('生成的经纬度及理论距离矩阵.xlsx') as writer:
    lat_lon_data.to_excel(writer, sheet_name='经纬度', index=False)
    theoretical_distance_df.to_excel(writer, sheet_name='理论距离矩阵')

print("生成的经纬度和理论距离矩阵已保存为 '生成的经纬度及理论距离矩阵.xlsx'")
```
<!-- endtab -->

<!-- tab Other（无需查看） -->

**我的备份代码，无需关注！**

```python
import numpy as np
import pandas as pd
import math

# 随机生成20个节点的经纬度坐标
np.random.seed(42)
num_nodes = 20
lat_lon_data = pd.DataFrame({
    '节点': range(1, num_nodes + 1),
    '经度': np.random.uniform(100, 120, num_nodes),
    '维度': np.random.uniform(30, 50, num_nodes)
})

# 使用Haversine公式计算理论距离阵（节点之间的直线距离）
def haversine(lon1, lat1, lon2, lat2):
    R = 6371  # 地球半径，单位为公里
    lon1, lat1, lon2, lat2 = map(math.radians, [lon1, lat1, lon2, lat2])
    dlon = lon2 - lon1 
    dlat = lat2 - lat1 
    a = math.sin(dlat/2)**2 + math.cos(lat1) * math.cos(lat2) * math.sin(dlon/2)**2
    c = 2 * math.asin(math.sqrt(a)) 
    return R * c

# 计算理论距离矩阵
theoretical_distance_matrix = np.zeros((num_nodes, num_nodes))
for i in range(num_nodes):
    for j in range(num_nodes):
        if i != j:
            lat1, lon1 = lat_lon_data.iloc[i][['维度', '经度']]
            lat2, lon2 = lat_lon_data.iloc[j][['维度', '经度']]
            theoretical_distance_matrix[i, j] = haversine(lon1, lat1, lon2, lat2)

theoretical_distance_df = pd.DataFrame(theoretical_distance_matrix, columns=range(1, num_nodes + 1), index=range(1, num_nodes + 1))

print("随机生成的经纬度坐标：")
print(lat_lon_data)
print("\n生成的理论距离矩阵：")
print(theoretical_distance_df)
```

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

# 2. 论述题

在此输入以上理论距离矩阵和邻接矩阵的点乘结果，即节点的实际距离矩阵。(在下方粘贴XLS文件即可!)

# 3. 计算题

请列出 DJ 算法的逻辑伪代码。

{% tabs Q3 %}
<!-- tab 1. Zhang Solution -->

<!-- endtab -->

<!-- tab 2. Yu Solution -->

<!-- endtab -->
{% endtabs %}


# 4. 资料题

请画出实际距离阵的网络图，并标出从节点1出发到节点20的的最短路径。(网络图粘贴在下方即可!)

# 5. 分录题

请给出相关的 python 或者 matlab 程序代码！