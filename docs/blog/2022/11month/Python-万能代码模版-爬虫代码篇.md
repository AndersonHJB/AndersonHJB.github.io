---
title: Python 万能代码模版：爬虫代码篇
date: 2022-11-12 17:02:04
author: AndersonHJB
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

你好，我是悦创。

很多同学一听到 Python 或编程语言，可能条件反射就会觉得“很难”。但今天的 Python 课程是个例外，因为今天讲的 **Python 技能，不需要你懂计算机原理，也不需要你理解复杂的编程模式。**即使是非开发人员，只要替换链接、文件，就可以轻松完成。


并且这些几个实用技巧，简直是 Python 日常帮手的最佳实践。比如：

- 爬取文档，爬表格，爬学习资料；
- 玩转图表，生成数据可视化；
- 批量命名文件，实现自动化办公；
- 批量搞图，加水印、调尺寸。

接下来，我们就逐一用 Python 实现，其中我提供的代码是万能代码，只用替换成你想爬的网页链接、文件位置、照片就可以进行处理了。


如果你没有安装 Python 及相关环境搭建，你可以参考我之前写的文章：

- [数据分析的环境不会搭？看这里准没错！](https://www.aiyc.top/772.html)
- [Python3 网络爬虫系统一对一教学（环境安装）](https://www.bilibili.com/video/BV1sa4y1a7kN)

**Tips：**因为不同的章节的数据可能会交叉引用，所以建议你首先在桌面建立一个工作夹，然后每个章节都单独建立一个 Python 文件进行实验。比如可以新建一个 pytips 的目录，然后在该目录下，每个章节创建一个 tips 文件夹，里面创建对应的 `.py` 文件。（按你具体的来，我的文件夹也和这个不一样）

## 声明
推荐去公众号阅读：[https://mp.weixin.qq.com/s/jj8srwUPF9wJOHG7YrQvcA](https://mp.weixin.qq.com/s/jj8srwUPF9wJOHG7YrQvcA)

因为：

![](https://blog.images.bornforthis.cn/docs-images/sha256/31/3105871a38b62ac918b2ad61d1ae36b9ae102dcd5d1ce2579143fff859af8cd6.png)

![](https://blog.images.bornforthis.cn/docs-images/sha256/59/59de224645e055367e4d5b155c504ad11d44f14f4932364e859c166e49be2445.png)

![](https://blog.images.bornforthis.cn/docs-images/sha256/85/851bcc117becd0982e4a1f93fb5c7ed4d6a8880013085a9e2003a7db15b42bce.png)





# 1. 巧用 Python 爬虫，实现财富自由
首先可以用 Python 来进行爬虫，什么是爬虫？简单理解来说就是抓取网络上的数据（文档、资料、图片等）。比如你考研可以爬文档和学习资料，要网络上的表格数据做分析，批量下载图片等。


下面我们来看看如何一一实现。


## 1.1 爬取文档、学习资料
首先，你得先确定你要爬的网站是什么？你要获取的目的是什么？比如，小悦想爬青岩帮网站中的**报考指南**，所以他想搜集目前该网页的所有文章的标题和超链接，以方便后续浏览。

![image.png](https://blog.images.bornforthis.cn/docs-images/sha256/f5/f50b27aad109403f8f057b074c77e6277ecf854734aabdd80988deee5047dc8c.png)

![image.png](https://blog.images.bornforthis.cn/docs-images/sha256/39/399d73f70e6a86ca15936e09a17aceabced6410446731760d4c1ab3da477cf88.png)

> 爬取网站的链接：[https://zkaoy.com/sions/exam](https://zkaoy.com/sions/exam)
> 目的：收集目前该网页的所有文章的标题和超链接

那使用 Python，可以参考以下两步的代码模板实现（提示：需要先安装 Python 依赖：urllib3 bs4）。
**安装所需要的库：**
```python
pip install urllib3 BeautifulSoup4
```
**第一步，下载该网页并保存为文件，代码如下。**
**PS：**这里，我为了清晰一些，拆成两个代码文件，后面我再来一个合并成一个代码文件。
```python
# urllib3 的方法
# file_name:Crawler_urllib3.py
import urllib3


def download_content(url):
    """
    第一个函数，用来下载网页，返回网页内容
    参数 url 代表所要下载的网页网址。
    整体代码和之前类似
    """
    http = urllib3.PoolManager()
    response = http.request("GET", url)
    response_data = response.data
    html_content = response_data.decode()
    return html_content


# 第二个函数，将字符串内容保存到文件中
# 第一个参数为所要保存的文件名，第二个参数为要保存的字符串内容的变量
def save_to_file(filename, content):
    fo = open(filename, "w", encoding="utf-8")
    fo.write(content)
    fo.close()


def main():
    # 下载报考指南的网页
    url = "https://zkaoy.com/sions/exam"
    result = download_content(url)
    save_to_file("tips1.html", result)


if __name__ == '__main__':
    main()
```
```python
# requests 代码
# file_name:Crawler_requests.py
import requests


def download_content(url):
    """
    第一个函数，用来下载网页，返回网页内容
    参数 url 代表所要下载的网页网址。
    整体代码和之前类似
    """
    response = requests.get(url).text
    return response


# 第二个函数，将字符串内容保存到文件中
# 第一个参数为所要保存的文件名，第二个参数为要保存的字符串内容的变量
def save_to_file(filename, content):
    with open(filename, mode="w", encoding="utf-8") as f:
        f.write(content)


def main():
    # 下载报考指南的网页
    url = "https://zkaoy.com/sions/exam"
    result = download_content(url)
    save_to_file("tips1.html", result)


if __name__ == '__main__':
    main()
```
**第二步，解析网页，并提取出文章的链接和标题。**
```python
# file_name:html_parse.py
# 解析方法一
from bs4 import BeautifulSoup

# 输入参数为要分析的 html 文件名，返回值为对应的 BeautifulSoup 对象
def create_doc_from_filename(filename):
	with open(filename, "r", encoding='utf-8') as f:
		html_content = f.read()
		doc = BeautifulSoup(html_content)
	return doc

def parse(doc):
	post_list = doc.find_all("div", class_="post-info")
	for post in post_list:
		link = post.find_all("a")[1]
		print(link.text.strip())
		print(link["href"])

def main():
	filename = "tips1.html"
	doc = create_doc_from_filename(filename)
	parse(doc)

if __name__ == '__main__':
	main()
```
```python
# file_name:html_parse_lxml.py
# 解析方法二，指定解析器
from bs4 import BeautifulSoup

# 输入参数为要分析的 html 文件名，返回值为对应的 BeautifulSoup 对象
def create_doc_from_filename(filename):
	with open(filename, "r", encoding='utf-8') as f:
		html_content = f.read()
		soup = BeautifulSoup(html_content, "lxml")
	return soup

def parse(soup):
	post_list = soup.find_all("div", class_="post-info")
	for post in post_list:
		link = post.find_all("a")[1]
		print(link.text.strip())
		print(link["href"])

def main():
	filename = "tips1.html"
	soup = create_doc_from_filename(filename)
	parse(soup)

if __name__ == '__main__':
	main()
```
**PS：**两个代码很像，只是差别在指定了解析器——lxml
​

执行代码之后，你就可以看到网页中的标题和链接已经被打印到了屏幕上。
```python
敲黑板！这些省份往届生不能预报名！
https://zkaoy.com/15123.html
二战必须回户籍所在地考吗？
https://zkaoy.com/15103.html
这些同学不能参加预报名！不注意，有可能考研报名失败！
https://zkaoy.com/15093.html
呜呼~考研报名费，这种情况可以退款！
https://zkaoy.com/15035.html
注意：又发通知！22研招有4点变化‼️
https://zkaoy.com/14977.html
2021考研初试时间定了！正式网报时间有变化
https://zkaoy.com/14915.html
快码住！考研前的这些关键时间点，千万不能错过！
https://zkaoy.com/14841.html
近万名考生考研报名失败！问题出在这！22考研一定注意！
https://zkaoy.com/14822.html
往届生比应届生更容易上岸，你认同吗？
https://zkaoy.com/14670.html
各省市考研报名费用！
https://zkaoy.com/14643.html
要开始报名了？现在不需要担心，没你想的那么复杂……
https://zkaoy.com/14620.html
教育部公布重要数据：研究生扩招20.74%！
https://zkaoy.com/14593.html
虚假招生？这一高校临近开学取消奖学金！
https://zkaoy.com/14494.html
下个月要预报名了，高频问题早知道
https://zkaoy.com/14399.html
注意！这些网报信息要准备好，否则影响9月考研报名！
https://zkaoy.com/14352.html
想考上研，各科应该考多少分？
https://zkaoy.com/14273.html
选择报考点需要注意什么？报考点有限制！
https://zkaoy.com/14161.html
各地考研报名费汇总！快来看看你要交多少钱！
https://zkaoy.com/14158.html
考研高校推免人数公布，统考名额还剩多少？
https://zkaoy.com/14092.html
这几所高校考研参考书有变！参考书目要怎么搜集？
https://zkaoy.com/14061.html
院校指南
https://zkaoy.com/sions/zxgg1
这些要提前准备好！不然影响报名！
https://zkaoy.com/13958.html
救命！近万人因为这个，错失考研机会！
https://zkaoy.com/13925.html
考研如何看招生简章和招生目录？
https://zkaoy.com/13924.html
```
上面，我是拆开了，现在合并成一个代码文件即可：
```python
# file_name:Crawler.py
import requests
from bs4 import BeautifulSoup


def download_content(url):
    """
    第一个函数，用来下载网页，返回网页内容
    参数 url 代表所要下载的网页网址。
    整体代码和之前类似
    """
    response = requests.get(url).text
    return response


# 第二个函数，将字符串内容保存到文件中
# 第一个参数为所要保存的文件名，第二个参数为要保存的字符串内容的变量
def save_to_file(filename, content):
    with open(filename, mode="w", encoding="utf-8") as f:
        f.write(content)

def create_doc_from_filename(filename):
    # 输入参数为要分析的 html 文件名，返回值为对应的 BeautifulSoup 对象
    with open(filename, "r", encoding='utf-8') as f:
        html_content = f.read()
        soup = BeautifulSoup(html_content, "lxml")
    return soup

def parse(soup):
    post_list = soup.find_all("div", class_="post-info")
    for post in post_list:
        link = post.find_all("a")[1]
        print(link.text.strip())
        print(link["href"])


def main():
    # 下载报考指南的网页
    url = "https://zkaoy.com/sions/exam"
    filename = "tips1.html"
    result = download_content(url)
    save_to_file(filename, result)
    soup = create_doc_from_filename(filename)
    parse(soup)

if __name__ == '__main__':
    main()
```
**代码文件：**[https://github.com/AndersonHJB/AIYC_DATA/tree/main/01-Python 万能代码模版：10 大必学实用技巧/1.1 巧用 Python 爬虫，实现财富自由](https://github.com/AndersonHJB/AIYC_DATA/tree/main/01-Python 万能代码模版：10 大必学实用技巧/1.1 巧用 Python 爬虫，实现财富自由)
​

那如果你想爬取其他网页如何替换呢？你只需替换几处即可，如下图所示。

![image.png](https://blog.images.bornforthis.cn/docs-images/sha256/79/79a8650551f7a75872d650565d3140c3c8d95222e40476cd20a2f65fb2faca0f.png)

![image.png](https://blog.images.bornforthis.cn/docs-images/sha256/f6/f690d9170634d48543d4f75212bf5423030c41980df01a5e74eb6245aeffb3ba.png)

1. 替换为想要下载的网页地址
1. 替换为网页保存的文件名
1. 是 BeautifulSoup 函数，我们用它一步步从 html 的结构中解析出我们想要的内容，这里我们实现的是首先找到所有 class 属性是 `post-info` 的 div 标签，然后将这些标签中的 a 标签的文本部分提取出来。如果你解析的网页结构和这个不同，具体 BeautifulSoup 的用法可以参考我们这节课程 [https://www.aiyc.top/673.html#六、Requests_与_BeautifulSoup_库的基础操作](https://www.aiyc.top/673.html#六、Requests_与_BeautifulSoup_库的基础操作)。



## 1.2 抓取表格，做数据分析
我们日常在上网的时候，往往都会看到一些有用的表格，都希望保存下来日后使用，但直接复制到 Excel 往往都很容易发生变形，或者乱码，或者格式错乱等种种问题，借助 Python 可以轻松实现网页中表格的保存。（提示：需要先安装依赖: urllib3, pandas）
```python
pip install urllib3 pandas
```
以招行外汇页面为例：

![image.png](https://blog.images.bornforthis.cn/docs-images/sha256/dc/dcbcbf33a2b9dbe42b3b6cb356a14adffa65d97317a5eff607884a6affd186d1.png)

Python 代码如下：

```python
# file_name: excel_crawler_urllib3.py
import urllib3
import pandas as pd

def download_content(url):
	# 创建一个 PoolManager 对象，命名为 http
	http = urllib3.PoolManager()
	# 调用 http 对象的 request 方法，第一个参数传一个字符串 "GET"
	# 第二个参数则是要下载的网址，也就是我们的 url 变量
	# request 方法会返回一个 HTTPResponse 类的对象，我们命名为 response
	response = http.request("GET", url)

	# 获取 response 对象的 data 属性，存储在变量 response_data 中
	response_data = response.data

	# 调用 response_data 对象的 decode 方法，获得网页的内容，存储在 html_content
	# 变量中
	html_content = response_data.decode()
	return html_content

def save_excel():
	html_content = download_content("http://fx.cmbchina.com/Hq/")
	# 调用 read_html 函数，传入网页的内容，并将结果存储在 cmb_table_list 中
	# read_html 函数返回的是一个 DataFrame 的list
	cmb_table_list = pd.read_html(html_content)
	# 通过打印每个 list 元素，确认我们所需要的是第二个，也就是下标 1
	cmb_table_list[1].to_excel("tips2.xlsx")

def main():
	save_excel()

if __name__ == '__main__':
	main()
```
```python
# file_name: excel_crawler_requests.py
import requests
import pandas as pd
from requests.exceptions import RequestException


def download_content(url):
	try:
		response = requests.get(url)
		if response.status_code == 200:
			return response.text
		else:
			return "None"
	except RequestException as e:
		return e


def save_excel(filename):
	html_content = download_content("http://fx.cmbchina.com/Hq/")
	# 调用 read_html 函数，传入网页的内容，并将结果存储在 cmb_table_list 中
	# read_html 函数返回的是一个 DataFrame 的list
	cmb_table_list = pd.read_html(html_content)
	# 通过打印每个 list 元素，确认我们所需要的是第二个，也就是下标 1
	# print(cmb_table_list)
	cmb_table_list[1].to_excel(filename)


def main():
	filename = "tips2.xlsx"
	save_excel(filename)

if __name__ == '__main__':
	main()

```

下图为了辅助理解：

![image.png](https://blog.images.bornforthis.cn/docs-images/sha256/22/229211e051436804cde2cf705edde7daf6b3d4ed5274751587095b624e27bb00.png)

![image.png](https://blog.images.bornforthis.cn/docs-images/sha256/2a/2a411d03fe07e6a8ac8a0b1432f33d8b8e15cd87802463125a28b01ba2aa8c2f.png)



执行之后，会在代码文件所在的目录生成 `tips2.xlsx` 的 excel 文件，打开之后如下图所示。

![image.png](https://blog.images.bornforthis.cn/docs-images/sha256/77/77d541c2bb907414e5c2da8af8fb69d59357409304246a4e5cd362a295f1ca56.png)

当你希望抓取自己的表格时，替换下面 3 个部分即可。

![image.png](https://blog.images.bornforthis.cn/docs-images/sha256/cf/cf0b148fa50782823b8281c8b63328b1c53521cd2a3459381c7f8f6a824705e0.png)

1. 修改你要保存的 excel 文件名称；
1. 替换为想要抓取表格所在网页的网址；
1. 替换为表格的序号，比如想要抓取网页中的第几个表格；

代码链接：[https://github.com/AndersonHJB/AIYC_DATA/tree/main/01-Python%20万能代码模版：10%20大必学实用技巧/1.2%20抓取表格，做数据分析](https://github.com/AndersonHJB/AIYC_DATA/tree/main/01-Python%20万能代码模版：10%20大必学实用技巧/1.2%20抓取表格，做数据分析)
## 1.3 批量下载图片
当我们看到一个网页上有很多喜欢的图片时，一张一张保存效率比较低。
​

通过 Python 我们也可以实现快速的图片下载。以堆糖网为例，我们看到了这个网页。

![image.png](https://blog.images.bornforthis.cn/docs-images/sha256/56/56f7cdc85b4afbc9a78c3f40c440b788b0229b4d87a569dfa7d56b469ac66565.png)

感觉很好看，希望能够把所有图片下载下来，方案大体和 1 是一样的。
​

我们首先下载网页，然后分析其中的 img 标签，然后把图片下载下载来。首先我们在工作目录建立一个文件夹 tips_3 用来放下载的图片。
​

首先还是下载网页，Python 代码如下。
```python
# -*- coding: utf-8 -*-
# @Author: AI悦创
# @Date:   2021-09-13 20:16:07
# @Last Modified by:   aiyc
# @Last Modified time: 2021-09-13 21:02:58
import urllib3

# 第一个函数，用来下载网页，返回网页内容
# 参数 url 代表所要下载的网页网址。
# 整体代码和之前类似
def download_content(url):
	http = urllib3.PoolManager()
	response = http.request("GET", url)
	response_data = response.data
	html_content = response_data.decode()
	return html_content
# 第二个函数，将字符串内容保存到文件中
# 第一个参数为所要保存的文件名，第二个参数为要保存的字符串内容的变量

def save_to_file(filename, content):
	fo = open(filename, "w", encoding="utf-8")
	fo.write(content)
	fo.close()

url = "https://www.duitang.com/search/?kw=AI悦创&type=feed"
result = download_content(url)
save_to_file("tips3.html", result)
```
然后是抽取 img 标签，下载图片。
```python
from bs4 import BeautifulSoup
from urllib.request import urlretrieve

# 输入参数为要分析的 html 文件名，返回值为对应的 BeautifulSoup 对象
def create_doc_from_filename(filename):
	fo = open(filename, "r", encoding='utf-8')
	html_content = fo.read()
	fo.close()
	doc = BeautifulSoup(html_content, "lxml")
	return doc

doc = create_doc_from_filename("tips3.html")
images = doc.find_all("img")
for i in images:
	src = i["src"]
	filename = src.split("/")[-1]
	# print(i["src"])
	urlretrieve(src, "tips_3/" + filename)
```
执行完毕后打开 `tips_3 `目录，可以看到图片都被下载下来了。

![image.png](https://blog.images.bornforthis.cn/docs-images/sha256/01/01b3cc3402c26aed48640510f2d26d4182f8e6780a364a71d465f6fa7c97f2c1.png)

替换说明如下。

![image.png](https://blog.images.bornforthis.cn/docs-images/sha256/41/41632cd1a462d07724029ad9c55f6d9c56a5d077840c6d446b79d4a5b2d12f65.png)

1. 替换为想要保存的文件名（网页文件）；
1. 替换为想要下载网页的网址；
1. 替换为想要保存图片的文件夹，需要创建好文件夹。

**另外，有的网站的图片是先显示网页之后才动态加载的，这类动态加载的内容的图片下载是不支持的喔。**
代码链接：[https://github.com/AndersonHJB/AIYC_DATA/tree/main/01-Python%20万能代码模版：10%20大必学实用技巧/1.3%20批量下载图片](https://github.com/AndersonHJB/AIYC_DATA/tree/main/01-Python%20万能代码模版：10%20大必学实用技巧/1.3%20批量下载图片)


欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！

::: details 公众号：AI悦创【二维码】

![](https://blog.images.bornforthis.cn/docs-images/sha256/77/77f67d48a67ec6a44a4ef1f01ffc85830eb3c121b1ece45dc5ada06e20e2f52b.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Linux、」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](https://blog.images.bornforthis.cn/docs-images/sha256/30/3087c629da73428daa0ee050f5b31709c30f650686164b54c724b892a422c585.jpg)
