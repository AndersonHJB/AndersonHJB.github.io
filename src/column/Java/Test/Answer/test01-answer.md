---
title: 01-Java 数据类型转换「答案」
date: 2023-08-10 11:39:20
icon: java
author: AI悦创
isOriginal: true
category: 
    - Java Quiz
tag:
    - Java Quiz
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

## Question 1: 烹饪配料转换

::: tabs

@tab 涉及 Scanner

假设你正在烹饪一款菜，菜谱上的配料量都是以克为单位，但你的秤只能测量千克。你要写一个 Java 程序，接受用户输入的千克数（浮点数），然后将其转换为克（整数）。注意，我们要把千克中的小数部分转换成克，并且如果小数部分大于等于 0.5，就应该向上取整。

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("请输入配料的千克数：");
        double kilograms = sc.nextDouble();  // 用户输入的千克数

        int grams = (int)Math.round(kilograms * 1000);  // 将千克数转换为克，并向最接近的整数四舍五入

        System.out.println("配料的克数为：" + grams);
    }
}
```

@tab 不涉及 Scanner
你正在烹饪一款菜，菜谱上的配料量都是以克为单位。现在，你有一个精确到千克的秤，假设你测量出的重量为2.5千克。编写一个Java函数，将这个浮点数转换为以克为单位的整数。如果千克的小数部分大于等于0.5，则向上取整。

```java
double weightInKg = 2.5;
// 将 weightInKg 转换为以克为单位的整数
```

```java
public class Main {
    public static void main(String[] args) {
        double weightInKg = 2.5;
        // 转换为克
        double weightInGrams = weightInKg * 1000;
        // 向上取整
        int weightRounded = (int) Math.ceil(weightInGrams);
        System.out.println(weightRounded);
    }
}
```

:::
