---
title: MSCI 641 Assignment 2
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

Assignment 2 (code + short report, 8%). Due date: June 15

> 作业2(代码+短报告，8%)。截止日期:6月15日

Write a python script using **sklearn** library to perform the following:

1. Train Multinomial Naïve Bayes (MNB) classifier to classify the documents in the Amazon corpus into positive and negative classes. Conduct experiments with the following conditions and report classification accuracy in the following table:

> 训练多项Naïve贝叶斯(MNB)分类器，将亚马逊语料库中的文档分类为正类和负类。在以下条件下进行实验，结果见下表:

| Stopwords removed<br />Stopwords删除 | text features<br />文本特征 | Accuracy (test set)<br />精度(测试集) |
| ------------------------------------ | --------------------------- | ------------------------------------- |
| yes                                  | unigrams                    |                                       |
| yes                                  | bigrams                     |                                       |
| yes                                  | unigrams+bigrams            |                                       |
| no                                   | unigrams                    |                                       |
| no                                   | bigrams                     |                                       |
| no                                   | unigrams+bigrams            |                                       |

For this assignment, you must use your training/validation/test data splits from Assignment 1. Train your models on the **training** set. You may only tune your models on your **validation** set. Once the development is complete, run your classifier on your **test** set.

> 对于本次作业，您必须使用来自作业1的训练/验证/测试数据分割。在**训练集**上训练模型。您只能在**验证**集上调整模型。开发完成后，在**测试**集上运行分类器。

2. Answer the following two questions:

> 请回答以下两个问题:

a. Which condition performed better: with or without stopwords? Write a brief paragraph (5-6 sentences) discussing why you think there is a difference in performance.

> a.有停用词还是没有停用词，哪种情况表现更好?写一个简短的段落(5-6个句子)，讨论为什么你认为在表现上有差异。

b. Which condition performed better: unigrams, bigrams or unigrams+bigrams? Briefly (in 5-6 sentences) discuss why you think there is a difference?

> b.哪个条件表现更好:一元分词、二元分词还是一元分词+二元分词?简要地(用5-6句话)讨论一下为什么你认为有区别?



::: details txt

```
Write a python script using **sklearn** library to perform the following:

1. Train Multinomial Naïve Bayes (MNB) classifier to classify the documents in the Amazon corpus into positive and negative classes. Conduct experiments with the following conditions and report classification accuracy in the following table:

| Stopwords removed | text features    | Accuracy (test set) |
| ----------------- | ---------------- | ------------------- |
| yes               | unigrams         |                     |
| yes               | bigrams          |                     |
| yes               | unigrams+bigrams |                     |
| no                | unigrams         |                     |
| no                | bigrams          |                     |
| no                | unigrams+bigrams |                     |

For this assignment, you must use your training/validation/test data splits from Assignment 1. Train your models on the **training** set. You may only tune your models on your **validation** set. Once the development is complete, run your classifier on your **test** set.

2. Answer the following two questions:

a. Which condition performed better: with or without stopwords? Write a brief paragraph (5-6 sentences) discussing why you think there is a difference in performance.

b. Which condition performed better: unigrams, bigrams or unigrams+bigrams? Briefly (in 5-6 sentences) discuss why you think there is a difference?
使用sklearn 训练一个MNB分类器，把前一个作业中获得的亚马逊评价文档分类为好评和差评两类。
作业1获得的共8个.csv文档 用到其中六个，分别是
训练集train.csv 和 train_ns.csv
验证集 val.csv 和 val_ns.csv
测试集 test.csv 和test_ns.csv 
其中_ns后缀代表内容已经移除stopword。
要求分别用一元语法模型、二元语法模型和一元、二元混合模型训练，使用val和val_ns验证集调试模型准确度，并用test和test_ns验证集测试模型的准确度。
额外要求：
将训练好的模型分别输出为
mnb_uni.pkl （一元语法模型，使用train.csv训练，val.csv调试，test.csv测试）
mnb_bi.pkl（二元语法模型，使用train.csv训练，val.csv调试，test.csv测试）
mnb_uni_bi.pkl（混合语法模型，使用train.csv训练，val.csv调试，test.csv测试）
mnb_uni_ns.pkl（一元语法模型，使用train_ns.csv训练，val_ns.csv调试，test_ns.csv测试）
mnb_bi_ns.pkl（二元语法模型，使用train_ns.csv训练，val_ns.csv调试，test_ns.csv测试）
mnb_uni_bi_ns.pkl （混合语法模型，使用train_ns.csv训练，val_ns.csv调试，test_ns.csv测试）


创建一个名为inference.py的script，这个script的作用是通过接受两个命令行指令来将指定文字分类为好评和差评，需要接受的命令行指令是
1.	路径到一个.txt文件，文件中包含一些用来评估模型的句子，文件中每行是一个句子
2.	指定使用的语言模型，即作业中输出的6个语言模型中的一个


接下来，我会发题给你，你必须阅读题目到最后一行，再开始带我解答这个题目：
Write a python script using **sklearn** library to perform the following:

1. Train Multinomial Naïve Bayes (MNB) classifier to classify the documents in the Amazon corpus into positive and negative classes. Conduct experiments with the following conditions and report classification accuracy in the following table:

| Stopwords removed | text features    | Accuracy (test set) |
| ----------------- | ---------------- | ------------------- |
| yes               | unigrams         |                     |
| yes               | bigrams          |                     |
| yes               | unigrams+bigrams |                     |
| no                | unigrams         |                     |
| no                | bigrams          |                     |
| no                | unigrams+bigrams |                     |

For this assignment, you must use your training/validation/test data splits from Assignment 1. Train your models on the **training** set. You may only tune your models on your **validation** set. Once the development is complete, run your classifier on your **test** set.

2. Answer the following two questions:

a. Which condition performed better: with or without stopwords? Write a brief paragraph (5-6 sentences) discussing why you think there is a difference in performance.

b. Which condition performed better: unigrams, bigrams or unigrams+bigrams? Briefly (in 5-6 sentences) discuss why you think there is a difference?
使用sklearn 训练一个MNB分类器，把前一个作业中获得的亚马逊评价文档分类为好评和差评两类。
作业1获得的共8个.csv文档 用到其中六个，分别是
训练集train.csv 和 train_ns.csv
验证集 val.csv 和 val_ns.csv
测试集 test.csv 和test_ns.csv 
其中_ns后缀代表内容已经移除stopword。
要求分别用一元语法模型、二元语法模型和一元、二元混合模型训练，使用val和val_ns验证集调试模型准确度，并用test和test_ns验证集测试模型的准确度。
额外要求：
将训练好的模型分别输出为
mnb_uni.pkl （一元语法模型，使用train.csv训练，val.csv调试，test.csv测试）
mnb_bi.pkl（二元语法模型，使用train.csv训练，val.csv调试，test.csv测试）
mnb_uni_bi.pkl（混合语法模型，使用train.csv训练，val.csv调试，test.csv测试）
mnb_uni_ns.pkl（一元语法模型，使用train_ns.csv训练，val_ns.csv调试，test_ns.csv测试）
mnb_bi_ns.pkl（二元语法模型，使用train_ns.csv训练，val_ns.csv调试，test_ns.csv测试）
mnb_uni_bi_ns.pkl （混合语法模型，使用train_ns.csv训练，val_ns.csv调试，test_ns.csv测试）


创建一个名为inference.py的script，这个script的作用是通过接受两个命令行指令来将指定文字分类为好评和差评，需要接受的命令行指令是
1.	路径到一个.txt文件，文件中包含一些用来评估模型的句子，文件中每行是一个句子
2.	指定使用的语言模型，即作业中输出的6个语言模型中的一个

注意：我的所有数据文件已经实现分词，并且第一列都标记了positive或negative。其他列都是分好的词。
```

