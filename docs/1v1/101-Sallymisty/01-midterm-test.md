---
title: 01-midterm test
icon: blog
date: 2025-09-09 13:09:51
author: AI悦创
isOriginal: true
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

## Question 1: Quadrant [7/20]

Write a function quadrant(angle) that returns the quadrant that an angle in degrees (or its equivalent angle in the range `-180` to `180`) is in.

An angle, in degrees, can have any whole number multiple of 360 added or subtracted to it and it will still be equivalently the same angle.

For an angle (or equivalent angle) between `-180` and `180` (including `180` and excluding `-180`) i.e. `-180 < angle <= 180` , we say that the angle is in:

- Quadrant 1, `if 0 <= angle <= 90`；
- Quadrant 2, `if 90 < angle <= 180`；
- Quadrant 3, `if -180 < angle < -90`；
- Quadrant 4, `if -90 <= angle < 0`；

Examples:

- quadrant(0) should return 1.
- quadrant(360) should also return 1, as an angle of 360 is equivalent to an angle of 360-1*360=0.
- quadrant(180) should return 2.
- quadrant(-180) should also return 2, as -180 is excluded from quadrant 3 and as an angle of -180 is equivalent to an angle of -180+1*360=180 and 180 is included in quadrant 2.
- quadrant(135) should return 2.

You can (additionally) assume:

- You can assume the parameter is of type int.

Other requirements:

- The function that you write must be named quadrant and it must have exactly one parameter.
- The function must return an int.

A scaffold file quadrant.py is provided in Ed and for download via link at the bottom. You must write your solution into the copy of **this file in Ed** (or upload or transfer your solution into it if working outside of Ed). You must not change the name of the file in Ed.

Your solution will be marked on functionality only (no code quality considered). To be fully functional means that it returns the correct value for all valid arguments. You are not required to check that arguments your function is called with are valid. A non-comprehensive set of minimal basic tests is provided, you can test your code on this set of tests by either clicking the "Test" button (on Ed) or by calling the function test_quadrant in the provided scaffold file in a console (on Ed or in an IDE). Passing the provided test set does not prove that your solution is fully correct. Code that does not pass the provided test set (or equivalent) will receive zero marks however. Code that does not run (for example, due to syntax errors), that violates the format instructions, or that fails every test case will also receive zero marks.

```python
def quadrant(angle):
    pass

def test_quadrant():
    assert quadrant(0) == 1
    assert quadrant(360) == 1
    assert quadrant(180) == 2
    assert quadrant(-180) == 2
    assert quadrant(135) == 2
    assert quadrant(-45) == 4
    assert quadrant(-100) == 3
    print("All tests in provided minimal set of basic tests passed")
    print("Reminder: Passing the provided test set does not prove that your function is fully correct")
```



## Question 2: Count differences [7/20]

Write a function `count_diff(seq1, seq2)` that takes as input two lists of numbers with the same length, and returns how many elements in the same position that are different between two lists. 

Examples:

- `count_diff([1, 5, 3, 7, 8], [1, 2, 3, 4, 8])` should return 2, because elements at index 1 are different between the two lists (value 5 in the first list and 2 in the second list) and elements at index 3 are also different (7 in the first list and 4 in the second list). All other elements (at indices 0, 2,  4) are the same.
- `count_diff([1], [1])` should return 0, as there are no different elements.
- `count_diff([],[])` should return 0, as there is no different element.

You can (additionally) assume:

- You can assume that both parameters are of type list, and that they have the same length.
- You can assume that all elements in both lists are numbers, of type int or float.

Other requirements:

- The function that you write must be named `count_diff` and it must have a two parameters.
- The function must return an int.

A scaffold file `count_diff.py` is provided in Ed and for download via link at the bottom. You must write your solution into the copy of **this file in Ed** (or upload or transfer your solution into it if working outside of Ed). You must not change the name of the file in Ed.

Your solution will be marked on functionality only (no code quality considered). To be fully functional means that it returns the correct value for all valid arguments. You are not required to check that arguments your function is called with are valid. A non-comprehensive set of minimal basic tests is provided, you can test your code on this set of tests by either clicking the "Test" button (on Ed) or by calling the function `test_count_diff` in the provided scaffold file in a console (on Ed or in an IDE). Passing the provided test set does not prove that your solution is fully correct. Code that does not pass the provided test set (or equivalent) will receive zero marks however. Code that does not run (for example, due to syntax errors), that violates the format instructions, or that fails every test case will also receive zero marks.

```python
def count_diff(seq1, seq2):
    pass


def test_count_diff():
    assert count_diff([1, 5, 3, 7, 8], [1, 2, 3, 4, 8]) == 2
    assert count_diff([1], [1]) == 0
    assert count_diff([2], [3]) == 1
    assert count_diff([],[]) == 0
    print("All tests in provided minimal set of basic tests passed")
    print("Reminder: Passing the provided test set does not prove that your function is fully correct")
```



## Question 3: Decode String [6/20]

An encoded string is a string consisting of zero or more *encoded parts*, which are two character long substrings which do not overlap. Each encoded part consists of exactly one digit `'k'` (between `'0'` and `'9'`) followed by exactly one non-digit character.

Each encoded part corresponds to a *decoded part* which is a string consisting of exactly k repeats of the non-digit second character in the encoded part.

Write a function decode(encoded_string) which takes an encoded string encoded_string and returns the corresponding *decoded string*, which is just the encoded string with each encoded part replaced by their corresponding decoded part (order of parts in the string should be preserved).

Examples:

- decode("3a") should return "aaa" 
- decode("2x2y") should return "xxyy”
- decode("3a0b9c")  should return "aaaccccccccc”

You can (additionally) assume:

- The parameter encoded_string is of type str

Other requirements:

- The function that you write must be named decode and it must have a single parameter.
- The function must return a str.

A scaffold file `decode.py` is provided in Ed and for download via link at the bottom. You must write your solution into the copy of **this file in Ed** (or upload or transfer your solution into it if working outside of Ed). You must not change the name of the file in Ed.

Your solution will be marked on functionality only (no code quality considered). To be fully functional means that it returns the correct value for all valid arguments. You are not required to check that arguments your function is called with are valid. A non-comprehensive set of minimal basic tests is provided, you can test your code on this set of tests by either clicking the "Test" button (on Ed) or by calling the function `test_decode` in the provided scaffold file in a console (on Ed or in an IDE). Passing the provided test set does not prove that your solution is fully correct. Code that does not pass the provided test set (or equivalent) will receive zero marks however. Code that does not run (for example, due to syntax errors), that violates the format instructions, or that fails every test case will also receive zero marks.

```python
def decode(encoded_string):
    pass

def test_decode():
    assert decode("3a") == "aaa"
    assert decode("2x2y") == "xxyy"
    assert decode("3a0b9c") == "aaaccccccccc"
    assert decode("") == ""
    print("All tests in provided minimal set of basic tests passed")
    print("Reminder: Passing the provided test set does not prove that your function is fully correct")
```



::: details 公众号：AI悦创【二维码】

![](https://blog.images.bornforthis.cn/docs-images/sha256/77/77f67d48a67ec6a44a4ef1f01ffc85830eb3c121b1ece45dc5ada06e20e2f52b.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Web、Linux」，招收学员面向国内外，国外占 80%。全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](https://blog.images.bornforthis.cn/docs-images/sha256/30/3087c629da73428daa0ee050f5b31709c30f650686164b54c724b892a422c585.jpg)