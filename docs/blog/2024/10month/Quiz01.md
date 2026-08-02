---
title: Quiz surang 哥伦比亚大学
date: 2024-10-19 20:05:44
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
---

## Question 1

Which of the following are acceptable ways to assign a value to a variable, var.Check one or more correct answers.

A. `var -> 4`

B. `4 -> var` ✅

C. `4 = var` 

D. `var <- 4` ✅

E. `var = 4` ✅



## Question 2

Which of the following will correctly compute the trigonometric operation, Sine of 30 degrees?

A. sin(30)

B. sin(30, unit = degrees)

C. sin(pi/6) ✅

D. Sin(pi/6)

E. Sin(30)

## Question 3

What is the class of the following vector?

```r
c('four', 4, T)
```

A. numeric

B. logical

C. complex

D. integer

E. character ✅

## Question 4

Use the dataset women from library(datasets) for this question. Since library(datasets) loads automatically when you start R, the dataset women will loadby simply calling it.

What is the median height?

```r
# 加载数据集
data(women)

# 计算中位数身高
median_height <- median(women$height)
median_height
```





## Question 5

For this question, use the dataset credit_data that accompanies library(modeldata).

What is the median Price for those with Status of "bad" and Age greater than 30.

::: tabs

@tab Code

```r
# 加载需要的库和数据集
library(modeldata)
data(credit_data)

# 过滤出Status为"bad"且Age大于30的数据
filtered_data <- subset(credit_data, Status == "bad" & Age > 30)

# 计算Price的中位数
median_price <- median(filtered_data$Price, na.rm = TRUE)
median_price
```



@tab subset

`subset()` 是 R 语言中的一个常用函数，用来根据条件筛选数据集中的部分数据。它允许你根据行或列的条件对数据进行子集操作，非常便于数据分析时进行过滤。

1. 基本语法：

```r
subset(x, subset, select)
```

- `x`：表示要操作的数据框或矩阵。
- `subset`：表示筛选条件，通常为一个逻辑表达式。只有满足该条件的行会被保留。
- `select`：用于选择哪些列需要保留，可以通过列名或列索引指定。

2. 举个例子：

假设我们有一个数据集 `df`：
```r
df <- data.frame(
  Name = c("Alice", "Bob", "Charlie", "David"),
  Age = c(25, 35, 45, 30),
  Status = c("good", "bad", "good", "bad")
)
```

我们希望筛选出`Status`为"bad"并且`Age`大于30的人，可以这样写：

```r
subset(df, Status == "bad" & Age > 30)
```

输出：
```
   Name Age Status
2   Bob  35    bad
```

3. 解释：

- `subset(df, Status == "bad" & Age > 30)`：`df` 是原始数据框，`Status == "bad" & Age > 30` 是筛选条件，表示只保留那些`Status`等于"bad"并且`Age`大于30的行。
  
4. `na.rm = TRUE`

在`median(filtered_data$Price, na.rm = TRUE)`中，`na.rm` 参数用于在计算时忽略 `NA`（缺失值）。如果数据集中有缺失值，直接计算中位数时会报错，因此 `na.rm = TRUE` 告诉 R 忽略这些缺失值。

`subset()` 函数使得数据过滤更加直观且易于理解，在数据处理过程中非常有用。

@tab subset 和 filter 区别

在 R 语言中，`subset()` 和 `filter()` 都是用来对数据集进行过滤的函数，但它们有一些区别。`subset()` 是 R 自带的基础函数，而 `filter()` 来自 `dplyr` 包，通常用于数据处理时的大规模数据操作。让我们详细了解两者的区别以及使用方法。

1. **`subset()` 函数**

`subset()` 是基础 R 中自带的函数，不需要额外加载包就能使用。它用于通过行条件筛选数据，同时还能选择特定的列。

**语法**：

```r
subset(x, subset, select)
```

- `x`: 数据框或矩阵。
- `subset`: 行条件，逻辑表达式。
- `select`: 指定要选择的列。

