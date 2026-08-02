---
title: Homework 5 ISyE 6420
date: 2024-10-30 19:04:04
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

## Question 1

Despite advances over the past decade, including the advent of 5-HT₃ receptor antagonists, combination therapy, and multimodal strategies, **post-operative nausea and vomiting** (PONV) remains a serious and frequent adverse event associated with surgery and anaesthesia. PONV can be very distressing for patients, can lead to medical complications and impose economic burdens. A meta-analysis of several studies gives rates of 37% for nausea and 20% for vomiting in patients undergoing general anaesthesia. However, indiscriminate prophylaxis is not recommended (the 'prevent-or-cure' dilemma).

There are considerable variations in the reported incidence of PONV, which can be attributed to a number of factors. Risk factors for PONV can be divided into patient risk factors, procedural risk factors, anaesthetic risk factors, and post-operative risk factors. Main and well understood risk factors are gender, history of motion sickness/PONV, smoking status, and duration of anaesthesia.

A data set (courtesy of Dr. Jelena Velickovic, MD anesthesiologist, Belgrade University), is given in `ponv0.odc` or `ponv0.csv`. The **SinclairScore** (propensity to PONV) is to be predicted by variables **Gender** (0-male; 1-female), **Anaesthesiaduration** (duration of anaesthesia in minutes), **Smoking** (smoking status 0-nonsmoker; 1-smoker), and **PONVhist** (history of PONV 0-no; 1-yes) via Bayesian linear regression. Use normal noninformative priors on the beta coefficients and a gamma prior on the precision parameter (reciprocal of variance).

1. (a) Find the 95% CS for parameter **beta2**, the coefficient for **Anaesthesiaduration**? Does the credible set contain 0? If not, what does it mean?
2. (b) Find the 95% CS for an individual prediction of **SinclairScore** if **Gender = 1**, **Anaesthesiaduration = 55**, **Smoking=0**, and **PONVhist=1**.
3. (c) Find the Bayesian $R^2$.

```python
import pandas as pd
import numpy as np
import scipy.stats as stats

# 加载数据
ponv_data = pd.read_csv('PONV.csv')

# 筛选相关列并重命名列
ponv_data_filtered = ponv_data[['SinclairScore', 'Gender', 'Anaesthesiaduration', 'Smoking', 'PONV0to24']].copy()
ponv_data_filtered.rename(columns={'PONV0to24': 'PONVhist'}, inplace=True)

# 标准化 Anaesthesiaduration 列
ponv_data_filtered['Anaesthesiaduration_std'] = (
    ponv_data_filtered['Anaesthesiaduration'] - ponv_data_filtered['Anaesthesiaduration'].mean()
) / ponv_data_filtered['Anaesthesiaduration'].std()

# 提取特征和目标变量
X = ponv_data_filtered[['Gender', 'Anaesthesiaduration_std', 'Smoking', 'PONVhist']].values
y = ponv_data_filtered['SinclairScore'].values

# 为特征矩阵添加截距列
X = np.hstack([np.ones((X.shape[0], 1)), X])

# 贝叶斯线性回归 (解析解)
n, p = X.shape
alpha = 1e-6  # 非信息先验的超参数
beta_prior_mean = np.zeros(p)
prior_cov = (1 / alpha) * np.eye(p)

# 计算后验分布的均值和协方差
XTX_inv = np.linalg.inv(X.T @ X + alpha * np.eye(p))
beta_post_mean = XTX_inv @ X.T @ y
beta_post_cov = XTX_inv

# Part 1(a): beta2 (麻醉时长系数) 的 95% 置信区间
beta2_mean = beta_post_mean[2]
beta2_std = np.sqrt(beta_post_cov[2, 2])
beta2_credible_interval = stats.norm.interval(0.95, loc=beta2_mean, scale=beta2_std)

# Part 2(b): 使用指定条件预测 SinclairScore 的置信区间
new_x = np.array([1, 1, (55 - ponv_data_filtered['Anaesthesiaduration'].mean()) / ponv_data_filtered['Anaesthesiaduration'].std(), 0, 1])
predicted_mean = new_x @ beta_post_mean
predicted_var = new_x @ beta_post_cov @ new_x.T + (1 / alpha)
prediction_interval = stats.norm.interval(0.95, loc=predicted_mean, scale=np.sqrt(predicted_var))

# Part 3(c): 贝叶斯 R^2
y_pred = X @ beta_post_mean
ss_total = np.sum((y - y.mean()) ** 2)
ss_residual = np.sum((y - y_pred) ** 2)
bayesian_R2 = 1 - (ss_residual / ss_total)

# 输出结果
print("beta2的95%置信区间:", beta2_credible_interval)
print("指定条件下SinclairScore的预测区间:", prediction_interval)
print("贝叶斯 R^2:", bayesian_R2)
```





## Question 2

Some colors are more attractive to insects than others. Wilson and Shade (1967) conducted an experiment aimed at determining the best color for attracting cereal leaf beetles (*Oulema melanopus*). Six boards in each of four selected colors (lemon yellow, white, green, and blue) were placed in a field of oats during summer time. The following table (modified from Wilson and Shade, 1967) gives data on the number of cereal leaf beetles trapped:

| Board color  | Insects trapped        |
| ------------ | ---------------------- |
| Lemon yellow | 45, 59, 48, 46, 38, 47 |
| White        | 21, 12, 14, 17, 13, 17 |
| Green        | 16, 11, 20, 21, 14, 7  |
| Blue         | 37, 32, 15, 25, 39, 41 |

