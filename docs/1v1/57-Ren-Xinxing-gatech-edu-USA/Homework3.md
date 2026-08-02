---
title: Homework 3 ISyE 6420：Fall 2024
date: 2024-09-27 15:05:51
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

Three devices are monitored until failure. The observed lifetimes are 1.1, 2.2, and 0.4 years. If the lifetimes are modeled as exponential distribution with rate $\lambda$,

$$
T_i \sim \text{Exp}(\lambda), \quad f(t \mid \lambda) = \lambda e^{-\lambda t}, \quad t > 0, \lambda > 0
$$


Assume an exponential prior on $\lambda$:

$\lambda \sim \text{Exp}(2), \quad \pi(\lambda) = 2e^{-2\lambda}, \quad \lambda > 0$

(a) Find the posterior distribution of $\lambda$. 

(b) Find the Bayes estimator for $\lambda$. 

(c) Find the MAP estimator for $\lambda$. 

(d) Numerically find both the equi-tailed and highest posterior density credible sets for $\lambda$, at the 95% credibility level.  

(e) Find the posterior probability of hypothesis $H_0 : \lambda \leq 1/2$.

:::: details

::: tabs

@tab a 求 $\lambda$ 的后验分布

根据题意，设备的寿命 $T_i \sim \text{Exp}(\lambda)$，且 $\lambda$ 的先验分布是指数分布 $\text{Exp}(2)$。

1. **似然函数**：寿命 $T_1 = 1.1$, $T_2 = 2.2$, $T_3 = 0.4$ 为观测值，对应的似然函数为：$L(\lambda) = \prod_{i=1}^{3} f(T_i \mid \lambda) = \lambda^3 e^{-\lambda (1.1 + 2.2 + 0.4)} = \lambda^3 e^{-\lambda \cdot 3.7}$

2. **先验分布**：$\lambda$ 的先验分布为 $\lambda \sim \text{Exp}(2)$，即先验分布密度为：$\pi(\lambda) = 2e^{-2\lambda}$

3. **后验分布**：由贝叶斯定理，后验分布与似然函数和先验分布成正比：$\pi(\lambda \mid T_1, T_2, T_3) \propto L(\lambda) \pi(\lambda) = \lambda^3 e^{-\lambda \cdot 3.7} \cdot 2e^{-2\lambda} = 2\lambda^3 e^{-\lambda \cdot 5.7}$

因此，$\lambda$ 的后验分布为 Gamma 分布：$\lambda \mid T_1, T_2, T_3 \sim \text{Gamma}(4, 5.7)$

其中，Gamma 分布的形式为 $\text{Gamma}(k, \theta)$，其密度函数为：$f(\lambda \mid k, \theta) = \frac{\lambda^{k-1} e^{-\lambda / \theta}}{\theta^k \Gamma(k)}$

@tab (b) 贝叶斯估计量（Bayes Estimator）

贝叶斯估计量在平方损失函数下是后验分布的期望。对于 $\lambda \mid T_1, T_2, T_3 \sim \text{Gamma}(4, 5.7)$，Gamma 分布的期望为：

$$
E[\lambda \mid T_1, T_2, T_3] = \frac{k}{\theta} = \frac{4}{5.7}
$$
所以，贝叶斯估计量为：$\hat{\lambda}_{\text{Bayes}} = \frac{4}{5.7} \approx 0.7018$



@tab (c) 最大后验估计量（MAP Estimator）

MAP 估计量是后验分布的众数，即找到 $\lambda$ 使得后验分布 $\pi(\lambda \mid T_1, T_2, T_3)$ 最大化。对于 Gamma 分布 $\text{Gamma}(k, \theta)$，众数为：$\hat{\lambda}_{\text{MAP}} = \frac{k - 1}{\theta} = \frac{4 - 1}{5.7} = \frac{3}{5.7} \approx 0.5263$



@tab (d) 95% 等尾和最高后验密度置信区间

