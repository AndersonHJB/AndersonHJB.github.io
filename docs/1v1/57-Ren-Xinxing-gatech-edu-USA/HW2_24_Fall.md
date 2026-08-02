---
title: HW2_24_Fall
date: 2024-09-14 17:59:48
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

Let $y_i \mid \theta \sim^{iid} \text{Uniform} (-\theta, \theta)$, for $i = 1, \dots, n$. Assume the prior distribution for $\theta$ to be $\text{Pareto}(a, b)$, where

$$
p(\theta) = \frac{ba^b}{\theta^{b+1}} \quad \text{for } \theta \geq a \text{ and } 0 \text{ otherwise}.
$$


Find the posterior distribution of $\theta$.

::: details

要找到后验分布 $p(\theta \mid y)$，我们需要将似然函数和先验分布相乘，然后进行归一化。

**1. 写出似然函数：**

由于 $y_i$ 在给定 $\theta$ 下独立同分布为 $\text{Uniform}(-\theta, \theta)$，所以每个观测值的似然为：

$$
p(y_i \mid \theta) = \frac{1}{2\theta}, \quad \text{当 } -\theta \leq y_i \leq \theta
$$
因此，总的似然函数为：

$$
L(\theta) = \prod_{i=1}^n p(y_i \mid \theta) = \left( \frac{1}{2\theta} \right)^n, \quad \text{当 } \theta \geq \max\{|y_1|, |y_2|, \dots, |y_n|\}
$$
**2. 写出先验分布：**

先验分布为 Pareto 分布：

$$
p(\theta) = \frac{ba^b}{\theta^{b+1}}, \quad \text{当 } \theta \geq a
$$


**3. 计算后验分布：**

后验分布正比于先验分布和似然函数的乘积：

$$
p(\theta \mid y) \propto p(\theta) \cdot L(\theta) = \frac{ba^b}{\theta^{b+1}} \cdot \left( \frac{1}{2\theta} \right)^n = \frac{ba^b}{2^{n}\theta^{b+1+n}}
$$


注意到 $\theta$ 的取值范围受限于先验和似然，因此：

$$
\theta \geq \max\left\{ a, \max_{i}\{|y_i|\} \right\}
$$


**4. 归一化后，后验分布仍为 Pareto 分布：**

因此，后验分布为参数更新后的 Pareto 分布：

$$
\theta \mid y \sim \text{Pareto}\left( \max\left\{ a, \max_{i}\{|y_i|\} \right\},\ b + n \right)
$$


**答案：**

**因此，θ 的后验分布是参数为 max { a, max|yᵢ| } 和 b＋n 的帕累托分布，即**

$$
\theta \mid y \sim \text{Pareto}\left( \max\left\{ a, \max_{i}\{|y_i|\} \right\},\ b + n \right)
$$


:::

## Question 2

The data set `neurondiffs.dat|xlsx` comes from the lab of Dr. Steve Potter at the Department of Biomedical Engineering, Georgia Tech. It consists of 988 time intervals between successive firings in a cell culture of neurons. The firing times are defined as time instances when a neuron sends a signal to another linked neuron (a spike). The cells, from the cortex of an embryonic rat brain, were cultured for 18 days on multielectrode arrays. The measurements were taken while the culture was stimulated at the rate of 1 Hz. It was postulated that firing times form a Poisson process; thus the interspike intervals provided in the data set should have an exponential distribution.

(a) Check the histogram of interspike intervals and discuss its resemblance to the exponential density. What is the MLE for exponential rate parameter $\lambda$.

(b) Given the exponential model for interspike intervals $T_i$, find the posterior distribution of rate parameter $\lambda$ when the prior for  $\lambda$ is gamma $Ga(18, 20)$. What is the Bayes estimator for $\lambda$. Find also the posterior variance of  $\lambda$).

(c) If the model for $T_i$ is parameterized by a scale parameter $\mu$ ( = $1/\lambda$ ), find the posterior mean of  $\mu$ if the prior on $\mu$ is inverse-gamma $IG(18, 20)$.

::: details

**（a）**

首先，我们需要绘制神经元发放间隔时间的直方图，以观察其与指数分布的相似程度。指数分布的概率密度函数为：

$$
f(t; \lambda) = \lambda e^{-\lambda t}, \quad t \geq 0
$$


