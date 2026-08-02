---
title: 安庆市第二十一届中等职业学校技能大赛快速入门
date: 2024-05-25 11:09:38
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

## 步骤 1: 制作示例数据文件

你好，我是悦创。

我将首先创建一个示例数据文件，然后向你展示如何使用 Python 和 pandas 库来进行数据清洗操作。数据将包括一些常见的数据问题，如不一致的数据格式、重复记录和缺失值。

首先，我将创建一个包含以下内容的 CSV 文件：
- `ID`：唯一标识符。
- `Name`：名字，可能会有重复或格式问题。
- `Age`：年龄，可能包含缺失值或非数字字符。
- `Email`：电子邮件地址，可能包含一些无效格式。
- `JoinDate`：加入日期，日期格式可能不一致。

数据示例：
```
ID,Name,Age,Email,JoinDate
1,Alice,29,alice@example.com,2023/01/15
2,Bob,thirty,bob@example.com,15-01-2023
3,Charlie,,charlie@example.com,2023-01-15
1,Alice,29,alice@example.com,2023-01-15
4,David,28,david#example.com,2023-01-15
```

接下来我将这些数据保存到一个 CSV 文件中，编写如下代码：

```python
import pandas as pd

# 创建示例数据
data = {
    'ID': [1, 2, 3, 1, 4],
    'Name': ['Alice', 'Bob', 'Charlie', 'Alice', 'David'],
    'Age': ['29', 'thirty', '', '29', '28'],
    'Email': ['alice@example.com', 'bob@example.com', 'charlie@example.com', 'alice@example.com', 'david#example.com'],
    'JoinDate': ['2023/01/15', '15-01-2023', '2023-01-15', '2023-01-15', '2023-01-15']
}

# 将数据转换为 DataFrame
df = pd.DataFrame(data)

# 保存到 CSV 文件
file_path = './ExampleData.csv'
df.to_csv(file_path, index=False)

print(file_path)
```



## 步骤 2: 使用 pandas 进行数据清洗

接下来，我将展示如何使用 pandas 库对这个数据文件进行清洗，包括以下操作：
1. **读取数据**：加载 CSV 文件到 DataFrame。
2. **数据格式统一**：确保日期格式统一。
3. **处理重复值**：删除重复的记录。
4. **处理缺失值**：填充或删除缺失的数据。
5. **数据类型转换**：确保所有列的数据类型正确，例如将年龄从字符串转换为整数。



















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
