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

一开始是实现手动截图，

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
{% tabs decs %}

<!-- tab 1. 使用说明 -->

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

<!-- endtab -->

<!-- tab 2. 注意事项 -->

- **跨平台支持**：该脚本使用了 `pyautogui` 库，可以在 Windows、macOS 和 Linux 上运行。
- **权限要求**：在某些操作系统上，截屏操作可能需要额外的权限，请确保授予脚本必要的权限。
- **性能影响**：频繁的截屏和保存操作可能会对系统性能产生影响，请根据实际需求调整截屏间隔。

<!-- endtab -->

<!-- tab 3. 代码解释 -->

- **导入模块**：
  - `os`：用于创建文件夹和处理文件路径。
  - `time`：用于实现定时功能。
  - `datetime`：用于生成时间戳。
  - `pyautogui`：用于截取屏幕。

- **主函数 main\(\)**：
  - 检查并创建保存截图的文件夹。
  - 使用 `while True` 进入无限循环，每隔 3 秒截取一次屏幕并保存。
  - 使用 `try-except` 块捕获键盘中断（`Ctrl + C`），以便在用户终止程序时做出提示。

- **截图和保存**：
  - 使用 `pyautogui.screenshot()` 截取当前屏幕。
  - 使用 `datetime.now().strftime()` 生成时间戳，确保每个截图文件名唯一。
  - 将截图保存为 PNG 格式到指定文件夹。

<!-- endtab -->

{% endtabs %}


# 3. 版本 V0.2

当然可以！我将在原有程序的基础上，扩展功能，使其更加完善。以下是改进后的 Python 程序：

```python
import os
import time
import argparse
from datetime import datetime
import pyautogui
import logging

def parse_arguments():
    parser = argparse.ArgumentParser(description='自动截图程序')
    parser.add_argument('-i', '--interval', type=int, default=3, help='截图间隔时间（秒）')
    parser.add_argument('-d', '--duration', type=int, default=0, help='截图持续时间（秒），0表示无限制')
    parser.add_argument('-f', '--folder', type=str, default='screenshots', help='截图保存文件夹')
    parser.add_argument('-r', '--region', type=int, nargs=4, metavar=('left', 'top', 'width', 'height'),
                        help='截取指定区域：左上角坐标和宽高，单位为像素')
    parser.add_argument('-fmt', '--format', type=str, default='png', choices=['png', 'jpg', 'bmp', 'tiff'],
                        help='截图保存格式')
    parser.add_argument('-q', '--quality', type=int, default=80, help='截图质量（仅适用于jpg格式，1-95）')
    args = parser.parse_args()
    return args

def setup_logging(save_folder):
    log_file = os.path.join(save_folder, 'screenshot_log.txt')
    logging.basicConfig(filename=log_file, level=logging.INFO,
                        format='%(asctime)s - %(levelname)s - %(message)s')

def main():
    args = parse_arguments()
    interval = args.interval
    duration = args.duration
    save_folder = args.folder
    region = args.region
    image_format = args.format
    quality = args.quality

    # 创建保存截图的文件夹
    if not os.path.exists(save_folder):
        os.makedirs(save_folder)

    # 设置日志记录
    setup_logging(save_folder)
    logging.info('截图程序已启动。')
    logging.info(f'截图间隔：{interval} 秒')
    logging.info(f'持续时间：{"无限制" if duration == 0 else duration} 秒')
    logging.info(f'保存文件夹：{save_folder}')
    logging.info(f'截取区域：{"全屏" if not region else region}')
    logging.info(f'图片格式：{image_format}')
    logging.info(f'图片质量：{quality}')

    start_time = time.time()
    screenshot_count = 0

    try:
        while True:
            current_time = time.time()
            elapsed_time = current_time - start_time
            if duration > 0 and elapsed_time > duration:
                logging.info('已达到设定的持续时间，程序结束。')
                break

            # 截取屏幕
            timestamp = datetime.now().strftime('%Y%m%d_%H%M%S')
            filename = f'screenshot_{timestamp}.{image_format}'
            filepath = os.path.join(save_folder, filename)

            if region:
                screenshot = pyautogui.screenshot(region=tuple(region))
            else:
                screenshot = pyautogui.screenshot()

            # 保存截图，指定格式和质量
            if image_format.lower() == 'jpg':
                screenshot.save(filepath, quality=quality)
            else:
                screenshot.save(filepath)

            logging.info(f'截图已保存：{filename}')
            print(f'截图已保存：{filename}')
            screenshot_count += 1

            time.sleep(interval)
    except KeyboardInterrupt:
        logging.info('程序被用户终止。')
        print('\n程序被用户终止。')
    except Exception as e:
        logging.error(f'发生错误：{e}')
        print(f'发生错误：{e}')
    finally:
        logging.info(f'总共截取了 {screenshot_count} 张截图。')
        print(f'总共截取了 {screenshot_count} 张截图。')

if __name__ == '__main__':
    main()
```

