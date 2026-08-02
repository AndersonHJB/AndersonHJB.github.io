---
title: QZ数据分析作业
date: 2024-10-19 22:02:04
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

## 输出符合条件的属性内容

任务一：改写以下文档《实战体验：输出符合条件的属性内容》中的代码，实现两个任务：

（1）对数据文件 zhuanli.xls 中所有含有发明人“吴峰”和“汪升”的发明专利的“申请日”打印出来；

（2）并将含有发明人“吴峰”和“汪升”的所有发明专利条目保存到 Excel 中。

```python
# -*- coding: utf-8 -*-
# @Time    : 2024/11/26 09:19
# @Author  : AI悦创
# @FileName: hlm.py
# @Software: PyCharm
# @Blog    ：https://bornforthis.cn/
# code is far away from bugs with the god animal protecting
#    I love animals. They taste delicious.

import pandas as pd
import jieba
from collections import Counter
import re

# 读取电商评论数据
data = pd.read_csv('训练集数码大类评论.csv')

# 确保数据中有评论列
if '评论内容' not in data.columns:
    raise ValueError("数据中没有找到评论列，请确认数据格式。")

# 加载停用词表
stopwords = set()
with open('停用词.txt', 'r', encoding='utf-8') as f:
    stopwords = set([line.strip() for line in f])

# 正则表达式去除标点符号和特殊字符
def clean_text(text):
    text = re.sub(r"[^\w\s]", "", text)  # 去除所有非字母、数字、下划线的字符
    return text

# 提取评论列并统计词频
comments = data['评论内容'].astype(str)
words = []

# 分词和统计词频（过滤停用词和标点符号）
for comment in comments:
    cleaned_comment = clean_text(comment)  # 先清理文本
    seg_list = jieba.lcut(cleaned_comment)  # 分词
    filtered_words = [word for word in seg_list if word not in stopwords and word.strip()]
    words.extend(filtered_words)

# 统计词频
word_counts = Counter(words)

# 将词频数据导出为CSV文件
word_freq_df = pd.DataFrame(word_counts.items(), columns=['词语', '频率'])
word_freq_df.to_csv('word_frequency.csv', index=False, encoding='utf-8')

# 生成电商评论专有词典
# 专有词典基于评论中高频词筛选生成（频率超过5次的词语）
custom_dict = [word for word, freq in word_counts.items() if freq > 5]

# 将专有词典保存为txt文件
with open('custom_dict.txt', 'w', encoding='utf-8') as f:
    for word in custom_dict:
        f.write(word + '\n')

# 加载并使用生成的专有词典
for word in custom_dict:
    jieba.add_word(word)

# 为每条评论分词并去除停用词和标点符号后存储在原始数据中新增一列
data['分词结果'] = comments.apply(lambda x: ' '.join(
    [word for word in jieba.lcut(clean_text(x)) if word not in stopwords and word.strip()]))

# 导出包含分词结果的CSV文件
data.to_csv('data_with_segments.csv', index=False, encoding='utf-8')
```



```markdown
任务二：下方数据集 600018.csv 的文件中是从浙大网新获取股票代码为 600018 股票2019年1月1日起到7月11日的交易数据。数据中有该股票当日最高价、最低价、开盘价、收盘价、成交量、复权收盘价。请对该数据集编代码完成下述3个任务：

（1）打印每个字段数据的统计情况，如最小值、最大值、均值、标准差等；

（2）在数据中增加涨跌幅序列，该列字段的数值计算公式为$\text{涨/跌}=\frac{\text{当日close}-\text{上一日close}}{上一日close}\times 100\%$ 。

**注意：**

- 情况1：当数据列“成交量”为0时，使用 $\frac{\text{均值}}{\text{上一日close}}$
- 情况2：$\text{当日close}-\text{上一日close}=0$ 时数据运算出来结果为0，不需要替代。（也就是不执行情况1）

~~要注意中间有的交易日的数据会缺失，比如因为重大事件停牌的时间，因此数据会出现缺失。缺失的数据用涨跌值的均值替代；~~

（3）处理完毕的数据以 csv 格式存放到本地。
```



