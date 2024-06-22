---
title: Lab 5
icon: python
date: 2023-10-29 00:13:21
author: AI悦创
isOriginal: true
category: 
    - 1v1
    - python 1v1
    - 数据结构一对一
    - 留学生辅导
    - 留学生作业辅导
tag:
    - northeastern一对一辅导
    - 东北大学Python辅导
    - 东北大学Python一对一辅导
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
---

For lab 5, please do the following exercise

## Word & character counter

Download the text file from [hereLinks to an external site.](https://course.ccs.neu.edu/cs5001f20-sea/secure/corpse_bride.txt). You'll write a program called `word_count.py` that prompts the user for a file name, then prints out counts of words, non-whitespace characters (including punctuation), and alphanumeric characters (letters and numbers, excluding punctuation), like this:

```python
$ python word_count.py
Enter the file name: corpse_bride.txt
Words: 480
Characters: 2465
Letters & numbers: 2379
```

If the user enters an invalid file name the program should exit gracefully with the message `Can't open <file_name>`, like this:

```python
$ python word_count.py
Enter the file name: copse_brode.txt
Can't open copse_brode.txt
```

If you've looked at homework 5, you'll recognize a lot of what you have to do here.

### Reading files

Opening a file and reading it line by line is easy in Python. Read the docs about `open()` here: [https://docs.python.org/3/library/functions.html#openLinks to an external site.](https://docs.python.org/3/library/functions.html#open)

The name of the file will be passed in by the user after a prompt. The `open()` function takes a string argument representing the name of the file, and returns a file object. The file object will behave as a generator for lines of the file. This means that you can use a plain `for` loop to loop through the lines of the file.

### Exception handling

A user inputting an invalid file name is a good example of what's called an *exception* in programming. An exception is a possible state of the system that is not a part of the designed behavior of the system. *Exception handling* requires anticipating possible things that could go wrong and making sure that they are dealt with by the program in a useful and clear way.

Python's exception handling is done using `try:` and `except:` blocks. Python tries to execute the code in the `try:` block. If it executes successfully, then the code proceeds to execute as expected. If the code in the `try:` block raises an exception, then the code in the `except:` block will be executed instead. Read the documentation for exception handling here: [https://docs.python.org/3/tutorial/errors.html#handling-exceptionsLinks to an external site.](https://docs.python.org/3/tutorial/errors.html#handling-exceptions)

You'll use `try:` and `except:` blocks to give the the user receives a user-friendly message if they enter an invalid file name. After printing the message to the screen, you can call `return` which will end the execution of the function (this assumes that your code is in a `main` function, as it should be!)

### Pattern matching with regular expressions

For getting the word count and the character count, string methods such as [`.split()`Links to an external site.](https://docs.python.org/3/library/stdtypes.html#str.split) and [`.replace()`Links to an external site.](https://docs.python.org/3/library/stdtypes.html#str.replace) and the `len()` function should give you all you need.

For more sophisticated pattern matching, such as matching all alphanumeric characters, you'll probably want to use regular expressions (regexes). This requires importing the `re` library. Specifically, [`.findall()`Links to an external site.](https://docs.python.org/3.4/library/re.html#re.findall) will return a list of all matches of whatever regular expression pattern you pass it. Check out the [Regex How-ToLinks to an external site.](https://docs.python.org/3.4/howto/regex.html#regex-howto) for an introduction. If you're feeling pressed for time, search that document for `alphanumeric` to see how to represent alphanumeric (letter or number) characters as a regex pattern.

### Submitting

Submit `word_count.py` to Canvas.

corpse_bride.txt

```python
It's a Dead Scene, but That's a Good Thing
By MANOHLA DARGIS (New York Times)

A necro- philiac entertainment for the whole family to enjoy, "Tim Burton's Corpse Bride" marks the director's latest venture into the world of stop-motion animation, following "Tim Burton's The Nightmare Before Christmas" and "James and the Giant Peach." As in "Nightmare," kooky and spooky things go bump in the night, this time in the service of a lightly kinked romance about a melancholic boy, the girl he hopes to marry and the bodacious cadaver that accidentally comes between them.

Directed by Mr. Burton and Mike Johnson, and written by John August, Caroline Thompson and Pamela Pettler, the story hangs on a timid bachelor with matchstick legs and a pallid complexion, Victor (voiced by Johnny Depp), whose upwardly mobile parents arrange his marriage to Victoria (Emily Watson), the retiring daughter of impoverished gentry. When the wedding rehearsal goes kablooey, Victor retreats into the woods, whereupon he becomes the reluctant object of desire of the Corpse Bride, a blue-tinted beauty with gnawed-through limbs and a miraculously preserved bosom (Helena Bonham Carter, the director's very alive partner). Together, the eerie couple descends into the land of shades, inducing Victor to trade the world of the barely living for the land of the exuberantly dead.

For Victor and for his two directors, the underworld soon proves a more hospitable place than the world above, and far more entertaining. Above, the living shuffle about as somnolently as zombies amid a rainbow of gray, while down below, the walls are splashed with absinthe green, and the skeletons shake, rattle and roll. Bursting with mischief and life of a sort (think the grinning skulls of the Mexican artist JoseGuadalupe Posada), these skeletons dance themselves to pieces for a bravura musical number marred only by the composer Danny Elfman's insistence on recycling the same string of notes again and again. The notes reverberate more pleasantly when a gathering of spiders mend Victor's suit, notably because they trill a Gilbert and Sullivan pastiche as they stitch.

It all ends happily ever after, of course, though not before Mr. Burton and company have gathered the dead with the undead, and given a kick in the pants to a pinched-faced pastor even more shriveled than the bride herself. The anticlerical bit gives the story a piquant touch, while the reunion between the corpses and the ostensibly living further swells the numbers of zombies that have lately run amok in the movies. Cinema's reinvigorated fixation with the living dead suggests that we are in the grip of an impossible longing, or perhaps it's just another movie cycle running its course. Whatever the case, there is something heartening about Mr. Burton's love for bones and rot here, if only because it suggests, despite some recent evidence, that he is not yet ready to abandon his own dark kingdom.
```







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

