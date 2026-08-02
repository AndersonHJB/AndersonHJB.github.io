---
title: 02-本地部署开源大模型 ChatGLM3-6B
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

前面安装了 Ollama，并本地运行体验后。不过，还不是真正本地自己去部署操作。

我会带你习如何部署开源大模型 ChatGLM3-6B，并且我会带你做一次微调，从头学习**大模型的部署、微调、推理**等过程。

接下来我先来学一下：如何本地化部署 ChatGLM3-6B（后面我们简称为 6B）。

## 1. 为什么选择 ChatGLM3-6B？

当前环境下，大模型百花齐放。厂商虽然很多，但真正在研究技术的没多少，毕竟玩大模型投入非常大，光看得见的成本，包括人才、训练和硬件费用，一年就得投入几个亿，不是一般玩家能玩得起的。

当然，也有不少厂商是基于 LLaMA 爆改的，或者叫套壳，不是真正意义上的自研大模型。

ChatGLM-6B 和 LLaMA2 是目前开源项目比较热的两个，早在 2023 年年初，国内刚兴起大模型热潮时，智谱 AI 就开源了 ChatGLM-6B，当然 130B 也可以拿过来跑，只不过模型太大，需要比较多的显卡，所以很多人就部署 6B 试玩。

从长远看，信创大潮下，国产大模型肯定是首选。企业布局 AI 大模型，要么选择 MaaS 服务，调用大厂大模型 API，要么选择开源大模型，自己微调、部署，为上层应用提供服务。

使用 MaaS 服务会面临数据安全问题，所以一般企业会选择私有化部署 + 公有云 MaaS 混合的方式来架构。在国产厂商里面，光从技术角度讲，我认为智谱 AI 是国内大模型研发水平最高的厂商，这也是我选择 ChatGLM-6B 的原因。

还有一点需要考虑，就是 6B 参数规模为 62 亿，单张 3090 显卡就可以进行微调（P-Turing）和推理，对于中小企业而言，简直就是福音。

还有就是对于个人兴趣爱好，诸如本书的读者，想体验体验大模型，ChatGML-6B 再合适不过了。

