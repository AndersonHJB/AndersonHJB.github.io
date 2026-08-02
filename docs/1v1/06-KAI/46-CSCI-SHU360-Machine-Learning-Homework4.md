---
title: CSCI-SHU360 Machine Learning Homework 4
icon: python
date: 2024-11-11 22:18:16
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

::: center

Due: Nov 21th 11:59 PM, 2024 (GMT+8)

:::

## Instructions

- **Collaboration policy:** Homework must be done individually, except where otherwise noted in the assignments. "Individually" means each student must hand in their own answers, and you must write and use your own code in the programming parts of the assignment. It is acceptable for you to collaborate in figuring out answers and to help each other solve the problems, and you must list the names of students you discussed this with. We will assume that, as participants in an undergraduate course, you will be taking the responsibility to make sure you personally understand the solution to any work arising from such collaboration.
- **Online submission:** You must submit your solutions online on the course Gradescope site (you can find a link on the course Brightspace site). You need to submit (1) a PDF that contains the solutions to all questions to the Gradescope **HW4 Paperwork** assignment (**including the questions asked in the programming problems**), (2) `.py` or `.ipynb` files for the programming questions to the Gradescope **HW4 Code Files** assignment. We recommend that you type the solution (e.g., using LaTeX or Word), but we will accept scanned/pictured solutions as well (clarity matters).
- **Generative AI Policy:** You are free to use any generative AI, but you are required to document the usage: which AI do you use, and what's the query to the AI. You are responsible for checking the correctness.
- **Late Policy:** No late submission is allowed as we give extra time and reduce the number of questions.

**Before you start:** this homework only has programming problems. You should still have all questions answered in the write-up pdf. Also note that some sub-problems are still essentially math problems and you need to show detailed derivations.

- **Problems 1 and 2** are two parts of one problem, so we suggest you read the description of both problems in tandem.
  
- We will/have introduced random forests and gradient boosting decision trees (GBDTs) in class, and we also include a detailed description here if you want to start early or use it as a review for the lecture. You can also check the slides in advance if you want.
  
- This homework could be challenging and hope the following tips help:
  - **Understanding of the gradient boosting tree concept.** In particular, we use every single tree to compute a "gradient step", and the sum of the gradient steps gives us the final predictions.
  - **Understanding of the python notebook we provide.** The code we provide aims to share implementations between the random forests and the GBDTs. Try to think about how different parts of the code could be re-utilized by the two models.
  - **Debugging your code:** always try to debug a small case. For example, use very few data points and build a tree with a depth of 2 or 3. Then, you can look at all the decision rules and data point assignments and check if they are reasonable.

## 1 Programming Problem: Random Forests [40 points]

Random forests (RF) build an ensemble of trees independently. It uses bootstrap sampling (sampling with replacement, as discussed in class) to randomly generate $B$ datasets from the original training dataset, each with the same size as the original one but might contain some duplicated (or missing) samples. Each sample has a multiplicity which is greater than or equal to zero. In your Python implementation, you can use `numpy.random.choice` for the sampling procedure.

The RF procedure independently trains $B$ decision tree models $\{ f_b(\cdot; \theta_b) \}_{b=1}^B$ on these $B$ datasets, and these are done independently. To train each tree, we start from a root node with all the assigned data, and recursively split the node and its data into two child nodes, by a decision rule on a feature dimension (thresholding in particular). When we're all done, RFs produce predictions by averaging the outputs of all the $B$ models as follows:

$$
\hat{y}_i = \frac{1}{B} \sum_{b=1}^B f_b(x_i; \theta_b).
$$


The optimization problem for training each tree in RF is

$$
\min_{\theta_b} \sum_{i=1}^n \ell(y_i, \hat{y}_i) + \Omega(\theta_b),
$$
where $\hat{y}_i$ is the prediction produced by tree-$b$ $f_b(\cdot; \theta_b)$ for data point $x_i$, $\ell(\cdot, \cdot)$ is a loss function (detailed in Problem 2.5.3), and $\Omega(\theta_b)$ is a regularizer applied to the parameters $\theta_b$ of model-$b$ (that is, $\Omega(\theta_b)$ measures the complexity of model-$k$). Most descriptions of ensemble learning in Problem 2.1 of the homework (below) can be also applied to RF, such as the definitions of $f_k(\cdot; \theta_k)$ and $\theta_k$, except Eq. (3) and Eq. (4).

