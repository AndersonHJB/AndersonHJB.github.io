---
title: 05-Java trim() 方法
date: 2022-10-20 09:27:05
icon: java
author: AI悦创
isOriginal: true
category: 
    - Java体系课
    - Java FQA
tag:
    - Java体系课
    - Java FQA
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
editLink: true
backToTop: true
toc: true
---

trim() 方法用于删除字符串的头尾空白符。

## 语法

```
public String trim()
```

## 参数

-   无

## 返回值

删除头尾空白符的字符串。

## 实例

```java
public class Test {
    public static void main(String args[]) {
        String Str = new String("    www.bornforthis.cn    ");
        System.out.print("原始值 :");
        System.out.println(Str);

        System.out.print("删除头尾空白 :");
        System.out.println(Str.trim());
    }
}
```

以上程序执行结果为：

```java
原始值 :    www.bornforthis.cn    
删除头尾空白 :www.bornforthis.cn
```

欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！

::: details 公众号：AI悦创【二维码】

![](/gzh.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](/zsxq.jpg)
