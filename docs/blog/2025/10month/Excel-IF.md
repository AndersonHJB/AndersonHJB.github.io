---
title: Excel IF 入门教学
icon: blog
date: 2025-10-26 10:28:52
author: bornforthis
isOriginal: true
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

你好，我是悦创。

Excel 中的 `IF` 函数用于根据给定的条件返回不同的值。

## 1. 基本语法

```excel
IF(逻辑测试, 真值, 假值)
```

| 参数     | 说明                                 |
| -------- | ------------------------------------ |
| 逻辑测试 | 你要判断的条件（如 A1>10、B2="是"）  |
| 真值     | 当条件为 TRUE（成立）时返回的结果    |
| 假值     | 当条件为 FALSE（不成立）时返回的结果 |

示例：

```excel
=IF(A1>10, "合格", "不合格")
```

## 2. 常见逻辑比较符号

| 符号 | 含义     | 示例     | 说明         |
| ---- | -------- | -------- | ------------ |
| `>`  | 大于     | `A1>10`  | A1 大于 10   |
| `<`  | 小于     | `A1<5`   | A1 小于 5    |
| `=`  | 等于     | `A1=100` | A1 等于 100  |
| `>=` | 大于等于 | `A1>=60` | A1 不低于 60 |
| `<=` | 小于等于 | `A1<=10` | A1 不高于 10 |
| `<>` | 不等于   | `A1<>0`  | A1 不等于 0  |

## 3. 嵌套 IF（多条件判断）

当需要判断多个等级时，可以嵌套使用：

```excel
=IF(A1>=90, "优秀", IF(A1>=70, "良好", IF(A1>=60, "及格", "不及格")))
```

👉 从左到右依次判断条件，一旦满足，就不会继续判断后面的条件。

## 4. IF 结合其他函数的高级用法

1. 与 AND 组合（多个条件都要满足）

    ```excel
    =IF(AND(A1>60, B1>60), "通过", "未通过")
    ```

    ➤ 当 A1 和 B1 都大于 60 时返回“通过”。

2. 与 OR 组合（只要一个条件满足）

    ```excel
    =IF(OR(A1="是", B1="是"), "同意", "不同意")
    ```

    ➤ A1 或 B1 任意一个是“是”，则返回“同意”。

3. 与 ISBLANK 检测空白

    ```excel
    =IF(ISBLANK(A1), "未填写", "已填写")
    ```

4. 与文本函数结合

    ```excel
    =IF(LEFT(A1,2)="AB", "匹配", "不匹配")
    ```

    ➤ 检查 A1 单元格前两个字符是否为“AB”。

## 5. 错误处理技巧

使用 `IFERROR` 避免出错提示：

```excel
=IFERROR(A1/B1, "除数为0")
```

➤ 如果 B1=0，会返回“除数为0”，而不是 `#DIV/0!` 错误。

## 6. 实战练习建议

| 题目               | 目标                                                 | 提示                                    |
| ------------------ | ---------------------------------------------------- | --------------------------------------- |
| 判断分数是否合格   | 分数 ≥ 60 → “合格”，否则“不合格”                     | `=IF(A2>=60,"合格","不合格")`           |
| 员工绩效评定       | 分数≥90“优秀”，70-89“良好”，60-69“及格”，<60“不及格” | 嵌套IF                                  |
| 检测是否缺考       | 如果为空返回“缺考”，否则显示分数                     | `=IF(ISBLANK(A2),"缺考",A2)`            |
| 判断客户是否新客户 | 如果注册日期在2024年后 → “新客户”                    | `=IF(YEAR(A2)>=2024,"新客户","老客户")` |

## 7. 实操

- [https://github.com/AndersonHJB/BornforthisData/blob/main/bornforthis.cn/blog/2025/10month/Excel-IF/Excel_IF%E7%BB%83%E4%B9%A0.xlsx](https://github.com/AndersonHJB/BornforthisData/blob/main/bornforthis.cn/blog/2025/10month/Excel-IF/Excel_IF%E7%BB%83%E4%B9%A0.xlsx)



















::: details 公众号：AI悦创【二维码】

![](https://blog.images.bornforthis.cn/docs-images/sha256/77/77f67d48a67ec6a44a4ef1f01ffc85830eb3c121b1ece45dc5ada06e20e2f52b.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Web、Linux」，招收学员面向国内外，国外占 80%。全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](https://blog.images.bornforthis.cn/docs-images/sha256/30/3087c629da73428daa0ee050f5b31709c30f650686164b54c724b892a422c585.jpg)