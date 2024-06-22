---
title: NYU Tandon School of Engineering Homework 09
date: 2023-04-20 06:42:35
author: AI悦创
isOriginal: true
category:
    - Python
    - Python一对一教学
    - Python一对一辅导
    - Python 辅导
    - 编程一对一教学
    - 少儿编程一对一
    - NYU编程辅导
    - NYU Python辅导
tag:
    - Python
    - Python一对一教学
    - Python一对一辅导
    - Python 辅导
    - 编程一对一教学
    - 少儿编程一对一
    - NYU编程辅导
    - NYU Python辅导
icon: python
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
backToTop: true
toc: true
---

Due: 1159pm, April 20th, 2023 

## Happiness Is A File's Code

> 幸福是一个文件的密码

## Background 

Music streaming companies such as Spotify and Apple Music are able to generate curated recommendations to their users by analysing the music that those users listen to daily. Incredibly, one of the metrics that they use to measure how "recommendable" a song is to a user is by comparing a song's [chord progression](https://www.musictheoryacademy.com/understanding-music/chord-progressions/) to those of the user's favourite songs. To give a simple example, if the user listens to a lot of songs with the following chord progression:

> 音乐流媒体公司如Spotify和Apple  Music能够通过分析用户每天听的音乐，为他们生成个性化的推荐列表。令人难以置信的是，他们用于衡量一首歌对用户是否有推荐价值的指标之一是将该歌曲的和弦进行与用户喜欢的歌曲进行比较。举个简单的例子，如果用户经常听以下和弦进行的歌曲：

> C major —> E dominant 7th –> F major –> F minor
>
> C大调 -> E属七和弦 -> F大调 -> F小调

Then other songs that follow a similar chord progression are more likely to get recommended to this user. 

> 那么，其他遵循类似和弦进行的歌曲更有可能被推荐给该用户。

Let's use this premise as a use case for our next problem where we are given a file (which you can download [here](https://drive.google.com/file/d/1qiMKwbUID4uUEzDpzGO66cm7bjedVIqj/view)) containing a song's chord progression broken down into individual notes:

> 让我们把这个前提作为下一个问题的用例，我们会得到一个文件（可以在此处下载：https://drive.google.com/file/d/1qiMKwbUID4uUEzDpzGO66cm7bjedVIqj/view），其中包含将歌曲的和弦进展分解为单个音符的信息。

```python
A,C#,E,F#,A
G#,D#,F#,C#,F,C,A#
C#,E,G#
E,G#,B
A,C#,E,F#,A
```

**Figure 1**: That is, for example, the first chord is comprised of the notes A (which appears twice), `C#`, E, and `F#`. 

> **图1**：例如，第一个和弦由音符A（出现两次）、C#、E和F#组成。

We would like to be able to read these lines and create a new file that contains the names of the chords that they could potentially form:

> 我们希望能够读取这些行，并创建一个包含它们可能形成和弦名称的新文件：

```python
A6,A13
G#13
C#m
Emaj,E6,E9,E13
A6,A13
```

Figure 2: That is, for example, the notes A, C#, E, and F# can be potentially part of the chords $A^6$ and $A^{13}$. 

> 图2：例如，音符A、C＃、E和F#可以潜在地成为和弦$A^6$和$A^{13}$的一部分。

This file, in other words, is going to be your final output. 

> 换句话说，这个文件将是你的最终输出。

Even if you don't know a lick of music theory, programmers who work in these companies are given supplementary files containing information about chords and the notes that make them up. Go ahead download this file–we'll be using it to help us out throughout this problem.

> 即使你对音乐理论一窍不通，这些公司的程序员也会被提供补充文件，其中包含有关和弦和构成它们的音符的信息。请下载这个文件——我们将在解决这个问题时使用它来帮助我们。

## get_chord_dictionary()

`(sig: str –> dict) `

Let's say your manager provides you with a file that contains the notes that each chord contains:

> 假设你的经理给你提供了一个文件，其中包含每个和弦所包含的音符。

