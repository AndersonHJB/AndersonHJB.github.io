---
title: Assessed coursework 5
date: 2023-12-08 23:16:24
author: AI悦创
isOriginal: true
category: 
    - 英国-布里斯托尔
tag:
    - 英国-布里斯托尔
icon: MathOperations
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

## Introduction

This document contains the questions for Part 5 of your assessed coursework for the unit Algorithms and Machine Learning (MATH20017). The marks for this coursework will count 10% towards your final grade.

Please contact henry.reeve@bristol.ac.uk with any questions regarding this document. Whilst I am unable to provide solutions in advance of all work being handed in, I can provide clarification.

The contents of this document should **not** be distributed without permission.

There are 4 sections to this coursework and you are encouraged to attempt to complete all sections.

## Handing in your coursework

How you present your coursework is important. You should complete your coursework using either Google Colab, a Jupyter notebook, or an Rmarkdown. Whichever approach you take you must submit both (1) the notebook itself (typically either a .ipynb file or a .rmd file) and (2) an HTML file in which all of the blocks of code have been run. If in doubt, use the the suggested approach described in Assessed Coursework 1.

Important: Ensure that you use the correct format to submit your report as failure to do so can lead to a substantial loss of marks.

## 1. Libraries

In this assignment we shall use several libraries. It is recommended that you begin by first loading the following libraries within your notebook.

```python
# numerical linear algebra tools
import numpy as np
from scipy.stats import norm

# machine learning tools
from sklearn.base import BaseEstimator, ClassifierMixin,RegressorMixin,TransformerMixin
from sklearn.utils.extmath import randomized_svd
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error
from sklearn.kernel_approximation import RBFSampler
from sklearn import pipeline,datasets
from sklearn.preprocessing import StandardScaler
import torch

# plotting tools
from matplotlib import pyplot as plt
```

**安装指令：**

```bash
conda install numpy scipy

conda install scikit-learn

conda install matplotlib

conda install pytorch torchvision torchaudio cpuonly -c pytorch
```

## Section A (20 marks)

The focus of this section is binary classification.Let’s suppose we have a data set $\mathcal{D}=((x_1, y_1),\dots,(x_n,y_n))$ consisting of feature vectors $x_i \in \mathbb{R}^d$ and binary labels $y_i \in \{−1,+1\}$. Our goal in this section will be to learn a linear classification model $\phi_{w,b}:\mathbb{R}^d \rightarrow \{-1, 0, 1\}$ where $\phi_{w,b}(x) = \text{sign}(\langle w, x \rangle + b)$ where
$$
\text{sign}(t) = \begin{cases} 
-1 & \text{if } t < 0 \\
0 & \text{if } t = 0 \\
+1 & \text{if } t > 0 
\end{cases}
$$
Let’s consider the following perceptron algorithm for choosing a weight vector and a bias for a linear classification model.

**Algorithm 1:** Perceptron learning algorithm

**Input:** A data set $\mathcal{D}=((x_1, y),(x_2, y_2),\dots,(x_n,y_n))$ and a maximum number of iterations `max_iterations` 

1 $\hat{w} = (0, \ldots, 0)^\top$ // Initialise a d-dimensional vector w

2 $\hat{b} = 0$ // Initialise the intercept

3 converged = FALSE

4 num_iterations = 0

5 **while** not converged and num_iterations < max_iterations **do**

6     converged = TRUE

7     **for** i = 1 to n **do**

8         **if** $y_i(\hat{w}^\top x_i+\hat{b}) \leq 0$ **then**

​          // if we encounter a mistake we update our weights and biases

9         $\hat{w}=\hat{w}+y_ix_i$

10       $\hat{b}=\hat{b}+y_i$

11       converged = FALSE

12    num_iterations = num_iterations + 1

13 **return** ($\hat{w},\hat{b}$)

**(Q1)** Suppose that there is no choice of weight vector $\tilde{w} \in \mathbb{R}^d$ and bias $\tilde{b} \in \mathbb{R}$ such that $\phi_{\tilde{w},\tilde{b}}(x_i) = y_i$ for all $i \in \{1,\dots, n\}$.How many times will the algorithm return to line 5?

::: info Solution Q1

**推理:**

- 在感知机学习算法中，目标是找到一个权重向量 $\hat{w}$ 和偏差 $\hat{b}$，使得对于所有训练样本 $(x_i, y_i)$，都有 $y_i(\hat{w}^\top x_i + \hat{b}) > 0$。
- 算法在每次迭代过程中检查每个样本是否正确分类。如果发现某个样本被错误分类（即 $y_i(\hat{w}^\top x_i + \hat{b}) \leq 0$），它会更新权重 $\hat{w}$ 和偏差 $\hat{b}$。
- 如果问题条件说明不存在一组权重向量和偏差可以完全正确地分类所有样本，这意味着至少有一个样本在每次迭代中始终被错误分类。
- 因此，在每次迭代中至少有一个样本会导致权重和偏差更新。这意味着 `converged` 标志永远不会被设置为 `TRUE`。
- 算法将继续迭代直到达到最大迭代次数 `max_iterations`。在这个过程中，它每次都会返回到第5行进行下一次迭代。

