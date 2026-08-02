---
title: HW6_24_Fall
date: 2024-11-06 20:02:26
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

A longitudinal study was conducted to understand the effect of age and sex on the orthodontic distance ($y$). Measurements on 27 children are given in the file `ortho.csv`. There are a total of 16 boys and 11 girls, which are identified in the dataset using the column `Subject`. Consider the following random effects model:
$$
y_{ij} \mid \beta_0, \beta_1, \beta_2, u_i, \sigma^2_{\epsilon} \sim^{\text{ind.}} N \left( \beta_0 + \beta_1 \text{age}_{ij} + \beta_2 \text{sex}_i + u_i, \sigma^2_{\epsilon} \right) \\ u_i \mid \sigma^2_u \sim^{\text{iid}} N \left( 0, \sigma^2_u \right)
$$
for $i = 1, \dots, 27$ and $j = 1, \dots, 4$. Here $u_i$ represents the random effect of the $i$th subject. The sex variable should be coded as -1 for female and 1 for male. Assume the following prior distributions:

$$
\beta_k \sim^{\text{iid}} N(0, \sigma^2 = 10^8), \quad k = 0, 1, 2 \\
\tau_{\epsilon} \sim \text{Gamma}(0.01, 0.01) \\
\tau_u \sim \text{Gamma}(0.01, 0.01)
$$
where $\tau = \frac{1}{\sigma^2}$.

1. Fit the random effects model and plot the posterior densities of the five parameters $\beta_0$, $\beta_1$, $\beta_2$, $\sigma^2_{\epsilon}$, and $\sigma^2_u$. (use 100,000 samples with 10,000 burn-in.)

2. The intraclass correlation coefficient is defined as

   $$
   \rho = \frac{\sigma^2_u}{\sigma^2_u + \sigma^2_{\epsilon}}
   $$
   

   Plot the posterior density of $\rho$. Does it appear to be significantly different from 0?

