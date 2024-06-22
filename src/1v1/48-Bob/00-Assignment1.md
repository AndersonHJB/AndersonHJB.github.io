---
title: MSCI 641 Assignment Total
date: 2023-07-03 00:28:40
icon: code
author: AI悦创
isOriginal: true
category: 
    - Python 一对一教学
tag:
    - Python 一对一教学
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

## Assignment 1 (code only, 5%) Due date: June 8

Write a python script to perform the following data preparation activities:

1. Tokenize the corpus
2. Remove the following special characters: !"#$%&()*+/:;<=>@[\\]^`{|}~\t\n
3. Create two versions of your dataset: (1) with stopwords and (2) without stopwords. Stopword lists are available online.
4. Randomly split your data into training (80%), validation (10%) and test (10%) sets.

Details:

1. **Command-line argument:** Path to the folder where pos.txt and neg.txt reside. 
2. You must implement the required techniques in core Python. For instance, you can use Python’s `random` module to create the train/val/test split and can read the .txt files in Python (using the in-built `open` function) instead of using `pandas`. 
3. The tokenized sentences should be stored in a file called ‘out.csv’ where each line follows the format mentioned below. Note that the quotes below are just to show that they are strings, you don’t need to explicitly add them around every token: [‘My’, ‘daughter’, ‘wanted’, ‘this’, ‘book’, ‘and’, ‘the’, ‘price’, ‘on’, ‘Amazon’, ‘was’, ‘the’, ‘best.’] 
4. Although not required, you can remove any additional punctuation marks such as ‘-’.  Additionally, it doesn’t matter if you store those punctuations as a separate token or concatenate it with the previous word. 
5. **Expected output files:** 
    1. out.csv: tokenized sentences w/ stopwords 
    2. train.csv: training set w/ stopwords 
    3. val.csv: validation set w/ stopwords 
    4. test.csv: test set w/ stopwords 
    5. out_ns.csv: tokenized sentences w/o stopwords 
    6. train_ns.csv: training set w/o stopwords 
    7. val_ns.csv: validation set w/o stopwords 
    8. test_ns.csv: test set w/o stopwords
6. It is recommended that you generate the labels as well in this assignment even though it is not mandatory

::: details

````
我的题目如下：
Write a python script to perform the following data preparation activities:

1. Tokenize the corpus
2. Remove the following special characters: !"#$%&()*+/:;<=>@[\\]^`{|}~\t\n
3. Create two versions of your dataset: (1) with stopwords and (2) without stopwords. Stopword lists are available online.
4. Randomly split your data into training (80%), validation (10%) and test (10%) sets.
Details:

1. **Command-line argument:** Path to the folder where pos.txt and neg.txt reside. 
2. You must implement the required techniques in core Python. For instance, you can use Python’s `random` module to create the train/val/test split and can read the .txt files in Python (using the in-built `open` function) instead of using `pandas`. 
3. The tokenized sentences should be stored in a file called ‘out.csv’ where each line follows the format mentioned below. Note that the quotes below are just to show that they are strings, you don’t need to explicitly add them around every token: [‘My’, ‘daughter’, ‘wanted’, ‘this’, ‘book’, ‘and’, ‘the’, ‘price’, ‘on’, ‘Amazon’, ‘was’, ‘the’, ‘best.’] 
4. Although not required, you can remove any additional punctuation marks such as ‘-’.  Additionally, it doesn’t matter if you store those punctuations as a separate token or concatenate it with the previous word. 
5. **Expected output files:** 
    1. out.csv: tokenized sentences w/ stopwords 
    2. train.csv: training set w/ stopwords 
    3. val.csv: validation set w/ stopwords 
    4. test.csv: test set w/ stopwords 
    5. out_ns.csv: tokenized sentences w/o stopwords 
    6. train_ns.csv: training set w/o stopwords 
    7. val_ns.csv: validation set w/o stopwords 
    8. test_ns.csv: test set w/o stopwords
6. It is recommended that you generate the labels as well in this assignment even though it is not mandatory
我有两个文件，分别为：neg.txt、pos.txt。
neg.txt 的部分数据和格式如下：
```txt
I bought this when I bought the pop maker.
As for "pop embellishing" well, that wasn't too hard to figure out, either.
I'd save the money and spend it instead on extra pop sticks, which seem to disappear the way socks do.
didn't really care many of the cakes at all.
not up to normal standing for wilton yearbooks of the past.
Buy a Wilton magazine for less money and get more ideas and instructions for your investment.
Bag tore with almost nothing in it - Just caught the corner of a small cracker box and that was that.
```
pos.txt
```txt
My daughter wanted this book and the price on Amazon was the best.
She has already tried one recipe a day after receiving the book.
I bought this zoku quick pop for my daughterr with her zoku quick maker.
She loves it and have fun to make her own ice cream.
I was hoping there were more where those came from.
This book emphasizes very sweet dessert pops, however.
```

````

:::

### 1. Solution

::: code-tabs

@tab default

```python
import os
import csv
import argparse
import string
import random
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize

def remove_special_chars(tokens, special_chars):
    return [token for token in tokens if token not in special_chars]

def remove_stopwords(tokens, stopword_list):
    return [token for token in tokens if token not in stopword_list]

def process_text(input_path, output_path, output_ns_path, stopword_list, label):
    with open(input_path, 'r') as input_file, \
         open(output_path, 'a', newline='') as output_file, \
         open(output_ns_path, 'a', newline='') as output_ns_file:
        csv_writer = csv.writer(output_file)
        csv_writer_ns = csv.writer(output_ns_file)
        for line in input_file:
            line = line.strip()
            tokens = word_tokenize(line)
            tokens = remove_special_chars(tokens, string.punctuation)
            csv_writer.writerow([label, ' '.join(tokens)])
            
            tokens_no_stopwords = remove_stopwords(tokens, stopword_list)
            csv_writer_ns.writerow([label, ' '.join(tokens_no_stopwords)])

def split_data(input_path, train_path, val_path, test_path, split_ratio=(0.8, 0.1, 0.1)):
    with open(input_path, 'r') as input_file:
        lines = list(csv.reader(input_file))
        random.shuffle(lines)
        
        train_size = int(len(lines) * split_ratio[0])
        val_size = int(len(lines) * split_ratio[1])
        
        train_lines = lines[:train_size]
        val_lines = lines[train_size:train_size+val_size]
        test_lines = lines[train_size+val_size:]
        
        with open(train_path, 'w', newline='') as train_file, \
             open(val_path, 'w', newline='') as val_file, \
             open(test_path, 'w', newline='') as test_file:
            train_writer = csv.writer(train_file)
            val_writer = csv.writer(val_file)
            test_writer = csv.writer(test_file)
            train_writer.writerows(train_lines)
            val_writer.writerows(val_lines)
            test_writer.writerows(test_lines)

def main():
    parser = argparse.ArgumentParser(description='Prepare data')
    parser.add_argument('--folder_path', type=str, help='Path to the folder where pos.txt and neg.txt reside.')
    args = parser.parse_args()
    
    stopword_list = stopwords.words('english')
    special_chars = string.punctuation + "\t\n"
    
    # Prepare out.csv and out_ns.csv with headers
    with open(os.path.join(args.folder_path, 'out.csv'), 'w', newline='') as file, \
         open(os.path.join(args.folder_path, 'out_ns.csv'), 'w', newline='') as file_ns:
        writer = csv.writer(file)
        writer_ns = csv.writer(file_ns)
        writer.writerow(['labels', 'text'])
        writer_ns.writerow(['labels', 'text'])
    
    for sentiment in ['pos', 'neg']:
        input_path = os.path.join(args.folder_path, f'{sentiment}.txt')
        output_path = os.path.join(args.folder_path, 'out.csv')
        output_ns_path = os.path.join(args.folder_path, 'out_ns.csv')
        process_text(input_path, output_path, output_ns_path, stopword_list, sentiment)
        
    for filename in ['out', 'out_ns']:
        input_path = os.path.join(args.folder_path, f'{filename}.csv')
        train_path = os.path.join(args.folder_path, f'{filename}_train.csv')
        val_path = os.path.join(args.folder_path, f'{filename}_val.csv')
        test_path = os.path.join(args.folder_path, f'{filename}_test.csv')
        split_data(input_path, train_path, val_path, test_path)
        
if __name__ == "__main__":
    main()

```

