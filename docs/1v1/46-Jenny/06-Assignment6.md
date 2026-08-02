---
title: Assignment 6
date: 2023-06-09 14:20:37
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

comment: true

backToTop: true
toc: true
footer: 长期招收编程一对一学员！微信：Jiabcdefh, <a href="https://beian.miit.gov.cn/" target="_blank">闽ICP备19021486号-6</a>
---

## Scripting Problem (5 points)

The goal of this problem is to find the current user’s group with the largest number of members with the exclusion of the group users. That is, considering the groups that the current user belongs to (with the exclusion of the group users), which one is composed of the largest number of members? (Don’t worry about ties)

Start by looking at the file /etc/group, which contains the members belonging to each group in the following format: groupname\:x:groupid:comma_separated_list_of_members

For example, the entry corresponding to group OMIS107_ADMIN is as follows:

```bash
OMIS107_ADMIN:x:1003:msamorani,samo,labinstructor
```

Your output should be formatted as follows:

The current user's most numerous group is xxxx, which has yyyy members

Note: no need to explicitly exclude the group users, because that group is not present in /etc/group.

Examples:

*Output if fakestudent executes your code:*

![](https://blog.images.bornforthis.cn/docs-images/sha256/43/438c6cbc0743fa5b0251d332e0065885d0547722c0b1a69ff72244203d8d57b0.png)

*Output if samo executes your code:*

![image-20230609142254770](https://blog.images.bornforthis.cn/docs-images/sha256/35/357d1f509ab662c540e9d367f53336fb413f6fec8d4714ee933419323b785199.png)

::: details 公众号：AI悦创【二维码】

![](https://blog.images.bornforthis.cn/docs-images/sha256/77/77f67d48a67ec6a44a4ef1f01ffc85830eb3c121b1ece45dc5ada06e20e2f52b.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Web、Linux」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](https://blog.images.bornforthis.cn/docs-images/sha256/30/3087c629da73428daa0ee050f5b31709c30f650686164b54c724b892a422c585.jpg)

