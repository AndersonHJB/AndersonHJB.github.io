---
title: Part 1-Birth Date Application(30 pts)
icon: java
Date: 2022-09-20 00:06:52
author: AI悦创
isOriginal: true
category: 
    - 1v1
    - Java 1v1
    - 纽约大学一对一
tag:
    - 1v1
    - Java 1v1
    - 纽约大学一对一
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

## Part 1: Birth Date Application: (30 pts)Use MOD % and / division to separate digits for Birthday date Birthdays.java

Ask for the user to enter a two people’s birthday as an 8 digit-number! The user should enter the birthday for each person in an 8-digit format ("YYYYMMDD"). Then your program should compare the two birthday dates to determine which person is older, or if they have the same age.

> 要求用户输入两个人的生日作为一个 8 位数的数字!
>
> 用户应该以 8 位数字格式 `(“YYYYMMDD”)` 输入每个人的生日。然后你的程序应该比较两个生日日期，以确定谁更年长，或者他们是否有相同的年龄。

For example, President’s Obama's birthday is Aug 4,1961. So, it should be entered as 19610804 (YYYYMMDD). We can assume that the user enters good data with 8 digits for each birthday so you do not have to do any data validation.

> 例如，奥巴马总统的生日是1961年8月4日。因此，它应该输入为19610804 (YYYYMMDD)。我们可以假设用户为每个生日输入 8 位数字，这样您就不必进行任何数据验证。

- This program should separate each 8-digit-number into three separate numbers to represent the day, month, and the year, in that order. **Only use the mathematical operators to separate the digits (will cover this during class).**

> 这个程序应该将每个8位数字按顺序分成三个单独的数字，分别表示日、月和年。**只使用数学运算符来分隔数字** (将在课堂上讨论)。

Thus, in our example the program would assign 4 to a first variable from the right, let's say day, then assign 8 to a second variable, let's say month and 1961 to the number variable, let's say year. (Do not worry about leading zeroes for days and months.)

> 因此，在我们的例子中，程序会将 4 赋值给右边的第一个变量，比如 day，然后将 8 赋值给第二个变量，比如 month，将 1961 赋值给 number 变量，比如 year。(不用担心天数和月份的前导零。)

Next the program should print out the date of birth written in the following standard format MM/DD/YYYY for each person. So, the output for Obama’s date of birth should be as follow: 8/4/1961

> 接下来，程序将为每个人打印出以以下标准格式写的出生日期 MM/DD/YYYY。因此，奥巴马出生日期的输出应该如下: 8/4/1961

Also, your program should be able to print which person is older or the other possibility that they are the same age. You should use control structure allowing program to make decision (smart). So, result should be decided by program and not you.

> 另外，你的程序应该能够打印出哪个人更老，或者他们是相同年龄的其他可能性。你应该使用允许程序做出决策(智能)的控制结构。所以，结果应该由程序决定，而不是由你决定。

## Example (Comparing Obama’s to Beyoncé Birthday):

Enter the birthday in 8-digit format for person's # 1: (YYYYMMDD): 19610804

Enter the birthday in 8-digit format for person's # 2, (YYYYMMDD): 19810904

**For this example, the following result will be printed:**

Enter name for person #1: Obama

Enter name for person #2: Beyoncé

Obama’s date of birth is: 8/4/1961

Beyoncé’s date of birth is: 9/4/1981

Obama is Older than Beyoncé!

## Grading Criteria:

A. Program Execution (90%)

Meeting all of the require



## 答案

### 1. 整数分割

```java
public class HW {
    public static void main(String[] args) {
        int a = 25;
        int theunit = a % 10;
        int decade = a / 10;
        int decadeplusunit = theunit + decade;
        System.out.println(decadeplusunit);

    }
}
```

### 2. 年月日分割

```java
public class HW {
    public static void main(String[] args) {
        int birthday = 19610804;
        int year = birthday / 10000;
        int month = birthday % 10000 / 100;
        int day = birthday % 10000 % 100;
        System.out.println(day);
    }
}
```

### 3. 编写成对象