3. Fit the model ignoring the random effects (that is, set all the $u_i$'s to be 0) and plot the posterior densities of the four parameters $\beta_0$, $\beta_1$, $\beta_2$, and $\sigma^2_{\epsilon}$. What differences do you see from the previous analysis using random effects (compare the posterior means and credible intervals of the four parameters)?

::: code-tabs

@tab Code1

```python
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from scipy.stats import norm, gamma

# 读取数据
data = pd.read_csv('/mnt/data/ortho.csv')
y = data['y'].values
age = data['age'].values
sex = data['Sex_coded'].values
subject = pd.Categorical(data['Subject']).codes  # 将subject转化为数值编码
n_subjects = len(np.unique(subject))

# 定义先验参数
beta_prior_mu = 0
beta_prior_sigma = np.sqrt(10**8)
tau_epsilon_alpha = 0.01
tau_epsilon_beta = 0.01
tau_u_alpha = 0.01
tau_u_beta = 0.01

# 初始化参数
beta_0_samples = []
beta_1_samples = []
beta_2_samples = []
sigma_epsilon_samples = []
sigma_u_samples = []
rho_samples = []

# 超参数初始化
beta_0 = 0
beta_1 = 0
beta_2 = 0
tau_epsilon = 1
tau_u = 1
u = np.zeros(n_subjects)

# Gibbs采样
n_iter = 100000
burn_in = 10000
for i in range(n_iter):
    # 更新 u (随机效应)
    for j in range(n_subjects):
        y_j = y[subject == j]
        age_j = age[subject == j]
        sex_j = sex[subject == j]
        n_j = len(y_j)
        
        mu_j = beta_0 + beta_1 * age_j + beta_2 * sex_j
        sigma_u_post = 1 / (n_j * tau_epsilon + tau_u)
        mu_u_post = sigma_u_post * tau_epsilon * np.sum(y_j - mu_j)
        u[j] = norm.rvs(mu_u_post, np.sqrt(sigma_u_post))
    
    # 更新 beta_0, beta_1, beta_2 (固定效应)
    y_star = y - u[subject]
    X = np.vstack((np.ones(len(y)), age, sex)).T
    beta_cov = np.linalg.inv(X.T @ X * tau_epsilon + np.eye(3) / beta_prior_sigma**2)
    beta_mu = beta_cov @ (X.T @ y_star * tau_epsilon)
    beta_sample = np.random.multivariate_normal(beta_mu, beta_cov)
    beta_0, beta_1, beta_2 = beta_sample

    # 更新 tau_epsilon 和 tau_u
    residual = y - (beta_0 + beta_1 * age + beta_2 * sex + u[subject])
    tau_epsilon = gamma.rvs(tau_epsilon_alpha + len(y) / 2,
                            scale=1 / (tau_epsilon_beta + 0.5 * np.sum(residual**2)))
    tau_u = gamma.rvs(tau_u_alpha + n_subjects / 2,
                      scale=1 / (tau_u_beta + 0.5 * np.sum(u**2)))

    # 计算并存储 sigma_epsilon, sigma_u, rho
    sigma_epsilon = np.sqrt(1 / tau_epsilon)
    sigma_u = np.sqrt(1 / tau_u)
    rho = sigma_u**2 / (sigma_u**2 + sigma_epsilon**2)
    
    if i >= burn_in:
        beta_0_samples.append(beta_0)
        beta_1_samples.append(beta_1)
        beta_2_samples.append(beta_2)
        sigma_epsilon_samples.append(sigma_epsilon)
        sigma_u_samples.append(sigma_u)
        rho_samples.append(rho)

# 将后验分布绘制出来
def plot_posterior(samples, title):
    plt.hist(samples, bins=50, density=True, alpha=0.7)
    plt.title(f"Posterior distribution of {title}")
    plt.xlabel(title)
    plt.ylabel("Density")
    plt.show()

plot_posterior(beta_0_samples, r"$\beta_0$")
plot_posterior(beta_1_samples, r"$\beta_1$")
plot_posterior(beta_2_samples, r"$\beta_2$")
plot_posterior(sigma_epsilon_samples, r"$\sigma^2_{\epsilon}$")
plot_posterior(sigma_u_samples, r"$\sigma^2_u$")
plot_posterior(rho_samples, r"$\rho$")

# 忽略随机效应的模型
beta_0_samples_no_re = []
beta_1_samples_no_re = []
beta_2_samples_no_re = []
sigma_epsilon_samples_no_re = []

for i in range(n_iter):
    # 重新计算 beta_0, beta_1, beta_2 (固定效应)
    beta_cov = np.linalg.inv(X.T @ X * tau_epsilon + np.eye(3) / beta_prior_sigma**2)
    beta_mu = beta_cov @ (X.T @ y * tau_epsilon)
    beta_sample = np.random.multivariate_normal(beta_mu, beta_cov)
    beta_0, beta_1, beta_2 = beta_sample

    # 更新 tau_epsilon
    residual_no_re = y - (beta_0 + beta_1 * age + beta_2 * sex)
    tau_epsilon = gamma.rvs(tau_epsilon_alpha + len(y) / 2,
                            scale=1 / (tau_epsilon_beta + 0.5 * np.sum(residual_no_re**2)))

    sigma_epsilon_no_re = np.sqrt(1 / tau_epsilon)
    
    if i >= burn_in:
        beta_0_samples_no_re.append(beta_0)
        beta_1_samples_no_re.append(beta_1)
        beta_2_samples_no_re.append(beta_2)
        sigma_epsilon_samples_no_re.append(sigma_epsilon_no_re)

# 绘制忽略随机效应的后验分布
plot_posterior(beta_0_samples_no_re, r"$\beta_0$ (No RE)")
plot_posterior(beta_1_samples_no_re, r"$\beta_1$ (No RE)")
plot_posterior(beta_2_samples_no_re, r"$\beta_2$ (No RE)")
plot_posterior(sigma_epsilon_samples_no_re, r"$\sigma^2_{\epsilon}$ (No RE)")
```

@tab Code2

```python
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from scipy.stats import norm, gamma

# 读取数据
data = pd.read_csv('/mnt/data/ortho.csv')
y = data['y'].values              # 响应变量 (正畸距离)
age = data['age'].values          # 年龄变量
sex = data['Sex_coded'].values     # 性别变量 (1 表示男，-1 表示女)
subject = pd.Categorical(data['Subject']).codes  # 将subject转化为数值编码
n_subjects = len(np.unique(subject))             # 统计不同受试者数量

# 定义先验参数
beta_prior_mu = 0                 # beta 的先验均值
beta_prior_sigma = np.sqrt(10**8) # beta 的先验方差的标准差
tau_epsilon_alpha = 0.01          # tau_epsilon 的 Gamma 分布的 alpha 参数
tau_epsilon_beta = 0.01           # tau_epsilon 的 Gamma 分布的 beta 参数
tau_u_alpha = 0.01                # tau_u 的 Gamma 分布的 alpha 参数
tau_u_beta = 0.01                 # tau_u 的 Gamma 分布的 beta 参数

# 初始化参数 (用于 Gibbs 采样初始值)
beta_0_samples = []
beta_1_samples = []
beta_2_samples = []
sigma_epsilon_samples = []
sigma_u_samples = []
rho_samples = []

# 初始化参数
beta_0 = 0
beta_1 = 0
beta_2 = 0
tau_epsilon = 1  # tau_epsilon 初始值
tau_u = 1        # tau_u 初始值
u = np.zeros(n_subjects)  # 初始化随机效应 u 为零向量

# Gibbs采样
n_iter = 100000  # 总迭代次数
burn_in = 10000  # 燃烧期 (前10000次迭代不计入后验样本)
for i in range(n_iter):
    # 更新 u (随机效应)
    for j in range(n_subjects):
        # 提取当前受试者 j 的数据
        y_j = y[subject == j]
        age_j = age[subject == j]
        sex_j = sex[subject == j]
        n_j = len(y_j)  # 当前受试者的数据点数量
        
        # 计算 mu_j 和 sigma_u 的条件分布参数
        mu_j = beta_0 + beta_1 * age_j + beta_2 * sex_j
        sigma_u_post = 1 / (n_j * tau_epsilon + tau_u)  # 后验方差
        mu_u_post = sigma_u_post * tau_epsilon * np.sum(y_j - mu_j)  # 后验均值
        
        # 更新当前受试者 j 的随机效应 u[j]
        u[j] = norm.rvs(mu_u_post, np.sqrt(sigma_u_post))
    
    # 更新 beta_0, beta_1, beta_2 (固定效应)
    y_star = y - u[subject]  # 将 u 从 y 中减去以得到 y_star
    X = np.vstack((np.ones(len(y)), age, sex)).T  # 构建设计矩阵 X (包含截距、年龄和性别)
    beta_cov = np.linalg.inv(X.T @ X * tau_epsilon + np.eye(3) / beta_prior_sigma**2)  # beta 的后验协方差
    beta_mu = beta_cov @ (X.T @ y_star * tau_epsilon)  # beta 的后验均值
    beta_sample = np.random.multivariate_normal(beta_mu, beta_cov)  # 从多元正态分布中采样
    beta_0, beta_1, beta_2 = beta_sample

    # 更新 tau_epsilon 和 tau_u
    residual = y - (beta_0 + beta_1 * age + beta_2 * sex + u[subject])  # 计算残差
    # 更新 tau_epsilon (残差的方差)
    tau_epsilon = gamma.rvs(tau_epsilon_alpha + len(y) / 2,
                            scale=1 / (tau_epsilon_beta + 0.5 * np.sum(residual**2)))
    # 更新 tau_u (u 的方差)
    tau_u = gamma.rvs(tau_u_alpha + n_subjects / 2,
                      scale=1 / (tau_u_beta + 0.5 * np.sum(u**2)))

    # 计算并存储 sigma_epsilon, sigma_u, rho
    sigma_epsilon = np.sqrt(1 / tau_epsilon)  # sigma_epsilon 的后验值
    sigma_u = np.sqrt(1 / tau_u)              # sigma_u 的后验值
    rho = sigma_u**2 / (sigma_u**2 + sigma_epsilon**2)  # 组内相关系数 rho
    
    # 在燃烧期之后，存储采样值
    if i >= burn_in:
        beta_0_samples.append(beta_0)
        beta_1_samples.append(beta_1)
        beta_2_samples.append(beta_2)
        sigma_epsilon_samples.append(sigma_epsilon)
        sigma_u_samples.append(sigma_u)
        rho_samples.append(rho)

# 绘制后验分布
def plot_posterior(samples, title):
    plt.hist(samples, bins=50, density=True, alpha=0.7)
    plt.title(f"Posterior distribution of {title}")
    plt.xlabel(title)
    plt.ylabel("Density")
    plt.show()

# 绘制各参数的后验分布
plot_posterior(beta_0_samples, r"$\beta_0$")
plot_posterior(beta_1_samples, r"$\beta_1$")
plot_posterior(beta_2_samples, r"$\beta_2$")
plot_posterior(sigma_epsilon_samples, r"$\sigma^2_{\epsilon}$")
plot_posterior(sigma_u_samples, r"$\sigma^2_u$")
plot_posterior(rho_samples, r"$\rho$")

# 忽略随机效应的模型
beta_0_samples_no_re = []
beta_1_samples_no_re = []
beta_2_samples_no_re = []
sigma_epsilon_samples_no_re = []

for i in range(n_iter):
    # 重新计算 beta_0, beta_1, beta_2 (固定效应)
    beta_cov = np.linalg.inv(X.T @ X * tau_epsilon + np.eye(3) / beta_prior_sigma**2)
    beta_mu = beta_cov @ (X.T @ y * tau_epsilon)
    beta_sample = np.random.multivariate_normal(beta_mu, beta_cov)
    beta_0, beta_1, beta_2 = beta_sample

    # 更新 tau_epsilon
    residual_no_re = y - (beta_0 + beta_1 * age + beta_2 * sex)
    tau_epsilon = gamma.rvs(tau_epsilon_alpha + len(y) / 2,
                            scale=1 / (tau_epsilon_beta + 0.5 * np.sum(residual_no_re**2)))

    sigma_epsilon_no_re = np.sqrt(1 / tau_epsilon)
    
    if i >= burn_in:
        beta_0_samples_no_re.append(beta_0)
        beta_1_samples_no_re.append(beta_1)
        beta_2_samples_no_re.append(beta_2)
        sigma_epsilon_samples_no_re.append(sigma_epsilon_no_re)

# 绘制忽略随机效应的后验分布
plot_posterior(beta_0_samples_no_re, r"$\beta_0$ (No RE)")
plot_posterior(beta_1_samples_no_re, r"$\beta_1$ (No RE)")
plot_posterior(beta_2_samples_no_re, r"$\beta_2$ (No RE)")
plot_posterior(sigma_epsilon_samples_no_re, r"$\sigma^2_{\epsilon}$ (No RE)")
```



:::


## Question 2

The dataset `gala.csv` contains features of the 30 Galapagos islands. The relationship between the number of plant species and several geographic variables is of interest. Answer the following questions.

1. We are interested in modeling the Species with respect to the five predictor variables using a Poisson Generalized Linear Model with log-link. Obtain 10,000 MCMC samples with 1,000 burn-in. Note that the variable "Elevation" has missing values. Perform multiple imputation for the missing values assuming an exponential distribution with mean 425. Provide the mean and 95% credible intervals of the coefficients corresponding to the five variables (standardize the five variables).

2. Which variables appear to be significant?

::: code-tabs

@tab Code1

```python
import pandas as pd
import numpy as np
from sklearn.preprocessing import StandardScaler
import statsmodels.api as sm
import statsmodels.formula.api as smf

# 读取数据
data_path = 'path_to_your_file/gala.csv'
gala_df = pd.read_csv(data_path)

# 处理缺失的 Elevation 列（假设均值为425的指数分布）
np.random.seed(42)
mean_elevation = 425
missing_elevation_values = np.random.exponential(scale=mean_elevation, size=gala_df['Elevation'].isnull().sum())
gala_df.loc[gala_df['Elevation'].isnull(), 'Elevation'] = missing_elevation_values

# 标准化五个预测变量
predictor_vars = ['Area', 'Elevation', 'Nearest', 'Scruz', 'Adjacent']
scaler = StandardScaler()
gala_df[predictor_vars] = scaler.fit_transform(gala_df[predictor_vars])

# 定义泊松回归模型
X = gala_df[predictor_vars]  # 预测变量
X = sm.add_constant(X)  # 添加截距
y = gala_df['Species']  # 响应变量

# 使用泊松回归拟合模型
poisson_model = sm.GLM(y, X, family=sm.families.Poisson()).fit()

# 获取系数的均值和95%置信区间
coefficients = poisson_model.params  # 系数均值
conf_int = poisson_model.conf_int(alpha=0.05)  # 95%置信区间
conf_int.columns = ['2.5%', '97.5%']

# 输出结果
results = pd.DataFrame({
    'Coefficient': coefficients,
    '2.5%': conf_int['2.5%'],
    '97.5%': conf_int['97.5%']
})

print("泊松回归模型的系数估计和95%置信区间：")
print(results)

# 检查显著性，使用显著性水平 (p < 0.05)
p_values = poisson_model.pvalues
significant_vars = p_values[p_values < 0.05].index.tolist()
print("\n显著变量：", significant_vars)
```

@tab Code2

```python
import pandas as pd
import numpy as np
from sklearn.preprocessing import StandardScaler
import statsmodels.api as sm

# 1. 读取数据
data_path = 'path_to_your_file/gala.csv'  # 设置数据文件路径
gala_df = pd.read_csv(data_path)  # 读取CSV文件到数据框中

# 2. 处理缺失的 Elevation 列（假设均值为425的指数分布）
np.random.seed(42)  # 设置随机种子以确保实验可重复
mean_elevation = 425  # 假设“Elevation”均值为425
# 对缺失的 Elevation 值填充符合均值为425的指数分布的随机数
missing_elevation_values = np.random.exponential(scale=mean_elevation, size=gala_df['Elevation'].isnull().sum())
gala_df.loc[gala_df['Elevation'].isnull(), 'Elevation'] = missing_elevation_values

# 3. 标准化五个预测变量
predictor_vars = ['Area', 'Elevation', 'Nearest', 'Scruz', 'Adjacent']  # 需要标准化的五个预测变量
scaler = StandardScaler()  # 使用StandardScaler进行标准化
# 对指定的预测变量进行标准化
gala_df[predictor_vars] = scaler.fit_transform(gala_df[predictor_vars])

# 4. 定义泊松回归模型
X = gala_df[predictor_vars]  # 将五个标准化的预测变量存入X
X = sm.add_constant(X)  # 添加截距项（常数1列）用于模型截距估计
y = gala_df['Species']  # 将响应变量“Species”存入y

# 5. 使用泊松回归拟合模型
# 使用广义线性模型(GLM)中的泊松回归模型（家族设为Poisson）
poisson_model = sm.GLM(y, X, family=sm.families.Poisson()).fit()

# 6. 获取系数的均值和95%置信区间
coefficients = poisson_model.params  # 获取模型中每个变量的系数估计（均值）
conf_int = poisson_model.conf_int(alpha=0.05)  # 计算95%置信区间
conf_int.columns = ['2.5%', '97.5%']  # 置信区间的列标签

# 7. 输出结果
# 将系数均值和置信区间组合到一个数据框中，便于查看
results = pd.DataFrame({
    'Coefficient': coefficients,
    '2.5%': conf_int['2.5%'],
    '97.5%': conf_int['97.5%']
})

print("泊松回归模型的系数估计和95%置信区间：")
print(results)  # 打印系数估计值及其置信区间

# 8. 检查显著性，使用显著性水平 (p < 0.05)
p_values = poisson_model.pvalues  # 获取p值，用于显著性检验
significant_vars = p_values[p_values < 0.05].index.tolist()  # 获取p值小于0.05的变量名称
print("\n显著变量：", significant_vars)  # 打印显著变量列表
```



:::



## Question 3

An exercise in the book Pagano and Gauvreau (2000) features data on 86 patients who after surgery were assigned to placebo or chemotherapy (thiopeta). The endpoint was the time to cancer recurrence (in months).

Variables are: `time`, `group` (0 - placebo, 1 - chemotherapy), and `observed` (0 - recurrence not observed, 1 - recurrence observed). This data is given in files `bladerc.csv` or `bladerc.dat`.

Assume that observed times are exponentially distributed with the rate parameter $\lambda_i$ depending on the covariate `group`, as

$$
\lambda_i = \exp\{\beta_0 + \beta_1 \times \text{group}_i\}
$$


After $\beta_0$ and $\beta_1$ are estimated, since the variable `group` takes values 0 or 1, the means for the placebo and treatment times become

$$
\mu_0 = \frac{1}{\exp\{\beta_0\}} = \exp\{-\beta_0\} \\
\mu_1 = \frac{1}{\exp\{\beta_0 + \beta_1\}} = \exp\{-\beta_0 - \beta_1\}
$$




respectively. The censored data are modeled as exponentials left truncated by the censoring time. Use noninformative priors on  $\beta_0$ and $\beta_1$.

1. (a) Is the 95% Credible Set for $\mu_1 - \mu_0$ all positive?

2. (b) What is the posterior probability of hypothesis $H : \mu_1 > \mu_0$?

3. (c) Comment on the benefits of the treatment (a paragraph).

```python
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from scipy.stats import expon, norm

# 读取数据
data = pd.read_csv('bladerc.csv')

# 定义变量
time = data['time'].values
group = data['group'].values
observed = data['observed'].values

# 似然函数：指数分布的对数似然
def log_likelihood(beta_0, beta_1, time, group):
    lambda_i = np.exp(beta_0 + beta_1 * group)
    return np.sum(expon.logpdf(time, scale=1/lambda_i))

# 先验分布：均匀分布 (无信息先验)
def log_prior(beta_0, beta_1):
    return 0  # 均匀先验，返回常数值

# 后验分布：先验 * 似然
def log_posterior(beta_0, beta_1, time, group):
    return log_prior(beta_0, beta_1) + log_likelihood(beta_0, beta_1, time, group)

# MCMC采样：Metropolis-Hastings算法
def metropolis_hastings(log_posterior, time, group, n_samples=2000, proposal_width=0.1):
    # 初始化参数
    beta_0_current = np.random.normal(0, 1)
    beta_1_current = np.random.normal(0, 1)
    
    samples = np.zeros((n_samples, 2))
    accepted = 0

    for i in range(n_samples):
        # 提出候选值
        beta_0_proposal = np.random.normal(beta_0_current, proposal_width)
        beta_1_proposal = np.random.normal(beta_1_current, proposal_width)
        
        # 计算后验概率
        log_posterior_current = log_posterior(beta_0_current, beta_1_current, time, group)
        log_posterior_proposal = log_posterior(beta_0_proposal, beta_1_proposal, time, group)
        
        # 计算接受率
        acceptance_ratio = np.exp(log_posterior_proposal - log_posterior_current)
        
        # 接受或拒绝
        if np.random.rand() < acceptance_ratio:
            beta_0_current = beta_0_proposal
            beta_1_current = beta_1_proposal
            accepted += 1
        
        # 记录样本
        samples[i, 0] = beta_0_current
        samples[i, 1] = beta_1_current
    
    print(f'Acceptance Rate: {accepted / n_samples}')
    return samples

# 运行MCMC采样
samples = metropolis_hastings(log_posterior, time, group, n_samples=2000)

# 展示采样结果
plt.figure(figsize=(10, 5))
plt.subplot(1, 2, 1)
plt.hist(samples[:, 0], bins=30, density=True, color='blue', alpha=0.7)
plt.title('Posterior of beta_0')

plt.subplot(1, 2, 2)
plt.hist(samples[:, 1], bins=30, density=True, color='green', alpha=0.7)
plt.title('Posterior of beta_1')

plt.show()

# (a) 计算 μ1 - μ0 的95%可信区间
mu_0_samples = np.exp(-samples[:, 0])
mu_1_samples = np.exp(-samples[:, 0] - samples[:, 1])
mu_diff_samples = mu_1_samples - mu_0_samples

cred_interval = np.percentile(mu_diff_samples, [2.5, 97.5])
print(f"95% Credible Interval for μ1 - μ0: {cred_interval}")

# (b) 计算后验概率 P(μ1 > μ0)
posterior_prob = np.mean(mu_diff_samples > 0)
print(f"Posterior Probability that μ1 > μ0: {posterior_prob}")

# (c) 评述治疗效果
if posterior_prob > 0.95:
    print("化疗对患者的治疗效果显著，具有明显益处。")
elif posterior_prob < 0.05:
    print("化疗对患者的治疗效果不显著，可能没有明显益处。")
else:
    print("化疗对患者的治疗效果不确定，需要进一步研究。")
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
