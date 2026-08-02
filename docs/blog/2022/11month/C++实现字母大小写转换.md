---
title: C++实现字母大小写转换
date: 2022-11-13 18:12:28
author: AndersonHJB
isOriginal: true
category: 
    - c++
tag:
    - c++
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

```cpp
#include <iostream>

int main() {
    char word;
    std::cout << "请输入您的 char:>>>";
    std::cin >> word;
    std::cout << "您的 Word:>>>" << word << std::endl;
    int a = word;
    char pre_word = a - 1;
    char next_word = a + 1;
    char upper_word = a - 32;
    std::cout << "上一个单词:" << pre_word << std::endl;
    std::cout << "下一个单词:" << next_word << std::endl;
    std::cout << "大写:" << upper_word << std::endl;
    return 0;
}
```



欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！

::: details 公众号：AI悦创【二维码】

![](https://blog.images.bornforthis.cn/docs-images/sha256/77/77f67d48a67ec6a44a4ef1f01ffc85830eb3c121b1ece45dc5ada06e20e2f52b.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Linux、」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](https://blog.images.bornforthis.cn/docs-images/sha256/30/3087c629da73428daa0ee050f5b31709c30f650686164b54c724b892a422c585.jpg)