1. **等尾置信区间**：等尾置信区间是使得后验分布两侧各截去 $2.5\%$ 的区间。对 $\lambda \mid T_1, T_2, T_3 \sim \text{Gamma}(4, 5.7)$，可以通过查找 Gamma 分布的累积分布函数 (CDF) 来找到两个截点 $\lambda_L$ 和 $\lambda_U$，满足：$P(\lambda_L \leq \lambda \leq \lambda_U \mid T_1, T_2, T_3) = 0.95$

    数值计算可以使用 Python 或 R 进行。比如在 Python 中可以用 `scipy.stats.gamma.ppf` 求得置信区间。

2. **最高后验密度（HPD）置信区间**：HPD 区间是概率密度最高的区间，即在给定置信水平下包含最大后验概率密度的区间。HPD 区间的计算比较复杂，可以通过数值方法来进行。

@tab (e) 后验概率 $P(H_0: \lambda \leq 1/2)$

后验概率 $P(H_0: \lambda \leq 1/2)$ 可以通过计算 $\lambda \leq 0.5$ 的后验累积概率来求得：

$$
P(\lambda \leq 1/2 \mid T_1, T_2, T_3) = \int_0^{1/2} f(\lambda \mid 4, 5.7) d\lambda
$$


同样可以通过数值方法来求解，比如使用 Python 的 `scipy.stats.gamma.cdf` 函数：

```python
from scipy.stats import gamma
P_lambda_leq_half = gamma.cdf(0.5, a=4, scale=1/5.7)
```

这样可以得到具体的后验概率。

:::

::::









## Question 2

Let

$$
y_i \mid \theta_i \sim^{ind.} \text{Poisson}(\theta_i)
$$

$$
\theta_i \sim^{iid} \text{Gamma}(2, b)
$$


