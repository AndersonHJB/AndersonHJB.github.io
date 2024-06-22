---
title: Quiz #4
icon: python
date: 2023-10-30 07:23:08
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

## Problem #1

Consider the function $f(x)=\sqrt{x}$ ln x.

- Define the function $f(x)$ in Python.
- Algebraically (i.e., using derivative rules) calculate f‘(x),Use this formula to define the function $fp(x)$ in Python.
- Create a third Python function, `fp_approx(f,a,h)`, that approximates the derivative $f\text{'}(x)$ using the difference quotient $\frac{f(a+h)-f(a)}{h}$ .

Determine the magnitude (absolute value) of the difference between the exact value of `fp(a)` and the approximation `fp_approx(f,a,h)` when $a=7$ and $h=0.8$. Enter this value into the answer box below.

```python
# from sympy import sqrt, ln
#
# def f(x):
#     return sqrt(x) * ln(x)
#
# def fp(x):
#     return (ln(x)/(2*sqrt(x))) + (1/sqrt(x))
#
# def fp_approx(f, a, h):
#     return (f(a + h) - f(a)) / h
#
# a = 7
# h = 0.8
# exact_val = fp(a)
# approx_val = fp_approx(f, a, h)
# difference = abs(exact_val - approx_val)
# print(difference)

from sympy import symbols, sqrt, ln

# 定义 x 为符号变量
x = symbols('x')

# 定义函数 f(x)
def f(x_val):
    func = sqrt(x) * ln(x)
    return func.subs(x, x_val).evalf()

# 定义导数函数 fp(x)
def fp(x_val):
    derivative = (ln(x)/(2*sqrt(x))) + (1/sqrt(x))
    return derivative.subs(x, x_val).evalf()

# 定义近似导数函数
def fp_approx(f, a, h):
    return (f(a + h) - f(a)) / h

# 计算精确值和近似值之间的差的绝对值
a = 7
h = 0.8
exact_val = fp(a)
approx_val = fp_approx(f, a, h)
difference = abs(exact_val - approx_val)

print(exact_val, approx_val, difference)
```

## Problem #2

**(a)** Examine the code below. Determine the missing line of code so that the function `primes(N)` uses the function `divisors(n)` to return a list of all the prime numbers less than or equal to some positive integer N.

```python
def divisors(n):
    D=[]
    for i in range(1,n+1):
        if n%i==0:
            D.append(i)
    return D

def primes(N):
    P=[]
    for i in range(1,N+1):
        ## MISSING LINE IS HERE
            P.append(i)
    return P 
```

**(b)** Copy and paste the code below into a fresh cell. Compare the execution time for printing the list of primes less than or equal to 500 using your code in part (a) and then using the code in part (b). (Tip: Use Python’s time module) Which code runs faster: Part (a) code or part (b) code?

```python
from sympy import sieve                                              
primes=list(sieve.primerange(1,N+1))  ## list of all primes less than or equal to N
print(primes)
```

**(A)** Part (a) Code 

**(B)** Part (b) Code

```python
import time

# (a) Using divisors function to find prime numbers
def divisors(n):
    D=[]
    for i in range(1,n+1):
        if n%i==0:
            D.append(i)
    return D

def primes(N):
    P=[]
    for i in range(1,N+1):
        if len(divisors(i)) == 2:  # This is the missing line
            P.append(i)
    return P 

# Measure the execution time of part (a) code
start_time_a = time.time()
prime_numbers_a = primes(500)
end_time_a = time.time()

time_taken_a = end_time_a - start_time_a

# (b) Using sympy's sieve method to find prime numbers
from sympy import sieve

N = 500
start_time_b = time.time()
primes_b = list(sieve.primerange(1, N+1))
end_time_b = time.time()

time_taken_b = end_time_b - start_time_b

time_taken_a, time_taken_b

```

## Problem #3

**Recall:** When the number of rows equals the number of columns, a matrix is said to be *square*. A square matrix is called lower triangular if all the entries above the main diagonal are zero. A square matrix is called upper triangular if all entries below the main diagonal are zero.

**(a)** Using 7 lines or less of code given below, define a function `upper_tri(M)` which replaces all entries below the main diagonal with zeros.

**(b)** Using 6 lines or less of code given below, define a function `diagonal_sum(M)` which computes the sum of the entries on the main diagonal.

**(c)** Using 8 lines or less of code given below, define a function `off_diagonal_sum(M)` which computes the sum of the entries not on the main diagonal.

```python
if i==j:                  ## (1)
return s                  ## (2)
s+=M[i][i]                ## (3)
if i!=j:                  ## (4)
s=0                       ## (5)
def lower_tri(M):         ## (6)
s+=M[i][j]                ## (7)
return M                  ## (8)
if i<j:                   ## (9)
def upper_tri(M):         ## (10)
M[i][i]=0                 ## (11)
def diagonal_sum(M):      ## (12)
for i in range(n):        ## (13)
for j in range(n):        ## (14)
def off_diagonal_sum(M):  ## (15)
M[i][j]=0                 ## (16)
if i>j:                   ## (17)
n=len(M)                  ## (18)
```

In each part, enter the line numbers in the order that they would appear in your program, separated with commas. For example, an answer might look like 7,3,2,8,10,7,6.

```python
**(a)** 10, 18, 13, 14, 17, 16, 8 **(b)** 12, 18, 5, 13, 1, 3, 2 **(c)** 15, 18, 5, 13, 14, 4, 7

a 10,18,13,14,17,16,8

c 15,18,5,13,14,4,7,2
```







## Problem #4

**(a)** What is the outcome of the Python code shown below? Type the output into the answer box below, separated by commas, in the order in which it appears.

```python
x=4
def add_x(x):
    print(x+15)
    return(x+16)
print(add_x(5))
print(x)
```

**(b)** Consider the code given below. Type the missing line required to generate the output shown.

```python
i=5   
j=12
while i>1:
    print(i*j)
    ### MISSING LINE
```

60

48

36

24

::: details

**(a)** 我们先分析代码的逻辑，然后确定其输出。

1. 初始化  $x=4$。
2. 定义函数 `add_x(x)`，该函数打印 $x + 15$ 并返回 $x+16$。
3. 调用 `add_x(5)`，这将打印 $5+15=20$  并返回 $5+16=21$ 。所以，`print(add_x(5))` 将打印 21。
4. 打印全局变量 $x$ ，其值为 4。

因此，代码的输出为：20, 21, 4。

**(b)** 为了生成给定的输出，我们需要在每次循环迭代时递减 $i$。让我们确定缺失的行。

**(a)** 代码的输出为：20, 21, 4

**(b)** 为了产生给定的输出，缺少的行是：

```python
i -= 1
```
这行代码将 $i$值在每次循环迭代时递减 1，从而得到输出：60, 48, 36, 24。

:::

## Problem #5

**(a)** Determine the output when the line `print(g(f(h(7))))` is added below the functions `f(x)`, `g(x)`, and `h(x)` and the cell is run.

```python
def f(x):
    y=6*x+8  
    return y

def g(x):
    y=x//2
    return y

def h(x):
    y=x**0.5
    return y
```

**(b)** What is the output obtained after running the code below?

```python
def fgh(x):
    f=x**2
    g=abs(x)
    h=x**3
    return f,g,h

print(fgh(-6)[1])
```

11.0

6





## Problem #6

**(a)** Copy, paste, and run the code in the cell below to see the plot of the graph of $f(x)=sin(2x)$. Experiment with the values of *a* and *b* to determine the largest interval $[a,b]$ **through the origin** on which $f(x)$ is one-to-one. (Note: You can also try to do this using paper and pencil, and then support your result using code).

```python
import numpy as np
import matplotlib.pyplot as plt
%matplotlib inline

a=-np.pi
b=np.pi
x=np.linspace(a,b,200)
y=np.sin(A*x)   # make sure you use your value of A here!

plt.plot(x,y)
plt.grid()
plt.show()
```

**(b)** Without using an inverse trigonometric function, add a line of code which plots the graph of the inverse function to your plot from part (a). Enter the line of code into the answer box below.

```python
 **(A)** [−0.628, 0.628]  **(B)** [−0.785, 0.785]  **(C)** [−0.524, 0.524]  **(D)** [−1.571, 1.571]  **(E)** [−3.142, 3.142]  **(F)** [−1.047, 1.047] 
    
**(a)** 正确的区间是 **(B)** [−0.785, 0.785]。 **(b)** 代码行为 `plt.plot(y, x, 'r--')`。
```







## Problem #7

Match each line of code to its corresponding output. 

Note: Assume that the numpy module has been imported as np.

```python
##(a)
print(list([1,2,3,4,5]))

##(b)
print(list(range(1,5)))

##(c)
print(list(range(1,6)))

##(d)
print(list(range(1,6,2)))

##(e)
print(np.linspace(1,5)) 

##(f)
print(np.linspace(1,5,5))

##(g)
print(np.linspace(1,6,5))

##(h)
print(list(np.linspace(1,5,5)))
```

**(1)** `[1, 2, 3, 4]` 

**(2)** `[1.0, 2.0, 3.0, 4.0, 5.0]` 

**(3)** `[1, 3, 5]` 

**(4)** `[1.   2.25 3.5  4.75 6.  ]` 

**(5)** `[1. 2. 3. 4. 5.]` 

**(6)** `[1.         1.08163265 1.16326531 1.24489796 1.32653061 1.40816327 1.48979592 1.57142857 1.65306122 1.73469388 1.81632653 1.89795918 1.97959184 2.06122449 2.14285714 2.2244898  2.30612245 2.3877551 2.46938776 2.55102041 2.63265306 2.71428571 2.79591837 2.87755102 2.95918367 3.04081633 3.12244898 3.20408163 3.28571429 3.36734694 3.44897959 3.53061224 3.6122449  3.69387755 3.7755102  3.85714286 3.93877551 4.02040816 4.10204082 4.18367347 4.26530612 4.34693878 4.42857143 4.51020408 4.59183673 4.67346939 4.75510204 4.83673469 4.91836735 5.        ]` 

**(7)** `[1, 2, 3, 4, 5]`

Note that each output could be used more than once. So, for example, if you think that (a) matches (3), (b) matches (5), (c) matches (1), (d) matches (2), (e) matches (7), (f) matches (5), (g) matches (3), and (h) matches (6) then you would enter 3,5,1,2,7,5,3,6 into the answer box below.

7,1,7,3,6,5,4,2

## Problem #8

**(a)** Use the lines of code below to write a function which accepts any three digit integer *n* as its input parameter, where all three digits are distinct (e.g., *n* =  123 would be acceptable, but not *n* =  122). The function should then do the following:

First, the function should reverse all digits of *n* to obtain a new three-digit number. Then, the function should subtract the smaller number from the larger number. Finally, the function should add up the digits of the result and output this sum.

Enter the line numbers in the order that they would appear in your program, separated with commas. For example, an answer might look like 7,3,2,8,1,7,6.

```python
X=str(n)            ##(1)
def magic_trick(n): ##(2)
return P            ##(3)
P=0                 ##(4)
A=X[::-1]           ##(5)
Q=abs(n-int(A))     ##(6)
Z=str(Q)            ##(7)
P+=int(d)           ##(8)
for d in Z:         ##(9)
```

**(b)** What will the sum always equal?



**(a)** 如上所述，代码行的顺序应为：2, 1, 5, 6, 7, 4, 9, 8, 3。

**(b)** 对于给定的几个测试值，我们发现结果总是 18。因此，这个和总是等于 18。





## Problem #9

Use list comprehension to do the following.

**(a)** Create a list of all the multiples of 4 between 0 and 151.

**(b)** Given a list L1 of positive integers, create a new list L2 which replaces even numbers with a 1 and odd numbers with a 0. For example, if L1=[1,2,3,4,5], then L2=[0,1,0,1,0,1].

**(c)** A list which examines each letter in the string hamilton and prints vowel if the letter is a vowel (a,e,i,o,u) or consonant otherwise.

In each part, select the pieces of code you need to include inside the square brackets [ ] and enter them into the answer box in the correct order to obtain the desired list. Note that each line may be used more than once, or not at all. So a typical answer might look something like 2,4,6,1,3,7.

```python
##(a)
L=[]
print(L)

##(b)
L1=[1,2,3,3,3,4]
L2=[]
print(L2)

## lines for (a) and (b)
1           ##(1)
else        ##(2)
i%2!=0      ##(3)
if          ##(4)
L1          ##(5)
i           ##(6)
in          ##(7)
i%4==0      ##(8)
range(152)  ##(9)
i%2==0      ##(10)
0           ##(11)
for         ##(12)

##(c)
L=[]
print(L)

## lines to include for (c)
else        ##(1)
"aeiou"     ##(2)
"hamilton"  ##(3)
"vowel"     ##(4)
not         ##(5)
for         ##(6)
in          ##(7)
i           ##(8)
"consonant" ##(9)
if          ##(10)
```



---

```python
**(a)** 6, 12, 7, 9, 4, 8 **(b)** 6, 4, 10, 2, 11, 6, 7, 5 **(c)** 8, 6, 7, 3, 10, 2, 1, 9
**(a)** 12, 6, 7, 9, 4, 8 **(b)** 12, 6, 7, 5, 4, 10, 1, 4, 3 **(c)** 6, 8, 7, 3, 4, 8, 7, 2, 1, 9
```



## Problem #10

Match each list comprehension to its output below. 

```python
#(a)
L=[i in 'McMaster']
print(L)

#(b)
L=[i for i in 'McMaster'] 
print(L)

#(c)
L=[i.lower() for i in 'McMaster']
print(L)

#(d)
L=[i.lower() if i not in list('aeiou') else i for i in 'McMaster']
print(L)

#(e)
L=[i.upper() for i in 'McMaster' if i not in list('aeiou')]
print(L)

#(f)
L=[i.lower() for i not in 'McMaster' if i in list('aeiou')]
print(L)
```

**(1)** `['A', 'E']` 

**(2)** `['a', 'e']` 

**(3)** `['m', 'c', 'm', 's', 't', 'r']` 

**(4)** `['M', 'C', 'M', 'a', 'S', 'T', 'e', 'R']` 

**(5)** `['M', 'C', 'M', 'S', 'T', 'R']` 

**(6)** `Error` 

**(7)** `['M', 'c', 'M', 'A', 's', 't', 'E', 'r']` 

**(8)** `['M', 'c', 'M', 'a', 's', 't', 'e', 'r']` 

**(9)** `['m', 'c', 'm', 'a', 's', 't', 'e', 'r']` 

**(10)** `['M', 'C', 'M', 'A', 'S', 'T', 'E', 'R']`

Note that each output could be used more than once or not at all. So, for example, if you think that (a) matches (3), (b) matches (5), (c) matches (1), (d) matches (2), (e) matches (7), (f) matches (5), then you would enter 3,5,1,2,7,5 into the answer box below.

6,8,9,9,5,6



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
