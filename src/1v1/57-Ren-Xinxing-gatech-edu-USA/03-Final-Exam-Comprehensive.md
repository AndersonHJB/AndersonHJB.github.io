---
title: Final Exam Comprehensive
date: 2023-12-12 10:13:28
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

The Final Exam is comprehensive and includes content from both pre/post midterm. All topics covered in the course are eligible. This exam is un-proctored throughout the window. Student may use R and other resources throughout, but may NOT discuss the exam publicly or privately with other students. Doing so will result in academic honesty violations. The exam is worth 25% of your overall grade. Reach out to instructors only via a private piazza post for any issues. Good luck!

1. What would be the null hypothesis for the regression F-test for the following equation:

$Y = \beta_0 + \beta_1x_1 + \beta_2x_2 + \mu$

A. $\beta_1 = 0 \text{ and } \beta_2 = 0$ ✅

B. $\beta_1 = 0 \text{ or } \beta_2 = 0$

C. $\beta_0 = 0 \text{ and } \beta_1 = 0 \text{ and } \beta_2 = 0$

D. $\beta_0 = 0 \text{ or } \beta_1 = 0 \text{ or } \beta_2 = 0$

2. Which of the following is NOT needed to establish causation? 

A. Hypothesized cause must precede its anticipated effect

B. Other possible explanations that can cause the effect must be ruled out

C. Change in cause must lead to a change in effect

D. The effect must always have a reverse impact on the cause ✅

3. Which of the following is most likely to happen if in the long-term excessive investments are made into systematic factor funds? 

A. The average annual return premiums of the factors will go down✅

B. The average annual return premium of the factors will go up

C. The average annual return premiums of the factors will not change

D. None of the above



15. The weak form of the efficient market hypothesis implies that (select all that apply):

A. Security prices reflect all information found in past prices and volume ✅

B. Past price changes can be used to predict future price changes

C. Security prices reflect all publicly available information

D. Security price reflect all public and private information

E. Security prices reflect all past price, volume, and public information

F. Only major market events can be predicted

16. Which of the following is true about Exponential Smooth's alpha? (Select all that apply)

A. It denotes importance of the past error.✅

B. A large alpha means the forecast is reactive.✅

C. The closer alpha is to one, the more data points it uses in the forecast

D. It determines how much the error alters the next prediction.✅

29. Consider the following Break-Even Point Analysis:

| Metric          | Value |
| --------------- | ----- |
| Average CPC     | 1.58  |
| Avg Sale Value  | 70    |
| Conversion Rate | 0.03  |
| Profit Margin   | 0.17  |
| Lifetime Value  | 102   |

What is the Break-Even Point CPC for Lifetime Value?

 Round to the nearest penny or second decimal point.

$\text{Break-Even CPC} = \frac{\text{Lifetime Value} \times \text{Conversion Rate} \times \text{Profit Margin}}{1}$



