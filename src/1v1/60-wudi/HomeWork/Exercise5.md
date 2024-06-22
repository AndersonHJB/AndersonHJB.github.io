---
title: Exercise 5 LSE Home MA407
icon: python
date: 2023-11-02 22:46:34
author: AI悦创
isOriginal: true
category: 
    - python 1v1
    - 数据结构一对一
    - 留学生辅导
    - 留学生作业辅导
tag:
    - 伦敦政经
    - LSE Home
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

Please submit the solutions to these questions via Gradescope in a PDF file.

## Exercise 5.1.

(a)  Give an example showing that the implementation of the QuickSort algorithm discussed in the lecture is not stable.

(b)  Suppose you can use additional space. Explain how the Partition procedure can be modified so that QuickSort becomes stable.

(c)  Implement the proposed Partition procedure in Python.

(a) 考虑数组 $[4a, 3, 2, 4b]$，其中有两个值相等的元素 $4a$ 和 $4b$。使用快速排序算法，并选择最后一个元素作为基准，排序后可能得到 $[2, 3, 4b, 4a]$，这里 $4a$ 和 $4b$ 的顺序发生了变化，这证明了快速排序是不稳定的。

(b) 为了使快速排序稳定，我们可以修改分区过程，使用额外的空间来保持相同元素的相对顺序不变。在分区过程中，我们可以创建两个临时列表：一个用于存放小于等于基准值的元素，另一个用于存放大于基准值的元素。在这两个列表中，元素应保持它们在原始数组中的顺序。分区完成后，将这两个列表中的元素按顺序复制回原始数组。

```python
def stable_partition(arr, low, high):
    pivot = arr[high][1]  # 选择元组的第二个元素作为基准值
    less = [x for x in arr[low:high] if x[1] < pivot]
    equal = [x for x in arr[low:high+1] if x[1] == pivot]
    greater = [x for x in arr[low:high] if x[1] > pivot]
    arr[low:low+len(less)] = less
    arr[low+len(less):low+len(less)+len(equal)] = equal
    arr[low+len(less)+len(equal):high+1] = greater
    return low + len(less), low + len(less) + len(equal) - 1

def quicksort(arr, low, high):
    if low < high:
        start, end = stable_partition(arr, low, high)
        quicksort(arr, low, start - 1)
        quicksort(arr, end + 1, high)
```

这段代码中的 `stable_partition` 函数进行了改进，以保持排序的稳定性。然后 `quicksort` 函数使用这个稳定的分区过程来实现稳定的快速排序。



## Exercise 5.2.

Consider the variant of QuickSort that we discussed in the lecture, in which the Partition procedure picks the last element as pivot.

(a)  Draw the decision tree for inputs A of length $\lvert A \rvert = 3$.

(b)  Over all inputs A of length $\lvert A \rvert = 3$, what is the maximum number of comparisons QuickSort needs to carry out to determine the output?

(c)  Give an example input that achieves that maximum number.

(d)  How many reachable leaves are in the decision tree for QuickSort on inputs A of length $\lvert A \rvert = 3$?

(e)  For each reachable leaf, give an example input that leads to that leaf.

## Exercise 5.3.

In the lecture, we discussed BucketSort, which sorts n numbers drawn from the Uniform distribution on [0, 1), with expected running time $O(n)$.

(a) Explain why the worst-case running time for BucketSort is $\theta(n2)$. What simple change to the algorithm preserves its linear average-case running time and makes its worst-case running time $O(n \log n)$? 

(a) 桶排序在最坏情况下的时间复杂度是 $\Theta(n^2)$，这是因为如果所有的 $n$  个元素都均匀分布并落入同一个桶中，那么桶内排序的时间复杂度将会是 $O(n^2)$ 。这通常是因为桶排序在每个桶内部采用了插入排序，而插入排序在最坏情况下的时间复杂度是 $O(n^2)$ 。为了改进这个算法，使其在最坏情况下也能保持 $O(n \log n)$  的时间复杂度，我们可以在每个桶内使用最坏情况下时间复杂度为 $O(n \log n)$  的排序算法，比如快速排序、归并排序或者堆排序。这样，即便所有元素都落在一个桶里，由于桶内排序算法的时间复杂度是 $O(n \log n)$，整个算法的最坏情况时间复杂度也会变为  $O(n \log n)$。

(b) We are given n points $p_i = (x_i,y_i)$, for $i = 1,...,n$, in the unit circle such that $0 < x^2_i + y_i^2 \leq 1$. Suppose that the points are uniformly distributed over the unit circle: that is, the probability of finding a point in any region of the circle is proportional to the area of that region. Describe and analyse an algorithm with an expected running time of $O(n)$ to sort the n points by their distances $d_i=\sqrt{x^2_i+y_i^2}$, for i = $1,...,n$ from the origin.

Hint: Design the bucket sizes in BucketSort to reflect the uniform distribution of the points in the unit circle.

(b) 对于在单位圆内均匀分布的点 $p_i = (x_i,y_i)$ ，我们需要根据它们到原点的距离 $d_i=\sqrt{x_i^2+y_i^2}$  来排序。为了设计一个期望运行时间为 $O(n)$  的算法，我们可以采用桶排序策略。不过，由于点在单位圆内是均匀分布的，点离圆心越远，分布越稀疏。这意味着我们不能简单地按照距离等分区间来划分桶，而是应该根据单位圆面积的分布特点来设计桶的大小。

为此，我们可以计算每个桶所代表的圆环面积相等。假设我们将单位圆分为 $m$  个圆环，每个圆环的面积为 $\frac{\pi}{m}$ 。由于单位圆的总面积是 $\pi$ ，我们希望每个桶对应一个圆环，使得圆环的面积相等。因此，第 $k$ 个圆环的外半径 $r_k$ 应该满足：

$$
\pi r_k^2 - \pi r_{k-1}^2 = \frac{\pi}{m}
$$


简化上面的式子，我们可以得到：

$$
r_k^2 - r_{k-1}^2 = \frac{1}{m}
$$


由此，我们可以计算每个桶的边界。排序时，我们首先根据每个点 $p_i$ 到原点的距离 $d_i$  分配到对应的桶中。然后，我们可以在每个桶内部使用快速排序、归并排序或堆排序等 $O(n \log n)$  的排序算法对桶内的点进行排序。最后，我们按顺序遍历每个桶，并将桶内的点按排序结果输出，即得到按距离排序的点集。

由于桶的设计反映了点在单位圆内的均匀分布，因此每个桶中期望的点数大致相同，是 $n/m$ 。如果我们选择的 $m$  是一个和 $n$  成线性关系的数，比如 $m = n$，那么每个桶中期望的点数将是常数，即使桶内部使用 $O(n \log n)$  的排序算法，由于 $n$  是常数，所以整个算法的期望时间复杂度仍然是

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