@tab details

```python
# 导入必要的库
import os
import csv
import argparse
import string
import random
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize

# 定义函数移除特殊字符
def remove_special_chars(tokens, special_chars):
    return [token for token in tokens if token not in special_chars]

# 定义函数移除停用词
def remove_stopwords(tokens, stopword_list):
    return [token for token in tokens if token not in stopword_list]

# 定义函数处理文本，包括分词，去掉特殊字符和停用词，然后写入到CSV文件
def process_text(input_path, output_path, output_ns_path, stopword_list, label):
    with open(input_path, 'r') as input_file, \
         open(output_path, 'a', newline='') as output_file, \
         open(output_ns_path, 'a', newline='') as output_ns_file:
        csv_writer = csv.writer(output_file)
        csv_writer_ns = csv.writer(output_ns_file)
        for line in input_file:
            line = line.strip()
            tokens = word_tokenize(line)
            tokens = remove_special_chars(tokens, string.punctuation)
            csv_writer.writerow([label, ' '.join(tokens)])
            
            tokens_no_stopwords = remove_stopwords(tokens, stopword_list)
            csv_writer_ns.writerow([label, ' '.join(tokens_no_stopwords)])

# 定义函数划分数据为训练集、验证集、测试集
def split_data(input_path, train_path, val_path, test_path, split_ratio=(0.8, 0.1, 0.1)):
    with open(input_path, 'r') as input_file:
        lines = list(csv.reader(input_file))
        random.shuffle(lines)
        
        train_size = int(len(lines) * split_ratio[0])
        val_size = int(len(lines) * split_ratio[1])
        
        train_lines = lines[:train_size]
        val_lines = lines[train_size:train_size+val_size]
        test_lines = lines[train_size+val_size:]
        
        with open(train_path, 'w', newline='') as train_file, \
             open(val_path, 'w', newline='') as val_file, \
             open(test_path, 'w', newline='') as test_file:
            train_writer = csv.writer(train_file)
            val_writer = csv.writer(val_file)
            test_writer = csv.writer(test_file)
            train_writer.writerows(train_lines)
            val_writer.writerows(val_lines)
            test_writer.writerows(test_lines)

# 主函数
def main():
    parser = argparse.ArgumentParser(description='Prepare data')
    parser.add_argument('--folder_path', type=str, help='Path to the folder where pos.txt and neg.txt reside.')
    args = parser.parse_args()
    
    stopword_list = stopwords.words('english')
    special_chars = string.punctuation + "\t\n"
    
    # 创建包含标签头的out.csv和out_ns.csv文件
    with open(os.path.join(args.folder_path, 'out.csv'), 'w', newline='') as file, \
         open(os.path.join(args.folder_path, 'out_ns.csv'), 'w', newline='') as file_ns:
        writer = csv.writer(file)
        writer_ns = csv.writer(file_ns)
        writer.writerow(['labels', 'text'])
        writer_ns.writerow(['labels', 'text'])
    
    # 处理正面评论和负面评论文本
    for sentiment in ['pos', 'neg']:
        input_path = os.path.join(args.folder_path, f'{sentiment}.txt')
        output_path = os.path.join(args.folder_path, 'out.csv')
        output_ns_path = os.path.join(args.folder_path, 'out_ns.csv')
        process_text(input_path, output_path, output_ns_path, stopword_list, sentiment)
        
    # 分割数据为训练集、验证集和测试集
    for filename in ['out', 'out_ns']:
        input_path = os.path.join(args.folder_path, f'{filename}.csv')
        train_path = os.path.join(args.folder_path, f'{filename}_train.csv')
        val_path = os.path.join(args.folder_path, f'{filename}_val.csv')
        test_path = os.path.join(args.folder_path, f'{filename}_test.csv')
        split_data(input_path, train_path, val_path, test_path)
        
# 判断是否为主程序，若是则执行main()函数
if __name__ == "__main__":
    main()

"""
这个Python脚本主要做了以下几个操作：
1. 定义了处理文本的函数，这个函数会分词，去除特殊字符，然后写入CSV文件；
2. 定义了划分数据集的函数，这个函数会把所有数据划分为训练集、验证集和测试集；
3. 主函数里，首先定义了命令行参数解析器，并获取了文本所在的文件夹路径；
4. 创建了包含标签头的out.csv和out_ns.csv文件；
5. 调用处理文本的函数来处理正面和负面评论；
6. 调用划分数据集的函数来划分数据集；
7. 所有的操作都在main()函数中完成，如果这个脚本是主程序，那么就会执行main()函数。
"""
```

@tab good

