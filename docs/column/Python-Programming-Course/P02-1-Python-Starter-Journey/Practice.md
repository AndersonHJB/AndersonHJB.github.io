---
title: Python 练习题
icon: yongyan
date: 2024-09-20 20:43:13
author: AI悦创
isOriginal: true
sticky: false
star: false
article: true
timeline: true
navbar: true
sidebarIcon: true

comment: true

backToTop: true
toc: true
watermark: true
---

## 1. 函数题目

:::: tabs

@tab 0. 统计单词个数

**题目描述：**

定义一个函数 `count_words()`，提示用户输入一句英文句子（使用 `input()` 函数），然后输出这句话中单词的数量。
 （单词之间以空格分隔）

**示例：**

```python
请输入一句英文句子: Python is fun to learn
这句话包含 5 个单词。
```

```python
def count_words():
    sentence = input("请输入一句英文句子: ")
    words = sentence.strip().split()
    print(f"这句话包含 {len(words)} 个单词。")

```



@tab 0-1 数字统计器

**题目描述：**

定义一个函数 `digit_counter()`，提示用户输入一个正整数（使用 `input()`），然后统计并打印其中每个数字出现的次数。

**示例：**

```python
请输入一个正整数：1122331
数字 1 出现了 3 次
数字 2 出现了 2 次
数字 3 出现了 2 次
```

```python
def digit_counter():
    number = input("请输入一个正整数：")
    digit_count = {}
    for digit in number:
        if digit.isdigit():
            digit_count[digit] = digit_count.get(digit, 0) + 1
    for digit in sorted(digit_count.keys()):
        print(f"数字 {digit} 出现了 {digit_count[digit]} 次")
```





@tab 1. 密码生成器游戏

**描述**：创建一个类似于密码生成器的游戏，要求用户根据一系列动态生成的规则来创建密码。规则可以包括：密码长度、特定字符的使用、必须包含的字母和数字、特殊符号等。游戏中的规则应在每一轮随机改变，让用户必须在规定时间内生成符合规则的密码。

**要求**：
- 随机生成规则（至少 5 条规则，且每次游戏规则不同）
- 如果用户生成的密码不符合规则，返回错误并提示重新生成
- 允许用户输入多次直到成功为止

::: details Code 1

```python
import random
import string

# 随机生成规则
def generate_rules():
    rules = []
    rules.append(f"密码长度至少为 {random.randint(8, 12)} 个字符")
    rules.append(f"密码必须包含至少 {random.randint(1, 3)} 个大写字母")
    rules.append(f"密码必须包含至少 {random.randint(1, 3)} 个数字")
    rules.append(f"密码必须包含至少 {random.randint(1, 2)} 个特殊符号")
    rules.append(f"密码不能包含空格")
    return rules

# 检查密码是否符合规则
def check_password(password, rules):
    if len(password) < int(rules[0].split(" ")[3]):
        return False, "密码长度不够"
    if sum(1 for c in password if c.isupper()) < int(rules[1].split(" ")[4]):
        return False, "大写字母不足"
    if sum(1 for c in password if c.isdigit()) < int(rules[2].split(" ")[4]):
        return False, "数字不足"
    if sum(1 for c in password if c in string.punctuation) < int(rules[3].split(" ")[4]):
        return False, "特殊符号不足"
    if ' ' in password:
        return False, "密码不能包含空格"
    return True, "密码符合规则"

# 主程序
def password_game():
    rules = generate_rules()
    print("当前密码规则如下：")
    for rule in rules:
        print(rule)

    while True:
        password = input("请输入您的密码：")
        valid, msg = check_password(password, rules)
        if valid:
            print("密码创建成功！")
            break
        else:
            print(f"密码不符合规则: {msg}")

password_game()
```

:::

::: details Code 2

```python
import random
import string

def generate_rules():
    rules = [
        "密码必须包含至少一个数字。",
        "密码必须包含至少一个大写字母。",
        "密码长度必须大于8个字符。",
        "密码必须包含至少一个特殊字符 (@, #, $, %, &)。",
        "密码不能包含空格。"
    ]
    return random.sample(rules, 3)

def check_password(password, rules):
    checks = [
        any(char.isdigit() for char in password),
        any(char.isupper() for char in password),
        len(password) > 8,
        any(char in "@#$%&" for char in password),
        ' ' not in password
    ]
    for i, rule in enumerate(rules):
        if not checks[i]:
            return False, rule
    return True, ""

def password_game():
    rules = generate_rules()
    print("生成的密码规则如下：")
    for rule in rules:
        print(f"- {rule}")
    
    while True:
        password = input("请输入你的密码：")
        valid, rule = check_password(password, rules)
        if valid:
            print("密码符合所有规则！游戏成功！")
            break
        else:
            print(f"密码不符合规则：{rule}")

password_game()
```

