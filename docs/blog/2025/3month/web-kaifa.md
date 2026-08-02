---
title: Web Development Dynamically Generated
date: 2025-03-07 09:02:05
author: AI悦创
isOriginal: true
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

## Project 1

### Project brief

[musicOnline.com](musicOnline.com) are a recently created business start-up. The idea is that users can register and search for vinyl music (albums, EPs, singles, etc) that other users are selling or they can upload information on a vinyl that they have for sale. If the user is a retailer they will be required to pay for registration. The website will eventually display relevant advertisements but this is not required at the moment. Placeholder images can be used for this.

On the website the users will be able to search for music on different criteria. The website is likely to be used by all age groups from age 18 up with an interest in music and you should consider a user interface which promotes ease of use. The website content will be monitored by an administrator.

The website to be developed is a prototype version and no sales or payments facilities are required.

In summary the website features are to include:

- New user registration
- User login
- Administration login
- Search facility that will allow music searches on artists, album, single or ep titles
- When a record is returned information related to the artist and album or single title should be displayed
- When a record is tapped or clicked further information should be displayed,date of release, price etc
- A secure administration section to allow monitoring of user input
- Registered users should be able to add, delete and update vinyls for sale
- Basic security features

The website should be designed to current web standards using up-to-date technologies and responsive design techniques. The website must provide functionality as requested and promote the company’s professionalism, reliability and reputation. The website must be live within 6 months.

### Task 1 — Plan and design a dynamic data driven website

Before you begin developing the website you are required to analyse the project brief and produce the following:

1. Site specification — this should include at least:
    - The main objectives of the website; what is being asked for
    - Identification of all requirements of the project (software, hardware,technologies, timescales,functional and constraints)
    - Information related to target end users
2. Design document — this should include at least:
    - Site structure/site navigation map
    - Wireframes for minimum 2 viewports
    - Page content summaries

### Task 2 — Implement the data source

Using appropriate software:

- Create a suitable database for the company
- Create table structures for admin, registered users and music
- Add records to the admin table (minimum 2)
- Add records to vinyls table (minimum 15)

### Task 3 — Develop a dynamic data driven web application utilising a server side language

Referring to the site specification and the design document develop a website that complies with all the functional requirements.

The completed website must demonstrate evidence of:

- Successful connection to the database
- Search facility that interrogates the database
- Implementation of security features on user input data form login, register and search forms
- Use of forms to pass to and obtain data from the database
- Use of passing and obtain data via the URL
- Implementation of appropriate SQL queries
- Implementation of session management

### Task 4 — Test a dynamic web application

- Produce a test strategy detailing all functions requiring testing
- Test the website thoroughly using both normal and abnormal data
- Record test results
- Debug as required

### Task 5 — Deploy the tested website

Explain the preparation requirements and deployment of a dynamic data driven website. 

Alternatively upload the website and database to an external server and demonstrate it functioning correctly.

::: details HTML、CSS、Javascript、Java、Springboot、`thymeleaf`、`JWT`

