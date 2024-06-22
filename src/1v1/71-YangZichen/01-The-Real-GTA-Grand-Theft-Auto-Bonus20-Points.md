---
title: The Real GTA Grand Theft Auto (Bonus, 20 Points)
date: 2023-11-02 11:33:47
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

## 1. Background

I can’t take anymore! You know what I am saying? This is b*llsh*t! Those cops should write those dumb codes themselves.

Franklin said to himself. He attempted to break out of the LSPD holding cell the old-fashioned way - knocking out the guards and grabbing the keys. Just walking to the door, he was knocked down and sent back to the dim cell by the backup police officers who heard the sirens.

He suddenly remembers Leslie, the cripple he used to work with. He finds a way to get in touch with Leslie. Leslie says he can get Franklin out, but he needs Franklin to do what he says.

One day, Franklin finds a note in his lunch bread. The note tells him to rob the escort vehicle and escape on his way back to his cell from the office. Sure enough, in the afternoon Franklin got into the escort vehicle. On the way, the guard said he wanted a burger from McDonald’s, so he put a hook on Franklin’s head and cuffed his hands to the steering wheel.

To Franklin’s surprise, Leslie’s voice came over the radio. He told Franklin to drive the car right now.

I got mad respect for you man. But I can’t see anything, bro. I can’t even take off this dumb hood. Franklin said.

If you are still eager for freedom, do as I say! Stupid! Leslie roared.

## 2. Description

Franklin has to drive to the safe house within the time limit. Since Franklin’s head is covered by a hood and his hands are tied up, all he can do is step on the gas, hit the brakes and change the direction. Not only that, he doesn’t know the location of the safe house so he has to follow Leslie’s directions. Luckily, the main roads in Los Santos were basically straight, so with Franklin’s excellent driving skills he could estimate the distance of a block.

Leslie knows the size of the map, which is rectangular in shape, Leslie also creates a simple coordinate system. The point at the bottom left corner is the origin point (0, 0). He also knows Franklin’s initial location and the location of the safe house. Hearing the siren, Leslie tells Franklin there must be some obstacle on the road, Franklin should avoid hitting the obstacle if he does not want to be arrested again.

**The following definitions are given for clarity.**

### 2.1 Direction and Speed

Franklin has an excellent sense of direction and can sense whether he is facing east or south or west or north. Note that speed is a non-negative integer. **Note that before receiving the first instruction, Franklin’s speed is always 0.**

- Facing north: (in the absence of obstacles) the next time step Franklin’s vertical coordinate increases by the current speed.
- Facing south: (in the absence of obstacles) the next time step Franklin’s vertical coordinate decreases by the current speed.
- Facing east: (in the absence of obstacles) the next time step Franklin’s horizontal coordinate increases by the current speed.
- Facing west: (in the absence of obstacles) the next time step Franklin’s horizontal coordinate decreases by the current speed.

### 2.2 Time and Instructions

for a time limit t, the process has t time steps. Franklin always receives t instructions. Some instructions may lead to Franklin’s attributes (direction and speed) change. Instructions contain:

- North: May change the direction and the speed.
- South: May change the direction and the speed.
- East: May change the direction and the speed.
- West: May change the direction and the speed.
- Park: Keep the direction and reset the speed.
- Keep: Keep the direction and the speed.

### 2.3 Rules for the Game

1. Rules for Franklin’s Actions:
    - Speed Adjustment Rules
        - When the command direction matches Franklin’s current direction, his speed increases by 1.
        - When the command direction and Franklin’s current direction are at 180-degree angles from each other, his speed decreases by 1 and his direction stays still.
    - Direction Adjustment Rule
        - When the command direction and Franklin’s current direction are at 90-degree angles from each other, his speed remains the same, but his direction changes to the command direction.
    - Zero Speed Rule
        - If Franklin’s speed reaches zero, his direction always changes to the command direction, and his speed is set to 1.
2. Attribute Precedence
    - Franklin’s attribute changes take precedence over coordinate changes. He first receives instruc- tions that may change his attributes (speed or direction), and then he moves according to the present direction and speed.
3. Obstacles and Border Rules:
    - When Franklin encounters police-imposed obstacles on the road, he cannot drive through them. These obstacles keep Franklin one block away from the obstacle and change his speed to 0.
    - Franklin cannot pass the borders of the map. If he reaches or attempts to pass the borders, his speed will change to 0.
4. End of Driving
    - Franklin’sdriveendseitherafteraspecifiednumberoftimesteps(ttimesteps)orwhenhiscoordi- nate is the same as the coordinate of the safe house. In the latter case, the safe house’s coordinates may either match Franklin’s new coordinates after following the instructions or be situated on the path between Franklin’s old and new coordinates.
    - If Franklin’s drive ends, he will disregard all subsequent instructions.

## 3. Input Format

The input contains 5 lines.

The first line contains three positive integers n, m and t representing the size of the mapping matrix and time limit, where n is the length in the horizontal direction and m is the length in the vertical direction. The integers are separated by one space. The origin point is (0, 0).

The second line is one coordinate of the form (x, y), which is the coordinate of the safe house.