**结论:**

算法将重复返回到第 5 行，直到达到设定的最大迭代次数 `max_iterations`。在这种情况下，算法永远不会收敛，因为总会有至少一个样本被错误分类。

:::

**(Q2)** The following code gives the outline for an implementation of the perceptron. However, the fit method for learning the weights and biases has not been implemented yet. Complete the code by implementing the fit following the perceptron learning algorithm described above.

```python
class MyClassicalPerceptronModel(BaseEstimator, ClassifierMixin):
    def __init__(self, max_iterations=1000):
        self.max_iterations = max_iterations
    def fit(self, X, y):
        self.weight = np.zeros(X.shape[1])
        self.bias = 0
        # MISSING PERCEPTRON LEARNING ALGORITHM
        # Return the perceptron model
        return self
    def predict(self, X):
        # multiply features by weight vector
        return np.sign(X@self.weight+self.bias)
```

Next run the code from Section A of `MATH20017_2023_CourseworkPart5TestCode.ipynb` to evaluate the perceptron model MyClassicalPerceptronModel. If your implementation has been successful your test code should produce a similar plot.

::: code-tabs

@tab Code1.0

```python
class MyClassicalPerceptronModel(BaseEstimator, ClassifierMixin):
    def __init__(self, max_iterations=1000):
        self.max_iterations = max_iterations

    def fit(self, X, y):
        self.weight = np.zeros(X.shape[1])
        self.bias = 0
        converged = False
        num_iterations = 0

        while not converged and num_iterations < self.max_iterations:
            converged = True
            for i in range(X.shape[0]):
                if y[i] * (np.dot(self.weight, X[i]) + self.bias) <= 0:
                    self.weight = self.weight + y[i] * X[i]
                    self.bias = self.bias + y[i]
                    converged = False
            num_iterations += 1

        return self

    def predict(self, X):
        return np.sign(np.dot(X, self.weight) + self.bias)
```

@tab Code1.0 注释

```python
# 导入基础估计器和分类混合器，这是创建自定义模型的基本要求
from sklearn.base import BaseEstimator, ClassifierMixin
import numpy as np

# 定义感知机模型类
class MyClassicalPerceptronModel(BaseEstimator, ClassifierMixin):
    def __init__(self, max_iterations=1000):
        # 初始化最大迭代次数
        self.max_iterations = max_iterations

    def fit(self, X, y):
        # 初始化权重为零，权重的长度等于特征数量
        self.weight = np.zeros(X.shape[1])
        # 初始化偏置为零
        self.bias = 0
        # 初始化收敛标志为假
        converged = False
        # 初始化迭代次数计数器
        num_iterations = 0

        # 当未收敛且迭代次数小于最大迭代次数时循环
        while not converged and num_iterations < self.max_iterations:
            # 假设已经收敛，如果发现错误分类则更改为假
            converged = True
            # 遍历数据集中的每个样本
            for i in range(X.shape[0]):
                # 如果样本被错误分类（即 y_i(w^T x_i + b) <= 0）
                if y[i] * (np.dot(self.weight, X[i]) + self.bias) <= 0:
                    # 更新权重
                    self.weight = self.weight + y[i] * X[i]
                    # 更新偏置
                    self.bias = self.bias + y[i]
                    # 将收敛标志设置为假
                    converged = False
            # 迭代次数加一
            num_iterations += 1

        # 返回训练好的模型
        return self

    def predict(self, X):
        # 对新的数据集进行预测，即计算 w^T x + b 并取符号
        return np.sign(np.dot(X, self.weight) + self.bias)
```

@tab 测试代码

```python
# section A test code

# generate random data
def generate_linearly_seperable_classification_data(num_examples,random_state=0):

    np.random.seed(random_state)

    X=np.random.uniform(0, 1, size=(num_examples,2))
    y=np.sign(X[:,0]+X[:,1]-1)

    return X,y

# plot the decision boundary for a trained model
def plot_decision_boundary(clf, X, y, cmap='Paired_r',
    bandwidth=0.01,size=4,linewidth=0.25,alpha=0.25):

    # adapted from similar function by Richard Johansson

    a_min, a_max = X[:,0].min() - 10*bandwidth, X[:,0].max() + 10*bandwidth
    b_min, b_max = X[:,1].min() - 10*bandwidth, X[:,1].max() + 10*bandwidth
    aa, bb = np.meshgrid(np.arange(a_min, a_max, bandwidth),
                         np.arange(b_min, b_max, bandwidth))
    Z = clf.predict(np.c_[aa.ravel(), bb.ravel()])
    Z = Z.reshape(aa.shape)

    plt.figure(figsize=(size,size))
    plt.contourf(aa, bb, Z, cmap=cmap, alpha=alpha)
    plt.contour(aa, bb, Z, colors='k', linewidths=linewidth)
    plt.scatter(X[:,0], X[:,1], c=y, cmap=cmap, edgecolors='k')
    plt.show()

# Test the pereceptron model
data_set = generate_linearly_seperable_classification_data(30)

X, y = data_set

perceptron_model=MyClassicalPerceptronModel()
perceptron_model.fit(X,y)

plot_decision_boundary(perceptron_model, X, y)
```