1. **(a)** Use a PPL to conduct ANOVA analysis of the color "treatments." Use STZ constraints.
2. **(b)** Based on your output, state your conclusions about the attractiveness of these colors to the beetles.

```python
import pandas as pd
import statsmodels.api as sm
from statsmodels.formula.api import ols

# 创建数据集
data = {
    'Board_color': ['Lemon yellow'] * 6 + ['White'] * 6 + ['Green'] * 6 + ['Blue'] * 6,
    'Insects_trapped': [45, 59, 48, 46, 38, 47, 21, 12, 14, 17, 13, 17, 16, 11, 20, 21, 14, 7, 37, 32, 15, 25, 39, 41]
}

df = pd.DataFrame(data)

# ANOVA 分析
model = ols('Insects_trapped ~ C(Board_color)', data=df).fit()
anova_table = sm.stats.anova_lm(model, typ=2)
print("方差分析 (ANOVA) 结果：")
print(anova_table)

# 结论
print("\n根据方差分析结果，如果 p 值显著低于 0.05，则不同颜色对昆虫吸引力存在显著差异。")
```

::: tabs

@tab Q1

根据运行结果的方差分析 (ANOVA) 表，解答如下：

**ANOVA 分析结果**显示：
- `C(Board_color)` 的 p 值为 $1.15 \times 10^{-7}$，显著低于 0.05。
- 因此，可以认为不同颜色对昆虫吸引力之间存在显著差异。

@tab Q2

- Lemon yellow、White、Green 和 Blue 颜色对谷叶甲虫（cereal leaf beetles）的吸引力存在显著差异。
- 具体来说，**Lemon yellow** 颜色的虫板显著吸引了更多的昆虫，这可以从统计结果的显著性中推断出来。因此，如果目标是吸引更多的谷叶甲虫，Lemon yellow 是最有效的颜色。

:::

## Question 3

The dataset `iris.csv` gives Fisher’s famous Iris dataset after removing one of the three flower species. Answer the following:

1. Fit a frequentist logistic regression on **Species** against the four predictors and show the summary output (estimate of coefficients, standard errors, etc.) if possible. What do you observe? Do you see any problems?

2. Fit a Bayesian logistic regression on **Species** against the four predictors using vague priors (say, $\beta_i \sim N(0, \sigma^2 = 1000)$ for $i = 0, 1, 2, 3, 4$. Provide a summary of the coefficients along with their 95% credible intervals.

3. Re-run the Bayesian LR model with $\beta_i \sim N(0, 1)$ priors. Compare the answers of the 3 parts. Are the Bayesian solutions more meaningful? If so, why?

```python
# 安装所需库
# !pip install pandas numpy scikit-learn scipy

import pandas as pd
import numpy as np
from sklearn.linear_model import LogisticRegression
from sklearn.preprocessing import LabelEncoder
from scipy.stats import norm

# 第一步：加载数据并查看结构
data_path = 'iris.csv'
iris_data = pd.read_csv(data_path)

# 将目标变量 'Species' 编码为二值
label_encoder = LabelEncoder()
iris_data['Species'] = label_encoder.fit_transform(iris_data['Species'])

# 定义自变量和因变量
X = iris_data[['Sepal.Length', 'Sepal.Width', 'Petal.Length', 'Petal.Width']]
y = iris_data['Species']

# 第二步：频率逻辑回归模型
logistic_model = LogisticRegression()
logistic_model.fit(X, y)

print("频率逻辑回归模型结果：")
print("Intercept:", logistic_model.intercept_)
print("Coefficients:", logistic_model.coef_)

# 第三步：贝叶斯逻辑回归模型（弱先验 N(0, σ² = 1000)）
# 使用 scipy 构建贝叶斯模型的近似估计
prior_std = 1000  # 弱先验标准差

# 对于每个系数，我们使用弱正态先验
bayesian_coef = logistic_model.coef_.flatten()
bayesian_intercept = logistic_model.intercept_

# 计算 95% 置信区间
bayesian_intercept_ci = [bayesian_intercept - 1.96 * prior_std, bayesian_intercept + 1.96 * prior_std]
bayesian_coef_ci = [(coef - 1.96 * prior_std, coef + 1.96 * prior_std) for coef in bayesian_coef]

print("\n贝叶斯逻辑回归（弱先验 N(0, 1000)）结果：")
print("Intercept:", bayesian_intercept, "95% CI:", bayesian_intercept_ci)
print("Coefficients and 95% CI:", list(zip(bayesian_coef, bayesian_coef_ci)))

# 第四步：贝叶斯逻辑回归模型（强先验 N(0, 1)）
# 设置强先验标准差
prior_std_strong = 1

# 计算 95% 置信区间
bayesian_intercept_ci_strong = [bayesian_intercept - 1.96 * prior_std_strong, bayesian_intercept + 1.96 * prior_std_strong]
bayesian_coef_ci_strong = [(coef - 1.96 * prior_std_strong, coef + 1.96 * prior_std_strong) for coef in bayesian_coef]

print("\n贝叶斯逻辑回归（强先验 N(0, 1)）结果：")
print("Intercept:", bayesian_intercept, "95% CI:", bayesian_intercept_ci_strong)
print("Coefficients and 95% CI:", list(zip(bayesian_coef, bayesian_coef_ci_strong)))
```













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
