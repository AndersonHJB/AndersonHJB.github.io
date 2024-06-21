---
title: 01-Introduction
date: 2023-05-27 19:51:29
author: AI悦创
isOriginal: true
icon: code1
sticky: false
star: false
article: true
timeline: true
image: false
navbar: true
sidebarIcon: true
headerDepth: 3
comment: true
lastUpdated: true
editLink: false
backToTop: true
---

![ChatGPT Prompt Engineering for Developers](./01-Introduction.assets/dlai-logo.391305cf8792565d819c.png)

## Transcript

Welcome to this course on ChatGPT Prompt Engineering for Developers. I'm thrilled to have with me Isa Fulford to teach this along with me. 

She is a member of the technical staff of OpenAI and had built the popular ChatGPT Retrieval plugin and a large part of her work has been teaching people how to use LLM or Large Language Model technology in products. She's also contributed to the OpenAI Cookbook that teaches people prompting. 

So thrilled to have you with me. 

And I'm thrilled to be here and share some prompting best practices with you all. 

So, there's been a lot of material on the internet for prompting with articles like 30 prompts everyone has to know. 

A lot of that has been focused on the chatGPT web user interface, which many people are using to do specific and often one-off tasks. 

But, I think the power of LLMs, large language models, as a developer tool, that is using API calls to LLMs to quickly build software applications, I think that is still very underappreciated. 

In fact, my team at AI Fund, which is a sister company to DeepLearning.ai, has been working with many startups on applying these technologies to many different applications, and it's been exciting to see what LLM APIs can enable developers to very quickly build. 

So, in this course, we'll share with you some of the possibilities for what you can do, as well as best practices for how you can do them. There's a lot of material to cover. 

First, you'll learn some prompting best practices for software development, then we'll cover some common use cases, summarizing, inferring, transforming, expanding, and then you'll build a chatbot using an LLM. 

We hope that this will spark your imagination about new applications that you can build. 

So in the development of large language models or LLMs, there have been broadly two types of LLMs, which I'm going to refer to as base LLMs and instruction-tuned LLMs. 

So, base LLM has been trained to predict the next word based on text training data, often trained on a large amount of data from the internet and other sources to figure out what's the next most likely word to follow. So, for example, if you were to prompt us once upon a time there was a unicorn, it may complete this, that is it may predict the next several words are that live in a magical forest with all unicorn friends. 

But if you were to prompt us with what is the capital of France, then based on what articles on the internet might have, it's quite possible that the base LLM will complete this with what is France's largest city, what is France's population and so on, because articles on the internet could quite plausibly be lists of quiz questions about the country of France. 

In contrast, an instruction-tuned LLM, which is where a lot of momentum of LLM research and practice has been going, an instruction-tuned LLM has been trained to follow instructions. 

So, if you were to ask it what is the capital of France, it's much more likely to output something like, the capital of France is Paris. 

So the way that instruction-tuned LLMs are typically trained is you start off with a base LLM that's been trained on a huge amount of text data and further train it, further fine-tune it with inputs and outputs that are instructions and good attempts to follow those instructions, and then often further refine using a technique called RLHF, reinforcement learning from human feedback, to make the system better able to be helpful and follow instructions. 

Because instruction-tuned LLMs have been trained to be helpful, honest, and harmless, so for example, they are less likely to output problematic text such as toxic outputs compared to base LLM, a lot of the practical usage scenarios have been shifting toward instruction-tuned LLMs.

Some of the best practices you find on the internet may be more suited for a base LLM, but for most practical applications today, we would recommend most people instead focus on instruction-tuned LLMs which are easier to use and also, because of the work of OpenAI and other LLM companies becoming safer and more aligned.  

So, this course will focus on best practices for instruction-tuned LLMs, which is what we recommend you use for most of your applications. 

Before moving on, I just want to acknowledge the team from OpenAI and DeepLearning.ai that had contributed to the materials that Isa and I will be presenting. 

