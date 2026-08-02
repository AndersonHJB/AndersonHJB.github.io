---
title: Java数组排序「冒泡排序」
date: 2023-01-15 17:24:02
author: AndersonHJB
isOriginal: true
category: 
    - Python一对一答疑帖
    - 留学生Python辅导
    - 留学生Java辅导
    - Java辅导
    - Java一对一
    - 数据结构与算法一对一辅导
    - 冒泡排序
tag:
    - Python一对一答疑帖
    - 留学生Python辅导
    - 留学生Java辅导
    - Java辅导
    - Java一对一
    - 数据结构与算法一对一辅导
    - 冒泡排序
icon: java
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
head:
  - - meta
    - name: keywords
      content: 一对一辅导编程,编程一对一辅导,少儿编程一对一,Python 1v1,AI悦创,一对一,Python,编程一对一,C++,Java,AI,人工智能,黄家宝,Python一对一教学,Python辅导,全网3000+学员,值得信赖
  - - meta
    - name: description
      content: 一对一辅导编程,编程一对一辅导,少儿编程一对一,Python 1v1,AI悦创,一对一,Python,编程一对一,C++,Java,AI,人工智能,黄家宝,Python一对一教学,Python辅导,全网3000+学员,值得信赖
---

## Java 数组冒泡排序

你好，我是悦创。

对数组进行排序是程序中非常基本的需求。常用的排序算法有冒泡排序、插入排序和快速排序等。

我们来看一下如何使用冒泡排序算法对一个整型数组从小到大进行排序：

::: code-tabs#java

@tab 精简版

```java
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        int[] ns = { 28, 12, 89, 73, 65, 18, 96, 50, 8, 36 };
        // 排序前:
        System.out.println(Arrays.toString(ns));
        for (int i = 0; i < ns.length - 1; i++) {
            for (int j = 0; j < ns.length - i - 1; j++) {
                if (ns[j] > ns[j+1]) {
                    // 交换ns[j]和ns[j+1]:
                    int tmp = ns[j];
                    ns[j] = ns[j+1];
                    ns[j+1] = tmp;
                }
            }
        }
        // 排序后:
        System.out.println(Arrays.toString(ns));
    }
}
```

@tab 带有注释

```java
/**
 * @ClassName: Sort
 * @Description: TODO
 * @Author: AndersonHJB
 * @date: 2023/1/15 16:28
 * @Version: V1.0
 * @Blog: https://bornforthis.cn
 */

import java.util.Arrays;

public class Sort {
    public static void main(String[] args) {
        int[] ns = new int[10];

        for (int i = 0; i < ns.length; i++) {
            ns[i] = (int) (Math.random() * 100);
        }

        System.out.println(Arrays.toString(ns));
        System.out.println("——————————————————————");
        for (int i = 0; i < ns.length - 1; i++) {
            for (int j = 0; j < ns.length - i - 1; j++) {
                // 为什么要 -1？
                // TODO：因为 范围为：10，会生成 0～9，而算法中，j 需要 +1，so：当 j=9 时，j + 1 = 10。
                // System.out.print("i:" + i + "\t" + "j:" + j + "\t\t");
                if (ns[j] > ns[j + 1]) {
                    // 交换 ns[j] 和 ns[j+1]
                    int tmp = ns[j];
                    ns[j] = ns[j + 1];
                    ns[j + 1] = tmp;
                }
            }
        }
        System.out.println(Arrays.toString(ns));
    }
}
```

:::

冒泡排序的特点是，每一轮循环后，最大的一个数被交换到末尾，因此，下一轮循环就可以“刨除”最后的数，每一轮循环都比上一轮循环的结束位置靠前一位。

另外，注意到交换两个变量的值必须借助一个临时变量。像这么写是错误的：

```java
int x = 1;
int y = 2;

x = y; // x现在是2
y = x; // y现在还是2
```

正确的写法是：

