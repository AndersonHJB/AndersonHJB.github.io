---
title: MIDTERM EXAM
date: 2024-10-19 10:32:34
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

ISyE6420

Fall 2024

Released October 18, 6:00 PM – due October 20, 6:00 PM. This exam is not proctored and not time limited except the due date. Late submissions will not be accepted.

Use of all course materials, including the class Github site, the textbook, and any personal notes are allowed. Internet search using exam-related keywords is not allowed during the exam period, nor is any communication with other students relating to the exam. Public Ed Discussion posts about the exam questions are not permitted. If you need any clarification on the questions, please use the private posting function so that your post is only visible to the instructors.

Discussing the exam questions with anyone outside of the course staff and/or posting any portion of the exam to non-GT sites are considered serious violations of the Georgia Tech honor code. AI tools, like ChatGPT/Copilot and other similar ones, are also not allowed.

Please read and sign (or e-sign) the following honor pledge and submit a copy along with your answers.

I pledge on my honor that I have completed the exam on my own and I have not used any unauthorized materials or taken anyone’s help for completing this exam.

**Fall 2024 Midterm Exam Problem 1.** Consider the following unnormalized posterior:
$$
p(\theta | y) \propto \theta_1 e^{-\theta_1 - (\theta_2 - 1)^2 (1 + \theta_1)}
$$


where $\theta_1 \in (0, \infty)$ and $\theta_2 \in \mathbb{R}$. Plot a two-dimensional image of this distribution for $\theta \in [0, 5] \times [-2, 3]$. Generate an MCMC sample of size 10,000 using the independent chain Metropolis-Hastings algorithm with 1,000 additional burn-in iterations for a total of 11,000. Use a uniform distribution in $[0, 5] \times [-2, 3]$ as the proposal. This algorithm needs to be manually coded (without using a PPL) in Python, R, etc. The two-dimensional image can be created in Python using the Matplotlib function `contourf` or in R using the function `image`.

1. Report the acceptance rate of the algorithm.

2. Plot the sampled points over the two-dimensional image of the distribution.

3. Plot the marginal densities of the two parameters.

4. Obtain the 90% HPD credible intervals for each of the two parameters.

::: tabs

@tab Q1

1. 绘制二维分布图像

```python
import numpy as np
import matplotlib.pyplot as plt

# 定义 theta1 和 theta2 的范围
theta1_vals = np.linspace(0.01, 5, 100)  # 避免 theta1 为 0
theta2_vals = np.linspace(-2, 3, 100)
Theta1, Theta2 = np.meshgrid(theta1_vals, theta2_vals)

# 计算非标准化的后验密度
def posterior(theta1, theta2):
    return theta1 * np.exp(-theta1 - ((theta2 - 1)**2) * (1 + theta1))

Z = posterior(Theta1, Theta2)

# 绘制二维密度图像
plt.figure(figsize=(8, 6))
plt.contourf(Theta1, Theta2, Z, levels=50, cmap='viridis')
plt.xlabel(r'$\theta_1$')
plt.ylabel(r'$\theta_2$')
plt.title('Posterior Distribution Contour Plot')
plt.colorbar(label='Density')
plt.show()
```

2. 实现独立链的 Metropolis-Hastings 算法

```python
# 定义提议分布：在 [0,5] x [-2,3] 上的均匀分布
def proposal_sample():
    theta1 = np.random.uniform(0, 5)
    theta2 = np.random.uniform(-2, 3)
    return np.array([theta1, theta2])

# 定义后验密度函数（非标准化）
def posterior_density(theta):
    theta1, theta2 = theta
    if theta1 <= 0:
        return 0
    return theta1 * np.exp(-theta1 - ((theta2 - 1)**2) * (1 + theta1))

# 设置初始值
np.random.seed(0)  # 为了可重复性
num_samples = 11000
samples = np.zeros((num_samples, 2))
accept_count = 0

# 初始化 theta
theta_current = proposal_sample()
posterior_current = posterior_density(theta_current)

# MCMC 采样
for t in range(num_samples):
    theta_proposal = proposal_sample()
    posterior_proposal = posterior_density(theta_proposal)
    
    # 计算接受概率
    if posterior_current == 0:
        alpha = 1
    else:
        alpha = min(1, posterior_proposal / posterior_current)
    
    # 接受或拒绝
    if np.random.rand() < alpha:
        theta_current = theta_proposal
        posterior_current = posterior_proposal
        accept_count += 1
    
    samples[t, :] = theta_current

accept_rate = accept_count / num_samples
print(f'接受率：{accept_rate * 100:.2f}%')
```

@tab Q2:绘制采样点与二维分布图像

```python
# 绘制二维密度图像
plt.figure(figsize=(8, 6))
plt.contourf(Theta1, Theta2, Z, levels=50, cmap='viridis')
plt.xlabel(r'$\theta_1$')
plt.ylabel(r'$\theta_2$')
plt.title('Posterior Distribution with MCMC Samples')
plt.colorbar(label='Density')

# 绘制采样点（去除烧入期的前1000个样本）
burn_in = 1000
plt.scatter(samples[burn_in:, 0], samples[burn_in:, 1], s=10, c='white', alpha=0.5)
plt.show()
```