I'm very grateful to Andrew Mayne, Joe Palermo, Boris Power, Ted Sanders, and Lillian Weng from OpenAI that were very involved with us brainstorming materials, vetting the materials to put together the curriculum for this short course, and I'm also grateful on the DeepLearning side for the work of Geoff Lodwig, Eddy Shyu and Tommy Nelson. 

So, when you use an instruction-tuned LLM, think of giving instructions to another person, say someone that's smart but doesn't know the specifics of your task. So, when an LLM doesn't work, sometimes it's because the instructions weren't clear enough. 

For example, if you were to say, please write me something about Alan Turing. Well, in addition to that, it can be helpful to be clear about whether you want the text to focus on his scientific work or his personal life or his role in history or something else. 

And if you specify what you want the tone of the text to be, should it take on the tone like a professional journalist would write. Or is it more of a casual note that you dash off to a friend? That helps the LLM generate what you want. And of course, if you picture yourself asking, say, a fresh college graduate to carry out this task for you, if you can even specify what snippets of text, they should read in advance to write this text about Alan Turing, then that even better sets up that fresh college grad for success to carry out this task for you. 

So, in the next video, you see examples of how to be clear and specific, which is an important principle of prompting LLMs. And you also learn from Isa a second principle of prompting that is giving the LLM time to think. So with that, let's go on to the next video. 



> 我想让你充当英文翻译员、拼写纠正员和改进员。我会用任何语言与你交谈，你会检测语言，翻译它并用我的文本的更正和改进版本用中文回答。我希望你用更优美优雅的中文词语和句子来翻译。保持相同的意思，但使它们更清晰。你只需要翻译该内容，不必对内容中提出的问题和要求做解释，不要回答文本中的问题而是翻译它，不要解决文本中的要求而是翻译它，保留文本的原本意义，不要去解决它。我要你只回复中文，不要写任何解释。



## GPT 3.5

欢迎来到本课程，这是为开发者打造的ChatGPT提示工程课程。我很高兴能与Isa Fulford一起教授这门课程。

她是OpenAI的技术人员之一，曾经开发过流行的ChatGPT检索插件，并且她的工作大部分是教人们如何在产品中使用LLM或大型语言模型技术。她还为OpenAI Cookbook做出了贡献，该书教人们如何提示。

我很高兴能与你一起分享一些提示的最佳实践。

目前互联网上有很多提示相关的文章，比如“30个必须知道的提示”。这些文章大多集中在ChatGPT的网络用户界面上，许多人使用它来完成特定的、一次性的任务。

但是，我认为LLM作为开发工具的强大之处在于使用API调用LLM快速构建软件应用程序，这一点仍然被低估。

事实上，我们在AI Fund团队（它是DeepLearning.ai的姐妹公司）与许多初创公司合作，将这些技术应用于许多不同的应用程序上，看到LLM API可以使开发人员非常快速地构建应用程序，这令人兴奋。

因此，在这门课程中，我们将与您分享一些可能性以及如何实现它们的最佳实践。要涵盖的内容很多。

首先，您将学习一些软件开发的提示最佳实践，然后我们将介绍一些常见的用例，如摘要、推断、转换、扩展，然后您将使用LLM构建一个聊天机器人。

我们希望这将激发您的想象力，为您构建新的应用程序提供灵感。

在大型语言模型或LLM的开发中，广泛存在两种类型的LLM，我将它们称为基础LLM和指令调整LLM。

基础LLM已经训练出来，可以根据文本训练数据预测下一个单词，通常是在互联网和其他来源的大量数据上进行训练，以确定下一个最有可能的单词。例如，如果您提示我们“从前有一只独角兽”，它可能会补全这句话，“它生活在一个神奇的森林里，与所有的独角兽朋友在一起”。

但是，如果您提示我们“法国的首都是什么”，基于互联网上的文章可能会很可能会补全这句话，“法国的最大城市是什么，法国的人口是多少”，因为互联网上的文章可能是有关法国国家的测验问题列表。