```python
import os  # 操作系统功能的模块，用于文件和目录操作
import csv  # 用于CSV文件读写的模块
import argparse  # 用于处理命令行参数的模块
import string  # 包含常用字符串常量和操作的模块
import random  # 用于生成随机数的模块
from nltk.corpus import stopwords  # 从nltk库导入停用词列表
from nltk.tokenize import word_tokenize  # 从nltk库导入单词分词函数

# 函数：删除特殊字符
def remove_special_chars(tokens, special_chars):
    # 列表解析：遍历tokens，只保留不在special_chars中的token
    return [token for token in tokens if token not in special_chars]

# 函数：删除停用词
def remove_stopwords(tokens, stopword_list):
    # 列表解析：遍历tokens，只保留不在stopword_list中的token
    return [token for token in tokens if token not in stopword_list]

# 函数：处理文本，包括分词、删除特殊字符，并将结果保存到两个CSV文件中
def process_text(input_path, output_path, output_ns_path, stopword_list, label):
    # 打开输入文件和两个输出文件
    with open(input_path, 'r') as input_file, \
         open(output_path, 'a', newline='') as output_file, \
         open(output_ns_path, 'a', newline='') as output_ns_file:
        csv_writer = csv.writer(output_file)  # 创建CSV写入器
        csv_writer_ns = csv.writer(output_ns_file)  # 创建另一个CSV写入器
        for line in input_file:  # 遍历输入文件的每一行
            line = line.strip()  # 删除行尾的换行符
            tokens = word_tokenize(line)  # 分词
            tokens = remove_special_chars(tokens, string.punctuation)  # 删除特殊字符
            csv_writer.writerow([label, ' '.join(tokens)])  # 写入一行到第一个输出文件
            
            tokens_no_stopwords = remove_stopwords(tokens, stopword_list)  # 删除停用词
            csv_writer_ns.writerow([label, ' '.join(tokens_no_stopwords)])  # 写入一行到第二个输出文件

# 函数：将数据分割为训练集、验证集和测试集
def split_data(input_path, train_path, val_path, test_path, split_ratio=(0.8, 0.1, 0.1)):
    with open(input_path, 'r') as input_file:  # 打开输入文件
        lines = list(csv.reader(input_file))  # 读取所有行到一个列表中
        random.shuffle(lines)  # 随机打乱这个列表
        
        train_size = int(len(lines) * split_ratio[0])  # 计算训练集大小
        val_size = int(len(lines) * split_ratio[1])  # 计算验证集大小
        
        train_lines = lines[:train_size]  # 取出训练集数据
        val_lines = lines[train_size:train_size+val_size]  # 取出验证集数据
        test_lines = lines[train_size+val_size:]  # 取出测试集数据
        
        # 打开训练集、验证集和测试集文件
        with open(train_path, 'w', newline='') as train_file, \
             open(val_path, 'w', newline='') as val_file, \
             open(test_path, 'w', newline='') as test_file:
            train_writer = csv.writer(train_file)  # 创建CSV写入器
            val_writer = csv.writer(val_file)  # 创建另一个CSV写入器
            test_writer = csv.writer(test_file)  # 创建另一个CSV写入器
            train_writer.writerows(train_lines)  # 将训练集数据写入训练集文件
            val_writer.writerows(val_lines)  # 将验证集数据写入验证集文件
            test_writer.writerows(test_lines)  # 将测试集数据写入测试集文件

# 主函数
def main():
    parser = argparse.ArgumentParser(description='Prepare data')  # 创建参数解析器
    parser.add_argument('--folder_path', type=str, help='Path to the folder where pos.txt and neg.txt reside.')  # 添加一个参数
    args = parser.parse_args()  # 解析命令行参数
    
    stopword_list = stopwords.words('english')  # 获取英文停用词列表
    special_chars = string.punctuation + "\t\n"  # 特殊字符列表
    
    # 在两个输出文件的开头写入列名
    with open(os.path.join(args.folder_path, 'out.csv'), 'w', newline='') as file, \
         open(os.path.join(args.folder_path, 'out_ns.csv'), 'w', newline='') as file_ns:
        writer = csv.writer(file)  # 创建CSV写入器
        writer_ns = csv.writer(file_ns)  # 创建另一个CSV写入器
        writer.writerow(['labels', 'text'])  # 写入列名
        writer_ns.writerow(['labels', 'text'])  # 写入列名
    
    for sentiment in ['pos', 'neg']:  # 遍历两种情感（积极和消极）
        input_path = os.path.join(args.folder_path, f'{sentiment}.txt')  # 输入文件路径
        output_path = os.path.join(args.folder_path, 'out.csv')  # 输出文件路径
        output_ns_path = os.path.join(args.folder_path, 'out_ns.csv')  # 另一个输出文件路径
        process_text(input_path, output_path, output_ns_path, stopword_list, sentiment)  # 处理文本并保存结果
        
    for filename in ['out', 'out_ns']:  # 遍历两种文件名
        input_path = os.path.join(args.folder_path, f'{filename}.csv')  # 输入文件路径
        train_path = os.path.join(args.folder_path, f'{filename}_train.csv')  # 训练集文件路径
        val_path = os.path.join(args.folder_path, f'{filename}_val.csv')  # 验证集文件路径
        test_path = os.path.join(args.folder_path, f'{filename}_test.csv')  # 测试集文件路径
        split_data(input_path, train_path, val_path, test_path)  # 分割数据并保存结果
        
if __name__ == "__main__":
    main()  # 脚本直接运行时调用主函数

```

:::

## Assignment 3 (code + short report, 7%). Due date: June 22

1. Write a python script using genism library to train a Word2Vec model on the Amazon corpus.
2. Use genism library to get the most similar words to a given word. Find 20 most similar words to “good” and “bad”. Are the words most similar to “good” positive, and words most similar to “bad” negative? Why this **is** or **isn’t** the case? Explain your intuition briefly (in 5-6 sentences).
3. **Command-line argument:** Path to the folder where pos.txt and neg.txt reside 
4. Write the report (README.md) as succinctly as possible and **DO NOT** overshoot the word limit (5-6 sentences).
5. **Output files (must be included in your submission):** 
    1. w2v.model: Word2vec model trained on the entire Amazon corpus (pos.txt + neg.txt) 
6. **Code requirement:**
    1. In addition to the general instructions posted at the beginning of the document, you should also submit an `inference.py` script, which generates the top-20 most similar words for a given word. It should accept **one** command-line argument described below. 
    2. arg1: Path to a .txt file, which contains some words compiled for evaluation. There will be one word per line. 

::: details

````markdown
我的题目如下：
1. Write a python script using genism library to train a Word2Vec model on the Amazon corpus.
2. Use genism library to get the most similar words to a given word. Find 20 most similar words to “good” and “bad”. Are the words most similar to “good” positive, and words most similar to “bad” negative? Why this **is** or **isn’t** the case? Explain your intuition briefly (in 5-6 sentences).
3. **Command-line argument:** Path to the folder where pos.txt and neg.txt reside 
4. Write the report (README.md) as succinctly as possible and **DO NOT** overshoot the word limit (5-6 sentences).
5. **Output files (must be included in your submission):** 
    1. w2v.model: Word2vec model trained on the entire Amazon corpus (pos.txt + neg.txt) 
6. **Code requirement:**
    1. In addition to the general instructions posted at the beginning of the document, you should also submit an `inference.py` script, which generates the top-20 most similar words for a given word. It should accept **one** command-line argument described below. 
    2. arg1: Path to a .txt file, which contains some words compiled for evaluation. There will be one word per line. 
    
我有两个文件，分别为：neg.txt、pos.txt。
neg.txt 的部分数据和格式如下：
```txt
I bought this when I bought the pop maker.
As for "pop embellishing" well, that wasn't too hard to figure out, either.
I'd save the money and spend it instead on extra pop sticks, which seem to disappear the way socks do.
didn't really care many of the cakes at all.
not up to normal standing for wilton yearbooks of the past.
Buy a Wilton magazine for less money and get more ideas and instructions for your investment.
Bag tore with almost nothing in it - Just caught the corner of a small cracker box and that was that.
```
pos.txt
```txt
My daughter wanted this book and the price on Amazon was the best.
She has already tried one recipe a day after receiving the book.
I bought this zoku quick pop for my daughterr with her zoku quick maker.
She loves it and have fun to make her own ice cream.
I was hoping there were more where those came from.
This book emphasizes very sweet dessert pops, however.
```
````

