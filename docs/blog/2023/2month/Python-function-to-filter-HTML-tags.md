---
title: Python中过滤HTML标签的函数
date: 2023-02-08 22:14:35
author: AndersonHJB
isOriginal: true
icon: python
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
head:
  - - meta
    - name: keywords
      content: 一对一辅导编程,编程一对一辅导,少儿编程一对一,Python 1v1,AI悦创,一对一,Python,编程一对一,C++,Java,AI,人工智能,黄家宝,Python一对一教学,Python辅导,全网3000+学员,值得信赖
  - - meta
    - name: description
      content: 一对一辅导编程,编程一对一辅导,少儿编程一对一,Python 1v1,AI悦创,一对一,Python,编程一对一,C++,Java,AI,人工智能,黄家宝,Python一对一教学,Python辅导,全网3000+学员,值得信赖
---

::: tabs

@tab re.py

```python
#用正则简单过滤 html 的 <> 标签
import re
str = "<img /><a>srcd</a>hello</br><br/>"
str = re.sub(r'</?\w+[^>]*>','',str)
print(str)
```

@tab strip_tags.py

```python
# 用了 HTMLParser，有更简单的方式吗？正则？
from HTMLParser import HTMLParser


def strip_tags(html):
    """
    Python中过滤HTML标签的函数
    >>> str_text=strip_tags("<font color=red>hello</font>")
    >>> print str_text
    hello
    """
    html = html.strip()
    html = html.strip("\n")
    result = []
    parser = HTMLParser()
    parser.handle_data = result.append
    parser.feed(html)
    parser.close()
    return ''.join(result)
```

@tab zt.py

```python
# 更深层次的过滤，类似 instapaper 或者 readitlater 这种服务，很有意思的研究课题
# -*- coding: utf-8-*-
import re


##过滤HTML中的标签
# 将HTML中标签等信息去掉
# @param htmlstr HTML 字符串.
def filter_tags(htmlstr):
    # 先过滤CDATA
    re_cdata = re.compile('//<!\[CDATA\[[^>]*//\]\]>', re.I)  # 匹配CDATA
    re_script = re.compile('<\s*script[^>]*>[^<]*<\s*/\s*script\s*>', re.I)  # Script
    re_style = re.compile('<\s*style[^>]*>[^<]*<\s*/\s*style\s*>', re.I)  # style
    re_br = re.compile('<br\s*?/?>')  # 处理换行
    re_h = re.compile('</?\w+[^>]*>')  # HTML标签
    re_comment = re.compile('<!--[^>]*-->')  # HTML注释
    s = re_cdata.sub('', htmlstr)  # 去掉CDATA
    s = re_script.sub('', s)  # 去掉SCRIPT
    s = re_style.sub('', s)  # 去掉style
    s = re_br.sub('\n', s)  # 将br转换为换行
    s = re_h.sub('', s)  # 去掉HTML 标签
    s = re_comment.sub('', s)  # 去掉HTML注释
    # 去掉多余的空行
    blank_line = re.compile('\n+')
    s = blank_line.sub('\n', s)
    s = replaceCharEntity(s)  # 替换实体
    return s


## 替换常用 HTML 字符实体.
# 使用正常的字符替换 HTML 中特殊的字符实体.
# 你可以添加新的实体字符到 CHAR_ENTITIES 中,处理更多HTML字符实体.
# @param htmlstr HTML 字符串.
def replaceCharEntity(htmlstr):
    CHAR_ENTITIES = {'nbsp': ' ', '160': ' ',
                     'lt': '<', '60': '<',
                     'gt': '>', '62': '>',
                     'amp': '&', '38': '&',
                     'quot': '"', '34': '"', }

    re_charEntity = re.compile(r'&#?(?P<name>\w+);')
    sz = re_charEntity.search(htmlstr)
    while sz:
        entity = sz.group()  # entity全称，如&gt;
        key = sz.group('name')  # 去除&;后entity,如&gt;为gt
        try:
            htmlstr = re_charEntity.sub(CHAR_ENTITIES[key], htmlstr, 1)
            sz = re_charEntity.search(htmlstr)
        except KeyError:
            # 以空串代替
            htmlstr = re_charEntity.sub('', htmlstr, 1)
            sz = re_charEntity.search(htmlstr)
    return htmlstr


def repalce(s, re_exp, repl_string):
    return re_exp.sub(repl_string, s)


if __name__ == '__main__':
    s = open('Google.htm').read()
    news = filter_tags(s)
    print(news)
```

:::

要善于利用已经有的工具。来，一行搞定。

```python
from pyquery import PyQuery
doc = PyQuery('<div><span>toto</span><span>tata</span></div>')
print doc.text()
```

欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！

::: details 公众号：AI悦创【二维码】

![](https://blog.images.bornforthis.cn/docs-images/sha256/77/77f67d48a67ec6a44a4ef1f01ffc85830eb3c121b1ece45dc5ada06e20e2f52b.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Linux、Web全栈」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](https://blog.images.bornforthis.cn/docs-images/sha256/30/3087c629da73428daa0ee050f5b31709c30f650686164b54c724b892a422c585.jpg)
