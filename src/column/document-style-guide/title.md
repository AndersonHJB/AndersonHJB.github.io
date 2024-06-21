---
title: 01-标题
date: 2023-01-25 21:57:35
author: AI悦创
isOriginal: true
category:
    - 中文技术文档的写作规范
tag:
    - 中文技术文档的写作规范
icon: docs
sticky: false
star: false
article: true
timeline: true
navbar: true
sidebarIcon: true
headerDepth: 5
comment: true
lastUpdated: true
editLink: true
backToTop: true
toc: true
---

## 1. 层级

标题分为四级。

- 一级标题：文章的标题
- 二级标题：文章主要部分的大标题
- 三级标题：二级标题下面一级的小标题
- 四级标题：三级标题下面某一方面的小标题

下面是示例。

```markdown
# 一级标题

## 二级标题

### 三级标题

#### 四级标题
```

## 2. 原则

（1）一级标题下，不能直接出现三级标题。

示例：下面的文章结构，缺少二级标题。

```markdown
# 一级标题

### 三级标题
```

（2）标题要避免孤立编号（即同级标题只有一个）。

示例：下面的文章结构，`二级标题 A`只包含一个三级标题，完全可以省略`三级标题 A`。

```markdown
## 二级标题 A

### 三级标题 A

## 二级标题 B
```

（3）下级标题不重复上一级标题的名字。

示例：下面的文章结构，二级标题与下属的三级标题同名，建议避免。

```markdown
## 概述

### 概述
```

（4）谨慎使用四级标题，尽量避免出现，保持层级的简单，防止出现过于复杂的章节。

如果三级标题下有并列性的内容，建议只使用项目列表（Item list）。

示例：下面的结构二要好于结构一。结构一适用的场景，主要是较长篇幅的内容。

```markdown
结构一

### 三级标题

#### 四级标题 A

#### 四级标题 B

#### 四级标题 C

结构二

### 三级标题

**（1）A**

**（2）B**

**（3）C**
```



::: details 公众号：AI悦创【二维码】

![](/gzh.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Linux、Web」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](/zsxq.jpg)
