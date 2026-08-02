---
title: CSCA20 - Lab 2
date: 2024-11-20 19:21:19
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
watermark: true
---

::: center

## CSCA20 - Lab 2

#### Data Types & Strings

:::

## 1. Learning Objectives

In this lab, we’re working with converting between data types, working with built-in string meth-ods, and learning how to find new information in the Python Docs.



## 2. Quiz

This week will be our first one with a quiz. Your tutorial will start with a review of the lab 1 material. So make sure you arrive on-time, log into the lab computers and load up your lab 1 solution. Your TAs will then ask you to make a small modification to your solution to prove that you truly understood the material from the lab.

A few things to note:

- The modification will be something small and simple enough that if you understood and completed the lab on your own, you’ll be fine.
- You will only have 10 minutes to make the modification, so ensure that you’ve arrived on time, and are ready to go, and also that you’re familiar enough with your own solution that you don’t need to spend the 10 minutes re-reading the handout.

This is the way the quizzes will work for future tutorials. If you can’t complete the quiz, don’t worry, you will get plenty more opportunities to demonstrate your skills in later quizzes, just make sure you’re really understanding your own solutions moving forward.

## 3. Demonstration & Evaluation

Successfully completing this lab and the accompanying quiz (next week) will demonstrate the skills of user input/output, and variables. Note that if you have already demonstrated input/output in Lab 1, you don’t need to demonstrate that specific skill again, but as we mentioned last week, some of the fundamentals will have many chances for demonstration.



## 4. Prelab

You can now get basic input from and send output to the user, so let’s make sure we’re ready to start playing with strings. For the start of your lab, you should show up with code that can ask the user for a word and a number, and will then print True if the word has more characters than the number. e.g.;

```python
Type a word: hi
How many letters? 7
False
Type a word: supercalifragilisticexpialidocious
How many letters? 7
True
```

Are you confused that you don’t know how to make something print True or False based on the value of variables?

Good thing we know how to look up this sort of thing in the python docs. (Hint: 6.10. Compar-isons)

## 5. The Scenario

The Unbelievably Trained Security Council (UTSC) wants you to build them a program to help their password crackers learn how to... well.. crack passwords. The program will allow the trainer to input a password, and then the trainee will go through 3 rounds of attempts to crack the password.

## 6. Round 1

After the trainer has entered the password, the trainee will be allowed to guess 5 letters. For each letter, the system will print True if that letter is in the password, or False if it isn’t.

```python
#prompt the trainer for the passcode
passcode = input("Trainer: enter 5 letter passcode: ")
#print a bunch of empty lines so that the entered passcode scrolls off the screen
print("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\
n\n\n\n\n\n\n\n\n\n\n\n\n")
####ROUND 1#####
print("Round 1: Guess 5 letters to see if they're in the passcode ")
#do this 5 times... later when we learn about loops, we can come back and make
#this a lot simpler
guess_1 = input("Guess #1: letter to check: ")
print(guess_1 in passcode)
guess_2 = input("Guess #2: letter to check: ")
print(guess_2 in passcode)
guess_3 = input("Guess #3: letter to check: ")
print(guess_3 in passcode)
guess_4 = input("Guess #4: letter to check: ")
print(guess_4 in passcode)
guess_5 = input("Guess #5: letter to check: ")
print(guess_5 in passcode)
```



## 7. Round 2

Now that the trainee knows (hopefully) the letters in the password, they will be prompted to enter the letters and their predicted positions (e.g., I think ’X’ is in position 3), and will be told True if the letter is in that position, and False otherwise. The trainee will get 5 chances to guess in this round.

