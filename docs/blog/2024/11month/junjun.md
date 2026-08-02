---
title: junjun编程考试
date: 2024-11-22 15:08:37
author: AI悦创
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

## 1. 寻找下一个质数

::: code-tabs

@tab Code「纯 for 实现」

```python
current_prime = int(input("请输入当前质数: "))

next_prime = current_prime + 1 if current_prime > 1 else 2  # 起始值为当前数+1，或直接从2开始

# 使用嵌套的for循环
for candidate in range(next_prime, 10**9):  # 无限大范围查找
    is_prime = True  # 假设当前数是质数
    for i in range(2, int(candidate ** 0.5) + 1):  # 从2到sqrt(candidate)
        if candidate % i == 0:
            is_prime = False  # 发现因数，当前数不是质数
            break  # 退出内层循环
    if is_prime:
        next_prime = candidate  # 找到质数
        break  # 退出外层循环

print(f"下一个质数是: {next_prime}")
```

@tab 推荐实现

```python
current_prime = int(input("请输入当前质数: "))

if current_prime <= 1:
    next_prime = 2  # 最小的质数是2
else:
    next_prime = current_prime + 1
    while True:
        is_prime = True  # 假设当前数字是质数
        for i in range(2, int(next_prime ** 0.5) + 1):
            if next_prime % i == 0:
                is_prime = False
                break
        if is_prime:
            break
        next_prime += 1

print(f"下一个质数是: {next_prime}")
```

@tab 函数实现

```python
def is_prime(n):
    """检查一个数是否是质数"""
    if n <= 1:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True

def next_prime(current_prime):
    """找到大于当前质数的下一个质数"""
    if current_prime <= 1:
        return 2  # 最小的质数是2
    candidate = current_prime + 1
    while not is_prime(candidate):
        candidate += 1
    return candidate

# 示例使用
if __name__ == "__main__":
    current = int(input("请输入当前质数: "))
    next_p = next_prime(current)
    print(f"下一个质数是: {next_p}")
```

:::



## 2. 凯撒加密

### 2.1 凯撒加密的原理

凯撒加密（Caesar Cipher）是一种古老的**替换加密算法**，其加密原理是通过**将明文中的每个字母按照固定位数向后（或向前）移动**，然后用新的字母替换原来的字母，从而生成密文。

#### 2.1.1 原理细节

1. **字母表循环移动**：
    - 加密过程将字母表看作是一个循环的结构。例如，字母 `Z` 向后移动 1 位后变成 `A`。
    - 位移值是一个固定的数字（称为密钥，通常记为 `shift`），表示每个字母移动的位数。
2. **数学公式**：
    - 对于字母，假设它的索引是从 `0` 到 `25`，分别对应字母 `A` 到 `Z`（或 `a` 到 `z`）。
    - 对字母 `c`（原始字母）加密后得到的字母 `c'`（加密字母），公式为： `$c' = (c + \text{shift}) \mod 26$`
    - 解密时，使用相反方向的位移： `$c = (c' - \text{shift}) \mod 26$`
3. **处理大写和小写**：
    - 大写字母范围：`A` 到 `Z`（ASCII 范围：65 到 90）。
    - 小写字母范围：`a` 到 `z`（ASCII 范围：97 到 122）。
    - 加密和解密时，需要分别处理大写和小写字母。
4. **非字母字符的处理**：
    - 非字母字符（如标点符号、数字、空格等）通常不变，直接添加到密文中。

#### 2.1.2 示例

假设明文为 `HELLO`，位移值为 `3`：

- 原始字母：`H E L L O`
- 位移后字母：`K H O O R`
- 加密后的密文为：`KHOOR`

#### 2.1.3 解密过程

解密就是将密文中的字母按相反的方向移动相同的位数。例如，密文 `KHOOR`，位移值为 `3`，解密后为：

- 原始字母：`K H O O R`
- 反向位移后字母：`H E L L O`
- 解密后的明文为：`HELLO`



### 2.1.3 优点

1. **简单易懂**：实现简单，易于手工操作。
2. **快速处理**：适合处理少量数据。

### 2.1.4 缺点

1. **安全性较低**：只有 26 种可能的密钥（字母表大小），可以通过暴力破解轻松破译。
2. **缺乏复杂性**：容易被频率分析攻击（Frequency Analysis）破解，因为加密后仍保留明文中字符的出现频率分布。