for $i = 1, \dots, n$, where $b$ is unknown. Find the empirical Bayes estimator of $\theta_i, i = 1, \dots, n$. (Note: If $X \sim \text{Gamma}(a, b)$, then its pdf is

$$
p(x) = \frac{b^a}{\Gamma(a)} x^{a-1} e^{-bx} \text{ for } x \geq 0, a, b > 0.
$$
::: details Soultion

要找到 $\theta_i$ 的经验贝叶斯估计，需要以下步骤：

**1. 计算后验分布：**

给定似然函数和先验分布：

- **似然函数：**
  $$
  P(y_i \mid \theta_i) = \frac{\theta_i^{y_i} e^{-\theta_i}}{y_i!}
  $$

- **先验分布：**
  $$
  p(\theta_i) = \frac{b^2}{\Gamma(2)} \theta_i^{2-1} e^{-b\theta_i} = b^2 \theta_i e^{-b\theta_i}
  $$

因此，后验分布为：

$$
p(\theta_i \mid y_i) \propto P(y_i \mid \theta_i) p(\theta_i) = \theta_i^{y_i} e^{-\theta_i} \cdot \theta_i e^{-b\theta_i} = \theta_i^{y_i+1} e^{-(b+1)\theta_i}
$$

这表明后验分布是一个新的 Gamma 分布：

$$
\theta_i \mid y_i \sim \text{Gamma}(y_i + 2, b + 1)
$$

**2. 计算后验均值：**

后验均值（即贝叶斯估计）为：

$$
E[\theta_i \mid y_i] = \frac{y_i + 2}{b + 1}
$$

**3. 估计超参数 \( b \)：**

为了应用经验贝叶斯方法，我们需要估计未知的超参数 \( b \)。首先，计算边缘似然函数：

$$
P(y_i) = \int_0^\infty P(y_i \mid \theta_i) p(\theta_i) d\theta_i = \frac{b^2 (y_i + 1)!}{(b + 1)^{y_i + 2} y_i!}
$$

因此，样本的对数似然函数为：

$$
\log L(b) = 2n \log b - (S + 2n) \log(b + 1) + \sum_{i=1}^n \log(y_i + 1)
$$

其中 $S = \sum_{i=1}^n y_i$。

对 \( b \) 求导并令导数为零，得到：

$$
\frac{d}{db} \log L(b) = \frac{2n}{b} - \frac{S + 2n}{b + 1} = 0
$$

解方程得到 \( b \) 的估计值：

$$
\hat{b} = \frac{2n}{S}
$$

**4. 计算经验贝叶斯估计：**

将 $\hat{b}$ 代入后验均值，得到经验贝叶斯估计：

$$
\hat{\theta}_i = E[\theta_i \mid y_i, \hat{b}] = \frac{y_i + 2}{\hat{b} + 1} = (y_i + 2) \frac{S}{2n + S}
$$

**最终答案：**

经验贝叶斯估计为：

$$
\hat{\theta}_i = (y_i + 2) \cdot \frac{\sum_{j=1}^n y_j}{2n + \sum_{j=1}^n y_j}
$$
:::



## Question 3

Suppose $y \mid \beta \sim \text{Gamma}(\alpha, \beta)$, where $\alpha$ is known.

(a) Find the Jeffreys prior for $\beta$.

(b) Using the Jeffreys prior from Part 1, derive the posterior distribution $p(\beta \mid y_1, \dots, y_n)$ for $n$ i.i.d. observations $y_1, \dots, y_n$.

::: details Solution

**(a) 求 Jeffreys 先验分布：**

给定条件 $y \mid \beta \sim \text{Gamma}(\alpha, \beta)$，其中 $\alpha$ 已知。

首先，写出似然函数：$f(y \mid \beta) = \frac{\beta^\alpha}{\Gamma(\alpha)} y^{\alpha -1} e^{-\beta y}$

计算对数似然函数：$\ln f(y \mid \beta) = \alpha \ln \beta - \ln \Gamma(\alpha) + (\alpha -1) \ln y - \beta y$

计算关于 $\beta$ 的一阶导数：$\frac{\partial}{\partial \beta} \ln f(y \mid \beta) = \frac{\alpha}{\beta} - y$

计算关于 $\beta$ 的二阶导数：$\frac{\partial^2}{\partial \beta^2} \ln f(y \mid \beta) = -\frac{\alpha}{\beta^2}$

Fisher 信息量为二阶导数的负期望值：$I(\beta) = -E\left[ \frac{\partial^2}{\partial \beta^2} \ln f(y \mid \beta) \right] = \frac{\alpha}{\beta^2}$

因此，Jeffreys 先验分布为：$\pi(\beta) \propto \sqrt{I(\beta)} = \sqrt{\frac{\alpha}{\beta^2}} \propto \frac{1}{\beta}$

**答案：** Jeffreys 先验分布为 $\pi(\beta) \propto \dfrac{1}{\beta}$。

---

**(b) 推导后验分布 $p(\beta \mid y_1, \dots, y_n)$：**

利用 Jeffreys 先验分布 $\pi(\beta) \propto \dfrac{1}{\beta}$，以及独立同分布的观测数据，似然函数为：
$$
L(\beta) = \prod_{i=1}^n f(y_i \mid \beta) = \left( \frac{\beta^\alpha}{\Gamma(\alpha)} \right)^n \prod_{i=1}^n y_i^{\alpha -1} e^{-\beta y_i}
$$


后验分布正比于先验分布与似然函数的乘积：
$$
p(\beta \mid y_1, \dots, y_n) \propto \pi(\beta) L(\beta)
$$

$$
\propto \frac{1}{\beta} \cdot \beta^{n\alpha} e^{-\beta \sum_{i=1}^n y_i} \\= \beta^{n\alpha -1} e^{-\beta \sum_{i=1}^n y_i}
$$


这对应于 Gamma 分布的形式，因此：
$$
\beta \mid y_1, \dots, y_n \sim \text{Gamma}\left(n\alpha, \sum_{i=1}^n y_i\right)
$$


**答案：** 后验分布为 $\beta \mid y_1, \dots, y_n \sim \text{Gamma}\left(n\alpha, \sum_{i=1}^n y_i\right)$。

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
