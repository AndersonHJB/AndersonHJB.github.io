---
title: 实训三上：数据统计分析
date: 2024-11-30 12:05:07
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

## 1. 需求

以下数据为某公司为研究销售人员数量对新产品销售额的影响，从其下属多家公司中随机抽取了10个子公司，这10个子公司当年新产品销售额和销售人员数量统计数据。试用一元线性回归分析方法研究销售人员数量对新产品销售额的影响。

实验报告采用 ipynb 格式上传，报告内容包含代码及运行过程，代码标注内容和数据结果解读分析几个部分（数据分析结果包括程序输出的回归结果表格、对该表格的结果解读，比如模型整体显著性、模型解释能力、回归方程及其系数的解读等等）。

**错误代码**

::: code-tabs

@tab Code1

```python
# 导入必要的库
import pandas as pd
import statsmodels.api as sm
import matplotlib.pyplot as plt

# 加载数据
file_path = 'data/al9-1.xlsx'
df = pd.read_excel(file_path)
df

# 显示数据的前几行
print("数据预览：")
df.head()

# 提取自变量和因变量
X = df['Q']  # 销售人员数量（自变量）
y = df['TC']  # 新产品销售额（因变量）

# 为回归模型添加常数项（截距）
X_with_const = sm.add_constant(X)

# 拟合一元线性回归模型
model = sm.OLS(y, X_with_const).fit()

# 打印回归模型的总结信息
print("\n回归分析结果：")
model.summary()

# 绘制散点图和回归线
plt.figure(figsize=(8, 6))
plt.scatter(X, y, color='blue', label='观测数据')
plt.plot(X, model.predict(X_with_const), color='red', label='回归线')
plt.xlabel('销售人员数量 (Q)')
plt.ylabel('新产品销售额 (TC)')
plt.title('一元线性回归: 销售人员数量对新产品销售额的影响')
plt.legend()
plt.grid(True)
plt.show()


# 打印回归方程
intercept, slope = model.params
print("\n回归方程:")
print(f"TC = {intercept:.4f} + {slope:.4f} * Q")

# 模型结果解读
print("\n结果解读：")
print(f"R平方: {model.rsquared:.4f}，表示模型解释了{model.rsquared*100:.2f}%的目标变量变化。")
print("回归系数说明：")
print(f"  - 截距: {intercept:.4f}，当销售人员数量为零时的预测销售额。")
print(f"  - 自变量系数: {slope:.4f}，每增加一名销售人员，新产品销售额预计增加 {slope:.4f} 单位。")
```

@tab Code2

```python
# 导入必要的库
import pandas as pd
import statsmodels.api as sm
import matplotlib.pyplot as plt

# 加载数据
file_path = '你的数据文件路径.xlsx'  # 替换为你的文件路径
df = pd.read_excel(file_path)

# 显示数据的前几行
print("数据预览：")
print(df.head())

# 提取自变量和因变量
X = df['Q']  # 销售人员数量（自变量）
y = df['TC']  # 新产品销售额（因变量）

# 为回归模型添加常数项（截距）
X_with_const = sm.add_constant(X)

# 拟合一元线性回归模型
model = sm.OLS(y, X_with_const).fit()

# 打印回归模型的总结信息
print("\n回归分析结果：")
print(model.summary())

# 绘制散点图和回归线
plt.figure(figsize=(8, 6))
plt.scatter(X, y, color='blue', label='观测数据')
plt.plot(X, model.predict(X_with_const), color='red', label='回归线')
plt.xlabel('销售人员数量 (Q)')
plt.ylabel('新产品销售额 (TC)')
plt.title('一元线性回归: 销售人员数量对新产品销售额的影响')
plt.legend()
plt.grid(True)
plt.show()

# 打印回归方程
intercept, slope = model.params
print("\n回归方程:")
print(f"TC = {intercept:.4f} + {slope:.4f} * Q")

# 模型结果解读
print("\n结果解读：")
print(f"R平方: {model.rsquared:.4f}，表示模型解释了{model.rsquared*100:.2f}%的目标变量变化。")
print("回归系数说明：")
print(f"  - 截距: {intercept:.4f}，当销售人员数量为零时的预测销售额。")
print(f"  - 自变量系数: {slope:.4f}，每增加一名销售人员，新产品销售额预计增加 {slope:.4f} 单位。")
```

@tab Code「xls」

```python
# 加载数据
file_path = '/content/drive/MyDrive/ColabNotebooks/QZ/al8-1.xls'  # 替换为你的文件路径
df = pd.read_excel(file_path, engine='xlrd')  # 加载 .xls 文件时需要指定引擎
```



:::

**正确代码**

::: code-tabs

@tab Code

```python
import pandas as pd
import statsmodels.formula.api as smf

# 读取数据
file_path = '/content/drive/MyDrive/ColabNotebooks/QZ/al8-1.xls'  # 替换为您本地文件的路径
df = pd.read_excel(file_path, engine='xlrd')
print(df)

# 重命名列以便理解
df.rename(columns={'xse': 'sales', 'rs': 'staff_count'}, inplace=True)

# 数据展示
print("数据预览：")
print(df.head())

# 构建一元线性回归模型
model = smf.ols('sales ~ staff_count', data=df).fit()

# 输出回归结果
print("\n回归结果：")
print(model.summary())

# 保存回归结果到文本文件
output_path = 'regression_results.txt'
with open(output_path, 'w') as f:
    f.write(model.summary().as_text())

print(f"回归结果已保存到 {output_path}")

# 回归系数解读
print("\n回归系数解读：")
print(f"截距 (Intercept): {model.params['Intercept']}")
print(f"销售人员数量系数 (staff_count): {model.params['staff_count']}")

# 模型整体显著性和解释能力
print("\n模型整体显著性和解释能力：")
print(f"F统计量的p值 (Prob (F-statistic)): {model.f_pvalue}")
print(f"R-squared: {model.rsquared}")
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
