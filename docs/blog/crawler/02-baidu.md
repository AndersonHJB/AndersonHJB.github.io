---
title: 02-SEO工具脚本，Python百度普通收录API提交工具
date: 2022-08-31 23:51:07
author: AI悦创
isOriginal: true
category: 
    - crawler
    - 百度收录小技巧
tag:
    - crawler
    - 百度收录小技巧
icon: baidu-fill
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

有兴趣的可以自行部署在服务器上，做成每日自动提交，或者 webhook 触发等。

百度提交页面：[https://ziyuan.baidu.com/linksubmit/index](https://ziyuan.baidu.com/linksubmit/index)

通过此页面可以向百度搜索主动推送资源，同时百度也提供了 API 提交接口，这样可以缩短爬虫发现网站链接的时间，但百度不保证收录和展现效果。

以本站为例，百度提供了 API 提交的样例参数。

## 推送脚本

```python
import requests
import re


# 根据站点地图获取链接
def get_urls(sitemap):
    response = requests.get(url=sitemap)
    urls = re.findall('<loc>(.*?)</loc>', response.text)
    return urls


# 推送百度 (参数：网站网址，token，网站站点地图)
def submit_baidu(site: str, token: str, sitemap: str):
    msg = []
    url_list = get_urls(sitemap)
    # print(url_list)
    url_content = "\n".join(url_list)
    response = requests.post(url=f"http://data.zz.baidu.com/urls?site={site}&token={token}",
                             headers={
                                 "User-Agent": "curl/7.12.1",
                                 "Host": "data.zz.baidu.com",
                                 "Content-Type": "text/plain",
                                 "Content-Length": "83"
                             },
                             data=url_content
                             )
    if response.status_code == 200:
        data = response.json()
        msg.append(f"成功推送的 url 条数 {data.get('success')}")
        msg.append(f"当天剩余的可推送url条数 {data.get('remain')}")
        msg.append(f'今日推送的 url 列表:')

        for url in url_list:
            msg.append(f"{url}")
        if data.get('not_same_site') is not None:
            msg.append('由于不是本站url而未处理的url列表:')
            for url in data.get('not_same_site'):
                msg.append(f"{url}")
        if data.get('not_valid') is not None:
            msg.append('不合法的url列表:')
            for url in data.get('not_valid'):
                msg.append(f"{url}")

    else:
        msg.append(f'推送失败\n{response.json()}')
    return msg


if __name__ == '__main__':
    try:
        info = submit_baidu(site='https://bornforthis.cn', token='rJcdDY5O4W9rd9eG',
                            sitemap='https://www.bornforthis.cn/sitemap.xml')
        print('\n'.join(info))
    except Exception as e:
        print(e)
```

## 进阶版本代码

使用前需要注意替换真实参数：

- site
- token
- sitemap_path

```python
# -*- coding: UTF-8 -*-

import requests
import json
import re


class Pusher:
    # 初始化参数
    def __init__(self, site, token, sitemap_path):
        self.site = site
        self.token = token
        self.sitemap_path = sitemap_path

    # 批量提交 url
    def post(self, urls):
        post_url = f"http://data.zz.baidu.com/urls?site={self.site}&token={self.token}"
        headers = {
            'User-Agent': 'curl/7.12.1',
            'Host': 'data.zz.baidu.com',
            'Content-Type': 'text/plain',
            'Content-Length': str(len(urls)),
        }
        response = requests.post(post_url, headers=headers, data=urls)

        if response.status_code != 200:
            msg_s = f"推送失败（异常状态码）：{response.status_code}\n{response.json()}"
            print(msg_s)
            return None
        response = response.text
        response = json.loads(response)

        if "error" in response:
            msg_s = f"推送失败（error）:\n{response}"
            print(msg_s)
            return None

        if "success" not in response:
            msg_s = f"推送异常（百度已更改返回体格式）:\n{response}"
            print(msg_s)
            return None

        print(f"已成功推送 {response['success']} 条 url")
        print(f"当天剩余的可推送 url 条数 ---> {response['remain']}")
        print(f"由于不是本站url而未处理的 url 列表:{response['not_same_site']}")
        print(f"不合法的 url 列表:{response['not_valid']}")
        return None

    # 获取站点 sitemap.xml 文件内容, 解析 url
    def get_url_from_sitemap(self):
        url = f"{self.site}{self.sitemap_path}"
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36',
        }
        response = requests.get(url, headers=headers)

        if response.status_code != 200:
            print(f"获取站点 xml 文件失败（异常状态码）：{response.status_code}")
            print()
            exit(0)

        sitemap_xml = response.text

        urls = re.findall(r'<loc>(.*?)</loc>', sitemap_xml, re.S)

        if urls is None or urls == [] or urls == "":
            print(f"解析 url 失败（该站点不存在 sitemap.xml 或内容为空）")
            print()
            exit(0)

        print(f"获取站点 xml 文件成功, 共有：{len(urls)} 条 url")
        print(urls)
        return urls

    # 入口
    def main(self):
        urls = "\n".join(self.get_url_from_sitemap())
        self.post(urls)


if __name__ == '__main__':
    # 站点
    site = "https://bornforthis.cn"
    # 百度提交页面提供的 token
    token = "rJcdDY5O4W9rd9eG"
    # 站点 sitemap uri
    # sitemap_path = "/zh-cn/sitemap.xml"
    sitemap_path = "/sitemap.xml"

    pusher = Pusher(site, token, sitemap_path)
    pusher.main()
```



## 参考文件

- [https://ziyuan.baidu.com/college/courseinfo?id=267&page=3s](https://ziyuan.baidu.com/college/courseinfo?id=267&page=3s)
- 

欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！

```python
import requests
import re
import time
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36,',
    'Host': 'data.zz.baidu.com',
    'Content-Length':'83'
}
print("*"*30)
print('links.txt示例:\nhttps://xxxxx.html\nhttps://xxxxx.html\nhttps://xxxxx.html\nhttps://xxxxx.html')
print("*"*30)
print('api示例:\nhttp://data.zz.baidu.com/urls?site=xxxxxxxxxxx')
push_num = 1
while push_num < 9999:
    if push_num == 1:
        answer = input("请问你是否已经将链接填入links.txt，api填入api.txt中呢，如果是则回答1\n")
    if answer == '1':
        try:
            with open('links.txt', 'r') as links:
                links = links.read()
        except FileNotFoundError:
            print("links.txt文件不存在")
        try:
            with open('api.txt', 'r') as api:
                api = api.read()
        except FileNotFoundError:
            print("links.txt文件不存在")

        def thinklink(links, api):
            if links == '':
                print("links.txt文件为空")
            else:
                if api == '':
                    print('api.txt为空')
                else:
                    try:
                        html_result = requests.post(api, headers=headers, timeout=5, data=links).text
                        return html_result
                    except:
                        return print("失败")
        push_result = thinklink(links, api)
        print('提交完成:'+push_result)
        surplus_push_num = re.findall('"remain":(.*),"', push_result)
        surplus_push_num = surplus_push_num.pop()
        print('剩余' + surplus_push_num + '次提交机会')
    else:
        print("请将内容填充!5秒钟后自动关闭")
        time.sleep(5)
        break
    print('*'*30)
    new_answer = input("是否还需要提交，如果是的话请先去更改一下相应文件，如果是请输入1,如果否请输入0\n")
    if new_answer == '0':
        print("提交结束,5秒钟后自动关闭")
        time.sleep(5)
        break
    push_num += 1
    print("现在开始第"+str(push_num)+'次提交')
```

需要在 python 文件新建两个 txt 文件，分别放 token 和链接。

然后其实就可以直接双击打开 python 文件进行提交了。如果有什么疑问可以直接问。

利用 python 向百度推送网站链接



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