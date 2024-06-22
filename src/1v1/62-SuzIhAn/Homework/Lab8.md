---
title: Lab 8
icon: python
date: 2023-10-29 00:35:14
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

## Data analysis

For this lab you'll use dictionaries to collect statistics for a simple data file representing a collection of users. Begin by downloading the starter code and data [hereLinks to an external site.](https://course.ccs.neu.edu/cs5001sp20-seattle/secure/user_data_starter.zip)

In the starter directory, you'll find three files. The `users.csv` file contains the data itself in comma separated format. Notice that the first line of the file indicates what field each column represents.

The second file to look at is `report.py`. This file has been written for you. Read it closely and make sure you understand what it is doing and what it needs. It should be clear that it is mainly just outputting the results of the data analysis class, which it imports.

The file `data_analysis` is where you'll do the work for this lab. You'll need to set up the data analysis object read the file line by line, split the lines appropriately, and tally the relevant statistics. Specifically, you will need to keep counts of how many times each language shows up in a data item, and how many times each [2-letter country top-level domainLinks to an external site.](https://en.wikipedia.org/wiki/List_of_Internet_top-level_domains#Country_code_top-level_domains) signifier shows up in an email address. Top-level domains are always the last letters after the last period in an email domain name, and country codes are always exactly 2 letters long. Furthermore you'll calculate frequencies of these events within the context of the full data set.

### Reporting the data

Your program should output a summary of the data as follows:

```bash
    $ python report.py users.csv
    Languages:
    English:         0.118
    Spanish:         0.105
    Chinese:         0.087
    Hindi:           0.069
    French:          0.054
    Arabic:          0.039
    Russian:         0.038
    Nepali:          0.019
    Polish:          0.017
    Indonesian:      0.016
    Top level country domains:
    jp:      0.04
    uk:      0.029
    ru:      0.025
    cn:      0.019
    de:      0.012
    au:      0.01
    io:      0.008
    cz:      0.008
    fr:      0.007
    pl:      0.007
```

### Implementation

You will need to use dictionaries to keep your tallies, and I encourage to use regular expressions to capture the top-level domain country codes in emails. I recommend using `re.findall` here because it outputs an easy-to-understand list of strings that match your regular expression, and only includes the portions of the string that were captured by parentheses. Read the documentation for regular expressions (and `findall` in particular) here: [https://docs.python.org/3/library/re.htmlLinks to an external site.](https://docs.python.org/3/library/re.html).

#### Returning a list of dictionary items sorted by values

Dictionaries themselves are (best regarded as) unordered. However, their items may be returned as a list of pairs (tuples) using the `.items()` method, and lists can be sorted using the `sorted()` function on lists. However, simply sorting the items won't quite do. By default, the items would be sorted according to the dictionary key, rather than the value; so we'd wind up with the n-grams in alphabetical order, rather than in order of count.

The `sorted()` function has several optional arguments that can help. The `key` argument lets us define an anonymous function that takes the item and returns a value; this value is then used as the basis for ordering the list. Since our items here are tuples and the value we want to order by is the second element of the tuple (index 1), the function we define will take `x` (a tuple) and return `x[1]` (the second value of the tuple). The syntax for this makes use of the `lambda` key word, which is used to define anonymous functions in place. So `key=lambda x:x[1]` will set the key. You also need to set the `reverse` parameter to `True`.

### Submission

Submit files `user_data.zip` to Canvas.















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

