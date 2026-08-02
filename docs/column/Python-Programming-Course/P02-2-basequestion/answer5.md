---
title: 05-章节测试五答案
date: 2022-05-18 19:33:00
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

1.  Python中用于表示逻辑与、逻辑或、逻辑非运算的关键字分别是\_\_\_\_\_\_\_\_\_、\_\_\_\_\_\_\_\_\_\_\_、\_\_\_\_\_\_\_\_\_。
    

::: tip 答案解析

正确答案：and、or、not 记忆性知识点

:::    

2.  表达式 `5>10 and 2<5`  的值为\_\_\_\_\_\_\_\_\_。
    

::: tip 答案解析

正确答案：False

:::    

3.  if 语句之后的布尔表达式值为\_\_\_\_\_\_\_时，则对应的语句会被执行。如果其值为\_\_\_\_\_\_\_，则语句不会被执行。
    

::: tip 答案解析

正确答案：True;False

:::    

4. 在条件表达式中不允许使用赋值运算符 `=` ，会提示语法错误。 

    A. √ 

    B. X

::: tip 答案解析

正确答案：A 

易错项：B 记忆性知识点

:::    

5. 自定义的函数里只能有一个 elif 判断语句。 

    A. √ 

    B. X

::: tip 答案解析

正确答案：B 

易错项：A 可以有多个 elif 判断语句

:::    

6. if 语句的执行顺序是从上往下执行的。 

    A. √ 

    B. X

::: tip 答案解析

正确答案：A 

易错项：B 记忆性知识点

:::    

7. 尝试编写一个 Python 程序，输入两个数，比较它们的大小并输出其中较大者。


![img](https://blog.images.bornforthis.cn/docs-images/sha256/2d/2d145d4ff90355ec7cb6c9111fa80af97823776e33cdcb8179505b26bb0a7e16.png)

8. 尝试编写程序，实现分段函数计算，如下表所示：

![img](https://blog.images.bornforthis.cn/docs-images/sha256/d4/d4d59dca7e0f6c273c4177c558fef8579c8f0a0440d2b3c4d80f3fc059a7aaf0.png)

![img](https://blog.images.bornforthis.cn/docs-images/sha256/48/48094390b6efbd89bd592dd2b6dd660bb580efe77fda7ac8c48415a328477b07.png)

9.  尝试编写程序，运行后用户输入 4 位整数作为年份，判断其是否为闰年。如果年份能被 400 整除，则为闰年；如果年份能被4整除但不能被 100 整除也为闰年。
    

![img](https://blog.images.bornforthis.cn/docs-images/sha256/78/78048876eb93662a96b2709e0ae833f448a3729ddcf145b36aecaf40bfbb3a69.png)

10. 尝试编写程序，判断一个数是否为奇数或偶数。

```python
num = int(input("请输入一个整数："))

if num % 2 == 0:
    print("这是一个偶数")
else:
    print("这是一个奇数")
```

11. 尝试编写程序，判断一个数字是否在指定范围内「例如：5～15」。

```python
lower = 5
upper = 15
num = int(input("请输入一个整数："))

if lower <= num <= upper:
    print(f"{num} 在范围 {lower}-{upper} 内")
else:
    print(f"{num} 不在范围 {lower}-{upper} 内")
```

12. 尝试编写程序，判断一个字符是否为元音。

```python
char = input("请输入一个字母：").lower()

if char in ['a', 'e', 'i', 'o', 'u']:
    print(f"{char} 是一个元音")
else:
    print(f"{char} 不是一个元音")
```

13. 尝试编写程序，根据用户输入的成绩，给出评级。

| 分数   | 评级 |
| ------ | ---- |
| 90     | A    |
| 80     | B    |
| 70     | C    |
| 60     | D    |
| 不及格 | F    |

```python
score = float(input("请输入你的成绩："))

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
elif score >= 60:
    grade = "D"
else:
    grade = "F"

print(f"你的评级为：{grade}")
```


