---
title: W14 - Worksheet 14： File IO and CSV Files
icon: python
date: 2022-10-04 19:42:05
author: AI悦创
isOriginal: true
category: 
    - 1v1
    - Python 1v1
    - 澳洲大学一对一
    - 墨尔本大学
tag:
    - 1v1
    - Python 1v1
    - 澳洲大学一对一
    - 墨尔本大学
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

## 1. Forgetful Karaoke

> 健忘的卡拉ok

**Life hack:**  if you're really bad at karaoke and can't remember the words, you can just repeatedly sing one word. If it's the most common word in the song, you'll be right more often than you might think (and may get away with it!).

> 生活小贴士:如果你真的不擅长卡拉 ok，不记得歌词，你可以重复唱一个词。如果它是歌曲中最常见的单词，那么你猜对的次数比你想象的要多(而且可能会侥幸逃脱!)

Write a function `approximate_song(filename)` that reads the lyrics of the song in the file of name filename, and returns the most common word in the song. In the event of a tie, your function should return the word that comes first alphabetically. Assume that words are whitespace-delimited, and use .split() with no stripping of punctuation or folding of case to extract the words from the text.

> 编写一个函数 `approximate_song(filename)`，它读取文件名为 filename 的文件中歌曲的歌词，并返回歌曲中最常见的单词。在平局的情况下，函数应该返回字母顺序排在前面的单词。假设单词是用空格分隔的，并使用 `.split()` 从文本中提取单词，不删除标点符号或折叠大小写。

We have provided lyrics for three songs for you to test your function: somebody.txt, barbrastrelsand.txt, and fakesong.txt. Note these are not the only files we will use to test your code. You can see the contents of these files by clicking on the tabs at the top-right of the page.

> 我们提供了三首歌曲的歌词供您测试您的功能: `some.txt`、`barbrastrelsand.txt` 和 `faksong .txt` 。注意，这些并不是我们用来测试代码的唯一文件。您可以通过单击页面右上角的选项卡查看这些文件的内容。

Outputs should be as below:

> 产出应如下:

```python
>>> approximate_song('somebody.txt")
'that'
>>> approximate_song("fakesong.txt")
"dum1"
>>> approx-imate_song("arbrastre-isand.txt")
"whooo-oo"
```

::: tip 提示 Dictionaries

This is very similar to the Top-5 Frequent words problem in Worksheet 11. Feel free to reuse your solution!

> 这与习题11中的前5个经常出现的单词问题非常相似。请随意重用您的解决方案!

:::

::: tip 翻译

写一个 function approximate_song(filename)，来提取一个歌词文件中出现最多的词，如果有多个词出现频率一样的话就依字母顺序取第一个

:::

### 1. 编写文件读取函数

```python
# -*- coding: utf-8 -*-
# @Time    : 2022/10/4 20:13
# @Author  : AI悦创
# @FileName: Forgetful_Karaoke.py.py
# @Software: PyCharm
# @Blog    ：https://bornforthis.cn/

# 文件读取
def read_file(filename):
    """
    :param filename:
    作用: 文件读取
    :return: 文本字符串,type: list
    """
    f = open(file=filename, mode="r", encoding="utf-8")
    content = f.readlines()  # list
    f.close()
    return content


def approximate_song(filename):
    """总调度"""
    content = read_file(filename=filename)
    print(content)


approximate_song("data/somebody.txt")
```

### 2. 编写单词解析 and 字典