@tab Q3:绘制参数的边缘密度

```python
import seaborn as sns

# 提取烧入期后的样本
theta1_samples = samples[burn_in:, 0]
theta2_samples = samples[burn_in:, 1]

# 绘制 theta1 的边缘密度
plt.figure(figsize=(8, 4))
sns.kdeplot(theta1_samples, shade=True)
plt.xlabel(r'$\theta_1$')
plt.title(r'Marginal Density of $\theta_1$')
plt.show()

# 绘制 theta2 的边缘密度
plt.figure(figsize=(8, 4))
sns.kdeplot(theta2_samples, shade=True)
plt.xlabel(r'$\theta_2$')
plt.title(r'Marginal Density of $\theta_2$')
plt.show()
```

@tab Q4: 计算90%的HPD可信区间

```python
import numpy as np

def hpd_interval(samples, alpha=0.90):
    """
    计算给定样本的HPD区间。

    参数：
    - samples: 一维numpy数组，MCMC采样得到的样本
    - alpha: HPD区间的置信水平，默认0.90

    返回：
    - hpd_min: HPD区间的下限
    - hpd_max: HPD区间的上限
    """
    sorted_samples = np.sort(samples)
    n = len(sorted_samples)
    # 需要包含的样本数量
    n_samples = int(np.ceil(alpha * n))
    # 所有可能的区间数量
    n_intervals = n - n_samples + 1
    # 初始化最小宽度和对应的区间索引
    min_width = np.inf
    min_idx = 0
    # 遍历所有可能的区间，寻找最小宽度
    for i in range(n_intervals):
        width = sorted_samples[i + n_samples - 1] - sorted_samples[i]
        if width < min_width:
            min_width = width
            min_idx = i
    # 获取HPD区间的下限和上限
    hpd_min = sorted_samples[min_idx]
    hpd_max = sorted_samples[min_idx + n_samples - 1]
    return hpd_min, hpd_max

# 使用修正后的函数计算HPD区间
theta1_hpd = hpd_interval(theta1_samples, alpha=0.90)
theta2_hpd = hpd_interval(theta2_samples, alpha=0.90)

print(f'θ1的90% HPD区间：{theta1_hpd}')
print(f'θ2的90% HPD区间：{theta2_hpd}')
```



:::

**Fall 2024 Midterm Exam Problem 2.** Consider the same unnormalized posterior density in problem 1. Then,

1. Find the full conditional distributions of $\theta_1$ and $\theta_2$, and use Gibbs sampling to sample from the posterior. The Gibbs sampling algorithm needs to be manually coded (without using a PPL) in Python, R, etc. As in problem 1, obtain 10,000 samples with 1,000 additional burn-in iterations.

2. Plot the marginal posterior densities of the two parameters and provide their mean and 95% credible intervals.

3. Create trace plots for the two parameters. For the trace plots, the X-axis should be the iteration count, and the Y-axis should be the observed value of the chain at each iteration.

```python
import numpy as np
import matplotlib.pyplot as plt
from scipy.stats import gamma, norm

# 设置随机种子
np.random.seed(0)

# 初始化参数
num_iter = 11000
burn_in = 1000

theta1 = np.zeros(num_iter)
theta2 = np.zeros(num_iter)

# 初始值
theta1[0] = 1.0
theta2[0] = 1.0

# Gibbs 采样过程
for t in range(1, num_iter):
    # 更新 theta1
    rate = 1 + (theta2[t-1] - 1)**2
    theta1[t] = gamma.rvs(a=2, scale=1/rate)
    
    # 更新 theta2
    var = 1 / (1 + theta1[t])
    theta2[t] = norm.rvs(loc=1, scale=np.sqrt(var))

# 舍弃燃烧期
theta1_samples = theta1[burn_in:]
theta2_samples = theta2[burn_in:]

# 计算均值和 95% 可信区间
theta1_mean = np.mean(theta1_samples)
theta1_ci = np.percentile(theta1_samples, [2.5, 97.5])

theta2_mean = np.mean(theta2_samples)
theta2_ci = np.percentile(theta2_samples, [2.5, 97.5])

print("θ₁ 的后验均值：", theta1_mean)
print("θ₁ 的 95% 可信区间：", theta1_ci)
print("θ₂ 的后验均值：", theta2_mean)
print("θ₂ 的 95% 可信区间：", theta2_ci)

# 绘制边际后验密度
plt.figure(figsize=(12, 5))

plt.subplot(1, 2, 1)
plt.hist(theta1_samples, bins=50, density=True, color='skyblue', alpha=0.7)
plt.title('θ₁ 的边际后验密度')
plt.xlabel('θ₁')
plt.ylabel('密度')

plt.subplot(1, 2, 2)
plt.hist(theta2_samples, bins=50, density=True, color='salmon', alpha=0.7)
plt.title('θ₂ 的边际后验密度')
plt.xlabel('θ₂')
plt.ylabel('密度')

plt.tight_layout()
plt.show()

# 绘制追踪图
plt.figure(figsize=(12, 5))

plt.subplot(2, 1, 1)
plt.plot(theta1, color='skyblue')
plt.title('θ₁ 的追踪图')
plt.xlabel('迭代次数')
plt.ylabel('θ₁')

plt.subplot(2, 1, 2)
plt.plot(theta2, color='salmon')
plt.title('θ₂ 的追踪图')
plt.xlabel('迭代次数')
plt.ylabel('θ₂')

plt.tight_layout()
plt.show()
```