**新增功能：**

1. **命令行参数：**
   - **截图间隔（`-i`, `--interval`）**：设置截图间隔时间，默认为 3 秒。
   - **持续时间（`-d`, `--duration`）**：设置程序运行的总时长，默认为 0（无限制）。
   - **保存文件夹（`-f`, `--folder`）**：指定截图保存的文件夹，默认为 `screenshots`。
   - **截取区域（`-r`, `--region`）**：指定截取屏幕的区域，需要四个整数参数：左、上、宽度、高度。
   - **图片格式（`-fmt`, `--format`）**：选择截图保存的图片格式（`png`、`jpg`、`bmp`、`tiff`），默认为 `png`。
   - **图片质量（`-q`, `--quality`）**：设置图片质量（仅适用于 `jpg` 格式），范围为 1-95，默认为 80。

2. **区域截图：**
   - 现在可以通过 `-r` 参数指定截取屏幕的特定区域。

3. **持续时间控制：**
   - 可以设置程序运行的总时长，自动停止截图。

4. **日志记录：**
   - 程序会在保存截图的文件夹中生成 `screenshot_log.txt` 日志文件，记录所有操作和错误信息。

5. **错误处理：**
   - 改进了错误处理，捕获并记录异常，保证程序稳定运行。

**使用说明：**

1. **安装依赖库：**
   - 确保安装了 `pyautogui` 库：
     ```bash
     pip install pyautogui
     ```
   - 如果在 macOS 上运行，可能需要安装 `python3-tk`：
     ```bash
     brew install python-tk
     ```

2. **运行程序：**
   - 使用默认设置：
     ```bash
     python screenshot.py
     ```
   - 自定义截图间隔和保存文件夹：
     ```bash
     python screenshot.py -i 5 -f my_screenshots
     ```
   - 截取特定区域（例如：左=100，上=100，宽=800，高=600）：
     ```bash
     python screenshot.py -r 100 100 800 600
     ```
   - 设置持续时间为 60 秒：
     ```bash
     python screenshot.py -d 60
     ```
   - 以 JPEG 格式保存截图，设置质量为 90：
     ```bash
     python screenshot.py -fmt jpg -q 90
     ```
   - 查看帮助信息：
     ```bash
     python screenshot.py -h
     ```

3. **停止程序：**
   - 在命令行中按下 `Ctrl + C` 可以手动停止程序。

4. **查看日志：**
   - 程序会在保存截图的文件夹中生成 `screenshot_log.txt` 日志文件，记录所有操作和错误信息。

**注意事项：**

- **截取区域坐标：**
  - `left` 和 `top` 参数定义了截取区域的起始位置。
  - `width` 和 `height` 参数定义了截取区域的大小。
  - 所有值的单位均为像素。

- **图片格式和质量：**
  - 如果选择 `jpg` 格式，可以通过 `-q` 参数设置图片质量，数值越高质量越好，文件体积也越大。
  - 其他格式（`png`、`bmp`、`tiff`）不支持设置质量参数。

- **持续时间：**
  - 如果持续时间设置为 `0`，程序将无限制运行，直到手动停止。

- **错误处理：**
  - 程序会捕获并记录所有异常，保证程序不会因错误而崩溃。

**示例命令：**

- **每隔 5 秒截取全屏，持续 2 分钟：**
  ```bash
  python screenshot.py -i 5 -d 120
  ```
- **每隔 10 秒截取指定区域，持续运行：**
  ```bash
  python screenshot.py -i 10 -r 200 200 640 480
  ```
- **将截图以 BMP 格式保存到自定义文件夹：**
  ```bash
  python screenshot.py -fmt bmp -f custom_folder
  ```

**代码解释：**

- **参数解析：**
  - 使用 `argparse` 模块处理命令行参数，实现灵活的配置。

- **日志设置：**
  - 配置日志记录，将信息输出到日志文件，并包含时间戳。

- **主循环：**
  - 使用 `while True` 循环，根据设定的间隔和持续时间控制截图频率和总时长。

- **截图保存：**
  - 根据用户指定的格式和质量保存截图。

- **异常处理：**
  - 捕获 `KeyboardInterrupt` 和其他异常，确保程序能够正常退出并记录信息。




{% span center log large blue, 🪧 %}

{% folding blue close, 公众号：AI悦创【二维码】 %}

![](https://bornforthis.cn/gzh.jpg)

{% endfolding %}

{% tip info %}AI悦创·编程一对一

> AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Web、Linux」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh
>
> C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh
>
> 方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)
>
> 方法二：微信：Jiabcdefh

{% endtip %}