```python
# -*- coding: utf-8 -*-
# @Time    : 2022/10/4 20:13
# @Author  : AI悦创
# @FileName: Forgetful_Karaoke.py.py
# @Software: PyCharm
# @Blog    ：https://bornforthis.cn/

# 文件读取
DATA_DICT = {}
def read_file(filename):
    """
    :param filename:
    作用: 文件读取
    :return: 文本字符串,type: list
    """
    f = open(file=filename, mode="r", encoding="utf-8")
    content = f.readlines()  # list
    f.close()
    return content


def details_words(word):
    global DATA_DICT
    if word in DATA_DICT:
        DATA_DICT[word] += 1
    else:
        DATA_DICT[word] = 1
def parse(content_list):
    for line in content_list:
        # print(line)
        line = line.replace("\n", " ")
        # print(line, end="")
        word_list = line.split(" ")
        # print(word_list)
        for word in word_list:
            if word:
                # print(word)
                details_words(word)


def approximate_song(filename):
    """总调度"""
    content_list = read_file(filename=filename)
    # print(content_list)
    parse(content_list)
    print(DATA_DICT)


approximate_song("data/somebody.txt")
```

### 3. 字典排序

```python
In [1]: d = {"bi": 2, "ap": 1, "cdf": 10}

In [2]: d_sorted_by_key = sorted(d.items(), key=lambda x: x[0])

In [3]: d_sorted_by_key
Out[3]: [('ap', 1), ('bi', 2), ('cdf', 10)]

In [4]: d_sorted_by_value = sorted(d.items(), key=lambda x:x[1])

In [5]: d_sorted_by_value
Out[5]: [('ap', 1), ('bi', 2), ('cdf', 10)]

In [6]: d_sorted_by_value = sorted(d.items(), key=lambda x:x[1], reverse=True)

In [7]: d_sorted_by_value
Out[7]: [('cdf', 10), ('bi', 2), ('ap', 1)]
```

### 4. 词频结果排序

```java
# -*- coding: utf-8 -*-
# @Time    : 2022/10/4 20:13
# @Author  : AI悦创
# @FileName: Forgetful_Karaoke.py.py
# @Software: PyCharm
# @Blog    ：https://bornforthis.cn/

# 文件读取
DATA_DICT = {}


def read_file(filename):
    """
    :param filename:
    作用: 文件读取
    :return: 文本字符串,type: list
    """
    f = open(file=filename, mode="r", encoding="utf-8")
    content = f.readlines()  # list
    f.close()
    return content


def details_words(word):
    global DATA_DICT
    if word in DATA_DICT:
        DATA_DICT[word] += 1
    else:
        DATA_DICT[word] = 1


def parse(content_list):
    for line in content_list:
        # print(line)
        line = line.replace("\n", " ")
        # print(line, end="")
        word_list = line.split(" ")
        # print(word_list)
        for word in word_list:
            if word:
                # print(word)
                details_words(word)


def sorted_words(words: dict):
    words_items = words.items()
    # sorted_by_key = sorted(words_items, key=lambda x: x[0])
    sorted_by_value = sorted(words_items, key=lambda x: x[1], reverse=True)
    # print(sorted_by_value)
    # for word, freq in sorted_by_value:
    #     if
    # first = sorted_by_value[0][1]
    first = sorted_by_value[0]
    position = 0
    target_words = []
    while True:
        if len(sorted_by_value) - 1 < position + 1:
            break
        else:
            second = sorted_by_value[position + 1]
        if first[1] != second[1]:
            # if first > second[1]:
            # return first
            break
        elif first[1] == second[1]:
            target_words.append(second)
            position += 1
        else:
            break
    # print(result_words)
    # print(first)
    if target_words:
        target_words.append(first)
        # print(target_list)
        result_lst = sorted(target_words, key=lambda x: x[0])
        return result_lst[0][0]
    else:
        return first[0]


def approximate_song(filename):
    """总调度"""
    content_list = read_file(filename=filename)
    # print(content_list)
    parse(content_list)
    # print(DATA_DICT)
    # sorted_words(DATA_DICT)
    # d = dict([('that', 24), ('I', 24), ('to', 24), ('you', 16), ('used', 12), ('know', 12), ('and', 9), ('But', 9),
    #           ('your', 9), ('Now', 8), ('me', 7), ('somebody', 7), ('we', 6), ('so', 6), ("you're", 6), ('just', 6),
    #           ('it', 5), ("don't", 5), ('Somebody', 5), ('then', 4), ('were', 4), ('was', 4), ("didn't", 4),
    #           ('have', 4), ('like', 4), ('need', 4), ('of', 3), ('when', 3), ('said', 3), ('could', 3), ('love', 3),
    #           ('a', 3), ('the', 3), ('friends', 3), ('And', 3), ('think', 2), ('Like', 2), ('felt', 2), ('still', 2),
    #           ('You', 2), ('always', 2), ('over', 2), ('cut', 2), ('off', 2), ('Make', 2), ('out', 2), ('never', 2),
    #           ('happened', 2), ('nothing', 2), ('even', 2), ('treat', 2), ('stranger', 2), ('feels', 2), ('rough', 2),
    #           ('No', 2), ('stoop', 2), ('low', 2), ('Have', 2), ('collect', 2), ('records', 2), ('change', 2),
    #           ('number', 2), ('guess', 2), ('though', 2), ('together', 1), ('happy', 1), ('die', 1), ('Told', 1),
    #           ('myself', 1), ('right', 1), ('for', 1), ('lonely', 1), ('in', 1), ('company', 1), ("it's", 1), ('an', 1),
    #           ('ache', 1), ('remember', 1), ('can', 1), ('get', 1), ('addicted', 1), ('certain', 1), ('kind', 1),
    #           ('sadness', 1), ('resignation', 1), ('end,', 1), ('end', 1), ('So', 1), ('found', 1), ('not', 1),
    #           ('make', 1), ('sense', 1), ('Well', 1), ('would', 1), ('be', 1), ("I'll", 1), ('admit', 1), ('glad', 1),
    #           ('all', 1), ('times', 1), ('screwed', 1), ('had', 1), ('believing', 1), ('something', 1), ("I'd", 1),
    #           ('done', 1), ('wanna', 1), ('live', 1), ('way', 1), ('Reading', 1), ('into', 1), ('every', 1),
    #           ('word', 1), ('say', 1), ('let', 1), ('go', 1), ("wouldn't", 1), ('catch', 1), ('hung', 1), ('up', 1),
    #           ('on', 1), ('That', 1)])
    r = sorted_words(DATA_DICT)
    # print(r)
    return r


r = approximate_song("data/fakesong.txt")
print(r)
```