```python
#####ROUND 2#####
print("Round 2: Guess 5 letter/position combinations to see if you have them correct")
letter_guess_1 = input("Guess #1: letter to check: ")
position_guess_1 = input("Guess #1: position to check: ")
position_guess_1 = int(position_guess_1)
print(passcode[position_guess_1] == letter_guess_1)
letter_guess_2 = input("Guess #2: letter to check: ")
position_guess_2 = input("Guess #2: position to check: ")
position_guess_2 = int(position_guess_1)
print(passcode[position_guess_2] == letter_guess_2)
letter_guess_3 = input("Guess #3: letter to check: ")
position_guess_3 = input("Guess #3: position to check: ")
position_guess_3 = int(position_guess_3)
print(passcode[position_guess_3] == letter_guess_3)
letter_guess_4 = input("Guess #4: letter to check: ")
position_guess_4 = input("Guess #4: position to check: ")
position_guess_4 = int(position_guess_4)
print(passcode[position_guess_4] == letter_guess_4)
letter_guess_5 = input("Guess #5: letter to check: ")
position_guess_5 = input("Guess #5: position to check: ")
position_guess_5 = int(position_guess_5)
print(passcode[position_guess_5] == letter_guess_5)
```



## 8. Round 3

At this point, the trainee has 5 chances to input the whole password. If the guessed password is correct, the system will print True. If a guess is incorrect, the program will print False (note: even if the trainee guesses correctly on the first try, the system will still prompt for all five attempts).

```python
#####ROUND 3#####
print("Round 3: Guess the whole word, and I'll tell you if it's correct")
guess = input("Guess #1: guess the passcode: ")
print(guess == passcode)
guess = input("Guess #2: guess the passcode: ")
print(guess == passcode)
guess = input("Guess #3: guess the passcode: ")
print(guess == passcode)
guess = input("Guess #4: guess the passcode: ")
print(guess == passcode)
guess = input("Guess #5: guess the passcode: ")
print(guess == passcode)
```



## 9. Starter Code

`lab2_starter.py` has been uploaded to Quercus. You should start by reading through it, and running it to make sure you understand how and why it prints the True and False values that it does. If you don’t understand something, ask your TA for help. Once you understand what the starter code is doing, your job is to modify it so that it prints True and False correctly based on the input of the users.

## 10. Hints

Here are a few hints that might help you with this assignment:

- Your code only needs to print out True or False, later on, when we learn about loops and selection, we can do fancy things like keeping track of the number of correct guesses, or giving them feedback on how they’re doing.
- You can assume that the trainee understands enough about computer science that they will know that computer scientists start counting at 0 (or you can try to change it so they don’t have to, it’s up to you)
- You will need to store the passcode and the trainee’s guesses. But do you really need 5 separate variables for each guess of the trainee? If you won’t need a value anymore, you don’t need to store it and can re-use the variable to point to a new value.
- We haven’t covered all the features of strings you need in order to complete this lab in lectures. But we HAVE covered where you should go to find out the features of strings.

## 11. Extra Practice

If you get this working and want to move beyond the basics, there are several things you can do:

- Not all passwords are case-sensitive. Try to make a version of the program where it doesn’t matter if the trainer/trainee uses upper or lower case letters.
- (once you’ve learned loops) improve this code so that each input/print statement is only in the code once for each round.
- (once you’ve learned selection) improve this code so that it keeps track of the number of correct guesses and gives better feedback than just True or False
- (once you’ve learned loops & selection) make a better version of this program that actually shows the user the parts of the password they’ve figured out already. e.g., if they’ve guessed the positions of A and L and the password is APPLE, prompt them with A_L_

## 13. 知识点

### 13.1 思路

题目要输入，那么咱们就按输入的思路来实现。

### 13.2 语法1：判断一个值是否存在字符串

```python
Value in Squence
In [2]: '1' in 'aiyuechuang12345678'
Out[2]: True

In [3]: '213' in 'aiyuechuang12345678'
Out[3]: False

In [4]: '1234' in 'aiyuechuang12345678'
Out[4]: True
```



### 13.3 语法2: 判断是否相等

```python
In [5]: 1 == 3
Out[5]: False

In [6]: 1 == '11'
Out[6]: False

In [7]: '1' == '1'
Out[7]: True
```

### 13.4 语法3: input

::: warning

input 得到的永远都是字符串类型，如需使用需要慎重思考所需要的数据类型！

:::

::: code-tabs

@tab 模版

