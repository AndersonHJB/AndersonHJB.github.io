---
title: HW1 Part 2 - MGT 6203
date: 2023-09-20 19:44:08
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

## Instructions:

**For Homework 1 Part 2, please use this R notebook in Vocareum to submit your solutions. Vocareum is an educational cloud platform for programming in several languages; it is based on the Jupyter notebook environment. This platform allows us to move homework assignments to the cloud. The advantages are that all of you will be working in the same coding environment AND peer reviewers will be able to run your R code easily. This way we eliminate some issues we might encounter when working on an individual/local basis, such as library installations and Rstudio OS requirements; R notebooks work on mobile platforms and tablets.**

**With R notebooks, you will be learning a new way of presenting data analysis reports, that is neat and flexible, where formatted (English) text and (R) code can easily coexist on the same page. Notebooks can be also collaborative when needed. For now, we are asking each of you to do your own work for homework. Think of R notebooks as interactive program-based Google docs or MS-Office 360 docs; these are gradually replacing local files on our computers. **

**Many of you are new to the R notebooks and Vocareum platforms. We will provide TA help in Piazza with specific code if you have questions. Here we list some important things to get you started. Please read through them carefully.**

Even though we are moving from your local envrionment to the cloud, **our expectations from your homework will remain the same**. Same goes for the rubrics.

Vocareum has its own cloud based file system, the data files you will be using for the assignments will be stored in the cloud with path **"../resource/asnlib/publicdata/FILENAME.csv"**. You will be able to import them with the same method as you do in RStudio, simply substitute the path name to the one specified in the instructions. You won't be able to modify these data files.

You will be able to find the data files on Canvas/EdX if you would like to explore them offline.

**For coding questions, you will be graded on the R code as well as the output** in your submission.

**For interpretations or short response questions, please type the answers in the notebook's markdown cells**. To change a code cell to a markdown cell, click on the cell, and in the dropdown menu above, switch the type of the cell block from "code" to "markdown". **Adding print statements to code cells for short response/interpretation questions is also fine, as long as we can clearly see the output of your response**.

You don't need to, but if you would like to learn more about how to format your markdown cells, visit the following site: https://www.earthdatascience.org/courses/intro-to-earth-data-science/file-formats/use-text-files/format-text-with-markdown-jupyter-notebook/. Jupyter notebook also support LaTeX.

**Feel free to delete or add as many additional cells as you need**. But please try to keep your notebook clean and keep your solution to a question directly under that question to avoid confusions.

You may delete the #SOLUTION BEGINS/ENDS HERE comments from the cell blocks, they are just pointers that indicates where to put you solutions.

**When you have finished the assignment, remember to rerun your notebook to check if it runs correctly.** You can do so by going to **Kernel-> Restart & Run All**. You may lose points if your solutions does not run successfully.

**Click the "Submit" button on the top right corner to turn in your assignment**. Your assignment will enter the next phase for peer review.

**You are allowed a total of 2 submissions for this assignment.** So make sure that you submit your responses carefully. You will be able to come back and resubmit your assignment as long as it is before the start of the peer review period.

**Please remember to finish the peer reviews after you have submitted your assignment.** You are responsible for grading the work of three of your peers thoroughly, and in addherence to the rubrics. And you will be held accountable for peer grading. **There will be a 30% penalty to your grade if you fail to complete one or more peer reviews in proper fashion.**

Feel free to address your questions, concerns, and provide any feedback on Piazza. We will continuously try to improve going forward.

Good Luck!

::: details zh

## 说明：

**对于作业1的第2部分，请在Vocareum中使用此R笔记本提交您的解答。Vocareum是一个支持多种编程语言的教育云平台；它基于Jupyter笔记本环境。这个平台使我们可以将作业任务移到云端。优势是你们所有人将在相同的编码环境中工作，并且同伴评审者能够轻松地运行你的R代码。这样我们就可以避免在个人/本地基础上可能遇到的一些问题，例如库安装和Rstudio操作系统要求；R笔记本在移动平台和平板电脑上也可以工作。**

**通过R笔记本，你们将学习一种展示数据分析报告的新方法，这种方法整洁且灵活，在其中，格式化（英文）文本和（R）代码可以轻松地在同一页上共存。需要时，笔记本也可以协作。但目前，我们要求每个人都为作业完成自己的工作。请将R笔记本视为互动的基于程序的Google文档或MS-Office 360文档；这些文档正在逐渐取代我们计算机上的本地文件。**

**你们中的许多人对R笔记本和Vocareum平台都不太熟悉。如果你有问题，我们将在Piazza上提供TA的帮助。在此，我们列出了一些重要事项以帮助你开始，请仔细阅读。**

尽管我们从您的本地环境迁移到了云端，**但对您的作业的期望仍然是一样的**。评分标准也是如此。

