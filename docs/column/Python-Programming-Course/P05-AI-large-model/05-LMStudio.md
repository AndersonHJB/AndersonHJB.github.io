---
title: 05-LM Studio中文版入门教程「含：去除思维链方法及代码实现」
icon: blog
date: 2025-10-26 14:13:01
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

## 1. 安装库

`lmstudio-python` 已在 PyPI 上发布。你可以使用 pip 进行安装。

```bash
pip install lmstudio
```

## 2. 快速示例：与 Llama 模型聊天

### 2.1 使用终端安装大模型

以下代码需要 [qwen3-4b-2507](https://lmstudio.ai/models/qwen/qwen3-4b-2507) 模型，如果没有该模型，请在终端运行以下命令进行下载。

![下载过程图](https://blog.images.bornforthis.cn/docs-images/sha256/e1/e1056acb429e807747f7fe22555f89e8d6e74c54be607b1797acd18ff90bda8f.png)

![下载完成](https://blog.images.bornforthis.cn/docs-images/sha256/8f/8f8f37c5fcde2c416cd45a3315febac66ba0ced2e636f1766d52d2c83947e841.png)

```bash
lms get qwen/qwen3-4b-2507
```

[在此处](https://lmstudio.ai/docs/cli/get)阅读有关 LM Studio 的 CLI 中的 `lms get` 更多信息。

### 2.2 基础调用示例

```python
import lmstudio as lms
model = lms.llm("qwen/qwen3-4b-2507")
result = model.respond("生命的意义是什么？")
print(result)
```

## 3. 设置局域网服务器

### 3.1 LM Studio 软件内设置

![](https://blog.images.bornforthis.cn/docs-images/sha256/2d/2d2b41fb48044849e80a41d876e7630f11ad9fd45e9c3b27df96413aaa96033b.png)

默认端口 1234，可以自行设置其它端口。

### 3.2 开启服务

![开启 Status Stopped](https://blog.images.bornforthis.cn/docs-images/sha256/8e/8e566849913ec3b84f1c24461b18f101c3d470ddf5e3ce90a576476c63ce9301.png)

![开启状态](https://blog.images.bornforthis.cn/docs-images/sha256/7e/7e1698c3c7d855ac21dbb877c4140cf01ae1b899124adee0122abb16637a9ec4.png)



### 3.3 程序中设置使用 http 模式

```python
import lmstudio as lms
SERVER_API_HOST = "localhost:1234"

lms.configure_default_client(SERVER_API_HOST)
```

### 3.4 检查指定的 API 服务器主机是否正在运行

很多时候，我们需要确保提供 API 的电脑是否正常启动，且可以正常使用，避免项目不能正常运行。

我们可以使用如下代码实现：

```python
import lmstudio as lms
SERVER_API_HOST = "localhost:1234"

if lms.Client.is_valid_api_host(SERVER_API_HOST):
    print(f"An LM Studio API server instance is available at {SERVER_API_HOST}")
else:
    print("No LM Studio API server instance found at {SERVER_API_HOST}")
```

### 3.5 局域网内 IP 地址获取

当开启 API 服务后，软件右上角会自行显示 IP 地址以及对应端口，看如下图：

![](https://blog.images.bornforthis.cn/docs-images/sha256/5b/5bdb3a094f39eeb9cc5c0869fa42ff4a617636b6273b6eb14621468000178a7b.png)

### 3.6 最终设置

**场景**：Windows 设置为服务器，Mac 进行调用。下面的代码，写在 Mac 上面：

```python
import lmstudio as lms

SERVER_API_HOST = "192.168.3.6:1234"  # 不能加 http，否则无法访问并且报错：timeout
lms.configure_default_client(SERVER_API_HOST)
```

> 当然，上面的点也可以写在 Windows 上。

## 4. 查看当前所安装的大模型 & 使用

### 4.1 查看所有已安装大模型

::: code-tabs

@tab 本地

```python
import lmstudio as lms

loaded_models = lms.list_loaded_models()  # 查看的是已经在软件中加载的大模型
for idx, model in enumerate(loaded_models):
    print(f"{idx:>3} {model}")
```

@tab 局域网 API

```python
import lmstudio as lms

SERVER_API_HOST = "192.168.3.17:19978"

lms.configure_default_client(SERVER_API_HOST)
#
# model = lms.llm("openai/gpt-oss-20b")
# result = model.respond("说出三种水果")
# print(result)
loaded_models = lms.list_loaded_models()
for idx, model in enumerate(loaded_models):
    print(f"{idx:>3} {model}")
```

:::

::: details `{idx:>3}` 的含义

这一部分是对变量 `idx` 的**格式控制**。

- `:` 表示“开始设置格式”
- `>` 表示 **右对齐**（align right）
- `3` 表示 **宽度为 3 个字符**

👉 所以 `{idx:>3}` 的意思是：

> 把变量 `idx` 占 3 个字符宽度并右对齐，不足的位置用空格填充。

例如：

| idx  | 输出结果 |
| ---- | -------- |
| 1    | `'  1'`  |
| 23   | `' 23'`  |
| 456  | `'456'`  |

:::

### 4.2 使用大模型

> 下面的代码，有助于推测 LM Studio 的多轮对话记忆。

```python
model = loaded_models[0]
chat = lms.Chat("你要简明扼要地回答问题")
chat = lms.Chat("你要简明扼要地回答问题")  # 蕴含的意思：可以重复设定，代表 system 角色
# 1
chat.add_user_message("说出三种水果")
print(model.respond(chat, on_message=chat.append))
# 2
chat.add_user_message("再说出三种水果")
print(model.respond(chat, on_message=chat.append))

chat.add_user_message("你已经告诉了我多少种水果？")
print(model.respond(chat, on_message=chat.append))

# ---output---
<|channel|>analysis<|message|>User asks "说出三种水果" meaning "name three fruits". Just answer with three fruit names.<|end|><|start|>assistant<|channel|>final<|message|>苹果、香蕉、西瓜。
<|channel|>analysis<|message|>Need 3 more fruits.<|end|><|start|>assistant<|channel|>final<|message|>葡萄、橙子、芒果。
<|channel|>analysis<|message|>Count: first 3 + second 3 =6.<|end|><|start|>assistant<|channel|>final<|message|>你已被告知 **六** 种水果。
```

## 5. 流式回复

```python
import lmstudio as lms
model = lms.llm()

for fragment in model.respond_stream("生命的意义是什么？"):
    print(fragment.content, end="", flush=True)
print() # Advance to a new line at the end of the response
```

## 6. 管理上下文聊天

```python
import lmstudio as lms

# Create a chat with an initial system prompt.
chat = lms.Chat("You are a resident AI philosopher.")

# Build the chat context by adding messages of relevant types.
chat.add_user_message("What is the meaning of life?")
# ... continued in next example
```

::: code-tabs

@tab 基础

```python
# The `chat` object is created in the previous step.
result = model.respond(chat)

print(result)
```

@tab 流式回复

```python
# The `chat` object is created in the previous step.
prediction_stream = model.respond_stream(chat)

for fragment in prediction_stream:
    print(fragment.content, end="", flush=True)
print() # Advance to a new line at the end of the response
```

:::

## 7. 自定义推理参数

::: code-tabs

@tab 基础版

```python
result = model.respond(chat, config={
    "temperature": 0.6,
    "maxTokens": 50,
})
```

@tab 流式版本

```python
prediction_stream = model.respond_stream(chat, config={
    "temperature": 0.6,
    "maxTokens": 50,
})
```

:::

## 8. 输出资源使用信息

::: code-tabs

@tab 基础

```python
# `result` 是模型返回的响应。
print("使用的模型:", result.model_info.display_name)
print("预测的 Token 数:", result.stats.predicted_tokens_count)
print("首个 Token 延迟（秒）:", result.stats.time_to_first_token_sec)
print("停止原因:", result.stats.stop_reason)

# ---output---
使用的模型: OpenAI's gpt-oss 20B
预测的 Token 数: 40
首个 Token 延迟（秒）: 0.263
停止原因: eosFound
```

@tab 流式

```python
# After iterating through the prediction fragments,
# the overall prediction result may be obtained from the stream
result = prediction_stream.result()

print("Model used:", result.model_info.display_name)
print("Predicted tokens:", result.stats.predicted_tokens_count)
print("Time to first token (seconds):", result.stats.time_to_first_token_sec)
print("Stop reason:", result.stats.stop_reason)
```

:::

## 9. 多轮对话

::: code-tabs

@tab 局域网多轮对话

```python
import lmstudio as lms

SERVER_API_HOST = "192.168.3.17:19978"

lms.configure_default_client(SERVER_API_HOST)

model = lms.llm("openai/gpt-oss-20b")
chat = lms.Chat("You are a task focused AI assistant")  # 角色设定，system

while True:
    user_input = input("You (leave blank to exit): ")

    if not user_input:
        break
    chat.add_user_message(user_input)
    prediction = model.respond(
        chat,
        on_message=chat.append,
    )
    print("Bot: ", end="", flush=True)
    print(prediction)
    print()
```

@tab base-code

```python
import lmstudio as lms

model = lms.llm()
chat = lms.Chat("You are a task focused AI assistant")

while True:
    try:
        user_input = input("You (leave blank to exit): ")
    except EOFError:
        print()
        break
    if not user_input:
        break
    chat.add_user_message(user_input)
    prediction_stream = model.respond_stream(
        chat,
        on_message=chat.append,
    )
    print("Bot: ", end="", flush=True)
    for fragment in prediction_stream:
        print(fragment.content, end="", flush=True)
    print()
```

@tab 注释代码

```python
import lmstudio as lms      # 导入 lmstudio 库，并起一个别名叫 lms，后面用 lms 来访问这个库里的功能

model = lms.llm()           # 创建一个大语言模型实例，赋值给 model 变量，用于后面生成回复
chat = lms.Chat("You are a task focused AI assistant")
                           # 创建一个对话对象 chat，并设置初始系统提示词：
                           # "You are a task focused AI assistant"
                           # 也就是告诉模型“你是一个专注完成任务的 AI 助手”

while True:                # 启动一个无限循环，用来反复与用户进行对话（直到用户退出）
    try:
        user_input = input("You (leave blank to exit): ")
                           # 显示提示文字，让用户在命令行输入内容。
                           # input() 会等待用户输入并按回车，把输入的字符串保存到 user_input。
                           # 括号里的字符串是提示语：“You (leave blank to exit): ”
                           # 提示用户：留空（直接回车）时表示退出。
    except EOFError:       # 捕获 EOFError 异常（例如在某些环境下输入结束 / 管道结束）
        print()            # 打印一个空行，使输出好看一点
        break              # 跳出 while True 循环，结束程序

    if not user_input:     # 如果 user_input 为空字符串（用户直接回车，不输入内容）
        break              # 结束循环，退出程序

    chat.add_user_message(user_input)
                           # 把用户刚才输入的这一句添加到对话历史中，
                           # 相当于告诉 chat：“这是用户说的话”。

    prediction_stream = model.respond_stream(
        chat,              # 把当前整个对话对象 chat 传给模型，让模型根据对话历史生成回复
        on_message=chat.append, 
                           # 设置一个回调函数 on_message，当模型生成新的消息片段时，
                           # 会调用 chat.append 把这些内容追加到对话历史。
    )

    print("Bot: ", end="", flush=True)
                           # 先打印“Bot: ”作为机器人回复的前缀。
                           # end="" 表示打印后不换行，光标留在同一行；
                           # flush=True 表示强制立刻把缓冲区内容输出到终端（避免等待）。

    for fragment in prediction_stream:
                           # 遍历模型生成的流式输出 prediction_stream。
                           # prediction_stream 是一个“可迭代对象”，每次迭代拿到一小段回复（fragment）。
        print(fragment.content, end="", flush=True)
                           # 对每个 fragment，打印其中的文本内容 fragment.content。
                           # end="" 让所有片段连在同一行输出，形成连续的回复；
                           # flush=True 让每个小片段一生成就立刻显示，实现“流式打字”的效果。

    print()                # 最后再打印一个换行，把光标移动到下一行（便于下次输入）
```

@tab 限制 token

```python {19-21}
import lmstudio as lms

SERVER_API_HOST = "192.168.3.17:19978"

lms.configure_default_client(SERVER_API_HOST)

model = lms.llm("openai/gpt-oss-20b")
chat = lms.Chat("You are a task focused AI assistant")  # 角色设定，system

while True:
    user_input = input("You (leave blank to exit): ")

    if not user_input:
        break
    chat.add_user_message(user_input)
    prediction = model.respond(
        chat,
        on_message=chat.append,
        config={
            "maxTokens": 50,
        }
    )
    print("Bot: ", end="", flush=True)
    print(prediction)
    print()
```



:::



## 10. 去除思维链

流式与非流式的区别就是：流式一点点回复，类似实时说话般。（有进度的感觉）非流式需要等答案全部生成完成后，才可以看见。（生成期间，干等着。）

### 10.1 方法一：非流式

#### 10.1.1 字符串方法

非流式输出，必然是一整个结果。意味着：我们要操作的对象是，一个完整的大模型回答。

我们可以使用 type 检测非流式回答的数据类型，便于我们后续的操作：

```python {21}
import lmstudio as lms

SERVER_API_HOST = "192.168.3.17:19978"

lms.configure_default_client(SERVER_API_HOST)

model = lms.llm("openai/gpt-oss-20b")
chat = lms.Chat("You are a task focused AI assistant")  # 角色设定，system

while True:
    user_input = input("You (leave blank to exit): ")

    if not user_input:
        break
    chat.add_user_message(user_input)
    prediction = model.respond(
        chat,
        on_message=chat.append,
    )
    print("Bot: ", end="", flush=True)
    print(type(prediction))
    print(type(prediction.content))

    print()
    

# ---output---
You (leave blank to exit): 给我三种水果
Bot: <class 'lmstudio.json_api.PredictionResult'>
<class 'str'>
```

所以，可以直接使用 `prediction.content` 结合 split 来实现去除思维链结果即可。

```python
messages = prediction.content.split('<|message|>')
```

【**错误思路·值得学习**】：一开始想着是：使用 index 来索引得到 `<|message|>` 的下标，但是有个难点：`<|message|>` 出现两次，而 index 只能索引得到第一次出现的下标，如何解决？——你可以想想，然后再看我的想法。

```python
position_message_tag = messages.index('<|message|>')  # 难点：<|message|> 出现两次，而 index 只能所以到第一次出现的，如何解决？
```

- **思路一**：可以把列表翻转，那么我们需要的数据就在列表前面，就可以直接提取或者使用 index 函数。
- ~~**思路二**：可以 index 两次，删除第一次之前的结果（del、pop、remove），再一次使用 index 函数进行索引即可得到想要的数据。~~
- ~~**思路三**：第一次使用 index 后，删除首次匹配的。接着使用 index 索引得到结果后，进行切片提取。（`lst[lst.index('<|message|>'):]`）这个方法适合多数据。~~
- **思路二**：核心实现是使用两次 index，第一次使用 index 索引到 `<|message|>` 结果后，删除第一次得到的结果。接着第二次使用 index 索引得到结果后，提取目标数据。（`messages[messages.index('<|message|>') + 1]`）

这些思路不是本次处理最好的方法，但是提供多一种选择，便于后期应对未知情况。

【**正确思路**】：通过直接 print 函数输出分割后的结果，直接可以看出：

```python
messages = prediction.content.split('<|message|>')
print(messages)

# ---output---
You (leave blank to exit): 你好，我是悦创。
Bot: ['<|channel|>analysis', 'User says Chinese greeting. Probably respond politely.<|end|><|start|>assistant<|channel|>final', '您好，悦创！很高兴见到您。有任何问题或需求随时告诉我，我会尽力帮助您。']

You (leave blank to exit): 
```

通过上面的代码运行结果，我们可以看见上面原本的思路一、二存在问题！

::: warning 错❌的离谱！！！🍐🎼

split 分割之后，所以索引 `'<|message|>'` 是不切实际的。故而，上面的思路有可取之处。可以改成：不使用 split，直接把大模型回答按字符串进行处理。

- **思路一**：不可取！

- **思路二**：使用两次 index 函数，进行索引。把首次索引得到的结果，去除掉。再次进行索引并提取。

    ```python
    string = prediction.content
    string = string[string.index('<|message|>') + len('<|message|>') - 1:]  # 第一次索引得到的结果去除，并赋值。
    target_content = string[string.index('<|message|>') + len('<|message|>') - 1:]
    ```

    上面的代码有问题，index 得到结果之后不需要 `-1`。本身 index 会索引得到 `<` 下标，那么我们需要加上剩余的 `'|message|>'` 字符串长度。而我们的目标数据，是要在整个 `'<|message|>'` 之后开始提取的，故而索引需要进行 `+1`。最终得到：`string.index('<|message|>') + len('<|message|>') - 1 + 1` ==> `string.index('<|message|>') + len('<|message|>')`。

    正确代码如下：

    ```python
    string = prediction.content
    string = string[string.index('<|message|>') + len('<|message|>'):]  # 第一次索引得到的结果去除，并赋值。
    target_content = string[string.index('<|message|>') + len('<|message|>'):]
    ```

    > 发现这些问题的核心方法：**运行代码，不要脑补结果！**

- **思路三**：直接使用 rfind（rindex 一样） 函数进行索引字符串最右侧的 `'<|message|>'` 下标，因为 rfind 只会得到 `<|message|>` 的 `<` 下标索引，我们需要进行加上 `|message|>` 后续的长度才行。随后进行数据提取即可：`prediction.content[prediction.content.rfind('<|message|>') + len('<|message|>') - 1 + 1:]`

> 人类的科技进步，是基于懒惰才进步的。如同上面的代码，勤奋的人可以手动数一数 `'<|message|>'` 长度。这个 `'<|message|>'` 还不算长，但是为了要是遇上长的还要继续数吗？——可以不用，可以选择使用 len 函数获取字符串长度，使代码更灵活。
>
> - 勤奋版：`prediction.content[prediction.content.rfind('<|message|>') + 10 + 1:]`；（为什么要 `+1` 在前面的代码中已经说明。）
> - 懒惰版：`prediction.content[prediction.content.rfind('<|message|>') + len('<|message|>') - 1 + 1:]`。

:::

使用 split 函数，则可以直接使用 `[-1]` 提取列表最后的数据即可。

接下来稍微汇总一下代码：

::: code-tabs

@tab split()

```python
messages = prediction.content.split('<|message|>')
messages = messages[-1]
print(messages)
```

@tab split() All Code

```python {21-23}
import lmstudio as lms

SERVER_API_HOST = "192.168.3.17:19978"

lms.configure_default_client(SERVER_API_HOST)

model = lms.llm("openai/gpt-oss-20b")
chat = lms.Chat("You are a task focused AI assistant")  # 角色设定，system

while True:
    user_input = input("You (leave blank to exit): ")

    if not user_input:
        break
    chat.add_user_message(user_input)
    prediction = model.respond(
        chat,
        on_message=chat.append,
    )
    print("Bot: ", end="", flush=True)
    messages = prediction.content.split('<|message|>')
    messages = messages[-1]
    print(messages)
    print()
```

@tab index()

```python
# string = prediction.content
# string = string[string.index('<|message|>') + len('<|message|>') - 1:]  # 第一次索引得到的结果去除，并赋值。
# target_content = string[string.index('<|message|>') + len('<|message|>') - 1:]

string = prediction.content
# 不需要 -1，因为本身就是要包含 <|message|> 完整长度
string = string[string.index('<|message|>') + len('<|message|>'):]  # 第一次索引得到的结果去除，并赋值。
target_content = string[string.index('<|message|>') + len('<|message|>'):]
print(target_content)
```

@tab index() All Code

```python {21-24}
import lmstudio as lms

SERVER_API_HOST = "192.168.3.17:19978"

lms.configure_default_client(SERVER_API_HOST)

model = lms.llm("openai/gpt-oss-20b")
chat = lms.Chat("You are a task focused AI assistant")  # 角色设定，system

while True:
    user_input = input("You (leave blank to exit): ")

    if not user_input:
        break
    chat.add_user_message(user_input)
    prediction = model.respond(
        chat,
        on_message=chat.append,
    )
    print("Bot: ", end="", flush=True)
    string = prediction.content
    string = string[string.index('<|message|>') + len('<|message|>'):]  # 第一次索引得到的结果去除，并赋值。
    target_content = string[string.index('<|message|>') + len('<|message|>'):]
    print(target_content)
    print()
```

@tab rfind()

```python
message = prediction.content[prediction.content.rfind('<|message|>') + len('<|message|>'):]print(message)
```

@tab rfind() All Code

```python {21-22}
import lmstudio as lms

SERVER_API_HOST = "192.168.3.17:19978"

lms.configure_default_client(SERVER_API_HOST)

model = lms.llm("openai/gpt-oss-20b")
chat = lms.Chat("You are a task focused AI assistant")  # 角色设定，system

while True:
    user_input = input("You (leave blank to exit): ")

    if not user_input:
        break
    chat.add_user_message(user_input)
    prediction = model.respond(
        chat,
        on_message=chat.append,
    )
    print("Bot: ", end="", flush=True)
    message = prediction.content[prediction.content.rfind('<|message|>') + len('<|message|>'):]
    print(message)
    print()
```

@tab rindex()

```python
message = prediction.content[prediction.content.rindex('<|message|>') + len('<|message|>'):]
print(message)
```

@tab rindex() All Code

```python {21-22}
import lmstudio as lms

SERVER_API_HOST = "192.168.3.17:19978"

lms.configure_default_client(SERVER_API_HOST)

model = lms.llm("openai/gpt-oss-20b")
chat = lms.Chat("You are a task focused AI assistant")  # 角色设定，system

while True:
    user_input = input("You (leave blank to exit): ")

    if not user_input:
        break
    chat.add_user_message(user_input)
    prediction = model.respond(
        chat,
        on_message=chat.append,
    )
    print("Bot: ", end="", flush=True)
    message = prediction.content[prediction.content.rindex('<|message|>') + len('<|message|>'):]
    print(message)
    print()
```

:::

#### 10.1.2 regex 方法

::: tip regex 适合结构的规律，字符串的索引、遍历适合有规律的下标。但两者可以结合，发挥更大的效能！

:::

**一句话解释**：regex 可以让我们写出规则，接着 regex 就会按这个规则去匹配符合规则结构的数据。

举个例子🌰：小悦要去找对象，跟媒婆说：我要身高 170cm、体重 90kg、瓜子脸、长头发、喜爱阅读的。（规则）

媒婆按照你给出的规则去寻找，只要有符合规则的就带来相亲。（媒婆 == regex）

##### 10.1.2.1 方案一：简单版，只保留 final 文本（推荐）

::: code-tabs

@tab base code

```python
import re

def extract_final(prediction: str) -> str:
    """
    从 LM Studio 输出中提取 final 渠道的纯回答文本，
    并忽略 analysis 思维链。
    """
    # 1. 先删掉所有 analysis 块
    no_analysis = re.sub(
        r"<\|channel\|\>analysis<\|message\|\>.*?<\|end\|>",
        "",
        prediction,
        flags=re.S  # DOTALL, 让 . 可以匹配换行
    )

    # 2. 再从中提取 final 部分的内容
    m = re.search(
        r"<\|channel\|\>final<\|message\|\>(.*?)(?=<\|end\|>|$)",
        no_analysis,
        flags=re.S
    )
    if m:
        return m.group(1).strip()
    else:
        # 如果没匹配到，就退回原串（基本不会用到）
        return prediction.strip()
```

@tab All Code

```python {1,12-35,49-50}
import re
import lmstudio as lms

SERVER_API_HOST = "192.168.3.17:19978"

lms.configure_default_client(SERVER_API_HOST)

model = lms.llm("openai/gpt-oss-20b")
chat = lms.Chat("You are a task focused AI assistant")  # 角色设定，system


def extract_final(prediction: str) -> str:
    """
    从 LM Studio 输出中提取 final 渠道的纯回答文本，
    并忽略 analysis 思维链。
    """
    # 1. 先删掉所有 analysis 块
    no_analysis = re.sub(
        r"<\|channel\|\>analysis<\|message\|\>.*?<\|end\|>",
        "",
        prediction,
        flags=re.S  # DOTALL, 让 . 可以匹配换行
    )

    # 2. 再从中提取 final 部分的内容
    m = re.search(
        r"<\|channel\|\>final<\|message\|\>(.*?)(?=<\|end\|>|$)",
        no_analysis,
        flags=re.S
    )
    if m:
        return m.group(1).strip()
    else:
        # 如果没匹配到，就退回原串（基本不会用到）
        return prediction.strip()


while True:
    user_input = input("You (leave blank to exit): ")

    if not user_input:
        break
    chat.add_user_message(user_input)
    prediction = model.respond(
        chat,
        on_message=chat.append,
    )
    print("Bot: ", end="", flush=True)
    message = extract_final(prediction.content)
    print(message)
    print()
```

:::

##### 10.1.2.2 方案二：一次性用 regex 拆分出 analysis / final

如果你想「保留但不显示」思维链，可以用一个 regex 把两个通道都分开：

::: code-tabs

@tab base code

```python
import re

def split_channels(prediction):
    """
    返回 (analysis_text, final_text)
    """
    matches = re.findall(
        r"<\|channel\|\>(analysis|final)<\|message\|\>(.*?)(?=<\|end\|>|<\|channel\|\>|$)",
        prediction,
        flags=re.S
    )
    analysis_text = None
    final_text = None

    for channel, content in matches:
        if channel == "analysis":
            analysis_text = (analysis_text or "") + content
        elif channel == "final":
            final_text = (final_text or "") + content

    # 去掉首尾空白
    if analysis_text is not None:
        analysis_text = analysis_text.strip()
    if final_text is not None:
        final_text = final_text.strip()

    return analysis_text, final_text
```

@tab All Code

```python
import re
import lmstudio as lms

SERVER_API_HOST = "192.168.3.17:19978"

lms.configure_default_client(SERVER_API_HOST)

model = lms.llm("openai/gpt-oss-20b")
chat = lms.Chat("You are a task focused AI assistant")  # 角色设定，system


def split_channels(prediction):
    """
    返回 (analysis_text, final_text)
    """
    matches = re.findall(
        r"<\|channel\|\>(analysis|final)<\|message\|\>(.*?)(?=<\|end\|>|<\|channel\|\>|$)",
        prediction,
        flags=re.S
    )
    analysis_text = None
    final_text = None

    for channel, content in matches:
        if channel == "analysis":
            analysis_text = (analysis_text or "") + content
        elif channel == "final":
            final_text = (final_text or "") + content

    # 去掉首尾空白
    if analysis_text is not None:
        analysis_text = analysis_text.strip()
    if final_text is not None:
        final_text = final_text.strip()

    return analysis_text, final_text


while True:
    user_input = input("You (leave blank to exit): ")

    if not user_input:
        break
    chat.add_user_message(user_input)
    prediction = model.respond(
        chat,
        on_message=chat.append,
    )
    print("Bot: ", end="", flush=True)
    message = split_channels(prediction.content)
    print(message)
    print()
```

:::







### 10.2 方法二：流式

:::: tabs

@tab 研究🧐

正常运行代码是会一口气输出全部内容，不便于我们动态观察大模型输出的结构特点。故而有两种方法来修改代码实现观察：

- **方法一**：使用 time 函数实现每轮输出直接产生间隔，展现出延迟输出效果；

    ::: details Code

    ```python {2, 24}
    import lmstudio as lms
    import time
    
    SERVER_API_HOST = "192.168.3.17:19978"
    
    lms.configure_default_client(SERVER_API_HOST)
    
    model = lms.llm("openai/gpt-oss-20b")
    chat = lms.Chat("You are a task focused AI assistant")  # 角色设定，system
    
    while True:
        user_input = input("You (leave blank to exit): ")
    
        if not user_input:
            break
        chat.add_user_message(user_input)
        prediction_stream = model.respond_stream(
            chat,
            on_message=chat.append,
        )
        print("Bot: ", end="", flush=True)
        for fragment in prediction_stream:
            print(fragment.content, end="", flush=True)
            time.sleep(1)
        print()
    ```

    :::

    如果老眼昏花，可以适当加长 sleep 的时间。

- **方法二**：让 print 函数回复原始功能，每轮自带换行。

    ::: details Code

    ```python
    import lmstudio as lms
    
    SERVER_API_HOST = "192.168.3.17:19978"
    
    lms.configure_default_client(SERVER_API_HOST)
    
    model = lms.llm("openai/gpt-oss-20b")
    chat = lms.Chat("You are a task focused AI assistant")  # 角色设定，system
    
    while True:
        user_input = input("You (leave blank to exit): ")
    
        if not user_input:
            break
        chat.add_user_message(user_input)
        prediction_stream = model.respond_stream(
            chat,
            on_message=chat.append,
        )
        print("Bot: ", end="", flush=True)
        for fragment in prediction_stream:
            print(fragment.content, flush=True)
        print()
    
    
    # ---output---
    You (leave blank to exit): 你好
    Bot: <|channel|>analysis<|message|>
    User
     says
     "
    你好
    "
     (
    Hello
    ).
     Just
     greet
     back
    .
    <|end|>
    <|start|>assistant
    <|channel|>final<|message|>
    您好
    ！
    有什么
    我
    可以
    帮助
    您
    的吗
    ？
    
    You (leave blank to exit): 
    ```

    :::

    到这我们运行后，会发现虽然可以把每次输出的内容分开，但是太快了。只能在全部回答完成之后，手动翻来翻去的观察。

    **思考一下**：有没有更好的方法？——动态观察比后期手动翻来翻去观察会更好！

所以，虽然上面说了两种方法。但实际上这两种方法结合在一起才是最佳的观察代码，可以自己编写代码运行观察。

```python
import lmstudio as lms
import time

SERVER_API_HOST = "192.168.3.17:19978"

lms.configure_default_client(SERVER_API_HOST)

model = lms.llm("openai/gpt-oss-20b")
chat = lms.Chat("You are a task focused AI assistant")  # 角色设定，system

while True:
    user_input = input("You (leave blank to exit): ")

    if not user_input:
        break
    chat.add_user_message(user_input)
    prediction_stream = model.respond_stream(
        chat,
        on_message=chat.append,
    )
    print("Bot: ", end="", flush=True)
    for fragment in prediction_stream:
        print(fragment.content, flush=True)
        time.sleep(1)
    print()


# ---output---
You (leave blank to exit): 你好
Bot: <|channel|>analysis<|message|>
User
 says
 "
你好
"
 Chinese
 greeting
.
 Should
 respond
 in
 Chinese
.
<|end|>
<|start|>assistant
<|channel|>final<|message|>
你好
！
有什么
我
可以
帮
忙
的吗
？

You (leave blank to exit): 
```

::: tip 结论

`<|channel|>analysis<|message|>`、`<|channel|>final<|message|>`：都是成块出现，并且一个回答中必然出现两次！但是：标签虽然相同，但是其中的包含的字符串不同。

:::

针对上面的结论，我们有两种方法实现。

@tab **方法一：判断次数**

1. **判断 `<|message|>` 出现的次数，只要出现两次就可以进行输出**：

    ::: code-tabs

    @tab Code

    ```python {21-26}
    import lmstudio as lms
    
    SERVER_API_HOST = "192.168.3.17:19978"
    
    lms.configure_default_client(SERVER_API_HOST)
    
    model = lms.llm("openai/gpt-oss-20b")
    chat = lms.Chat("You are a task focused AI assistant")  # 角色设定，system
    
    while True:
        user_input = input("You (leave blank to exit): ")
    
        if not user_input:
            break
        chat.add_user_message(user_input)
        prediction_stream = model.respond_stream(
            chat,
            on_message=chat.append,
        )
        print("Bot: ", end="", flush=True)
        messages_count = 0
        for fragment in prediction_stream:
            if '<|message|>' in fragment.content:
                messages_count += 1
            elif messages_count == 2:
                print(fragment.content, end='', flush=True)
        print()
    ```

    @tab output

    ```bash
    You (leave blank to exit): 请给我列举三个水果
    Bot: 好的，以下是三个常见的水果：
    
    1. 苹果  
    2. 香蕉  
    3. 橙子
    You (leave blank to exit): Python是谁创建的？
    Bot: Python 是由 **Guido van Rossum**（古代·范罗苏姆）在 1989 年圣诞节期间开始开发，并于 1991 年首次公开发布。
    You (leave blank to exit): 我第一个问题是什么？
    Bot: 你最初的问题是：
    
    > **“请给我列举三个水果。”**
    You (leave blank to exit): 第二个问题是什么？
    Bot: 你的第二个问题是：
    
    > **“Python 是谁创建的？”**
    You (leave blank to exit): 第三个问题是什么？
    Bot: 你的第三个问题是：
    
    > **“我第一个问题是什么？”**
    You (leave blank to exit): 
    ```

    :::

    从结果可以看出，很舒服！

2. **判断次数时，包含标签内的字符串**：

    ::: code-tabs

    @tab Code

    ```python {21-26}
    import lmstudio as lms
    
    SERVER_API_HOST = "192.168.3.17:19978"
    
    lms.configure_default_client(SERVER_API_HOST)
    
    model = lms.llm("openai/gpt-oss-20b")
    chat = lms.Chat("You are a task focused AI assistant")  # 角色设定，system
    
    while True:
        user_input = input("You (leave blank to exit): ")
    
        if not user_input:
            break
        chat.add_user_message(user_input)
        prediction_stream = model.respond_stream(
            chat,
            on_message=chat.append,
        )
        print("Bot: ", end="", flush=True)
        messages_count = 0
        for fragment in prediction_stream:
            if fragment.content in ['<|channel|>analysis<|message|>', '<|channel|>final<|message|>']:
                messages_count += 1
            elif messages_count == 2:
                print(fragment.content, end='', flush=True)
        print()
    ```

    @tab output

    ```bash
    /opt/anaconda3/envs/PycharmVenv/bin/python /Users/huangjiabao/GitHub/iMac/Pycharm/StudentCoder/84-辛泽承/code.py 
    You (leave blank to exit): 你依然优雅！
    Bot: 谢谢夸奖，我会继续保持优雅的风格来为您服务。有什么需要帮助的吗？
    You (leave blank to exit): 是不是很哇塞呀
    Bot: 太棒了！如果你有想聊的“哇塞”事物，随时告诉我，我乐意一起探讨～
    You (leave blank to exit): 你是谁的模型？
    Bot: 我是由 OpenAI 研发的大型语言模型，基于 GPT‑4 架构。我的目标是通过自然、连贯的文字回答问题、提供建议以及进行各种对话。你还有其他想了解的吗？
    You (leave blank to exit): 
    ```

    :::

@tab 方法二：目标是否出现

**判断是否出现 `final<|message|>`，一出现就开启输出功能。**

> 也就是：输出回答结果之前，都会包含：`final<|message|>`，我们可以考虑匹配这个 `final<|message|>` ，一旦出现 `final<|message|>` 就把后续的字符串内容输出。

```python {21-28
import lmstudio as lms

SERVER_API_HOST = "192.168.3.17:19978"

lms.configure_default_client(SERVER_API_HOST)

model = lms.llm("openai/gpt-oss-20b")
chat = lms.Chat("You are a task focused AI assistant")  # 角色设定，system

while True:
    user_input = input("You (leave blank to exit): ")

    if not user_input:
        break
    chat.add_user_message(user_input)
    prediction_stream = model.respond_stream(
        chat,
        on_message=chat.append,
    )
    print("Bot: ", end="", flush=True)
    is_final_part = False
    for fragment in prediction_stream:
        # 如果遇到 final message 标记，is_final_part 状态激活
        if "final<|message|>" in fragment.content:
            is_final_part = True
        elif is_final_part:
            # is_final_part 状态激活，直接输出
            print(fragment.content, end='', flush=True)
    print()
```

输出：

```python
You (leave blank to exit): 我是教学编程一对一的，网站：bornforthis.cn
Bot: 您好！很高兴认识您。  
- 您是专门做“一对一”教学编程吗？  
- 目前使用的网站是 bornforthis.cn，想进一步提升课程质量、推广或技术支持吗？  

请告诉我您具体的需求（比如网站功能改进、内容规划、营销策略、学生管理等），我可以帮您提供建议和方案。期待与您的合作！
You (leave blank to exit): 是的，给我设计一个Python课程表
Bot: 下面给出一份 **“Python 一对一教学”** 的完整课程表（约 12 周，每周 2 次课，单次 90 分钟）。  
- 课程目标：让学生从零基础快速掌握 Python 核心语法、常用标准库与开发工具，并完成至少一个完整的小项目。  
- 学生年龄/背景可根据实际情况微调；若已有编程经验，可压缩部分内容或加快节奏。  

| 周次 | 主题 | 主要知识点（课时） | 课堂活动 / 作业 |
|------|------|-------------------|----------------|
| **1** | 环境搭建 & 基础语法 | - Python 安装与 IDE (VS Code + Python 插件)<br>- 交互式解释器 vs 脚本文件<br>- `print`、变量、类型、运算符 | 练习：写 “Hello, World!” 并打印整数列表 |
| **2** | 控制流 | - 条件语句 (`if/elif/else`) <br>- 循环 (`for`, `while`) <br>- 跳转语句 (`break/continue`) | 作业：实现“猜数字”小游戏（循环 + 条件） |

...
...

### 可选扩展（若时间允许）
...
...
| 机器学习入门 | NumPy, scikit-learn 基础案例 |

---

> **提示**：根据学生进度，可在第 6-7 周插入“Python 项目实战”小节，提前让他们感受完整的开发流程。  
> 如果学生已具备一定编程经验，可以跳过基础语法、控制流等章节，直接进入 OOP 或项目实战。

祝教学顺利，期待看到你们的优秀作品！如果有任何细节需要进一步定制（如作业模板、代码规范等），随时告诉我。
You (leave blank to exit): 
```

::::

**不论是方法一，还是方法二，核心都是在控制 print 函数什么时候生效。**

## 11. 取消预测

比如你问了一个问题，大模型回答很久。或者你问了一个问题，想要取消。此时，可以使用此方法。





## 关于更多

直接查看官方文档即可：[https://lmstudio.ai/docs/python/getting-started/project-setup](https://lmstudio.ai/docs/python/getting-started/project-setup)









































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