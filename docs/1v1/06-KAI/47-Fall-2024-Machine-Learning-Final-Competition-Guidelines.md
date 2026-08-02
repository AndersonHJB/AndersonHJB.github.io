---
title: Fall 2024 Machine Learning Final Competition Guidelines
icon: python
date: 2024-12-01 15:17:49
author: AI悦创
isOriginal: true
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

**[Fall 2024] Machine Learning Final Competition Guidelines**

**Version: November 27th, 2024**

## Introduction

Ancient Chinese artwork holds profound cultural and historical significance, reflecting the philosophical, spiritual, and aesthetic values of various dynasties. However, inferring the creation period of calligraphy and painting works remains a challenging task, primarily due to the subtle characteristics of works from different eras and variations in preservation conditions. In this competition,  our goal is to leverage machine learning techniques to predict the dynasty of these artworks based on the scanned images.

## Task Formulation

**Primary task**: Image Classification

**Data:** We offer a [dataset](https://huggingface.co/datasets/hmdliu/ACAC-4K) with 3600 images (3200 images for training/validation, and 400 images for testing). The images are of size 512⨉512, but you are free to choose the resolution for model training. In particular, among the 3600 images, there are 900 AI-generated images. The full set of classes is as follows: 

```python
{0: Tang(唐), 1: Song(宋), 2: Yuan(元), 3: Ming(明), 4: Qing(清), 5: AI} 
```

You have access to the class labels on the training/validation set, and your task is to train a model to make class label predictions on the test set. Noticing that the labels on the training/validation set are designed to be noisy, where only half the AI-generated images are labelled explicitly, whereas the rest of them have been assigned to some random labels (i.e., one of the five non-AI classes). Hence, you may consider training a dedicated model for data cleaning first.

## Evaluation Metrics

We use a weighted sum over four metrics to quantify the model performance:

* Overall Accuracy (30%): Correct rate over all classes and data points.  
* Non-AI Class [F1-Score](https://en.wikipedia.org/wiki/F-score) (30%): Average F1-Score over Non-AI classes.  
* AI Class [F1-Score](https://en.wikipedia.org/wiki/F-score) (30%): F1-Score on AI-generated images.  
* Stake Sharing (10%): This metric encourages you to develop models that perform well on long-tail or difficult data points. Suppose for a test image, there are only 3 people in class who predicted correctly, then they will share the 1 unit of stake on this data point (i.e., ⅓ each). We will accumulate your stake over the whole test dataset and rescale to the amount of total scores. Note that the scores that get beyond 10% will be clipped to 10%. We will calculate this dynamic metric periodically based on your submissions.

## Submission Guidelines

We host our competition on Kaggle ([competition link](https://www.kaggle.com/t/65f306e563a84c0e8f58230bb026e97e)). Your submission will be in the form of a CSV file, where you include the predicted class labels on the test dataset. We have provided the demo code for exporting to CSV format. Please name your competition alias with your NYU NetID, and the account with a wrong format will be removed. You can make at most 10 submissions per day.

## Competition Milestones

* Phase One Leaderboard (10% of total points, due December 4th)  
    * You only need to submit your Kaggle username (i.e., your NetID) to Brightspace. If you get a Kaggle score higher than 30%, you get all the points. (The Kaggle score only involves the first three metrics.)  
* Phase Two Leaderboard (90% of total points, due December 18th)  
    * This part is scored based on the weighted sum over the four metrics mentioned above. You need to submit your model weights, your code, and a PDF report (3-4 pages) to Brightspace. We will release a report template with suggested sections and format. Always make sure the results are reproducible. Your code should be runnable, and your logs should be kept if you submit an IPython notebook.

## Other Rules (Very Important)

* Discussions are highly encouraged, but please always write your own code.  
* Cases that are considered as cheating (which will lose all the points):  
    * Labeling any split of the dataset manually in any form.  
    * Using pre-trained model weights in any part of your code.  
    * Using GenAI tools (e.g., ChatGPT) to introduce extra information for inference. (Using them for brainstorming or debugging is fine.)  
    * The submitted code and model weights cannot reproduce the test set predictions on Kaggle. (Small deviations are not a problem.)  
    * Extremely similar code submission from different students.  
* We will randomly invite students to go through their solutions during the competition phase, so please make sure you know what your code is doing.  
* Dates for calculating the Stake Sharing metric will be announced soon.

## Tips from TAs

* Please feel free to start from the [demo code](https://colab.research.google.com/drive/1ZilfAyuGqhycenX_8upFkHz7zf47J3wy?usp=drive_link)  
* Sample a subset of labeled data as your validation set.  
* Visualize the [confusion matrix](https://en.wikipedia.org/wiki/Confusion_matrix) on the validation set to observe some potential problems of your current model.  
* On this specific dataset, handling the noisy and imbalanced data properly might be more helpful than using a stronger model. Meanwhile, a model that is too simple may not possess enough learning capability for this task.

This document will be further revised, please refer to the latest version. 

Start early, and have fun\!\! 🤣


































欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！


::: details 公众号：AI悦创【二维码】

![](https://blog.images.bornforthis.cn/docs-images/sha256/77/77f67d48a67ec6a44a4ef1f01ffc85830eb3c121b1ece45dc5ada06e20e2f52b.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](https://blog.images.bornforthis.cn/docs-images/sha256/30/3087c629da73428daa0ee050f5b31709c30f650686164b54c724b892a422c585.jpg)