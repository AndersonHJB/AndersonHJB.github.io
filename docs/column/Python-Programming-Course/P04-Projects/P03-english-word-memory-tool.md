---
title: P03-每日英语单词记忆卡片工具
icon: shequ-jihuo
date: 2025-05-18 21:22:48
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
copy:
  disableCopy: false
  disableSelection: false
---

## 1. 作业项目说明：每日英语单词记忆卡片工具

### 1.1 项目目标

制作一个英语学习小工具，能够每天抽取若干个单词，展示其中英文，支持标记是否掌握，并将未掌握单词记录下来，以便后续复习。

### 1.2 任务要求

#### 1.2.1 基础功能（必做）

- 从本地词库文件 `word_list.txt` 读取若干单词；
- 随机抽取 5 个单词作为当天学习内容；
- 每个单词按以下流程交互：
    - 显示英文；
    - 用户按下 Enter 查看中文意思；
    - 提问：“是否记住了？” 记录用户输入；
- 将“未记住”的单词写入 `review_list.txt`

#### 1.2.2 进阶功能（选做）

- 加一个选项：`“是否复习未掌握单词？”`（读取 `review_list.txt` 中的词汇）
- 显示学习进度（如“今日记住 3 / 5 个单词”）
- 使用 `datetime` 模块记录学习日期
- 使用 `json` 或 `csv` 存储学习记录（带日期）

### 1.3 文件说明

####  1.3.1 `word_list.txt` 示例格式（英文:中文，每行一个）

```text
apple:苹果
book:书
computer:电脑
run:跑
happy:开心
sun:太阳
dog:狗
```

#### 1.3.2 `review_list.txt` 示例格式

```text
book:书
sun:太阳
```

### 1.4 参考代码结构建议

```python
def load_words(file_path):
    ...

def study_session(words, count=5):
    ...

def save_to_review(to_review, file_path):
    ...

def review_words(file_path):
    ...

def main():
    ...
```

### 1.5 作业提交要求

