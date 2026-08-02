---
title: P06-腾讯视频弹幕工具开发
icon: blog
date: 2025-10-26 08:06:46
author: bornforthis
isOriginal: true
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

我会在此篇教程中，带你开发一个腾讯视频弹幕通用的程序，力求用户只需要传入视频链接，即可得到弹幕数据。

## 0. 目标

- [x] 主线：理解思路；
- [x] 抓取腾讯视频弹幕；
- [ ] 实现一个爬虫程序，未来用户只需要输入腾讯视频某一集链接，可以直接返回该集弹幕；
- [ ] 基础的弹幕词云显示；（内容较多，只做词云展示）

## 1. 网页分析

### 1.1 链接获取

在腾讯视频网站，打开电视剧 or 动漫，播放任意一集，查看浏览器地址栏中的 url，这个 url 由`电视剧的 id`和`每一集的 id`组成。

![](https://blog.images.bornforthis.cn/docs-images/sha256/d3/d32eef1025900d8fbe096795951d0c0bee7c19dcd5a869cc21c526b88cab35d1.png)

- **电视剧 ID**：`mzc00200of24km2`；
- **剧集 ID**：`z4101ftrdpp`；

### 1.2 打开开发者工具

继续播放视频，打开：**开发者工具**，查看 Network 中的请求，其中红框中的`180000`、`210000`之类的就是弹幕请求。

- 快捷键：F12；

- 鼠标操作 1：鼠标右键检查；

    ::: details 图片

    ![](https://blog.images.bornforthis.cn/docs-images/sha256/9a/9ae4bade9aad620e40b74c867bc605a6ed26e6e07436a390955c7bf3fb4866ce.png)

    :::

- 鼠标操作 2：

    ::: details

    ![](https://blog.images.bornforthis.cn/docs-images/sha256/61/61b184d8d6e69046cf47aa9d31fd9a117d7dc42f76284101000d94f261ff3f59.png)

    :::

### 1.3 分析弹幕 URL

![](https://blog.images.bornforthis.cn/docs-images/sha256/b5/b534b5ae1457a083d3bcea11c6e37c22e93bbfbba3b8e06764a100815703714e.png)

例如如下弹幕链接：

```url
https://dm.video.qq.com/barrage/segment/z4101ftrdpp/t/v1/1230000/1260000
```

分析弹幕链接:

- 所有弹幕都由此链接开头：`https://dm.video.qq.com/barrage/segment/`；

    > **思考🧐：** 此结论怎么来的？该如何验证？
    >
    > 可以去访问不同的电视剧、剧集进行验证分析！

- 接着由剧集 ID：`z4101ftrdpp`；

- 通用结构：`/t/v1/`；

- `/1230000/1260000`：1260000-1230000=30000，所以可以知道是以 30000 进行递增；

    - **方法一**：进行计算推测弹幕链接规律，适合老手；

    - **方法二**：人肉进行观察👀弹幕链接规律，多复制几个同一集的弹幕链接：

        ```url
        https://dm.video.qq.com/barrage/segment/z4101ftrdpp/t/v1/1230000/1260000
        https://dm.video.qq.com/barrage/segment/z4101ftrdpp/t/v1/1260000/1290000
        https://dm.video.qq.com/barrage/segment/z4101ftrdpp/t/v1/1290000/1320000
        https://dm.video.qq.com/barrage/segment/z4101ftrdpp/t/v1/1320000/1350000
        https://dm.video.qq.com/barrage/segment/z4101ftrdpp/t/v1/1350000/1380000
        https://dm.video.qq.com/barrage/segment/z4101ftrdpp/t/v1/1590000/1620000
        ```

        ::: tip

        最主要还是要有自己的思路，要知道我们为什么需要找弹幕链接的规律。因为我们需要得到的弹幕数据不止一条，而是一集电视剧的全部弹幕内容。有这个需求了之后，就算无法分析出规律，你都可以使用 AI 大模型来给你找出规律。（没思想，什么工具都救不了！）

        :::

**自此，弹幕链接全部分析完成。**

## 2. 获取弹幕

### 2.1 弹幕链接批量构造

通过分析弹幕 url 规律，构造请求地址：

::: code-tabs

@tab 代码 1：猫头鹰🦉

```python
num = 10000
video_code = 'z4101ftrdpp'
dm_url_template = "https://dm.video.qq.com/barrage/segment/{video_code}/t/v1/{start_time}/{end_time}"
for i in range(num):
    url = dm_url_template.format(video_code=video_code, start_time=i * 30000, end_time=(i + 1) * 30000)
    print(url)
```

@tab:active 代码 2：主要代码

```python
video_code = "z4101ftrdpp"  # 替换成目标视频的弹幕 ID
num = 10000  # 「盲扫的段数上限」设置一个较大的请求次数，程序会自动判断，当没有弹幕了会自动退出循环
SEG = 30000  # 每段的跨度
dm_url_template = "https://dm.video.qq.com/barrage/segment/{video_code}/t/v1/{start_time}/{end_time}"

start_time = 0
for i in range(num):
    end_time = start_time + SEG
    dm_url = dm_url_template.format(video_code=video_code, start_time=start_time, end_time=end_time)
    start_time = end_time  # 下一段从这一段的结尾继续
```

@tab 关于 format 补充

```python {15,20}
dm = "{end}"
dm = dm.format(end="ss")
print(dm)

dm = dm.format(end="ssssssss")
print(dm)

string = "aiyuechuang"
print(string.format(a=10))  # 原本的不存在，直接按原字符串输出，format 做了一个优化！
# TODO: 2025 年 10 月 27 日 猫头鹰上课时发现的问题，做补充。
# 触发的代码：
video_code = "z4101ftrdpp"  # 替换成目标视频的弹幕 ID
num = 10000  # 「盲扫的段数上限」设置一个较大的请求次数，程序会自动判断，当没有弹幕了会自动退出循环
SEG = 30000  # 每段的跨度
dm_url = "https://dm.video.qq.com/barrage/segment/{video_code}/t/v1/{start_time}/{end_time}"

start_time = 0
for i in range(num):
    end_time = start_time + SEG
    dm_url = dm_url.format(video_code=video_code, start_time=start_time, end_time=end_time)
    start_time = end_time  # 下一段从这一段的结尾继续
```

:::

**区别**：

1. **起始时间的变化**：
    - 在代码1中，`start_time` 从 `0` 开始，每次都通过 `start_time = end_time` 更新，保持连续。
    - 在代码2中，`start_time` 是通过 `i * 30000` 计算得到的，`i` 代表当前循环的次数。
2. **计算 `end_time`**：
    - 在代码1中，`end_time = start_time + SEG`，`SEG` 是固定的，且每次使用上一段的 `start_time` 作为新的 `start_time`。
    - 在代码2中，`end_time = (i + 1) * 30000`，直接依赖 `i` 计算 `start_time` 和 `end_time`，不需要记录上一个 `end_time`。

**等价性**：

- **逻辑上**，两个代码实现是等价的。两者的 `start_time` 和 `end_time` 生成的值是相同的，只是计算方式不同。
    - 代码1通过维护 `start_time` 和 `end_time` 的连续性来构造链接。
    - 代码2通过直接计算 `i` 来生成每一段的时间范围。

**结论**：

虽然计算方式不同，但最终生成的 `dm_url` 是相同的，两个代码块等价。

上面的结论可以使用代码进行验证，不过在验证之前我们需要把生成的链接进行存储来写。那么我们来编写存储代码：

::: code-tabs

@tab 代码 1

```python
num = 10000
video_code = 'z4101ftrdpp'
dm_url_template = "https://dm.video.qq.com/barrage/segment/{video_code}/t/v1/{start_time}/{end_time}"
links = []
for i in range(num):
    url = dm_url_template.format(video_code=video_code, start_time=i * 30000, end_time=(i + 1) * 30000)
    links.append(url)
```

@tab:active 代码 2

```python
video_code = "z4101ftrdpp"  # 替换成目标视频的弹幕 ID
num = 10000  # 「盲扫的段数上限」设置一个较大的请求次数，程序会自动判断，当没有弹幕了会自动退出循环
SEG = 30000  # 每段的跨度
dm_url_template = "https://dm.video.qq.com/barrage/segment/{video_code}/t/v1/{start_time}/{end_time}"

start_time = 0
links = []
for i in range(num):
    end_time = start_time + SEG
    dm_url = dm_url_template.format(video_code=video_code, start_time=start_time, end_time=end_time)
    links.append(dm_url)
    start_time = end_time  # 下一段从这一段的结尾继续
```

:::

两种方法的生成的弹幕链接已经存储，那么思考一下如何对比生成的弹幕链接是否相同？

```python {21-22,24-26}
video_code = "z4101ftrdpp"  # 替换成目标视频的弹幕 ID
num = 10000  # 「盲扫的段数上限」设置一个较大的请求次数，程序会自动判断，当没有弹幕了会自动退出循环
SEG = 30000  # 每段的跨度
dm_url_template = "https://dm.video.qq.com/barrage/segment/{video_code}/t/v1/{start_time}/{end_time}"

# 代码 1
links_1 = []
for i in range(num):
    url = dm_url_template.format(video_code=video_code, start_time=i * 30000, end_time=(i + 1) * 30000)
    links_1.append(url)

# 代码 2
start_time = 0
links_2 = []
for i in range(num):
    end_time = start_time + SEG
    dm_url = dm_url_template.format(video_code=video_code, start_time=start_time, end_time=end_time)
    links_2.append(dm_url)
    start_time = end_time  # 下一段从这一段的结尾继续

# 判断方法一
print(links_1 == links_2)

# 判断方法二
for i in range(num):
    print(links_1[i] == links_2[i])  # 适合两个列表长度不同，虽然现在长度相同。「一个列表是 100条，一个列表是 1000条，我只想检查前 50条」
```

### 2.2 把「弹幕链接」生成代码封装成函数

::: code-tabs

@tab 原始基础代码

```python
video_code = "z4101ftrdpp"  # 替换成目标视频的弹幕 ID
num = 10000  # 「盲扫的段数上限」设置一个较大的请求次数，程序会自动判断，当没有弹幕了会自动退出循环
SEG = 30000  # 每段的跨度 30秒（30000毫秒）
# 弹幕链接模板
dm_url_template = "https://dm.video.qq.com/barrage/segment/{video_code}/t/v1/{start_time}/{end_time}"

start_time = 0  # 初始化起始时间
links = []  # 存储所有请求的链接

# 生成链接
for i in range(num):
    end_time = start_time + SEG
    dm_url = dm_url_template.format(video_code=video_code, start_time=start_time, end_time=end_time)
    links.append(dm_url)
    start_time = end_time  # 下一段从这一段的结尾继续
```

@tab:active 封装后的代码

```python
def generate_dm_links(video_code, num=10000, seg=3000):
    """
    根据指定视频的弹幕ID，批量生成腾讯视频弹幕链接。
    参数：
        video_code (str): 视频的弹幕ID，例如 "z4101ftrdpp"
        num (int): 生成的最大段数（默认 10000，用于盲扫）
        seg (int): 每段时间跨度，单位为毫秒（默认 30000，即 30秒）

    返回：
        list[str]: 所有生成的弹幕链接
    """
    # 弹幕链接模板
    dm_url_template = "https://dm.video.qq.com/barrage/segment/{video_code}/t/v1/{start_time}/{end_time}"
    start_time = 0  # 初始化起始时间
    links = []  # 存储所有请求的链接

    # 生成链接
    for i in range(num):
        end_time = start_time + seg
        dm_url = dm_url_template.format(video_code=video_code, start_time=start_time, end_time=end_time)
        links.append(dm_url)
        start_time = end_time  # 下一段从这一段的结尾继续
    return links


def main():
    video_code = "z4101ftrdpp"  # 替换成目标视频的弹幕 ID
    # num = 10000  # 「盲扫的段数上限」设置一个较大的请求次数，程序会自动判断，当没有弹幕了会自动退出循环
    # SEG = 30000  # 每段的跨度 30秒（30000毫秒）
    links = generate_dm_links(video_code)
    # 打印前 5 条链接看下效果
    for url in links[:5]:
        print(url)
```

:::



### 2.3 弹幕链接请求测试

虽然弹幕数量众多，但还是有**当下**的一个最大数。如果我们请求的弹幕链接，超过最大数，代码会报错。

报错的大致位置：对于请求到的弹幕数据的处理（也就是对数据处理的时候），单纯的请求弹幕链接是不会报错的（特定当前的腾讯视频弹幕，也算腾讯视频弹幕链接的特点）。别的网站、链接没有数据有可能就直接无法请求，也会导致报错。

> **特点**：腾讯视频弹幕，没有弹幕数据也不会报错！

#### 2.3.1 浅析状态码

链接存在则会返回状态码 200：

![链接存在，且请求成功则可以返回状态码 200](https://blog.images.bornforthis.cn/docs-images/sha256/07/078922088881466ccfc7e0d0851e6c432a1edc9e8e2373b610694f1034ce9799.png)

链接不存在，请求失败显示的状态码 404：

![链接不存在，请求失败显示的状态码 404](https://blog.images.bornforthis.cn/docs-images/sha256/27/271497ee49163f0b9a3b30be1c06b937f04b70f8376363fed9166c471d51e195.png)

#### 2.3.2 分析弹幕链接有数据的前提

仅仅请求页面的状态码为 200 就一定有数据吗？

一图胜千言，状态码为 200，但是请求得到的页面是没有弹幕数据。

![状态码 200，但是没有弹幕数据](https://blog.images.bornforthis.cn/docs-images/sha256/83/83320808ff1324ef4e451b51a653c96a778e3c7cc3a4ad0dc14a4c9323775a1b.png)

故而，我们可以得出想要链接有弹幕的结论：

- **前提一**：请求弹幕链接状态码必须为 200（偶发性 304，可以考虑包含）；
- **前提二**：检查请求数据中，`"barrage_list": []` 对应的列表是否有数据；

#### 2.3.3 请求代码编写

1. **基础实现**

    ::: code-tabs

    @tab check_barrage_data

    ```python
    # 请求并验证数据
    def check_barrage_data(url):
        # 发送 GET 请求
        response = requests.get(url)
        # response.status_code 获取请求状态码
    
        if response.status_code in [200, 304]:
            # 返回的数据是 JSON 格式
            """
            In [3]: s = '{"barrage_list":[{"id":"76561203973858443","is_op":0,"head_url":"","time_offset":"0","up_count":"0","bubble_head":"","bubble_level":"","b
               ...: ubble_id":"","rick_type":0,"content_style":"","user_vip_degree":0,"create_time":"1761803901","content":"淄博前来报道","'
            In [4]: s.index("淄")
            Out[4]: 241
            # text 得到的是字符串，如果要对其提取对应的弹幕数据是不方便的。当然，这也不是说 text 一无是处，所有方法都得是分场景、方式的。
            # 只不过刚刚好弹幕数据是 json 且 requests 也提供了把请求到的数据转换成可操作的 json 结构的数据。
            """
            # data = response.text  # 文本形式取到数据，编程中字符串是极其不方便提取数据，只能按字符切片或者内置函数一个个操作
            # print(data[241:247])
            # print(data)
            # 最终选择使用 json 格式：
            data = response.json()
            # print(type(data))
            # print(data["barrage_list"])  # 作业：剩下的具体弹幕数据如何提取？
            # 下面代码如此编写，有没有什么感受？（改进建议，或者存在什么问题）
            # if data["barrage_list"]:
            #     return data["barrage_list"]
            # 重复提取数据，我们可以创建变量存储即可避免重复提取数据
            barrage_list = data["barrage_list"]
            # if len(barrage_list) > 0:
            # if bool(barrage_list) == True:
            if barrage_list:
                return barrage_list
    ```

    

    

    @tab All-Code

    ```python {36-67,79-80}
    # -*- coding: utf-8 -*-
    # @Time    : 2025/10/26 11:07
    # @Author  : AI悦创
    # @FileName: Spider.py
    # @Software: PyCharm
    # @Blog    ：https://bornforthis.cn/
    # code is far away from bugs with the god animal protecting
    #    I love animals. They taste delicious.
    import requests
    
    def generate_dm_links(video_code, num=10000, seg=30000):
        """
        根据指定视频的弹幕ID，批量生成腾讯视频弹幕链接。
        参数：
            video_code (str): 视频的弹幕ID，例如 "z4101ftrdpp"
            num (int): 生成的最大段数（默认 10000，用于盲扫）
            seg (int): 每段时间跨度，单位为毫秒（默认 30000，即 30秒）
    
        返回：
            list[str]: 所有生成的弹幕链接
        """
        # 弹幕链接模板
        dm_url_template = "https://dm.video.qq.com/barrage/segment/{video_code}/t/v1/{start_time}/{end_time}"
        start_time = 0  # 初始化起始时间
        links = []  # 存储所有请求的链接
    
        # 生成链接
        for i in range(num):
            end_time = start_time + seg
            dm_url = dm_url_template.format(video_code=video_code, start_time=start_time, end_time=end_time)
            links.append(dm_url)
            start_time = end_time  # 下一段从这一段的结尾继续
        return links
    
    
    # 请求并验证数据
    def check_barrage_data(url):
        # 发送 GET 请求
        response = requests.get(url)
        # response.status_code 获取请求状态码
    
        if response.status_code in [200, 304]:
            # 返回的数据是 JSON 格式
            """
            In [3]: s = '{"barrage_list":[{"id":"76561203973858443","is_op":0,"head_url":"","time_offset":"0","up_count":"0","bubble_head":"","bubble_level":"","b
               ...: ubble_id":"","rick_type":0,"content_style":"","user_vip_degree":0,"create_time":"1761803901","content":"淄博前来报道","'
            In [4]: s.index("淄")
            Out[4]: 241
            # text 得到的是字符串，如果要对其提取对应的弹幕数据是不方便的。当然，这也不是说 text 一无是处，所有方法都得是分场景、方式的。
            # 只不过刚刚好弹幕数据是 json 且 requests 也提供了把请求到的数据转换成可操作的 json 结构的数据。
            """
            # data = response.text  # 文本形式取到数据，编程中字符串是极其不方便提取数据，只能按字符切片或者内置函数一个个操作
            # print(data[241:247])
            # print(data)
            # 最终选择使用 json 格式：
            data = response.json()
            # print(type(data))
            # print(data["barrage_list"])  # 作业：剩下的具体弹幕数据如何提取？
            # 下面代码如此编写，有没有什么感受？（改进建议，或者存在什么问题）
            # if data["barrage_list"]:
            #     return data["barrage_list"]
            # 重复提取数据，我们可以创建变量存储即可避免重复提取数据
            barrage_list = data["barrage_list"]
            # if len(barrage_list) > 0:
            # if bool(barrage_list) == True:
            if barrage_list:
                return barrage_list
    
            
    def main():
        video_code = "z4101ftrdpp"  # 替换成目标视频的弹幕 ID
        # num = 10000  # 「盲扫的段数上限」设置一个较大的请求次数，程序会自动判断，当没有弹幕了会自动退出循环
        # SEG = 30000  # 每段的跨度 30秒（30000毫秒）
        links = generate_dm_links(video_code)
    
        # 打印前 5 条链接看下效果
        for url in links[:5]:
            # print(url)
            barrage_list = check_barrage_data(url)
            print(barrage_list)
    
    main()
    ```

    :::

2. **使函数更加强壮，增加异常处理**

    例如在弹幕链接请求失败时，试图提取：`data["barrage_list"]` 时会产生报错。

    ::: code-tabs

    @tab check_barrage_data

    ```python
    # 请求并验证数据
    def check_barrage_data(url: str):
        # 发送 GET 请求
        try:
            response = requests.get(url)
    
            if response.status_code in [200, 304]:
                # 返回的数据是 JSON 格式
                data = response.json()
                barrage_list = data["barrage_list"]
                if barrage_list:
                    return barrage_list
        except Exception as err:
            # 只需要链接有效信息
            # 方法一：
            print(f"请求错误: {url[url.index('v1')+2:]}, 错误信息: {err}")
            # 方法二：
            print(f"请求错误: {''.join(url.split(r'/')[-2:])}, 错误信息: {err}")
            return False
    ```

    @tab All-Code

    ```python {40,49-55}
    # -*- coding: utf-8 -*-
    # @Time    : 2025/10/26 11:07
    # @Author  : AI悦创
    # @FileName: Spider.py
    # @Software: PyCharm
    # @Blog    ：https://bornforthis.cn/
    # code is far away from bugs with the god animal protecting
    #    I love animals. They taste delicious.
    import requests
    
    
    def generate_dm_links(video_code, num=10000, seg=30000):
        """
        根据指定视频的弹幕ID，批量生成腾讯视频弹幕链接。
        参数：
            video_code (str): 视频的弹幕ID，例如 "z4101ftrdpp"
            num (int): 生成的最大段数（默认 10000，用于盲扫）
            seg (int): 每段时间跨度，单位为毫秒（默认 30000，即 30秒）
    
        返回：
            list[str]: 所有生成的弹幕链接
        """
        # 弹幕链接模板
        dm_url_template = "https://dm.video.qq.com/barrage/segment/{video_code}/t/v1/{start_time}/{end_time}"
        start_time = 0  # 初始化起始时间
        links = []  # 存储所有请求的链接
    
        # 生成链接
        for i in range(num):
            end_time = start_time + seg
            dm_url = dm_url_template.format(video_code=video_code, start_time=start_time, end_time=end_time)
            links.append(dm_url)
            start_time = end_time  # 下一段从这一段的结尾继续
        return links
    
    
    # 请求并验证数据
    def check_barrage_data(url: str):
        # 发送 GET 请求
        try:
            response = requests.get(url)
    
            if response.status_code in [200, 304]:
                # 返回的数据是 JSON 格式
                data = response.json()
                barrage_list = data["barrage_list"]
                if barrage_list:
                    return barrage_list
        except Exception as err:
            # 只需要链接有效信息
            # 方法一：
            print(f"请求错误: {url[url.index('v1')+2:]}, 错误信息: {err}")
            # 方法二：
            print(f"请求错误: {''.join(url.split(r'/')[-2:])}, 错误信息: {err}")
            return False
    
    
    def main():
        video_code = "z4101ftrdpp"  # 替换成目标视频的弹幕 ID
        # num = 10000  # 「盲扫的段数上限」设置一个较大的请求次数，程序会自动判断，当没有弹幕了会自动退出循环
        # SEG = 30000  # 每段的跨度 30秒（30000毫秒）
        links = generate_dm_links(video_code)
    
        # 打印前 5 条链接看下效果
        for url in links[-6:]:
            print(url)
            barrage_list = check_barrage_data(url)
    
    
    main()
    ```

    :::

    ::: tip 补充

    **为什么下面的代码不做异常处理？**

    ```python
    barrage_list = data["barrage_list"]
    if barrage_list:
        return barrage_list
    ```

    按正常情况来说：`data["barrage_list"]` 在数据不存在时，提取是会报错的。这里不处理的原因有二：

    - **其一**：如果 `data["barrage_list"]` 出现报错，则依然会触发先有的外围 try/except；
    - **其二**：经过分析发现，腾讯视频弹幕链接，只要能请求成功的，必然包含 `"barrage_list"` 「仅限于腾讯视频弹幕，别的平台具体情况，具体分析」；

    :::

::: info 小讨论｜个人经验，仅供参考！

弹幕是基于什么内容而来？——基于腾讯视频中的电视剧、动漫、电影等剧情而来，并不是直击发送者真实的情感。较为准确一些来说：是触景生情、代入感而来。

还有什么途径有更直击的情感、情绪数据分析呢？——网易云（网抑云）。网易云上有歌曲评论，是有极大的触动。

![](https://blog.images.bornforthis.cn/docs-images/sha256/6e/6e83ea783e4a5fbdc48d0db5e3bcd2b2be662a2284aaa34cf32340e1346c4745.png)

:::

### 2.4 保存请求的评论数据

#### 2.4.1 基础存储弹幕数据「必须掌握！」

对于基础存储方法来说，我们目标做的是词云展示，我们只需要把弹幕内容报错即可，其它数据先暂时不管。

保存文件名：`barrage-of-comments.txt`

::: code-tabs

@tab parse_barrage_data()

```python
def parse_barrage_data(data: list[dict]):
    # print(len(data))
    """对于基础存储方法来说，我们目标做的是词云展示，我们只需要把弹幕内容报错即可，其它数据先暂时不管。"""
    for barrage in data:
        print(barrage["content"])
        with open('barrage-of-comments.txt', 'a+', encoding='utf-8') as f:
            f.write(barrage['content'] + '\n')
    # current version：barrage-of-comments.txt
    # 存在问题：如果保存失败，需要把之前已存储的数据进行清空或者删除。

    # next version：barrage-of-comments.csv （初步尝试保存多条数据）
```

@tab All-Code

```python {58-68}
# -*- coding: utf-8 -*-
# @Time    : 2025/10/26 11:07
# @Author  : AI悦创
# @FileName: Spider.py
# @Software: PyCharm
# @Blog    ：https://bornforthis.cn/
# code is far away from bugs with the god animal protecting
#    I love animals. They taste delicious.
import requests


def generate_dm_links(video_code, num=10000, seg=30000):
    """
    根据指定视频的弹幕ID，批量生成腾讯视频弹幕链接。
    参数：
        video_code (str): 视频的弹幕ID，例如 "z4101ftrdpp"
        num (int): 生成的最大段数（默认 10000，用于盲扫）
        seg (int): 每段时间跨度，单位为毫秒（默认 30000，即 30秒）

    返回：
        list[str]: 所有生成的弹幕链接
    """
    # 弹幕链接模板
    dm_url_template = "https://dm.video.qq.com/barrage/segment/{video_code}/t/v1/{start_time}/{end_time}"
    start_time = 0  # 初始化起始时间
    links = []  # 存储所有请求的链接

    # 生成链接
    for i in range(num):
        end_time = start_time + seg
        dm_url = dm_url_template.format(video_code=video_code, start_time=start_time, end_time=end_time)
        links.append(dm_url)
        start_time = end_time  # 下一段从这一段的结尾继续
    return links


# 请求并验证数据
def check_barrage_data(url: str):
    # 发送 GET 请求
    try:
        response = requests.get(url)

        if response.status_code in [200, 304]:
            # 返回的数据是 JSON 格式
            data = response.json()
            barrage_list = data["barrage_list"]
            if barrage_list:
                return barrage_list
    except Exception as err:
        # 只需要链接有效信息
        # 方法一：
        print(f"请求错误: {url[url.index('v1') + 2:]}, 错误信息: {err}")
        # 方法二：
        # print(f"请求错误: {''.join(url.split(r'/')[-2:])}, 错误信息: {err}")
        return False


def parse_barrage_data(data: list[dict]):
    # print(len(data))
    """对于基础存储方法来说，我们目标做的是词云展示，我们只需要把弹幕内容报错即可，其它数据先暂时不管。"""
    for barrage in data:
        print(barrage["content"])
        with open('barrage-of-comments.txt', 'a+', encoding='utf-8') as f:
            f.write(barrage['content'] + '\n')
    # current version：barrage-of-comments.txt
    # 存在问题：如果保存失败，需要把之前已存储的数据进行清空或者删除。

    # next version：barrage-of-comments.csv （初步尝试保存多条数据）


def main():
    video_code = "z4101ftrdpp"  # 替换成目标视频的弹幕 ID
    # num = 10000  # 「盲扫的段数上限」设置一个较大的请求次数，程序会自动判断，当没有弹幕了会自动退出循环
    # SEG = 30000  # 每段的跨度 30秒（30000毫秒）
    links = generate_dm_links(video_code)

    # 打印前 5 条链接看下效果
    for url in links[:8]:
        # print(url)
        barrage_list = check_barrage_data(url)
        # print(barrage_list)
        parse_barrage_data(barrage_list)


main()
```

:::

现在函数 `parse_barrage_data()` 代码实现存在问题：

1. 如果保存失败，需要把之前已存储的数据进行清空或者删除。
2. 另一种就是在我们开发过程当中，是要时不时进行运行代码测试的，也会产生数据保存的，也需要把之前测试保存的数据进行清除。

##### 2.4.1.1 解决方案

- **方法一**：手动删除文件；（原代码无需修改）
- **方法二**：每次保存文件名不一样；
- **方法三**：把之前保存成功的文件，先删除再保存或者清空；
- **方法四**：设计改进存储策略；



##### 2.4.1.2 方法二之「语法」

四种便捷的实现方法：

::: tabs

@tab uuid：

```python
import uuid

print(uuid.uuid1())
print(uuid.uuid4())

# ---output---
fbcf64c4-c152-11f0-88fd-b65e664f0b45
c10bbfd5-6baa-4a87-867a-bc070c3047fe
```

@tab **使用 time 获取当前时间戳**：

```python
import time

# 每个时间戳都以自从 1970 年 1 月 1 日午夜（历元）经过了多长时间来表示。
print(time.time())  # 获取当前时间戳

# ---output---
1763122477.926872
```

**补充**：使用 time 获取当前时间：

```python
import time

t = time.localtime()
print(t)

# ---output---
time.struct_time(tm_year=2025, tm_mon=11, tm_mday=14, tm_hour=20, tm_min=15, tm_sec=44, tm_wday=4, tm_yday=318, tm_isdst=0)
```

提取具体的提起值：

```python
import time

t = time.localtime()
print(t.tm_year)
print(t.tm_mday)

# ---output---
2025
14
```

**格式化时间 → 字符串**：

```python
import time

print(time.strftime("%Y-%m-%d %H:%M:%S"))
print(time.strftime("%Y 年 %m 月 %d 日 当前时间：%H:%M:%S"))

# ---output---
2025-11-14 20:19:21
2025 年 11 月 14 日 当前时间：20:19:21
```

**使用 time 库，实现等待效果**：

1. 有些时候，我们希望等待某些数据处理完成之后，再执行其他相关代码，不想直接无缝衔接的运行。

    > **例如**：抓数据的代码，需要下载 5 分钟，那么我们另一个要处理这个抓到的数据，必须要等待 5 分钟后再启动。
    >
    > 有可能你会问，不是同一个代码文件吗？代码又是从上到下执行的，处理数据的代码肯定是要等待前面抓取执行完成之后，才会执行的呀？
    >
    > bingo！是这样的没错！很多时候，我们是会把不同功能的代码分开写在不同的代码文件，所以可以在那个处理数据的代码开头添加一下 `time.sleep()`。
    >
    > 当然，还有一种就是下面的第二点。

2. 我们的爬虫代码，请求弹幕速度过快，有可能会导致腾讯短期禁止我们继续抓取弹幕；（封禁策略一般是：封当前电脑所处网络的 IP）

    > 这个时候代码是在同一个文件，我们希望循环再进入下一次操作时，要等待一下，模拟间隔。
    >
    > 本身如果是人访问肯定是会有间隔和慢，且速度不一致，如果频率过快、处理时间一致，腾讯就有可能会识别出是非人在访问数据，就会封禁！——**<span style="color:orange">本身就是使代码模拟人来操作！就是使程序更像人！</span>**
    >
    > **探究本质**：只要是人，就会带来价值与利益，而机器只会无情且快速的爬取！只要访问服务商，服务商就要为此付费，而如果是一个机器人批量访问，虽然给服务商增加了访问数据，但频繁、快速的请求抓取，也在无形的增加服务器的压力，且没有实质性的利益带来。
    >
    > 此刻，你会突然顿悟：**<span style="color:orange">那些烦人的验证码为什么会存在，证明人是人！</span>**

代码实现如下：

```python
import time

print(time.strftime("%Y-%m-%d %H:%M:%S"))  # 先输出此行代码结果
time.sleep(60)  # 等待 60 秒后，再输出下面👇的日期结果！（就是睡个 60 秒）
print(time.strftime("%Y 年 %m 月 %d 日 当前时间：%H:%M:%S"))

# ---output---
2025-11-14 20:29:45
2025 年 11 月 14 日 当前时间：20:30:45
```

@tab 使用 datetime 获取当前日期：

```python
from datetime import datetime

now = datetime.now()
print(now)

# 按格式输出当前时间

now = datetime.now()
print(now.strftime("%Y-%m-%d %H:%M:%S"))

# ---output---
2025-11-14 21:06:30.881839
2025-11-14 21:06:30
```

**常用格式：**

| 格式 | 含义      | 示例 |
| ---- | --------- | ---- |
| `%Y` | 年(4位)   | 2025 |
| `%m` | 月        | 11   |
| `%d` | 日        | 14   |
| `%H` | 小时(24h) | 20   |
| `%M` | 分钟      | 12   |
| `%S` | 秒        | 35   |

@tab 借助 random 实现：重复率“较高”，但好理解。

```python
import random

nums = list("0123456789")
random.shuffle(nums)
print(nums)
print("文件名称：", "".join(nums))

# ---output---
['6', '7', '8', '9', '0', '5', '4', '1', '2', '3']
文件名称： 6789054123
```

可以自己设计代码，让降低 random 随机的重复率。不能说把时间放进去，那都用时间了，为什么不把时间放进去！

为什么时间方式不会有重复率问题？时间是往前走的，所以肯定是比较稳妥的！而 random 依赖的是我们提供的数据与策略，所以会有重复率的问题（也就是重复出现的问题）。可以自己尝试设计，降低重复率！

举个例子：双重随机「一个负责打乱随机，一个负责随机生成」

```python
import random

data = [10, 20, 30, 40, 50, 60, 70]

# 随机提取 1 个数据：random.choice()
result = random.choice(data)  # 从列表随机返回一个元素
print(result)
# 随机提取 多个不重复的数据：random.sample()（最常用）
result = random.sample(data, 3)  # 随机取 3 个，不会重复
# 自动保证不重复
# 不会修改原列表
print(result)

# 随机提取 多个可重复的数据：random.choices()
result = random.choices(data, k=3)  # 随机取 3 个，允许重复，必须把 k 写出来，因为 choices 还有别的参数
# 指的是：允许 3 个元素可以重复出现，例如 [1, 1, 1]。并不是说多次随机重复出现 [1, 1, 1]、[1, 1, 1]、[1, 1, 1]
print(result)
```

实现策略代码：

```python
nums = list("0123456789")
random.shuffle(nums)
# select_data = random.sample(nums, 3) * random.randint(1, 10)
select_data = random.choices(nums, k=3) * random.randint(1, 10)
print(select_data)

# 可以使文件名更加规整
from datetime import datetime
filename = f"{datetime.today().strftime('%Y%m%d%H%M%S')}-{select_data}.txt"
filename = f"悦创资本：{datetime.today().strftime('%Y%m%d%H%M%S')}-{''.join(select_data)}.txt"
print(filename)
```

:::



##### 2.4.1.3 探索 time 设定微历史

time 关注的是“从 1970 年过了多少秒”，是系统级时间。（系统更喜欢时间戳！）

datetime 关注的是“现在的年月日时分秒”，是人类时间。（人类更喜欢这样的时间表达！）

两者解决的不是同一个问题，因此必须共存。

为什么会是 1970 年开始？——因为 **Unix 系统把“1970-01-01 00:00:00 UTC” 定义为时间的起点（Epoch）**。

这个时间称为：**Unix Epoch（Unix 纪元）**，所有计算机时间戳（包括 Python 的 `time.time()`）都是在计算：

```python
从 1970-01-01 00:00:00 UTC 到现在一共过了多少秒？
```

**举个例子🌰**：不同的新能源汽车厂商，使用的汽车充电器是不一样！未来必然统一充电器接口，所以当时那个年代就类似于提出：大家做计算机，就都以这个时间为起点吧！不然每台计算机各用各的时间起点，会导致数据、工作等无法同步或者兼容！

**那为什么偏偏选 1970？**

1. Unix 系统诞生时间附近；

    ::: info

    Unix 诞生于 **1969–1970 年**，当时创造 Unix 的工程师（Ken Thompson、Dennis Ritchie）需要设定一个统一的时间起点，方便计算时间差。

    所以他们非常自然地设定为：

    ✔ 1970 年初；

    ✔ 世界标准 UTC；

    ✔ 干净整整齐齐从 0 点开始；

    :::

2. 1970 年前的数据非常少；

    ::: info

    在 1960 年代末，计算机刚兴起，几乎没有跨年历史数据需要对齐。

    选择 1970 年可以保证：

    - 不会因为历史数据缺乏造成麻烦；
    - 从“现在”往后记录就足够用了；

    :::

3. 方便计算机内部存储（二进制、32 位整数）；

    ::: info

    Unix 早期使用 **32 位整数**存储秒数。

    如果从 1970 开始：

    - 所有秒数都是 **正整数**（没有负号）；
    - 用 32 位整数够用几十年；
    - 符号位也能正常利用；

    如果往前推时间，秒数会变成负数（很不方便）。

    :::

4. 避免“闰秒”、“闰年”等历史问题；

    ::: info

    1970 之后的世界协调 UTC 时间体系已经比较稳定。

    在此之前：

    - 不同地区的时区乱七八糟；
    - 夏令时没有统一规则；
    - UTC 还没完全标准化；
    - 闰秒制度 1972 年才确立；

    所以从 1970 开始最省心。

    :::
    
    **用一句最精确的话概括**：Unix 开发者选择 1970-01-01 作为统一的时间起点（Epoch），是因为它接近系统诞生时间、不会产生历史计算问题、且便于使用 32 位整数记录秒数。
    
    > **计算机是靠“秒”来理解时间的。** 为了统一标准，工程师们规定： “所有时间都从 1970 年的开头算起，往后每多一秒就 +1。” 这样全世界所有程序都能用同一套时间计数规则，不会混乱。

##### 2.4.1.4 方法二之「实现」

1. **第一步**：把函数 `parse_barrage_data` 中的文件保存名称，改成参数。

    ```python {1,6}
    def parse_barrage_data(filename, data: list[dict]):
        # print(len(data))
        """对于基础存储方法来说，我们目标做的是词云展示，我们只需要把弹幕内容报错即可，其它数据先暂时不管。"""
        for barrage in data:
            print(barrage["content"])
            with open(filename, 'a+', encoding='utf-8') as f:
                f.write(barrage['content'] + '\n')
        # current version：barrage-of-comments.txt
        # 存在问题：如果保存失败，需要把之前已存储的数据进行清空或者删除。
    
        # next version：barrage-of-comments.csv （初步尝试保存多条数据）
    ```

2. **第二步**：编写函数 `generate_filename`

    补充：可以直接写在原本的保存函数中 `parse_barrage_data`，只不过方法太多所以需要独立出一个函数来编写。

    ```python
    def generate_filename() -> str:
        # 'barrage-of-comments.txt'
        # 一般开发中，我们是推荐把需要的库写在最开头的，这里为了便于演示、以及在需要的时候导入相应的库，就直接写在函数中。
        # 下面代码中要用什么代码，就留什么代码，其它代码删除注释都可以。
        # 使用 uuid
        from uuid import uuid4
        filename = f'barrage-of-comments-{uuid4()}.txt'
    
        # 使用 time 方法
        import time
        filename = f'barrage-of-comments-{time.time()}.txt'
        # 其实是可以直接写 return 返回的，但是函数一遇到 return 就会结束。故而这里特意创建 filename 变量，来进行多次覆盖，最后使用 return 返回。
        # 主要是为了保证代码可以直接运行，后面可以考虑优化改进，毕竟导入太多不想要的库了。（可以思考看看如何实现）
    
        # 使用 datetime 方法
        from datetime import datetime
        filename = f'barrage-of-comments-{datetime.now()}.txt'
    
        # 使用 random 方法
        import random
        data_nums = list(range(100))
        random.shuffle(data_nums)
        filename = f'barrage-of-comments-{random.sample(data_nums, 9)}.txt'
        return filename
    ```

3. **第三步**：改进函数 `generate_filename` 实现，实现可选名称创建方法。

    ```python
    def generate_filename(choice='uuid'):
        if choice == 'uuid':
            # 使用 uuid
            from uuid import uuid4
            filename = f'barrage-of-comments-{uuid4()}.txt'
        elif choice == 'time':
            # 使用 time 方法
            import time
            filename = f'barrage-of-comments-{time.time()}.txt'
        elif choice == 'datetime':
            # 使用 datetime 方法
            from datetime import datetime
            filename = f'barrage-of-comments-{datetime.now()}.txt'
        elif choice == 'random':
            # 使用 random 方法
            import random
            data_nums = list(range(100))
            random.shuffle(data_nums)
            filename = f'barrage-of-comments-{random.sample(data_nums, 9)}.txt'
        return filename
    ```

    修正规范：

    ```python
    def generate_filename(choice='uuid'):
        filename = 'barrage-of-comments-'
        if choice == 'uuid':
            # 使用 uuid
            from uuid import uuid4
            filename = f'{filename}{uuid4()}.txt'
        elif choice == 'time':
            # 使用 time 方法
            import time
            filename = f'{filename}{time.time()}.txt'
        elif choice == 'datetime':
            # 使用 datetime 方法
            from datetime import datetime
            filename = f'{filename}{datetime.now()}.txt'
        elif choice == 'random':
            # 使用 random 方法
            import random
            data_nums = list(range(100))
            random.shuffle(data_nums)
            filename = f'{filename}{random.sample(data_nums, 9)}.txt'
        return filename
    ```

4. 修改 main 函数代码适配

    ```python {12-13}
    def main():
        video_code = "z4101ftrdpp"  # 替换成目标视频的弹幕 ID
        # num = 10000  # 「盲扫的段数上限」设置一个较大的请求次数，程序会自动判断，当没有弹幕了会自动退出循环
        # SEG = 30000  # 每段的跨度 30秒（30000毫秒）
        links = generate_dm_links(video_code)
    
        # 打印前 5 条链接看下效果
        for url in links[:8]:
            # print(url)
            barrage_list = check_barrage_data(url)
            # print(barrage_list)
            filename = generate_filename(choice='uuid')
            parse_barrage_data(filename, barrage_list)
    ```

    按上面的代码会有什么问题？运行代码看看：

    ![](https://blog.images.bornforthis.cn/docs-images/sha256/59/59a4b81badf768a21dadb3a0f4d2dad6a4e35bb1e192e8b5aeea65a27f77f730.png)

    几次循环就会生成几个不同的文件名，导致一个弹幕一个文件，而我们需要所有弹幕存在同一个文件，该怎么修改呢？

    > 想要一个弹幕一个文件，就按现在的方法存储即可。

    只需要把文件名的生成放在 for 循环之外即可。

    ::: code-tabs
    
    @tab main
    
    ```python
    def main():
        video_code = "z4101ftrdpp"  # 替换成目标视频的弹幕 ID
        # num = 10000  # 「盲扫的段数上限」设置一个较大的请求次数，程序会自动判断，当没有弹幕了会自动退出循环
        # SEG = 30000  # 每段的跨度 30秒（30000毫秒）
        links = generate_dm_links(video_code)
        
        filename = generate_filename(choice='uuid')
        # 打印前 5 条链接看下效果
        for url in links[:8]:
            # print(url)
            barrage_list = check_barrage_data(url)
            # print(barrage_list)
            # filename = generate_filename(choice='uuid')
            parse_barrage_data(filename, barrage_list)
    ```
    
    @tab 目前完整代码
    
    ```python
    # -*- coding: utf-8 -*-
    # @Time    : 2025/10/26 11:07
    # @Author  : AI悦创
    # @FileName: Spider.py
    # @Software: PyCharm
    # @Blog    ：https://bornforthis.cn/
    # code is far away from bugs with the god animal protecting
    #    I love animals. They taste delicious.
    import requests
    
    
    def generate_dm_links(video_code, num=10000, seg=30000):
        """
        根据指定视频的弹幕ID，批量生成腾讯视频弹幕链接。
        参数：
            video_code (str): 视频的弹幕ID，例如 "z4101ftrdpp"
            num (int): 生成的最大段数（默认 10000，用于盲扫）
            seg (int): 每段时间跨度，单位为毫秒（默认 30000，即 30秒）
    
        返回：
            list[str]: 所有生成的弹幕链接
        """
        # 弹幕链接模板
        dm_url_template = "https://dm.video.qq.com/barrage/segment/{video_code}/t/v1/{start_time}/{end_time}"
        start_time = 0  # 初始化起始时间
        links = []  # 存储所有请求的链接
    
        # 生成链接
        for i in range(num):
            end_time = start_time + seg
            dm_url = dm_url_template.format(video_code=video_code, start_time=start_time, end_time=end_time)
            links.append(dm_url)
            start_time = end_time  # 下一段从这一段的结尾继续
        return links
    
    
    # 请求并验证数据
    def check_barrage_data(url: str):
        # 发送 GET 请求
        try:
            response = requests.get(url)
    
            if response.status_code in [200, 304]:
                # 返回的数据是 JSON 格式
                data = response.json()
                barrage_list = data["barrage_list"]
                if barrage_list:
                    return barrage_list
        except Exception as err:
            # 只需要链接有效信息
            # 方法一：
            print(f"请求错误: {url[url.index('v1') + 2:]}, 错误信息: {err}")
            # 方法二：
            # print(f"请求错误: {''.join(url.split(r'/')[-2:])}, 错误信息: {err}")
            return False
    
    
    def parse_barrage_data(filename, data: list[dict]):
        # print(len(data))
        """对于基础存储方法来说，我们目标做的是词云展示，我们只需要把弹幕内容报错即可，其它数据先暂时不管。"""
        for barrage in data:
            print(barrage["content"])
            with open(filename, 'a+', encoding='utf-8') as f:
                f.write(barrage['content'] + '\n')
        # current version：barrage-of-comments.txt
        # 存在问题：如果保存失败，需要把之前已存储的数据进行清空或者删除。
    
        # next version：barrage-of-comments.csv （初步尝试保存多条数据）
    
    
    def generate_filename(choice='uuid'):
        filename = 'barrage-of-comments-'
        if choice == 'uuid':
            # 使用 uuid
            from uuid import uuid4
            filename = f'{filename}{uuid4()}.txt'
        elif choice == 'time':
            # 使用 time 方法
            import time
            filename = f'{filename}{time.time()}.txt'
        elif choice == 'datetime':
            # 使用 datetime 方法
            from datetime import datetime
            filename = f'{filename}{datetime.now()}.txt'
        elif choice == 'random':
            # 使用 random 方法
            import random
            data_nums = list(range(100))
            random.shuffle(data_nums)
            filename = f'{filename}{random.sample(data_nums, 9)}.txt'
        return filename
    
    
    def main():
        video_code = "z4101ftrdpp"  # 替换成目标视频的弹幕 ID
        # num = 10000  # 「盲扫的段数上限」设置一个较大的请求次数，程序会自动判断，当没有弹幕了会自动退出循环
        # SEG = 30000  # 每段的跨度 30秒（30000毫秒）
        links = generate_dm_links(video_code)
    
        filename = generate_filename(choice='uuid')
        # 打印前 5 条链接看下效果
        for url in links[:8]:
            # print(url)
            barrage_list = check_barrage_data(url)
            # print(barrage_list)
            # filename = generate_filename(choice='uuid')
            parse_barrage_data(filename, barrage_list)
    
    
    main()
    ```
    
    :::

##### 2.4.1.5 方法三

- **方案一**：实现的策略就是：每次运行前删除目标文件。

    这种方式会确保每次运行时不会遗留上次的文件。你可以在 `parse_barrage_data` 函数开始时先删除文件，然后再写入新内容。

    ::: code-tabs

    @tab main

    ```python
    import os
    
    
    def main():
        # ---snip---
    
        filename = 'barrage-of-comments.txt'
        # 如果文件已存在，先删除
        if os.path.exists(filename):
            os.remove(filename)
    
        # 打印前 5 条链接看下效果
        for url in links[:8]:
            # ---snip---
            parse_barrage_data(filename, barrage_list)
    ```

    @tab 方法三的完整代码：

    ```python
    # -*- coding: utf-8 -*-
    # @Time    : 2025/11/17 19:47
    # @Author  : AI悦创
    # @FileName: 方法三.py
    # @Software: PyCharm
    # @Blog    ：https://bornforthis.cn/
    # code is far away from bugs with the god animal protecting
    #    I love animals. They taste delicious.
    import os
    import requests
    
    def generate_dm_links(video_code, num=10000, seg=30000):
        """
        根据指定视频的弹幕ID，批量生成腾讯视频弹幕链接。
        参数：
            video_code (str): 视频的弹幕ID，例如 "z4101ftrdpp"
            num (int): 生成的最大段数（默认 10000，用于盲扫）
            seg (int): 每段时间跨度，单位为毫秒（默认 30000，即 30秒）
    
        返回：
            list[str]: 所有生成的弹幕链接
        """
        # 弹幕链接模板
        dm_url_template = "https://dm.video.qq.com/barrage/segment/{video_code}/t/v1/{start_time}/{end_time}"
        start_time = 0  # 初始化起始时间
        links = []  # 存储所有请求的链接
    
        # 生成链接
        for i in range(num):
            end_time = start_time + seg
            dm_url = dm_url_template.format(video_code=video_code, start_time=start_time, end_time=end_time)
            links.append(dm_url)
            start_time = end_time  # 下一段从这一段的结尾继续
        return links
    
    
    # 请求并验证数据
    def check_barrage_data(url: str):
        # 发送 GET 请求
        try:
            response = requests.get(url)
    
            if response.status_code in [200, 304]:
                # 返回的数据是 JSON 格式
                data = response.json()
                barrage_list = data["barrage_list"]
                if barrage_list:
                    return barrage_list
        except Exception as err:
            # 只需要链接有效信息
            # 方法一：
            print(f"请求错误: {url[url.index('v1') + 2:]}, 错误信息: {err}")
            # 方法二：
            # print(f"请求错误: {''.join(url.split(r'/')[-2:])}, 错误信息: {err}")
            return False
    
    
    def parse_barrage_data(filename, data):
        for barrage in data:
            print(barrage["content"])
            with open(filename, 'a+', encoding='utf-8') as f:
                f.write(barrage['content'] + '\n')
        # current version：barrage-of-comments.txt
        # 存在问题：如果保存失败，需要把之前已存储的数据进行清空或者删除。
    
        # next version：barrage-of-comments.csv （初步尝试保存多条数据）
    
    
    def main():
        video_code = "z4101ftrdpp"  # 替换成目标视频的弹幕 ID
        # num = 10000  # 「盲扫的段数上限」设置一个较大的请求次数，程序会自动判断，当没有弹幕了会自动退出循环
        # SEG = 30000  # 每段的跨度 30秒（30000毫秒）
        links = generate_dm_links(video_code)
    
        filename = 'barrage-of-comments.txt'
        # 1) 如果文件已存在，先删除
        if os.path.exists(filename):
            os.remove(filename)
    
        # 打印前 5 条链接看下效果
        for url in links[:8]:
            # print(url)
            barrage_list = check_barrage_data(url)
            # print(barrage_list)
            # filename = generate_filename(choice='uuid')
            parse_barrage_data(filename, barrage_list)
    
    
    main()
    ```

    :::

- **方案二**：除了把文件删除，还可以把已经存在的文件内容清空。~~（也就是每次运行前清空文件内容）（一种是把之前已经存储的数据进行清空）~~

    具体来说：就是在每次运行程序之前，可以手动清空文件内容，确保每次执行时文件都是空的。这样无论成功还是失败，文件内容都会被清空，确保没有“上次遗留”的数据。

    ::: code-tabs

    @tab main

    ```python {6-7}
    def main():
        # ---snip---
    
        filename = 'barrage-of-comments.txt'
        # 先清空文件
        with open(filename, 'w', encoding='utf-8') as f:
            f.truncate(0)  # 清空文件内容
    
        # 打印前 5 条链接看下效果
        for url in links:
            # ---snip---
            parse_barrage_data(filename, barrage_list)
    ```

    @tab 此方法的完整代码

    ```python
    # -*- coding: utf-8 -*-
    # @Time    : 2025/11/17 20:23
    # @Author  : AI悦创
    # @FileName: 清空.py
    # @Software: PyCharm
    # @Blog    ：https://bornforthis.cn/
    # code is far away from bugs with the god animal protecting
    #    I love animals. They taste delicious.
    import os
    import requests
    
    def generate_dm_links(video_code, num=10000, seg=30000):
        """
        根据指定视频的弹幕ID，批量生成腾讯视频弹幕链接。
        参数：
            video_code (str): 视频的弹幕ID，例如 "z4101ftrdpp"
            num (int): 生成的最大段数（默认 10000，用于盲扫）
            seg (int): 每段时间跨度，单位为毫秒（默认 30000，即 30秒）
    
        返回：
            list[str]: 所有生成的弹幕链接
        """
        # 弹幕链接模板
        dm_url_template = "https://dm.video.qq.com/barrage/segment/{video_code}/t/v1/{start_time}/{end_time}"
        start_time = 0  # 初始化起始时间
        links = []  # 存储所有请求的链接
    
        # 生成链接
        for i in range(num):
            end_time = start_time + seg
            dm_url = dm_url_template.format(video_code=video_code, start_time=start_time, end_time=end_time)
            links.append(dm_url)
            start_time = end_time  # 下一段从这一段的结尾继续
        return links
    
    
    # 请求并验证数据
    def check_barrage_data(url: str):
        # 发送 GET 请求
        try:
            response = requests.get(url)
    
            if response.status_code in [200, 304]:
                # 返回的数据是 JSON 格式
                data = response.json()
                barrage_list = data["barrage_list"]
                if barrage_list:
                    return barrage_list
        except Exception as err:
            # 只需要链接有效信息
            # 方法一：
            print(f"请求错误: {url[url.index('v1') + 2:]}, 错误信息: {err}")
            # 方法二：
            # print(f"请求错误: {''.join(url.split(r'/')[-2:])}, 错误信息: {err}")
            return False
    
    
    def parse_barrage_data(filename, data):
        for barrage in data:
            print(barrage["content"])
            with open(filename, 'a+', encoding='utf-8') as f:
                f.write(barrage['content'] + '\n')
        # current version：barrage-of-comments.txt
        # 存在问题：如果保存失败，需要把之前已存储的数据进行清空或者删除。
    
        # next version：barrage-of-comments.csv （初步尝试保存多条数据）
    
    
    def main():
        video_code = "z4101ftrdpp"  # 替换成目标视频的弹幕 ID
        # num = 10000  # 「盲扫的段数上限」设置一个较大的请求次数，程序会自动判断，当没有弹幕了会自动退出循环
        # SEG = 30000  # 每段的跨度 30秒（30000毫秒）
        links = generate_dm_links(video_code)
    
        filename = 'barrage-of-comments.txt'
        # 先清空文件
        with open(filename, 'w', encoding='utf-8') as f:
            f.truncate(0)  # 清空文件内容
    
        # 打印前 5 条链接看下效果
        for url in links:
            # print(url)
            barrage_list = check_barrage_data(url)
            # print(barrage_list)
            # filename = generate_filename(choice='uuid')
            parse_barrage_data(filename, barrage_list)
    
    
    main()
    ```

    :::

##### 2.4.1.6 方法四

第四种方法就是改进存储策略：把要存储的弹幕先临时存储，等全部抓取（提取）成功之后再进行存储。

> 临时存储常见的有：
>
> - 先创建一个临时文件进行存储，等全部存储完成后，写入正式的数据文件；
> - 另一种就是先临时存储到变量当中，等全部提取数据后，再进行存储。

修改函数 `parse_barrage_data()` 以及把保存功能写成独立函数。

::: code-tabs

@tab `parse_barrage_data()`

```python 
def parse_barrage_data(barrage_list):
    if not barrage_list:
        return ''

    # 1) 把本次要写入的弹幕内容准备好
    lines = []
    for barrage in barrage_list:
        content = barrage["content"]
        if content is not None:
            print(content)
            lines.append(content)
    if not lines:
        return ''

    return lines
```

@tab 新增函数 `save()`

```python
def save(filename, lines):
    with open(filename, 'a+', encoding='utf-8') as f:
        f.write("\n".join(lines) + "\n")
```

@tab 方法四完整代码

```python
# -*- coding: utf-8 -*-
# @Time    : 2025/11/19 15:42
# @Author  : AI悦创
# @FileName: 方法四.py
# @Software: PyCharm
# @Blog    ：https://bornforthis.cn/
# code is far away from bugs with the god animal protecting
#    I love animals. They taste delicious.
import requests


def generate_dm_links(video_code, num=10000, seg=30000):
    """
    根据指定视频的弹幕ID，批量生成腾讯视频弹幕链接。
    参数：
        video_code (str): 视频的弹幕ID，例如 "z4101ftrdpp"
        num (int): 生成的最大段数（默认 10000，用于盲扫）
        seg (int): 每段时间跨度，单位为毫秒（默认 30000，即 30秒）

    返回：
        list[str]: 所有生成的弹幕链接
    """
    # 弹幕链接模板
    dm_url_template = "https://dm.video.qq.com/barrage/segment/{video_code}/t/v1/{start_time}/{end_time}"
    start_time = 0  # 初始化起始时间
    links = []  # 存储所有请求的链接

    # 生成链接
    for i in range(num):
        end_time = start_time + seg
        dm_url = dm_url_template.format(video_code=video_code, start_time=start_time, end_time=end_time)
        links.append(dm_url)
        start_time = end_time  # 下一段从这一段的结尾继续
    return links


# 请求并验证数据
def check_barrage_data(url: str):
    # 发送 GET 请求
    try:
        response = requests.get(url)

        if response.status_code in [200, 304]:
            # 返回的数据是 JSON 格式
            data = response.json()
            barrage_list = data["barrage_list"]
            if barrage_list:
                return barrage_list
    except Exception as err:
        # 只需要链接有效信息
        # 方法一：
        print(f"请求错误: {url[url.index('v1') + 2:]}, 错误信息: {err}")
        # 方法二：
        # print(f"请求错误: {''.join(url.split(r'/')[-2:])}, 错误信息: {err}")
        return False


def parse_barrage_data(barrage_list):
    if not barrage_list:
        return ''

    # 1) 把本次要写入的弹幕内容准备好
    lines = []
    for barrage in barrage_list:
        content = barrage["content"]
        if content is not None:
            print(content)
            lines.append(content)
    if not lines:
        return ''

    return lines

def save(filename, lines):
    with open(filename, 'a+', encoding='utf-8') as f:
        f.write("\n".join(lines) + "\n")


def main():
    video_code = "z4101ftrdpp"  # 替换成目标视频的弹幕 ID
    # num = 10000  # 「盲扫的段数上限」设置一个较大的请求次数，程序会自动判断，当没有弹幕了会自动退出循环
    # SEG = 30000  # 每段的跨度 30秒（30000毫秒）
    links = generate_dm_links(video_code)
    filename = 'barrage-of-comments.txt'
    # 打印前 5 条链接看下效果
    for url in links[:8]:
        # print(url)
        barrage_list = check_barrage_data(url)
        lines = parse_barrage_data(barrage_list)
        if lines:
            save(filename, lines)

main()
```

:::

##### 2.4.1.7 思考

到这一步，其实我们会发现，最终真正的代码是需要几种方法结合在一起的。

- 一个是文件名，防止我们在多次运行程序时，导致测试数据存留。
- 在请求多条弹幕数据进行保存时，要保证循**单条链接级别的数据完整性**：对于每个弹幕链接，必须确保其数据已经完整解析、结构化构建完成后，才能写入最终的汇总文件。只有“当前这一条数据完全准备好”，才允许落盘，避免半成品数据被写入。这是属于运行过程中的情况处理。
- ~~另一个是单条弹幕链接内的数据，要保证当前这条弹幕数据完整或构建好要存储的数据，再写入总文件。属于运行过程中的存储数据。~~

::: code-tabs

@tab 精简代码（仅保留有用的代码）

```python
# -*- coding: utf-8 -*-
# @Time    : 2025/11/19 20:06
# @Author  : AI悦创
# @FileName: Spider2.py
# @Software: PyCharm
# @Blog    ：https://bornforthis.cn/
# code is far away from bugs with the god animal protecting
#    I love animals. They taste delicious.
import requests
import os


def generate_dm_links(video_code, num=10000, seg=30000):
    """
    根据指定视频的弹幕ID，批量生成腾讯视频弹幕链接。
    参数：
        video_code (str): 视频的弹幕ID，例如 "z4101ftrdpp"
        num (int): 生成的最大段数（默认 10000，用于盲扫）
        seg (int): 每段时间跨度，单位为毫秒（默认 30000，即 30秒）

    返回：
        list[str]: 所有生成的弹幕链接
    """
    # 弹幕链接模板
    dm_url_template = "https://dm.video.qq.com/barrage/segment/{video_code}/t/v1/{start_time}/{end_time}"
    start_time = 0  # 初始化起始时间
    links = []  # 存储所有请求的链接

    # 生成链接
    for i in range(num):
        end_time = start_time + seg
        dm_url = dm_url_template.format(video_code=video_code, start_time=start_time, end_time=end_time)
        links.append(dm_url)
        start_time = end_time  # 下一段从这一段的结尾继续
    return links


# 请求并验证数据
def check_barrage_data(url: str):
    # 发送 GET 请求
    try:
        response = requests.get(url)

        if response.status_code in [200, 304]:
            # 返回的数据是 JSON 格式
            data = response.json()
            barrage_list = data["barrage_list"]
            if barrage_list:
                return barrage_list
    except Exception as err:
        # 只需要链接有效信息
        # 方法一：
        print(f"请求错误: {url[url.index('v1') + 2:]}, 错误信息: {err}")
        # 方法二：
        # print(f"请求错误: {''.join(url.split(r'/')[-2:])}, 错误信息: {err}")
        return False


def parse_barrage_data(barrage_list):
    if not barrage_list:
        return ''

    # 1) 把本次要写入的弹幕内容准备好
    lines = []
    for barrage in barrage_list:
        content = barrage["content"]
        if content is not None:
            print(content)
            lines.append(content)
    if not lines:
        return ''

    return lines


def save(filename, lines):
    with open(filename, 'a+', encoding='utf-8') as f:
        f.write("\n".join(lines) + "\n")


def main():
    video_code = "z4101ftrdpp"  # 替换成目标视频的弹幕 ID
    # num = 10000  # 「盲扫的段数上限」设置一个较大的请求次数，程序会自动判断，当没有弹幕了会自动退出循环
    # SEG = 30000  # 每段的跨度 30秒（30000毫秒）
    links = generate_dm_links(video_code)
    filename = 'barrage-of-comments.txt'

    # 删除文件：
    # 如果文件已存在，先删除
    if os.path.exists(filename):
        os.remove(filename)
    
    # 打印前 5 条链接看下效果
    for url in links[:8]:
        # print(url)
        barrage_list = check_barrage_data(url)
        lines = parse_barrage_data(barrage_list)
        if lines:
            save(filename, lines)


main()
```

@tab 完整代码（保留多种方法）

```python
# -*- coding: utf-8 -*-
# @Time    : 2025/11/19 20:06
# @Author  : AI悦创
# @FileName: Spider2.py
# @Software: PyCharm
# @Blog    ：https://bornforthis.cn/
# code is far away from bugs with the god animal protecting
#    I love animals. They taste delicious.
import requests
import os


def generate_dm_links(video_code, num=10000, seg=30000):
    """
    根据指定视频的弹幕ID，批量生成腾讯视频弹幕链接。
    参数：
        video_code (str): 视频的弹幕ID，例如 "z4101ftrdpp"
        num (int): 生成的最大段数（默认 10000，用于盲扫）
        seg (int): 每段时间跨度，单位为毫秒（默认 30000，即 30秒）

    返回：
        list[str]: 所有生成的弹幕链接
    """
    # 弹幕链接模板
    dm_url_template = "https://dm.video.qq.com/barrage/segment/{video_code}/t/v1/{start_time}/{end_time}"
    start_time = 0  # 初始化起始时间
    links = []  # 存储所有请求的链接

    # 生成链接
    for i in range(num):
        end_time = start_time + seg
        dm_url = dm_url_template.format(video_code=video_code, start_time=start_time, end_time=end_time)
        links.append(dm_url)
        start_time = end_time  # 下一段从这一段的结尾继续
    return links


# 请求并验证数据
def check_barrage_data(url: str):
    # 发送 GET 请求
    try:
        response = requests.get(url)

        if response.status_code in [200, 304]:
            # 返回的数据是 JSON 格式
            data = response.json()
            barrage_list = data["barrage_list"]
            if barrage_list:
                return barrage_list
    except Exception as err:
        # 只需要链接有效信息
        # 方法一：
        print(f"请求错误: {url[url.index('v1') + 2:]}, 错误信息: {err}")
        # 方法二：
        # print(f"请求错误: {''.join(url.split(r'/')[-2:])}, 错误信息: {err}")
        return False


def generate_filename(choice='uuid'):
    """此代码目前不用，不过就留着。"""
    filename = 'barrage-of-comments-'
    if choice == 'uuid':
        # 使用 uuid
        from uuid import uuid4
        filename = f'{filename}{uuid4()}.txt'
    elif choice == 'time':
        # 使用 time 方法
        import time
        filename = f'{filename}{time.time()}.txt'
    elif choice == 'datetime':
        # 使用 datetime 方法
        from datetime import datetime
        filename = f'{filename}{datetime.now()}.txt'
    elif choice == 'random':
        # 使用 random 方法
        import random
        data_nums = list(range(100))
        random.shuffle(data_nums)
        filename = f'{filename}{random.sample(data_nums, 9)}.txt'
    return filename


def parse_barrage_data(barrage_list):
    if not barrage_list:
        return ''

    # 1) 把本次要写入的弹幕内容准备好
    lines = []
    for barrage in barrage_list:
        content = barrage["content"]
        if content is not None:
            print(content)
            lines.append(content)
    if not lines:
        return ''

    return lines


def save(filename, lines):
    with open(filename, 'a+', encoding='utf-8') as f:
        f.write("\n".join(lines) + "\n")


def main():
    video_code = "z4101ftrdpp"  # 替换成目标视频的弹幕 ID
    # num = 10000  # 「盲扫的段数上限」设置一个较大的请求次数，程序会自动判断，当没有弹幕了会自动退出循环
    # SEG = 30000  # 每段的跨度 30秒（30000毫秒）
    links = generate_dm_links(video_code)
    filename = 'barrage-of-comments.txt'

    # 删除文件：
    # 如果文件已存在，先删除
    if os.path.exists(filename):
        os.remove(filename)
    # 清空数据
    # with open(filename, 'w', encoding='utf-8') as f:
    #     f.truncate(0)  # 清空文件内容
    # 打印前 8 条链接看下效果
    for url in links[:8]:
        # print(url)
        barrage_list = check_barrage_data(url)
        lines = parse_barrage_data(barrage_list)
        if lines:
            save(filename, lines)


main()
```

:::

##### 2.4.1.8 尝试抓取全部弹幕

现在我们的弹幕已经较为完善，可以正式试一下抓取全部弹幕数据，观察是否会报错，运行代码如下：

::: code-tabs

@tab Code

```python {95}
# -*- coding: utf-8 -*-
# @Time    : 2025/11/19 20:06
# @Author  : AI悦创
# @FileName: Spider2.py
# @Software: PyCharm
# @Blog    ：https://bornforthis.cn/
# code is far away from bugs with the god animal protecting
#    I love animals. They taste delicious.
import requests
import os


def generate_dm_links(video_code, num=10000, seg=30000):
    """
    根据指定视频的弹幕ID，批量生成腾讯视频弹幕链接。
    参数：
        video_code (str): 视频的弹幕ID，例如 "z4101ftrdpp"
        num (int): 生成的最大段数（默认 10000，用于盲扫）
        seg (int): 每段时间跨度，单位为毫秒（默认 30000，即 30秒）

    返回：
        list[str]: 所有生成的弹幕链接
    """
    # 弹幕链接模板
    dm_url_template = "https://dm.video.qq.com/barrage/segment/{video_code}/t/v1/{start_time}/{end_time}"
    start_time = 0  # 初始化起始时间
    links = []  # 存储所有请求的链接

    # 生成链接
    for i in range(num):
        end_time = start_time + seg
        dm_url = dm_url_template.format(video_code=video_code, start_time=start_time, end_time=end_time)
        links.append(dm_url)
        start_time = end_time  # 下一段从这一段的结尾继续
    return links


# 请求并验证数据
def check_barrage_data(url: str):
    # 发送 GET 请求
    try:
        response = requests.get(url)

        if response.status_code in [200, 304]:
            # 返回的数据是 JSON 格式
            data = response.json()
            barrage_list = data["barrage_list"]
            if barrage_list:
                return barrage_list
    except Exception as err:
        # 只需要链接有效信息
        # 方法一：
        print(f"请求错误: {url[url.index('v1') + 2:]}, 错误信息: {err}")
        # 方法二：
        # print(f"请求错误: {''.join(url.split(r'/')[-2:])}, 错误信息: {err}")
        return False


def parse_barrage_data(barrage_list):
    if not barrage_list:
        return ''

    # 1) 把本次要写入的弹幕内容准备好
    lines = []
    for barrage in barrage_list:
        content = barrage["content"]
        if content is not None:
            print(content)
            lines.append(content)
    if not lines:
        return ''

    return lines


def save(filename, lines):
    with open(filename, 'a+', encoding='utf-8') as f:
        f.write("\n".join(lines) + "\n")


def main():
    video_code = "z4101ftrdpp"  # 替换成目标视频的弹幕 ID
    # num = 10000  # 「盲扫的段数上限」设置一个较大的请求次数，程序会自动判断，当没有弹幕了会自动退出循环
    # SEG = 30000  # 每段的跨度 30秒（30000毫秒）
    links = generate_dm_links(video_code)
    filename = 'barrage-of-comments.txt'

    # 删除文件：
    # 如果文件已存在，先删除
    if os.path.exists(filename):
        os.remove(filename)

    # 请求全部弹幕链接
    for url in links:
        # print(url)
        barrage_list = check_barrage_data(url)
        lines = parse_barrage_data(barrage_list)
        if lines:
            save(filename, lines)


main()
```

@tab output

```python
...
...
...
心向光明!秦南~
啊啊啊啊啊啊啊
明天继续看秦南

```

:::

会一直卡在：`明天继续看秦南`，此时需要解决这个问题。

**分析方法**：

- 一瞬间以为：被腾讯 ban 掉了，但是重新运行前面又是正常抓取的；

- 输出当前请求的弹幕链接，我们手动看看卡在哪个弹幕链接并手动使用浏览器访问该弹幕，看看是否有数据，访问是否正常；

    ```python {4}
    def main():
        # ---snip---
        for url in links:
            print(url)
            barrage_list = check_barrage_data(url)
            # ---snip---
    ```

    访问一开始卡住的链接后，发现：没有数据，那就是我们请求的时候对于没数据的弹幕链接处理没有考虑到。应该一遇到没有弹幕的链接，直接停止循环。ok，进行下一步分析。

- 其次观察请求函数 `check_barrage_data()` 看编写逻辑是否正常，是否包含其它异常情况没有处理；

    ```python {10-12}
    # 请求并验证数据
    def check_barrage_data(url: str):
        # 发送 GET 请求
        try:
            response = requests.get(url)
    
            if response.status_code in [200, 304]:
                # 返回的数据是 JSON 格式
                data = response.json()
                barrage_list = data["barrage_list"]
                if barrage_list:
                    return barrage_list
        except Exception as err:
            # ---snip---
    ```

    从上面的代码可知：我们并没有正式的正对 `barrage_list` 没有数据的情况进行处理，那按照现有代码，当 `barrage_list` 没有数据时，会返回 `None`。

    故而，解决方法就是要在循环中增加条件，当 `check_barrage_data()` 返回 None 或 False 时，停止 for 循环！

    - **`None`**：`barrage_list` 没有数据；
    - **`False`**：请求出现异常。

    ::: tip debug 原则

    1. debug 用自己的大脑运运行代码，并对比我们预期的效果和逻辑。
    2. 适当的修改代码，并运行观察。让抽象的现象，具体的展现在我们眼前。

    :::

到此，bug 排查完毕。正式编写解决代码：

```python {7-8}
def main():
    # ---snip---

    for url in links:
        barrage_list = check_barrage_data(url)
        if (barrage_list is None) or (barrage_list == False):
            break
        lines = parse_barrage_data(barrage_list)

        if lines:
            save(filename, lines)
```

::: warning 反思

为什么会出现现在的 bug？因为我们写代码时，为了图方便把每次请求的弹幕链接设置在前 8 条弹幕。

如果一开始就是请求全部弹幕链接，则会提前发现此问题。但是不推荐，因为一开始写代码时要时不时的运行代码测试，如果每次都要请求全部弹幕链接，会比较耗时。

其实，一开始写请求代码时，就应该要知道处理没有弹幕数据的链接。

:::

**插一句**：其实 `check_barrage_data()` 代码中的数据提取可以改进：

::: code-tabs

@tab 原本

```python
barrage_list = data["barrage_list"]
```

@tab 改进

```python
# 如果某条弹幕结构异常，不让它影响整批
barrage_list = data.get("barrage_list")
```

@tab 完整代码

```python
# -*- coding: utf-8 -*-
# @Time    : 2025/11/19 20:06
# @Author  : AI悦创
# @FileName: Spider2.py
# @Software: PyCharm
# @Blog    ：https://bornforthis.cn/
# code is far away from bugs with the god animal protecting
#    I love animals. They taste delicious.
import requests
import os


def generate_dm_links(video_code, num=10000, seg=30000):
    """
    根据指定视频的弹幕ID，批量生成腾讯视频弹幕链接。
    参数：
        video_code (str): 视频的弹幕ID，例如 "z4101ftrdpp"
        num (int): 生成的最大段数（默认 10000，用于盲扫）
        seg (int): 每段时间跨度，单位为毫秒（默认 30000，即 30秒）

    返回：
        list[str]: 所有生成的弹幕链接
    """
    # 弹幕链接模板
    dm_url_template = "https://dm.video.qq.com/barrage/segment/{video_code}/t/v1/{start_time}/{end_time}"
    start_time = 0  # 初始化起始时间
    links = []  # 存储所有请求的链接

    # 生成链接
    for i in range(num):
        end_time = start_time + seg
        dm_url = dm_url_template.format(video_code=video_code, start_time=start_time, end_time=end_time)
        links.append(dm_url)
        start_time = end_time  # 下一段从这一段的结尾继续
    return links


# 请求并验证数据
def check_barrage_data(url: str):
    # 发送 GET 请求
    try:
        response = requests.get(url)

        if response.status_code in [200, 304]:
            # 返回的数据是 JSON 格式
            data = response.json()
            # 如果某条弹幕结构异常，不让它影响整批
            barrage_list = data.get("barrage_list")
            if barrage_list:
                return barrage_list
    except Exception as err:
        # 只需要链接有效信息
        # 方法一：
        print(f"请求错误: {url[url.index('v1') + 2:]}, 错误信息: {err}")
        # 方法二：
        # print(f"请求错误: {''.join(url.split(r'/')[-2:])}, 错误信息: {err}")
        return False


def parse_barrage_data(barrage_list):
    if not barrage_list:
        return ''

    # 1) 把本次要写入的弹幕内容准备好
    lines = []
    for barrage in barrage_list:
        # 如果某条弹幕结构异常，不让它影响整批
        content = barrage["content"]
        if content is not None:
            print(content)
            lines.append(content)
    if not lines:
        return ''

    return lines


def save(filename, lines):
    with open(filename, 'a+', encoding='utf-8') as f:
        f.write("\n".join(lines) + "\n")


def main():
    video_code = "z4101ftrdpp"  # 替换成目标视频的弹幕 ID
    # num = 10000  # 「盲扫的段数上限」设置一个较大的请求次数，程序会自动判断，当没有弹幕了会自动退出循环
    # SEG = 30000  # 每段的跨度 30秒（30000毫秒）
    links = generate_dm_links(video_code)
    filename = 'barrage-of-comments.txt'

    # 删除文件：
    # 如果文件已存在，先删除
    if os.path.exists(filename):
        os.remove(filename)

    # 打印前 5 条链接看下效果
    for url in links:
        # print(url)
        barrage_list = check_barrage_data(url)
        # if barrage_list:
        #     break
        # print(barrage_list)
        if (barrage_list is None) or (barrage_list == False):
            break
        lines = parse_barrage_data(barrage_list)

        if lines:
            save(filename, lines)


main()
```

:::

##### 2.4.1.9 存储成 csv 数据

为了便于下一个 pandas 存储的理解，我们可以尝试存储多条数据（初步尝试保存多条数据）。



保存文件名：`barrage-of-comments.csv`

```python
```



#### 2.4.2 使用 pandas 进行结构化存储数据「提前选择性参考学习」

这部分主要是大致了解 pandas 实现，主要理解的是手动提取并保存。抓住每一次对比的机会，对比可以使我们对 pandas 存在的价值、意义更加明确。

```python
import requests
import pandas as pd

# episodes_danmu_DataFrame是存放一集所有弹幕的DataFrame
episodes_danmu_DataFrame = pd.DataFrame()

# 填写腾讯视频的参数，video_code是腾讯视频的编号，num是获取弹幕的次数，step是步进参数
video_code = "c004725utxa"
num = 10000  # 设置一个较大的请求次数，程序会自动判断，当没有弹幕了会自动退出循环
step = 30000

# 循环num次获取弹幕
for i in range(num):
    url = f'https://dm.video.qq.com/barrage/segment/{video_code}/t/v1/{i * 30000}/{i * 30000 + step}'
    response = requests.get(url=url).json()
    if (len(response["barrage_list"])) > 0:
        # temp_danmu_DataFrame是存放本次弹幕的DataFrame
        temp_danmu_DataFrame = pd.json_normalize(response['barrage_list'], errors='ignore')
        episodes_danmu_DataFrame = pd.concat([episodes_danmu_DataFrame, temp_danmu_DataFrame])
        print("第", i + 1, "次请求弹幕,请求地址为：", url, "获取到：", temp_danmu_DataFrame.shape[0],
              "条弹幕，这一集总弹幕已获取到", episodes_danmu_DataFrame.shape[0], "条。")
    else:
        break

print("总共获取到", episodes_danmu_DataFrame.shape[0], "条弹幕")
# 查看 DataFrame 的行数和列数。
rows = episodes_danmu_DataFrame.shape
print("请求得到的表格行数与列数：", rows)

# 将 DataFrame 保存为 csv 文件
# 选择保存的列
episodes_danmu_DataFrame = episodes_danmu_DataFrame.loc[:, ['time_offset', 'create_time', 'content']]
episodes_danmu_DataFrame.to_csv(f"腾讯视频弹幕-繁花-{episodes_danmu_DataFrame.shape[0]}条弹幕.csv", mode='w',
                                encoding="utf-8", errors='ignore', index=False)
print("弹幕保存完成！")
```

![](https://blog.images.bornforthis.cn/docs-images/sha256/4c/4c02bf9811c21ff9510ba5191b3b26a41c3ea2fb5c925d255c28c95605066f29.png)



## 3. 弹幕数据词云展示

### 3.1 安装所需库

```bash
pip install jieba wordcloud matplotlib pillow
```

### 3.2 生成词频



### 3.3 生成词云





























::: details 公众号：AI悦创【二维码】

![](https://blog.images.bornforthis.cn/docs-images/sha256/77/77f67d48a67ec6a44a4ef1f01ffc85830eb3c121b1ece45dc5ada06e20e2f52b.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Web、Linux」，招收学员面向国内外，国外占 80%。全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](https://blog.images.bornforthis.cn/docs-images/sha256/30/3087c629da73428daa0ee050f5b31709c30f650686164b54c724b892a422c585.jpg)