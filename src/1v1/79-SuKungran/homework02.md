---
title: Homework 2
date: 2024-01-22 22:50:51
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

## To start

1. Create a folder named ‘hw2’
2. Download [hw2.py](https://www.cs.cmu.edu/~112q/homework/02/hw2.py) to that folder
3. Edit hw2.py and modify the functions as required
4. When you have completed and fully tested hw2, submit hw2.py to Gradescope. For this hw, you may submit up to 20 times (which is way more than you should require), but only your last submission counts.

## Some important notes

1. This homework is **solo**. You may not collaborate or discuss it with anyone outside of the course, and your options for discussing with other students currently taking the course are limited. See the [academic honesty policy](https://www.cs.cmu.edu/~112q/syllabus/honesty.html) for more details.
2. After you submit to Gradescope, make sure you check your score. If you aren’t sure how to do this, then ask a CA or Professor.
3. There is no partial credit on Gradescope testcases. Your Gradescope score is your Gradescope score.
4. Read the last bullet point again. Seriously, we won’t go back later and increase your Gradescope score for any reason. Even if you worked really hard and it was only a minor error…
5. Do not hardcode the test cases in your solutions.
6. The starter `hw2.py` file includes test functions to help you test on your own before you submit to Gradescope. When you run your file, problems will be tested in order. If you wish to temporarily bypass specific tests (say, because you have not yet completed some functions), you can comment out individual test function calls at the bottom of your file in `main()`. However, be sure to uncomment and test everything together before you submit! Ask a CA if you need help with this.
7. Remember the course’s academic integrity policy. Solving the homework yourself is your best preparation for exams and quizzes; cheating or short-cutting your learning process in order to improve your homework score will actually hurt your course grade long-term.
8. Do not use string indexing, lists, list indexing, or recursion this week. The autograder will reject your submission entirely if you do.

## Problems

1. **containsOddDigits [5 pts]**

    Write the function containsOddDigits(x) that takes an integer, x, and returns True if it contains any odd digits, and False otherwise.
    **Hint:** In this and in future problems, you'll need to get individual digits from numbers. You may want to write some helper functions, getKthDigit and numberLength, to do this.

2. **printNumberTriangle [10 pts]**

    Time for something a little different! Instead of returning a value, in this function you'll be printing out results. Write the function printNumberTriangle that takes one integer, n, and prints out a number triangle based on n. For example, given the number 4, this function would print out

    ```markdown
    1
    21
    321
    4321
    ```

    Note: the autograder for this problem is very finicky about whitespace; it expects no spaces, and only one newline after each number line. Make sure your output matches what it expects!

3. **hasConsecutiveDigits(n) [10 pts]**

    Write the function hasConsecutiveDigits(n) that takes a possibly-negative int n and returns True if somewhere in n some digit occurs consecutively (so the same digit occurs twice in a row), and False otherwise. For example, these numbers have consecutive digits: 11, -543661, 1200, -1200, and these numbers do not: 1, 123, 12321, -12321.

4. **isPalindromicNumber(n) [15 pts]**

    Write the function isPalindromicNumber(n) that takes a non-negative int n and returns True if that number is *palindromic* and False otherwise. A palindromic number is the same forwards as backwards. For example, these numbers are palindromic: 0, 1, 99, 12321, 123321, and these numbers are not: 1211, 112, 10010.

5. **longestCommonDigitStart [15 pts]**

    Write the function `longestCommonDigitStart(x, y)` that takes two non-negative integers, x and y, and returns the digits that match between the two integers, starting from the ones digit. For examples, the pair (1234, 2134) returns 34 because two digits match from right to left, 4 with 4 and 3 with 3. The pair (2223, 23) also has two matches, and the solution is 23. If there's no common digit start, the function should return `None`. For example, the pair (1234,4321) has no common start, and the result should be `None`. Here are a few more examples:

    ```python
    longestCommonDigitStart(15112, 15112) == 15112
    longestCommonDigitStart(763426548, 7346548) == 6548
    longestCommonDigitStart(973492739487234, 1) == None
    longestCommonDigitStart(10, 20) == 0
    ```

    **Hint:** If you want, you can reuse your helper functions, getKthDigit and numberLength, to do this.

6. **carrylessAdd(x, y) [20 pts]**

    First, you may wish to read the first page (page 44) from [here](http://www.maa.org/sites/default/files/pdf/upload_library/2/Applegate-2013.pdf) about Carryless Arithmetic. Or, just understand that carryless addition is what it sounds like -- regular addition, only with the carry from each column ignored. So, for example, if we carryless-ly add 8+7, we get 5 (ignore the carry). And if we add 18+27, we get 35 (still ignore the carry). With this in mind, write the function carrylessAdd(x, y) that takes two non-negative integers x and y and returns their carryless sum. As the paper demonstrates, carrylessAdd(785, 376) returns 51.

7. **nthCircularPrime [25 pts]**

    A circular prime is a number with the property that any rotation of that number's digits is prime. In this case, rotation refers to cycling the digits of a number; for example, the rotations of 1234 are 1234, 2341, 3412, and 4123. You can read more about this on [the Wikipedia page](https://en.wikipedia.org/wiki/Circular_prime). Single-digit primes are all circular, of course. To find the nth circular prime, you'll need to write isPrime and three other functions:

    1. **rotateNumber**

        This function takes a number, x, and rotates that number's digits by one place. This would turn the number 1234 to 4123.

    2. **isCircularPrime**

        This function takes a number, x, and determines whether that number is a circular prime. To do this, you'll need to check whether every rotation of the number is prime.

    3. **nthCircularPrime**

        This function takes a number, n, and returns the nth circular prime.

    4. **bonusCarrylessMultiply(x, y) [2 pts]**

        Write the function `bonusCarrylessMultiply(x, y)`, that works similarly to `carrylessAdd(x, y)`, based on this paper on Carryless Arithmetic. This paper shows that `bonusCarrylessMultiply(643, 59)` returns 417. Hint: it may help if you do this differently than usual long multiplication. Instead of working by rows in the output, work by columns. So first compute all the ones digit values, and sum those mod 10. Then compute all the tens digit values, and sum those mod 10. And so on. You may assume x and y are non-negative. Hint #1: do not solve `bonusCarrylessMultiply(x, y)` by simply calling `carrylessAdd(x, result)` a total of `y` times. That is wrong on two levels. First, it is simply too inefficient (what if we are multiplying 20-digit numbers?). Second, it is also wrong algorithmically! Carryless multiplication is not like normal multiplication, and if we take + to be carryless addition and * to be carryless multiplication, then it is not necessarily true that (x * y) is the same as (x + x + ... + x + x) for a total of y x's. Yikes. So: stick with the next hint (see below). It also uses `carrylessAdd` and is fairly straightforward, but it is reasonable efficient and algorithmically correct. Good luck with it. Hint #2: Here's a hint on one way to solve this problem (there are many ways, and this way is not the most efficient, to be sure, but it is efficient enough and it is perhaps among the clearest and easiest ways). Consider multiplying 123 * 456. Observe that: `123 * 456 = 123 * 4 * 100 + 123 * 5 * 10 + 123 * 6 `in this way, we actually only have to multiply 123 times a single digit each time, then multiply that result by the right power of 10. Right? Ok, so now, to multiply by a single digit, we can instead just add that many times. That is: `123 * 6 == 123 + 123 + 123 + 123 + 123 + 123 `Why is that interesting? If we take + to be carryless addition and * to be carryless multiplication, (x * y) is the same as (x + x + ... + x + x) if y is a one-digit number. Because we already have carrylessAdd, so we can just use that to do all this addition. Of course, multiplying by simply adding is very inefficient. But since we are only doing it for multiplying by a single digit, there's a max of 9 additions (8 if you think about it), and so it's not so inefficient. It's actually acceptable, if not ideal, and certainly good enough for hw2, though again better approaches do exist. Hope this helps. And, again, you can safely ignore all of this and solve this problem any way you wish.







```python
#################################################
# hw2.py
#
# Your name:
# Your andrew id:
#################################################

import math


#################################################
# Functions (for you to write)
#################################################


#### containsOddDigits ####

def containsOddDigits(x):
    # 将数字转换为字符串
    str_x = str(x)
    # 遍历字符串中的每个字符
    for char in str_x:
        # 检查字符是否是奇数数字
        if int(char) % 2 != 0:
            return True
    return False


#### printNumberTriangle ####

def printNumberTriangle(n):
    # print("42")
    for i in range(1, n + 1):
        for j in range(i, 0, -1):
            print(j, end="")
        print()  # 用于在每行数字后添加一个换行符



#### hasConsecutiveDigits ####

def hasConsecutiveDigits(n):
    # 取绝对值以处理负数
    n = abs(n)

    # 当n大于9时，至少有两位数字，可以比较
    while n > 9:
        last_digit = n % 10
        n = n // 10
        if last_digit == n % 10:
            return True

    return False


#### isPalindromicNumber ####

def isPalindromicNumber(n):
    # 存储原始数字
    original_number = n
    # 反转后的数字
    reversed_number = 0

    # 反转数字
    while n > 0:
        digit = n % 10
        reversed_number = reversed_number * 10 + digit
        n = n // 10

    # 检查数字是否为回文
    return original_number == reversed_number


#### longestCommonDigitStart ####

def longestCommonDigitStart(x, y):
    # 用于记录共同的尾部数字
    result = 0
    multiplier = 1
    has_common_digit = False

    # 当两个数都不为0时循环
    while x > 0 and y > 0:
        # 比较x和y的最后一位数字
        if x % 10 == y % 10:
            result += (x % 10) * multiplier
            multiplier *= 10
            has_common_digit = True
        else:
            break

        # 去掉x和y的最后一位数字
        x //= 10
        y //= 10

    # 如果找到了公共数字，则返回结果
    return result if has_common_digit else None


#### carrylessAdd ####

def carrylessAdd(x, y):
    result = 0
    factor = 1

    while x > 0 or y > 0:
        # 提取每个数字的最低位
        digit_x = x % 10
        digit_y = y % 10

        # 无进位加法并累加到结果中
        result += ((digit_x + digit_y) % 10) * factor

        # 移除已处理的最低位
        x //= 10
        y //= 10

        # 更新到下一位
        factor *= 10

    return result


#### nthCircularPrime ####

def rotateNumber(x):
    # 如果 x 小于 10，则没有旋转的必要，直接返回 x
    if x < 10:
        return x

    # 计算 x 的位数
    digits = len(str(x))

    # 将最后一位移到最前面，并去除原来的最后一位
    return (x % 10) * (10 ** (digits - 1)) + x // 10


def isCircularPrime(x):
    # 检查一个数是否是素数
    def isPrime(n):
        if n <= 1:
            return False
        if n <= 3:
            return True
        if n % 2 == 0 or n % 3 == 0:
            return False
        i = 5
        while i * i <= n:
            if n % i == 0 or n % (i + 2) == 0:
                return False
            i += 6
        return True

    # 生成所有可能的数字循环排列
    def rotations(num):
        str_num = str(num)
        return [int(str_num[i:] + str_num[:i]) for i in range(len(str_num))]

    # 检查所有循环排列是否都是素数
    for rotation in rotations(x):
        if not isPrime(rotation):
            return False
    return True


def nthCircularPrime(n):
    count = 0
    num = 2
    while True:
        if isCircularPrime(num):
            count += 1
            if count == n + 1:  # 因为我们从第0个循环素数开始计数
                return num
        num += 1


#### BONUS/OPTIONAL: bonusCarrylessMultiply ####

def bonusCarrylessMultiply(x, y):
    result = 0
    ten_power = 1
    while y > 0:
        digit = y % 10
        temp = 0
        for i in range(digit):
            temp = carrylessAdd(temp, x)
        result = carrylessAdd(result, temp * ten_power)
        y //= 10
        ten_power *= 10
    return result


#################################################
# Test Functions
#################################################

#### containsOddDigits ####

def testContainsOddDigits():
    print('Testing containsOddDigits()... ', end='')
    assert (containsOddDigits(1246))
    assert (containsOddDigits(8663))
    assert (containsOddDigits(224) == False)
    assert (containsOddDigits(115))
    assert (containsOddDigits(8) == False)
    assert (containsOddDigits(9))
    print('Passed!')


#### printNumberTriangle ####

def testPrintNumberTriangle():
    import sys
    import io
    print('Testing printNumberTriangle()... ', end='')
    tmpOut = sys.stdout

    oneOutput = io.StringIO()
    sys.stdout = oneOutput
    printNumberTriangle(1)
    oneCheck = oneOutput.getvalue()

    fourOutput = io.StringIO()
    sys.stdout = fourOutput
    printNumberTriangle(4)
    fourCheck = fourOutput.getvalue()

    sevenOutput = io.StringIO()
    sys.stdout = sevenOutput
    printNumberTriangle(7)
    sevenCheck = sevenOutput.getvalue()

    sys.stdout = tmpOut

    assert (oneCheck == "1\n")
    assert (fourCheck == "1\n21\n321\n4321\n")
    assert (sevenCheck == "1\n21\n321\n4321\n54321\n654321\n7654321\n")
    print('Passed!')


#### hasConsecutiveDigits ####

def testHasConsecutiveDigits():
    print('Testing hasConsecutiveDigits()...', end='')
    assert (hasConsecutiveDigits(0) == False)
    assert (hasConsecutiveDigits(123456789) == False)
    assert (hasConsecutiveDigits(1212) == False)
    assert (hasConsecutiveDigits(1212111212) == True)
    assert (hasConsecutiveDigits(33) == True)
    assert (hasConsecutiveDigits(-1212111212) == True)
    print('Passed.')


#### isPalindromicNumber ####

def testIsPalindromicNumber():
    print('Testing isPalindromicNumber()...', end='')
    assert isPalindromicNumber(0) == True
    assert isPalindromicNumber(4) == True
    assert isPalindromicNumber(10) == False
    assert isPalindromicNumber(101) == True
    assert isPalindromicNumber(1001) == True
    assert isPalindromicNumber(10010) == False
    print('Passed.')


#### longestCommonDigitStart ####

def testLongestCommonDigitStart():
    print('Testing longestCommonDigitStart()... ', end='')
    assert (longestCommonDigitStart(1234, 2134) == 34)
    assert (longestCommonDigitStart(2223, 23) == 23)
    assert (longestCommonDigitStart(15112, 15112) == 15112)
    assert (longestCommonDigitStart(763426548, 7346548) == 6548)
    assert (longestCommonDigitStart(973492739487234, 1) == None)
    assert (longestCommonDigitStart(10, 20) == 0)
    print('Passed!')


#### carrylessAdd ####

def testCarrylessAdd():
    print('Testing carrylessAdd()... ', end='')
    assert (carrylessAdd(785, 376) == 51)
    assert (carrylessAdd(0, 376) == 376)
    assert (carrylessAdd(785, 0) == 785)
    assert (carrylessAdd(30, 376) == 306)
    assert (carrylessAdd(785, 30) == 715)
    assert (carrylessAdd(12345678900, 38984034003) == 40229602903)
    print('Passed.')


#### nthCircularPrime ####

def testRotateNumber():
    print('Testing rotateNumber()... ', end='')
    assert (rotateNumber(1234) == 4123)
    assert (rotateNumber(4123) == 3412)
    assert (rotateNumber(3412) == 2341)
    assert (rotateNumber(2341) == 1234)
    assert (rotateNumber(5) == 5)
    assert (rotateNumber(111) == 111)
    print('Passed!')


def testIsCircularPrime():
    print('Testing isCircularPrime()... ', end='')
    assert (isCircularPrime(2))
    assert (isCircularPrime(11))
    assert (isCircularPrime(13))
    assert (isCircularPrime(79))
    assert (isCircularPrime(197))
    assert (isCircularPrime(1193))
    print('Passed!')


def testNthCircularPrime():
    print('Testing nthCircularPrime()... ', end='')
    assert (nthCircularPrime(0) == 2)
    assert (nthCircularPrime(4) == 11)
    assert (nthCircularPrime(5) == 13)
    assert (nthCircularPrime(11) == 79)
    assert (nthCircularPrime(15) == 197)
    assert (nthCircularPrime(25) == 1193)
    print('Passed!')


#### bonusCarrylessMultiply ####

def testBonusCarrylessMultiply():
    print('Testing bonusCarrylessMultiply()... ', end='')
    assert (bonusCarrylessMultiply(643, 59) == 417)
    assert (bonusCarrylessMultiply(2, 3) == 6)
    assert (bonusCarrylessMultiply(456, 0) == 0)
    assert (bonusCarrylessMultiply(123, 1) == 123)
    assert (bonusCarrylessMultiply(0, 789) == 0)
    print("This is a bonus/optional problem: You should create your own test cases")


#################################################
# testAll and main
#################################################

def testAll():
    # comment out the tests you do not wish to run!
    testContainsOddDigits()
    testPrintNumberTriangle()
    testHasConsecutiveDigits()
    testIsPalindromicNumber()
    testLongestCommonDigitStart()
    testCarrylessAdd()
    testRotateNumber()
    testIsCircularPrime()
    testNthCircularPrime()
    testBonusCarrylessMultiply()


def main():
    testAll()


if __name__ == '__main__':
    main()

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