:::

@tab 2. 神秘解码器

**描述**：设计一个程序，可以将一段神秘的加密信息解码。你需要提供两种解码方式：
- **凯撒密码**：每个字母向前移动固定的位数
- **摩斯密码**：根据摩斯密码表将一段摩斯码翻译成英文

**要求**：
- 用户输入一段加密的信息和选择的解码方式（凯撒密码或摩斯密码）
- 支持解码后的明文输出
- 提供一个加密器功能，让用户输入明文后加密成凯撒密码或摩斯密码

::: details Code 1

```python
# 凯撒密码解码
def caesar_cipher(text, shift):
    decrypted_text = ""
    for char in text:
        if char.isalpha():
            shift_base = 65 if char.isupper() else 97
            decrypted_text += chr((ord(char) - shift_base - shift) % 26 + shift_base)
        else:
            decrypted_text += char
    return decrypted_text

# 摩斯密码解码
MORSE_CODE_DICT = { 
    '.-':'A', '-...':'B', '-.-.':'C', '-..':'D', '.':'E', '..-.':'F', '--.':'G',
    '....':'H', '..':'I', '.---':'J', '-.-':'K', '.-..':'L', '--':'M', '-.':'N',
    '---':'O', '.--.':'P', '--.-':'Q', '.-.':'R', '...':'S', '-':'T', '..-':'U',
    '...-':'V', '.--':'W', '-..-':'X', '-.--':'Y', '--..':'Z'
}

def morse_decoder(morse_code):
    words = morse_code.split("   ")
    decoded_message = []
    for word in words:
        decoded_word = ''.join(MORSE_CODE_DICT.get(char, '') for char in word.split())
        decoded_message.append(decoded_word)
    return ' '.join(decoded_message)

# 主程序
def decoder_game():
    option = input("选择解码方式 (1: 凯撒密码, 2: 摩斯密码): ")
    if option == '1':
        text = input("请输入凯撒密码加密的文本: ")
        shift = int(input("请输入位移数: "))
        print("解码结果:", caesar_cipher(text, shift))
    elif option == '2':
        morse_code = input("请输入摩斯密码 (用空格分隔字母，用三个空格分隔单词): ")
        print("解码结果:", morse_decoder(morse_code))
    else:
        print("无效选项")

decoder_game()
```

:::

::: details Code 2

```python
MORSE_CODE_DICT = { 'A':'.-', 'B':'-...', 'C':'-.-.', 'D':'-..', 'E':'.', 'F':'..-.',
                    'G':'--.', 'H':'....', 'I':'..', 'J':'.---', 'K':'-.-', 'L':'.-..',
                    'M':'--', 'N':'-.', 'O':'---', 'P':'.--.', 'Q':'--.-', 'R':'.-.',
                    'S':'...', 'T':'-', 'U':'..-', 'V':'...-', 'W':'.--', 'X':'-..-',
                    'Y':'-.--', 'Z':'--..', '1':'.----', '2':'..---', '3':'...--',
                    '4':'....-', '5':'.....', '6':'-....', '7':'--...', '8':'---..',
                    '9':'----.', '0':'-----'}

def caesar_cipher(text, shift):
    result = ""
    for i in range(len(text)):
        char = text[i]
        if char.isalpha():
            shift_base = 65 if char.isupper() else 97
            result += chr((ord(char) - shift_base + shift) % 26 + shift_base)
        else:
            result += char
    return result

def morse_decoder(morse_code):
    morse_code += ' '
    decipher = ''
    citext = ''
    for letter in morse_code:
        if letter != ' ':
            i = 0
            citext += letter
        else:
            i += 1
            if i == 2:
                decipher += ' '
            else:
                decipher += list(MORSE_CODE_DICT.keys())[list(MORSE_CODE_DICT.values()).index(citext)]
                citext = ''
    return decipher

def decoder_game():
    print("选择解码方式：1. 凯撒密码 2. 摩斯密码")
    choice = input("请输入1或2: ")
    if choice == '1':
        text = input("输入加密的凯撒密码: ")
        shift = int(input("输入位移数: "))
        print("解密后的文本:", caesar_cipher(text, -shift))
    elif choice == '2':
        morse_code = input("输入摩斯密码 (用空格分隔): ")
        print("解密后的文本:", morse_decoder(morse_code))
    else:
        print("无效选择！")

decoder_game()
```