:::

### Solution

::: code-tabs

@tab train_w2v.py

```python
import argparse
import gensim
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
import string

def read_corpus(pos_path, neg_path):
    stop_words = set(stopwords.words('english'))

    def tokenize_and_remove_stopwords(file_path):
        with open(file_path, 'r', encoding='utf-8') as file:
            for line in file:
                tokens = word_tokenize(line)
                yield [token.lower() for token in tokens if token not in string.punctuation and token.lower() not in stop_words]

    return list(tokenize_and_remove_stopwords(pos_path)) + list(tokenize_and_remove_stopwords(neg_path))

def main():
    parser = argparse.ArgumentParser(description='Train Word2Vec on Amazon Corpus')
    parser.add_argument('--folder_path', type=str, help='Path to the folder where pos.txt and neg.txt reside.')
    args = parser.parse_args()

    corpus = read_corpus(args.folder_path + "/pos.txt", args.folder_path + "/neg.txt")

    model = gensim.models.Word2Vec(sentences=corpus, vector_size=100, window=5, min_count=1, workers=4)
    model.save(args.folder_path + "/w2v.model")

if __name__ == "__main__":
    main()

```

@tab train_w2v.py 详细注释

```python
# 导入必要的库
import argparse
import gensim
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
import string

# 定义读取和预处理语料库的函数
def read_corpus(pos_path, neg_path):
    # 获取英文的停用词列表
    stop_words = set(stopwords.words('english'))

    # 定义处理单个文件的函数：对每一行进行分词，并去除停用词和标点符号
    def tokenize_and_remove_stopwords(file_path):
        with open(file_path, 'r', encoding='utf-8') as file:
            for line in file:
                tokens = word_tokenize(line)  # 对每一行进行分词
                # 使用生成器 yield 每一行的结果，将所有的词语转为小写，并过滤掉标点符号和停用词
                yield [token.lower() for token in tokens if token not in string.punctuation and token.lower() not in stop_words]

    # 对正面评论和负面评论的文件分别进行处理，并将结果合并返回
    return list(tokenize_and_remove_stopwords(pos_path)) + list(tokenize_and_remove_stopwords(neg_path))

# 定义主函数
def main():
    # 创建命令行参数解析器
    parser = argparse.ArgumentParser(description='Train Word2Vec on Amazon Corpus')
    # 添加一个命令行参数 --folder_path，用于指定正面评论和负面评论文件所在的目录
    parser.add_argument('--folder_path', type=str, help='Path to the folder where pos.txt and neg.txt reside.')
    # 解析命令行参数
    args = parser.parse_args()

    # 读取和预处理语料库
    corpus = read_corpus(args.folder_path + "/pos.txt", args.folder_path + "/neg.txt")

    # 使用 gensim 库的 Word2Vec 模型对语料库进行训练
    model = gensim.models.Word2Vec(sentences=corpus, vector_size=100, window=5, min_count=1, workers=4)
    # 保存训练好的模型到磁盘
    model.save(args.folder_path + "/w2v.model")

# Python 的入口函数，当这个脚本被直接运行时，__name__ 的值为 "__main__"，所以这里的代码会被执行
if __name__ == "__main__":
    # 调用主函数
    main()

"""
以上代码做了以下工作：

1. 读取正面评论和负面评论的文本文件。
2. 对文本进行预处理，包括分词、转小写、删除停用词和标点符号。
3. 使用处理过的语料库训练 Word2Vec 模型。
4. 保存训练好的模型到磁盘。
"""
```

@tab inference.py

```python
import argparse
from gensim.models import Word2Vec

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--model_path', type=str, required=True, help="Path to the Word2Vec model")
    parser.add_argument('--word_list', type=str, required=True, help="Path to the text file containing words")
    args = parser.parse_args()

    # Load the model
    model = Word2Vec.load(args.model_path)

    # Read the word list
    with open(args.word_list, 'r') as f:
        words = f.read().splitlines()

    # Find and print the most similar words
    for word in words:
        try:
            print(f"Words most similar to {word}:")
            for sim_word, similarity in model.wv.most_similar(word, topn=20):
                print(f"{sim_word}: {similarity}")
        except KeyError:
            print(f"Word '{word}' not present in vocabulary")
        print()

if __name__ == "__main__":
    main()
```

@tab inference.py 详细注释

```python
import argparse  # argparse库用于处理命令行参数
from gensim.models import Word2Vec  # gensim库中的Word2Vec用于加载Word2Vec模型

def main():
    # 初始化argparse的ArgumentParser对象
    parser = argparse.ArgumentParser()
    
    # 添加命令行参数：模型路径
    parser.add_argument('--model_path', type=str, required=True, help="Path to the Word2Vec model")
    
    # 添加命令行参数：词汇列表文件路径
    parser.add_argument('--word_list', type=str, required=True, help="Path to the text file containing words")
    
    # 使用parser的parse_args()方法解析命令行参数
    args = parser.parse_args()

    # 使用gensim的Word2Vec.load方法加载模型
    model = Word2Vec.load(args.model_path)

    # 打开并读取词汇列表文件
    with open(args.word_list, 'r') as f:
        words = f.read().splitlines()  # 按行读取文件，每一行对应一个词汇

    # 对于词汇列表中的每一个词汇，找到并打印最相似的词汇
    for word in words:
        try:  # 尝试找到与词汇最相似的词汇
            print(f"Words most similar to {word}:")  
            # 使用Word2Vec模型的most_similar方法找到与当前词汇最相似的20个词汇
            for sim_word, similarity in model.wv.most_similar(word, topn=20): 
                print(f"{sim_word}: {similarity}")  # 打印最相似的词汇及其相似度
        except KeyError:  # 如果词汇不在词汇表中，则捕获KeyError异常
            print(f"Word '{word}' not present in vocabulary")  # 打印异常信息
        print()

if __name__ == "__main__":  # 当脚本被直接运行时，执行main函数
    main()
    
"""
在以上代码中，argparse库用于处理命令行参数。gensim库的Word2Vec用于加载训练过的Word2Vec模型。model.wv.most_similar(word, topn=20)方法用于找到与给定词汇最相似的20个词汇及其相似度。如果给定的词汇不在模型的词汇表中，则most_similar方法会抛出KeyError异常，我们用try/except结构捕获这个异常并打印出错误信息，然后继续处理其他词汇。
"""
```

@tab 测试文本

```markdown
good
bad
book
Amazon
money
```

@tab 测试结果

