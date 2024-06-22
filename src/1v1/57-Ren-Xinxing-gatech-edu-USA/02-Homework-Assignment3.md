---
title: HW3 Part 2 MGT 6203
date: 2023-11-11 17:31:00
author: AI悦创
isOriginal: true
category: 
    - Python辅导
    - Python 作业代写
tag:
    - gatech.edu
    - 乔治亚理工
icon: zhuanjiaketang-jihuo
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

````python
## Instructions for Q2. 

### For Q2, you will use logistic regression to segment customers into two classes.  This questions is adapted from a Kaggle contest to evaluate current customers for an auto dealership that is opening a new location.  The dealership wishes to reliably segment customers in order to streamline marketing efforts when their new location opens.  (16 Points)

** The data for these questions is contained in the file: auto_customers_two_segments.csv, which includes the following fields:**

<br /> *ID: Unique ID created by dealership* 
<br /> *Gender: Gender of the customer*
<br />  *Ever_Married: Marital status of the customer*
<br /> *Age: Age of the customer*
<br /> *Graduated:Is the customer a college graduate?*
<br /> *Profession:Profession of the customer*
<br /> *Work_Experience: Work experience in years*
<br /> *Spending_Score: Spending score of the customer.*
<br /> *Family_Size: Number of family members (including customer)*

```r
# Load necessary library and data
suppressPackageStartupMessages(library(tidyverse))
suppressPackageStartupMessages(library(knitr))
library(caret)

#load data from file
data_Q2 = read.csv('../resource/asnlib/publicdata/auto_customers_two_segments.csv')
```
### A. We will need to do some cleaning of the data set.    (2 Points)
### 1) Remove all rows with na values.
### 2) Remove all rows with data points that are blank (these are " " values in the data).  You can use dplyr or other methods to complete this step.
### 3) What are the customer segment labels (Segmentation column) and how many customers are in each segment?
```r
# SOLUTION BEGINS HERE
# Remove n/a values
# Remove all rows with '' values
# SOLUTION ENDS HERE
```
### B. We have now finished cleaning the data and are ready to build a model.  Segment A represents the most desirable customers and segment B represents customers who have made purchases, but are not as likely to have a high or average spending score.  Create a logistic regression model using Segmentation as the response variable and all other variables as the predictors.    (2 Points)
```r
# SOLUTION BEGINS HERE
# SOLUTION ENDS HERE
```
### C. Use the cleaned data set for both training and testing data and make predictions of the probability for each customer. (We are using the same data here for testing and training only for simplicity of the problem.)   (2 Points)
### Hint: You may use the predict() function on the model using the data to create a prediction vector of probabilities.
```r
# SOLUTION BEGINS HERE
# SOLUTION ENDS HERE
```
### D. Use cutoff probability values in (0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8) and predict the accuracy of the model for each cutoff probability value. Round to three decimal places, for example, 0.456. (2 Points)

### Classify each predicted value as 1 (positive/success) or 0 (negative/failure) using the cutoff probability value as a boundary. Compare predicted class to expected class for each data point to calculate accuracy (TP + TN) / (TP + TN + FP + FN)
### You will have 7 calculations for accuracy here.  One for each cutoff probability value.
### Note: The cutoff probability value is not the same as the p value when evaluating the significance of coefficients in the logistic regression model.  The cutoff probability value is only used to classify predictions.
```r
# SOLUTION BEGINS HERE
# SOLUTION ENDS HERE
```
### E. Which cutoff probability value results in the highest accuracy for the model? What is the accuracy as a percentage? Round to 1 decimal place, for example, 80.5%.(2 Points)  
```r
# SOLUTION BEGINS HERE
# SOLUTION ENDS HERE
```
### F. Now we have created a model and found the model that produces the highest accuracy. Create a confusion matrix using predictions from the optimal cutoff probability value above. (2 Points)
### (Hint: You may use the caret package function confusionMatrix() to automate this process.  Make sure to confirm that your 'positive' class matches your 'positive' class for the model.)
```r
# SOLUTION BEGINS HERE
# Create a predicted probability vector for optimized p
# Create a results data frame with expected and predicted vectors
# Create confusion matrix
# SOLUTION ENDS HERE
```
### G.Report the Accuracy, Sensitivity and Specificity for the chosen model as percentages. ( 2 Points)
```r
# SOLUTION BEGINS HERE
# SOLUTION ENDS HERE
```
### H. You have shared your results with the auto dealership's leadership team.  They are concerned that too many customers in segment A are classified as segment B.  How would you adjust your model to capture more of the misclassified segment A customers?  Are there any downsides to adjusting your model this way? ( 2 Points)
#### Short answer only, you don't need to produce any more models.  You may find it helpful to run different models to confirm your predicted answer.
```r
# SOLUTION BEGINS HERE
# SOLUTION ENDS HERE
```
````

Create a function which concatenates two dictionaries. If the two dictionaries have the same key then their values are added.

For instance:

(1) If the two dictionaries are `{'a': 1, 'b': 2}` and `{'d': 4}` then the function should return `{'a': 1, 'b': 2, 'd': 4}`

(2) If the two dictionaries are `{'a': 1, 'b': 2}` and `{'a':3, 'd': 4}` then the function should return `{'a': 4, 'b': 2, 'd': 4}`.

```python
#Question 4

def concatenate_dict(d1,d2):
    """ put two dictionaries together
        if they contain the same key, add the corresponding values
    """

    
    
    
    
print(concatenate_dict({'a':1,'b':2},{'d':4})) #should return {'a': 1, 'b': 2, 'd': 4}
print(concatenate_dict({'a':1,'b':2,'d':4,'m':4},{'d':2,'e':7,'m':11})) #should return {'a': 1, 'b': 2, 'd': 6, 'm': 15, 'e': 7}
print(concatenate_dict({'a':12},{'a':2})) #should return {'a': 14}
```

```python
from collections import Counter

def concatenate_dict(d1, d2):
    
    return print(Counter(d1)+Counter(d2) )
```























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
