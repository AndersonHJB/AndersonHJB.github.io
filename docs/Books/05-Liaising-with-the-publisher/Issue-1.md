---
title: Issue 1：书稿排版与章节衔接问题汇总
icon: blog
date: 2025-10-29 10:32:33
author: bornforthis
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
watermark:
  width: 200
  height: 200
  content: 《编程启蒙：思维与代码》作者：黄家宝
  opacity: 0.5
---

## Question 1

::: tip P13 手札 42 与 P14 前两段重复了。删掉前者还是后者？

**保留 P14 页的，去掉 `手扎 42`。**

手扎原本是统一列出来，而后面那部分是为了专门讲解，如果觉得重复就去掉手扎 42 的内容。

:::

## Question 2

::: tip 目前，全书共有第一和第二两篇。每篇与其下方的第一章之间加上一两段概况本篇内容的文字，是否更好？

**本篇概览：思维先于代码。**

在真正编程之前，我们先要理解“编程思维”是什么。它不是写代码的技巧，而是一种分析、拆解和解决问题的方式。

这一篇会带你从日常生活的例子出发，看清问题的结构、逻辑与抽象；明白为什么“学编程”其实是在学思考。

你将逐步建立起属于自己的“思维算法”——不靠背语法，而能看透问题的本质。

---

**本篇概览：从思维到行动，用 Python 打造你的第一款程序。**

如果说前一篇让你学会了“像程序员那样思考”，那么这一篇，就是要让你真正“像程序员那样动手”。

《Python 小咖养成计划》将带你进入代码的实战世界：从在线编程环境起步，逐步掌握变量、条件判断、循环、函数、模块化思维等核心技能。

在学习过程中，你不仅会写出第一个程序，还会理解程序背后的逻辑与结构，明白如何借助 Python 来训练逻辑思维、代码编程实操等。

这一篇，是从“会想”到“能做”的跨越，是你迈向真正编程者的起点。

:::

## Question 3

::: tip 目前，全书每章与第一节之间缺少过渡文字。添加一段过渡文字是否更好？例如，P16在“第一章 何为编程思维？”与下方的“第一节 为什么要学习编程”之间加上一段过渡文字，这样是否更好？同问全书其他章。

因为当时编写书稿时，编辑说实际不能超过 400 页，如果没章节添加过渡，是会更好。但整体页数会增加不少。看编辑如何定夺，有需要添加我马上编写每个章节开头编写。

**看编辑如何定夺，有需要添加我马上编写每个章节开头编写。**

:::

::: tabs

@tab 第一章｜何为编程思维？

