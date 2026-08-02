---
title: 实训三下：文本数据分析
date: 2024-12-01 12:14:20
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

## 1. 需求

本次实训任务对电商评论数据（训练集数码大类评论.csv）进行初步的情感分析以及词云可视化，并基于情感分析结果对数据中耳机产品（类别信息CATE_66,CATE_553,CATE_1167）各品牌信息分析不同品牌的消费者使用反馈（正负面评价），实验内容以代码、代码运行过程、输出结果以及分析结果总结报告的形式保存于 notebook 的 ipynb 文件中最后提交。

实验步骤（代码及过程运行过程中应能体现如下步骤）：

一、数据导入提取耳机产品信息

二、进行词性标注和情感分析

三、对正负情感评论分别绘制词云图

四、统计不同品牌耳机的正负评论数值

五、对三和四结果进行分析并总结分析结果（如果要深入挖掘可以尝试在四的结果上进行观点句提出以更有助于分析）。 

本次实训要用到的库：jieba库、wordcloud 库

可用可不用的库：TextBlob 库或者 SnowNLP 库

 

::: details lose! 参考范例：

- [数据挖掘实战—电商产品评论数据情感分析](https://blog.csdn.net/weixin_46649052/article/details/115579400)（只参考其中情感分析部分，LDA部分本次实验中不使用）

- [Python 观点句抽取](https://blog.51cto.com/u_16213299/12032653)

- 知网 Hownet 情感词典下载地址：[知网hownet情感词典](https://gitcode.com/open-source-toolkit/c189c/overview)或者[知网hownet情感词典（和鲸平台下载）](https://www.heywhale.com/mw/dataset/6113895baca2460017a475be/file)

:::



::: code-tabs

@tab 1

```python
!pip install snownlp
# 安装中文字体（例如思源黑体）
# !apt-get install -y fonts-noto-cjk
# # !apt-get -q install fonts-noto-cjk
# !sudo apt-get install fonts-noto-cjk
# # 在 Google Colab 下载并设置中文字体
# !apt-get install fonts-wqy-zenhei -y
!apt-get -y install fonts-noto-cjk
```

@tab 一、导入所需库并上传数据

```python
# 导入所需的库
# 导入必要的库
import pandas as pd
from snownlp import SnowNLP
import jieba
from wordcloud import WordCloud
import matplotlib.pyplot as plt
from collections import Counter

# import warnings
# warnings.filterwarnings("ignore")

# 设置 matplotlib 使用 Noto Sans CJK 字体
# plt.rcParams['font.family'] = 'Noto Sans CJK'
# 设置 matplotlib 使用 DejaVu Sans 字体
plt.rcParams['font.family'] = 'DejaVu Sans'

# 1. 数据导入并提取耳机产品信息
data = pd.read_csv('https://github.com/AndersonHJB/AndersonHJB.github.io/releases/download/V0.05/01-Training-set-digital-class-reviews.csv')
# data


# 查看数据的基本信息
data.head()

# 查看数据的基本信息
data.info()
```

@tab 二、提取耳机产品信息

```python
# 筛选耳机类别的评论数据
# headphone_categories = ["CATE_66", "CATE_553", "CATE_1167"]
# headphones_data = data[data["所属类别"].apply(lambda x: any(category in x for category in headphone_categories))]
# 筛选所属类别为 "CATE_66,CATE_553,CATE_1167" 的耳机评论数据
headphones_data = data[data['所属类别'] == 'CATE_66,CATE_553,CATE_1167']


# 重置索引
headphones_data.reset_index(drop=True, inplace=True)
print(len(headphones_data))
# 查看数据结构
headphones_data.head()
```

@tab 三、情感分析和词性标注

```python
# 添加情感分析结果
headphones_data['情感得分'] = headphones_data['评论内容'].apply(lambda x: SnowNLP(x).sentiments)

# 根据情感得分划分正负面情感
headphones_data['情感标签'] = headphones_data['情感得分'].apply(lambda x: 'positive' if x > 0.5 else 'negative')

# 查看情感分析的分布
sentiment_distribution = headphones_data['情感标签'].value_counts()

# 可视化情感分析分布
plt.figure(figsize=(8, 6))
sentiment_distribution.plot(kind='bar')
plt.title('Earphone reviews sentiment analysis distribution') # 耳机评论情感分析分布
plt.xlabel('Affective type')  # 情感类型
plt.ylabel('Number of comments') # 评论数量
plt.xticks(rotation=0)
plt.show()

# 输出情感分布
sentiment_distribution
```

@tab 四、正负面评论的词云可视化

```python
# 生成正面和负面评论的词云
def generate_wordcloud(texts, title):
    words = " ".join(texts)
    wordcloud = WordCloud(font_path='/usr/share/fonts/truetype/noto/NotoSansCJK-Regular.ttc', width=800, height=400, background_color='white').generate(words)
    
    plt.figure(figsize=(10, 5))
    plt.imshow(wordcloud, interpolation='bilinear')
    plt.title(title)
    plt.axis('off')
    plt.show()

# 提取正面和负面评论的内容
positive_comments = headphones_data[headphones_data['情感标签'] == 'positive']['评论内容']
negative_comments = headphones_data[headphones_data['情感标签'] == 'negative']['评论内容']

# 生成正面和负面评论的词云
generate_wordcloud(positive_comments, 'positive comment')  # 正面评论词云
generate_wordcloud(negative_comments, 'negative comment')
```

@tab 五、统计不同品牌的正负面评论数

```python
# 假设每个产品名称中包含品牌信息，您可以通过品牌关键字来统计
# 示例：统计“耳机”类别下各品牌的评论数量及情感标签

# 以耳机产品的品牌名称为依据，进行统计
headphones_data['品牌'] = headphones_data['商品名称'].apply(lambda x: x.split()[0])  # 假设品牌是商品名称的第一个词

# 按品牌和情感标签进行统计
brand_sentiment_counts = headphones_data.groupby(['品牌', '情感标签']).size().unstack(fill_value=0)

# 显示统计结果
brand_sentiment_counts.head()
```

@tab 扩展

```python
# 根据品牌的正负面评论数量生成结论
def generate_brand_conclusion(brand_sentiment_counts):
    conclusions = []
    for brand in brand_sentiment_counts.index:
        positive_count = brand_sentiment_counts.loc[brand, 'positive']
        negative_count = brand_sentiment_counts.loc[brand, 'negative']
        
        # 生成结论
        if positive_count > negative_count:
            conclusion = f"品牌: {brand}\n结论: 正面评论占多数，消费者反馈较好\n"
        else:
            conclusion = f"品牌: {brand}\n结论: 负面评论占多数，可能存在质量或服务问题\n"
        
        conclusions.append(conclusion)
    
    return conclusions

# 生成结论
brand_conclusions = generate_brand_conclusion(brand_sentiment_counts)

# 输出结论
for conclusion in brand_conclusions:
    print(conclusion)
```



:::

- [https://colab.research.google.com/drive/1pl67ebk5g03oHmcXeC_prf__DxziOrL8?usp=sharing](https://colab.research.google.com/drive/1pl67ebk5g03oHmcXeC_prf__DxziOrL8?usp=sharing)

![](https://blog.images.bornforthis.cn/docs-images/sha256/4c/4c642378d4ae2cd44ba73aabd5f3769066758ffe26767aa1d15414be2a0fb927.png)











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
