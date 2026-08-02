---
title: 01-regex 练习「音乐抓取」
date: 2022-08-08 09:04:54
author: AI悦创
isOriginal: true
category: 
    - crawler
tag:
    - crawler
icon: WEBCRAWLER
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

## 1. 需求

1. 抓取目标网站：[https://web.online.bornforthis.cn/crawler/regex/index.html](https://web.online.bornforthis.cn/crawler/regex/index.html)
2. 技术限制：
    1. requests
    2. re
    3. Python 基础语法
3. 抓取目标音乐
4. 存储制定路径：/data/music/

## 2. 导入所需库

```python
import requests
import re
```



## 3. 编写代码

```python
import requests
import re
from requests.exceptions import RequestException
from urllib.parse import urljoin

BASE = "https://web.online.bornforthis.cn/crawler/regex/"


def requests_fun(url, binary=False):
    try:
        response = requests.get(url)
        if response.status_code == 200:
            if binary:
                return response.content
            else:
                return response.text
        return None
    except RequestException as e:
        return None


def save_music(path, binary):
    with open(path, "wb") as f:
        f.write(binary)


def parse(html):
    pattern = '<a.*?href="(.*?)".*?</a>'
    result = re.findall(pattern, html)
    return result


def joint(url_lst):
    url_list = []
    for url in url_lst:
        url = urljoin(BASE, url)
        url_list.append(url)
    return url_list


def postfix(url):
    music_name = url.split("/")[-1]
    return music_name


def main():
    url = "https://web.online.bornforthis.cn/crawler/regex/index.html"
    html = requests_fun(url)
    # url_lst = parse(html)
    url_list = joint(parse(html))
    # print(url_list)
    for url in url_list:
        # print(url)
        binary_content = requests_fun(url, binary=True)
        # print(binary_content)
        save_music(f"data/music/{postfix(url)}", binary_content)


if __name__ == '__main__':
    main()
```

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