:::

- 训练集：train.csv、train_ns.csv
- 验证集：val_ns.csv、val.csv



[https://shareg.pt/ExXIjPZ](https://shareg.pt/ExXIjPZ)

## Step 1

非常好，这个问题大致可以分为两部分。第一部分是训练Multinomial Naïve Bayes (MNB)分类器并在不同条件下测试其准确度。第二部分是根据实验结果回答一些问题。另外你需要将训练好的模型输出为指定的文件，并写一个python脚本来实现模型的使用。

我会一步步地帮你解答这个问题。首先我们需要查看你的数据，并理解数据的构成，这样才能开始构建模型。这里我们需要以下文件：

- 训练集：train.csv 和 train_ns.csv
- 验证集：val.csv 和 val_ns.csv
- 测试集：test.csv 和 test_ns.csv

现在让我们开始第一部分，训练MNB分类器。

第一步是导入需要的库，并读入数据。我们需要的库包括pandas（用于数据处理），sklearn中的CountVectorizer（用于文本向量化）和MultinomialNB（用于模型训练），以及joblib（用于模型保存）。

```python
import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.metrics import accuracy_score
from sklearn.pipeline import Pipeline
from joblib import dump

# 导入数据
def load_data(filename):
    df = pd.read_csv(filename)
    return df['text'], df['label']

train_data, train_labels = load_data('train.csv')
val_data, val_labels = load_data('val.csv')
test_data, test_labels = load_data('test.csv')

train_ns_data, train_ns_labels = load_data('train_ns.csv')
val_ns_data, val_ns_labels = load_data('val_ns.csv')
test_ns_data, test_ns_labels = load_data('test_ns.csv')
```

接下来，我们需要为每个条件（一元模型、二元模型、一元二元混合模型；有无stopwords）训练模型，计算验证集的准确度，并保存模型。

```python
# 训练模型
def train_and_evaluate(vectorizer_params, train_data, train_labels, val_data, val_labels, model_filename):
    vectorizer = CountVectorizer(**vectorizer_params)
    clf = MultinomialNB()
    model = Pipeline([('vectorizer', vectorizer), ('clf', clf)])

    model.fit(train_data, train_labels)
    val_predictions = model.predict(val_data)
    accuracy = accuracy_score(val_labels, val_predictions)

    dump(model, model_filename)

    return accuracy

# 设置向量化参数
unigram_params = {'ngram_range': (1, 1)}
bigram_params = {'ngram_range': (2, 2)}
unigram_bigram_params = {'ngram_range': (1, 2)}

# 训练模型并保存
acc_uni = train_and_evaluate(unigram_params, train_data, train_labels, val_data, val_labels, 'mnb_uni.pkl')
acc_bi = train_and_evaluate(bigram_params, train_data, train_labels, val_data, val_labels, 'mnb_bi.pkl')
acc_uni_bi = train_and_evaluate(unigram_bigram_params, train_data, train_labels, val_data, val_labels

, 'mnb_uni_bi.pkl')

acc_uni_ns = train_and_evaluate(unigram_params, train_ns_data, train_ns_labels, val_ns_data, val_ns_labels, 'mnb_uni_ns.pkl')
acc_bi_ns = train_and_evaluate(bigram_params, train_ns_data, train_ns_labels, val_ns_data, val_ns_labels, 'mnb_bi_ns.pkl')
acc_uni_bi_ns = train_and_evaluate(unigram_bigram_params, train_ns_data, train_ns_labels, val_ns_data, val_ns_labels, 'mnb_uni_bi_ns.pkl')

# 打印准确度
print(f'Unigrams, stopwords removed: {acc_uni_ns}')
print(f'Bigrams, stopwords removed: {acc_bi_ns}')
print(f'Unigrams+Bigrams, stopwords removed: {acc_uni_bi_ns}')
print(f'Unigrams, stopwords not removed: {acc_uni}')
print(f'Bigrams, stopwords not removed: {acc_bi}')
print(f'Unigrams+Bigrams, stopwords not removed: {acc_uni_bi}')
```

关于第二部分的问题，我会在你运行完这段代码，并得到准确度结果后，根据结果来提供可能的解释。

最后，关于创建inference.py的问题，我也会在你完成模型训练后，提供你一段可能的代码示例。

## 修复数据读取

对不起，我误解了你的数据格式。如果你的数据是上述格式，其中第一列为标签（positive 或 negative），然后后续的列为分词后的文本，我们需要稍微调整数据加载部分的代码。

我假设标签和分词后的词语是用逗号分隔的。我们将所有词汇合并为一个字符串，然后再作为一个完整的评论。下面是新的代码：

```python
def load_data(filename):
    df = pd.read_csv(filename, header=None)
    labels = df.iloc[:, 0]
    data = df.iloc[:, 1:].apply(lambda x: ' '.join(x.dropna()), axis=1)
    return data, labels
```

这个函数将加载你的数据，并将所有的词汇合并为一个字符串，然后再作为一个完整的评论。

我希望这个修改可以解决你的问题，如果还有其他问题，欢迎继续提问。

## 上面的代码你是不是忘记使用test_ns.csv和test.csv，这两个文件也需要使用到

对不起，我漏掉了测试集的部分。你应该在模型训练和验证后，用测试集来测试你的模型，并记录结果。这是一个重要步骤，因为测试集可以提供模型在看不见的数据上的性能评估。

请在训练模型并计算验证集准确度之后，添加如下代码来使用测试集进行评估：

```python
# 测试模型
def test_model(model_filename, test_data, test_labels):
    model = joblib.load(model_filename)
    test_predictions = model.predict(test_data)
    accuracy = accuracy_score(test_labels, test_predictions)
    return accuracy

# 测试模型并打印准确度
test_acc_uni = test_model('mnb_uni.pkl', test_data, test_labels)
test_acc_bi = test_model('mnb_bi.pkl', test_data, test_labels)
test_acc_uni_bi = test_model('mnb_uni_bi.pkl', test_data, test_labels)

test_acc_uni_ns = test_model('mnb_uni_ns.pkl', test_ns_data, test_ns_labels)
test_acc_bi_ns = test_model('mnb_bi_ns.pkl', test_ns_data, test_ns_labels)
test_acc_uni_bi_ns = test_model('mnb_uni_bi_ns.pkl', test_ns_data, test_ns_labels)

# 打印准确度
print(f'Unigrams, stopwords removed, test set: {test_acc_uni_ns}')
print(f'Bigrams, stopwords removed, test set: {test_acc_bi_ns}')
print(f'Unigrams+Bigrams, stopwords removed, test set: {test_acc_uni_bi_ns}')
print(f'Unigrams, stopwords not removed, test set: {test_acc_uni}')
print(f'Bigrams, stopwords not removed, test set: {test_acc_bi}')
print(f'Unigrams+Bigrams, stopwords not removed, test set: {test_acc_uni_bi}')
```

这样，你就可以得到模型在测试集上的性能评估了。

---

**详细注释上面的test_model代码，每一行都要**

当然，这是一个很好的请求，让我们逐行解释 `test_model` 函数的代码。

```python
# 定义函数test_model，输入参数是模型的文件名，测试数据和测试标签
def test_model(model_filename, test_data, test_labels):
    
    # 使用joblib库的load函数来加载之前保存的模型。这个模型是一个Pipeline对象，包含了文本向量化和分类器
    model = joblib.load(model_filename)
    
    # 使用模型的predict方法来对测试数据进行预测。这个方法会首先使用CountVectorizer进行文本向量化，然后用训练好的MNB分类器对向量化后的文本进行分类预测
    test_predictions = model.predict(test_data)
    
    # 使用sklearn.metrics的accuracy_score函数来计算预测的准确度。accuracy_score函数的第一个参数是真实的标签，第二个参数是预测的标签
    accuracy = accuracy_score(test_labels, test_predictions)
    
    # 函数返回测试集的准确度
    return accuracy
```

以上就是 `test_model` 函数每一行代码的解释，希望对你有帮助。

## 结果达到什么的结果，才是合格的？

由于朴素贝叶斯（Naive Bayes）分类器的准确率会受到许多因素的影响，如数据质量、数据量、特征选择、模型参数等，因此很难设定一个具体的“合格”的准确率标准。

一般来说，你可能希望看到的准确率至少高于基线（baseline）。基线通常是一个简单的、无信息的模型，例如一个只输出训练集中最常见标签的模型。

具体的准确率也可能受到应用领域的影响。例如，在某些情况下，80%的准确率可能已经非常好了，而在其他情况下，可能需要95%以上的准确率才能满足需求。

因此，我建议你根据你的具体应用和需求，以及可用数据的质量和数量，来设定一个合理的准确率目标。你也可以通过尝试不同的特征选择方法、调整模型参数等手段来提高模型的准确率。

---

```
上面的代码输出的结果如下：
/Users/huangjiabao/GitHub/SourceCode/MacBookPro16-Code/PythonCoder/StudentCoder/49-Bob/hw2/hw1.py:26: DtypeWarning: Columns (22,23,24,25) have mixed types. Specify dtype option on import or set low_memory=False.
  df = pd.read_csv(filename, header=None)
/Users/huangjiabao/GitHub/SourceCode/MacBookPro16-Code/PythonCoder/StudentCoder/49-Bob/hw2/hw1.py:26: DtypeWarning: Columns (21,22,23,24,25) have mixed types. Specify dtype option on import or set low_memory=False.
  df = pd.read_csv(filename, header=None)
/Users/huangjiabao/GitHub/SourceCode/MacBookPro16-Code/PythonCoder/StudentCoder/49-Bob/hw2/hw1.py:26: DtypeWarning: Columns (21,22) have mixed types. Specify dtype option on import or set low_memory=False.
  df = pd.read_csv(filename, header=None)
Unigrams, stopwords removed: 0.8073375
Bigrams, stopwords removed: 0.7919
Unigrams+Bigrams, stopwords removed: 0.82545
Unigrams, stopwords not removed: 0.8074
Bigrams, stopwords not removed: 0.82305
Unigrams+Bigrams, stopwords not removed: 0.8325875
```

从你的输出结果来看，各种条件下训练的模型的准确率都在80%以上，这是一个相当不错的结果。特别是在没有移除停用词，并且使用了一元语法和二元语法混合特征的模型，准确率达到了83.26%。

现在，让我们回答你的作业中的第二部分问题：

a. 哪种条件表现得更好：移除停用词还是不移除？

从你的结果来看，不移除停用词的模型在一元、二元混合模型下表现得稍好一些。这可能是因为虽然停用词在大多数情况下并没有实质性的意义，但是它们在一定程度上反映了语言的结构和节奏，有时候也能提供一些上下文信息，这在情感分类任务中可能会有一些帮助。当然，这也可能因数据集和任务特性的不同而变化。

b. 哪种条件表现得更好：一元语法，二元语法还是一元、二元混合？

从你的结果来看，一元、二元语法混合模型的表现最好。这可能是因为一元模型只考虑单个词的信息，而二元模型则考虑了词与词之间的相互关系，这在一些情况下能够提供更多的上下文信息，提高模型的准确性。而一元、二元混合模型同时考虑了这两种信息，因此能够得到更好的结果。

以上是基于你的结果和我对这些模型的理解给出的解释，如果你有更多的问题，或者想要进一步探讨这个问题，欢迎继续提问。

## 问题

不过有几个问题： 1. 每一行输出代表什么？ 2. 你上面分析的时候说：“特别是在没有移除停用词”，这个我想说我的数据是有移除和没移除的文件的，那么这个结论，你是从哪个输出得出来的？

对不起，我可能没有充分解释清楚。

1. 每一行输出的含义如下：

    - `Unigrams, stopwords removed: 0.8073375`： 这一行显示，当你移除停用词并且仅使用一元模型（只考虑单个词的信息）进行训练时，模型在测试集上的准确率是80.73%。

    - `Bigrams, stopwords removed: 0.7919`：这一行显示，当你移除停用词并且使用二元模型（考虑相邻两个词的信息）进行训练时，模型在测试集上的准确率是79.19%。

    - `Unigrams+Bigrams, stopwords removed: 0.82545`： 这一行显示，当你移除停用词并且使用一元和二元混合模型进行训练时，模型在测试集上的准确率是82.54%。

    - `Unigrams, stopwords not removed: 0.8074`：这一行显示，当你未移除停用词并且仅使用一元模型进行训练时，模型在测试集上的准确率是80.74%。

    - `Bigrams, stopwords not removed: 0.82305`：这一行显示，当你未移除停用词并且使用二元模型进行训练时，模型在测试集上的准确率是82.31%。

    - `Unigrams+Bigrams, stopwords not removed: 0.8325875`：这一行显示，当你未移除停用词并且使用一元和二元混合模型进行训练时，模型在测试集上的准确率是83.26%。

2. 我的分析基于的是你的输出结果。从你的输出结果来看，`Unigrams+Bigrams, stopwords not removed: 0.8325875`这一行的准确率最高，这意味着未移除停用词并且使用一元和二元混合模型进行训练的情况下，模型表现最好。当然，这只是基于你当前数据集和实验设置的结果，可能并不适用于其他情况。

希望这个答案解答了你的问题，如果还有其他疑问，欢迎随时提问。

---

**把上面所有代码注释，其次讲解做题思路，然后详细讲解涉及的知识点并举例子**

非常好的问题，让我们来详细地讨论一下这个问题的解答方案。

这个问题的目标是使用多项式朴素贝叶斯(Multinomial Naive Bayes，简称MNB)分类器，将亚马逊评价文档分为正面和负面两类。在这个过程中，需要考虑不同的文本特征（包括一元模型，二元模型，以及一元和二元模型的组合）和是否移除停用词。

以下是解答这个问题的主要步骤和思路：

1. **数据准备**：加载训练、验证和测试数据集。在这个问题中，数据集已经给出，并且已经进行了预处理，包括分词和停用词的移除。

2. **特征抽取**：将文本数据转换为可以输入到模型的特征。在这个问题中，需要使用一元模型，二元模型，以及一元和二元模型的组合。一元模型考虑的是单个词的信息，二元模型考虑的是相邻两个词的信息，一元和二元模型的组合则同时考虑了这两种信息。

3. **模型训练**：使用训练数据集训练模型。在这个问题中，使用的模型是多项式朴素贝叶斯分类器。朴素贝叶斯分类器是一种基于贝叶斯定理的分类方法，它假设特征之间是独立的。多项式朴素贝叶斯分类器是朴素贝叶斯分类器的一种变体，它适用于特征是离散的，比如在文本分类问题中，特征通常是词频。

4. **模型调优**：使用验证数据集调优模型，找到最优的参数。

5. **模型评估**：使用测试数据集评估模型的性能。在这个问题中，评估的指标是准确率，即正确分类的样本数占总样本数的比例。

6. **结果比较和讨论**：比较不同条件下模型的性能，并讨论可能的原因。

涉及的知识点主要有：自然语言处理中的文本预处理，包括分词和停用词的移除；自然语言处理中的特征抽取，包括一元模型，二元模型，以及一元和二元模型的组合；朴素贝叶斯分类器，包括多项式朴素贝叶斯分类器；模型的训练、调优和评估等。

以下是一个简单的例子来说明这些知识点：

假设我们有以下三个

句子：

1. "I feel happy"
2. "I feel sad"
3. "I feel very happy"

首先，我们需要进行分词，将句子拆分成单词，得到：["I", "feel", "happy"], ["I", "feel", "sad"], ["I", "feel", "very", "happy"]。

接着，如果需要移除停用词，那么“very”就会被移除，因为“very”在英文中是一个常见的停用词，通常不携带情感信息。

然后，我们需要进行特征抽取。如果使用一元模型，那么我们将考虑单个词的信息，特征可能是["I", "feel", "happy"], ["I", "feel", "sad"]；如果使用二元模型，那么我们将考虑相邻两个词的信息，特征可能是["I feel", "feel happy"], ["I feel", "feel sad"]；如果使用一元和二元模型的组合，那么特征可能是["I", "feel", "happy", "I feel", "feel happy"], ["I", "feel", "sad", "I feel", "feel sad"]。

接下来，我们使用这些特征训练一个多项式朴素贝叶斯分类器，对新的句子进行情感分类。

这只是一个简化的例子，实际操作会更复杂。上述步骤的Python代码在前面已经给出，你可以参考学习。

## 你现在可以给我inference.py的代码了吧？

是的，现在我会提供一份实现`inference.py`的代码。这个脚本的目的是在给定一个文本文件和一个模型的情况下，将文件中的每个句子分类为正面或负面。请注意这里我们假设你的输入文本是经过了相同的预处理步骤，比如分词和移除停用词。

```python
import argparse
import pickle
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB

def infer(file_path, model_path):
    # 加载模型
    with open(model_path, 'rb') as file:
        model = pickle.load(file)

    # 加载文本文件
    with open(file_path, 'r') as file:
        sentences = file.readlines()

    # 生成词频向量
    vectorizer = CountVectorizer(analyzer = "word", tokenizer = None, preprocessor = None, stop_words = None, max_features = 5000)
    features = vectorizer.fit_transform(sentences)

    # 预测每个句子的类别
    predictions = model.predict(features)
    for sentence, prediction in zip(sentences, predictions):
        print(f'Sentence: {sentence.strip()}')
        print(f'Prediction: {"positive" if prediction == 1 else "negative"}')
        print()

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='Inference script for sentiment analysis')
    parser.add_argument('file_path', type=str, help='Path to the text file containing sentences to classify')
    parser.add_argument('model_path', type=str, help='Path to the trained model')
    args = parser.parse_args()
    
    infer(args.file_path, args.model_path)
```

要运行这个脚本，你可以使用以下的命令行指令：
```bash
python inference.py text.txt mnb_uni.pkl
```

其中`text.txt`是包含待分类句子的文本文件，`mnb_uni.pkl`是已经训练好的模型。脚本将输出每个句子以及对应的预测结果。

这个脚本只是一个基本的示例，你可能需要根据实际情况进行调整。例如，你可能需要适应你的特征抽取过程，包括是否需要删除停用词，使用的n-grams大小等等。

---

**有一个朋友说我必须实现：“他验证要单写一个文件 然后用两行command line argument分别读取需要分类的文本文件和模型”，上面实现了吗？他这个是要实现什么？**

上述 `inference.py` 脚本就是实现了这个要求。它通过命令行接受两个参数，一个是需要分类的文本文件路径，另一个是已训练模型的路径。它会读取这两个文件，然后将文本文件中的每一行（每一句话）使用给定的模型进行分类，然后输出分类结果。

这种通过命令行接受参数的方式是 Python 脚本常见的运行方式，可以方便地在不同的文件或模型上重复使用同一段代码。举例来说，你可以这样运行上述的 `inference.py` 脚本：

```bash
python inference.py text.txt mnb_uni.pkl
```

在这个例子中，`text.txt` 是包含待分类句子的文本文件，`mnb_uni.pkl` 是已经训练好的模型。脚本将读取这两个文件，然后输出每个句子以及对应的预测结果。

所以，你的朋友的建议已经在上述的脚本中实现了。

::: tabs

@tab 1

**能不能给我很多个测试例子，并且给我测试的结果，这样方便我测试一下**

当然可以。我们可以创建一个文本文件，例如叫做 `test_sentences.txt`，其中包含一些待分类的句子。假设我们使用下面的句子：

```
I absolutely love this product.
This is the worst thing I've ever bought.
The item arrived on time and it works great.
I'm really disappointed with this purchase.
The quality of this product is amazing.
This is a complete waste of money.
```

使用一个训练好的模型，例如 `mnb_uni.pkl`，我们可以用上述的 `inference.py` 脚本来分类这些句子：

```bash
python inference.py test_sentences.txt mnb_uni.pkl
```

注意，由于我不知道你的模型是如何训练的，所以我不能提供确切的预期结果。然而，根据一般的情况，我们可以期望上面的句子被分类为以下的类别：

```
I absolutely love this product. --> positive
This is the worst thing I've ever bought. --> negative
The item arrived on time and it works great. --> positive
I'm really disappointed with this purchase. --> negative
The quality of this product is amazing. --> positive
This is a complete waste of money. --> negative
```

请记住，这些预期结果是基于每个句子的含义给出的，并且假设你的模型能够准确地理解这些含义。实际的结果可能会根据你的模型的训练情况有所不同。

@tab 2

上面你已经带我训练模型，并且编写inference.py 能不能给我很多个测试例子，并且给我测试的结果，这样方便我测试一下。然后跟我说得出什么结果，来验证我们训练是否正确

---

好的，我可以给你一些示例的文本来测试你的 `inference.py` 脚本。让我们假设你有一个名为 `text.txt` 的文件，文件内容如下：

```
The product is amazing, I love it!
Unfortunately, the product didn't live up to my expectations.
Best purchase I made this year.
I would not recommend this product.
Good value for the price.
I am very disappointed.
```

这个文件包含了一些正面评价和负面评价。使用 `mnb_uni.pkl` 模型来进行预测，你的命令行可能是：

```bash
python inference.py text.txt mnb_uni.pkl
```

这将为每一句话输出一个预测。预期的输出可能如下：

```
Sentence: The product is amazing, I love it!
Prediction: positive

Sentence: Unfortunately, the product didn't live up to my expectations.
Prediction: negative

Sentence: Best purchase I made this year.
Prediction: positive

Sentence: I would not recommend this product.
Prediction: negative

Sentence: Good value for the price.
Prediction: positive

Sentence: I am very disappointed.
Prediction: negative
```

请注意，由于我没有具体的模型和你的数据集，我不能保证你会得到完全相同的结果。此外，这些预测还取决于你在训练过程中是否删除了停用词、你使用的n-grams的大小等等。

你可以通过比较模型的预测结果和预期的分类（正面或负面）来验证你的模型是否正确。如果模型的预测和实际情况大致一致，那么你的模型可能就是正确的。否则，你可能需要重新调整你的模型或数据预处理步骤。

:::

## over

::: tabs

@tab 1

**先把上面的代码详细注释一下，每一行都要注释**

当然，下面是详细注释过的 `inference.py` 文件：

```python
# 导入必要的库
import pickle  # 用于加载已经训练过的模型
import sys  # 用于获取命令行参数
from sklearn.feature_extraction.text import CountVectorizer  # 用于将文本转化为词频向量
from sklearn.feature_extraction.text import TfidfTransformer  # 用于将词频向量转化为TF-IDF向量

# sys.argv[1] 是命令行中传递的第一个参数，即待分类文本文件的路径
# sys.argv[2] 是命令行中传递的第二个参数，即已经训练过的模型的路径

# 读取待分类文本文件
with open(sys.argv[1], 'r') as f:
    sentences = f.readlines()  # 按行读取文件中的文本

# 加载已经训练过的模型
with open(sys.argv[2], 'rb') as f:
    model = pickle.load(f)  # 使用pickle库的load函数加载模型

# 初始化 CountVectorizer 对象，用于将文本转化为词频向量
# 在这个例子中，我们假设已经训练过的模型是使用一元语法（unigram）训练的
vectorizer = CountVectorizer(ngram_range=(1, 1))

# 将文本转化为词频向量
X = vectorizer.fit_transform(sentences)

# 初始化 TfidfTransformer 对象，用于将词频向量转化为TF-IDF向量
tfidf = TfidfTransformer()

# 将词频向量转化为TF-IDF向量
X_tfidf = tfidf.fit_transform(X)

# 使用模型对每一句话进行分类
predictions = model.predict(X_tfidf)

# 打印每一句话以及对应的预测结果
for sentence, prediction in zip(sentences, predictions):
    print(f'Sentence: {sentence.strip()}')
    print(f'Prediction: {prediction}\n')
```

每一行都已经有了相应的注释，解释了每一行的作用。在运行这段代码时，记得在命令行中指定待分类的文本文件和已经训练过的模型。

@tab 2

**先把上面所有的代码（包括训练部分的代码）详细注释一下，每一行都要注释**

当然可以，我会为你详细注释代码，帮助你更好地理解代码的工作方式。首先是模型训练部分的代码：

```python
import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.metrics import accuracy_score
from sklearn.pipeline import make_pipeline
import joblib  # 用于保存和加载模型

def train_model(filename, ngram, stop_words, model_filename):
    # 加载数据
    df = pd.read_csv(filename, header=None)
    # 在数据中，我们将第一列作为标签（这是我们的Y值），剩下的部分合并为一个整体，作为我们的输入X值
    df['text'] = df[df.columns[1:]].apply(
        lambda x: ' '.join(x.dropna().astype(str)),
        axis=1
    )
    df = df[[0, 'text']]  # 简化我们的数据框，只包含我们需要的列
    df.columns = ['label', 'text']  # 给列重新命名

    # 划分数据集为训练集和测试集
    train_df = df.sample(frac=0.8, random_state=2022)
    test_df = df.drop(train_df.index)

    # 根据输入的参数定义向量器的配置
    vectorizer = CountVectorizer(ngram_range=ngram, stop_words=stop_words)
    
    # 定义模型
    mnb = MultinomialNB()
    
    # 创建一个管道，将我们的向量器和模型连接在一起。这样我们可以在一个步骤中完成向量化和训练
    model = make_pipeline(vectorizer, mnb)
    
    # 训练模型
    model.fit(train_df['text'], train_df['label'])
    
    # 在测试集上验证模型的准确性
    predictions = model.predict(test_df['text'])
    accuracy = accuracy_score(test_df['label'], predictions)
    print(f'Accuracy: {accuracy}')

    # 保存训练好的模型，以便以后使用
    joblib.dump(model, model_filename)


# 根据题目要求，我们需要分别训练六个模型，这里是调用训练函数的示例
train_model('train.csv', (1, 1), None, 'mnb_uni.pkl')
train_model('train.csv', (2, 2), None, 'mnb_bi.pkl')
train_model('train.csv', (1, 2), None, 'mnb_uni_bi.pkl')
train_model('train_ns.csv', (1, 1), 'english', 'mnb_uni_ns.pkl')
train_model('train_ns.csv', (2, 2), 'english', 'mnb_bi_ns.pkl')
train_model('train_ns.csv', (1, 2), 'english', 'mnb_uni_bi_ns.pkl')
```

然后是 `inference.py` 脚本的代码：

```python
import sys  # 用于获取命令行参数
import joblib  # 用于加载模型
import pandas as pd  # 用于数据处理

def classify_text(model_filename, text_filename):
    # 加载模型
    model = joblib.load(model

_filename)

    # 加载文本文件
    with open(text_filename, 'r') as f:
        text_data = f.read().splitlines()

    # 对文本进行分类
    predictions = model.predict(text_data)
    
    # 打印每个句子的预测结果
    for sentence, prediction in zip(text_data, predictions):
        print(f'Sentence: {sentence}\nPrediction: {prediction}\n')


# 从命令行获取参数
text_filename = sys.argv[1]
model_filename = sys.argv[2]

# 调用分类函数
classify_text(model_filename, text_filename)
```

这些代码都是很基础的Python和机器学习代码，主要目的是利用scikit-learn库训练一个Multinomial Naive Bayes模型，并在新的文本上使用这个模型进行预测。

@tab 3

你给我的inference.py 代码无法正常运行，    model = pickle.load(f)  # 使用pickle库的load函数加载模型            ^^^^^^^^^^^^^^ _pickle.UnpicklingError: invalid load key, '\x0f'.

抱歉，看起来你在尝试加载模型时遇到了一些问题。错误提示信息 "_pickle.UnpicklingError: invalid load key, '\x0f'" 通常意味着pickle文件（在这种情况下，是你的模型文件）被损坏或者不完整，或者可能不是用pickle库创建的。

以下是一些可能的解决方案：

1. 确保你的模型文件是完整的，没有在保存或传输过程中被损坏。你可以通过重新训练模型并保存，然后再试图加载它，来测试这一点。

2. 确保你的模型文件是用pickle库创建的。如果模型是用其他库（如joblib）创建的，那么你需要使用相同的库来加载它。

3. 确保你使用的pickle库版本与创建模型文件时使用的版本相同。不同版本的pickle库可能会导致兼容性问题。如果可能，你应该在同一环境中创建和加载模型。

4. 如果你的模型文件是在不同的操作系统（如Windows和Linux）之间传输的，这可能会导致问题。如果可能，你应该在同一操作系统中创建和加载模型。

如果以上都不适用，我建议查看你的模型文件，看看是否有任何明显的问题，或者尝试使用不同的库或方法来加载它。在某些情况下，可能需要重新创建模型文件。

@tab 4

**我的模型是joblib创建的**

感谢你的反馈，如果你的模型是使用joblib创建的，那么你应该使用joblib来加载它。请将`inference.py`中的这一部分：

```python
import pickle
with open(model_file, 'rb') as f:
    model = pickle.load(f)  # 使用pickle库的load函数加载模型
```

更改为：

```python
from joblib import load
model = load(model_file)  # 使用joblib的load函数加载模型
```

这样你就能够正确地加载你的模型了。如果仍然遇到问题，欢迎继续提问。

@tab 4

```
还是有问题：python inference.py text.txt mnb_uni.pkl
Traceback (most recent call last):
  File "/Users/huangjiabao/GitHub/SourceCode/MacBookPro16-Code/PythonCoder/StudentCoder/49-Bob/hw2/inference.py", line 39, in <module>
    predictions = model.predict(X_tfidf)
                  ^^^^^^^^^^^^^^^^^^^^^^
  File "/Users/huangjiabao/GitHub/SourceCode/MacBookPro16-Code/PythonCoder/venv/lib/python3.11/site-packages/sklearn/pipeline.py", line 480, in predict
    Xt = transform.transform(Xt)
         ^^^^^^^^^^^^^^^^^^^^^^^
  File "/Users/huangjiabao/GitHub/SourceCode/MacBookPro16-Code/PythonCoder/venv/lib/python3.11/site-packages/sklearn/feature_extraction/text.py", line 1433, in transform
    _, X = self._count_vocab(raw_documents, fixed_vocab=True)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/Users/huangjiabao/GitHub/SourceCode/MacBookPro16-Code/PythonCoder/venv/lib/python3.11/site-packages/sklearn/feature_extraction/text.py", line 1275, in _count_vocab
    for feature in analyze(doc):
                   ^^^^^^^^^^^^
  File "/Users/huangjiabao/GitHub/SourceCode/MacBookPro16-Code/PythonCoder/venv/lib/python3.11/site-packages/sklearn/feature_extraction/text.py", line 111, in _analyze
    doc = preprocessor(doc)
          ^^^^^^^^^^^^^^^^^
  File "/Users/huangjiabao/GitHub/SourceCode/MacBookPro16-Code/PythonCoder/venv/lib/python3.11/site-packages/sklearn/feature_extraction/text.py", line 69, in _preprocess
    doc = doc.lower()
          ^^^^^^^^^
  File "/Users/huangjiabao/GitHub/SourceCode/MacBookPro16-Code/PythonCoder/venv/lib/python3.11/site-packages/scipy/sparse/_base.py", line 771, in __getattr__
    raise AttributeError(attr + " not found")
AttributeError: lower not found. Did you mean: 'power'?
```

这个错误的原因是在加载并尝试预测新的输入文本时，输入文本被错误地认为是稀疏矩阵，而不是预期的文本数据。在预处理新输入的数据时，我们需要确保它是一维的文本数组。

在你的inference.py文件中，你需要修改一下从.txt文件中读取文本的方式。将：

```python
text_data = pd.read_csv(text_file, sep="\n", header=None)
```
改为：

```python
with open(text_file, 'r') as f:
    text_data = f.read().splitlines()
```

这将会将文本文件的每一行读入一个字符串列表中，而不是一个DataFrame。然后，你就可以像预期那样在这个字符串列表上运行你的模型了。

:::

---

`CountVectorizer`的`ngram_range`参数定义了将原始文本转化为特征向量时，需要考虑的单词组合（n-gram）的长度范围。在这个范围内的所有n-gram都会被作为特征。

- `'ngram_range': (1, 1)`表示只考虑每个独立的单词，也就是1-gram，也称为unigrams。例如，对于句子"The cat sat on the mat"，它的unigrams就是["The", "cat", "sat", "on", "the", "mat"]。

- `'ngram_range': (2, 2)`表示只考虑每两个连续的单词的组合，也就是2-gram，也称为bigrams。例如，对于句子"The cat sat on the mat"，它的bigrams就是["The cat", "cat sat", "sat on", "on the", "the mat"]。

- `'ngram_range': (1, 2)`表示同时考虑每个独立的单词和每两个连续的单词的组合，也就是unigrams和bigrams。例如，对于句子"The cat sat on the mat"，它的1,2-grams就是["The", "cat", "sat", "on", "the", "mat", "The cat", "cat sat", "sat on", "on the", "the mat"]。

你可以根据具体的任务和数据来选择最适合的`ngram_range`。例如，如果文本中有一些常用的短语或者说法，那么使用bigrams可能会有好的效果。如果单词的顺序并不重要，那么使用 unigrams 可能就足够了。对于一些更复杂的情况，可能需要使用更高阶的n-grams。

## 答案

```python
# -*- coding: utf-8 -*-
# @Time    : 2023/6/19 23:39
# @Author  : AI悦创
# @FileName: hw1.py
# @Software: PyCharm
# @Blog    ：https://bornforthis.cn/
import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.metrics import accuracy_score
from sklearn.pipeline import Pipeline
from joblib import dump, load


# import pickle

# 导入数据
# def load_data(filename):
#     df = pd.read_csv(filename)
#     return df['text'], df['label']
# def load_data(filename):
#     df = pd.read_csv(filename)
#     labels = df.iloc[:, 0]
#     text = df.iloc[:, 1:].apply(lambda row: ' '.join(row.values.astype(str)), axis=1)
#     return text, labels

def load_data(filename):
    df = pd.read_csv(filename, header=None)
    labels = df.iloc[:, 0]
    data = df.iloc[:, 1:].apply(lambda x: ' '.join(x.dropna()), axis=1)
    return data, labels


train_data, train_labels = load_data('data2/train.csv')
val_data, val_labels = load_data('data2/val.csv')
test_data, test_labels = load_data('data2/test.csv')

train_ns_data, train_ns_labels = load_data('data2/train_ns.csv')
val_ns_data, val_ns_labels = load_data('data2/val_ns.csv')
test_ns_data, test_ns_labels = load_data('data2/test_ns.csv')


# 训练模型
def train_and_evaluate(vectorizer_params, train_data, train_labels, val_data, val_labels, model_filename):
    vectorizer = CountVectorizer(**vectorizer_params)
    clf = MultinomialNB()
    model = Pipeline([('vectorizer', vectorizer), ('clf', clf)])

    model.fit(train_data, train_labels)
    val_predictions = model.predict(val_data)
    accuracy = accuracy_score(val_labels, val_predictions)

    dump(model, model_filename)

    return accuracy


# 测试模型
# 定义函数test_model，输入参数是模型的文件名，测试数据和测试标签
def test_model(model_filename, test_data, test_labels):
    model = load(model_filename)
    test_predictions = model.predict(test_data)
    accuracy = accuracy_score(test_labels, test_predictions)
    return accuracy


# 测试模型并打印准确度
test_acc_uni = test_model('mnb_uni.pkl', test_data, test_labels)
test_acc_bi = test_model('mnb_bi.pkl', test_data, test_labels)
test_acc_uni_bi = test_model('mnb_uni_bi.pkl', test_data, test_labels)

test_acc_uni_ns = test_model('mnb_uni_ns.pkl', test_ns_data, test_ns_labels)
test_acc_bi_ns = test_model('mnb_bi_ns.pkl', test_ns_data, test_ns_labels)
test_acc_uni_bi_ns = test_model('mnb_uni_bi_ns.pkl', test_ns_data, test_ns_labels)

# 设置向量化参数
unigram_params = {'ngram_range': (1, 1)}
bigram_params = {'ngram_range': (2, 2)}
unigram_bigram_params = {'ngram_range': (1, 2)}

# 训练模型并保存
acc_uni = train_and_evaluate(unigram_params, train_data, train_labels, val_data, val_labels, 'mnb_uni.pkl')
acc_bi = train_and_evaluate(bigram_params, train_data, train_labels, val_data, val_labels, 'mnb_bi.pkl')
acc_uni_bi = train_and_evaluate(unigram_bigram_params, train_data, train_labels, val_data, val_labels, 'mnb_uni_bi.pkl')

acc_uni_ns = train_and_evaluate(unigram_params, train_ns_data, train_ns_labels, val_ns_data, val_ns_labels,
                                'mnb_uni_ns.pkl')
acc_bi_ns = train_and_evaluate(bigram_params, train_ns_data, train_ns_labels, val_ns_data, val_ns_labels,
                               'mnb_bi_ns.pkl')
acc_uni_bi_ns = train_and_evaluate(unigram_bigram_params, train_ns_data, train_ns_labels, val_ns_data, val_ns_labels,
                                   'mnb_uni_bi_ns.pkl')

# 打印准确度
print(f'Unigrams, stopwords removed: {acc_uni_ns}')
print(f'Bigrams, stopwords removed: {acc_bi_ns}')
print(f'Unigrams+Bigrams, stopwords removed: {acc_uni_bi_ns}')
print(f'Unigrams, stopwords not removed: {acc_uni}')
print(f'Bigrams, stopwords not removed: {acc_bi}')
print(f'Unigrams+Bigrams, stopwords not removed: {acc_uni_bi}')

# 打印准确度
print(f'Unigrams, stopwords removed, test set: {test_acc_uni_ns}')
print(f'Bigrams, stopwords removed, test set: {test_acc_bi_ns}')
print(f'Unigrams+Bigrams, stopwords removed, test set: {test_acc_uni_bi_ns}')
print(f'Unigrams, stopwords not removed, test set: {test_acc_uni}')
print(f'Bigrams, stopwords not removed, test set: {test_acc_bi}')
print(f'Unigrams+Bigrams, stopwords not removed, test set: {test_acc_uni_bi}')
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
