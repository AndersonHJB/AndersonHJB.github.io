---
title: GenAI with Python：Build Agents from Scratch (Complete Tutorial)
date: 2025-03-04 18:18:02
author: AI悦创
isOriginal: true
icon: blog
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

> with Ollama, LangChain, LangGraph (No GPU, No APIKEY)

![](https://blog.images.bornforthis.cn/docs-images/sha256/66/668b74a71cd6c3d6ec84af9d107f9d8d4c3400755b952cd48fd676f74e629da9.jpeg)

## Intro

**Prompt Engineering** is the practice of designing and refining prompts (text inputs) to enhance the behavior of Large Language Models (LLMs). The goal is to get the desired responses from the model by carefully crafting the instructions. The most used prompting techniques are:

- **Chain-of-Thought:** involves generating a step-by-step reasoning process to reach a conclusion. The model is pushed to “think out loud” by explicitly laying out the logical steps that lead to the final answer.
- **ReAct** **(Reason+Act):** combines reasoning with action. The model not only thinks through a problem but also takes actions based on its reasoning. So it’s more interactive as the model alternates between reasoning steps and actions, refining its approach iteratively. Basically, it’s a loop of “thought”, “action”, “observation”.

> Let’s make an example: imagine asking an AI to “find the best laptop under $1000”.
>
> - **Normal Answer**: “Lenovo Thinkpad”.
>
> - **Chain-of-Thought Answer**: “I need to consider factors like performance, battery life, and build quality. Then, I would check which laptops are priced under $1000. According to my knoweldge base, the Lenovo Thinkpad is the best”.
>
> - **ReAct Answer**: Same as the Chain-of-Thought Answer + the Action of performing a web-search for “best laptops under $1000 in 2024” and analyze the results (which might not be “Lenovo Thinkpad”).

Agents are created using the ReAct technique, so the main difference with LLMs is the **ability to take action**. Agents are AI systems designed to process sequential reasoning, with the option of executing external tools (i.e. database query, web search) in case the LLM’s general-purpose knowledge isn’t enough. To put it simply, a normal AI Chatbot generates random text when it doesn’t know how to answer a question, but an Agent activates its tools to fill the gap and give a specific response.

In this tutorial, I’m going to build from scratch a multi-agent system with human-in-the-loop. I will present some useful Python code that can be easily applied in other similar cases (just copy, paste, run) and walk through every line of code with comments so that you can replicate this example (link to the full code below).

[https://github.com/AndersonHJB/BornforthisData](https://github.com/AndersonHJB/BornforthisData)

In particular, I will go through:

- **Setup** of the env and the LLM
- **Tools** with *LangChain*
- **Decision Making** with *Ollama*
- **Agent Structure** with *Pydantic*
- **Graph Workflow** with *LangGraph*
- **Multi-Agent & Human-in-the-Loop**

## Setup

At the moment, there are 2 libraries for LLMs and Agents that are trying to become the main framework in the market:

- [*LangChain* ](https://www.langchain.com/)— **ideal for building large-scale LLM-powered apps that require complex interactions and workflows**. It provides a comprehensive set of tools, focusing on creating complex workflows. It’s based on a “chain of components”, allowing different processing steps, where each step can involve different LLMs. *LangChain* has a specific module for complex multi-Agent systems: [*LangGraph*](https://www.langchain.com/langgraph)
- [*LLamaIndex* ](https://docs.llamaindex.ai/en/stable/)— **suited for applications that prioritize search and retrieval capabilities, particularly for large datasets**. It focuses on ingesting, structuring, and accessing domain-specific data in a way that is optimized for consumption by LLMs. It is designed for speed and accuracy in data retrieval, making it suitable for applications that require quick access to large volumes of data. Also *LlamaIndex* has its Agents module: [*Llama-Agents*](https://github.com/run-llama/llama_deploy)

I shall use the former as it’s more flexible. By installing *LangChain* (`pip install langchain`) you will gain access to all the [modules](https://python.langchain.com/v0.2/docs/concepts/).

1. *langchain:* the main package containing chains, Agents, and retrieval strategies
2. *langchain-core:* has the base abstractions (like LLMs, vector stores, retrievers) used in *langchain* package
3. *langchain-community:* third-party integrations that are maintained by the community
4. *langchain-experimental*: containing dangerous stuff (i.e. tools allowing Agents to execute code)
5. Partner packages like *langchain-openai*, *langchain-anthropic*
6. Tools for deployment like [*LangServe*](https://python.langchain.com/v0.2/docs/langserve/) and [*LangSmith*](https://www.langchain.com/langsmith)

Additionally, I’m going to install *LangGraph* (`pip install langgraph`) for building Agents using a node-edges style of workflow.

![](https://blog.images.bornforthis.cn/docs-images/sha256/9e/9e5f252b16a10742f419aa866feada629590486329e83859c28e9e50a86e4500.png)



I will run my LLM locally using [**Ollama**](https://ollama.com/) (`pip install ollama`) and I shall pick Meta’s [*Llama 3.1*](https://ollama.com/library/llama3.1) because it’s the smartest LLM that you can run without GPUs.

```python
import ollama

llm = "llama3.1"
q = '''who died on September 9, 2024?'''

res = ollama.chat(model=llm, 
                  messages=[{"role":"system", "content":""},
                            {"role":"user", "content":q}])
res
```

![](https://blog.images.bornforthis.cn/docs-images/sha256/03/033033e2d24b26fe57461b0c4b468fbd823be58babb07e5569a4edad83a3b342.png)

As expected, the LLM knowledge is limited to the date of its last training. Please note that there are **3 roles** in the interaction with a LLM chatbot:

- *“role”:“system”* — used to pass core instructions to the model on how the conversation should proceed
- *“role”:“user”*— used for user’s questions
- *“role”:“assistant”* — it’s the reply from the model

## Tools

One of the most common tools is the ability to **search the Internet**. In Python, the easiest way to do it is with the famous private browser [*DuckDuckGo*](https://pypi.org/project/duckduckgo-search/) (`pip install duckduckgo-search`).

Since I’m using *Ollama*, there are two options for creating a tool. First, with the standard decorator from *LangChain* (this is the most frequently used).

```python
from langchain_core.tools import tool
from langchain_community.tools import DuckDuckGoSearchRun

@tool("tool_browser")
def tool_browser(q: str) -> str:
    """Search on DuckDuckGo browser by passing the input `q`"""
    return DuckDuckGoSearchRun().run(q)

# test
print( tool_browser(q) )
```

![](https://blog.images.bornforthis.cn/docs-images/sha256/63/63b05f06d26283f953b90deaf95146cc7dd803a8a1c5d9bd46f7c0620a814946.png)

Second, by creating a normal function and turning it into an *Ollama* schema with [*Semantic Router*](https://github.com/aurelio-labs/semantic-router) (`pip install semantic-router`), a library to simplify tool-making.

```python
from semantic_router.utils.function_call import FunctionSchema

def browser(q:str) -> str:
    """Search on DuckDuckGo browser by passing the input `q`"""
    return DuckDuckGoSearchRun().run(q)

tool_browser = FunctionSchema(browser).to_ollama()
tool_browser
```

![](https://blog.images.bornforthis.cn/docs-images/sha256/0c/0ce6b7ca1b89ba1b68cab41dce12714ff36abd2c5ae0bb1c2aa9940717347de0.png)

Among the tools, we shall also include the **final answer**: after every question from the user, the Agent must decide whether to use a tool or give the final answer. Please note that the more specific you describe the answer structure, the better it works.

```python
@tool("final_answer")
def final_answer(text:str) -> str:
    """Returns a natural language response to the user by passing the input `text`. 
    You should provide as much context as possible and specify the source of the information.
    """
    return text
```

## Decision Making

We need to do some **Prompt Engineering** to define what the Agent must do and how.

````python
prompt = """
You know everything, you must answer every question from the user, you can use the list of tools provided to you.
Your goal is to provide the user with the best possible answer, including key information about the sources and tools used.

Note, when using a tool, you provide the tool name and the arguments to use in JSON format. 
For each call, you MUST ONLY use one tool AND the response format must ALWAYS be in the pattern:
```json
{"name":"<tool_name>", "parameters": {"<tool_input_key>":<tool_input_value>}}
```
Remember, do NOT use any tool with the same query more than once.
Remember, if the user doesn't ask a specific question, you MUST use the `final_answer` tool directly.

Every time the user asks a question, you take note of some keywords in the memory.
Every time you find some information related to the user's question, you take note of some keywords in the memory.

You should aim to collect information from a diverse range of sources before providing the answer to the user. 
Once you have collected plenty of information to answer the user's question use the `final_answer` tool.
"""
````

Using *Ollama*, we can test the decision-making process of the Agent right away. We need to tell the Agent what tools are available to use.

```python
dic_tools = {"tool_browser":tool_browser, 
             "final_answer":final_answer}

str_tools = "\n".join([str(n+1)+". `"+str(v.name)+"`: "+str(v.description) for n,v in enumerate(dic_tools.values())])

prompt_tools = f"You can use the following tools:\n{str_tools}"
print(prompt_tools)
```

![](https://blog.images.bornforthis.cn/docs-images/sha256/6a/6adc5e717ed1fd18188917ed360eb9858bab624e35b108a059e986537b1dc8d9.png)

The prompt and the tools, combined with the LLM, define the core of the Agent. At this point, our AI should be able to decide what to do. For instance, if I don’t ask any question, it should go directly for the final answer.

```python
# LLM deciding what tool to use
from pprint import pprint

llm_res = ollama.chat(
    model=llm,
    messages=[{"role":"system", "content":prompt+"\n"+prompt_tools},
              {"role":"user", "content":"hello"}
             ], format="json")

pprint(llm_res)
```

![](https://blog.images.bornforthis.cn/docs-images/sha256/31/31a1bf417d2c15547fee6a3ca09892f9eb42636f862c24f1ac6a178bde25f5ec.png)

Inversely, when I ask something specific, the Agent should use the web-search tool and generate the input query for it, based on my request.

```python
# LLM deciding what tool to use (output format = json)
llm_res = ollama.chat(
    model=llm,
    messages=[{"role":"system", "content":prompt+"\n"+prompt_tools},
              {"role":"user", "content":q}
             ], format="json")

llm_res["message"]["content"]
```

![](https://blog.images.bornforthis.cn/docs-images/sha256/fb/fbe12682084f083d2a8ebdd52cb391db3e596a1cb835c3d84db39a8035eddde7.png)

We can check how the Agent processes the result of the query, by passing it as the context for the LLM.

```python
# LLM with context
import json

tool_input = json.loads(llm_res["message"]["content"])["parameters"]["q"]

context = tool_browser(tool_input)
print("tool output:\n", context)

llm_output = ollama.chat(
    model=llm,
    messages=[{"role":"system", "content":"Give the most accurate answer using the folling information:\n"+context},
              {"role":"user", "content":q}
             ])

print("\nllm output:\n", llm_output["message"]["content"])
```

![](https://blog.images.bornforthis.cn/docs-images/sha256/74/74cba0d75f79d8e139d52d9319d900243d0b62e6b263feda66ffcb84dec5d756.png)



It’s confirmed that the core model works. But, sometimes LLMs can generate incorrect and inconsistent content (so called “hallucinations”), therefore it’s common practice to specify the data structure that the model must follow.

## Agent Structure

Generally, LLMs work with API calls, so both input and output must follow a specific **Data Structure**. In Python, the most widely used library for data validation is [*Pydantic*](https://docs.pydantic.dev/latest/): it makes sure the information your program uses is in the right format and has the right values.

Basically, the goal is to transform the LLM response, which is not “stable”, into an Agent response, a structured and validated object.

![](https://blog.images.bornforthis.cn/docs-images/sha256/eb/eb0407a7117a7f4337cd3084012f6cf6e38b947268e2ab37ab2c26db74979292.png)

To start, you create a class that describes the data you want, including its type and any rules it must follow. *Pydantic* checks if the data is correct, and if not, it gives you a clear error message. That is particularly useful because responses from the LLM can vary after each run.

```python
from pydantic import BaseModel #this is the standard class

# Taking for example the last LLM response, I want this structure:
# {tool_name: 'tool_browser', 
#  tool_input: {'q':'September 9 2024 deaths'}, 
#  tool_output: str( tool_browser({'q':'September 9 2024 deaths'})) }

class AgentRes(BaseModel):
    tool_name: str  #<--must be a string = 'tool_browser'
    tool_input: dict #<--must be a dictionary = {'q':'September 9 2024 deaths'}
    tool_output: str | None = None #can be a string or None, default = None
    
    @classmethod
    def from_llm(cls, res:dict): #<--return the class itself
        try:
            out = json.loads(res["message"]["content"])
            return cls(tool_name=out["name"], tool_input=out["parameters"])
        except Exception as e:
            print(f"Error from Ollama:\n{res}\n")
            raise e

# test
agent_res = AgentRes.from_llm(llm_res)
print("from\n", llm_res["message"]["content"], "\nto")
agent_res
```

![](https://blog.images.bornforthis.cn/docs-images/sha256/8f/8f4013e5245ed1eb3891119be51ebb4f9d10536ee6750f354906761e3faa2027.png)



The tool output can be added as such:

```python
# test the tool output
AgentRes(tool_name = "tool_browser", 
         tool_input = {'q':'September 9 2024 deaths'}, 
         tool_output = str( tool_browser({'q':'September 9 2024 deaths'})) )
```

![](https://blog.images.bornforthis.cn/docs-images/sha256/9e/9e61441566deba3ee111593337e2f261547daf6724f6ad17d349035e94a320a9.png)

The model can already understand if and when to use the tool, but we can make it even smarter by adding a **Memory System**. That shall include relevant information from the chat history and a reminder of the original request from the user.

```python
'''
Messages in Memory will have this structure:
[{'role':'assistant', 'content':'{"name":"final_answer", "parameters":{"text":"How can I assist you today?"}}'},
 {'role':'user', 'content':None}]
'''

def save_memory(lst_res:list[AgentRes], user_q:str) -> list:
    ## create
    memory = []
    for res in [res for res in lst_res if res.tool_output is not None]:
        memory.extend([
            ### assistant message
            {"role": "assistant", "content": json.dumps({"name":res.tool_name, "parameters":res.tool_input})},
            ### user message
            {"role":"user", "content":res.tool_output}
        ])
    
    ## add a reminder of the original goal
    if memory:
        memory += [{"role":"user", "content":(f'''
                This is just a reminder that my original query was `{user_q}`.
                Only answer to the original query, and nothing else, but use the information I gave you. 
                Provide as much information as possible when you use the `final_answer` tool.
                ''')}]
    return memory
```

As for the chat history, I’m going to add also a piece of a simulated conversation, just to make sure the Agent understands what I want.

```python
history=[{"role": "user", "content": "hi there, how are you?"},
         {"role": "assistant", "content": "I'm good, thanks!"},
         {"role": "user", "content": "I have a question"},
         {"role": "assistant", "content": "tell me"}]
```

Now, we can put it all together to **create the Agent**.

```python
def run_agent(user_q:str, chat_history:list[dict], lst_res:list[AgentRes], lst_tools:list) -> AgentRes:
    ## start memory
    memory = save_memory(lst_res=lst_res, user_q=user_q)
    
    ## track used tools
    if memory:
        tools_used = [res.tool_name for res in lst_res]
        if len(tools_used) >= len(lst_tools):
            memory[-1]["content"] = "You must now use the `final_answer` tool."
        
    ## messages
    messages = [{"role":"system", "content":prompt+"\n"+prompt_tools},
                *chat_history,
                {"role":"user", "content":user_q},
                *memory]
    pprint(messages) #<--print to see prompt + tools + chat_history
    
    ## output
    llm_res = ollama.chat(model=llm, messages=messages, format="json")
    return AgentRes.from_llm(llm_res)


# test
agent_res = run_agent(user_q=q, chat_history=chat_history, lst_res=[], lst_tools=dic_tools.keys())
print("\nagent_res:", agent_res)
```

![](https://blog.images.bornforthis.cn/docs-images/sha256/99/9992648933f03f45ef803de9f40e83ddd43d720b0fb95db4df7b5aa5c23d0dc4.png)

As you can see, our Agent is started up with the prompt + the available tools + the chat history.

## Graph Workflow

*LangGraph* is an orchestration framework that enables more control over the Agent workflows. One of the key concepts is the **State**: each execution creates a dictionary that is passed between nodes in the graph and gets updated every time with the output of the node.

We define the initial state using [*Typing*](https://docs.python.org/3/library/typing.html#), the Python library to play with data types.

```python
import typing

class State(typing.TypedDict):
    user_q: str
    chat_history: list 
    lst_res: list[AgentRes]
    output: dict

# test
state = State({"user_q":q, "chat_history":chat_history, "lst_res":[agent_res], "output":{}})
state
```

![](https://blog.images.bornforthis.cn/docs-images/sha256/a9/a9ce49ae8e78407c189fdf27f113772d59c8a36d310b0a53c6c0500715e7c65b.png)

For each node (Agent and Tools) and each edge (action), we need to write a function to define the model behavior. Let’s start with the **Agent node** (for now just one):

```python
# Agent
def node_agent(state):
    print("--- node_agent ---")
    agent_res = run_agent(prompt=prompt, 
                          dic_tools={k:v for k,v in dic_tools.items() if k in ["tool_browser","final_answer"]},
                          user_q=state["user_q"], 
                          chat_history=state["chat_history"], 
                          lst_res=state["lst_res"])
    print(agent_res)
    return {"lst_res":[agent_res]} #<--must return a the list of agent_res

# test
node_agent(state)
```

![](https://blog.images.bornforthis.cn/docs-images/sha256/b1/b122f713f48d78c70d50190ec76308568ba2670d86c8268366e65df6d683ede2.png)



Then, we do the same for the **Tool nodes**:

```python
def node_tool(state):
    print("--- node_tool ---")
    res = state["lst_res"][-1]
    print(f"{res.tool_name}(input={res.tool_input})")
    
    agent_res = AgentRes(tool_name=res.tool_name, 
                         tool_input=res.tool_input, 
                         tool_output=str(dic_tools[res.tool_name](res.tool_input)) )
    
    return {"output":agent_res} if res.tool_name == "final_answer" else {"lst_res":[agent_res]}

# test
node_tool(state)
```

![](https://blog.images.bornforthis.cn/docs-images/sha256/0d/0db63728de51834aba55b191ce70a5bc3d46305b8931c6e33328a953dc26fbf5.png)



There are two types of edges:

- **Conditional edge —** call a function to determine which node to go to next (for example, from the Agent to decide whether to use the tool or not)
- **Normal edge —** which goes directly from one node to the next (for example, from the output of the tool back to the Agent)

```python
def conditional_edges(state):
    print("--- conditional_edges ---")
    last_res = state["lst_res"][-1]
    next_node = last_res.tool_name if isinstance(state["lst_res"], list) else "final_answer"
    print("next_node:", next_node)
    return next_node #<--must return the next node to go

# test
conditional_edges(state)
```

![](https://blog.images.bornforthis.cn/docs-images/sha256/04/0446ec024169be28ece7a0589e9404c0458f332d7b67ccaeb3204a3f210e3270.png)



Finally, we can create the workflow and visualize the graph.

```python
from langgraph.graph import StateGraph, END

## start the graph
workflow = StateGraph(State)

## add Agent node
workflow.add_node(node="Agent", action=node_agent) 
workflow.set_entry_point(key="Agent")  #<--user query

## add Tools nodes
for k in dic_tools.keys():
    workflow.add_node(node=k, action=node_tool)

## conditional_edges from Agent
workflow.add_conditional_edges(source="Agent", path=conditional_edges)

## normal_edges to Agent
for k in dic_tools.keys():
    if k != "final_answer":
        workflow.add_edge(start_key=k, end_key="Agent")

## end the graph
workflow.add_edge(start_key="final_answer", end_key=END)
g = workflow.compile()

## plot
from IPython.display import Image, display
from langchain_core.runnables.graph import MermaidDrawMethod

display(Image(
    g.get_graph().draw_mermaid_png(draw_method=MermaidDrawMethod.API)
))
```

![](https://blog.images.bornforthis.cn/docs-images/sha256/34/34ce1d845124d7825033c130294667fe5495a2661242317804d793fda7ff65c0.png)

When we switch on the workflow, the initial state must be passed as input. You can **run the Agent** in two different ways:

```python
state = {'user_q':q,
         'chat_history':chat_history, 
         'lst_res':[], 
         'output':{} }

## 1) invoke function
out = g.invoke(input=state)
agent_out = out['output'].tool_output

## 2) stream function
steps = g.stream(input=state) 
for n,step in enumerate(steps):
    print("--- step", n, "---")
    print(step)
```

![](https://blog.images.bornforthis.cn/docs-images/sha256/4d/4dcdc4d1936880596340677834a1bdd0cbc50ce7c124517e37ac4ef6ecc231d3.png)

That completes the warm-up. Now, the real game can start.

## Multi-Agent & Human-in-the-Loop

A single Agent can usually operate effectively using a tool, but it can be less effective at using many tools at the same time. One way to tackle complicated tasks is through a “divide-and-conquer” approach: create a specialized Agent for each task, so a **Multi-Agent workflow**.

Moreover, real-world workflows often need human feedback. **Human-in-the-Loop** is a concept where human operators actively participate in the decision-making process alongside AI systems, acting like any other tools (often reffered as *“human tool”*). This approach combines the power of AI, such as speed and efficiency, with the strengths of human judgment, such as intuition and the ability to understand complex contexts.

This is the workflow I want:

1. the user asks a question and the first Agent uses its tool to give the final answer (exactly what we have done so far)
2. after the final answer, the system asks the user whether the returned information is sufficient or not (human-in-the-loop)
3. if not, a second Agent activates to use its tool and enrich the final answer (multi-Agent collaboration)

![](https://blog.images.bornforthis.cn/docs-images/sha256/64/643611ff489353bb6375e1df2a30386ae0fab2b8b3bd2a45f1eeed0acb515e2a.gif)

The **second Agent** shall have a new tool: *Wikipedia*.

```python
from langchain_community.tools import WikipediaQueryRun
from langchain_community.utilities import WikipediaAPIWrapper

@tool("tool_wikipedia")
def tool_wikipedia(q:str) -> str:
    """Search on Wikipedia by passing the input `q`.
       The input `q` must be short keywords, not a long text"""
    return WikipediaQueryRun(api_wrapper=WikipediaAPIWrapper()).run(q)

# test
print( tool_wikipedia(agent_out) )

# update the tools
dic_tools = {"tool_browser":tool_browser,
             "final_answer":final_answer,
             "tool_wikipedia":tool_wikipedia}
```

![](https://blog.images.bornforthis.cn/docs-images/sha256/7a/7ac964c4e3aa386619d8bd25fab32f0f54c706fa66e8d2925972ade7c2801eb5.png)

Just like before, the node for the new Agent requires a function to run where the prompt and tools are specified.

````python
prompt_2 = """
Your goal is to use the `tool_wikipedia` ONLY ONCE to enrich the information already available.
Note, when using a tool, you provide the tool name and the arguments to use in JSON format. 
For each call, you MUST ONLY use one tool AND the response format must ALWAYS be in the pattern:
```json
{"name":"<tool_name>", "parameters": {"<tool_input_key>":<tool_input_value>}}
```
Once you have collected plenty of information to answer the user's question use the `final_answer` tool.
"""

def node_agent_2(state):
    print("--- node_agent 2 ---")
    agent_res = run_agent(prompt=prompt_2, 
                          dic_tools={k:v for k,v in dic_tools.items() if k in ["tool_wikipedia","final_answer"]},
                          user_q=state["output"].tool_output, #<--changed user_q to the last output
                          chat_history=state["chat_history"], 
                          lst_res=state["lst_res"])
    print(agent_res)
    return {"lst_res":[agent_res]}
````

Regarding the **Human-in-the-Loop**, we need to create a “fake” node and the logic for processing the user feedback.

```python
# Node
def human_node(state):
    pass

# Conditional Edges
def human_edges(state):
    print("--- human ---")
    user_feedback = input("Should I continue? [Yes/No] --> ")
    next_node = "Agent2" if user_feedback.lower()[0] == "y" else END
    print("next_node:", next_node)
    return next_node

# test
human_edges(state)

```

![](https://blog.images.bornforthis.cn/docs-images/sha256/6b/6b4657dcbfc52e730acc50925b02b46fb7af38e7a3a1b117cdf70272a82235ac.gif)

Finally, we shall build the **new graph**.

```python
## start the graph
workflow = StateGraph(State)

########################## Agent 1 ##########################
## add Agent node
workflow.add_node(node="Agent1", action=node_agent) 
workflow.set_entry_point(key="Agent1") #<--user query

## add Tools nodes
workflow.add_node(node="tool_browser", action=node_tool)
workflow.add_node(node="final_answer", action=node_tool)

## normal_edges to Agent
workflow.add_edge(start_key="tool_browser", end_key="Agent1")

## conditional_edges from Agent
workflow.add_conditional_edges(source="Agent1", path=conditional_edges)

########################## Human ##########################
## add Human node
workflow.add_node(node="Human", action=human_node)

## conditional_edges from Human
workflow.add_conditional_edges(source="final_answer", path=human_edges)

########################## Agent 2 ##########################
## add Agent node
workflow.add_node(node="Agent2", action=node_agent_2) 

## add Tools nodes
workflow.add_node(node="tool_wikipedia", action=node_tool)

## normal_edges to Agent
workflow.add_edge(start_key="tool_wikipedia", end_key="Agent2")

## conditional_edges from Agent
workflow.add_conditional_edges(source="Agent2", path=conditional_edges)

########################## End ##########################
## end the graph
g2 = workflow.compile()

## plot
display(Image(
    g2.get_graph().draw_mermaid_png(draw_method=MermaidDrawMethod.API)
))
```

![](https://blog.images.bornforthis.cn/docs-images/sha256/e2/e29bfa39268ff14f5d9d6251cf350a6691ddaabddbb5755f490fb8efa3e5314f.png)



As usual, you can run the workflow by passing an input state.

```python
g2.invoke(input=state) #<--passing the same input state as before
```

![](https://blog.images.bornforthis.cn/docs-images/sha256/1c/1c5c3bd3465e6ad86fda817b372d76f29853c8d598d9f5c651ee3cb170a742c6.gif)



## Conclusion

This article has been a tutorial to demonstrate **how to build Agents from scratch.** Using *LangChain* and *Ollama,* we created the tools and the Agents, then we defined the workflow logic with *LangGraph*, and finally we set up a multi-Agent system that takes human input as well.

In conclusion, it must be said that the GenAI community is rapidly evolving, with libraries such as *Langchain* and *LlamaIndex* experiencing swift changes. This is largely due to the absence of a market leader in the LLM space, allowing for new tools and platforms to emerge.

I hope you enjoyed it! Feel free to contact me for questions and feedback or just to share your interesting projects.







::: details

> 使用 Ollama、LangChain、LangGraph （无 GPU，无 APIKEY）

![](https://blog.images.bornforthis.cn/docs-images/sha256/66/668b74a71cd6c3d6ec84af9d107f9d8d4c3400755b952cd48fd676f74e629da9.jpeg)

## 简介

**提示工程**（Prompt Engineering）是设计和优化提示（文本输入）以提升大型语言模型（LLMs）表现的实践。其目标是通过精心设计指令，使模型输出期望的答案。最常用的提示技术包括：

- **思维链（Chain-of-Thought）**：通过生成逐步的推理过程来得出结论。模型被引导“开口思考”，明确展示通向最终答案的逻辑步骤。
- **ReAct（Reason+Act）**：将推理与行动相结合。模型不仅对问题进行思考，还会基于推理采取相应的行动，从而实现更交互的过程——在推理步骤与行动之间交替迭代。基本上，这是一个“思考”、“行动”、“观察”的循环。

> 举个例子：假设让 AI “寻找 1000 美元以下的最佳笔记本电脑”。
>
> - **普通回答**： “联想 Thinkpad”。
>
> - **思维链回答**： “我需要考虑性能、电池续航和做工等因素。接着，我会查看哪些笔记本电脑的价格低于 1000 美元。根据我的知识库，联想 Thinkpad 是最佳选择”。
>
> - **ReAct 回答**： 与思维链回答相同，再加上执行网络搜索“2024 年 1000 美元以下最佳笔记本电脑”并分析结果的动作（结果可能不会是“联想 Thinkpad”）。

代理（Agent）是基于 ReAct 技术创建的，因此与传统 LLM 的主要区别在于其 **具备采取行动的能力**。代理是一种能够处理连续推理并在 LLM 通用知识不足时执行外部工具（例如数据库查询、网络搜索）的 AI 系统。简单来说，当普通聊天机器人在不知道如何回答问题时会生成随机文本，而代理会激活其工具来填补信息空缺，给出更具体的答案。

在本教程中，我将从零开始构建一个多代理系统，并引入“人工参与”（Human-in-the-Loop）的概念。我会展示一些有用的 Python 代码，这些代码可以轻松应用于其他类似场景（复制、粘贴、运行即可），并逐行讲解代码，帮助你复现这一示例（完整代码见下方链接）。

[https://github.com/AndersonHJB/BornforthisData](https://github.com/AndersonHJB/BornforthisData)

具体来说，我将涵盖以下内容：

- **环境与 LLM 的搭建**
- 使用 *LangChain* 构建工具
- 使用 *Ollama* 进行决策
- 使用 *Pydantic* 构建代理结构
- 使用 *LangGraph* 构建图形工作流
- 多代理协作与人工参与

## 环境搭建

目前市场上有两个主要的 LLM 及代理库，它们正试图成为主流框架：

- [*LangChain*](https://www.langchain.com/) —— **非常适合构建需要复杂交互和工作流的大规模 LLM 应用**。它提供了一整套工具，专注于构建复杂工作流。其基于“组件链”理念，允许不同处理步骤，每个步骤都可涉及不同的 LLM。此外，*LangChain* 还为复杂的多代理系统提供了专门的模块：[*LangGraph*](https://www.langchain.com/langgraph)
- [*LLamaIndex*](https://docs.llamaindex.ai/en/stable/) —— **适用于那些更侧重搜索和检索能力的应用，尤其是针对大数据集**。它侧重于摄取、结构化以及访问特定领域的数据，从而优化 LLM 对数据的消费。其设计目标是高速且精准的数据检索，适合需要快速访问大量数据的应用。同时，*LlamaIndex* 也提供了自己的代理模块：[*Llama-Agents*](https://github.com/run-llama/llama_deploy)

我将采用前者，因为它更灵活。通过安装 *LangChain*（`pip install langchain`）你可以使用所有 [模块](https://python.langchain.com/v0.2/docs/concepts/)。

1. *langchain:* 包含链、代理以及检索策略的主包  
2. *langchain-core:* 包含 *langchain* 使用的基本抽象（如 LLM、向量存储、检索器）  
3. *langchain-community:* 由社区维护的第三方集成  
4. *langchain-experimental:* 包含较为“危险”的内容（例如允许代理执行代码的工具）  
5. 合作包如 *langchain-openai*、*langchain-anthropic*  
6. 部署工具如 [*LangServe*](https://python.langchain.com/v0.2/docs/langserve/) 和 [*LangSmith*](https://www.langchain.com/langsmith)

另外，我还会安装 *LangGraph*（`pip install langgraph`）来构建基于节点—边工作流的代理。

![](https://blog.images.bornforthis.cn/docs-images/sha256/9e/9e5f252b16a10742f419aa866feada629590486329e83859c28e9e50a86e4500.png)

我将使用 [**Ollama**](https://ollama.com/) 在本地运行 LLM（`pip install ollama`），并选择 Meta 的 [*Llama 3.1*](https://ollama.com/library/llama3.1)，因为这是在无 GPU 条件下可运行的最智能 LLM。

```python
import ollama

llm = "llama3.1"
q = '''who died on September 9, 2024?'''

res = ollama.chat(model=llm, 
                  messages=[{"role":"system", "content":""},
                            {"role":"user", "content":q}])
res
```

![img](https://blog.images.bornforthis.cn/docs-images/sha256/03/033033e2d24b26fe57461b0c4b468fbd823be58babb07e5569a4edad83a3b342.png)

正如预期，LLM 的知识仅限于其最近一次训练的日期。请注意，与 LLM 聊天机器人的交互包含以下 **3 种角色**：

- *“role”:“system”* —— 用于向模型传递如何进行对话的核心指令
- *“role”:“user”* —— 用于传递用户提问
- *“role”:“assistant”* —— 模型的回复

## 工具

最常见的工具之一是 **搜索互联网** 的能力。在 Python 中，最简单的实现方式是使用著名的私有浏览器 [*DuckDuckGo*](https://pypi.org/project/duckduckgo-search/)（`pip install duckduckgo-search`）。

由于我使用的是 *Ollama*，创建工具有两种方式。第一种方式是使用 *LangChain* 提供的标准装饰器（这是最常用的方法）。

```python
from langchain_core.tools import tool
from langchain_community.tools import DuckDuckGoSearchRun

@tool("tool_browser")
def tool_browser(q: str) -> str:
    """通过传递输入 `q` 使用 DuckDuckGo 浏览器进行搜索"""
    return DuckDuckGoSearchRun().run(q)

# 测试
print( tool_browser(q) )
```

![img](https://blog.images.bornforthis.cn/docs-images/sha256/63/63b05f06d26283f953b90deaf95146cc7dd803a8a1c5d9bd46f7c0620a814946.png)

第二种方式是创建一个普通函数，并通过 [*Semantic Router*](https://github.com/aurelio-labs/semantic-router)（`pip install semantic-router`）将其转换为 Ollama 模式下的 schema，这个库简化了工具的制作过程。

```python
from semantic_router.utils.function_call import FunctionSchema

def browser(q:str) -> str:
    """通过传递输入 `q` 使用 DuckDuckGo 浏览器进行搜索"""
    return DuckDuckGoSearchRun().run(q)

tool_browser = FunctionSchema(browser).to_ollama()
tool_browser
```

![img](https://blog.images.bornforthis.cn/docs-images/sha256/0c/0ce6b7ca1b89ba1b68cab41dce12714ff36abd2c5ae0bb1c2aa9940717347de0.png)

在众多工具中，我们还将包含 **最终答案** 工具：在每次用户提问后，代理必须决定是使用工具还是直接给出最终答案。请注意，描述答案结构越具体，效果越好。

```python
@tool("final_answer")
def final_answer(text:str) -> str:
    """通过传递输入 `text` 返回对用户的自然语言回复。  
    你应尽可能提供详细上下文，并注明信息来源。
    """
    return text
```

## 决策过程

我们需要进行一些 **提示工程** 来定义代理需要执行的操作和方式。

~~~python
prompt = """
你无所不知，必须回答用户的每一个问题，你可以使用提供的工具列表。
你的目标是为用户提供最佳答案，包括关于信息来源和所用工具的关键信息。

注意，当使用工具时，你需要提供工具名称以及以 JSON 格式传递的参数。  
每次调用时，你**只能使用一个工具**，并且响应格式必须始终遵循如下模式：
```json
{"name":"<tool_name>", "parameters": {"<tool_input_key>":<tool_input_value>}}
```
请记住，不要对同一查询重复使用同一工具。  
如果用户没有提出具体问题，你必须直接使用 `final_answer` 工具。

每次用户提问时，你都要记录一些关键词。  
每当你发现与用户问题相关的信息时，也要记录下相应的关键词。

在收集到足够的信息以回答用户问题之前，请努力从多个来源获取信息。  
一旦你收集到足够的信息，就使用 `final_answer` 工具给出答案。
"""
~~~

使用 *Ollama*，我们可以立刻测试代理的决策过程。我们需要告知代理哪些工具可供使用。

```python
dic_tools = {"tool_browser":tool_browser, 
             "final_answer":final_answer}

str_tools = "\n".join([str(n+1)+". `"+str(v.name)+"`: "+str(v.description) for n,v in enumerate(dic_tools.values())])

prompt_tools = f"你可以使用以下工具：\n{str_tools}"
print(prompt_tools)
```

![img](https://blog.images.bornforthis.cn/docs-images/sha256/6a/6adc5e717ed1fd18188917ed360eb9858bab624e35b108a059e986537b1dc8d9.png)

提示、工具和 LLM 共同构成了代理的核心。此时，如果我没有提出具体问题，AI 应该直接使用 `final_answer` 工具给出回答。

```python
# LLM 决定使用哪个工具
from pprint import pprint

llm_res = ollama.chat(
    model=llm,
    messages=[{"role":"system", "content":prompt+"\n"+prompt_tools},
              {"role":"user", "content":"hello"}
             ], format="json")

pprint(llm_res)
```

![img](https://blog.images.bornforthis.cn/docs-images/sha256/31/31a1bf417d2c15547fee6a3ca09892f9eb42636f862c24f1ac6a178bde25f5ec.png)

相反，当我提出具体问题时，代理应使用网络搜索工具，并基于我的请求生成查询输入。

```python
# LLM 决定使用哪个工具（输出格式为 JSON）
llm_res = ollama.chat(
    model=llm,
    messages=[{"role":"system", "content":prompt+"\n"+prompt_tools},
              {"role":"user", "content":q}
             ], format="json")

llm_res["message"]["content"]
```

![img](https://blog.images.bornforthis.cn/docs-images/sha256/fb/fbe12682084f083d2a8ebdd52cb391db3e596a1cb835c3d84db39a8035eddde7.png)

我们可以测试代理如何处理查询结果，将其作为上下文传递给 LLM。

```python
# 带上下文的 LLM
import json

tool_input = json.loads(llm_res["message"]["content"])["parameters"]["q"]

context = tool_browser(tool_input)
print("工具输出:\n", context)

llm_output = ollama.chat(
    model=llm,
    messages=[{"role":"system", "content":"请利用以下信息给出最准确的答案：\n"+context},
              {"role":"user", "content":q}
             ])

print("\nLLM 输出:\n", llm_output["message"]["content"])
```

![img](https://blog.images.bornforthis.cn/docs-images/sha256/74/74cba0d75f79d8e139d52d9319d900243d0b62e6b263feda66ffcb84dec5d756.png)

可以看到，核心模型运作正常。但有时 LLM 会生成错误或不一致的信息（所谓“幻觉”），因此通常需要指定模型必须遵循的数据结构。

## 代理结构

通常，LLM 通过 API 调用工作，因此输入与输出都必须遵循特定的 **数据结构**。在 Python 中，最常用的数据验证库是 [*Pydantic*](https://docs.pydantic.dev/latest/)，它能确保程序使用的信息格式正确且数值符合预期。

基本上，目标是将 LLM 的响应（不稳定的）转换成结构化且经过验证的代理响应对象。

![img](https://blog.images.bornforthis.cn/docs-images/sha256/eb/eb0407a7117a7f4337cd3084012f6cf6e38b947268e2ab37ab2c26db74979292.png)

首先，你需要创建一个类来描述你所期望的数据，包括数据类型和必须遵循的规则。*Pydantic* 会检查数据是否正确，如果不正确，会提供明确的错误信息。这对于应对 LLM 每次运行时响应的变化非常有用。

```python
from pydantic import BaseModel # 这是标准类

# 以最后一个 LLM 响应为例，我希望数据结构如下：
# {tool_name: 'tool_browser', 
#  tool_input: {'q':'September 9 2024 deaths'}, 
#  tool_output: str( tool_browser({'q':'September 9 2024 deaths'})) }

class AgentRes(BaseModel):
    tool_name: str  # <-- 必须为字符串，例如 'tool_browser'
    tool_input: dict # <-- 必须为字典，例如 {'q':'September 9 2024 deaths'}
    tool_output: str | None = None # 可以为字符串或 None，默认值为 None
    
    @classmethod
    def from_llm(cls, res:dict): # <-- 返回类实例
        try:
            out = json.loads(res["message"]["content"])
            return cls(tool_name=out["name"], tool_input=out["parameters"])
        except Exception as e:
            print(f"Ollama 返回错误:\n{res}\n")
            raise e

# 测试
agent_res = AgentRes.from_llm(llm_res)
print("从\n", llm_res["message"]["content"], "\n转换为")
agent_res
```

![img](https://blog.images.bornforthis.cn/docs-images/sha256/8f/8f4013e5245ed1eb3891119be51ebb4f9d10536ee6750f354906761e3faa2027.png)

工具输出可以这样添加：

```python
# 测试工具输出
AgentRes(tool_name = "tool_browser", 
         tool_input = {'q':'September 9 2024 deaths'}, 
         tool_output = str( tool_browser({'q':'September 9 2024 deaths'})) )
```

![img](https://blog.images.bornforthis.cn/docs-images/sha256/9e/9e61441566deba3ee111593337e2f261547daf6724f6ad17d349035e94a320a9.png)

模型已经能够判断何时使用工具，但我们可以通过加入 **记忆系统** 让它变得更智能。记忆系统会包含聊天历史中与用户问题相关的信息以及原始请求的提醒。

```python
'''
记忆中的消息结构如下：
[{'role':'assistant', 'content':'{"name":"final_answer", "parameters":{"text":"How can I assist you today?"}}'},
 {'role':'user', 'content':None}]
'''

def save_memory(lst_res:list[AgentRes], user_q:str) -> list:
    ## 创建记忆
    memory = []
    for res in [res for res in lst_res if res.tool_output is not None]:
        memory.extend([
            ### 助手消息
            {"role": "assistant", "content": json.dumps({"name":res.tool_name, "parameters":res.tool_input})},
            ### 用户消息
            {"role":"user", "content":res.tool_output}
        ])
    
    ## 添加原始查询的提醒
    if memory:
        memory += [{"role":"user", "content":(f'''
                这只是一个提醒：我的原始查询是 `{user_q}`。
                请仅就原始查询作答，利用我提供的信息，并在使用 `final_answer` 工具时尽可能提供详细信息。
                ''')}]
    return memory
```

对于聊天历史，我还会添加一段模拟对话，以确保代理理解我的意图。

```python
history=[{"role": "user", "content": "hi there, how are you?"},
         {"role": "assistant", "content": "I'm good, thanks!"},
         {"role": "user", "content": "I have a question"},
         {"role": "assistant", "content": "tell me"}]
```

现在，我们可以将所有内容组合起来 **创建代理**。

```python
def run_agent(user_q:str, chat_history:list[dict], lst_res:list[AgentRes], lst_tools:list) -> AgentRes:
    ## 初始化记忆
    memory = save_memory(lst_res=lst_res, user_q=user_q)
    
    ## 跟踪已使用的工具
    if memory:
        tools_used = [res.tool_name for res in lst_res]
        if len(tools_used) >= len(lst_tools):
            memory[-1]["content"] = "你现在必须使用 `final_answer` 工具。"
        
    ## 消息列表
    messages = [{"role":"system", "content":prompt+"\n"+prompt_tools},
                *chat_history,
                {"role":"user", "content":user_q},
                *memory]
    pprint(messages) # <-- 打印以查看 prompt + 工具 + 聊天历史
    
    ## 输出
    llm_res = ollama.chat(model=llm, messages=messages, format="json")
    return AgentRes.from_llm(llm_res)


# 测试
agent_res = run_agent(user_q=q, chat_history=chat_history, lst_res=[], lst_tools=dic_tools.keys())
print("\nagent_res:", agent_res)
```

![img](https://blog.images.bornforthis.cn/docs-images/sha256/99/9992648933f03f45ef803de9f40e83ddd43d720b0fb95db4df7b5aa5c23d0dc4.png)

如你所见，我们的代理已通过 prompt、可用工具以及聊天历史启动。

## 图形工作流

*LangGraph* 是一个编排框架，它能让你对代理工作流有更精细的控制。其中一个关键概念是 **状态**：每次执行都会创建一个字典，该字典在图的各节点间传递，并在每次节点执行时更新其输出。

我们使用 [*Typing*](https://docs.python.org/3/library/typing.html#) 定义初始状态，这是一个处理数据类型的 Python 库。

```python
import typing

class State(typing.TypedDict):
    user_q: str
    chat_history: list 
    lst_res: list[AgentRes]
    output: dict

# 测试
state = State({"user_q":q, "chat_history":chat_history, "lst_res":[agent_res], "output":{}})
state
```

![img](https://blog.images.bornforthis.cn/docs-images/sha256/a9/a9ce49ae8e78407c189fdf27f113772d59c8a36d310b0a53c6c0500715e7c65b.png)

对于每个节点（代理和工具）以及每条边（动作），我们需要编写一个函数来定义模型的行为。让我们从 **代理节点** 开始（目前只有一个）：

```python
# 代理节点
def node_agent(state):
    print("--- node_agent ---")
    agent_res = run_agent(prompt=prompt, 
                          dic_tools={k:v for k,v in dic_tools.items() if k in ["tool_browser","final_answer"]},
                          user_q=state["user_q"], 
                          chat_history=state["chat_history"], 
                          lst_res=state["lst_res"])
    print(agent_res)
    return {"lst_res":[agent_res]} # <-- 必须返回包含 agent_res 的列表

# 测试
node_agent(state)
```

![img](https://blog.images.bornforthis.cn/docs-images/sha256/b1/b122f713f48d78c70d50190ec76308568ba2670d86c8268366e65df6d683ede2.png)

接下来，我们为 **工具节点** 编写类似的函数：

```python
def node_tool(state):
    print("--- node_tool ---")
    res = state["lst_res"][-1]
    print(f"{res.tool_name}(input={res.tool_input})")
    
    agent_res = AgentRes(tool_name=res.tool_name, 
                         tool_input=res.tool_input, 
                         tool_output=str(dic_tools[res.tool_name](res.tool_input)) )
    
    return {"output":agent_res} if res.tool_name == "final_answer" else {"lst_res":[agent_res]}
    
# 测试
node_tool(state)
```

![img](https://blog.images.bornforthis.cn/docs-images/sha256/0d/0db63728de51834aba55b191ce70a5bc3d46305b8931c6e33328a953dc26fbf5.png)

这里有两种边类型：

- **条件边** —— 调用函数判断下一步应转向哪个节点（例如，从代理节点判断是否使用工具）
- **普通边** —— 直接从一个节点传递到下一个节点（例如，从工具节点的输出返回给代理节点）

```python
def conditional_edges(state):
    print("--- conditional_edges ---")
    last_res = state["lst_res"][-1]
    next_node = last_res.tool_name if isinstance(state["lst_res"], list) else "final_answer"
    print("下一节点:", next_node)
    return next_node # <-- 必须返回下一节点名称

# 测试
conditional_edges(state)
```

![img](https://blog.images.bornforthis.cn/docs-images/sha256/04/0446ec024169be28ece7a0589e9404c0458f332d7b67ccaeb3204a3f210e3270.png)

最后，我们可以创建工作流并可视化图形。

```python
from langgraph.graph import StateGraph, END

## 启动图形工作流
workflow = StateGraph(State)

## 添加代理节点
workflow.add_node(node="Agent", action=node_agent) 
workflow.set_entry_point(key="Agent")  # <-- 用户查询入口

## 添加工具节点
for k in dic_tools.keys():
    workflow.add_node(node=k, action=node_tool)

## 从代理节点添加条件边
workflow.add_conditional_edges(source="Agent", path=conditional_edges)

## 添加普通边指向代理节点
for k in dic_tools.keys():
    if k != "final_answer":
        workflow.add_edge(start_key=k, end_key="Agent")

## 结束边（final_answer 指向结束）
workflow.add_edge(start_key="final_answer", end_key=END)
g = workflow.compile()

## 绘图
from IPython.display import Image, display
from langchain_core.runnables.graph import MermaidDrawMethod

display(Image(
    g.get_graph().draw_mermaid_png(draw_method=MermaidDrawMethod.API)
))
```

![img](https://blog.images.bornforthis.cn/docs-images/sha256/34/34ce1d845124d7825033c130294667fe5495a2661242317804d793fda7ff65c0.png)

启动工作流时，必须传入初始状态。你可以通过两种方式 **运行代理**：

```python
state = {'user_q':q,
         'chat_history':chat_history, 
         'lst_res':[], 
         'output':{} }

## 1) 直接调用函数
out = g.invoke(input=state)
agent_out = out['output'].tool_output

## 2) 流式运行
steps = g.stream(input=state) 
for n,step in enumerate(steps):
    print("--- step", n, "---")
    print(step)
```

![img](https://blog.images.bornforthis.cn/docs-images/sha256/4d/4dcdc4d1936880596340677834a1bdd0cbc50ce7c124517e37ac4ef6ecc231d3.png)

以上便是热身阶段。现在，真正的游戏开始了。

## 多代理与人工参与

单一代理通常能通过使用工具有效运作，但在同时处理多个工具时可能效果不佳。解决复杂任务的一种方法是采用“分而治之”策略：为每个任务创建专门的代理，从而实现 **多代理工作流**。

此外，实际工作流往往需要人工反馈。**人工参与**（Human-in-the-Loop）指的是在决策过程中，人类操作员与 AI 系统共同参与，充当类似其他工具的角色（常被称为“人工工具”）。这种方法结合了 AI 的速度与效率以及人类直觉和对复杂语境的理解能力。

本工作流如下：

1. 用户提问后，第一代理使用其工具给出最终答案（即前面所实现的过程）。
2. 在给出最终答案后，系统询问用户返回的信息是否足够（人工参与）。
3. 如果不足，第二代理激活，使用其工具进一步丰富最终答案（多代理协作）。

![img](https://blog.images.bornforthis.cn/docs-images/sha256/64/643611ff489353bb6375e1df2a30386ae0fab2b8b3bd2a45f1eeed0acb515e2a.gif)

第二个代理将引入一个新工具：*Wikipedia*。

```python
from langchain_community.tools import WikipediaQueryRun
from langchain_community.utilities import WikipediaAPIWrapper

@tool("tool_wikipedia")
def tool_wikipedia(q:str) -> str:
    """通过传递输入 `q` 使用 Wikipedia 进行搜索。
       输入 `q` 必须是简短的关键词，而非冗长文本。
    """
    return WikipediaQueryRun(api_wrapper=WikipediaAPIWrapper()).run(q)

# 测试
print( tool_wikipedia(agent_out) )

# 更新工具
dic_tools = {"tool_browser":tool_browser,
             "final_answer":final_answer,
             "tool_wikipedia":tool_wikipedia}
```

![img](https://blog.images.bornforthis.cn/docs-images/sha256/7a/7ac964c4e3aa386619d8bd25fab32f0f54c706fa66e8d2925972ade7c2801eb5.png)

与之前类似，新代理节点需要一个函数来运行，其中指定了新的提示和工具。

~~~python
prompt_2 = """
你的目标是仅使用一次 `tool_wikipedia` 工具来丰富已有信息。  
注意，当使用工具时，你需要提供工具名称和以 JSON 格式传递的参数。  
每次调用时，你**只能使用一个工具**，并且响应格式必须始终遵循如下模式：
```json
{"name":"<tool_name>", "parameters": {"<tool_input_key>":<tool_input_value>}}
```
一旦你收集到足够的信息以回答用户问题，就使用 `final_answer` 工具。
"""

def node_agent_2(state):
    print("--- node_agent 2 ---")
    agent_res = run_agent(prompt=prompt_2, 
                          dic_tools={k:v for k,v in dic_tools.items() if k in ["tool_wikipedia","final_answer"]},
                          user_q=state["output"].tool_output, # <-- 修改：将 user_q 设置为上一次的输出
                          chat_history=state["chat_history"], 
                          lst_res=state["lst_res"])
    print(agent_res)
    return {"lst_res":[agent_res]}
~~~

关于 **人工参与**，我们需要创建一个“虚拟”节点以及处理用户反馈的逻辑。

```python
# 人工节点
def human_node(state):
    pass

# 条件边
def human_edges(state):
    print("--- human ---")
    user_feedback = input("是否继续？[Yes/No] --> ")
    next_node = "Agent2" if user_feedback.lower()[0] == "y" else END
    print("下一节点:", next_node)
    return next_node

# 测试
human_edges(state)
```

![img](https://blog.images.bornforthis.cn/docs-images/sha256/6b/6b4657dcbfc52e730acc50925b02b46fb7af38e7a3a1b117cdf70272a82235ac.gif)

最后，我们构建 **新图形工作流**。

```python
## 启动图形工作流
workflow = StateGraph(State)

########################## 代理 1 ##########################
## 添加代理节点
workflow.add_node(node="Agent1", action=node_agent) 
workflow.set_entry_point(key="Agent1") # <-- 用户查询入口

## 添加工具节点
workflow.add_node(node="tool_browser", action=node_tool)
workflow.add_node(node="final_answer", action=node_tool)

## 普通边指向代理节点
workflow.add_edge(start_key="tool_browser", end_key="Agent1")

## 从代理节点添加条件边
workflow.add_conditional_edges(source="Agent1", path=conditional_edges)

########################## 人工参与 ##########################
## 添加人工节点
workflow.add_node(node="Human", action=human_node)

## 从人工节点添加条件边
workflow.add_conditional_edges(source="final_answer", path=human_edges)

########################## 代理 2 ##########################
## 添加代理节点
workflow.add_node(node="Agent2", action=node_agent_2) 

## 添加工具节点
workflow.add_node(node="tool_wikipedia", action=node_tool)

## 普通边指向代理节点
workflow.add_edge(start_key="tool_wikipedia", end_key="Agent2")

## 从代理节点添加条件边
workflow.add_conditional_edges(source="Agent2", path=conditional_edges)

########################## 结束 ##########################
## 结束图形工作流
g2 = workflow.compile()

## 绘图
display(Image(
    g2.get_graph().draw_mermaid_png(draw_method=MermaidDrawMethod.API)
))
```

![img](https://blog.images.bornforthis.cn/docs-images/sha256/e2/e29bfa39268ff14f5d9d6251cf350a6691ddaabddbb5755f490fb8efa3e5314f.png)

如常，你可以通过传入初始状态来运行工作流。

```python
g2.invoke(input=state) # <-- 传入之前相同的初始状态
```

![img](https://blog.images.bornforthis.cn/docs-images/sha256/1c/1c5c3bd3465e6ad86fda817b372d76f29853c8d598d9f5c651ee3cb170a742c6.gif)

## 结论

本文是一篇教程，演示了 **如何从零开始构建代理**。利用 *LangChain* 和 *Ollama*，我们创建了工具和代理，接着使用 *LangGraph* 定义了工作流逻辑，最终构建了一个结合人工反馈的多代理系统。

总之，生成式 AI 社区正迅速发展，诸如 *LangChain* 和 *LlamaIndex* 等库也在不断变化。这主要归因于当前 LLM 领域尚无市场领导者，从而使得新工具和平台不断涌现。

希望你喜欢这篇教程！如有问题、反馈或想分享你的有趣项目，请随时联系我。

:::



欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！

::: details 公众号：AI悦创【二维码】

![](https://blog.images.bornforthis.cn/docs-images/sha256/77/77f67d48a67ec6a44a4ef1f01ffc85830eb3c121b1ece45dc5ada06e20e2f52b.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Linux、Web 全栈」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](https://blog.images.bornforthis.cn/docs-images/sha256/30/3087c629da73428daa0ee050f5b31709c30f650686164b54c724b892a422c585.jpg)

[.](https://medium.com/towards-data-science/genai-with-python-build-agents-from-scratch-complete-tutorial-4fc1e084e2ec)







