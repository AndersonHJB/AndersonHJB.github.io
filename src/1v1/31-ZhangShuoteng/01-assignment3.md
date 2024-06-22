---
title: assignment3
date: 2023-03-27 23:52:48
icon: python
author: AI悦创
isOriginal: true
category: 
    - THE UNIVERSITY OF TORONTO – MISSISSAUGA
tag:
    - THE UNIVERSITY OF TORONTO – MISSISSAUGA
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

**Please read this document very carefully. Follow instructions exactly. If you have any questions please post them on the A3 channel.**

> 请仔细阅读这份文件。严格按照指示做。如果您有任何问题，请在 A3 频道留言。

**This assignment is due April 9th, by 11:59pm**

> 这个作业要在4月9日晚上11:59之前交

Imagine you work for a social media company named ‘Chirper.’ On this social media platform users have profiles and publish relatively short text messages for other users to read, like, and/or dislike; these messages are referred to as chirps. You are tasked with implementing functions which parse and manipulate the data of this social network platform. You are given a file, assignment3.py, with five incomplete functions. For this assignment, you are required to complete these func- tions. A description regarding the intended behaviour of these functions follows.

> 想象一下，你在一家名为“Chirper”的社交媒体公司工作。“在这个社交媒体平台上，用户有个人资料，并发布相对较短的短信，供其他用户**阅读**、**点赞**或**不喜欢**;这些信息被称为啁啾。
>
> 你的任务是实现解析和操作这个社交网络平台的数据的函数。给您一个文件assignment3.py，其中有5个不完整的函数。对于这个作业，你需要完成这些功能。下面是关于这些函数的预期行为的描述。

Note: One potential difficulty of this assignment is to realize how the data is stored and what it represents. Pay close attention to the input and returns types of each function.

> 注意:这个作业的一个潜在困难是认识到数据是如何存储的以及它代表什么。密切注意每个函数的输入和返回类型。

To give you a better idea to how the social platform works, here are some summary points and definitions.

> 为了让你更好地了解社交平台是如何工作的，这里有一些总结点和定义。

1. A chirp is string (like a message). A chirp may also have tags associated with it which users can add. These tags have `%`’s in front of them, do not include white space or other `%`’s in them.

> chirp是字符串(就像消息一样)。一个chirp也可以有与它相关的标签，用户可以添加这些标签。这些标签前面有`%` ' s，不包括空白或其他`%` ' s。

For example, a chirp may be: ‘Nothing on the midterm was taught in lecture! `%`CS1MD3 `%`Unfair `%S`houldHaveGoneToWestern’

> 例如，唧唧喳喳可能是:“课上什么都没教!”不公平，我们应该去西方

Valid tags are: `%`2EZ, `%`my cute cat, `%`EarnDat`$$`, etc.

> 有效的标签是:%2EZ， %my cute cat， %EarnDat$$，等等。

Invalid tags are: `%`my cute cat, `%`The99`%`, my tag, etc.

> 无效标签有:`%`my cute cat， `%`The99`%`， my tag，等等。

2. Each Chirper user has a set of profiles they follow, and a set of profiles which follow them. If User 1 follows User 2, it does not necessarily mean User 2 follows User 1.

> 每个Chirper用户都有一组他们关注的概要文件，以及一组关注他们的概要文件。如果用户1跟随用户2，并不一定意味着用户2跟随用户1。

3. A profiles dictionary is of the type Dict[int, Tuple[str, List[int], List[int]]]; profiles dictionary is used as a shorthand for this type in the function descriptions later in this document. The keys of a profiles dictionary are unique integers representing user id numbers. The profiles dictionary values contain the profile information corresponding to the specific user id number given as the key. The values are Tuples, where the first element of the list is the corresponding user name, the second element is a list of user ids representing the user’s followers (the user id given as the key), and the third element is a list of user ids that the user in question is following.