```java
public class HW {
    public static void main(String[] args) {

    }

    public String getBirthday(int birthday) {
        int year = birthday / 10000;
        int month = birthday % 10000 / 100;
        int day = birthday % 10000 % 100;
        String birthday_format = month + "/" + day + "/" + year;
        return birthday_format;
    }
}
```

### 4. main

```java
import java.util.Scanner; // Scanner == java.util.Scanner

public class Birthday {
    public static void main(String[] args) {
        Birthday birthday = new Birthday();  // 类的实例化
        Scanner scanner = new Scanner(System.in);
//        Scanner input = new Scanner(System.in);

        // 获取姓名
//        System.out.println("请输入第一个姓名:");
        System.out.print("请输入第一个姓名:");
         String name1 = scanner.next();
         // String name1 = scanner.nextLine();

        // 获取日期
//        System.out.println("以 8 位格式输入" + name1 + "的生日:(YYYYMMDD):");
        System.out.print("以 8 位格式输入" + name1 + "的生日:(YYYYMMDD):");
        int birthday1 = scanner.nextInt();
        String birthday1_format = birthday.getBirthday(birthday1);

        System.out.print("请输入第一个姓名:");
        String name2 = scanner.next();

        System.out.print("以 8 位格式输入" + name2 + "的生日:(YYYYMMDD):");
        int birthday2 = scanner.nextInt();
        String birthday2_format = birthday.getBirthday(birthday2);

        System.out.println("输出第一个人的姓名:" + name1);
        System.out.println("输出第二个人的姓名:" + name2);
        System.out.println(name1 + "的出生日期是:" + birthday1_format);
        System.out.println(name2 + "的出生日期是:" + birthday2_format);

        if (birthday1 < birthday2) {
            System.out.println(name1 + "比" + name2 + "还老!");
        }else if(birthday1 == birthday2){
            System.out.println(name1 + "和" + name2 + "是同年同月同日生!");
        }else {
            System.out.println(name2 + "比" + name1 + "还老!");
        }
    }

    public String getBirthday(int birthday) {
        int year = birthday / 10000;
        int month = birthday % 10000 / 100;
        int day = birthday % 10000 % 100;
        String birthday_format = month + "/" + day + "/" + year;
        return birthday_format;
    }
}
```

### 5. 标准代码

```java
import java.util.Scanner; // Scanner == java.util.Scanner

public class Birthday {
    public static void main(String[] args) {
        Birthday birthday = new Birthday();  // 类的实例化
        Scanner scanner = new Scanner(System.in);
//        Scanner input = new Scanner(System.in);

        // 获取日期
        System.out.print("Enter the birthday in 8-digit format for person's # 1: (YYYYMMDD):");
        int birthday1 = scanner.nextInt();
        String birthday1_format = birthday.getBirthday(birthday1);

        System.out.print("Enter the birthday in 8-digit format for person's # 2, (YYYYMMDD): ");
        int birthday2 = scanner.nextInt();
        String birthday2_format = birthday.getBirthday(birthday2);

        // 获取姓名
        System.out.print("Enter name for person #1:");
         String name1 = scanner.next();
         // String name1 = scanner.nextLine();

        System.out.print("Enter name for person #2:");
        String name2 = scanner.next();



        System.out.println(name1 + "\'s date of birth is:" + birthday1_format);
        System.out.println(name2 + "\'s date of birth is:" + birthday2_format);
//        System.out.println(name1 + "的出生日期是:" + birthday1_format);
//        System.out.println(name2 + "的出生日期是:" + birthday2_format);

        if (birthday1 < birthday2) {
            System.out.println(name1 + " is Older than " + name2 + "!");
        }else if(birthday1 == birthday2){
            System.out.println(name1 + "和" + name2 + "是同年同月同日生!");
        }else {
            System.out.println(name2 +" is Older than " + name1 + "!");
        }
    }

    public String getBirthday(int birthday) {
        int year = birthday / 10000;
        int month = birthday % 10000 / 100;
        int day = birthday % 10000 % 100;
        String birthday_format = month + "/" + day + "/" + year;
        return birthday_format;
    }
}
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