**示例**：

假设我们有一个数据框 `df`：

```r
df <- data.frame(
  Name = c("Alice", "Bob", "Charlie", "David"),
  Age = c(25, 35, 45, 30),
  Status = c("good", "bad", "good", "bad")
)
```

**筛选Status为"bad"的行，并选择Name和Age列**:
```r
subset(df, Status == "bad", select = c(Name, Age))
```

**输出**：
```
   Name Age
2   Bob  35
4 David  30
```

2. **`filter()` 函数**

`filter()` 是 `dplyr` 包中的函数，非常适合大规模数据处理。它主要用于行的筛选，但不会选择列。你需要先加载 `dplyr` 包才能使用它。

**语法**：
```r
filter(.data, ...)
```

- `.data`: 数据框。
- `...`: 逻辑条件，可以是多个。

**示例**：

首先需要加载 `dplyr` 包：

```r
library(dplyr)
```

使用 `filter()` 筛选`Status`为"bad"且`Age`大于30的行：
```r
filter(df, Status == "bad", Age > 30)
```

**输出**：

```
  Name Age Status
1  Bob  35    bad
```

3. 主要区别

| 特性       | `subset()`                       | `filter()`                      |
| ---------- | -------------------------------- | ------------------------------- |
| 所属包     | 基础 R 函数，无需加载额外包      | 来自 `dplyr` 包                 |
| 行过滤     | 通过 `subset` 参数指定条件       | 通过逻辑表达式指定条件          |
| 列选择     | 可以通过 `select` 参数选择指定列 | 只能筛选行，不能直接选择列      |
| 多条件过滤 | 通过 `&` 或 `|` 连接多个条件     | 多个条件以逗号分隔              |
| 性能       | 适合小型数据集的简单筛选         | 在大型数据集上表现更好          |
| 可读性     | 适合简单表达式                   | 可与 `dplyr` 的其他函数链式操作 |

4. `filter()` 的链式操作优势

`filter()` 通常与 `dplyr` 中的其他函数如 `select()`、`mutate()`、`arrange()` 等组合使用，可以非常方便地进行链式数据操作。例如：

```r
df %>%
  filter(Status == "bad", Age > 30) %>%
  select(Name, Age)
```

这种方式比基础 R 更简洁直观，适合大规模数据分析处理。

5. 总结：

- `subset()` 适合小型数据集的简单行列筛选，是基础函数，无需加载包。
- `filter()` 属于 `dplyr` 包，适合大规模数据的行筛选，具有更强的链式操作能力。

如果你只是进行一些简单的过滤，`subset()` 足够。如果你希望在数据处理中有更强的灵活性，尤其是希望进行复杂操作或者处理大数据集，建议使用 `filter()` 和 `dplyr` 的其他函数组合。

:::





## Question 6

For this question, use the dataset credit data that accompanies library(modeldata).

Reduce the number of levels of Marital into single and married by coding all thosewho are not married as single. Now, construct density plots to compare thedistribution of Age across the two levels of Marital, single and married. Which ofthe following can be inferred from the plot? Check one or more correct answers.

A. Distribution of Age for those who are `married` is more skewed than those who are `single`.

B. Average Age of those who are `single` is lower than age of those who are `married`.

C. Distribution of Age for those who are `single` is similar to those who are `married`.

D. Distribution of Age for those who are `single` is more skewed than those who are `married`.





## Question 7

For this question, use the dataset `ames` that accompanies library(modeldata).

Among dwelling places with a `One_Story` house style (House_Style) and in Very_Excellent, Excellent or Very_Good overall condition (Overall_cond), which ofthe following neighborhoods (Neighborhood) has the highest average price (avg_price)?

A. Old Town

B. Timberland ✅

C. Crawford

D. Mitchell

E. Brookside