> 一个配置文件字典的类型为 `Dict[int, Tuple[str, List[int], List[int]]]`；在本文档后面的函数描述中，配置文件字典用作这种类型的简写。配置文件字典的键是表示用户ID号的唯一整数。配置文件字典的值包含与作为键给出的特定用户ID号对应的配置文件信息。这些值是元组，其中列表的第一个元素是相应的用户名，第二个元素是一个用户ID列表，表示用户的关注者（作为键给出的用户ID），第三个元素是一个用户ID列表，表示该用户关注的用户。
>
> `{用户 ID: (用户名,粉丝,关注)}`

假设我们有一个简单的配置文件字典，如下所示：

```python
profiles_dictionary = {
    1: ("张三", [2, 3], [2]),
    2: ("李四", [1], [1, 3]),
    3: ("王五", [1], [2])
}
```

在这个配置文件字典中，用中文表示每个位置的数据：

- 键：用户ID号
    - 1：张三的用户ID号
    - 2：李四的用户ID号
    - 3：王五的用户ID号
- 值：包含三个元素的元组
    - 第一个元素（字符串）：用户名
        - "张三"：张三的用户名
        - "李四"：李四的用户名
        - "王五"：王五的用户名
    - 第二个元素（整数列表）：关注者的用户ID列表
        - [2, 3]：关注张三的用户ID列表（李四和王五）
        - [1]：关注李四的用户ID列表（张三）
        - [1]：关注王五的用户ID列表（张三）
    - 第三个元素（整数列表）：该用户关注的其他用户的ID列表
        - [2]：张三关注的用户ID列表（李四）
        - [1, 3]：李四关注的用户ID列表（张三和王五）
        - [2]：王五关注的用户ID列表（李四）

4. A chirp dictionary is of the type `Dict[int, Tuple[int, str, List[str], List[int], List[int]]]`; chirp dictionary is used as a shorthand for this type in the function descrip- tions later in this document. The keys of a chirp dictionary are unique integers representing chirp id numbers. The chirp dictionary values contain the chirp information corresponding to the specific chirp id number given as the key. The values are Tuples. The first element of the list is the user id chirp’s author. The second element is the chirp itself. The third element is a list of tags associated with the chirp. The forth element is a list of user ids which liked the chirp. And the fifth element is a list of user ids which disliked the chirp.

> 一个 chirp 字典的类型为 `Dict[int, Tuple[int, str, List[str], List[int], List[int]]]`；
>
> 在本文档后面的函数描述中，chirp 字典用作这种类型的简写。
>
> chirp 字典的键是表示 chirp ID 号的唯一整数。chirp 字典的值包含与作为键给出的特定 chirp ID 号对应的 chirp 信息。
>
> 这些值是元组。列表的第一个元素是 chirp 作者的用户 ID。第二个元素是chirp本身。第三个元素是与chirp关联的标签列表。第四个元素是喜欢chirp的用户ID列表。第五个元素是不喜欢chirp的用户ID列表。
>
> `{chirp ID 号: (chirp 作者的用户 ID, chirp 内容, 与 chirp 关联的标签列表, 喜欢 chirp 的用户 ID 列表, 不喜欢 chirp 的用户ID列表)}`

假设我们有一个简单的 chirp 字典，如下所示：

```python
chirp_dictionary = {
    101: (1, "今天天气真好！", ["晴天", "心情好"], [2], [3]),
    102: (2, "早上好！", ["问候"], [1, 3], []),
    103: (3, "好想吃火锅！", ["美食", "火锅"], [1], [2])
}
```

在这个chirp字典中，用中文表示每个位置的数据：

- 键：chirp ID号
    - 101：第一条chirp的ID号
    - 102：第二条chirp的ID号
    - 103：第三条chirp的ID号