:::

@tab 3. 虚拟烘焙店管理系统

**描述**：设计一个虚拟的烘焙店管理系统，用户可以在店铺中选择各种虚拟甜点并进行购买。店铺中的库存有限，且每个商品有不同的库存和价格。系统需要根据用户的购买选择进行库存调整。

**要求**：
- 菜单展示不同甜点及其价格和库存
- 用户选择想要购买的甜点，程序更新库存
- 当库存为 0 时，该甜点将不能再购买
- 用户结算时显示总金额及剩余库存

::: details Code 1

```python
class Bakery:
    def __init__(self):
        self.menu = {
            "蛋糕": {"price": 50, "stock": 10},
            "饼干": {"price": 20, "stock": 30},
            "面包": {"price": 15, "stock": 20},
        }
    
    def show_menu(self):
        print("欢迎来到虚拟烘焙店！以下是菜单：")
        for item, details in self.menu.items():
            print(f"{item}: 价格 {details['price']} 元，库存 {details['stock']}")

    def buy(self, item, quantity):
        if item in self.menu and self.menu[item]['stock'] >= quantity:
            total_price = self.menu[item]['price'] * quantity
            self.menu[item]['stock'] -= quantity
            print(f"您购买了 {quantity} 个 {item}，总价格为 {total_price} 元。")
        else:
            print("库存不足或无此商品！")

    def checkout(self):
        print("购买结束，以下是剩余库存：")
        self.show_menu()

# 主程序
bakery = Bakery()
bakery.show_menu()
while True:
    item = input("请输入您想购买的商品（输入 '退出' 结束购买）: ")
    if item == '退出':
        break
    quantity = int(input("请输入购买数量: "))
    bakery.buy(item, quantity)
bakery.checkout()
```



:::

::: details Code 2

```python
bakery_inventory = {
    '蛋糕': {'price': 30, 'stock': 10},
    '曲奇': {'price': 10, 'stock': 20},
    '甜甜圈': {'price': 15, 'stock': 15}
}

def display_menu():
    print("欢迎光临虚拟烘焙店！")
    print("菜单:")
    for item, details in bakery_inventory.items():
        print(f"{item}: {details['price']}元 (库存: {details['stock']})")

def purchase_item():
    total = 0
    while True:
        display_menu()
        choice = input("你想买什么？(输入'结算'完成购买): ")
        if choice == '结算':
            print(f"总金额: {total}元。谢谢惠顾！")
            break
        elif choice in bakery_inventory:
            if bakery_inventory[choice]['stock'] > 0:
                total += bakery_inventory[choice]['price']
                bakery_inventory[choice]['stock'] -= 1
                print(f"你购买了 {choice}。")
            else:
                print(f"{choice} 已售罄！")
        else:
            print("无效选择，请重新输入。")

purchase_item()
```



:::



@tab 4. 地理知识问答

**描述**：创建一个地理知识问答游戏，程序随机选择世界上任意一个国家，用户需要猜出这个国家的首都。每次回答错误，程序可以给出一个提示，例如该国的大陆、人口数量或邻国。

**要求**：
- 随机从世界各国中选取一个国家
- 提供最多 3 次机会给用户回答
- 提示信息每次回答错误后逐步提供
- 用户回答正确后显示总共用时

::: details Code 1

```python
import random

countries = {
    "中国": "北京",
    "美国": "华盛顿",
    "日本": "东京",
    "英国": "伦敦",
    "法国": "巴黎",
    # 可自行扩展更多国家
}

def geography_quiz():
    country, capital = random.choice(list(countries.items()))
    attempts = 3
    print(f"猜一猜这个国家的首都是哪里：{country}")
    
    while attempts > 0:
        guess = input("请输入首都名称：")
        if guess == capital:
            print("恭喜你，回答正确！")
            break
        else:
            attempts -= 1
            print(f"回答错误！你还有 {attempts} 次机会。")

    if attempts == 0:
        print(f"很遗憾，你的机会用完了。正确答案是：{capital}")

geography_quiz()
```



