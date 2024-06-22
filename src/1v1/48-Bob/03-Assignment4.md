---
title: MSCI 641 Assignment 4
date: 2023-06-29 08:00:56
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

Assignment 4 (code + short report, 10%). Due date: July 3

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

---

使用 PyTorch/Keras 编写一个 python 脚本，训练一个全连接前馈神经网络分类器，将 Amazon 语料库中的文档分类为正类和负类。您的网络必须包含：

1. 输入层是您在作业3中准备的 word2vec 嵌入。
2. 一个隐藏层。对于隐藏层，请尝试以下激活函数：ReLU、sigmoid 和 tanh。
3. 使用 softmax 激活函数的最终层。
4. 使用交叉熵作为损失函数。
5. 添加 L2 范数正则化。
6. 添加丢弃层。尝试几种不同的丢弃率。

对于这个任务，你必须使用作业1中的训练/验证/测试数据集。在**训练**集上训练你的模型。你只能在你的**验证**集上调整你的模型。

开发完成后，在你的**测试**集上运行你的分类器。

在一个表格中报告你的分类精度结果，隐藏层中有三种不同的激活函数（ReLU、sigmoid和tanh）。激活函数对你的结果有什么影响？添加L2范数正则化对结果有什么影响？丢弃率对结果有什么影响？简单解释你的直觉（最多10句）。

HW4 要求

使用 PyTorch 和 Keras 训练一个全连接前馈神经网络分类器，来将亚马逊评价分为好评和差评，神经网络中需要包括：

1. HW3中训练好的WORD2VEC模型
2. 一个隐藏层，分别使用到ReLu,sigmoid和tanh三种激活函数
3. 最终层用柔性最大值传输函数（softmax）作为激活函数
4. 使用交叉熵函数作为损失函数
5. 添加L2-norm正则化项
6. 添加丢弃法 dropout，并尝试不同的速率

额外要求：

必须使用 HW1 中输出的训练、验证和测试集来训练模型，只能用训练集进行训练，验证集进行调试，并用测试集来比对准确率， 可以使用带 stopword 或不带 stopword 的集。（暨带_ns和不带_ns的）哪个给出的准确率更高用哪个
输出三个模型，分别是
nn_relu.model，使用RELU作为激活函数
nn_sigmoid.model，使用sigmoid作为激活函数
nn_tanh.model，使用tanh作为激活函数

建立一个inference.py文件，需要接受两个命令行指令
1：路径到一个.txt文件，文件中包含用于测试的句子，每行一句
2：使用的分类器类型，暨输出的三个模型之一

::: tabs

@tab 1. 能正常运行的版本

```python
# -*- coding: utf-8 -*-
# @Time    : 2023/7/1 11:32
# @Author  : AI悦创
# @FileName: demo8正常版本1.py
# @Software: PyCharm
# @Blog    ：https://bornforthis.cn/
import pandas as pd
import numpy as np
from gensim.models import Word2Vec
from keras.preprocessing.text import Tokenizer
from keras.preprocessing.sequence import pad_sequences
from keras.utils import to_categorical
from keras.models import Sequential
from keras.layers import Dense, Dropout
from keras.regularizers import l2
from keras.optimizers import Adam
from sklearn.preprocessing import LabelEncoder


def load_data(file_name, w2v_model):
    data = pd.read_csv(file_name, header=None)
    data.columns = ["label"] + ["word" + str(i) for i in range(1, data.shape[1])]
    data = data.dropna(axis=1, how="all")
    data["text"] = data.iloc[:, 1:].apply(lambda row: ' '.join(row.dropna().values.astype(str)), axis=1)
    data = data[["label", "text"]]

    # tokenize and pad sequences
    max_length = np.max(data["text"].apply(lambda x: len(x.split())))
    tokenizer = Tokenizer()
    tokenizer.fit_on_texts(data["text"])
    sequences = tokenizer.texts_to_sequences(data["text"])
    word_index = tokenizer.word_index
    data_features = pad_sequences(sequences, maxlen=max_length)

    # prepare embeddings
    embedding_dim = w2v_model.vector_size
    num_words = len(word_index) + 1
    embedding_matrix = np.zeros((num_words, embedding_dim))
    for word, i in word_index.items():
        if word in w2v_model.wv:
            embedding_matrix[i] = w2v_model.wv[word]

    # convert labels to integer values
    le = LabelEncoder()
    labels = le.fit_transform(data["label"])

    return data_features, labels, max_length, embedding_matrix


w2v_model = Word2Vec.load("w2v.model")

train_data, train_labels, max_length, embedding_matrix = load_data('data2/train.csv', w2v_model)
val_data, val_labels, _, _ = load_data('data2/val.csv', w2v_model)
test_data, test_labels, _, _ = load_data('data2/test.csv', w2v_model)


def create_and_train_model(activation_function, train_data, train_labels, val_data, val_labels, max_length,
                           embedding_matrix):
    embedding_dim = embedding_matrix.shape[1]
    num_words = embedding_matrix.shape[0]

    model = Sequential()
    model.add(Dense(256, activation=activation_function, kernel_regularizer=l2(0.01)))
    model.add(Dropout(0.5))
    model.add(Dense(1, activation='softmax'))

    model.compile(loss='binary_crossentropy',
                  optimizer=Adam(learning_rate=0.001),
                  metrics=['accuracy'])

    model.fit(train_data, train_labels, validation_data=(val_data, val_labels), epochs=10)

    return model


activation_functions = ["relu", "sigmoid", "tanh"]

for activation_function in activation_functions:
    model = create_and_train_model(activation_function, train_data, train_labels, val_data, val_labels, max_length,
                                   embedding_matrix)
    model.save(f"nn_{activation_function}.model")

```

