---
title: Fall 2024 Machine Learning Final Competition Guidelines(text)
icon: python
date: 2024-12-01 15:55:30
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



## Tips from TAs

* Please feel free to start from the [demo code](https://colab.research.google.com/drive/1ZilfAyuGqhycenX_8upFkHz7zf47J3wy?usp=drive_link)  
* Sample a subset of labeled data as your validation set.  
* Visualize the [confusion matrix](https://en.wikipedia.org/wiki/Confusion_matrix) on the validation set to observe some potential problems of your current model.  
* On this specific dataset, handling the noisy and imbalanced data properly might be more helpful than using a stronger model. Meanwhile, a model that is too simple may not possess enough learning capability for this task.

This document will be further revised, please refer to the latest version. 

Start early, and have fun\!\! 🤣

```python
!pip install datasets -q

import torch
import random
import numpy as np

# Set a fixed random seed for reproducibility
SEED = 42
random.seed(SEED)
np.random.seed(SEED)
torch.manual_seed(SEED)
if torch.cuda.is_available():
    torch.cuda.manual_seed(SEED)
    torch.cuda.manual_seed_all(SEED)
torch.backends.cudnn.deterministic = True
torch.backends.cudnn.benchmark = False

from torch.utils.data import Dataset, DataLoader
from torchvision import transforms
from PIL import Image

class CustomHFDataset(Dataset):
    def __init__(self, hf_dataset, transform=None, test_flag=False):
        """
        Args:
            hf_dataset: A split of the Hugging Face dataset (e.g., train, val, test)
            transform: PyTorch transforms to apply on the images
        """
        self.hf_dataset = hf_dataset
        self.transform = transform
        self.test_flag = test_flag

    def __len__(self):
        return len(self.hf_dataset)

    def __getitem__(self, idx):
        # Get the raw example from the Hugging Face dataset
        example = self.hf_dataset[idx]
        image = example['image']
        label = example['label']

        # Apply transformations if provided
        if self.transform:
            image = self.transform(image)

        if self.test_flag:
            return image, example['idx']
        else:
            return image, label

from datasets import load_dataset

# Load dataset
dataset = load_dataset('hmdliu/ACAC-4K')

# Define transforms
transform = transforms.Compose([
    transforms.Resize(512),
    transforms.ToTensor(),
    # Here we use the stats from ImageNet,
    # you may calculate the true mean and std on our dataset.
    transforms.Normalize(
        mean=[0.485, 0.456, 0.406],
        std=[0.229, 0.224, 0.225]
    )
])

# Create datasets for train, validation, and test splits
train_dataset = CustomHFDataset(dataset['train'], transform=transform)
test_dataset = CustomHFDataset(dataset['test'], transform=transform)

# Create DataLoaders
train_loader = DataLoader(train_dataset, batch_size=4, shuffle=True)
test_loader = DataLoader(test_dataset, batch_size=16, shuffle=False)

# Check data batch
images, labels = next(iter(train_loader))
images.shape, labels.shape

# TODO: Train your model & make predictions on the test set

# Metrics

import numpy as np
from sklearn.metrics import f1_score

target = np.array([0, 1, 2, 3, 4, 5])
pred = np.array([0, 1, 0, 0, 5, 5])

accuracy = (pred == target).mean()
f1_scores = f1_score(target, pred, labels=range(6), average=None)
f1_non_ai = np.mean(f1_scores[:5])
f1_ai = f1_scores[5]
weighted_metric = (accuracy + f1_non_ai + f1_ai) / 3

print(f'Accuracy: {accuracy:.4f}')
print(f'F1: {f1_scores}')
print(f'F1 Non-AI: {f1_non_ai:.4f}')
print(f'F1 AI: {f1_ai:.4f}')
print(f'Kaggle score: {weighted_metric:.4f}')


# Sample output format: xxx.csv
print("""idx,predicted_label
3200,0
3201,1
3202,2
3203,3
3204,4
...
3599,5
""")
```


































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