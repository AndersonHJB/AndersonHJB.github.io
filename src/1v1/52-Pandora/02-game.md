---
title: Python 实现古诗词猜词游戏
date: 2023-09-07 18:32:50
author: AI悦创
isOriginal: true
category: 
    - Python一对一辅导
    - NOIP一对一辅导
    - NOI一对一辅导
tag:
    - Python一对一辅导
    - NOIP一对一辅导
    - NOI一对一辅导
icon: game
sticky: false
star: false
article: true
timeline: true
image: false
navbar: true
sidebarIcon: true
headerDepth: 5
comment: true
lastUpdated: true
editLink: false
backToTop: true
toc: true
---

## 1. 项目需求

- [x] 项目名称：成语排序游戏
- [ ] 项目开始时间：2023-09-07 18:32:50
- [ ] 游戏功能：
    - [x] 游戏名称；
    - [ ] 游戏说明；
    - [x] 文字按钮；
    - [x] 耗费时间（文字排序所耗费的时间）；
    - [x] 关卡：1～3 级别「简单、中等、困难」
        - [x] 每个级别里面：一共有三道预设题目，每一次随机选择生成；
        - [x] 耗费时间；
    - [ ] 重开一局的按钮；
    - [ ] 时间记录需要实现记录上一局所耗费的时间；
    - [x] 答对：显示成功并显示所耗费的时间；
    - [x] 答错：当次排序按钮选错，则弹窗显示选择错误；
- [ ] 版本迭代：
    - [x] 0.5 版本：
        - [x] 日期：2023-09-10 12:44:59
        - [x] 技术：Python、tkinter、random、time
        - [x] 功能：基本猜词功能
        - [x] Bug：未发现
    - [x] 1.0 版本：
        - [x] 日期：2023-09-12 20:52:15
        - [x] 功能：实现难度划分和游戏开始界面
        - [x] 建议：待猜测的文本隐藏起来，答对之后显示出来；
    
    



## 2. 技术查询表

### 2.1 编程语言 & 库

| 序号 | 名称    | 功能                                                         |
| ---- | ------- | ------------------------------------------------------------ |
| 01   | Python  | 项目所使用的编程语言                                         |
| 02   | tkinter | Python 小型实现 GUI 的库（官方自带的 Python 库）｜GUI：你现在看见的应用程序界面，这些都是 GUI |
| 03   | random  | Python 中实现随机数的库                                      |
| 04   | time    | Python 自带的时间库                                          |

### 2.2 语法知识

1. 面向对象编程
2. 函数
3. 列表

### 2.3 单词

| 序号 | 单词     | 中文       | 序号 | 单词   | 中文       | 序号 | 单词    | 中文       |
| ---- | -------- | ---------- | ---- | ------ | ---------- | ---- | ------- | ---------- |
| 01   | self     | 自己、自身 | 02   | text   | 文本       | 03   | time    | 时间       |
| 04   | shuffled | 洗牌、打乱 | 05   | random | 随机       | 06   | start   | 开始、启动 |
| 07   | Label    | 标签       | 08   | font   | 文字、字体 | 09   | count   | 数量       |
| 10   | None     | 没有       | 11   | custom | 自定义     | 12   | correct | 正确       |
|      |          |            |      |        |            |      |         |            |
|      |          |            |      |        |            |      |         |            |
|      |          |            |      |        |            |      |         |            |
|      |          |            |      |        |            |      |         |            |
|      |          |            |      |        |            |      |         |            |
|      |          |            |      |        |            |      |         |            |
|      |          |            |      |        |            |      |         |            |
|      |          |            |      |        |            |      |         |            |

## 3. 游戏设计原则

下面是这个游戏的设计思路概述：

### 3.1 游戏目标：

玩家的目标是将乱序的字符按照原始古诗的顺序点击，从而恢复古诗的原文。

### 3.2 初始化与数据准备：