```r
# 加载所需库
library(dplyr)
library(modeldata)

# 加载 ames 数据集
data(ames)

# 筛选出满足条件的房产记录
filtered_data <- ames %>%
  filter(House_Style == "One_Story" & 
         Overall_Cond %in% c("Very_Excellent", "Excellent", "Very_Good"))

# 计算每个社区的平均价格
avg_price_by_neighborhood <- filtered_data %>%
  group_by(Neighborhood) %>%
  summarise(avg_price = mean(Sale_Price, na.rm = TRUE))

# 打印查看指定社区的平均房价
specified_neighborhoods <- c("OldTown", "Timberland", "Crawford", "Mitchell", "Brookside")
avg_price_by_neighborhood %>%
  filter(Neighborhood %in% specified_neighborhoods) %>%
  arrange(desc(avg_price))

```



## Question 8

Run the following code to generate data on clicks generated from Facebook ads and Google ads for the months, January, February and March.

```r
marketing_data <- data.frame(
  Campaign_ID = 1:3,
  Jan_Facebook_Clicks = c(1200, 1500, 900),
  Jan_Google_Clicks = c(1100, 1600, 1000),
  Feb_Facebook_Clicks = c(1300, 1400, 950),
  Feb_Google_Clicks = c(1200, 1550, 1050),
  Mar_Facebook_Clicks = c(1250, 1450, 920),
  Mar_Google_Clicks = c(1150, 1500, 980)
)
marketing_data
```

Convert the data into a tall dataset with four columns: Campaign lD, MonthPlatform, Clicks. Now, fnd the sum of all clicks (across all Campaigns and Platforms) for each Month. Which Month had the most Clicks?

A. Jan

B. Feb

C. Mar

D. Apr

::: code-tabs

@tab SR

```r
marketing_data <- data.frame(
  Campaign_ID = 1:3,
  Jan_Facebook_Clicks = c(1200, 1500, 900),
  Jan_Google_Clicks = c(1100, 1600, 1000),
  Feb_Facebook_Clicks = c(1300, 1400, 950),
  Feb_Google_Clicks = c(1200, 1550, 1050),
  Mar_Facebook_Clicks = c(1250, 1450, 920),
  Mar_Google_Clicks = c(1150, 1500, 980)
)
marketing_data
library(tidyr)

Jan_data <- marketing_data %>%
  pivot_longer(
    cols = starts_with("Jan_") | starts_with("Feb_") | starts_with("Mar_"),
    names_to= c("Month","Platform"), names_sep = "_",
    values_to="Clicks")

print (Jan_data)

most_Click <- Jan_data %>%
  group_by(Month)%>%
  summarize(Total_clicks = sum(Clicks, na.rm = TRUE))%>%
  arrange((desc(Total_clicks)))

print(most_Click)
```

@tab ME

```r
marketing_data <- data.frame(
  Campaign_ID = 1:3,
  Jan_Facebook_Clicks = c(1200, 1500, 900),
  Jan_Google_Clicks = c(1100, 1600, 1000),
  Feb_Facebook_Clicks = c(1300, 1400, 950),
  Feb_Google_Clicks = c(1200, 1550, 1050),
  Mar_Facebook_Clicks = c(1250, 1450, 920),
  Mar_Google_Clicks = c(1150, 1500, 980)
)
# 转换为长数据格式
library(tidyr)

# 将宽数据转换为长数据
long_marketing_data <- marketing_data %>%
  pivot_longer(cols = -Campaign_ID, 
               names_to = c("MonthPlatform"), 
               values_to = "Clicks")

# 查看转换后的数据
long_marketing_data
# 提取月份信息并汇总点击量
library(dplyr)

# 使用正则表达式提取月份
long_marketing_data <- long_marketing_data %>%
  mutate(Month = case_when(
    grepl("Jan", MonthPlatform) ~ "Jan",
    grepl("Feb", MonthPlatform) ~ "Feb",
    grepl("Mar", MonthPlatform) ~ "Mar"
  ))

# 按月份汇总点击量
monthly_clicks <- long_marketing_data %>%
  group_by(Month) %>%
  summarise(Total_Clicks = sum(Clicks))

# 查看每个月的总点击量
monthly_clicks
# 找出点击量最多的月份
# 找出点击量最多的月份
most_clicks_month <- monthly_clicks %>%
  filter(Total_Clicks == max(Total_Clicks))

most_clicks_month
```



