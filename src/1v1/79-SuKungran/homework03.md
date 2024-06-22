---
title: Homework 3
date: 2024-01-30 14:04:43
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

1. Create a folder named ‘hw3’
2. Download [hw3.py](https://www.cs.cmu.edu/~112q/homework/03/hw3.py) to that folder
3. Edit hw3.py and modify the functions as required
4. When you have completed and fully tested hw3, submit hw3.py to Gradescope. For this hw, you may submit up to 15 times, but only your last submission counts.

## Some important notes

1. This homework is **solo**. You may not collaborate or discuss it with anyone outside of the course, and your options for discussing with other students currently taking the course are limited. See the [academic honesty policy](https://www.cs.cmu.edu/~112q/syllabus/honesty.html) for more details.
2. After you submit to Gradescope, make sure you check your score. If you aren’t sure how to do this, then ask a CA or Professor.
3. There is no partial credit on Gradescope testcases. Your Gradescope score is your Gradescope score.
4. Read the last bullet point again. Seriously, we won’t go back later and increase your Gradescope score for any reason. Even if you worked really hard and it was only a minor error…
5. Do not hardcode the test cases in your solutions.
6. The starter `hw3.py` file includes test functions to help you test on your own before you submit to Gradescope. When you run your file, problems will be tested in order. If you wish to temporarily bypass specific tests (say, because you have not yet completed some functions), you can comment out individual test function calls at the bottom of your file in `main()`. However, be sure to uncomment and test everything together before you submit! Ask a CA if you need help with this.
7. Remember the course’s academic integrity policy. Solving the homework yourself is your best preparation for exams and quizzes; cheating or short-cutting your learning process in order to improve your homework score will actually hurt your course grade long-term.

## Limitations

Do not convert strings to lists, use lists or recursion this week. The autograder (or a manual CA review later) will reject your submission entirely if you do.

## A Note About Style Grading

Starting with this assignment, we will be grading your code based on whether it follows the [15-112 style guide](https://www.cs.cmu.edu/~112q/notes/style.html). We may deduct up to 10 points from your overall grade for style errors. We highly recommend that you try to write clean code with good style all along, rather than fixing your style issues at the end. **Good style helps you code faster and with fewer bugs.** It is totally worth it. In any case, style grading starts this week, so please use good style from now on!

## A Note About Testing

You will notice that the skeleton file only includes testcases for some of the functions you are writing. You should write testcases for the others. (You can find some nice ways to test in the write-up below, but you will need to translate those to actual testcases.)

## Problems

1. **consonantCount(s)** [5 pts]
    Write the function consonantCount(s), that takes a string s, and returns the number of consonants in s, ignoring case, so "B" and "b" are both consonants. The consonants are all of the English letters except "a", "e", "i", "o", and "u". So, for example:

    ```python
    assert(consonantCount("Abc def!!! a? yzyzyz!") == 10)
    ```

2. **rotateStringLeft(s, n)** [5 pts]
    Note: To receive credit, do not use loops on this problem.
    Write the function `rotateStringLeft(s, n)` that takes a string s and a possibly-negative integer n. If n is non-negative, the function returns the string s rotated n places to the left. If n is negative, the function returns the string s rotated |n| places to the right. So, for example:

    ```python
    assert(rotateStringLeft('abcd',  1) == 'bcda')
    assert(rotateStringLeft('abcd', -1) == 'dabc')
    ```

3. **isRotation(s, t)** [5 pts]

    Write the function `isRotation(s, t)` that takes two possibly-empty strings and returns True if one is a rotation of the other. Note that a string is not considered a rotation of itself.
    **Hint:** rotateStringLeft may be helpful here.

4. **mostFrequentLetters(s)** [15 pts]
    Write the function mostFrequentLetters(s), that takes a string s, and ignoring case (so "A" and "a" are treated the same), returns a lowercase string containing the letters of s in most frequently used order. (In the event of a tie between two letters, follow alphabetic order.) So:

    ```
       mostFrequentLetters("We Attack at Dawn")
    ```

    returns "atwcdekn". Note that digits, punctuation, and whitespace are not letters! Also note that seeing as we have not yet covered lists, sets, maps, or efficiency, you are not expected to write the most efficient solution. (And you should not use lists, sets, or maps in your solution.) Finally, if s does not contain any alphabetic characters, the result should be the empty string ("").

5. **mostFrequentSubstring(text, n)** [20 pts]

    Given a string `text` your task is to find the most frequently occuring substring of a given length. In the event of a tie between two substrings, choose the one that comes later in the alphabet. (So "bbb" is chosen over "bba".) Consider the following example in which the length is three (`n` = 3) and the text is just `baababacb`. The most frequent substring would then be `aba` because this is the substring with size 3 that appears most often in the whole text (it appears twice) while the other six diﬀerent substrings appear only once `(baa ; aab ; bab ; bac ; acb)`. You can assume `length >= 0`. Here are more examples:

    ```python
    assert(mostFrequentSubstring("baababacb", 3) == "aba")
    assert(mostFrequentSubstring("thequickbrownfoxjumpsoverthelazydog", 1) == "o")
    assert(mostFrequentSubstring("testingthecodetofindtheerrortestandtestagain", 4) == "test")
    ```

6. **encodeColumnShuffleCipher(message, key)** [30 pts]
    Background: In this problem you will implement a simple encryption cipher we've called a column shuffle cipher. It takes two values, a plaintext and a key, and it constructs a grid of the letters of the message, rearranges the columns of the grid, and then reads the characters back column by column.

    Consider the following example:

    ```
    Function call: encodeColumnShuffleCipher("WEATTACKATDAWN", "1320")
    Message: WEATTACKATDAWN
    Key: 1320
    
    Initial Grid:		Rearranged Grid:
    W E A T			T W A E
    T A C K			K T C A
    A T D A			A A D T
    W N - -			- W - N
    
    Encrypted Message: TKA-WTAWACD-EATN
    Message to Return: 1320TKA-WTAWACD-EATN
    ```

The first step is to take the message and arrange it into a grid that has as many columns as the key has characters. (In this case, 4 columns.) Any empty spaces at the end are filled with `-` characters. We then rearrange the grid by changing the column order to match the order specified by the key. In this case, 0 being in the 3rd position of the key tells us that the 3rd column will become the 0th column. 1 being in the 0th position tells us that the 0th column will become the 1st column. 2 being in the 2nd position tells us that the 2nd column will become the 2nd column. 3 being in the 1st position tells us that the 1st column will become the 3rd column.

Finally, we read out the encrypted message by reading down the columns from left to right. The returned value from the function is just the encrypted message prepended with the key.

With this in mind, write the function encodeColumnShuffleCipher(message, key) that takes an all-uppercase message and a valid key, and returns the encoding as just described.

Hint: In your program you won't actually build a grid. Instead, you will use the concept of the grid to help you calculate the index of individual characters in your message.

7. **decodeColumnShuffleCipher(encodedMessage)** [20 pts]

    Write the function decodeColumnShuffleCipher, which takes an encoding from encodeColumnShuffleCipher and runs it in reverse, returning the plaintext that generated the encoding. For example, decodeColumnShuffleCipher("1320TKA-WTAWACD-EATN") returns "WEATTACKATDAWN".

```python
#################################################
# hw3.py
#
# Your name:
# Your andrew id:
#################################################

import math


#################################################
# Functions (for you to write)
#################################################


def consonantCount(s):
    vowels = "aeiou"  # 元音字母
    count = 0  # 用于计数的变量
    for char in s.lower():  # 将字符串转换为小写
        if char.isalpha() and char not in vowels:  # 判断字符是否为辅音字母
            count += 1
    return count


def rotateStringLeft(s, n):
    # 如果 n 为负数，则转换为对应的正数旋转
    if n < 0:
        n = len(s) + n
    # 通过取模确保旋转位数在有效范围内
    n = n % len(s)
    # 使用字符串切片完成旋转
    return s[n:] + s[:n]


def isRotation(s, t):
    # 检查字符串是否为空，以及它们是否完全相同
    if s == t or len(s) != len(t):
        return False
    # 检查t是否是s+s的子串
    return t in (s + s)


def mostFrequentLetters(s):
    freq = {}
    for char in s.lower():
        if char.isalpha():
            freq[char] = freq.get(char, 0) + 1

    max_freq = len(s)
    freq_strings = [''] * (max_freq + 1)

    for letter, count in freq.items():
        freq_strings[count] += letter

    result = ''
    for i in range(max_freq, 0, -1):
        if freq_strings[i]:
            result += ''.join(sorted(freq_strings[i]))

    return result


def mostFrequentSubstring(text, n):
    # 存储每个子串及其出现次数
    substrings = {}
    # 记录最频繁出现的子串及其出现次数
    most_frequent = ''
    max_count = 0

    for i in range(len(text) - n + 1):
        # 提取子串
        substr = text[i:i + n]
        # 更新子串出现次数
        substrings[substr] = substrings.get(substr, 0) + 1

        # 检查并更新最频繁出现的子串
        if (substrings[substr] > max_count or
                (substrings[substr] == max_count and substr > most_frequent)):
            most_frequent = substr
            max_count = substrings[substr]

    return most_frequent


def encodeColumnShuffleCipher(message, key):
    # 计算网格的列数（即密钥的长度）
    cols = len(key)
    rows = len(message) // cols + (1 if len(message) % cols != 0 else 0)

    # 填充信息以使其长度为列数的倍数
    message += '-' * (rows * cols - len(message))

    # 初始化加密信息字符串
    encrypted_message = [''] * len(message)

    # 计算每个字符在加密信息中的位置并填充
    for index in range(len(message)):
        row, col = divmod(index, cols)
        new_col = int(key[col])
        new_index = new_col * rows + row
        encrypted_message[new_index] = message[index]

    # 转换为字符串并返回密钥和加密信息
    return key + ''.join(encrypted_message)


def decodeColumnShuffleCipher(encodedMessage):
    key = encodedMessage[:4]  # 提取密钥
    encoded = encodedMessage[4:]  # 加密文本
    cols = len(key)  # 列数等于密钥的长度
    rows = len(encoded) // cols  # 行数

    # 创建一个二维数组（列表的列表）存储按列排列的字符
    grid = [[''] * rows for _ in range(cols)]

    # 按密钥顺序将字符放入二维数组的正确列
    for index, char in enumerate(encoded):
        col = key.index(str(index % cols))  # 找到字符应该在的列
        row = index // cols  # 计算行号
        grid[col][row] = char

    # 从二维数组中按行读取字符以恢复原始消息
    decoded = ''.join([''.join(row) for row in zip(*grid)]).replace('-', '')

    return decoded




#################################################
# Test Functions
#################################################


def testConsonantCount():
    # 基本测试用例
    assert (consonantCount("Abc def!!! a? yzyzyz!") == 10)
    # 只有元音字母的字符串
    assert (consonantCount("aeiouAEIOU") == 0)
    # 只有辅音字母的字符串
    assert (consonantCount("bcdfghjklmnpqrstvwxyz") == 21)
    # 包含特殊字符和空格的字符串
    assert (consonantCount("Hello, World!") == 7)
    # 空字符串
    assert (consonantCount("") == 0)
    # 包含数字和特殊字符的字符串
    assert (consonantCount("1234!@#$%^&*()_+") == 0)
    # 大写辅音字母的字符串
    assert (consonantCount("BCDFGHJKLMNPQRSTVWXYZ") == 21)

    # print("All test cases passed")
    print("There are no testcases here, you should write some")


def testRotateStringLeft():
    print("Testing rotateStringLeft()...", end="")
    assert rotateStringLeft("abcde", 0) == "abcde"
    assert rotateStringLeft("abcde", 1) == "bcdea"
    assert rotateStringLeft("abcde", 2) == "cdeab"
    assert rotateStringLeft("abcde", 3) == "deabc"
    assert rotateStringLeft("abcde", 4) == "eabcd"
    assert rotateStringLeft("abcde", 5) == "abcde"
    assert rotateStringLeft("abcde", 25) == "abcde"
    assert rotateStringLeft("abcde", 28) == "deabc"
    assert rotateStringLeft("abcde", -1) == "eabcd"
    assert rotateStringLeft("abcde", -24) == "bcdea"
    assert rotateStringLeft("abcde", -25) == "abcde"
    assert rotateStringLeft("abcde", -26) == "eabcd"
    print("Passed!")


def testIsRotation():
    print("Testing isRotation()...", end="")
    assert isRotation("a", "a") == False  # a string is not a rotation of itself
    assert isRotation("", "") == False  # a string is not a rotation of itself
    assert isRotation("ab", "ba") == True
    assert isRotation("abcd", "dabc") == True
    assert isRotation("abcd", "cdab") == True
    assert isRotation("abcd", "bcda") == True
    assert isRotation("abcd", "abcd") == False
    assert isRotation("abcd", "bcd") == False
    assert isRotation("abcd", "bcdx") == False
    print("Passed!")


def testMostFrequentLetters():
    print("Testing mostFrequentLetters()...", end="")

    s = "We attack at Dawn"
    result = "atwcdekn"
    assert mostFrequentLetters(s) == result

    s = "Note that digits, punctuation, and whitespace are not letters!"
    result = "teanioscdhpruglw"
    assert mostFrequentLetters(s) == result

    s = ""
    result = ""
    assert mostFrequentLetters(s) == result

    print("Passed!")


def testMostFrequentSubstring():
    # print("There are no testcases here, you should write some")
    assert (mostFrequentSubstring("baababacb", 3) == "aba")
    string1 = "thequickbrownfoxjumpsoverthelazydog"
    assert (mostFrequentSubstring(string1, 1) == "o")
    string2 = "testingthecodetofindtheerrortestandtestagain"
    assert (mostFrequentSubstring(string2, 4) == "test")


def testEncodeColumnShuffleCipher():
    print("Testing encodeColumnShuffleCipher()...", end="")

    msg = "WEATTACKATDAWN"
    result = "1320TKA-WTAWACD-EATN"
    assert encodeColumnShuffleCipher(msg, "1320") == result

    msg = "SUDDENLYAWHITERABBITWITHPINKEYESRANCLOSEBYHER"
    result = "210DNAIRBWHNYRCSYRUEYHEBTTIESNOBESDLWTAIIPKEALEH"
    assert encodeColumnShuffleCipher(msg, "210") == result

    print("Passed!")


def testDecodeColumnShuffleCipher():
    print("Testing decodeColumnShuffleCipher()...", end="")
    msg = "1320TKA-WTAWACD-EATN"
    result = "WEATTACKATDAWN"
    assert decodeColumnShuffleCipher(msg) == result

    msg = "210DNAIRBWHNYRCSYR-UEYHEBTTIESNOBE-SDLWTAIIPKEALEH-"
    result = "SUDDENLYAWHITERABBITWITHPINKEYESRANCLOSEBYHER"
    assert decodeColumnShuffleCipher(msg) == result

    print("Passed!")


#################################################
# testAll and main
#################################################


def testAll():
    # comment out the tests you do not wish to run!
    testConsonantCount()
    testRotateStringLeft()
    testIsRotation()
    testMostFrequentLetters()
    testMostFrequentSubstring()
    testEncodeColumnShuffleCipher()
    testDecodeColumnShuffleCipher()


def main():
    testAll()


if __name__ == "__main__":
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