### Question

![image-20221004202943624](./01-W14-Worksheet-14-File-IO-and-CSV-Files.assets/image-20221004202943624.png)

![image-20221004211451572](./01-W14-Worksheet-14-File-IO-and-CSV-Files.assets/image-20221004211451572.png)



## 2. Concatenate Files

> 连接文件

Write a function concatenate_files (filename1, filename2, new_filename) that concatenates the text from two source files such that the text from the file named by argument filename2 follows the text from filename1. The concatenated text should be written to a new file with the name given by new_file name. Your function must not return anything.

> 编写一个函数 concatenate_files(filename1, filename2, new_filename)，它将来自两个源文件的文本连接在一起，这样，由参数filename2 命名的文件中的文本会跟随来自 filename1 的文本。连接的文本应该被写入一个名为 new_file name 的新文件。你的函数不能返回任何东西。

We have provided sample input files named [part1.txt](/1v1/07-AJuN/01-W14-Worksheet-14-File-IO-and-CSV-Files/part1.txt) and [part2.txt](/1v1/07-AJuN/01-W14-Worksheet-14-File-IO-and-CSV-Files/part2.txt) containing a portion of the text from the novel *Alice* in  WonderlandXo test your function.

> 我们在 WonderlandXo 中提供了名为 `part1.txt` 和 `part2.txt` 的示例输入文件，其中包含小说《爱丽丝》中的部分文本。

> 写一个function concatenate_files(filename1, filename2, new_filename)，来串接filename1 和 
>
> filename2 两个文本文件，串接好的文本需要被创建到new_filename。 这个function不能return任何
>
> 东西

**Don't leave them open!**

**Remember to close your files!**

## 答案