```text
musicOnline.com是一家最近创建的创业公司。其想法是让用户注册并搜索其他用户正在出售的黑胶音乐（专辑、EP、单曲等），或者上传他们自己出售的黑胶信息。如果用户是零售商，他们将被要求支付注册费用。该网站最终将显示相关广告，但目前并不需要。此时可以使用占位图像。
在网站上，用户将能够根据不同的标准搜索音乐。该网站可能会被所有年龄段的人使用，从18岁以上，对音乐感兴趣的人都有可能使用，因此您应该考虑一个促进易用性的用户界面。网站内容将由管理员监控。
待开发的网站是一个原型版本，不需要销售或支付功能。
技术要求：前端：HTML、CSS、thymeleaf、Javascript、bootstrap、jquery、Ajax数据传送给后端；后端：Java、Springboot、JWT
网站的特点将包括：
- 新用户注册
- 用户登录
- 管理员登录
- 搜索功能，允许按艺术家、专辑、单曲或EP标题搜索音乐
- 当搜索到一条记录时，应显示与艺术家和专辑或单曲标题相关的信息
- 当点击一条记录时，应显示更多信息，如发行日期、价格等
- 安全的管理部分，允许监控用户输入
- 注册用户应能够添加、删除和更新出售的黑胶唱片
- 基本的安全功能

该网站应该按照当前的网络标准，采用最新的技术和响应式设计技术进行设计。网站必须按要求提供功能，并促进公司的专业性、可靠性和声誉。该网站必须在6个月内上线。

任务1 — 规划和设计一个动态数据驱动的网站
在开始开发网站之前，您需要分析项目简报并制作以下内容:
1. 网站规格说明 — 应该至少包括:
	- 网站的主要目标；被要求的内容
	- 项目的所有需求的识别（软件、硬件、技术、时间表、功能和限制）
	- 与目标终端用户相关的信息
2. 设计文档 — 应该至少包括:
	- 网站结构/网站导航图
	- 最少两个视图的框架图
	- 页面内容摘要

任务2 — 实现数据源
使用适当的软件:
	- 创建适合公司的数据库
	- 为管理员、注册用户和音乐创建表结构
	- 向管理员表添加记录（最少2条）
	- 向黑胶唱片表添加记录（最少15条）

任务3 — 开发一个动态数据驱动的网络应用，利用服务器端语言
根据网站规格和设计文档，开发一个符合所有功能要求的网站.
完成的网站必须展示以下内容:
- 成功连接到数据库
- 查询数据库的搜索功能
- 用户输入数据表单（登录、注册和搜索表单）的安全功能实现
- 使用表单从数据库传递和获取数据
- 通过URL传递和获取数据
- 适当的SQL查询的实现
- 会话管理的实现

任务4 — 测试一个动态网络应用
- 制定测试策略，详细说明所有需要测试的功能
- 彻底测试网站，使用正常和异常数据
- 记录测试结果
- 根据需要进行调试

任务5 — 部署经过测试的网站
解释动态数据驱动网站的准备要求和部署。
或者上传网站和数据库到外部服务器，并演示其正确运行。
```

:::