上面的代码，还需要优化。

@tab 2. 

:::





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
from gensim.models import Word2Vec  # Gensim中的Word2Vec模型
from gensim.models.word2vec import LineSentence  # Gensim中用于处理文本数据的工具
import time, string

start_time = time.time()


def remove_punctuation(word_list):
    return [word.translate(str.maketrans('', '', string.punctuation)).lower() for word in word_list]


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
注意1：我的所有数据文件已经实现分词，并且第一列都标记了positive或negative。其他列都是分好的词。
注意2：不要假设已经将数据加载到了 pandas DataFrame 中，并且 DataFrame 的列为 'label' 和 'text'。切记我并没有提前完成，我其他的也是，全部没有提前完成。
接下来我给你提供每个文件的部分数据。
train_ns.csv 部分数据如下：
```csv
positive,little,dude,going,running,every,day,It's,great,holds,phone,securely,,,,,,,,,,,,,,
positive,don't,know,took,long,get,one,,,,,,,,,,,,,,,,,,,
negative,cord,cheap,wires,coming,plastic,using,2,DAYS,,,,,,,,,,,,,,,,,
positive,might,want,look,lineup,want,capable,holding,,,,,,,,,,,,,,,,,,
negative,It's,pretty,small,even,big,enough,either,bigger,cats,,,,,,,,,,,,,,,,
positive,remove,app,screens,,,,,,,,,,,,,,,,,,,,,,
```
train.csv 部分数据如下：
```csv
positive,I,went,through,two,others,before,finding,this,one,,,,,,,,,,,,,,,,
positive,I,was,doubtful,that,anything,could,survive,the,tugging,and,pulling,of,his,use,and,the,weight,of,his,jackets,,,,,
positive,She,watched,the,accompanying,DVD,video,and,immediately,set,out,on,a,grocery,shopping,spree,and,began,to,use,this,fantastic,machine,,,
```
val_ns.csv 部分数据如下：
```csv
negative,Actually,don't,need,many,given,small,overall,size,,,,,,,,,,,,,,,,,
positive,do't,drink,coffee,like,cleaning,glass,shards,glass,pot,broke,,,,,,,,,,,,,,,
positive,easy,scoop,cookie,dough,uniform,sizes,goopy,fingers,trying,get,dough,spoon,,,,,,,,,,,,,
```
val.csv 部分数据如下：
```csv
negative,Very,hard,to,adjust,the,volume,when,the,static,begins,,,,,,,,,,,,,,,
positive,Why?,Because,I,have,been,cutting,fruit,for,so,long,that,I,can,do,it,practically,blindfolded,,,,,,,,
negative,But,I,want,a,boar,bristle,brush,not,a,everyday,brushI,was,expecting,great,things,from,my,first,boar,hair,ionic,bristle,combo,brush,
```
test_ns.csv 部分数据如下：
```csv
negative,anxious,try,looking,forward,taking,,,,,,,,,,,,,,,,,
positive,older,KitchenAid,didn't,feel,could,justify,pricey,upgrade,,,,,,,,,,,,,,
positive,friend,gave,hersbut,could,find,guidance,box,,,,,,,,,,,,,,,
```