:::

## Question 9

Which of the following functions from library(readr) will extract only the number inthe star rating from the text below?

```r
"I would give the meal at this restaurant a rating of 4 stars!!"
```

Specifcally, the result should be 4.

A. parse_numeric()

B. parse_integer()

C. parse_character()

D. parse_number() ✅



## Question 10

Which of the following functions from library(lubridate) will extract the "year" fromeach of the dates in the following vector, my_dates:

```r
my_dates = c('1 January 2020', '1 February 2021', '1 March 2023')
```

A. year(ymd(my_dates))

B. year(my_dates)

C. year(dmy(my_dates))  ✅

D. get_year(my_dates)

E. extract_year(my_dates)

::: details

在 `lubridate` 库中，用于从日期中提取年份的函数是 `year()`。但是，字符串格式必须与 lubridate 期望的日期格式匹配。因此，需要先将字符串转换为正确的日期格式。

题目中的日期格式是 "1 January 2020" 这种 "日 月 年" 格式，因此使用 `dmy()` 函数（即 "日-月-年" 格式）来将字符串转换为日期对象，然后再用 `year()` 提取年份。

因此，正确答案是 **C. year(dmy(my_dates))**。

解释：
- **A. year(ymd(my_dates))**：`ymd()` 用于 "年-月-日" 格式的日期，不适用于题目中的日期格式。
- **B. year(my_dates)**：`my_dates` 是字符串，不能直接使用 `year()` 提取年份。
- **C. year(dmy(my_dates))**：`dmy()` 将 "日-月-年" 格式的字符串转换为日期对象，之后 `year()` 提取年份。
- **D. get_year(my_dates)**：`lubridate` 库中没有 `get_year()` 函数。
- **E. extract_year(my_dates)**：`lubridate` 库中没有 `extract_year()` 函数。

:::

## Question 11

Run the code below to construct two dataframes, customers and transactions. Thecustomers dataset contains information about customers, and the transactionsdataset contains information about their purchases. Combine the customer and transaction dataframes using an inner join.

```r
customers = data.frame(
  customer_id = c(1, 2, 3, 4, 5),
  name = c("John Doe", "Jane Smith", "Emily Johnson", "Michael Brown", "Jessica Williams"),
  email = c("john@example.com", "jane@example.com", "emily@example.com", "michael@example.com", "jessica@example.com")
)

transactions = data.frame(
  transaction_id = c(1001, 1002, 1003, 1004, 1005),
  customer_id = c(1, 2, 1, 4, 5),
  amount = c(250.75, 100.50, 320.00, 450.25, 500.00),
  transaction_date = as.Date(c('2023-01-15', '2023-02-10', '2023-02-20', '2023-03-05', '2023-03-15'))
)

transactions
```

What is the total amount spent (i.e., sum of all values of Amount) for john Doe?

```r
# 创建 customers 和 transactions 数据框
customers = data.frame(
  customer_id = c(1, 2, 3, 4, 5),
  name = c("John Doe", "Jane Smith", "Emily Johnson", "Michael Brown", "Jessica Williams"),
  email = c("john@example.com", "jane@example.com", "emily@example.com", "michael@example.com", "jessica@example.com")
)

transactions = data.frame(
  transaction_id = c(1001, 1002, 1003, 1004, 1005),
  customer_id = c(1, 2, 1, 4, 5),
  amount = c(250.75, 100.50, 320.00, 450.25, 500.00),
  transaction_date = as.Date(c('2023-01-15', '2023-02-10', '2023-02-20', '2023-03-05', '2023-03-15'))
)

# 内连接两个数据框
merged_data <- merge(customers, transactions, by = "customer_id")

# 筛选出John Doe的所有交易
john_transactions <- merged_data[merged_data$name == "John Doe", ]

# 计算John Doe的总消费金额
total_amount_spent <- sum(john_transactions$amount)

# 输出总金额
total_amount_spent
```



