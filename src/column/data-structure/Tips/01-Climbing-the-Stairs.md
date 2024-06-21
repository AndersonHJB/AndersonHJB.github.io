---
title: 01-爬楼梯问题「递归/Python」
date: 2023-03-02 22:40:23
author: 神不烦
isOriginal: true
icon: shujujiegou-01
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

假设你正在爬楼梯。需要 n 步你才能到达楼顶。每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

注意：给定 n 是一个正整数。

## 示例1

> 输入： 2
> 输出： 2
> 解释： 有两种方法可以爬到楼顶。
>
> 1. 1 步 + 1 步
> 2. 2 步

## 示例2

> 输入： 3
> 输出： 3
> 解释： 有三种方法可以爬到楼顶。
>
> 1. 1 步 + 1 步 + 1 步
> 2. 1 步 + 2 步
> 3. 2 步 + 1 步

我第一反应是用递归实现，然而不出所料超出时间限制。

```python
        if n == 1:
            return 1
        elif n == 2:
            return 2
        else:
            s1 = self.climbStairs(n-1)
            s2 = self.climbStairs(n-2)
            return s1+s2 
```

所以。。。。再想一想。既然递归不行就递推试试。emmm…网上说这个问题的结果和 Fibonacci 数列一样。果然是这样。。。尽管可以转换为求解 fibonacci，但是还是应该好好思考一下怎么解决原问题。毕竟可能会联想不到 fibonacci。

```python
        nums = [0,1,2]
        if n == 1:
            return nums[1]
        elif n == 2:
            return nums[2]
        else:
            for i in range(3,n+1):
                nums.append(nums[i-1] + nums[i-2])
        return nums[n]
```

上面这个版本通过了，但是只战胜了25%的人，寻求更优的算法吧。

这个很机智啊，我的列表初始化可以优化成如下：

```python
        condition = [0] * (n + 1)
        condition[0] = 1
        condition[1] = 1
        for i in range(2, n+1):
            condition[i] = condition[i-1] + condition[i-2]
        return condition[n]
```

关于循环和递归：
Loops may achieve a performance gain for your program. Recursion may achieve a performance gain for your programmer. Choose which is more important in your situation!

如果使用循环，程序的性能会更高。如果使用递归，程序更容易理解。

原文：[https://blog.csdn.net/qq_34364995/article/details/80284361](https://blog.csdn.net/qq_34364995/article/details/80284361)

欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！

::: details 公众号：AI悦创【二维码】

![](/gzh.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](/zsxq.jpg)