- 值：包含五个元素的元组
    - 第一个元素（整数）：chirp作者的用户ID
        - 1：第一条chirp作者的用户ID（张三）
        - 2：第二条chirp作者的用户ID（李四）
        - 3：第三条chirp作者的用户ID（王五）
    - 第二个元素（字符串）：chirp内容
        - "今天天气真好！"：第一条chirp的内容
        - "早上好！"：第二条chirp的内容
        - "好想吃火锅！"：第三条chirp的内容
    - 第三个元素（字符串列表）：与chirp关联的标签列表
        - ["晴天", "心情好"]：第一条chirp的标签列表
        - ["问候"]：第二条chirp的标签列表
        - ["美食", "火锅"]：第三条chirp的标签列表
    - 第四个元素（整数列表）：喜欢chirp的用户ID列表
        - [2]：喜欢第一条chirp的用户ID列表（李四）
        - [1, 3]：喜欢第二条chirp的用户ID列表（张三和王五）
        - [1]：喜欢第三条chirp的用户ID列表（张三）
    - 第五个元素（整数列表）：不喜欢chirp的用户ID列表
        - [3]：不喜欢第一条chirp的用户ID列表（王五）
        - []：不喜欢第二条chirp的用户ID列表（无）
        - [2]：不喜欢第三条chirp的用户ID列表（李四）





## Functions

You are required to implement all of the following functions. Pay attention to parameters of each function. For example, if it is said an input will be a Dict[int, str], you can trust your function will never be tested on input which isn’t a Dict[int, str]. For further examples of how these functions are intended to operate, view the docstrings of the starter code for this assignment.

> 你需要实现以下所有函数。请注意每个函数的参数。例如，如果一个输入是 `Dict[int, str]`，你可以确信你的函数永远不会在非Dict[int, str]的输入上进行测试。要了解这些函数的预期操作方式的更多示例，请查看此作业的起始代码的文档字符串。

1. `create_profile_dictionary(str)` -> profiles_dictionary
     The input parameter is the name of a text file containing all of Chirper’s profile information. You may assume the file is in the same directory as assignment3.py. The file is a series of profile data, where data for each profile has the following format:

> `create_profile_dictionary(str) -> profiles_dictionary` 输入参数是包含所有 Chirper 个人资料信息的文本文件的名称。您可以假设该文件与 `assignment3.py` 位于同一目录。该文件是一系列个人资料数据，每个个人资料的数据格式如下：

```python
USERID
     USERNAME
     FOLLOWER1, FOLLOWER2, ..., FOLLOWERn
     FOLLOWED1, FOLLOWED2, ..., FOLLOWEDm
```

```python
用户ID
	用户名
	关注者1，关注者2，...，关注者n
	被关注者1，被关注者2，...，被关注者m
```

where USERID, FOLLOWERi, and FOLLOWEDj are all unique numbers. The third line represents the users which follow USERNAME, and the forth line represents the users which USERNAME fol- lows. In the text file there is always a blank-line between different profiles. See profiles.txt as an example.

> 其中 USERID、FOLLOWERi 和 FOLLOWEDj 都是唯一的数字。
>
> 第三行表示关注 USERNAME 的用户，第四行表示 USERNAME 关注的用户。在文本文件中，不同个人资料之间总是有一个空行。请参考 `profiles.txt` 作为示例。

Based off this data, the function constructs a profiles_dictionary where the orders of the ids representing followers and users follows, are the same orders as which they appear in the text file. See the doctstring and profiles.txt for further clarification. Assume that the given text file is perfect and that there are no formatting errors.

> 根据这些数据，函数构建一个 profiles_dictionary，其中表示关注者和被关注者的 ID 的顺序与文本文件中出现的顺序相同。请参阅 docstring 和 profiles.txt 以获得更多说明。假设给定的文本文件是完美的，没有格式错误。

```python
from typing import List, Dict, Tuple


def create_profile_dictionary(file_name: str) -> Dict[int, Tuple[str, List[int], List[int]]]:
    """
    在工作目录中打开文件 "file_name" 并将内容读入
    Opens the file "file_name" in working directory and reads the content into a
    根据第2页函数1定义的配置文件字典。
    profile dictionary as defined on Page 2 Functions 1.
	
	注意，为了方便人类阅读，已添加了一些空格。
    Note, some spacing has been added for human readability.

    
    >>> create_profile_dictionary("profiles.txt")
    {100: ('Mulan', [300, 500], [200, 400]), 
    200: ('Ariel', [100, 500], [500]), 
    300: ('Jasmine', [500], [500, 100]), 
    400: ('Elsa', [100, 500], []), 
    500: ('Belle', [200, 300], [100, 200, 300, 400])}
    """
    # Your code goes here
```