## Question 12

For this guestion, use the dataset Sacramento that accompanies library(caret).

Examine the data set. Next, bin sgft into a categorical variable with the following groups:

- Smaller than or equal to 1000 sgft
- 1000-2000 sgft
- 2000-3000 sqft
- 3000-4000 sgft
- Larger than 4000 sgft

For each bin with two values, the lower value is not included, but the upper valueis included. For e.g., for a group, 1000 - 2000 sgft, 1000 is not included but 2000is included.

Which of these square foot categories has the most number of homes?

A. Smaller than or equal to 1000 sgft

B. 1000-2000 sgft

C. 3000-4000 sgft

D. Larger than 4000 sgft

E. 2000-3000 sgft

::: tabs

@tab one

要解决这个问题，我们需要按照题目的要求将房屋的面积（square footage, sgft）分为不同的类别，并找出哪一类的房屋数量最多。我们将使用R语言中的`Sacramento`数据集，具体步骤如下：

1. 导入数据集

首先，我们需要安装并加载`caret`包并导入`Sacramento`数据集。

```r
# 安装并加载caret包
install.packages("caret")
library(caret)

# 加载Sacramento数据集
data("Sacramento")
```

2. 查看数据结构

检查`Sacramento`数据集的列，找出包含房屋面积的数据列：

```r
str(Sacramento)
```

通常，房屋面积信息存储在名为`sqft`的列中。

3. 创建分类区间

根据题目要求，将`sqft`变量分为几个区间：

- 小于或等于1000 sqft
- 1000-2000 sqft
- 2000-3000 sqft
- 3000-4000 sqft
- 大于4000 sqft

我们可以使用`cut`函数将`sqft`划分为不同的类别，确保每个区间包含上限但不包含下限。

```r
# 创建分类区间
Sacramento$sqft_category <- cut(
  Sacramento$sqft,
  breaks = c(-Inf, 1000, 2000, 3000, 4000, Inf),
  labels = c("<=1000 sqft", "1000-2000 sqft", "2000-3000 sqft", "3000-4000 sqft", ">4000 sqft"),
  right = TRUE  # 包含区间的上限
)
```

4. 计算每个区间的房屋数量

使用`table`函数统计每个区间的房屋数量：

```r
# 统计每个分类的房屋数量
category_counts <- table(Sacramento$sqft_category)
category_counts
```

5. 找出房屋数量最多的分类

通过`which.max`函数找到房屋数量最多的分类：

```r
# 找出房屋数量最多的分类
max_category <- names(which.max(category_counts))
max_category
```

6. 结果

假设运行上面的代码后，输出结果表明房屋数量最多的分类是"1000-2000 sqft"，那么答案就是：

**B. 1000-2000 sqft**

你可以根据实际运行的结果，确认最终答案是哪一个区间的房屋数量最多。

@tab Code