```python
Root,Chord Name,Notes
Ab,maj,G#-C-Eb
Ab,m,G#-B-Eb
Ab,6,G#-C-Eb-F
Ab,9,G#-C-Eb-F#-Bb
Ab,dim,G#-B-D
Ab,13,G#-C-Eb-F#-Bb-C#-F
A,maj,A-C#-E
...
G#,dim,G#-B-D
G#,13,G#-C-Eb-F#-Bb-C#-F
```

**Figure 3**: A CSV file containing the names and notes of several chords for any given root note (key). That is, the A-flat (Ab) major (maj) chord contains the notes `G#`, C, and `Eb`. 

> 图3：一个CSV文件，包含任意给定根音符（调）的多个和弦的名称和音符。也就是说，A-flat（Ab）大调（maj）和弦包含音符G＃，C和Eb。

Our first step is to turn the contents into something we can work with in Python code. We would like to extract the data from this file and turn it into a dictionary of the following format: 

> 我们的第一步是将内容转换为我们可以在Python代码中处理的形式。我们希望从这个文件中提取数据，并将其转换为以下格式的字典：

```python
{
    'A': {
        '13': ('A', 'C#', 'E', 'G', 'B', 'D', 'F#'),
        '6': ('A', 'C#', 'E', 'F#'),
        '9': ('A', 'C#', 'E', 'G', 'B'),
        'dim': ('A', 'C', 'Eb'),
        'm': ('A', 'C', 'E'),
        'maj': ('A', 'C#', 'E')
    },
    'A#': {
        '13': ('Bb', 'D', 'F', 'G#', 'C', 'Eb', 'G'),
        '6': ('Bb', 'D', 'F', 'G'),
        '9': ('Bb', 'D', 'F', 'G#', 'C'),
        'dim': ('Bb', 'C#', 'E'),
        'm': ('Bb', 'C#', 'F'),
        'maj': ('Bb', 'D', 'F')
    },
    'Ab': {
        '13': ('G#', 'C', 'Eb', 'F#', 'Bb', 'C#', 'F'),
        '6': ('G#', C', 'Eb', 'F'),
        '9': ('G#', 'C', 'Eb', 'F#', 'Bb'),
        'dim': ('G#', 'B', 'D'),
        'm': ('G#', 'B', 'Eb'),
        'maj': ('G#', 'C', 'Eb')
    },
    ...,
    'Gb': {
        '13': ('F#', 'Bb', 'C#', 'E', 'G#', 'B', 'Eb'),
        '6': ('F#', 'Bb', 'C#', 'Eb'),
        '9': ('F#', 'Bb', 'C#', 'E', 'G#'),
        'dim': ('F#', 'A', 'C'),
        'm': ('F#', 'A', 'C#'),
        'maj': ('F#', 'Bb', 'C#')}
}
```

**Figure 4**: Our chord dataset from figure 3 turned into a chord dictionary. 

> 图4：我们从图3中得到的弦数据集转化为一个弦字典。

Write a function, `get_chord_dictionary()`, that accepts the chord dataset's filepath (a string) as its only parameter and returns a dictionary similar to the one in figure 4. If implemented correctly, you should observe the following behaviour:

> 编写一个函数 `get_chord_dictionary()`，它接受和弦数据集的文件路径（一个字符串）作为唯一参数，并返回一个类似于图4中的字典。如果正确实现，您应该观察到以下行为：

```python
from pprint import pprint # for nice formatting of dictionary output
chord_dictionary = get_chord_dictionary("chords.csv") # assuming this file is
in your working directory
# "Give me all of the CHORDS we have available in the key of Eb (E-flat)"
pprint(chord_dictionary["Eb"])
# "Give me all of the NOTES that make up the F diminished chord (Fdim)"
print(chord_dictionary["F"]["dim"])
# "Give me the 0th note from the notes that make up a C sharp thirteenth chord
(C#13)"
print(chord_dictionary["C#"]["13"][0])
```

Output:

