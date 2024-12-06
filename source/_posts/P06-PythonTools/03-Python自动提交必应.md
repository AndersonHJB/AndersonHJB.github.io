---
title: Python自动提交必应收录
tags:
  - 小想法
  - Python 工具
categories:
  - Python小项目
description: "为增加必应的收录，我选择注册并提交链接，垃圾百度给我的提交额为0！简直无法忍受emmmm～"
top_img: /img/posts/P06-PythonTools/03-Python自动提交必应/03-Python自动提交必应.png
cover: /img/posts/P06-PythonTools/03-Python自动提交必应/03-Python自动提交必应.webp
comments: true
toc: true
mathjax: false
katex: false
highlight_shrink: false
swiper_index: 1
top_group_index: 1
background: '#fff'
aside: true
ai:
  - "为增加必应的收录，我选择注册并提交链接，垃圾🗑️百度给我的提交额为0！简直无法忍受😓emmmm～"
abbrlink: 3fceba58
date: 2024-12-05 09:56:58
toc_number:
toc_style_simple:
aplayer:
---

# 1. 背景

你好，我是悦创。

添加到必应是很简单的，我就不赘述了～

我这里主要记录📝的是，如何使用必应的 API 提交链接，至于定时提交有很多方法，可以选择使用宝塔、MacOS、Windows 等定时任务即可。「有需要可以评论留言，我后期补上教程」

## 2. 实现

必应官方提供了两种方案：`URL Submission` 、`Content Submission` 那肯定是选择 `URL Submission`。