```r
# 安装并加载 caret 包，如果尚未安装，可以使用 install.packages("caret")
# caret 包包含了我们需要使用的数据集 Sacramento
install.packages("caret")
library(caret)

# 加载 Sacramento 数据集，这个数据集是随 caret 包一起提供的
data("Sacramento")

# 查看 Sacramento 数据集的结构，了解有哪些列以及每列的数据类型
# 特别关注房屋面积数据列 (通常是名为 sqft 的列)
str(Sacramento)

# 我们将 sqft 列按照题目要求划分为不同的区间
# 使用 cut 函数对 sqft 列进行分类：
# breaks 参数定义了区间的边界值，分别是 -Inf, 1000, 2000, 3000, 4000, 和 Inf，
# 这些边界值用于划分房屋面积。-Inf 和 Inf 分别表示负无穷和正无穷，涵盖所有值。
# labels 参数用于为每个区间命名，分别对应：<=1000 sqft, 1000-2000 sqft, 2000-3000 sqft, 3000-4000 sqft, >4000 sqft。
# right 参数设为 TRUE，表示每个区间包含右边界，但不包含左边界（例如 1000-2000 区间包含 2000 但不包含 1000）。
Sacramento$sqft_category <- cut(
  Sacramento$sqft,
  breaks = c(-Inf, 1000, 2000, 3000, 4000, Inf),  # 定义分类区间
  labels = c("<=1000 sqft", "1000-2000 sqft", "2000-3000 sqft", "3000-4000 sqft", ">4000 sqft"),  # 定义每个区间的标签
  right = TRUE  # 指定区间包含右边界
)

# 使用 table 函数统计每个区间（分类）的房屋数量
# 该函数会计算 sqft_category 列中每个分类出现的次数，并返回一个包含计数的表格
category_counts <- table(Sacramento$sqft_category)

# 输出每个区间中的房屋数量，查看统计结果
print(category_counts)

# 使用 which.max 函数找到房屋数量最多的分类
# which.max 返回最大值的索引位置，然后 names 函数返回该索引对应的分类名称
max_category <- names(which.max(category_counts))

# 输出房屋数量最多的分类名称
print(max_category)
```



:::

## Question 13

Run the following code to construct a dataframe, df, where "pred" representsmodel predictions while "outcome" represents the actual or true values of theoutcome variable.

```r
set.seed(617)
df = data.frame(
  id = 1:100,
  outcome = sample(x = 1:10, size = 100, replace = T),
  pred = round(10 * runif(100, 0, 1), 1)
)

df
```

What is the root mean squared error (RMSE) for the predictions, "pred"?

::: details

要计算预测值 `pred` 和实际值 `outcome` 之间的均方根误差 (RMSE)，你可以按照以下步骤进行：

1. 计算预测值与实际值之间的误差，即 `pred - outcome`。
2. 将误差平方。
3. 计算所有平方误差的平均值（即均方误差，MSE）。
4. 对均方误差取平方根，得到 RMSE。

这里是解决该问题的 R 代码：

```r
# 计算误差
error <- df$pred - df$outcome

# 计算误差平方
squared_error <- error^2

# 计算均方误差
mse <- mean(squared_error)

# 计算均方根误差 (RMSE)
rmse <- sqrt(mse)

# 打印 RMSE
rmse
```

解释：
- `error`：计算预测值和实际值之间的误差。
- `squared_error`：将误差平方。
- `mse`：计算平方误差的平均值，即均方误差。
- `rmse`：对均方误差取平方根，得到均方根误差。

运行以上代码即可得到 RMSE 值。

:::

## Question 14

For this question, use the dataset ames that accompanies library(modeldata).

Conduct simple random sampling to split the dataset "ames" into a train and testsample with 60% of the data in the train sample. Use a seed of 1031. Compute theaverage Sale_Price in the train sample and in the test sample. What is the absolutedifference in average Sale_Price between the train and test samples?

::: details

要解决这个问题，我们可以使用 R 语言中的 `modeldata` 库及其提供的 `ames` 数据集。以下是实现该任务的步骤：

## 1. 解决步骤：

1. **加载库并设置随机种子**：确保加载必要的库，并使用 `set.seed()` 函数设置随机种子为 1031。
2. **拆分数据集**：使用简单随机采样将 `ames` 数据集分为训练集（60%）和测试集（40%）。
3. **计算平均值**：计算 `Sale_Price` 在训练集和测试集中的平均值。
4. **计算绝对差**：计算训练集和测试集的 `Sale_Price` 平均值的绝对差。

## 2. R 代码实现：

