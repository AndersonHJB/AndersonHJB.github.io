---
title: Lab4 香港科技大学
icon: blog
date: 2025-10-04 21:29:53
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

#### Background

The three lifts transport people between the ground floor (G/F) and the 10th floor (10/F). They do not stop at other floors.

Let's suppose each lift has a screen showing its current floor and status. Floor, which is a string, can be either `G` or `10`. Status, which is also a string, can be one of `moving up`, `moving down` or `stopped`. These are similar to the information that the screens for those real lifts show.

Here are some examples of what the floor and status of a lift mean:

| Floor | Status      | Meaning                                                 |
| ----- | ----------- | ------------------------------------------------------- |
| G     | moving up   | The lift is moving up, and is closer to G/F than 10/F   |
| G     | moving down | The lift is moving down, and is closer to G/F than 10/F |
| G     | stopped     | The lift is stopped at G/F                              |



You can also refer to the figure below for better understanding: 

![img](https://blog.images.bornforthis.cn/docs-images/sha256/8e/8e21732e408591a3c572ab421da93dcbe36a30e81c096ab93eaddb4fd853a9c9.png)

#### Your Task

Suppose someone calls the lift at **G/F**. Given the floor and status of each lift, you need to write a Python program to figure out which lift is going to pick them up.

**It is strongly recommeded that you start from the skeleton code ([lab4_skeleton.zip](https://course.cse.ust.hk/comp1023/labs/lab4/skeleton/lab4_skeleton.zip)) provided so that the grading process can be more smooth.**

The decision rules are as follows:

- If a lift is already going down and is closer to G/F than 10/F, it will pick the person up, even if some other lift is stopped at G/F. In this way, some energy can be saved.
- Otherwise, the lift that needs the shortest time to arrive at G/F will pick the person up. For example, a lift that is stopped at G/F takes less time than a lift that is moving down from 10/F, and a lift that is moving down from 10/F takes less time than a lift that is moving up from G/F.

Here are some additional assumptions:

- If two lifts have the same floor and the same status, we assume they are at the same height.
- If there is a tie, the one with the smallest lift number will pick the person up. For example, if all lifts are stopped at G/F, then lift 1 will pick the person up.
- All lifts move at the same speed. If they arrive at 10/F, they stop for the same amount of time. No one calls the lift at 10/F.
- Only one lift will pick the person up.

If you have any questions regarding the problem statement, please post a question on Piazza.

#### More Examples

Scenario 1:

<img src="https://blog.images.bornforthis.cn/docs-images/sha256/09/09c927ac8f8115995eddd72975ffc266b1fddd6d84fb4552bbcf37174919bd65.png" alt="example1" style="zoom:50%;" />

Life 1 will pick them up

Scenario 2:

<img src="https://blog.images.bornforthis.cn/docs-images/sha256/99/99684b33b930bc8aeabf33f161eaa3db59836212551d0b8f122f7586efa07e64.png" alt="example2" style="zoom:50%;" />

Life 2 will pick them up

Scenario 3:

<img src="https://blog.images.bornforthis.cn/docs-images/sha256/f8/f874cb7062c8a548b1fca9f22d287df1c1283765866eed3851a38ba44a86e2f2.png" alt="example3" style="zoom:50%;" />

Life 3 will pick them up

#### Hints

<details style="box-sizing: border-box;"><summary style="box-sizing: border-box; display: list-item; cursor: pointer;">You can click on this line if you want some hints (for reference only)</summary><p style="box-sizing: border-box; margin-top: 0px; margin-bottom: 0.5rem;">You may try to define and figure out a "time" or "distance" for each lift first, and then compare the time/distance to get the final answer.</p></details>

End of Lab Work

### Resources & Sample I/O

- Skeleton code: [lab4_skeleton.zip](https://course.cse.ust.hk/comp1023/labs/lab4/skeleton/lab4_skeleton.zip)

#### Sample I/O

- Public testcases: [lab4_testcases.zip](https://course.cse.ust.hk/comp1023/labs/lab4/skeleton/lab4_testcases.zip)

Note: If you run the finished program on your local computer, your output may differ from the output files provided in the testcases zip in formatting. This is ok as long as you can pass the tests on ZINC. Running your program on your own computer should give you something like this:

```python
Current floor of lift 1 (G/10): 10
Status of lift 1 (moving up/moving down/stopped): stopped
Current floor of lift 2 (G/10): 10
Status of lift 2 (moving up/moving down/stopped): moving up
Current floor of lift 3 (G/10): 10
Status of lift 3 (moving up/moving down/stopped): moving down
Result:
Lift 3 will come to pick you up.
```

End of Resources & Sample I/O

### Submission & Deadline

The lab assignment is due on 11th October 2025, 23:59. We will use the online grading system [ZINC](https://zinc.cse.ust.hk/) to grade your lab work. You are required to upload **a ZIP archive** containing the following files to ZINC:

- `lift.py`

You can submit your code to ZINC as many times as you like before the deadline. Only your last submission will be graded. After the due date, we will regrade your work using hidden test cases. We do this to ensure that students don't just hardcode the answers, like printing the correct outputs without really solving the problems. The hidden test cases will be similar in difficulty to the provided test cases but will use different inputs (this might not apply to the programming assignment). Also, please keep in mind that getting full marks with the provided test cases before the deadline doesn't guarantee you will get full marks with the hidden test cases after the deadline, since the inputs will be different.

End of Submission & Deadline

### Changelog

No changes have been made.

End of Changelog

### Frequently Asked Questions

##### My code doesn't work / there is an error, here is the code. Can you help me fix it?

As the lab assignment is a major course assessment, to be fair, we should not finish the tasks for you. We might provide you with some hints, but we won't debug for you.

##### Can I assume the user always gives a valid input?

Yes. You can assume that the user is a good guy :)

End of Frequently Asked Questions

##### Menu

- [Review](https://course.cse.ust.hk/comp1023/labs/lab4/#review)
- [Introduction](https://course.cse.ust.hk/comp1023/labs/lab4/#introduction)
- [Lab Work](https://course.cse.ust.hk/comp1023/labs/lab4/#labwork)
- [Resources & Sample I/O](https://course.cse.ust.hk/comp1023/labs/lab4/#resources)
- [Submission & Deadline](https://course.cse.ust.hk/comp1023/labs/lab4/#grading)
- [Changelog](https://course.cse.ust.hk/comp1023/labs/lab4/#changelog)
- [FAQs](https://course.cse.ust.hk/comp1023/labs/lab4/#faq)

##### Page maintained by

- SHI Haochen
- ✉ [hshiah@connect.ust.hk](mailto:hshiah@connect.ust.hk)
- DING Yuyi
- ✉ [ydingbj@connect.ust.hk](mailto:ydingbj@connect.ust.hk)
- Last Modified:
- 10/01/2025 20:20:19

##### Homepage

- [Course Homepage](http://course.cse.ust.hk/comp1023)

Maintained by COMP 1023 Teaching Team © 2025 HKUST Computer Science and Engineering

## 答案

::: tabs

@tab lift.py

```python
def pick_lift(floor: str, status: str) -> tuple:
    """
    返回 (is_priority, time_rank)

    规则：
    1) 优先：floor == 'G' 且 status == 'moving down'（更靠近 G 且正在下行）
       命中时 is_priority=True，time_rank 无意义。
    2) 否则按到达 G 的相对时间从快到慢排序（time_rank 越小越快）：
         0: G/stopped
         1: 10/moving down
         2: 10/stopped
         3: 10/moving up
         4: G/moving up
    """
    # 优先规则
    if floor == "G" and status == "moving down":
        return (True, -1)

    # 相对时间排序
    if floor == "G":
        if status == "stopped":
            return (False, 0)
        elif status == "moving up":
            return (False, 4)
        else:  # moving down（理论上不会到这，因为已被优先规则捕获）
            return (False, 0)
    else:  # floor == "10"
        if status == "moving down":
            return (False, 1)
        elif status == "stopped":
            return (False, 2)
        else:  # moving up
            return (False, 3)


def main():
    # Get user input
    # lift_1_floor, lift_2_floor and lift_3_floor can be either G or 10
    # lift_1_status, lift_2_status and lift_3_status can be moving up, moving down or stopped
    # The strip() method removes spaces or other characters from the start and end of a string. For example:
    # text = "   COMP 1023   "
    # cleaned_text = text.strip()
    # print(cleaned_text)  # Output: "COMP 1023"
    lift_1_floor = input("Current floor of lift 1 (G/10): ").strip()
    lift_1_status = input("Status of lift 1 (moving up/moving down/stopped): ").strip()
    lift_2_floor = input("Current floor of lift 2 (G/10): ").strip()
    lift_2_status = input("Status of lift 2 (moving up/moving down/stopped): ").strip()
    lift_3_floor = input("Current floor of lift 3 (G/10): ").strip()
    lift_3_status = input("Status of lift 3 (moving up/moving down/stopped): ").strip()

    print("Result: ")

    # NOTE: Please do not modify any code above this line.

    # === Decision ===
    lifts = [
        (lift_1_floor, lift_1_status),
        (lift_2_floor, lift_2_status),
        (lift_3_floor, lift_3_status),
    ]

    # 先处理“G 且 moving down”的优先规则（若有并列，取编号最小）
    priority_indices = [
        i for i, (f, s) in enumerate(lifts)
        if f == "G" and s == "moving down"
    ]
    if priority_indices:
        chosen = priority_indices[0]
    else:
        # 否则按相对时间等级最小者（并自然按编号最小打破平手）
        ranks = [pick_lift(f, s) for (f, s) in lifts]
        best_rank = min(r[1] for r in ranks)  # 此时 is_priority 均为 False
        chosen = [i for i, r in enumerate(ranks) if r[1] == best_rank][0]

    # 输出
    if chosen == 0:
        print("Lift 1 will come to pick you up.")
    elif chosen == 1:
        print("Lift 2 will come to pick you up.")
    else:
        print("Lift 3 will come to pick you up.")

    # === End ===


if __name__ == "__main__":
    main()
```

@tab run_tests.py

```python
import subprocess, re, sys, pathlib

BASE = pathlib.Path(__file__).parent
CASE_DIR = BASE / "lab4_testcases"

def last_lift_line(s: str) -> str:
    # 抽取类似 "Lift 3 will come to pick you up." 的行
    for line in reversed(s.strip().splitlines()):
        if re.search(r"^Lift\s+[123]\s+will come to pick you up\.\s*$", line):
            return line.strip()
    return s.strip().splitlines()[-1].strip() if s.strip() else ""

def run_case(i: int) -> bool:
    input_path = CASE_DIR / f"input_{i}.txt"
    output_path = CASE_DIR / f"output_{i}.txt"

    actual = subprocess.run(
        [sys.executable, "lift.py"],
        input=input_path.read_text(encoding="utf-8"),
        text=True, capture_output=True, check=False
    ).stdout

    want = output_path.read_text(encoding="utf-8")

    a = last_lift_line(actual)
    b = last_lift_line(want)

    ok = (a == b)
    status = "✅ PASS" if ok else "❌ FAIL"
    print(f"Case {i:>2}: {status}")
    if not ok:
        print("  Expected:", b)
        print("  Actual  :", a)
    return ok

def main():
    total = 10  # 改成你的用例个数
    passed = sum(run_case(i) for i in range(1, total+1))
    print(f"\nSummary: {passed}/{total} passed")

if __name__ == "__main__":
    main()
```

@tab 内联代码实现

```python
def main():
    # Get user input
    lift_1_floor = input("Current floor of lift 1 (G/10): ").strip()
    lift_1_status = input("Status of lift 1 (moving up/moving down/stopped): ").strip()
    lift_2_floor = input("Current floor of lift 2 (G/10): ").strip()
    lift_2_status = input("Status of lift 2 (moving up/moving down/stopped): ").strip()
    lift_3_floor = input("Current floor of lift 3 (G/10): ").strip()
    lift_3_status = input("Status of lift 3 (moving up/moving down/stopped): ").strip()

    print("Result: ")

    # NOTE: Please do not modify any code above this line.

    # === Decision ===
    lifts = [
        (lift_1_floor, lift_1_status),
        (lift_2_floor, lift_2_status),
        (lift_3_floor, lift_3_status),
    ]

    # Step 1️⃣: 优先规则 —— “更靠近 G 且正在下行”
    priority = [i for i, (f, s) in enumerate(lifts) if f == "G" and s == "moving down"]
    if priority:
        chosen = priority[0]
    else:
        # Step 2️⃣: 否则按到达 G 的相对时间排序
        def time_rank(floor, status):
            # 相对到达时间（越小越快）：
            # G/stopped < 10/moving down < 10/stopped < 10/moving up < G/moving up
            if floor == "G" and status == "stopped":
                return 0
            if floor == "10" and status == "moving down":
                return 1
            if floor == "10" and status == "stopped":
                return 2
            if floor == "10" and status == "moving up":
                return 3
            if floor == "G" and status == "moving up":
                return 4
            return 9  # fallback，不会到这里

        ranks = [time_rank(f, s) for (f, s) in lifts]
        best = min(ranks)
        chosen = [i for i, r in enumerate(ranks) if r == best][0]

    # Step 3️⃣: 输出结果
    if chosen == 0:
        print("Lift 1 will come to pick you up.")
    elif chosen == 1:
        print("Lift 2 will come to pick you up.")
    else:
        print("Lift 3 will come to pick you up.")
    # === End ===


if __name__ == "__main__":
    main()
```



:::







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