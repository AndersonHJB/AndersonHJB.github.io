---
title: 单词统计
date: 2023-06-29 19:37:09
author: AI悦创
isOriginal: true
category: 
    - C++竞赛
    - 上海市计算机学会竞赛平台
tag:
    - C++竞赛
    - 上海市计算机学会竞赛平台
icon: code
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

## 题目描述

给定若干个英文单词，请统计其中出现了多少种不同的单词，且每种单词出现了多少次数，将单词按照出现次数及字典顺序排序，输出排名最高的五个单词。

注意，区分单词的唯一依据是拼写。只要拼写相同，不论大小写，都视为同一个单词。有一些单词虽然词根相同，但词缀拼写不同，应该视为不同的单词。

## 输入格式

若干个英文单词表示输入。保证输入只会出现大小写字母与空格，不会出现数字或任何标点符号。

## 输出格式

- 第一行：输出一个整数，表示输入出现了多少种不同的单词；
- 若出现的单词超过五个，则仅输出排名最高的五个，否则输出所有全部。
- 排序单词时，先比较它们的出现次数，出现次数高的排名在前，若出现次数一样，则按照字典序排序；
- 打印单词时，单词应全部小写，单词出现次数与单词间有且仅有一个空格。

## 数据范围

保证每个单词的长度小于2020，保证输入的单词数量不超过 1000010000。

## 样例数据

### 输入1

```cpp
aa bb cc dd ee ee aa bb kk
```

### 输出1

```cpp
6
aa 2 
bb 2 
ee 2 
cc 1 
dd 1
```

### 输入2

```cpp
Hello hello world
```

### 输出2

```cpp
2
hello 2
world 1
```

[https://iai.sh.cn/problem/554](https://iai.sh.cn/problem/554)

```cpp
#include <iostream>
#include <sstream>
#include <unordered_map>
#include <vector>
#include <algorithm>

int main() {
    std::string line, word;
    std::unordered_map<std::string, int> wordCounts;

    // 读取输入的单词并更新频率计数
    while (getline(std::cin, line) && !line.empty()) {
        std::stringstream ss(line);
        while (ss >> word) {
            // 将单词转换为小写
            for (auto& ch : word) {
                ch = std::tolower(ch);
            }
            ++wordCounts[word];
        }
    }

    std::vector<std::pair<std::string, int>> wordVec(wordCounts.begin(), wordCounts.end());
    // 自定义排序规则
    std::sort(wordVec.begin(), wordVec.end(),
              [](const auto& a, const auto& b) {
                  if (a.second != b.second)
                      return a.second > b.second;
                  else
                      return a.first < b.first;
              });

    // 输出单词种类
    std::cout << wordCounts.size() << std::endl;
    // 输出前五个最高频的单词
    int count = 0;
    for (const auto& pair : wordVec) {
        if (count++ >= 5) break;
        std::cout << pair.first << " " << pair.second << std::endl;
    }

    return 0;
}
```













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