```markdown
(PythonCoder) ➜  A3 git:(main) ✗ python inference.py --model_path w2v.model --word_list text.txt
Words most similar to good:
great: 0.8061188459396362
decent: 0.7986379265785217
excellent: 0.7242569923400879
amazing: 0.7197015285491943
fantastic: 0.6961787343025208
awesome: 0.6774498820304871
nice: 0.6725153923034668
wonderful: 0.6683364510536194
terrific: 0.6608123183250427
bad: 0.6307231783866882
impressive: 0.6158660054206848
okay: 0.6112014055252075
ok: 0.602691113948822
superb: 0.6022987961769104
perfect: 0.5812379717826843
outstanding: 0.5731497406959534
fabulous: 0.5547349452972412
deceving: 0.5541608333587646
terrible: 0.5499886274337769
reasonable: 0.5492241382598877

Words most similar to bad:
terrible: 0.6677519679069519
horrible: 0.6475969552993774
awful: 0.6439879536628723
good: 0.6307231783866882
funny: 0.5975106954574585
poor: 0.5752034187316895
stupid: 0.5607192516326904
negative: 0.5574992299079895
good/consistent: 0.5559390783309937
reckless: 0.5521181225776672
weird: 0.5487945675849915
strange: 0.5457977056503296
wrong: 0.5342735648155212
nasty: 0.5324505567550659
silly: 0.531266450881958
lousy: 0.505230188369751
me.want: 0.5046393871307373
dumb: 0.5015211701393127
fake: 0.49868670105934143
crappy: 0.49515506625175476

Words most similar to book:
booklet: 0.7688108086585999
instruction: 0.7529064416885376
cookbook: 0.7390196323394775
recipe: 0.6936575770378113
instruction/recipe: 0.6650904417037964
guide: 0.6624084711074829
recipes: 0.6565869450569153
info: 0.6523651480674744
cookbooks: 0.6408775448799133
instructional: 0.6347687840461731
books: 0.6298976540565491
manual: 0.6288154721260071
decorating: 0.6277108192443848
youtube: 0.6230810880661011
recipies: 0.622266948223114
promotional: 0.6137821078300476
article: 0.6116392612457275
page: 0.6100519895553589
english: 0.6063416600227356
blurb: 0.6043961644172668

Words most similar to Amazon:
Word 'Amazon' not present in vocabulary

Words most similar to money:
money.i: 0.8063625693321228
cash: 0.7817959189414978
money-: 0.7630889415740967
time/money: 0.700556755065918
money.bottom: 0.6912680268287659
subscribe: 0.6883657574653625
reset.these: 0.6824569702148438
money.edit/update: 0.6633751392364502
technology.i: 0.6604342460632324
moneywish: 0.6510989665985107
money.they: 0.643433153629303
~what: 0.6417416334152222
1-866: 0.634207546710968
moneywill: 0.62284255027771
money.if: 0.621588945388794
money.why: 0.6138383150100708
shipper.yes: 0.6133355498313904
trouble/: 0.6110703349113464
moneys: 0.6091706156730652
bag-it: 0.6089490056037903
```

:::



## Assignment 4 (code + short report, 10%). Due date: July 3

Write a python script using PyTorch/Keras to train a fully-connected feed-forward neural network classifier to classify documents in the Amazon corpus into positive and negative classes. Your network must consist of: 

> 使用 PyTorch/Keras 编写一个 Python 脚本来训练一个全连接前馈神经网络分类器，将 Amazon 语料库中的文档分为积极和消极两类。您的网络必须包含以下内容：

1. Input layer of the word2vec embeddings you prepared in Assignment 3.

> 在第三个任务中，您准备的word2vec嵌入层。

2. One hidden layer. For the hidden layer, try the following activation functions: ReLU, sigmoid and tanh.

> 一个隐藏层。对于隐藏层，尝试以下激活函数：ReLU、sigmoid和tanh。

3. Final layer with softmax activation function.

> 最后一层使用softmax激活函数。

4. Use cross-entropy as the loss function.

> 使用交叉熵作为损失函数。

5. Add L2-norm regularization.

> 添加L2范数正则化。

6. Add dropout. Try a few different dropout rates.

> 添加丢弃层。尝试几种不同的丢弃率。

For this assignment, you must use your training/validation/test data splits from Assignment 1. Train your models on the **training** set. You may only tune your models on your **validation** set. Once the development is complete, run your classifier on your **test** set.

> 针对这个任务，您必须使用您在作业1中划分的训练/验证/测试数据集。在**训练**集上训练您的模型。您只能在**验证**集上进行模型调整。完成开发后，使用您的分类器对**测试**集进行运行。

Report your classification accuracy results in a table with three different activation functions in the hidden layer (ReLU, sigmoid and tanh). What effect do activation functions have on your results? What effect does addition of L2-norm regularization have on the results? What effect does dropout have on the results? Explain your intuitions briefly (up to 10 sentences).

> 请将三种不同的激活函数（ReLU、sigmoid和tanh）在隐藏层中的分类准确率结果制作成表格并报告。激活函数对结果有什么影响？L2范数正则化的添加对结果有什么影响？丢弃（dropout）对结果有什么影响？请简要解释您的直觉（最多10句）。

1. **Command-line argument:** Path to the folder containing the split from A1 

> **命令行参数：** 包含来自A1的拆分的文件夹路径

2. DO NOT tune your models on the **test** set. 

> 请勿在**测试**集上调整模型。

3. You need to submit only **one** model that is trained on either with or without stopwords version (whichever gives you better performance). 

> 您只需提交**一个**模型，该模型可以是在包含停用词或不包含停用词的版本上训练得到的（选择那个能给您更好性能的版本）。

4. Write the report (README.md) as succinctly as possible and **DO NOT** overshoot the word limit. 

> 请尽量简洁地编写报告（README.md），**切勿**超过字数限制。

5. **Output files (must be included in your submission):**

    > **输出文件（必须包含在您的提交中）：**

5.1 nn_relu.model: Classifier w/ ReLU activation「nn_relu.model: 具有ReLU激活函数的分类器」

5.2 nn_sigmoid.model: Classifier w/ Sigmoid activation 「nn_sigmoid.model：具有Sigmoid激活函数的分类器」

5.3 nn_tanh.model: Classifier w/ Tanh activation「nn_tanh.model: 具有双曲正切激活函数的分类器」

1. **Code requirement:** 「**代码要求：**」
    1. In addition to the general instructions posted at the beginning of the document, you should also submit an `inference.py` script, which classifies a given sentence into a positive/negative class. It should accept the **two** command-line arguments described below. 「除了文档开头发布的通用说明外，您还应提交一个名为`inference.py`的脚本，该脚本将给定的句子分类为积极/消极类别。它应接受下面描述的**两个**命令行参数。」
        1. arg1: Path to a .txt file, which contains some sentences compiled for evaluation. There will be one sentence per line. 「arg1：一个 .txt 文件的路径，其中包含用于评估的一些句子。每行将有一句话。」
        2. arg2: Type of classifier to use. Its value will be one of the following – relu, sigmoid, tanh. **Example:** relu indicates that the neural network with ReLU activation should be selected for classifying sentences in the aforementioned .txt file. 「arg2: 分类器的类型。它的取值将是以下之一 – relu、sigmoid、tanh。**例子：** relu 表示应该选择具有 ReLU 激活的神经网络来对上述 .txt 文件中的句子进行分类。」

::: details

````markdown
我的题目如下：
Write a python script using PyTorch/Keras to train a fully-connected feed-forward neural network classifier to classify documents in the Amazon corpus into positive and negative classes. Your network must consist of: 
1. Input layer of the word2vec embeddings you prepared in Assignment 3.
2. One hidden layer. For the hidden layer, try the following activation functions: ReLU, sigmoid and tanh.
3. Final layer with softmax activation function.
4. Use cross-entropy as the loss function.
5. Add L2-norm regularization.
6. Add dropout. Try a few different dropout rates.