```python
{'13': ('Eb', 'G', 'Bb', 'C#', 'F', 'G#', 'C'),
 '6': ('Eb', 'G', 'Bb', 'C'),
 '9': ('Eb', 'G', 'Bb', 'C#', 'F'),
 'dim': ('Eb', 'F#', 'A'),
 'm': ('Eb', 'F#', 'Bb'),
 'maj': ('Eb', 'G', 'Bb')}
('F', 'G#', 'B')
C#
```

Notes:

- You may not assume that the chords dataset CSV file will exist–your function must check for its existence before attempting to read from it. If, for whatever reason, the file is not found, your function should return an empty dictionary instead. 

> 在尝试读取和处理和弦数据集 CSV 文件之前，你不能假设该文件已经存在。你的函数必须在尝试读取文件之前检查文件是否存在。如果由于任何原因，该文件未被找到，你的函数应该返回一个空字典。

- You may assume that the integrity of the data inside of the dataset file will always be solid i.e. each data point will always be either a note name or a chord name. 

> 你可以假设数据集文件中的数据完整性始终良好，即每个数据点始终是音符名称或和弦名称。

- While the contents of the file can be different depending on the file that your boss gives you, you can assume that it will always contain a header line.

> 虽然文件的内容取决于老板给你的文件类型，但你可以假设它始终包含标题行。

### Answer1

::: tabs

@tab 1

```python
import csv
from pprint import pprint


def get_chord_dictionary(filepath: str) -> dict:
    chord_dictionary = {}

    try:
        with open(filepath, 'r') as csvfile:
            reader = csv.reader(csvfile)
            next(reader)  # skip header

            for row in reader:
                root, chord_name, notes = row
                notes_tuple = tuple(notes.split('-'))

                if root not in chord_dictionary:
                    chord_dictionary[root] = {}

                chord_dictionary[root][chord_name] = notes_tuple

    except FileNotFoundError:
        return {}

    return chord_dictionary


if __name__ == '__main__':
    r = get_chord_dictionary("chords-normalised.csv")
    pprint(r)
```

@tab 2

```python
import csv
from pprint import pprint


def get_chord_dictionary(filepath: str) -> dict:
    chord_dictionary = {}

    try:
        csvfile = open(filepath, "r")
        head = csvfile.readline()
        data_list = []
        line = csvfile.readline()
        while line:
            data_list.append(line.strip())
            line = csvfile.readline()
        # print(data_list)
        for row in data_list:
            # print(row)
            root, chord_name, notes = row.split(",")
            # print(root, chord_name, notes)
            notes_tuple = tuple(notes.split('-'))
            # print(notes_tuple)
            if root not in chord_dictionary:
                chord_dictionary[root] = {}
            chord_dictionary[root][chord_name] = notes_tuple

    except FileNotFoundError:
        return {}

    return chord_dictionary


if __name__ == '__main__':
    r = get_chord_dictionary("chords-normalised.csv")
    pprint(r)
```





:::

## get_possible_chords()

`(sig: list, dict –> tuple) `

Okay, so now that we have our chord dictionary, we would like to have a function that determines whether a list of notes can form any of the chords included in it. For example, if we assume that the first note represents the root of the chord, the following list of notes:

> 好的，既然我们已经有了和弦字典，我们想要有一个函数来确定一个音符列表是否可以组成其中任何一个和弦。例如，如果我们假设第一个音符代表和弦的根音，那么以下的音符列表：

```python
E, B, G#
```

Can form the chords Emaj, `E6`, `E9`, and `E13`, since all four of these chords contain those three notes:

> 可以形成E大调和弦、E6、E9和E13，因为这四个和弦都包含这三个音符。

```python
Emaj –> E, G#, B
E6 –> E, G#, B, C#
E9 –> E, G#, B, D, F#
E13 –> E, G#, B, D, F#, A, C#
```

Write a function `get_possible_chords()` that does just this: accept a list of notes (string objects) and a chord dictionary like the one returned by `get_chord_dictionary()` and returns a tuple of chords from the chord dictionary that this list of notes could satisfy. For example:

> 编写一个名为 `get_possible_chords()` 的函数，接受一个音符列表（字符串对象）和一个和弦字典（与 `get_chord_dictionary()` 返回的相同），并返回一个元组，其中包含该音符列表可能满足的和弦。例如：

```python
chord_dictionary = get_chord_dictionary(chords_filepath)
print(get_possible_chords(['E', 'B', 'G#'], chord_dictionary))
```

Output:

```python
('Emaj', 'E6', 'E9', 'E13')
```

You can assume that the first note in your list of notes is the root note (the key) and that all notes in the list will exist in the chord dictionary.

> 您可以假设您笔记列表中的第一个音符是根音（键），并且列表中的所有音符都存在于和弦字典中。

## get_chord_progression()

`(sig: str, str –> list) `

Let's put our two functions from above together. Write a function `get_chord_progression()` that accepts two strings:

> 让我们将上面的两个函数结合起来。编写一个名为 get_chord_progression() 的函数，接受两个字符串作为参数：

- The first string represents the address for a CSV file that contains the chord progression of a song broken down into notes (see figure 1). 

> 第一个字符串代表一个CSV文件的地址，其中包含被分解成音符的歌曲的和弦进行（参见图1）。

- The second string represents the address for the CSV file we'll use to create our chord dictionary (see figure 3). 

> 第二个字符串表示用于创建和弦字典的CSV文件的地址（参见图3）。

Using these two files and our functions `get_chord_dictionary()` and `get_possible_chords()`, `get_chord_progression()` must return a list of tuples, one tuple per chord in the chord progression file, where each tuple contains the chords from the chord dictionary that those notes could satisfy.

> 使用这两个文件和我们的函数 `get_chord_dictionary()` 和 `get_possible_chords()`，`get_chord_progression()` 必须返回一个元组列表，每个元组对应和弦进行文件中的一个和弦，其中每个元组包含和弦字典中这些音符可以满足的和弦。

For example, if we use the files from figures 1 and 3:

> 例如，如果我们使用图1和图3中的文件：

```python
chord_progression = get_chord_progression("chord-progression.csv", "chords-normalised.csv")
print(chord_progression)
```

Output:

```python
[('A6', 'A13'), ('G#13',), ('C#m',), ('Emaj', 'E6', 'E9', 'E13'), ('A6', 'A13')]
```

Notes:

- You may not assume that the chord progression file exists. If it doesn't, `get_chord_progression()` must return an empty list.

> 您不能假设和弦进度文件存在。如果不存在，则`get_chord_progression()`函数必须返回一个空列表。

- You must use `get_chord_dictionary()` and get_possible_chords() in this function in order to receive full credit.

> 你必须在这个函数中使用 `get_chord_dictionary()` 和 `get_possible_chords()` 才能获得全部的分数。

## write_progression_file()

`(sig: list, str –> None) `

Finally, we'd like to write a function `write_progression_file()` that accepts a chord progression list like the one returned by `get_chord_progression()` and writes a file like the one in figure 2. That is, it writes one CSV line per tuple. Your function must also accept a string denoting the name of the file that `write_progression_file()` will create:

> 最后，我们想要编写一个名为 `write_progression_file()` 的函数，它接受像 `get_chord_progression()` 返回的和弦进行列表，并编写类似于图2中的文件。也就是说，它每个元组将写入一个CSV行。您的函数还必须接受一个字符串，表示 `write_progression_file()` 将创建的文件名：

```python
chord_progression = get_chord_progression("chord-progression.csv", "chords-normalised.csv")
write_progression_file(chord_progression, filename)
```

Your function must work for any list of any number of different chord tuples. 

> 你的函数必须适用于任何数量的不同和弦元组的列表。

## Addendum

> "Addendum"的中文意思是“附录”、“补充说明”、“附加条款”。

Those of you with some music theory background will notice that notes that can have two names (i.e. B-flat can also be called A-sharp, etc.) are standardised to a single name in the problem. 

