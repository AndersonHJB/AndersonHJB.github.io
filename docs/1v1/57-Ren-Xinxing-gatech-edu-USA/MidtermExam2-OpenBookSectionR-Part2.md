---
title: Midterm Exam 2 - Open Book Section (R) - Part 2
date: 2024-11-03 17:41:56
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

```{r setup, include=FALSE}
knitr::opts_chunk$set(echo = TRUE)
```

## Instructions

1.  Save the .Rmd/.ipnyb file in your working directory - the same
    directory where you will download the data files into.

2.  Read the question and create the code necessary within the code
    chunk section immediately below each question.

3.  Type your answer to the questions in the text block provided
    immediately after the response prompt.

4.  Once you've finished answering all questions, knit this file and
    submit the knitted file *as HTML* on Canvas.

    ```         
    * Make sure to start submission of the exam at least 10 minutes before the end of the exam time. It is your responsibility to keep track of your time and submit before the time limit. 
    
    * If you are unable to knit your file as HTML for whatever reason, you may upload your Rmd/ipynb/PDF/Word file instead. However, you will be penalized 15%.
    
    * If you are unable to upload your exam file for whatever reason, you may IMMEDIATELY attach the file to the exam page as a comment via Grades-> Midterm Exam 2 - Open Book Section - Part 2 -> Comment box. 
    
    * Note that you will be penalized 15% (or more) if the submission is made within 5 minutes after the exam time has expired and a higher penalty if more than 5 minutes. Furthermore, you will receive zero points if the submission is made after 15 minutes of the exam time expiring. We will not allow later submissions or re-taking of the exam.
    
    * If you upload your file after the exam closes, let the instructors know via a private Piazza post. Please DON'T attach the exam file via a private Piazza post to the instructors since you could compromise the exam process. Any submission received via Piazza will not be considered.
    
    *#Commented out code will be graded for partial credit and the submitted file must be HTML
    ```

**Ready? Let's begin.**

### **For questions 1-4: Use the dataset "employee_turnover_prediction".**

### **For question 5: Use the dataset "quine_dataset". This dataset was taken from the MASS library.**

## Background

In this exam, you will be considering various attributes to predict
**employee turnover** (whether an employee will leave or stay) based on
various factors:

1.  **Commute Mode:** The mode of transportation the employee uses to
    commute to work.

    ("Public Transport," "Car," "Bike," "Walk") **(Qualitative
    variable)**

2.  **Workplace Flexibility:** The level of flexibility the employee has
    in their work location. ("Remote," "Hybrid," "On-Site")
    **(Qualitative variable)**

3.  **Team Dynamics:** The level of collaboration within the employee's
    team. ("High Collaboration," "Low Collaboration") **(Qualitative
    variable)**

4.  **Office Location:** The geographical location of the office where
    the employee works. ("City Center," "Suburb," "Rural Area")
    **(Qualitative variable)**

5.  **Health Benefits:** The type of health benefits provided to the
    employee by the company. ("Full Coverage," "Partial Coverage,"
    "None") **(Qualitative variable)**

6.  **Satisfaction Score:** A rating of the employee’s overall
    satisfaction with their job.(1-10) **(Quantitative variable)**

7.  **Monthly Working Hours:** The total number of hours worked by the
    employee in a typical month. (120-250) **(Quantitative variable)**

8.  **Years With Company:** The number of years the employee has worked
    at the company. (0.5-35 years)**(Quantitative variable)**

9.  **Number of Trainings Attended:** The number of professional
    development or training sessions the employee has participated in.
    (0-10) **(Quantitative variable)**

10. **Salary Increase Percentage:** The percentage increase in the
    employee's salary over the past year.(0%-20%) **(Quantitative
    variable)**

11. **Turnover:** Indicates whether the employee left the company. "1"
    for Turnover (employee left), "0" for No Turnover (employee stayed)
    **(Response variable)**.

