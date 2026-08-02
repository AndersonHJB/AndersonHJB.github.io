---
title: 03-ChatGLM3-6B 基础法律大模型微调
date: 2025-04-30 12:13:12
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

前面我们本地化部署了 ChatGLM3-6B，对于大模型有了进一步的了解。

目前我们接触的无论是千亿大模型，如 130B、ChatGPT，还是小规模的大模型，如 6B、LLaMA2，都是通用大模型，就是说通过通用常识进行预训练的，如果我们在实际使用过程中，需要大模型具备某一特定领域知识的能力，我们就需要对大模型进行能力增强，具体如何做呢？

## 1. 如何增强模型能力？

微调只是众多优化大模型能力的方法之一，除此之外，还有其他方式，比如接入外挂知识库，或者借助 Agent 调用外部 API 数据源。下面我们来具体看看这些方法的不同之处。

- **微调**指的是在已有预训练模型的基础上，通过特定任务的数据再次训练，使模型更好地适应特定场景。这种方式相对成本较低，模型能够从训练数据中学习特定领域的表达和逻辑，具备一定的语义理解能力。

- **知识库**通过构建向量数据库或其他结构化数据源，为大模型提供一个额外的信息查找渠道，充当“外挂记忆”。

- **API 接入**与知识库类似，也是为模型提供实时信息的外部接口，能够扩展模型的知识边界。

可以这样理解：微调就像是给大模型上了一门新课程，并让它在答题时进行闭卷考试；而知识库和 API 则更像是给模型准备好了教材和工具书，考试时可以随查随用。几种方式并不冲突，我们完全可以将它们结合使用，以提升模型的输出质量和任务处理能力。下面我们就来简要对比这些方式的优劣势。

| 方法                             | 优点 👍                                                       | 缺点 👎                                                       |
| -------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 全量微调 FFT                     | 1. 在特定任务上可以达到最佳性能<br>2. 可以针对特定数据进行优化 | 1. 需要大量计算资源<br>2. 容易过拟合，特别是在数据量较小的情况下<br>3. 更新所有参数，导致模型大小和推理时间增加 |
| 参数高效微调 PEFT：Prompt Tuning | 1. 资源需求低，因为只修改少量参数<br>2. 可以保持预训练模型的大部分知识 | 1. 性能通常不如全量微调<br>2. 找到有效的提示可能很困难<br>3. 在某些任务上效果不如其他微调方法 |
| 参数高效微调 PEFT：Prefix Tuning | 1. 同样适用于较小的参数更新量<br>2. 可以为每个任务自定义前缀，保持预训练模型结构不变 | 1. 性能可能不如全量微调或其他方法<br>2. 需要为每个任务设计和调整前缀<br>3. 在复杂任务上可能不够有效 |
| 参数高效微调 PEFT：LoRA          | 1. 参数数量相对较少，减少了计算和存储需求<br>2. 保持了模型的可解释性和灵活性 | 1. 性能可能略逊于全量微调但通常优于其他参数效率方法<br>2. 需要仔细选择要调整的参数和适应的低秩结构<br>3. 可能需要特定的初始化和调整策略 |
| 参数高效微调 PEFT：QLoRA         | 1. 在 LoRA 的基础上进一步减少参数量，提高参数效率<br>2. 旨在减少计算和存储需求，同时尽可能保持性能<br>3. 可以在不牺牲太多性能的情况下提高速度和效率 | 1. 相比原始 LoRA 可能有轻微性能下降<br>2. 适用性和优化策略可能需要根据具体任务调整<br>3. 实施和调整可能比标准 LoRA 更复杂 |
| 知识库                           | 1. 知识准确，推理性能好<br>2. 比微调更新频率更快，可以随时补充知识 | 知识需要提前维护好                                           |
| API                              | 1. 和知识库类似，有较好的推理性能<br>2. 知识可以随时更新、调整 | 知识需要提前维护好                                           |

注意，大模型领域所谓的性能，英文原词是 Performance，指推理效果，并非我们软件开发里所说的接口性能，比如响应时间、吞吐量等。

了解这几种模型的区别，有助于我们进行技术方案选型。在大模型实际落地过程中，我们需要先分析需求，然后确定落地方式。

1. 微调：准备数据、微调、验证、提供服务。
2. 知识库：准备数据、构建向量库、构建智能体、提供服务。
3. API：准备数据、开发接口、构建智能体、提供服务。

接下来我会通过一个真实的案例，把整个过程串起来。