1. **古诗文本处理**：首先，我们将古诗的每个字单独分割出来，使其成为一个字符列表。这使得我们可以对其进行随机乱序，并在稍后为每个字符创建按钮。
   
2. **随机乱序**：我们复制了原始字符列表，并使用 `random.shuffle` 函数对其进行随机乱序。这将为玩家提供一个挑战，让他们按照原始顺序恢复古诗。

3. **跟踪与状态**：为了跟踪玩家的进度和时间，我们设置了几个变量：`correct_count` 跟踪已经正确点击的字符数量，`start_time` 跟踪游戏开始的时间。

### 3.3 用户界面构建：

1. **显示原始古诗**：我们在窗口的顶部使用标签显示原始古诗，这样玩家可以参考。

2. **创建按钮**：对于乱序列表中的每个字符，我们都创建了一个按钮。每个按钮都有一个点击事件，当被点击时，会调用 `check_word` 函数来判断是否按照正确的顺序点击。

### 3.4 游戏逻辑：

1. **开始计时**：当玩家点击第一个按钮时，游戏开始计时。

2. **字符校验**：每当玩家点击一个按钮时，`check_word` 函数都会被调用。它首先检查点击的字符是否与原始文本中当前位置的字符匹配。

3. **进度跟踪**：如果字符匹配，我们更新 `correct_count` 变量并禁用已点击的按钮。如果玩家点击了所有的按钮并且都是正确的顺序，那么游戏结束。

4. **错误处理**：如果玩家点击的字符与期望的字符不匹配，将会显示一个错误消息框。

### 3.5 结束与反馈：

1. **计时器更新**：在游戏进行中，窗口的标题会显示已经过去的时间。

2. **结束反馈**：当玩家成功点击所有的字符并按照正确的顺序恢复了古诗，一个消息框会显示，告诉玩家他们完成了游戏，并告诉他们总共用了多少时间。

这就是这款古诗恢复游戏的设计思路。它是一个简单但有趣的方式，可以让玩家练习和认识古诗。



## 4. Code

::: code-tabs

@tab 0.5 版本

```python
import tkinter as tk
from tkinter import messagebox
import random
import time

class Game(tk.Tk):
    def __init__(self, text):
        super().__init__()

        # 将输入的文本转换为单个字符的列表
        self.text = list(text)
        # 创建一个乱序的字符列表
        self.shuffled = self.text.copy()
        random.shuffle(self.shuffled)
        # 用来跟踪已经匹配正确的字符数
        self.correct_count = 0
        # 跟踪游戏开始的时间
        self.start_time = None

        # 在窗口顶部显示原始文本
        tk.Label(self, text="原文：").pack()
        tk.Label(self, text=text, wraplength=400).pack(pady=10)

        # 在原文下方显示乱序的字符，用户需要按照原文的顺序点击它们
        tk.Label(self, text="点击以下文字，按照正确顺序恢复文本：").pack(pady=20)
        # 为乱序列表中的每个字符创建一个按钮
        # 当按钮被点击时，会调用 self.check_word 函数
        self.buttons = [tk.Button(self, text=char, command=lambda c=char: self.check_word(c)) for char in self.shuffled]
        for button in self.buttons:
            button.pack(side=tk.LEFT, padx=2, pady=10)

    def check_word(self, char):
        # 当第一个按钮被点击时，记录开始时间，并开始更新计时器
        if self.start_time is None:
            self.start_time = time.time()
            self.update_timer()
            
        # 检查点击的字符是否与原文中的当前位置的字符匹配
        if char == self.text[self.correct_count]:
            # 如果匹配，增加正确计数
            self.correct_count += 1
            # 如果所有字符都匹配成功，结束游戏
            if self.correct_count == len(self.text):
                self.end_game()
            # 禁用已经点击的按钮
            for button in self.buttons:
                if button['text'] == char:
                    button.config(state=tk.DISABLED)
                    break
        else:
            # 如果字符不匹配，显示错误消息
            messagebox.showerror("错误", "字符选择不正确!")

    def update_timer(self):
        # 更新窗口标题，显示已经过去的时间
        if self.start_time:
            elapsed_time = int(time.time() - self.start_time)
            self.title(f"已经过去 {elapsed_time} 秒")
            self.after(1000, self.update_timer)  # 每秒更新一次

    def end_game(self):
        # 当游戏结束时，计算总时间并显示完成消息
        elapsed_time = int(time.time() - self.start_time)
        messagebox.showinfo("完成", f"恭喜你完成了游戏! 耗时 {elapsed_time} 秒")

if __name__ == "__main__":
    sample_text = "但愿人长久，千里共婵娟"
    # 创建游戏窗口并启动游戏
    app = Game(sample_text)
    app.title("古诗恢复游戏")
    app.mainloop()
```

