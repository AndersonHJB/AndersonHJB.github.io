---
title:  01-🐍 使用 Python 调用 Ollama 本地大模型 API 完整教程
icon: blog
date: 2025-06-01 14:13:30
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

以下是**完整的 Python 使用 Ollama API 教程文档**，涵盖了所有主要接口，包括调用示例、参数解释、可选项设置、结构化输出、模型管理等内容，不做任何省略，方便你后续整理、出版或集成使用。

> 本文详细介绍如何使用 Python 通过 HTTP 请求方式调用 [Ollama](https://ollama.com/) 的本地大语言模型，包括文本生成、对话、嵌入、模型管理等功能。

## 📦 1. 环境准备

确保你已完成以下环境配置：

1. ✅ 安装并运行 Ollama（访问 [ollama.com](https://ollama.com/)）

2. ✅ 拉取至少一个模型（如 llama3）：

    ```bash
    ollama pull llama3
    ```

3. ✅ 安装 Python 库：

    ```bash
    pip install requests
    ```

## 📘 2. 文本生成接口：`/api/generate`

用于传入 prompt，生成文本回答，可流式或一次性返回。

### ✅ 2.1 基本调用（非流式）

```python
import requests

url = "http://localhost:11434/api/generate"
payload = {
    "model": "llama3",
    "prompt": "Why is the sky blue?",
    "stream": False
}

res = requests.post(url, json=payload)
print(res.json()["response"])
```

### ⚙️ 2.2 可选参数说明

| 参数名    | 类型       | 描述                                |
| --------- | ---------- | ----------------------------------- |
| `prompt`  | string     | 要发送的提示内容                    |
| `model`   | string     | 模型名称，如 `llama3`               |
| `stream`  | boolean    | 是否开启流式返回                    |
| `suffix`  | string     | 模型回复后缀                        |
| `format`  | string/obj | `"json"` 或 JSON Schema 结构化格式  |
| `options` | dict       | 推理参数，如 temperature、top_k 等  |
| `raw`     | boolean    | 是否绕过模板系统直接输入原始 prompt |

------

### 🔁 2.3 高级用法：设置参数

```python
payload = {
    "model": "llama3",
    "prompt": "List 3 programming languages.",
    "stream": False,
    "options": {
        "temperature": 0.7,
        "top_p": 0.9,
        "repeat_penalty": 1.2
    }
}
```

------

### 🧾 2.4 JSON 模式输出

```python
payload = {
    "model": "llama3",
    "prompt": "List 3 fruits as JSON.",
    "format": "json",
    "stream": False
}
```

## 💬 3. 多轮对话接口：`/api/chat`

支持传入历史消息 `messages`，用于构建聊天机器人等对话场景。

### ✅ 3.1 基础示例

```python
url = "http://localhost:11434/api/chat"

payload = {
    "model": "llama3",
    "messages": [
        {"role": "user", "content": "What's the capital of Germany?"},
        {"role": "assistant", "content": "The capital is Berlin."},
        {"role": "user", "content": "And France?"}
    ],
    "stream": False
}

res = requests.post(url, json=payload)
print(res.json()["message"]["content"])
```

### 📐 3.2 结构化输出 JSON Schema

```python
payload = {
    "model": "llama3",
    "messages": [
        {"role": "user", "content": "Return age and active as JSON: 25, true"}
    ],
    "format": {
        "type": "object",
        "properties": {
            "age": {"type": "integer"},
            "active": {"type": "boolean"}
        },
        "required": ["age", "active"]
    },
    "stream": False
}
```

## 🔢 4. 获取文本 Embedding：`/api/embed`

生成文本的向量嵌入表示，用于语义搜索等应用。

### ✅ 4.1 单文本向量

```python
url = "http://localhost:11434/api/embed"

payload = {
    "model": "all-minilm",
    "input": "Artificial intelligence is changing the world."
}

res = requests.post(url, json=payload)
print(res.json()["embeddings"][0][:10])  # 打印前10个维度
```

### 🧩 4.2 多文本向量

```python
payload = {
    "model": "all-minilm",
    "input": [
        "First sentence.",
        "Second sentence."
    ]
}
```

## 📂 5. 模型管理与操作

### 🔍 5.1 获取本地模型列表：`/api/tags`

```python
res = requests.get("http://localhost:11434/api/tags")
print(res.json())
```

### ⚙️ 5.2 查看运行中的模型：`/api/ps`

```python
res = requests.get("http://localhost:11434/api/ps")
print(res.json())
```

### 📥 5.3 加载模型（初始化）：`/api/generate`（空 prompt）

```python
payload = {"model": "llama3"}
res = requests.post("http://localhost:11434/api/generate", json=payload)
```

### 📤 5.4 卸载模型（keep_alive = 0）

```python
payload = {"model": "llama3", "keep_alive": 0}
res = requests.post("http://localhost:11434/api/generate", json=payload)
```

## 📊 6. 性能指标分析

每次返回的响应中包含：

- `total_duration`: 总耗时（ns）
- `eval_duration`: 推理耗时（ns）
- `eval_count`: 生成的 token 数

可手动计算：

```python
tokens_per_second = eval_count / (eval_duration / 1e9)
```

## 🔐 7. 模型复制与删除

### 7.1 模型复制：`/api/copy`

```python
payload = {
    "source": "llama3",
    "destination": "llama3-backup"
}
res = requests.post("http://localhost:11434/api/copy", json=payload)
```

### 7.2 模型删除：`/api/delete`

```python
payload = {"model": "llama3-backup"}
res = requests.delete("http://localhost:11434/api/delete", json=payload)
```

## 📤 8. 上传/下载模型（高级用法）

### 8.1 拉取模型（如 llama3.2）：

```python
payload = {"model": "llama3.2"}
res = requests.post("http://localhost:11434/api/pull", json=payload)
```

### 8.2 推送模型（需要配置账号）：

```python
payload = {"model": "yourname/yourmodel:latest"}
res = requests.post("http://localhost:11434/api/push", json=payload)
```

## 🧪 9. 工具调用（Tool Use）

用于构建工具增强的 LLM，如函数调用。

```python
payload = {
  "model": "llama3",
  "messages": [
    {"role": "user", "content": "What's the weather in Paris?"}
  ],
  "tools": [
    {
      "type": "function",
      "function": {
        "name": "get_weather",
        "description": "Get weather info",
        "parameters": {
          "type": "object",
          "properties": {
            "location": {"type": "string"},
            "unit": {"type": "string", "enum": ["celsius", "fahrenheit"]}
          },
          "required": ["location", "unit"]
        }
      }
    }
  ]
}
```

## 📎 10. 附录：模型名称格式

模型名通常为：

```text
<namespace>/<name>:<tag>
```

示例：

- `llama3:latest`
- `deepseek-r1:latest`
- `qwen2:7b-instruct`

## 📌 11. 总结表格：API 接口速查

| 接口路径        | 功能描述       |
| --------------- | -------------- |
| `/api/generate` | 单轮文本生成   |
| `/api/chat`     | 多轮对话生成   |
| `/api/embed`    | 文本向量表示   |
| `/api/tags`     | 列出本地模型   |
| `/api/ps`       | 正在运行的模型 |
| `/api/pull`     | 拉取远程模型   |
| `/api/push`     | 上传本地模型   |
| `/api/delete`   | 删除本地模型   |
| `/api/copy`     | 克隆已有模型   |
| `/api/show`     | 查看模型详情   |

## ✅ 12. 推荐封装：Python 函数库

你可以将以上功能封装为模块，例如：

```python
def generate(prompt, model="llama3", stream=False):
    res = requests.post("http://localhost:11434/api/generate", json={
        "model": model,
        "prompt": prompt,
        "stream": stream
    })
    return res.json()["response"]
```



:::: details

下面给出一份基于 Python 的完整教程，演示如何调用本地 Ollama Server 的各类 API 接口。假设 Ollama Server 已经在本地以默认端口（11434）运行，示例代码使用 `requests` 库发送 HTTP 请求并解析返回结果。若要处理流式（streaming）响应，会用到 `requests` 的 `stream=True` 参数和逐行解析。

## 前提条件

1. **Ollama Server 已启动**，并且监听在 `http://localhost:11434`。
2. 本教程示例基于 Python 3.7+。
3. 使用 `requests` 库发送 HTTP 请求。
4. 如果需要处理流式响应（如 `/api/generate` 和 `/api/chat`），请确保网络环境允许长连接。



## 通用配置

为了方便管理，建议将 Base URL、默认请求头等信息集中到一个地方。下面示范一个最简的配置：

```python
# config.py

BASE_URL = "http://localhost:11434"
HEADERS = {
    "Content-Type": "application/json"
}
```

在所有示例代码里，我们都会先导入这两个常量。



## 安装依赖

```bash
pip install requests
```



## 基础辅助函数

下面给出几个常见的辅助函数，可以在后续演示中复用：

```python
# helper.py

import json
import requests
from config import BASE_URL, HEADERS

def post(endpoint: str, payload: dict, stream: bool = False):
    """
    发送 POST 请求到 Ollama Server。

    :param endpoint: 相对于 BASE_URL 的路径，例如 "/api/generate"
    :param payload: 要发送的 JSON 字典
    :param stream: 是否启用流式返回
    :return: 如果 stream=False，返回 Response.json()；否则返回 Response 对象以便逐行读取。
    """
    url = BASE_URL + endpoint
    response = requests.post(url, json=payload, headers=HEADERS, stream=stream)
    response.raise_for_status()
    return response.json() if not stream else response

def get(endpoint: str):
    """
    发送 GET 请求到 Ollama Server。

    :param endpoint: 相对于 BASE_URL 的路径，例如 "/api/tags"
    :return: 返回 Response.json()
    """
    url = BASE_URL + endpoint
    response = requests.get(url, headers=HEADERS)
    response.raise_for_status()
    return response.json()

def delete(endpoint: str, payload: dict = None):
    """
    发送 DELETE 请求到 Ollama Server。

    :param endpoint: 相对于 BASE_URL 的路径，例如 "/api/delete"
    :param payload: DELETE 请求的 JSON 数据
    :return: 返回 Response.json()
    """
    url = BASE_URL + endpoint
    response = requests.delete(url, json=payload, headers=HEADERS)
    response.raise_for_status()
    return response.json()
```

将上述文件保存为 `helper.py`，并在示例中按需导入。



## Generate a completion（/api/generate）

```
POST /api/generate
```

用于生成单轮文本或图文混合的 Completion。默认是流式返回（`stream=true`）。如果想一次性获得完整结果，需要在请求参数里显式加上 `"stream": false`。

常用字段：

- `model`：必填，模型名称（可带 `:tag`）。
- `prompt`：文本提示。
- `suffix`：可选，接在模型生成后的后缀。
- `images`：可选，Base64 编码的图片列表，适用于多模态模型。
- `stream`：`true`（默认）或 `false`，是否开启流式输出。
- `options`：可选，传递给模型的高级配置（如 `temperature`、`top_k` 等）。
- `format`：可选，当需结构化输出时，填写 JSON Schema。

下面通过示例一一说明。

### 非流式调用示例

默认 `/api/generate` 返回的是一个流（每个 chunk 是一条 JSON），如果我们只想一次拿到最终完整结果，需要在请求里加上 `"stream": false`。

```python
# generate_non_stream.py

import json
from helper import post

def generate_once(model_name: str, prompt: str):
    payload = {
        "model": model_name,
        "prompt": prompt,
        "stream": False   # 关闭流式，直接返回完整 JSON
    }
    result = post("/api/generate", payload)
    # 返回示例：
    # {
    #   "model": "llama3.2",
    #   "created_at": "...",
    #   "response": "完整生成文本...",
    #   "done": true,
    #   "context": [...],
    #   ...
    # }
    return result

if __name__ == "__main__":
    res = generate_once("llama3.2", "为什么天空是蓝色的？")
    print("模型：", res["model"])
    print("生成文本：", res["response"])
    print("耗时：", res["total_duration"], "ns")
```

运行：

```bash
python generate_non_stream.py
```



### 流式调用示例

如果需要逐 token/逐 chunk 实时获取输出，可以将 `stream=True`。下面示例展示如何使用 `requests` 处理流式 JSON 行：

```python
# generate_stream.py

import json
import requests
from helper import BASE_URL, HEADERS

def generate_streaming(model_name: str, prompt: str):
    url = BASE_URL + "/api/generate"
    payload = {
        "model": model_name,
        "prompt": prompt,
        "stream": True  # 开启流式
    }
    # 使用 requests 直接发送，以便拿到 Response 对象
    response = requests.post(url, json=payload, headers=HEADERS, stream=True)
    response.raise_for_status()
    # 按行读取，每行都是一段 JSON（可能含有逗号等，需要 strip 处理）
    for line in response.iter_lines(decode_unicode=True):
        if not line:
            continue
        # 某些行可能是逗号等，需要过滤掉非 JSON 部分
        try:
            data = json.loads(line)
        except json.JSONDecodeError:
            continue
        # 典型的流式返回，每个 data 结构类似：
        # {
        #   "model": "llama3.2",
        #   "created_at": "...",
        #   "response": "文本片段",
        #   "done": false 或 true,
        #   ...
        # }
        print(data.get("response", ""), end="", flush=True)
        if data.get("done", False):
            print()  # 换行
            break

if __name__ == "__main__":
    print("开始流式生成…")
    generate_streaming("llama3.2", "写一首关于春天的小诗：")
```

### 带后缀(suffix)的调用示例

如果你希望在模型生成后追加一定的内容，可以使用 `suffix` 参数。例如在生成代码过程中，想让模型自动补齐函数体的剩余部分：

```python
# generate_with_suffix.py

from helper import post

def generate_with_suffix():
    payload = {
        "model": "codellama:code",
        "prompt": "def compute_gcd(a, b):",
        "suffix": "    return result",  # 生成的内容接在函数体最后
        "options": {
            "temperature": 0
        },
        "stream": False
    }
    res = post("/api/generate", payload)
    print("生成结果：\n", res["response"])

if __name__ == "__main__":
    generate_with_suffix()
```



### 生成结构化输出示例

当需要模型按照特定的 JSON Schema 返回时，可以在 `format` 字段提供一个合法的 JSON Schema。示例：让模型输出一个包含 `age`（integer）和 `available`（boolean）的对象。

```python
# generate_structured.py

from helper import post

def generate_structured():
    schema = {
        "type": "object",
        "properties": {
            "age": {"type": "integer"},
            "available": {"type": "boolean"}
        },
        "required": ["age", "available"]
    }
    payload = {
        "model": "llama3.1:8b",
        "prompt": "Ollama 今年 22 岁，正在忙于拯救世界。请返回 JSON 格式，包含 age 和 available 字段。",
        "stream": False,
        "format": schema
    }
    res = post("/api/generate", payload)
    # 模型返回的 res["response"] 通常是一个字符串，包含符合 schema 的 JSON
    print("原始响应：", res["response"])
    # 如果需要把字符串解析为 Python 对象：
    try:
        parsed = json.loads(res["response"])
        print("解析后的 JSON：", parsed)
    except Exception as e:
        print("JSON 解析失败:", e)

if __name__ == "__main__":
    generate_structured()
```

### 加载/卸载模型示例

1. **加载模型**：发送一个空的 `prompt`，默认会把模型加载到内存，不返回文本，只返回状态。
2. **卸载模型**：在同样空 `prompt` 的基础上，`"keep_alive": 0` 表示立即卸载该模型。

```python
# model_lifecycle.py

from helper import post

def load_model(model_name: str):
    payload = {
        "model": model_name,
        "prompt": ""        # 留空表示仅加载模型
    }
    res = post("/api/generate", payload)
    print(f"加载 {model_name}，返回：", res)

def unload_model(model_name: str):
    payload = {
        "model": model_name,
        "prompt": "",
        "keep_alive": 0     # 立即卸载
    }
    res = post("/api/generate", payload)
    print(f"卸载 {model_name}，返回：", res)

if __name__ == "__main__":
    load_model("llama3.2")
    unload_model("llama3.2")
```



## Generate a chat completion（/api/chat）

```
POST /api/chat
```

与 `/api/generate` 类似，但针对对话场景。常见字段：

- `model`：必填，模型名称。
- `messages`：对话消息列表，每条消息是一个带 `role`（`system`/`user`/`assistant`/`tool`）和 `content` 的对象；也可携带 `images`、`tool_calls`。
- `stream`：是否流式；默认 `true`。
- `format`：可选，结构化输出的 JSON Schema。
- `options`：可选，高级配置（如 `temperature`）。
- `tools`：可选，告诉模型有哪些函数（工具）可用，支持 function calling。

下面分别演示常用模式。

### Chat 非流式调用示例

如果只想一次性拿到完整改话结果，设置 `"stream": false`：

```python
# chat_non_stream.py

from helper import post

def chat_once(model_name: str, messages: list):
    payload = {
        "model": model_name,
        "messages": messages,
        "stream": False
    }
    res = post("/api/chat", payload)
    # 返回示例：
    # {
    #   "model": "llama3.2",
    #   "created_at": "...",
    #   "message": {"role": "assistant", "content": "模型回复..."},
    #   "done": true,
    #   ...
    # }
    return res

if __name__ == "__main__":
    msgs = [
        {"role": "user", "content": "为什么天空是蓝色的？"}
    ]
    resp = chat_once("llama3.2", msgs)
    print("回复内容：", resp["message"]["content"])
```

### Chat 流式调用示例

如果需要边生成边展示，就要用 `stream=True` 并逐行读取：

```python
# chat_stream.py

import json
import requests
from helper import BASE_URL, HEADERS

def chat_streaming(model_name: str, messages: list):
    url = BASE_URL + "/api/chat"
    payload = {
        "model": model_name,
        "messages": messages,
        "stream": True
    }
    response = requests.post(url, json=payload, headers=HEADERS, stream=True)
    response.raise_for_status()
    for line in response.iter_lines(decode_unicode=True):
        if not line:
            continue
        try:
            data = json.loads(line)
        except json.JSONDecodeError:
            continue
        # data 示例：
        # {
        #   "model": "llama3.2",
        #   "created_at": "...",
        #   "message": {"role":"assistant","content":"文本片段"},
        #   "done": false or true,
        #   ...
        # }
        fragment = data.get("message", {}).get("content", "")
        print(fragment, end="", flush=True)
        if data.get("done", False):
            print()
            break

if __name__ == "__main__":
    msgs = [{"role": "user", "content": "写一个简短的自我介绍。"}]
    print("开始对话流式生成…")
    chat_streaming("llama3.2", msgs)
```



### Chat 带结构化输出示例

与 `/api/generate` 类似，可以传入一个 JSON Schema，要模型按照指定结构输出：

```python
# chat_structured.py

from helper import post
import json

def chat_structured():
    schema = {
        "type": "object",
        "properties": {
            "age": {"type": "integer"},
            "available": {"type": "boolean"}
        },
        "required": ["age", "available"]
    }
    payload = {
        "model": "llama3.1",
        "messages": [
            {"role": "user", "content": "Ollama 是 22 岁，正在拯救世界。请返回 JSON，包含 age 和 available。"}
        ],
        "stream": False,
        "format": schema,
        "options": {"temperature": 0}
    }
    res = post("/api/chat", payload)
    raw = res["message"]["content"]
    print("原始 JSON 字符串：", raw)
    try:
        obj = json.loads(raw)
        print("解析后：", obj)
    except Exception as e:
        print("解析失败：", e)

if __name__ == "__main__":
    chat_structured()
```



### Chat 加载/卸载模型示例

与 `/api/generate` 类似，只不过 `messages` 数组为空时视为加载/卸载。

```python
# chat_lifecycle.py

from helper import post

def chat_load(model_name: str):
    payload = {"model": model_name, "messages": []}
    res = post("/api/chat", payload)
    print(f"加载 {model_name}，返回：", res)

def chat_unload(model_name: str):
    payload = {"model": model_name, "messages": [], "keep_alive": 0}
    res = post("/api/chat", payload)
    print(f"卸载 {model_name}，返回：", res)

if __name__ == "__main__":
    chat_load("llama3.2")
    chat_unload("llama3.2")
```



## Create a Model（/api/create）

```
POST /api/create
```

创建一个新模型，有以下几种常见用途：

1. **基于已有模型创建**：通过 `"from"` 字段指定父模型。
2. **从 Safetensors 或 GGUF 文件创建**：先通过 `/api/blobs/:digest` 上传 blob，再在 `files` 字段引用。
3. **添加 LoRA adapters**：在 `adapters` 字段中指定 LoRA 文件的 blob digest。
4. **定制 system prompt、template、license、parameters 等**。

下面给出两个示例。



### 示例 1：基于已有模型创建

```python
# create_model_from_existing.py

from helper import post

def create_from_existing():
    payload = {
        "model": "mario",              # 新模型名
        "from": "llama3.2",            # 父模型
        "system": "你现在是超级马里奥，请用马里奥的口吻回答。"
    }
    # 返回的是一个流式信息，每行都是状态更新，可以直接打印
    response = post("/api/create", payload, stream=True)
    # 如果 stream=True，helper.post 会返回 Response 对象
    for line in response.iter_lines(decode_unicode=True):
        if not line:
            continue
        print(line)

if __name__ == "__main__":
    create_from_existing()
```



### 示例 2：从 GGUF 文件创建

假设你已经有一个名为 `model.gguf` 的文件，本地计算出 SHA256 摘要为 `sha256:...`，先将其上传到 Ollama Server，再调用创建 API。

```python
# create_model_from_gguf.py

import hashlib
import requests
from helper import BASE_URL, HEADERS

def compute_sha256(filepath: str) -> str:
    sha256 = hashlib.sha256()
    with open(filepath, "rb") as f:
        for chunk in iter(lambda: f.read(4096), b""):
            sha256.update(chunk)
    return "sha256:" + sha256.hexdigest()

def push_blob(filepath: str):
    digest = compute_sha256(filepath)
    url = BASE_URL + f"/api/blobs/{digest}"
    # 以二进制形式流式上传文件
    with open(filepath, "rb") as f:
        response = requests.post(url, data=f, headers={})
    response.raise_for_status()
    print("上传 Blob 完成：", response.status_code)
    return digest

def create_model_from_gguf():
    filepath = "model.gguf"
    digest = push_blob(filepath)
    payload = {
        "model": "my-gguf-model",
        "files": {
            "model.gguf": digest
        }
    }
    # 开启流式，打印创建进度
    response = requests.post(BASE_URL + "/api/create", json=payload, headers=HEADERS, stream=True)
    for line in response.iter_lines(decode_unicode=True):
        if not line:
            continue
        print(line)

if __name__ == "__main__":
    create_model_from_gguf()
```



## Check if a Blob Exists（HEAD /api/blobs/:digest）

```
HEAD /api/blobs/:digest
```

检查本地 Ollama Server 缓存中是否已存在某个 Blob。若存在返回 200，否则 404。下面示例展示如何用 `requests` 发起 HEAD 请求并判断结果。

```python
# check_blob.py

import requests
from helper import BASE_URL

def check_blob_exists(digest: str):
    url = f"{BASE_URL}/api/blobs/{digest}"
    response = requests.head(url)
    if response.status_code == 200:
        print(f"Blob {digest} 存在")
        return True
    elif response.status_code == 404:
        print(f"Blob {digest} 不存在")
        return False
    else:
        response.raise_for_status()

if __name__ == "__main__":
    test_digest = "sha256:29fdb92e57cf0827ded04ae6461b5931d01fa595843f55d36f5b275a52087dd2"
    check_blob_exists(test_digest)
```



## Push a Blob（/api/blobs/:digest）

```
POST /api/blobs/:digest
```

将本地文件以指定 SHA256 摘要形式上传到 Ollama Server。以下示例中会读取本地文件并向对应 `digest` 发起上传请求。

```python
# push_blob_simple.py

import requests
from helper import BASE_URL

def push_blob(filepath: str, digest: str):
    """
    :param filepath: 待上传的本地文件路径
    :param digest: 文件的预期 sha256 摘要（形如 "sha256:..."）
    """
    url = f"{BASE_URL}/api/blobs/{digest}"
    with open(filepath, "rb") as f:
        response = requests.post(url, data=f)
    if response.status_code == 201:
        print("Blob 上传成功")
    else:
        print("上传失败，状态码：", response.status_code, response.text)

if __name__ == "__main__":
    path = "model.gguf"
    # 假设提前计算好 digest
    digest = "sha256:432f310a77f4650a88d0fd59ecdd7cebed8d684bafea53cbff0473542964f0c3"
    push_blob(path, digest)
```



## List Local Models（/api/tags）

```
GET /api/tags
```

列出当前本地 Ollama Server 上所有已下载/已创建的模型标签及其元信息。调用方式很简单，直接发 GET：

```python
# list_local_models.py

from helper import get

def list_local_models():
    res = get("/api/tags")
    # 返回示例：
    # {
    #   "models": [
    #       {
    #         "name": "deepseek-r1:latest",
    #         "model": "deepseek-r1:latest",
    #         "modified_at": "2025-05-10T08:06:48.639712648-07:00",
    #         "size": 4683075271,
    #         "digest": "...",
    #         "details": {...}
    #       },
    #       ...
    #   ]
    # }
    for m in res.get("models", []):
        print(f"- {m['name']}: 大小={m['size']}，修改时间={m['modified_at']}")

if __name__ == "__main__":
    list_local_models()
```

## Show Model Information（/api/show）

```
POST /api/show
```

查看某个模型的详细信息，包括 Modelfile、参数、模板、模型内部属性等。示例如下：

```python
# show_model_info.py

from helper import post
import json

def show_model(model_name: str, verbose: bool = False):
    payload = {"model": model_name}
    if verbose:
        payload["verbose"] = True
    res = post("/api/show", payload)
    # 返回包含 modelfile、parameters、template、details 等字段
    print("=== Modelfile ===")
    print(res.get("modelfile"))
    print("\n=== Parameters ===")
    print(res.get("parameters"))
    print("\n=== Template ===")
    print(res.get("template"))
    print("\n=== 详细信息 ===")
    print(json.dumps(res.get("details", {}), indent=2))
    if verbose:
        print("\n=== model_info ===")
        print(json.dumps(res.get("model_info", {}), indent=2))

if __name__ == "__main__":
    show_model("llava", verbose=True)
```



## Copy a Model（/api/copy）

```
POST /api/copy
```

将某个已存在模型按镜像方式复制到一个新的名字。若源模型不存在，则返回 404。

```python
# copy_model.py

from helper import post

def copy_model(source: str, destination: str):
    payload = {
        "source": source,
        "destination": destination
    }
    res = post("/api/copy", payload)
    # 如果 200 OK，则返回空 JSON，表示成功；否则会抛出异常
    print(f"复制 {source} 为 {destination} 完成，返回：", res)

if __name__ == "__main__":
    copy_model("llama3.2", "llama3-backup")
```



## Delete a Model（DELETE /api/delete）

```
DELETE /api/delete
```

删除本地某个模型及其数据。删除成功返回 200，否则 404。

```python
# delete_model.py

from helper import delete

def delete_model(model_name: str):
    payload = {"model": model_name}
    try:
        res = delete("/api/delete", payload)
        # 删除成功，res 通常是空对象 {}。
        print(f"删除 {model_name} 成功，返回：", res)
    except Exception as e:
        print(f"删除 {model_name} 失败：", e)

if __name__ == "__main__":
    delete_model("llama3-backup")
```



## Pull a Model（/api/pull）

```
POST /api/pull
```

从官方或自定义仓库下载模型。可选参数 `stream` 控制是否流式返回拉取进度。

```python
# pull_model.py

import requests
from helper import BASE_URL, HEADERS

def pull_model(model_name: str, insecure: bool = False, stream: bool = True):
    payload = {"model": model_name}
    if insecure:
        payload["insecure"] = True
    url = BASE_URL + "/api/pull"
    # 如果需要打印下载进度，stream = True
    response = requests.post(url, json=payload, headers=HEADERS, stream=stream)
    response.raise_for_status()
    if not stream:
        # 直接返回单个 JSON
        print(response.json())
        return
    # 流式打印下载进度
    for line in response.iter_lines(decode_unicode=True):
        if not line:
            continue
        print(line)

if __name__ == "__main__":
    pull_model("llama3.2")
```



## Push a Model（/api/push）

```
POST /api/push
```

将本地某个模型推送到 Ollama.ai 或私有库。前提是你已经注册了账户，并在本地配置了公钥等。此处示例仅演示最简调用流程，实际要先调用 `/api/push`，再根据返回的数据流上传 layer。

```python
# push_model.py

import requests
from helper import BASE_URL, HEADERS

def push_model(model_name: str, insecure: bool = False, stream: bool = True):
    payload = {"model": model_name}
    if insecure:
        payload["insecure"] = True
    url = BASE_URL + "/api/push"
    response = requests.post(url, json=payload, headers=HEADERS, stream=stream)
    response.raise_for_status()
    if not stream:
        print(response.json())
        return
    for line in response.iter_lines(decode_unicode=True):
        if not line:
            continue
        print(line)

if __name__ == "__main__":
    push_model("mattw/pygmalion:latest")
```



## Generate Embeddings（/api/embed）

```
POST /api/embed
```

使用指定模型生成文本嵌入 (embeddings)。输入可以是字符串或字符串列表。下面示例展示如何生成单句和多句嵌入。

```python
# generate_embeddings.py

from helper import post

def embed_single(model_name: str, text: str):
    payload = {
        "model": model_name,
        "input": text
    }
    res = post("/api/embed", payload)
    # 返回示例：
    # {
    #   "model": "all-minilm",
    #   "embeddings": [[0.01007, -0.00175, ...]],
    #   "total_duration": ...,
    #   "load_duration": ...,
    #   "prompt_eval_count": ...
    # }
    return res["embeddings"][0]

def embed_multiple(model_name: str, texts: list):
    payload = {
        "model": model_name,
        "input": texts
    }
    res = post("/api/embed", payload)
    return res["embeddings"]

if __name__ == "__main__":
    single_emb = embed_single("all-minilm", "为什么天空是蓝色的？")
    print("单句嵌入：", single_emb[:10], "...")

    multi_emb = embed_multiple("all-minilm", ["为什么天空是蓝色？", "为什么草是绿色？"])
    print("多句嵌入：")
    for idx, emb in enumerate(multi_emb):
        print(f"  第 {idx+1} 条：", emb[:10], "...")
```



## List Running Models（/api/ps）

```
GET /api/ps
```

列出当前已经加载到内存中的模型及其占用的显存、过期时间等信息。

```python
# list_running_models.py

from helper import get

def list_running_models():
    res = get("/api/ps")
    # 返回示例：
    # {
    #   "models": [
    #       {
    #         "name": "mistral:latest",
    #         "model": "mistral:latest",
    #         "size": ...,
    #         "digest": "...",
    #         "details": {...},
    #         "expires_at": "...",
    #         "size_vram": ...
    #       },
    #       ...
    #   ]
    # }
    for m in res.get("models", []):
        print(f"- {m['name']} (expires at {m['expires_at']}, VRAM={m['size_vram']})")

if __name__ == "__main__":
    list_running_models()
```



## Version（/api/version）

```
GET /api/version
```

获取当前 Ollama Server 的版本号。

```python
# get_version.py

from helper import get

def get_version():
    res = get("/api/version")
    # 返回示例：{"version":"0.5.1"}
    print("Ollama Server 版本：", res.get("version"))

if __name__ == "__main__":
    get_version()
```



## 常见问题与注意事项

1. **请求失败时的异常处理**
    - 本文示例调用都使用 `response.raise_for_status()`，如果状态码不是 2xx，会直接抛出异常并退出。真实项目中可以捕捉 `requests.exceptions.HTTPError`，并打印 `response.text` 帮助定位错误。
2. **流式响应解析**
    - 当 `stream=True` 时，`response.iter_lines(decode_unicode=True)` 会返回逐行（以 `\n` 分割）的字节流，需要用 `json.loads()` 解码每行 JSON。注意要过滤空行或不完整的 JSON。
3. **模型加载/卸载**
    - 在调用 `/api/generate` 或 `/api/chat` 时，如果需要显式地把模型加载到内存里，可发送空 `prompt` 或空 `messages`。若要及时释放显存，需加上 `"keep_alive": 0`。
4. **并发与超时**
    - `requests` 默认没有超时，建议在生产环境中为重要请求加上 `timeout=XX` 参数，以避免卡死。
5. **多模态模型（含图片）**
    - 对于支持图像输入的模型（如 `llava`），可以在 `images` 字段里填入一个 Base64 编码后的字符串列表。可参考 `/api/generate` 文档中的示例。
6. **函数调用（Function Calling）**
    - 在 `/api/chat` 请求中，通过 `tools` 字段声明可调用的函数，模型在回复中如果要调用函数，会在返回的 `message.tool_calls` 中给出相应信息，开发者可据此在本地执行实际函数并将结果反馈给模型。
7. **安全性**
    - 如果在生产环境中暴露了 Ollama Server，请务必限制来源 IP 或使用反向代理加认证，以免被他人滥用。

通过以上示例，你可以掌握如何使用 Python 脚本对 Ollama Server 提供的所有主要 API 进行调用，并根据业务需求自行封装、改造或集成到其他项目中。祝使用愉快！

::::





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