Please use the Facebook Ad dataset [*KAG_wrangled_dataset**.csv*](https://quiz-api-production-s3-uploads-9bc92eovor5s.s3.amazonaws.com/quiz_assets/f4e2e84d-489a-4bad-b383-a3a375542ef7/2217e267f0b9a24bd887cea950f41b9e.csv)for the next set of questions. We advise to solve these questions using R (preferably using *dplyr* library wherever applicable) after reviewing Week 7 and other resources provided for learning *dplyr* in R Learning Guide  

**NOTE**: For no clicks and no amount spent, please consider CPC as 0 for all the questions. 

Load the dataset as:

 ```r
 data <- read.csv("KAG_wrangled_dataset.csv ",stringsAsFactors = FALSE)   
 ```

1. Of all the ads with more than 10,000 impressions, what percentage of these ads were targeted at females? Note: Please round the answer to 2 decimal places.  

    A. 51.46%

    B. 68.58%

    C. 69.51%

    D. 48.54%

2. For the campaign id (xyz) “916”, what is the mean conversion rate? Here, the conversion rate for each ad id is defined as approved conversions / total conversions. Please round your answer to three decimal place. ***Note that Conversion rate is 0 where*** ***total conversion is 0*** 

    A. 0.572

    B. 0.417

    C. 0.329

    D. 0.544

3. Which of the following market segments has the highest average cost-per-click  

    Note: Average Cost-Per-Click = total spent/total clicks 

    A. Males, Age 30 – 34

    B. Females, Age 40 –44

    C. Males, Age 45 – 49

    D. Females, Age 35 – 39

   

解答如下：

1. 在所有展示次数超过10,000次的广告中，有 **48.54%** 针对女性用户。因此正确答案是 D. 48.54%。

2. 对于活动编号（xyz）为“916”的广告，平均转化率是 **0.417**。因此正确答案是 B. 0.417。

3. 在以下市场细分中，平均每点击成本最高的是 **男性，年龄30-34**。因此正确答案是 A. Males, Age 30 – 34。

::: details old

```python
import pandas as pd

# 加载数据集
file_path = 'KAG_wrangled_dataset.csv'
data = pd.read_csv(file_path)

# 第1题：计算超过10,000次展示的广告中针对女性的比例
ads_over_10000_impressions = data[data['Impressions'] > 10000]
female_targeted_ads_percentage = (ads_over_10000_impressions['gender'] == 'F').mean() * 100
female_targeted_ads_percentage_rounded = round(female_targeted_ads_percentage, 2)

# 第2题：计算活动编号为916的平均转化率
campaign_916_ads = data[data['xyz_campaign_id'] == 916]
campaign_916_ads['conversion_rate'] = campaign_916_ads.apply(
    lambda row: row['Approved_Conversion'] / row['Total_Conversion'] if row['Total_Conversion'] > 0 else 0, 
    axis=1
)
mean_conversion_rate_916 = campaign_916_ads['conversion_rate'].mean()
mean_conversion_rate_916_rounded = round(mean_conversion_rate_916, 3)

# 第3题：计算不同市场细分的平均每点击成本
def calculate_avg_cost_per_click(segmented_data):
    total_spent = segmented_data['Spent'].sum()
    total_clicks = segmented_data['Clicks'].sum()
    return total_spent / total_clicks if total_clicks > 0 else 0

segments = [
    ("M", "30-34"),
    ("F", "40-44"),
    ("M", "45-49"),
    ("F", "35-39")
]

avg_cost_per_click_results = {}
for gender, age in segments:
    segmented_data = data[(data['gender'] == gender) & (data['age'] == age)]
    avg_cost_per_click_results[(gender, age)] = calculate_avg_cost_per_click(segmented_data)

highest_avg_cpc_segment = max(avg_cost_per_click_results, key=avg_cost_per_click_results.get)

# 输出结果
female_targeted_ads_percentage_rounded, mean_conversion_rate_916_rounded, highest_avg_cpc_segment

```

:::



**Use the provided dataset** [**Final_Exam_Factors.csv**.](https://quiz-api-production-s3-uploads-9bc92eovor5s.s3.amazonaws.com/quiz_assets/f4e2e84d-489a-4bad-b383-a3a375542ef7/52741e832ee060c15d00d12d9df74eba.csv) **to construct factor regression models for NVDA and** **INTC****.** **((Use all factors provided to construct the factor regression model. Please note, date is not a factor and will not be used as a feature in your model. Also, the monthly returns for both stocks are the total return and not excess return)** 

Date: Monthly dates from 1/31/2007 - 6/30/2018 

SMB: The monthly return factor attributed to the size factor 

HML: The monthly return factor attributed to the value factor 

QMJ: The monthly return factor attributed to the profitability factor 

BAB: The monthly return factor attributed to the betting against beta factor 

MOM: The monthly return factor attributed to the momentum factor 

RF: The monthly risk-free rate 

MKT: The monthly return of the broad market (S&P 500 index) 

Mkt_RF: The monthly return factor of the market minus the monthly risk-free rate 

NVDA: The monthly return for Nvidia Stock 

INTC: The monthly return for Intel Stock 

**Note:** Assume a coefficient significance threshold of a = .1 

**Use the output of these factor models to answer the following:** 

1. Which of the following statements is TRUE?

    A. Intel has a statistically significant BAB coefficient at the a=.1 significance threshold with a value of 0.1589968.

    B. NVDA has a statistically significant MOM coefficient at the a=.1 significance threshold with a value of –0.04484.

    C. Intel has a statistically insignificant HML coefficient at the a=.1 significance threshold with a value of -0.114862.

    D. NVDA has a statistically significant QMJ coefficient at the a=.1 significance threshold with a value of –0.35244.

    E. NVDA has a statistically significant SMB coefficient at the a=.1 significance threshold with a value of –0.90684.

2. Which of the following statements is TRUE?

    A. Nvidia has a positive and significant MKT_RF coefficient at the a=.1 significance threshold.

    B. Nvidia has a negative and significant SMB coefficient at the a=.1 significance threshold. Meaning that it is tilted towards large cap.

    C. Intel has a positive and significant MKT_RF coefficient at the a=.1 significance threshold.

    D. Intel and Nvidia both exhibit a beta greater than the beta of the market (Theoretical Market Beta).

    E. All of the above.

根据回归模型的结果，我们可以验证以下陈述的真实性：

- A. 英特尔公司（Intel）在α=0.1的显著性阈值下，BAB系数为0.1476，但P值为0.453，因此该系数在α=0.1的显著性阈值下不显著。
- B. 英伟达公司（NVDA）在α=0.1的显著性阈值下，MOM系数为-0.0412，但P值为0.872，因此该系数在α=0.1的显著性阈值下不显著。
- C. 英特尔公司（Intel）在α=0.1的显著性阈值下，HML系数为-0.1149，但P值为0.601，因此该系数在α=0.1的显著性阈值下不显著。
- D. 英伟达公司（NVDA）在α=0.1的显著性阈值下，QMJ系数为-0.3551，但P值为0.460，因此该系数在α=0.1的显著性阈值下不显著。
- E. 英伟达公司（NVDA）在α=0.1的显著性阈值下，SMB系数为-0.9106，P值为0.054，因此该系数在α=0.1的显著性阈值下显著。

因此，针对问题1，正确答案是E。

针对问题2，由于只有英伟达公司（NVDA）的SMB系数在α=0.1的显著性阈值下显著，因此没有一个完全正确的答案。但是，如果我们仅考虑MKT_RF系数，英伟达公司（NVDA）和英特尔公司（Intel）在α=0.1的显著性阈值下都表现出显著的正MKT_RF系数，这符合问题2中的选项A和C。

---

The dataset [store_sales.csv](https://www.dropbox.com/scl/fi/v3hl6a277ktpse760ulqn/store_sales.csv?rlkey=4ndejzo3zb3nvno1h192kmr28&dl=0) is a subset of data from 2010 to 2012 from a US based retailer. It represents weekly sales (each row is a different week of data for a give store and department) for the included time frame. .

**Notes:** The dataset includes periods from 2010 to 2012, but it does not include every week. Do NOT extrapolate to fill in these missing pieces unless specifically instructed as it will change the answer. We will assume we are using a full dataset for most of the questions.

store = store location id

dept = store department id

date = first day of given week

weekly_sales = sales for that week, dept, store

isholiday = true is holiday week

Use the following code snippit to load the data. Remember to replace the "path" variable to your local path:

```r
library(dplyr)
library(xts)
library(forecast)
library(lubridate)

path <- #your path here
data <- read.csv(path,stringsAsFactors=False)
names(data) <- tolower(names(data)) 
```

1. What is the average value of weekly_sales for dept 1 when there is no holiday? Round to the nearest dollar. *Note: Round to the nearest dollar. For example, 12,999 or XX,XXX, without the dollar sign.*

2. Create a time series data by compute the total weekly_sales (sum all departments) per week for store 1, do not exclude holidays, use an alpha of 0.25 and h = 100, and the ses() function from the 'forecast' package to fit the data. Calculate and return the tracking signal" round to 2 decimal places.
Hint: You may use you model’s fitted values (e.g., model[[‘fitted’]]) as your forecasted values.

3. Using the same time series dataset calculate the root mean squared error (RMSE) for alpha values ranging from 0.01 to 0.99 with a step of 0.01, using h=100. Determine the optimal Alpha value that results in the lowest RMSE and report it to 2 decimal places.

4. Using the calculated values for the Tracking Signal, MAD, and MFE for the alpha values of 0.25 and 0.75. Compare these two models and select the TRUE statement below:

    A. The MFE values for alphas of 0.25 and 0.75 are -1673.3 and 1030.4, respectively

    B. The model using an alpha of 0.75 has less variability according to MAD

    C. The tracking signal for the values of alpha of 0.25 and 0.75 are both within -4 and 4; therefore, the values suggest the models do not require additional investigation.

    D. According to MAD, Tracking Signal, and MFE; The model using alpha = 0.75 is the better model.

5. Compute the total weekly_sales (sum all departments) per week for store 1, use an alpha of 0.5 and h = 100, and the ses() function from the 'forecast' package to fit the data, and plot the model, make sure you don't exclude holidays. What do you observe in the graph?

    A. The range of possible values remains constant as time moves forward.

    B. The forecast range is reasonably narrow enough to confidently predict future values.

    C. The range of possible values increases as time moves forward.

    D. Historical and future trend forecast is consistently increasing,







1. What is the average value of weekly_sales for dept 1 when there is no holiday? Round to the nearest dollar. *Note: Round to the nearest dollar. For example, 12,999 or XX,XXX, without the dollar sign.*

2. Using the same time series dataset report the tracking signal for an alpha value of 0.25 and h of 100. Round to 2 decimal places.

3. Using the same time series dataset calculate the root mean squared error (RMSE) for alpha values ranging from 0.01 to 0.99 with a step of 0.01, using h=100. Determine the optimal Alpha value that results in the lowest RMSE and report it to 2 decimal places.

4. Using the calculated values for the Tracking Signal, MAD, and MFE for the alpha values of 0.25 and 0.75. Compare these two models and select the TRUE statement below:

    A. The MFE values for alphas of 0.25 and 0.75 are -1673.3 and 1030.4, respectively

    B. The model using an alpha of 0.75 has less variability according to MAD

    C. The tracking signal for the values of alpha of 0.25 and 0.75 are both within -4 and 4; therefore, the values suggest the models do not require additional investigation.

    D. According to MAD, Tracking Signal, and MFE; The model using alpha = 0.75 is the better model.

5. Compute the total weekly_sales (sum all departments) per week for store 1, use an alpha of 0.5 and h = 100, and the ses() function from the 'forecast' package to fit the data, and plot the model, make sure you don't exclude holidays. What do you observe in the graph?

    A. The range of possible values remains constant as time moves forward.

    B. The forecast range is reasonably narrow enough to confidently predict future values.

    C. The range of possible values increases as time moves forward.

    D. Historical and future trend forecast is consistently increasing,



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