2. create_chirp_dictionary(str) -> chirp_dictionary

    The input parameter is the name of a text file containing all of Chirper’s message information. You may assume the file is in the same directory as the as assignment3.py. The file is a series of message data, where data for each message has the following format:

    > create_chirp_dictionary(str) -> chirp_dictionary
    >
    > 输入参数是包含所有 Chirper 消息信息的文本文件的名称。您可以假设该文件与 assignment3.py 位于同一目录。该文件是一系列消息数据，每个消息的数据格式如下：

```python
CHIRPID
     USERID
     MESSAGE
     TAG1, TAG2, ..., TAGk
     LIKED1, LIKED2, ..., LIKEDn
     DISLIKED1, DISLIKED2, ..., DISLIKEDm
```

```python
CHIRPID
	用户ID
	消息
	标签1, 标签2, ..., 标签k
	点赞用户1, 点赞用户2, ..., 点赞用户n
	不喜欢用户1, 不喜欢用户2, ..., 不喜欢用户m
```

where CHIRPID, USERID, LIKEDi, and DISLIKEDj are all unique numbers. USERID is the id of the user which made the chirp. The third line is the chirp itself. The forth line represents a list of tags associated with said chirp. The fifth line is a sequence of user ids which liked the chirp. The sixth line is a sequence of user ids which disliked the chirp. In the text file there is always a blank-line between different chirps. See chirps.txt as an example.

> 其中，CHIRPID、USERID、LIKEDi和DISLIKEDj都是唯一的数字。USERID是发出chirp的用户的ID。第三行是chirp本身。第四行表示与该chirp关联的标签列表。第五行是喜欢chirp的用户ID序列。第六行是不喜欢chirp的用户ID序列。在文本文件中，不同chirp之间总是有一个空行。请参考chirps.txt作为示例。

Based off this data, the function constructs a profiles_dictionary where the orders of the tags and ids representing likes and dislikes, are in the same orders in which they appear in the text file. If there are no tags associated with a chirp, the empty string is associated with it instead. See the doctstring and chirps.txt for further clarification. Assume that the given text file is perfect and that there are no formatting errors.

> 根据这些数据，该函数构建了一个profiles_dictionary，其中表示喜欢和不喜欢的标签和ID的顺序与文本文件中出现的顺序相同。如果一个chirp没有关联的标签，则关联空字符串。请参阅docstring和chirps.txt以获得更多说明。假设给定的文本文件是完美的，没有格式错误。















