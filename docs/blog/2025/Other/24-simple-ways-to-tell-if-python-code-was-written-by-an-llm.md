---
title: Simple Ways to Tell if Python Code Was Written by an LLM
icon: blog
date: 2025-05-23 22:26:42
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

As a data science and math instructor, I actually don’t mind if my students use LLMs like ChatGPT, as long as it’s supplementing their learning process and not detracting from it. The [Caltech admissions essay guidelines](https://www.admissions.caltech.edu/apply/first-year-applicants/supplemental-application-essays/ethical-use-of-ai-guidelines-for-fall-2025-applicants) inspired my AI policy for my programming and machine learning classes:

> What are some examples of **unethical** uses of AI for Caltech admissions essays?
>
> - Copying and pasting directly from an AI generator
>
> - Relying on AI generated content to outline or draft an essay
>
> - Replacing your unique voice and tone with AI generated content
>
> - Translating an essay written in another language
>
> What are some examples of **ethical** uses of AI for Caltech admissions essays?
>
> - Using AI tools, like Grammarly or Microsoft Editor, to review grammar and spelling of your completed essays
>
> - Generating questions or exercises to help kick start the brainstorming process
>
> - Using AI to research the college application process
>
> **If you are still wondering whether your use of AI […] is ethical, ask yourself whether it would be ethical to have a trusted adult perform the same task you are asking of ChatGPT.** Would a teacher be able to review your essay for grammatical and spelling errors? Of course! Would that same teacher write a draft of an essay for you to tweak and then submit? Definitely not.

That said, I’ve been getting some code submissions lately that are so obviously and completely AI-generated that I’ve had to put together my own compilation of AI omens. Of course, differentiating between human-generated and AI-generated code is getting more difficult every day. Still, there are some commonalities between ChatGPT/Claude/DeepSeek AI-generated code that are immediate red flags.

## Comments

Do I wish that all my students commented as thoroughly as ChatGPT does? Absolutely. Do they? Definitely not.

🚩 Overly detailed commenting or odd commenting styles can indicate AI use.

For instance, when using DeepSeek, you’ll see a docstring with three quotation marks as a instead of a comment using the standard pound (`#`), even though the docstring does not specify the arguments or the return values:

```python
def find_squares_adding_to_zero(mod):
    """Find two non-zero numbers a and b such that a^2 + b^2 ≡ 0 mod n."""
    for a in range(1, mod):  # Start from 1 to exclude a = 0
        for b in range(a, mod):  # Start from a to avoid redundant pairs
            if (a**2 + b**2) % mod == 0:
                return (a, b)
    return None
```

I find this to be an unnatural and odd way of commenting a single line, particularly given the context that I teach single-line comments in Python using #, and this is not proper docstring formatting.

Special characters in comments can also be an indicator of AI-generated code. Unless I’m writing something I know will be seen by many people, I probably wouldn’t put the effort into finding characters like “`≡`” just for a comment. I’d wager my students feel the same way.

## Lambda Expressions

Don’t get me wrong — I love lambda expressions and consider them a unique and valuable feature of Python. I see them as compact, throwaway functions meant to be created and passed directly as arguments to other functions. When used properly, they shine in situations where you need to pass a simple, one-off function to another function, like in `map()`, `filter()`, or `sorted()`. That said, lambda expressions can be a red flag when overused, applied incorrectly, or introduced prematurely.

🚩 The misuse of lambda expressions demonstrates a lack of thoughtful design or an overreliance on AI.

For instance, if I got the following code submission before we’ve gone in depth on lambda expressions, and for a task such as this, I’d sniff out the ChatGPT use immediately:

```python
from functools import lru_cache

fib = (lambda f: (lambda x: f(f, x)))(lambda self, n: 
    n if n < 2 else self(self, n-1) + self(self, n-2))

# Generate the first 10 Fibonacci numbers
fib_sequence = [fib(n) for n in range(10)]
print(fib_sequence)
```

This is clearly a problem not well-suited to a lambda expression and is too complex for students to get to naturally and on their own in a first Python course.

## Libraries

**Placement of Library Imports**

🚩 On occasion, LLMs will place library imports in weird places (places other than the top of the file).

I’ve only seen this happen a few times, but particularly if you’ve emphasized to students that library imports should go at the beginning or in one place all together, this should seem fishy.

**What Libraries Are In-Use:**

🚩 Using a library to execute a task that doesn’t necessarily require it can indicate AI use, particularly if it’s a library that isn’t common or hasn’t yet been introduced.

Let’s revisit the lambda expression code from above:

```python
from functools import lru_cache

fib = (lambda f: (lambda x: f(f, x)))(lambda self, n: 
    n if n < 2 else self(self, n-1) + self(self, n-2))

# Generate the first 10 Fibonacci numbers
fib_sequence = [fib(n) for n in range(10)]
print(fib_sequence)
```

If you haven’t introduced the functools library, a student very likely could have found out about it by using either Google or an LLM. There’s nothing wrong with discovering libraries using these tools, but it could tip you off to their specific implementation being AI-generated as well.

## Naming and Formatting Inconsistencies

This one speaks for itself. If you have an assignment where a field or variable name is something specific, AI-generated code will generalize it to a variable name that feels more explanatory but less natural. For instance, in the following code to find all primes less than a given number n, the average student would likely have less descriptive variable and function names:

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

I would likely use “n” instead of “limit” or just “prime_finder” instead of “sieve_of_eratosthenes”. That said, particularly detail-oriented students might be wrongly accused of AI use under this rule, so I mainly consider this AI-generated code when combined with some of the other red flags provided in this article.

## Incorrect Logic

Logical errors are the most obvious red flag of all, on paper. In practice, it’s more difficult to tell — how can you determine if a language model made a logical mistake or if a student just didn’t quite get it?

At their core, LLMs are statistical models designed to predict the likelihood of the next token (such as a word, letter, or subword unit) based on patterns learned from their training data. While they excel at generating coherent and contextually relevant text, they lack true understanding, reasoning, or algorithmic thinking. This limitation often leads to errors in tasks requiring precise logic, like solving math problems or generating code. An LLM might produce plausible-sounding but incorrect solutions or fail to follow complex logical sequences. For example, I’ve seen LLMs struggle with indexing in mathematical applications, not address edge cases, and provide outright incorrect results.

🚩 If the code contains errors in logic or errors in reasoning, it could be AI-generated.

Ideally, a diligent student would carefully review and correct such errors before submission. However, in practice, this step is often overlooked; I’ve gotten code submissions that produce incorrect outputs or don’t even run in the first place.

As a disclaimer, it’s difficult to create hard and fast rules for telling if code is AI-generated, so I’d recommend approaching students with curiosity instead of accusation. If I believe a student is using AI to an unhealthy extent, I may ask them to have a whiteboard coding session on a related problem or ask about their intuition behind their solution. With the right support and attention to detail, I hope we can build up future professionals who use AI as a tool and not a crutch.

What are some LLM red flags you’ve noticed?











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

[.](https://medium.com/science-spectrum/simple-ways-to-tell-if-python-code-was-written-by-an-llm-ce51f16a78cd)