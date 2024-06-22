---
title: Problem Set 2
date: 2024-01-27 20:27:57
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
headerDepth: 5
comment: true
lastUpdated: true 
editLink: false
backToTop: true
toc: true
---

## [NOTE]

- When you provide a numerical value as your answer, round off to three decimal digits, such as 8.6516 → 8.652 and 1.25 → 1.25.
- It is important not to select the wrong answers in the multiple-answer questions as well as to select the correct ones.

## [Questions 1 - 2] Import the Cameras.csv data into R.

1. Draw a bar plot to summarize the Brand variable graphically.
    - You must write the main title, x-axis label, and y-axis label on the plot in a clear and informative way.
    - Choose different colors for the bars. If you have two bars, two different colors for them. If three bars, three different colors, and so on.
    - If your main title is too long and cut off, you must split the main title to write it in two lines.
    - Save your plot as a PDF file, name the file “PlotBrand” and upload it to Canvas.
2. Draw a histogram to summarize the Score variable graphically.
    - You must write the main title, x-axis label, and y-axis label on the plot in a clear and informative way.
    - If your main title is too long and cut off, you must split the main title to write it in two lines.
    - Save your plot as a PDF file, name the file “PlotScore” and upload it to Canvas.

## [Questions 3 - 8] Import YouTube.csv data into R.

- name: Name of the YouTube channel
- category: User-defined channel topic
- accountAge: The age of the account in weeks. Note that for consistency the age calculation was performed on December 31 2018.
- videoUploads: The amount of videos uploaded by the channel.
- subscribers: The number of subscribers to the channel
- views: The total views across all videos
- viewsPerVideo: Total views divided by videos
- continent: Continent of origin of the channel

3. In the sample dataset, what is the number of subscribers for the channel with the largest number of views?

4. In the sample dataset, what are the names of the YouTube channels that have the oldest age in weeks? (Two channels.)

    - Venus and WIRED

    - KSIvsLogan and T-Mobile

    - ABC News and Tayo the Little Bus

    - VICE News and SMTOWN

5. Draw a histogram for the natural log-transformed accountAge variable. Select ALL terms that would be appropriate for your histogram.

- unimodal (in other words, involving one mode.)
- skewed to the left
- skewed to the right
- linear relationship
- nonlinear relationship
- positive association
- negative association
- positive association then negative association
- negative association then positive association

    6. Suppose you hypothesize that the YouTube channel’s category is associated with the num- ber of views per video. Compare the median number of views per video for the gaming channels and the median number of views per video for the sports channels.

- The gaming channels’ median number is greater by 98168.4.
- The sports channels’ median number is greater by 98168.4.
- The gaming channels’ median number is greater by 7264.4.
- The sports channels’ median number is greater by 7264.4.

7. Suppose you hypothesize that the number of views across all videos is associated with the number of views per video. You will use exploratory data analysis methods, including graphical and numerical summaries, to test your hypothesis. Select one correct method.

- Compare the mean number of views across all videos and the mean number of views per video.
- Calculate the correlation coefficient between the number of views across all videos and the number of views per video.
- Draw a side-by-side bar chart for the two variables.
- Draw two box plots for the two variables in one graph.

8. Suppose you hypothesize that the YouTube channel’s category is associated with the coun- try of origin of the channel. You will use exploratory data analysis methods, including graphical and numerical summaries, to test your hypothesis. Select one correct method.

- Build a contingency table for the two variables.
- Calculate the correlation coefficient between the two variables.
- Draw a scatterplot for the two variables.
- Draw two box plots for the two variables in one graph.

## [Questions 9 - 16] Import IntroStatisticsSurvey.csv into R.

- Course: Course that the Respondent was enrolled in
- Math: Math SAT Score
- Verbal: Verbal SAT Score
- HT: Respondent’s Height (in inches)
- Shoe: Shoe Size (US)
- Gender: Respondent’s Gender
- MomHT: Height of Respondent’s Mother (in inches)
- DadHT: Height of Respondent’s Father (in inches)
- Color: Favorite Color
- WT: Respondent’s Weight (in pounds)
- Major: Declared Major

9. In the sample dataset, what is the female students’ average height (in inches)?

10. In the sample dataset, what is the average math SAT score for the students enrolled in the Business Stats course?
11. In the sample dataset, what is the median shoe size for the students who majored in economics (ECON)?
12. Suppose you hypothesize that the student’s major is associated with their favorite color. You will use exploratory data analysis methods, including graphical and numerical sum- maries, to test your hypothesis. Select one correct method.

- 1）Draw a scatterplot for the two variables.

- 2）Calculate the correlation coefficient between the two variables.

- 3）Draw a side-by-side bar chart for the two variables.

- 4）Calculate the mean value for each of the two variables and compared them.

13. Suppose you hypothesize that the student’s height is associated with their mother’s height. You will use exploratory data analysis methods, including graphical and numerical sum- maries, to test your hypothesis. Select one correct method.

- 1）Draw a scatterplot for the two variables.

- 2）Build a contingency table for the two variables.

- 3）Draw a side-by-side bar chart for the two variables.

- 4）Calculate the mean value for each of the two variables and compared them.

14. What is the value of covariance between the math SAT Score and the verbal SAT Score?

- 1）0.379
- 2）412.342
- 3）1077.248
- 4）2182.255

15. What is the Pearson correlation coefficient between the student’s verbal SAT Score and shoe size?

- 1）-3.241
- 2）-0.015
- 3）217.725

16. Draw a scatterplot for the Shoe and HT variables. Select ALL terms that would be appro- priate for your histogram.

- 1）unimodal (in other words, involving one mode.)
- 2）skewed to the left
- 3）skewed to the right
- 4）linear relationship
- 5）nonlinear relationship
- 6）positive association
- 7）negative association
- 8）positive association then negative association



## [Questions 17 - 21] Import the SeoulBikeData.csv data into R.

The Seoul Metropolitan Government in South Korea launched a public bike-sharing service in 2015 called Seoul Bikes. It was designed to be a self-operating rental service that anyone could use. There are over 150 rental stations and 2,000 Seoul Bikes available to users as of 2017. The Seoul Government collected data from December 1, 2017 to November 30, 2018 to better understand Seoul citizens’ use of Seoul Bikes. The SeoulBikeData.csv data includes the number of bikes rented per hour and date, along with hourly weather information as follows:

- RentedBikeCount: Count of bikes rented at each hour.
- 


















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