test.csv 部分数据如下：
```csv
negative,You,have,to,remove,the,case,every,time,you,charge,the,phone,,,,,,,,,,,,,
positive,For,the,1299,it's,a,solid,deal,and,gives,you,3,mixing,bowls,that,will,last,you,a,long,time,,,,,
negative,Had,I,received,the,item,I,ordered,the,review,would,be,higher,,,,,,,,,,,,,
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
训练集：train.csv、train_ns.csv
验证集：val_ns.csv、val.csv
测试集：test.csv、test_ns.csv
其中_ns后缀代表内容已经移除 stopword。
注意1：我的所有数据文件已经实现分词，并且第一列都标记了positive或negative。其他列都是分好的词。
注意2：不要假设已经将数据加载到了 pandas DataFrame 中，并且 DataFrame 的列为 'label' 和 'text'。切记我并没有提前完成，我其他的也是，全部没有提前完成。
接下来我给你提供每个文件的部分数据。
train_ns.csv 部分数据如下：
```csv
positive,little,dude,going,running,every,day,It's,great,holds,phone,securely,,,,,,,,,,,,,,
positive,don't,know,took,long,get,one,,,,,,,,,,,,,,,,,,,
negative,cord,cheap,wires,coming,plastic,using,2,DAYS,,,,,,,,,,,,,,,,,
positive,might,want,look,lineup,want,capable,holding,,,,,,,,,,,,,,,,,,
negative,It's,pretty,small,even,big,enough,either,bigger,cats,,,,,,,,,,,,,,,,
positive,remove,app,screens,,,,,,,,,,,,,,,,,,,,,,
```
train.csv 部分数据如下：
```csv
positive,I,went,through,two,others,before,finding,this,one,,,,,,,,,,,,,,,,
positive,I,was,doubtful,that,anything,could,survive,the,tugging,and,pulling,of,his,use,and,the,weight,of,his,jackets,,,,,
positive,She,watched,the,accompanying,DVD,video,and,immediately,set,out,on,a,grocery,shopping,spree,and,began,to,use,this,fantastic,machine,,,
```
val_ns.csv 部分数据如下：
```csv
negative,Actually,don't,need,many,given,small,overall,size,,,,,,,,,,,,,,,,,
positive,do't,drink,coffee,like,cleaning,glass,shards,glass,pot,broke,,,,,,,,,,,,,,,
positive,easy,scoop,cookie,dough,uniform,sizes,goopy,fingers,trying,get,dough,spoon,,,,,,,,,,,,,
```
val.csv 部分数据如下：
```csv
negative,Very,hard,to,adjust,the,volume,when,the,static,begins,,,,,,,,,,,,,,,
positive,Why?,Because,I,have,been,cutting,fruit,for,so,long,that,I,can,do,it,practically,blindfolded,,,,,,,,
negative,But,I,want,a,boar,bristle,brush,not,a,everyday,brushI,was,expecting,great,things,from,my,first,boar,hair,ionic,bristle,combo,brush,
```
test_ns.csv 部分数据如下：
```csv
negative,anxious,try,looking,forward,taking,,,,,,,,,,,,,,,,,
positive,older,KitchenAid,didn't,feel,could,justify,pricey,upgrade,,,,,,,,,,,,,,
positive,friend,gave,hersbut,could,find,guidance,box,,,,,,,,,,,,,,,
```

test.csv 部分数据如下：
```csv
negative,You,have,to,remove,the,case,every,time,you,charge,the,phone,,,,,,,,,,,,,
positive,For,the,1299,it's,a,solid,deal,and,gives,you,3,mixing,bowls,that,will,last,you,a,long,time,,,,,
negative,Had,I,received,the,item,I,ordered,the,review,would,be,higher,,,,,,,,,,,,,
```
````






















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