```{r}
#This seed has been set to 100 to ensure results are reproducible. DO NOT CHANGE THIS SEED
set.seed(100)

#Read the csv file
employee_turnover = read.csv("employee_turnover_prediction.csv", header=TRUE, na.strings = "")

#Remove any potential trailing white space from column names
names(employee_turnover) <- trimws(names(employee_turnover), which = "right")

employee_turnover$Commute_Mode=as.factor(employee_turnover$Commute_Mode)
employee_turnover$Workplace_Flexibility=as.factor(employee_turnover$Workplace_Flexibility)
employee_turnover$Team_Dynamics=as.factor(employee_turnover$Team_Dynamics)
employee_turnover$Office_Location=as.factor(employee_turnover$Office_Location)
employee_turnover$Health_Benefits=as.factor(employee_turnover$Health_Benefits)
employee_turnover$Turnover=factor(employee_turnover$Turnover, levels = c(0, 1))

#Dividing the dataset into training and testing datasets
testRows = sample(nrow(employee_turnover),0.2*nrow(employee_turnover))
testData = employee_turnover[testRows, ]
trainData = employee_turnover[-testRows, ]
row.names(trainData) <- NULL
head(trainData) #display train data
```

## Question 1: Data Exploration (11 points)

**Use the FULL dataset "employee_turnover" for Question 1**

**1a) (2 points) What is the median "Monthly_Working_Hours" for
employees across different workplaces?**

***Note*****: Answer must be grouped by "Workplace_Flexibility".**

```{r}
#Code
# 计算每种工作灵活性下的月工作小时中位数
median_working_hours <- aggregate(Monthly_Working_Hours ~ Workplace_Flexibility, 
                                  data = employee_turnover, 
                                  FUN = median)
print(median_working_hours)

```

**1b) (2 points) What is the proportion of employees who stayed with the
company (i.e., did not leave) for each type of "Health_Benefits"?**

***Note*****: As an example, the proportion of employees who stayed with
the company for Full Coverage equals the number of employees with full
coverage who stayed divided by the number of employees with full
coverage.**

```{r}
#Code
# 计算各健康福利下员工留存比例
stay_proportion <- aggregate(Turnover ~ Health_Benefits, 
                             data = employee_turnover, 
                             FUN = function(x) mean(x == 0))
print(stay_proportion)

```

**1c) (2 points) Print the rows with the highest
"Salary_Increase_Percentage". Identify the qualitative variable
responses that are the same between the rows with the highest
"Salary_Increase_Percentage"?**

```{r}
#Code
# 找出 Salary_Increase_Percentage 最高的行
highest_salary_increase <- employee_turnover[employee_turnover$Salary_Increase_Percentage == max(employee_turnover$Salary_Increase_Percentage), ]
print(highest_salary_increase)

```

**Answer to question 1c**:

**1d) (5 points) Create boxplots and interpret each plot for the
following predictors against the response variable (Turnover).**

**i) Monthly_Working_Hours**

**ii) Years_With_Company**

**In general, using boxplots, can we make statements about statistical
significance of the differences between the group means? How can we
infer if the group means are statistically significantly different from
each other?**

```{r}
#Code
# 月工作小时数和公司年限的箱线图
boxplot(Monthly_Working_Hours ~ Turnover, data = employee_turnover, main = "Monthly Working Hours vs Turnover")
boxplot(Years_With_Company ~ Turnover, data = employee_turnover, main = "Years with Company vs Turnover")

```

**Answer to question 1d**:

## Question 2: Logistic Regression Model (17 points)

**2a) (6 points) In this question, you will fit a reduced model:**

**i) Using the dataset “trainData”, create a logistic regression model
(call it "*model1*") using "Turnover" as the response variable, and
Office_Location, Health_Benefits, Monthly_Working_Hours as the predictor
variables. (2 points)**

```{r}
# 创建逻辑回归模型
model1 <- glm(Turnover ~ Office_Location + Health_Benefits + Monthly_Working_Hours, 
              data = trainData, family = binomial)
summary(model1)
```

**ii) (2 points) Using "model1",  interpret the coefficients of the
following predictors below with respect to BOTH the log-odds of turnover
and the odds of turnover.**