:::

::: details Code 2

```python
import random

countries = {
    "中国": "北京",
    "日本": "东京",
    "美国": "华盛顿",
    "英国": "伦敦",
    "法国": "巴黎"
}

hints = {
    "中国": ["亚洲", "人口最多的国家"],
    "日本": ["亚洲", "岛国"],
    "美国": ["北美洲", "发达国家"],
    "英国": ["欧洲", "老牌帝国"],
    "法国": ["欧洲", "浪漫之都"]
}

def geography_quiz():
    country = random.choice(list(countries.keys()))
    capital = countries[country]
    print(f"猜猜哪个国家的首都是 {capital}?")
    for i in range(3):
        answer = input("请输入答案: ")
        if answer == country:
            print("恭喜你，答对了！")
            return
        else:
            print(f"提示: {hints[country][i]}")
    print(f"很遗憾，你没有答对。正确答案是 {country}。")

geography_quiz()
```



:::

@tab 5. 迷宫生成与解谜

**描述**：创建一个迷宫生成器，程序会随机生成一个 `10x10` 的迷宫，用户需要通过编程控制角色（通过输入上下左右指令）来从起点到达终点。迷宫中的部分位置可以有障碍物，用户需要找到一条通路。

**要求**：

- 生成一个 `10x10` 的迷宫，包含起点和终点
- 随机放置障碍物，确保迷宫有至少一条通路
- 用户输入上下左右指令控制角色移动
- 当用户到达终点时，提示“成功解谜”

::: details Code 1

```python
import random

# 迷宫生成器
def generate_maze(size):
    maze = [[' ' for _ in range(size)] for _ in range(size)]
    # 随机生成障碍物
    for i in range(size):
        for j in range(size):
            if random.random() < 0.2 and (i, j) not in [(0, 0), (size-1, size-1)]:
                maze[i][j] = '#'
    return maze

# 显示迷宫
def display_maze(maze):
    for row in maze:
        print(''.join(row))

# 玩家移动
def move_player(maze, position, direction):
    x, y = position
    if direction == 'w' and x > 0 and maze[x-1][y] != '#':
        return x-1, y
    elif direction == 's' and x < len(maze)-1 and maze[x+1][y] != '#':
        return x+1, y
    elif direction == 'a' and y > 0 and maze[x][y-1] != '#':
        return x, y-1
    elif direction == 'd' and y < len(maze[0])-1 and maze[x][y+1] != '#':
        return x, y+1
    return x, y

# 主程序
def maze_game():
    size = 10
    maze = generate_maze(size)
    player_pos = (0, 0)
    end_pos = (size-1, size-1)
    while player_pos != end_pos:
        display_maze(maze)
        print(f"当前坐标: {player_pos}")
        direction = input("输入方向 (w: 上, s: 下, a: 左, d: 右): ")
        new_pos = move_player(maze, player_pos, direction)
        if new_pos != player_pos:
            maze[player_pos[0]][player_pos[1]] = ' '
            player_pos = new_pos
            maze[player_pos[0]][player_pos[1]] = 'P'
    print("恭喜你，成功走出迷宫！")

maze_game()
```



:::

::: details Code 2

```python
import random

def generate_maze(size=10):
    maze = [[' ' for _ in range(size)] for _ in range(size)]
    for i in range(size):
        for j in range(size):
            if random.random() < 0.2 and (i, j) not in [(0, 0), (size-1, size-1)]:
                maze[i][j] = '#'
    maze[0][0] = 'S'
    maze[size-1][size-1] = 'E'
    return maze

def display_maze(maze):
    for row in maze:
        print(''.join(row))

def move_player(maze, pos, move):
    x, y = pos
    if move == '上' and x > 0 and maze[x-1][y] != '#':
        return x-1, y
    elif move == '下' and x < len(maze)-1 and maze[x+1][y] != '#':
        return x+1, y
    elif move == '左' and y > 0 and maze[x][y-1] != '#':
        return x, y-1
    elif move == '右' and y < len(maze[0])-1 and maze[x][y+1] != '#':
        return x, y
    return pos

def maze_game():
    maze = generate_maze()
    pos = (0, 0)
    while pos != (9, 9):
        display_maze(maze)
        move = input("请输入移动方向 (上/下/左/右): ")
        pos = move_player(maze, pos, move)
        print(f"当前位置: {pos}")
    print("恭喜你，成功解谜！")

maze_game()
```