```java
int x = 1;
int y = 2;

int t = x; // 把x的值保存在临时变量t中, t现在是1
x = y; // x现在是2
y = t; // y现在是t的值1
```

实际上，Java 的标准库已经内置了排序功能，我们只需要调用 JDK 提供的 `Arrays.sort()` 就可以排序：

```java
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        int[] ns = { 28, 12, 89, 73, 65, 18, 96, 50, 8, 36 };
        Arrays.sort(ns);
        System.out.println(Arrays.toString(ns));
    }
}
```

必须注意，对数组排序实际上修改了数组本身。例如，排序前的数组是：

```
int[] ns = { 9, 3, 6, 5 };
```

在内存中，这个整型数组表示如下：

```java
      ┌───┬───┬───┬───┐
ns───▶│ 9 │ 3 │ 6 │ 5 │
      └───┴───┴───┴───┘
```

当我们调用 `Arrays.sort(ns);` 后，这个整型数组在内存中变为：

```java
      ┌───┬───┬───┬───┐
ns───▶│ 3 │ 5 │ 6 │ 9 │
      └───┴───┴───┴───┘
```

即变量 `ns` 指向的数组内容已经被改变了。

如果对一个字符串数组进行排序，例如：

```java
String[] ns = { "banana", "apple", "pear" };
```

排序前，这个数组在内存中表示如下：

```java
                   ┌──────────────────────────────────┐
               ┌───┼──────────────────────┐           │
               │   │                      ▼           ▼
         ┌───┬─┴─┬─┴─┬───┬────────┬───┬───────┬───┬──────┬───┐
ns ─────▶│░░░│░░░│░░░│   │"banana"│   │"apple"│   │"pear"│   │
         └─┬─┴───┴───┴───┴────────┴───┴───────┴───┴──────┴───┘
           │                 ▲
           └─────────────────┘
```

调用 `Arrays.sort(ns);` 排序后，这个数组在内存中表示如下：

```java
                   ┌──────────────────────────────────┐
               ┌───┼──────────┐                       │
               │   │          ▼                       ▼
         ┌───┬─┴─┬─┴─┬───┬────────┬───┬───────┬───┬──────┬───┐
ns ─────▶│░░░│░░░│░░░│   │"banana"│   │"apple"│   │"pear"│   │
         └─┬─┴───┴───┴───┴────────┴───┴───────┴───┴──────┴───┘
           │                              ▲
           └──────────────────────────────┘
```

原来的 3 个字符串在内存中均没有任何变化，但是`ns`数组的每个元素指向变化了。

## 练习

请思考如何实现对数组进行降序排序：

```java
// 降序排序
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        int[] ns = { 28, 12, 89, 73, 65, 18, 96, 50, 8, 36 };
        // 排序前:
        System.out.println(Arrays.toString(ns));
        // TODO:
        // 排序后:
        System.out.println(Arrays.toString(ns));
        if (Arrays.toString(ns).equals("[96, 89, 73, 65, 50, 36, 28, 18, 12, 8]")) {
            System.out.println("测试成功");
        } else {
            System.out.println("测试失败");
        }
    }
}
```

## 小结

- 常用的排序算法有冒泡排序、插入排序和快速排序等；

- 冒泡排序使用两层 `for` 循环实现排序；

- 交换两个变量的值需要借助一个临时变量。

- 可以直接使用 Java 标准库提供的 `Arrays.sort()` 进行排序；

- 对数组排序会直接修改数组本身。

欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！

::: details 公众号：AI悦创【二维码】

![](https://blog.images.bornforthis.cn/docs-images/sha256/77/77f67d48a67ec6a44a4ef1f01ffc85830eb3c121b1ece45dc5ada06e20e2f52b.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Linux、Web全栈」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](https://blog.images.bornforthis.cn/docs-images/sha256/30/3087c629da73428daa0ee050f5b31709c30f650686164b54c724b892a422c585.jpg)