:::

![img](data:image/png;base64,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)

## Section B (20 marks)

In this section we continue our investigation into binary classification. As in the previous section we suppose we have a data set $\mathcal{D}=((x_1,y_1),\dots,(x_n,y_n))$ consisting of feature vectors $x_i \in \mathbb{R}^d$ and binary labels $y_i \in \{−1,+1\}$.Let’s suppose our goal is to learn a classification rule for a linear model of the form $\hat{\phi}_{\hat{w},\hat{b}}(x):=\text{sign}(\langle \hat{w}, x \rangle + \hat{b})$. 

A more practical approach is to minimise a regularised loss function such as the logistic loss $\ell_{\text{Log}} : \mathbb{R} \rightarrow \mathbb{R}$  is defined by $\ell_{\text{Log}}(s) := \log(1 + e^{-s})$ .

We select weights $\hat{w} \in \mathbb{R}^d$ and a bias $\hat{b}\in \mathbb{R}$ to minimise the empirical average of the regularised loss function over the training data,
$$
(\hat{w}, \hat{b}) := \text{argmin}_{(w,b) \in \mathbb{R}^d \times \mathbb{R}} \left\{ \frac{1}{n} \sum_{i=1}^n \ell_{\text{Log}} \left( y_i \left( \langle w, x_i \rangle + b \right) \right) + \lambda \cdot \| w \|^2 \right\}
$$
Recall that given a convex function $f : \mathbb{R}^d \rightarrow \mathbb{R}$ and a vector $w \in \mathbb{R}^d$ , we say that $v \in \mathbb{R}^d$ is a {sub-gradient} of $f$ at $w$ if for all $u \in \mathbb{R}^d$ we have,
$$
f(u) \geq f(w) + \langle u - w, v \rangle .
$$
**(Q1)** Take $i \in \{1,\dots,n\}$ and consider the function $g_i:\mathbb{R}^d \rightarrow \mathbb{R} $ defined by $g_i(w) := \ell_{\text{Log}}(y_i \langle w, x_i \rangle + b)$ . Give a formula for a sub-gradient of $g_i$ at $w \in \mathbb{R}^d$

**(Q2)** Complete the following code to give an implementation of a regularised logistic regression model trained via gradient descent before testing your implementation on the code below. You may wish to use the Py-Torch functions `torch.mean`, `torch.log` and `torch.exp`. In addition, it may be useful to look at the Python `IntroductionToGradientDescent.ipynb` in Blackboard.

```python
class MyLogRegModel(BaseEstimator,ClassifierMixin):
    def __init__(self, weight_decay=0.1, num_iterations=1000, learning_rate=1, random_state=0):
        # initialise parameters
        self.weight_decay = weight_decay
        self.num_iterations = num_iterations
        self.learning_rate = learning_rate
        self.random_state = random_state
        
    def fit(self, X, y):
        num_examples, num_features = X.shape
        # set random seed for reproducibility
        np.random.seed(self.random_state)
        # generate random weight and bias
        w = np.random.normal(size=num_features)
        b = np.random.uniform(1)
        # convert weight and bias to torch tensor for gradient computation
        w = torch.tensor(w,requires_grad=True)
        b = torch.tensor(b,requires_grad=True)
        
        # convert data to torch tensor format
        X = torch.tensor(X)
        y = torch.tensor(y)
        
        # start gradient descent
        for i in range(self.num_iterations):
            ### IMPORTANT DETAILS MISSING HERE
            # zero out gradients ready for the next iteration
            w.grad.detach()
            b.grad.detach()
            w.grad.zero_()
            b.grad.zero_()
        self.weight = w.detach().numpy()
        self.bias = b.detach().numpy()
        # Return the logistic regression model
        return self
    def predict(self, X):
        # multiply features by weight vector
        return np.sign(X@self.weight+self.bias)
```

Next use the code from Section B from `MATH20017_2023_CourseworkPart5TestCode.ipynb` to test the your implementation of logistic regression.