:::

::: details Code 3

```python
import random

# 生成迷宫
def generate_maze(size=10):
    maze = [[' ' for _ in range(size)] for _ in range(size)]
    for i in range(size):
        for j in range(size):
            if random.random() < 0.2 and (i, j) not in [(0, 0), (size-1, size-1)]:
                maze[i][j] = '#'
    maze[0][0] = 'S'  # 起点
    maze[size-1][size-1] = 'E'  # 终点
    return maze

# 打印迷宫
def display_maze(maze, player_pos):
    for i, row in enumerate(maze):
        for j, cell in enumerate(row):
            if (i, j) == player_pos:
                print('P', end='')  # 用 'P' 表示玩家
            else:
                print(cell, end='')
        print()

# 移动玩家
def move_player(maze, pos, move):
    x, y = pos
    if move == '上' and x > 0 and maze[x-1][y] != '#':
        return x-1, y
    elif move == '下' and x < len(maze)-1 and maze[x+1][y] != '#':
        return x+1, y
    elif move == '左' and y > 0 and maze[x][y-1] != '#':
        return x, y-1
    elif move == '右' and y < len(maze[0])-1 and maze[x][y+1] != '#':
        return x, y+1
    return pos

# 迷宫游戏主逻辑
def maze_game():
    size = 10
    maze = generate_maze(size)
    player_pos = (0, 0)  # 玩家初始位置为 (0, 0)
    
    while player_pos != (size-1, size-1):  # 目标是到达 (size-1, size-1)
        display_maze(maze, player_pos)  # 打印当前迷宫及玩家位置
        move = input("请输入移动方向 (上/下/左/右): ")
        player_pos = move_player(maze, player_pos, move)  # 更新玩家位置
        print(f"当前位置: {player_pos}")
    
    print("恭喜你，成功解谜！")

maze_game()
```



:::

::::

## 2. 类







## 3. 字典

:::: tabs

@tab Q1

**描述**：给定一个字典，其中键是商品的名字，值是商品的价格。编写一个程序，计算字典中所有商品的平均价格，并返回低于平均价格的商品的名称列表。

**示例输入**：

```python
products = {
    'Apple': 3.5,
    'Banana': 2.0,
    'Cherry': 5.0,
    'Date': 4.0
}
```

**示例输出**：

```python
['Banana', 'Date']
```

**答案：**

```python
def get_below_average_products(products):
    # 计算所有商品的平均价格
    average_price = sum(products.values()) / len(products)
    # 返回价格低于平均价格的商品名称列表
    return [name for name, price in products.items() if price < average_price]

# 示例
products = {
    'Apple': 3.5,
    'Banana': 2.0,
    'Cherry': 5.0,
    'Date': 4.0
}
print(get_below_average_products(products))  # 输出：['Banana', 'Date']
```



```python
def get_below_average_products(products):
    # 计算所有商品的平均价格
    average_price = sum(products.values()) / len(products)
    
    # 初始化一个空列表来存储低于平均价格的商品
    below_average = []
    
    # 遍历商品字典，找出价格低于平均价格的商品
    for name, price in products.items():
        if price < average_price:
            below_average.append(name)
            
    return below_average

# 示例
products = {
    'Apple': 3.5,
    'Banana': 2.0,
    'Cherry': 5.0,
    'Date': 4.0
}
print(get_below_average_products(products))  # 输出：['Banana', 'Date']
```

@tab Q2：题目 3

**描述**：给定两个字典，编写一个程序，将这两个字典合并成一个。如果同一个键在两个字典中都有，则它的值应为两个字典中的值相加。假设字典中的值都是整数。

**示例输入**：

```python
dict1 = {'a': 1, 'b': 2, 'c': 3}
dict2 = {'b': 3, 'c': 4, 'd': 5}
```

**示例输出**：

```python
{'a': 1, 'b': 5, 'c': 7, 'd': 5}
```

**答案：**

