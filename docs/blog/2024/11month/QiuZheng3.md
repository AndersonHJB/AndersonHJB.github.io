---
title: 葡萄酒质量对比数据分析报告
date: 2024-12-06 20:20:24
author: AI悦创
isOriginal: true
icon: blog
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

课程论文内容为根据给定数据进行数据分析，对数据分析结果撰写数据分析报告。

数据集描述如下：

数据集是著名葡萄牙“Vinho Verde”葡萄酒的葡萄酒质量数据集，其中有红酒观测数据1599条，白葡萄酒观测数据4898条。数据中的输出变量是葡萄酒质量 quality。是一个从0（低质量）到10（高质量）的评分。输入变量是葡萄酒的物理化学成分和特性，包括非挥发性酸、挥发性酸、柠檬酸、残余糖分、氯化物、游离二氧化硫、总二氧化硫、密度、pH值、硫酸盐和酒精含量。 

数据分析报告中要求报告的内容：

1. 对数据集进行描述性分析，用直方图显示红葡萄酒和白葡萄酒质量的评分分布并进行文字汇报。
2. 分析并汇报红葡萄酒和白葡萄酒的平均质量评分是否存在差别。
3. 计算11个输入指标间的相关系数矩阵，汇报哪些变量与葡萄酒质量正相关，哪些是负相关。
4. 分别随机抽取红葡萄酒和白葡萄酒的200条观测数据，以散点图的形式对比11个输入变量对葡萄酒质量的影响（两种酒放在一个图中方便对比，最好用带有回归线的散点图，这样对比更清楚）。对散点图进行分析。
5. 自变量标准化以后使用最小二乘估计分别对两种葡萄酒的观测值进行多元线性回归，对回归结果进行解释和分析。
6. 撰写数据分析报告总结。

7. 数据分析python代码以附录的形式放在数据分析报告最后，代码要有代码标注（可以用Notebook文件转换成PDF文件附上）

