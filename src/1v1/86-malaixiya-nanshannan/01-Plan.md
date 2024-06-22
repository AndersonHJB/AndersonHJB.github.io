---
title: 每节课学习目标和知识点
date: 2024-03-30 13:05:12
author: AI悦创
isOriginal: true
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
editLink: false
backToTop: true
toc: true
---

## 1. 环境搭建及其基础使用「2024年03月30日」

### 1.1 所需的 Python 环境

- [x] 语雀「用来记笔记」
- [x] Python 安装
- [x] Pycharm 安装及其配置
- [ ] ConEmu「命令行软件」
- [x] Snipaste「截图软件」
- [x] Bandzip「压缩包软件」

### 1.2 语雀的基础使用

#### 1.2.1 新建知识库

新建知识库，就等于现实世界中的仓库。

#### 1.2.2 创建文档

先点进你的知识库，新建文档。

## 2. 作业查看「2024年03月31日」

- [x] 题目：QUIZ: TRY YOUR OWN!

| Problems                       | Descriptions                                                 | Fuzzy Logic Design                                           |
| ------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Variable Traffic Flow          | Traditional traffic light systems **struggle** to adapt to **fluctuating traffic** volumes and patterns. | Input: **traffic density**, **time of day**, and **historical data**<br/>Output: **adjust signal timings** |
| **Emergency Vehicle Priority** | Conventional systems **lack** the adaptability to **prioritize emergency vehicles** in real-time | Input: **siren intensity** and **urgency level**, Output: **grant** **priority** to **emergency vehicles** |
| **Pedestrian Safety**          | Ensuring **safe** **pedestrian crossings** is challenging due to varying pedestrian behavior | Input: **pedestrian density**, **crosswalk activity**, and **real-time pedestrian movements**<br/>Output: **adjust** **signal timings** |

首先上面作业的三个问题，都可以通过模糊逻辑设计来解决，模糊逻辑系统能够处理不确定和模糊性，这在处理如交通流量、紧急车辆优先和行人安全等问题时非常有用。下面是我给你编写的模糊逻辑设计方案：

::: tabs

@tab Question 1

## 1. 可变交通流量「正课会讲变量」

- **输入变量：** 交通密度（低、中、高）、一天中的时间（早高峰、晚高峰、非高峰时段）、历史数据（过去的流量模式）
- **处理：** 根据输入变量，使用模糊规则来估计最合适的信号灯时长。例如，如果交通密度高并且是高峰时段，则增加绿灯时间。
- **输出变量：** 调整信号灯的时长（增加或减少绿灯时间）

## 2. 紧急车辆优先

- **输入变量：** 警报强度（从紧急车辆发出的声音大小）、紧急级别（根据警报种类判断，如救护车、消防车等）
- **处理：** 依据输入，使用模糊规则确定紧急车辆的优先级。例如，如果警报强度大且紧急级别高，则立即更改信号灯，让紧急车辆优先通行。
- **输出变量：** 授予紧急车辆优先通行（改变信号灯为绿灯）

## 3. 行人安全

- **输入变量**：行人密度（低、中、高）、人行横道活动（活跃、非活跃）、实时行人移动（移动速度、方向）
- **处理**：根据输入的行人情况，采用模糊规则来调整信号灯时间，以保证行人安全过街。例如，如果行人密度高且人行横道活跃，则增加红灯时间，让行人有更多时间过街。
- **输出变量**：调整信号灯时长（增加或减少红灯时间），确保行人安全

:::

- [ ] 变量：