@tab 0.6

```python
import tkinter as tk
from tkinter import messagebox
import random
import time

class Game(tk.Tk):
    def __init__(self, text):
        super().__init__()

        self.text = list(text)  # 把文本转为单字列表
        self.shuffled = self.text.copy()
        random.shuffle(self.shuffled)
        self.correct_count = 0
        self.start_time = None

        # 显示原始文本
        tk.Label(self, text="原文：").pack()
        tk.Label(self, text=text, wraplength=400).pack(pady=10)

        # 显示乱序的单词，供玩家点击
        tk.Label(self, text="点击以下文字，按照正确顺序恢复文本：").pack(pady=20)
        self.buttons = [tk.Button(self, text=char, command=lambda c=char: self.check_word(c)) for char in self.shuffled]
        for button in self.buttons:
            button.pack(side=tk.LEFT, padx=2, pady=10)

    def check_word(self, char):
        if self.start_time is None:
            self.start_time = time.time()
            self.update_timer()
            
        if char == self.text[self.correct_count]:
            self.correct_count += 1
            if self.correct_count == len(self.text):
                self.end_game()
            for button in self.buttons:
                if button['text'] == char:
                    button.config(state=tk.DISABLED)
                    break
        else:
            messagebox.showerror("错误", "字符选择不正确!")

    def update_timer(self):
        if self.start_time:
            elapsed_time = int(time.time() - self.start_time)
            self.title(f"已经过去 {elapsed_time} 秒")
            self.after(1000, self.update_timer)

    def end_game(self):
        elapsed_time = int(time.time() - self.start_time)
        messagebox.showinfo("完成", f"恭喜你完成了游戏! 耗时 {elapsed_time} 秒")

if __name__ == "__main__":
    sample_text = "但愿人长久，千里共婵娟"
    app = Game(sample_text)
    app.title("古诗恢复游戏")
    app.mainloop()
```

@tab 1.0

