---
title: 智牛 API 邀请测评
icon: blog
date: 2026-03-29 12:10:22
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

## 1. 基础调用测评

```python
from openai import OpenAI

client = OpenAI(api_key="YOUR_OPENAI_API_KEY", base_url="https://niuapi.vip/v1")

completion = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[
        {"role": "system", "content": "你是一个简洁的助手。"},
        {"role": "user", "content": "帮我写一句产品介绍。"}
    ]
)

print(completion.choices[0].message.content)
```

::: tabs

@tab img1

![](https://blog.images.bornforthis.cn/docs-images/sha256/b4/b4d0a8adf51f11796ddbbabec538b62c8c2863ca930400467bd83497756fb8ea.png)

@tab img2

![](https://blog.images.bornforthis.cn/docs-images/sha256/2e/2e90b1de0374aee4d17b7c18da81a99a5974a63e4a20c0682735ee825e966471.png)

@tab img3

![](https://blog.images.bornforthis.cn/docs-images/sha256/d7/d7ff04a2aad86404382953ef06776b67163e3a9f71423722c3d333c054e796cc.png)

@tab img4

![](https://blog.images.bornforthis.cn/docs-images/sha256/a8/a8ceab0c8cdd2d3d49d01478fe4c50993cfd29866d9f0b501658454dd64cc306.png)

:::

整体感觉还行，有可能有些模型会与实际“不符”。不过这个有待考究，仁者见仁·智者见智。

不过如果可以真便宜、聪明，那确实可以尝试。

接下来，测试一下对于龙虾是否可用。

## 2. 测试龙虾效果

### 2.1 配置龙虾

官方有自动生成的途径，有想要体验的可以自己去生成试一试。

官方有邀请注册：[https://niuapi.vip/register?aff=UmVz](https://niuapi.vip/register?aff=UmVz) 欢迎点击我的邀请链接注册体验。

### 2.2 测试效果

1. 发送屏幕截屏：
2. 把摄像头发送给我；
3. 整理飞书文档；
4. 操作飞书文档；
5. 学习 Skills；





















::: details 公众号：AI悦创【二维码】

![](https://blog.images.bornforthis.cn/docs-images/sha256/77/77f67d48a67ec6a44a4ef1f01ffc85830eb3c121b1ece45dc5ada06e20e2f52b.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Web、Linux」，招收学员面向国内外，国外占 80%。全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](https://blog.images.bornforthis.cn/docs-images/sha256/30/3087c629da73428daa0ee050f5b31709c30f650686164b54c724b892a422c585.jpg)