---
title: 07-字典内容勘误
icon: debug
date: 2025-05-22 14:34:12
author: AI悦创
isOriginal: true
sticky: false
star: false
article: true
timeline: true
image: false
navbar: false
sidebarIcon: true
comment: true

backToTop: true
toc: true
watermark:
  width: 200
  height: 200
  content: 《编程启蒙：思维与代码》作者：黄家宝
  opacity: 0.5
---

## 1. Bug 1：小试牛刀

::: tip Message

- 发现时间点：2025-05-22 14:41:07
- 情况：给 MR 研究生上课时发现。

:::

::: details 书中对应的部分（后期考虑添加页码和行数）

![](https://blog.images.bornforthis.cn/docs-images/sha256/ab/ab41472b50a2f11c7a473015b79e95a530896c962257dd5abca1dc899c7fff2c.png)

:::

代码示例存在问题，书籍代码为分布讲解，直接提供完整代码，便于核对。

```python
# 给定的初始字典
dict1 = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6}

# 获取用户输入
user_list_input = input("Enter your list (use '/' to separate items): ")
user_tuple_input = input("Enter your value (use '-' to separate items): ")

# 将用户输入的字符串转换为列表和元组
user_list = user_list_input.split('/')
user_tuple = tuple(int, user_tuple_input.split('-'))

# 创建新的字典并更新目标字典
zipped = zip(user_list, user_tuple)
dict_data = dict(zipped)
dict1.update(new_dict)

# 输出更新后的字典
print("Updated dictionary:", dict1)
```





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