**1) Monthly working hours 2) Health_BenefitsPartial Coverage.**

**Answer to Question 2a(ii):**

**iii) Is the model with all the predictors better at predicting the
response than a model with just an intercept term? Explain your
reasoning. (2 points)**

***Note*****: You can use only the summary output for model1 to answer
this question.**

**Answer to Question 2a(iii):**

**2b) (4 points) In this question, you will fit the full model:**

**i) (2 points) Using the "trainData" dataset, create a logistic
regression model using Turnover as response variable and all variables
in "trainData" as predictors (call it model2) and display the summary of
model2.** 

```{r}
# 创建包含所有变量的完整模型 model2
model2 <- glm(Turnover ~ ., data = trainData, family = binomial)
summary(model2)

```

**ii)(2 points) Compare the full logistic regression model (model2) from
Question (2bi) against the reduced model (model1) from Question (2ai).
What can you conclude from the results of this comparison using a
significance level of alpha=0.01?**

```{r}
# 比较 model2 和 model1
anova(model1, model2, test = "Chisq")
```

**Response to question (2b(ii))**:

**2c) (2 points) Perform a test for overall regression of the logistic
regression "model2", using a significance level of alpha=0.05. Does the
overall regression have explanatory power? Provide interpretation of the
test.**

```{r}
# 使用显著性水平alpha=0.05进行整体回归检验
# 提取模型2的残差偏差和自由度
model2_deviance <- model2$deviance
model2_df <- model2$df.residual

# 使用无解释变量的模型的残差偏差和自由度
null_deviance <- model2$null.deviance
null_df <- model2$df.null

# 计算卡方统计量
chi_square_stat <- null_deviance - model2_deviance
chi_square_df <- null_df - model2_df

# p值计算
p_value <- pchisq(chi_square_stat, chi_square_df, lower.tail = FALSE)
print(paste("Chi-square Statistic:", chi_square_stat))
print(paste("Degrees of Freedom:", chi_square_df))
print(paste("P-value:", p_value))

# 判断是否具有解释力
if (p_value < 0.05) {
  print("模型具有解释力")
} else {
  print("模型不具有解释力")
}

```

**Response to question (2c)**:

```{r}
# 查看 model2 的回归结果摘要
summary(model2)

```

**2d)(5 points) Using "model2", apply hypothesis testing for a
regression coefficient at the 0.01 significance level.**

**i) (1 point) Is the coefficient of “Number_of_Trainings_Attended”
statistically significant?**

**ii) (1 point) State the Null and alternative hypotheses of the test.**

**iii) (1.5 points) Describe the approach we would use to determine the
statistical significance of the regression coefficient.**

**iv) (1.5 points) What is the sampling distribution that the test
statistic follows?** 

**Response to question 2d(i):**

**Response to question 2d(ii):**

**Response to question 2d(iii):**

**Response to question 2d(iv):**

## Question 3: Decision Tree and Random Forest Models (6 points)

**3a) (4 points) Using the dataset "trainData", fit the following
classification models below using all the predictors in "trainData" and
"Turnover" as the response variable.**

**i) Decision Tree Model (call it *model3*).**

**ii) Random Forest Model (call it *model4*).**

**Use metric = “Accuracy”, trControl = trainControl(method=“cv”,
number=3) for both models. Display the summary of both models and state
the average accuracy for both resampled models.**

```{r}
# Decision Tree
# 安装 randomForest 包
install.packages("randomForest")

# 加载必要的包
library(caret)
library(randomForest)

# 决策树模型
control <- trainControl(method = "cv", number = 3)
model3 <- train(Turnover ~ ., data = trainData, method = "rpart", trControl = control, metric = "Accuracy")
print(model3)

# 随机森林模型
model4 <- train(Turnover ~ ., data = trainData, method = "rf", trControl = control, metric = "Accuracy")
print(model4)

```

```{r}
# Random Forest


```

