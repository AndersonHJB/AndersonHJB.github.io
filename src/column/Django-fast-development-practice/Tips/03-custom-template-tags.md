---
title: 03-如何编写自定义的模板标签和过滤器
date: 2023-03-10 10:06:40
icon: django
author: AI悦创
isOriginal: true
category: 
    - django体系课
tag:
    - django体系课
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
footer: 长期招收编程一对一学员！微信：Jiabcdefh, <a href="https://beian.miit.gov.cn/" target="_blank">闽ICP备19021486号-6</a>
---

你好，我是悦创。

Django 模板语言包含了很多 [内置 tags 和 filters](https://docs.djangoproject.com/zh-hans/4.1/ref/templates/builtins/)，设计目的是满足应用需要占位逻辑需求。极少情况下，你可能发现需要的功能未被核心模板集覆盖。你能通过 Python 代码自定义 tags 和 filters 扩展集成模板引擎，通过 [`{% load %}`](https://docs.djangoproject.com/zh-hans/4.1/ref/templates/builtins/#std-templatetag-load) 标签使其可用。

## 1. 代码布局

定制自定义模板 tags 和 filters 的位置就是 Django 应用内。如果它们关联至某个已存在的应用，在那里将它们打包就很有用；否则，它们能被添加至新应用。当一个 Django 应用被添加至 [`INSTALLED_APPS`](https://docs.djangoproject.com/zh-hans/4.1/ref/settings/#std-setting-INSTALLED_APPS)，所以其在常规位置（下面介绍）定义的标签都可以在模板中自动加载。

该应用应包含一个 `templatetags` 目录，与 `models.py`， `views.py` 等同级。若该目录不存在，创建它——不要忘了用 `__init__.py` 文件确保目录被视作一个 Python 包。

::: warning 开发服务器并不会自动重启

添加 `templatetags` 模块后，你需要重启服务器，这样才能在模板中使用 tags 和 filters。

:::

自定义的 tags 和 filters 会保存在模块名为 `templatetags` 的目录内。模块文件的名字即稍候你用来加载 tags 的名字，所以小心不要采用一个可能与其它应用自定义的 tags 和 filters 冲突的名字。

例如，如果你的 tags/filters 保存在一个名为 `poll_extras.py` 的文件中，你的应用布局可能看起来像这样:

```python
polls/
    __init__.py
    models.py
    templatetags/
        __init__.py
        poll_extras.py
    views.py
```

在模板中你会使用以下代码：

```python
{% load poll_extras %}
```

为了使 [`{% load %}`](https://docs.djangoproject.com/zh-hans/4.1/ref/templates/builtins/#std-templatetag-load) 标签生效，包含自定义标签的应用必须包含在 [`INSTALLED_APPS`](https://docs.djangoproject.com/zh-hans/4.1/ref/settings/#std-setting-INSTALLED_APPS) 中。这是个安全特性：它允许你在一个主机上持有多个模板库，而不是让每个 Django 安装都能访问所有的库。

我们并未限制放入 `templatetags` 包中的模块数量。只需牢记 [`{% load %}`](https://docs.djangoproject.com/zh-hans/4.1/ref/templates/builtins/#std-templatetag-load) 语句会加载名字指定 Python 模块的 tags/filters，而不是应用。

要成为一个可用的 tag 库，模块必须包含一个名为 `register` 的模块级变量，它是一个 `template.Library` 实例。所有的 tags 和 filters 均在其中注册。所以，在模块的开始，输入以下内容:

```python
from django import template

register = template.Library()
```

或者，模板标签模块能通过 [`DjangoTemplates`](https://docs.djangoproject.com/zh-hans/4.1/topics/templates/#django.template.backends.django.DjangoTemplates) 的 `'libraries'` 参数注册。这在加载模板名字时，想为模板标签起个别名时很有用。这也让你能在未安装应用的情况下注册标签。

::: tip 幕后

For a ton of examples, read the source code for Django's default filters and tags. They're in [django/template/defaultfilters.py](https://github.com/django/django/blob/main/django/template/defaultfilters.py) and [django/template/defaulttags.py](https://github.com/django/django/blob/main/django/template/defaulttags.py), respectively.

更多关于 [`load`](https://docs.djangoproject.com/zh-hans/4.1/ref/templates/builtins/#std-templatetag-load) 标签的信息，阅读本文档。

:::

## 2. 编写自定义的模板过滤器

自定义的过滤器就是一些有一到两个参数的 Python 函数：

- （输入的）变量的值，不一定得是字符串类型
- 而参数的值，它们可以有一个默认值，或者被排除在外

举个例子，在过滤器 `{{ var|foo:"bar" }}` 中，变量 `var` 和参数 `bar` 会传递给过滤器 `foo`。

因为模板语言不提供异常处理机制，所以任何从模板过滤器中抛出的异常都将被视为服务器异常。因此，如果有一个合理的返回值将要被返回的话，过滤器函数应当避免产生异常。万一模板中出现有明显错误的输入，产生异常也仍然比隐藏这个 bug 要好。

这是一个过滤器定义的例子:

```python
def cut(value, arg):
    """Removes all values of arg from the given string"""
    return value.replace(arg, '')
```

这个例子展示了如何使用这个过滤器：

```python
{{ somevariable|cut:"0" }}
```

大部分的过滤器并没有参数。这样的话，只需要把这些参数从你的函数中去掉就好。

```python
def lower(value): # Only one argument.
    """Converts a string into all lowercase"""
    return value.lower()
```











欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！

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