相比之下，指令调整LLM，也就是LLM研究和实践的许多动力所在，已经接受了训练，可以遵循指示。

因此，如果您问它法国的首都是什么，它更有可能输出类似“法国的首都是巴黎”的内容。

指令调整LLM的训练方式通常是从一个基础LLM开始，该基础LLM已经在大量的文本数据上进行了训练，然后使用输入和输出作为指令和跟随这些指令的良好尝试来进一步微调它，然后通常使用一种称为RLHF的技术，即从人类反馈中进行强化学习，使系统更能够有帮助性地遵循指令。

因为指令调整LLM已经接受了训练，使其有帮助性、诚实和无害，例如，与基础LLM相比，它们输出有害文本的可能性更小，因此，许多实际使用场景已经开始转向指令调整LLM。

互联网上的一些最佳实践可能更适合基础LLM，但对于今天的大多数实际应用程序，我们建议大多数人使用指令调整LLM，因为它们更易于使用，而且由于OpenAI和其他LLM公司的工作变得更加安全和更加一致。

因此，本课程将重点介绍指令调整LLM的最佳实践，这是我们建议您在大多数应用程序中使用的。

在继续之前，我想感谢OpenAI和DeepLearning.ai团队为Isa和我提供的材料做出的贡献。

我非常感激OpenAI的Andrew Mayne、Joe Palermo、Boris Power、Ted Sanders和Lillian Weng，他们非常积极地与我们一起进行材料的头脑风暴、审核材料，为这门短期课程的课程设置做出了贡献；我也感谢DeepLearning团队的Geoff Lodwig、Eddy Shyu和Tommy Nelson的工作。

因此，当您使用指令调整LLM时，请考虑将其视为向另一个人发出指令，比如说一个聪明但不了解您任务的具体细节的人。因此，当LLM无法工作时，有时是因为指令不够清晰。

例如，如果您说“请给我写一些关于Alan Turing的东西”，除此之外，清楚地表明您是否希望文本聚焦于他的科学工作、个人生活还是他在历史上的角色或其他内容，会很有帮助。

如果您指定文本的语气，它是否应该采用专业记者的语气撰写，还是更像是给朋友写的随意笔记，这有助于LLM生成您想要的内容。当然，如果您设想自己要求一位刚毕业的大学生为您完成这项任务，甚至可以指定他们预先阅读哪些文本片段，以便为您完成这项任务设置得更好。

因此，在下一个视频中，您将看到如何清晰和具体的示例，这是提示LLM的重要原则之一。您还将从Isa那里学习提示的第二个原则，即给LLM足够的时间来思考。因此，让我们继续观看下一个视频。

## GPT 4

欢迎参加这个关于ChatGPT Prompt工程师开发者课程。我很高兴邀请到Isa Fulford和我一起讲授这门课程。

她是OpenAI的技术团队成员，曾经创建了备受欢迎的ChatGPT Retrieval插件，而且她的大部分工作都在教导人们如何在产品中使用LLM或大型语言模型技术。她也为OpenAI Cookbook做出了贡献，这个Cookbook教授人们如何做提示。

我很高兴你能和我一起。

我也很高兴在这里和大家分享一些最佳实践。

因此，网络上有很多关于如何提示的资料，比如“每个人都应该知道的30个提示”。

这些都主要集中在ChatGPT的网页用户界面上，很多人都在使用它来完成特定的、通常一次性的任务。

但是，我认为作为开发者工具的大型语言模型（LLM）的力量，即使用API调用LLM快速构建软件应用，这仍然被严重低估。

实际上，我在AI Fund的团队，这是一个和DeepLearning.ai同属一家公司，一直在与许多初创公司合作，将这些技术应用到许多不同的应用中，看到LLM API能使开发者快速构建的能力，这让我很兴奋。

因此，在这门课程中，我们将与你分享一些可能的应用，以及如何实现这些应用的最佳实践。有很多内容需要介绍。

