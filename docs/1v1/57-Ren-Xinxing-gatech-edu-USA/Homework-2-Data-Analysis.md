---
title: Homework 2 Data Analysis
date: 2024-09-29 18:09:53
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

## Instructions

1. Submit your responses in a single knitted file, following the Homework Structure which requires model outputs, plots, and code for all questions to be submitted in a single **HTML file** by **Sept 29 at 11:59 p.m. Eastern****. [[Time converter](https://www.timeanddate.com/worldclock/converter.html?iso=20180528T040000&p1=1440&p2=tz_et)]**
2. The solutions will be made available on **Oct 1 at 1:00 a.m. Eastern**. You will need to assess **three** of your peers to complete the Data Analysis by **Oct 6 at 11:59 p.m. Eastern****. Students who do not submit the graded assessments before the deadline will receive a zero on their own Data Analysis.**
3. **Before you begin, please review the following document:** [DONT_CHEAT.docx](https://gatech.instructure.com/courses/410684/files/52251675?wrap=1). Cheating is not helping you learn and be successful. It does the opposite. While you may collaborate with other students, please submit your own responses to the data analysis questions. Please refrain from consulting prior homework solutions or other materials that provide answers to the data analysis questions. Any case identified as potential plagiarism will result in a zero grade for the assignment and it will be reported to the OMSA program.

**To maintain the integrity of this course:**

**1. Do not plagiarize (even if it is a particular question). This is an automatic zero for the entire HW and your lowest HW grade will not be dropped.** 

**2. Do not use any AI tools such as chatGPT or CoPiliot.**

**3. Non-HTML submissions are not accepted. Submitting the wrong file type is an automatic zero.**

**Data Analysis (60 points)**

For this assignment, you are provided with **templates in R and python languages**:

[Fall2024-HW2-Starter-Template-Python.ipynb](https://gatech.instructure.com/courses/410684/files/54044511?wrap=1)[Download Fall2024-HW2-Starter-Template-Python.ipynb](https://gatech.instructure.com/courses/410684/files/54044511/download?download_frd=1)

[Fall2024-HW2-Starter-Template-R.Rmd](https://gatech.instructure.com/courses/410684/files/54044517?wrap=1)[Download Fall2024-HW2-Starter-Template-R.Rmd](https://gatech.instructure.com/courses/410684/files/54044517/download?download_frd=1)

[Fall2024-HW2-Starter-Template-R.ipynb](https://gatech.instructure.com/courses/410684/files/54044513?wrap=1)[Download Fall2024-HW2-Starter-Template-R.ipynb](https://gatech.instructure.com/courses/410684/files/54044513/download?download_frd=1)

## Background

In homework 2, we again visit the sales dataset used in homework 1.

[large_sales_dataset.csv](https://gatech.instructure.com/courses/410684/files/53346897/download?download_frd=1)[Download large_sales_dataset.csv](https://gatech.instructure.com/courses/410684/files/53346897/download?download_frd=1)

## Data Description

As a reminder, the dataset contains the following columns:

1) Customer_ID: Unique identifier for each customer.
2) Product_Category: Category of purchased product (e.g. ‘Books’, ‘Electronics’, ‘Toys’, ‘Clothing’, etc.).
3) Purchase_Amount: Total amount, in dollars, spent on each purchase.
4) Purchase_Date: Date of transaction.
5) Customer_Age: Age of customer at time of purchase.
6) Customer_Gender: Gender of the customer (‘Male’ or ‘Female’).
7) Store_Location: Location of store where purchase occurred.
8) Satisfaction_Score (response variable) : Numeric response variable indicating customer’s satisfaction level from 0 (least satisfied) to 10 (most satisfied).

**set.seed(17)** # Seed set to ensure reproducible results. DO NOT CHANGE SEED.

## Question 1: Data Preparation (6 points)

1a) Create a dataframe, “sales_data”, from “large_sales_dataset.csv”. The following columns should be treated as categorical variables: “Prodcuct_Category”, “Customer_Gender”, “Store_Location”. Column “Purchase_Date” should be in an appropriate date format. Sort “sales_data” by the Satisfaction_Score (from low to high), print the first 10 rows of the dataframe, then print minimum, maximum, 10th percentile, 25th percentile, 50th percentile, 75th percentile, 90th percentile, average, and median Satisfaction_Score. Note: the sorting should be permanently (not temporarily) stored unless otherwise stated. (3 points)