```python
prompt the trainer for the passcode
passcode = input("Trainer: enter 5 letter passcode: ")
#print a bunch of empty lines so that the entered passcode scrolls off the screen
print("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\
n\n\n\n\n\n\n\n\n\n\n\n\n")
####ROUND 1#####
print("Round 1: Guess 5 letters to see if they're in the passcode ")
#do this 5 times... later when we learn about loops, we can come back and make
#this a lot simpler
guess_1 = input("Guess #1: letter to check: ")
#----DELETE THIS AND REPLACE WITH YOUR CODE----#
#this will print True because the letter a is in the word apple
print("A" in "Apple")
#---- ----#
#####ROUND 2#####
print("Round 2: Guess 5 letter/position combinations to see if you have them correct")
letter_guess_1 = input("Guess #1: letter to check: ")
position_guess_1 = input("Guess #1: position to check: ")
#this will print True, becuase the 0th character of apple is equal to 'a'
#remember that we start counting from 0
#and if you're wondering why we use == instead of just =, it's because
#we've already used = to mean (assign to a variable)
#----DELETE THIS AND REPLACE WITH YOUR CODE----#
#The line below will print True becuase A is the first letter of Apple
print("Apple"[0] == "A")
#The line below will print False because X is not the first letter of Ball
print("Ball"[0] == "X")
#---- ----#
#####ROUND 3#####
print("Round 3: Guess the whole word, and I'll tell you if it's correct")
guess = input("Guess #1: guess the passcode: ")
#this will print true because the two strings are equal
#but be careful, they have to be exactly equal
#----DELETE THIS AND REPLACE WITH YOUR CODE----#
#The line below will print True
print("Apple" == "Apple")
#The line below will print False
print("Ball" == " bAll ")
#---- ----#
```

@tab Code

```python
#prompt the trainer for the passcode
passcode = input("Trainer: enter 5 letter passcode: ")
#print a bunch of empty lines so that the entered passcode scrolls off the screen
print("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\
n\n\n\n\n\n\n\n\n\n\n\n\n")
####ROUND 1#####
print("Round 1: Guess 5 letters to see if they're in the passcode ")
#do this 5 times... later when we learn about loops, we can come back and make
#this a lot simpler
guess_1 = input("Guess #1: letter to check: ")
print(guess_1 in passcode)
guess_2 = input("Guess #2: letter to check: ")
print(guess_2 in passcode)
guess_3 = input("Guess #3: letter to check: ")
print(guess_3 in passcode)
guess_4 = input("Guess #4: letter to check: ")
print(guess_4 in passcode)
guess_5 = input("Guess #5: letter to check: ")
print(guess_5 in passcode)
#####ROUND 2#####
print("Round 2: Guess 5 letter/position combinations to see if you have them
correct")
letter_guess_1 = input("Guess #1: letter to check: ")
position_guess_1 = input("Guess #1: position to check: ")
position_guess_1 = int(position_guess_1)
print(passcode[position_guess_1] == letter_guess_1)
letter_guess_2 = input("Guess #2: letter to check: ")
position_guess_2 = input("Guess #2: position to check: ")
position_guess_2 = int(position_guess_1)
print(passcode[position_guess_2] == letter_guess_2)
letter_guess_3 = input("Guess #3: letter to check: ")
position_guess_3 = input("Guess #3: position to check: ")
position_guess_3 = int(position_guess_3)
print(passcode[position_guess_3] == letter_guess_3)
letter_guess_4 = input("Guess #4: letter to check: ")
position_guess_4 = input("Guess #4: position to check: ")
position_guess_4 = int(position_guess_4)
print(passcode[position_guess_4] == letter_guess_4)
letter_guess_5 = input("Guess #5: letter to check: ")
position_guess_5 = input("Guess #5: position to check: ")
position_guess_5 = int(position_guess_5)
print(passcode[position_guess_5] == letter_guess_5)
#####ROUND 3#####
print("Round 3: Guess the whole word, and I'll tell you if it's correct")
guess = input("Guess #1: guess the passcode: ")
print(guess == passcode)
guess = input("Guess #2: guess the passcode: ")
print(guess == passcode)
guess = input("Guess #3: guess the passcode: ")
print(guess == passcode)
guess = input("Guess #4: guess the passcode: ")
print(guess == passcode)
guess = input("Guess #5: guess the passcode: ")
print(guess == passcode)
```



:::



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