```r
# 加载必要的库
library(modeldata)
library(dplyr)

# 加载数据集
data(ames)

# 设置随机种子
set.seed(1031)

# 拆分数据集
ames_sample <- sample(nrow(ames), size = 0.6 * nrow(ames))
train_data <- ames[ames_sample, ]
test_data <- ames[-ames_sample, ]

# 计算 Sale_Price 的平均值
train_avg <- mean(train_data$Sale_Price)
test_avg <- mean(test_data$Sale_Price)

# 计算平均值的绝对差
abs_diff <- abs(train_avg - test_avg)

# 输出结果
cat("训练集 Sale_Price 平均值: ", train_avg, "\n")
cat("测试集 Sale_Price 平均值: ", test_avg, "\n")
cat("训练集与测试集的 Sale_Price 平均值绝对差: ", abs_diff, "\n")
```

## 3. 解释：

- `set.seed(1031)`：设置随机种子以确保结果可重复。
- `sample()`：用于随机选择训练集的行号。
- `mean()`：计算训练集和测试集的 `Sale_Price` 平均值。
- `abs()`：计算训练集和测试集的平均值绝对差。

运行以上代码后，你将获得训练集和测试集的平均房价以及它们之间的绝对差。

:::

## Question 15

For this question, use the dataset ames that accompanies library(modeldata).

Conduct a stratifed sampling to split the dataset, "ames" into a train and testsample with 60% of the data in the train sample. Do the sampling in such a waythat the distribution of "Sale_Price" is approximately equal in both samples. Use aseed of 1031 and utilize initial_split() from library(rsample). Set breaks to 50.Compute the average Sale_Price in the train sample and in the test sample. Whatis the absolute difference in average Sale_Price between the train and testsamples? Since you are asked absolute difference, if the difference is negative,drop the negative sign.

::: code-tabs

@tab Code1

```r
# 安装并加载所需的包
install.packages("modeldata")
install.packages("rsample")
library(modeldata)
library(rsample)

# 加载数据集 ames
data(ames)

# 设置种子
set.seed(1031)

# 进行分层抽样，保证 "Sale_Price" 分布相似
split <- initial_split(ames, prop = 0.6, strata = "Sale_Price", breaks = 50)

# 从分割结果中获取训练集和测试集
train_data <- training(split)
test_data <- testing(split)

# 计算训练集和测试集的 Sale_Price 均值
train_avg <- mean(train_data$Sale_Price)
test_avg <- mean(test_data$Sale_Price)

# 计算绝对差值
abs_diff <- abs(train_avg - test_avg)

# 输出结果
cat("训练集平均 Sale_Price:", train_avg, "\n")
cat("测试集平均 Sale_Price:", test_avg, "\n")
cat("绝对差值:", abs_diff, "\n")
```

@tab Code2

```r
# 加载必要的库
library(rsample)
library(modeldata)

# 加载数据
data(ames)

# 设置随机种子
set.seed(1031)

# 使用分层抽样按 "Sale_Price" 划分数据集，设置 breaks = 50
split <- initial_split(ames, prop = 0.6, strata = Sale_Price, breaks = 50)

# 提取训练集和测试集
train_data <- training(split)
test_data <- testing(split)

# 计算训练集和测试集的平均 Sale_Price
train_avg <- mean(train_data$Sale_Price)
test_avg <- mean(test_data$Sale_Price)

# 计算绝对差值
absolute_difference <- abs(train_avg - test_avg)

# 输出结果
train_avg
test_avg
absolute_difference
```



:::







欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！

::: details 公众号：AI悦创【二维码】

![](https://blog.images.bornforthis.cn/docs-images/sha256/77/77f67d48a67ec6a44a4ef1f01ffc85830eb3c121b1ece45dc5ada06e20e2f52b.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Linux、Web 全栈」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](https://blog.images.bornforthis.cn/docs-images/sha256/30/3087c629da73428daa0ee050f5b31709c30f650686164b54c724b892a422c585.jpg)