```python
import tkinter as tk
from tkinter import messagebox, ttk
import random
import time


class Game(tk.Tk):
    LEVELS = {
        "简单": ["白日依山尽", "黄河入海流", "欲穷千里目"],
        "中等": ["春眠不觉晓", "处处闻啼鸟", "夜来风雨声"],
        "困难": ["床前明月光，疑是地上霜。", "举头望明月，低头思故乡。", "静夜思，窗前明月光。"],
    }

    def __init__(self):
        super().__init__()

        self.choose_level()

    def choose_level(self):
        self.level_frame = ttk.LabelFrame(self, text="选择级别")
        self.level_frame.pack(pady=20)

        self.level_var = tk.StringVar()
        for level in self.LEVELS.keys():
            ttk.Radiobutton(
                self.level_frame, text=level, value=level, variable=self.level_var
            ).pack(anchor="w", padx=10, pady=5)

        ttk.Button(self.level_frame, text="开始游戏", command=self.start_game).pack(pady=10)

    def start_game(self):
        level_selected = self.level_var.get()
        if not level_selected:
            messagebox.showerror("错误", "请选择一个难度级别!")
            return

        self.level_frame.destroy()

        self.text = random.choice(self.LEVELS[level_selected])
        self.begin_game(self.text)

    def begin_game(self, text):
        self.text = list(text)  # 把文本转为单字列表
        self.shuffled = self.text.copy()
        random.shuffle(self.shuffled)
        self.correct_count = 0
        self.start_time = None

        # 显示原始文本
        tk.Label(self, text="原文：").pack()
        tk.Label(self, text=text, wraplength=400).pack(pady=10)

        # 显示乱序的单词，供玩家点击
        tk.Label(self, text="点击以下文字，按照正确顺序恢复文本：").pack(pady=20)
        self.buttons = [
            tk.Button(self, text=char, command=lambda c=char: self.check_word(c))
            for char in self.shuffled
        ]
        for button in self.buttons:
            button.pack(side=tk.LEFT, padx=2, pady=10)

    def check_word(self, char):
        if self.start_time is None:
            self.start_time = time.time()
            self.update_timer()

        if char == self.text[self.correct_count]:
            self.correct_count += 1
            if self.correct_count == len(self.text):
                self.end_game()
            for button in self.buttons:
                if (
                    button.winfo_exists()
                    and button["text"] == char
                    and button["state"] != tk.DISABLED
                ):
                    button.config(state=tk.DISABLED)
                    break
        else:
            messagebox.showerror("错误", "字符选择不正确!")

    def update_timer(self):
        if self.start_time:
            elapsed_time = int(time.time() - self.start_time)
            self.title(f"已经过去 {elapsed_time} 秒")
            self.after(1000, self.update_timer)

    def end_game(self):
        elapsed_time = int(time.time() - self.start_time)
        messagebox.showinfo("完成", f"恭喜你完成了游戏! 耗时 {elapsed_time} 秒")
        for widget in self.winfo_children():
            widget.destroy()
        self.choose_level()


if __name__ == "__main__":
    app = Game()
    app.title("古诗恢复游戏")
    app.mainloop()
```

@tab 1.0 注释

```python
import tkinter as tk
from tkinter import messagebox, ttk
import random
import time

class Game(tk.Tk):
    # 定义三个难度级别及其对应的古诗题目
    LEVELS = {
        '简单': ["白日依山尽", "黄河入海流", "欲穷千里目"],
        '中等': ["春眠不觉晓", "处处闻啼鸟", "夜来风雨声"],
        '困难': ["床前明月光，疑是地上霜。", "举头望明月，低头思故乡。", "静夜思，窗前明月光。"]
    }

    def __init__(self):
        super().__init__()
        self.choose_level()  # 初始化时，选择难度级别

    def choose_level(self):
        # 创建一个选择难度级别的界面
        self.level_frame = ttk.LabelFrame(self, text="选择级别")
        self.level_frame.pack(pady=20)

        self.level_var = tk.StringVar()
        # 根据LEVELS创建单选按钮供用户选择
        for level in self.LEVELS.keys():
            ttk.Radiobutton(self.level_frame, text=level, value=level, variable=self.level_var).pack(anchor='w', padx=10, pady=5)

        # 添加一个开始游戏的按钮
        ttk.Button(self.level_frame, text="开始游戏", command=self.start_game).pack(pady=10)

    def start_game(self):
        # 获取选中的难度级别
        level_selected = self.level_var.get()
        if not level_selected:
            messagebox.showerror("错误", "请选择一个难度级别!")
            return
        
        self.level_frame.destroy()
        
        # 随机选择一个题目
        self.text = random.choice(self.LEVELS[level_selected])
        self.begin_game(self.text)

    def begin_game(self, text):
        self.text = list(text)  # 将古诗转换为单个字符的列表
        self.shuffled = self.text.copy()
        random.shuffle(self.shuffled)
        self.correct_count = 0
        self.start_time = None

        # 在界面上显示原古诗
        tk.Label(self, text="原文：").pack()
        tk.Label(self, text=text, wraplength=400).pack(pady=10)

        # 显示乱序的字符供玩家点击恢复
        tk.Label(self, text="点击以下文字，按照正确顺序恢复文本：").pack(pady=20)
        self.buttons = [tk.Button(self, text=char, command=lambda c=char: self.check_word(c)) for char in self.shuffled]
        for button in self.buttons:
            button.pack(side=tk.LEFT, padx=2, pady=10)

    def check_word(self, char):
        # 第一次点击时启动计时
        if self.start_time is None:
            self.start_time = time.time()
            self.update_timer()
            
        # 检查玩家点击的字符是否正确
        if char == self.text[self.correct_count]:
            self.correct_count += 1
            # 所有字符都正确点击后结束游戏
            if self.correct_count == len(self.text):
                self.end_game()
            # 禁用被正确点击的按钮
            for button in self.buttons:
                if button.winfo_exists() and button['text'] == char and button['state'] != tk.DISABLED:
                    button.config(state=tk.DISABLED)
                    break
        else:
            messagebox.showerror("错误", "字符选择不正确!")

    def update_timer(self):
        # 更新计时器显示
        if self.start_time:
            elapsed_time = int(time.time() - self.start_time)
            self.title(f"已经过去 {elapsed_time} 秒")
            self.after(1000, self.update_timer)

    def end_game(self):
        # 结束游戏，显示完成时间
        elapsed_time = int(time.time() - self.start_time)
        messagebox.showinfo("完成", f"恭喜你完成了游戏! 耗时 {elapsed_time} 秒")
        for widget in self.winfo_children():
            widget.destroy()
        self.choose_level()

if __name__ == "__main__":
    app = Game()
    app.title("古诗恢复游戏")
    app.mainloop()
```



