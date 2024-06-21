---
title: if not 的理解
icon: python
date: 2023-02-06 22:00:52
author: AI悦创
isOriginal: true
category: 
    - Python 进阶
    - 小白补充
tag:
    - Python 进阶
    - 小白补充
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

你好，我是悦创。

## if not 的理解

```python
l = None # 空 False
# not False >>> True
if not l:
    print('ok')
else:
    print('No')
print(not False)
```

运行结果：

```python
ok
True
```

把 l 修改成不为空：

```python
l = 1 # 空 False
# not False >>> True
if not l:
    print('ok')
else:
    print('No')
print(not False)
print(not True)
```

运行结果：

```python
No
True
False
```

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













