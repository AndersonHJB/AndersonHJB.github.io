---
title: 简易 Web 练习生成器
date: 2022-07-15 00:20:34
author: AI悦创
isOriginal: true
category: Bornforthis项目
tag:
    - Bornforthis项目
icon: blog
sticky: false
star: false
article: true
timeline: true
image: false
navbar: true
sidebarIcon: true

comment: true

prev: false
next: false
backToTop: true
toc: true
---

# Web exercise Generator

项目地址：[https://github.com/AndersonHJB/Web_exercise_Generator](https://github.com/AndersonHJB/Web_exercise_Generator)

## 1. 功能实现与计划

- [x] 文件名称
- [x] 输入测试的 Web 代码
- [ ] 指定保存路径
    - [ ] 判断路径是否存在
    - [ ] 路径不存在就创建
    - [ ] 临时默认本地路径
    - [ ] 用户可以选择去除
- [ ] 默认文件名称
- [x] 保存文件后缀检测
    - [ ] 遇到 bug：出现用户输入带有 html 后缀时，保存为：demo.html.html。
    - [ ] 举个例子：用户输入：`demo.html` 保存为：`demo.html.html`。
    - [x] 解决日期：2022-07-14 22:45:41
- [ ] 循环功能还未添加
- [ ] 保存文件与已有文件是否重复
    - [ ] 出现重复文件提示是要覆盖还是保留副本
- [ ] GUI 未来计划实现

## 2. 功能依赖

1. HTML 在线编辑器：[https://github.com/BornforthisHJB/html_online](https://github.com/BornforthisHJB/html_online)