1b) Suppose management is concerned that specific customers with frequent purchases may skew sales results. How many customers have made more than 5 purchases? List the customer IDs of customers that have made more than 5 purchases. Tip: do not list IDs of customers that have made exactly 5 purchases, only list those greater than 5 purchases (2 points)

1c) If the customers with more than 5 purchases have made more than 5 purchases at a single Store_Location, management would like to exclude these customers from future analyses. For each customer identified in 1b, list the Store_Location where they made purchases. Have the customers identified in question 1b made more than 5 purchases at a single Store_Location? (1 point)



## Question 2: Data preparation (9 points)

2a) Create a well-labeled stacked bar chart showing the proportion of purchases from each Product_Category in each Store_Location. Note: Store_Location should be on the x-axis, proportion of purchases should be on the y-axis, and the stacked bar chart should be colored by Product_Category which should also be the legend. The proportion should be based on number of purchases, not on the purchase amount. The proportion is a value between 0 and 1 and is not equal to the number of purchases (3 points)

2b) What Product_Category accounts for the lowest cumulative purchase amount (use values in “Purchase_Amount”)? (1 point)

2c) Which Store_Location has the highest proportion of furniture purchases? The proportion should be based on number of purchases, not on purchase amount. (1 point)

2d) Which Store_Location has the lowest total purchases (use amounts in “Purchase_Amount”)? (1 point)

2e) Unfortunately, let’s imagine that management has decided to close the Denver store location and also stop selling furniture across all store locations. Create a new dataframe called “filtered_sales_data”, where rows that contain “Denver” in “Store_Location” or “Furniture” in “Product_Category” are removed. The resulting dataframe must have 812 observation rows and 8 variables. Sort filtered_sales_data by Customer_ID in descending order and print rows 150 to 160 of the resulting dataframe. Note: the sorting should be permanently (not temporarily) stored unless otherwise stated. (3 points)



## Question 3: Exploratory Data Analysis (8 points)

3a) Using the dataframe “filtered_sales_data” from Question 2e), split filtered_sales_data into a 20% test set and a 80% training set. Store the test set into “test_sales_data” and the training set into “train_sales_data”. Sort the train and test sets by Purchase_Date in ascending order, then remove the row names and print the first 5 rows of both the test_sales_data and train_sales_data. We will be using these going forward. Note: the sorting should be permanently (not temporarily) stored unless otherwise stated. Note: The resulting test dataframe must have 162 observation rows and 8 variables while the training dataframe must have 650 observation rows and 8 variables. The seed was already set earlier in the notebook so do not change the seed and there is no need to re-set the seed. Tip: Use sample.int(). Use the ceiling function in the size argument. (3 points)

3b) Using “train_sales_data”, create an Hexbin Plot of the response, “Satisfaction_Score” against “Purchase_Amount”. Calculate then output the R-squared and comment on the direction (positive or negative) and strength of the correlation (<=0.3: weak; >0.3 and <0.7: moderate; >=0.7: strong). (2 points)

3c)Using “train_sales_data”, create a boxplot of the response, Satisfaction_Score, vs. Purchase_Month. You will have to calculate Purchase_Month by using Purchase_Date. Ensure Purchase_Month is a categorical variable and ranges from 01 - 12. From observation of the boxplot, what month has the highest median satisfaction score? Using just the resulting boxplot, is the satisfaction score for any of the month significantly different from the satisfaction scores of the other months? Note: we will now have 9 variables (since we added Purchase_Month) in the resulting train and test dataframes (3 points)



## Question 4: Multiple Linear Regression (15 points)

4a) Using train_sales_data, create a multiple linear regression model and call it “model1” with Satisfaction_Score as the response then Product_Category, Purchase_Amount, Customer_Age, Customer_Gender, Store_Location, and Purchase_Month as the predictors. Print the model summary. Is the model of any use in predicting Satisfaction_Score? using α = 0.05, provide the following elements of the test of overall regression of the model: null hypothesis H0, alternative hypothesis Ha, F-statistic or p-value, and conclusion (3 points)

