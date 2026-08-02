---
title: 局域网服务开发
date: 2022-11-26 19:15:13
author: AI悦创
isOriginal: true
category: 
    - 科普
    - 直播
    - OBS
tag:
    - 科普
    - 直播
    - OBS
icon: kepu
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

## 背景「background」

视频：[]

## 获取计算机本机局域网 IP

### 方法一：

```python
import socket

# 获取本机计算机名称
hostname = socket.gethostname()
# 获取本机ip
ip = socket.gethostbyname(hostname)
print(ip)
```

### 方法二：

```python
import socket


def get_host_ip():
    """
    查询本机ip地址
    :return: ip
    """
    global s
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(('8.8.8.8', 80))
        ip = s.getsockname()[0]
    finally:
        s.close()

    return ip


if __name__ == '__main__':
    print(get_host_ip())
```



## 服务器启动代码

```python
# -*- coding: utf-8 -*-
# @Time    : 2022/11/22 22:01
# @Author  : AI悦创
# @FileName: demo.py
# @Software: PyCharm
# @Blog    ：https://bornforthis.cn/
# import tkinter as tk
from http.server import SimpleHTTPRequestHandler
from http.server import CGIHTTPRequestHandler
from http.server import ThreadingHTTPServer
from functools import partial
import contextlib
import sys
import os
import socket


class DualStackServer(ThreadingHTTPServer):
    def server_bind(self):
        # suppress exception when protocol is IPv4
        with contextlib.suppress(Exception):
            self.socket.setsockopt(socket.IPPROTO_IPV6, socket.IPV6_V6ONLY, 0)
        return super().server_bind()


def run(server_class=DualStackServer,
        handler_class=SimpleHTTPRequestHandler,
        port=8080,
        bind='127.0.0.1',
        cgi=False,
        directory=os.getcwd()):
    if cgi:
        handler_class = partial(CGIHTTPRequestHandler, directory=directory)
    else:
        handler_class = partial(SimpleHTTPRequestHandler, directory=directory)

    with server_class((bind, port), handler_class) as httpd:
        print(
            f"Serving HTTP on {bind} port {port} "
            f"(http://{bind}:{port}/) ..."
        )
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nKeyboard interrupt received, exiting.")
            sys.exit(0)


if __name__ == '__main__':
    port = int(input("你的端口:>>>"))
    dir = input("你的路径:>>>")
    # run(port=9011, bind='127.0.0.1')
    run(port=port, bind='127.0.0.1', directory=dir)
```

## 整合代码









欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！

::: details 公众号：AI悦创【二维码】

![](https://blog.images.bornforthis.cn/docs-images/sha256/77/77f67d48a67ec6a44a4ef1f01ffc85830eb3c121b1ece45dc5ada06e20e2f52b.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Web、Linux」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](https://blog.images.bornforthis.cn/docs-images/sha256/30/3087c629da73428daa0ee050f5b31709c30f650686164b54c724b892a422c585.jpg)

插件 GitHub：[https://github.com/sorayuki/obs-multi-rtmp](https://github.com/sorayuki/obs-multi-rtmp)
