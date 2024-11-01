---
title: Python实现自动截图，逃脱在线监考系统
tags:
  - 小想法
  - Python 工具
categories:
  - Python小项目
description:
  - Python实现自动截图，逃脱在线监考系统。在国外留学的学生，有些科目是在线考试需要枪手帮忙，我学员就是如此。故开发此程序，来自动发送给我截图。不需要任何操作实现截图当前屏幕。
top_img: /img/posts/P06-PythonTools/02-Python实现自动屏幕截图/02-Python实现自动屏幕截图.webp
cover: /img/posts/P06-PythonTools/02-Python实现自动屏幕截图/Canvas-Ruom.webp
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
  - Python实现自动截图，逃脱在线监考系统。在国外留学的学生，有些科目是在线考试需要枪手帮忙，我学员就是如此。故开发此程序，来自动发送给我截图。不需要任何操作实现截图当前屏幕。
abbrlink: df336835
date: 2024-11-01 21:04:17
toc_number:
toc_style_simple:
aplayer:
---

# 1. 前言

你好，我是悦创。

# 2. 版本 V0.1

```python
import os
import time
from datetime import datetime
import pyautogui

def main():
    # 指定保存截图的文件夹
    save_folder = 'screenshots'
    # 如果文件夹不存在，创建它
    if not os.path.exists(save_folder):
        os.makedirs(save_folder)
    try:
        while True:
            # 截取屏幕
            screenshot = pyautogui.screenshot()
            # 生成带有时间戳的文件名
            timestamp = datetime.now().strftime('%Y%m%d_%H%M%S')
            filename = f'screenshot_{timestamp}.png'
            # 保存截图到指定文件夹
            screenshot.save(os.path.join(save_folder, filename))
            print(f'截图已保存为 {filename}')
            # 等待3秒
            time.sleep(3)
    except KeyboardInterrupt:
        print('\n程序已被用户终止。')

if __name__ == '__main__':
    main()
```

**使用说明：**

1. **安装依赖库**：
   在运行此脚本之前，需要确保安装了 `pyautogui` 库。可以使用以下命令安装：

   ```bash
   pip install pyautogui
   ```

2. **运行脚本**：
   将上述代码保存为 `screenshot.py`，在命令行中运行：

   ```bash
   python screenshot.py
   ```

3. **停止程序**：
   当你想停止自动截图时，可以在命令行中按下 `Ctrl + C`。

4. **查看截图**：
   截图将保存到脚本所在目录下的 `screenshots` 文件夹中，文件名包含了截图的时间戳。

**注意事项：**

- **跨平台支持**：该脚本使用了 `pyautogui` 库，可以在 Windows、macOS 和 Linux 上运行。
- **权限要求**：在某些操作系统上，截屏操作可能需要额外的权限，请确保授予脚本必要的权限。
- **性能影响**：频繁的截屏和保存操作可能会对系统性能产生影响，请根据实际需求调整截屏间隔。

**代码解释：**

- **导入模块**：
  - `os`：用于创建文件夹和处理文件路径。
  - `time`：用于实现定时功能。
  - `datetime`：用于生成时间戳。
  - `pyautogui`：用于截取屏幕。

- **主函数`main()`**：
  - 检查并创建保存截图的文件夹。
  - 使用 `while True` 进入无限循环，每隔 3 秒截取一次屏幕并保存。
  - 使用 `try-except` 块捕获键盘中断（`Ctrl + C`），以便在用户终止程序时做出提示。

- **截图和保存**：
  - 使用 `pyautogui.screenshot()` 截取当前屏幕。
  - 使用 `datetime.now().strftime()` 生成时间戳，确保每个截图文件名唯一。
  - 将截图保存为 PNG 格式到指定文件夹。

# 版本 V0.2