```python
from typing import List, Dict, Tuple


def create_profile_dictionary(file_name: str) -> Dict[int, Tuple[str, List[int], List[int]]]:
    """
    Opens the file "file_name" in working directory and reads the content into a
    profile dictionary as defined on Page 2 Functions 1.

    Note, some spacing has been added for human readability.
    
    >>> create_profile_dictionary("profiles.txt")
    {100: ('Mulan', [300, 500], [200, 400]), 
    200: ('Ariel', [100, 500], [500]), 
    300: ('Jasmine', [500], [500, 100]), 
    400: ('Elsa', [100, 500], []), 
    500: ('Belle', [200, 300], [100, 200, 300, 400])}
    """
    # Your code goes here


def create_chirp_dictionary(file_name: str) -> Dict[int, Tuple[int, str, List[str], List[int], List[int]]]:
    """
    Opens the file "file_name" in working directory and reads the content into a
    chirp dictionary as defined on Page 2 Functions 2.

    Note, some spacing has been added for human readability.
    
    >>> create_chirp_dictionary("chirps.txt")
    {100000: (
        400, 
        'Does not want to build a %SnowMan %StopAsking',
        ['SnowMan', 'StopAsking'], 
        [100, 200, 300], 
        [400, 500]), 
    100001: (
        200, 
        'Make the ocean great again.', 
        [''], 
        [], 
        [400]), 
    100002: (
        500, 
        "Help I'm being held captive by a beast!  %OhNoes", 
        ['OhNoes'], 
        [400], 
        [100, 200, 300]), 
    100003: (
        500, 
        "Actually nm. This isn't so bad lolz :P %StockholmeSyndrome", 
        ['StockholmeSyndrome'], 
        [400, 100], 
        []), 
    100004: (
        300, 
        'If some random dude offers to %ShowYouTheWorld do yourself a favour and %JustSayNo.', 
        ['ShowYouTheWorld', 'JustSayNo'], 
        [500, 200], 
        [400]), 
    100005: (
        400, 
        'LOLZ BELLE.  %StockholmeSyndrome  %SnowMan', 
        ['StockholmeSyndrome', 'SnowMan'], 
        [], 
        [200, 300, 100, 500])}
    """
    # Your code goes here


def get_top_chirps(profile_dictionary: Dict[int, Tuple[str, List[int], List[int]]],
                   chirp_dictionary: Dict[int, Tuple[int, str, List[str], List[int], List[int]]], user_id: int) -> List[
    str]:
    """
    Returns a list of the most liked chirp for every user user_id follows.
    See Page 3 Function 3 of th .pdf.
    >>> profile_dictionary = create_profile_dictionary("profiles.txt")
    >>> chirp_dictionary   = create_chirp_dictionary("chirps.txt")
    >>> get_top_chirps(profile_dictionary, chirp_dictionary, 300)
    ["Actually nm. This isn't so bad lolz :P %StockholmeSyndrome"]
    >>> get_top_chirps( profiles, chirps, 500 )
    ['Make the ocean great again.', 
    'If some random dude offers to %ShowYouTheWorld do yourself a favour and %JustSayNo.', 
    'Does not want to build a %SnowMan %StopAsking']
    """
    # Your code goes here


def create_tag_dictionary(chirp_dictionary: Dict[int, Tuple[int, str, List[str], List[int], List[int]]]) -> Dict[
    str, Dict[int, List[str]]]:
    """
    Creates a dictionary that keys tags to tweets that contain them.

    Note, some spacing has been added for human readability.
    
    >>> chirp_dictionary = create_chirp_dictionary("chirps.txt")
    >>> create_tag_dictionary(chirp_dictionary)
    {'SnowMan': {
        400: ['Does not want to build a %SnowMan %StopAsking', 'LOLZ BELLE.  %StockholmeSyndrome  %SnowMan']}, 
    'StopAsking': {
        400: ['Does not want to build a %SnowMan %StopAsking']}, 
    '': {
        200: ['Make the ocean great again.']}, 
    'OhNoes': {
        500: ["Help I'm being held captive by a beast!  %OhNoes"]}, 
    'StockholmeSyndrome': {
        500: ["Actually nm. This isn't so bad lolz :P %StockholmeSyndrome"], 
        400: ['LOLZ BELLE.  %StockholmeSyndrome  %SnowMan']}, 
    'ShowYouTheWorld': {
        300: ['If some random dude offers to %ShowYouTheWorld do yourself a favour and %JustSayNo.']}, 
    'JustSayNo': {
        300: ['If some random dude offers to %ShowYouTheWorld do yourself a favour and %JustSayNo.']}}
    """
    # Your code goes here


def get_tagged_chirps(chirp_dictionary: Dict[int, Tuple[int, str, List[str], List[int], List[int]]], tag: str) -> List[
    str]:
    """
    Returns a list of chirps containing specified tag.
    >>> chirp_dictionary = create_chirp_dictionary("chirps.txt")
    >>> get_tagged_chirps(chirp_dictionary, "SnowMan")
    ['Does not want to build a %SnowMan %StopAsking',
    'LOLZ BELLE.  %StockholmeSyndrome  %SnowMan']
    """
    # Your code goes here
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