---

《红楼梦》文本数据分析中分词、去除停用词以及统计词频的操作，对给出的电商评论数据进行统计词频操作并导出数据文件。

---

《红楼梦》文本数据分析中分词、去除停用词以及统计词频的操作，对给出的电商评论数据(data.csv)进行统计词频操作并导出数据文件。还需要生成电商评论的专有词典，词频结果存储在原始数据文件新增一列，内容为分好词后的评论。

::: code-tabs

@tab Code1

```python
import pandas as pd
import jieba
from collections import Counter

# 读取电商评论数据
data = pd.read_csv('/mnt/data/data.csv')

# 确保数据中有评论列
if '评论' not in data.columns:
    raise ValueError("数据中没有找到评论列，请确认数据格式。")

# 提取评论列并统计词频
comments = data['评论'].astype(str)
words = []

# 分词和统计词频
for comment in comments:
    seg_list = jieba.lcut(comment)
    words.extend(seg_list)

# 统计词频
word_counts = Counter(words)

# 将词频数据导出为CSV文件
word_freq_df = pd.DataFrame(word_counts.items(), columns=['词语', '频率'])
word_freq_df.to_csv('/mnt/data/word_frequency.csv', index=False, encoding='utf-8')

# 生成电商评论专有词典
# 假设专有词典基于评论中高频词筛选生成（频率超过5次的词语）
custom_dict = [word for word, freq in word_counts.items() if freq > 5]

# 将专有词典保存为txt文件
with open('/mnt/data/custom_dict.txt', 'w', encoding='utf-8') as f:
    for word in custom_dict:
        f.write(word + '\n')

# 加载并使用生成的专有词典
for word in custom_dict:
    jieba.add_word(word)

# 为每条评论分词，并存储在原始数据中新增一列
data['分词结果'] = comments.apply(lambda x: ' '.join(jieba.lcut(x)))

# 导出包含分词结果的CSV文件
data.to_csv('/mnt/data/data_with_segments.csv', index=False, encoding='utf-8')
```

@tab Code2

```python
import pandas as pd
import jieba
from collections import Counter

# 读取电商评论数据
data = pd.read_csv('/mnt/data/data.csv')

# 确保数据中有评论列
if '评论' not in data.columns:
    raise ValueError("数据中没有找到评论列，请确认数据格式。")

# 提取评论列并统计词频
comments = data['评论'].astype(str)
words = []

# 分词和统计词频
for comment in comments:
    seg_list = jieba.lcut(comment)
    words.extend(seg_list)

# 统计词频
word_counts = Counter(words)

# 将词频数据导出为CSV文件
word_freq_df = pd.DataFrame(word_counts.items(), columns=['词语', '频率'])
word_freq_df.to_csv('/mnt/data/word_frequency.csv', index=False, encoding='utf-8')

# 生成电商评论专有词典
# 假设专有词典基于评论中高频词筛选生成（频率超过5次的词语）
custom_dict = [word for word, freq in word_counts.items() if freq > 5]

# 将专有词典保存为txt文件
with open('/mnt/data/custom_dict.txt', 'w', encoding='utf-8') as f:
    for word in custom_dict:
        f.write(word + '\n')

# 加载并使用生成的专有词典
for word in custom_dict:
    jieba.add_word(word)

# 为每条评论分词，并存储在原始数据中新增一列
data['分词结果'] = comments.apply(lambda x: ' '.join(jieba.lcut(x)))

# 覆盖保存到原始data.csv文件
data.to_csv('/mnt/data/data.csv', index=False, encoding='utf-8')
```



:::

