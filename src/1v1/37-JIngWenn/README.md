---
title: function01
date: 2023-04-11 18:04:50
icon: a-jibijilianxibianji
author: AI悦创
isOriginal: true
category: 
    - Python 一对一教学
    - 同济大学
    - 同济大学Python
tag:
    - Python 一对一教学
    - 同济大学
    - 同济大学Python
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
footer: 长期招收编程一对一学员！微信：Jiabcdefh, <a href="https://beian.miit.gov.cn/" target="_blank">闽ICP备19021486号-6</a>
---

## Question1

编写函数 `fun(x)`，即给定正整数 x，返回其逆序数，例如 1234 的逆序数是 4321，用 这个函数输出 `1000~9999` 之间所有的回文数。(回文数是指顺读和倒读都相同的数，如 5、 151、3553 等)

> 提示:对给定的整数，可以通过不断与 10 相除取余获得其每个数字位，追加到一个列 表中，然后将列表中的数字遍历，和值不断乘 10 加新项的方式实现逆序。

```python
# 定义 fun 函数，接收一个正整数 x 作为输入，并返回其逆序数
def fun(x):
    # 将输入的正整数 x 转换为字符串，然后使用 [::-1] 对字符串进行逆序
    # 最后，将逆序后的字符串转换回整数并返回
    return int(str(x)[::-1])

# 定义 find_palindromes 函数，接收两个参数 start 和 end，表示搜索回文数的范围
def find_palindromes(start, end):
    # 创建一个空列表，用于存储找到的回文数
    palindromes = []

    # 使用 for 循环遍历范围内的每一个整数
    for i in range(start, end + 1):
        # 如果当前整数 i 与其逆序数相等，说明它是一个回文数
        if i == fun(i):
            # 将回文数添加到列表中
            palindromes.append(i)
    
    # 返回找到的回文数列表
    return palindromes

# 指定搜索回文数的范围为 1000 到 9999
start = 1000
end = 9999

# 调用 find_palindromes 函数，传入搜索范围，获取回文数列表
palindromes = find_palindromes(start, end)

# 输出找到的回文数列表
print(palindromes)
```

这个代码首先定义了一个名为 `fun` 的函数，它接收一个正整数 x 作为输入，并返回其逆序数。然后，我们定义了一个名为 `find_palindromes` 的函数，它接收两个参数 start 和 end，表示搜索回文数的范围。函数内部使用一个 for 循环遍历范围内的每一个整数，检查当前整数是否与其逆序数相等。如果相等，则说明它是一个回文数，将其添加到回文数列表中。最后，我们指定搜索范围为 1000 到 9999，并调用 `find_palindromes` 函数获取回文数列表。最后一步是输出找到的回文数列表。



## Question2

随机产生 30 个成绩(`0~100` 之间)放入列表 a 中，设计一个函数 MyFun，将 a 传递 给它，再为函数设定一个默认值参数 `grade=5`。

grade 传递 `5,4,3,2,1`，分别统计优、良、中、 及格和不及格的人数。不传递值时，统计优秀者人数。请分别使用不指定关键字、指定关键 字，不给默认值参数值三种方式调用函数。