## 2. 学员真实案例

自从 ChatGPT 引发热潮以来，许多公司纷纷探索如何将大语言模型融入日常工作流程中。

1. 一方面，将其集成进产品中，以增强功能、提升产品竞争力；
2. 另一方面，则是在企业内部部署，用于提升员工的工作效率。

以“企业内部助手”为例，其应用场景非常广泛，从文案撰写、PPT 生成，到日常生活知识查询，几乎无所不包。我们不妨以一个“法律小助手”的场景来具体说明。在构建这类系统时，第一步通常是进行**需求分析**。这是非常关键的一环。

原因在于，并不是所有问题都适合用 AI 来解决；即便是 AI 能发挥作用的场景，也未必需要大型模型，有时一个轻量级的小模型就足够应对。因此，在实际推动落地之前，必须进行**完整且细致的需求分析**，明确问题类型、数据特征以及预期效果，从而决定是否使用 AI、采用什么样的模型方案，确保资源投入与产出效益相匹配。

### 2.1 需求分析

法律小助手用来帮助员工解决日常生活中遇到的法律问题，以问答的方式进行，这种场景可以使用知识库模式，也可以使用微调模式。使用知识库模式的话，需要将数据集拆分成一条一条的知识，先放到向量库，然后通过 Agent 从向量库检索，再输入给大模型，这种方式的好处是万一我们发现数据集不足，可以随时补充，即时生效。

还有一种方式就是进行微调，因为法律知识有的时候需要一定的逻辑能力，不是纯文本检索，而微调就是这样的，通过在一定量的数据集上的训练，增加大模型法律相关的常识及思维，从而进行推理。经过分析，我们确定下来，使用微调的方式进行。接下来就是准备数据了。

### 2.2 准备数据

