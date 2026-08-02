---
title: 01-ollama 的安装与基础应用
icon: rengongzhineng
date: 2025-04-29 15:25:00
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
---

## 1. Windows GPU 驱动全套配置

### 1.1 安装 NVIDIA 驱动

#### 1.1.1 📋 确认硬件条件

**检查你的显卡：**

- 必须是 **NVIDIA** 显卡才能用 CUDA 加速。
- 推荐显存：**至少 6GB**，更高更好。
- 桌面版、笔记本版显卡都可以，比如 RTX 3060、3080、4090。

👉 打开命令行，输入：

```cmd
nvidia-smi
```

如果能看到显卡型号和驱动版本，说明 NVIDIA 驱动已安装；否则继续下面的步骤。

#### 1.1.2 🖥 确认电脑显卡

##### 1.1.2.1 🖥 Windows 系统

**方法一：使用设备管理器**

1. 按下 `Win + X`，选择 **设备管理器**。

    ![](https://blog.images.bornforthis.cn/docs-images/sha256/0d/0d7a8d7ef52464d109e0d53ffb14185e2a0b389a6f6e5b2d4cb040c74782f510.png)

2. 展开 **显示适配器**，就能看到当前电脑安装的显卡型号。

    ![](https://blog.images.bornforthis.cn/docs-images/sha256/f0/f014024161a46c95aed069f90cf6d74e3c194d4bb117f80ded00a5abedba3493.png)

**方法二：使用任务管理器**

1. 按下 `Ctrl + Shift + Esc` 打开任务管理器。

2. 点击 **性能** 选项卡。

3. 左侧可以看到 **GPU 0**、**GPU 1** 等，点击可以查看详细显卡信息。

    ![](https://blog.images.bornforthis.cn/docs-images/sha256/a6/a65799af141f56b38d54b5f89953e16ff513a5398f5fff0dd4e327804cdd1b1c.png)

**方法三：使用 `dxdiag` 工具**

1. 按 `Win + R` 打开运行窗口。

2. 输入 `dxdiag`，回车。

    ![](https://blog.images.bornforthis.cn/docs-images/sha256/5b/5b72e523b8b957796386db8d4c74c8d06e2d029ddc285a7418b5523ebbb3d02e.png)

3. 在弹出的 DirectX 诊断工具中，切换到 **显示** 页签，可以看到显卡名称和显存信息。

**方法三：使用命令行（更高级）**

1. 按下 `Win + R`，输入：

    ```cmd
    wmic path win32_VideoController get name
    ```

    这个命令会列出你所有显卡的名称。

    ![](https://blog.images.bornforthis.cn/docs-images/sha256/2e/2eaf54aa9ab1e7c566e329f5c5e10f47f28ee5b8e53ce5287a364c130b3bbfe7.png)

2. 运行后输出如下：

    ![](https://blog.images.bornforthis.cn/docs-images/sha256/34/342a68ce9035d23eaf6859d46be67fd0b89a7464c9f153c83e6ce863f03bbf1a.png)

    

##### 1.1.2.2 🍎 macOS 系统

**方法：使用系统信息**

1. 点击屏幕左上角的苹果标志 。

2. 选择 **关于本机**。

    <img src="https://blog.images.bornforthis.cn/docs-images/sha256/e9/e97ade0f529d8a0bc825363b5b48008b84ef7d12fbdd804d83153a9fe345b663.png" style="zoom:25%;" />

3. 在弹出窗口中，点击 **更多信息…**。

    <img src="https://blog.images.bornforthis.cn/docs-images/sha256/a4/a461b1b27e3caa51cb4431379881cebff22d93e656799d1d2cd7ce8f315eac13.png" style="zoom:25%;" />

4. 在左侧列表中，找到 **图形/显示器**，就能看到显卡型号、显存大小等信息。

    ![](https://blog.images.bornforthis.cn/docs-images/sha256/0e/0e9ba13fd587071d5140f844756ad380f54f37be163da529b060034a5ea13dec.png)

##### 1.1.2.3 🐧 Linux 系统

**方法一：使用命令行** 在终端执行：

```cmd
lspci | grep -i vga
```

会显示类似下面的信息，比如：

```cmd
00:02.0 VGA compatible controller: Intel Corporation UHD Graphics 630 (Mobile)
01:00.0 3D controller: NVIDIA Corporation TU106M [GeForce RTX 2060 Mobile] (rev a1)
```

**方法二：使用 `nvidia-smi`（针对 NVIDIA 显卡）** 如果你安装了 NVIDIA 驱动，可以使用：

```cmd
nvidia-smi
```

可以查看 GPU 型号、驱动版本、显存使用情况等详细信息。

##### 1.1.2.4 小结

| 系统    | 检查显卡方法                           |
| ------- | -------------------------------------- |
| Windows | 设备管理器、任务管理器、`dxdiag`       |
| macOS   | 关于本机 → 系统报告 → 图形/显示器      |
| Linux   | `lspci`，或 `nvidia-smi`（NVIDIA专用） |



#### 1.1.3 安装 NVIDIA 驱动

1. 访问 NVIDIA 官网驱动下载：[https://www.nvidia.com/en-us/drivers/](https://www.nvidia.com/en-us/drivers/)；

2. 选择你的显卡型号，下载并安装最新稳定版驱动；

    ![](https://blog.images.bornforthis.cn/docs-images/sha256/08/088905a5ac46554e172be030e3b9012d9d8a368ab2b5ae76a08f698e588798b7.png)

3. 点击 Find：

    ![Find 之后的界面](https://blog.images.bornforthis.cn/docs-images/sha256/c5/c5058a954680c91d21b86ecf5021eb419340231c3e4772748cc37c05bf665f84.png)

    ✅ 推荐选择：**选择「GeForce Game Ready Driver」**

    👉 适合绝大多数用户，包括我们要运行的大模型、做深度学习推理、甚至玩游戏都没问题。

    解释区别：

    | 驱动类型              | 适合人群                         | 特点                                                        |
    | --------------------- | -------------------------------- | ----------------------------------------------------------- |
    | **Game Ready Driver** | 玩家 / 常规用户 / AI 开发者      | 最新驱动，兼容性好，优先支持新硬件和库（如 PyTorch + CUDA） |
    | **Studio Driver**     | 内容创作者（剪辑 / 设计 / 渲染） | 更稳定，但更新慢，可能不支持最新 CUDA 工具包                |

4. 点 **"View"** 按钮，下载 **Game Ready Driver 版本（576.02）** 大小约 **857.6MB**，日期为 2025-04-16，支持最新 CUDA 环境。

    ![](https://blog.images.bornforthis.cn/docs-images/sha256/7b/7b070fec0164281f93208b9a18b91b9a56e3da7a49a3ad6233e166f97b0e55ed.png)

5. 安装完成之后，重启电脑。

6. 👉 打开命令行，输入：

    ```cmd
    nvidia-smi
    ```

    如果能看到显卡型号和驱动版本，说明 NVIDIA 驱动已安装。示例输出如下：

    ```cmd
    Microsoft Windows [Version 10.0.22631.5262]
    (c) Microsoft Corporation。保留所有权利。
    
    huangjiabao@HUANGJIABAO C:\Users\clela>nvidia-smi
    Tue Apr 29 18:15:58 2025       
    +-----------------------------------------------------------------------------------------+
    | NVIDIA-SMI 561.03                 Driver Version: 561.03         CUDA Version: 12.6     |
    |-----------------------------------------+------------------------+----------------------+
    | GPU  Name                  Driver-Model | Bus-Id          Disp.A | Volatile Uncorr. ECC |
    | Fan  Temp   Perf          Pwr:Usage/Cap |           Memory-Usage | GPU-Util  Compute M. |
    |                                         |                        |               MIG M. |
    |=========================================+========================+======================|
    |   0  NVIDIA GeForce RTX 4070 Ti   WDDM  |   00000000:01:00.0 Off |                  N/A |
    | 30%   34C    P0             34W /  285W |    1750MiB /  12282MiB |      1%      Default |
    |                                         |                        |                  N/A |
    +-----------------------------------------+------------------------+----------------------+
    
    +-----------------------------------------------------------------------------------------+
    | Processes:                                                                              |
    |  GPU   GI   CI        PID   Type   Process name                              GPU Memory |
    |        ID   ID                                                               Usage      |
    |=========================================================================================|
    |    0   N/A  N/A      1876    C+G   C:\Windows\System32\WUDFHost.exe            N/A      |
    |    0   N/A  N/A      5476    C+G   ...ekyb3d8bbwe\PhoneExperienceHost.exe      N/A      |
    |    0   N/A  N/A      5564    C+G   ...n\NVIDIA app\CEF\NVIDIA Overlay.exe      N/A      |
    |    0   N/A  N/A      9728    C+G   ...5n1h2txyewy\ShellExperienceHost.exe      N/A      |
    |    0   N/A  N/A     12528    C+G   ...on\123.0.2420.97\msedgewebview2.exe      N/A      |
    |    0   N/A  N/A     13220    C+G   ...les\microsoft shared\ink\TabTip.exe      N/A      |
    |    0   N/A  N/A     13376    C+G   ...siveControlPanel\SystemSettings.exe      N/A      |
    |    0   N/A  N/A     13504    C+G   C:\Windows\System32\NahimicSvc64.exe        N/A      |
    |    0   N/A  N/A     14848    C+G   ...CBS_cw5n1h2txyewy\TextInputHost.exe      N/A      |
    |    0   N/A  N/A     15132    C+G   ...on\123.0.2420.97\msedgewebview2.exe      N/A      |
    |    0   N/A  N/A     15304    C+G   ...nipaste-2.8.5-Beta-x64\Snipaste.exe      N/A      |
    |    0   N/A  N/A     15860    C+G   ...nt.CBS_cw5n1h2txyewy\SearchHost.exe      N/A      |
    |    0   N/A  N/A     16132    C+G   ...les\Microsoft OneDrive\OneDrive.exe      N/A      |
    |    0   N/A  N/A     16164    C+G   ...15.3031\SESDK\SmartEngineHost64.exe      N/A      |
    |    0   N/A  N/A     16276    C+G   ...0784\office6\promecefpluginhost.exe      N/A      |
    |    0   N/A  N/A     16432    C+G   C:\Windows\explorer.exe                     N/A      |
    |    0   N/A  N/A     16440    C+G   C:\Program Files\ToDesk\ToDesk.exe          N/A      |
    |    0   N/A  N/A     16956    C+G   ...0784\office6\promecefpluginhost.exe      N/A      |
    |    0   N/A  N/A     18064    C+G   C:\Windows\System32\dwm.exe                 N/A      |
    |    0   N/A  N/A     19224    C+G   ...GameViewer\bin\GameViewerServer.exe      N/A      |
    |    0   N/A  N/A     20856    C+G   ...5.0_x64__w2gh52qy24etm\Nahimic3.exe      N/A      |
    |    0   N/A  N/A     22204    C+G   ...gionZone\2.0.15.3031\LegionZone.exe      N/A      |
    |    0   N/A  N/A     23436    C+G   ...2txyewy\StartMenuExperienceHost.exe      N/A      |
    |    0   N/A  N/A     23480    C+G   ...t.LockApp_cw5n1h2txyewy\LockApp.exe      N/A      |
    |    0   N/A  N/A     24268    C+G   ...n\NVIDIA app\CEF\NVIDIA Overlay.exe      N/A      |
    |    0   N/A  N/A     24504    C+G   ...\Huorong\Sysdiag\bin\HipsDaemon.exe      N/A      |
    +-----------------------------------------------------------------------------------------+
    
    huangjiabao@HUANGJIABAO C:\Users\clela>
    ```

    为了方便阅读，我也在下面放了截图：

    ![](https://blog.images.bornforthis.cn/docs-images/sha256/af/af0eced1e5c36996eec68f82147611b0a2841c8f9611b91bf4f245562e4338b2.png)



### 1.2 安装 CUDA Toolkit 和 cuDNN

#### 1.2.1 🧱 选择合适的 CUDA 版本

- 操作系统：Windows
- 架构：x86_64
- 版本：Windows 11 或 Windows 10
- CUDA Toolkit：12.6（或与 PyTorch、TensorFlow 所支持版本一致）

结合前面输出的内容：

```cmd
huangjiabao@HUANGJIABAO C:\Users\clela>nvidia-smi
Tue Apr 29 18:15:58 2025       
+-----------------------------------------------------------------------------------------+
| NVIDIA-SMI 561.03                 Driver Version: 561.03         CUDA Version: 12.6     |
|-----------------------------------------+------------------------+----------------------+
| GPU  Name                  Driver-Model | Bus-Id          Disp.A | Volatile Uncorr. ECC |
| Fan  Temp   Perf          Pwr:Usage/Cap |           Memory-Usage | GPU-Util  Compute M. |
|                                         |                        |               MIG M. |
|=========================================+========================+======================|
|   0  NVIDIA GeForce RTX 4070 Ti   WDDM  |   00000000:01:00.0 Off |                  N/A |
| 30%   34C    P0             34W /  285W |    1750MiB /  12282MiB |      1%      Default |
|                                         |                        |                  N/A |
+-----------------------------------------+------------------------+----------------------+
......
```

关键信息：CUDA Version: 12.6，意味着：**驱动最多兼容 CUDA Runtime 12.6 及其以下版本的程序。**

这部分，按照你具体显卡、英伟达驱动版本去选择接下来安装的版本。

👉 到 NVIDIA CUDA 下载页面：[https://developer.nvidia.com/cuda-downloads](https://developer.nvidia.com/cuda-downloads)；

![](https://blog.images.bornforthis.cn/docs-images/sha256/2b/2bc9cbc96292534fa7d96ea5138adc6ef4da3b91825190ad3e45883ce66cfd2d.png)

但是当前 12.8 不符合我的 NVIDA 驱动支持的版本，要选择历史的版本。

![](https://blog.images.bornforthis.cn/docs-images/sha256/12/12962124d0e85f5a5af2a25008f4fc192ad6e99124108f2864851c2c8dada065.png)

链接：[https://developer.nvidia.com/cuda-toolkit-archive](https://developer.nvidia.com/cuda-toolkit-archive)

选择低于 12.6 的版本（包括 12.6 版本）：

![](https://blog.images.bornforthis.cn/docs-images/sha256/47/4786be77706fffeca402f2012d68808798a2c485c786f36d251208cf2a98cc11.png)

点击后会跳转到下载页面：

![](https://blog.images.bornforthis.cn/docs-images/sha256/46/46472118738187ea2d9682313030f1ac882a7b1e5524936fbc93c12f3842e3b8.png)



点击下载即可。

#### 1.2.2 📥 下载并安装 CUDA Toolkit

1. 下载 `.exe (local)` 安装包，安装文件大概 2.5GB。

2. 安装过程选择：

    - ✅ **Express 安装**（推荐）

    - 会自动安装 `nvcc`, `cuda`, `cuBLAS`, `cuFFT` 等开发组件。

安装完成后，重启电脑。

#### 1.2.3 🧪 验证 CUDA 安装

打开 **CMD 或 PowerShell**，输入：

```cmd
nvcc --version
```

输出类似于：

```cmd
huangjiabao@HUANGJIABAO C:\Users\clela>nvcc --version
nvcc: NVIDIA (R) Cuda compiler driver
Copyright (c) 2005-2022 NVIDIA Corporation
Built on Wed_Sep_21_10:41:10_Pacific_Daylight_Time_2022
Cuda compilation tools, release 11.8, V11.8.89
Build cuda_11.8.r11.8/compiler.31833905_0
```

说明安装成功。

#### 1.2.4 安装 cuDNN（用于深度学习加速）

> cuDNN 是深度学习的“数学加速库”，用于卷积等核心操作。

1. 访问 NVIDIA cuDNN 官网：[https://developer.nvidia.com/cudnn](https://developer.nvidia.com/cudnn)（需要登录 NVIDIA 开发者账号），自行注册账号即可。

2. 下载与你安装的 CUDA 对应的 cuDNN 版本：

    ![](https://blog.images.bornforthis.cn/docs-images/sha256/f9/f93f0feac4b365816b65ceea21dd91e834f0446ed90cb281009d536f82fa4bf0.png)

##### 1.2.4.1 版本如何选择？

那版本怎么选呢？我现在 `nvidia-smi`、`nvcc --version` 两个输出结果如下：

```cmd
Microsoft Windows [Version 10.0.22631.5262]
(c) Microsoft Corporation。保留所有权利。

huangjiabao@HUANGJIABAO C:\Users\clela>nvidia-smi
Tue Apr 29 18:15:58 2025       
+-----------------------------------------------------------------------------------------+
| NVIDIA-SMI 561.03                 Driver Version: 561.03         CUDA Version: 12.6     |
|-----------------------------------------+------------------------+----------------------+
| GPU  Name                  Driver-Model | Bus-Id          Disp.A | Volatile Uncorr. ECC |
| Fan  Temp   Perf          Pwr:Usage/Cap |           Memory-Usage | GPU-Util  Compute M. |
|                                         |                        |               MIG M. |
|=========================================+========================+======================|
|   0  NVIDIA GeForce RTX 4070 Ti   WDDM  |   00000000:01:00.0 Off |                  N/A |
| 30%   34C    P0             34W /  285W |    1750MiB /  12282MiB |      1%      Default |
|                                         |                        |                  N/A |
+-----------------------------------------+------------------------+----------------------+

+-----------------------------------------------------------------------------------------+
| Processes:                                                                              |
|  GPU   GI   CI        PID   Type   Process name                              GPU Memory |
|        ID   ID                                                               Usage      |
|=========================================================================================|
|    0   N/A  N/A      1876    C+G   C:\Windows\System32\WUDFHost.exe            N/A      |
|    0   N/A  N/A      5476    C+G   ...ekyb3d8bbwe\PhoneExperienceHost.exe      N/A      |
|    0   N/A  N/A      5564    C+G   ...n\NVIDIA app\CEF\NVIDIA Overlay.exe      N/A      |
|    0   N/A  N/A      9728    C+G   ...5n1h2txyewy\ShellExperienceHost.exe      N/A      |
|    0   N/A  N/A     12528    C+G   ...on\123.0.2420.97\msedgewebview2.exe      N/A      |
|    0   N/A  N/A     13220    C+G   ...les\microsoft shared\ink\TabTip.exe      N/A      |
|    0   N/A  N/A     13376    C+G   ...siveControlPanel\SystemSettings.exe      N/A      |
|    0   N/A  N/A     13504    C+G   C:\Windows\System32\NahimicSvc64.exe        N/A      |
|    0   N/A  N/A     14848    C+G   ...CBS_cw5n1h2txyewy\TextInputHost.exe      N/A      |
|    0   N/A  N/A     15132    C+G   ...on\123.0.2420.97\msedgewebview2.exe      N/A      |
|    0   N/A  N/A     15304    C+G   ...nipaste-2.8.5-Beta-x64\Snipaste.exe      N/A      |
|    0   N/A  N/A     15860    C+G   ...nt.CBS_cw5n1h2txyewy\SearchHost.exe      N/A      |
|    0   N/A  N/A     16132    C+G   ...les\Microsoft OneDrive\OneDrive.exe      N/A      |
|    0   N/A  N/A     16164    C+G   ...15.3031\SESDK\SmartEngineHost64.exe      N/A      |
|    0   N/A  N/A     16276    C+G   ...0784\office6\promecefpluginhost.exe      N/A      |
|    0   N/A  N/A     16432    C+G   C:\Windows\explorer.exe                     N/A      |
|    0   N/A  N/A     16440    C+G   C:\Program Files\ToDesk\ToDesk.exe          N/A      |
|    0   N/A  N/A     16956    C+G   ...0784\office6\promecefpluginhost.exe      N/A      |
|    0   N/A  N/A     18064    C+G   C:\Windows\System32\dwm.exe                 N/A      |
|    0   N/A  N/A     19224    C+G   ...GameViewer\bin\GameViewerServer.exe      N/A      |
|    0   N/A  N/A     20856    C+G   ...5.0_x64__w2gh52qy24etm\Nahimic3.exe      N/A      |
|    0   N/A  N/A     22204    C+G   ...gionZone\2.0.15.3031\LegionZone.exe      N/A      |
|    0   N/A  N/A     23436    C+G   ...2txyewy\StartMenuExperienceHost.exe      N/A      |
|    0   N/A  N/A     23480    C+G   ...t.LockApp_cw5n1h2txyewy\LockApp.exe      N/A      |
|    0   N/A  N/A     24268    C+G   ...n\NVIDIA app\CEF\NVIDIA Overlay.exe      N/A      |
|    0   N/A  N/A     24504    C+G   ...\Huorong\Sysdiag\bin\HipsDaemon.exe      N/A      |
+-----------------------------------------------------------------------------------------+

huangjiabao@HUANGJIABAO C:\Users\clela>nvcc --version
nvcc: NVIDIA (R) Cuda compiler driver
Copyright (c) 2005-2022 NVIDIA Corporation
Built on Wed_Sep_21_10:41:10_Pacific_Daylight_Time_2022
Cuda compilation tools, release 11.8, V11.8.89
Build cuda_11.8.r11.8/compiler.31833905_0
```

✅ **关键版本对比**：

| 工具                   | 版本号                                    | 说明                                                         |
| ---------------------- | ----------------------------------------- | ------------------------------------------------------------ |
| **CUDA 驱动支持**      | 12.6                                      | `nvidia-smi`显示当前驱动最多支持 CUDA 12.6，这是 GPU 能支持的上限 |
| **CUDA 编译器 (nvcc)** | 11.8                                      | 实际安装并可用的 CUDA 工具包版本                             |
| **cuDNN 选择依据**     | **➤ 按 `nvcc` 的版本来选（CUDA 11.8）** ✅ | 因为这是你本地真正要用来编译和运行模型的版本                 |

⚠️ **为什么“以 nvcc 为准”？**

虽然驱动支持到 CUDA 12.6，但我们安装的 CUDA 工具链是 11.8，**深度学习框架（如 PyTorch 或 TensorFlow）会用这个版本运行和构建代码**。

所以我们应该选择 **支持 CUDA 11.8 的 cuDNN 版本**，比如：**cuDNN v8.6.x 或 v8.8.x** （支持 CUDA 11.8）

**✅ 常用 CUDA ↔ cuDNN 对照表（实际整理自官方）**：

| CUDA 版本     | 推荐 cuDNN 版本            |
| ------------- | -------------------------- |
| **11.0–11.2** | cuDNN 8.0 – 8.1            |
| **11.3–11.6** | cuDNN 8.2 – 8.5            |
| **11.7–11.8** | ✅ **cuDNN 8.6 或 8.8**     |
| **12.0–12.1** | cuDNN 8.9（部分版本）      |
| **12.2–12.5** | cuDNN 9.0（测试版/新版本） |

##### 1.2.4.2 下载安装包

链接：[https://developer.nvidia.com/cudnn-downloads](https://developer.nvidia.com/cudnn-downloads)

![](https://blog.images.bornforthis.cn/docs-images/sha256/03/034e96b6f1864b0de5c262710f35675fe9e29b65f8960ce09f050a434f45400b.png)

当前版本不合适我的 Windows 电脑，需要去历史存档下载：[https://developer.nvidia.com/cudnn-archive](https://developer.nvidia.com/cudnn-archive)

![](https://blog.images.bornforthis.cn/docs-images/sha256/55/554da0d62bdfe3453904a4f20acde825d4ed3f020daa38254864c91179f4a552.png)

点击展开有更多其它版本：

![](https://blog.images.bornforthis.cn/docs-images/sha256/2e/2e91a0db01890f0f207b8fd5fc38df59eb8269b5585dbe859dfb49db26506c38.png)

链接：[https://developer.nvidia.com/rdp/cudnn-archive](https://developer.nvidia.com/rdp/cudnn-archive)

![](https://blog.images.bornforthis.cn/docs-images/sha256/e4/e44d0c7f6c6434df48ea2b4b9eab7f4bb93bbc14b7c9b81f0b8de5824aa014df.png)

可以看见，每个后面都有 CUDA 对应的版本：`Download cuDNN v8.9.7 (December 5th, 2023), for CUDA 12.x`，其中 for CUDA 12.x 就是对应支持的 CUDA 版本。

##### 1.2.4.3 安装 cuDNN

下载 **cuDNN ZIP 包**，手动解压到 CUDA 目录。

把解压后的：

```cmd
bin\*  →  C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v11.8\bin\
lib\x64\* → 同上路径的 lib\x64\
include\* → 同上路径的 include\
```

你从官网下载的 cuDNN 是一个压缩包（ZIP 文件），解压后会看到里面有三个文件夹：

- `bin`：包含 DLL 动态链接库文件
- `lib\x64`：包含链接用的 `.lib` 文件
- `include`：包含 `.h` 头文件

把这三个文件夹里的内容（不是整个文件夹，而是里面的“内容”）**复制粘贴**到你本地 CUDA 的对应目录里。就像这样：

| cuDNN 解压文件       | 复制到本地哪个目录？                                         |
| -------------------- | ------------------------------------------------------------ |
| `bin\*` 里的文件     | `C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v12.1\bin\` |
| `lib\x64\*` 里的文件 | `C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v12.1\lib\x64\` |
| `include\*` 里的文件 | `C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v12.1\include\` |

**🚨 为什么这么做？**

因为 cuDNN 并不会像 CUDA Toolkit 那样有“安装程序”，你必须手动把它放进 CUDA 的系统目录里，才能让 PyTorch / TensorFlow 调用它。

**完成后 cuDNN 就配置好了，无需额外注册。**

#### 1.2.5 测试 PyTorch 是否能用 CUDA

```cmd
pip3 install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu118
```

去 Pytorch 官网选择适合自己的安装命令：[https://pytorch.org/get-started/locally/](https://pytorch.org/get-started/locally/)

然后 Python 里运行：

```python
import torch
print(torch.cuda.is_available())
print(torch.cuda.get_device_name(0))
```

输出你的显卡名（如 RTX 4070 Ti）就说明 CUDA 环境配置成功！

![实际操作截图](https://blog.images.bornforthis.cn/docs-images/sha256/fc/fc09ba5c476089a978b9dc3fba5458b43c62fceaee3c285341c4015db69fbb9c.png)

### 1.3 🧯 常见问题解决

| 问题                    | 原因                       | 解决方法                             |
| ----------------------- | -------------------------- | ------------------------------------ |
| `nvcc` 命令无效         | 环境变量没设置             | 检查 CUDA 安装路径是否加入 `PATH`    |
| CUDA 安装后仍无法用 GPU | cuDNN 没有安装或版本不匹配 | 下载正确 cuDNN 手动覆盖              |
| 多版本 CUDA 冲突        | 系统中混装了多个 CUDA      | 建议保留一个版本 + 配置明确的 `PATH` |

到此，Windows GPU 环境配置完成！

## 2. 让 ollama 安家落户

### 2.1 ollama 下载

无论是什么系统，都直接访问此链接进行下载对应的安装包，此安装包不提供。更新很快，所以希望你到这个章节时，已经可以独立下载软件应用了。

ollama 官网：[https://ollama.com/](https://ollama.com/)

![官网截图](https://blog.images.bornforthis.cn/docs-images/sha256/4e/4e817b8b19c04f4b2da8d9e62de41dc7ae0fe0b049cbe4bf66fbe533b81392bc.png)

点击 Download 进入下载选择页面：

![选择下载页面](https://blog.images.bornforthis.cn/docs-images/sha256/65/65de492fc883969f5bdf3438fd9fc3639a806d5afbea82870b98625162d2ae1f.png)

按照你自己的系统进行选择下载，不要下载错误哦！

### 2.2 MacOS 系统

下载后，解压文件，会出现如下羊驼。

![](https://blog.images.bornforthis.cn/docs-images/sha256/5e/5e512f763efe510e2ad335825bd6e47b5639ccd05e936b358b5833c2cd4e8636.png)

直接拖拽到“应用程序”中：

![](https://blog.images.bornforthis.cn/docs-images/sha256/76/7662fe2132a05aecdc32966df7f2d6b4cca818b2d3473f10a2726100febc75d4.png)

接着去“启动台”点击 Ollama 启动：

![](https://blog.images.bornforthis.cn/docs-images/sha256/cf/cf865d324befd51d2d95c3fb90125d589dee117f961d7cb7e2ea9a2d83bee8d3.png)

点击 Next：

<img src="https://blog.images.bornforthis.cn/docs-images/sha256/68/68c4619fe88995f5e42a0481ce99cb7d026c323db0aa3eb61e9d2a1b7691a153.png" style="zoom:25%;" />

点击 install：

<img src="https://blog.images.bornforthis.cn/docs-images/sha256/c7/c786417645cb588db97c986d3ccbefe5fad653425e54280689b33e03d49fc4b4.png" style="zoom:25%;" />

点击 Finish：

<img src="https://blog.images.bornforthis.cn/docs-images/sha256/bd/bd625e344fa2080804b6e0066645ecca5255b522d51227dd327e227b63dfa051.png" style="zoom:25%;" />

到此，Ollama 安装完成！

### 2.3 Windows 系统

安装包下载完成后，双击运行：

![](https://blog.images.bornforthis.cn/docs-images/sha256/9c/9c44a451c0e49bf4da2aa3e503a7929cc36a254aabfd975b0921bb93df993587.png)



点击 Install：

![](https://blog.images.bornforthis.cn/docs-images/sha256/0c/0c0c586cad5ac5b39ac9051684c05db1d9cadb0aee4d6704599ee8be2c0f45d7.png)

等待安装完成即可。



## 3. 命令行启动

### 3.1 启动命令行

- Windows：Win + R——>输入 cmd；
- MacOS：“启动台”——>“其它”——>“终端”；

使用如下命令安装 llama3.2 模型：

```python
ollama run llama3.2
```

等待安装完成，安装完成后会自动启动：

![](https://blog.images.bornforthis.cn/docs-images/sha256/a4/a44399ea8e39c1b0bdb47c4cd42f96011afd4ca7d7b51e10230acc57dc323bc6.png)

可以直接在 “>>>” 进行输入文字对哈：

![](https://blog.images.bornforthis.cn/docs-images/sha256/80/808d41ca246fadb192a49e09fc3f8e7559492f8ca9878d2cab7b8c7548d978f6.png)

那么，我们如何退出呢？——输入 `"\bye"` 即可：

```cmd
>>> /help 
Available Commands:
  /set            Set session variables
  /show           Show model information
  /load <model>   Load a session or model
  /save <model>   Save your current session
  /clear          Clear session context
  /bye            Exit
  /?, /help       Help for a command
  /? shortcuts    Help for keyboard shortcuts

Use """ to begin a multi-line message.

>>> /bye

huangjiabao@HUANGJIABAO D:\>
```



### 3.2 模型库

Ollama 支持多个预置模型，详见：[https://ollama.com/library](https://ollama.com/library)

![](https://blog.images.bornforthis.cn/docs-images/sha256/d6/d6371ed96833927c7f4be19dbc96f355501a1411d8868d56b5ea8d2452282273.png)

常见模型示例：

| 模型名称           | 参数量 | 大小  | 命令                             |
| ------------------ | ------ | ----- | -------------------------------- |
| Gemma 3            | 1B     | 815MB | `ollama run gemma3:1b`           |
| Gemma 3            | 4B     | 3.3GB | `ollama run gemma3`              |
| Gemma 3            | 12B    | 8.1GB | `ollama run gemma3:12b`          |
| Gemma 3            | 27B    | 17GB  | `ollama run gemma3:27b`          |
| QwQ                | 32B    | 20GB  | `ollama run qwq`                 |
| DeepSeek-R1        | 7B     | 4.7GB | `ollama run deepseek-r1`         |
| DeepSeek-R1        | 671B   | 404GB | `ollama run deepseek-r1:671b`    |
| Llama 3.3          | 70B    | 43GB  | `ollama run llama3.3`            |
| Llama 3.2          | 3B     | 2.0GB | `ollama run llama3.2`            |
| Llama 3.2          | 1B     | 1.3GB | `ollama run llama3.2:1b`         |
| Llama 3.2 Vision   | 11B    | 7.9GB | `ollama run llama3.2-vision`     |
| Llama 3.2 Vision   | 90B    | 55GB  | `ollama run llama3.2-vision:90b` |
| Llama 3.1          | 8B     | 4.7GB | `ollama run llama3.1`            |
| Llama 3.1          | 405B   | 231GB | `ollama run llama3.1:405b`       |
| Phi 4              | 14B    | 9.1GB | `ollama run phi4`                |
| Phi 4 Mini         | 3.8B   | 2.5GB | `ollama run phi4-mini`           |
| Mistral            | 7B     | 4.1GB | `ollama run mistral`             |
| Moondream 2        | 1.4B   | 829MB | `ollama run moondream`           |
| Neural Chat        | 7B     | 4.1GB | `ollama run neural-chat`         |
| Starling           | 7B     | 4.1GB | `ollama run starling-lm`         |
| Code Llama         | 7B     | 3.8GB | `ollama run codellama`           |
| Llama 2 Uncensored | 7B     | 3.8GB | `ollama run llama2-uncensored`   |
| LLaVA              | 7B     | 4.5GB | `ollama run llava`               |
| Granite-3.2        | 8B     | 4.9GB | `ollama run granite3.2`          |

💡 **提示**：运行 7B 模型需至少 8 GB 内存，13B 模型需 16 GB，33B 模型需 32 GB。

这里，我整理的比较多，但并不代表你全部都可以运行。结合自己电脑的 GPU、显存来选择。

### 3.3 Ollama 常用命令

1. **删除模型**：

    ```cmd
    ollama rm llama3.2
    ```

2. **多行输入**：

    ```cmd
    >>> """你好，
    ... 世界！"""
    ```

3. **查看模型信息**：

    ```cmd
    ollama show llama3.2
    ```

4. **查看本地模型列表**：

    ```cmd
    ollama list  # 也就是显示本地已经安装的
    ```

5. **查看已加载模型**：

    ```cmd
    ollama ps
    ```

6. **停止当前正在运行的模型**：

    ```cmd
    ollama stop llama3.2
    ```

7. **启动服务模式（不使用桌面应用）**：

    ```cmd
    ollama serve
    ```

8. **多模态模型（如图像识别）**：

    ```cmd
    ollama run llava "图中是什么？ /路径/图片.png"
    # Output：图像中有一个黄色笑脸，这可能是图片的中心焦点。
    ```

9. **通过参数传入 prompt**：

    ```cmd
    ollama run llama3.2 "请总结此文件：$(cat README.md)"
    # Output：Ollama 是一个轻量级、可扩展的框架，用于在本地机器上构建和运行语言模型。它提供了用于创建、运行和管理模型的简单 API，以及一个可在各种应用程序中轻松使用的预构建模型库。
    ```

### 3.4 REST API 示例

1. 启动服务器：`./ollama serve`；
2. 在一个单独的 shell 中，运行一个模型：`./ollama run llama3.2`

#### 3.4.1 生成响应

```bash
curl http://localhost:11434/api/generate -d '{
  "model": "llama3.2",
  "prompt":"为什么天空是蓝色的？"
}'
```

#### 3.4.2 与模型对话

```bash
curl http://localhost:11434/api/chat -d '{
  "model": "llama3.2",
  "messages": [
    { "role": "user", "content": "为什么天空是蓝色的？" }
  ]
}'
```



### 3.5 Python 代码示例

这个部分的用处最大，可以结合我们前面学的 Python 来进行使用。

#### 3.5.1 基础对话

在你本地运行 Ollama 后，无需命令行启动，可以直接编写代码运行：

```python
from ollama import chat

messages = [
  {
    'role': 'user',
    'content': '你是谁？告诉我一下',
  },
]

response = chat('llama3.2', messages=messages)
print(response['message']['content'])
```

运行后输出如下结果：

```python
我是GPT-4，是一款高性能的大型语言模型。我的目标是提供更好的互动体验，帮助回答您的任何问题和完成任务。
```

从上面的回复上看，“幻觉”挺大的。

#### 3.5.2 拥有历史对话

```python
from ollama import chat

messages = [
  {
    'role': 'user',
    'content': 'Why is the sky blue?',
  },
  {
    'role': 'assistant',
    'content': "The sky is blue because of the way the Earth's atmosphere scatters sunlight.",
  },
  {
    'role': 'user',
    'content': 'What is the weather in Tokyo?',
  },
  {
    'role': 'assistant',
    'content': 'The weather in Tokyo is typically warm and humid during the summer months, with temperatures often exceeding 30°C (86°F). The city experiences a rainy season from June to September, with heavy rainfall and occasional typhoons. Winter is mild, with temperatures rarely dropping below freezing. The city is known for its high-tech and vibrant culture, with many popular tourist attractions such as the Tokyo Tower, Senso-ji Temple, and the bustling Shibuya district.',
  },
]

while True:
  user_input = input('Chat with history: ')
  response = chat(
    'llama3.2',
    messages=messages
    + [
      {'role': 'user', 'content': user_input},
    ],
  )

  # Add the response to the messages to maintain the history
  messages += [
    {'role': 'user', 'content': user_input},
    {'role': 'assistant', 'content': response.message.content},
  ]
  print(response.message.content + '\n')
```

运行结果如下：

```python
Chat with history: 你好
nǐ hǎo！ (Hello!) How can I help you today?

Chat with history: 你是谁？
我是 AI Assistant。 (I am an AI Assistant.)

Chat with history: 我前面说了什么？
你前面说 "你好"，意思是问天气是什么。

Chat with history: 天气怎么样
我们在 Tokyo 的时候讨论了天气。Tokyo 的天气通常很热和潮湿，夏季尤其温暖，偶尔会有雨 showers，而冬季相对较 mild。

（由于我不是 Tokyo 的真实地理位置，我无法给出现实的天气状况，如果你想知道 Tokyo 的当前天气，请可以在网上查阅。）

Chat with history: 我前面问了什么？
你前面问 "天气怎么样"。

Chat with history: 我第一个问题是什么？
你的第一个问题是 "你好"，意思是问天气是什么。但是，这个问题与 Tokyo 的天气无关，因为它是一个问候语。你的第二个问题才是关于天气的。
```

#### 3.5.3 数据向量化

```python
from ollama import embed

response = embed(model='llama3.2', input='Hello, Bornforthis.cn!')
print(response['embeddings'])
```

把你想要向量化的文本，放在 input 参数中。

上面的代码运行后，输出很长，我只放部分：

```python
[[-0.0022045644, 0.018025486, -0.015002881, -0.0073102587, 0.015490928, -0.0007217687, 0.02067014, -0.0014899871, ...... -0.0034658974, 0.0010809652]]
```

更多用法查看官方仓库：[https://github.com/ollama/ollama-python](https://github.com/ollama/ollama-python)

到此，这就是基础的 Ollama 的使用。你可以自己查看官方仓库，更新较为频繁，建议自己多看看官方仓库。

























