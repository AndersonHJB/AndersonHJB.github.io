---
title: ICS3U Unit3 Intro Java Summative Review Assignment
date: 2023-12-03 23:30:30
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

Answer the following questions on the pages provided. Please be as neat and clear as possible. Give full answers and show your work where asked

1. [5 marks] Complete the truth table for the following expression: `(p && q) || (!p && !q)`

| p    | q    | !p   | !q   | (p && q) | (!p && !q) | (p && q)\|\|(!p && !q) |
| ---- | ---- | ---- | ---- | -------- | ---------- | ---------------------- |
| T    | T    | F    | F    | T        | F          | T                      |
| T    | F    | F    | T    | F        | F          | F                      |
| F    | T    | T    | F    | F        | F          | F                      |
| F    | F    | T    | T    | F        | T          | T                      |

2. [4 marks] For each of the following, state whether the value is true or false:

| Expression                         | Value |
| ---------------------------------- | ----- |
| `'N' > 'n'`                        | false |
| `6.0 / 10 > 6 / 10`                | true  |
| `13 % 10 > 2 != true`              | false |
| `"Hello".equals("hello") == false` | true  |

3. [8 marks] Consider the following laws and equivalencies:

- `!(p&&q)≡!p||!q`: 

- `!(p|| q)≡!p&&!q`

- `p||(p&&q)≡p`

- `p&&!p≡false`

- `p||!p≡true`

- `!true ≡ false`

- `!false ≡ true`

- `p||false≡p`

Use the relationships above to simplify each of the following relationships as much as possible.

In each intermediate step, please indicate the law being used by **citing the appropriate number listed above:**

a) `(p&&!q)||!q`

- 使用法则2：`!q || !q`
- 使用法则5：`true`

b) `!(p&&!p)&&!true`

- 使用法则4：`!false && false`
- 简化为：`false`

c) `!(!(p||q)&&!p)`

- 使用法则2：`!(!p&&!q)&&!p`
- 简化为：`p || q || !p`
- 进一步简化：`true`

d) `!(!(!q&&p)&&p||!q)`

- 使用法则1：`!!q || !p || p || !q`
- 简化为：`q || true`
- 最终简化为：`true`

4. [6 marks] State whether the value of the expression is negative, zero or positive.

| Expression                   | Value          |
| ---------------------------- | -------------- |
| `"fun".compareTo("funn")`    | -1「Negative」 |
| `"funn".compareTo("funny")`  | -1「Negative」 |
| `"funny".compareTo("Funny")` | 32「Positive」 |
| `"Funny".compareTo("Funky")` | 3「Positive」  |
| `"fun".compareTo("fun")`     | 0「Zero」      |
| `"Fun".compareTo("Fun")`     | 0「Zero」      |

5. [2 marks] Consider the following statement:

```java
if (A > B)
    if (C < D)
        System.out.println(“Accept”);
    else
        System.out.println(“Reject”);
```

What will the statement print if:

a) `A>B && C>D`

- a) `A>B && C>D` - 由于`A>B`为真，但`C<D`为假，所以输出`"Reject"`。

b) `A<B && C<D`

- b) `A<B && C<D` - 由于`A<B`为假，所以整个if语句都不会执行，没有输出。

6. [2 marks] Rewrite as a single if statement in as concise a form as possible. Assume that sign is of type boolean and that i is of type int:

```java
if (true)
    if (!sign==false)
        i=2;
    else
        i=0;
```

**答案：**

```java
if (sign)
    i = 2;
else
    i = 0;
```





7. [5 marks] Simplify as much as possible

| ! (a >= b)         | `a < b` |
| ------------------ | ------- |
| x < 6 \|\| x < 5   | `x < 6` |
| x < 0 && x > 0     | `false` |
| a < b && a <= b    | `a < b` |
| a < 1 \|\| a >= -1 | `true`  |

8. [6 marks] Write a program that reads a date in numeric form as a year followed by a month followed by a day and then prints the date as one might on a cheque. For example, the input of 

2000 

7

1

Should produce an output of:

```java
July 1, 2000
```

Please write this program in VSCode. Take a screenshot and print out your program. Attach it to this assignment when you hand it in. Do not write this code by hand.

```java
import java.util.Scanner;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.text.ParseException;

public class DateFormat {
    public static void main(String[] args) throws ParseException {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter year, month, and day:");
        int year = scanner.nextInt();
        int month = scanner.nextInt();
        int day = scanner.nextInt();
        
        String inputDate = year + "-" + month + "-" + day;
        SimpleDateFormat inputFormat = new SimpleDateFormat("yyyy-M-d");
        SimpleDateFormat outputFormat = new SimpleDateFormat("MMMM d, yyyy");
        
        Date date = inputFormat.parse(inputDate);
        String formattedDate = outputFormat.format(date);
        System.out.println(formattedDate);
    }
}
```











::: details 公众号：AI悦创【二维码】

![](/gzh.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Web、Linux」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](/zsxq.jpg)
