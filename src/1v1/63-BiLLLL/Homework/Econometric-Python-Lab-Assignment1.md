---
title: Econometric Python Lab Assignment 1
icon: python
date: 2023-10-06 07:10:43
author: AI悦创
isOriginal: true
category: 
    - 1v1
    - python 1v1
    - 数据结构一对一
    - 留学生辅导
    - 留学生作业辅导
    - 加州大学美国
tag:
    - 1v1
    - python 1v1
    - 数据结构一对一
    - 留学生辅导
    - 留学生作业辅导
    - 加州大学美国
sticky: false
star: false
article: true
timeline: true
image: false
navbar: true
sidebarIcon: true
headerDepth: 5
comment: true
lastUpdated: true
editLink: false
backToTop: true
toc: true
---

## 1. 题目

1. (0 points) Please type your code and answers into Jupyter notebook. All visualizations should be prop-erly labelled. Submit the notebook as a pdf.

2. (3.5 points) Use the bwght dataset from the Wooldridge python module to answer the following question. You can find the documentation for the data online here. Import this data into your notebook.

    (a)  (1.5 Points) How many women are in the sample? What proportion of women with a family income higher than \$50,000 are smokers? What proportion of women with a family income less than \$20,000 are smokers?

    (b)  (1 Points) Generate a table of summary statistics for the dataframe. What is the average number of cigarettes smoked in a day? Is the mean a good measure of the typical women’s smoking habits? If no, explain why and if there is a better measure.

    (c)  (1 Points) Find the mode of fatheduc in the sample. Why are only 1,192 observations used to compute this statistic?

3. (5.5 points) Use the bwght dataset from the Wooldridge python module to answer the following question.

    (a)  (1 point) Generate two different histograms of bwght using Sturge’s and FD binning methods. Explain the strengths and weaknesses of each method when applied to bwght.

    (b)  (1 point) Create a histogram of bwght using either sturges or fd to choose the number of bins. Overlay a density curve.

    (c)  (2 points) Using a q-q plot, do you believe bwght is approximately normally distributed? Why are why not? What about family income?

    (d)  (1.5 points) Create a boxplot conditioning on whether or not the mother was a smoker. Do you observe any differences? If so, what are they?

4. (6 points) Use the bwght dataset from the Wooldridge python module to answer the following question.

    (a)  (2 points) Estimate the parameters for the following simple regression:

    $$\large \hat{bwght} = \hat{\beta_0} + \hat{\beta_1} \times packs$$

    report the intercept and slope. What do these tell you about the association between cigarette use and birth weight?

    (b)  (2 points) What is the predicted value of birthweight when packs = 0? When packs = 2? What is the interpretation of the intercept?

    (c)  (1 point) Verify the residuals of this regression sum (approximately) to zero.

    (d)  (1 point) Using a scatter plot, show the observed values against the values predicted by a regression.

## 2. Solution

### a.

计算比例的公式是这样的：

对于家庭收入超过$50,000的女性中，吸烟者的比例：

$$\large \text{比例} = \frac{\text{家庭收入超过\$50,000且吸烟的女性数}}{\text{家庭收入超过\$50,000的女性总数} }$$

在Python代码中，这个比例是这样计算的：

```python
high_income_smokers = len(bwght[(bwght['faminc'] > 50) & (bwght['cigs'] > 0)]) / len(bwght[bwght['faminc'] > 50])
```

对于家庭收入低于$20,000的女性中，吸烟者的比例：

$$\large \text{比例} = \frac{\text{家庭收入低于\$20,000且吸烟的女性数}}{\text{家庭收入低于\$20,000的女性总数}}$$

在 Python 代码中，这个比例是这样计算的：

```python
low_income_smokers = len(bwght[(bwght['faminc'] < 20) & (bwght['cigs'] > 0)]) / len(bwght[bwght['faminc'] < 20])
```

在这两个公式中，分子是特定收入范围内的吸烟女性的数量，而分母是特定收入范围内的女性总数。这样的计算可以给出在给定的收入范围内吸烟的女性所占的比例。









::: details 公众号：AI悦创【二维码】

![](/gzh.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Web、Linux」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](/zsxq.jpg)