准备数据有很多种，可以从公共数据集下载，然后进行调整并加入私有化的知识，也可以完全自己整理，为了便于展示，我给你准备了一个公开数据集：[https://bornforthis.cn/Books/04-BookResources/01-InstallationPackage.html](https://bornforthis.cn/Books/04-BookResources/01-InstallationPackage.html) 下载下来的是一个 CSV 格式的文件。

官方给的微调数据格式如下：

```bash
{"conversations": [{"role": "user", "content": "类型#裙*裙长#半身裙"}, {"role": "assistant", "content": "这款百搭时尚的仙女半身裙，整体设计非常的飘逸随性，穿上之后每个女孩子都能瞬间变成小仙女啦。料子非常的轻盈，透气性也很好，穿到夏天也很舒适。"}]}
```

现在我们需要把 CSV 里的内容，转成官方要求的格式。转化代码我直接让 ChatGPT 帮我生成，用了如下提示：

```bash
原始数据是CSV格式，包含4列：title、question、reply、is_best，需要通过Python语言处理该CSV文件，来构建大语言模型的微调数据集，目标数据集格式是JSON的，单条数据格式为：{"conversations":[{"role":"user","content":"value1"},{"role":"assistant","content":"value2"}]}，需要将原始CSV文件里的title列填充到目标JSON文件里的value1处，原始CSV文件里的reply填充到目标JSON文件里的value1处，请注意：最终生成的不是JSON数组，而是每个JSON对象生成一行，出示示例代码。
```

ChatGPT 生成的 Python 代码：

```python
import csv
import json

# CSV 文件的路径
csv_file_path = 'your_csv_file_path.csv'
# 输出 JSON 文件的路径
json_file_path = 'output_json_file_path.json'

# 打开 CSV 文件，并进行处理
with open(csv_file_path, mode='r', encoding='utf-8') as csv_file, \
     open(json_file_path, mode='w', encoding='utf-8') as json_file:
    
    csv_reader = csv.DictReader(csv_file)
    for row in csv_reader:
        # 根据 CSV 文件的列名获取数据
        title = row['title']
        reply = row['reply']
        # 构造单条对话的 JSON 结构
        conversation_entry = {
            "conversations": [
                {"role": "user", "content": title},
                {"role": "assistant", "content": reply}
            ]
        }
        # 将单条记录以 JSON 格式写入文件，每条记录一行
        json_line = json.dumps(conversation_entry, ensure_ascii=False)
        json_file.write(json_line + '\n')
```

通过上面的代码，我们就可以成功将下载下来的 CSV 格式的数据集，格式化成微调所需的数据集。接下来就可以准备微调了。

### 2.3 微调

#### 2.3.1 **安装依赖**

**注意**：所有操作依然是在 Windows 的 WSL 系统中，并且记得激活虚拟环境！

激活虚拟环境，使用如下命令：

```python
source .venv\bin\activate
```

我们先进入到 `finetune_demo` 文件夹，使用的虚拟环境还是前面一篇的虚拟环境。接着执行 `pip3 install -r requirements.txt -i https://mirrors.aliyun.com/pypi/simple`，过程中报了一个错。

![](https://blog.images.bornforthis.cn/docs-images/sha256/b6/b684a7c2725a72bdc5e7f6b13af5565acf5396f5bc6bd180dfe39dc91ff62e6f.png)

原因是缺少 libopenmpi-dev 库，我们使用下面的命令安装：

```python
sudo apt update
sudo apt-get install libopenmpi-dev
```

因为，是自然语言。所以我们还需要安装 nltk 库：

```python
pip3 install nltk
```

到这里，依赖包基本就安装完了。读者在操作的过程中，如果遇到其他库的缺失，有可能是操作系统库也有可能是 Python 库，按照提示完成安装即可。

#### 2.3.2 **准备数据**

训练需要至少准备两个数据集，一个用来训练，一个用来验证。

我们把“准备数据”环节格式化好的文件命名为 `train.json`，再准备一个相同格式的测试数据集 `dev.json`，在里面添加一些测试数据，几十条即可（我添加了 55 条数据），当大模型在训练的过程中，会自动进行测试验证，输出微调效果。

然后在 `finetune_demo` 文件夹下建立一个 data 文件夹，将这两个文件放入 data 文件夹中。

#### 2.3.3 修改配置

修改 `finetune_demo/configs` 下的 `lora.yaml` 文件，将 `train_file`、`val_file`、`test_file`、`output_dir` 定义好，记得写全路径，其他参数也可以按需修改，比如：

1. `max_steps`：最大训练轮数，我们填 3000。
2. `save_steps`：每训练多少轮保存权重，填 500。

其他参数可以参考下面这张表格：

| 配置项                | 子参数                      | 描述                   | 值                  |
| --------------------- | --------------------------- | ---------------------- | ------------------- |
| **data_config**       | train_file                  | 训练数据文件路径       | train.json          |
|                       | val_file                    | 验证数据文件路径       | dev.json            |
|                       | test_file                   | 测试数据文件路径       | dev.json            |
|                       | num_proc                    | 数据处理的工作进程数   | 16                  |
| **max_input_length**  | –                           | 输入序列的最大长度     | 128                 |
| **max_output_length** | –                           | 输出序列的最大长度     | 256                 |
| **training_args**     | output_dir                  | 模型输出目录           | ./output            |
|                       | max_steps                   | 最大训练步数           | 3000                |
|                       | per_device_train_batch_size | 每个设备的训练批次大小 | 1                   |
|                       | dataloader_num_workers      | 数据加载器的工作线程数 | 16                  |
|                       | remove_unused_columns       | 是否删除未使用的列     | false               |
|                       | save_strategy               | 保存检查点的策略       | steps               |
|                       | save_steps                  | 保存检查点的步数间隔   | 500                 |
|                       | log_level                   | 日志级别               | info                |
|                       | logging_strategy            | 日志记录策略           | steps               |
|                       | logging_steps               | 日志记录的步数间隔     | 10                  |
|                       | per_device_eval_batch_size  | 每个设备的评估批次大小 | 16                  |
|                       | evaluation_strategy         | 评估策略               | steps               |
|                       | eval_steps                  | 评估的步数间隔         | 500                 |
|                       | predict_with_generate       | 是否使用生成进行预测   | true                |
| **generation_config** | –                           | 生成配置               | max_new_tokens: 256 |
| **peft_config**       | peft_type                   | 微调类型               | LORA                |
|                       | task_type                   | 任务类型               | CAUSAL_LM           |
|                       | r                           | LoRA 矩阵的秩          | 8                   |
|                       | lora_alpha                  | LoRA 的 alpha 值       | 32                  |
|                       | lora_dropout                | LoRA 的 dropout 率     | 0.1                 |



### 2.4 开始微调

如果数据量比较少的话，比如少于 50 行，注意这一行，会报数组越界，修改小一点即可。

```python
eval_dataset=val_dataset.select(list(range(50))),
```

微调脚本用的是 `finetune_hf.py`：

1. 第一个参数是训练数据集所在目录，此处值是 data；
2. 第二个参数是模型所在目录，此处值是 `./model`；
3. 第三个参数是微调配置，此处值是 `configs/lora.yaml`。

执行微调命令：

```python
python3 finetune_hf.py data ../model configs/lora.yaml
```

如果控制台输出下面这些内容，则说明微调开始了。

![](https://blog.images.bornforthis.cn/docs-images/sha256/f6/f6b0c186575c26af4c64386bcee5d1178f691d581768bb24aa631d13174553d7.png)

trainable params 指的是在模型训练过程中可以被优化或更新的参数数量。在深度学习模型中，这些参数通常是网络的权重和偏置。它们是可训练的，因为在训练过程中，通过反向传播算法这些参数会根据损失函数的梯度不断更新，以减小模型输出与真实标签之间的差异。通过调整 `lora.yaml` 配置文件里 `peft_config` 下面的参数 r 来改变可训练参数的数量，r 值越大，trainable params 越大。

我们这次微调 trainable params 为 1.9M（190 万），整个参数量是 6B（62 亿），训练比为 3%。

![](https://blog.images.bornforthis.cn/docs-images/sha256/ca/ca82e974e4b96deed1a58b311be7d99c221ee27a67bec97b4eeb4afbd2dea1f3.png)

这里有几个参数我来简单讲解下：

1. `loss`：损失函数衡量模型预测的输出与实际数据之间的差异或误差。在训练过程中，目标是最小化这个损失值，从而提高模型的准确性。
2. `grad_norm`（梯度范数）：在训练深度学习模型时，通过反向传播算法计算参数（如权重）的梯度，以便更新这些参数。梯度范数是这些梯度向量的大小或长度，它提供了关于参数更新幅度的信息。如果梯度范数非常大，可能表示模型在训练过程中遇到了梯度爆炸问题；如果梯度范数太小，可能表示存在梯度消失问题。
3. `learning_rate`（学习率）：学习率是一个控制参数更新幅度的超参数。在优化算法中，学习率决定了在反向传播期间参数更新的步长大小。太高的学习率可能导致训练过程不稳定，而太低的学习率可能导致训练进展缓慢或陷入局部最小值。
4. `epoch`（周期）：一个 epoch 指的是训练算法在整个训练数据集上的一次完整遍历。通常需要多个 epochs 来训练模型，以确保模型能够充分学习数据集中的模式。每个 epoch 后，通常会评估模型在验证集上的表现，以监控和调整训练过程。

#### 2.4.1 报错情况

如果你运行微调出现：`OutOfMemoryError: CUDA out of memory. Tried to allocate 296.00 MiB.`，此时最简单的两种方法则是：

1. 方法一：将 `per_device_train_batch_size: 1` 设置为 2 或 1；「我个人使用这个方法」
2. 方法二：买更好的显卡，显存要大一些；

### 2.5 验证

等待微调结束，就可以进行验证了，官方 demo 提供了验证脚本，执行如下命令：

```python
python3 inference_hf.py output/checkpoint-3000/ --prompt "xxxxxxxxxxxx"
```

`output/checkpoint-3000` 是指新生成的权重，模型启动的时候会将原模型和新权重全部加载，然后进行推理。`–prompt` 是输入的提示。

下面是一组微调前后的对比问答，我们对比着来看一下。

#### 2.5.1 「微调前」

User：不交房电费多出由谁承担？法律法规第几条

ChatGLM：这个问题先要明确是哪一种房屋。如果是商业用房，交房后产生的费用一般是由开发商来处理的；如果是住宅用电，那么就属于个人日常用水产生的费用了。如果是因为开发商的过错造成，可以要求开发商进行赔偿，反之也是一样。建议查阅合同以及相关法律条文，也可以向当地的水管公司或者开发商进行咨询。

#### 2.5.2 「微调后」

User：不交房电费多出由谁承担？法律法规第几条？

ChatGLM：协商解决，协商不成可诉讼。

我们的微调数据集中有下面这条内容：

```python
{"conversations": [{"role": "user", "content": "不交房电费多出由谁承担？法律法规第几条？"}, {"role": "assistant", "content": "按照约定处理，协商不成可以委托律师处理。"}]}
```

部分回答效果是比较明显的。

当然，这里只是通过快速搭建一个 demo 向你展示 Lora 微调的细节。实际生产过程中，需要考虑的事情比较多，比如训练轮数、并行数、微调效果比对等一系列问题，需要我们根据实际情况进行调整。

当微调完成，我们验证后得知整体效果满足一定的百分比，那我们就认为这个微调是有效的，可以对外服务。
