---
title: 6420final_Fall2024-4 Final-exam
date: 2024-12-07 21:38:10
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

All questions on this exam must be solved with a Probabilistic Programming Language (PPL); 

**Fall 2024 Final Exam Problem 1**

The sinking of the Titanic is one of the most infamous shipwrecks in history. On April 15, 1912, during her maiden voyage, the widely considered “unsinkable” RMS Titanic sank after colliding with an iceberg. Unfortunately, there weren’t enough lifeboats for everyone onboard, resulting in the death of 1,502 out of 2,224 passengers and crew. While there was some element of luck involved in surviving, it seems some groups of people were more likely to survive than others. 

The file `6420_titanic.csv` contains the following data on 889 passengers:

**survival**: 0 = No, 1 = Yes

**Pclass (Ticket class)**: 1 = 1st, 2 = 2nd, 3 = 3rd

**Sex**: male or female

**Age**: Age in years

**Sibsp**: # of siblings / spouse aboard the Titanic

**Parch**: # of parents / children aboard the Titanic

**Fare**: Ticket price in pounds

**Embarked (Port of Embarkation)**: C = Cherbourg, Q = Queenstown, S = Southampton

Many Age values are missing, especially for the non-first-class passengers. They can be treated as missing-at-random data for this problem. A reasonable prior for Age is Uniform: $U(0, 100)$.

Treat each categorical variable with $L - 1$ dummy variables, where $L$ is the number of individual categories. For **Sex**, you could treat male as the reference category—in other words, code male as 0 and female as 1, using a single coefficient that represents the effect of being female on survival. 

**Pclass** and **Embarked** should be treated in a similar fashion—you may choose the reference categories. Here, rather than one column like for the **Sex** variable, you will need two columns of indicator data each for these variables, since they have three categories. If both columns are coded 0, that represents your reference category. 

The below model is an example with male, first class, and the port of Cherbourg as the reference categories:
$$
y_i | \alpha, \beta, X \sim \text{Bernoulli}(p_i)

\\

p_i = \text{logit}^{-1}(\eta_i)

\\

\eta_i = \alpha + \beta_{\text{female}} x_{\text{female},i} + \beta_{\text{class2}} x_{\text{class2},i} + \beta_{\text{class3}} x_{\text{class3},i}\\
+ \beta_{\text{portQ}} x_{\text{portQ},i} + \beta_{\text{portS}} x_{\text{portS},i}\\
+ \beta_{\text{age}} x_{\text{age},i} + \beta_{\text{sibsp}} x_{\text{sibsp},i} + \beta_{\text{parch}} x_{\text{parch},i} + \beta_{\text{fare}} x_{\text{fare},i}

\\

\alpha \sim N(0, 10^2)

\\

\beta_j \sim N(0, 2.5^2) \quad \text{for each coefficient}
\\

\text{age}_i \sim \text{Uniform}(0, 100) \quad \text{for missing values}
$$
For the rest of the predictor variables, (**Age**, **Sibsp**, **Parch**, **Fare**), treat them as continuous and use a single coefficient. **Age** and **Fare** must be standardized (use one standard deviation).

For all coefficients, use a prior of $\mathcal{N}(0, 2.5^2)$. For the intercept, use $\mathcal{N}(0, 10^2)$.

1. **Fit a logistic regression** where the probability of survival is dependent on the **Pclass, Sex, Age, Sibsp, Parch, Fare, and Embarked** variables. Which variables appear to be significant according to the 95% highest-density credible interval (if you are using OpenBUGS, the software’s default equi-tailed credible interval is also allowed)?

2. **Scenario**: 
   - Jack is a 20-year-old male, traveling alone in the third class and embarked from Southampton.
   - Rose is a 17-year-old female, traveling with one parent in first class, who also embarked from Southampton.
   - Jack’s fare originally cost 10 pounds, while Rose’s cost 130 pounds.
   - **Task**: What are their mean probabilities of survival?

   **Hint**: The mean probability of survival can be found with a deterministic calculation rather than the posterior predictive distribution.

3. **Fit the binary regression** with the uncommonly-used loglog link, instead. 
   - Is there a difference between the link functions?
   - Which works better for this data and model?
   - Use **Deviance Information Criterion (DIC)** or **Widely-Applicable Information Criterion (WAIC)** on the deviance scale.

The loglog link is defined as:

$$
g(p) = -\log(-\log(p))
$$
and its inverse is:

$$
g^{-1}(p) = e^{-e^{-p}}
$$



**Fall 2024 Final Exam Problem 2**

A manufacturer was finding unwanted differences in the torque values of a locknut that it made. Torque is the work (i.e., force × distance) required to tighten the nut. Consequently, the manufacturer conducted an experiment to determine what factors affected the torque values. The type of plating process was isolated as the most probable factor to impact torque, especially using no plating versus using plating. Another factor is the test medium, that is, whether the locknut is threaded onto a bolt or a mandrel. A mandrel is like a bolt but harder. Thus the two experimental factors were (a) type of plating, whose three levels were no plating, cadmium-plated, and phosphate- plated, and (b) test medium, whose levels were mandrel and bolt. The torque values for 10 locknuts for each of the six treatments are given in torque.csv, where a different set of locknuts is used for each treatment. The terms C&W, HT, and P&O are for the three types of plating, which are cadmium and wax, heat treated only (i.e., no plating), and phosphate and oil. The industry standard is 45-foot-pound maximum when the locknut is first threaded onto its mating partner (i.e., bolt or mandrel) as measured by a manual torque wrench. The Industrial Fastener Institute torque specifications are given for locknuts prior to plating. Analysis of variance on this experiment can give information to assess whether these specifications should apply to plated nuts. Analyze the experimental data using a factorial design and STZ constraints, then answer the following questions.

