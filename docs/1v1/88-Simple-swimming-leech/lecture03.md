---
title: 03-python-summer-2024-exam-2-practice-exam-2-practice
date: 2024-06-30 18:13:17
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

comment: true
 

backToTop: true
toc: true
watermark: true
---

## 0. Link

- GitHub repository: [https://classroom.github.com/a/dtvQV4h_](https://classroom.github.com/a/dtvQV4h_)
- Google Form: [https://forms.gle/2jKYroSe36JBKA468](https://forms.gle/2jKYroSe36JBKA468)
- And some additional problems from long ago semesters, in case you need them:
    - #1 [https://web.archive.org/web/20210416045344/https://knowledge.kitchen/Python_](https://web.archive.org/web/20210416045344/https://knowledge.kitchen/Python_) "Learning_Modules"_Midterm_1_Exam_Sample_Problems
    - #2 [https://web.archive.org/web/20170222081026/http://knowledge.kitchen/Python_](https://web.archive.org/web/20170222081026/http://knowledge.kitchen/Python_)"Learning_Modules"_Midterm_2_Exam _Sample_Problems
    - #3 [https://web.archive.org/web/20161223090043/http://knowledge.kitchen/Python_](https://web.archive.org/web/20161223090043/http://knowledge.kitchen/Python_) "Learning_Modules"_Final_Exam_Sample_Problems

## 1. problem_1.py

Complete this function so that it asks the user to enter the day of the week.

Once a valid response is received the program must return the day the user entered as an integer.「目标」

The program must not crash under any circumstances.「要处理异常情况，不能奔溃」

Validation:
- The user can respond with either as an integer (e.g. 1 for Monday, 2 for Tuesday, etc), or as a proper noun (e.g. Monday, Tuesday, etc), or as an abbreviated proper noun (e.g. Mon, Tues, Weds, Thurs, Fri, Sat, Sun)「处理各种名词得到对应的数字」
- The program must keep asking for input until a valid response is received.「不断的请求输入，表明需要使用 loop」
- The program must be case insensitive: e.g. 'monday' and 'Monday' should be treated the same, as should 'Mon' and 'mon'.「不区分大小写」
- If the user enters an invalid integer, the program must output the message, 'Invalid number!'
- If the user enters an invalid string consisting of only alphabetic characters, the program must output the message, 'Invalid day!'
- If the user enters an invalid response of any other type, the program must output, 'Huh?'

`:returns:` The day the user entered, as an integer.  I.e., 1 for Monday, 2 for Tuesday, 3 for Wednesday etc.

::: code-tabs

@tab 题目

```python
"""
Exam #1 / Problem set #1.
- Your job is to complete the definitions of each function so that it achieves its indicated behavior.
- You are welcome to create any additional functions you desire.
- Do not write any code in the global scope, i.e. do not write code that is not within a function definition.

Run this file directly to try it out.
"""


def get_valid_day():
    """
    Complete this function so that it asks the user to enter the day of the week.
    Once a valid response is received the program must return the day the user entered as an integer.
    The program must not crash under any circumstances.

    Validation:
    - The user can respond with either as an integer (e.g. 1 for Monday, 2 for Tuesday, etc), or as a proper noun (e.g. Monday, Tuesday, etc), or as an abbreviated proper noun (e.g. Mon, Tues, Weds, Thurs, Fri, Sat, Sun)
    - The program must keep asking for input until a valid response is received.
    - The program must be case insensitive: e.g. 'monday' and 'Monday' should be treated the same, as should 'Mon' and 'mon'.
    - If the user enters an invalid integer, the program must output the message, 'Invalid number!'
    - If the user enters an invalid string consisting of only alphabetic characters, the program must output the message, 'Invalid day!'
    - If the user enters an invalid response of any other type, the program must output, 'Huh?'

    :returns: The day the user entered, as an integer.  I.e., 1 for Monday, 2 for Tuesday, 3 for Wednesday etc.
    """
    # write your code below this line


# -------------------------------------- #
# Do not modify the code below this line #
if __name__ == "__main__":
    # call the function if this file is being run directly
    get_valid_day()
```

@tab STCODE

```python

def get_valid_day():
    # write your code below this line
    monday = [1, 'Monday', 'monday', 'Mon', 'mon']
    tuesday = [2, 'Tuesday', 'tuesday', 'Tues', 'tues']
    wednesday = [3, 'Wednesday', 'wednesday', 'Weds', 'weds']
    thursday = [4, 'Thursday', 'thursday', 'Thurs', 'thurs']
    friday = [5, 'Friday', 'friday', 'Fri', 'fri']
    saturday = [6, 'Saturday', 'saturday', 'Sat', 'sat']
    sunday = [7, 'Sunday', 'sunday', 'Sun', 'sun']
    end = False
    while not end:
        day = input('Enter the day of the week:').strip().lower()
        if day.isdigit():
            day = int(day)
            if 1 <= day <= 7:
                return day
            else:
                print("invalid number!")
        if day in monday:
            print("1")
            end = True
            return int(1)
        elif day in tuesday:
            print("2")
            end = True
            return int(2)
        elif day in wednesday:
            print("3")
            end = True
            return int(3)
        elif day in thursday:
            end = True
            return int(4)
        elif day in friday:
            end = True
            return int(5)
        elif day in saturday:
            end = True
            return int(6)
        elif day in sunday:
            end = True
            return int(7)
        else:
            if str(day).isalpha():
                print('Invalid day!')
            elif day.isdigit():
                print('Invalid number!')
            else:
                print('Huh?')


# -------------------------------------- #
# Do not modify the code below this line #
if __name__ == "__main__":
    # call the function if this file is being run directly
    get_valid_day()
    # print(f"The day you entered corresponds to: {day}")
```

@tab Solution

```python
def get_valid_day():
    """
    Asks the user to enter the day of the week and returns the day as an integer when a valid response is received.
    The function keeps asking for input until a valid response is received, handling all invalid inputs appropriately.
    """
    # Maps full day names and abbreviated names to their corresponding day number
    day_map = {
        "monday": 1, "mon": 1,
        "tuesday": 2, "tues": 2,
        "wednesday": 3, "weds": 3,
        "thursday": 4, "thurs": 4,
        "friday": 5, "fri": 5,
        "saturday": 6, "sat": 6,
        "sunday": 7, "sun": 7
    }
    
    while True:
        user_input = input("Enter the day of the week: ").strip().lower()
        
        # Check if input is a valid integer and within the range of 1-7
        if user_input.isdigit():
            day_number = int(user_input)
            if 1 <= day_number <= 7:
                return day_number
            else:
                print("Invalid number!")
        # Check if input is a valid string for day name
        elif user_input.isalpha():
            if user_input in day_map:
                return day_map[user_input]
            else:
                print("Invalid day!")
        else:
            print("Huh?")


# -------------------------------------- #
# Do not modify the code below this line #
if __name__ == "__main__":
    # call the function if this file is being run directly
    day = get_valid_day()
    print(f"The day you entered corresponds to: {day}")
```

:::





## problem_3.py

Write a program that qualifies the user for a particular credit card.

Qualification criteria:
- Make at least $30,000 per year.
- If the user rents a home, their rent payment must not be more than 5% of their yearly income (i.e. `$1,500` is the max rent that they can pay while making `$30,000` per year).
- However, if they own their home, you do not need to take their monthly house payment into account.

Technical requirements:
- You can assume the user will enter valid responses to each question.
- You can assume the user will enter dollar amounts in the format indicated in the examples below.
- Your program must not crash under any circumstances

Example sessions - your output should match these, given the same user responses:
- Session with a homeowner who qualifies:

    Welcome to the credit card qualifier!

    How much do you make per year? `$30,000`

    Do you own your home? (y/n) y

    You qualify!

- Session with a homeowner who does not qualify:

    Welcome to the credit card qualifier!

    How much do you make per year? `$16,000`

    Do you own your home? (y/n) y

    Sorry, you don't qualify. Your income is too low.

- Session with a renter who qualifies:

    Welcome to the credit card qualifier!

    How much do you make per year? `$110,000`

    Do you own your home? (y/n) n

    How much do you pay in rent per month? `$5,000`

    You qualify!

- Session with a renter who does not qualify:

    Welcome to the credit card qualifier!
    
    How much do you make per year? `$50,000`
    
    Do you own your home? (y/n) n
    
    How much do you pay in rent per month? `$5,000`
    
    Sorry, you don't qualify. Your rent is too high.

::: details 公众号：AI悦创【二维码】

![](https://blog.images.bornforthis.cn/docs-images/sha256/77/77f67d48a67ec6a44a4ef1f01ffc85830eb3c121b1ece45dc5ada06e20e2f52b.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Web、Linux」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](https://blog.images.bornforthis.cn/docs-images/sha256/30/3087c629da73428daa0ee050f5b31709c30f650686164b54c724b892a422c585.jpg)