For this assignment, you must use your training/validation/test data splits from Assignment 1. Train your models on the **training** set. You may only tune your models on your **validation** set. Once the development is complete, run your classifier on your **test** set.

1. **Command-line argument:** Path to the folder containing the split from A1 
2. DO NOT tune your models on the **test** set. 
3. You need to submit only **one** model that is trained on either with or without stopwords version (whichever gives you better performance). 
4. **Output files (must be included in your submission):**
    1. nn_relu.model: Classifier w/ ReLU activation
    2. nn_sigmoid.model: Classifier w/ Sigmoid activation 
    3. nn_tanh.model: Classifier w/ Tanh activation
5. **Code requirement:** 
    1. In addition to the general instructions posted at the beginning of the document, you should also submit an `inference.py` script, which classifies a given sentence into a positive/negative class. It should accept the **two** command-line arguments described below. 
        1. arg1: Path to a .txt file, which contains some sentences compiled for evaluation. There will be one sentence per line. 
        2. arg2: Type of classifier to use. Its value will be one of the following – relu, sigmoid, tanh. **Example:** relu indicates that the neural network with ReLU activation should be selected for classifying sentences in the aforementioned .txt file. 
现在所拥有的文件以及部分数据：
训练集：out_train.csv、out_ns_train.csv
验证集：out_val.csv、out_ns_val.csv
测试集：out_test.csv、out_ns_test.csv
其中包含ns的代表内容已经移除 stopword。
所有文件的csv第一列是liable（也就是neg或者pos）第二例是text（好评或者差评内容）
````



````markdown
我的题目如下：
Write a python script using PyTorch/Keras to train a fully-connected feed-forward neural network classifier to classify documents in the Amazon corpus into positive and negative classes. Your network must consist of: 

1. Input layer of the word2vec embeddings you prepared in Assignment 3.
2. One hidden layer. For the hidden layer, try the following activation functions: ReLU, sigmoid and tanh.
3. Final layer with softmax activation function.
4. Use cross-entropy as the loss function.
5. Add L2-norm regularization.
6. Add dropout. Try a few different dropout rates.

For this assignment, you must use your training/validation/test data splits from Assignment 1. Train your models on the **training** set. You may only tune your models on your **validation** set. Once the development is complete, run your classifier on your **test** set.

Report your classification accuracy results in a table with three different activation functions in the hidden layer (ReLU, sigmoid and tanh). What effect do activation functions have on your results? What effect does addition of L2-norm regularization have on the results? What effect does dropout have on the results? Explain your intuitions briefly (up to 10 sentences).

1. **Command-line argument:** Path to the folder containing the split from A1 
2. DO NOT tune your models on the **test** set. 
3. You need to submit only **one** model that is trained on either with or without stopwords version (whichever gives you better performance). 
4. Write the report (README.md) as succinctly as possible and **DO NOT** overshoot the word limit. 
5. **Output files (must be included in your submission):**
    1. nn_relu.model: Classifier w/ ReLU activation
    2. nn_sigmoid.model: Classifier w/ Sigmoid activation 
    3. nn_tanh.model: Classifier w/ Tanh activation
6. **Code requirement:** 
    1. In addition to the general instructions posted at the beginning of the document, you should also submit an `inference.py` script, which classifies a given sentence into a positive/negative class. It should accept the **two** command-line arguments described below. 
        1. arg1: Path to a .txt file, which contains some sentences compiled for evaluation. There will be one sentence per line. 
        2. arg2: Type of classifier to use. Its value will be one of the following – relu, sigmoid, tanh. **Example:** relu indicates that the neural network with ReLU activation should be selected for classifying sentences in the aforementioned .txt file. 
现在所拥有的文件以及部分数据：
我作业3训练的模型名称是：w2v.model
训练集：out_train.csv、out_ns_train.csv
验证集：out_val.csv、out_ns_val.csv
测试集：out_test.csv、out_ns_test.csv
其中包含ns的代表内容已经移除 stopword。
所有文件的数格式如下：
```csv
label,text
neg,I had to take an antihistamine to calm the itching
neg,The bottle is lovely and very girlie I love the amethyst jewel tone of purple
neg,When I got my new computer I was not at all happy with the USB keyboard that came with it
neg,I will get this brand of Halvah.has too many artificial ingredients
neg,It lingers forever long after you 've finished your last sip and it 's not very pleasant
neg,This stuff was so fine it went right through my strainer when I tried to minimize the particles
neg,I bought this cable and it does n't work
```
````

````
接下来，我会发题给你，你必须阅读题目到最后一行，再开始带我解答这个题目。你必须认真读完我发给你的全部内容，然后解答题目：
Write a python script using PyTorch/Keras to train a fully-connected feed-forward neural network classifier to classify documents in the Amazon corpus into positive and negative classes. Your network must consist of:

1. Input layer of the word2vec embeddings you prepared in Assignment 3.
2. One hidden layer. For the hidden layer, try the following activation functions: ReLU, sigmoid and tanh.
3. Final layer with softmax activation function.
4. Use cross-entropy as the loss function.
5. Add L2-norm regularization.
6. Add dropout. Try a few different dropout rates.

For this assignment, you must use your training/validation/test data splits from Assignment 1. Train your models on the **training** set. You may only tune your models on your **validation** set. 

Once the development is complete, run your classifier on your **test** set.

Report your classification accuracy results in a table with three different activation functions in the hidden layer (ReLU, sigmoid and tanh). What effect do activation functions have on your results? What effect does addition of L2-norm regularization have on the results? What effect does dropout have on the results? Explain your intuitions briefly (up to 10 sentences).
我作业三训练的模型名称是：w2v.model

额外要求：
必须使用 HW1 中输出的训练、验证和测试集来训练模型，只能用训练集进行训练，验证集进行调试，并用测试集来比对准确率， 可以使用带 stopword 或不带 stopword 的集。（即带_ns和不带_ns的）哪个给出的准确率更高用哪个

输出三个模型，分别是
nn_relu.model，使用RELU作为激活函数
nn_sigmoid.model，使用sigmoid作为激活函数
nn_tanh.model，使用tanh作为激活函数

建立一个inference.py文件，需要接受两个命令行指令
1：路径到一个.txt文件，文件中包含用于测试的句子，每行一句
2：使用的分类器类型，暨输出的三个模型之一

现在所拥有的文件以及部分数据：
我作业3训练的模型名称是：w2v.model
训练集：out_train.csv、out_ns_train.csv
验证集：out_val.csv、out_ns_val.csv
测试集：out_test.csv、out_ns_test.csv
其中包含ns的代表内容已经移除 stopword。
所有数据的结构如下：第一列是标签、第二例是文本
```csv
label,text
neg,I had to take an antihistamine to calm the itching
neg,The bottle is lovely and very girlie I love the amethyst jewel tone of purple
neg,When I got my new computer I was not at all happy with the USB keyboard that came with it
neg,I will get this brand of Halvah.has too many artificial ingredients
neg,It lingers forever long after you 've finished your last sip and it 's not very pleasant
neg,This stuff was so fine it went right through my strainer when I tried to minimize the particles
neg,I bought this cable and it does n't work
```
````