Vocareum有自己的基于云的文件系统，您将用于作业的数据文件将存储在云中，路径为 **"../resource/asnlib/publicdata/FILENAME.csv"**。您可以使用与在RStudio中相同的方法导入它们，只需将路径名替换为说明中指定的路径名。您将无法修改这些数据文件。

如果您希望离线浏览它们，可以在Canvas/EdX上找到数据文件。

**对于编码问题，您的提交内容中的R代码及其输出都将被评分。**

**对于解释或简短的回答问题，请在笔记本的markdown单元中输入答案**。要将代码单元更改为markdown单元，点击该单元，然后在上方的下拉菜单中，将单元块的类型从"code"切换为"markdown"。**对于简答/解释问题，在代码单元中添加print语句也是可以的，只要我们能清楚地看到您回答的输出**。

您不需要，但如果您想了解更多关于如何格式化您的markdown单元的信息，可以访问以下网站：https://www.earthdatascience.org/courses/intro-to-earth-data-science/file-formats/use-text-files/format-text-with-markdown-jupyter-notebook/。Jupyter笔记本也支持LaTeX。

**请随意删除或添加尽可能多的额外单元**。但请尝试保持您的笔记本整洁，并将解答放在该问题直接下方，以避免混淆。

您可以从单元块中删除#SOLUTION BEGINS/ENDS HERE注释，这些只是指示放置解答的指针。

**完成作业后，请记得重新运行您的笔记本，以检查它是否正确运行**。您可以通过转到**Kernel-> Restart & Run All**来实现这一点。如果您的解答不能成功运行，您可能会失去分数。

**点击右上角的"Submit"按钮提交您的作业**。然后，您的作业将进入下一阶段进行同伴评审。

**您总共有2次提交此作业的机会**。所以，请确保您仔细提交回答。只要在同伴评审开始之前，您都可以返回并重新提交作业。

**请记得在提交作业后完成同伴评审**。您有责任根据评分标准仔细评分三位同学的作业。并且您将为同伴评分负责。**如果您未能以适当的方式完成一次或多次同伴评审，您的分数将被扣除30%。**

如果您有任何问题、担忧或反馈，请在Piazza上提出。我们将不断努力改进。

祝你好运！

:::

# About Package Installation:

Most of the packages (if not all) that you will need to complete this assignment are already installed in this environment. An easy way to check this is to run the command: library(PackageName). If this command runs successfully then the package was already installed and has been successfully attached to the code. If the command gave an error saying the Package was not found then follow the steps below to successfully install the package and attach it to the code: 

Use *installed.packages()* command to return a table of the packages that are preinstalled in the environment.

To attach a preinstalled library in Vocareum, simply use *library(PackageName)*

**To install a package that does not come with the provided environment, please use the following syntax:**

*install.packages("PackageName", lib="../work/")*

**To attach a library you just installed, use the following syntax:**

*library(PackageName, lib.loc="../work/")*

Make sure the file location is the same as the above code snippets *("../work/")*

## Q1.  Use airbnb_data for the following questions. Use the below codes to load library and read the data. (32 points total)

```R
library(dplyr)
library(ggplot2)

# Load the data
airbnb_data = read.csv("../resource/asnlib/publicdata/airbnb_data.csv",header = TRUE)

# Change headers to lower case (my personal preference for all analysis)
names(airbnb_data) = tolower(names(airbnb_data))

# Strip to non-ID fields
removeMe = c("room_id", "survey_id", "host_id", "city")
myDF = airbnb_data[, -which(names(airbnb_data) %in% removeMe)]

# Explore the data
str(myDF)
summary(myDF)

# Update room type as factor
myDF$room_type = as.factor(myDF$room_type)
```

output:

```R
'data.frame':	854 obs. of  6 variables:
 $ room_type           : chr  "Shared room" "Shared room" "Shared room" "Shared room" ...
 $ reviews             : int  0 32 4 24 152 20 52 14 3 30 ...
 $ overall_satisfaction: num  0 5 4.5 4.5 4.5 4.5 4.5 4.5 5 5 ...
 $ accommodates        : int  4 4 2 6 6 4 5 2 6 5 ...
 $ bedrooms            : int  1 1 1 1 1 1 1 1 3 2 ...
 $ price               : int  91 77 35 31 36 29 20 31 51 168 ...
  room_type            reviews       overall_satisfaction  accommodates   
 Length:854         Min.   :  0.00   Min.   :0.00         Min.   : 1.000  
 Class :character   1st Qu.:  8.00   1st Qu.:4.50         1st Qu.: 2.000  
 Mode  :character   Median : 28.00   Median :5.00         Median : 3.000  
                    Mean   : 49.11   Mean   :4.18         Mean   : 3.412  
                    3rd Qu.: 65.00   3rd Qu.:5.00         3rd Qu.: 4.000  
                    Max.   :602.00   Max.   :5.00         Max.   :17.000  
    bedrooms          price       
 Min.   : 0.000   Min.   :  20.0  
 1st Qu.: 1.000   1st Qu.:  75.0  
 Median : 1.000   Median : 102.0  
 Mean   : 1.352   Mean   : 140.9  
 3rd Qu.: 2.000   3rd Qu.: 153.8  
 Max.   :10.000   Max.   :4625.0  
```