- [https://chatgpt.com/share/69029f97-fc1c-8001-beb1-5d3cad9aeead](https://chatgpt.com/share/69029f97-fc1c-8001-beb1-5d3cad9aeead)

我们先把话挑明：**学编程，不是为了卷成程序员，而是为了获得一种更强的思考与表达方式。** 面对 AI，最危险的不是不会写代码，而是不会判断与提问。本章从“为什么要学”出发，用真实案例与可操作的方法，带你搭起一座桥——从“看不懂问题”，走向“说得清需求，跑得动结果”。现在，我们从动机与误区开始讲起。

@tab 提示词

```markdown
我写了一个书稿，现在需要给每个章节和正式文章之间添加过渡内容。

按下面的章节把文件进行拼接保存成 Markdown，整体路径在：/Users/huangjiabao/bornforthis.cn/docs/column/Python-Programming-Course/P02-1-Python-Starter-Journey，帮我读取并按章节合并，不要修改每个章节中文章内容，直接前后拼接保存成Markdown文件即可，文件名称用章节名来命名。
章节目录以及文件名如下：
children: [
				{
					text: "第一章｜何为编程思维？",
					icon: "blog",
					collapsible: true,
					children: [
						"01-Why-learn-to-program",
						"02-Programming-thinking-makes-kids-smarter",
					],
				},
				{
					text: "第二章｜最简单的编程史",
					icon: "blog",
					collapsible: true,
					children: [
						"03-People-started-programming-over-800-years-ago",
						"04-Why-is-the-Father-of-the-Computer-a-fraud",
						"05-How-could-the-Father-of-artificial-Intelligence-end-war",
					],
				},
				{
					text: "第三章｜编程思维，教你思考",
					icon: "blog",
					collapsible: true,
					children: [
						"06-How-can-mobile-phones-give-us-beauty",
						"07-How-do-you-teach-a-computer-to-recognize-a-puppy",
						"08-You-can-measure-the-height-of-a-pyramid-by-looking-at-its-shadow",
						"09-Computers-dont-even-know-the-number-2",
						"10-How-does-a-computer-analyze-a-problem",
						"11-Can-Siri-understand-you",
						"12-Computers-can-learn-by-themselves",
						"13-How-to-catch-a-robot-spy-with-programming-thinking",
						"14-How-do-you-prove-youre-not-a-robot",
						"15-Man-vs-machine-man-loses-the-first-battle",
						"16-Man-machine-war-the-computer-steal-the-trick",
						"17-Why-dont-the-waiters-in-the-restaurant-cook",
					],
				},
				{
					text: "第四章｜用算法，解决生活难题",
					icon: "blog",
					collapsible: true,
					children: [
						"18-How-to-calculate-PI-with-a-handful-of-rice",
						"19-How-to-make-a-parallel-computing-scrambled-egg-dish",
						"20-How-to-choose-the-class-monitor-in-the-fairest-way",
						"21-Will-the-world-come-to-an-end-in-2038",
						"22-Can-computer-programs-really-kill-people",
						"23-Who-exactly-is-the-author-of-Dream-of-the-Red-Chamber",
						"24-Little-ants-can-also-write-algorithms",
						"25-How-to-build-cars-with-the-idea-of-establishing-archives",
						"26-Who-knows-you-best-Search",
						"27-Who-knows-you-best-Recommended",
					],
				},
				{
					text: "第五章｜人工智能未来",
					icon: "blog",
					collapsible: true,
					children: [
						"28-Can-computers-be-university-professors",
						"29-Are-war-robots-reliable",
						"30-How-did-hackers-steal-your-lucky-money",
						"31-Why-havent-self-driving-cars-become-widespread-yet",
						"32-All-artificial-intelligence-turns-out-to-be-very-weak"
					],
				},
			]
		}
```

@tab 第一章｜何为编程思维？  

也许你曾被“学编程有没有用？”困扰过；也许你也想过“有 AI 了，我还要学吗？”。别急着给自己下结论。本章不是让你立即啃语法，而是先把“为什么”讲透——为什么编程会成为未来工作的通用底座？为什么理解一点点代码，就能把 AI 变成真正的助推器？从这里出发，我们用真实故事与可复用的思考框架，回答你心里的那个第一问：**为什么要学习编程**。

:::

## Question 4

::: tip P40 最下方两行中的网址无法打开。待替换网址；否则建议删掉该参考资料。

**结论**：直接去掉，因为国内经过测试无法访问维基百科，而百度百科无法做到有效替代。

:::

## Question 5

::: tip P167 倒数第 3 行“（1）.index() 会抛出ValueError，如果目标子字符串在字符串中不存在。”是否应该改成“（1）如果目标子字符串在字符串中不存在，那么.index() 会抛出ValueError。”？同问该页末行。

这样的表达貌似会更适合，就按编辑你的这个想法来。

:::

## Question 6

::: tip P171“示例 1: 替换空格为‘*’ ”中的单引号是否应改成双引号（“”）？同问示例2和示例3。

我大概能 get 到你的意思：双引号更适合中文，单引号是为了适配代码，下方代码里面写的就是单引号。不过我在思考：出版打印时，单引号是这种 `‘*’` 还是这种 `'*'`，如果显示后者则继续保留。如果显示的是前者，那么可以改成双引号（`“”`）。（不知道你能否看出引号的区别。）

:::

## Question 7

::: tip P236倒数第9行“1. 假设有两个列表：”，但后文未见标题“2. ……”及相应正文。待添加。

这部分我核对了原稿文件，`1.` 多打了，直接把这个序号去掉即可。 

:::



## Question 8

::: tip P277 倒数第12行“把多余的空字符先使用 len() 计算在内，计算完成之后 -1 即可；”中，“ -1 ”之前是否应加上“使用”或其他动词？

可以，我这么写：**方法一**：把多余的空字符先使用 len() 计算在内，计算完成之后**再减 1 即可**。；

:::

## Question 9

::: tip P290 出现了“2.1 条件判断流程图示例”，但后文未见标题“2.2 ……”及相应正文。待提供。

原稿就是没有设计 2.2，只有 2.1。把标题去掉，改成正文：接下来，我为你准备了两张图示。

:::

## Question 10 

::: tip P346 首行标题中的“小贴士”与 P345 最后一个小标题“小贴士：”重复了。如何修改该标题？

我反复核对两个小贴士，内容上没有重复，是对同一主题的不同角度扩展。

最终修改方法：

- 第一个改为：「**实操提示：多最大值时的循环逻辑**」
- 第二个改为：「**思路总结：确定与收集的两步法**」

:::

## Question 11

::: tip P384 标题 2.9.3 下方仅有标题“1.有 return 提前终止”，但后文未见标题“2.……”及相应正文。待提供。

一开始排版格式给弄错了，直接把：

- 1. 有 return 提前终止
- (1) break 示例 ——> 2. break 示例
- (2) continue 示例 ——> 3. continue 示例
- (3) return 示例 ——> 4. return 示例

:::