**Q1:**
$$
\frac{\partial}{\partial w} g_i(w) = \frac{-y_i x_i e^{-y_i(\langle w, x_i \rangle + b)}}{1 + e^{-y_i(\langle w, x_i \rangle + b)}}
$$
**Q2:**

::: code-tabs

@tab Code1-版本1

```python
class MyLogRegModel(BaseEstimator, ClassifierMixin):
    def __init__(self, weight_decay=0.1, num_iterations=1000, learning_rate=1, random_state=0):
        # initialise parameters
        self.weight_decay = weight_decay
        self.num_iterations = num_iterations
        self.learning_rate = learning_rate
        self.random_state = random_state
        
    def fit(self, X, y):
        num_examples, num_features = X.shape
        # set random seed for reproducibility
        np.random.seed(self.random_state)
        # generate random weight and bias
        w = np.random.normal(size=num_features)
        b = np.random.uniform(1)
        # convert weight and bias to torch tensor for gradient computation
        w = torch.tensor(w,requires_grad=True)
        b = torch.tensor(b,requires_grad=True)
        
        # convert data to torch tensor format
        X = torch.tensor(X)
        y = torch.tensor(y)
        
        # start gradient descent
        for i in range(self.num_iterations):
            ### IMPORTANT DETAILS MISSING HERE
            predictions = torch.matmul(X, w) + b
            loss = torch.mean(torch.log(1 + torch.exp(-y * predictions))) + self.weight_decay * torch.sum(w**2)
            loss.backward()
            w.data -= self.learning_rate * w.grad.data
            b.data -= self.learning_rate * b.grad.data
            # zero out gradients ready for the next iteration
            w.grad.detach()
            b.grad.detach()
            w.grad.zero_()
            b.grad.zero_()
        self.weight = w.detach().numpy()
        self.bias = b.detach().numpy()
        # Return the logistic regression model
        return self
    def predict(self, X):
        # multiply features by weight vector
        return np.sign(X@self.weight+self.bias)
```

@tab Code2-版本2

```python
class MyLogRegModel(BaseEstimator, ClassifierMixin):
    def __init__(self, weight_decay=0.1, num_iterations=1000, learning_rate=1, random_state=0):
        self.weight_decay = weight_decay
        self.num_iterations = num_iterations
        self.learning_rate = learning_rate
        self.random_state = random_state

    def fit(self, X, y):
        num_examples, num_features = X.shape
        np.random.seed(self.random_state)
        w = np.random.normal(size=num_features)
        b = np.random.uniform(1)

        w = torch.tensor(w, requires_grad=True)
        b = torch.tensor(b, requires_grad=True)

        X = torch.tensor(X)
        y = torch.tensor(y)

        for i in range(self.num_iterations):
            logits = torch.matmul(X, w) + b
            loss = torch.mean(torch.log(1 + torch.exp(-y * logits))) + self.weight_decay * torch.norm(w)**2
            loss.backward()

            with torch.no_grad():
                w -= self.learning_rate * w.grad
                b -= self.learning_rate * b.grad

            w.grad.zero_()
            b.grad.zero_()

        self.weight = w.detach().numpy()
        self.bias = b.detach().numpy()
        return self

    def predict(self, X):
        return np.sign(np.dot(X, self.weight) + self.bias)
```

@tab 版本1-注释

```python
class MyLogRegModel(BaseEstimator, ClassifierMixin):
    def __init__(self, weight_decay=0.1, num_iterations=1000, learning_rate=1, random_state=0):
        # 初始化参数：正则化系数（权重衰减）、迭代次数、学习速率和随机种子。
        self.weight_decay = weight_decay
        self.num_iterations = num_iterations
        self.learning_rate = learning_rate
        self.random_state = random_state
        
    def fit(self, X, y):
        num_examples, num_features = X.shape  # 获取数据的样本数和特征数。
        np.random.seed(self.random_state)  # 设置随机种子以确保结果可重复。
        w = np.random.normal(size=num_features)  # 随机初始化权重。
        b = np.random.uniform(1)  # 随机初始化偏置。
        w = torch.tensor(w, requires_grad=True)  # 将权重转换为 torch 张量并设置梯度。
        b = torch.tensor(b, requires_grad=True)  # 将偏置转换为 torch 张量并设置梯度。
        
        X = torch.tensor(X)  # 将特征数据转换为 torch 张量。
        y = torch.tensor(y)  # 将标签转换为 torch 张量。
        
        for i in range(self.num_iterations):  # 开始梯度下降迭代。
            predictions = torch.matmul(X, w) + b  # 计算当前权重和偏置下的预测值。
            loss = torch.mean(torch.log(1 + torch.exp(-y * predictions))) + self.weight_decay * torch.sum(w**2)  # 计算损失函数值。
            loss.backward()  # 进行反向传播，计算梯度。
            w.data -= self.learning_rate * w.grad.data  # 更新权重。
            b.data -= self.learning_rate * b.grad.data  # 更新偏置。
            w.grad.detach()  # 重置权重的梯度。
            b.grad.detach()  # 重置偏置的梯度。
            w.grad.zero_()  # 清零权重的梯度。
            b.grad.zero_()  # 清零偏置的梯度。
        
        self.weight = w.detach().numpy()  # 将训练好的权重转换回 numpy 数组。
        self.bias = b.detach().numpy()  # 将训练好的偏置转换回 numpy 数组。
        return self  # 返回训练好的模型。
    
    def predict(self, X):
        # 使用训练好的权重和偏置进行预测。
        return np.sign(X @ self.weight + self.bias)
```