:::

## 5. 知识点梳理

### 5.1 导入 tkinter 库

```python
import tkinter as tk  # 导入我们的 tkinter 并缩写设置为 tk，在后续的代码中，tk 代表 tkinter 
```

### 5.2 messagebox, ttk

这两个导入都是从 `tkinter` 模块中获取的，它们都是用于 GUI 编程的工具。具体来说：

1. **messagebox**: 这是一个用于显示消息框的模块。在我们的代码中，它用于显示错误消息和完成消息。例如：
    
    ```python
    messagebox.showerror("错误", "请选择一个难度级别!")
    ```
    上述代码将弹出一个错误消息框，标题为“错误”，内容为“请选择一个难度级别！”。
    
2. **ttk**: `ttk` 是 `tkinter` 模块的一个子模块，它提供了一套改进的、更现代化的小部件（控件）。在代码中，我们使用了 `ttk` 中的 `LabelFrame` 和 `Radiobutton` 。这些部件与 `tkinter` 中的原始部件有相同的功能，但具有不同的外观和某些额外的特性。

    使用 `ttk` 中的部件而不是基础的 `tkinter` 部件，可以使应用程序的界面看起来更加现代化和平滑。例如：
    ```python
    self.level_frame = ttk.LabelFrame(self, text="选择级别")
    ```

这些导入使得我们可以在游戏中创建和管理窗口小部件，以及显示消息给玩家。

> 使用 ttk 是为了使用更好的子模块

### 5.3 random

在上述代码中，`random` 模块用于执行随机化操作，为了增加游戏的趣味性和复杂性。

具体来说，`random` 模块在以下几个地方被使用：

1. **选择题目**：
   ```python
   self.text = random.choice(self.LEVELS[level_selected])
   ```
   使用 `random.choice` 从指定难度级别的古诗列表中随机选择一首古诗作为游戏题目。

2. **乱序字符**：
   ```python
   self.shuffled = self.text.copy()
   random.shuffle(self.shuffled)
   ```
   `random.shuffle` 用于将指定的古诗的字符列表打乱顺序，从而生成一个乱序的字符列表。玩家的任务是根据这个乱序的列表点击字符以恢复原始古诗的顺序。

这些随机化操作为游戏增添了变化和挑战性，使得每次游戏的体验都可能有所不同。















::: details 公众号：AI悦创【二维码】

![](/gzh.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Web、Linux」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](/zsxq.jpg)





