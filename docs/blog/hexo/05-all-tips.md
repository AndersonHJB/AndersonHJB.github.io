---
title: Hexo 小操作
date: 2024-08-16 10:08:56
author: AI悦创
isOriginal: true
icon: blog
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

## 1. 博主邮箱 md5 值

获取邮箱的 MD5 值可以通过以下步骤进行：

### 1.1 准备邮箱地址

假设你的邮箱地址是 `example@example.com`。

### 1.2 将邮箱地址转换为 MD5 哈希值

你可以使用以下几种方式来将邮箱地址转换为 MD5 哈希值。

#### 方法一：Python 代码

你可以使用 Python 脚本来生成 MD5 哈希值。以下是一个简单的 Python 代码示例：

```python
import hashlib

# 替换为你的邮箱地址
email = "example@example.com"

# 创建MD5哈希对象
md5_hash = hashlib.md5()

# 更新哈希对象
md5_hash.update(email.encode('utf-8'))

# 获取哈希值
mail_md5 = md5_hash.hexdigest()

print(f"邮箱的MD5值是: {mail_md5}")
```

#### 方法二：在线工具

你可以使用在线的 MD5 生成工具，将邮箱地址输入后获取 MD5 值。比如，你可以在 Google 搜索“MD5 hash generator”找到相关的在线工具。

#### 方法三：Linux/Mac 终端

如果你使用的是 Linux 或 Mac 系统，可以直接在终端中使用以下命令生成MD5值：

```bash
echo -n "example@example.com" | md5

echo -n "aiyuechuang@gmail.com" | md5
```

### 3. 将生成的 MD5 值替换到 `mailMd5` 字段

将生成的 MD5 值替换到`mailMd5: "xxxxxxxxxx"`中的`xxxxxxxxxx`部分即可。

例如，如果你的MD5值是 `abcd1234efgh5678ijkl9012mnopqrst`，那么代码就变成：

```yaml
mailMd5: "abcd1234efgh5678ijkl9012mnopqrst"
```

这样你就得到了邮箱地址的 MD5 哈希值并应用到了代码中。

















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





