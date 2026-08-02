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

comment: true

backToTop: true
toc: true
footer: 长期招收编程一对一学员！微信：Jiabcdefh, <a href="https://beian.miit.gov.cn/" target="_blank">闽ICP备19021486号-6</a>
---

你好，我是悦创。

先上截图：

::: tabs

@tab 1

![](https://blog.images.bornforthis.cn/docs-images/sha256/7d/7de170819bf16788f33797350793cdf72b5f22d98e770099756a56fd070c1ee4.png)

@tab 2

![](https://blog.images.bornforthis.cn/docs-images/sha256/72/72ac12f7131dee4bc8a075ece97f28aa78b02d90774a73b4883cb9ae651a2148.png)

@tab 3

![](https://blog.images.bornforthis.cn/docs-images/sha256/ea/ea11d2988cbb78c1ff3da84a31afba7fc2fde1cf834692c3a65991117f123f6a.png)

@tab 4

![](https://blog.images.bornforthis.cn/docs-images/sha256/cb/cbcf399b3dac45fb4e12bf73eafbdbb731724e6b2fca279ec2f5b206c45a9927.png)

@tab 5

![](https://blog.images.bornforthis.cn/docs-images/sha256/5c/5c8b48fc09169161d08d3fb1467a0b0e4227ebae56c3d0672e40939d9c874e7b.png)

@tab 6

![](https://blog.images.bornforthis.cn/docs-images/sha256/f0/f00b10eeef39f8bc87cc379913c6b343415b8f37622f81ab3f7c5704df23961d.png)

@tab 7

![](https://blog.images.bornforthis.cn/docs-images/sha256/43/430bec6fd7949efe73cccdcdf456660f7cc9bd6d8978c33bac6e6d96b96e3886.png)

:::

基于这样的需求，我收到了两次不同的自动化需求文档和操作数据，接下来我将系统整理需求并实施。

## 1. 需求整理📄

### 1.1 需求点 1

共有两个产品，从估值表中导出数据到输出文件 excel 中。

1） 提取产品的日期和净值分别到“画图-产品1”和“画图-产品2”中。

- 数据：日期是文件名的后 8 个数字，净值在估值表的这个位置「图-1」。

- 输出：
    - 保存到新的 Excel 中，表名「sheet name」分别为：“`画图-产品1`”和“`画图-产品2`”「图-2」
    - 表中的数据有：日期、产品净值。
        - 日期：日期
        - 产品净值：产品1 or 产品2......

:::: tabs

@tab 画图-产品1

| 日期      | 产品1 |
| --------- | ----- |
| 2022/11/4 | 1     |
| 2022/11/7 | 1     |
| 2022/11/8 | 1     |
| 2022/11/9 | 1     |

@tab 画图-产品2

| 日期      | 产品2  |
| --------- | ------ |
| 2023/3/29 | 1      |
| 2023/3/30 | 1.0007 |
| 2023/3/31 | 1.0019 |
| 2023/4/3  | 1.0021 |
| 2023/4/4  | 1.0074 |

@tab 效果图片

![](https://blog.images.bornforthis.cn/docs-images/sha256/9c/9c4c9f1d3ef602c515dba3af5151613ea10ada6405a2fb59099f785e1eb353ef.png)

@tab 图-1

![图-1](https://blog.images.bornforthis.cn/docs-images/sha256/3d/3d55446dd5e050735bc2d49831098d4ca40d854b2cde3b3dd3c944035a31dcb0.png)

@tab 图-2

![](https://blog.images.bornforthis.cn/docs-images/sha256/5f/5f4e3087dd430dd9e950c2d2c6e0b1254e0497b175210e88423984e1580d68c4.png)

::::

### 1.2 需求点 2

1） 检查两个产品的子基金名称是否在“信息维护”中出现过，如果没出现过就把子基金名字输出到“待补充” or 直接追加在“信息维护”中。~~DN 会手动把待补充的子基金填到“信息维护页”，手动维护子基金简称和策略分类这两列。~~ 其他的，默认数据为：None or 空字符串。

- 提取逻辑：通过第一列的科目代码长度大于 16 的，获取到所对应的基金名称。

- 还需要读取产品文件名称中的日期，到信息维护中的**初始投资日**

::: tabs

@tab 产品中对应的基金名称

![](https://blog.images.bornforthis.cn/docs-images/sha256/ea/eaacc5998c90f83b0b3ab6ed6b94a62d1f5ffe77e7804449f056b0a2d165a528.png)

@tab 追加到输出文件.xlsx

![](https://blog.images.bornforthis.cn/docs-images/sha256/66/6691924a51124c920b8572c9c02cccaa28b5f0d573c416427f955d2ca67e92c0.png)

:::

### 1.3 需求点 3

::: tabs

@tab 数据点 1

比如，产品1 所有信托资产净值，全部提取到了，相加在一起，用作后面的：分母。

提取每个 产品2估值表中的”资产净值“所对应的“市值的本币”

![](https://blog.images.bornforthis.cn/docs-images/sha256/05/055ac9c7838de53e32eabbc6d9d36521b2e8d71a1233bc775fc3f66294a550c1.png)

```python
import pandas as pd
from main4 import generate_path

paths = generate_path(".")

# df[df["科目代码"] == "资产净值"]["市值.1"].iloc[0]
# df[df["科目代码"] == "信托资产净值:"]["市值"].iloc[0]
# df = pd.read_excel("/Users/aiyuechuang/Coder/Pycharm/StudentCoder/auto_office/sample/产品2/原始估值表/B80881_产品名1_估值附件_20230816.xlsx", skiprows=3)
# df = pd.read_excel("/Users/aiyuechuang/Coder/Pycharm/StudentCoder/auto_office/sample/产品1/原始估值表/3W0110产品2估值表20230810.xls", skiprows=4)

cp1 = []
cp2 = []
for path in paths:
    if "产品1" in path:
        df = pd.read_excel(path, skiprows=4)
        value = df[df["科目代码"] == "资产净值"]["市值.1"].iloc[0]
        cp2.append(value)
    else:
        df = pd.read_excel(path, skiprows=3)
        value = df[df["科目代码"] == "信托资产净值:"]["市值"].iloc[0]
        cp1.append(value)
print(cp1, cp2)
```



@tab 数据点 2

![](https://blog.images.bornforthis.cn/docs-images/sha256/c8/c8dcf3697e7522668de5d48e61b60b950a95bce01db009aec3ca747125850d24.png)

@tab 数据点 3

![](https://blog.images.bornforthis.cn/docs-images/sha256/38/38618d4ae6132fef0902ad3c8adeebc6e023f6318b8e637171bde7bc9e59a71e.png)

:::



## 2. 代码实现💻

### 2.1 库的对比

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

### 2.2 pandas 在 Excel 领域的特点

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

### 2.3 需求点1「思路」

- 实现思路：
    - 读取 sample 文件夹下所 Excel 并生成相对路径；
    - 编写新旧版本 Excel 数据；
    - 提取对应需要的数据；
    - 实现追加数据；
    - 不同的净值分开
        - 产品1——>画图-产品1
        - 产品2——>画图-产品2；
    - 优化追加策略「已经存在的不追加，依据：比较日期」；

#### 2.3.1 导入所需库

```python
import os
from pprint import pprint
import re, xlrd
import pandas as pd, openpyxl
```





## 3. Bug🙋

- [ ] Excel 使用选中删除，会产生删除“不干净”，添加函数会在 Excel 空白后面追加数据；
- [ ] Excel 表格是否可以使用 Python 合并
- [ ] 



































































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