The third line is one coordinate of the form (x, y), which is Franklin’s initial coordinate.

The fourth line is k coordinates of the form (x, y). These coordinates are the coordinates of the obstacle. If there is no obstacle, the input is (−1, −1).

The fifth line is a series of Franklin’s actions including t capital letters: N, E, S, W, P, and K for north, east, south, west, park and keep, respectively.

## 4. Output Format

The output contains only one integer, indicating the Manhattan Distance between Franklin’s final coordi- nates and the safe house.

## 5. Test

### 5.1 test1

Sample Input 1:

```python
3 1 8 
(0,2) 
(0,0)
(−1,−1) 
EEEEKKKK
```

Sample Output 1:

```python
0
```

### 5.2 test2

Sample Input 2:

```python
3 3 4
(2,2) 
(0,0) 
(1,1)
ENEN
```

Sample Output 2:

```python
1
```

### 5.3 test3

Sample Input 3:

```python
3 3 10 
(2,2)
(0,0) 
(1,1)
EKNKPKEEPP
```

Sample Output 3:

```python
0
```

## 6. Data Constraints

To solve this problem you have to consider a lot of constraints and read the problem thoroughly. However, it is promised that some test cases are easier to handle. The test cases are given as follows:

For the 1st and 2nd test cases, i.e. 1.in and 2.in:

- The game map is a single row, i.e. the car can’t move vertically.
- You may simply ignore all the instructions asking you to move N/S.
- Note that the car can still face North or South. This may affect it’s speed.

For the 1st-4th test cases, i.e. 1.in, 2.in, 3.in and 4.in,

- No obstacles are given;
- You can assume that the car won’t hit obstacles;
- But, be careful to handle it if the car hits the wall!

For another 20% data, i.e. 5.in and 6.in,

- They are corner cases;
- If you get the Wrong Answer on these two test cases, check your code carefully if it works correctly in special cases.

For all test cases, $1 \leq n$, $m \leq 64$; $1 \leq t \leq 32$; Let $o$ be $\frac{1}{2}(m + n)$, then $1 \leq k \leq o \log o$.

## 7. Hint

- MAKE SURE YOU UNDERSTAND EVERY SENTENCE ABOVE BEFORE YOU WRITE ANY CODE!
- PLEASE NOTE THAT THE ORIGIN POINT IS (0, 0).
- Note that there are some police-imposed obstacles on the road. When Franklin encounters these obstacles he cannot drive through them.
- Note that Franklin can not pass the borders of the map.
- You do NOT have to figure out why k is constrained as this.

## 8. 中文

### 8.1 Background

我受够了！你懂我的意思吗？这完全是胡说八道！那些警察应该自己来写那些愚蠢的代码。

弗兰克林自言自语。他试图用老办法逃出洛圣都警察局的拘留室——击倒警卫并夺取钥匙。但是他刚走到门边，就被听到警报的后备警察打倒，重重地摔回昏暗的牢房。

他突然想起了莱斯利，那个他过去曾共事的残疾人。他找到了与莱斯利联系的方法。莱斯利说他可以帮弗兰克林出去，但他需要弗兰克林按照他说的去做。

一天，弗兰克林在午餐面包里发现了一张纸条。纸条告诉他要抢劫押运车，在从办公室回牢房的路上逃跑。果不其然，到了下午弗兰克林被带上了押运车。在路上，警卫说他想要一个麦当劳的汉堡，于是他在弗兰克林的头上套了一个钩子，并将他的手铐在方向盘上。

让弗兰克林惊讶的是，莱斯利的声音通过无线电传了过来。他告诉弗兰克林现在就开车。

我非常尊敬你，伙计。但我什么也看不见，兄弟。我连这个愚蠢的头套都摘不下来。弗兰克林说。

如果你还渴望自由，就照我说的做！笨蛋！莱斯利吼道。

### 8.2 Description

弗兰克林必须在限定时间内开车到达安全屋。由于弗兰克林的头被头套覆盖，双手被捆绑，他唯一能做的就是踩油门、刹车以及改变方向。不仅如此，他不知道安全屋的位置，所以他必须按照莱斯利的指示行动。幸运的是，洛圣都的主要道路基本上是直的，所以凭借弗兰克林出色的驾驶技能，他能够估计出一个街区的距离。

莱斯利知道地图的大小，它是矩形的，莱斯利还创建了一个简单的坐标系统。位于左下角的点是原点（0,0）。他还知道弗兰克林的初始位置和安全屋的位置。听到警报声，莱斯利告诉弗兰克林道路上肯定有障碍物，如果弗兰克林不想再次被逮捕，就应该避开这些障碍物。

**为了清晰起见，下面给出了一些定义。**

### 8.3 方向与速度

富兰克林具有极佳的方向感，能够感知自己是面向东方、南方、西方还是北方。请注意，速度是一个非负整数。**注意，在接收到第一条指令之前，富兰克林的速度始终为0。**✅