:::





## Section C (20 marks)

In this section we focus on high-dimensional regression. We have a centered data set $\mathcal{D}=((x_1, y_1),\dots,(x_n,y_n))$ consisting of feature vectors $x_i \in \mathbb{R}^d$ and real-valued labels $y_i \in \mathbb{R}$ . Let’s write $X=(x_1,\dots,x_n)^\top \in \mathbb{R}^{n \times d}$  for the $n \times d$ data matrix with rows equal to the transposed feature vectors. We also writee $I_d$ for the $d \times d$ identity matrix. In this section we shall investigate the ridge regression model ${\phi_{\hat{w}}}_\text{Ridge}^\lambda : \mathbb{R}^d \rightarrow \mathbb{R}$ defined by ${\phi_{\hat{w}}}_\text{Ridge}^\lambda(x) =\langle \hat{w}^\lambda_{\text{Ridge}}, x \rangle$ for all $x \in \mathbb{R}^d$ ,where ${\hat{w}}_\text{Ridge}^\lambda:=(X^\top X+\lambda \cdot I_d)^{-1}X^\top y$.

**(Q1)** Suppose that $X$ has rank $r$ and let $v_1,\dots,v_r \in \mathbb{R}^d$ be the right singular vectors of $X, \sigma_1, \ldots, \sigma_r \in \mathbb{R}$ the singular values of $X$ and $v_1,\dots,v_r$ the left singular vectors of $X$ . Prove that for any $\lambda > 0$, the ridge regression weight vector defined by ${\hat{w}}_\text{Ridge}^\lambda:=(X^\top X+\lambda \cdot I_d)^{-1}X^\top y$ can be rewritten as ${\hat{w}}_\text{Ridge}^\lambda=\sum_{\ell=1}^{r} \frac{\sigma_\ell}{\sigma_\ell^2 + \lambda} \cdot \langle u_\ell, y \rangle \cdot v_\ell$.

You can use the following facts without proof. However, you must state when you use each fact.

1. We can write $X = \sum_{\ell=1}^{r} \sigma_\ell u_\ell v_\ell^\top$

2. The right singular vectors $v_1,\dots,v_r \in \mathbb{R}^d$ are orthonormal.
3. The left singular vectors $u_1,\dots,u_r \in \mathbb{R}^n$ are orthonormal.
4. We can extend $\{v_1,...,v_r\}$ to form an orthonormal basis $\{v_1,\dots,v_d\}$ of $\mathbb{R}^d$.
5. Given an orthonormal basis $\{v_1,\dots,v_d\}$ of $\mathbb{R}^d$ and strictly positive scalars $\alpha_1 > 0, \alpha_2 > 0, \ldots, \alpha_d > 0,$ the symmetric matrix $M = \sum_{\ell=1}^{d} \alpha_\ell v_\ell v_\ell^\top$ has inverse $M^{-1} = \sum_{\ell=1}^{d} \alpha_\ell^{-1} v_\ell v_\ell^\top$.
6. Given an orthonormal basis $\{v_1,\dots,v_d\}$ of $\mathbb{R}^d$, we can write the identity matrix $I_d$ as $I_d = \sum_{\ell=1}^{d} v_\ell v_\ell^\top$ .

We can efficiently compute the truncated singular value decomposition within Python by using the `randomized_svd` function from the sklearn library. We apply `randomized_svd` as follows.

```python
U_k, Sigma_k, V_k_T = randomized_svd(X, n_components=5, random_state=0)
```

Here, X is the data matrix, `n_components` corresponds to the number of right singular vectors $k$, and the `random_state` argument is useful for reproducibility. The function returns `U_k` which is an $n \times k$ NumPy array corresponding to $U_k=(u_1,\dots,u_k) \in \mathbb{R}^{n \times k}$,`Sigma_k` which is a length $k$ NumPy array corresponding to the vector of singular values $(\sigma_1,\dots,\sigma_k)^\top \in \mathbb{R}^k$, and `V_k_T` which corresponds to the transpose of the matrix $V_k=(v_1,\dots,v_k) \in \mathbb{R}^{d \times k}$ 

---

