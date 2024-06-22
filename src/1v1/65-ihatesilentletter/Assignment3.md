---
title: Assignment 3
icon: python
date: 2023-11-27 08:12:38
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

1. [2] Write a function `spell_number(n)` where n is an integer between 1 and 9999. Out-put is that number spelled out in words. So, `spell_number(821)` prints eight hundred twenty one, and `spell_number(3017)` prints three thousand seventeen.

```python
#Question 1 

def spell_number(n):
    """ spell a given integer between 1 and 9999
    """
    
    
    
    
    
print(spell_number(9307)) # should print nine thousand three hundred seven
print(spell_number(5004)) # should print five thousand four
print(spell_number(1616)) # should print one thousand six hundred sixteen
print(spell_number(13)) # should print thirteen
print(spell_number(906)) # should print nine hundred six
print(spell_number(67)) # should print sixty seven
print(spell_number(632)) # should print six hundred thirty two
print(spell_number(2)) # should print two
print(spell_number(111)) # should print one hundred eleven
```

```python
def spell_number(n):
    """ spell a given integer between 1 and 9999 """
    if not 1 <= n <= 9999:
        return "Number out of range"

    units = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    teens = ["", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]
    tens = ["", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]
    
    def spell_hundreds(digit):
        return units[digit] + " hundred " if digit != 0 else ""

    def spell_tens(digit):
        return tens[digit] + " " if digit != 0 else ""

    def spell_units(digit):
        return units[digit]

    thousands = n // 1000
    hundreds = (n % 1000) // 100
    ten_units = n % 100

    if ten_units > 10 and ten_units < 20:
        ten_units_text = teens[ten_units - 10]
    else:
        ten_units_text = spell_tens(ten_units // 10) + spell_units(ten_units % 10)

    return (units[thousands] + " thousand " if thousands != 0 else "") + \
           (spell_hundreds(hundreds)) + \
           ten_units_text.strip()

# Test cases
print(spell_number(9307)) # nine thousand three hundred seven
print(spell_number(5004)) # five thousand four
print(spell_number(1616)) # one thousand six hundred sixteen
print(spell_number(13))   # thirteen
print(spell_number(906))  # nine hundred six
print(spell_number(67))   # sixty seven
print(spell_number(632))  # six hundred thirty two
print(spell_number(2))    # two
print(spell_number(111))  # one hundred eleven

```







2. [2] Use the code provided in the template to download the string which contains the first one million decimals of $\pi$ (thus, the string starts with 1415926535897932384). Write a function `count_two` which returns the list `how_many_times`, defined as `how_many_times[j]` = the number of times the string j appears in the first one million decimals of $\pi$, where $j=00,01,02,...,10, 11,..., 99$. In other words: chop up $\pi−3=.1415926535...1058209...$ into two-digit numbers (with leading `zero(s)` included): 14, 41, 15, 59, 92, 26, 65, 53, 35,..., 10, 05, 58,82, 20, 09, and so on, and count how many times they appear. `how_many_times[45]` is equal to the number of times 45 appears in this list.

    Identify the two-digit string (number) that appears most often within the first one million decimals of $\pi$, and the two-digit string (number) that appears least often. In each case,say how many times they appear.

    [Optional, not for credit: Print the list `how_many_times`, and look at the values in it.What does this tell you about the distribution of two-digit numbers (from 00 to 99) within the decimals of $\pi$?]

```python
#Question 2

################################################## do not change this part
import requests
target_url="https://ms.mcmaster.ca/lovric/1MP3/files/pi1million.txt"
response = requests.get(target_url)
data_string = response.text # data_string contains all 1 million digits
##########################################################################

# the string data_string contains all 1 million digits; you can check its length 
# and print its initial part
print(len(data_string))
print(data_string[0:200])

# you can use min and max commands to find the largest and 
# the smallest numbers in a list
# and index method for lists if you wish


def count_two(): 


```

```python
#Question 2

################################################## do not change this part
import requests
target_url="https://ms.mcmaster.ca/lovric/1MP3/files/pi1million.txt"
response = requests.get(target_url)
data_string = response.text[2:] # data_string contains all 1 million digits
##########################################################################

# the string data_string contains all 1 million digits; you can check its length 
# and print its initial part
print(len(data_string))
print(data_string[0:200])

# you can use min and max commands to find the largest and 
# the smallest numbers in a list
# and index method for lists if you wish

def count_two():
    # 初始化计数列表
    how_many_times = [0] * 100

    # 遍历字符串，每次取两位数
    for i in range(len(data_string) - 1):
        two_digit_str = data_string[i:i+2]
        if two_digit_str.isdigit():  # 确保是两位数字
            two_digit_num = int(two_digit_str)
            how_many_times[two_digit_num] += 1

    return how_many_times

# 调用函数并获取结果
how_many_times = count_two()

# 找到出现次数最多和最少的两位数
most_common = how_many_times.index(max(how_many_times))
least_common = how_many_times.index(min(how_many_times))

print(f"最常见的两位数是 {most_common}, 出现了 {max(how_many_times)} 次。")
print(f"最不常见的两位数是 {least_common}, 出现了 {min(how_many_times)} 次。")

```



3. Use the code provided in the template to download the book “The Great Gatsby” as a list of lines. The code provided removes punctuation and chops up each line into a list of words (strings). Execute the cell as is, to see what these lines look like.

    (a) [1] How many different 15-letter words are there in the book? List them all.

    (b) [1] How many unique words are there in the book? [Optional, not for credit: Explain why your answer might be an approximation, and not a true value.]

