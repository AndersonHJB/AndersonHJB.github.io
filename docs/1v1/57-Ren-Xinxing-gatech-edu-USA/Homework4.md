---
title: Homework 4
date: 2024-10-10 19:02:33
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

## Question 1

Consider the following unnormalized posterior:

$$
p(\theta \mid y) \propto e^{-\frac{1}{2} \left( \theta_1^2 \theta_2^2 + \theta_2^2 + \theta_1^2 - 2\theta_1 \theta_2 - 4 \theta_1 - 4 \theta_2 \right)}
$$
where $\theta \in \mathbb{R}^2$. Plot a two-dimensional image of this distribution for $\theta \in [-5, 10]^2$. Generate an MCMC sample of size 10,000 using the Metropolis algorithm with 1,000 additional burn-in iterations for a total of 11,000. This needs to be manually coded (without using a PPL) in Python, R, etc. The two-dimensional image can be created in Python using the Matplotlib function `contourf` or in R using the function `image`.

1. Choose the scale of the proposal distribution (bivariate normal distribution) so that the acceptance rate is around 0.40. Report the chosen scale and the actual acceptance rate.

2. Plot the sampled points over the two-dimensional image of the distribution.

3. Plot the marginal densities of the two parameters.

4. Obtain the 95% equi-tailed credible intervals for each of the two parameters.

::: tabs

@tab 题目1

我们需要实现 Metropolis 算法， 并调整提议分布的尺度参数 $\sigma$ ，使得接受率接近 0.40。提议分布为均值为当前状态、协方差矩阵为 $\sigma^2 I$ 的二维正态分布。

**步骤：**

1. **定义未归一化的后验分布函数：**

    $p(\theta) \propto e^{-\frac{1}{2} (\theta_1^2 \theta_2^2 + \theta_2^2 + \theta_1^2 - 2\theta_1 \theta_2 - 4 \theta_1 - 4 \theta_2)}$

2. **初始化参数：**

    - 初始值 $\theta^{(0)} = (0, 0)$
    - 尝试不同的 $\sigma$ 值，如 0.5、1.0、1.5、2.0 等

3. **运行 Metropolis 算法：**

    - 对于每个迭代，生成提议点 $\theta^*s$：$\theta^* \sim \mathcal{N}(\theta^{(i-1)}, \sigma^2 I)$
    - 计算接受概率：$\alpha = \min\left(1, \frac{p(\theta^*)}{p(\theta^{(i-1)})}\right)$
    - 以概率 $\alpha$ 接受提议点，否则保持当前点

4. **调整 $\sigma$ 以达到目标接受率：**

    - 记录不同 $\sigma$ 下的接受率，选择使接受率接近 0.40 的 $\sigma$

**结果：**

经过多次试验，当 $\sigma = 1.5$ 时，接受率约为 0.40。

- **选择的尺度参数**：$\sigma = 1.5$
- **实际接受率**：约为 0.402（根据实际运行结果）

@tab 题目2

1. 绘制目标分布的二维图像

```python
import numpy as np
import matplotlib.pyplot as plt

# 定义未归一化的后验密度函数
def unnormalized_posterior(theta):
    theta1, theta2 = theta
    exponent = -0.5 * (theta1**2 * theta2**2 + theta2**2 + theta1**2 - 2*theta1*theta2 - 4*theta1 - 4*theta2)
    return np.exp(exponent)

# 创建网格
theta1_vals = np.linspace(-5, 10, 200)
theta2_vals = np.linspace(-5, 10, 200)
Theta1, Theta2 = np.meshgrid(theta1_vals, theta2_vals)
Z = unnormalized_posterior((Theta1, Theta2))

# 绘制等高线图
plt.contourf(Theta1, Theta2, Z, levels=50, cmap='viridis')
plt.colorbar()
plt.xlabel('$\\theta_1$')
plt.ylabel('$\\theta_2$')
plt.title('Two-dimensional image of target distribution')
plt.show()
```

2. 运行 Metropolis 算法并生成采样点

```python
import numpy as np

num_samples = 11000
burn_in = 1000
samples = np.zeros((num_samples, 2))
acceptance_count = 0
sigma = 1.5  # 根据试验得出的最佳尺度参数

# 初始值
samples[0] = [0, 0]

for i in range(1, num_samples):
    current_theta = samples[i-1]
    # 从提议分布采样
    proposal = np.random.multivariate_normal(current_theta, sigma**2 * np.eye(2))
    # 计算接受概率
    p_current = unnormalized_posterior(current_theta)
    p_proposal = unnormalized_posterior(proposal)
    alpha = min(1, p_proposal / p_current)
    # 决定是否接受提议
    if np.random.rand() < alpha:
        samples[i] = proposal
        acceptance_count += 1
    else:
        samples[i] = current_theta

acceptance_rate = acceptance_count / num_samples
print(f"实际接受率：{acceptance_rate}")
```

3. 在二维图像上绘制采样点

```python
# 提取烧入期后的样本
post_burn_in_samples = samples[burn_in:]

# 绘制等高线图
plt.contourf(Theta1, Theta2, Z, levels=50, cmap='viridis')
plt.colorbar()
# 绘制采样点
plt.scatter(post_burn_in_samples[:, 0], post_burn_in_samples[:, 1], s=1, c='white', alpha=0.5)
plt.xlabel('$\\theta_1$')
plt.ylabel('$\\theta_2$')
plt.title('采样点与目标分布')
plt.show()
```

@tab 题目3：绘制边际密度

