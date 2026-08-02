---
title: 04｜本地部署：如何本地化部署开源大模型ChatGLM3-6B？
date: 2025-02-12 22:30:58
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

![](https://blog.images.bornforthis.cn/docs-images/sha256/a6/a6f2a6b1714f16c313e6b11dd6ea16d2e9cfa900da460abb07a64d641d30f558.jpg)

你好，我是悦创。

前面听我讲了这么多，相信你也很想上手试一试了。从这节课开始，我们进入一个新的章节，这部分我们会学习如何部署开源大模型 ChatGLM3-6B，本地搭建向量库并结合 LangChain 做检索增强（RAG），并且我会带你做一次微调，从头学习**大模型的部署、微调、推理**等过程。

这节课我们就来讲一下如何本地化部署 ChatGLM3-6B（后面我们简称为 6B）。讲 6B 之前我们先整体看一下目前国内外大模型的发展状况，以便我们进行技术选型。

## 1. 大模型的选择

当前环境下，大模型百花齐放。我筛选出了一些核心玩家，你可以看一下表格。非核心的其实还有很多，这里我就不一一列举了。厂商虽然很多，但真正在研究技术的没多少，毕竟前面我们讲过，玩大模型投入非常大，光看得见的成本，包括人才、训练和硬件费用，一年就得投入几个亿，不是一般玩家能玩得起的。

![](https://blog.images.bornforthis.cn/docs-images/sha256/28/286ec2655e77212f4ba078a1dc2e22136ac770a9d2dda2fda16ac8e88f1bad35.png)

当然，也有不少厂商是基于 LLaMA 爆改的，或者叫套壳，不是真正意义上的自研大模型。

ChatGLM-6B 和 LLaMA2 是目前开源项目比较热的两个，早在 2023 年年初，国内刚兴起大模型热潮时，智谱 AI 就开源了 ChatGLM-6B，当然 130B 也可以拿过来跑，只不过模型太大，需要比较多的显卡，所以很多人就部署 6B 试玩。

从长远看，信创大潮下，国产大模型肯定是首选，企业布局 AI 大模型，要么选择 MaaS 服务，调用大厂大模型 API，要么选择开源大模型，自己微调、部署，为上层应用提供服务。使用 MaaS 服务会面临数据安全问题，所以一般企业会选择私有化部署 + 公有云 MaaS 混合的方式来架构。在国产厂商里面，光从技术角度讲，我认为智谱 AI 是国内大模型研发水平最高的厂商，这也是我选择 ChatGLM-6B 的原因。

还有一点需要考虑，就是 6B 参数规模为 62 亿，单张 3090 显卡就可以进行微调（P-Turing）和推理，对于中小企业而言，简直就是福音。

![](https://blog.images.bornforthis.cn/docs-images/sha256/f1/f18f60b8917e81e6171ab405121d4211e77885854ccc2e4cfa6a64628ac0c429.png)

当然，如果企业预算充足（百万以上），可以尝试 6B 的老大哥 GLM-130B，简称 130B，千亿参数规模，推理能力更强，使用 130B 的话除了 GPU 资源费用，还需要进行商业授权，这个要注意。

![](https://blog.images.bornforthis.cn/docs-images/sha256/76/76f52fa7f988e07aece38b095095f3187dc9b46eca4c356f1f6a32214cf239cf.png)

下面我们讲讲预算不足的情况下，怎么搞定显卡资源？

## 2. 如何搞定显卡资源？

玩儿大模型第一步就是要想办法解决计算资源问题，要么 CPU 要么 GPU，当然还有 TPU，不过 TPU 太小众，这里我就不介绍了。我建议你想办法申请 GPU，因为适合 CPU 计算的大模型不多，有些大模型可以在 CPU 上进行推理，但是需要使用低精度轻量化模型，而低精度下模型会失真，效果肯定不行，只适合简单把玩。如果要真正体验并应用到实际项目，必须上 GPU。那我们可以从哪些渠道去购买 GPU 呢？

1. **购买二手显卡**：无论是个人使用还是企业使用，都可以考虑在网上购买二手 RTX3090 显卡，单卡 24G 显存，8000 块左右，可以用于本地微调、推理。如果想用在产品上，也可以通过云服务做映射，提供简单的推理服务，但是不适合为大规模客户提供服务。
2. **淘宝租赁显卡资源**：适合个人学习使用，可以按天 / 周 / 月 / 年购买服务，比较灵活，成本也不高。
3. **在线 GPU 租赁**：比如 autodl、RTX3090-24G，每月大概不到 900 块钱，也很划算。不仅仅可以用来本地测试，还可以用于生产环境推理，如果用在生产环境的话，最好按照实际推理需求，评估每秒推理量（具体方法我会在大模型应用架构部分讲解），搭建高可用推理环境。
4. **各个平台免费资源**：比如阿里云 PAI 平台、智谱 AI 的开放平台等，对于新人都有一定的免费 GPU 额度，这个方式省钱，但是不推荐，因为有时需要为平台推广拉人，也挺耗时间的。

## 3. ChatGLM3-6B 部署

ChatGLM-6B 目前已经发展到第 3 代 ChatGLM3-6B，除了中英文推理，还增强了数学、代码等推理能力，我记得一年前的 6B 在代码或者数学方面是比较弱的。根据目前的官方信息，在语义、数学、推理、代码、知识等不同角度的数据集上测评显示，ChatGLM3-6B-Base 在 10B 以下的基础模型中性能是最强的，除此之外，还具有 8K、32K、128K 等多个长文理解能力版本。下面我们就一步一步来安装部署 ChatGLM3-6B，你也可以在[官方文档](https://github.com/THUDM/ChatGLM3)里找到安装教程。

### 3.1 准备环境

操作系统推荐 Linux 环境，如 Ubuntu 或者 CentOS。

![](https://blog.images.bornforthis.cn/docs-images/sha256/48/486ae4f89a89494b846031eb4318fbf5561289df5d37c9bdcaa0222d46d5d096.png)



- Python 推荐 3.10～3.11 版本。
- Transformers 库推荐 4.36.2 版本。
- Torch 推荐使用 2.0 及以上的版本，以获得最佳的推理性能。

### 3.2 克隆代码

```bash
git clone https://github.com/THUDM/ChatGLM3
```

![](https://blog.images.bornforthis.cn/docs-images/sha256/ca/cab675ff5976bdef289e5ec5ce4865a88be3b723b0fd15a4fac81e0de23022d4.png)

### 3.3 创建虚拟环境并激活

```bash
python3 -m venv .venv
source .venv\bin\activate
```



### 3.4 安装依赖

注意：要切换成国内 pip 源，比如阿里云，下载会快很多。

```bash
pip config set global.index-url https://mirrors.aliyun.com/pypi/simple/
cd ChatGLM3
pip install -r requirements.txt
```

显示以下内容表明依赖安装成功。

![](https://blog.images.bornforthis.cn/docs-images/sha256/60/60f9e7485feac0fa3489e3c1a2327f0e27dbaf09f00de3dbd2487310f6165015.png)

#### 3.4.1 Windows 配置问题

::: warning

Windows 用户，请直接使用 Wsl + Python 3.11 来实现本地化无痛部署，我已经为你趟过这条泥泞的路～

```bash
# 先尝试更新软件包列表：
sudo apt update && sudo apt upgrade -y
# 然后再次尝试：
sudo apt install -y python3.11
# 如果仍然找不到 python3.11，继续尝试下面的方法。
# 1. 确保 software-properties-common 已安装
sudo apt install -y software-properties-common
# 2. 添加 deadsnakes PPA
sudo add-apt-repository ppa:deadsnakes/ppa -y
sudo apt update
# 3. 安装 Python 3.11
sudo apt install -y python3.11
# 4. 检查安装
python3.11 --version
# 安装 python3.11-venv 包
sudo apt install python3.11-venv
python3.11 -m venv .venv
```



:::

1. vllm 库问题

因为官方提供的 `requirements.txt` 是会报错的，因为 vllm 只支持 Linux，不支持 Windows 平台！

解决方法也很简单，直接换系统安装 Linux，把 Windows 系统完全抹掉，这样就可以解决咯！

是不是菊花一紧哈哈哈哈哈，怎么可能。我怎么会为了一个大模型安装 Linux，太麻烦了、成本太高了！

2. Windows 11 应用商店安装 Linux 系统

3. 安装成功后，使用命令行输入：wsl「进入 Linux 命令界面」

4. 创建虚拟环境：`python3 -m venv .venv`

5. 激活虚拟环境：`source .venv/bin/activate`

6. 安装依赖包：`pip install -r requirements.txt`

7. 遇见 GPU 驱动问题，不讨论具体的 GPU 安装流程（后续补充文章）；

8. 在 WSL 中运行以下命令，确认 NVIDIA 驱动正常：`nvidia-smi`；

    > 如果 nvidia-smi 正常运行，说明 WSL 能正确检测到显卡。

9. 检查 nvcc 是否可用：`nvcc --version`

    > 如果 nvcc 命令找不到，说明 CUDA 可能没有正确配置。

    <img src="https://blog.images.bornforthis.cn/docs-images/sha256/70/708d31d0c4c12e1bdcdf5faeeec29166229f0f562e82be407027bf3f791e2c79.png" style="zoom:25%;" />

10. 配置请求源：

    1. 检查 WSL 发行版：`cat /etc/os-release`；

        > 确保你使用的是 **Ubuntu 20.04 或 22.04**，如果是较老的版本（如 18.04），建议升级。

    2. 检查 APT 源是否包含 NVIDIA CUDA 源：`cat /etc/apt/sources.list.d/cuda.list`

        ```bash
        bornforthis@HuangJiaBao:/mnt/d/Coder/LargeModels/ChatGLM3$ cat /etc/apt/sources.list.d/cuda.list
        cat: /etc/apt/sources.list.d/cuda.list: No such file or directory
        ```

        如果文件不存在或内容不包含 `developer.download.nvidia.com`，需要手动添加 CUDA 软件源。

    3. WSL 需要专门的 CUDA 版本才能使用 GPU 加速，添加 NVIDIA CUDA 源：

        ```bash
        wget https://developer.download.nvidia.com/compute/cuda/repos/ubuntu2204/x86_64/cuda-ubuntu2204.pin
        sudo mv cuda-ubuntu2204.pin /etc/apt/preferences.d/cuda-repository-pin-600
        sudo apt-key adv --fetch-keys https://developer.download.nvidia.com/compute/cuda/repos/ubuntu2204/x86_64/3bf863cc.pub
        sudo add-apt-repository "deb https://developer.download.nvidia.com/compute/cuda/repos/ubuntu2204/x86_64/ /"
        sudo apt update
        ```

    4. 然后尝试安装：`sudo apt install cuda-12-6`；

11. 安装完成后，配置环境变量：

    1. `vim ~/.bashrc` ，英文输入法下，按下 `i` ，末尾添加：

        ```bash
        export PATH=/usr/local/cuda-12.6/bin:$PATH
        export LD_LIBRARY_PATH=/usr/local/cuda-12.6/lib64:$LD_LIBRARY_PATH
        ```

    2. 按下 `esc` 输入 `:wq`；

    3. `source ～/.bashrc`；

12. 再次检测：`nvcc --version` 输出版本信息即可。

13. 去官网查看自己的 torch 安装命令：[https://pytorch.org/get-started/locally/](https://pytorch.org/get-started/locally/)

14. 再次安装依赖即可：`pip install -r requirements.txt`

#### 3.4.2 其它问题

1. 磁盘空间不足「自行解决」
2. Python 版本问题，安装 Python3.11 或其它版本即可解决；
3. Windows 安装的 wsl 可以在 Windows 系统应用中点击移动，移动到别的硬盘！

### 3.5 下载模型

```bash
git clone https://huggingface.co/THUDM/chatglm3-6b
```

如果 Huggingface 下载比较慢的话，也可以选择 ModelScope 进行下载。下载完将 chatglm3-6b 文件夹重新命名成 model 并放在 ChatGLM3 文件夹下，这一步非必需，只要放在一个路径下，在下一步提示的文件里，指定好模型文件路径即可。

### 3.6 命令行模式启动

打开文件 `basic_demo/cli_demo.py`，修改模型加载路径。

```python
MODEL_PATH = os.environ.get('MODEL_PATH', '../model')
```

执行 `python cli_demo.py`。

![](https://blog.images.bornforthis.cn/docs-images/sha256/e0/e0f888d4a67f68ebf1f893eaf2b6b5e76a4ed1f2e798e8a1c24247640fc62ce2.png)

### 3.7 Web 控制台模式启动

安装依赖：

```bash
pip install peft==0.13.2
```



打开文件 `basic_demo/web_demo_gradio.py`，修改模型加载路径。

```python
MODEL_PATH = os.environ.get('MODEL_PATH', '../model')
```

同时修改最后一行：

```python
demo.launch(server_name="127.0.0.1", server_port=7870, inbrowser=True, share=False)
```

`server_name` 修改为本地 IP，并指定端口 `server_port` 即可。也可以设置 `share=True`，使用 gradio 提供的链接进行访问。

执行 `python web_demo_gradio.py`。

![](https://blog.images.bornforthis.cn/docs-images/sha256/e4/e4a9d71735aafb26878c1612995a94755548810efb1a202f46a504a6598a70ed.png)

默认情况下，模型以 FP16 精度加载，大概需要 13GB 显存。如果你的电脑没有 GPU，只能通过 CPU 启动，6B 也是支持的，需要大概 32G 的内存。我们修改一下模型加载脚本。

```python
model = AutoModel.from_pretrained(MODEL_PATH, trust_remote_code=True).float()
```

如果你的电脑有 GPU，但是显存不够，也可以通过修改模型加载脚本，在 4-bit 量化下运行，只需要 6GB 左右的显存就可以进行流程推理。

```python
model = AutoModel.from_pretrained(MODEL_PATH, trust_remote_code=True, ).quantize(4).cuda()
```

同时，官方也提供了一个全新的 web demo，支持 Chat、Tool、Code Interpreter，就在我们克隆下来的代码里，在文件夹 `composite_demo` 下。

```bash
cd composite_demo
pip install -r requirements.txt
export MODEL_PATH=../model
streamlit run main.py 或者 python -m streamlit run main.py
```

页面确实上了一个档次。

![](https://blog.images.bornforthis.cn/docs-images/sha256/ea/ea7d2f20bf3229d5a0c984fea4d10c1dfb3e2ff88200adbca320145a810ccb8c.png)

接下来我简单总结一下部署过程：

1. 安装 Python 环境，包含 pip；
2. 下载代码；
3. 下载模型；
4. 安装依赖；
5. 修改示例代码，指定模型路径、精度等参数；
6. 命令行启动。

整体来说，如果 Python 版本在 3.10～3.11 之间，网络环境也没问题的话，安装还是很快的，如果有 GPU 的话，推理效果也是很好的。在我们部署好模型之后，就可以进行推理了。推理之前，6B 有几个参数可以进行设置，就是**超参数**，用来控制模型的推理准确度，我们知道大模型推理每次给的回答可能都和之前不一样，这也是为什么大模型不能用来处理精确度要求很高的任务的原因，比如让大模型算个税、算工资等等。

## 4. 超参数介绍

ChatGLM3-6B 有 3 个参数可以设置。

1. `max_length`：模型的总 token 限制，包括输入和输出的 tokens。
2. `temperature`：模型的温度。温度只是调整单词的概率分布。它最终的宏观效果是，在较低的温度下，我们的模型更具确定性，而在较高的温度下，则不那么确定。数字越小，给出的答案越精确。
3. `top_p`：模型采样策略参数。每一步只从累积概率超过某个阈值 p 的最小单词集合中进行随机采样，而不考虑其他低概率的词。只关注概率分布的核心部分，忽略了尾部。

对于以下场景，官方推荐使用这样的参数进行设置：

![](https://blog.images.bornforthis.cn/docs-images/sha256/51/516c14f2ec8ee825ed1f4da7f14b888d9f230b4b6027bac1f400ef61b36b203d.png)

系统设置好，我们基本就可以开始进行问答了，ChatGLM3-6B 采用了一种新的 Prompt 格式，看上去应该是模仿的 ChatGPT。下面我们介绍下这种提问格式。

## 5. 新的 Prompt 格式

新的提示格式，主要是增加了几个角色，在对话场景中，有且仅有以下三种角色。

- system：系统信息，出现在消息的最前面，可以指定回答问题的角色。
- user：我们提的问题。
- assistant：大模型给出的回复。

在代码场景中，有且仅有 user、assistant、system、observation 四种角色。observation 是外部返回的结果，比如调用外部 API，代码执行逻辑等返回的结果，都通过 observation 返回。observation 必须放在 assistant 之后。

下面这个是官方提供的例子，基本把以上 4 种角色都解释清楚了。

```bash
<|system|>
Answer the following questions as best as you can. You have access to the following tools:
[
    {
        "name": "get_current_weather",
        "description": "Get the current weather in a given location",
        "parameters": {
            "type": "object",
            "properties": {
                "location": {
                    "type": "string",
                    "description": "The city and state, e.g. San Francisco, CA",
                },
                "unit": {"type": "string"},
            },
            "required": ["location"],
        },
    }
]
<|user|>
今天北京的天气怎么样？
<|assistant|>
好的，让我们来查看今天的天气
<|assistant|>get_current_weather


```python
tool_call(location="beijing", unit="celsius")

<|observation|>
{"temperature": 22}
<|assistant|>
根据查询结果，今天北京的气温为 22 摄氏度。
```

为什么会这么设计呢？

首先，当前阶段的大模型经过训练后，都可以遵守系统消息，而系统消息不算用户对话的一部分，与用户是隔离的，但是可以控制模型与用户交互的范围，比如我们在 system 角色里指定模型充当 Java 技术专家，那么就可以指导模型的输出偏向于 Java 技术范围。

还有一个原因就是**防止用户进行输入注入攻击**。在进行多轮对话的时候，每次新的对话都会把历史对话都带进去。如果我们在前面的对话中，告诉模型错误的提示，那么这些错误的提示会在后续的对话中被当作正确的上下文带进去。我们知道基于自回归的模型，会根据上下文进行内容推理，这样就可能生成错误的内容。角色可以使内容更加容易区分，增加注入攻击的复杂度。这种方式不一定能处理所有的攻击类型，类似于我们日常开发中的 XSS 注入，只能尽可能减少，完全避免有点难。

## 6. 小结

这节课我们学习了如何部署 6B。从模型的选择到环境配置再到模型启动、推理，整体来说已经比较全面了，如果你在实际操作的过程中遇到环境问题，可以自己 Google 一下尝试去解决。毕竟每个人的环境不一样，可能会遇到各种各样的问题，主要还是 Python 相关的多一些。如果这一节课有些内容你没有看懂也不用急，先把模型部署及推理这一块熟悉一下，后面我们会逐渐深入地讲解。

![](https://blog.images.bornforthis.cn/docs-images/sha256/18/183b0d08f7ebfa5020a40227d75d39b913fc259f205818957044fa212299943f.png)



## 7. 思考题

我们知道 ChatGLM3-6B 是一个具有 62 亿参数规模的大语言模型，那你知道大模型的参数是什么意思吗？62 亿表示什么？欢迎你把你的观点分享到评论区，我们一起讨论，如果你觉得这节课的内容对你有帮助的话，也欢迎你分享给其他朋友，我们下节课再见！



::: details .

1. 网络问题，可以用国内的地址，https://gitee.com/mirrors/chatglm3和 https://www.modelscope.cn/ZhipuAI/chatglm3-6b.git，注意不要用 hf 的，模型不全报错 2. 显卡驱动问题，需要把N 卡驱动最低升级到11.8，要先卸载干净旧驱动，再升级。 3. chatglm 如果没有找到 GPU，就会使用 CPU 运算，响应速度会非常慢，用 TOP 查看 CPU 使用率 4. 注意 cuda 版本和pytorch的版本一定要匹配，这里我踩了坑
2. 现在是24年7月15，刚刚结束这个模型部署模块。我使用的是阿里云的PAI平台，如果有人和我一样希望我能帮到你们。 
    1. `git clone https://github.com/THUDM/ChatGLM3` 换成 `git clone https://gitee.com/mirrors/chatglm3`。因为阿里云不支持HF 
    2. 下载模型不要用 `git clone https://huggingface.co/THUDM/chatglm3-6b`，我尝试过各种各样的 lfs，都不好用。先 `pip install modelscope`，然后使用 python 代码 `from modelscope import snapshot_download model_dir = snapshot_download("ZhipuAI/chatglm3-6b", revision = "v1.0.0")`，他会下载到 cache 区，使用 linux 基本指令移过来就好 
    3. `MODEL_PATH = os.environ.get('MODEL_PATH', '../model')`这里，一定要用绝对地址！！！！ 
    4. `UnicodeDecodeError: 'utf-8' codec can't decode byte 0xe8 in position 24: invalid continuation byte` 如果有编码问题，命令行改编码 `export LANGUAGE=en_US.UTF-8`，因为他一开始是 `zh_CN.UTF-8`，一定要改成 `en_US.UTF-8`。输入 locale 检查一下，确保都是 `en_US.UTF-8` 
    5. 使用综合 web 那个案例中，记得去 client 中改一下 `# MODEL_PATH = os.environ.get('MODEL_PATH', 'THUDM/chatglm3-6b')` `MODEL_PATH = os.environ.get('MODEL_PATH', '/mnt/workspace/modelscope/hub/ZhipuAI/chatglm3-6b')` 而且，这里 transformers 和 huggingface_hub 版本不能太高，我的 transformer 是 4.30.2，huggingface_hub 是 0.19.0
3. 我本地跑起来了   redmi G 2020  Windows 环境 ，  显卡： RTX 3060 laptop  参考 的是  `https://www.bilibili.com/video/BV1ce411J7nZ/?p=33&spm_id_from=pageDriver&vd_source=c16aa13fad5b13a7c51efcfcad58e883` `https://www.bilibili.com/read/cv29866295/` 很详细 
4. 国产也能成为推荐理由吗？作者回复: 可以的，而且很多时候是决定性理由，目前信创大潮下，有些企业尤其是央国企，已经发文必须使用国产化软件，像操作系统、数据库、服务器等等都必须用国产的。大模型私有化部署一般来说都是稍微大一点的企业玩的，即便并不是所有公司都要求必须使用国产化软件，但是它是一个属性，企业可以自主选择。
5. 大模型的参数指的是在模型训练过程中需要学习和确定的变量或数值。这些参数决定了模型如何处理输入数据并生成相应的输出。在深度学习和自然语言处理领域，模型的参数数量通常与模型的复杂性和功能强大程度有关。
    1. 作者回复: 没错，可以结合例子理解下参数的训练过程
6. 想请教老师一个问题，temperature 和 top_p 对生成的结果影响大吗？如何测试到最佳的数值呢？谢谢老师！
    1. 作者回复: 大，这几个超参数你可以暴漏给用户，作为用户选项，不知道你有没有用过微软的copilot，页面上就有三个选项：有创造力、平衡、精确，我猜测底层就是通过这几个超参数控制的
7. 爲什麽不用LLaMA3呢，它在推理上面更加具有優勢。
    1. 作者回复: 可以用LLaMA3，文中使用6B，一来是因为课程做的比较早，二来支持国产化软件
8. 「如果你的电脑有 GPU，但是显存不够，也可以通过修改模型加载脚本，在 4-bit 量化下运行，只需要 6GB 左右的显存就可以进行流程推理。」如果没有GPU呢，怎么跑量化？ win本，32G mem，纯cpu 跑还是挺吃力的，速度慢到怀疑人生。今天折腾了下使用 chatglm.cpp 成功部署了量化版，速度杠杠滴。
    1. 作者回复: 参考这里的说明：https://github.com/THUDM/ChatGLM-6B/blob/main/README.md
9. 老师请教您个问题，大模型本地部署的情况，再部署动作结束后，只是部署了大模型代码呢？还是也包括大模型训练之后它拥有的所有记忆知识节点（这块不知道这么描述是不是准确）
    1. 作者回复: 我能理解你的意思。大模型里包含的知识，不是原始的我们理解的知识，而是规律，规律放在权重文件里，也就是我们说的模型里。当我们向模型提问的时候，模型会按照学习好的规律进行推理，最终的答案是由多个词汇组成的，每个词汇就是推理出来的，最后连成了一个完整的答案。再往后学习，你会越来越清晰。

:::





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