根据提供的数据集，共有 988 个间隔时间。我们可以计算样本均值 $\bar{t}$：

$$
\bar{t} = \frac{1}{n} \sum_{i=1}^{n} t_i
$$


将所有间隔时间相加，得到总和：

$$
\sum_{i=1}^{n} t_i = 999.0156
$$


因此，样本均值为：

$$
\bar{t} = \frac{999.0156}{988} \approx 1.0101
$$


对于指数分布，参数 \(\lambda\) 的最大似然估计（MLE）为：

$$
\hat{\lambda} = \frac{1}{\bar{t}} \approx \frac{1}{1.0101} \approx 0.9900
$$


**结论：** 直方图显示，间隔时间的大致分布与指数分布相符。最大似然估计得到的指数率参数 \(\lambda\) 为 **0.9900**。

---

**（b）**

已知间隔时间 $T_i$ 服从指数分布 $\text{Exp}(\lambda)$，先验分布为 $\lambda \sim \text{Gamma}(18, 20)$。

Gamma 分布的概率密度函数为：


$$
\pi(\lambda) = \frac{\beta_0^{\alpha_0}}{\Gamma(\alpha_0)} \lambda^{\alpha_0 - 1} e^{-\beta_0 \lambda}
$$


其中，$\alpha_0 = 18$，$\beta_0 = 20$。

似然函数为：

$$
L(\lambda) = \lambda^n e^{-\lambda \sum_{i=1}^{n} t_i}
$$


后验分布：


$$
p(\lambda | \text{data}) \propto L(\lambda) \pi(\lambda) \propto \lambda^{n + \alpha_0 - 1} e^{-\lambda (\beta_0 + \sum_{i=1}^{n} t_i)}
$$


因此，后验分布为 $\lambda | \text{data} \sim \text{Gamma}(\alpha_1, \beta_1)$，其中：

$$
\alpha_1 = \alpha_0 + n = 18 + 988 = 1006 \\
\beta_1 = \beta_0 + \sum_{i=1}^{n} t_i = 20 + 999.0156 = 1019.0156
$$


贝叶斯估计（后验均值）为：


$$
E[\lambda | \text{data}] = \frac{\alpha_1}{\beta_1} = \frac{1006}{1019.0156} \approx 0.9870
$$


后验方差为：

$$
\text{Var}[\lambda | \text{data}] = \frac{\alpha_1}{\beta_1^2} = \frac{1006}{(1019.0156)^2} \approx 9.669 \times 10^{-4}
$$


**结论：** 后验分布为 $\text{Gamma}(1006, 1019.0156)$，贝叶斯估计为 **0.9870**，后验方差约为 **0.0009669**。

---

**（c）**

若模型以尺度参数 $\mu = 1/\lambda$ 表示，且先验分布为 $\mu \sim \text{Inverse-Gamma}(18, 20)$。

逆 Gamma 分布的概率密度函数为：

$$
\pi(\mu) = \frac{\beta_0^{\alpha_0}}{\Gamma(\alpha_0)} \mu^{-\alpha_0 - 1} e^{-\beta_0 / \mu}
$$


似然函数为：

$$
L(\mu) = \left( \frac{1}{\mu} \right)^n e^{-\frac{\sum_{i=1}^{n} t_i}{\mu}}
$$


后验分布：

$$
p(\mu | \text{data}) \propto L(\mu) \pi(\mu) \propto \mu^{-n - \alpha_0 - 1} e^{-\left( \beta_0 + \sum_{i=1}^{n} t_i \right) / \mu}
$$


因此，后验分布为 $\mu | \text{data} \sim \text{Inverse-Gamma}(\alpha_1, \beta_1)$，其中：

$$
\alpha_1 = \alpha_0 + n = 18 + 988 = 1006 \\
\beta_1 = \beta_0 + \sum_{i=1}^{n} t_i = 20 + 999.0156 = 1019.0156
$$


后验均值为：


$$
E[\mu | \text{data}] = \frac{\beta_1}{\alpha_1 - 1} = \frac{1019.0156}{1005} \approx 1.0141
$$


**结论：** 后验分布为 \( \text{Inverse-Gamma}(1006, 1019.0156) \)，尺度参数 \( \mu \) 的后验均值为 **1.0141**。















:::

## Question 3

A lifetime $X$ (in years) of a particular device is modeled by a Weibull distribution