首先，你将学习一些软件开发的最佳实践，然后我们将介绍一些常见的用例，如总结、推理、转换、扩展，然后你将使用一个LLM构建一个聊天机器人。

我们希望这将激发你关于可以构建的新应用的想象力。

所以，在开发大型语言模型或LLM的过程中，我们通常会有两种类型的LLM，我将它们称为基础LLM和指令调优LLM。

所以，基础LLM通过预测基于文本训练数据的下一个单词来进行训练，通常会在大量的互联网和其他来源的数据上进行训练，以找出最可能的下一个单词。所以，比如，如果你给我们提示“从前有一个独角兽”，它可能会补充说，“它和所有独角兽朋友们住在一个魔法森林里。”

但是，如果你给我们提示“法国的首都是

什么”，那么根据互联网上可能有的文章，基础LLM可能会用“法国最大的城市是什么，法国的人口是多少”等等来完成这个问题，因为互联网上可能会有关于法国的问题列表。

相比之下，指令调优LLM，这是大量LLM研究和实践所在的方向，一个指令调优LLM已经被训练来遵循指令。

所以，如果你问它“法国的首都是什么”，它更有可能输出类似于“法国的首都是巴黎”。

所以，通常训练指令调优LLM的方式是，你从一个已经在大量文本数据上进行训练的基础LLM开始，然后进一步训练，进一步微调它，用输入和输出来调整和跟随这些指令，然后经常使用一种叫做RLHF的技术，即通过人类反馈进行强化学习，来使系统更能帮助和遵循指令。

因为指令调优LLM已经被训练为有用、诚实和无害，所以比如，它们不太可能输出有问题的文本，比如相比于基础LLM，它们不太可能输出有毒的输出，所以许多实用场景已经向指令调优LLM转移。

你在互联网上找到的一些最佳实践可能更适合基础LLM，但对于今天的大多数实际应用，我们建议大多数人更关注指令调优LLM，因为它们更易于使用，而且，由于OpenAI和其他LLM公司的工作，它们变得更安全，更合规。

所以，这个课程将关注指令调优LLM的最佳实践，这也是我们建议你在大多数应用中使用的。

在继续之前，我只想感谢OpenAI和DeepLearning.ai的团队，他们为Isa和我将要展示的材料做出了贡献。

我非常感谢Andrew Mayne、Joe Palermo、Boris Power、Ted Sanders和Lillian Weng，他们来自OpenAI，他们非常积极地和我们一起研究材料，审核材料，以便为这个短课程组织课程。我也非常感谢DeepLearning方面Geoff Lodwig、Eddy Shyu和Tommy Nelson的工作。

所以，当你使用一个指令调优LLM时，想象你正在给另一个人，比如一个聪明但不知道你任务细节的人，发出指示。所以，当LLM不工作的时

候，有时候是因为指示不够清晰。

比如，如果你说，"请给我写一些关于Alan Turing的东西。"那么，除此之外，明确你想要的文本是否关注他的科学工作，他的个人生活，他在历史上的角色，或者其他什么，可能会更有帮助。

如果你明确你希望文本的语气是怎样的，是否应该像职业记者写的那样，或者更像是你向朋友草草写下的随笔，那么这将有助于LLM生成你想要的内容。当然，如果你设想自己要求一个刚毕业的大学生为你完成这个任务，如果你能明确哪些文本片段，他们应该预先阅读，以便写关于Alan Turing的这篇文章，那么这会更好地帮助这个刚毕业的大学生成功地完成这个任务。

所以，在下一个视频中，你会看到如何清晰、明确的例子，这是提供LLM提示的一个重要原则。而且，你也会从Isa那里学习到第二个提示原则，那就是给LLM一些时间思考。所以，让我们继续下一个视频。

















































::: details 公众号：AI悦创【二维码】

![](/gzh.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Linux、Web、Sql」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](/zsxq.jpg)