````
我的题目如下：
Write a python script using PyTorch/Keras to train a fully-connected feed-forward neural network classifier to classify documents in the Amazon corpus into positive and negative classes. Your network must consist of: 

1. Input layer of the word2vec embeddings you prepared in Assignment 3.
2. One hidden layer. For the hidden layer, try the following activation functions: ReLU, sigmoid and tanh.
3. Final layer with softmax activation function.
4. Use cross-entropy as the loss function.
5. Add L2-norm regularization.
6. Add dropout. Try a few different dropout rates.

For this assignment, you must use your training/validation/test data splits from Assignment 1. Train your models on the **training** set. You may only tune your models on your **validation** set. Once the development is complete, run your classifier on your **test** set.

Report your classification accuracy results in a table with three different activation functions in the hidden layer (ReLU, sigmoid and tanh). What effect do activation functions have on your results? What effect does addition of L2-norm regularization have on the results? What effect does dropout have on the results? Explain your intuitions briefly (up to 10 sentences).

1. DO NOT tune your models on the **test** set. 
2. You need to submit only **one** model that is trained on either with or without stopwords version (whichever gives you better performance). 

3. **Output files (must be included in your submission):**
    1. nn_relu.model: Classifier w/ ReLU activation
    2. nn_sigmoid.model: Classifier w/ Sigmoid activation 
    3. nn_tanh.model: Classifier w/ Tanh activation
4. **Code requirement:** 
    1. In addition to the general instructions posted at the beginning of the document, you should also submit an `inference.py` script, which classifies a given sentence into a positive/negative class. It should accept the **two** command-line arguments described below. 
        1. arg1: Path to a .txt file, which contains some sentences compiled for evaluation. There will be one sentence per line. 
        2. arg2: Type of classifier to use. Its value will be one of the following – relu, sigmoid, tanh. **Example:** relu indicates that the neural network with ReLU activation should be selected for classifying sentences in the aforementioned .txt file. 
现在所拥有的文件以及部分数据：
训练集：out_train.csv、out_ns_train.csv
验证集：out_val.csv、out_ns_val.csv
测试集：out_test.csv、out_ns_test.csv
其中包含ns的代表内容已经移除 stopword。
所有文件的数格式如下：
```csv
label,text
neg,I had to take an antihistamine to calm the itching
neg,The bottle is lovely and very girlie I love the amethyst jewel tone of purple
neg,When I got my new computer I was not at all happy with the USB keyboard that came with it
neg,I will get this brand of Halvah.has too many artificial ingredients
neg,It lingers forever long after you 've finished your last sip and it 's not very pleasant
neg,This stuff was so fine it went right through my strainer when I tried to minimize the particles
neg,I bought this cable and it does n't work
```
作业三的代码如下：
# -*- coding: utf-8 -*-
# @Time    : 2023/7/3 17:24
# @Author  : AI悦创
# @FileName: generate.py
# @Software: PyCharm
# @Blog    ：https://bornforthis.cn/
import argparse
import gensim
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
import string


def read_corpus(pos_path, neg_path):
    stop_words = set(stopwords.words('english'))

    def tokenize_and_remove_stopwords(file_path):
        with open(file_path, 'r', encoding='utf-8') as file:
            for line in file:
                tokens = word_tokenize(line)
                yield [token.lower() for token in tokens if
                       token not in string.punctuation and token.lower() not in stop_words]

    return list(tokenize_and_remove_stopwords(pos_path)) + list(tokenize_and_remove_stopwords(neg_path))


def main():
    parser = argparse.ArgumentParser(description='Train Word2Vec on Amazon Corpus')
    parser.add_argument('--folder_path', type=str, help='Path to the folder where pos.txt and neg.txt reside.')
    args = parser.parse_args()

    corpus = read_corpus(args.folder_path + "/pos.txt", args.folder_path + "/neg.txt")

    model = gensim.models.Word2Vec(sentences=corpus, vector_size=100, window=5, min_count=1, workers=4)
    model.save(args.folder_path + "/w2v.model")


if __name__ == "__main__":
    main()

````

````
接下来，我会发题给你，你必须阅读题目到最后一行，再开始带我解答这个题目。你必须认真读完我发给你的全部内容，然后解答题目：
Write a python script using PyTorch/Keras to train a fully-connected feed-forward neural network classifier to classify documents in the Amazon corpus into positive and negative classes. Your network must consist of:

1. Input layer of the word2vec embeddings you prepared in Assignment 3.
2. One hidden layer. For the hidden layer, try the following activation functions: ReLU, sigmoid and tanh.
3. Final layer with softmax activation function.
4. Use cross-entropy as the loss function.
5. Add L2-norm regularization.
6. Add dropout. Try a few different dropout rates.

For this assignment, you must use your training/validation/test data splits from Assignment 1. Train your models on the **training** set. You may only tune your models on your **validation** set. 

Once the development is complete, run your classifier on your **test** set.

Report your classification accuracy results in a table with three different activation functions in the hidden layer (ReLU, sigmoid and tanh). What effect do activation functions have on your results? What effect does addition of L2-norm regularization have on the results? What effect does dropout have on the results? Explain your intuitions briefly (up to 10 sentences).
我作业三的代码如下：
```python
import argparse
import gensim
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
import string


def read_corpus(pos_path, neg_path):
    stop_words = set(stopwords.words('english'))

    def tokenize_and_remove_stopwords(file_path):
        with open(file_path, 'r', encoding='utf-8') as file:
            for line in file:
                tokens = word_tokenize(line)
                yield [token.lower() for token in tokens if
                       token not in string.punctuation and token.lower() not in stop_words]

    return list(tokenize_and_remove_stopwords(pos_path)) + list(tokenize_and_remove_stopwords(neg_path))


def main():
    parser = argparse.ArgumentParser(description='Train Word2Vec on Amazon Corpus')
    parser.add_argument('--folder_path', type=str, help='Path to the folder where pos.txt and neg.txt reside.')
    args = parser.parse_args()

    corpus = read_corpus(args.folder_path + "/pos.txt", args.folder_path + "/neg.txt")

    model = gensim.models.Word2Vec(sentences=corpus, vector_size=100, window=5, min_count=1, workers=4)
    model.save(args.folder_path + "/w2v.model")


if __name__ == "__main__":
    main()

```
额外要求：

必须使用 HW1 中输出的训练、验证和测试集来训练模型，只能用训练集进行训练，验证集进行调试，并用测试集来比对准确率， 可以使用带 stopword 或不带 stopword 的集。（即带_ns和不带_ns的）哪个给出的准确率更高用哪个

输出三个模型，分别是
nn_relu.model，使用RELU作为激活函数
nn_sigmoid.model，使用sigmoid作为激活函数
nn_tanh.model，使用tanh作为激活函数

建立一个inference.py文件，需要接受两个命令行指令
1：路径到一个.txt文件，文件中包含用于测试的句子，每行一句
2：使用的分类器类型，暨输出的三个模型之一