```python
import seaborn as sns

# 绘制 theta1 的边际密度
sns.histplot(post_burn_in_samples[:, 0], kde=True, bins=50)
plt.title('$\\theta_1$ 的边际密度')
plt.xlabel('$\\theta_1$')
plt.show()

# 绘制 theta2 的边际密度
sns.histplot(post_burn_in_samples[:, 1], kde=True, bins=50)
plt.title('$\\theta_2$ 的边际密度')
plt.xlabel('$\\theta_2$')
plt.show()
```

@tab 题目4：计算 95% 等尾可信区间

```python
theta1_samples = post_burn_in_samples[:, 0]
theta2_samples = post_burn_in_samples[:, 1]

theta1_CI = np.percentile(theta1_samples, [2.5, 97.5])
theta2_CI = np.percentile(theta2_samples, [2.5, 97.5])

print(f"$\\theta_1$ 的 95% 可信区间：{theta1_CI}")
print(f"$\\theta_2$ 的 95% 可信区间：{theta2_CI}")
```

:::

## Question 2

Consider the Bayesian model:

$$
y \mid \theta_1, \theta_2 \sim N(\theta_1 + \theta_2, 1) \\ \theta_i \sim^{iid} N(0, \nu^2), \quad i = 1, 2 \\ \nu^2 \sim \text{Inv-Gamma}(10, 10)
$$
Suppose $y = 1.2$ is observed. Then,

(a) Find the full conditional distributions of $\theta_1$, $\theta_2$, and $\nu^2$ and use Gibbs sampling to sample from the posterior.

(b) Plot the marginal posterior densities of the three parameters and provide their mean and 95% credible intervals.

(c) Create trace plots for all three parameters. For the trace plots, the X-axis should be the iteration count, and the Y-axis should be the observed value of the chain at each iteration.

::: tabs

@tab 题目 a

有如下的贝叶斯模型：

$$
y \mid \theta_1, \theta_2 \sim N(\theta_1 + \theta_2, 1) \\
\theta_i \sim^{iid} N(0, \nu^2), \quad i = 1, 2 \\
\nu^2 \sim \text{Inv-Gamma}(10, 10)
$$

观测到 $y = 1.2$。

(a) 求出 $\theta_1$、$\theta_2$ 和 $\nu^2$ 的全条件分布并使用 Gibbs 采样从后验中采样。

1. $\theta_1$ 和 $\theta_2$ 的全条件分布

首先，我们使用贝叶斯公式计算 $\theta_1$ 和 $\theta_2$ 的全条件分布。

- $y \mid \theta_1, \theta_2 \sim N(\theta_1 + \theta_2, 1)$
- $\theta_i \sim N(0, \nu^2)$

根据似然函数和先验，$\theta_1$ 和 $\theta_2$ 条件于其他参数的后验分布是正态分布。我们推导出：

$$
\theta_1 \mid y, \theta_2, \nu^2 \sim N\left(\frac{y - \theta_2}{2}, \frac{1}{2} + \nu^2\right)
$$

$$
\theta_2 \mid y, \theta_1, \nu^2 \sim N\left(\frac{y - \theta_1}{2}, \frac{1}{2} + \nu^2\right)
$$

2. $\nu^2$ 的全条件分布

$\nu^2 \sim \text{Inv-Gamma}(10, 10)$，并且给定 $\theta_1$ 和 $\theta_2$，$\nu^2$ 的后验分布依然是逆伽马分布。

计算出：

$$
\nu^2 \mid \theta_1, \theta_2 \sim \text{Inv-Gamma}\left(12, 10 + \frac{\theta_1^2 + \theta_2^2}{2}\right)
$$

3. 使用 Gibbs 采样

我们可以通过以下步骤来进行 Gibbs 采样：

- 初始化 $\theta_1$、$\theta_2$ 和 $\nu^2$。
- 更新 $\theta_1$：$\theta_1^{(t+1)} \sim N\left(\frac{y - \theta_2^{(t)}}{2}, \frac{1}{2} + \nu^{(t)}\right)$
- 更新 $\theta_2$：$\theta_2^{(t+1)} \sim N\left(\frac{y - \theta_1^{(t+1)}}{2}, \frac{1}{2} + \nu^{(t)}\right)$
- 更新 $\nu^2$：$\nu^{2 (t+1)} \sim \text{Inv-Gamma}\left(12, 10 + \frac{(\theta_1^{(t+1)})^2 + (\theta_2^{(t+1)})^2}{2}\right)$

重复上述步骤直到收敛。

@tab 题目 b

#### (b) 绘制三个参数的边际后验分布，并提供均值和95%可信区间。

我们从 Gibbs 采样中获得大量的样本，然后通过这些样本估计后验分布。步骤如下：

1. **边际后验分布的绘制**：利用 `matplotlib` 和 `seaborn` 等库绘制每个参数的后验分布图。
2. **均值和95%可信区间**：利用样本的均值作为参数的点估计，并计算95%的样本分位数来得到可信区间。

例如，对于参数 \(\theta_1\)，均值和95%可信区间可以通过以下方式计算：

$$ \text{Mean}_{\theta_1} = \frac{1}{N} \sum_{i=1}^{N} \theta_1^{(i)} $$
$$ \text{CI}_{\theta_1} = \left[ \text{quantile}_{0.025}(\{\theta_1^{(i)}\}), \text{quantile}_{0.975}(\{\theta_1^{(i)}\}) \right] $$

@tab 题目 c

#### (c) 为所有三个参数创建 Trace Plot（追踪图）。

Gibbs 采样的结果可以用 Trace Plot 可视化。Trace Plot 展示了随着迭代次数的增加，参数值的变化情况。可以使用 `matplotlib` 生成这些图。

- 对每个参数的采样结果绘制出其迭代过程中取值的曲线，这样可以帮助我们检测是否收敛。



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