1. 提交 `.py` 程序源代码（含完整注释）；
2. 代码提交到为你分配的 Github 仓库并使用 Github 跟踪开发进程；[https://github.com/Code1v1](https://github.com/Code1v1)
3. git 提交 message 需要编写好合适的记录，不能乱编写；
4. 提交测试截图（运行过程）；
5. 附带自制的 `word_list.txt` 词库（不少于 20 个单词）；
6. 附加功能或界面美化可酌情加分；
7. 为你的项目编写合适的 `README.md` 文件，并创建 `log.md` 文件实时记录自己每次的开发，还需要创建一个 `Thinking.md` 编写你脑海中随机浮现的想法💡（包括疑惑，不过需要注意结构。）
8. 如果参考了网络文章、人工智能，记得留下对应的参考链接，说明使用了什么知识；（Tips：ChatGPT 可以生成分享链接）
9. 切勿直接通过 AI 生成代码！

### 1.6 扩展挑战（鼓励但不强制）

- 添加 **中文猜英文** 的测试模式；
- 支持 **错题本** 机制，记录曾经记错过的单词；
- 使用 `tkinter` 实现图形界面；
- 每天自动弹出学习提醒（可结合 `schedule` 或 `crontab`）；
- 融合 AI 答疑助教；

### 1.7 项目评分标准：每日英语单词记忆卡片工具

| 评分项                         | 说明                                                  | 分值  |
| ------------------------------ | ----------------------------------------------------- | ----- |
| **功能实现（60 分）**          |                                                       |       |
| 基础功能是否全部实现           | 能读取词库、抽取单词、记录用户选择并保存未掌握词汇    | 30 分 |
| 文件读写操作正确、格式符合要求 | `word_list.txt`、`review_list.txt` 文件正确读取和写入 | 15 分 |
| 运行交互流程合理流畅           | 用户体验佳，有适当提示和错误处理（如输入校验）        | 15 分 |
| **代码质量（20 分）**          |                                                       |       |
| 代码结构清晰，函数划分合理     | 使用函数封装功能逻辑，避免代码重复                    | 10 分 |
| 注释完善，变量命名规范         | 有基本注释说明，变量名具可读性                        | 10 分 |
| **进阶与创新（20 分）**        |                                                       |       |
| 实现进阶功能（任意一项）       | 例如：记忆率统计、复习功能、错题本、学习日期记录等    | 10 分 |
| 个性化扩展与创新               | 如：美化输出、生成学习报告、GUI界面等                 | 10 分 |

## 2. 项目实现

### 2.1 基础功能实现

::: code-tabs

@tab 1. 🧩 基础功能：每日抽取单词、记忆打卡、记录未掌握内容

```python
# -*- coding: utf-8 -*-
# @Time    : 2025/6/6 21:00
# @Author  : AI悦创
# @FileName: main.py
# @Software: PyCharm
# @Blog    ：https://bornforthis.cn/
# code is far away from bugs with the god animal protecting
#    I love animals. They taste delicious.
import random  # 导入 random 模块，用于随机抽取单词

# 函数：从词库文件中读取单词，返回一个字典 {英文: 中文}
def load_words(file_path):
    word_dict = {}  # 创建一个空字典，用来保存单词和释义
    with open(file_path, "r", encoding="utf-8") as f:  # 打开文件，确保使用 utf-8 编码
        for line in f:
            if ':' in line:  # 每行必须包含冒号，作为英文:中文的分隔
                eng, chi = line.strip().split(':', 1)  # 分割英文和中文部分
                word_dict[eng] = chi  # 添加到字典中
    return word_dict  # 返回完整词典

# 函数：学习环节，每次随机抽取 count 个单词进行记忆
def study_session(words, count=5):
    to_review = []  # 创建一个列表，用来保存没记住的单词
    # 从全部单词中随机抽取 count 个，如果词典不足则取全部
    todays_words = random.sample(list(words.items()), min(count, len(words)))

    print("\n📚 今天的单词：")
    # 遍历抽取的单词列表
    for eng, chi in todays_words:
        print(f"\n英文：{eng}")  # 显示英文单词
        input("按 Enter 查看中文意思...")  # 等待用户确认
        print(f"中文：{chi}")  # 显示中文释义

        # 询问用户是否掌握
        remember = input("是否记住了？(y/n): ").strip().lower()
        if remember != 'y':
            # 如果没记住，就添加到待复习列表
            to_review.append((eng, chi))

    return to_review  # 返回未掌握的单词列表

# 函数：将未记住的单词保存到复习文件中
def save_to_review(words, file_path):
    with open(file_path, "a", encoding="utf-8") as f:  # 以追加模式打开复习文件
        for eng, chi in words:
            f.write(f"{eng}:{chi}\n")  # 每行写入一个单词

# 主函数：整个程序的入口
def main():
    words = load_words("word_list.txt")  # 从文件中加载词典
    to_review = study_session(words, count=5)  # 启动学习模式，返回未掌握单词列表

    # 如果有未掌握单词，就保存到复习列表
    if to_review:
        print("\n💾 将未掌握的单词保存到 review_list.txt 中...")
        save_to_review(to_review, "review_list.txt")
    else:
        # 如果全记住了，给出鼓励
        print("\n🎉 恭喜你！今天的单词全部掌握了！")

# 如果当前脚本是主程序，则执行 main()
if __name__ == "__main__":
    main()
```

@tab 2. 📁 示例词库文件 `word_list.txt`（请放在同一目录下）

```python
apple:苹果
book:书
computer:电脑
run:跑
happy:开心
sun:太阳
dog:狗
cat:猫
pen:钢笔
school:学校
```

@tab 3. ✅ 运行结果示例

```python
📚 今天的单词：

英文：dog
按 Enter 查看中文意思...
中文：狗
是否记住了？(y/n): y

英文：apple
按 Enter 查看中文意思...
中文：苹果
是否记住了？(y/n): n
...

💾 将未掌握的单词保存到 review_list.txt 中...
```

:::

### 2.2 进阶功能实现

::: code-tabs

@tab 1. 💻`study_tool.py`

```python
import random      # 用于随机抽取单词
import json        # 用于保存学习记录为 JSON 格式
import os          # 用于判断文件是否存在
from datetime import datetime  # 获取当前日期时间

# 函数：从文件加载单词，返回字典 {英文: 中文}
def load_words(file_path):
    word_dict = {}
    if not os.path.exists(file_path):  # 文件不存在时返回空字典
        return word_dict
    with open(file_path, "r", encoding="utf-8") as f:
        for line in f:
            if ':' in line:
                eng, chi = line.strip().split(':', 1)
                word_dict[eng] = chi
    return word_dict

# 函数：学习一个词典列表（支持新词或复习词），返回未记住的单词
def study_session(words, count=None, title="今日学习"):
    to_review = []  # 未记住单词列表
    remembered_count = 0  # 记住数量计数器

    # 获取指定数量的单词（或全部）
    if count:
        todays_words = random.sample(list(words.items()), min(count, len(words)))
    else:
        todays_words = list(words.items())

    print(f"\n📚 {title}：共 {len(todays_words)} 个单词")

    for eng, chi in todays_words:
        print(f"\n英文：{eng}")
        input("按 Enter 查看中文意思...")
        print(f"中文：{chi}")
        remember = input("是否记住了？(y/n): ").strip().lower()
        if remember == 'y':
            remembered_count += 1
        else:
            to_review.append((eng, chi))

    # 显示学习进度
    print(f"\n✅ 学习完成！记住了 {remembered_count} / {len(todays_words)} 个单词")

    return to_review, remembered_count, len(todays_words)

# 函数：将单词追加保存到指定文件中（如 review_list.txt）
def save_to_file(words, file_path):
    with open(file_path, "a", encoding="utf-8") as f:
        for eng, chi in words:
            f.write(f"{eng}:{chi}\n")

# 函数：保存学习记录为 JSON 文件，包含日期、记住数量等信息
def save_study_log(date_str, remembered, total):
    log = {
        "date": date_str,
        "remembered": remembered,
        "total": total
    }
    log_file = "study_log.json"

    # 如果已有日志，先加载
    if os.path.exists(log_file):
        with open(log_file, "r", encoding="utf-8") as f:
            logs = json.load(f)
    else:
        logs = []

    logs.append(log)  # 添加今天的记录

    # 覆盖写入
    with open(log_file, "w", encoding="utf-8") as f:
        json.dump(logs, f, ensure_ascii=False, indent=2)

# 主函数：整合流程
def main():
    print("🔔 欢迎使用每日英语记忆卡片工具")

    # 是否先复习之前未掌握的单词
    review_choice = input("是否要复习上次未掌握的单词？(y/n): ").strip().lower()
    if review_choice == 'y':
        review_words = load_words("review_list.txt")
        if review_words:
            to_review, remembered, total = study_session(review_words, title="🔁 复习环节")
            save_study_log(datetime.today().strftime("%Y-%m-%d"), remembered, total)
        else:
            print("📂 当前没有需要复习的单词。")

    # 主学习环节
    all_words = load_words("word_list.txt")
    to_review, remembered, total = study_session(all_words, count=5, title="📖 今日新词")
    if to_review:
        print("\n💾 保存未掌握单词到 review_list.txt...")
        save_to_file(to_review, "review_list.txt")

    # 保存学习日志
    date_str = datetime.today().strftime("%Y-%m-%d")
    save_study_log(date_str, remembered, total)

    print("📌 今日学习已完成，日志已记录。")

# 如果是主文件，启动程序
if __name__ == "__main__":
    main()
```

@tab 2. 📝`word_list.txt`

```python
apple:苹果
book:书
computer:电脑
run:跑
happy:开心
sun:太阳
dog:狗
cat:猫
pen:钢笔
school:学校
water:水
tree:树
car:汽车
house:房子
friend:朋友
music:音乐
game:游戏
phone:电话
family:家庭
teacher:老师
student:学生
city:城市
food:食物
love:爱
smile:微笑
light:光
time:时间
rain:雨
dream:梦想
hope:希望

```

@tab 3. 🗂 项目运行结构建议：

```python
📁 项目文件夹/
├── word_list.txt         # 主词库（英文:中文）
├── review_list.txt       # 复习词库（英文:中文）
├── study_log.json        # 自动生成的学习日志
└── study_tool.py         # 主程序文件
```

@tab 4. 📊 示例：`study_log.json` 内容

```python
[
  {
    "date": "2025-06-06",
    "remembered": 4,
    "total": 5
  },
  {
    "date": "2025-06-07",
    "remembered": 3,
    "total": 5
  }
]
```

:::



### 2.3 扩展挑战

#### 2.3.1 初步扩展

- 添加 **中文猜英文** 的测试模式；
- 支持 **错题本** 机制，记录曾经记错过的单词；

::: code-tabs

@tab 1. 💻 完整示例（含详细注释）

```python
import random
import json
import os
from datetime import datetime

# 加载单词：从文件读取 {英文: 中文}
def load_words(file_path):
    word_dict = {}
    if not os.path.exists(file_path):
        return word_dict
    with open(file_path, "r", encoding="utf-8") as f:
        for line in f:
            if ':' in line:
                eng, chi = line.strip().split(':', 1)
                word_dict[eng] = chi
    return word_dict

# 学习环节：英文 -> 中文
def study_session(words, count=5, title="📖 新词学习"):
    to_review = []  # 未掌握
    remembered = 0  # 已掌握数量

    todays_words = random.sample(list(words.items()), min(count, len(words)))
    print(f"\n{title}（共 {len(todays_words)} 个单词）")

    for eng, chi in todays_words:
        print(f"\n英文：{eng}")
        input("按 Enter 查看中文意思...")
        print(f"中文：{chi}")
        remember = input("是否记住了？(y/n): ").strip().lower()
        if remember == 'y':
            remembered += 1
        else:
            to_review.append((eng, chi))

    print(f"✅ 学习完成：记住 {remembered}/{len(todays_words)}")
    return to_review, remembered, len(todays_words)

# 复习错题本：中文猜英文
def test_chi_to_eng(words, count=5):
    mistakes = []  # 错题本
    correct = 0    # 正确计数

    todays_words = random.sample(list(words.items()), min(count, len(words)))
    print(f"\n🧩 中文猜英文测试（共 {len(todays_words)} 个）")

    for eng, chi in todays_words:
        print(f"\n中文意思：{chi}")
        answer = input("请输入对应英文单词：").strip().lower()
        if answer == eng.lower():
            print("✅ 正确！")
            correct += 1
        else:
            print(f"❌ 错误，正确答案是：{eng}")
            mistakes.append((eng, chi))

    print(f"📊 测试完成：正确 {correct}/{len(todays_words)}")
    return mistakes, correct, len(todays_words)

# 保存未掌握或错题到指定文件
def save_to_file(words, file_path):
    with open(file_path, "a", encoding="utf-8") as f:
        for eng, chi in words:
            f.write(f"{eng}:{chi}\n")

# 保存学习或测试日志到 JSON
def save_log(date_str, remembered, total, log_file):
    log = {
        "date": date_str,
        "remembered": remembered,
        "total": total
    }
    if os.path.exists(log_file):
        with open(log_file, "r", encoding="utf-8") as f:
            logs = json.load(f)
    else:
        logs = []
    logs.append(log)
    with open(log_file, "w", encoding="utf-8") as f:
        json.dump(logs, f, ensure_ascii=False, indent=2)

# 主程序入口
def main():
    print("🔔 欢迎使用每日英语记忆卡片工具（进阶版）")

    # 1️⃣ 是否复习未掌握单词
    if input("是否先复习未掌握单词？(y/n): ").strip().lower() == 'y':
        review_words = load_words("review_list.txt")
        if review_words:
            to_review, remembered, total = study_session(review_words, title="🔁 复习未掌握单词")
            save_log(datetime.today().strftime("%Y-%m-%d"), remembered, total, "study_log.json")
        else:
            print("📂 没有需要复习的单词。")

    # 2️⃣ 今日新词学习
    all_words = load_words("word_list.txt")
    to_review, remembered, total = study_session(all_words, count=5, title="📖 今日新词")
    if to_review:
        print("💾 保存未掌握单词到 review_list.txt...")
        save_to_file(to_review, "review_list.txt")
    save_log(datetime.today().strftime("%Y-%m-%d"), remembered, total, "study_log.json")

    # 3️⃣ 是否进行 中文猜英文 测试
    if input("是否开始中文猜英文测试？(y/n): ").strip().lower() == 'y':
        test_words = load_words("word_list.txt")
        mistakes, correct, total_test = test_chi_to_eng(test_words, count=5)
        if mistakes:
            print("💾 保存拼写错误的单词到 mistake_list.txt...")
            save_to_file(mistakes, "mistake_list.txt")
        save_log(datetime.today().strftime("%Y-%m-%d"), correct, total_test, "test_log.json")

    print("🎉 今日任务全部完成，Good job!")

# 启动
if __name__ == "__main__":
    main()
```

@tab 2. 🗂 新增文件

```python
| 文件名                | 用途                   |
| ------------------ | -------------------- |
| `review_list.txt`  | 保存新词学习或复习中未记住的单词     |
| `mistake_list.txt` | 保存中文猜英文测试中拼错的单词（错题本） |
| `study_log.json`   | 英文→中文 学习日志           |
| `test_log.json`    | 中文→英文 测试日志           |
```

@tab 3. ⚡ 推荐词库示例（`word_list.txt`）

```python
apple:苹果
book:书
computer:电脑
dog:狗
cat:猫
pen:钢笔
school:学校
run:跑
happy:开心
sun:太阳
```





:::











#### 2.3.2 融合 AI 答疑助教

后期更新















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