```python
#Question 3

####################################################################### do not change this part
import re
import urllib.request as ur
web_page = ur.urlopen('https://ms.mcmaster.ca/lovric/1MP3/files/TheGreatGatsby.txt')
lines = web_page.readlines()  # lines is a list of lines
for i in range(0,len(lines)):# len(lines)):
    lines[i]=lines[i].decode("utf-8")  # lines is a list of lines stripped of all markup, new lines, etc
    lines[i]=re.sub("[^\w]", " ",  lines[i]).split()
################################################################################################  

for i in range(0,12):
    print(lines[i])  # to see what it looks like - each line is a list of words

    
```

```python
#Question 3

####################################################################### do not change this part
import re
import urllib.request as ur
web_page = ur.urlopen('https://ms.mcmaster.ca/lovric/1MP3/files/TheGreatGatsby.txt')
lines = web_page.readlines()  # lines is a list of lines
for i in range(0,len(lines)):# len(lines)):
    lines[i]=lines[i].decode("utf-8")  # lines is a list of lines stripped of all markup, new lines, etc
    lines[i]=re.sub("[^\w]", " ",  lines[i]).split()
################################################################################################  

# for i in range(0,12):
#     print(lines[i])  # to see what it looks like - each line is a list of words
# (a) Find 15-letter words
fifteen_letter_words = set()
for line in lines:
    for word in line:
        if len(word) == 15:
            fifteen_letter_words.add(word)

# (b) Find the number of unique words
unique_words = set()
for line in lines:
    for word in line:
        unique_words.add(word.lower())

# Print results
print("15-letter words:", fifteen_letter_words)
print("Number of different 15-letter words:", len(fifteen_letter_words))
print("Number of unique words:", len(unique_words))
```



4. [2] Create a function which concatenates two dictionaries. If the two dictionaries have the same key then their values are added.

    For instance:

    (1) If the two dictionaries are `{'a': 1, 'b': 2}` and `{'d': 4}` then the function should return `{'a': 1, 'b': 2, 'd': 4}`

    (2) If the two dictionaries are `{'a': 1, 'b': 2}` and `{'a':3, 'd': 4}` then the function should return `{'a': 4, 'b': 2, 'd': 4}`.

```python
#Question 4

def concatenate_dict(d1,d2):
    """ put two dictionaries together
        if they contain the same key, add the corresponding values
    """

    
    
    
    
print(concatenate_dict({'a':1,'b':2},{'d':4})) #should return {'a': 1, 'b': 2, 'd': 4}
print(concatenate_dict({'a':1,'b':2,'d':4,'m':4},{'d':2,'e':7,'m':11})) #should return {'a': 1, 'b': 2, 'd': 6, 'm': 15, 'e': 7}
print(concatenate_dict({'a':12},{'a':2})) #should return {'a': 14}
```

```python
def concatenate_dict(d1, d2):
    """合并两个字典，如果存在相同的键，则值相加"""

    # 创建一个新字典，用于存储结果
    result = {}

    # 将第一个字典中的键值对添加到结果字典中
    for key, value in d1.items():
        result[key] = value

    # 遍历第二个字典，处理键值对
    for key, value in d2.items():
        # 如果键已经存在于结果字典中，则将值相加
        if key in result:
            result[key] += value
        else:
            # 如果键不存在于结果字典中，则直接添加
            result[key] = value

    return result

# 测试函数
print(concatenate_dict({'a': 1, 'b': 2}, {'d': 4})) # 应返回 {'a': 1, 'b': 2, 'd': 4}
print(concatenate_dict({'a': 1, 'b': 2, 'd': 4, 'm': 4}, {'d': 2, 'e': 7, 'm': 11})) # 应返回 {'a': 1, 'b': 2, 'd': 6, 'm': 15, 'e': 7}
print(concatenate_dict({'a': 12}, {'a': 2})) # 应返回 {'a': 14}
```







5. [2] Given two dictionaries d1 and d2, create a new dictionary d3 according to the fol-lowing rule (think of transitivity): the entry a:c is in d3 if and only if there is an entry a:b in d1, and an entry b:c in d2.

    Forinstance: if `d1={2: 3,8: 19,6: 4,5: 3}` and `d2={2: 5,4: 3,3: 9}` your code should create the dictionary `d3={2 : 9, 6 : 3, 5 : 9}`.

```python
#Question 5

def transitive_dict(d1,d2):
    """ create a dictionary by transitivity
    """
  



    
print(transitive_dict({2:3, 8:19, 6:4, 5:3},{2:5, 4:3, 3:9}))  #should return {2: 9, 6: 3, 5: 9}
print(transitive_dict({2:3, 6:4, 5:3},{2:5, 6:9}))  #should return empty dictionary  
print(transitive_dict({2:3, 3:3, 4:3},{3:2, 5:3, 6:9}))  #should return {2: 2, 3: 2, 4: 2}
```

```python
def transitive_dict(d1, d2):
    """
    根据给定的字典 d1 和 d2，按照传递性规则创建新的字典 d3。
    如果 d1 中有键值对 a:b，d2 中有键值对 b:c，则 d3 中应有键值对 a:c。
    """
    d3 = {}
    for key, value in d1.items():
        if value in d2:
            d3[key] = d2[value]
    return d3

# 测试函数
print(transitive_dict({2: 3, 8: 19, 6: 4, 5: 3}, {2: 5, 4: 3, 3: 9}))  # 应返回 {2: 9, 6: 3, 5: 9}
print(transitive_dict({2: 3, 6: 4, 5: 3}, {2: 5, 6: 9}))  # 应返回空字典
print(transitive_dict({2: 3, 3: 3, 4: 3}, {3: 2, 5: 3, 6: 9}))  # 应返回 {2: 2, 3: 2, 4: 2}
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