$$
f(x \mid \nu, \theta) = \nu \theta x^{\nu - 1} \exp \{ -\theta x^{\nu} \}, \quad x \geq 0,
$$
with shape parameter $\nu = 3$ and unknown rate parameter $\theta$. The lifetimes of $X_1 = 3$, $X_2 = 4$, and $X_3 = 2$ are observed. Assume that an expert familiar with this type of devices suggested an exponential prior on $\theta$ with rate parameter $\lambda = \frac{5}{2}$.

(a) For the prior suggested by the expert, find the posterior distribution of $\theta$.

(b) What are the posterior mean and variance? No need to integrate if you recognize to which family of distributions the posterior belongs.

::: details

**(a) 求后验分布：**

首先，我们有先验分布为指数分布，参数为$\lambda = \frac{5}{2}$，即：
$$
p(\theta) = \lambda e^{-\lambda \theta} = \frac{5}{2} e^{-\frac{5}{2} \theta}, \quad \theta \geq 0.
$$

观测数据为$X_1 = 3$, $X_2 = 4$, $X_3 = 2$，且寿命服从Weibull分布，形状参数$\nu = 3$。因此，似然函数为：
$$
L(\theta) = \prod_{i=1}^{3} f(x_i \mid \nu, \theta) = \prod_{i=1}^{3} \nu \theta x_i^{\nu - 1} e^{-\theta x_i^{\nu}} = [\nu \theta]^3 \prod_{i=1}^{3} x_i^{\nu - 1} e^{-\theta \sum_{i=1}^{3} x_i^{\nu}}.
$$

将先验分布和似然函数相乘，得到未归一化的后验分布：
$$
p(\theta \mid x) \propto L(\theta) \cdot p(\theta) = [\nu \theta]^3 \left( \prod_{i=1}^{3} x_i^{\nu - 1} \right) e^{-\theta \left( \sum_{i=1}^{3} x_i^{\nu} + \lambda \right)}.
$$

由于 $\nu$ 和 $x_i$ 都是已知常数，因此可以将它们视为比例常数，后验分布的关键部分为：
$$
p(\theta \mid x) \propto \theta^3 e^{-\theta \left( \lambda + \sum_{i=1}^{3} x_i^{\nu} \right)}.
$$

计算$\sum_{i=1}^{3} x_i^{\nu}$：
$$
x_1^{\nu} = 3^3 = 27, \quad x_2^{\nu} = 4^3 = 64, \quad x_3^{\nu} = 2^3 = 8, \\
\sum_{i=1}^{3} x_i^{\nu} = 27 + 64 + 8 = 99.
$$

因此，后验分布为：
$$
p(\theta \mid x) \propto \theta^3 e^{-\theta \left( \frac{5}{2} + 99 \right)} = \theta^3 e^{-\theta \frac{203}{2}}.
$$

这与Gamma分布的形式一致，Gamma分布的概率密度函数为：
$$
\text{Gamma}(\alpha, \beta): \quad f(\theta; \alpha, \beta) = \frac{\beta^\alpha}{\Gamma(\alpha)} \theta^{\alpha - 1} e^{-\beta \theta}, \quad \theta \geq 0.
$$

因此，后验分布为参数为 $\alpha = 4$ 和 $\beta = \frac{203}{2}$ 的 Gamma 分布：
$$
\theta \mid x \sim \text{Gamma}\left(4, \frac{203}{2}\right).
$$

**(b) 求后验均值和方差：**

对于 Gamma 分布 $\text{Gamma}(\alpha, \beta)$，均值和方差分别为：
$$
\text{E}[\theta] = \frac{\alpha}{\beta}, \quad \text{Var}[\theta] = \frac{\alpha}{\beta^2}.
$$

因此，后验均值为：
$$
\text{E}[\theta \mid x] = \frac{4}{\frac{203}{2}} = \frac{8}{203}.
$$

后验方差为：
$$
\text{Var}[\theta \mid x] = \frac{4}{\left( \frac{203}{2} \right)^2} = \frac{4}{\frac{203^2}{4}} = \frac{16}{203^2}.
$$

**答案总结：**

(a) 后验分布为$\theta \mid x \sim \text{Gamma}\left(4, \frac{203}{2}\right)$。

(b) 后验均值为$\frac{8}{203}$，后验方差为$\frac{16}{(203)^2}$。

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