需要证明岭回归权重向量可以改写为 ${\hat{w}}_\text{Ridge}^\lambda=\sum_{\ell=1}^{r} \frac{\sigma_\ell}{\sigma_\ell^2 + \lambda} \cdot \langle u_\ell, y \rangle \cdot v_\ell$。

首先，从岭回归权重向量的定义出发，${\hat{w}}_\text{Ridge}^\lambda:=(X^\top X+\lambda \cdot I_d)^{-1}X^\top y$。

使用给定的事实：

1. $X = \sum_{\ell=1}^{r} \sigma_\ell u_\ell v_\ell^\top$
2. $v_1,\dots,v_r$ 是 $\mathbb{R}^d$ 中的正交向量。
3. $u_1,\dots,u_r$ 是 $\mathbb{R}^n$ 中的正交向量。
4. 可以将 $\{v_1,...,v_r\}$ 扩展为 $\mathbb{R}^d$ 的正交基 $\{v_1,\dots,v_d\}$。
5. 给定 $\mathbb{R}^d$ 中的正交基 $\{v_1,\dots,v_d\}$ 和严格正的标量 $\alpha_1 > 0, \alpha_2 > 0, \ldots, \alpha_d > 0$，对称矩阵 $M = \sum_{\ell=1}^{d} \alpha_\ell v_\ell v_\ell^\top$ 有逆 $M^{-1} = \sum_{\ell=1}^{d} \alpha_\ell^{-1} v_\ell v_\ell^\top$。
6. 给定 $\mathbb{R}^d$ 中的正交基 $\{v_1,\dots,v_d\}$，可以将身份矩阵 $I_d$ 写作 $I_d = \sum_{\ell=1}^{d} v_\ell v_\ell^\top$。

基于这些事实，可以推导出：
$$
\begin{aligned}
{\hat{w}}_\text{Ridge}^\lambda &= (X^\top X+\lambda \cdot I_d)^{-1}X^\top y \\
&= \left(\left(\sum_{\ell=1}^{r} \sigma_\ell v_\ell u_\ell^\top\right)^\top \left(\sum_{\ell=1}^{r} \sigma_\ell v_\ell u_\ell^\top\right) + \lambda \cdot \sum_{\ell=1}^{d} v_\ell v_\ell^\top\right)^{-1}\left(\sum_{\ell=1}^{r} \sigma_\ell v_\ell u_\ell^\top\right)^\top y \\
&= \left(\sum_{\ell=1}^{r} \sigma_\ell^2 v_\ell v_\ell^\top + \lambda \cdot \sum_{\ell=1}^{d} v_\ell v_\ell^\top\right)^{-1}\left(\sum_{\ell=1}^{r} \sigma_\ell u_\ell v_\ell^\top\right) y \\
&= \sum_{\ell=1}^{d} \frac{1}{\sigma_\ell^2 + \lambda} v_\ell v_\ell^\top \left(\sum_{\ell=1}^{r} \sigma_\ell u_\ell v_\ell^\top\right) y \\
&= \sum_{\ell=1}^{r} \frac{\sigma_\ell}{\sigma_\ell^2 + \lambda} \cdot \langle u_\ell, y \rangle \cdot v_\ell
\end{aligned}
$$




**(Q2)** The following code gives an implementation of the ridge regression model. However, there is an important detail missing. Copy and edit the code to include the computation of the ridge weight vector. Notice that the key hyper-parameter for the ridge regression model is the hyper-parameter $\lambda$ which in the following model is represented by the attribute `self.weight_decay`. For simplicity, you may assume that the rank of the $n \times d$ data matrix is $min\{d,n\}$,so that ${\hat{w}}_\text{Ridge}^\lambda=\sum_{\ell=1}^{\min\{d, n\}} \frac{\sigma_{\ell}}{\sigma_{\ell}^2 + \lambda} \cdot \langle u_{\ell}, y \rangle \cdot v_{\ell}$.

```python
class MyRidgeRegressionModel(BaseEstimator, RegressorMixin):
    def __init__(self, weight_decay, random_state=0):
        self.weight_decay = weight_decay
        self.random_state = random_state
    def fit(self, X, y):
        # compute singular value decomposition
        U, Sigma, VT = randomized_svd(X, n_components=X.shape[1], random_state=self.random_state)
        
        # compute weight vector
        self.weight_vector= # IMPORTANT DETAILS MISSING HERE
        # compute bias term
        self.bias = np.mean(y-X@self.weight_vector)
        # Return the regression model
        return self
    def predict(self, X):
        # multiply features by weight vector
        return X@self.weight_vector+self.bias
```

To test the ride regression model code MyRidgeRegressionModel explore how it works across a range of values of the hyper-parameter $\lambda$ by applying the test code in Section C from `MATH20017_2023_CourseworkPart5TestCode.ipynb`.

---

::: code-tabs

@tab Code1-1.0

