---
title: Assignment 3
date: 2023-06-06 14:25:44
icon: code
author: AI悦创
isOriginal: true
category: 
    - Python 一对一教学
    - SCU CS
    - Santa Clara University
    - 圣克拉拉大学
tag:
    - Python 一对一教学
    - SCU CS
    - Santa Clara University
    - 圣克拉拉大学
sticky: false
star: false
article: true
timeline: true
image: false
navbar: true
sidebarIcon: true
headerDepth: 5
comment: true
lastUpdated: true
editLink: false
backToTop: true
toc: true
footer: 长期招收编程一对一学员！微信：Jiabcdefh, <a href="https://beian.miit.gov.cn/" target="_blank">闽ICP备19021486号-6</a>
---

## Problem 1

Position yourself in /home/OMIS107/Lecture2. Print the lines of *alice.txt* that contain at least two words (not necessarily consecutive words) starting with “a”, with the first word being composed of at least 8 more letters after “a”.

```bash
grep -Ein "\ba[a-z]{8,}.*\ba" alice.txt
```

## Problem 2

Add “his or her majesty” before the occurrences of the word “the” + word starting with a capital letter and the word “a” + word starting with a capital letter, as in these examples:

- “the Hatter” → “his or her majesty the Hatter”
- “a Caterpillar” → “his or her majesty a Caterpillar”
- “Vanilla Ice cream” → “Vanilla Ice cream” (unchanged because “a” is not a word)

```bash
sed -r "s/\b(the|a)\b [A-Z]/his or her majesty &/g" alice.txt
sed -r "s/(\bthe\b|\ba\b) [A-Z]/his or her majesty &/g" alice.txt
```

::: details 命令解析

这两个 `sed` 命令都对输入文件 `alice.txt` 进行操作，尝试对文本进行替换。我们一次解释一个命令。

**第一个命令**：

```bash
sed -r "s/\b(the|a)\b [A-Z]/his or her majesty &/g" alice.txt
```

在这个命令中，`sed` 是一个流编辑器，用于处理文本。`-r` 是一个选项，表示使用扩展正则表达式。在引号中的部分是一个 `sed` 脚本，包含一个 `s` 命令，它用于替换文本。

`\b(the|a)\b [A-Z]` 是正则表达式，`\b` 是一个词边界符，表示前面和后面应是一个词的开始或结束。`the|a` 表示匹配 "the" 或者 "a"。 `[A-Z]` 表示匹配任何一个大写字母。所以这个表达式匹配的是以 "the" 或 "a" 开头，后面紧跟一个大写字母的字符串。

`his or her majesty &` 是替换模式。`&` 在这里代表了前面正则表达式匹配到的完整内容。所以，这个命令将会把 "the" 或 "a" 后面直接跟着大写字母的所有字符串替换成 "his or her majesty " 加上原来匹配到的字符串。

`g` 是一个选项，表示对每一行的所有匹配项进行替换，而不仅仅是每一行的第一个匹配项。

**第二个命令**：

```bash
sed -r "s/(\bthe\b|\ba\b) [A-Z]/his or her majesty &/g" alice.txt
```

这个命令和第一个非常相似，只是正则表达式有一些不同。在这个命令中，`\bthe\b` 和 `\ba\b` 被单独放在了括号里。但是，因为这两个词之间的竖线 `|` 表示 "或"，所以这个命令的效果和第一个命令是一样的。它也是将以 "the" 或 "a" 开头，后面紧跟一个大写字母的所有字符串替换成 "his or her majesty " 加上原来匹配到的字符串。

总的来说，这两个命令都会将文件 `alice.txt` 中的所有 "the" 或 "a" 后面直接跟着大写字母的字符串替换成 "his or her majesty " 加上原来匹配到的字符串。

:::

## Problem 3

To emphasize a verb in past tense, one could add “did” before it and turn the verb into present tense. Assume that all words ending with “ed” are verbs in past tense (e.g., invented, asked). Find all words ending in “ed”, add “did” before them and turn them into present tense. For example:

- “You invented it” → “you did invent it”
- “Alice asked a question” → “Alice did ask a question”
- “She asked.” → “She did ask.”
- “They need.” → “They did ne.” (do not worry about whether removing “ed” is grammatically incorrect)

```bash
sed -r "s/([a-z]*)ed\b/did \1/g" alice.txt
sed -r "s/([a-z]+)ed\b/did \1/g" alice.txt
```

::: details 命令解析

这两个 `sed` 命令基本上在做相同的操作，他们都使用了 sed 的 "s" 命令进行字符串替换。而这两条命令之间的主要区别在于使用的正则表达式。

`sed -r "s/([a-z]*)ed\b/did \1/g" alice.txt`

`sed -r "s/([a-z]+)ed\b/did \1/g" alice.txt`

正则表达式的不同点在于 "`([a-z]*)ed\b`" 和 "`([a-z]+)ed\b`"。在正则表达式中，"*" 和 "+" 都是表示重复的元字符，但是他们有一点区别：

