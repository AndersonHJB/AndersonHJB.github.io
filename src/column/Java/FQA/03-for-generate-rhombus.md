---
title: 03-只用 for 循环实现指定生成菱形
date: 2022-10-10 23:55:28
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

直接上代码：

```java
import java.util.Scanner;

/**
 * @author AI悦创
 * @version 1.0
 */
// 无判断实现指定菱形
public class part3 {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int layer;
        do {
            System.out.print("请输入菱形层数(奇数):");
            layer = scanner.nextInt();
        } while (layer%2 == 0);
        System.out.print("请输入每行菱形个数:");
        int number = scanner.nextInt();
        for (int i = 1; i < layer/2 + 2; i++) {
            for (int j = 0; j < number; j++) {
                for (int k = 0; k < 1; k++) {
                    System.out.print(" ");
                }
                for (int k = 0; k < layer/2 +1-i; k++) {
                    System.out.print(" ");
                }
                for (int k = 0; k < 2*i-1; k++) {
                    System.out.print("*");
                }
                for (int k = 0; k < layer-i; k++) {
                    System.out.print(" ");
                }
            }
            System.out.println("");
        }
        for (int i = layer/2 + 1; i > 1 ; i--) {
            for (int j = 0; j < number; j++) {
                for (int k = 0; k < 2; k++) {
                    System.out.print(" ");
                }
                for (int k = 0; k < layer/2 +1-i; k++) {
                    System.out.print(" ");
                }
                for (int k = 0; k < 2*i-3; k++) {
                    System.out.print("*");
                }
                for (int k = 0; k < layer-i+1; k++) {
                    System.out.print(" ");
                }
            }
            System.out.println("");
        }
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