```python
# -*- coding: utf-8 -*-
# @Time    : 2022/10/6 17:10
# @Author  : AI悦创
# @FileName: ConcatenateFiles.py
# @Software: PyCharm
# @Blog    ：https://bornforthis.cn/

def read_file(path: str):
    with open(path, "r", encoding="utf-8") as f:
        return f.read()


def save_file(path: str, content: str):
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)


def concatenate_files(filename1, filename2, new_filename):
    part1 = read_file(filename1)
    part2 = read_file(filename2)
    content = part1 + "\n" + part2
    save_file(new_filename, content)


if __name__ == '__main__':
    concatenate_files("data/part1.txt", "data/part2.txt", "new_file.txt")
```

## Sorting CSV Records

> 排序 CSV 记录

Write a function sort_records(csv_filename, new_filename) that sorts the records of a CSV file and writes the results as a new CSV file. The first column of the CSV file will be the city name. The rest of the columns will be months of the year. The first row of the CSV file will take the form of the column headings, with all columns other than the first being months of the year. Here is an example file fragment:

> 编写一个函数 sort_records(cv_filename, new_filename)，它对CSV文件的记录进行排序，并将结果写入一个新的CSV文件。CSV文件的第一列是城市名称。其余的列将是一年中的月份。CSV文件的第一行将采用列标题的形式，除第一个列外的所有列都是一年中的月份。下面是一个示例文件片段:

**max_temp.csv**

```python
city/month, Jan,Feb,Mar,Apr
Melbourne,41.2,35.5,37.4,29.3
Brisbane,31.3,40.2,37.9,29
Darwin,34,34,33.2,34.5
```

Note that your code will be tested over different CSV files, with different ranges of months in them. Irrespective of the exact months contained in the file, you may assume that the city name will always be in the first column, and the months in the remaining columns.

> 请注意，您的代码将在不同的CSV文件上进行测试，其中包含不同的月份范围。不管文件中包含的确切月份是多少，您都可以假定城市名称总是在第一列中，而月份则在其余列中。

You must sort the data in alphabetical order according to the city name (stored in the first column). Your program should write the sorted records to a new file with the name given by the argument new_filename.

> 您必须根据城市名称(存储在第一列中)按字母顺序对数据进行排序。您的程序应该将排序的记录写入一个新文件，其名称由参数new_filename指定。

Here is an example of how sort_records() should work. 'program.py' is the program and below is its terminal output.

> 下面是一个 sort_records() 应该如何工作的例子。'program.py'是程序，下面是它的终端输出。

```python
sort_records('max_temp.csv', 'sorted.csv')
result = open('sorted.csv')
print(result.read())
result.close()
```

```python
city/month,Jan,Feb,Mar,Apr
Brisbane,31.3,40.2,37.9,29
Darwin,34,34,33.2,34.5
Melbourne,41.2,35.5,37.4,29.3
```

> Note that the row for Melbourne has been sorted below the rows for Brisbane and Darwin because Melbourne comes after Brisbane and Darwin, based on alphabetical ordering.

> 注意，根据字母顺序，墨尔本排在布里斯班和达尔文之后，因此墨尔本排在布里斯班和达尔文之后。

**Test File**

So you can test your answer, we have provided a full year of data for many Australian cities in a file called [max_temp.csv](/1v1/07-AJuN/01-W14-Worksheet-14-File-IO-and-CSV-Files/max_temp.csv). The data was obtained from the Bureau of Meteorology website.

> 你可以测试一下你的答案，我们在一个名为  [max_temp.csv](/1v1/07-AJuN/01-W14-Worksheet-14-File-IO-and-CSV-Files/max_temp.csv) 的文件中提供了许多澳大利亚城市全年的数据。这些数据来自气象局网站。

> CVS文件的一列是城市的名字，一行是月份
>
> 写一个Function,  sort_records(csv_filename, new_filename), 把CVS文件的城市 用字母顺序排列，
>
> 然后保存在一个名为new_filename的新文件

## 提示：

