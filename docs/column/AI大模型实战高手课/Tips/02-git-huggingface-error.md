---
title: 02-解决git clone及huggingface下载等网络失败问题
date: 2025-02-17 19:37:42
icon: rengongzhineng
author: AI悦创
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
footer: 长期招收编程一对一学员！微信：Jiabcdefh, <a href="https://beian.miit.gov.cn/" target="_blank">闽ICP备19021486号-6</a>
---

## 1. Git Error

你好，我是悦创。

最近 git clone 经常会 clone 不下来，于是乎记录一下解决方案。

如果你在 Windows 本地启动了代理软件，Git 有可能会用到，具体取决于你的网络配置和 Git 的设置。没有代理的，也可以联系我购买方式。

Git 会遵循系统的网络设置，如果代理软件配置为系统代理，Git 会默认使用它。不过，如果你在 Git 中有特别的代理设置，它会优先使用这些配置。你可以通过以下命令查看和设置 Git 的代理：

- **查看当前代理设置**：

    ::: code-tabs

    @tab 全局

    ```bash
    git config --global --get http.proxy
    git config --global --get https.proxy
    ```

    @tab 局部

    ```bash
    git config --local --get http.proxy
    git config --local --get https.proxy
    ```

    :::

- **设置代理**：

    ::: code-tabs

    @tab 全局

    ```bash
    git config --global http.proxy http://your-proxy-address:port
    git config --global https.proxy http://your-proxy-address:port
    ```

    @tab 局部

    ```bash
    git config --local http.proxy http://localhost:7897
    git config --local https.proxy http://localhost:7897
    ```

    :::

如果你没有特别配置，Git 会依赖操作系统的代理设置，代理软件也会影响 Git 的网络请求。如果你遇到问题，比如 Git 无法通过代理连接，检查一下代理软件的配置或者是否需要在 Git 中显式设置代理。

- **验证配置**：

    确保代理设置已生效。你可以检查当前仓库的代理配置，其实和前面的查看当前代理是同一个命令：

    ::: code-tabs

    @tab 全局

    ```bash
    git config --global --get http.proxy
    git config --global --get https.proxy
    ```

    @tab 局部

    ```bash
    git config --local --get http.proxy
    git config --local --get https.proxy
    ```

    :::

- 刷新 DNS

    cmd 运行下方代码，以刷新 DNS 缓存：

    ```bash
    ipconfig/flushdns
    ```

如果你想复原 Git 的代理设置，可以通过以下命令将代理配置移除：

- 移除代理设置：

    这会删除你在全局配置文件中设置的代理：

    ::: code-tabs

    @tab 全局

    ```bash
    git config --global --unset http.proxy
    git config --global --unset https.proxy
    ```

    @tab 局部

    ```bash
    # 可以加上 --local 来指定移除本地配置的代理
    git config --local --unset http.proxy
    git config --local --unset https.proxy
    ```

    :::

上面大部分可以成功，但是只有一个要注意的：就是代理的连接类型，有些人不是 http 代理，是 socket 代理。这个需要自行测试了，我这里给出配置命令：

```bash
git config --global http.proxy socks5://127.0.0.1:7897
git config --global https.proxy socks5://127.0.0.1:7897
```

## 2. huggingface 数据集下载等问题

另外如果打代码的过程遇到 huggingface 数据集或者其他数据集在线下载不下来等情况，可以在代码中添加一下环境变量，挂个代理 就可以下载了。如下代码所示，localhost 也就是127.0.0.1：

```python
from datasets import load_dataset
import os
os.environ['HTTP_PROXY'] = 'http://127.0.0.1:7897'
os.environ['HTTPS_PROXY'] = 'http://127.0.0.1:7897'
datasets = load_dataset('cmrc2018', cache_dir='./data')
```

## 3. huggingface eval 评价指标问题

准备使用 evaluate 进行模型效果的统计，按照相关参考资料。

一般加载评价指标直接从 huggingface 加载下载就可以：

```python
import evaluate
 
metric_name = 'accuracy'
accuracy = evaluate.load(metric_name)
result = accuracy.compute(references=[0,1,0,1], predictions=[1,0,0,1])
 
print(result)
```

