---
title: Assignment 2
date: 2024-01-28 18:02:55
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

## 1. 题目

1. Develop a Python program that reads a text file **provided by the user** (for example, any book in **.TXT format** from Project Gutenberg at [https://www.gutenberg.org](https://www.gutenberg.org)).
2. The program should then present the **top ten keywords, their counts, and the percentage of these keywords** in comparison to the total number of words in the text file. Please ensure that the program first **excludes common words** like *a*, *the*, *and*, *to*, *from*, *where*, *what*, *was*, *when*, *I*, *you*, *we*, *us*, *me,* and *for* from the total word count before proceeding to subsequent analyses and calculations.
3. In addition, your program should also be capable of providing the **count of a specific** **keyword** as requested by the user.

To better understand the term ‘keyword’, please refer to this website: [https://www.semrush.com/blog/what-are-keywords-simple-keyword-definition/](https://www.semrush.com/blog/what-are-keywords-simple-keyword-definition/) 

Kindly share your Python program and the text file with my email at bernardlkb@ukm.edu.my. The deadline for Project 1 submission is **2024-01-31**.

## 2. 解决

### 2.1 下载 TXT

- [https://www.gutenberg.org](https://www.gutenberg.org)

```python
# -*- coding: utf-8 -*-
# @Time    : 2024/1/28 22:09
# @Author  : AI悦创
# @FileName: a2.py
# @Software: PyCharm
# @Blog    ：https://bornforthis.cn/
# Created by Bornforthis.
import requests
from requests.exceptions import RequestException


def read_text(url: str):
    try:
        response = requests.get(url)
        if response.status_code == 200:
            return response.text
    except RequestException:
        return ''


def main():
    url = 'https://www.gutenberg.org/cache/epub/72796/pg72796.txt'
    text = read_text(url)
    print(text)


if __name__ == '__main__':
    main()
```





::: code-tabs

@tab code1

```python
# -*- coding: utf-8 -*-
# @Time    : 2024/1/28 22:09
# @Author  : AI悦创
# @FileName: a2.py
# @Software: PyCharm
# @Blog    ：https://bornforthis.cn/
# Created by Bornforthis.
import re
import collections
from typing import List, Dict, Tuple


def read_file(file_path: str) -> str:
    """读取文本文件并返回其内容"""
    with open(file_path, 'r', encoding='utf-8') as file:
        return file.read()


def preprocess_text(text: str) -> List[str]:
    """预处理文本：去除标点符号，转换为小写，并分割为单词列表"""
    text = re.sub(r'[^\w\s]', '', text)  # 移除标点符号
    text = text.lower()  # 转换为小写
    return text.split()


def filter_common_words(words: List[str], common_words: set) -> List[str]:
    """过滤掉常见单词"""
    return [word for word in words if word not in common_words]


def get_top_keywords(words: List[str], top_n: int = 10) -> List[Tuple[str, int]]:
    """获取前N个关键词及其出现次数"""
    word_count = collections.Counter(words)
    return word_count.most_common(top_n)


def get_keyword_percentage(word_counts: List[Tuple[str, int]], total_words: int) -> Dict[str, float]:
    """计算关键词占总词数的百分比"""
    return {word: (count / total_words) * 100 for word, count in word_counts}


# 常见单词列表
COMMON_WORDS = set([
    'a', 'the', 'and', 'to', 'from', 'where', 'what', 'was', 'when',
    'i', 'you', 'we', 'us', 'me', 'for'
])


# 主程序
def main(file_path: str):
    text = read_file(file_path)
    words = preprocess_text(text)
    filtered_words = filter_common_words(words, COMMON_WORDS)
    top_keywords = get_top_keywords(filtered_words)
    total_words = len(filtered_words)
    keyword_percentages = get_keyword_percentage(top_keywords, total_words)

    print("Top 10 Keywords, Counts, and Percentages:")
    for word, count in top_keywords:
        print(f"{word}: Count = {count}, Percentage = {keyword_percentages[word]:.2f}%")

    # 用户查询特定关键词
    query_word = input("Enter a keyword to find its count: ").lower()
    print(f"Count of '{query_word}': {filtered_words.count(query_word)}")


if __name__ == "__main__":
    file_path = 'pg72796.txt'
    # file_path = input("Enter the path to your text file: ")
    main(file_path)

```

@tab code2

```python
# -*- coding: utf-8 -*-
# @Time    : 2024/1/28 22:09
# @Author  : AI悦创
# @FileName: a2.py
# @Software: PyCharm
# @Blog    ：https://bornforthis.cn/
# Created by Bornforthis.
import requests
from requests.exceptions import RequestException
import re
import collections


def read_text(url: str):
    try:
        response = requests.get(url)
        if response.status_code == 200:
            return response.text
    except RequestException:
        return ''


def preprocess_text(text):
    """预处理文本：去除标点符号，转换为小写，并分割为单词列表"""
    # 方法一
    text = re.sub('[^\w\s]', '', text)  # 移除标点符号 replace

    # 方法二
    # text = text.replace(',', '')
    # text = text.replace('.', '')
    # text = text.replace('!', '')
    # text = text.replace('?', '')
    # text = text.replace(':', '')
    # text = text.replace('\\', '')
    # text = text.replace('-', '')
    # text = text.replace('“', '')
    # text = text.replace('·', '')
    # text = text.replace('‒', '')
    # text = text.replace('_', '')
    # text = text.replace('"', '')
    # text = text.replace('*', '')

    # 下面两行不动
    text = text.lower()  # 转换为小写
    return text.split()


def filter_common_words(words, common_words):
    filter_words = []
    for word in words:
        if word not in common_words:
            filter_words.append(word)
    return filter_words


def get_top_keywords(words, top_n=10):
    """获取前 N 个关键词及其出现次数"""
    word_count = collections.Counter(words)
    return word_count.most_common(top_n)


def get_keyword_percentage(word_counts, total_words):
    """计算关键词占总词数的百分比"""
    # return {word: (count / total_words) * 100 for word, count in word_counts}
    keyword_percentages = {}
    for word, count in word_counts:
        keyword_percentages[word] = (count / total_words) * 100
    return keyword_percentages


# 常见的单词列表
COMMON_WORDS = {'a', 'the', 'and', 'to', 'from', 'where', 'what', 'was', 'when', 'i', 'you', 'we', 'us', 'me', 'for'}


def main():
    url = 'https://www.gutenberg.org/cache/epub/72796/pg72796.txt'
    text = read_text(url)
    # print(text)
    words = preprocess_text(text)
    # print(words)
    # print(len(words))
    filtered_words = filter_common_words(words, COMMON_WORDS)
    # print(filtered_words)
    top_keywords = get_top_keywords(filtered_words)
    # print(top_keywords)
    total_words = len(filtered_words)
    keyword_percentages = get_keyword_percentage(top_keywords, total_words)
    # print(keyword_percentages)
    print("Top 10 Keywords, Counts, and Percentages:")
    for word, count in top_keywords:
        print(f"{word}: Count = {count}, Percentage = {keyword_percentages[word]:.2f}%")

    # 用户查询特定关键词
    query_word = input("Enter a keyword to find its count: ").lower()
    print(f"Count of '{query_word}': {filtered_words.count(query_word)}")


if __name__ == '__main__':
    main()
```



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