- [https://colab.research.google.com/drive/1yik8OsXUAR8HGh6r2QxTsO-SU4EroPju?usp=sharing](https://colab.research.google.com/drive/1yik8OsXUAR8HGh6r2QxTsO-SU4EroPju?usp=sharing)

::: code-tabs

@tab Code1

```python
import pandas as pd

# 加载用户上传的文件
file_path = 'https://github.com/AndersonHJB/AndersonHJB.github.io/releases/download/V0.05/03-winequality-both.csv'
data = pd.read_csv(file_path)

# 查看数据集的基本信息
data.info()
```

@tab Code2

```python
data.head()
```

@tab Markdown

```python
1. 总观测数：6497条
2. 数据列：13列，其中包括：
    
    - type：葡萄酒类型（红酒或白葡萄酒）
    - fixed acidity（固定酸度）至 alcohol（酒精含量）：11个输入特征变量，均为数值型
    - quality（质量评分）：输出变量，整数型

3. 没有缺失值。


# 1. 数据集描述性分析：红白葡萄酒质量评分分布
```

@tab Code3

```python
import matplotlib.pyplot as plt

# 按类型划分数据
red_wine = data[data['type'] == 'red']
white_wine = data[data['type'] == 'white']
```

@tab Code4

```python
# 绘制红葡萄酒和白葡萄酒质量评分的直方图
plt.figure(figsize=(12, 6))
plt.hist(red_wine['quality'], bins=range(3, 10), alpha=0.7, label='Red Wine', density=True, edgecolor='black')
plt.hist(white_wine['quality'], bins=range(3, 10), alpha=0.7, label='White Wine', density=True, edgecolor='black')
plt.xlabel('Quality Score')
plt.ylabel('Density')
plt.title('Quality Score Distribution for Red and White Wines')
plt.legend()
plt.grid(axis='y', linestyle='--', alpha=0.7)
plt.show()
```

@tab Markdown

```python
上图展示了红葡萄酒和白葡萄酒质量评分的分布：

- **红葡萄酒**：评分主要集中在5和6分，占比最高，分布较为集中，低评分（3-4）和高评分（7-8）的比例较低。
- **白葡萄酒**：评分也主要集中在5和6分，但分布更广，7分的比例也相对较高。

> 总体来看，两种酒的质量评分分布存在一定的相似性，但白葡萄酒的高分评分比例稍高于红葡萄酒。

# 2. 红白葡萄酒平均质量评分差异分析
```

@tab Code5

```python
from scipy.stats import ttest_ind

# 计算红葡萄酒和白葡萄酒的平均质量评分
red_mean_quality = red_wine['quality'].mean()
white_mean_quality = white_wine['quality'].mean()

# 输出结果
print(f"红葡萄酒平均评分: {red_mean_quality:.2f}")
print(f"白葡萄酒平均评分: {white_mean_quality:.2f}")

# 从平均值来看，白葡萄酒的评分略高于红葡萄酒。接下来我们将通过统计检验来判断这种差异是否具有显著性。 
```

@tab Code6

```python
# 独立样本 t 检验
t_stat, p_value = ttest_ind(red_wine['quality'], white_wine['quality'])

print(f"t统计量: {t_stat:.2f}, p值: {p_value:.2e}")
```

@tab Markdown

```python
通过独立样本 t 检验得出以下结果：

- t统计量：-9.69
- p值：4.89e-22

由于 p 值远小于常用的显著性水平（如 0.05），我们可以拒绝原假设，说明红葡萄酒和白葡萄酒的平均质量评分之间的差异具有显著性。

# 3. 输入指标间相关性及与质量的关系分析
```

@tab Code7

```python
# 计算相关系数矩阵
correlation_matrix = data.iloc[:, 1:].corr()  # 从 "fixed acidity" 开始到 "quality"

# 与质量相关的变量排序
quality_correlation = correlation_matrix['quality'].sort_values(ascending=False)
```

@tab Code8

```python
# 输出相关系数矩阵和与质量相关的排序结果
quality_correlation
```

@tab Code9

```python
# 输出相关系数矩阵和与质量相关的排序结果
correlation_matrix
```

@tab Markdown

```python
## 与葡萄酒质量的相关系数分析如下：

- **正相关变量：**
    - alcohol（酒精含量）：0.44，显著正相关
    - citric acid（柠檬酸）：0.086，轻微正相关
    - free sulfur dioxide（游离二氧化硫）：0.055，轻微正相关
    - sulphates（硫酸盐）：0.038，轻微正相关
    - pH：0.02，几乎无相关

- **负相关变量：**
    - density（密度）：-0.31，显著负相关
    - volatile acidity（挥发性酸）：-0.27，显著负相关
    - chlorides（氯化物）：-0.20，显著负相关
    - fixed acidity（固定酸度）：-0.08，轻微负相关
    - total sulfur dioxide（总二氧化硫）：-0.041，轻微负相关
    - residual sugar（残余糖分）：-0.037，几乎无相关
    
# 4. 散点图对比分析
# 接下来，我将随机抽取红白葡萄酒各200条数据，并绘制11个输入变量对葡萄酒质量的散点图进行对比分析。
```

@tab Code10

```python
import seaborn as sns

# 随机抽取红白葡萄酒各200条数据
red_sample = red_wine.sample(200, random_state=42)
white_sample = white_wine.sample(200, random_state=42)

# 合并数据并添加标识列
sample_data = pd.concat([red_sample, white_sample])
sample_data['Wine Type'] = sample_data['type'].map({'red': 'Red Wine', 'white': 'White Wine'})

# 绘制散点图矩阵，带回归线
plt.figure(figsize=(16, 16))
sns.pairplot(
    sample_data,
    x_vars=sample_data.columns[1:-2],
    y_vars=['quality'],
    hue='Wine Type',
    kind='reg',
    plot_kws={'scatter_kws': {'alpha': 0.5}, 'line_kws': {'linewidth': 1.5}}
)
plt.suptitle('Scatter Plots of Input Variables vs. Quality', y=1.02)
plt.show()
```

@tab Markdown

```python
上图展示了红白葡萄酒各200条样本中，11个输入变量与质量评分的关系。以下是初步分析：

- **酒精含量（alcohol）**：对两种葡萄酒的质量都有显著正向影响，高酒精含量往往对应较高的质量评分。

- **挥发性酸（volatile acidity）**：对红葡萄酒和白葡萄酒的质量均呈现负相关，挥发性酸越高，评分越低。

- **密度（density）**：两种葡萄酒都显示负相关，高密度对应较低的评分。

- 其他变量如**柠檬酸（citric acid）**和**硫酸盐（sulphates）**与质量评分的关系较弱，但可以观察到白葡萄酒在这些变量上的分布较红葡萄酒更广泛。

接下来，我将对自变量进行标准化后，分别对红葡萄酒和白葡萄酒的质量评分进行多元线性回归，并分析回归结果。

# 5. 多元线性回归分析
```

@tab Code11

```python
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LinearRegression
from sklearn.metrics import r2_score
```

@tab Code12

```python
# 分别提取红白葡萄酒数据的特征和目标变量
X_red = red_wine.iloc[:, 1:-1]
y_red = red_wine['quality']
X_white = white_wine.iloc[:, 1:-1]
y_white = white_wine['quality']
```

@tab Code13

```python
# 标准化
scaler = StandardScaler()
X_red_scaled = scaler.fit_transform(X_red)
X_white_scaled = scaler.fit_transform(X_white)
```

@tab Code14

```python
# 多元线性回归
model_red = LinearRegression().fit(X_red_scaled, y_red)
model_white = LinearRegression().fit(X_white_scaled, y_white)
```

@tab Code15

```python
# 获取回归系数和模型的 R^2 分数
coefficients_red = model_red.coef_
r2_red = r2_score(y_red, model_red.predict(X_red_scaled))
```

@tab Code16

```python
coefficients_white = model_white.coef_
r2_white = r2_score(y_white, model_white.predict(X_white_scaled))
```

@tab Code17

```python
# 创建系数和变量名称的对应表
coefficients_df = pd.DataFrame({
    'Feature': X_red.columns,
    'Red Wine Coefficient': coefficients_red,
    'White Wine Coefficient': coefficients_white
})

# 输出结果
coefficients_df

print(f"\n红葡萄酒 R²: {r2_red:.3f}")
print(f"白葡萄酒 R²: {r2_white:.3f}")
```

@tab Code18

```python
import pandas as pd

# 加载用户上传的文件
file_path = 'https://github.com/AndersonHJB/AndersonHJB.github.io/releases/download/V0.05/03-winequality-both.csv'
data = pd.read_csv(file_path)

# 查看数据集的基本信息
data.info()
data.head()
"""
1. 总观测数：6497条
2. 数据列：13列，其中包括：
    
    - type：葡萄酒类型（红酒或白葡萄酒）
    - fixed acidity（固定酸度）至 alcohol（酒精含量）：11个输入特征变量，均为数值型
    - quality（质量评分）：输出变量，整数型

3. 没有缺失值。
"""
"""
# 1. 数据集描述性分析：红白葡萄酒质量评分分布
"""
import matplotlib.pyplot as plt

# 按类型划分数据
red_wine = data[data['type'] == 'red']
white_wine = data[data['type'] == 'white']
# 绘制红葡萄酒和白葡萄酒质量评分的直方图
plt.figure(figsize=(12, 6))
plt.hist(red_wine['quality'], bins=range(3, 10), alpha=0.7, label='Red Wine', density=True, edgecolor='black')
plt.hist(white_wine['quality'], bins=range(3, 10), alpha=0.7, label='White Wine', density=True, edgecolor='black')
plt.xlabel('Quality Score')
plt.ylabel('Density')
plt.title('Quality Score Distribution for Red and White Wines')
plt.legend()
plt.grid(axis='y', linestyle='--', alpha=0.7)
plt.show()
"""
上图展示了红葡萄酒和白葡萄酒质量评分的分布：

- **红葡萄酒**：评分主要集中在5和6分，占比最高，分布较为集中，低评分（3-4）和高评分（7-8）的比例较低。
- **白葡萄酒**：评分也主要集中在5和6分，但分布更广，7分的比例也相对较高。

> 总体来看，两种酒的质量评分分布存在一定的相似性，但白葡萄酒的高分评分比例稍高于红葡萄酒。
"""
"""
# 2. 红白葡萄酒平均质量评分差异分析
"""
from scipy.stats import ttest_ind

# 计算红葡萄酒和白葡萄酒的平均质量评分
red_mean_quality = red_wine['quality'].mean()
white_mean_quality = white_wine['quality'].mean()

# 输出结果
print(f"红葡萄酒平均评分: {red_mean_quality:.2f}")
print(f"白葡萄酒平均评分: {white_mean_quality:.2f}")
"""
从平均值来看，白葡萄酒的评分略高于红葡萄酒。接下来我们将通过统计检验来判断这种差异是否具有显著性。 ​
"""
# 独立样本 t 检验
t_stat, p_value = ttest_ind(red_wine['quality'], white_wine['quality'])

print(f"t统计量: {t_stat:.2f}, p值: {p_value:.2e}")
"""
通过独立样本 t 检验得出以下结果：

- t统计量：-9.69
- p值：4.89e-22

由于 p 值远小于常用的显著性水平（如 0.05），我们可以拒绝原假设，说明红葡萄酒和白葡萄酒的平均质量评分之间的差异具有显著性。
"""
"""
# 3. 输入指标间相关性及与质量的关系分析
"""
# 计算相关系数矩阵
correlation_matrix = data.iloc[:, 1:].corr()  # 从 "fixed acidity" 开始到 "quality"

# 与质量相关的变量排序
quality_correlation = correlation_matrix['quality'].sort_values(ascending=False)
# 输出相关系数矩阵和与质量相关的排序结果
quality_correlation
# 输出相关系数矩阵和与质量相关的排序结果
correlation_matrix
"""
## 与葡萄酒质量的相关系数分析如下：

- **正相关变量：**
    - alcohol（酒精含量）：0.44，显著正相关
    - citric acid（柠檬酸）：0.086，轻微正相关
    - free sulfur dioxide（游离二氧化硫）：0.055，轻微正相关
    - sulphates（硫酸盐）：0.038，轻微正相关
    - pH：0.02，几乎无相关

- **负相关变量：**
    - density（密度）：-0.31，显著负相关
    - volatile acidity（挥发性酸）：-0.27，显著负相关
    - chlorides（氯化物）：-0.20，显著负相关
    - fixed acidity（固定酸度）：-0.08，轻微负相关
    - total sulfur dioxide（总二氧化硫）：-0.041，轻微负相关
    - residual sugar（残余糖分）：-0.037，几乎无相关

"""
"""
# 4. 散点图对比分析
"""
"""
接下来，我将随机抽取红白葡萄酒各200条数据，并绘制11个输入变量对葡萄酒质量的散点图进行对比分析。
"""
import seaborn as sns

# 随机抽取红白葡萄酒各200条数据
red_sample = red_wine.sample(200, random_state=42)
white_sample = white_wine.sample(200, random_state=42)

# 合并数据并添加标识列
sample_data = pd.concat([red_sample, white_sample])
sample_data['Wine Type'] = sample_data['type'].map({'red': 'Red Wine', 'white': 'White Wine'})

# 绘制散点图矩阵，带回归线
plt.figure(figsize=(16, 16))
sns.pairplot(
    sample_data,
    x_vars=sample_data.columns[1:-2],
    y_vars=['quality'],
    hue='Wine Type',
    kind='reg',
    plot_kws={'scatter_kws': {'alpha': 0.5}, 'line_kws': {'linewidth': 1.5}}
)
plt.suptitle('Scatter Plots of Input Variables vs. Quality', y=1.02)
plt.show()
"""
上图展示了红白葡萄酒各200条样本中，11个输入变量与质量评分的关系。以下是初步分析：

- **酒精含量（alcohol）**：对两种葡萄酒的质量都有显著正向影响，高酒精含量往往对应较高的质量评分。

- **挥发性酸（volatile acidity）**：对红葡萄酒和白葡萄酒的质量均呈现负相关，挥发性酸越高，评分越低。

- **密度（density）**：两种葡萄酒都显示负相关，高密度对应较低的评分。

- 其他变量如**柠檬酸（citric acid）**和**硫酸盐（sulphates）**与质量评分的关系较弱，但可以观察到白葡萄酒在这些变量上的分布较红葡萄酒更广泛。
"""
"""
接下来，我将对自变量进行标准化后，分别对红葡萄酒和白葡萄酒的质量评分进行多元线性回归，并分析回归结果。
"""
"""
# 5. 多元线性回归分析
"""
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LinearRegression
from sklearn.metrics import r2_score
# 分别提取红白葡萄酒数据的特征和目标变量
X_red = red_wine.iloc[:, 1:-1]
y_red = red_wine['quality']
X_white = white_wine.iloc[:, 1:-1]
y_white = white_wine['quality']
# 标准化
scaler = StandardScaler()
X_red_scaled = scaler.fit_transform(X_red)
X_white_scaled = scaler.fit_transform(X_white)
# 多元线性回归
model_red = LinearRegression().fit(X_red_scaled, y_red)
model_white = LinearRegression().fit(X_white_scaled, y_white)
# 获取回归系数和模型的 R^2 分数
coefficients_red = model_red.coef_
r2_red = r2_score(y_red, model_red.predict(X_red_scaled))
coefficients_white = model_white.coef_
r2_white = r2_score(y_white, model_white.predict(X_white_scaled))
# 创建系数和变量名称的对应表
coefficients_df = pd.DataFrame({
    'Feature': X_red.columns,
    'Red Wine Coefficient': coefficients_red,
    'White Wine Coefficient': coefficients_white
})
# 输出结果
coefficients_df
print(f"\n红葡萄酒 R²: {r2_red:.3f}")
print(f"白葡萄酒 R²: {r2_white:.3f}")


```



:::







































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