1. 学员仓库：[https://github.com/MintKy/Mint](https://github.com/MintKy/Mint)
1. 项目源码：[https://github.com/AndersonHJB/MusicOnline](https://github.com/AndersonHJB/MusicOnline) 完整代码联系我购买













## Project 2

### Point

1. 跟踪并记录所进行的工作直至项目完成
2. 每个阶段和总体完成情况的时间表
3. 你应确保记录用于研究不熟悉的库或构造使用的来源。
4. **用户文档可能还包含在线帮助功能**
5. 可以使用适当的技术记录证据，例如软件、屏幕截图、清单、日志（电子版、手动或两者）、工作日记、报告等。

**任务的初步简报：**

Simply Rugby 是一家位于苏格兰的橄榄球俱乐部，其球队目前由苏格兰橄榄球联盟 (SRU) 支持，涵盖所有年龄段的比赛。这些球队包含初级、中级和高级。每支青少年球队都由一组教练管理，这些教练通常是球队球员的父母。

他们正在寻找一种新的计算机系统，以便他们的教练能够跟踪：每个球队的球员详情、球员技能发展、比赛详情、训练课程详情。

会员助理还希望能够存储所有会员的详细信息，这既是为了法律原因，也是为了将相关信息发送给所有会员。他们将使用计算机系统来跟踪会员及其球员的训练资料。

**俱乐部概况**

Simply Rugby 是一家位于苏格兰的橄榄球俱乐部，其所有年龄段的球队均由 SRU 支持。其中包括参加青少年和高级比赛的球队。每个球队由一组教练管理，这些教练通常是球队球员的父母。

俱乐部拥有大量会员，包括非球员会员、高级球员会员和青少年球员会员。所有球员会员都必须在 SRU 注册，以确保他们受到 SRU 保险计划的充分保障。青少年会员还必须由其法定监护人之一在每个赛季签署同意书。

每个年龄组的教练或家长都会跟踪该年龄组的所有球员详细信息，包括医生和近亲/监护人详细信息。每个部分（青少年和高级）还有一名主席和赛程助理，负责组织赛程。

教练会记录他们球队的球员资料，并利用这些资料帮助组织适当的训练课程。这些资料包括球员接受的训练的详细信息以及对橄榄球各个方面所获得技能水平的估计。他们还记录训练课程活动和比赛细节，包括每位球员在比赛中的表现以及得分细节。

他们还利用这些资料帮助判断哪些球员应该参加培养发展试验，并帮助确保他们计划适当的发展和培养，让每位球员都能发挥自己的潜力。这在橄榄球运动中尤为重要，因为不同的位置需要不同的技能组合。最适合球员的位置可能要经过多年在不同位置上比赛后才会显现出来。

### Project plan

- [ ] 页面：
    - [ ] 登陆页面
    - [ ] 注册页面
    - [ ] 会员页面
    - [ ] 个人详细信息页面
- [ ] 后端
    - [ ] 登陆、注册功能
    - [ ] 用户数据加密；
    - [ ] 用户角色：会员、非会员、高级球员、青少年会员
- [ ] 数据库设计
    - [ ] 



::: details 

```text
## **1. 项目计划报告（Planning Report）**
### **1.1 项目任务简介分析（Analysis of Project Assignment Brief）**
- **任务解析**
    - 解释项目任务简报
    - 业务需求概述
- **需求分析**
    - 初步功能性需求
    - 初步非功能性需求
    - 顶层用例模型
- **背景研究**
    - 现有系统分析（如类似系统、行业标准等）
- **目标设定**
    - 识别项目主要目标
- **资源规划**
    - 需要的工具、环境、开发语言等
    - 获取方式
- **信息来源**
    - 相关文献、技术文档、API文档等

### **1.2 项目计划（Project Plan）**
- **时间规划**
    - 详细时间安排（阶段任务、总周期）
- **里程碑**
    - 关键节点和可交付成果
- **任务分解**
    - 主要开发和设计任务
- **资源分配**
    - 人员、硬件、软件等资源需求
- **开发方法**
    - 采用的软件开发模式（瀑布、敏捷等）

### **1.3 解决方案规划（Solution Planning）**
#### **1.3.1 业务模型设计（Business Model Design）**
- **业务逻辑分析**
    - 类、方法、属性定义
    - 顶层用例建模
    - 业务流程设计
- **原型应用分析**
    - 设计数据处理流程
    - 识别系统核心功能
- **UML 静态模型**
    - 类图（继承、接口）
    - 其他相关模型
- **UML 动态模型**
    - 用例图
    - 序列图

#### **1.3.2 视图模型设计（View Model Design）**
- **HCI（人机交互）设计**
    - 用户需求分析
    - 界面交互流程
- **UI 设计**
    - 视觉与功能结合
    - 设计原则论证

---

## **2. 开发文档（Development Documentation）**
### **2.1 业务模型开发（Developing the Business Model）**
- 业务逻辑代码实现
- 业务规则定义
- 业务逻辑测试
- 业务模型优化（根据错误反馈修正）

### **2.2 视图模型开发（Developing the View Model）**
- UI 界面实现
- 交互逻辑实现
- 视图与业务模型绑定方式
- 用户反馈的优化调整

### **2.3 内部文档**
- **代码文档**
    - 变量命名规范
    - 代码缩进和格式
- **使用外部库和 API**
    - 记录所有使用的库
    - 说明自学引入的内容
- **错误处理**
    - 异常捕获
    - 数据校验

---

## **3. 测试文档（Testing Documentation）**
### **3.1 测试计划**
- 测试策略
- 测试用例设计
- 测试工具选择
- 可能的测试框架

### **3.2 测试执行**
- **测试运行**
    - 记录每次测试
    - 结果分析与改进
- **错误跟踪**
    - Bug 记录
    - 解决方案

---

## **4. 用户文档（User Documentation）**
- **用户手册**
    - 系统功能介绍
    - 使用说明
- **在线帮助**
    - 常见问题
    - 指导文档

---

## **5. 评估报告（Evaluation Report）**
### **5.1 任务总结**
- 解决方案与需求的匹配程度

### **5.2 结果评估**

- 方案优缺点
- 系统性能与稳定性

### **5.3 未来优化建议**
- 功能扩展可能性
- 技术改进点

### **5.4 变更记录**
- 项目中对计划、设计、实现的修改
- 处理突发事件的方法

### **5.5 经验总结**
- 新学到的技术和方法
- 项目改进建议
```

:::



























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