### A. Fit a multiple linear regression model using *price* as the response variable, all others as predictor variables, and "Private room" as the base case. (Note: Do not fit a model using id columns and *city* as predictors). 

### Which variables are statistically significant at the alpha = 0.01 level. (6 points)

::: details zh

### A. 使用*price*作为响应变量，使用所有其他变量作为预测变量，并以"Private room"作为基准情况，拟合一个多元线性回归模型。（注意：不要使用id列和*city*作为预测因子来拟合模型）。

### 在alpha = 0.01的水平上，哪些变量在统计上是显著的？（6分）

:::



1. **Estimate**：这是每个变量的系数估计值。对于数值变量，这表示当该变量增加1个单位时，响应变量（在这里是价格）预期会增加（或减少，如果系数为负）的数量。对于因子变量或哑变量，它表示相对于参考类别（在这里，"Entire home/apt"很可能是参考类别，因为它在输出中没有显示）的响应变量的差异。

2. **Std. Error**：这是系数估计值的标准误差。它为我们提供了关于系数估计值稳定性的信息。

3. **t value**：这是t统计量，它是系数估计值除以其标准误差得到的。它用于测试特定系数是否显著地不同于0。

4. **Pr(>|t|)**：这是t统计量对应的p值。较小的p值（通常小于0.05或0.01）表示我们可以拒绝零假设，即特定系数等于0。在这里，标有三个星号（`***`）的变量的p值小于0.001，表示这些变量在0.001的显著性水平上是统计显著的。

“Signif. codes”下方的行为我们提供了p值和它们的显著性标记之间的关系。

表格下方的其他信息如"Residual standard error"和"Multiple R-squared"提供了模型整体的拟合度信息。

对于'entire home'（哑变量）和'bedrooms'：

1. **room_typeShared room**（与“Entire home/apt”相比）：系数为-74.31，这意味着，当其他所有变量都保持不变时，相比于整套房屋/公寓（Entire home/apt，作为基线），选择共享房间（Shared room）会导致价格平均降低74.31单位。

2. **bedrooms**：系数为115.19，这意味着，当其他所有变量都保持不变时，每增加一个卧室，价格将平均增加115.19单位。



- 'entire home'（哑变量）：由于没有直接给出“Entire home”与“Private room”之间的对比，我们可以使用“Private Room”和“Shared Room”的系数来间接解释。当其他所有变量都保持不变时，相比于“Private Room”，选择整套房屋/公寓（Entire home/apt）的价格平均增加值为：2.18 (Private room系数的绝对值) + 74.31 (Shared room系数) = 76.49单位。
  
- 'bedrooms'：当其他所有变量都保持不变时，每增加一个卧室，价格将平均增加115.19单位。





::: details zh

Q2. 使用 direct_marketing 数据集回答以下问题。（总分 12 分）

为 'history' 列创建指示变量。将基线情况考虑为 None（即，如果 *history* 为 Low，则 Low = 1，否则为 0；如果 *history* 为 Medium，则 *medium* = 1，否则为 0，等等）并基于客户历史类型创建一些交互项 *lowsalary*、*mediumsalary* 和 *highsalary*，例如 *mediumsalary* = *medium* x *salary* 等等。

```R
# 读入数据框
mydm <- read.csv("../resource/asnlib/publicdata/direct_marketing.csv", header = TRUE)

# 将表头更改为小写（我个人在所有分析中的偏好）
names(mydm) = tolower(names(mydm))

# 根据问题参数创建列
mydm2 <- mydm %>%
    mutate(low = ifelse(history == "Low", 1,0)) %>%
    mutate(medium = ifelse(history == "Medium", 1,0)) %>%
    mutate(high = ifelse(history == "High", 1,0)) %>%
    mutate(lowsalary = salary * low) %>%
    mutate(mediumsalary = salary * medium) %>%
    mutate(highsalary = salary * high)

summary(mydm2)
```

A. 使用 'amountspent' 作为响应变量，使用以下预测变量进行多重线性回归建模：age、ownhome、salary、low、medium、high、lowsalary、mediumsalary、highsalary。 打印摘要。 （6 分）

B. 根据第2(a)部分构建的模型，中年租客在每种历史类型（None、Low、Medium 和 High）的预测消费金额是多少，假设他们的薪资为 $75,000？（6 分）

**注意：本练习忽略显著性，结果取整到最近的美元。**









:::

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
