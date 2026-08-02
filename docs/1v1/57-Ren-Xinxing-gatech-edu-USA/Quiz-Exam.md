---
title: 考试
date: 2024-11-03 10:23:15
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

## 单选

### Question 1

In multiple linear regression, if the constant variance assumption does not hold, we apply a Box-Cox transformation to the predicting variables.

A. True

B. False✅



### Question 2

In logistic regression, we interpret the regression coefficients with respect to the odds of success.

A. True✅

B. False



### Question 3

In Support Vector Machines (SVM), the optimization problem involves maximizing the margin between the boundary and the farthest data points of each class, which are called support vectors.

A. True

B. False✅



### Question 4

In Poisson regression, the test for overall regression significance uses the F-test.

A. True

B. False✅



### Question 5

In a goodness of fit test for Poisson regression, if the p-value is small, we reject the null hypothesis and conclude that the model is a good fit.

A. True

B. False✅



### Question 6

Support vector machine, or SVM, is robust to outliers but not to small changes in the data.

A. True

B. False✅

---

### Question 7

In Gradient Boosting, the final model is a simple average of all the weak learners, and each weak learner contributes equally to the final prediction.

A. True

B. False✅



### Question 8

An increase in false negatives in classification will result in a higher Area under the Curve (AUC) in the Receiver Operating Characteristic (ROC) curve.

A. True

B. False✅



### Question 9

When testing for statistically significant positive or negative coefficients, using a Poisson regression model on a dataset with a small sample size will lead to more Type I errors.

A. True✅

B. False



### Question 10

When a Poisson regression model does not have a good fit, it might be because the relationship between the log of the expected rate and the predicting variables is not linear.

A. True✅

B. False



### Question 11

When evaluating prediction or classification, there is a trade off between specificity and sensitivity measures. That is, the lower the specificity is, the higher the sensitivity is.

A. True✅

B. False



### Question 12

The variance is assumed to be constant for a standard regression with a log transformation, whereas the variance for a Poisson regression model is not constant.

A. True✅

B. False



## Part 2: Multiple Choice & Multiple Answers

### Question 13

For a simple linear regression model, assuming that the residuals are normally distributed, the estimated variance of the error terms has the following sampling distribution:

A. Chi-square with n-2 degrees of freedom✅

B. T-distribution with n-2 degrees of freedom

C. Chi-square with n degrees of freedom

D. T-distribution with n degrees of freedom



### Question 14

Which of the following statements is correct when using the same predictors, response, and dataset across all models?

A. A Negative Binomial model allows the specification of an offset.✅

B. Poisson and Quasi Poisson regressions give the same standard errors of the estimated regression coefficients.

C. Poisson and Quasi Poisson regressions give the same estimates for the regression coefficients.✅

D. Poisson and Negative Binomial regressions give the same estimates for the regression coefficients.

E. Poisson and Negative Binomial regressions give the same standard errors of the estimated regression coefficients.



### Question 15

What are the possible reasons that a Poisson model is not a good fit? 
[Select all that apply]

*Note: for the multiple answer questions, an incorrect answer cancels out a correct answer.*

A. There may be other variables that should be included in the model✅

B. The relationship between the log of the expected rate and the predicting variables might not be linear.✅

C. There are unusual observations, outliers, or leverage points.✅

D. Overdispersion caused by heterogeneity in the event rates that hasn't been modeled.✅





### Question 16

We assume a logistic regression with n samples where we compare a full model with p variables and a reduced model with q variables (q < p). Both models have intercept. In using the deviance to test for subsets of coefficients, what is the number of degrees of freedom for the deviance test statistic?

A. p - n

B. q

C. p - q✅

D. q - n



### Question 17

 Which of the following statements about the assumptions of multiple linear regression is correct?

A. The independence assumption means that the predicting variables are independently drawn from the data-generating process.

B. The constant variance assumption implies that the variance of the error terms is the same across all levels of the predicting variables.✅

C. The zero mean assumption implies that the expected value of the response variable is zero across all observations.

D. The normality assumption implies that the predicting variables are normally distributed.




