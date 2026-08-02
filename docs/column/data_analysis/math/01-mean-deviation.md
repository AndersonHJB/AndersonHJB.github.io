---
title: 01-平均差「Mean Deviation」
icon: zhuzhuangtu
date: 2022-10-09 22:25:46
author: AI悦创
isOriginal: true
category: 数据分析
tag:
    - 数据分析
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

## 各个数据值离平均值平均有多远

:::

## 怎样计算

先求数据的平均值……接着求距离……最后求距离的平均！

三部曲：

- 一、求所有数据值的[平均值](https://www.shuxuele.com/mean.html)
- 二、求每个数据与平均值的距离（用数据值减去平均值，不理正负号）
- 三、求**这些距离的平均**

像这样：

## 例子：3、6、6、7、8、11、15、16 的 平均差

### 一、求平均：

::: center

平均=$\huge\frac{3 + 6 + 6 + 7 + 8 + 11 + 15 + 16}{8}=\frac{72}{8}=9$ 

:::



### 二、求每个数据只与平均值的距离：

::: center

<img src="https://blog.images.bornforthis.cn/docs-images/sha256/a0/a04b9daa16b925997cf1410e10f56fc471b2478d5c97eef99772bf349c56f8c7.png" alt="image-20221009232139634" style="zoom: 50%;" />

:::

| 值   | 与 9 的距离 |
| ---- | ----------- |
| 3    | 6           |
| 6    | 3           |
| 6    | 3           |
| 7    | 2           |
| 8    | 1           |
| 11   | 2           |
| 15   | 6           |
| 16   | 7           |

像这样：

::: center

![平均差](https://blog.images.bornforthis.cn/docs-images/sha256/5e/5eac8d73fcd818c465645a018f8a56be05e5da2c1eef015dca27517590f68173.svg)

*（没有正负号！）*

:::

### 三、求**这些距离的平均**：

:::center

平均差=$\huge\frac{6 + 3 + 3 + 2 + 1 + 2 + 6 + 7}{8}=\frac{30}{8}=3.75$

:::

所以，**平均值 = 9**，**平均差 = 3.75**

**平均差告诉我们，每个数据值平均离中心有多远。**

**在上面的例子里，数据值平均离中心 3.75 远。**

在这里，**差**就是**距离**

## 公式

公式是：

::: center

平均差 = $\huge\frac{\sum|x−μ|}{N}$

:::

- **Σ** 是 [总和符号](https://www.shuxuele.com/algebra/sigma-notation.html)，意思是加起来
- || （垂直线）的意思是 [绝对值](https://www.shuxuele.com/numbers/absolute-value.html)，就是不要正负号
- **x** 是每个数据值（例如 3 或 16）
- **μ** 是平均（在这例子里，**μ = 9**）
- **N** 是数据点的个数（在这例子里，**N = 8**）

我们详细看看：

## 绝对偏差

在公式里求的每个距离是叫**绝对偏差**，因为它是偏差的[绝对值](https://www.shuxuele.com/numbers/absolute-value.html)（离平均值的距离）

::: center

![绝对偏差](https://blog.images.bornforthis.cn/docs-images/sha256/b4/b4ada050c0ce2ea4dbd53d7d277c503238c2eef3364bed6f46b7570425237486.svg)

:::

我们把 "|" 放在项的两变来代表 "绝对值"：

**|-3| = 3**

为每一个 **x**：

**绝对偏差 = |x - μ|**

在这个例子里，**16** 的 **绝对偏差 = |x - μ| = |16 - 9| = |7| = 7**

现在把它们加起来……

## 总和符号

"加起来" 的符号是 **Σ**（叫[总和符号](https://www.shuxuele.com/algebra/sigma-notation.html))，所以：

::: center

绝对偏差的总和 = Σ|x - μ|

:::

除以数据的个数 **N**，得到：

::: center

平均差 =$\huge\frac{\sum|x−μ|}{N}$

:::

我们再用正确的符号做一次：

## 例子： 3、6、6、7、8、11、15、16 的 平均差

### 一、求平均：

::: center

$\hugeμ=\frac{3+6+6+7+8+11+15+16}{8}=\frac{72}{8}=9$

:::

### 二、求绝对偏差：

::: center

<img src="https://blog.images.bornforthis.cn/docs-images/sha256/2a/2a28f788bd3972612b29cc552a6cb6896c4d8bd0ed6e38a4f1bab0ce19ea5bcd.png" alt="image-20221010084338645" style="zoom:50%;" />

:::

### 三、求平均差：

::: center

平均差 = $\huge\frac{\sum|x-μ|}{N}=\frac{30}{8}=3.75$

:::

> *注意：平均差有时也叫平均绝对偏差（英语 Mean Absolute Deviation (MAD)），因为它是绝对偏差的平均。*

## 平均差的意思是什么？

平均差告诉我们，每个数据值平均离中心有多远。

以下是个例子（用 [标准差](https://www.shuxuele.com/data/standard-deviation.html) 网页里的数据）：

### 例子：你和你的朋友测量了你们的狗的身高（毫米）：

![狗统计图](https://blog.images.bornforthis.cn/docs-images/sha256/46/466d6106bb7356719f902ef806572d4e103560668a68cdff91c96061e6c5678a.gif)

身高（到肩膀）是：600mm、470mm、170mm、430mm 和 300mm。

### 一、求平均：

::: center

$\hugeμ=\frac{600+470+170+430+300}{5}=\frac{1970}{5}=394$

:::

### 二、求绝对偏差：

::: center

<img src="https://blog.images.bornforthis.cn/docs-images/sha256/e0/e026babd77666c8a1c2faca7f952a77bdbc1f66faf9c0a73b5b2b92dee81a78a.png" alt="image-20221010085924952" style="zoom:50%;" />

:::

| x    | \|x - μ\|        |
| ---- | ---------------- |
| 600  | 206              |
| 470  | 76               |
| 170  | 224              |
| 430  | 36               |
| 300  | 94               |
|      | Σ\|x - μ\| = 636 |

### 三、求平均差：

平均差=$\huge\frac{\sum|x-μ|}{N}=\frac{636}{5}=127.2$

所以，狗的身高**与平均值的平均距离是 127.2 mm**。

（可以和 **147 mm** 的[标准差](https://www.shuxuele.com/data/standard-deviation.html)比较一下）

## 检测

在平均值**一边**的偏差应该和**另一边**的偏差是相等的。

上面的例子：

### 例子：3、6、6、7、8、11、15、16

偏差是：

::: center

![平均差](https://blog.images.bornforthis.cn/docs-images/sha256/5e/5eac8d73fcd818c465645a018f8a56be05e5da2c1eef015dca27517590f68173.svg)



6 + 3 + 3 + 2 + 1 = 2 + 6 + 7

15 = 15

:::

同样：

### 例子：狗

平均左边的偏差：224 + 94 = **318**

平均右边的偏差：206 + 76 + 36 = **318**

如果它们不相同……你便是做错了！

## Question

### Question 1

Calculate the mean deviation for the numbers: 75, 83, 96, 100, 121 and 125

A. 14.33

B. 15

C. 15.33

D. 16

#### Q1 Answer

**Step 1** Find the mean:

μ = (75 + 83 + 96 + 100 + 121 + 125) ÷ 6 = 600 ÷ 6 = 100

**Step 2** Find the Absolute Deviations:

![[cached] 0.02598762512207 ms](https://blog.images.bornforthis.cn/docs-images/sha256/8a/8aeca2b89a76c5a7773d00c2c9daf661c2319485d42a27ef7fce023cf4c98081.svg)

**Step 3** Find the Mean Deviation:

![[cached] 0.0061988830566406 ms](https://blog.images.bornforthis.cn/docs-images/sha256/8b/8b2d1a8c3455e29bce16514e51d3a1f464b8ba2f406e25c1821886ed79a0ce00.svg)

### Question 2

Ten friends scored the following marks in their end-of-year math exam: 23%, 37%, 45%, 49%, 56%, 63%, 63%, 70%, 72% and 82%

What was the mean deviation of their marks?

A. 14%

B. 15%

C. 16%

D. 17%

#### Q2 Answer

**Step 1** Find the mean:

μ = (23 + 37 + 45 + 49 + 56 + 63 + 63 + 70 + 72 + 82) ÷ 10 = 560 ÷ 10 = 56%

**Step 2** Find the Absolute Deviations:

![[cached] 0.043869018554688 ms](https://blog.images.bornforthis.cn/docs-images/sha256/b2/b20c5420db7fdc0ba1e692510fcffd3003ceef7edc6351617c69cf42a19fdce0.svg)

**Step 3** Find the Mean Deviation:

![[cached] 0.030040740966797 ms](https://blog.images.bornforthis.cn/docs-images/sha256/75/75e01828d6f41b1af82fb35233b2cb08fbaa5012a702b3c26038028a7448460d.svg)

### Question 3

A booklet has 12 pages with the following numbers of words: 271, 354, 296, 301, 333, 326, 285, 298, 327, 316, 287 and 314

What is the mean deviation of the number of words per page?

A. 18.5

B. 19.33

C. 20

D. 20.17

#### Q3 Answer

**Step 1** Find the mean:

μ = (271 + 354 + 296 + 301 + 333 + 326 + 285 + 298 + 327 + 316 + 287 + 314) ÷ 12
= 3,708 ÷ 12
= 309

**Step 2** Find the Absolute Deviations:

![[cached] 0.045061111450195 ms](https://blog.images.bornforthis.cn/docs-images/sha256/d4/d4c33ae784fd07bb5429d1d31099916e09a0c6096e61943d1ff821209c810ec0.svg)

**Step 3** Find the Mean Deviation:

![[cached] 0.010013580322266 ms](https://blog.images.bornforthis.cn/docs-images/sha256/6b/6b40f70349c968ae17375a50218cf75a36d3be4f4ce34c15aa25411712c1176e.svg)

### Question 4

What is the mean deviation of the first 10 numbers of the Fibonacci sequence?

A. 8.8

B. 8.5

C. 8.42

D. 8.32

#### Q4 Answer

The first 10 numbers of the Fibonacci sequence are: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

**Step 1** Find the mean:

μ = (0 + 1 + 1 + 2 + 3 + 5 + 8 + 13 + 21 + 34) ÷ 10 = 88 ÷ 10 = 8.8

**Step 2** Find the Absolute Deviations:

![[cached] 0.060796737670898 ms](https://blog.images.bornforthis.cn/docs-images/sha256/fe/fe7920ad95f3eb0fa3bccfc6dcd06f54204e5a0f5941c4cfdc7a8f7975d79092.svg)

**Step 3** Find the Mean Deviation:

![[cached] 0.016927719116211 ms](https://blog.images.bornforthis.cn/docs-images/sha256/ec/ece5e896e7a04771a87d08bdb6c9d62ea3c5a018d93f5b19588295942e4c7e10.svg)

### Question 5

The Lakers scored the following numbers of goals in their last twenty matches: 3, 0, 1, 5, 4, 3, 2, 6, 4, 2, 3, 3, 0, 7, 1, 1, 2, 3, 4, 6

Calculate the Mean Deviation.

A. 1.5

B. 2

C. 2.5

D. 3

#### Q5 Answer

**Method 1**

**Step 1** Find the mean:

μ = (3 + 0 + 1 + 5 + 4 + 3 + 2 + 6 + 4 + 2 + 3 + 3 + 0 + 7 + 1 + 1 + 2 + 3 + 4 + 6) ÷ 20
= 60 ÷ 20
= 3

**Step 2** Find the Absolute Deviations:

![[cached] 0.056028366088867 ms](https://blog.images.bornforthis.cn/docs-images/sha256/9c/9cc5147d524a63d79c0770f6a9ae698c76eb86a7c9dea4fab1079672b56ac511.svg)

**Step 3** Find the Mean Deviation:

![[cached] 0.011920928955078 ms](https://blog.images.bornforthis.cn/docs-images/sha256/2d/2d0ad63e1ef884c97935ba8e6a61a5122ce3de00317325b314041a1951a8991b.svg)

**Method 2**
This can be done much more neatly using tables, as follows:

First complete a frequency table:

![[cached] 0.010967254638672 ms](https://blog.images.bornforthis.cn/docs-images/sha256/4a/4ae57d3402da74080620a686af7d101e9612f22c83c5d97f628306daee3bcda7.svg)

Then calculate the mean and mean deviation from the following table:

![[cached] 0.010967254638672 ms](https://blog.images.bornforthis.cn/docs-images/sha256/9e/9eb6ad5b4e12084d29b78aa7b5f9949b6c3071aba5ef63a53b287c18e6c24e24.svg)

### Question 6

Ramiro did a survey of the number of pets owned by his classmates, with the following results:

![[image]](https://blog.images.bornforthis.cn/docs-images/sha256/45/45141d67a562104b421eb387c5caf3861ae31961cd3c5430eddaef07aa836e86.jpg)

What was the mean deviation of the number of pets?

A. 1.02

B. 1.053

C. 1.087

D. 1.12

#### Q6 Answer

Calculate the mean and mean deviation from the following table:

![[cached] 0.063896179199219 ms](https://blog.images.bornforthis.cn/docs-images/sha256/d5/d510ffbaf9309dd643ac28d90d8d27e5acbdfa78efe3775188db35ac053aca4e.svg)

### Question 7

Emma rolled a die a number of times and recorded her results in a bar graph, as follows:
![[image]](https://blog.images.bornforthis.cn/docs-images/sha256/c4/c476812dd7a9e9a56ad8e6df137d42e6ef9c341e5521bcd77db61c03c62558a9.gif)

What was the mean deviation of the scores?

A. 1.375

B. 1.5

C. 1.625

D. 1.875

#### Q7 Answer

First complete a frequency table:

![[cached] 0.063896179199219 ms](https://blog.images.bornforthis.cn/docs-images/sha256/33/339554ab82cc70cf2a59afa7439d3a72f71f3c89ce260bb0a08348dae50dfdf7.svg)

Then calculate the mean and mean deviation from the following table:

![[cached] 0.016927719116211 ms](https://blog.images.bornforthis.cn/docs-images/sha256/b2/b225b9c0bd7cab76ab76d7d6a3120e34056ed37d7099a68dee4f58368137cb7a.svg)

### Question 8

Rachel rolled a die forty five times with the following results:

![[image]](https://blog.images.bornforthis.cn/docs-images/sha256/71/71c0824be0e62a612b9df1549ff1328d7480253eae4710c55dd12ca2ce94f696.jpg)

What was the mean deviation of her scores?

A. 1.564

B. 1.609

C. 1.64

D. 1.653

#### Q8 Answer

Calculate the mean and mean deviation from the following table:

![[cached] 0.051975250244141 ms](https://blog.images.bornforthis.cn/docs-images/sha256/da/daf376fd27b569f321666a5a0bad98dff3a2ace8f8417da95ea5eafbf493d2e2.svg)

### Question 9

A spinner is in the shape of a regular heptagon marked with the numbers 1 to 7.

Theodore spun the spinner 50 times and recorded his results in a table, as follows:

![[image]](https://blog.images.bornforthis.cn/docs-images/sha256/60/605de805257657932024b4d9c678f9ec5128113392ba6bdf220873428c01a1ee.jpg)

Calculate the mean deviation of the scores.

A. 1.6088

B. 1.7288

C. 1.7688

D. 1.8088

#### Q9 Answer

Calculate the mean and mean deviation from the following table:

![[cached] 0.063180923461914 ms](https://blog.images.bornforthis.cn/docs-images/sha256/a7/a7bff99055130b52ec48abea651faa77fb90569df5bbf94df1157ea5d85fe54f.svg)

### Question 10

The children in a class did a survey of the number of siblings (brothers and sisters) each of them had. The results are recorded in the following table:

![[image]](https://blog.images.bornforthis.cn/docs-images/sha256/76/767c860387f21932d8828df2749a7749434fd5d883e156f135039c37d68ecb64.jpg)

Calculate the mean deviation of the number of siblings.

A. 1.38

B. 1.41

C. 1.45

D. 1.48

#### Q10 Answer

Calculate the mean and mean deviation from the following table:

![[cached] 0.046014785766602 ms](https://blog.images.bornforthis.cn/docs-images/sha256/cf/cfbc2ad72e5b2aed36dc34cc39af5aa8ae27e3c9d7aa6c816347f4d06f880dd0.svg)





## 期待你和我一起，用数据解析世界

欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！

::: details 公众号：AI悦创【二维码】

![](https://blog.images.bornforthis.cn/docs-images/sha256/77/77f67d48a67ec6a44a4ef1f01ffc85830eb3c121b1ece45dc5ada06e20e2f52b.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、小学数学一对一教学」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](https://blog.images.bornforthis.cn/docs-images/sha256/30/3087c629da73428daa0ee050f5b31709c30f650686164b54c724b892a422c585.jpg)
