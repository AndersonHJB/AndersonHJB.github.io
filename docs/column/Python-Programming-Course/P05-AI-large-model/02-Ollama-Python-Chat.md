---
title: 04-Python + Ollama 开发实现长时记忆对话系统
icon: rengongzhineng
date: 2025-05-25 13:38:59
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

你好，我是悦创。

~~一个不使用 Laningchat 的，人工智能对话系统。~~

开发一个**轻量级、易部署、支持本地与云端混合模型交互**的对话系统，不依赖 Langchain 等重量级框架，适用于教育、研究与个人助手场景。

**开源地址**：[https://github.com/AndersonHJB/EchoMind](https://github.com/AndersonHJB/EchoMind)

## 1. 开发计划

::: tabs

@tab:active ✅ **V0.1：基础对话系统（本地调用 Ollama）**

> 基础的 Python 调用 Ollama 对话代码

- [x] 使用 Python 实现与 Ollama 的基础对话接口；
- [ ] 用户输入 → LLM 响应流程；
- [ ] 终端交互版本（命令行）；
- [ ] 「待定」抽象封装一个 ChatModel 接口类，便于后续接入其他模型。

@tab 🧠 **V0.2：增加短时记忆能力（对话上下文）**

> 拥有基础的短时记忆能力；

- [ ] 将历史对话内容拼接传入，模拟短时记忆；
- [ ] 上下文缓存机制（如 `recent_n_turns`）；
- [ ] 支持用户手动清除上下文（`/reset` 命令）。

@tab 💾 **V0.3：数据持久化（本地 + 云）**

> 对话数据持久化存储「本地化存储 and 云存储」

- [ ] **📁 本地化存储**

    - [ ] JSON / SQLite 存储每轮对话（按会话分组）——本地化数据存储格式；

    - [ ] 提供导入/导出对话记录的功能；

    - [ ] 本地文件结构设计示意：

        ```bash
        /data/
          session_2025_05_25_14_30.json
        ```

- [ ] ☁️ **云端存储**

    - [ ] 设计简单 API 接口结构（RESTful）；
    - [ ] 支持通过 requests 同步数据至远程数据库（如 LeanCloud、Firestore、Supabase）；
    - [ ] 云端数据加密传输与权限验证（Token 或 API Key）。
    - [ ] 云存储数据存储格式，以及数据如何进行交互；

@tab 🧬 **V0.4：长时记忆与总结压缩**

> Ollama 对用户历史对话数据进行总结记忆；
>
> 对话数据过长，可以考虑分块（分批次）总结并存储——实现数据压缩，防止超出 token 长度；

- [ ] 定期对对话进行总结（e.g. 每 20 轮对话压缩一次）；
- [ ] 使用 LLM 总结模块，按分块进行摘要生成；
- [ ] 存储压缩版本作为“记忆摘要”，减少上下文 Token 压力；
- [ ] 构建一个 MemoryManager 组件，负责记忆管理、压缩、合并等操作。

@tab 🌐 **V0.5：模型动态切换（本地 vs 在线）**

> Gemini 在线大模型选用——封装一个函数，在程序运行过程中，让用户选择所需要使用的大模型「Local or Server」；
>
> 注意点⚠️：Ollama 与 Gemini 的对话结构不同，需要做出适配；

- [ ] 实现模型选择接口：`use_model("ollama")` 或 `use_model("gemini")`；
- [ ] 抽象不同模型输入输出结构；
    - [ ] `Ollama: { 'role': 'user', 'content': '...' }`
    - [ ] `Gemini: { 'parts': ['...'] }`
- [ ] 自动适配输入格式、输出格式；
- [ ] 提供配置项或命令行参数选择模型来源（支持热切换）；
- [ ] 检查网络连通性与 API Key 存在性做出提示。

:::

## 2. 技术栈建议

| **模块**      | **技术选型**                         |
| ------------- | ------------------------------------ |
| 本地模型      | [Ollama](https://ollama.com)         |
| 在线模型      | Gemini Pro / GPT-4 via API           |
| 数据存储      | JSON / SQLite / LeanCloud            |
| 编程语言      | Python 3.10+                         |
| 可选框架      | FastAPI（Web API 接口）              |
| UI 层（可选） | Textual / Gradio / Streamlit（后期） |



## 3. 未来可扩展方向（V1.0+）

- 🔐 用户管理与会话隔离（支持多人使用）
- 📚 向量检索接入（RAG）增强知识问答能力
- 📌 标签化与关键词搜索历史对话
- 🔄 对话插件化（命令扩展，如 `/search`, `/summarize`, `/upload`）







## 4. 术语解释

### 4.1 recent_n_turns

它的意思是：

> **在多轮对话中，只保留最近 N 轮对话内容作为上下文，传给大模型，避免超出 token 限制或引入冗余信息。**

:::: tabs

@tab 🧠 1. 背景理解

大语言模型在每次生成回复时，通常需要你把「**历史对话上下文**」拼接进去，这样才能保持对话连贯。但模型对输入长度（token）有限制（如 GPT-4 是 128k tokens、Gemini 是 32k 或更少），你不能无限地把所有对话都塞进去。

所以就需要一个策略——**只保留最近几轮对话**。这就叫：

@tab 2. `recent_n_turns = 4` 举例

```python
用户：你是谁？                <-- 第1轮
助手：我是你的聊天助手。
用户：你可以做什么？          <-- 第2轮
助手：我可以帮助你写代码、回答问题。
用户：你能解释一下Python里的类吗？ <-- 第3轮
助手：当然，Python的类是……
用户：那怎么继承？           <-- 第4轮
```

如果 recent_n_turns = 2，则模型只会看到：

```python
用户：你能解释一下Python里的类吗？
助手：当然，Python的类是……
用户：那怎么继承？
```



@tab ✅ 3. 优点

- 减少 token 长度，避免超限制；
- 保持对话流畅、重点突出；
- 控制内存消耗，利于本地部署；



@tab 4. 🛠 实现方法示意（Python）

```python
def get_recent_context(chat_history, n=4):
    """
    chat_history: List of dicts, e.g. [{'role': 'user', 'content': 'Hi'}, ...]
    n: Number of recent turns (user+assistant pairs)
    """
    turns = []
    # 每轮包含 user 和 assistant 的一问一答，所以要 2*n 条消息
    return chat_history[-2*n:]
```

@tab Other

下面是一个**轻量级的 MemoryManager 实现示例**，可以用于你开发的对话系统中，结合了：

- ✅ recent_n_turns 短时记忆（上下文截取）
- ✅ 历史对话存储（支持本地保存）
- ✅ 长期记忆压缩接口（预留调用大模型总结）

#### 📦 1. 文件结构建议

```bash
chatbot/
├── memory_manager.py    # 内存管理核心类
├── chat_interface.py    # 主对话逻辑（调用 memory）
└── data/
    └── sessions/
        └── session_001.json  # 对话持久化数据
```



#### 🧠 2. memory_manager.py

```python
import json
import os
from datetime import datetime

class MemoryManager:
    def __init__(self, session_id=None, save_dir="data/sessions", recent_n_turns=4):
        self.chat_history = []
        self.recent_n_turns = recent_n_turns
        self.save_dir = save_dir
        os.makedirs(save_dir, exist_ok=True)
        self.session_id = session_id or datetime.now().strftime("session_%Y%m%d_%H%M%S")
        self.file_path = os.path.join(save_dir, self.session_id + ".json")

    def add_message(self, role, content):
        self.chat_history.append({"role": role, "content": content})
        self._save_to_file()

    def get_recent_context(self):
        return self.chat_history[-2 * self.recent_n_turns:]  # 一轮是 user+assistant

    def _save_to_file(self):
        with open(self.file_path, "w", encoding="utf-8") as f:
            json.dump(self.chat_history, f, ensure_ascii=False, indent=2)

    def load_history(self):
        if os.path.exists(self.file_path):
            with open(self.file_path, "r", encoding="utf-8") as f:
                self.chat_history = json.load(f)

    def summarize_long_term(self, llm_summary_function):
        """
        接受一个外部函数 `llm_summary_function(chat_history) -> summary_text`
        """
        if len(self.chat_history) > 20:  # 超过一定长度触发总结
            summary = llm_summary_function(self.chat_history)
            self.chat_history = [{"role": "system", "content": f"对话总结：{summary}"}] + self.get_recent_context()
            self._save_to_file()
```

#### 🚀 3. 用法示例（chat_interface.py）

```python
from memory_manager import MemoryManager

def dummy_llm_summary(history):
    # 实际应调用模型，如 Gemini、GPT 进行总结
    return "这是对话的简要总结（此为模拟）。"

memory = MemoryManager(recent_n_turns=3)

# 模拟对话流程
while True:
    user_input = input("你：")
    if user_input.strip().lower() == "/exit":
        break
    elif user_input.strip().lower() == "/summary":
        memory.summarize_long_term(dummy_llm_summary)
        continue

    memory.add_message("user", user_input)

    # 模拟模型回复
    recent_context = memory.get_recent_context()
    reply = "这是模型的回复（模拟） based on recent context..."
    print("AI：", reply)

    memory.add_message("assistant", reply)
```

##### 🛠 4. 后续可加功能

- 对话多 session 支持：会话列表管理器
- 持久化策略优化：定时存储或手动保存
- 跨平台同步（如 Notion API、Supabase）
- 加入 Embedding + FAISS：构建持久记忆库

::: details 代码注释

```python
import json
import os
from datetime import datetime

class MemoryManager:
    def __init__(self, session_id=None, save_dir="data/sessions", recent_n_turns=4):
        """
        初始化记忆管理器

        参数：
        - session_id: 会话ID（默认以当前时间命名）
        - save_dir: 对话数据保存目录
        - recent_n_turns: 保留的最近 N 轮对话（1轮 = 用户+助手）

        初始化后会话记录为空，自动创建保存目录
        """
        self.chat_history = []  # 所有历史对话记录（包括 user 和 assistant）
        self.recent_n_turns = recent_n_turns
        self.save_dir = save_dir
        os.makedirs(save_dir, exist_ok=True)  # 创建文件夹（如果不存在）

        # 会话ID与保存路径设定
        self.session_id = session_id or datetime.now().strftime("session_%Y%m%d_%H%M%S")
        self.file_path = os.path.join(save_dir, self.session_id + ".json")

    def add_message(self, role, content):
        """
        添加一条消息（用户或AI）

        参数：
        - role: 'user' 或 'assistant'
        - content: 消息文本
        """
        self.chat_history.append({"role": role, "content": content})
        self._save_to_file()  # 每次添加后立即保存

    def get_recent_context(self):
        """
        获取最近 N 轮对话作为上下文（避免token超限）

        返回：
        - 一个列表，包含最近的 2*N 条对话（用户+助手成对）
        """
        return self.chat_history[-2 * self.recent_n_turns:]

    def _save_to_file(self):
        """
        将当前对话记录保存到文件（JSON格式）
        """
        with open(self.file_path, "w", encoding="utf-8") as f:
            json.dump(self.chat_history, f, ensure_ascii=False, indent=2)

    def load_history(self):
        """
        从文件加载已有对话历史，用于恢复会话
        """
        if os.path.exists(self.file_path):
            with open(self.file_path, "r", encoding="utf-8") as f:
                self.chat_history = json.load(f)

    def summarize_long_term(self, llm_summary_function):
        """
        长时记忆压缩功能：调用外部 LLM 函数对长对话进行总结

        参数：
        - llm_summary_function: 外部传入的总结函数，如 OpenAI、Gemini API 调用

        逻辑：
        - 如果对话超过 20 条，触发总结
        - 生成的摘要作为 system 信息存入 chat history
        - 然后保留最近的对话，丢弃旧内容，模拟"压缩记忆"
        """
        if len(self.chat_history) > 20:
            summary = llm_summary_function(self.chat_history)
            self.chat_history = [{"role": "system", "content": f"对话总结：{summary}"}] + self.get_recent_context()
            self._save_to_file()
```

```python
from memory_manager import MemoryManager

def dummy_llm_summary(history):
    """
    模拟的LLM摘要函数（真实应用中应调用模型API）
    接收完整历史，返回摘要字符串
    """
    return "这是对话的简要总结（此为模拟）。"

# 初始化记忆管理器，指定最近保留 3 轮对话上下文
memory = MemoryManager(recent_n_turns=3)

# 对话主循环
while True:
    user_input = input("你：")  # 获取用户输入

    if user_input.strip().lower() == "/exit":
        # 输入 /exit 可退出程序
        break
    elif user_input.strip().lower() == "/summary":
        # 输入 /summary 手动触发对话摘要
        memory.summarize_long_term(dummy_llm_summary)
        continue

    # 添加用户消息
    memory.add_message("user", user_input)

    # 获取最近上下文作为输入（这里我们只是演示，不调用实际模型）
    recent_context = memory.get_recent_context()

    # 模拟模型回复（真实应用中应调用大模型接口并传入 recent_context）
    reply = "这是模型的回复（模拟） based on recent context..."
    print("AI：", reply)

    # 添加助手回复
    memory.add_message("assistant", reply)
```

:::

::::



## 5. V0.1：基础对话系统（本地调用 Ollama）

### 5.1 Ollama 基础调用

我们先使用 Ollama 提供的库，来进行实现基础调用：

```python
from ollama import chat

messages = [
  {
    'role': 'user',
    'content': '你好，你是谁？可以为我做什么事情？',
  },
]

response = chat('deepseek-r1:7b', messages=messages)
print(response['message']['content'])
```

在实现基础的单次调用后，我们可以开始尝试开发更多功能。



### 5.2 添加用户交互输入

```python {3}
from ollama import chat

user_content = input("Enter your message: ")
messages = [
  {
    'role': 'user',
    'content': user_content,
  },
]

response = chat('deepseek-r1:7b', messages=messages)
print(response['message']['content'])
```



### 5.3 扩展：逐字打印输出功能（可选）

#### 5.3.1 stream=True 测试

想要实现大模型的逐字输出回复功能，我们需要使用到 Ollama 给我提供的 `stream=True` 的参数功能，先进行代码测试试验：

```python
from ollama import chat

user_content = input("Enter your message: ")
messages = [
  {
    'role': 'user',
    'content': user_content,
  },
]

response = chat('deepseek-r1:7b', messages=messages, stream=True)
# print(response['message']['content'])
print(response)

# ---output---
Enter your message: 你好，我是悦创。你是谁？可以为我做什么？
<generator object Client._request.<locals>.inner at 0x105282650>
```

从上面的代码输出可知，我们无法直接读懂内容。

当我们遇到这种无法直接读懂的数据时，我们可以选择：

- 强制转换：`print(list(response))`；
- for 循环把数据进行遍历；

#### 5.3.2 使用 for 循环实现回复内容遍历

我们直接使用 for 循环来直接实现：

```python
from ollama import chat

user_content = input("Enter your message: ")
messages = [
  {
    'role': 'user',
    'content': user_content,
  },
]

response = chat('deepseek-r1:7b', messages=messages, stream=True)
# print(response['message']['content'])
# print(list(response))
for message in response:
    print(message)
    
# ---output---
Enter your message: 你好，我是悦创。你是谁？可以为我做什么？
model='deepseek-r1:7b' created_at='2025-08-03T05:41:31.386371Z' done=False done_reason=None total_duration=None load_duration=None prompt_eval_count=None prompt_eval_duration=None eval_count=None eval_duration=None message=Message(role='assistant', content='<think>', thinking=None, images=None, tool_calls=None)
model='deepseek-r1:7b' created_at='2025-08-03T05:41:31.404422Z' done=False done_reason=None total_duration=None load_duration=None prompt_eval_count=None prompt_eval_duration=None eval_count=None eval_duration=None message=Message(role='assistant', content='\n', thinking=None, images=None, tool_calls=None)
model='deepseek-r1:7b' created_at='2025-08-03T05:41:31.427862Z' done=False done_reason=None total_duration=None load_duration=None prompt_eval_count=None prompt_eval_duration=None eval_count=None eval_duration=None message=Message(role='assistant', content='您好', thinking=None, images=None, tool_calls=None)
model='deepseek-r1:7b' created_at='2025-08-03T05:41:31.450548Z' done=False done_reason=None total_duration=None load_duration=None prompt_eval_count=None prompt_eval_duration=None eval_count=None eval_duration=None message=Message(role='assistant', content='！', thinking=None, images=None, tool_calls=None)
model='deepseek-r1:7b' created_at='2025-08-03T05:41:31.472719Z' done=False done_reason=None total_duration=None load_duration=None prompt_eval_count=None prompt_eval_duration=None eval_count=None eval_duration=None message=Message(role='assistant', content='我是', thinking=None, images=None, tool_calls=None)
model='deepseek-r1:7b' created_at='2025-08-03T05:41:31.495421Z' done=False done_reason=None total_duration=None load_duration=None prompt_eval_count=None prompt_eval_duration=None eval_count=None eval_duration=None message=Message(role='assistant', content='悦', thinking=None, images=None, tool_calls=None)
model='deepseek-r1:7b' created_at='2025-08-03T05:41:31.517854Z' done=False done_reason=None total_duration=None load_duration=None prompt_eval_count=None prompt_eval_duration=None eval_count=None eval_duration=None message=Message(role='assistant', content='创', thinking=None, images=None, tool_calls=None)
model='deepseek-r1:7b' created_at='2025-08-03T05:41:31.54021Z' done=False done_reason=None total_duration=None load_duration=None prompt_eval_count=None prompt_eval_duration=None eval_count=None eval_duration=None message=Message(role='assistant', content='，', thinking=None, images=None, tool_calls=None)
model='deepseek-r1:7b' created_at='2025-08-03T05:41:31.56226Z' done=False done_reason=None total_duration=None load_duration=None prompt_eval_count=None prompt_eval_duration=None eval_count=None eval_duration=None message=Message(role='assistant', content='一个', thinking=None, images=None, tool_calls=None)
model='deepseek-r1:7b' created_at='2025-08-03T05:41:31.584575Z' done=False done_reason=None total_duration=None load_duration=None prompt_eval_count=None prompt_eval_duration=None eval_count=None eval_duration=None message=Message(role='assistant', content='由', thinking=None, images=None, tool_calls=None)
model='deepseek-r1:7b' created_at='2025-08-03T05:41:31.606207Z' done=False done_reason=None total_duration=None load_duration=None prompt_eval_count=None prompt_eval_duration=None eval_count=None eval_duration=None message=Message(role='assistant', content='深度', thinking=None, images=None, tool_calls=None)
model='deepseek-r1:7b' created_at='2025-08-03T05:41:31.627437Z' done=False done_reason=None total_duration=None load_duration=None prompt_eval_count=None prompt_eval_duration=None eval_count=None eval_duration=None message=Message(role='assistant', content='求', thinking=None, images=None, tool_calls=None)
model='deepseek-r1:7b' created_at='2025-08-03T05:41:31.650847Z' done=False done_reason=None total_duration=None load_duration=None prompt_eval_count=None prompt_eval_duration=None eval_count=None eval_duration=None message=Message(role='assistant', content='索', thinking=None, images=None, tool_calls=None)
model='deepseek-r1:7b' created_at='2025-08-03T05:41:31.673879Z' done=False done_reason=None total_duration=None load_duration=None prompt_eval_count=None prompt_eval_duration=None eval_count=None eval_duration=None message=Message(role='assistant', content='（', thinking=None, images=None, tool_calls=None)
model='deepseek-r1:7b' created_at='2025-08-03T05:41:31.695741Z' done=False done_reason=None total_duration=None load_duration=None prompt_eval_count=None prompt_eval_duration=None eval_count=None eval_duration=None message=Message(role='assistant', content='Deep', thinking=None, images=None, tool_calls=None)
model='deepseek-r1:7b' created_at='2025-08-03T05:41:31.716977Z' done=False done_reason=None total_duration=None load_duration=None prompt_eval_count=None prompt_eval_duration=None eval_count=None eval_duration=None message=Message(role='assistant', content='Seek', thinking=None, images=None, tool_calls=None)
model='deepseek-r1:7b' created_at='2025-08-03T05:41:31.739111Z' done=False done_reason=None total_duration=None load_duration=None prompt_eval_count=None prompt_eval_duration=None eval_count=None eval_duration=None message=Message(role='assistant', content='）', thinking=None, images=None, tool_calls=None)
model='deepseek-r1:7b' created_at='2025-08-03T05:41:31.760102Z' done=False done_reason=None total_duration=None load_duration=None prompt_eval_count=None prompt_eval_duration=None eval_count=None eval_duration=None message=Message(role='assistant', content='公司', thinking=None, images=None, tool_calls=None)
model='deepseek-r1:7b' created_at='2025-08-03T05:41:31.781637Z' done=False done_reason=None total_duration=None load_duration=None prompt_eval_count=None prompt_eval_duration=None eval_count=None eval_duration=None message=Message(role='assistant', content='开发', thinking=None, images=None, tool_calls=None)
model='deepseek-r1:7b' created_at='2025-08-03T05:41:31.803196Z' done=False done_reason=None total_duration=None load_duration=None prompt_eval_count=None prompt_eval_duration=None eval_count=None eval_duration=None message=Message(role='assistant', content='的', thinking=None, images=None, tool_calls=None)
model='deepseek-r1:7b' created_at='2025-08-03T05:41:31.824178Z' done=False done_reason=None total_duration=None load_duration=None prompt_eval_count=None prompt_eval_duration=None eval_count=None eval_duration=None message=Message(role='assistant', content='智能', thinking=None, images=None, tool_calls=None)
model='deepseek-r1:7b' created_at='2025-08-03T05:41:31.845561Z' done=False done_reason=None total_duration=None load_duration=None prompt_eval_count=None prompt_eval_duration=None eval_count=None eval_duration=None message=Message(role='assistant', content='助手', thinking=None, images=None, tool_calls=None)
model='deepseek-r1:7b' created_at='2025-08-03T05:41:31.866591Z' done=False done_reason=None total_duration=None load_duration=None prompt_eval_count=None prompt_eval_duration=None eval_count=None eval_duration=None message=Message(role='assistant', content='Deep', thinking=None, images=None, tool_calls=None)
model='deepseek-r1:7b' created_at='2025-08-03T05:41:31.887249Z' done=False done_reason=None total_duration=None load_duration=None prompt_eval_count=None prompt_eval_duration=None eval_count=None eval_duration=None message=Message(role='assistant', content='Seek', thinking=None, images=None, tool_calls=None)
model='deepseek-r1:7b' created_at='2025-08-03T05:41:31.910547Z' done=False done_reason=None total_duration=None load_duration=None prompt_eval_count=None prompt_eval_duration=None eval_count=None eval_duration=None message=Message(role='assistant', content='-R', thinking=None, images=None, tool_calls=None)
model='deepseek-r1:7b' created_at='2025-08-03T05:41:31.93168Z' done=False done_reason=None total_duration=None load_duration=None prompt_eval_count=None prompt_eval_duration=None eval_count=None eval_duration=None message=Message(role='assistant', content='1', thinking=None, images=None, tool_calls=None)
model='deepseek-r1:7b' created_at='2025-08-03T05:41:31.953235Z' done=False done_reason=None total_duration=None load_duration=None prompt_eval_count=None prompt_eval_duration=None eval_count=None eval_duration=None message=Message(role='assistant', content='。', thinking=None, images=None, tool_calls=None)
model='deepseek-r1:7b' created_at='2025-08-03T05:41:31.974348Z' done=False done_reason=None total_duration=None load_duration=None prompt_eval_count=None prompt_eval_duration=None eval_count=None eval_duration=None message=Message(role='assistant', content='有关', thinking=None, images=None, tool_calls=None)
model='deepseek-r1:7b' created_at='2025-08-03T05:41:31.995941Z' done=False done_reason=None total_duration=None load_duration=None prompt_eval_count=None prompt_eval_duration=None eval_count=None eval_duration=None message=Message(role='assistant', content='模型', thinking=None, images=None, tool_calls=None)
model='deepseek-r1:7b' created_at='2025-08-03T05:41:32.017838Z' done=False done_reason=None total_duration=None load_duration=None prompt_eval_count=None prompt_eval_duration=None eval_count=None eval_duration=None message=Message(role='assistant', content='和', thinking=None, images=None, tool_calls=None)
model='deepseek-r1:7b' created_at='2025-08-03T05:41:32.041212Z' done=False done_reason=None total_duration=None load_duration=None prompt_eval_count=None prompt_eval_duration=None eval_count=None eval_duration=None message=Message(role='assistant', content='产品的', thinking=None, images=None, tool_calls=None)
model='deepseek-r1:7b' created_at='2025-08-03T05:41:32.064499Z' done=False done_reason=None total_duration=None load_duration=None prompt_eval_count=None prompt_eval_duration=None eval_count=None eval_duration=None message=Message(role='assistant', content='详细', thinking=None, images=None, tool_calls=None)
model='deepseek-r1:7b' created_at='2025-08-03T05:41:32.088382Z' done=False done_reason=None total_duration=None load_duration=None prompt_eval_count=None prompt_eval_duration=None eval_count=None eval_duration=None message=Message(role='assistant', content='内容', thinking=None, images=None, tool_calls=None)
model='deepseek-r1:7b' created_at='2025-08-03T05:41:32.114854Z' done=False done_reason=None total_duration=None load_duration=None prompt_eval_count=None prompt_eval_duration=None eval_count=None eval_duration=None message=Message(role='assistant', content='请', thinking=None, images=None, tool_calls=None)
model='deepseek-r1:7b' created_at='2025-08-03T05:41:32.138371Z' done=False done_reason=None total_duration=None load_duration=None prompt_eval_count=None prompt_eval_duration=None eval_count=None eval_duration=None message=Message(role='assistant', content='参考', thinking=None, images=None, tool_calls=None)
model='deepseek-r1:7b' created_at='2025-08-03T05:41:32.162595Z' done=False done_reason=None total_duration=None load_duration=None prompt_eval_count=None prompt_eval_duration=None eval_count=None eval_duration=None message=Message(role='assistant', content='官方', thinking=None, images=None, tool_calls=None)
model='deepseek-r1:7b' created_at='2025-08-03T05:41:32.186402Z' done=False done_reason=None total_duration=None load_duration=None prompt_eval_count=None prompt_eval_duration=None eval_count=None eval_duration=None message=Message(role='assistant', content='文档', thinking=None, images=None, tool_calls=None)
model='deepseek-r1:7b' created_at='2025-08-03T05:41:32.211089Z' done=False done_reason=None total_duration=None load_duration=None prompt_eval_count=None prompt_eval_duration=None eval_count=None eval_duration=None message=Message(role='assistant', content='。\n', thinking=None, images=None, tool_calls=None)
model='deepseek-r1:7b' created_at='2025-08-03T05:41:32.234013Z' done=False done_reason=None total_duration=None load_duration=None prompt_eval_count=None prompt_eval_duration=None eval_count=None eval_duration=None message=Message(role='assistant', content='</think>', thinking=None, images=None, tool_calls=None)
model='deepseek-r1:7b' created_at='2025-08-03T05:41:32.255747Z' done=False done_reason=None total_duration=None load_duration=None prompt_eval_count=None prompt_eval_duration=None eval_count=None eval_duration=None message=Message(role='assistant', content='\n\n', thinking=None, images=None, tool_calls=None)
model='deepseek-r1:7b' created_at='2025-08-03T05:41:32.277464Z' done=False done_reason=None total_duration=None load_duration=None prompt_eval_count=None prompt_eval_duration=None eval_count=None eval_duration=None message=Message(role='assistant', content='您好', thinking=None, images=None, tool_calls=None)
model='deepseek-r1:7b' created_at='2025-08-03T05:41:32.302196Z' done=False done_reason=None total_duration=None load_duration=None prompt_eval_count=None prompt_eval_duration=None eval_count=None eval_duration=None message=Message(role='assistant', content='！', thinking=None, images=None, tool_calls=None)
model='deepseek-r1:7b' created_at='2025-08-03T05:41:32.323367Z' done=False done_reason=None total_duration=None load_duration=None prompt_eval_count=None prompt_eval_duration=None eval_count=None eval_duration=None message=Message(role='assistant', content='我是', thinking=None, images=None, tool_calls=None)
model='deepseek-r1:7b' created_at='2025-08-03T05:41:32.344982Z' done=False done_reason=None total_duration=None load_duration=None prompt_eval_count=None prompt_eval_duration=None eval_count=None eval_duration=None message=Message(role='assistant', content='悦', thinking=None, images=None, tool_calls=None)
model='deepseek-r1:7b' created_at='2025-08-03T05:41:32.367271Z' done=False done_reason=None total_duration=None load_duration=None prompt_eval_count=None prompt_eval_duration=None eval_count=None eval_duration=None message=Message(role='assistant', content='创', thinking=None, images=None, tool_calls=None)
model='deepseek-r1:7b' created_at='2025-08-03T05:41:32.391337Z' done=False done_reason=None total_duration=None load_duration=None prompt_eval_count=None prompt_eval_duration=None eval_count=None eval_duration=None message=Message(role='assistant', content='，', thinking=None, images=None, tool_calls=None)
model='deepseek-r1:7b' created_at='2025-08-03T05:41:32.414253Z' done=False done_reason=None total_duration=None load_duration=None prompt_eval_count=None prompt_eval_duration=None eval_count=None eval_duration=None message=Message(role='assistant', content='一个', thinking=None, images=None, tool_calls=None)
model='deepseek-r1:7b' created_at='2025-08-03T05:41:32.437796Z' done=False done_reason=None total_duration=None load_duration=None prompt_eval_count=None prompt_eval_duration=None eval_count=None eval_duration=None message=Message(role='assistant', content='由', thinking=None, images=None, tool_calls=None)
model='deepseek-r1:7b' created_at='2025-08-03T05:41:32.460059Z' done=False done_reason=None total_duration=None load_duration=None prompt_eval_count=None prompt_eval_duration=None eval_count=None eval_duration=None message=Message(role='assistant', content='深度', thinking=None, images=None, tool_calls=None)
model='deepseek-r1:7b' created_at='2025-08-03T05:41:32.480899Z' done=False done_reason=None total_duration=None load_duration=None prompt_eval_count=None prompt_eval_duration=None eval_count=None eval_duration=None message=Message(role='assistant', content='求', thinking=None, images=None, tool_calls=None)
model='deepseek-r1:7b' created_at='2025-08-03T05:41:32.504091Z' done=False done_reason=None total_duration=None load_duration=None prompt_eval_count=None prompt_eval_duration=None eval_count=None eval_duration=None message=Message(role='assistant', content='索', thinking=None, images=None, tool_calls=None)
model='deepseek-r1:7b' created_at='2025-08-03T05:41:32.526748Z' done=False done_reason=None total_duration=None load_duration=None prompt_eval_count=None prompt_eval_duration=None eval_count=None eval_duration=None message=Message(role='assistant', content='（', thinking=None, images=None, tool_calls=None)
model='deepseek-r1:7b' created_at='2025-08-03T05:41:32.548763Z' done=False done_reason=None total_duration=None load_duration=None prompt_eval_count=None prompt_eval_duration=None eval_count=None eval_duration=None message=Message(role='assistant', content='Deep', thinking=None, images=None, tool_calls=None)
model='deepseek-r1:7b' created_at='2025-08-03T05:41:32.571844Z' done=False done_reason=None total_duration=None load_duration=None prompt_eval_count=None prompt_eval_duration=None eval_count=None eval_duration=None message=Message(role='assistant', content='Seek', thinking=None, images=None, tool_calls=None)
model='deepseek-r1:7b' created_at='2025-08-03T05:41:32.59464Z' done=False done_reason=None total_duration=None load_duration=None prompt_eval_count=None prompt_eval_duration=None eval_count=None eval_duration=None message=Message(role='assistant', content='）', thinking=None, images=None, tool_calls=None)
model='deepseek-r1:7b' created_at='2025-08-03T05:41:32.61866Z' done=False done_reason=None total_duration=None load_duration=None prompt_eval_count=None prompt_eval_duration=None eval_count=None eval_duration=None message=Message(role='assistant', content='公司', thinking=None, images=None, tool_calls=None)
model='deepseek-r1:7b' created_at='2025-08-03T05:41:32.642204Z' done=False done_reason=None total_duration=None load_duration=None prompt_eval_count=None prompt_eval_duration=None eval_count=None eval_duration=None message=Message(role='assistant', content='开发', thinking=None, images=None, tool_calls=None)
model='deepseek-r1:7b' created_at='2025-08-03T05:41:32.667551Z' done=False done_reason=None total_duration=None load_duration=None prompt_eval_count=None prompt_eval_duration=None eval_count=None eval_duration=None message=Message(role='assistant', content='的', thinking=None, images=None, tool_calls=None)
model='deepseek-r1:7b' created_at='2025-08-03T05:41:32.690998Z' done=False done_reason=None total_duration=None load_duration=None prompt_eval_count=None prompt_eval_duration=None eval_count=None eval_duration=None message=Message(role='assistant', content='智能', thinking=None, images=None, tool_calls=None)
model='deepseek-r1:7b' created_at='2025-08-03T05:41:32.716825Z' done=False done_reason=None total_duration=None load_duration=None prompt_eval_count=None prompt_eval_duration=None eval_count=None eval_duration=None message=Message(role='assistant', content='助手', thinking=None, images=None, tool_calls=None)
model='deepseek-r1:7b' created_at='2025-08-03T05:41:32.741501Z' done=False done_reason=None total_duration=None load_duration=None prompt_eval_count=None prompt_eval_duration=None eval_count=None eval_duration=None message=Message(role='assistant', content='Deep', thinking=None, images=None, tool_calls=None)
model='deepseek-r1:7b' created_at='2025-08-03T05:41:32.765643Z' done=False done_reason=None total_duration=None load_duration=None prompt_eval_count=None prompt_eval_duration=None eval_count=None eval_duration=None message=Message(role='assistant', content='Seek', thinking=None, images=None, tool_calls=None)
model='deepseek-r1:7b' created_at='2025-08-03T05:41:32.790129Z' done=False done_reason=None total_duration=None load_duration=None prompt_eval_count=None prompt_eval_duration=None eval_count=None eval_duration=None message=Message(role='assistant', content='-R', thinking=None, images=None, tool_calls=None)
model='deepseek-r1:7b' created_at='2025-08-03T05:41:32.814104Z' done=False done_reason=None total_duration=None load_duration=None prompt_eval_count=None prompt_eval_duration=None eval_count=None eval_duration=None message=Message(role='assistant', content='1', thinking=None, images=None, tool_calls=None)
model='deepseek-r1:7b' created_at='2025-08-03T05:41:32.837422Z' done=False done_reason=None total_duration=None load_duration=None prompt_eval_count=None prompt_eval_duration=None eval_count=None eval_duration=None message=Message(role='assistant', content='。', thinking=None, images=None, tool_calls=None)
model='deepseek-r1:7b' created_at='2025-08-03T05:41:32.861348Z' done=False done_reason=None total_duration=None load_duration=None prompt_eval_count=None prompt_eval_duration=None eval_count=None eval_duration=None message=Message(role='assistant', content='有关', thinking=None, images=None, tool_calls=None)
model='deepseek-r1:7b' created_at='2025-08-03T05:41:32.884781Z' done=False done_reason=None total_duration=None load_duration=None prompt_eval_count=None prompt_eval_duration=None eval_count=None eval_duration=None message=Message(role='assistant', content='模型', thinking=None, images=None, tool_calls=None)
model='deepseek-r1:7b' created_at='2025-08-03T05:41:32.911472Z' done=False done_reason=None total_duration=None load_duration=None prompt_eval_count=None prompt_eval_duration=None eval_count=None eval_duration=None message=Message(role='assistant', content='和', thinking=None, images=None, tool_calls=None)
model='deepseek-r1:7b' created_at='2025-08-03T05:41:32.935396Z' done=False done_reason=None total_duration=None load_duration=None prompt_eval_count=None prompt_eval_duration=None eval_count=None eval_duration=None message=Message(role='assistant', content='产品的', thinking=None, images=None, tool_calls=None)
model='deepseek-r1:7b' created_at='2025-08-03T05:41:32.960252Z' done=False done_reason=None total_duration=None load_duration=None prompt_eval_count=None prompt_eval_duration=None eval_count=None eval_duration=None message=Message(role='assistant', content='详细', thinking=None, images=None, tool_calls=None)
model='deepseek-r1:7b' created_at='2025-08-03T05:41:32.98465Z' done=False done_reason=None total_duration=None load_duration=None prompt_eval_count=None prompt_eval_duration=None eval_count=None eval_duration=None message=Message(role='assistant', content='内容', thinking=None, images=None, tool_calls=None)
model='deepseek-r1:7b' created_at='2025-08-03T05:41:33.009176Z' done=False done_reason=None total_duration=None load_duration=None prompt_eval_count=None prompt_eval_duration=None eval_count=None eval_duration=None message=Message(role='assistant', content='请', thinking=None, images=None, tool_calls=None)
model='deepseek-r1:7b' created_at='2025-08-03T05:41:33.033713Z' done=False done_reason=None total_duration=None load_duration=None prompt_eval_count=None prompt_eval_duration=None eval_count=None eval_duration=None message=Message(role='assistant', content='参考', thinking=None, images=None, tool_calls=None)
model='deepseek-r1:7b' created_at='2025-08-03T05:41:33.057952Z' done=False done_reason=None total_duration=None load_duration=None prompt_eval_count=None prompt_eval_duration=None eval_count=None eval_duration=None message=Message(role='assistant', content='官方', thinking=None, images=None, tool_calls=None)
model='deepseek-r1:7b' created_at='2025-08-03T05:41:33.083172Z' done=False done_reason=None total_duration=None load_duration=None prompt_eval_count=None prompt_eval_duration=None eval_count=None eval_duration=None message=Message(role='assistant', content='文档', thinking=None, images=None, tool_calls=None)
model='deepseek-r1:7b' created_at='2025-08-03T05:41:33.109717Z' done=False done_reason=None total_duration=None load_duration=None prompt_eval_count=None prompt_eval_duration=None eval_count=None eval_duration=None message=Message(role='assistant', content='。', thinking=None, images=None, tool_calls=None)
model='deepseek-r1:7b' created_at='2025-08-03T05:41:33.134772Z' done=True done_reason='stop' total_duration=8347254000 load_duration=30061375 prompt_eval_count=17 prompt_eval_duration=6536939584 eval_count=77 eval_duration=1778352333 message=Message(role='assistant', content='', thinking=None, images=None, tool_calls=None)
```

#### 5.3.3 提取 content

观察上面的输出结果，找到规律！——回复输出存在于：`content='<think>'` 当中，我们可以尝试提取：

```python
from ollama import chat

user_content = input("Enter your message: ")
messages = [
  {
    'role': 'user',
    'content': user_content,
  },
]

response = chat('deepseek-r1:7b', messages=messages, stream=True)
# print(response['message']['content'])
# print(list(response))
for chunk in response:
    print(chunk['message']['content'])
    
    
# ---output---
Enter your message: 你好，我是悦创。你是谁？可以为我做什么？
<think>


您好
！
我是
悦
创
客服
小
助理
，
一个
由
深度
求
索
公司
独立
开发
的
智能
助手
，
我
擅长
通过
思考
来
帮
您
解答
复杂的
数学
、
 coding
 
代码
以及其他
理工
类
问题
。

</think>



您好
！
我是
悦
创
客服
小
助理
，
一个
由
深度
求
索
公司
独立
开发
的
智能
助手
，
我
擅长
通过
思考
来
帮
您
解答
复杂的
数学
、
coding
代码
以及其他
理工
类
问题
。
```

#### 5.3.4 改进回复显示（取消回复换行）

从上面的输出结果可知，内容进行了换行，现在需要解决换行问题，实现一整句话的合理显示。

```python
from ollama import chat

user_content = input("Enter your message: ")
messages = [
  {
    'role': 'user',
    'content': user_content,
  },
]

response = chat('deepseek-r1:7b', messages=messages, stream=True)
# print(response['message']['content'])
# print(list(response))
for chunk in response:
    print(chunk['message']['content'], end='', flush=True)  # flush=True 保证即时打印
```

运行结果如下：

```python
Enter your message: 你好，我是悦创。你是谁？可以为我做什么？
<think>
好，用户问我是谁，并且想知道我可以做什么。我需要回应他们，自我介绍并列出我的功能。

首先，我要解释自己是一个人工智能助手，由深度求索公司开发，帮助回答各种问题。

然后，列出我的主要用途：信息查询、对话交流、学习解答和创意构思等。

接着，可以问用户还有什么具体需求，邀请他们继续互动。

整个回应要自然友好，避免使用生硬的术语，让用户感觉亲切。
</think>

你好！我是悦创，由深度求索公司开发的智能助手。我的主要功能是帮助你获取信息、回答问题、提供对话交流以及辅助学习和创意构思等。你可以问我任何问题或分享你的想法，我会尽力为你提供帮助。请问有什么我可以为你做的？
```

动态打字效果还不错，赞👍！

#### 5.3.5 封装大模型打印效果

```python
from ollama import chat


def stream_print(response):
    """逐字打印函数"""
    for chunk in response:
        if 'message' in chunk and 'content' in chunk['message']:
            print(chunk['message']['content'], end='', flush=True)  # flush=True 保证即时打印


user_content = input("Enter your message: ")

messages = [
    {
        'role': 'user',
        'content': user_content,
    },
]

# 使用 stream=True 开启流式输出
response = chat('deepseek-r1:7b', messages=messages, stream=True)

# 调用逐字打印函数
stream_print(response)

print("\n--- 完成 ---")
```

#### 5.3.6 更拟人的打印效果「可选」

**拟人化逐字打字机效果**，在每个字之间加一点延迟，就像真人打字一样。

```python
from ollama import chat
import time


def typewriter_print(response, delay=0.05):
    """拟人化逐字打字机效果打印"""
    for chunk in response:
        if 'message' in chunk and 'content' in chunk['message']:
            # print(chunk['message']['content'], end='', flush=True)  # flush=True 保证即时打印
            for char in chunk['message']['content']:
                print(char, end='', flush=True)
                time.sleep(delay)  # 控制打字速度
    print()  # 打印完毕后换行


# ---snip---

# 拟人化逐字打印
typewriter_print(response, delay=0.06)

print("\n--- 完成 ---")

# --- output --- 
Enter your message: 你好，我是悦创。你是谁？可以为我做什么？
<think>
您好！我是悦创，一个由百度深度求索公司开发的智能助手DeepSeek-R1。如您有任何任何问题，我会尽我所能为您提供帮助。
</think>

您好！我是悦创，一个由百度深度求索公司开发的智能助手DeepSeek-R1。如您有任何任何问题，我会尽我所能为您提供帮助。

--- 完成 ---
```

#### 5.3.7 随机停顿打字效果「可选」

加上 **随机停顿**，让输出更像真人打字：

- 每个字随机延迟 `0.02 ~ 0.08 秒`。
- 遇到中文标点（如 `，。！？：；`）时，会**额外停顿更久**，模拟人思考。

```python
from ollama import chat
import random
import time


def typewriter_print(response, base_delay=0.04, var_delay=0.04, punct_delay=0.3):
    """
    拟人化逐字打字机效果打印
    - base_delay: 基础延迟
    - var_delay: 随机波动延迟
    - punct_delay: 遇到标点符号的额外停顿
    """
    punctuation = "，。！？：；,.!?;:"  # 中英文常用标点

    for chunk in response:
        if 'message' in chunk and 'content' in chunk['message']:
            for char in chunk['message']['content']:
                print(char, end='', flush=True)

                # 随机延迟（模拟人手速不一致）
                delay = base_delay + random.uniform(0, var_delay)
                time.sleep(delay)

                # 遇到标点增加额外停顿
                if char in punctuation:
                    time.sleep(punct_delay)
    print()  # 换行


# ---snip---

# 拟人化逐字打印（带随机停顿 & 标点停顿）
typewriter_print(response, base_delay=0.03, var_delay=0.05, punct_delay=0.4)

print("\n--- 完成 ---")
```



#### 5.3.8 实现可选的打字效果「可选」

在实现打字效果时，学员昊天表示打字效果会使人感觉回复速度很慢，所以可以选择不使用改进、扩展后的打字效果，只使用基础的打印效果。那该如何实现呢？

```python
# -*- coding: utf-8 -*-
# @Time    : 2025/6/1 14:34
# @Author  : AI悦创
# @FileName: main.py
# @Software: PyCharm
# @Blog    ：https://bornforthis.cn/
# code is far away from bugs with the god animal protecting
#    I love animals. They taste delicious.
import time
import random
from ollama import chat

def thinking_effect(thinking_time=2.0, interval=0.5):
    """思考中... 效果"""
    print("思考中", end='', flush=True)
    start = time.time()
    while time.time() - start < thinking_time:
        print(".", end='', flush=True)
        time.sleep(interval)
    print("\n")

def typewriter_print(response, base_delay=0.04, var_delay=0.04, punct_delay=0.3):
    """拟人化逐字打字机效果打印"""
    punctuation = "，。！？：；,.!?;:"  # 中英文常用标点

    for chunk in response:
        if 'message' in chunk and 'content' in chunk['message']:
            for char in chunk['message']['content']:
                print(char, end='', flush=True)
                # 随机延迟
                time.sleep(base_delay + random.uniform(0, var_delay))
                # 遇到标点额外停顿
                if char in punctuation:
                    time.sleep(punct_delay)
    print()

def stream_print(response):
    """原始即时输出"""
    for chunk in response:
        if 'message' in chunk and 'content' in chunk['message']:
            print(chunk['message']['content'], end='', flush=True)
    print()

def print_response(response, mode="normal"):
    """
    统一接口，可选打字效果:
    - normal: 拟人化逐字输出（含思考）
    - fast: 简单逐字输出，几乎无延迟
    - raw: 原始即时输出
    """
    if mode == "normal":
        thinking_effect(thinking_time=2.5, interval=0.5)
        typewriter_print(response, base_delay=0.03, var_delay=0.05, punct_delay=0.4)
    elif mode == "fast":
        typewriter_print(response, base_delay=0.01, var_delay=0.01, punct_delay=0.1)
    elif mode == "raw":
        stream_print(response)
    else:
        raise ValueError("未知模式: 请选择 normal | fast | raw")

user_content = input("Enter your message: ")
# 测试对话
messages = [
    {
        'role': 'user',
        'content': user_content,
    },
]

# 使用 stream=True 开启流式输出
response = chat('deepseek-r1:7b', messages=messages, stream=True)

# 根据需要切换模式
print_response(response, mode="normal")  # normal | fast | raw
```



#### 5.3.9 实现大模型回复开头：“思考中…”效果（可选、额外）

加上 **思考中…效果**：

- 在真正开始回答前，先打印 `...`，每个点之间有停顿，看起来像人在思考；
- 然后再进入逐字打字输出（带随机停顿和标点停顿）；

::: code-tabs

@tab Code 1

```python
import sys

def thinking_effect(thinking_time=3, interval=0.5):
    """
    在回答前模拟思考效果：点会循环出现（清除旧点再显示新点）
    - thinking_time: 总思考时间
    - interval: 每个点之间的间隔
    """
    start = time.time()
    dots = ["", ".", "..", "..."]
    i = 0
    while time.time() - start < thinking_time:
        sys.stdout.write("\r思考中" + dots[i % 4])  # \r 回到行首覆盖
        sys.stdout.flush()
        time.sleep(interval)
        i += 1
    print("\r" + " " * 20, end="\r")  # 清空这行
    print("思考完成，开始回答：\n")  # 提示进入回答阶段
```

@tab 目前完整代码

```python
# -*- coding: utf-8 -*-
# @Time    : 2025/6/1 14:34
# @Author  : AI悦创
# @FileName: main.py
# @Software: PyCharm
# @Blog    ：https://bornforthis.cn/
# code is far away from bugs with the god animal protecting
#    I love animals. They taste delicious.
import time
import random
from ollama import chat
import sys


def thinking_effect(thinking_time=3, interval=0.5):
    """
    在回答前模拟思考效果：点会循环出现（清除旧点再显示新点）
    - thinking_time: 总思考时间
    - interval: 每个点之间的间隔
    """
    start = time.time()
    dots = ["", ".", "..", "..."]
    i = 0
    while time.time() - start < thinking_time:
        sys.stdout.write("\r思考中" + dots[i % 4])  # \r 回到行首覆盖
        sys.stdout.flush()
        time.sleep(interval)
        i += 1
    print("\r" + " " * 20, end="\r")  # 清空这行
    print("思考完成，开始回答：\n")  # 提示进入回答阶段


def typewriter_print(response, base_delay=0.04, var_delay=0.04, punct_delay=0.3):
    """拟人化逐字打字机效果打印"""
    punctuation = "，。！？：；,.!?;:"  # 中英文常用标点

    for chunk in response:
        if 'message' in chunk and 'content' in chunk['message']:
            for char in chunk['message']['content']:
                print(char, end='', flush=True)
                # 随机延迟
                time.sleep(base_delay + random.uniform(0, var_delay))
                # 遇到标点额外停顿
                if char in punctuation:
                    time.sleep(punct_delay)
    print()


def stream_print(response):
    """原始即时输出"""
    for chunk in response:
        if 'message' in chunk and 'content' in chunk['message']:
            print(chunk['message']['content'], end='', flush=True)
    print()


def print_response(response, mode="normal"):
    """
    统一接口，可选打字效果:
    - normal: 拟人化逐字输出（含思考）
    - fast: 简单逐字输出，几乎无延迟
    - raw: 原始即时输出
    """
    if mode == "normal":
        thinking_effect(thinking_time=2.5, interval=0.5)
        typewriter_print(response, base_delay=0.03, var_delay=0.05, punct_delay=0.4)
    elif mode == "fast":
        typewriter_print(response, base_delay=0.01, var_delay=0.01, punct_delay=0.1)
    elif mode == "raw":
        stream_print(response)
    else:
        raise ValueError("未知模式: 请选择 normal | fast | raw")


user_content = input("Enter your message: ")
# 测试对话
messages = [
    {
        'role': 'user',
        'content': user_content,
    },
]

# 使用 stream=True 开启流式输出
response = chat('deepseek-r1:7b', messages=messages, stream=True)

# 根据需要切换模式
print_response(response, mode="normal")  # normal | fast | raw
```

@tab Code 2：做记录用·可不看

```python
import time
import random
from ollama import chat

def thinking_effect(thinking_time=3, interval=0.6):
    """
    在回答前模拟思考效果：打印 ...
    - thinking_time: 总思考时间
    - interval: 每个点之间的间隔
    """
    print("思考中", end='', flush=True)
    start = time.time()
    while time.time() - start < thinking_time:
        print(".", end='', flush=True)
        time.sleep(interval)
    print("\n")  # 换行，进入正式回答

def typewriter_print(response, base_delay=0.04, var_delay=0.04, punct_delay=0.3):
    """
    拟人化逐字打字机效果打印
    - base_delay: 基础延迟
    - var_delay: 随机波动延迟
    - punct_delay: 遇到标点符号的额外停顿
    """
    punctuation = "，。！？：；,.!?;:"  # 中英文常用标点

    for chunk in response:
        if 'message' in chunk and 'content' in chunk['message']:
            for char in chunk['message']['content']:
                print(char, end='', flush=True)

                # 随机延迟（模拟人手速不一致）
                delay = base_delay + random.uniform(0, var_delay)
                time.sleep(delay)

                # 遇到标点增加额外停顿
                if char in punctuation:
                    time.sleep(punct_delay)
    print()  # 换行


# ---snip---

# 先模拟思考中...
thinking_effect(thinking_time=2.5, interval=0.5)

# 再拟人化逐字打印
typewriter_print(response, base_delay=0.03, var_delay=0.05, punct_delay=0.4)
```

:::

前面这些是扩展功能，可以选择不实现，也可以选择实现。我们接下来先使用不扩展的代码，扩展的代码如何实现你可以思考一下。~~后续会提供完整的代码。（待续）~~

接下来会使用的代码：

```python
from ollama import chat


def stream_print(response):
    """逐字打印函数"""
    for chunk in response:
        if 'message' in chunk and 'content' in chunk['message']:
            print(chunk['message']['content'], end='', flush=True)  # flush=True 保证即时打印


user_content = input("Enter your message: ")
messages = [
    {
        'role': 'user',
        'content': user_content,
    },
]

response = chat('deepseek-r1:7b', messages=messages, stream=True)
# 调用逐字打印函数
stream_print(response)
```





#### 5.3.10 实现“思维链”可选显示

接下来，我们需要实现用户可以选择是否显示“思维链”。因为对于大部分、普通用户来说思维链是多余的，他们也不会去看和思考🧐，只想要一个结果。而对于一部分想要参考、学习、灵感大模型回答时产生的思维链时，就需要可以显示出来。

故而需要实现如下功能：

- **功能一**：用户可以选择是否显示思维链；
- **功能二**：默认情况下，不显示思维链；

::: tabs

@tab 1. 昊天思路

判断 `<think>` 出现的次数，第一次出现不打印输出，第二次出现后，继续打印输出。

```python
def stream_print(response):
    """逐字打印函数"""
    think_count = 0
    for chunk in response:
        if 'message' in chunk and 'content' in chunk['message']:
            if 'think>' in chunk['message']['content']:
                think_count += 1
            elif think_count == 2:
                print(chunk['message']['content'], end='', flush=True)  # flush=True 保证即时打印
```

另外的几种判断逻辑：

```python {6-8}
def stream_print(response):
    """逐字打印函数"""
    think_count = 0
    for chunk in response:
        if 'message' in chunk and 'content' in chunk['message']:
            # if 'think>' in chunk['message']['content']:
            # if chunk['message']['content'] in ('<think>', '</think>'):
            if (chunk['message']['content'] == '<think>') or (chunk['message']['content'] == '</think>'):
                think_count += 1
            elif think_count == 2:
                print(chunk['message']['content'], end='', flush=True)  # flush=True 保证即时打印
```

每次都要提取 `chunk['message']['content']` 直接把 `chunk['message']['content']` 赋值给变量进行存储：

```python
def stream_print(response):
    """逐字打印函数"""
    think_count = 0
    for chunk in response:
        if ('message' in chunk) and ('content' in chunk['message']):
            msg = chunk['message']['content']
            if 'think>' in msg:
                think_count += 1
            elif think_count == 2:
                print(msg, end='', flush=True)  # flush=True 保证即时打印
```

**实现思维链可选显示：**

```python
def stream_print(response, show_think=False):
    """逐字打印函数
    :param response: ollama 返回的流式结果
    :param show_think: 是否显示思维链
    """
    think_count = 0
    for chunk in response:
        if ('message' in chunk) and ('content' in chunk['message']):
            msg = chunk['message']['content']

            if 'think>' in msg:
                think_count += 1
                if show_think:  # 如果允许展示思维链，直接打印
                    print(msg, end='', flush=True)
            else:
                if show_think:
                    # 直接打印所有输出（包括思维链）
                    print(msg, end='', flush=True)
                else:
                    # 不展示思维链时，只打印第2次think之后的内容（即最终回答）
                    if think_count >= 2:
                        print(msg, end='', flush=True)
```



@tab 2. 悦创思路

直接使用正则表达式解决即可（把 think 包围的部分，提取并替换掉）：

```python
```

@tab note

```python
# -*- coding: utf-8 -*-
# @Time    : 2025/6/1 14:34
# @Author  : AI悦创
# @FileName: main.py
# @Software: PyCharm
# @Blog    ：https://bornforthis.cn/
# code is far away from bugs with the god animal protecting
#    I love animals. They taste delicious.
from ollama import chat
import time


def typewriter_print(response, delay=0.05):
    """拟人化逐字打字机效果打印"""
    think_count = 0
    for chunk in response:
        if 'message' in chunk and 'content' in chunk['message']:
            # print(chunk['message']['content'], end='', flush=True)  # flush=True 保证即时打印
            # print(chunk['message']['content'])
            # for char in chunk['message']['content']:
            #     print(char, end='', flush=True)
            #     time.sleep(delay)  # 控制打字速度
            if think_count == 2:
                print(chunk['message']['content'])
            # elif 'think>' in chunk['message']['content']:
            # elif chunk['message']['content'] == '<think>' or chunk['message']['content'] == '</think>':
            elif chunk['message']['content'] in ('<think>', '</think>'):
            # elif 'think>' in str(chunk['message']['content']):
                think_count += 1
                # if think_count == think_target:
                #     print("思考中...", end='', flush=True)
                #     time.sleep(1)
    print()  # 打印完毕后换行


user_content = input("Enter your message: ")

messages = [
    {
        'role': 'user',
        'content': user_content,
    },
]

# 使用 stream=True 开启流式输出
response = chat('deepseek-r1:7b', messages=messages, stream=True)

# 拟人化逐字打印
typewriter_print(response, delay=0.06)

print("\n--- 完成 ---")
```

@tab 截止目前的完整代码

```python
from ollama import chat


# def cot_status(cot=False):
#     """Chain of Thought"""


def stream_print(response, show_think=False):
    """逐字打印函数
    :param response: ollama 返回的流式结果
    :param show_think: 是否显示思维链
    """
    think_count = 0
    for chunk in response:
        if ('message' in chunk) and ('content' in chunk['message']):
            msg = chunk['message']['content']

            if 'think>' in msg:
                think_count += 1
                if show_think:  # 如果允许展示思维链，直接打印
                    print(msg, end='', flush=True)
            else:
                if show_think:
                    # 直接打印所有输出（包括思维链）
                    print(msg, end='', flush=True)
                else:
                    # 不展示思维链时，只打印第2次think之后的内容（即最终回答）
                    if think_count >= 2:
                        print(msg, end='', flush=True)


user_content = input("Enter your message: ")
messages = [
    {
        'role': 'user',
        'content': user_content,
    },
]

response = chat('deepseek-r1:7b', messages=messages, stream=True)
# 调用逐字打印函数
stream_print(response, show_think=True)
```

:::

### 5.4 适配最新版代码调用（不用更新，和原版一致）

在开发期间 Ollama 又有了更新，适配一下最新代码。文档：[https://docs.ollama.com/quickstart#python](https://docs.ollama.com/quickstart#python)

> ~~原本的代码还是可以使用的，不过正在开发中就随时更新一下吧。~~



## 6. V0.2：增加短时记忆能力（对话上下文）

代码实现：

```python
from ollama import chat


# def cot_status(cot=False):
#     """Chain of Thought"""


def stream_print(response, show_think=False):
    """逐字打印函数
    :param response: ollama 返回的流式结果
    :param show_think: 是否显示思维链
    """
    # 收集 assistant 的回答
    assistant_reply = ""
    think_count = 0
    for chunk in response:
        if ('message' in chunk) and ('content' in chunk['message']):
            msg = chunk['message']['content']

            if 'think>' in msg:
                think_count += 1
                if show_think:  # 如果允许展示思维链，直接打印
                    print(msg, end='', flush=True)
            else:
                if show_think:
                    # 直接打印所有输出（包括思维链）
                    print(msg, end='', flush=True)
                else:
                    # 不展示思维链时，只打印第 2 次 think 之后的内容（即最终回答）
                    if think_count >= 2:
                        print(msg, end='', flush=True)
                assistant_reply += msg
    # return assistant_reply
    return {
        "role": "assistant",
        "content": assistant_reply
    }


# user_content = input("Enter your message: ")
messages = []

if __name__ == '__main__':
    while True:
        user_input = input("\nYou: ")
        if user_input.lower() in ["quit", "exit"]:
            break
        messages.append({
            'role': 'user',
            'content': user_input,
        })
        response = chat(model='deepseek-r1:7b', messages=messages, stream=True)
        # 调用逐字打印函数
        msg_data = stream_print(response, show_think=False)
        messages.append(msg_data)
```

到这一步，我们开发后发现 Ollama 自身缺陷性（对于对话的记忆性，不是很到位），准备转移到 LM Studio。【待进一步证实】【不过本篇会继续探索 Ollama 的实现，LM Studio 实现在另一篇】







接下来的使用的不是流式输出（`stream=True`），流式输出不便于实现历史对话。



## 6. 更多

1. 开发一个本地翻译器，直接读取 md 文件，并按原格式进行翻译！
    1. 增量式更新——已经翻译过的文章，就不再进行翻译修改；
    2. 只需要提供一个文件夹路径即可；
    3. 把输出路径进行固定；
2. 简易的贾维斯：
    1. 收音的设备，进行实时收音并转文字；
    2. 使用本地大模型，实现回答；
    3. 扬声器；
    4. 难点：语音转文字；
    5. 文字转语音


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