```python
import random

# 生成 30 个随机成绩 (0~100 之间) 放入列表 a 中
# 使用列表推导式和 random.randint 生成 30 个 0 到 100 之间的随机整数
a = [random.randint(0, 100) for _ in range(30)]

# 定义 MyFun 函数，接收一个成绩列表 scores 和一个默认值参数 grade
def MyFun(scores, grade=5):
    # 初始化各等级人数计数器
    excellent, good, average, pass_grade, fail = 0, 0, 0, 0, 0
    
    # 使用 for 循环遍历成绩列表
    for score in scores:
        # 根据成绩判断并统计各等级人数
        if score >= 90:
            excellent += 1
        elif score >= 80:
            good += 1
        elif score >= 70:
            average += 1
        elif score >= 60:
            pass_grade += 1
        else:
            fail += 1
    
    # 根据 grade 参数的值返回相应的人数
    if grade == 5:
        return excellent
    elif grade == 4:
        return good
    elif grade == 3:
        return average
    elif grade == 2:
        return pass_grade
    elif grade == 1:
        return fail

# 调用 MyFun 函数的三种方式

# 1. 不指定关键字 (grade 默认为 5)
# 调用 MyFun 函数时未指定 grade 参数，因此 grade 使用默认值 5
excellent_count = MyFun(a)
print("Excellent students count:", excellent_count)

# 2. 指定关键字
# 调用 MyFun 函数时，明确指定 grade 参数的值为 4
good_count = MyFun(a, grade=4)
print("Good students count:", good_count)

# 3. 不给默认值参数值 (grade 传递 1)
# 调用 MyFun 函数时，直接传递 grade 参数的值为 1，而不使用关键字
fail_count = MyFun(a, 1)
print("Fail students count:", fail_count)
```



## Question3

编一函数 `s(x)`，求级数和：$\LARGE{s=x-\frac{x^3}{3!} + \frac{x^5}{5!} - \frac{x^7}{7!} + ······}$ 当最后一项的绝对值小于 10-6 时结束。

```python
import math

# 定义 s 函数，接受一个正实数 x 作为输入
def s(x):
    total = 0  # 初始化总和为 0
    sign = 1  # 初始化符号为 1（正数）
    i = 0  # 初始化循环变量 i
    epsilon = 1e-6  # 设置最后一项的绝对值小于 10^-6 时结束循环的条件

    # 使用 while 循环来计算每一项的值
    while True:
        term = (x ** (2 * i + 1)) / math.factorial(2 * i + 1)  # 计算当前项的值
        
        # 当最后一项的绝对值小于 epsilon 时，结束循环
        if abs(term) < epsilon:
            break
        
        total += sign * term  # 将当前项（带符号）累加到总和中
        sign *= -1  # 在每次迭代时改变符号（正数变负数，负数变正数）
        i += 1  # 更新循环变量 i
    
    return total  # 返回计算得到的级数和

# 使用示例
x = 1.2
result = s(x)
print("The sum of the series is:", result)
```

这个代码首先导入了 `math` 模块。然后，我们定义了一个名为 `s` 的函数，接受一个正实数 x 作为输入。在函数内部，我们初始化总和为 0，符号为 1（正数），循环变量 i 为 0，以及设置一个 epsilon 值作为循环结束的条件。使用一个 while 循环来计算每一项的值。在每次迭代时，我们首先检查当前项的绝对值是否小于 epsilon，如果小于 epsilon，则终止循环。然后，我们将每一项的值（带符号）累加到总和中，并在每次迭代时改变符号。最后，我们返回计算得到的级数和。在示例中，我们使用 `x = 1.2` 来计算级数和，并打印结果。

---

### 补充时间

#### 什么是级数和？

数学上，级数可以表示为：

S = a₁ + a₂ + a₃ + ... + aₙ

其中 S 是级数和，a₁, a₂, a₃, ... , aₙ 是数列中的各项。

级数可以分为有限级数和无限级数。有限级数是指数列中有限个项相加的和，而无限级数是指数列中无限个项相加的和。无限级数的和通常需要考虑收敛性，即是否存在一个极限值。对于收敛的无限级数，我们通常试图找到其和的极限值。常见的级数有算术级数、几何级数、泰勒级数等。

级数和（Series Sum）是指将一个数列（Sequence）中的所有项相加所得到的和。数列是按照一定规律排列的一组数，而级数则是这些数相加的结果。级数可以是有限的，也可以是无限的。在数学中，级数和是研究级数性质和求解实际问题的重要工具。

举例：