![](https://blog.images.bornforthis.cn/docs-images/sha256/9b/9ba50671c515b5799af912c648c2c682df1785f7bc351dd53784890a2bba3559.png)

说点额外的话题：130B 轻量化后，可以在 `RTX3090 * 4` 上进行推理，生产环境使用的话，推荐至少准备 A100（40G * 8）或 V100（32G * 8）* n 台服务器，n 的大小取决于推理吞吐量。训练 130B 大概需要 96 台 A100（320G），历时 2 个多月。

下面我们讲讲预算不足的情况下，怎么搞定显卡资源？

## 2. 如何搞定显卡资源？

大模型的魅力固然强大，但如果你没有强劲的算力支持，它也只能“纸上谈兵”。要驱动这些庞然大物，就像要发动一辆超跑，发动机必须跟得上。那这个“发动机”是什么？就是我们的计算资源，主要是 **GPU**（图形处理器）。当然，还有 CPU 和 TPU，但这两位一个太慢、一个太冷门，我们就不展开了。

### 2.1 为什么说 GPU 是关键？

大多数大语言模型在 CPU 上跑不动，或者只能跑一些被“瘦身”处理过的版本——比如低精度、量化后的模型。这样虽然能省点资源，但也牺牲了理解和生成能力，只能算是“尝个味儿”。如果你想做点真正有价值的事情，比如小规模部署、模型微调，甚至产品化落地，那 GPU 是必不可少的。

### 2.2 获取 GPU 的几种方式

那问题来了：我们怎么才能拥有 GPU 这台“发动机”呢？别急，下面有几种常见且可行的路径：

1. **购买二手显卡**：如果你打算长时间玩模型，或者是团队探索项目，不妨直接入手一块二手的高端显卡，比如 RTX 3090，24G 显存的单卡现在大概八千元左右。用它做本地推理或微调都很合适，甚至可以搭建小型服务，通过映射到线上做些模型接口调用。不过要注意，它**不适合支撑高并发的商用产品**，更适合个人或小规模测试使用。
2. **淘宝租显卡，按需付费**：如果你只是想体验一下模型运行的过程，或者需要临时训练调试，可以选择淘宝上的租赁服务。价格透明、按天或按周计算，非常灵活，适合学习阶段使用。
3. **在线租赁 GPU 平台**：一些云平台专门提供 GPU 虚拟机服务，比如 autodl 等，常见配置如 3090/24G 的机器每月租金不到 900 元。除了训练，这类服务还支持部署推理接口，可用于小规模的线上调用。如果你打算接入生产系统，记得提前评估推理负载。
4. **蹭免费的 GPU 额度**：不少云平台会为新用户或开发者提供免费 GPU 资源，比如阿里云 PAI、智谱开放平台等。虽然“白嫖”听起来香，但一般伴随各种条件，比如邀请注册、推广任务等，不一定适合长期使用。如果你只是短暂体验，可以尝试一下；要做项目，就不太推荐依赖这类资源了。

**算力是大模型的起点，没有 GPU 就像想煮饭却没火，顶多看看菜谱，吃不到米饭。**接下来我们要做的，就是选一条适合自己的算力获取路径，给模型点上火！

## 3. ChatGLM3-6B 部署

ChatGLM-6B 目前已经发展到第 3 代 ChatGLM3-6B，除了中英文推理，还增强了数学、代码等推理能力，我记得一年前的 6B 在代码或者数学方面是比较弱的。根据目前的官方信息，在语义、数学、推理、代码、知识等不同角度的数据集上测评显示，ChatGLM3-6B-Base 在 10B 以下的基础模型中性能是最强的，除此之外，还具有 8K、32K、128K 等多个长文理解能力版本。

学完 ChatGLM3-6B 本地部署后，可以尝试一下 DeepSeek 本地部署。

操作系统推荐 Linux 环境，如 Ubuntu 或者 CentOS。

| 模式           | 内存要求     | 显存要求     | 说明               |
| -------------- | ------------ | ------------ | ------------------ |
| 低精度运行要求 | 内存 >= 8GB  | 显存 >= 5GB  | 1060 6GB，2026 6GB |
| 高精度运行要求 | 内存 >= 16GB | 显存 >= 13GB | 4080 15GB          |
| CPU 运行要求   | 内存 >= 32GB | 无显卡要求   | 很慢，不推荐       |

- Python 推荐 3.10～3.11 版本。
- Transformers 库推荐 4.36.2 版本。
- Torch 推荐使用 2.0 及以上的版本，以获得最佳的推理性能。

### 3.1 准备环境

很多人和我一样，怎么可能提前安装 Linux 系统，何况刚刚入门的小白。所以这里我将带你用：WSL2。

在 Windows 上运行 Linux，不再需要重装系统或虚拟机，**WSL（Windows Subsystem for Linux）** 就能帮我们轻松搞定。

#### 3.1.1 什么是 WSL？

WSL 是微软推出的一种技术，允许你在不离开 Windows 的情况下直接运行 Linux 系统，包括 Ubuntu、Debian、Kali 等多个发行版。适用于开发、学习、测试等场景。

#### 3.1.2 WSL1 与 WSL2 有什么区别？

| 特性         | WSL1                  | WSL2                        |
| ------------ | --------------------- | --------------------------- |
| 内核实现     | Windows API 模拟层    | 真 Linux 内核（轻量虚拟机） |
| 启动速度     | 更快                  | 稍慢一些                    |
| 文件系统性能 | 访问 Windows 文件更快 | 访问 Linux 原生文件更快     |
| 网络支持     | 有一定限制            | 更接近真实 Linux 网络行为   |
| Docker 支持  | ❌ 不支持              | ✅ 完美支持                  |
| 推荐用途     | 快速脚本、老旧系统    | ✅ 所有开发者强烈推荐        |

👉 **建议默认使用 WSL2**

#### 3.1.3 WSL 安装方法总览

| 安装方式          | 是否联网 | 适合用户      | 特点                             |
| ----------------- | -------- | ------------- | -------------------------------- |
| 命令行一键安装    | ✅        | 推荐使用者    | 全自动，省心，Win11 必备         |
| 微软商店图形安装  | ✅        | 新手首选      | 图形化操作，直观简单             |
| 手动逐步安装      | ✅        | 高级用户      | 可精细控制各项配置，如版本、路径 |
| 离线安装（.appx） | ❌        | 内网/离线环境 | 不依赖网络，适合企业部署         |

#### 3.1.4 推荐方法一：命令行一键安装（Win11/Win10 21H2+）

打开“**PowerShell（管理员）**”输入以下命令：

```bash
wsl --install
```

- 自动安装 WSL2
- 自动安装 Ubuntu（可改其他）
- 自动配置虚拟化与内核

重启后，系统会提示你设置用户名和密码，即可开始使用！

注意：命令行安装取决于网络，我自己安装时网络错误过多，最终选择方法二安装。



#### 3.1.5 推荐方法二：微软商店安装法（适合新手）

1. 步骤 1：打开微软商店

    点击任务栏上的 “Microsoft Store” 图标，或使用 Win + S 搜索“Microsoft Store”。

2. 步骤 2：搜索你想安装的 Linux 发行版

    如：

    - Ubuntu（最流行）
    - Debian
    - Kali Linux
    - openSUSE
    - Fedora Remix

    示例搜索：**Ubuntu**

    ![](https://blog.images.bornforthis.cn/docs-images/sha256/99/9921014b71d5a742d730710258a674f4ef2b3195a527040eac256445c6692a0e.png)

3. 步骤 3：点击“获取”进行安装

    点击“获取（Get）”或“安装（Install）”，等待下载完成。

4. 步骤 4：首次运行并设置用户名密码

    在开始菜单中找到“Ubuntu”或你下载的名称，点击运行，首次启动需要设置 Linux 的用户名和密码。

5. 注意：使用微软商店安装，我最为推荐。不过使用微软安装需要注意两个问题：

    1. 如果你打开了 VPN，请关闭 VPN 后，再打开微软商店，否则会无法正常使用；
    2. 如果下载失败，可以考虑重启电脑后并关闭 VPN，再此尝试；
    3. 系统盘要足够大，至少 3～5G，安装完成后可以迁移到别的系统盘；

#### 3.1.6 方法三：手动安装（适合高级用户）

1. 步骤 1：启用 WSL 和虚拟机功能

    ```bash
    dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
    dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
    ```

2. 步骤 2：下载 WSL2 内核（如提示缺失）

    访问：[https://aka.ms/wsl2kernel](https://aka.ms/wsl2kernel) 下载并安装。

3. 步骤 3：设置默认版本为 WSL2

    ```bash
    wsl --set-default-version 2
    ```

4. 步骤 4：安装 Linux 发行版（可从商店或命令行）

    ```bash
    wsl --install -d Ubuntu
    ```

#### 3.1.7 方法四：离线安装（适合无网环境）

1. 从 UUP dump：[https://uupdump.net/](https://uupdump.net/) 或 MS 官方[https://learn.microsoft.com/en-us/windows/wsl/install-manual](https://learn.microsoft.com/en-us/windows/wsl/install-manual) 下载 `.appx` 安装包

2. 重命名为 `.zip` 解压后运行其中的 `ubuntu.exe`、`debian.exe` 等启动

3. 设置用户名和密码即可开始使用

#### 3.1.8 安装多个发行版 & 常用命令

```bash
# 查看可安装发行版
wsl --list --online

# 安装 Debian
wsl --install -d Debian

# 查看已安装版本
wsl --list --verbose

# 切换指定发行版到 WSL2
wsl --set-version Ubuntu 2

# 设置默认发行版
wsl --set-default Ubuntu
```

#### 3.1.9 常见问题解答

| 问题                      | 解答                                                         |
| ------------------------- | ------------------------------------------------------------ |
| 找不到 wsl 命令？         | 需 Windows 10 2004+，或更新至最新版；可启用功能后重启        |
| 如何卸载发行版？          | `wsl --unregister <名称>`                                    |
| 如何访问 Windows 文件？   | 在 Linux 中路径为 `/mnt/c/Users/...`                         |
| Docker 无法使用？         | 请确保你是 WSL2 并安装 [Docker Desktop](https://www.docker.com/) |
| 如何关闭/重启某个发行版？ | `wsl --terminate Ubuntu`，或 `wsl --shutdown`                |

#### 3.1.10 总结

| 安装方式       | 推荐人群        | 优点               |
| -------------- | --------------- | ------------------ |
| 命令行一键安装 | 所有人          | 自动化、省心       |
| 微软商店安装   | 零基础用户      | 图形界面、点击即装 |
| 手动配置安装   | 熟悉 PowerShell | 控制自由           |
| 离线安装       | 特殊环境部署    | 不依赖网络         |

#### 3.1.11 方法一：查看所有发行版的版本信息

打开 **PowerShell 或 CMD 终端**，输入：

```
wsl --list --verbose
```

或者简写为：

```bash
wsl -l -v
```

🖥 示例输出：

```bash
  NAME      STATE           VERSION
* Ubuntu    Running         2
  Debian    Stopped         1
```

**解读：**

- `VERSION` 一栏：
    - `1` 表示该发行版运行在 **WSL1**
    - `2` 表示运行在 **WSL2**
- 星号 `*` 表示默认发行版

#### 3.1.12 方法二：查看某个发行版具体的 WSL 版本

```bash
wsl --list --verbose
```

如果你只想确认某个发行版（如 Ubuntu）是否是 WSL2，也可以执行：

```bash
wsl --status
```

这会显示默认版本以及是否启用了 WSL2。

#### 3.1.13 如果发现是 WSL1，怎么切换为 WSL2？

你可以用以下命令手动切换：

```bash
wsl --set-version Ubuntu 2
```

将 `Ubuntu` 替换成你自己的发行版名称。

#### 3.1.14 使用 wsl

直接启动命令行，输入 wsl 即可：

![](https://blog.images.bornforthis.cn/docs-images/sha256/45/45e80a76f2f819a1c22b4e8c67d66ca9b98e0f35c9d28d2656eaef96a08cbc16.png)

如果要退出 wsl，则输入 exit 回车即可：

![](https://blog.images.bornforthis.cn/docs-images/sha256/08/08745ef6fc87df400007d8c01a5fd26816c39979800e666217879093c3e35a38.png)

#### 3.1.15 迁移 wsl

1. 打开系统设置

    ![](https://blog.images.bornforthis.cn/docs-images/sha256/2a/2a571ebc48ada80ceb1decd8511756048db50f04f2b953cfbdcf0c7993b0e338.png)

2. 点击进入应用

    ![](https://blog.images.bornforthis.cn/docs-images/sha256/d2/d251ab6477e337df40bf413af757f0060869e59b6b05b0171e6051696097f224.png)

3. 找到 Ubuntu，选择移动：

    ![](https://blog.images.bornforthis.cn/docs-images/sha256/03/03e51c27fe5f6f83f060a5c36799e4f5cec9f962f117d84e2a95620de1cb1044.png)

4. 选择想要移动的位置，自行移动，移动失败重试或重启电脑后重试。

接下来的操作，大部分都在 wsl 系统中完成。

### 3.2 克隆代码

```bash
git clone https://github.com/THUDM/ChatGLM3
```

![](https://blog.images.bornforthis.cn/docs-images/sha256/ca/cab675ff5976bdef289e5ec5ce4865a88be3b723b0fd15a4fac81e0de23022d4.png)

### 3.3 安装 Python3.10

Windows 用户，直接使用 Wsl + Python 3.10 来实现本地化无痛部署，我已经为你趟过这条泥泞的路～

```bash
# 先尝试更新软件包列表：
sudo apt update && sudo apt upgrade -y
# 然后再次尝试：
sudo apt install -y python3.10
# 如果仍然找不到 python3.10，继续尝试下面的方法。
# 1. 确保 software-properties-common 已安装
sudo apt install -y software-properties-common
# 2. 添加 deadsnakes PPA
sudo add-apt-repository ppa:deadsnakes/ppa -y
sudo apt update
# 3. 安装 Python 3.10
sudo apt install -y python3.10
# 4. 检查安装
python3.11 --version
# 安装 python3.11-venv 包
sudo apt install python3.10-venv
python3.10 -m venv .venv
```



### 3.4 创建虚拟环境并激活

```bash
python3.10 -m venv .venv
source .venv\bin\activate
```

### 3.5 安装依赖

注意：要切换成国内 pip 源，比如阿里云，下载会快很多。

```bash
pip config set global.index-url https://mirrors.aliyun.com/pypi/simple/
cd ChatGLM3
pip install -r requirements.txt
```

显示以下内容表明依赖安装成功。

![](https://blog.images.bornforthis.cn/docs-images/sha256/60/60f9e7485feac0fa3489e3c1a2327f0e27dbaf09f00de3dbd2487310f6165015.png)

如果你无损到这，那下面的 vllm 库问题可以不用阅读。

#### 3.5.1 Windows vllm 库问题

1. 在 WSL 中运行以下命令，确认 NVIDIA 驱动正常：`nvidia-smi`。如果 nvidia-smi 正常运行，说明 WSL 能正确检测到显卡。

2. 检查 nvcc 是否可用：`nvcc --version`，如果 nvcc 命令找不到，说明 CUDA 可能没有正确配置。

    <img src="https://blog.images.bornforthis.cn/docs-images/sha256/70/708d31d0c4c12e1bdcdf5faeeec29166229f0f562e82be407027bf3f791e2c79.png" style="zoom:25%;" />

3. 配置请求源：

    1. 检查 WSL 发行版：`cat /etc/os-release`：

        确保你使用的是 **Ubuntu 20.04 或 22.04**，如果是较老的版本（如 18.04），建议升级。

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

    4. 然后尝试安装：`sudo apt install cuda-12-6`；（具体版本，安装你自己的驱动支持的版本选择）

4. 安装完成后，配置环境变量：

    1. `vim ~/.bashrc` ，英文输入法下，按下 `i` ，末尾添加：

        ```bash
        export PATH=/usr/local/cuda-12.6/bin:$PATH
        export LD_LIBRARY_PATH=/usr/local/cuda-12.6/lib64:$LD_LIBRARY_PATH
        ```

    2. 按下 `esc` 输入 `:wq`；

    3. `source ～/.bashrc`；

5. 再次检测：`nvcc --version` 输出版本信息即可。

6. 去官网查看自己的 torch 安装命令：[https://pytorch.org/get-started/locally/](https://pytorch.org/get-started/locally/)

7. 再次安装依赖即可：`pip install -r requirements.txt`

#### 3.5.2 其它问题

1. 磁盘空间不足「自行解决」
2. Python 版本问题，安装 Python3.10 或其它版本即可解决；
3. Windows 安装的 wsl 可以在 Windows 系统应用中点击移动，移动到别的硬盘！

### 3.6 下载模型

```bash
git clone https://huggingface.co/THUDM/chatglm3-6b
```

如果 Huggingface 下载比较慢的话，也可以选择 ModelScope 进行下载。下载完将 chatglm3-6b 文件夹重新命名成 model 并放在 ChatGLM3 文件夹下，这一步非必需，只要放在一个路径下，在下一步提示的文件里，指定好模型文件路径即可。

### 3.7 命令行模式启动

打开文件 `basic_demo/cli_demo.py`，修改模型加载路径。

```python
MODEL_PATH = os.environ.get('MODEL_PATH', '../model')
```

执行 `python cli_demo.py`。

![](https://blog.images.bornforthis.cn/docs-images/sha256/e0/e0f888d4a67f68ebf1f893eaf2b6b5e76a4ed1f2e798e8a1c24247640fc62ce2.png)

### 3.8 Web 控制台模式启动

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

| 场景                       | temperature | top_p | 任务描述                                                     |
| -------------------------- | ----------- | ----- | ------------------------------------------------------------ |
| 代码生成                   | 0.2         | 0.1   | 生成符合既定模式和惯例的代码，输出更确定、更集中，有助于生成语法正确的代码 |
| 创意写作                   | 0.7         | 0.8   | 生成具有创造性和多样性的文本，用于讲故事、输出更具探索性、受模式限制较少的内容 |
| 聊天机器人回复             | 0.5         | 0.5   | 生成兼顾一致性和多样性的对话回复，输出更自然、更吸引人       |
| 调用工具并根据工具内容回复 | 0.0         | 0.7   | 根据提供的内容，简洁回复用户的问题                           |
| 代码注释生成               | 0.1         | 0.2   | 生成的代码注释更简洁、更相关，输出更具有确定性、更符合惯例   |
| 数据脚本分析               | 0.2         | 0.1   | 生成的数据分析脚本更有可能正确、高效，输出更确定，重点更突出 |
| 探索性代码编写             | 0.6         | 0.7   | 生成的代码可探索其他解决方案和创造性方法，输出较少受既定模式限制的内容 |

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
