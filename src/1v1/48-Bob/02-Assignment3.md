---
title: MSCI 641 Assignment 3
date: 2023-06-16 08:18:50
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

Assignment 3 (code + short report, 7%). Due date: June 22

1. Write a python script using genism library to train a Word2Vec model on the Amazon corpus.
2. Use genism library to get the most similar words to a given word. Find 20 most similar words to “good” and “bad”. Are the words most similar to “good” positive, and words most similar to “bad” negative? Why this **is** or **isn’t** the case? Explain your intuition briefly (in 5-6 sentences).

>作业3（代码+简短报告，7%）。截止日期：6月22日
>
>1. 使用genism库编写Python脚本，在Amazon语料库上训练Word2Vec模型。
>2. 使用genism库获取给定单词的最相似单词。找到与“good”和“bad”最相似的20个单词。与“good”最相似的单词是积极的，而与“bad”最相似的单词是消极的吗？为什么会这样或者不会这样？简要解释一下你的直觉（5-6句话）。


用于训练的文件为`'pos.txt'` 和 `'neg.txt'`

输出结果: `w2v.model`

额外要求；

创建一个 inference.py 文件，根据给出的词语生成 20 个近义词，使用 command line argument（路径到一个`.txt`文件，其中包含一些用于评估模型的词语，每行一个单词。）

## Answer

### 1. Code

::: code-tabs

@tab train_model.py

```python
# -*- coding: utf-8 -*-
# @Time    : 2023/6/23 08:06
# @Author  : AI悦创
# @FileName: hw3.py
# @Software: PyCharm
# @Blog    ：https://bornforthis.cn/
# 导入必要的库
from gensim.models import Word2Vec  # Gensim中的Word2Vec模型
from gensim.models.word2vec import LineSentence  # Gensim中用于处理文本数据的工具
import time

start_time = time.time()


# 定义训练模型的函数，需要三个参数：正面评论的文件路径、负面评论的文件路径、保存模型的文件路径
def train_model(pos_file_path, neg_file_path, model_file_path):
    # 使用 with open 来打开文件，这样可以保证文件在用完后会被正确关闭
    with open(pos_file_path, 'r') as pos_file, open(neg_file_path, 'r') as neg_file:
        # 使用 LineSentence 处理文件中的每一行文本，并将处理结果转为列表，然后将正面和负面评论的列表连接起来
        sentences = list(LineSentence(pos_file)) + list(LineSentence(neg_file))
        # 使用连接起来的句子列表创建Word2Vec模型，设置向量大小为100，窗口大小为5，最小词频为1，使用4个工作线程进行训练
        model = Word2Vec(sentences=sentences, vector_size=100, window=5, min_count=1, workers=4)
        # 保存训练好的模型到指定的文件路径
        model.save(model_file_path)


# Python的入口点，只有直接运行这个脚本时，下面的代码才会被执行
if __name__ == "__main__":
    # 正面评论的文件路径
    pos_file_path = 'data/pos.txt'
    # 负面评论的文件路径
    neg_file_path = 'data/neg.txt'
    # 保存模型的文件路径
    model_file_path = 'w2v.model'
    # 调用上面定义的函数进行模型训练
    train_model(pos_file_path, neg_file_path, model_file_path)
    print("time:>>>", time.time() - start_time)
```

@tab inference.py

```python
# -*- coding: utf-8 -*-
# @Time    : 2023/6/22 23:40
# @Author  : AI悦创
# @FileName: inference.py
# @Software: PyCharm
# @Blog    ：https://bornforthis.cn/
# 导入必要的库
import argparse
from gensim.models import Word2Vec


# 定义一个函数用来获取模型生成的最相似单词
def get_similar_words(model_file_path, words_file_path):
    # 加载已经训练好的 Word2Vec 模型
    model = Word2Vec.load(model_file_path)
    # 打开存有目标单词的文件并读取所有单词
    with open(words_file_path, 'r') as file:
        words = [line.strip() for line in file]
        # 对每一个单词，使用模型找到并打印最相似的 20 个单词
        for word in words:
            print(f"The most similar words to {word} are:")
            for similar_word, similarity in model.wv.most_similar(word, topn=20):
                print(f"{similar_word}: {similarity}")


if __name__ == "__main__":
    # 创建一个命令行参数解析器
    parser = argparse.ArgumentParser(description='Find most similar words')
    # 添加需要的参数：模型文件的路径和单词文件的路径
    parser.add_argument('--model', type=str, required=True, help='Path to Word2Vec model')
    parser.add_argument('--words', type=str, required=True, help='Path to txt file with words')
    # 解析命令行参数
    args = parser.parse_args()
    # 使用提供的参数运行函数
    get_similar_words(args.model, args.words)
```

