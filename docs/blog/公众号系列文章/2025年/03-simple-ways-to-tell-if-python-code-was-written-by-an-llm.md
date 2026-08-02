---
title: 03-如何快速识别一段 Python 代码是不是 AI 写的？
icon: blog
date: 2025-05-25 22:45:34
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

![](https://blog.images.bornforthis.cn/docs-images/sha256/8e/8ed4101a443a5e7e7b89bd5b9f4ae6fdd658f2fd965cf0199372ffc8ed7b7a58.jpg)

你好，我是悦创。

作为一名数据科学和数学的教学者，其实我并不介意学生使用 ChatGPT 这样的 LLM（大语言模型），前提是他们把它当作学习过程中的辅助工具，而不是学习的替代品。[加州理工学院（Caltech）](https://www.admissions.caltech.edu/apply/first-year-applicants/supplemental-application-essays/ethical-use-of-ai-guidelines-for-fall-2025-applicants)对申请者撰写入学文书时的 AI 使用指南，启发了我为自己的编程和机器学习课程制定了一套 AI 使用规范：

> **哪些是 Caltech 所认为的不道德的 AI 使用方式？**
>
> - 直接复制粘贴 AI 生成的内容；
> - 依赖 AI 来构思或草拟整篇文章；
> - 用 AI 内容取代你原本独特的语气和风格；
> - ~~翻译一篇你用其他语言写好的文章~~ 翻译用另一种语言写的文章；
>
> **哪些是合理且道德的 AI 使用方式？**
>
> - 使用 Grammarly 或 Microsoft Editor 等 AI 工具检查语法与拼写
> - 用 AI 提问或生成练习题以启动头脑风暴过程
> - 利用 AI 研究大学申请流程
>
> **如果你还不确定你的 AI 使用是否合适，不妨这样问自己：你会请一个值得信任的成年人帮你完成这件事吗？换句话说：你会让 ChatGPT 做的事情，同样让一个成年人帮你做吗？如果你觉得不妥，那就是不合适的！**
>
> 比如，请老师帮你检查语法和拼写？完全没问题。
>
> 可如果是让老师帮你写好草稿，你稍作修改就提交？那就不合适了。

话虽如此，最近我收到了一些学生提交的代码，实在是太明显、太彻底地“AI 味”十足了。因此，我整理了一份“AI 代码征的清单”，列出了一些容易识别出 AI 生成代码的特征。当然，辨别人写的代码和 AI 写的代码每天都在变得更困难。但目前还是能找到一些共同点，尤其是出现在 ChatGPT、Claude、DeepSeek 生成的代码中——这些共同点是立即需要警惕的危险信号。



## 一、注释风格

我当然希望所有学生都能像 ChatGPT 一样写出详尽的注释——但现实是，他们做不到。

🚩 **过度详细的注释**，或**风格怪异的注释**，可能意味着是 AI 写的。

比如，DeepSeek 很喜欢用三引号 `"""` 写多行注释，即使那根本不是真正的 docstring，也没有标明参数或返回值：

```python
def find_squares_adding_to_zero(mod):
    """Find two non-zero numbers a and b such that a^2 + b^2 ≡ 0 mod n."""
    for a in range(1, mod):  # Start from 1 to exclude a = 0
        for b in range(a, mod):  # Start from a to avoid redundant pairs
            if (a**2 + b**2) % mod == 0:
                return (a, b)
    return None
```

这种注释方式我觉得非常不自然，因为在我的课堂上我们讲的是用 `#` 来做单行注释，而 `"""` 是专门用于 docstring 的。

另外，如果在注释中出现像“`≡`”这样的特殊字符，也可能是 AI 写的。除非我打算让很多人看到这段代码，不然我自己写代码时几乎不会特地去找这些符号——我相信学生们也一样。



## 二、Lambda 表达式

别误会，我本人很喜欢 lambda 表达式，也认为它们是 Python 的一项精巧设计。不过，lambda 的本意是写一些临时、一次性的小函数，比如传入 `map()`、`filter()`、`sorted()` 这种函数中。

🚩 **如果 lambda 被用错了、滥用了（缺乏周到的设计），或出现在学习进度尚未涉及的时候，就很可能是 AI 写的。**

比如，如果在我们还没系统学习 lambda 的时候，学生交上这样一段代码，我很容易就能闻出 ChatGPT 的味道：

```python
from functools import lru_cache

fib = (lambda f: (lambda x: f(f, x)))(lambda self, n: 
    n if n < 2 else self(self, n-1) + self(self, n-2))

# Generate the first 10 Fibonacci numbers
fib_sequence = [fib(n) for n in range(10)]
print(fib_sequence)
```

这段代码太复杂、太“反自然”，不像一个初学者能自然写出来的，特别是把**递归逻辑硬塞进 lambda 表达式中**，明显是 AI 的风格。



## 三、库的使用方式

**库导入的位置问题**

🚩 如果库的 `import` 没写在文件开头，而是“散落”在代码中某处，这可能是 AI 写的。

虽然这种情况我只遇到过几次，但如果你课堂上强调过“所有导入要放在文件开头”，那看到这种代码就要警觉。

**使用的库本身**

🚩 使用一个没有必要的库，尤其是还没在课堂中讲到的库，也可能是 AI 参与的痕迹。

还是看之前那段 lambda 代码：

```python
from functools import lru_cache
```

如果你还没讲过 `functools` 模块，那学生可能是用 ChatGPT 或谷歌找到的。使用这些工具发现库本身并没有错，但确实提示了我们：“AI 介入”的可能性。



## 四、命名与格式不一致「具有争议的标准」

这个问题就比较直观了，如果你布置作业时明确写了某个变量或字段的名字，但学生交上来的代码却用了一堆“规范但不符合你的要求”的变量名——那很可能是 AI 写的。

比如这段代码是求小于 n 的所有素数，变量命名都非常标准：

```python
def sieve_of_eratosthenes(limit):
    """Return a list of all prime numbers less than the given limit."""
    if limit <= 2:
        return []

    # Initialize a boolean array to track prime numbers
    is_prime = [True] * limit
    is_prime[0] = is_prime[1] = False  # 0 and 1 are not primes

    for num in range(2, int(limit**0.5) + 1):
        if is_prime[num]:
            # Mark multiples of num as non-prime
            for multiple in range(num * num, limit, num):
                is_prime[multiple] = False

    # Collect all prime numbers
    primes = [num for num, prime in enumerate(is_prime) if prime]
    return primes

# Example usage
limit = 50  # Change this value to find primes less than a different number
primes = sieve_of_eratosthenes(limit)
print(f"Primes less than {limit}: {primes}")
```

普通学生可能会使用描述性较差的变量名和函数名，而我自己的写法可能会直接用 `n` 代替 `limit`，函数名也会用 `prime_finder()` 而不是 `sieve_of_eratosthenes()` 这么长。虽然不能完全凭这点就断定是 AI 写的，但如果结合其他“特征”，就更有可能了。

注意：这里是针对初学者，如果是老手的程序员或者想要精进，这种命名方法是推荐的。



## 五、逻辑错误

最明显的信号，当然是逻辑错误。但要区分是学生的水平不够，还是 AI 理解出了问题，其实很难。

LLM 本质上是基于概率建模的系统，它们根据上下文生成“可能合理”的下一个词或代码块，而不是“真正理解”问题。这导致它们在处理需要严密推理或逻辑严谨的问题时，经常会出现错误。比如：索引出错、不处理边界情况、算错结果等等。

🚩 **如果代码中存在不符合逻辑的错误，尤其是算法推导出错，那就很可能是 AI 写的。**

理想情况下，认真负责任的学生会在交作业前检查并修复这些问题。但现实是，很多学生交上来的代码根本跑不通，甚至直接报错。



## 六、最后一点建议

我们很难用一套“绝对规则”来判断一段代码是不是 AI 写的，所以我建议大家在教学时以“探索式”的态度去沟通，而不是质疑或指责。如果我怀疑某位学生对 AI 依赖过度，我可能会请他在白板上现场讲讲解决思路，或者让他解释自己写的代码是怎么来的。

只要给予适当的引导和信任，我们是可以培养出能善用 AI 的未来专业人才的 —— 把 AI 当作工具，而不是拐杖。

你有没有发现过类似的“AI痕迹”？欢迎一起交流。

哦对，还可以让学生使用 github 进行开发跟踪！

::: tabs

@tab Arthur van der Harg

A danger that many people don’t yet recognize: as AIs get better at coding, one needs more experience to catch their errors. Trouble is: the more people use AI for simple coding, the less experience they are going to build. They are not going to stub their toes on the simple problems. All of a sudden they are going to have to catch that an AI mistakenly caused an off by one error in a recursive function, without ever having caused off by one errors or infinite recursion themselves. I predict we’ll see this manifest in five to ten years.

> 许多人尚未意识到一个危险：随着人工智能编程能力的提升，人们需要更多经验才能发现它们的错误。问题在于：人们用人工智能进行简单编程的次数越多，积累的经验就越少。他们不会在简单的问题上碰壁。突然之间，他们就必须发现人工智能错误地导致递归函数出现“一次错误”（off by one error），而他们自己从未引发过“一次错误”或无限递归。我预测，我们将在五到十年内看到这种情况的发生。

@tab MonkeyAtATyperwriter

One easy way to weed out AI is with complexity. Self contained Leetcode style questions are easy for an LLM. However, real engineering requires taking into account the context of an entire application with all of its modules and classes. That is just too much context for current LLM to process. Give students an existing project and ask them to add a feature to it. They may use AI to help. However, they will have to assemble the pieces themselves just like a calculus student using a calculator to outsource the trivial parts.

> 淘汰人工智能的一个简单方法是提高复杂性。Leetcode 式的自包含问题对法学硕士来说很容易。然而，真正的工程需要考虑整个应用程序及其所有模块和类的上下文。这对于目前的法学硕士来说，处理起来实在是太复杂了。给学生一个现有的项目，让他们添加一个功能。他们可能会使用人工智能来帮忙。但是，他们必须自己组装这些部件，就像微积分学生用计算器把琐碎的部分外包出去一样。

@tab H. Ali

After this post your students will feed this post as a prompt to LLM and bypass your check.

> 发表此帖后，您的学生将把此帖作为提示提供给 LLM，并绕过您的检查。

You happy professor and your students happy too 😁.

您是快乐的教授，您的学生也快乐😁。

@tab Harlan Brothers

However, in practice, this step is often overlooked; I’ve gotten code submissions that produce incorrect outputs or don’t even run in the first place.

I find that particularly bizarre. I always think of those who are drawn to coding as people who love the precision and logic that it requires and the reward of writing something that works. If a person can turn in assignment that doesn’t even run, that speaks for itself.

我觉得这特别奇怪。我一直觉得那些对编程着迷的人，都是热爱编程所需的精准性和逻辑性，以及写出能用的东西所带来的回报的人。如果一个人能交一份连程序都跑不出来的作业，那说明他的能力了。

Great article, Lauren!  很棒的文章，劳伦！

@tab Peng Qian

I don't think it's unethical to use an LLM to translate articles into another language. Personally, English isn't my first language, so having fluent conversations with English-speaking readers is tough for me. Thanks to LLMs, I now have a way to connect with the world.

> 我认为用法学硕士（LLM）学位将文章翻译成其他语言并没有什么不道德。就我个人而言，英语不是我的母语，所以与英语读者进行流利的对话对我来说很难。感谢法学硕士，让我现在有了与世界沟通的途径。

Similarly, with the help of LLMs, I can now read all the books on Amazon fluently, which has been a huge help in understanding the world better.

> 同样，在法学硕士的帮助下，我现在可以流利地阅读亚马逊上的所有书籍，这对更好地了解世界有很大帮助。

@tab Kristopher Knight

I disagree with the idea that using AI in writing is inherently “unethical.” Perhaps this is an opportunity to reflect on how humanity once again finds itself squabbling over the use of technology in the creative process.

> 我不同意将人工智能应用于写作本质上是“不道德的”。或许，这或许是一个反思的机会，让我们思考人类如何再次就技术在创作过程中的应用产生争议。

There was a time when spellcheck and grammar tools were considered unethical or controversial. Now, they’re standard. Adjusting one’s tone after providing the input shouldn’t be seen any differently—it’s no more unethical than Microsoft Word correcting your grammar.

> 曾经有一段时间，拼写检查和语法工具被认为是不道德或有争议的。现在，它们已成为标准。在输入内容后调整语气不应被视为有任何不同——它并不比 Microsoft Word 纠正你的语法更不道德。

There’s an old saying: “garbage in, garbage out.” Even with AI, that principle still applies. The quality of the output depends entirely on the quality of the input.

> 俗话说：“垃圾进，垃圾出。”即使到了人工智能时代，这条原则依然适用。输出的质量完全取决于输入的质量。

@tab Stephan

Sooner or later we will realise that using a computer program to write a computer program in human understandable language is a more than unnecessary diversion

> 我们迟早会意识到，用计算机程序以人类可理解的语言编写计算机程序是一种不必要的浪费

@tab Greg Silverman

So, if you are teaching intro to Python these clues indicate a student let an LLM generate their assignment.

> 因此，如果您正在教授 Python 入门课程，这些线索表明学生让 LLM 生成他们的作业。

But, otherwise some of these techniques, like the use of docstrings for classes, and even functions, could indicate a sophisticated programmer wrote them.

> 但是，其中一些技术，例如使用类的文档字符串，甚至函数，可能表明它们是由一位老练的程序员编写的。

Except for the lambda example all programmers should strive to program these ways.

> 除了 lambda 示例之外，所有程序员都应该努力采用这些方式进行编程。

:::

::: details

## Ethics and AI at Caltech

##### *All Fall 2025 applicants will be asked to review Caltech's guidelines on the ethical use of AI before submitting their* [*supplemental essays*](https://www.admissions.caltech.edu/apply/first-year-applicants/supplemental-application-essays)*.*

[Artificial Intelligence](https://scienceexchange.caltech.edu/topics/artificial-intelligence-research) (AI) research at Caltech is groundbreaking, and Caltech students will encounter AI in a wide range of interdisciplinary applications.

Since 2018, Caltech's [AI4Science](https://www.ai4science.caltech.edu/) (or *Artificial Intelligence for Science*) Initiative has provided training and access to modern AI tools so researchers across a wide range of disciplines, from economics to astrophysics, can harness the power of AI. In 2023, Caltech established the [Center for Science, Society, and Public Policy](https://lindeinstitute.caltech.edu/research/csspp) to examine the intersection of science and society, facilitate discussion of scientific ethics, and help shape public science policy.

The Caltech community cares deeply about the ethical and social implications of AI technology, and this starts with the ethical use of AI by our applicants to Caltech undergraduate and graduate degree programs.

The Undergraduate Faculty Admissions and Graduate Studies committees convened and have approved of the following ethical guidelines for the use of AI in the Fall 2025 application cycle. As access to AI continues to grow and the technology evolves, so will our recommendations and expectations for future application cycles.

### Ethical Use of AI: Guidelines for Fall 2025 Applicants

Your essays are where we hear **your voice.** Relying on AI, specifically large language models such as ChatGPT or Bard, to craft your essay will dilute your unique expression and perspective. While we know AI tools have become readily accessible over recent months, overuse of AI will diminish your individual, bold, creative identity as a prospective Techer.

What are some examples of **unethical** uses of AI for Caltech admissions essays?

- Copying and pasting directly from an AI generator
- Relying on AI generated content to outline or draft an essay
- Replacing your unique voice and tone with AI generated content
- Translating an essay written in another language

What are some examples of **ethical** uses of AI for Caltech admissions essays?

- Using AI tools, like Grammarly or Microsoft Editor, to review grammar and spelling of your completed essays
- Generating questions or exercises to help kick start the brainstorming process
- Using AI to research the college application process

**If you are still wondering whether your use of AI in crafting your application is ethical, ask yourself whether it would be ethical to have a trusted adult perform the same task you are asking of ChatGPT.** Would a teacher be able to review your essay for grammatical and spelling errors? Of course! Would that same teacher write a draft of an essay for you to tweak and then submit? Definitely not.

Above all else, remember to be **authentic to yourself** when writing your essays. Our Caltech supplemental questions are designed to spark your curiosity, to make you think deeply about whether you see yourself as a Techer, and to jumpstart your creativity – don't let a reliance on AI tools take that opportunity from you!

*Caltech students, faculty, and staff are guided by the* [*Honor Code*](https://www.admissions.caltech.edu/why-caltech/student-life/honor-code) *and policies of AI use as an academic tool by students will be determined by individual departments and/or individual faculty.*

### We are curious, just like you! Which is why we are asking the following question to Fall 2025 applicants.

Did you receive any AI generated assistance in the preparation of your application materials?

*Please note, this information is confidential and will not be used in our review of your application. Answers to this question will* *never* *be used against a student. Caltech admissions readers will never have access to this information at any point in our review; in fact, we will not access this information until May 2025, after all admissions decisions have been made and the class of 2029 is finalized. We are simply curious about the use of AI in the admissions process.*

:::







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