---
title: 06-章节测试六答案
date: 2022-08-22 07:14:45
author: AI悦创
isOriginal: true
category: Python 私教练习题【基础】
tag:
    - Python 基础练习题
icon: python
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

1.  此题无需在线作答，请在纸上作答后查看答案解析 while 循环，只要 while 后面的条件为\_\_\_\_\_时才能不断循环，条件不满足时退出循环。
    

::: tip 答案解析

正确答案：真/True 记忆性知识点

::: 

2.  此题无需在线作答，请在纸上作答后查看答案解析 （拓展）在循环语句中，\_\_\_\_\_\_\_语句的作用是提前进入下一次循环。
    

::: tip 答案解析

正确答案：continue 记忆性知识点

:::    

3.  若 k 为整型，下述 while 循环一共执行\_\_\_\_\_\_次后，输出数值为\_\_\_\_\_。
    
    ```python
    k = 1000
    while k >1:
        k = k/2
    
    print(k)
    ```
    
    A. 10 1.953 
    
    B. 10 0.9765625 
    
    C. 11 0.9765625 
    
    D. 11 1.953

::: tip 答案解析

正确答案：B 

易错项：C 

一共执行了 10 次循环，k 依次变化为 1000，500.0，250.0，125.0，62.5，31.25，15.625，7.8125，3.90625，1.953125，0.9765625。

最后一次执行完循环，k 已小于 1，,即不满足循环条件，跳出循环。输出数值为最后一次执行 `k=k/2` 之后的k值，即 `k=0.9765625` 。

:::    

4.  有代码如下，请判断最后一个输出的数字是\_\_\_\_\_。
    
    ```python
    n = 1
    while n <= 100 :
        if n > 10 :
            break
        print(n)
        n = n+1
    ```
    
    A. 100 
    
    B. 10 
    
    C. 11 
    
    D. 99

::: tip 答案解析

正确答案：B 

易错项：C while 循环条件是在 `1-100` 之内进行循环，并在大于 10 时在 break 处跳出整个循环，即当 `n=1` 1时满足跳出整个循环的条件，即停止循环。
::: 

5. 用 Python 编程，假设一年期定期利率为 `3.25%` ，计算一下需要过多少年，一万元的一年定期存款连本带息能翻番？ 

    ![img](https://blog.images.bornforthis.cn/docs-images/sha256/b9/b961209e605466dcfcf16484455f41c964ecf5b2ae81fa6cece506c932484797.png)

6.  （拓展）使用 while 循环将列表内的奇数和偶数分开

![img](https://blog.images.bornforthis.cn/docs-images/sha256/1c/1c99743f895b3f26b45617d8c67f9def6b31161a551b3f1844dfca75daf59d49.png)