4b) Using α = 0.05, which of the estimated coefficients are statistically significant in model1 (2 points)

4c) What is the interpretation of the intercept coefficient with respect to the satisfaction score? In other words, what does the intercept represent for this particular model (2 points)

4d) What is the interpretation of the Purchase_Amount coefficient? (2 points)

4e) Create scatter plots of the standardized residuals of model1 vs. the quantitative predictors (Purchase_Amount, Customer_Age). Using these plots, does the linearity assumption hold for these predictors? (2 points)

4f) Create a scatterplot of the standardized residuals vs. the fitted values of model1. Does the constant variance assumption hold? Does the assumption of uncorrelated errors hold? (2 points)

4g) Create a histogram and normal QQ plot of the standardized residuals. A 95% pointwise confidence envelope must be used for the QQ plot. Does the assumption of normality hold? (2 points)



## 5) Multi-collinearity and Outliers (9 points)

5a) Calculate the VIF of each predictor in model1. Using a VIF threshold of **max(10,1/(1−R2))** what conclusion do you make regarding multicolinearity? (2 points)

5b) Create a plot of Cook’s distances for model1. Using a threshold of 4/n, print the calculated threshold. Are there any outliers present? How many outliers do we have? Output the highest 5 outlier rows from train_sales_data (since we used train_sales_data to create model1). (5 points)

5c) Create a new dataframe from train_sales_data and call it train_sales_data_cook. This dataframe should exclude the outliers identified in Question (5b) above. Sort the dataframe by Purchase_Amount in descending order and print the first 5 rows. Note: the sorting should be permanently (not temporarily) stored unless otherwise stated. (2 points)

## 6) Subsets of Coefficients (6 points)

6a) Calculate the 95% confidence interval for the regression coefficient of Customer_Age in model1. What can you conclude from the 95% confidence interval for the Customer_Age coefficient? (1 point)

6b) Using train_sales_data, create a new model and call it “model_no_age” with the same response and predictors as “model1”, but without the predictor Customer_Age. Print the model summary. (1 point)

6c) Perform a partial F-test between model_no_age and model1. What is the F-value and the corresponding p-value of the test? What is your interpretation of the test (use an alpha level of 0.05 when evaluating the p-value)? (3 points)

6d) Using the dataset created in Question (5c) after our outlier analysis i.e. train_sales_data_cook, create a new model and call it “model_outlier”, with Satisfaction_Score as the response and Product_Category, Purchase_Amount, Customer_Gender, Store_Location and Purchase_Month as the predictors (note that we are excluding Customer_Age compared to model1). Print the model summary. (1 point)



## 7) Prediction (5 points)

7a) Use model1, model_no_age, and model_outlier to predict the Satisfaction_Score for each row in test_sales_data. Calculate and output the mean squared prediction error (MSPE) for each model’s predictions. You will have to add Purchase_Month to test_sales_data as you did to train_sales_data. Which model has the lower MSPE? (2 points)

7b) Print the Adjusted R-squared for model1, model_no_age, and model_outlier? Comment on what you observed considering what you also observed from the mean squared prediction error (MSPE) from Question (7a) (1 point)

7c) Suppose there is a purchase with the following data: Product_Category: Electronics; Purchase_Amount: 574.99; Customer_Gender: Female; Customer_Age: 39; Store_Location: San Francisco; Purchase_Month: 06. Use model1 to predict the Satisfaction_Score of the purchase with a 95% prediction interval. What is the interpretation of this interval? (2 points)

## 8) Alternate Qualitative Pre-processing (2 points)

Write (with explanations) separate R codes where model.matrix() and as.factor() is used in pre-processing and another where only as.factor() is used in pre-processing on the R built-in “mtcars” dataset (since it has both quantitative and qualitative prediction variables). Build two multiple linear regression models using those pre-processing techniques with `mpg` (miles per gallon) as the response variable, `cyl` (number of cylinders, a qualitative variable), and `hp` (horsepower, a quantitative variable) as predictors. Compare and explain any similarities and differences between the model summary outputs for these 2 models. Tip: For those using python, you load the mtcars dataset from R into a pandas DataFrame in Python, allowing you to work with it using familiar Python tools. (2 points)





















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
