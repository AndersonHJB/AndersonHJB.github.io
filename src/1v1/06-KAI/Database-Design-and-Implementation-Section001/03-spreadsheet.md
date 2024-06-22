---
title: 03-spreadsheet
icon: icon_SQL
date: 2023-10-03 21:58:49
author: AI悦创
isOriginal: true
category: 
    - 1v1
    - java 1v1
    - 纽约大学一对一
    - NYU 1v1
    - web 一对一
    - 数据结构一对一
    - 留学生辅导
    - php
    - 留学生作业辅导
tag:
    - 1v1
    - java 1v1
    - php
    - 纽约大学一对一
    - NYU 1v1
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

## Spreadsheet Analysis

A little assignment to practice finding data, munging it, and analyzing it in a spreadsheet program.

Replace the contents of this file with a report, as described in the instructions.

# Instructions

A little assignment to practice finding data, munging it, and analyzing it in a spreadsheet program.

The goals of this assignment are to:

- "scrub", "munge", or "clean" a datafile using Python 3
- import the text data file into an Microsoft Excel, Google Sheets, Apple Numbers, or Libre Office spreadsheet
- produce statistical results based on the data using the database-like functions in the spreadsheet program of your choice
- save the spreadsheet as a proper spreadsheet file (e.g. `.xslx`, `.numbers`, `.ods`)

## Part 1: Data selection and retrieval

### Select a data source

First, you will need to select a datafile to work from. For this assignment, please select any reputable data source that is of interest to you. Download the data in a plain text data format, not a spreadsheet-specific file format.

### Where to find data