**Fall 2024 Midterm Exam Problem 3.** Suppose two candidates (A and B) are standing in an election representing their political parties. From the past elections and surveys, it is known that the supporters for each political party are roughly equal with a margin of error of ±2%. A new survey of 1,000 people has been conducted just before the election and found that 515 people favor candidate A and 485 people favor candidate B.

1. Assume a beta distribution for the prior probability of support for each candidate. Obtain approximate estimate of the parameters of the beta distribution by equating ±2% to 95% confidence intervals.

2. Find the posterior distribution of the probability that the candidate B will win. Compute the posterior mean.

3. Now suppose that we also have information about the gender among the people surveyed. The data is shown below.

|      | Male | Female |
| ---- | ---- | ------ |
| A    | 350  | 165    |
| B    | 250  | 235    |

Assume that male and female are equal in number among the voters who are likely to cast votes in the election. Then, find the posterior distribution of the probability that the candidate B will win. Compute the posterior mean.

::: tabs

@tab Question 1

假设支持率服从 Beta 分布，参数为 $\alpha$ 和 $\beta$。已知支持率约为 50%，误差范围为 ±2%，即在 95% 置信区间内支持率在 48% 到 52% 之间。

Beta 分布的均值为：$\mu = \frac{\alpha}{\alpha + \beta}$

由于支持率约为 50%，所以 $\mu = 0.5$，因此 $\alpha = \beta$。

Beta 分布的方差为：$\sigma^2 = \frac{\alpha \beta}{(\alpha + \beta)^2 (\alpha + \beta + 1)}$

当 $\alpha = \beta$ 时，方差简化为：$\sigma^2 = \frac{1}{4(2\alpha + 1)}$

已知 95% 置信区间宽度为 4%，对应于正态分布中约 1.96 个标准差，所以：$2 \times 1.96 \sigma = 0.04$

解得：

$$
\sigma = \frac{0.04}{3.92} \approx 0.0102
$$


将方差代入公式：

$$
\frac{1}{4(2\alpha + 1)} = \sigma^2
$$


解得：

$$
\alpha \approx 1200
$$
因此，Beta 分布的参数为 $\alpha = \beta = 1200$。



@tab Question 2

根据新的调查数据，候选人 B 得到 485 票，共有 1000 人参与调查。

先验分布为 Beta(1200, 1200)。

后验分布参数为：
$$
$\alpha_{\text{后}} = \alpha_{\text{先}} + k = 1200 + 485 = 1685$ \\

\beta_{\text{后}} = \beta_{\text{先}} + n - k = 1200 + 515 = 1715
$$


因此，后验分布为 Beta(1685, 1715)。

后验均值为：

$$
\mu_{\text{后}} = \frac{\alpha_{\text{后}}}{\alpha_{\text{后}} + \beta_{\text{后}}} = \frac{1685}{3400} \approx 0.4956
$$


所以，候选人 B 获胜的后验概率均值约为 **49.56%**。

@tab Question 3

根据性别数据：

|      | 男性 | 女性 |
| ---- | ---- | ---- |
| A    | 350  | 165  |
| B    | 250  | 235  |

假设男性和女性选民人数相等，先验分布分别为：

- 男性先验：Beta(600, 600)
- 女性先验：Beta(600, 600)

**男性后验分布：**

$\alpha_{\text{男性后}} = 600 + 250 = 850$

$\beta_{\text{男性后}} = 600 + 350 = 950$

男性后验均值：

$\mu_{\text{男性}} = \frac{850}{850 + 950} \approx 0.4722$

**女性后验分布：**

$\alpha_{\text{女性后}} = 600 + 235 = 835$

$\beta_{\text{女性后}} = 600 + 165 = 765$

女性后验均值：$\mu_{\text{女性}} = \frac{835}{835 + 765} \approx 0.5219$


**综合后验均值：**

由于男性和女性选民人数相等，总后验均值为两者均值：$\mu_{\text{总}} = \frac{\mu_{\text{男性}} + \mu_{\text{女性}}}{2} \approx \frac{0.4722 + 0.5219}{2} \approx 0.4970$

因此，候选人 B 获胜的后验概率均值约为 **49.70%**。

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
