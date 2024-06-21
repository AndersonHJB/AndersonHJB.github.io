---
title: 11.6 <option> 元素
date: 2022-11-24 15:32:33
icon: javascript1
author: AI悦创
isOriginal: true
category: 
    - JavaScript tutorial
tag:
    - JavaScript tutorial
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

`<option>`元素表示下拉框（`<select>`，`<optgroup>`或`<datalist>`）里面的一个选项。它是 HTMLOptionElement 接口的实例。

## 属性

除了继承 HTMLElement 接口的属性和方法，HTMLOptionElement 接口具有下面的属性。

- `disabled`：布尔值，表示该项是否可选择。
- `defaultSelected`：布尔值，表示该项是否默认选中。一旦设为`true`，该项的值就是`<select>`的默认值。
- `form`：返回`<option>`所在的表单元素。如果不属于任何表单，则返回`null`。该属性只读。
- `index`：整数，表示该选项在整个下拉列表里面的位置。该属性只读。
- `label`：字符串，表示对该选项的说明。如果该属性未设置，则返回该选项的文本内容。
- `selected`：布尔值，表示该选项是否选中。
- `text`：字符串，该选项的文本内容。
- `value`：字符串，该选项的值。表单提交时，上传的就是选中项的这个属性。

## Option() 构造函数

浏览器原生提供`Option()`构造函数，用来生成 HTMLOptionElement 实例。

```javascript
new Option(text, value, defaultSelected, selected)
```

它接受四个参数，都是可选的。

- text：字符串，表示该选项的文本内容。如果省略，返回空字符串。
- value：字符串，表示该选项的值。如果省略，默认返回`text`属性的值。
- defaultSelected：布尔值，表示该项是否默认选中，默认为`false`。注意，即使设为`true`，也不代表该项的`selected`属性为`true`。
- selected：布尔值，表示该项是否选中，默认为`false`。

```javascript
var newOption = new Option('hello', 'world', true);

newOption.text // "hello"
newOption.value // "world"
newOption.defaultSelected // true
newOption.selected // false
```

上面代码中，`newOption`的`defaultSelected`属性为`true`，但是它没有被选中（即`selected`属性为`false`）。

::: details 公众号：AI悦创【二维码】

![](/gzh.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Linux、Web 全栈」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](/zsxq.jpg)
