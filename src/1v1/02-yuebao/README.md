---
blog: false
home: true
icon: AdobeFm
title: FM 星球
heroImage: /1v1/02-yuebao/logo.png
heroText: FM 星球
heroFullScreen: false
tagline: 悦兮小栈
actions:
  - text: Idea💡
    link: /1v1/02-yuebao/
    type: primary	

  - text: 与悦创联系 👋
    link: http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes

footer: 立志降低教育成本，普及编程教育，提供优质资源教程——流沙团队宣
---

## About

待书写......✍️

## Link

This is a future designer's website, if you want to access immediately, please click [https://findmaterial.top/](https://findmaterial.top/).



## Part 1: Plan

### 0. 进展表

| 序号 | 名称         | 内容             | 完成情况 | 开始日期                                                     | 完成日期        | 费用      | 有效期 | 说明 |
| ---- | ------------ | ---------------- | -------- | ------------------------------------------------------------ | --------------- | --------- | ------ | ---- |
| 01   | 域名购买     | findmaterial.top | ✅        | 2022年11月23日                                               | 2022年12月11日  | 125元     | 5年    | 无   |
| 02   | 服务器购买   | IPxxxxx          | ✅        | 2022年11月23日<br />2022-11-24                               | 2022年11月23日  | 1881.69元 | 5年    | 无   |
| 03   | 域名备案     | ICP 工信部       | ✅        | ![image-20221214193240369](./README.assets/image-20221214193240369.png =100x100) | 2022年12号14 日 | 时间成本💰 | 永久   | 无   |
| 04   | 部署上线网站 | 部署网站         | ✅        | 2022年12月14日                                               | 2022年12月14日  | 时间成本💰 | 永久   | 无   |
| 05   | 配置网站     | 配置网站         |          | 2022年12月14日                                               |                 | 时间成本💰 | 看情况 |      |
| 06   | 腾讯云存储   | 腾讯云存储       |          | 2022年12月15日                                               | 2022年12月15日  | 长期费用  | 看情况 | 无   |
| 08   | QQ登陆上线   | QQ第三方登录     | ✅        | 2022年12月14日                                               | 2022年12月17日  | 无        | 长期   | 无   |
| 09   |              |                  |          |                                                              |                 |           |        |      |

## Message

### Github Gos

| Key  | Value                                                        |
| ---- | ------------------------------------------------------------ |
| 01   | findmaterial.top_img                                         |
| 02   |                                                              |
| 03   | wp-content/uploads                                           |
| 04   | https://github.aiyc.top/findmaterial.top_img/wp-content/uploads |

## Question

::: tip 提示

如果你有疑惑🤔，请先查询此表。如果没有找到你所需要的结果，再进行提问！

:::

| 序号 | 问题         | 解决方法                                                     | 图片                                                         | 是否解决 | 解决日期       | 说明                                                   | 问题提交链接 |
| ---- | ------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | -------- | -------------- | ------------------------------------------------------ | ------------ |
| 01   | 图片上传问题 | 请查看此链接：[https://github.com/AndersonHJB/findmaterial.top_img/actions](https://github.com/AndersonHJB/findmaterial.top_img/actions) 中，最后的部署是否成功。<br />如果部署成功，还是失败，请访问此图片链接验证是否正常显示：[1671003706-9b942bbeb6ad687.png](http://github.aiyc.top/findmaterial.top_img/wp-content/uploads/1234/01/1671003706-9b942bbeb6ad687.png)<br />![图片显示失败](http://github.aiyc.top/findmaterial.top_img/wp-content/uploads/1234/01/1671003706-9b942bbeb6ad687.png =50x50) | ![image-20221214233740764](./README.assets/image-20221214233740764.png =100x100) | ✅        | 2022年12月14日 | 如果失败请先思考好语句，和问题。再来提交所遇到的问题。 |              |
| 02   |              | 视频需求                                                     |                                                              |          |                |                                                        |              |



:::: details 杂物

::: tabs

@tab bug-report.yml

```yaml
name: Bug report
description: 创建一份报告来帮助我们改进
title: "[Bug]"
labels:
  - bug
assignees: AndersonHJB
body:
  - type: checkboxes
    id: checklist
    attributes:
      label: 检查清单
      description: |-
        确保您遵循这些声明。（不然作者可能会把Fxxx的话扔给你）
      options:
        - label: 我阅读了常见问题:[https://bornforthis.cn/1v1/02-yuebao/#Question](https://bornforthis.cn/1v1/02-yuebao/#Question)
          required: true

        - label: 我确定我看懂且确认还是无法解决问题。
          required: true

  - type: input
    id: package
    attributes:
      label: Package name
      description: 您要报告哪个包裹
      value: findmaterial.top_img
      placeholder: package name
    validations:
      required: true

  - type: checkboxes
    id: operating-systems
    attributes:
      label: 您使用的是哪种操作系统？
      description: 您可以选择多个。如果它与你的问题无关，请不要选择任何内容。
      options:
        - label: macOS
        - label: Windows
        - label: Linux

  - type: markdown
    attributes:
      value: |
        ## 描述错误

        > 如果适用，请添加屏幕截图和详细的问题描述，以帮助解释您的问题。

  - type: textarea
    id: description
    attributes:
      label: 描述错误
      description: 对错误是什么的清晰简洁的描述。
    validations:
      required: true

  - type: textarea
    id: additional-context
    attributes:
      label: 附加上下文
      description: 如果您没有报告明显的内容，则需要最少的描述问题。
      placeholder: 在此添加你的一些基本描述。
```

@tab feature-request.yml

```yaml
name: Feature request
description: Suggest an idea for this project
title: "[Feature Request]"
labels:
  - enhancement
assignees: AndersonHJB
body:
  - type: checkboxes
    id: checklist
    attributes:
      label: 检查清单
      description: 确保您遵循这些声明。
      options:
        - label: 我搜索了现有问题，没有其他人请求类似的功能。
          required: true

        - label: 我认为 25% 以上的用户对此功能持积极态度。
          required: true

  - type: textarea
    id: feature
    attributes:
      label: 描述功能
      description: 它的用途和原因
      placeholder: 对什么功能渴望？
    validations:
      required: true

  - type: textarea
    id: additional-context
    attributes:
      label: 附加上下文
      placeholder: 在此处添加有关功能请求的任何其他上下文或屏幕截图。
```

:::

::::