> 官方链接：[https://www.bing.com/webmasters/url-submission-api#APIs](https://www.bing.com/webmasters/url-submission-api#APIs)

但是官方提供的都不是 Python 代码，很有局限性。只提供了 Json 和 XML 的代码，对于不熟悉和重复执行来说，不是非常方便。我就需要使用 Python 来便于我运行和定时，当然也可以使用 sh 的命令行，会更简单「或许，改天试一试然后代码加入到文字后面。」

{% tabs 前言 %}

<!-- tab Json Request-Response -->

```json
JSON request sample: 

POST /webmaster/api.svc/json/SubmitUrlbatch?​apikey=sampleapikeyEDECC1EA4AE341CC8B6 HTTP/1.1​
Content-Type: application/json; charset=utf-8​
Host: ssl.bing.com​

{
"siteUrl":"http://yoursite.com",​
"urlList":[
"http://yoursite.com/url1",
"http://yoursite.com/url2",
"http://yoursite.com/url3"
]
}

JSON response sample:

HTTP/1.1 200 OK
Content-Length: 10
Content-Type: application/json; charset=utf-8

{
"d":null
}
```
<!-- endtab -->

<!-- tab XML Request-Response -->

```xml
XML request sample: 

POST /webmaster/api.svc/pox/SubmitUrlBatch?apikey=sampleapikeyEEDECC1EA4AE341CC57365E075EBC8B6 HTTP/1.1
Content-Type: application/xml; charset=utf-8
Host: ssl.bing.com
<SubmitUrlBatch xmlns="http://schemas.datacontract.org/2004/07/Microsoft.Bing.Webmaster.Api">
<siteUrl>http://example.com</siteUrl>
<urlList>
<string xmlns="http://schemas.microsoft.com/2003/10/Serialization/Arrays">http://example.com/url1</string>
<string xmlns="http://schemas.microsoft.com/2003/10/Serialization/Arrays">http://example.com/url2</string>
<urlList>
</SubmitUrlBatch>

XML response sample:

HTTP/1.1 200 OK
Content-Length: 0
```

<!-- endtab -->



{% endtabs %}

上面的内容运行，不是很方便，我平时用的比较多的也是 ：Python，在写这篇文章的时候突发奇想，后面做个网页方便大家直接使用？后面有时间再造轮子🛞吧。

{% tabs Code %}

<!-- tab V0.0.1 -->
**使用说明：**

- 前置条件：
  - 替换 apikey 为您的 Bing Webmaster 工具提供的 API 密钥。
  - 确保 sitemap_url 指向有效的 Sitemap 文件。
- 运行脚本：
  - 将代码保存为一个 Python 文件（例如 submit_to_bing.py）。
  - 使用 Python 运行脚本：python submit_to_bing.py。
- 脚本功能：
  - 自动从 sitemap_url 下载 Sitemap 文件。
  - 提取所有 `<loc>` 标签中的链接。
  - 按批次将链接提交到 Bing 的 Webmaster API。
- 注意事项：
  - 如果您的 Sitemap 很大，可以调整 batch_size，以减少单次提交的 URL 数量。
  - 确保 API 调用频率不超过 Bing 的限制。


```python
import requests
import re

# 配置
sitemap_url = "https://bornforthis.cn/sitemap.xml"
bing_api_url = "https://ssl.bing.com/webmaster/api.svc/json/SubmitUrlbatch"
apikey = "your_api_key_here"  # 替换为您的实际 API 密钥
site_url = "https://bornforthis.cn"

# 提取 Sitemap 中的链接
def fetch_sitemap_urls(sitemap_url):
    response = requests.get(sitemap_url)
    response.raise_for_status()  # 确保请求成功
    sitemap_content = response.text
    # 使用正则表达式提取 <loc> 标签中的链接
    urls = re.findall(r"<loc>(.*?)</loc>", sitemap_content)
    return urls

# 提交链接到 Bing API
def submit_urls_to_bing(api_url, apikey, site_url, url_list):
    headers = {
        "Content-Type": "application/json; charset=utf-8",
    }
    payload = {
        "siteUrl": site_url,
        "urlList": url_list
    }
    params = {
        "apikey": apikey
    }
    response = requests.post(api_url, headers=headers, params=params, json=payload)
    response.raise_for_status()  # 确保请求成功
    return response.json()

# 主程序
def main():
    try:
        print("Fetching URLs from sitemap...")
        urls = fetch_sitemap_urls(sitemap_url)
        print(f"Fetched {len(urls)} URLs.")

        # 将 URLs 分批提交，避免超出 API 限制
        batch_size = 100  # 每批提交的链接数量
        for i in range(0, len(urls), batch_size):
            batch = urls[i:i + batch_size]
            print(f"Submitting batch {i // batch_size + 1} with {len(batch)} URLs...")
            response = submit_urls_to_bing(bing_api_url, apikey, site_url, batch)
            print(f"Batch {i // batch_size + 1} submitted successfully: {response}")
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    main()
```

<!-- endtab -->

<!-- tab V0.0.2 -->

- 原本的代码实现，是按顺序提取链接。但是必应每天只有 100 个 URL 数量，如果每天都是按顺序提交，只会提交固定前面的链接。此时，随机打乱是最合适的。
- 为了实现随机化提交，可以在从 Sitemap 提取链接后，使用 Python 的 `random.shuffle()` 方法打乱链接顺序，然后分批提交。以下是改进后的代码：

```python
import requests
import re
import random

# 配置
sitemap_url = "https://bornforthis.cn/sitemap.xml"
bing_api_url = "https://ssl.bing.com/webmaster/api.svc/json/SubmitUrlbatch"
apikey = "your_api_key_here"  # 替换为您的实际 API 密钥
site_url = "https://bornforthis.cn"

# 提取 Sitemap 中的链接
def fetch_sitemap_urls(sitemap_url):
    response = requests.get(sitemap_url)
    response.raise_for_status()  # 确保请求成功
    sitemap_content = response.text
    # 使用正则表达式提取 <loc> 标签中的链接
    urls = re.findall(r"<loc>(.*?)</loc>", sitemap_content)
    return urls

# 提交链接到 Bing API
def submit_urls_to_bing(api_url, apikey, site_url, url_list):
    headers = {
        "Content-Type": "application/json; charset=utf-8",
    }
    payload = {
        "siteUrl": site_url,
        "urlList": url_list
    }
    params = {
        "apikey": apikey
    }
    response = requests.post(api_url, headers=headers, params=params, json=payload)
    response.raise_for_status()  # 确保请求成功
    return response.json()

# 主程序
def main():
    try:
        print("Fetching URLs from sitemap...")
        urls = fetch_sitemap_urls(sitemap_url)
        print(f"Fetched {len(urls)} URLs.")

        # 随机打乱链接顺序
        print("Shuffling URLs...")
        random.shuffle(urls)

        # 将 URLs 分批提交，避免超出 API 限制
        batch_size = 100  # 每批提交的链接数量
        for i in range(0, len(urls), batch_size):
            batch = urls[i:i + batch_size]
            print(f"Submitting batch {i // batch_size + 1} with {len(batch)} URLs...")
            response = submit_urls_to_bing(bing_api_url, apikey, site_url, batch)
            print(f"Batch {i // batch_size + 1} submitted successfully: {response}")
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    main()
```
<!-- endtab -->
{% endtabs %}