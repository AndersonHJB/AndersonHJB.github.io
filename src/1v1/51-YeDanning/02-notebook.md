---
title: 01-债劵办公自动化程序
date: 2023-08-24 21:18:14
icon: python
author: AI悦创
isOriginal: true
category:
    - Python 一对一教学
    - 债卷办公自动化程序
    - 债卷办公自动化程序代写
tag:
    - Python 一对一教学
    - 债卷办公自动化程序
    - 债卷办公自动化程序代写
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
footer: 长期招收编程一对一学员！微信：Jiabcdefh, <a href="https://beian.miit.gov.cn/" target="_blank">闽ICP备19021486号-6</a>
---

## 2. 代码实现

### 2.1 需求点1

- 实现思路：读取 sample 文件夹下所 Excel 并生成相对路径



## 库的对比

在办公自动化处理 Excel 方面，主流可用的库的优缺点。

- **openpyxl**
    - 优点：专为 `.xlsx` 格式设计，功能丰富，适用于多数场景；
    - 缺点：不支持 `.xls` 格式；
- **xlrd**
    - 优点：是读取旧版 `.xls` 格式首选库；
    - 缺点：从 2.0.0 版本开始，`xlrd` 仅支持 `.xls` 格式，并放弃了对 `.xlsx` 格式的支持；
- **xlwt**
    - 优点：用于写入 `.xls` 格式的文件；
    - 缺点：不支持 `.xlsx` 格式；
- **XlsxWriter**
    - 优点：专为写入 `.xlsx` 格式文件设计，提供了很多高级功能，比如：图表创建；
    - 缺点：不能读取 Excel 文件，也不支持 `.xls` 格式；
- **pandas**
    - 优点：它是一个数据分析库，可以结合  `openpyxl`、`xlrd` 和 `XlsxWriter` 来读取和写入 Excel 文件。对于数据处理和转换，`pandas` 非常强大；
    - 缺点：为数据分析设计，对于一些专门的 Excel 功能可能不是那么直观；

为了最大化地处理 Excel 的新旧版本，你可以这样做：

- 使用 `xlrd` 来读取 `.xls` 格式的文件。再使用 `xlwt` 来写入 `.xls` 格式文件；
- 使用 `openpyxl` 来读取和写入 `.xlsx` 格式的文件；
- 如果需要更高级的写入功能，考虑使用 `XlsxWriter`；
- 对于数据处理和转换，考虑使用 `pandas`。

这样，你可以涵盖 Excel 文件的大多数情况。

## pandas 在 Excel 领域的特点

pandas 可以同时支持新版本（`.xlsx`、`.xlsm`）和旧版（`.xls`）的 Excel 文件格式，但 pandas 做到这一点是通过在后台使用其他库，如： `openpyxl` 和 `xlrd`。

具体地说：

1. **读取 Excel 文件**
    - 当读取 `.xlsx` 文件时，`pandas` 默认使用 `openpyxl` 作为引擎。
    - 当读取 `.xls` 文件时，`pandas` 使用 `xlrd` 作为引擎。
2. **写入 Excel 文件**
    - 当写入 `.xlsx` 文件时，`pandas` 可以使用 `openpyxl` 或 `XlsxWriter` 作为引擎。
    - 当写入 `.xls` 文件时，`pandas` 使用 `xlwt` 作为引擎。

所以，我们完全可以通过 pandas 来统一操作我们 Excel 文件读取或写入不同格式的 Excel 文件，而不必担心底层实现的细节。

只需要确保我们已经安装了必要的库（如： `openpyxl`、`xlrd`、`xlwt` 和/或 `XlsxWriter`）。

例如，使用 `pandas` 读取 `.xlsx` 和 `.xls` 文件：

```python
import pandas as pd

# 读取 .xlsx 文件
df_xlsx = pd.read_excel("path_to_file.xlsx", engine="openpyxl")

# 读取 .xls 文件
df_xls = pd.read_excel("path_to_file.xls", engine="xlrd")
```

基本的写入 `.xlsx` 和 `.xls` 文件：

```python
# 写入 .xlsx 文件
df.to_excel("path_to_output.xlsx", engine="openpyxl")

# 写入 .xls 文件
df.to_excel("path_to_output.xls", engine="xlwt")
```

总之，确实，`pandas` 提供了一个统一的接口来处理新旧版本的 Excel 文件，只是需要确保你有适当的底层库来支持这些操作。







































































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

