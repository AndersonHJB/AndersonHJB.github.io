---
title: 5003CEM Advanced Algorithms Concurrent and Asynchronous Applications 1
date: 2024-11-14 08:35:03
author: AI悦创
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
---

## 1. Intended Learning

- Understand the multithreading concept

- Be able to explain applications of multithreading

- Understand and manage data sharing in multithreaded environments
- Be able to explain the race condition
- Understand implementation of threading (mainly) in Python and (partly) in C++



## 2. What is multithreading?

- Many of the applications you’ve written so far do one thing after another
- Multithreading allows us to run an application as separate processes which run ‘asynchronously’
- i.e., the timing is arbitrary
- This results in processes which run at the same or similar / overlapping times



## 3. Applications of multithreading

- We’ll now look at two applications of multithreading:
    1. Chat server
    2. Newspaper size getter

### 3.1 Concurrent Example 1: CHAT SERVER

- The first example of a threaded environment is a chat server

- We’ll set this up and run it in the lecture

- Note that all the code in this session is on Aula, but it needs a stack and a server

- Best way to do this is Codio

- There are instructions how to set this up on Aula

::: code-tabs

@tab server.py

```python
#server.py
#run this first 

import socket
import threading

sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

sock.bind(('127.0.0.1', 12345))

sock.listen(1)

connections = []

def handler (c, a):
    while True:
        data = c.recv(4098)
        for connection in connections:
            if connection != c:
                  connection.send(data)
        if not data:
              break

while True:
    c, a = sock.accept()
    cThread = threading.Thread(target=handler, args=(c, a))
    cThread.daemon = True
    cThread.start()
    connections.append(c)
    print(connections)
```

@tab client.py

```python
#client.py
#run multiple instances of this after starting the server

import socket
import threading

sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

sock.connect(('127.0.0.1', 12345))

def sendMsg():
    while True:
        msg = input().encode()
        sock.send(msg)

iThread = threading.Thread(target=sendMsg)
iThread.daemon = True
iThread.start()

while True:
    #this is data received back from the server
    data = sock.recv(4098).decode()
    if not data:
        break
    print(data)
```

@tab server.py

```python
# 导入 socket 和 threading 模块
import socket
import threading

# 创建一个 socket 对象，使用 IPv4 和 TCP 协议
sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# 绑定服务器 IP 和端口
sock.bind(('127.0.0.1', 12345))

# 开始监听客户端连接，最多可以排队一个连接
sock.listen(1)

# 存储所有连接的客户端
connections = []

# 定义一个 handler 函数，用于处理每个客户端的消息
def handler(c, a):
    while True:
        # 接收客户端发送的数据（最大接收 4098 字节）
        data = c.recv(4098)
        
        # 遍历所有连接的客户端，将接收到的数据转发给每个其他客户端
        for connection in connections:
            if connection != c:  # 排除自己
                connection.send(data)
        
        # 如果没有数据（客户端关闭连接），退出循环
        if not data:
            break

# 主循环，等待客户端连接
while True:
    # 接受客户端连接
    c, a = sock.accept()
    
    # 启动一个新线程处理该客户端的消息
    cThread = threading.Thread(target=handler, args=(c, a))
    cThread.daemon = True  # 设置为守护线程，程序退出时自动结束
    cThread.start()
    
    # 将新连接的客户端添加到连接列表中
    connections.append(c)
    
    # 打印当前所有连接的客户端
    print(connections)
```

@tab Client.py

```python
# 导入 socket 和 threading 模块
import socket
import threading

# 创建一个 socket 对象，使用 IPv4 和 TCP 协议
sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# 连接到服务器的 IP 和端口
sock.connect(('127.0.0.1', 12345))

# 定义一个发送消息的函数
def sendMsg():
    while True:
        # 获取用户输入，并将其编码为字节串发送
        msg = input().encode()
        sock.send(msg)

# 启动一个线程负责发送消息
iThread = threading.Thread(target=sendMsg)
iThread.daemon = True  # 设置为守护线程
iThread.start()

# 接收来自服务器的数据并打印
while True:
    # 接收数据（最大 4098 字节）
    data = sock.recv(4098).decode()
    
    # 如果没有数据（服务器关闭连接），退出循环
    if not data:
        break
    
    # 打印接收到的数据
    print(data)
```

:::

::: details

#### 1. 启动服务器 (`server.py`)：

   1. 打开一个终端窗口。
   2. 确保你已经在 `server.py` 文件所在的目录。
   3. 执行以下命令来运行服务器：
      ```bash
      python server.py
      ```
   4. 服务器应该开始监听客户端连接，等待连接的客户端发送消息。