**3b) (2 points) Which model performed better when comparing the average
accuracy of the resampled decision tree and random forest models?
Explain the difference between the decision tree model and the random
forest model.**

**Answer to Question 3b**

## Question 4: Prediction (14 points)

**Use the "testData" for all questions in this question.**

**4a)(4 points) Using testData, predict the probability of an employee
leaving, i.e. being a turnover, and output the AVERAGE of these
probabilities for each of the models below:**

**i) model1 (question 2a) ii) model2 (question 2b) iii) model3 (question
3a) and iv) model4 (question 3a)**

```{r}
# 使用测试数据预测员工流失概率
pred_prob1 <- predict(model1, newdata = testData, type = "response")
pred_prob2 <- predict(model2, newdata = testData, type = "response")
pred_prob3 <- predict(model3, newdata = testData)
pred_prob4 <- predict(model4, newdata = testData)

# 计算平均概率
mean_probs <- data.frame(
  Model1 = mean(pred_prob1),
  Model2 = mean(pred_prob2),
  Model3 = mean(pred_prob3),
  Model4 = mean(pred_prob4)
)
print(mean_probs)


```

**4b) (4 points) Using the probabilities from Q4a and a threshold of 0.5
(inclusive of 0.5), obtain the classifications of an employee being a
turnover for all four models. Note: every row in the testData prediction
must be classified. Print the last ten classification rows for all the
model classifications as well as the actual response for Turnover of
those rows.**

```{r}
# 根据预测概率和0.5的阈值进行分类
classifications1 <- ifelse(pred_prob1 >= 0.5, 1, 0)
classifications2 <- ifelse(pred_prob2 >= 0.5, 1, 0)
classifications3 <- ifelse(pred_prob3 >= 0.5, 1, 0)
classifications4 <- ifelse(pred_prob4 >= 0.5, 1, 0)

# 获取最后十行的分类结果和实际值
last_ten_results <- data.frame(
  Actual = tail(testData$Turnover, 10),
  Model1_Pred = tail(classifications1, 10),
  Model2_Pred = tail(classifications2, 10),
  Model3_Pred = tail(classifications3, 10),
  Model4_Pred = tail(classifications4, 10)
)

print(last_ten_results)


```

**4c) (6 points) In this question, you will compare the prediction
accuracy of the four models.\
i) (4 points) Using the classifications from Q4b, create a confusion
matrix and output the classification evaluation metrics (i.e. Accuracy,
Sensitivity, and Specificity) for all four models. Note: every row in
the testData classification must be used (do not use only the last ten
classification rows).**"

**ii) (2 points) Which metric measures the rate of true negatives? Which
model shows the highest value for this metric?** 

```{r}
# 将实际结果和预测结果都转换为因子，并确保级别一致
actual <- factor(actual, levels = c(0, 1))
pred_class1 <- factor(pred_class1, levels = c(0, 1))
pred_class2 <- factor(pred_class2, levels = c(0, 1))
pred_class3 <- factor(pred_class3, levels = c(0, 1))
pred_class4 <- factor(pred_class4, levels = c(0, 1))

# 计算混淆矩阵和指标
library(caret)

# 计算混淆矩阵和指标并输出
conf_matrix1 <- confusionMatrix(pred_class1, actual)
conf_matrix2 <- confusionMatrix(pred_class2, actual)
conf_matrix3 <- confusionMatrix(pred_class3, actual)
conf_matrix4 <- confusionMatrix(pred_class4, actual)

# 输出每个模型的准确率、敏感性和特异性
cat("Model 1:\n", conf_matrix1$overall["Accuracy"], "\n", conf_matrix1$byClass[c("Sensitivity", "Specificity")], "\n")
cat("Model 2:\n", conf_matrix2$overall["Accuracy"], "\n", conf_matrix2$byClass[c("Sensitivity", "Specificity")], "\n")
cat("Model 3:\n", conf_matrix3$overall["Accuracy"], "\n", conf_matrix3$byClass[c("Sensitivity", "Specificity")], "\n")
cat("Model 4:\n", conf_matrix4$overall["Accuracy"], "\n", conf_matrix4$byClass[c("Sensitivity", "Specificity")], "\n")


```