> 对于一些具有音乐理论背景的人，他们会注意到一些音符有两个名称（比如B-flat也可以称为A-sharp等），但在这个问题中，它们会被标准化为一个名称。

That is every instance of a(n)... 

> 这是“每一个……的实例”的意思。

- A-sharp was converted to B-flat. 

> "A-sharp" 转换成了 "B-flat"。

- D-flat was converted to a C-sharp. 

> D-flat 被转换为 C-sharp。

- D-sharp was converted to an E-flat.

> D#被转换成了Eb。

- G-flat was converted to an F-sharp. 

> G-flat被转换为F-sharp。

- A-flat was converted to a G-sharp.

> A-flat 被转换成了 G-sharp。

We basically standardised these notes to only have one name for the sake of simplicity. It's not important to know what this means; we just initially uploaded a README document that had examples before these measures were put into place by accident. Everything should be okay now.

> 我们基本上为了简单起见将这些笔记标准化为只有一个名称。知道这意味着什么并不重要；我们最初上传了一个README文档，其中包含这些措施实施之前的示例，这是意外的。现在一切都应该没问题了。

```python
from pprint import pprint


def get_chord_dictionary(filepath: str) -> dict:
    chord_dictionary = {}

    try:
        csvfile = open(filepath, "r")
        head = csvfile.readline()
        data_list = []
        line = csvfile.readline()
        while line:
            data_list.append(line.strip())
            line = csvfile.readline()
        # print(data_list)
        for row in data_list:
            # print(row)
            root, chord_name, notes = row.split(",")
            # print(root, chord_name, notes)
            notes_tuple = tuple(notes.split('-'))
            # print(notes_tuple)
            if root not in chord_dictionary:
                chord_dictionary[root] = {}
            chord_dictionary[root][chord_name] = notes_tuple

    except FileNotFoundError:
        return {}

    return chord_dictionary


def get_possible_chords(notes: list, chord_dictionary: dict) -> tuple:
    root = notes[0]  # 假设音符列表中的第一个音符是根音
    possible_chords = []  # 创建一个空列表，用于存储可能的和弦

    if root in chord_dictionary:  # 确保根音存在于和弦字典中
        for chord_name, chord_notes in chord_dictionary[root].items():
            i = 0
            found = True

            # 使用 while 循环检查音符列表中的每个音符是否都存在于和弦音符中
            while i < len(notes) and found:
                if notes[i] not in chord_notes:
                    found = False
                i += 1

            # 如果所有音符都存在于和弦音符中，则将和弦添加到可能的和弦列表中
            if found:
                possible_chords.append(f"{root}{chord_name}")

    return tuple(possible_chords)  # 将结果转换为元组并返回


def get_chord_progression(progression_filepath: str, chords_filepath: str) -> list:
    chord_dictionary = get_chord_dictionary(chords_filepath)
    chord_progression = []

    try:
        csvfile = open(progression_filepath, "r")
        data_list = []
        line = csvfile.readline()
        while line:
            data_list.append(line.strip())
            line = csvfile.readline()

        for row in data_list:
            notes = row.split(",")
            possible_chords = get_possible_chords(notes, chord_dictionary)
            chord_progression.append(possible_chords)

    except FileNotFoundError:
        return []

    return chord_progression


def write_progression_file(chord_progression: list, filename: str) -> None:
    file_content = ""

    for chord_tuple in chord_progression:
        file_content += ",".join(chord_tuple) + "\n"

    file = open(filename, "w")
    file.write(file_content)
    file.close()



if __name__ == '__main__':
    chord_dictionary = get_chord_dictionary("chords-normalised.csv")
    # pprint(chord_dictionary)
    print(get_possible_chords(['E', 'B', 'G#'], chord_dictionary))
    chord_progression = get_chord_progression("progression.csv", "chords-normalised.csv")
    print(chord_progression)
    # chord_progression = get_chord_progression("progression.csv", "chords-normalised.csv")
    write_progression_file(chord_progression, "output.csv")
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
