---
title: 香港 Python 复习
date: 2024-02-28 20:46:32
author: AI悦创
isOriginal: true
icon: love
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

## Question 01

```python
import time  # 时间

start_time = time.time()

n = 0
total = 0
while n < 100000000:
    # total += n
    total = total + n
    # n += 1
    n = n + 1

end_time = time.time()
print(f'{end_time - start_time} seconds, total: {total}')
```



凯撒加密（Caesar Cipher）是一种古老的加密技术，得名于罗马共和国的军事领袖和政治家尤利乌斯·凯撒（Julius Caesar），他据说用这种加密方法来保护与将军们的通信安全。凯撒加密是一种替换加密技术，其工作原理非常简单：通过将字母表中的每个字母在字母表中向前（或向后）移动固定数目的位置来进行加密。

例如，如果我们选择移动的位置数为 3，那么加密过程如下所示：

- 原文：A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
- 密文：D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

在这个例子中，“A”会被替换为“D”，“B”会被替换为“E”，依此类推。解密过程则是将这个过程反向执行，即将字母表中的每个字母向后移动相同的位置数。

凯撒加密是对称加密的一种形式，意味着加密和解密使用同一个密钥（在这个例子中，密钥就是移动的位置数，即 3）。尽管它在当今的安全标准看来非常简单且易于破解，但凯撒加密在历史上却是一种非常有效的保密手段，特别是在对手不了解这种加密方法或者找不到解密的钥匙时。然而，由于其简单性，现代计算机可以在极短的时间内破解凯撒加密，使其不适合用于任何形式的现代电子通信安全。



- For loop 主要是有限次数循环、可预知大概运行多少次
- while loop 主要是用于不知道要做多少次
- %s: 字符串
- %f: 浮点数
- %d: 整数



以 Python 程式為以下流程圖編碼。

等差数列(Arithmetic sequence)是指一系列的數，當中任何相鄰兩項的差相等，該差值稱為公差(Common difference)。

例如 4,7,10,13,16,….是一個等差數列，公差是 3。

編寫一個 python 程式，利用 while 循環輸出一個等差数列,當中第一項是 6，公差是5。



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