```python
class MyRidgeRegressionModel(BaseEstimator, RegressorMixin):
    def __init__(self, weight_decay, random_state=0):
        self.weight_decay = weight_decay
        self.random_state = random_state
    def fit(self, X, y):
        # compute singular value decomposition
        U, Sigma, VT = randomized_svd(X, n_components=X.shape[1], random_state=self.random_state)
#         U, Sigma, VT = randomized_svd(X, n_components=min(X.shape), random_state=self.random_state)
        
        # compute weight vector
#         self.weight_vector= # IMPORTANT DETAILS MISSING HERE
        self.weight_vector = np.sum((Sigma / (Sigma**2 + self.weight_decay)) * U.T.dot(y)[:, np.newaxis] * VT, axis=1)
        # compute bias term
        self.bias = np.mean(y-X@self.weight_vector)
        # Return the regression model
        return self
    def predict(self, X):
        # multiply features by weight vector
        return X@self.weight_vector+self.bias
```

@tab Code2-1.0

```python
class MyRidgeRegressionModel(BaseEstimator, RegressorMixin):
    def __init__(self, weight_decay, random_state=0):
        self.weight_decay = weight_decay
        self.random_state = random_state

    def fit(self, X, y):
        # 计算奇异值分解
        U, Sigma, VT = randomized_svd(X, n_components=min(X.shape), random_state=self.random_state)
        
        # 计算权重向量
        self.weight_vector = np.sum((Sigma / (Sigma**2 + self.weight_decay)) * U.T.dot(y)[:, np.newaxis] * VT, axis=1)

        # 计算偏置项
        self.bias = np.mean(y - X.dot(self.weight_vector))

        # 返回回归模型
        return self

    def predict(self, X):
        # 使用权重向量乘以特征
        return X.dot(self.weight_vector) + self.bias
```

@tab Code3-2.0

```python
class MyRidgeRegressionModel(BaseEstimator, RegressorMixin):
    def __init__(self, weight_decay, random_state=0):
        self.weight_decay = weight_decay
        self.random_state = random_state

    def fit(self, X, y):
        U, Sigma, VT = randomized_svd(X, n_components=X.shape[1], random_state=self.random_state)
        self.weight_vector = np.dot(VT.T, np.dot(np.diag(Sigma / (Sigma ** 2 + self.weight_decay)), np.dot(U.T, y)))
        
        self.bias = np.mean(y - np.dot(X, self.weight_vector))
        return self

    def predict(self, X):
        return np.dot(X, self.weight_vector) + self.bias
```

:::





## Section D (40 marks)

In the previous section we used the `randomized_svd` function from the sklearn library to computed an ap-proximate truncated singular value decomposition. In this section your goal is to create your own function for computing an approximate truncated singular value decomposition.

More precisely, create a Python function called `singular_value_decomposition_from_data_matrix`. Your function should take four arguments as inputs:

1. A NumPy array called `data_matrix` corresponding to the matrix whose truncated SVD we wish to compute;
2. An integer called `n_components` corresponding to the number of right singular vectors, singular values and left singular vectors we wish to compute;
3. An integer called `n_iter` corresponding to the number of power iterations applied by the algorithm;
4. An integer called `random_state` corresponding to the random seed set within the algorithm.

Let’s write $n$ for the number of rows of `data_matrix`, $d$ the number of columns in the data matrix (denoted data_matrix) and let $k$ be the number of components given by `n_components`. The function `singular_value_decomposition_from_data_matrix` will output a triple of the form `U`, `Sigma`, `V_T` where:

1. A NumPy array called U which is a $n \times k$ matrix corresponding to the top left singular vectors of the data matrix;
2. A NumPy array called Sigma of length $k$ containing the first $k$ non-negative singular values of the data matrix;
3. A NumPy array called `V_T` which is a $k \times d$ matrix corresponding to the matrix whose rows are the top right singular vectors of the data matrix.

Note that for you should avoid applying NumPy’s inbuilt functionality for computing matrix decompositions.

You may wish to use the following outline as a starting point.

```python
def singular_value_decomposition_from_data_matrix(data_matrix:np.array, n_components: int, n_iter = 10, random_state=0):
    pass
    ### Missing details here
    return U, Sigma, V_T
```

Next, apply the test code in Section D from `MATH20017_2023_CourseworkPart5TestCode.ipynb`.

::: code-tabs

@tab Code1