```python
import csv
data_2d = [[1, 2, 3], [4, 5, 6]]
csv_file = open("2d-data.csv", "w")    
writer = csv.writer(csv_file)
writer.writerows(data_2d)
csv_file.close()

csv_file = open("2d-data.csv", "r")
print(csv_file.read())
csv_file.close()
```



## 答案

```python
# -*- coding: utf-8 -*-
# @Time    : 2022/10/6 17:30
# @Author  : AI悦创
# @FileName: Sorting_CSV_Records.py
# @Software: PyCharm
# @Blog    ：https://bornforthis.cn/
import csv


def parse(data):
    # s = ",".join(data[0][1]).split(",").insert(0, data_list[0][0])
    # print(s)
    detail = data[1]
    detail.insert(0, data[0])
    # print(detail)
    return detail


def read_csv(path):
    target_lst = []
    data_list = []
    with open(path, newline='') as csvfile:
        spamreader = csv.reader(csvfile, delimiter=' ', quotechar='|')
        for row in spamreader:
            # print(', '.join(row))
            # print(row)
            row_list = row[0].split(",")
            data_list.append([row_list[0], row_list[1:]])
    d = dict(data_list[1:])
    sorted_by_key = sorted(data_list[1:], key=lambda x: x[0])
    # print(sorted_by_key)
    # print(data_list[0])
    target_lst.append(parse(data_list[0]))
    for d_list in sorted_by_key:
        target_lst.append(parse(d_list))
    # print(target_lst)
    return target_lst


def save_csv(path, head_and_content):
    with open(path, 'w', newline='') as csvfile:
        writer = csv.writer(csvfile)
        writer.writerows(head_and_content)


def sort_records(cv_filename, new_filename):
    result = read_csv(cv_filename)
    save_csv(new_filename, result)
    # print(result)


if __name__ == '__main__':
    path = 'data/max_temp.csv'
    sort_records(path, "new_csv.csv")
```

## Hottest Month

> 最热的月份

Write a function max_city_temp(csv_filename, city) which analyses temperatures recorded in a CSV file, and returns the maximum temperature recorded for the named city.

> 编写函数 max_city_temp(csv_filename, city)，它分析CSV文件中记录的温度，并返回指定城市记录的最高温度。

Once again, the first column of the CSV file will be the city name, and the rest of the columns will be months of the year. The first row of the CSV file will provide the column headings. Here is an example file fragment:

> 同样，CSV 文件的第一列将是城市名，其余列将是一年中的月份。CSV 文件的第一行将提供列标题。下面是一个示例文件片段:

**max_temp_small.csv**

```python
city/month,Jan,Feb,Mar Apr
Melbourne,41.2,35.5,37.4,29.3
Brisbane,31.3,40.2,37.9,29
Darwin,34,34,33.2,34.5
```

Here is an example of how max_city_temp() should work:

> 下面是一个max_city_temp()应该如何工作的例子:

```python
max_city_temp('max_temp_small.csv', 'Brisbane')
40.2
```

**Test File**