@tab 去掉标点符号

```python
# -*- coding: utf-8 -*-
# @Time    : 2023/6/23 08:06
# @Author  : AI悦创
# @FileName: hw3.py
# @Software: PyCharm
# @Blog    ：https://bornforthis.cn/
# 导入必要的库
from gensim.models import Word2Vec  # Gensim中的Word2Vec模型
from gensim.models.word2vec import LineSentence  # Gensim中用于处理文本数据的工具
import time, string

start_time = time.time()


def remove_punctuation(word_list):
    return [word.translate(str.maketrans('', '', string.punctuation)) for word in word_list]


# 定义训练模型的函数，需要三个参数：正面评论的文件路径、负面评论的文件路径、保存模型的文件路径
def train_model(pos_file_path, neg_file_path, model_file_path):
    # 使用 with open 来打开文件，这样可以保证文件在用完后会被正确关闭
    with open(pos_file_path, 'r') as pos_file, open(neg_file_path, 'r') as neg_file:
        # 使用 LineSentence 处理文件中的每一行文本，并将处理结果转为列表，然后将正面和负面评论的列表连接起来
        sentences_pos = [remove_punctuation(sentence) for sentence in LineSentence(pos_file)]
        sentences_neg = [remove_punctuation(sentence) for sentence in LineSentence(neg_file)]
        sentences = sentences_pos + sentences_neg
        # 使用连接起来的句子列表创建Word2Vec模型，设置向量大小为100，窗口大小为5，最小词频为1，使用4个工作线程进行训练
        model = Word2Vec(sentences=sentences, vector_size=100, window=5, min_count=1, workers=4)
        # 保存训练好的模型到指定的文件路径
        model.save(model_file_path)


# Python的入口点，只有直接运行这个脚本时，下面的代码才会被执行
if __name__ == "__main__":
    # 正面评论的文件路径
    pos_file_path = 'data/pos.txt'
    # 负面评论的文件路径
    neg_file_path = 'data/neg.txt'
    # 保存模型的文件路径
    model_file_path = 'w2v.model'
    # 调用上面定义的函数进行模型训练
    train_model(pos_file_path, neg_file_path, model_file_path)
    print("time:>>>", time.time() - start_time)
```

:::

### 2. model = Word2Vec(sentences=sentences, vector_size=100, window=5, min_count=1, workers=4)

1. `sentences`: 这是一个可迭代的句子列表，每个句子都是单词的列表。在这种情况下，它是我们要在其上训练模型的数据。

2. `vector_size`: 这是特征向量的维数。它决定了模型生成的词向量的大小。较大的 `vector_size` 可能会导致模型捕获更多的单词特征，但也会导致模型更大，训练时间更长，而且可能会过拟合。

3. `window`: 这是在为每个单词生成训练样本时要考虑的上下文窗口的大小。例如，如果 `window=5`，那么在训练模型时，将为每个单词选择其前五个和后五个单词作为上下文。

4. `min_count`: 这是单词在训练语料库中出现的最小次数，低于这个次数的单词将被忽略。这有助于限制模型大小，因为不常见的单词通常无法提供足够的上下文来学习有用的表示。

5. `workers`: 这是训练模型时使用的线程数量。这可以加速模型训练，尤其是在大型数据集上。

以上参数的设定值可以根据具体任务和数据进行调整。更详细的参数信息可以查阅 gensim 的官方文档。

### 3. 结果剖析

在这个结果中，我们可以看到“good”、“bad”和“book”每个词的20个最相似的词汇，这些词汇是基于词向量之间的相似度得出的。每个词汇后面的数值表示相似度得分，得分越高，表示两个词在语义上越接近。

关于每个词的结果：

1. 对于"good"，我们可以看到，大部分最相似的词都有积极的含义，如"decent"、"great"和"fantastic"等，但也有一些中性词汇，如"fair"，甚至有负面词汇，如"terrible"。这可能是因为在训练数据中，“good”可能同时出现在正面和负面的环境中。比如，有些评论可能说，“这个产品在某些方面是好的，但在其他方面是糟糕的”。

2. 对于"bad"，结果也有类似的情况。其中有一些负面词汇，如"terrible"和"horrible"，但也有一些积极或中性的词汇，如"good"。