```python
def merge_dictionaries(dict1, dict2):
    # 创建合并后的字典副本
    merged_dict = dict1.copy()
    # 遍历第二个字典，将其键值对合并到第一个字典
    for key, value in dict2.items():
        if key in merged_dict:
            merged_dict[key] += value  # 如果键存在，合并值
        else:
            merged_dict[key] = value  # 如果键不存在，直接添加

    return merged_dict

# 示例
dict1 = {'a': 1, 'b': 2, 'c': 3}
dict2 = {'b': 3, 'c': 4, 'd': 5}
print(merge_dictionaries(dict1, dict2))  # 输出：{'a': 1, 'b': 5, 'c': 7, 'd': 5}
```





::::









## 4. 集合

:::: tabs

@tab Q1

**描述**：获取用户输入的一个字符串，输出字符串中出现的唯一字符的集合（即每个字符只出现一次）。

**示例输入**：

```python
string = "programming"
```

**示例输出**：

```python
{'p', 'o', 'a', 'i', 'n', 'g'}
```

**答案：**

```python
def unique_characters(string):
    # 创建一个空字典，用于记录字符出现的次数
    char_count = {}
    
    # 遍历字符串，统计每个字符的出现次数
    for char in string:
        char_count[char] = char_count.get(char, 0) + 1

    # 将出现次数为 1 的字符存入集合并返回
    return {char for char, count in char_count.items() if count == 1}

# 示例
string = "programming"
print(unique_characters(string))  # 输出：{'p', 'o', 'a', 'i', 'n', 'g'}
```





::::





## 5. 布尔型

:::: tabs

@tab Q1

1. （多选）以下哪些值可以被当作布尔值中的 False？

A. 0

B. None

C. 空序列

D. 空字典

2. **判断输出**：给定 `x = True` 和 `y = False`，表达式 `x and y` 的结果是什么？

> **判断输出**：给定 `x = True` 和 `y = False`，表达式 `x and y` 的结果是 `False`，因为 `and` 运算符要求两边的值都为 `True` 才返回 `True`。

1. **布尔运算**：如果 `a = 5`，`b = 3`，那么 `a > b` 和 `a == (b + 2)` 的结果是什么？
2. **逻辑表达式**：对于 `x = 10`，`y = 20`，表达式 `not (x > y or y > x)` 的结果是什么？
3. **组合逻辑**：给定 `a = True`，`b = False` 和 `c = True`，计算表达式 `(a and b) or (a and c)` 的结果。
4. **比较操作**：假设有 `list1 = [1, 2, 3]` 和 `list2 = [1, 2, 3]`，`list1 == list2` 和 `list1 is list2` 的结果是什么？
5. **布尔值转换**：使用 `bool()` 函数，`bool(0)`, `bool(0.0)`, `bool("")`, `bool("False")` 分别的结果是什么？
6. **优先级问题**：给定 `x = False`，`y = True` 和 `z = False`，计算表达式 `x or y and z` 的结果，并解释为什么。
7. **逻辑非操作**：对于 `flag = True`，`not flag` 的结果是什么？
8. **混合类型逻辑**：如果 `x = "hello"` 和 `y = ""`，那么 `bool(x) and bool(y)` 的结果是什么？
9. **条件表达式实践**：写一个表达式，使用三元运算符，如果 `age = 18`，返回 `"成年"`，否则返回 `"未成年"`。



1. **布尔运算**：如果 `a = 5`，`b = 3`，那么 `a > b` 的结果是 `True`，因为5大于3；`a == (b + 2)` 的结果也是 `True`，因为 `b + 2` 等于5，所以 `a` 等于 `b + 2`。

2. **逻辑表达式**：对于 `x = 10`，`y = 20`，表达式 `not (x > y or y > x)` 的结果是 `False`。因为 `y > x` 是 `True`，而 `not True` 是 `False`。

3. **组合逻辑**：给定 `a = True`，`b = False` 和 `c = True`，计算表达式 `(a and b) or (a and c)` 的结果是 `True`。因为 `a and c` 为 `True`，而 `or` 运算符只要其中一边为 `True`，结果就是 `True`。

4. **比较操作**：假设有 `list1 = [1, 2, 3]` 和 `list2 = [1, 2, 3]`，`list1 == list2` 的结果是 `True`，因为它们的内容相同；`list1 is list2` 的结果是 `False`，因为它们是存储在内存中的两个不同对象。