- 面向北方：（在没有障碍物的情况下）下一个时间步骤富兰克林的垂直坐标将增加当前的速度。
- 面向南方：（在没有障碍物的情况下）下一个时间步骤富兰克林的垂直坐标将减少当前的速度。
- 面向东方：（在没有障碍物的情况下）下一个时间步骤富兰克林的水平坐标将增加当前的速度。
- 面向西方：（在没有障碍物的情况下）下一个时间步骤富兰克林的水平坐标将减少当前的速度。

### 8.4 时间与指令

对于时间限制 t，过程有 t 个时间步。富兰克林总是会接收到 t 条指令。一些指令可能会导致富兰克林的属性（方向和速度）发生变化。指令包含：

- 北方：可能会改变方向和速度。
- 南方：可能会改变方向和速度。
- 东方：可能会改变方向和速度。
- 西方：可能会改变方向和速度。
- 停车：保持方向并重置速度。✅
- 保持：保持方向和速度。✅

### 8.5 游戏规则

1. 富兰克林行动的规则：
    - 速度调整规则
        - 当命令方向与富兰克林当前方向匹配时，他的速度增加1。✅
        - 当命令方向与富兰克林当前方向成180度角时，他的速度减少1，但方向保持不变。✅
    - 方向调整规则
        - 当命令方向与富兰克林当前方向成90度角时，他的速度保持不变，但方向改变为命令方向。✅
    - 零速规则
        - 如果富兰克林的速度降到零，他的方向总是改变为命令方向，并且速度设为1。「考虑」
2. 属性优先级
    - 富兰克林的属性变化优先于坐标变化。他首先接收可能改变其属性（速度或方向）的指令，然后按照当前方向和速度移动。「考虑」
3. 障碍物与边界规则：
    - 当富兰克林在路上遇到警方设置的障碍物时，他不能驶过。这些障碍物使富兰克林在障碍物周围保持一定距离，并将他的速度改为0。✅
    - 富兰克林不能越过地图的边界。如果他到达或试图越过边界，他的速度将变为0。✅
4. 驾驶结束
    - 富兰克林的驾驶在经过指定数量的时间步后结束（t 个时间步），或者当他的坐标与安全屋的坐标相同时结束。在后一种情况下，安全屋的坐标可以与富兰克林按指令后的新坐标相匹配，或位于富兰克林的旧坐标和新坐标之间的路径上。
    - 如果富兰克林的驾驶结束，他将忽略所有后续指令。

### 8.6 输入格式

输入包含 5 行。

第一行包含三个正整数n、m和t，代表映射矩阵的大小和时间限制，其中n是水平方向的长度，m是垂直方向的长度。整数之间用一个空格分隔。原点坐标为(0, 0)。

第二行是形式为(x, y)的一个坐标，这是安全屋的坐标。

第三行是形式为(x, y)的一个坐标，这是富兰克林的初始坐标。

第四行是k个形式为(x, y)的坐标。这些坐标是障碍物的坐标。如果没有障碍物，输入为(−1, −1)。

第五行是一系列富兰克林的动作，包括 t 个大写字母：分别代表北、东、南、西、停车和保持的N、E、S、W、P和K。

### 8.7 输出格式

输出仅包含一个整数，表示富兰克林最终坐标与安全屋之间的曼哈顿距离。

### 8.8 测试

#### 测试1

示例输入 1：

```python
3 1 8 
(0,2) 
(0,0)
(-1, -1) 
EEEEKKKK
```

示例输出 1：

```python
0
```

#### 测试2

示例输入 2：

```python
3 3 4
(2,2) 
(0,0) 
(1,1)
ENEN
```

示例输出 2：

```python
1
```

#### 测试3

示例输入 3：

```python
3 3 10 
(2,2)
(0,0) 
(1,1)
EKNKPKEEPP
```

示例输出 3：

```python
0
```



### 8.8 数据约束

要解决这个问题，您必须考虑很多约束并彻底阅读问题描述。不过，有一些测试案例较为简单。具体的测试案例如下：

对于第1和第2个测试案例，即1.in和2.in：

- 游戏地图是单行的，即车辆不能垂直移动。
- 您可以简单地忽略所有要求您向N/S移动的指令。
- 注意，汽车仍然可以面朝北方或南方。这可能会影响它的速度。

对于第1-4个测试案例，即1.in, 2.in, 3.in和4.in，

- 没有给出障碍物；
- 您可以假设车辆不会撞到障碍物；
- 但是，如果车辆撞到墙壁，要小心处理！

对于另外20%的数据，即5.in和6.in，

- 它们是边界案例；
- 如果您在这两个测试案例上得到错误答案，请仔细检查您的代码，看看它在特殊情况下是否正确工作。

对于所有测试案例，$1 \leq n$、$m \leq 64$；$1 \leq t \leq 32$；设$o$为$\frac{1}{2}(m + n)$，则$1 \leq k \leq o \log o$。

### 提示

- 在编写任何代码之前，请确保您已经理解了上面的每一句话！
- 请注意原点坐标是(0, 0)。
- 请注意道路上有一些由警方设置的障碍物。当富兰克林遇到这些障碍时，他不能驶过它们。
- 请注意富兰克林不能越过地图边界。
- 您不需要弄清楚为什么k的约束是这样的。































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