发现一直卡在 load 迟迟没有结果，控制台也没有显示任何错误，经过逐步 debug 找到问题所在。

首先根据官方的说明：

```python
'''
path (str): Path or name of the metric script.
    - if ``path`` is a local metric script or a directory containing a local metric script (if the script has the same name as the directory):
      -> load the module from the metric script
      e.g. ``'./metrics/accuracy'`` or ``'./metrics/accuracy/accuracy.py'``.
    - if ``path`` is a metric on the Hugging Face Hub (ex: `glue`, `squad`)
      -> load the module from the metric script in the github repository at huggingface/datasets
      e.g. ``'accuracy'`` or ``'rouge'``.
'''
```

如果直接使用指标名称 “accuracy” 等，程序将会从 huggingface 上下载相应模块到缓存中使用，实际上我的问题就是无法顺利下载【`HTTPSConnectionPool(host='huggingface.co', port=443): Max retries exceeded with url: /spaces/evaluate-metric/accuracy/resolve/v0.4.0/accuracy.py (Caused by ProxyError('Cannot connect to proxy.', timeout('_ssl.c:1059: The handshake operation timed out')))`】（这个错误不会显示ヽ(`Д´)ﾉ）

因此只能将相关文件下载到本地，采用 local metric script 方法：

打开官方 Github GitHub - [huggingface/evaluate](https://github.com/huggingface/evaluate/tree/main): 🤗 `Evaluate: A library for easily evaluating machine learning models and datasets`. 下载 metrics 文件夹，放在测试脚本的目录下，将 `'accuracy'` 改为 `'./metrics/accuracy'`，再次运行文件即可得到正确结果

```python
{'accuracy': 0.5}
```





## 4. huggingface 下载模型问题

如果遇到如下问题：

```bash
huangjiabao@HUANGJIABAO D:\Coder\LargeModels>git clone git@hf.co:THUDM/chatglm3-6b 
Cloning into 'chatglm3-6b'...
remote: Enumerating objects: 150, done.
remote: Total 150 (delta 0), reused 0 (delta 0), pack-reused 150 (from 1)
Receiving objects: 100% (150/150), 61.38 KiB | 10.23 MiB/s, done.
Resolving deltas: 100% (76/76), done.
Updating files: 100% (27/27), done.
Filtering content: 100% (15/15), 23.26 GiB | 15.30 MiB/s, done.
fatal: active post-checkout hook found during git clone:
        D:/Coder/LargeModels/chatglm3-6b/.git/hooks/post-checkout
For security reasons, this is disallowed by default.
If this is intentional and the hook should actually be run, please
run the command again with GIT_CLONE_PROTECTION_ACTIVE=false
warning: Clone succeeded, but checkout failed.
You can inspect what was checked out with 'git status'
and retry with 'git restore --source=HEAD :/'
```

这个错误是由于 Git 安全设置阻止了在 `git clone` 过程中运行某些钩子（hook）。你遇到的问题是 `post-checkout` 钩子在克隆仓库时被触发，但由于安全原因，它被禁用了。

要在 **MacOS**, **Linux**, 和 **Windows** 上允许所有 Git 钩子执行，你可以通过以下配置命令来禁用 Git 对钩子的保护。下面我会提供适合每个平台的命令。

### 4.1 MacOS 和 Linux

在 MacOS 或 Linux 上，你可以通过以下命令来禁用所有 Git 钩子保护：

```bash
git config --global core.hooksPath /dev/null
```

这将禁用钩子的执行路径，Git 将不再执行任何钩子。

### 4.2 Windows

在 Windows 上，你可以设置 Git 钩子的路径为一个无效路径，来禁用钩子执行：

```bash
git config --global core.hooksPath NUL
```

`NUL` 是 Windows 上的虚拟设备，它相当于 Linux 上的 `/dev/null`，意味着钩子不会被执行。

### 4.3 总结

- **MacOS / Linux**: 使用 `/dev/null` 来禁用所有钩子。
- **Windows**: 使用 `NUL` 来禁用所有钩子。

如果你要恢复默认行为，删除这个配置：

```bash
git config --global --unset core.hooksPath
```

这样 Git 将恢复执行钩子。如果你有任何疑问，随时告诉我！













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