5. **布尔值转换**：`bool(0)`, `bool(0.0)`, `bool("")` 的结果都是 `False`，因为它们被视为布尔上下文中的“假”值；`bool("False")` 的结果是 `True`，因为非空字符串被视为“真”值。

6. **优先级问题**：给定 `x = False`，`y = True` 和 `z = False`，表达式 `x or y and z` 的结果是 `False`。根据布尔运算的优先级，`and` 优先于 `or`，因此先计算 `y and z` 得到 `False`，然后计算 `x or False` 也是 `False`。

7. **逻辑非操作**：对于 `flag = True`，`not flag` 的结果是 `False`，因为 `not` 运算符会将 `True` 变为 `False`。

8. **混合类型逻辑**：如果 `x = "hello"` 和 `y = ""`，那么 `bool(x) and bool(y)` 的结果是 `False`。因为 `bool(x)` 为 `True`（非空字符串视为 `True`），而 `bool(y)` 为 `False`（空字符串视为 `False`），所以 `True and False` 是 `False`。

9. **条件表达式实践**：使用三元运算符的表达式是 `age = 18; "成年" if age >= 18 else "未成年"`。这表示如果 `age` 大于或等于18，则返回 `"成年"`，否则返回 `"未成年"`。

::::



## 6. while 循环

:::: tabs

@tab Q1：猜数字游戏

编写一个 Python 程序，使用 `while` 循环来实现一个简单的文本猜数字游戏。游戏的规则如下：

1. 程序首先生成一个1到100之间的随机整数，让用户来猜测这个数字是多少。
2. 用户每次输入他们的猜测后，程序需要告诉用户猜测是太高了、太低了还是正确。
3. 如果用户猜对了数字，程序应打印出用户尝试的次数，并结束循环。
4. 用户有机会在放弃前最多猜测10次。如果10次都没猜对，程序应告诉用户正确的数字，并结束。

**程序要求：**

- 使用 `while` 循环来处理猜测过程。
- 确保程序能够处理非法输入，如非数字输入，应提示用户重新输入有效数字。
- 使用 Python 的 `random` 模块来生成随机数字。

```python
import random

num = random.randint(1, 100)  # 生成1到100之间的随机整数
```

**答案：**