There are many data sources available via NYU Libraries data portal. Note that you are encouraged to visit [Data Services](http://guides.nyu.edu/datasources) on the 5th Floor of Bobst Library for help finding data. A few recommended to our class by the librarians:

Librarian Vicky Rampin has shared an [excellent set of helpful slides about finding data](https://drive.google.com/file/d/1rt7ZnG70_e-Uwje8lrnoKQlv1rICdUY7/view).

Librarian Andrew Battista has shared specific links to data portals that may be the first step of your journey towards the data of your dreams:

- [Data Sources by Topic](http://guides.nyu.edu/content.php?pid=352851&sid=2886542) (especially NYC data sources)
- NYC Department of City Planning's [Bytes of the Big Apple](http://www.nyc.gov/html/dcp/html/bytes/applbyte.shtml)
- [NYC Open Data](https://nycopendata.socrata.com/) project
- [Inter-University Consortium for Political and Social Research (ICPSR)](http://www.icpsr.umich.edu/icpsrweb/landing.jsp) (in particular, data on crime).
- [International Monetary Fund (IMF) eLibrary Data](https://www.imf.org/external/data.htm)

Other sample data sets that might interest you:

- [MusicBrainz](http://musicbrainz.org/)
- [Baseball statistics](http://www.baseball-reference.com/)
- [Bloomberg Financial Data](http://www.bloomberg.com/markets/stocks/)
- [Bureau of Labor Statistics](http://www.bls.gov/data/)
- [US Census](http://www.census.gov/geo/maps-data/data/gazetteer.html)

#### Additional resources

You might also consider consulting with a [Subject Librarian at the library](http://library.nyu.edu/research/lib_arc.html) if you prefer for additional data sources or data sources in your specific field of study.

### Save the data

Save the original raw data file of your choice into the `data` directory.

### What not to do

Please do NOT use [average surface temperature data from NASA](http://data.giss.nasa.gov/gistemp/#tabledata). You will NOT get credit for a project retrieving data from this or another data set we have discussed as an example.

Also, do not choose a data file already selected by another student in the course. Check the `#data-dibs` Discord channel for claims on any data set. If there are none, then you are welcome to use that data set and claim it as yours in that Discord channel.

## Part 2: Data scrubbing

### Use Python to do something

In almost all cases, you will need to "clean up", "scrub", or "munge" the data before you can use it in a spreadsheet. If you are lucky enough to pick data that are already in usable format, use Python to modify the data in some major and discernible ways such as removing unnecessary columns or adding computed columns.

### Save the modified data

Write a Python program in the file named `munge.py` to read in the data file which you have downloaded or copied from the Internet; and then the Python program should write out a new file that is ready for data analysis, named `clean_data.csv`, into the `data` directory .

### Repeatability

Your program should be written to work consistently and repeatedly with the dataset of your choice regardless of how many lines of data are in the file. In other words, the program should be scalable and not based on idiosyncratic strategies such as, "for the third row do this... for the fourth row do that... " etc.

### Other scrubbing tools

If there are some scrubbing tasks that you simply cannot complete in Python, you are welcome to use a text editor or spreadsheet program to complete the scrubbing. But any such work must be relatively minor and documented thoroughly in the report you will write so that someone else can repeat the process without difficulty.

## Part 2: Data analysis in a spreadsheet

### Import data into a spreadsheet

Import your newly-scrubbed data file into a sheet in the spreadsheet program of your choice, such as Microsoft Excel, Google Sheets, Apple Numbers, or Libre Office. If it doesn't import correctly, keep working on the scrubbing of your data until it does!

### Calculate aggregate statistics

Use formulas to calculate four different aggregate statistics based on your data, such as mean, maximum, minimum, etc of one or more entire columns in the data. Place a clear label for each statistic in a neighboring cell.

### Calculate aggregate statistics with conditions

Use formulas to calculate four different aggregate statistics based on specific criteria you define, such as mean, maximum, minimum, etc of only those rows that match the given criterion or multiple criteria. Place a clear label for each statistic in a neighboring cell so that someone viewing your spreadsheet can easily understand exactly what each statistic represents.

Be sure to use the database-like functions appropriate to your spreadsheet program (e.g. `AVERAGEIF`, `MAXIF`, `MINIF`, `SUMIF`, etc for most spreadsheet programs; Microsoft Excel also has `DAVERAGE`, `DMAX`, `DMIN`, etc ).

### Do some further analysis

Perform further, more complex analysis that shows some interesting insights into your data set by using one or more of the following techniques:

- pivot table
- chart

### Save the spreadsheet

Save the spreadsheet as a proper spreadsheet file (e.g. `.xslx`, `.numbers`, `.ods`) into your `data` directory. So you now have at least 3 files in the `data` directory: the original data file, the munged data file, and the spreadsheet file.

### What to do for very large data files

**Note**: When submitting the exercise, if the data files are too large to upload to GitHub, you may upload them to a cloud storage service such as Google Drive or Box and then provide a clearly-labeled link to the files in the report you will write in the `README.md` file (more on that below). In that case, also edit the [].gitignore](./.gitignore) file to exclude the data files from being uploaded to GitHub by adding the following line:

​      data/*

### Write a report

Write a report which displays the data and the results in the file named README.md.

This report should be well-written and well-formatted using Markdown code - refer to this [guide to using Markdown](https://guides.github.com/features/mastering-markdown/).

The report must include:

Data set details:

- The origin of your data set - what is it and where does it come from. Include a link to the URL of the source.
- What format the original data file was in (CSV, JSON, or other).
- Display some of the raw data from the original data file (the first 20 rows is enough). Use Markdown's ability to display tables - see the examples in the Markdown guide linked above.
- Describe the problems that were present in the data and the scrubbing tasks that were necessary to prepare your data set for import into a spreadsheet - include scrubbing done in Python, a text editor, or any other tool. Be specific with examples of the problems in the original data and the way in which those were solved. Feel free to show small snippets of relevant code - see the examples of code "syntax highlighting" in the Markdown guide linked above.
- Links to your data files (the original raw data, the munged data, and the spreadsheet file including the formulas and charts). These can be links to files in your own repository or links to the files stored in a cloud storage service if your files are too large to be included in your own repository.

Analysis:

- Describe each of the aggregate statistic you have calculated - include a description of each and describe any insights the statistic shows that may not be obvious to someone just viewing the raw data.
- If using a pivot table for analysis, include a Markdown table showing a sample of the results of the pivot table (no more than 20 rows, please), along with a short description of what the results show and any insights they offer.
- If using a chart for visualization, include the chart image in the report, with a short description of what the image shows and any insights it offers. See the Markdown guide linked above for details of showing an image.

## Part 3: Extra credit

You may do one, two, or neither of these extra credit options as you prefer:

### Option 1: Scraping data

There is an extra credit option to use Python to retrieve the data directly from a webpage using [urllib.request](https://docs.python.org/3/library/urllib.request.html#module-urllib.request). If you do "scrape" data off the web in this way, feel free to use the [Beautiful Soup](https://www.crummy.com/software/BeautifulSoup/) library, or another parser module in python to assist in removing the HTML from the page and parsing the document, if necessary.

### Option 2: Big or complex data

Extra Credit is available for examples which tackle large and/or complex data tables. A large data set, for our purposes, being defined as thousands of rows.

### Requesting extra credit

If you believe you deserve extra credit, include a sub-heading at the bottom of your `README.md` document explaining why you believe you deserve it.

```markdown
...

## Extra-credit

This assignment deserves extra credit because iste numquam eos et repudiandae sint enim. Rerum enim voluptas voluptatem consequuntur. Sed atque deserunt nihil eius neque et provident aspernatur. Incidunt iusto beatae illo minus vel. Quis sint sunt et facilis doloribus eligendi error est. Ipsum similique.
...
```

## Submit your work

Each student must submit this assignment individually. Use Visual Studio Code to perform git `stage`, `commit` and `push` actions to submit. These actions are all available as menu items in Visual Studio Code's Source Control panel.

1. Type a short note about what you have done to the files in the `Message` area, and then type `Command-Enter` (Mac) or `Control-Enter` (Windows) to perform git `stage` and `commit` actions.
1. Click the `...` icon next to the words, "Source Control" and select "Push" to perform the git `push` action. This will upload your work to your repository on GitHub.com.

Be sure to include the following:

- The original plain text data file which you downloaded from the Internet before it was modified by your Python program. Place this within the `data` directory.
- Your Python program which you wrote to "scrub" the data in the file named `munge.py`.
- The Excel or other formatted spreadsheet file containing the "clean" data and the formulas with the analysis you performed.

::: details

# 指导

为了练习在电子表格程序中查找、处理和分析数据的小作业。

本次作业的目标是：

- 使用 Python 3 "清洗"、"整理"或"处理"数据文件
- 将文本数据文件导入到 Microsoft Excel、Google Sheets、Apple Numbers 或 Libre Office 电子表格中
- 使用您选择的电子表格程序中的数据库功能基于数据产生统计结果
- 保存电子表格为适当的文件格式（如 `.xslx`、`.numbers`、`.ods`）

## 第一部分：数据选择和检索

### 选择数据源

首先，您需要选择一个要使用的数据文件。对于这次作业，请选择任何您感兴趣的可靠数据源。以纯文本数据格式下载数据，而不是特定于电子表格的文件格式。

### 数据在哪里

通过 NYU 图书馆数据门户可以获得许多数据源。注意，鼓励您访问 Bobst 图书馆 5 楼的 [Data Services](http://guides.nyu.edu/datasources) 以帮助找到数据。以下是图书馆员推荐给我们班的一些推荐：

图书馆员 Vicky Rampin 分享了一个关于[如何找到数据的出色幻灯片集](https://drive.google.com/file/d/1rt7ZnG70_e-Uwje8lrnoKQlv1rICdUY7/view)。

图书馆员 Andrew Battista 分享了可能是您寻找心仪数据的第一步的数据门户的具体链接：

- [按主题的数据源](http://guides.nyu.edu/content.php?pid=352851&sid=2886542)（特别是 NYC 数据源）
- NYC 城市规划部的 [Bytes of the Big Apple](http://www.nyc.gov/html/dcp/html/bytes/applbyte.shtml)
- [NYC 开放数据](https://nycopendata.socrata.com/) 项目
- [政治与社会研究跨大学协作](http://www.icpsr.umich.edu/icpsrweb/landing.jsp)（尤其是关于犯罪的数据）。
- [国际货币基金组织 (IMF) eLibrary 数据](https://www.imf.org/external/data.htm)

其他可能感兴趣的样本数据集：

- [MusicBrainz](http://musicbrainz.org/)
- [棒球统计](http://www.baseball-reference.com/)
- [彭博金融数据](http://www.bloomberg.com/markets/stocks/)
- [劳工统计局](http://www.bls.gov/data/)
- [美国人口普查](http://www.census.gov/geo/maps-data/data/gazetteer.html)

#### 其他资源

如果您更喜欢，您还可以考虑与图书馆的[专题图书馆员](http://library.nyu.edu/research/lib_arc.html)咨询，以获得其他数据源或您专业领域的数据源。

### 保存数据

将您选择的原始原始数据文件保存到 `data` 目录中。

### 请不要做的事情

请不要使用 [NASA 的平均地表温度数据](http://data.giss.nasa.gov/gistemp/#tabledata)。对于从这个或我们作为例子讨论过的另一个数据集检索数据的项目，您将不会得到学分。

另外，不要选择已经被本课程中的另一个学生选择的数据文件。查看 `#data-dibs` Discord 频道，看看是否有任何数据集的声明。如果没有，则欢迎您使用该数据集，并在 Discord 频道中声明它是您的。

## 第二部分：数据清洗

### 使用 Python 来做些什么

在几乎所有情况下，您都需要在电子表格中使用数据之前"清理"、"清洗"或"整理"数据。如果您足够幸运，选择了已经是可用格式的数据，请使用 Python 以某种主要和可辨认的方式修改数据，例如删除不必要的列或添加计算的列。

### 保存修改后的数据

在名为 `munge.py` 的文件中编写一个 Python 程序，读入您从互联网下载或复制的数据文件；然后 Python 程序应该写出一个准备好的用于数据分析的新文件，命名为 `clean_data.csv`，放入 `data` 目录中。

### 可重复性

您的程序应该编写为与您选择的数据集一致且重复无论文件中有多少行数据。换句话说，程序应该是可扩展的，不基于特殊的策略，例如"对于第三行这样做... 对于第四行那样做..."等等。

### 其他清洗工具

如果有一些您在 Python 中无法完成的清洗任务，您可以使用文本编辑器或电子表格程序完成清洗。但这样的工作必须相对较小，并在您将编写的报告中进行详尽的记录，这样其他人可以轻松重复该过程。

## 第二部分：电子表格中的数据分析

### 将数据导入电子表格

将您新清洗的数据文件导入到您选择的电子表格程序的一个工作表中，如 Microsoft Excel、Google Sheets、Apple Numbers 或 Libre Office。如果它没有正确导入，请继续清洗您的数据直到可以！

### 计算汇总统计数据

使用公式计算基于您的数据的四个不同的汇总统计数据，例如一个或多个整列数据的平均值、总和、最大值、最小值、中位数、标准偏差等。并确保这些统计数据是相关且有意义的。

### 创建至少一个图表或图形

基于您的数据，创建至少一个图表或图形，使其简洁、易读并且与您的数据有关。

### 将数据和分析保存为适当的文件格式

保存工作表为适当的文件格式（如 `.xslx`、`.numbers`、`.ods`）并将其上传到您的作业提交目录。

## 第三部分：报告

在一个单独的文档中，写一个简短的报告，描述了：

- 您选择了哪些数据源，以及为什么选择了它。
- 您在 Python 中对数据进行了哪些更改或清洗。
- 您在电子表格中做了哪些分析。
- 您得出了什么结论或观察。
- 任何您认为有助于理解您的工作的其他信息。

请确保报告清晰、简洁且专业。假设您的受众是一位没有电子表格或编程背景的非技术人员。

## 评估标准

您的项目将根据以下标准进行评估：

- 数据选择的合理性和可靠性。
- Python 程序的正确性和可读性。
- 数据清洗和处理的正确性和复杂性。
- 在电子表格中的数据分析的准确性、复杂性和相关性。
- 报告的清晰度、简洁性和专业性。
- 工作的总体完成度和高质量。

## 提交

请将以下文件上传到您的作业提交目录：

1. 您选择的原始数据文件
2. 您的 Python 清洗程序 `munge.py`
3. 您清洗过的数据文件 `clean_data.csv`
4. 您的电子表格文件（如 `.xslx`、`.numbers`、`.ods`）
5. 您的报告文件（可以是 Word、PDF 或其他常见文档格式）

确保您的提交内容是完整的，所有需要的文件都在那里，并且它们都是您期望的版本。

---

祝您学习愉快！

:::







欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！


::: details 公众号：AI悦创【二维码】

![](/gzh.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](/zsxq.jpg)