---
title: Quiz #5
icon: python
date: 2023-11-20 12:16:38
author: AI悦创
isOriginal: true
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

The coefficients of a polynomial $p(x)=a_0 + a_1x + a_2x^2+···+a_nx^n$ are given as a python list `pol=[a0,a1, a2,...,an]`, where the index corresponds to the power of *x*.

(a)The function `evaluate(p,a)` evaluates a polynomial `p(x)` at the value `x=a` and returns this value. What is the missing line of code?

```python
def evaluate(p,a):
    pa=0
    for k in range(len(p)):
        ## MISSING LINE IS HERE
    return pa
```

```python
pa += p[k] * (a**k)
```



Consider the function $f(x)=e^{0.4x}−x+sin(4x)$.

In this exercise, we will use various methods to approximate the roots of this function, i.e., solutions of the equation $f(x)=0$.

(Optional, but helpful!) Graph the function f (*x*) on the interval [0, 1] along with the *x*-axis. Identify the root visually and "zoom in" closer by modifying your values of *a* and *b*. 

**(a)** Using the grid method with *a* = 0, *b* =  1, and *n* =  1000, determine the value of *m* so that the tolerance $10^{-m}$ gives exactly one possible root.

**(b)** In (a), what is the approximate root?

**(c)** Using the grid method with *a* =  0, *b* = 1, and TOL=$10^{-5}$, determine the smallest integer *m* so that when $n=10^m$ you have at least one possible root which satisfies $|f(x)|<10^{-5}$.

**(d)** The code below is meant to output an interval on which the equation f (x) = 0 has a solution, however it contains an error. Identify the line where the error occurs and type what the correct line should be.

```python
def IVT_bisection(f,a,b,tol):
    while abs(b-a)>=tol:
        mid=(a+b)/2
        if f(mid)==0:
            print("The solution is:", mid)
        if f(a)*f(mid)<0:
            b=mid
        if f(mid)*f(b)<0:
            b=mid
    return a,b
```



Determine the smallest value of *n* so that the following sum approximates $e^3$ with an error less than $10^{-1}$.
$$
s_n = \sum_{i=0}^{n} \frac{x^i}{i!}
$$
(Recall that the above sum approximates *$e^x$*, for all real numbers *x*.) In other words, find the smallest *n* so that $|s_n−e^3|<10{−1}$. Enter this value of *n* into the answer box below.





Consider a finite subset $S \subseteq R$. Write a function $setA(S,M)$, which returns the set *A* containing all elements of *S* which are less than or equal to some value *M*.

```python
def setA(S,M):  ##(1)
if el<=M:       ##(2)
A=S             ##(3)
A.add(el)       ##(4)
A=S.copy()      ##(5)
return A        ##(6)
for el in A:    ##(7)
if el>M:        ##(8)
A.discard(el)   ##(9)
for el in S:    ##(10)
A=set()         ##(11)
```

Enter the line numbers in the order that they would appear in your program, separated with commas. For example, an answer might look like 7,3,2,8,10,7,6.

```python
def setA(S,M):  ##(1)
    A=set()         ##(11)
    for el in S:    ##(10)
        if el<=M:       ##(2)
            
```





Which of the following functions correctly returns True if *A*, *B*, and *C* form a partition of *X*, i.e., their union is *X*and they are pairwise disjoint, and False otherwise?

A.

```python
def partition(X,A,B,C):
    answer=True
    if A.union(B).union(C)!=X:
        answer=False
    if A.intersection(B)!=0:
        answer=False
    if A.intersection(C)!=0:
        answer=False
    if B.intersection(C)!=0:
        answer=False
    return answer
```

B.

```python
def partition(X,A,B,C):
    answer=False
    if A.union(B).union(C)==X:
        answer=True
    if A.intersection(B)==0:
        answer=True
    if A.intersection(C)==0:
        answer=True
    if B.intersection(C)==0:
        answer=True
    return answer
```

C.

```python
def partition(X,A,B,C):
    answer=False
    if (A.union(B).union(C)!=X or A.intersection(B)!=set()
        or A.intersection(C)!=set() or B.intersection(C)!=set()):
        answer=True
    return answer
```

D.

```python
def partition(X,A,B,C):
    answer=True
    if A.union(B).union(C)!=X:
        answer=False
    if A.intersection(B)!=set():
        answer=False
    if A.intersection(C)!=set():
        answer=False
    if B.intersection(C)!=set():
        answer=False
    return answer
```

E.

```python
def partition(X,A,B,C):
    answer=True
    if (A.union(B).union(C)!=X and A.intersection(B)!=set()
        and A.intersection(C)!=set() and B.intersection(C)!=set()):
        answer=False
    return answer
```

F.

```python
def partition(X,A,B,C):
    answer=False
    if (A.union(B).union(C)==X and A.intersection(B)==set()
        and A.intersection(C)==set() and B.intersection(C)==set()):
        answer=True
    return answer
```

G.

```python
def partition(X,A,B,C):
    answer=True
    if (A.union(B).union(C)!=X or A.intersection(B)!=set()
        or A.intersection(C)!=set() or B.intersection(C)!=set()):
        answer=False
    return answer
```

Enter 1 if you think that the function correctly performs the required task and 2 if you think that it does not.  So, a typical answer would look like '1,2,2,1,2,1,1' (without the quotes).





From the options below, choose the part that includes the three cases that *most thoroughly* (or best) test your code in the previous problem. 



Consider the dictionaries

```python
d1={1:"snow",2:"air",3:"cup",4:"toast",7:"avocado"}
d2={1:"flake",2:"plane",3:"cake",5:"jam",6:"juice"}
```

**(a)**Which of the code blocks below create a list of the values from d1?  

**(b)**Type the missing line to create an inverse dictionary `d_inverse` for the dictionary d2.

```python
d_inverse={}
for i in d2.keys():
    ## MISSING LINE IS HERE
```

**(c) **Write a program to create a dictionary d3 (do not use ready-made commands) which merges d1 and d2, adding together the values if two keys are the same, i.e., `d3[k]=d1[k]+d2[k]`.

```python
for i in d1:      ## (1)
for i in d2:      ## (2)
d3[i]=d2[i]       ## (3)
d3[i]=d1[i]       ## (4)
d3=dict()         ## (5)
if i not in d1:   ## (6)
if i in d2:       ## (7)
d3[i]=d1[i]+d2[i] ## (8)
else:             ## (9)
```

Enter the line numbers in the order that they would appear in your program, separated with commas. For example, an answer might look like 3,2,8,9,1,4,5,7,6.

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