#### 2. 启动客户端 (`client.py`)：

   你需要在多个终端窗口中启动多个客户端，以便测试多用户聊天功能。

   - 打开 **另一个终端窗口**（可以是多个窗口），并确保你在 `client.py` 文件所在的目录。
   - 执行以下命令来启动一个客户端：
     ```bash
     python client.py
     ```
   - 你可以运行多个客户端实例，只要在每个终端窗口中运行上面的命令，就能模拟多个用户同时连接到服务器。

#### 3. 测试聊天功能：

   - **客户端输入消息：** 启动客户端后，每个客户端都会提示你输入消息。你可以在每个客户端窗口输入不同的消息，看看消息是否能正确地从一个客户端传递到其他客户端。
   - **消息广播：** 当你在一个客户端输入消息并按 Enter 键时，服务器会将这条消息转发给所有其他连接的客户端，其他客户端会显示你发送的消息。

#### 4. 关闭连接：

   - 如果你想关闭某个客户端，只需在该客户端窗口按 `Ctrl + C` 或关闭该终端窗口即可。
   - 如果要停止服务器，可以在服务器的终端窗口按 `Ctrl + C`。

#### 注意事项：

- **端口占用问题：** 如果你在本地运行多个服务器或客户端，确保端口 `12345` 没有被其他程序占用。如果端口被占用，你可以选择更换端口号，比如 `12346` 等。
- **防火墙/网络问题：** 由于使用的是本地地址 (`127.0.0.1`)，它应该不受防火墙影响，但如果你要在不同机器上测试，需要确保防火墙设置允许使用该端口。

#### 总结：

1. 启动 `server.py`，它会开始监听。
2. 启动多个 `client.py` 实例，输入消息进行聊天。
3. 观察是否所有客户端都能收到其他客户端发出的消息。

:::

### 3.2 Concurrent Example 2: NEWS SCRAPERS

#### 3.2.1 non-concurrent-example-URLs.py

##### 3.2.1.1 More About Threads

- Chat Servers set up threads which run independently so that messages can be sent and received in any order

- Threads also allow processes to be run concurrently – at the same time, or near the same time

- This makes applications faster

##### 3.2.1.2 News size

- First, we’ll check out and run non-concurrent-example-URLs-timeit.py

- This goes to news URLs, reports the URL, and prints the size of the data received

- Note the time taken 

- Code analysis (excluding timeit) over

::: code-tabs

@tab non-concurrent-example-URLs.py

```python
# 导入 urllib.request 模块，用于处理 URL 请求
import urllib.request

# 定义一个包含多个 URL 的列表，后续程序会依次访问这些网站
URLS = ['http://www.foxnews.com/',
        'http://www.cnn.com/',
        'http://europe.wsj.com/',
        'http://www.bbc.co.uk/',
        'http://some-made-up-domain.com/']

# 定义一个函数用于加载指定 URL 的网页内容
# 参数 url: 要访问的 URL
# 参数 timeout: 设置连接的超时时间，单位是秒
def load_url(url, timeout):
    # 使用 urllib.request.urlopen() 打开 URL，timeout 用于指定超时时间
    # 使用 with 语句保证请求完成后会自动关闭连接
    with urllib.request.urlopen(url, timeout=timeout) as conn:
        # 读取网页内容并返回
        return conn.read()

# 定义一个函数，展示如何按顺序请求多个 URL（不使用并发）
def non_concurrent_URLs_example():
    # 遍历 URLS 列表中的每个 URL
    for url in URLS:
        try:
            # 调用 load_url 函数加载 URL，设置 60 秒的超时
            data = load_url(url, 60)
        except Exception as exc:
            # 如果发生异常（如连接失败、超时等），打印错误信息
            print('%r generated an exception: %s' % (url, exc))
        else:
            # 如果请求成功，打印网页的大小（以字节为单位）
            print('%r page is %d bytes' % (url, len(data)))

# 调用 non_concurrent_URLs_example 函数开始请求并输出结果
non_concurrent_URLs_example()
```

:::

##### 3.2.1.3 Concurrent Version

- Now we’ll run concurrent-example-URLs-timeit.py

- This does the same thing concurrently

- Again, note the time

- Let’s do the code analysis (excluding timeit)



#### 3.2.2 concurrent-example-URLs

::: code-tabs

@tab concurrent-example-URLs.py

