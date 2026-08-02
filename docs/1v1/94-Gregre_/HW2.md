---
title: ISE529 Predictive Analytics
date: 2024-09-27 13:24:11
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
watermark: true
---

**Instructions:**

1. Print your First and Last name and NetID on your answer sheets
2. Submit all your answers including Python scripts and report in a single Jupyter Lab file (.ipynb) or along with a single PDF to Brightspace by due date. No other file formats will be graded. No late submission will be accepted.
3. Total 5 problems. Total points: 100

## 1. (20 points)

Consider the following computer output.

```python
The regression equation is Y = 254 + 2.77 x1 - 3.58 x2

Predictor    Coef     SE Coef    T
Constant     253.810  4.781      ?
x1           2.7738   0.1846     15.02
x2          -3.5753   0.1526     ?

S = 5.05756     R-Sq = ?      R-Sq (adj) = 98.4%

Analysis of Variance
Source          DF       SS       MS         F
Regression      2        22784    11392      ?
Residual error  ?        ?        ?          ?
Total           14       23091
```

(a) Fill in the missing quantities.

(b) What conclusions can you draw about the significance of regression?

(c) What conclusions can you draw about the contributions of the individual regressors to the model?

*Note: check the critical value in the F-distribution or t-distribution table.*

:::: details

```python
The regression equation is Y = 254 + 2.77 x1 - 3.58 x2

Predictor    Coef     SE Coef    T
Constant     253.810  4.781      53.08
x1           2.7738   0.1846     15.02
x2          -3.5753   0.1526     -23.44

S = 5.05756     R-Sq = 98.7%     R-Sq (adj) = 98.4%

Analysis of Variance
Source          DF       SS       MS         F
Regression      2        22784    11392      445.3
Residual error  12       307      25.5833    —
Total           14       23091
```

::: tabs

@tab a 填写缺失的数值

- **常数项的 T 值：** $T = \frac{\text{Coef}}{\text{SE Coef}} = \frac{253.810}{4.781} \approx 53.08$
  
- **x2 的 T 值：** $T = \frac{\text{Coef}}{\text{SE Coef}} = \frac{-3.5753}{0.1526} \approx -23.44$
  
- **残差自由度（Residual DF）：** $\text{DF} = \text{Total DF} - \text{Regression DF} = 14 - 2 = 12$
  
- **残差平方和（SS Residual）：** $\text{SS} = \text{Total SS} - \text{Regression SS} = 23091 - 22784 = 307$
  
- **残差均方（MS Residual）：** $\text{MS} = \frac{\text{SS}}{\text{DF}} = \frac{307}{12} \approx 25.5833$
  
- **F 值：** $F = \frac{\text{MS Regression}}{\text{MS Residual}} = \frac{11392}{25.5833} \approx 445.3$
  
- **R-Sq（决定系数）：** $R^2 = \left( \frac{\text{Regression SS}}{\text{Total SS}} \right) \times 100\% = \left( \frac{22784}{23091} \right) \times 100\% \approx 98.7\%$

@tab b 关于回归的显著性

由于计算得到的 F 值约为 445.3，远大于显著性水平 α = 0.05 下对应的临界 F 值（对于自由度 df1 = 2 和 df2 = 12，临界值约为 3.89）。因此，我们有足够的证据拒绝原假设，认为回归模型整体上是显著的，模型拟合效果良好。

@tab c 关于各个自变量对模型的贡献

各自变量的 T 值绝对值均远大于临界 T 值（对于自由度 df = 12，α = 0.05，临界值约为 2.179）：

- **x1 的 T 值为 15.02**，显著性水平下显著，说明 x1 对模型有显著贡献。
- **x2 的 T 值为 -23.44**，也在显著性水平下显著，说明 x2 对模型有显著贡献。

因此，两个自变量 x1 和 x2 都对模型有重要的、显著的贡献。

:::

::::

## 2. (20 points)

A study was performed on wear of a bearing and its relationship to $x_1 =$ oil viscosity and $x_2 =$ load. The data can be found in attached file **bearingdata.csv**.

```csv
bearingdata.csv:
y,x1,x2
293,1.6,851
230,15.5,816
172,22,1058
91,43,1201
113,33,1357
125,40,1115
,,
```

**(a)** Fit a multiple linear regression model in the form of $y = \beta_0 + \beta_1x_1 + \beta_2x_2 + \varepsilon$. Write out the estimated model.

**(b)** Estimate $\sigma^2$ and compute the *t*-statistics for each regression coefficient. Using $\alpha = 0.05$, what conclusions can you draw?

**(c)** Test for significance of overall regression using $\alpha = 0.05$. What is the *P*-value for this test? What are your conclusions?

**(d)** Use the model to predict wear when $x_1 = 25$ and $x_2 = 1000$.

**(e)** Use the extra sum of squares method to investigate the usefulness of adding $x_2 =$ load to a model that already contains $x_1 =$ oil viscosity. Use $\alpha = 0.05$.

**(f)** Refit the model with an interaction term. Test for significance of regression using $\alpha = 0.05$.

**(g)** Use the extra sum of squares method to determine whether the interaction term contributes significantly to the model. Use $\alpha = 0.05$.

:::: details

::: tabs

@tab a

@tab b

@tab c

:::

::::





## 3. (20 points)

We have used a sample of 30 observations to fit a regression model. The full model has 9 regressors, the variance estimate is $\hat{\sigma}^2 = MSE = 100$, and $R^2 = 0.92$.

**(a)** Calculate the *F*-statistic for testing significance of regression. Using $\alpha = 0.05$, what would you conclude?

**(b)** Suppose that we fit another model using only four of the original regressors and that the error sum of squares for this new model is 2200. Find the estimate of $\sigma^2$ for this new reduced model. Would you conclude that the reduced model is superior to the old one? Why?

**(c)** Find the value of $C_p$ for the reduced model in part (b). Would you conclude that the reduced model is better than the old model?



## 4. (20 points) 

Use the Carseats data set (attached Carseats.csv) to answer the following questions.

**(a)** Fit a multiple regression model to predict Sales using Price, Urban, and US.

**(b)** Provide an interpretation of each coefficient in the model.

**(c)** Write out the model in equation form, show the qualitative variables properly.

**(d)** For which of the predictors can you reject the null hypothesis $H_0: \beta_j = 0$?

**(e)** On the basis of your response to the previous question, fit a smaller model that only uses the predictors which is statistically significant. Compare it to the model in (a), which one is a better model?

**(f)** Using the model from (e), obtain 95% confidence intervals for the coefficient(s).



## 5. (20 points)

Perform the following Python code to generate simulated data, and answer the following questions:







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