### Question 18

We fit a logistic regression model and get the following output:

- Null deviance: 640 on 15 degrees of freedom
- Residual deviance: 332 on 12 degrees of freedom

Which R/Python code is correct for computing the p-value of the test of the overall regression significance?

A. 1 - pchisq(332, 12) using R code or 1 - stats.chi2.cdf(332, 12) using Python code.

B. 1 - pchisq(640, 15) using R code or 1 - stats.chi2.cdf(640, 15) using Python code.

C. 1 - pchisq(308, 3) using R code or 1 - stats.chi2.cdf(308, 3) using Python code.✅

D. 1 - pchisq(972, 27) using R code or 1 - stats.chi2.cdf(972, 27) using Python code.



### Question 19

Which of the formula(s) is / are correct? 

[Select all that apply]

*Note: for the multiple answer questions, an incorrect answer cancels out a correct answer.*

A. Specificity = True Negative / (True Negative + False Positive)✅

B. Sensitivity = True Positive / (False Positive + True Positive)

C. Precision = True Positive / (True Positive + False Positive)✅

D. Accuracy = (True Negative + True Positive) / (False Negative + False Positive)



### Question 20

Which of the following statements about Poisson regression is **True**?

A. The variance of the response variable is equal to its mean.✅

B. Poisson regression is used for modeling binary outcomes.

C. For Poisson regression, we interpret the coefficients in terms of changes in the mean response.

D. The response variable in Poisson regression follows a normal distribution.



### Question 21

Which of the following statements about multiple linear regression are correct? 

[Select all that apply]

*Note: for the multiple answer questions, an incorrect answer cancels out a correct answer.*

A. The variance of the estimated regression coefficients is derived as the inverse of X transpose X multiplied by sigma squared, where X is the design matrix.✅

B. The sampling distribution of the estimated regression coefficients is a chi-squared distribution with (n - p - 1) degrees of freedom.

C. The estimated regression coefficients are unbiased estimators of the true regression parameters.✅

D. The confidence interval for a regression coefficient is centered at the estimated coefficient plus or minus the t-critical point multiplied by the standard deviation of the estimator.✅





### Question 22

Which of the following is **True** about the residuals in Poisson regression?

A. Using the central limit theorem to approximate the Poisson distribution with the normal distribution, the Pearson residuals have an approximate standard normal distribution.✅

B. Deviance residuals are always normally distributed.

C. Cook’s Distance is appropriate for identifying outliers in Poisson regression.

D. Residuals are not useful in Poisson regression.



### Question 23

Which of the following statements about the interpretation of regression coefficients in Poisson regression is **True**?

A. The coefficient is interpreted directly as the change in the response variable.

B. For a categorical predictor, the coefficient compares the category of interest to the baseline, given all other predicting variables are fixed in the model.✅

C. The coefficient is always positive.

D. The coefficient is interpreted as the change in the variance of the response variable.



### Question 24

Which of the following statements about cross-validation and classification error rate are **True**?  

[Select all that apply]

*Note: for the multiple answer questions, an incorrect answer cancels out a correct answer.*

A. K-fold cross-validation divides the data into K subsets and uses each subset as a validation set exactly once.✅

B. Leave-one-out cross-validation is a type of K-fold cross-validation where K equals the number of observations.✅

C. The classification error rate can be estimated using the training error rate, which is unbiased.

D. The classification error rate is one minus the probability that the new response is equal to the classifier.✅

E. Random sampling for cross-validation is computationally less expensive than K-fold cross-validation.



### Question 25

Which of the following statements about the confusion matrix and Receiver Operating Characteristic (ROC) curve are **True**? 

[Select all that apply]

*Note: for the multiple answer questions, an incorrect answer cancels out a correct answer.*

A. The confusion matrix distinguishes between true positives, true negatives, false positives, and false negatives.✅

B. The ROC curve plots sensitivity against specificity.

C. The area under the ROC curve (AUC) measures the likelihood that the model estimates a random “yes” point higher than a random “no” point.✅

D. The ROC curve differentiates between false positives and false negatives.



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