3. 对于"book"，最相似的词主要与书籍或阅读相关，如"booklet"、"instruction"和"recipe"等。这符合我们的期待，因为这些词在语义上与“book”接近。

整体来说，这个结果显示了词向量的一种关键特性，即能够捕获词汇的语义信息。同时，这也展示了模型的局限性，因为它只能根据词汇在训练数据中的共现信息来学习，而不能理解词汇的真实含义。所以，尽管大部分的最相似词在语义上与目标词相近，但也可能会有一些看起来不那么相似的词。

---

Word2Vec模型被训练来理解单词的上下文，并据此对词义进行建模。你的代码成功地训练了一个Word2Vec模型，并使用它找出了给定词的相似词，这完全符合题目的要求。

你的理解是正确的，Word2Vec 模型主要是用来理解和比较单个词语的，而不是用来理解整个文本或者句子的。这个模型主要关注的是词汇层面的语义和语境，它并不能理解更高级别的语言结构，例如句子、段落或文档的含义。如果你想对整个文本或句子进行分析，你可能需要使用其他类型的模型，例如Recurrent Neural Networks (RNN)，Long Short Term Memory (LSTM)，或者更复杂的模型如BERT等。











```
1. Write a python script using genism library to train a Word2Vec model on the Amazon corpus.
2. Use genism library to get the most similar words to a given word. Find 20 most similar words to “good” and “bad”. Are the words most similar to “good” positive, and words most similar to “bad” negative? Why this **is** or **isn’t** the case? Explain your intuition briefly (in 5-6 sentences).
用于训练的文件为`'pos.txt'` 和 `'neg.txt'`

输出结果: `w2v.model`

额外要求；

创建一个 inference.py 文件，根据给出的词语生成 20 个近义词，使用 command line argument（路径到一个`.txt`文件，其中包含一些用于评估模型的词语，每行一个单词。）
文件部分数据如下：
文件名称：pos.txt
文件部分数据：
My daughter wanted this book and the price on Amazon was the best.
She has already tried one recipe a day after receiving the book.
I bought this zoku quick pop for my daughterr with her zoku quick maker.
She loves it and have fun to make her own ice cream.
I was hoping there were more where those came from.
This book emphasizes very sweet dessert pops, however.
There are 41 recipes in total, only 13 of which are fruit pops.
There is a "Fresh and Fruity" chapter, followed by three chapters of dessert pops entitled "I Scream for Quick Pops!", "Bake Shop", and  "Coco Loco".
As you might guess from the last one, there are 15 pop recipes that contain chocolate.Chapters on "Tips" and "Techniques" are useful.
There is more detailed information about ingredients that don't freeze well in the Zoku than is found in the instruction manual.
The pages about core pops are especially helpful, as they include recipes for pink, purple, and orange outer layers for brightly-colored core pops.
Many, including the recipe for a vanilla base, call for vanilla pudding, where vanilla Greek yogurt would do just as well.
On the bright side, many of these recipes may appeal to children, whereas most pop books that I have seen are geared more to adults.
There are flavors like "Cookie Dough", "That's a S'more", chocolate peanut butter, and peanut butter and jelly.
Most of the fruit recipes are gimmicky and contain too many ingredients.

文件名称：neg.txt
文件部分数据：
I bought this when I bought the pop maker.
As for "pop embellishing" well, that wasn't too hard to figure out, either.
I'd save the money and spend it instead on extra pop sticks, which seem to disappear the way socks do.
didn't really care many of the cakes at all.
not up to normal standing for wilton yearbooks of the past.
Buy a Wilton magazine for less money and get more ideas and instructions for your investment.
Bag tore with almost nothing in it - Just caught the corner of a small cracker box and that was that.
This machine is exactly what the name says it is - a speller.
I wanted definitions, OH, that would be a dictionary! I ordered a dictionary an I am happy - except the voice is scratchy.
If you type the wrong word in, it &#34;might&#34; produce the correct word.
It doesn't give any explanation of the meaning or how it can be used.
I should have sent it bk., but I factored in the cost of return shipping - wasn't worth the return.
It's basically just a coat hanger with two plastic guides.
The only thing it has going for it is portability.
It can only hold regular sized hard covered books.
Forget about any size paperback, it will not work.
Even hard cover books are nearly impossible to align correctly and they slip and slump in all kinds of odd positions.
I tried with over 10 textbooks and it didn't do well with any of them.
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