现在所拥有的文件以及部分数据：
训练集：train.csv、train_ns.csv
验证集：val_ns.csv、val.csv
测试集：test.csv、test_ns.csv
其中_ns后缀代表内容已经移除 stopword。
注意1：我所有的数据都有 label和text标签
注意2：不要假设已经将数据加载到了 pandas DataFrame 中，并且 DataFrame 的列为 'label' 和 'text'。切记我并没有提前完成，我其他的也是，全部没有提前完成。
接下来我给你提供每个文件的部分数据。
train_ns.csv 部分数据如下：
```csv
label,text
neg,This item worked first day 's
neg,You probably enjoy reading book much playing game
pos,This reason I gave 4 instead 5 stars
pos,I dont actually use bake cookies fondant cutters work great
pos,I super excited get start using
pos,My husband mechanic dropped case prevents damage phone
neg,What n't care flavor ... lack thereof
```
train.csv 部分数据如下：
```csv
label,text
pos,The con price I still think well worth money
neg,The case slack phone well making good fit impossible
neg,It took get two tubes suspiciously resemble couple little dildos box
neg,That drive three would recognize tracks therefore would recognize disc
neg,Soon spray 've got color The fumes arent harsh still kinda stinks
pos,I needed small tongs serving carrot celery sticks dip
```
val_ns.csv 部分数据如下：
```csv
label,text
pos,The inside soft material protect screen
neg,The first one I purchased year ago made differently item sold
neg,In general son enjoy much
neg,Have already said game easy First time playing ranking A
neg,In order work I put bake broil burns outside cook inside
pos,worth wait wo n't recharge
```
val.csv 部分数据如下：
```csv
negative,Very,hard,to,adjust,the,volume,when,the,static,begins,,,,,,,,,,,,,,,
positive,Why?,Because,I,have,been,cutting,fruit,for,so,long,that,I,can,do,it,practically,blindfolded,,,,,,,,
negative,But,I,want,a,boar,bristle,brush,not,a,everyday,brushI,was,expecting,great,things,from,my,first,boar,hair,ionic,bristle,combo,brush,
```
test_ns.csv 部分数据如下：
```csv
label,text
neg,I had to take an antihistamine to calm the itching
neg,The bottle is lovely and very girlie I love the amethyst jewel tone of purple
neg,When I got my new computer I was not at all happy with the USB keyboard that came with it
neg,I will get this brand of Halvah.has too many artificial ingredients
neg,It lingers forever long after you 've finished your last sip and it 's not very pleasant
neg,This stuff was so fine it went right through my strainer when I tried to minimize the particles
neg,I bought this cable and it does n't work
```

test.csv 部分数据如下：
```csv
label,text
pos,It covers all the buttons power camera volume/zoom and menu .4
neg,If you do n't know what your doing it wo n't go on right
neg,Now I have two giant cans that I probably wo n't drink
neg,You will be flipping left and right going up and down with no sence of direction
```

````



:::

### Solution

### 1. 添加列名

使用 Python 的 pandas 库来执行此操作。以下是一种可能的方法：

::: code-tabs

@tab 1

```python
import pandas as pd

# 读取csv数据
df = pd.read_csv('your_file.csv', header=None)

# 给第一列和第二列添加标签
df.columns = ['label', 'text']

# 写回到csv文件
df.to_csv('new_file.csv', index=False)
```

@tab 2

```python
# -*- coding: utf-8 -*-
# @Time    : 2023/7/3 21:02
# @Author  : AI悦创
# @FileName: csv_add_lable.py
# @Software: PyCharm
# @Blog    ：https://bornforthis.cn/
import pandas as pd
import os

# 路径生成
path = "./data"
csv_lst = []
for dirpath, dirnames, filenames in os.walk(path):
    for fn in filenames:
        csv_lst.append(os.path.join(path, fn))

# 读取csv数据
for filename in csv_lst:
    df = pd.read_csv(filename, header=None)
    # 给第一列和第二列添加标签
    df.columns = ['label', 'text']
    # 写回到 csv 文件
    df.to_csv(filename, index=False)
```

:::

在这段代码中，我们首先使用 pandas 的 `read_csv` 函数读取 CSV 文件。然后我们设置列标签为 `'label'` 和 `'text'`。最后，我们使用`to_csv`函数将带有新标签的 DataFrame 写回CSV文件。请将 `'your_file.csv'` 和 `'new_file.csv'` 替换为您实际的文件路径和名称。

这段代码默认您的 CSV 文件中的数据没有头部，且每一列以逗号分隔。如果您的数据格式不同，请根据实际情况调整 `read_csv` 和`to_csv` 函数的参数。

另外，请注意，这段代码将直接覆盖 `'new_file.csv'` 文件。如果你不希望覆盖原始文件，可以选择不同的文件名。

---

:::: tabs

@tab Q1

::: tip

我上面的代码能正常模型预期处理的文本长度只有94？

:::

在你的代码中，你使用了下面这行代码来计算训练集中的序列最大长度：

```python
max_len = max([len(x) for x in train_sequences])
```

这会得到训练集中最长序列的长度，然后你使用这个长度来填充所有的序列，确保它们的长度相同。因此，如果`max_len`的值是94，那就意味着训练集中最长的文本长度为94。

然而，需要注意的是，在处理文本数据时，输入到神经网络模型中的序列长度可以是一个需要调优的参数。虽然在这里你选择了训练集中的最大长度作为填充长度，但在其他情况下，你可能会选择一个不同的长度，例如，所有序列的平均长度或者长度的中位数，或者根据你对问题的理解选择一个固定的长度。

如果你发现选择的序列长度使得模型性能不佳（例如，如果很多文本的重要信息被截断，或者模型需要处理很多填充的0），那么你可能需要试验不同的序列长度，来看哪个长度可以得到最好的模型性能。

---

在这里，我将给出计算序列平均长度和中位数的代码示例，并将这两个值用于填充序列。

```python
# 计算序列长度的列表
seq_lengths = [len(x) for x in train_sequences]

# 计算平均长度
avg_len = int(np.mean(seq_lengths))

# 计算中位数长度
median_len = int(np.median(seq_lengths))

# 根据平均长度填充序列
train_data_avg = pad_sequences(train_sequences, maxlen=avg_len)
val_data_avg = pad_sequences(val_sequences, maxlen=avg_len)
test_data_avg = pad_sequences(test_sequences, maxlen=avg_len)

# 根据中位数长度填充序列
train_data_med = pad_sequences(train_sequences, maxlen=median_len)
val_data_med = pad_sequences(val_sequences, maxlen=median_len)
test_data_med = pad_sequences(test_sequences, maxlen=median_len)
```

现在，你可以分别使用`train_data_avg`、`val_data_avg`、`test_data_avg`和`train_data_med`、`val_data_med`、`test_data_med`来训练模型，并对比它们的性能。

需要注意的是，选择合适的序列长度可能会对模型性能产生显著影响，所以你可能需要试验不同的长度，来找到最佳的长度。

::::

```python
pip install -q keras==2.13.1 numpy==1.25.0 pandas==2.0.3 gensim==4.3.1 tensorflow==2.13.0-rc2
```






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