1. 算术级数： 算术级数是指每相邻两项的差都是常数的数列。例如：2, 5, 8, 11, 14, ...，这里相邻两项的差为 3。假设我们要求前 n 项的和，可以使用公式 $\LARGE{S_n = n * \frac{(a_1 + a_n)}{2}}$，其中 $\LARGE{a_1}$ 是第一项，$\LARGE{a_n}$ 是第 n 项。例如，求前 5 项的和：$\LARGE{S_5 = 5 * \frac{(2 + 14)}{2} = 40}$。
2. 几何级数： 几何级数是指每相邻两项的比都是常数的数列。例如：$1, 2, 4, 8, 16, ...$，这里相邻两项的比为 2。假设我们要求前 n 项的和，可以使用公式 $\LARGE{S_n = a_1 * \frac{(1 - r^n)}{(1 - r)}}$，其中 $\LARGE{a_1}$ 是第一项，r 是公比。例如，求前 5 项的和：$\LARGE{S_5 = 1 * \frac{(1 - 2^5)}{(1 - 2)} = 31}$。
3. 无限级数： 无限级数是指项数无限多的级数。例如：级数 $\LARGE{\frac{1}{2} + \frac{1}{4} + \frac{1}{8} + \frac{1}{16} + ...}$。这个级数的和可以通过求极限的方式获得。对于这个级数，可以证明它的和为 1。

在上面的级数和示例代码中，我们计算了一个特定的无限级数（泰勒级数的一种）：$\LARGE{s(x) = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \frac{x^7}{7!} + ...}$。这个级数是正弦函数（$sin(x)$）在 x = 0 处的泰勒级数展开式。通过计算这个级数的和，我们可以近似地求得正弦函数在某一点的值。在代码示例中，我们使用 $x = 1.2$ 来计算级数和，并得到了一个近似的 $sin(1.2)$ 值。



















## Question4

编写二分法求高次方程根的函数，求解方程 $2x^3-4x^2+3x-6=0$ 在区间 `[-10,10]` 之间的根。

```python
# 定义多项式函数，输入 x 值，返回多项式的结果
def polynomial(x):
    return 2 * x**3 - 4 * x**2 + 3 * x - 6

# 定义二分法函数
# p：多项式函数
# a, b：求解区间的端点
# tol：容差，用于确定计算精度，默认值为 1e-8
# max_iter：最大迭代次数，用于限制算法执行的次数，默认值为 1000
def bisection(p, a, b, tol=1e-8, max_iter=1000):
    # 检查端点处的函数值是否具有不同的符号，否则无法使用二分法求解
    if p(a) * p(b) > 0:
        raise ValueError("The function should have different signs at the interval endpoints.")

    iter_count = 0  # 初始化迭代计数器
    c = a  # 初始化根的估计值
    # 当区间宽度的一半大于容差（精度要求）且未达到最大迭代次数时，继续迭代
    while (b - a) / 2 > tol and iter_count < max_iter:
        c = (a + b) / 2  # 计算区间的中点
        if p(c) == 0:  # 如果中点处的函数值为 0，则已找到精确的根
            break
        if p(a) * p(c) < 0:  # 如果 a 和 c 处的函数值具有不同的符号，说明根位于这个新的区间
            b = c
        else:  # 否则根位于 c 和 b 之间
            a = c
        iter_count += 1  # 增加迭代计数器

    return c, iter_count

a, b = -10, 10  # 求解区间
root, iterations = bisection(polynomial, a, b)  # 调用二分法函数求解根
print("Root:", root)
print("Iterations:", iterations)
```

`tol` 是容差，用于确定计算精度。在本例中，tol 默认值为 1e-8（即 0.00000001）。当区间宽度的一半小于容差时，算法将停止迭代。换句话说，我们可以认为找到的根的估计值与真实值之间的差异小于 tol。

`max_iter` 是最大迭代次数，用于限制算法执行的次数。默认值为 1000。如果在达到 max_iter 次迭代之前没有满足精度要求（容差），算法将停止迭代并返回当前估计的根。这有助于防止算法陷入无限循环。

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