1. Does the testing medium affect the torque?
2. Does the type of plating affect the torque?
3. Are there any interactions between the testing medium and type of plating?
4. Try your model again, but this time allow for the model variance to vary by plating type. Based on your new model results, does our data violate the original fixed variance assumption? Compare the results and the DIC/WAIC of the two models. Is the new model an improvement? Would any of your conclusions from parts 1-3 change?

**Fall 2024 Final Exam Problem 3**

Consider the problem of predicting the density of nanowires ($y$) with respect to the thickness of polymer films ($x$) in a solution-based growth process (see Figure 1). Eight experiments were conducted with two replicates (except for one run). The data are in the file `nanowire.csv`. The density of nanowires is assumed to follow a Poisson distribution with mean:

$$
\mu(x) = \theta_1 \exp(-\theta_2 x^2) + \theta_3 \left[1 - \exp(-\theta_2 x^2)\right] \Phi(-x/\theta_4),
$$


where $\Phi(\cdot)$ is the normal cumulative distribution function (equivalent to the inverse probit function). Assume the following prior distribution for the parameters:
$$
\log \theta_1, \log \theta_3, \log \theta_4 \sim^\text{iid } \mathcal{N}(0, 10^2)
\\
\theta_2 \sim U(0, 1).
$$

1. **Obtain the posterior samples** of the four parameters ($\theta_1, \dots, \theta_4$):
   - Provide their mean and the 95% highest-density credible interval (for OpenBUGS, the default equi-tailed credible interval is allowed).
   - Use:
     - 100,000 samples with 10,000 burn-in for BUGS.
     - 10,000 samples with 1,000 tuning samples for PyMC.

2. **Find the predictive distribution** of the density of nanowires when the thickness is 1.5 nm.

![](https://blog.images.bornforthis.cn/docs-images/sha256/84/84f9f25209a6af032699552d43641d585555572b94a973cd443a9cfb97e215e5.png)

**Figure 1**: Scanning Electron Microscopy images showing nanowire density at different levels of polymer thickness (taken from Dasgupta, Weintraub, and Joseph (2011, *IIE Transactions*)).

::: code-tabs

@tab Code

```python 
# -*- coding: utf-8 -*-
# @Time    : 2024/12/8 21:53
# @Author  : AI悦创
# @FileName: Q3.py
# @Software: PyCharm
# @Blog    ：https://bornforthis.cn/
# code is far away from bugs with the god animal protecting
#    I love animals. They taste delicious.
import pymc as pm
import numpy as np
import pandas as pd
import arviz as az
from scipy.stats import norm

# 读取数据
data = pd.read_csv("https://github.com/AndersonHJB/AndersonHJB.github.io/releases/download/V0.05/05-nanowire-2.csv")
x = data['x'].values
y = data['y'].values

# 构建概率模型
with pm.Model() as model:
    # 参数的先验分布
    theta1 = pm.Lognormal('theta1', mu=0, sigma=10)
    theta3 = pm.Lognormal('theta3', mu=0, sigma=10)
    theta4 = pm.Lognormal('theta4', mu=0, sigma=10)
    theta2 = pm.Uniform('theta2', lower=0, upper=1)

    # 使用 erfc 来实现Φ(-x/θ4)
    # Φ(-x/θ4) = 0.5 * erfc(x/(θ4*sqrt(2)))
    norm_cdf = 0.5 * pm.math.erfc(x / (theta4 * pm.math.sqrt(2)))

    # 定义均值函数
    mu = (
        theta1 * pm.math.exp(-theta2 * x**2) +
        theta3 * (1 - pm.math.exp(-theta2 * x**2)) * norm_cdf
    )

    # 观测数据的似然函数
    y_obs = pm.Poisson('y_obs', mu=mu, observed=y)

    # 采样设置：10,000个后验样本，1,000个调整样本
    trace = pm.sample(10000, tune=1000, target_accept=0.95, random_seed=42)

# 后验样本的统计摘要
summary = az.summary(trace, hdi_prob=0.95)
print(summary)

# 使用后验分布预测厚度为 1.5 nm 时的纳米线密度
x_new = 1.5
theta1_samples = trace.posterior['theta1'].values.flatten()
theta3_samples = trace.posterior['theta3'].values.flatten()
theta4_samples = trace.posterior['theta4'].values.flatten()
theta2_samples = trace.posterior['theta2'].values.flatten()

# 计算新 x 值下的 Φ(-x_new/θ4)
norm_cdf_new = norm.cdf(-x_new / theta4_samples)

mu_new = (
    theta1_samples * np.exp(-theta2_samples * x_new**2) +
    theta3_samples * (1 - np.exp(-theta2_samples * x_new**2)) * norm_cdf_new
)

# 预测分布
predictive_samples = np.random.poisson(mu_new)
predictive_mean = np.mean(predictive_samples)
predictive_hdi = az.hdi(predictive_samples, hdi_prob=0.95)

# 输出预测结果
print(f"Predictive mean: {predictive_mean}")
print(f"95% HDI: {predictive_hdi}")
```

:::









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