1. [http://codemark.bornforthis.cn/share/227143ea-4a08-4891-bfd9-4f69a8e0b508_20250331231528](http://codemark.bornforthis.cn/share/227143ea-4a08-4891-bfd9-4f69a8e0b508_20250331231528)
2. [http://codemark.bornforthis.cn/share/194dc02d-457c-4a29-a9bd-a5ffbdce1b5c_20250331231549](http://codemark.bornforthis.cn/share/194dc02d-457c-4a29-a9bd-a5ffbdce1b5c_20250331231549)
3. [http://codemark.bornforthis.cn/share/449cd3ee-ce09-47bc-a82a-0098fb888957_20250331231607](http://codemark.bornforthis.cn/share/449cd3ee-ce09-47bc-a82a-0098fb888957_20250331231607)
4. [http://codemark.bornforthis.cn/share/aa640a98-d2f2-4b60-9839-38ee483a2c76_20250331231628](http://codemark.bornforthis.cn/share/aa640a98-d2f2-4b60-9839-38ee483a2c76_20250331231628)



@tab Q2：ATM 机系统

编写一个 Python 程序，使用 `while` 循环实现一个基础的 ATM 机系统。程序应该具备以下功能：

1. **初始设定：** 程序开始时，要求用户设定初始的账户余额。
2. **交互菜单：** 用户可以通过输入选择查看余额、存款、取款或退出。
3. **存款功能：** 用户选择存款后，输入存款金额并更新余额。
4. **取款功能：** 用户选择取款时，先检查账户余额是否足够，足够则扣除相应金额，不够则提示余额不足。
5. **查看余额：** 允许用户随时查看当前余额。
6. **退出系统：** 用户选择退出时，打印一条消息确认并结束程序。

**程序要求：**

- 使用 `while` 循环处理用户的多次交互直到用户选择退出。
- 确保所有输入均为有效数字，非数字输入时应提示错误并要求重新输入。
- 实现至少一种方式的用户身份验证，比如初始设定一个PIN码，每次操作前需验证。

**运行演示：**

```bash
/Users/huangjiabao/anaconda3/envs/Pycharm/bin/python /Users/huangjiabao/GitHub/iMac/Pycharm/StudentCoder/51-lujiux/code.py 
请设定您的初始账户余额: 9999999
请输入您的PIN码以继续：1314
PIN码错误，请重试。
请输入您的PIN码以继续：1234

欢迎使用ATM机系统
1. 查看余额
2. 存款
3. 取款
4. 退出
请输入您的选择（1-4）：1
您的账户余额为：$9999999.00

欢迎使用ATM机系统
1. 查看余额
2. 存款
3. 取款
4. 退出
请输入您的选择（1-4）：2
请输入存款金额：1
存款成功！您的新余额为：$10000000.00

欢迎使用ATM机系统
1. 查看余额
2. 存款
3. 取款
4. 退出
请输入您的选择（1-4）：3
请输入取款金额：1
取款成功！您的新余额为：$9999999.00

欢迎使用ATM机系统
1. 查看余额
2. 存款
3. 取款
4. 退出
请输入您的选择（1-4）：4
感谢使用我们的ATM服务，再见！

Process finished with exit code 0
```



**答案：**

1. [http://codemark.bornforthis.cn/share/68828874-e882-432f-8c54-7b8773add90e_20250331231344](http://codemark.bornforthis.cn/share/68828874-e882-432f-8c54-7b8773add90e_20250331231344)
2. [http://codemark.bornforthis.cn/share/eb17742e-720a-4897-8bae-459ff7119cbb_20250331231402](http://codemark.bornforthis.cn/share/eb17742e-720a-4897-8bae-459ff7119cbb_20250331231402)
3. [http://codemark.bornforthis.cn/share/d3887ac2-b19e-4454-9918-ca33d9fb1be0_20250331231418](http://codemark.bornforthis.cn/share/d3887ac2-b19e-4454-9918-ca33d9fb1be0_20250331231418)
4. [http://codemark.bornforthis.cn/share/098d2d0a-2931-4e0d-a417-b61ce2e1c84d_20250331231433](http://codemark.bornforthis.cn/share/098d2d0a-2931-4e0d-a417-b61ce2e1c84d_20250331231433)
5. [http://codemark.bornforthis.cn/share/484cb838-beb2-49f4-8c89-a87890f59660_20250331231449](http://codemark.bornforthis.cn/share/484cb838-beb2-49f4-8c89-a87890f59660_20250331231449)

- Tips1：用户输入操作选择项，无需转换成数字，直接使用字符串数字判断可以很好的避免强制转换有可能带来的报错；（字符串非纯数字）直接是字符串则可以直接判断是否与目标操作符相等，不相等则执行 else。

- Tips2：

    ```python
    num = input(':>>>')
    if num.replace('.', '', 1).isdigit():
        print(num)
    ```



::::



## 7. for 循环

:::: tabs

@tab Q1：统计元音字母

编写一个程序，使用 `for` 循环统计给定字符串中元音字母（`a`, `e`, `i`, `o`, `u`）的数量，并输出结果。

1. 不忽略大小写问题实现代码：

```python
vowels = "aeiouAEIOU"
string = input("Enter a string: ")
count = 0
for char in string:
    if char in vowels:
        count += 1
print("Number of vowels: ", count)
```

2. 忽略大小写问题实现代码：

```python
vowels = "aeiou"
string = input("Enter a string: ").lower()
count = 0
for char in string:
    if char in vowels:
        count += 1
print("Number of vowels: ", count)
```



@tab Q2：斐波那契数列

编写一个程序，使用 `for` 循环输出斐波那契数列的前 `n` 项。例如，输入 `n = 10`，输出 `0, 1, 1, 2, 3, 5, 8, 13, 21, 34`。

```python
n = int(input("Enter the number of Fibonacci numbers to generate: "))
a, b = 0, 1
for _ in range(n):
    print(a, end=" ")
    a, b = b, a + b
```



@tab Q3：反转字符串

- 不得使用 `[::-1]`

编写一个程序，使用 `for` 循环反转一个给定的字符串并输出。例如，输入 `hello`，输出 `olleh`。

```python
string = input("Enter a string: ")
reversed_string = ''
for char in string:
    reversed_string = char + reversed_string
print("Reversed string:", reversed_string)
```



@tab Q4: for 循环实现奇数和偶数之间的总和

for 循环实现奇数和偶数之间的总和

::::























