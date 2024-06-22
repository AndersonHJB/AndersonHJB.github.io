---
title: Raw Data Munging
icon: icon_SQL
date: 2023-09-24 12:42:39
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
    - web 一对一
    - 留学生辅导
    - 留学生作业辅导
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

## 概述

在这次作业中，你将尝试使用一个真实的数据源：**NASA 的地球表面温度的历史测量数据**。为了分析这些数据，一些预备工作是必要的。特别是，你将：
1. 下载原始数据。
1. 编写一个 Python 程序清洗（即处理）数据，并将其保存为标准的逗号分隔值（CSV）格式文本文件。
1. 编写第二个 Python 程序对 CSV 文件中的数据进行一些简单的分析。

## 指导

### 第 0 部分：确定工作流

团队可以选择几种不同的工作流程。强烈建议实时合作，通常比异步合作更有效。但是，在实时合作不可能的情况下，有一些特定的工作流程可以帮助异步团队工作。

查看 [如何小组合作] 以获取选项。

### 第 1 部分：下载数据

NASA 的 [GISS 表面温度分析网站](https://data.giss.nasa.gov/gistemp/) 提供了数据集的概述 - 他们发布的记录反映了自 1880 年以来地球表面温度的变化。
- 这些数字并不代表实际的温度读数，而是代表温度*异常值*。
- 他们的 [常见问题页面](https://data.giss.nasa.gov/gistemp/faq/#q101) 包括一些可能有帮助的额外解释。

下载 [固定宽度列格式的原始数据](https://data.giss.nasa.gov/gistemp/tabledata_v4/GLB.Ts+dSST.txt)。
- 将原始数据文件保存到此存储库中名为 `data` 的目录中。

查看文件中的数据...
- 尝试理解每行和列分别代表什么。
- 必要时查看网站的常见问题获取解释。
- 尝试找出可能使程序分析数据时出现问题的地方。

::: details Answer

文件数据代表的是全球陆地-海洋温度指数，以0.01摄氏度为单位，基准期是1951-1980。数据的来源是GHCN-v4 1880-08/2023和ERSST v5 1880-08/2023。数据已经去除了异常值并进行了同质性调整。

对于每一行数据：

- "Year" 列表示年份。
- "Jan" 到 "Dec" 是12个月的温度指数。
- "J-D" 表示年均温度指数。
- "D-N" 表示12月-2月的温度指数。
- "DJF" 表示12月前一年-2月的温度指数。
- "MAM" 表示3-5月的温度指数。
- "JJA" 表示6-8月的温度指数。
- "SON" 表示9-11月的温度指数。

根据这些数据和注释，我们可以得出以下结论：

1. 每行代表一个年份的数据，每列代表一个月或一个季度的温度指数。
2. 基准期是1951-1980，所以数值是相对于这个时期的变化。
3. "`*****`"表示缺失的数据。

有几个问题可能会使数据难以用程序分析：

1. "`*****`"表示的缺失值需要在数据分析时进行特殊处理。
2. "DJF" 的计算方式略有不同，它表示的是12月前一年-2月的温度，而不是当年的12月。
3. 这份数据只展示了一部分，没有看到完整的数据可能会导致分析不完整。

如果需要进一步分析或对数据进行处理，可以提供具体的需求。

:::



### 第 2 部分：处理数据
原始数据具有一些特点，这使得程序分析困难。

您必须在名为 `munge.py` 的文件中编写一个 Python 程序，清理原始数据并将其保存为在此存储库的 `data` 目录中名为 `clean_data.csv` 的 CSV 格式文件。
- 您不得使用任何数据处理或分析模块，如 `pandas` 或 `csv` 进行处理。您必须使用纯 Python 代码编写。

您的程序必须解决的问题：
- 文件的开头和结尾都有许多带有注释的行 - **必须删除所有带注释的行**。
- 文件中多次重复列标题 - **只保留第一行的列标题**。
- 数据中间有一些空白行 - **删除所有空白行**。
- 缺失的数据用 `***` 表示 - 确定如何**处理缺失的数据以使您的分析正确**。
- 此数据中的温度异常值以 0.01 摄氏度给出。**将温度异常值转换为华氏度**，美国的标准温度单位：
    - 可以在数据集中找到这样做的公式
    - 使用 [format](https://docs.python.org/3/library/functions.html#format) 方法，并以 `.1f` 为第二个参数来格式化结果，使结果保留一位小数。
- 由于此数据是*固定宽度列格式*，分隔数字值的空格数不一致... **您可能希望标准化使用的空格数**。
- 欢迎您进行**任何额外的清理**，以帮助您在下一步中分析数据。

您的程序必须以可重复的方式进行此清理和转换。如果我们从 NASA 获取原始数据文件并在其上运行您的 `munge.py` 程序，那么这些问题都会在新文件 `clean_data.csv` 中得到解决。

::: code-tabs

@tab 1

```python
def clean_data(input_file, output_file):
    # Open the input file for reading
    with open(input_file, "r") as file:
        lines = file.readlines()
    
    # Filter out the lines that are notes or empty
    data_lines = [line.strip() for line in lines if line.strip() and not line.startswith(" ")]

    # Convert temperature anomalies from Celsius to Fahrenheit
    # formula: F = C * 9/5 + 32
    def celsius_to_fahrenheit(value):
        try:
            return format(float(value) * 0.01 * 9/5 + 32, ".1f")
        except ValueError:
            return "***"

    cleaned_data = []
    # Header handling
    header = data_lines[0]
    cleaned_data.append(header)
    data_lines = data_lines[1:]  # Remove the header

    for line in data_lines:
        parts = line.split()
        year = parts[0]
        temps = [celsius_to_fahrenheit(temp) for temp in parts[1:-1]]  # Convert all but first and last values
        final_year = parts[-1]  # Repeated year value
        cleaned_data.append(year + " " + " ".join(temps) + " " + final_year)

    # Save the cleaned data to the output file
    with open(output_file, "w") as out_file:
        out_file.write("\n".join(cleaned_data))

# Invoke the clean_data function
clean_data("data/data.giss.nasa.gov_gistemp_tabledata_v4_GLB.Ts+dSST.txt", "data/clean_data.csv")
```

@tab 注释

```python
def clean_data(input_file, output_file):
    # 打开输入文件进行读取
    with open(input_file, "r") as file:
        lines = file.readlines()
    
    # 过滤出那些不是注释或空行的行
    data_lines = [line.strip() for line in lines if line.strip() and not line.startswith(" ")]

    # 将温度异常值从摄氏度转换为华氏度的函数
    # 公式: F = C * 9/5 + 32
    def celsius_to_fahrenheit(value):
        try:
            return format(float(value) * 0.01 * 9/5 + 32, ".1f")  # 转换并格式化为一位小数
        except ValueError:
            return "***"  # 缺失值处理

    cleaned_data = []
    # 处理表头
    header = data_lines[0]
    cleaned_data.append(header)
    data_lines = data_lines[1:]  # 从数据中移除表头

    for line in data_lines:
        parts = line.split()  # 将每行拆分为多个部分
        year = parts[0]  # 第一个部分是年份
        temps = [celsius_to_fahrenheit(temp) for temp in parts[1:-1]]  # 转换除了第一个和最后一个值之外的所有值
        final_year = parts[-1]  # 重复的年份值
        cleaned_data.append(year + " " + " ".join(temps) + " " + final_year)

    # 将清洁后的数据保存到输出文件中
    with open(output_file, "w") as out_file:
        out_file.write("\n".join(cleaned_data))

# 调用clean_data函数
clean_data("/mnt/data/data.giss.nasa.gov_gistemp_tabledata_v4_GLB.Ts+dSST.txt", "/mnt/data/clean_data.csv")
```



:::

::: details

Firstly, let's break down the requirements:

1. We need to remove lines with notes.
2. Retain only the first line of column headings.
3. Remove blank lines.
4. Handle missing data (`***`).
5. Convert temperature anomalies to Fahrenheit.
6. Save data to a CSV format in `data/clean_data.csv`.

Below is the `munge.py` program based on the provided data and the given requirements:

```python
def is_valid_data_line(line):
    # Check if the line starts with a year
    return line.strip() and line[:4].isdigit()

def handle_missing_data(line):
    # Replace missing data with a placeholder or NaN or any other approach
    return line.replace("***", "NaN")

def celsius_to_fahrenheit(celsius):
    # Convert temperature from Celsius to Fahrenheit
    return celsius * 9/5 + 32

def process_data(data):
    # Extract the first line of column headings
    columns = [data[0]]
    
    # Convert temperature data
    for line in data[1:]:
        parts = line.split()
        year = parts[0]
        months = [format(celsius_to_fahrenheit(float(val)/100), ".1f") for val in parts[1:-1]]
        clean_line = year + " " + " ".join(months)
        columns.append(clean_line)
    
    return columns

def main():
    with open("raw_data.txt", "r") as file:
        lines = file.readlines()

    # Filter out lines with valid data and handle missing data
    clean_data = [handle_missing_data(line) for line in lines if is_valid_data_line(line)]
    
    # Further process data
    processed_data = process_data(clean_data)

    # Save the clean data
    with open("data/clean_data.csv", "w") as out_file:
        for line in processed_data:
            out_file.write(",".join(line.split()) + "\n")

if __name__ == "__main__":
    main()
```

This code will read from the "raw_data.txt" file, process the data based on the requirements and save it as a CSV file in the "data" directory.

However, I'd like to mention a few points:

1. The method of handling missing data (`***`) is to replace it with "NaN". If you have another approach, you might need to adjust the `handle_missing_data` function.
2. The conversion from Celsius to Fahrenheit assumes that the temperature anomaly values are divided by 100 (as given in the description). If this assumption doesn't hold true for some values, further adjustments might be needed.
3. You may want to handle more edge cases, depending on the completeness and consistency of the raw data.

Ensure to test the script thoroughly with your dataset to make sure all requirements are met and no edge cases are missed.

:::

### 第 3 部分：分析数据
现在您已经将数据转换为易于解析的 CSV 格式，您将对数据进行一些聚合统计。

在名为 `analyze.py` 的文件中编写一个 Python 程序，执行以下操作：
- 使用 Python 的 `csv` 模块打开您清理过的数据文件 `clean_data.csv` 并导入它。
- 输出自 1880 年以来每个十年的平均温度异常值（以华氏度为单位）。例如，输出以下几十年的平均温度异常值：
    - 1880 到 1889
    - 1890 到 1899
    - 1900 到 1909
    - ... 以此类推。
- 您可以使用 `csv` 模块帮助解析您的 CSV 数据文件，但不允许使用 `pandas` 或其他任何数据解析或分析模块。

::: code-tabs

@tab 1

```python
# Place code below to do the analysis part of the assignment.
import csv
from pprint import pprint
def analyze_temperature_anomalies(input_file):
    # Store the average temperature anomalies for each decade
    decade_averages = {}

    with open(input_file, "r") as file:
        reader = csv.reader(file, delimiter=' ')
        header = next(reader)  # Read the header

        # Iterate over each row to calculate the decade averages
        decade_data = []
        current_decade = None
        for row in reader:
            try:
                year = int(row[0])
            except ValueError:  # Handle non-numeric rows (like the header)
                continue
            
            annual_avg_temp = row[13]

            if annual_avg_temp != "***":  # Ensure the value is not missing
                # Check if we need to start collecting data for a new decade
                if current_decade is None or year // 10 != current_decade:
                    if current_decade is not None and decade_data:
                        decade_averages[current_decade] = sum(decade_data) / len(decade_data)
                    decade_data = []
                    current_decade = year // 10

                # Append the temperature anomaly to the current decade's data
                decade_data.append(float(annual_avg_temp))

        # Handle the last decade's data
        if decade_data:
            decade_averages[current_decade] = sum(decade_data) / len(decade_data)

    return decade_averages

# Get the average temperature anomalies for each decade
decade_averages = analyze_temperature_anomalies("data/clean_data.csv")
pprint(decade_averages)
pprint(len(decade_averages))

```

@tab 2

```python
import csv
from pprint import pprint
def analyze_temperature_anomalies_v2(input_file):
    # Store the average temperature anomalies for each decade
    decade_averages = {}

    with open(input_file, "r") as file:
        reader = csv.reader(file, delimiter=' ')
        header = next(reader)  # Read the header

        # Iterate over each row to calculate the decade averages
        decade_data = []
        current_decade = None
        for row in reader:
            try:
                year = int(row[0])
            except ValueError:  # Handle non-numeric rows (like the header)
                continue
            
            # Calculate the anomaly (subtracting the base temperature of 32F)
            annual_avg_temp = row[13]
            if annual_avg_temp != "***":
                anomaly = float(annual_avg_temp) - 32

                # Check if we need to start collecting data for a new decade
                if current_decade is None or year // 10 != current_decade:
                    if current_decade is not None and decade_data:
                        decade_averages[current_decade] = sum(decade_data) / len(decade_data)
                    decade_data = []
                    current_decade = year // 10

                # Append the temperature anomaly to the current decade's data
                decade_data.append(anomaly)

        # Handle the last decade's data
        if decade_data:
            decade_averages[current_decade] = sum(decade_data) / len(decade_data)

    return decade_averages

# Get the average temperature anomalies for each decade
decade_anomalies = analyze_temperature_anomalies_v2("data/clean_data.csv")
pprint(decade_anomalies)
```

@tab 3

```python
import csv
from pprint import pprint
def analyze_temperature_anomalies_v2(input_file):
    # 为每个十年的平均温度异常值创建一个字典
    decade_averages = {}

    # 使用csv模块打开并读取文件
    with open(input_file, "r") as file:
        reader = csv.reader(file, delimiter=' ')
        header = next(reader)  # 读取文件的标题行

        # 初始化用于存储每个十年数据的列表和当前十年的变量
        decade_data = []
        current_decade = None

        # 遍历文件的每一行来计算每个十年的平均异常值
        for row in reader:
            try:
                # 尝试将年份转化为整数
                year = int(row[0])
            except ValueError:  # 处理非数字行（例如标题行）
                continue
            
            # 计算异常值（从基准温度32F中减去）
            annual_avg_temp = row[13]
            if annual_avg_temp != "***":
                anomaly = float(annual_avg_temp)

                # 检查我们是否需要开始收集新的十年数据
                if current_decade is None or year // 10 != current_decade:
                    # 如果当前十年的数据存在，将其平均值存储到字典中
                    if current_decade is not None and decade_data:
                        decade_averages[current_decade] = sum(decade_data) / len(decade_data)
                    # 重新初始化十年数据列表，并设置新的十年
                    decade_data = []
                    current_decade = year // 10

                # 将温度异常值添加到当前十年的数据列表中
                decade_data.append(anomaly)

        # 处理最后一个十年的数据
        if decade_data:
            decade_averages[current_decade] = sum(decade_data) / len(decade_data)

    return decade_averages

# 获取每个十年的平均温度异常值
decade_anomalies = analyze_temperature_anomalies_v2("data/clean_data.csv")
pprint(decade_anomalies)
```



:::

## 提交您的工作
每位学生必须单独提交此作业。使用 Visual Studio Code 执行 git 的 `stage`、`commit` 和 `push` 操作进行提交。这些操作都可以在 Visual Studio Code 的源代码控制面板中作为菜单项找到。
1. 在 `Message` 区域中输入关于您对文件所做的更改的简短说明，然后输入 Command-Enter（Mac）或 Control-Enter（Windows）执行 git 的 `stage` 和 `commit` 操作。
1. 点击 "源代码控制" 旁边的 `...` 图标，然后选择 "Push" 执行 git 的 `push` 操作。这将把您的工作上传到 GitHub.com 上的













::: code-tabs





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