So you can test your code, we have provided a full year of data for many Australian cities in a file called max_temp.csv. The data was obtained from the Bureau of Meteorology website (http:〃[www.bom](http://www.bom).q[ov.au/climate/avera](ov.au/climate/avera)qes/).

> 因此您可以测试您的代码，我们在一个名为 max_temp.csv 的文件中提供了许多澳大利亚城市全年的数据。数据来自气象局网站(http: " [www.bom](http://www.bom).q[ov.au/climate/avera](ov.au/climate/avera)qes/)。

> CVS文件的一列是城市的名字，一行是月份，月份下面的是当月温度,写一个function，，来找出所选城市的最高温度

 ## 答案

```python
# -*- coding: utf-8 -*-
# @Time    : 2022/10/7 11:23
# @Author  : AI悦创
# @FileName: HottestMonth.py
# @Software: PyCharm
# @Blog    ：https://bornforthis.cn/

DATE_DICT = {}


def read_csv(path):
    with open(path, "r") as f:
        # print(f.read())
        # f.close()
        return f.readlines()


def parse(line):
    line_list = line.strip().split(",")
    # print(line_list)
    key = line_list[0]
    value = list(map(float, line_list[1:]))
    value.sort(reverse=True)
    # print(key, value)
    DATE_DICT[key] = value


def max_city_temp(csv_filename, city):
    content_lst = read_csv(csv_filename)
    # print(content_lst)
    for line in content_lst[1:]:
        parse(line)
    if city in DATE_DICT:
        return DATE_DICT[city][0]
    else:
        pass


if __name__ == '__main__':
    r = max_city_temp(csv_filename="data/max_temp.csv", city="Darwin")
    # read_csv("data/max_temp.csv")
    print(r)
```



## Hottest City

>  最热的城市

Write a function hottest_city(csv_filename) that analyses the temperatures recorded in a CSV file, and returns a 2-tuple made up of the maximum temperature in the whole dataset, along with a sorted list of the names of cities where that temperature was recorded.

> 编写一个函数hottest_city(csv_filename)，它分析CSV文件中记录的温度，并返回一个由整个数据集中的最高温度组成的二元组，以及记录该温度的城市名称的排序列表。**要考虑相同最高温度时的城市。**

The first column of the CSV file will contain the city name. The rest of the columns will be months of the year. The first row of the CSV files will provide column headings. Here is an example file (with an incomplete set of months):

> CSV文件的第一列将包含城市名称。其余的列将是一年中的月份。CSV文件的第一行将提供列标题。下面是一个示例文件(有一个不完整的月份集):

[max_temp_tiny.csv](/1v1/07-AJuN/01-W14-Worksheet-14-File-IO-and-CSV-Files/max_temp_tiny.csv)

```python
city/month,Jan,Feb,Mar,Apr
Melbourne,41.2,35.5,37.4,29.3
Brisbane,31.3,40.2,37.9,29
Darwin,34,34,33.2,34.5
```

Here is an example of how hottest_city() should work:

```python
>>> hottest_city('max_temp_tiny.csv')
(41.2, ['Melbourne'])
```

**Test File**

So you can test your answer; we have provided a full year of data for many Australian cities in a file called max_temp.csv. The data was obtained from the Bureau of Meteorology website (http:〃[www.bom](http://www.bom).g[ov.au/climate/avera](ov.au/climate/avera)gvs/).

> 所以你可以测试你的答案;我们在一个名为max_temp.csv的文件中提供了许多澳大利亚城市全年的数据。数据来自气象局网站(http: " [www.bom](http://www.bom).g[ov.au/climate/avera](ov.au/climate/avera)gvs/)。

> CVS文件的一列是城市的名字，一行是月份，月份下面的是当月温度写一个function， hottest_city(csv_filename)，来找出文件中最热的一个温度和所在城市，用一个 tuple 来表示，城市的名字用 list 表示

## 答案

```python
# -*- coding: utf-8 -*-
# @Time    : 2022/10/7 11:54
# @Author  : AI悦创
# @FileName: HottestCity.py
# @Software: PyCharm
# @Blog    ：https://bornforthis.cn/
from pprint import pprint

DATE_DICT = {}


def read_csv(path):
    with open(path, "r") as f:
        # print(f.read())
        # f.close()
        return f.readlines()


def parse(line):
    line_list = line.strip().split(",")
    # print(line_list)
    # # print(line_list)
    key = line_list[0]
    value = list(map(float, line_list[1:]))
    value.sort(reverse=True)
    # print(key, value)
    DATE_DICT[key] = value


def select_max():
    result_dict = {}
    for key, value in DATE_DICT.items():
        # print(key, value)
        result_dict[key] = max(value)
    # print(result_dict)
    sorted_by_value = sorted(result_dict.items(), key=lambda x: x[1], reverse=True)
    # print(sorted_by_value)
    return (sorted_by_value[0][1], [sorted_by_value[0][0]])


def hottest_city(csv_filename):
    content_lst = read_csv(csv_filename)
    # print(content_lst)
    for line in content_lst[1:]:
        parse(line)
    # pprint(DATE_DICT)
    return select_max()


if __name__ == '__main__':
    r = hottest_city(csv_filename="data/max_temp_tiny.csv")
    print(r)
    # read_csv("data/max_temp.csv")
    # print(r)
```

**要考虑相同最高温度时的城市。**

```python
# -*- coding: utf-8 -*-
# @Time    : 2022/10/7 11:54
# @Author  : AI悦创
# @FileName: HottestCity.py
# @Software: PyCharm
# @Blog    ：https://bornforthis.cn/
from pprint import pprint

DATE_DICT = {}


def read_csv(path):
    with open(path, "r") as f:
        # print(f.read())
        # f.close()
        return f.readlines()


def parse(line):
    line_list = line.strip().split(",")
    # print(line_list)
    # # print(line_list)
    key = line_list[0]
    value = list(map(float, line_list[1:]))
    value.sort(reverse=True)
    # print(key, value)
    DATE_DICT[key] = value


def judge(sort_value_list: list):
    index = 0
    # print(sort_value_list)
    result_data = []  # 存储最终的结果
    while True:
        first = sort_value_list[0]
        second = sort_value_list[index + 1]
        if first[1] != second[1]:
            # print("break")
            break
            # return (first[1], [first[0]])
        elif first[1] == second[1]:
            result_data.append(second)
            index += 1
        else:
            pass
    if result_data:
        result_data.append(sort_value_list[0])
        print("result_data:>>>", result_data)
        r = []
        for key, value in result_data:
            r.append(key)
        return (value, r)
    else:
        return (sort_value_list[0][1], [sort_value_list[0][0]])


def select_max():
    result_dict = {}
    for key, value in DATE_DICT.items():
        # print(key, value)
        result_dict[key] = max(value)
    # print(result_dict)
    sorted_by_value = sorted(result_dict.items(), key=lambda x: x[1], reverse=True)
    # print(sorted_by_value)
    return sorted_by_value
    # return (sorted_by_value[0][1], [sorted_by_value[0][0]])


def hottest_city(csv_filename):
    content_lst = read_csv(csv_filename)
    # print(content_lst)
    for line in content_lst[1:]:
        parse(line)
    # pprint(DATE_DICT)
    sorted_by_value = select_max()

    return judge(sorted_by_value)


if __name__ == '__main__':
    # r = hottest_city(csv_filename="data/max_temp_tiny.csv")
    # print(r)
    # read_csv("data/max_temp.csv")
    # print(r)
    r = judge([('Melbourne', 41.2), ('Brisbane', 41.2), ('Darwin', 40.2)])
    print(r)
```

![image-20221007123301344](./01-W14-Worksheet-14-File-IO-and-CSV-Files.assets/image-20221007123301344.png)

## Disentangling list comprehensions

> 理清列表理解

List comprehensions can be baffling verging on incomprehensible at first (joke!), so let's get some experience pulling a list comprehension apart into code that you are more familiar with. Given the following mystery function, write an equivalent function aha(minval, maxval) with the exact same functionality but which doesn't make use of list comprehensions.

> 列表推导式一开始可能令人困惑，几乎无法理解(开玩笑!)，所以让我们获得一些将列表推导式分解为您更熟悉的代码的经验。给定下面的神秘函数，用完全相同的功能编写一个等价的函数 aha(minval, maxval)，但不使用列表推导式。

```python
def mystery(minval, maxval):
    return [i**2 % 10 for i in range(minval, maxval + 1)]
```

For example:

```python
>>> aha(3, 7)
[9, 6, 5, 6, 9]
>>> aha(0, 10)
[0, 1, 4, 9, 6, 5, 6, 9, 4, 1, 0]
```

## 答案

```python
def aha(minval, maxval):
    r = []
    for i in range(minval, maxval + 1):
        r.append(i ** 2 % 10)
    return r

print(aha(3, 7))
print(aha(0, 10))
```

**要满足 PEP8**



欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！

::: details 公众号：AI悦创【二维码】

![](/gzh.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](/zsxq.jpg)