```python
from numpy.linalg import qr
def singular_value_decomposition_from_data_matrix(data_matrix, n_components, n_iter=10, random_state=0):
    np.random.seed(random_state)
    n_rows, n_cols = data_matrix.shape

    # Step 1: Generate a random Gaussian matrix omega
    omega = np.random.normal(size=(n_cols, n_components))

    # Step 2: Compute Y = data_matrix @ omega
    Y = data_matrix @ omega

    # Additional power iterations (optional)
    for _ in range(n_iter):
        Y = data_matrix @ (data_matrix.T @ Y)

    # Step 3: QR decomposition of Y to get Q
    Q, _ = qr(Y, mode='reduced')

    # Step 4: Compute B = Q.T @ data_matrix
    B = Q.T @ data_matrix

    # Step 5: SVD of B
    U_hat, Sigma, V_T = np.linalg.svd(B, full_matrices=False)

    # Step 6: Compute U = Q @ U_hat
    U = Q @ U_hat

    # Select only the top n_components
    return U[:, :n_components], Sigma[:n_components], V_T[:n_components, :]
```

@tab Code2

```python
def singular_value_decomposition_from_data_matrix(data_matrix, n_components, n_iter=10, random_state=0):
    # 设定随机数生成器的种子，确保结果的可重复性
    np.random.seed(random_state)
    
    # 获取数据矩阵的行数和列数
    n, d = data_matrix.shape

    # 初始化U矩阵，其大小为n行n_components列，初始值为0
    U = np.zeros((n, n_components))

    # 随机初始化V_T矩阵，其大小为n_components行d列
    V_T = np.random.randn(n_components, d)

    # 进行n_components次迭代，分别计算每个奇异向量
    for i in range(n_components):
        # 选取V_T的第i行作为初始向量
        v = V_T[i, :]

        # 执行指定次数的幂迭代过程
        for _ in range(n_iter):
            # 计算U的一个列向量
            u = np.dot(data_matrix, v)
            # 归一化u向量
            u = u / np.linalg.norm(u)

            # 计算V的一个行向量
            v = np.dot(data_matrix.T, u)
            # 归一化v向量
            v = v / np.linalg.norm(v)

        # 更新U和V_T矩阵
        U[:, i] = u
        V_T[i, :] = v

    # 计算Sigma向量，包含n_components个奇异值
    Sigma = np.array([np.linalg.norm(np.dot(data_matrix, V_T[i, :])) for i in range(n_components)])

    # 返回计算得到的U矩阵、Sigma向量和V_T矩阵
    return U, Sigma, V_T
```

@tab Code3-over

```python
from numpy.linalg import qr
def singular_value_decomposition_from_data_matrix(data_matrix: np.array, n_components: int, n_iter=10, random_state=0):
    # 设置随机种子以确保结果的可重复性
    np.random.seed(random_state)
    
    # 获取数据矩阵的行数和列数
    n_rows, n_cols = data_matrix.shape
    
    # 生成一个随机高斯矩阵omega，用于后续的矩阵运算
    omega = np.random.randn(n_cols, n_components)
    
    # 计算Y = data_matrix @ omega
    # 这是随机化SVD的关键步骤，用于生成近似的低维空间
    Y = data_matrix @ omega
    
    # 进行额外的幂迭代以提高近似的准确性
    for _ in range(n_iter):
        # 通过数据矩阵的转置和Y的乘积，以及随后的QR分解，来增强Y的准确度
        Y = data_matrix.T @ Y
        Q, _ = qr(Y, mode='reduced')  # QR分解Y以获得Q矩阵
        Y = data_matrix @ Q
    
    # 对Y进行最终的QR分解，得到Q矩阵
    Q, _ = qr(Y, mode='reduced')
    
    # 计算B = Q.T @ data_matrix
    # 通过这一步将原始数据投影到由Q构成的空间中
    B = Q.T @ data_matrix
    
    # 对B进行SVD分解
    # 这一步骤得到截断SVD的核心分量：U_hat, Sigma, V_T
    U_hat, Sigma, V_T = np.linalg.svd(B, full_matrices=False)
    
    # 计算U = Q @ U_hat
    # 通过这个操作我们得到了原始数据矩阵的左奇异向量
    U = Q @ U_hat
    
    return U, Sigma, V_T
```

@tab Code4

```python
def singular_value_decomposition_from_data_matrix(data_matrix: np.array,
                                                  n_components: int,
                                                  n_iter=10,
                                                  random_state=0):
    np.random.seed(random_state)
    
    n, d = data_matrix.shape
    
    # Initialize random matrices
    Omega = np.random.randn(d, n_components)
    Y = data_matrix @ Omega
    
    # Power iterations
    for _ in range(n_iter):
        Y = data_matrix.T @ Y
        Q, _ = np.linalg.qr(Y)
        Y = data_matrix @ Q
    
    # Compute the thin SVD of the matrix Y
    Q, R = np.linalg.qr(Y, mode='reduced')
    B = Q.T @ data_matrix
    
    # Singular value decomposition of B
    U_B, Sigma, V_T_B = np.linalg.svd(B, full_matrices=False)
    
    # Compute the singular vectors of the original matrix A
    U = Q @ U_B
    V_T = V_T_B
    
    return U, Sigma, V_T
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
