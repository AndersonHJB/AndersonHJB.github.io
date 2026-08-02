---
title: OpenAI Just Released o3-mini：Best coding model right now (better than DeepSeek R1)
date: 2025-02-02 19:34:58
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

完整内容（包含视频）：[https://mp.weixin.qq.com/s/BGSerEKbcIk0lcsyjM1nRg](https://mp.weixin.qq.com/s/BGSerEKbcIk0lcsyjM1nRg)

**其实说实话，ChatGPT 一直都是闭源的。直到 DeepSeek 横空出世并且完全开源，随之马上发布 o3-mini、o3-mini-high，还展示出来思维链。其实怎么说呢？有没有可能抄袭 DeepSeek 呢？（谁都说不准，但是一定大家保有自己的想法才可以！）**

温馨提示：不论你在下面的内容阅读后，有什么心得（先评论下来），都要注意以下几点：

1. OpenAI 是坐拥海量资源训练出来的；「成本高、人才多、GPU 充裕」
2. DeepSeek 是在资源缺乏中训练出来的并且完全开源！；「成本低、人才多，GPU 不充裕」
3. OpenAI 在 DeepSeek 开源出来之后，上线 o3系列并且显示思维链，也值得深思！
4. 这两个大模型都很厉害，但是请注意！也许现在看起来 DeepSeek 略弱一点，但是资源多一些、GPU 充裕一些呢？你细品！细细品！

> o3-mini is available in ChatGPT for free, plus and pro subscribers

Yesterday, OpenAI released o3-mini and o3-mini-high and it’s available now in ChatGPT and the API.

o3-mini is fast at advanced reasoning, while o3-mini-high is great at coding and logic.

Here’s the amazing part: o3-mini-high’s coding average on [LiveBench](https://livebench.ai/#/) is 82.74. Other models don’t come even close: o1 (69.69) claude 3.5 sonnet (67.13), deepseek-r1 (66.74).

![LiveBench](https://blog.images.bornforthis.cn/docs-images/sha256/7e/7e9006657045a3caaac26b911bd7b02c8c8467403c0df63db30e67bca398625d.png)



o3-mini-high is the best model for coding right now. Period.

What makes things better is that even free users can try o3-mini in ChatGPT (selecting the Reason button). Plus and Team users have a limit of 150 messages per day with o3-mini, while Pro users have unlimited access to o3-mini and o3-mini-high.

Let’s explore how you can use o3-mini for coding and take a closer look at how well it performs compared to other models

## Use cases of o3-mini for coding

The tests show that o3-mini is great at coding. In the examples below, you’ll see that many users could build games, and small apps with one-shot prompts (and a few attempts). This is a good opportunity to start building something with code!

First, here’s a space shooting game that I easily created with Python code thanks to o3-mini. I only gave a few instructions in my prompt, ran the generated code, and got the game quickly.

o3-mini-high is the best coding model right now. 

Its coding average on LiveBench is 82.74. Other models don't come even close: o1 (69.69) claude 3.5 sonnet (67.13), deepseek-r1 (66.74). 

Here's a cool space shooting game I created with only ONE PROMPT: "create a space shooting game using Python. make the game images look like the real game (not triangles/rectangles)”

视频

> An [X user](https://x.com/_aidan_clark_/status/1885408020529545621) used o3-mini to create a simple Twitter clone. All in 8 seconds!

o3-mini's intelligence x speed combo is incredible, idk what to say other than just try it and see for yourself. This took 8 seconds, how long would it take you?

视频+图片

Another [X user](https://x.com/flavioAd/status/1885449107436679394) used o3-mini and DeepSeek to write a Python program that shows a ball bouncing inside a spinning hexagon (gravity test). Here’s the result he got.

视频

**o3-mini crushed DeepSeek R1**

 "write a Python program that shows a ball bouncing inside a spinning hexagon. The ball should be affected by gravity and friction, and it must bounce off the rotating walls realistically"

视频

03-mini output code:

<img src="https://blog.images.bornforthis.cn/docs-images/sha256/86/86b00457bce9c4a1eb7af01563c760b84287c7458314a4d9869628501d6192c9.png" style="zoom:25%;" />

- Test 1: [http://codemark.bornforthis.cn/share/2565c29f-c4da-4f70-8c2c-18db08338701_20250202222527](http://codemark.bornforthis.cn/share/2565c29f-c4da-4f70-8c2c-18db08338701_20250202222527)
- Test 2: [http://codemark.bornforthis.cn/share/cd4fa872-0a2e-489b-8486-1b3edfb7a040_20250202223219](http://codemark.bornforthis.cn/share/cd4fa872-0a2e-489b-8486-1b3edfb7a040_20250202223219)

DeepSeek R1 output code:

<img src="https://blog.images.bornforthis.cn/docs-images/sha256/71/718561cf02832101c7607e45841515f81e16b376f5d6dd05ce0e2bf16938b87f.png" style="zoom:25%;" />

- Test 1: [http://codemark.bornforthis.cn/share/4779d356-2f1a-4bb5-ad11-d4af3ea4d212_20250202223015](http://codemark.bornforthis.cn/share/4779d356-2f1a-4bb5-ad11-d4af3ea4d212_20250202223015)
- Test 2: [http://codemark.bornforthis.cn/share/e0bca13d-e8b6-4fe2-9028-eae0cf7c0bfe_20250202223251](http://codemark.bornforthis.cn/share/e0bca13d-e8b6-4fe2-9028-eae0cf7c0bfe_20250202223251)

Some netizens commented:

> **Derp**: The result is obvious but kinda unfair, the llms will give you a random response from various ways to approach it, you should ask both llms at least 50 times to do the same example and to see lwho gives you the best responses the most number of times

> **Andrew**: I'm sure o3-mini was heavily trained on those bouncing ball problems because seems that every influencer tries to ask new LLM about some bouncing ball.



Just like that, there are many other o3-mini examples showing how good this model is at coding. But don’t take my word for it, let’s see the numbers!

## o3-mini is optimized for STEM reasoning

OpenAI o1 model remains their broader general knowledge reasoning model. That said, o3-mini provides a specialized alternative for science, math, and coding. Plus, it reduces the latency of o1-mini.

Here are some insights found from the [math evaluation](https://openai.com/index/openai-o3-mini/) below:

- with low reasoning effort, o3-mini achieves comparable performance with o1-mini
- with medium reasoning effort, o3-mini matches o1’s performance in math, coding, and science, while delivering faster responses
- with high reasoning effort, o3-mini outperforms o1

![OpenAI](https://blog.images.bornforthis.cn/docs-images/sha256/f9/f91513d3525c0ea6ff55623f80d958c5a8c4ff1948f24bb19fa83b2ebafdd82e.jpeg)

![LiveBench](https://blog.images.bornforthis.cn/docs-images/sha256/fe/fe9cf22cab8e9f6c06680a7d990414d4e5ae12ec6184555a89bda3e35fb012cd.png)

As for coding, LiveBech shows that o3-mini is better than other models (deepseek-r1, o1, claude-3.5-sonnet, etc) even at medium reasoning. At high reasoning, o3-mini extends its lead, achieving significantly stronger performance across key metrics.

In Competition Code, OpenAI o3-mini achieves progressively higher Elo scores with increased reasoning effort.

![OpenAI](https://blog.images.bornforthis.cn/docs-images/sha256/67/67efe7d9d4125d7f49c6f790bf0f67de0576ab23660a6d3394db6eb52e385a4a.png)

The same goes for the software engineering test below.

![OpenAI](https://blog.images.bornforthis.cn/docs-images/sha256/51/516b5f9e434ff06bfdd6de253c181c245e6eff7d47b6b1a7d52111c52d698150.jpeg)



That’s pretty much it! I encourage you to try o3-mini yourself and see whether outperforms the other models for STEM reasoning.

Some netizens commented:

> **EJack Yao**: I tried letting o3-mini-high answer a few classic Java puzzles, such as "Oddity," "Poison Paren Litter," "Raw Deal," and more. I guess they didn’t train it on these classic problems because it really struggled to solve most of them.
>
> Creating a simple Python script works well, and DeepSeek R1 is also great—at least it listens now, unlike o1. DeepSeek R1 shows us how it thinks, especially when we provide an algorithm. For example, when it judged my algorithm, it felt like my genius software engineering friends were reviewing my work. But at the same time, it’s a great learning opportunity.

> **Gene T**: I just used o3-mini and o3-mini high for my engineering proposal. Compared to ds r1 they suck. Not good at all



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

[.](https://medium.com/artificial-corner/openai-just-released-o3-mini-best-coding-model-right-now-better-than-deepseek-r1-64076fff4d27)