```python
import pandas as pd
import jieba

# 加载文件路径
data_path = 'data.csv'  # 评论数据的CSV文件路径
stopwords_path = '停用词.txt'  # 停用词表文件路径
proprietary_words_path = '专有词汇词典.txt'  # 专有词汇词典文件路径

# 加载电商评论数据
data = pd.read_csv(data_path)  # 使用pandas加载评论数据CSV文件到data中，便于后续处理

# 指定评论内容的列名
review_column_name = '评论内容'  # 设置实际存储评论文本的列名

# 加载停用词
with open(stopwords_path, 'r', encoding='utf-8') as f:
    stopwords = set(f.read().splitlines())  # 读取停用词表并将其存储为集合，用于后续过滤

# 加载专有词汇并添加到jieba词典中
with open(proprietary_words_path, 'r', encoding='utf-8') as f:
    proprietary_words = f.read().splitlines()  # 读取专有词汇，每行为一个专有词
for word in proprietary_words:
    jieba.add_word(word)  # 将每个专有词添加到jieba词典中，以确保这些词汇不会被误切分

# 定义分词并过滤停用词的函数
def tokenize_and_filter(text):
    words = jieba.lcut(text)  # 使用jieba对评论文本进行分词
    return [word for word in words if word not in stopwords and len(word) > 1]  # 去除停用词和长度小于2的词

# 对每条评论进行分词并过滤，统计词频
all_words = data[review_column_name].apply(tokenize_and_filter).sum()  # 分词后的所有词汇合并到一个列表
word_freq = pd.Series(all_words).value_counts()  # 统计词频并生成一个Series对象，按频次降序排列

# 导出词频统计结果到CSV文件
output_path = 'ecommerce_word_frequency.csv'  # 设置输出文件路径
word_freq.to_csv(output_path, encoding='utf-8', header=['Frequency'])  # 将词频结果导出为CSV文件

print(f"词频统计已完成，结果已保存至：{output_path}")  # 提示用户任务完成
```

```python
# -*- coding: utf-8 -*-
# @Time    : 2024/11/25 19:35
# @Author  : AI悦创
# @FileName: main3.py
# @Software: PyCharm
# @Blog    ：https://bornforthis.cn/
# code is far away from bugs with the god animal protecting
#    I love animals. They taste delicious.
# 导入pandas库
import pandas as pd

# 读取csv文件
df=pd.read_csv('600018.csv',encoding='gbk') # 编码方式选择:gbk
# 删除第一行数据
df = df.iloc[1:]

# 重置索引（可选）
df = df.reset_index(drop=True)
# df.head(125)  # 查看前几行数据
# 指定需要转换为数值类型的列
columns_to_convert = ['最高价', '最低价', '开盘价','收盘价','成交量','复权收盘价']

# 将指定的列转换为数值类型
for column in columns_to_convert:
    df[column] = pd.to_numeric(df[column], errors='coerce')
# 查看统计信息
statistics = df.describe()
print(statistics)


# 打印每个数值型列的最小值、最大值、均值和标准差
numeric_columns = df.select_dtypes(include=['number']).columns

for column in numeric_columns:
    print(f"\n数值类型列::{column} 列的统计信息:")
    print(f"最小值: {df[column].min()}")
    print(f"最大值: {df[column].max()}")
    print(f"均值: {df[column].mean()}")
    print(f"标准差: {df[column].std()}")

# 确保数据按日期排序
df['交易日'] = pd.to_datetime(df['交易日'])
df = df.sort_values(by='交易日')
print(df)

# 将 '收盘价' 列转换为数值类型，错误的值将被设置为 NaN
df['收盘价'] = pd.to_numeric(df['收盘价'], errors='coerce')
print(df['收盘价'])

# 计算涨跌幅
df['涨跌幅'] = (df['收盘价'] - df['收盘价'].shift(1)) / (df['收盘价'].shift(1)) * 100
print(df['涨跌幅'])

# 计算涨跌幅均值，去掉空值
mean_change = df['涨跌幅'].mean()
print(mean_change)

# 用均值替代缺失值
df['前一日收盘价'] = df['收盘价'].shift(1)
# df.loc[(df['成交量'] != 0) & (df['涨跌幅'].isnull()), '涨跌幅'] = mean_change
df.loc[df['成交量'] == 0, '涨跌幅'] = mean_change / df.loc[df['成交量'] == 0, '前一日收盘价'] *100
df.drop(columns=['前一日收盘价'], inplace=True)
# df['涨跌幅'].fillna(mean_change, inplace=True)
# df['涨跌幅']=df['涨跌幅'].replace(0,mean_change)

# 查看新增的涨跌幅列
print(df[['收盘价', '涨跌幅']])

# 将处理后的数据保存为 CSV 文件
df.to_csv('处理后的数据2.csv', index=True, encoding='utf-8')
```