::: code-tabs

@tab Code1

```python
# 明文和位移值
text = "Hello, World!"  # 明文输入
shift = 3  # 位移值，决定字母向后移动的位数

# 加密过程
encrypted_text = ""  # 用于存储加密后的密文

# 遍历明文中的每个字符
for char in text:
    if char.isalpha():  # 检查字符是否为字母
        # 根据是大写还是小写字母，确定其 ASCII 起始位置
        start = ord('A') if char.isupper() else ord('a')
        
        # 计算加密后的字符：
        # (当前字符的 ASCII 值 - 起始位置 + 位移值) 取模 26 再加上起始位置
        # 保证字母在字母表中循环，例如 Z+1 会变为 A
        encrypted_text += chr((ord(char) - start + shift) % 26 + start)
    else:
        # 如果不是字母（如标点符号、数字、空格等），直接添加到密文中
        encrypted_text += char

# 输出加密后的密文
print("加密后:", encrypted_text)

# 解密过程
decrypted_text = ""  # 用于存储解密后的明文

# 遍历密文中的每个字符
for char in encrypted_text:
    if char.isalpha():  # 检查字符是否为字母
        # 根据是大写还是小写字母，确定其 ASCII 起始位置
        start = ord('A') if char.isupper() else ord('a')
        
        # 计算解密后的字符：
        # (当前字符的 ASCII 值 - 起始位置 - 位移值) 取模 26 再加上起始位置
        # 保证字母在字母表中循环，例如 A-1 会变为 Z
        decrypted_text += chr((ord(char) - start - shift) % 26 + start)
    else:
        # 如果不是字母（如标点符号、数字、空格等），直接添加到明文中
        decrypted_text += char

# 输出解密后的明文
print("解密后:", decrypted_text)
```

@tab Code2

```python
def caesar_encrypt(text, shift):
    """
    凯撒加密函数
    :param text: 输入的明文
    :param shift: 移动的位数
    :return: 加密后的密文
    """
    encrypted_text = ""
    for char in text:
        if char.isalpha():  # 仅对字母加密
            start = ord('A') if char.isupper() else ord('a')
            encrypted_text += chr((ord(char) - start + shift) % 26 + start)
        else:
            encrypted_text += char  # 非字母保持不变
    return encrypted_text


def caesar_decrypt(cipher_text, shift):
    """
    凯撒解密函数
    :param cipher_text: 输入的密文
    :param shift: 移动的位数
    :return: 解密后的明文
    """
    return caesar_encrypt(cipher_text, -shift)  # 反向移动解密


# 示例使用
if __name__ == "__main__":
    plaintext = "Hello, World!"
    shift_value = 3

    # 加密
    encrypted = caesar_encrypt(plaintext, shift_value)
    print(f"加密后: {encrypted}")

    # 解密
    decrypted = caesar_decrypt(encrypted, shift_value)
    print(f"解密后: {decrypted}")
```



:::



## 3. 所有排序组合

用户输入三个字符，把所有可能的排序都存储到列表中。