**Response to question 4c(ii) :**

## Question 5: Poisson Regression Model (12 points)

**Use the "quine_dataset" for Question 5.**

### Background

This data frame contains the following columns:

`Eth`

:   ethnic background: Aboriginal or Not, (`"A"` or `"N"`).

`Sex`

:   sex: factor with levels (`"F"` or `"M"`).

`Age`

:   age group: Primary (`"F0"`), or forms `"F1,"` `"F2"` or `"F3"`.

    -   **F0**: Primary school age (youngest children)
    
    -   **F1**: First-year high school (Form 1)
    
    -   **F2**: Second-year high school (Form 2)
    
    -   **F3**: Third-year high school (Form 3)

`Lrn`

:   learner status: factor with levels Average ("AL") or Slow learner
    ("SL")

`Days`

:   days absent from school in the year.

```{r}
# Read data
quine_dataset = read.csv("quine_dataset.csv", header=TRUE, na.strings = "")

# Remove any potential trailing white space from column names
names(quine_dataset) <- trimws(names(quine_dataset), which = "right")

# Show first few rows
head(quine_dataset)
```

**5a) (4 points)**

**i)(2 points) Plot a histogram of the count of "Days" from the
"quine_dataset"**

```{r}
# Check the distribution of the response, Days
# 绘制 Days 的直方图
hist(quine_dataset$Days, main = "Distribution of Days Absent", xlab = "Days Absent")

```

**ii)(2 points) Create boxplots of the response variable “Days” against
the predicting variable “Sex”. Explain the relationship between the
response variable and predicting variable based on the boxplot. Using
the boxplot only, do you observe any overlap or potential outliers?**

```{r}
#Code
# 绘制 Days 与 Sex 的箱线图
boxplot(Days ~ Sex, data = quine_dataset, main = "Days Absent by Sex")

```

**Response to Q5a(ii)**

**5b) (4 points)\
i) Fit a poisson regression model using all the predictors from the
“quine_dataset” and “Days” as the response variable. Call
it pois_model1 and display the model summary**

**ii) Interpret the coefficient of “AgeF2” in pois_model1 with respect
to the log expected "Days".**

**iii) Interpret the coefficient of “EthN” in pois_model1 with respect
to the rate ratio of "Days".**

**iv) Why can't we use a standard regression model with the log
transformation of the response variable instead of creating a Poisson
regression model?**

```{r}
# 拟合泊松回归模型
pois_model1 <- glm(Days ~ ., data = quine_dataset, family = poisson)
summary(pois_model1)

```

**Response to question 5b(ii):**

**Response to question 5b(iii):**

**Response to question 5b(iv):**

**5c)(4 points)**

**i) Calculate the estimated dispersion parameter for "pois_model1"
using both the deviance and Pearson residuals. Is this an overdispersed
model using a threshold of 2.0? Justify your answer.**

**ii) Create a proposed model (call it "pois_model2") that handles
overdispersion using the quine_dataset.**

**iii) Explain the concept of overdispersion in Poisson regression and
discuss the potential causes of overdispersion.**

**iv) Describe how overdispersion can affect the reliability of
statistical inference in Poisson regression models.**

```{r}
# 计算德维恩斯和皮尔森残差离散参数
deviance_dispersion <- summary(pois_model1)$deviance / summary(pois_model1)$df.residual
pearson_dispersion <- sum(residuals(pois_model1, type = "pearson")^2) / summary(pois_model1)$df.residual
print(deviance_dispersion)
print(pearson_dispersion)

```

**Response to Q5c(i)**

**Response to Q5c(ii)**

```{r}
# 如果发现存在过度离散，可以使用负二项回归模型来处理
library(MASS)
pois_model2 <- glm.nb(Days ~ ., data = quine_dataset)
summary(pois_model2)

```

**Response to Q5c(iii)**

**Response to Q5c(iv)**

**End of exam**

























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
