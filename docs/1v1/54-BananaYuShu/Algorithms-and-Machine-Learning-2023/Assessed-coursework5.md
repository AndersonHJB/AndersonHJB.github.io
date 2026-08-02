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
comment: true

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

![](https://blog.images.bornforthis.cn/docs-images/sha256/96/9631c1748111f906625414a9f7d38565eb73914dce01484116976b8a50eb883e.png)

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

![](https://blog.images.bornforthis.cn/docs-images/sha256/77/77f67d48a67ec6a44a4ef1f01ffc85830eb3c121b1ece45dc5ada06e20e2f52b.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Web、Linux」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](https://blog.images.bornforthis.cn/docs-images/sha256/30/3087c629da73428daa0ee050f5b31709c30f650686164b54c724b892a422c585.jpg)