![](https://blog.images.bornforthis.cn/docs-images/sha256/7e/7e4f1e6738351f86ad961496ce3bd0cf6e25c4cd885fd277245916dbea294296.png)



```python
inp = input()# Single line input of 3 characters
permutations =[]# lets say it's a list, you can also create individual var
# your algorithm here
print("".join(sorted(permutations)))# Sort and print output
```

## 肖的作业

Advanced Assessed Task 3/3: Implement a concurrent headline scraper 

In the lecture this week there is an example of a concurrent application that reports the size of the data at different URLs. 
If you look at the folder ADVANCED-TASK-3-CODE, you will find a program which goes to a set of URLs and gets the first 5 headlines back. However, it does not do this concurrently. 

Your task this week is the 3rd and final advanced viva task. All 5 standard tasks have been set, so this is your final task. 
The task is to implement a concurrent version of the code in ADVANCED-TASK-3-CODE, which should do the same thing, but faster. 

To do this, you should continue to use `concurrent.futures`, as well as the Python newspaper module. The major work is in integrating these two things so that they work properly. 

You should check that the headlines are being retrieved correctly (both number and content). NB, it does not matter if some headlines turn out to be a section heading or other non-news content (which can happen, depending on how the news site has been organised). 

You should use timeit (there’s an example in the code given) to compare and test the non-concurrent and concurrent versions. If the concurrent version is working properly, it should be faster than the non-concurrent version. The bigger the test number, the better the effect. 

It may be useful to look at the documentation on concurrent.futures as well as newspaper.

```python
import newspaper
from newspaper import Article

def get_headlines():

    URLs = ['http://www.foxnews.com/',
            'http://www.cnn.com/',
            'http://www.derspiegel.de/',
            'http://www.bbc.co.uk/',
            'https://theguardian.com',]

    for url in URLs:
        result = newspaper.build(url, memoize_articles=False)
        print('\n''The headlines from %s are' % url, '\n')
        for i in range(1,6):
            art = result.articles[i]
            art.download()
            art.parse()
            print(art.title)

if __name__ == '__main__':
    import timeit
    elapsed_time = timeit.timeit("get_headlines()", setup="from __main__ import get_headlines", number=2)/2             
    print(elapsed_time)
```

**答案：**

::: code-tabs

@tab Code1

```python
import concurrent.futures
import newspaper
from newspaper import Article
import timeit

# 非并发版本
def get_headlines():
    URLs = [
        'http://www.foxnews.com/',
        'http://www.cnn.com/',
        'http://www.derspiegel.de/',
        'http://www.bbc.co.uk/',
        'https://theguardian.com',
    ]

    for url in URLs:
        result = newspaper.build(url, memoize_articles=False)
        print(f'\nThe headlines from {url} are:\n')
        for i in range(5):  # 确保爬取5条头条
            try:
                art = result.articles[i]
                art.download()
                art.parse()
                print(art.title)
            except IndexError:
                print(f"Less than 5 articles available on {url}")
                break

# 并发版本
def get_headlines_concurrently():
    URLs = [
        'http://www.foxnews.com/',
        'http://www.cnn.com/',
        'http://www.derspiegel.de/',
        'http://www.bbc.co.uk/',
        'https://theguardian.com',
    ]

    def fetch_headlines(url):
        try:
            result = newspaper.build(url, memoize_articles=False)
            headlines = []
            for i in range(5):  # 确保爬取5条头条
                try:
                    art = result.articles[i]
                    art.download()
                    art.parse()
                    headlines.append(art.title)
                except IndexError:
                    break
            return url, headlines
        except Exception as e:
            return url, [f"Error fetching articles: {e}"]

    with concurrent.futures.ThreadPoolExecutor() as executor:
        future_to_url = {executor.submit(fetch_headlines, url): url for url in URLs}
        for future in concurrent.futures.as_completed(future_to_url):
            url, headlines = future.result()
            print(f'\nThe headlines from {url} are:\n')
            for headline in headlines:
                print(headline)

if __name__ == '__main__':
    # 非并发版本运行时间
    non_concurrent_time = timeit.timeit("get_headlines()", setup="from __main__ import get_headlines", number=2) / 2
    print(f"Non-concurrent version average time: {non_concurrent_time:.2f} seconds")

    # 并发版本运行时间
    concurrent_time = timeit.timeit("get_headlines_concurrently()", setup="from __main__ import get_headlines_concurrently", number=2) / 2
    print(f"Concurrent version average time: {concurrent_time:.2f} seconds")
```

@tab Code2

```python
import concurrent.futures  # 用于实现并发
import newspaper  # 用于爬取新闻网站的文章
from newspaper import Article  # 用于处理单篇文章
import timeit  # 用于测试代码运行时间

# 非并发版本：依次爬取每个 URL 的新闻标题
def get_headlines():
    # 定义需要爬取的 URL 列表
    URLs = [
        'http://www.foxnews.com/',
        'http://www.cnn.com/',
        'http://www.derspiegel.de/',
        'http://www.bbc.co.uk/',
        'https://theguardian.com',
    ]

    # 遍历每个 URL
    for url in URLs:
        # 使用 newspaper.build 构建新闻资源对象
        result = newspaper.build(url, memoize_articles=False)
        print(f'\nThe headlines from {url} are:\n')  # 打印当前 URL
        
        # 获取前 5 条文章
        for i in range(5):  # 保证最多爬取5篇文章
            try:
                art = result.articles[i]  # 获取第 i 篇文章
                art.download()  # 下载文章内容
                art.parse()  # 解析文章内容
                print(art.title)  # 打印文章标题
            except IndexError:
                # 如果该网站文章不足 5 篇，捕获 IndexError 并提示
                print(f"Less than 5 articles available on {url}")
                break

# 并发版本：使用线程池并发爬取多个 URL 的新闻标题
def get_headlines_concurrently():
    # 定义需要爬取的 URL 列表
    URLs = [
        'http://www.foxnews.com/',
        'http://www.cnn.com/',
        'http://www.derspiegel.de/',
        'http://www.bbc.co.uk/',
        'https://theguardian.com',
    ]

    # 定义一个函数，用于爬取单个 URL 的前 5 条标题
    def fetch_headlines(url):
        try:
            # 使用 newspaper.build 构建新闻资源对象
            result = newspaper.build(url, memoize_articles=False)
            headlines = []  # 存储当前 URL 的标题列表

            # 获取前 5 条文章
            for i in range(5):  # 确保最多爬取 5 篇文章
                try:
                    art = result.articles[i]  # 获取第 i 篇文章
                    art.download()  # 下载文章内容
                    art.parse()  # 解析文章内容
                    headlines.append(art.title)  # 将标题添加到列表
                except IndexError:
                    # 如果该网站文章不足 5 篇，退出循环
                    break
            return url, headlines  # 返回 URL 和爬取的标题列表
        except Exception as e:
            # 如果爬取过程中出现异常，返回错误信息
            return url, [f"Error fetching articles: {e}"]

    # 使用 ThreadPoolExecutor 创建线程池
    with concurrent.futures.ThreadPoolExecutor() as executor:
        # 提交所有任务到线程池
        future_to_url = {executor.submit(fetch_headlines, url): url for url in URLs}
        
        # 获取每个任务的结果
        for future in concurrent.futures.as_completed(future_to_url):
            url, headlines = future.result()  # 获取当前任务的结果（URL 和标题列表）
            print(f'\nThe headlines from {url} are:\n')  # 打印当前 URL
            for headline in headlines:  # 遍历并打印标题列表
                print(headline)

# 测试非并发和并发版本的性能
if __name__ == '__main__':
    # 测试非并发版本的平均运行时间
    non_concurrent_time = timeit.timeit(
        "get_headlines()",  # 要运行的代码
        setup="from __main__ import get_headlines",  # 设置运行环境
        number=2  # 重复运行 2 次
    ) / 2  # 计算平均时间
    print(f"Non-concurrent version average time: {non_concurrent_time:.2f} seconds")

    # 测试并发版本的平均运行时间
    concurrent_time = timeit.timeit(
        "get_headlines_concurrently()",  # 要运行的代码
        setup="from __main__ import get_headlines_concurrently",  # 设置运行环境
        number=2  # 重复运行 2 次
    ) / 2  # 计算平均时间
    print(f"Concurrent version average time: {concurrent_time:.2f} seconds")
```

@tab 输出

```python
/Users/huangjiabao/GitHub/iMac/Pycharm/venv/bin/python /Users/huangjiabao/GitHub/iMac/Pycharm/StudentCoder/43-xiaoxianyusxb/pool.py 

The headlines from http://www.foxnews.com/ are 

Entertainment Videos and Video Clips
Watch Fox News Channel Online
Fox News Shows
V-Most-Recent-Episodes Videos and Video Clips
Latest-News-Video Videos and Video Clips

The headlines from http://www.cnn.com/ are 

Travel News
All There Is with Anderson Cooper
Laos methanol poisonings: Australian teens among six tourists dead as countries warn of suspected methanol poisonings in Vang Vieng
Trump names Pam Bondi as his pick for attorney general after Gaetz drops from consideration
November 22, 2024 - Russia-Ukraine news

The headlines from http://www.derspiegel.de/ are 

Caroline Bosbach: Tochter von Wolfgang Bosbach kandidiert für den Bundestag
Afghanistan: Taliban ziehen Botschafter und Generalkonsul aus Deutschland ab
Mike Tyson gegen Jake Paul: Evander Holyfield kritisiert Tysons Kampfleistung
Davis-Cup: Deutschland verpasst gegen die Niederlande das Finale
Gaza-Krieg und Kunst: Nan-Goldin-Ausstellung sorgt für Eklat in der Neuen Nationalgalerie

The headlines from http://www.bbc.co.uk/ are 

Latest News & Updates
Woman wins civil rape case against Conor McGregor
Gatwick Airport: Two detained over 'suspect package'
Latest News & Updates
Storm Bert: Weather warnings in place for high winds, snow and rain

The headlines from https://theguardian.com are 

Putin’s Ukraine missile a warning to west before second age of Trump
Seoul says Russia sent air-defence missiles to North Korea in return for troops
What do we know about Russia’s ‘experimental’ ballistic missile?
Smugglers convicted after Indian family froze to death on US-Canada border
Trump picks hedge-fund investor Scott Bessent for treasury secretary

The headlines from http://www.foxnews.com/ are 

Entertainment Videos and Video Clips
Watch Fox News Channel Online
Fox News Shows
V-Most-Recent-Episodes Videos and Video Clips
Latest-News-Video Videos and Video Clips

The headlines from http://www.cnn.com/ are 

Travel News
All There Is with Anderson Cooper
Laos methanol poisonings: Australian teens among six tourists dead as countries warn of suspected methanol poisonings in Vang Vieng
Trump names Pam Bondi as his pick for attorney general after Gaetz drops from consideration
November 22, 2024 - Russia-Ukraine news

The headlines from http://www.derspiegel.de/ are 

Less than 5 articles available on http://www.derspiegel.de/

The headlines from http://www.bbc.co.uk/ are 

Latest News & Updates
Woman wins civil rape case against Conor McGregor
Gatwick Airport: Two detained over 'suspect package'
Latest News & Updates
Storm Bert: Weather warnings in place for high winds, snow and rain

The headlines from https://theguardian.com are 

Putin’s Ukraine missile a warning to west before second age of Trump
Seoul says Russia sent air-defence missiles to North Korea in return for troops
What do we know about Russia’s ‘experimental’ ballistic missile?
Smugglers convicted after Indian family froze to death on US-Canada border
Trump picks hedge-fund investor Scott Bessent for treasury secretary
Non-concurrent version average time: 84.08 seconds

The headlines from http://www.foxnews.com/ are:

Error fetching articles: Article `download()` failed with HTTPSConnectionPool(host='www.foxnews.com', port=443): Max retries exceeded with url: /video/5614615980001 (Caused by SSLError(SSLEOFError(8, '[SSL: UNEXPECTED_EOF_WHILE_READING] EOF occurred in violation of protocol (_ssl.c:1006)'))) on URL http://www.foxnews.com/video/5614615980001

The headlines from http://www.bbc.co.uk/ are:

Putin says Russia will use new missile again in 'combat conditions'
Latest News & Updates
Woman wins civil rape case against Conor McGregor
Gatwick Airport: Two detained over 'suspect package'
Latest News & Updates

The headlines from http://www.cnn.com/ are:

CNN Business
Travel News
All There Is with Anderson Cooper
Laos methanol poisonings: Australian teens among six tourists dead as countries warn of suspected methanol poisonings in Vang Vieng
Trump names Pam Bondi as his pick for attorney general after Gaetz drops from consideration

The headlines from https://theguardian.com are:

Putin says Russia will use experimental missile again after Ukraine strike
Putin’s Ukraine missile a warning to west before second age of Trump
Seoul says Russia sent air-defence missiles to North Korea in return for troops
What do we know about Russia’s ‘experimental’ ballistic missile?
Smugglers convicted after Indian family froze to death on US-Canada border

The headlines from http://www.derspiegel.de/ are:

Donald Trump: Hedgefonds-Manager Scott Bessent soll US-Finanzminister werden
Caroline Bosbach: Tochter von Wolfgang Bosbach kandidiert für den Bundestag
Afghanistan: Taliban ziehen Botschafter und Generalkonsul aus Deutschland ab
Mike Tyson gegen Jake Paul: Evander Holyfield kritisiert Tysons Kampfleistung
Davis-Cup: Deutschland verpasst gegen die Niederlande das Finale

The headlines from http://www.bbc.co.uk/ are:

Putin says Russia will use new missile again in 'combat conditions'
Latest News & Updates
Woman wins civil rape case against Conor McGregor
Gatwick Airport: Two detained over 'suspect package'
Latest News & Updates

The headlines from http://www.cnn.com/ are:

CNN Business
Travel News
All There Is with Anderson Cooper
Laos methanol poisonings: Australian teens among six tourists dead as countries warn of suspected methanol poisonings in Vang Vieng
Trump names Pam Bondi as his pick for attorney general after Gaetz drops from consideration

The headlines from https://theguardian.com are:

Putin says Russia will use experimental missile again after Ukraine strike
Putin’s Ukraine missile a warning to west before second age of Trump
Seoul says Russia sent air-defence missiles to North Korea in return for troops
What do we know about Russia’s ‘experimental’ ballistic missile?
Smugglers convicted after Indian family froze to death on US-Canada border

The headlines from http://www.derspiegel.de/ are:

Donald Trump: Hedgefonds-Manager Scott Bessent soll US-Finanzminister werden
Caroline Bosbach: Tochter von Wolfgang Bosbach kandidiert für den Bundestag
Afghanistan: Taliban ziehen Botschafter und Generalkonsul aus Deutschland ab
Mike Tyson gegen Jake Paul: Evander Holyfield kritisiert Tysons Kampfleistung
Davis-Cup: Deutschland verpasst gegen die Niederlande das Finale

The headlines from http://www.foxnews.com/ are:

Watch Fox News Channel Online
Entertainment Videos and Video Clips
Watch Fox News Channel Online
Fox News Shows
V-Most-Recent-Episodes Videos and Video Clips
Concurrent version average time: 19.88 seconds

Process finished with exit code 0
```

:::



### 1. 引言

本程序旨在通过 Python 编程实现对新闻网站头条的爬取，并利用并发技术提升运行效率。代码中使用了 `newspaper` 模块进行新闻内容解析，并通过 `concurrent.futures` 模块实现多线程并发处理。我们对比了非并发版本与并发版本的性能，证明并发技术在 I/O 密集型任务中的显著优势。

### 2. 使用模块和工具

1. **`newspaper` 模块**：
    - 用于从指定的新闻网站中抓取文章链接及其内容。
    - 支持文章的下载、解析和标题提取。
    - 示例方法：
        - `newspaper.build(url)`：从指定 URL 构建新闻资源对象。
        - `art.download()`：下载文章内容。
        - `art.parse()`：解析文章内容以提取标题等信息。
2. **`concurrent.futures` 模块**：
    - 用于简化并发编程，提供线程池和进程池接口。
    - 在此代码中，使用 `ThreadPoolExecutor` 来实现多线程的并发任务。
3. **`timeit` 模块**：
    - 用于测试代码块的运行时间，以评估性能差异。

### 3. 非并发版本实现

#### 3.1 代码部分

```python
def get_headlines():
    URLs = [
        'http://www.foxnews.com/',
        'http://www.cnn.com/',
        'http://www.derspiegel.de/',
        'http://www.bbc.co.uk/',
        'https://theguardian.com',
    ]

    for url in URLs:
        result = newspaper.build(url, memoize_articles=False)
        print(f'\nThe headlines from {url} are:\n')
        for i in range(5):  # 确保爬取5条头条
            try:
                art = result.articles[i]
                art.download()
                art.parse()
                print(art.title)
            except IndexError:
                print(f"Less than 5 articles available on {url}")
                break
```

#### 3.2 功能分析

1. **URL 列表**：定义了 5 个新闻网站的 URL，作为爬取的目标。
2. 逐一处理：
    - 使用 `newspaper.build(url)` 构建新闻资源对象。
    - 遍历前 5 条文章（索引 0-4），调用 `download()` 和 `parse()` 方法下载并解析文章内容。
    - 打印提取的标题。
3. 异常处理：
    - 如果目标网站少于 5 篇文章，捕获 `IndexError` 并打印提示信息。

#### 3.3 缺点

- **串行执行**：每个 URL 的处理需要等待上一个完成，导致 I/O 阻塞时间较长。
- **性能瓶颈**：对于包含大量目标 URL 的任务，运行时间可能大幅增加。

### 4. 并发版本实现

#### 4.1 代码部分

```python
def get_headlines_concurrently():
    URLs = [
        'http://www.foxnews.com/',
        'http://www.cnn.com/',
        'http://www.derspiegel.de/',
        'http://www.bbc.co.uk/',
        'https://theguardian.com',
    ]

    def fetch_headlines(url):
        try:
            result = newspaper.build(url, memoize_articles=False)
            headlines = []
            for i in range(5):  # 确保爬取5条头条
                try:
                    art = result.articles[i]
                    art.download()
                    art.parse()
                    headlines.append(art.title)
                except IndexError:
                    break
            return url, headlines
        except Exception as e:
            return url, [f"Error fetching articles: {e}"]

    with concurrent.futures.ThreadPoolExecutor() as executor:
        future_to_url = {executor.submit(fetch_headlines, url): url for url in URLs}
        for future in concurrent.futures.as_completed(future_to_url):
            url, headlines = future.result()
            print(f'\nThe headlines from {url} are:\n')
            for headline in headlines:
                print(headline)
```

#### 4.2 功能分析

1. **定义 `fetch_headlines` 函数**：
    - 封装每个 URL 的爬取逻辑：
        - 调用 `newspaper.build(url)` 创建资源对象。
        - 遍历前 5 篇文章，爬取标题。
        - 使用 `try-except` 捕获 `IndexError` 和其他异常。
    - 返回结果为 `(URL, headlines)`。
2. **多线程并发爬取**：
    - 使用 `ThreadPoolExecutor` 创建线程池。
    - 利用 `executor.submit(fetch_headlines, url)` 将每个 URL 的爬取任务提交到线程池中。
    - 使用 `concurrent.futures.as_completed()` 处理任务结果并打印每个网站的头条。
3. **线程池的优势**：
    - 并行化每个 URL 的爬取任务。
    - 利用 CPU 等待时间执行其他任务，显著提升 I/O 密集型任务的效率。

#### 4.3 异常处理

- 捕获构建新闻资源对象或文章下载时的所有异常，避免程序因错误退出。

### **5. 性能对比**

#### 5.1 代码部分

```python
if __name__ == '__main__':
    # 非并发版本运行时间
    non_concurrent_time = timeit.timeit("get_headlines()", setup="from __main__ import get_headlines", number=2) / 2
    print(f"Non-concurrent version average time: {non_concurrent_time:.2f} seconds")

    # 并发版本运行时间
    concurrent_time = timeit.timeit("get_headlines_concurrently()", setup="from __main__ import get_headlines_concurrently", number=2) / 2
    print(f"Concurrent version average time: {concurrent_time:.2f} seconds")
```

#### 5.2 功能分析

1. **非并发运行时间**：调用 `get_headlines()`，计算多次运行的平均时间。
2. **并发运行时间**：调用 `get_headlines_concurrently()`，计算多次运行的平均时间。
3. 性能评估：
    - 理论上，并发版本的运行时间显著低于非并发版本。
    - I/O 密集型任务（如网络请求）更能体现并发的优势。

### **6. 结果示例和分析**

#### 6.1 示例输出

```
Non-concurrent version average time: 10.25 seconds
Concurrent version average time: 4.12 seconds
```

#### 6.2 结果分析

- 非并发版本因串行处理每个 URL，导致总运行时间为各任务运行时间的总和。
- 并发版本利用线程池并行处理多个 URL，同时下载、解析文章，显著缩短运行时间。
- 在 URL 数量较多或网络延迟较大时，并发性能优势更为显著。

------

### 7. 结论

通过对比非并发与并发版本的运行效率，可以得出以下结论：

1. **并发技术的必要性**：在处理 I/O 密集型任务（如网络爬取）时，并发技术能够充分利用等待时间执行其他任务，从而显著提高整体效率。
2. **代码模块化设计**：通过封装爬取逻辑为函数并结合线程池，使代码具备更高的可读性和可扩展性。
3. **应用场景**：本程序适用于需要快速抓取多网站数据的场景，如新闻聚合器、实时数据分析等。



欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！

::: details 公众号：AI悦创【二维码】

![](https://blog.images.bornforthis.cn/docs-images/sha256/77/77f67d48a67ec6a44a4ef1f01ffc85830eb3c121b1ece45dc5ada06e20e2f52b.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Linux、Web 全栈」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](https://blog.images.bornforthis.cn/docs-images/sha256/30/3087c629da73428daa0ee050f5b31709c30f650686164b54c724b892a422c585.jpg)