Different methods can be used to find the decision rule on each node during the optimization of a single tree. A core difference between random forests and GBDTs (which we will describe in Problem 2) is the tree growing methods. Specifically, in the case of GBDT, we use the standard greedy tree-splitting algorithm; in the case of random forests, we greedily learn each tree using a bootstrapped data sample and random feature selection as described in class. That is, the key difference is the data that is being used (always original data in the case of GBDT or bootstrap sample for each tree in the case of RFs), and in the case of RFs we choose a random subset of features each time we grow a node. The underlying algorithm, however, is very similar. Therefore, to facilitate code reuse between this and the next problem, and also to make more fair the comparison between RFs and GBDTs, we ask you to use the same code base between this and the next problem (detailed in Problem 2.4 below).

Each tree in the RF method is like the first tree in GBDT, as the RF method does not consider any previously produced trees when it grows a new tree (the trees are independent with RFs). With RFs, we simply start with $\hat{y}_i^0$. You need to notice this fact when re-using the code from GBDT, because $G_j$ and $H_j$ for tree-$k$ in RF only depend on $\hat{y}_i^0$, not $\hat{y}_i^{k-1}$. Instructions 2-5 in Problem 2.5, however, can still be applied to RF tree building here.

In this problem, you will implement RFs for both regression and binary classification problems. Please read Problem 2.1, 2.4, and 2.5 below before you start.

1. **[20 points]** Implement RF for regression task, and test its performance on Boston house price dataset[^1]. Report the training and test RMSE. How is the performance of RF compared to least square regression and ridge regression?

2. **[20 points]** Implement RF for binary classification task, and test its performance on Credit-g dataset. It is a dataset classifying people described by 20 attributes as good or bad credit risks. The full description of the attributes can be found at [https://www.openml.org/d/31](https://www.openml.org/d/31). Report the training and test accuracy. Try your implementation on breast cancer diagnostic dataset[^2], and report the training and test accuracy.

[^1]: [https://www.kaggle.com/c/boston-housing](https://www.kaggle.com/c/boston-housing)
[^2]: [https://www.kaggle.com/uciml/breast-cancer-wisconsin-data](https://www.kaggle.com/uciml/breast-cancer-wisconsin-data)

```python
#from multiprocessing import Pool
#from functools import partial
import numpy as np
#from numba import jit

#TODO: loss of least square regression and binary logistic regression
'''
    pred() takes GBDT/RF outputs, i.e., the "score", as its inputs, and returns predictions.
    g() is the gradient/1st order derivative, which takes true values "true" and scores as input, and returns gradient.
    h() is the heassian/2nd order derivative, which takes true values "true" and scores as input, and returns hessian.
'''
class leastsquare(object):
    '''Loss class for mse. As for mse, pred function is pred=score.'''
    def pred(self,score):
        return score

    def g(self,true,score):
        pass

    def h(self,true,score):
        pass

class logistic(object):
    '''Loss class for log loss. As for log loss, pred function is logistic transformation.'''
    def pred(self,score):
        pass

    def g(self,true,score):
        pass

    def h(self,true,score):
        pass

# TODO: class of Random Forest
class RF(object):
    '''
    Class of Random Forest
    
    Parameters:
        n_threads: The number of threads used for fitting and predicting.
        loss: Loss function for gradient boosting.
            'mse' for regression task and 'log' for classfication task.
            A child class of the loss class could be passed to implement customized loss.
        max_depth: The maximum depth d_max of a tree.
        min_sample_split: The minimum number of samples required to further split a node.
        lamda: The regularization coefficient for leaf score, also known as lambda.
        gamma: The regularization coefficient for number of tree nodes, also know as gamma.
        rf: rf*m is the size of random subset of features, from which we select the best decision rule.
        num_trees: Number of trees.
    '''
    def __init__(self,
        n_threads = None, loss = 'mse',
        max_depth = 3, min_sample_split = 10, 
        lamda = 1, gamma = 0,
        rf = 0.99, num_trees = 100):
        
        self.n_threads = n_threads
        self.loss = loss
        self.max_depth = max_depth
        self.min_sample_split = min_sample_split
        self.lamda = lamda
        self.gamma = gamma
        self.rf = rf
        self.num_trees = num_trees

    def fit(self, train, target):
        # train is n x m 2d numpy array
        # target is n-dim 1d array
        #TODO
        return self

    def predict(self, test):
        #TODO
        return self.loss.pred(score)
```





## 2 Programming Problem: Gradient Boosting Decision Trees [60 points]

### 2.1 Problem of Ensemble Learning in GBDTs

Gradient Boosting Decision Trees (GBDT) is a class of methods that use an ensemble of $K$ models (decision trees) $\{ f_k(\cdot; \theta_k) \}_{k=1}^K$. It produces predictions by adding together the outputs of the $K$ models as follows:

$$
\hat{y}_i = \sum_{k=1}^K f_k(x_i; \theta_k)
$$
















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