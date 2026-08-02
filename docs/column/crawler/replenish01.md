---
title: 01-Referer 案例
date: 2020-08-07 12:02:30
author: AI悦创
isOriginal: true
category: Python 网络爬虫专栏
tag:
    - Crawler
icon: debug
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

网站：[https://cloud.tencent.com/developer/article/1875661](https://cloud.tencent.com/developer/article/1875661)
图片链接：[https://ask.qcloudimg.com/http-save/7111610/50febd19e08f024d8ddd6509ce54edfa.png?imageView2/2/w/1620](https://ask.qcloudimg.com/http-save/7111610/50febd19e08f024d8ddd6509ce54edfa.png?imageView2/2/w/1620)

直接访问：

![1.gif](https://blog.images.bornforthis.cn/docs-images/sha256/8b/8b966f12d2dc86c3c02b8596c2654e576f63b08fbd3014b509af9d68b109a1aa.gif)

![2.gif](https://blog.images.bornforthis.cn/docs-images/sha256/06/06353ceec4834dc4ce378daa5179d126a409ff0f4824434efec9bb04c3d75c88.gif)

不加 headers：

```python
import requests

url = "https://ask.qcloudimg.com/http-save/7111610/50febd19e08f024d8ddd6509ce54edfa.png?imageView2/2/w/1620"

html = requests.get(url).content
with open("image.png", mode="wb") as f:
    f.write(html)
```
![image.png](https://blog.images.bornforthis.cn/docs-images/sha256/cd/cdfddf335dffdb8bea122376c977b474307b858ef100b9aeb55782094234a7dc.png)

加上 headers：

```python
import requests

url = "https://ask.qcloudimg.com/http-save/7111610/50febd19e08f024d8ddd6509ce54edfa.png?imageView2/2/w/1620"

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Safari/537.36",
    "Referer": "https://cloud.tencent.com/",
}
html = requests.get(url, headers=headers).content
with open("image.png", mode="wb") as f:
    f.write(html)
```
![image.png](https://blog.images.bornforthis.cn/docs-images/sha256/ac/ac97533556b9db60d024b96e41f311b5937b686fdc47e923fd3e26d3e139519f.png)

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