```python
# 导入需要的库
import concurrent.futures  # 用于并发执行任务
import urllib.request  # 用于发送网络请求
import timeit  # 用于计时，虽然在此代码中未被使用

# 预定义一个URL列表
URLS = ['http://www.foxnews.com/',
        'http://www.cnn.com/',
        'http://europe.wsj.com/',
        'http://www.bbc.co.uk/',
        'http://some-made-up-domain.com/']

# 定义一个函数，用于加载指定的URL
# 该函数接受两个参数：url（要访问的网址）和timeout（请求的超时时间）
def load_url(url, timeout):
    # 使用urllib.request.urlopen()方法打开指定的URL
    # 其中timeout表示连接超时的时间（单位为秒）
    with urllib.request.urlopen(url, timeout=timeout) as conn:
        # 返回页面的内容（以字节形式）
        return conn.read()

# 定义一个函数，展示如何并发地加载多个URL
def concurrent_URLs_example():
    # 使用concurrent.futures.ThreadPoolExecutor创建一个线程池执行器
    # max_workers=5表示最多允许同时执行5个线程
    with concurrent.futures.ThreadPoolExecutor(max_workers=5) as executor:
        # 创建一个字典future_to_url，将每个URL任务与线程池中的future对象关联
        # executor.submit(load_url, url, 60)会将load_url函数及其参数提交到线程池中
        # 60是请求的超时时间
        future_to_url = {executor.submit(load_url, url, 60): url for url in URLS}
        
        # 使用concurrent.futures.as_completed()方法来遍历所有任务的结果
        # 该方法会按任务完成的顺序返回future对象
        for future in concurrent.futures.as_completed(future_to_url):
            # 获取当前future对象对应的URL
            url = future_to_url[future]
            try:
                # 调用future.result()获取任务的返回结果（即网页内容）
                data = future.result()
            except Exception as exc:
                # 如果任务执行过程中发生异常，打印异常信息
                print('%r generated an exception: %s' % (url, exc))
            else:
                # 如果任务执行成功，打印URL及其页面的字节长度
                print('%r page is %d bytes' % (url, len(data)))

# 调用concurrent_URLs_example函数来执行并发任务
concurrent_URLs_example()
```

:::

##### 3.2.2.1 Concurrent Version

- Does the same thing as the non-concurrent version

- But it does it faster!

- To prove this to yourself, check out and run the two files on Aula:

- non-concurrent-example-URLs-timeit.py

- concurrent-example-URLs-timeit.py

- It should always be true that given the same operating conditions, concurrent will be faster than the same program implemented non-concurrently

#### 3.2.3 Traces

![](https://blog.images.bornforthis.cn/docs-images/sha256/72/722e36b27d8f2846ef6128af7983f5ae01ba8aef1b4805e05d3fcac4d838d519.png)









```python
import timeit  # 导入 timeit 模块，用来计时代码执行的时间

# 将需要执行并计时的代码放在三引号之间，作为一个字符串传入 timeit
code_to_time = """
# 导入所需的模块
import concurrent.futures  # 用于并发编程的线程池模块
import urllib.request  # 用于处理 HTTP 请求
import threading  # 用于多线程

# 定义需要请求的 URL 列表
URLS = ['http://www.foxnews.com/',
        'http://www.cnn.com/',
        'http://europe.wsj.com/',
        'http://www.bbc.co.uk/',
        'http://some-made-up-domain.com/']

# 定义请求 URL 的函数，设置超时时间
def load_url(url, timeout):
    # 使用 urllib.request.urlopen 发送 HTTP 请求并读取内容
    with urllib.request.urlopen(url, timeout=timeout) as conn:
        return conn.read()

# 定义一个示例函数，演示如何使用线程池并发请求多个 URL
def concurrent_URLs_example():
    # 使用 ThreadPoolExecutor 创建一个最大线程数为 5 的线程池
    with concurrent.futures.ThreadPoolExecutor(max_workers=5) as executor:
        # 将 URL 和对应的请求任务提交到线程池，返回一个字典 future_to_url
        future_to_url = {executor.submit(load_url, url, 60): url for url in URLS}
        
        # 使用 as_completed 获取已经完成的任务
        for future in concurrent.futures.as_completed(future_to_url):
            url = future_to_url[future]  # 获取当前任务对应的 URL
            try:
                # 获取任务结果（即网页内容）
                data = future.result()
            except Exception as exc:
                # 如果请求过程中抛出异常，则打印异常信息
                print('%r generated an exception: %s' % (url, exc), \n)
            else:
                # 如果请求成功，打印网页的大小（字节数）
                print('%r page is %d bytes' % (url, len(data)),\n)
        print(\n)

# 执行并发请求的示例函数
concurrent_URLs_example()
"""

# 使用 timeit.timeit 来计时代码执行的时间
# timeit 会执行传入的代码多次，这里设置执行 10 次，最后取平均值
elapsed_time = timeit.timeit(code_to_time, number=10) / 10  # 计算 10 次执行的平均时间

# 打印每次执行的平均时间（单位为秒）
print(elapsed_time)
```










::: details 公众号：AI悦创【二维码】

![](https://blog.images.bornforthis.cn/docs-images/sha256/77/77f67d48a67ec6a44a4ef1f01ffc85830eb3c121b1ece45dc5ada06e20e2f52b.jpg)

C:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Web、Linux」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](https://blog.images.bornforthis.cn/docs-images/sha256/30/3087c629da73428daa0ee050f5b31709c30f650686164b54c724b892a422c585.jpg)