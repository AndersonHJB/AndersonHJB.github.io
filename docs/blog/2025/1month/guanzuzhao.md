---
title: CCC '15 J3 - Rövarspråket
date: 2025-01-10 09:10:35
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

##### Canadian Computing Competition: 2015 Stage 1, Junior #3

In Sweden, there is a simple child's game similar to Pig Latin called Rövarspråket (Robbers Language).

In the CCC version of Rövarspråket, every consonant is replaced by three letters, in the following order:

- the consonant itself;
- the vowel closest to the consonant in the alphabet (e.g., if the consonant is `d`, then the closest vowel is `e`), with the rule that if the consonant falls exactly between two vowels, then the vowel closer to the start of the alphabet will be chosen (e.g., if the consonant is `c`, then the closest vowel is `a`);
- the next consonant in the alphabet following the original consonant (e.g., if the consonant is `d`, then the next consonant is `f`) except if the original consonant is `z`, in which case the next consonant is `z` as well.

Vowels in the word remain the same. (Vowels are `a`, `e`, `i`, `o`, `u` and all other letters are consonants.) Write a program that translates a word from English into Rövarspråket.

#### Input Specification

The input consists of one word entirely composed of lowercase letters. There will be at least one letter and no more than 30 letters in this word.

#### Output Specification

Output the word as it would be translated into Rövarspråket on one line.

#### Sample Input 1

```java
joy
```

#### Output for Sample Input 1

```java
jikoyuz
```

#### Sample Input 2

```java
ham
```

#### Output for Sample Input 2

```java
hijamon
```



```java
import java.util.Scanner;

public class RovarspraketConverter {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String input = scanner.nextLine();
        System.out.println(convertToRovarspraket(input));
        scanner.close();
    }
    
    public static String convertToRovarspraket(String word) {
        StringBuilder result = new StringBuilder();
        
        for (char c : word.toCharArray()) {
            if (isVowel(c)) {
                result.append(c);
            } else {
                result.append(getConsonantPattern(c));
            }
        }
        
        return result.toString();
    }
    
    private static boolean isVowel(char c) {
        return "aeiou".indexOf(c) != -1;
    }
    
    private static String getConsonantPattern(char consonant) {
        return String.valueOf(consonant) + 
               getClosestVowel(consonant) + 
               getNextConsonant(consonant);
    }
    
    private static char getClosestVowel(char consonant) {
        char[] vowels = {'a', 'e', 'i', 'o', 'u'};
        int minDistance = Integer.MAX_VALUE;
        char closestVowel = 'a';
        
        for (char vowel : vowels) {
            int distance = Math.abs(consonant - vowel);
            if (distance < minDistance) {
                minDistance = distance;
                closestVowel = vowel;
            } else if (distance == minDistance && vowel < closestVowel) {
                // 如果距离相等，选择字母表中更靠前的元音
                closestVowel = vowel;
            }
        }
        
        return closestVowel;
    }
    
    private static char getNextConsonant(char consonant) {
        if (consonant == 'z') {
            return 'z';
        }
        
        char next = (char) (consonant + 1);
        while (isVowel(next) && next <= 'z') {
            next++;
        }
        return next;
    }
}
```

























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