```python
# -*- coding: utf-8 -*-
# @Time    : 2024/11/25 19:52
# @Author  : AI悦创
# @FileName: main5.py
# @Software: PyCharm
# @Blog    ：https://bornforthis.cn/
# code is far away from bugs with the god animal protecting
#    I love animals. They taste delicious.
# -*- coding: utf-8 -*-
# @Time    : 2024/11/25 19:35
# @Author  : AI悦创
# @FileName: main3_variant.py
# @Software: PyCharm
# @Blog    ：https://bornforthis.cn/
# code is far away from bugs with the god animal protecting
#    I love animals. They taste delicious.

import pandas as pd

# 定义一个函数来处理数据
def process_csv(file_path, output_path):
    # 加载数据
    df = pd.read_csv(file_path, encoding='gbk')

    # 删除第一行数据并重置索引
    df = df.iloc[1:].reset_index(drop=True)

    # 转换指定列为数值类型
    convert_to_numeric(df, ['最高价', '最低价', '开盘价', '收盘价', '成交量', '复权收盘价'])

    # 打印统计信息
    print_statistics(df)

    # 排序交易日
    df['交易日'] = pd.to_datetime(df['交易日'])
    df = df.sort_values(by='交易日')

    # 计算涨跌幅并处理缺失值
    df['涨跌幅'] = calculate_change(df)

    # 保存处理后的数据
    df.to_csv(output_path, index=True, encoding='utf-8')
    print(f"处理后的数据已保存至: {output_path}")

# 定义辅助函数：转换列为数值类型
def convert_to_numeric(df, columns):
    for col in columns:
        df[col] = pd.to_numeric(df[col], errors='coerce')

# 定义辅助函数：打印数值列的统计信息
def print_statistics(df):
    numeric_cols = df.select_dtypes(include=['number']).columns
    print("数值型列的统计信息:\n", df[numeric_cols].describe())
    for col in numeric_cols:
        print(f"\n列::{col} 的详细统计信息:")
        print(f"最小值: {df[col].min()}\n最大值: {df[col].max()}\n均值: {df[col].mean()}\n标准差: {df[col].std()}")

# 定义辅助函数：计算涨跌幅
def calculate_change(df):
    df['收盘价'] = pd.to_numeric(df['收盘价'], errors='coerce')
    df['涨跌幅'] = (df['收盘价'] - df['收盘价'].shift(1)) / df['收盘价'].shift(1) * 100

    mean_change = df['涨跌幅'].mean()  # 计算均值
    # 处理成交量为 0 的涨跌幅
    previous_close = df['收盘价'].shift(1)
    df.loc[df['成交量'] == 0, '涨跌幅'] = mean_change / previous_close * 100

    return df['涨跌幅']

# 主程序入口
if __name__ == "__main__":
    input_file = '600018.csv'  # 输入文件路径
    output_file = '处理后的数据_variant.csv'  # 输出文件路径
    process_csv(input_file, output_file)
```



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