- "*" 表示前面的元素可以重复零次或多次。也就是说，"`([a-z]*)ed`" 可以匹配到 "ed" (因为在这里，小写字母可以出现零次，即不出现)。

- "+" 表示前面的元素可以重复一次或多次。也就是说，"`([a-z]+)ed`" 只能匹配到至少有一个小写字母接着 "ed" 的字符串。

具体到这两个命令，它们在文件 alice.txt 中搜索匹配 "ed" 结尾的小写字母单词，并将找到的这些单词替换为 "did" 之后跟着这些单词的原始根形式（在此过程中去除了 "ed" 后缀）。这两个命令的执行会有细微的不同，因为第一个命令会匹配 "ed" 并将其替换为 "did"，而第二个命令则不会这样做。

例子：
- 如果文件 alice.txt 包含单词 "walked"，那么两个命令都会将其替换为 "did walk"。
- 如果文件 alice.txt 包含单词 "ed"，那么第一个命令会将其替换为 "did "，而第二个命令则不会有任何操作，因为 "ed" 前没有至少一个小写字母。

----

在这里，`\1` 是所谓的反向引用(backreference)。在正则表达式中，括号 `()` 用于捕获子模式。这些子模式可以用 `\1`，`\2`，`\3` 等数字进行引用，其中 `\1` 引用第一个括号中的子模式，`\2` 引用第二个括号中的子模式，以此类推。

在这两个 `sed` 命令中：

```bash
sed -r "s/([a-z]*)ed\b/did \1/g" alice.txt
sed -r "s/([a-z]+)ed\b/did \1/g" alice.txt
```

`\1` 是对正则表达式中 `([a-z]*)` 或 `([a-z]+)` 的引用，这两个子模式匹配到的是以 "ed" 结尾的单词的根形式（不包括 "ed"）。所以，当用 "did \1" 替换匹配到的单词时，`\1` 就会被替换为这个单词的根形式。

例如，如果原文中的单词是 "jumped"，那么在这个 `sed` 命令中，`([a-z]*)` 或 `([a-z]+)` 会匹配 "jump"，并且 `\1` 在替换过程中就代表 "jump"。所以 "jumped" 就会被替换为 "did jump"。

:::





## Problem 4

The goal of this exercise is to replace the occurrences in alice.txt that contain *the word* “**said**” *+ other words + punctuation mark* with *‘said someone’ + punctuation mark*. By “punctuation mark”, we mean any of the following characters ,.:;

Some examples:

- Line 3300: 'I won't!' said Alice. → 'I won't!' **said someone.**
- Line 3314: 'Wake up, Alice dear!' said her sister; 'Why, what a long sleep you've      
    - 'Wake up, Alice dear!' **said someone;** 'Why, what a long sleep you've   

- Line 396: but it said nothing. → but it **said someone**.

If the word “said” is followed by more than one punctuation mark in the same line, make sure to replace only up to the first punctuation mark. That is, the following replacement for example 2 is wrong:

'Wake up, Alice dear!' **said someone**, what a long sleep you've

::: details 命令解析

这条命令是使用了`sed`命令进行文本处理，这里是在处理一个名为`alice.txt`的文件。`sed`命令是一种流编辑器，可以用于对输入流（例如文件）进行基于行的文本转换和处理。

让我们逐一分解这个命令：

- `-r`：这个参数告诉 `sed` 使用扩展的正则表达式语法。

- `"s/\bsaid\b[ a-zA-Z]+([,.:;])/said someone\1/g"`: 这是一个 `sed` 的 `s`（替换）命令，它使用了正则表达式。

- `\bsaid\b`：`\b` 是单词边界元字符，它确保 "said" 是单独的一个单词，而不是其他单词的一部分，比如 "unsaid"。

- `[ a-zA-Z]+`：匹配一个或多个空格后跟的一个或多个英文字母。

- `([,.:;])`：这个表达式匹配一些标点符号（逗号、句号、冒号、分号）。这里的括号表示一个分组，这个分组可以在替换部分使用。

- `said someone\1`：这是替换部分的模式。`\1` 代表前面匹配的第一个分组，也就是前面的标点符号。

- `g`：这是一个全局标志，它意味着替换所有匹配的部分，而不仅仅是每行的第一个匹配。

总的来说，这个命令的作用是将文件 `alice.txt` 中所有形式为 "said + 空格 + 一个或多个英文字符 + 标点符号" 的部分替换为 "said someone + 相同的标点符号"。这个命令不会更改原文件，只会在命令行输出修改后的内容。如果你想直接在原文件上进行修改，你可以添加 `-i` 参数，像这样：`sed -i -r "s/\bsaid\b[ a-zA-Z]+([,.:;])/said someone\1/g" alice.txt`。

:::

















































::: details 公众号：AI悦创【二维码】

![](/gzh.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Web、Linux」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](/zsxq.jpg)

