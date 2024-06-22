---
title: University of Pennsylvania Homework 3 Water Tank
date: 2023-09-19 20:17:46
author: AI悦创
isOriginal: true
category: 
    - Python辅导
    - University of Pennsylvania
tag:
    - Python辅导
    - University of Pennsylvania
icon: zhuanjiaketang-jihuo
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

::: center

**Homework 3: Water Tank**

(Deadline as per Canvas)

:::

This homework covers concepts learned in Modules 1-3. In this homework, we will be implementing the game *Water Tank*, a card-based game.

> 这份作业涵盖了第1-3模块所学的概念。在这个作业中，我们将实现一款名为*水箱*的基于卡片的游戏。

**About the Assignment**

*Water Tank* is a competitive card game played between two players. In your case, the players will be a human player and a computer player. Each player starts with an **empty** water tank, which they need to fill. **The goal is to be the first player to fill their tank.** A tank is filled if it reaches the value of **75 to 80 units (inclusive)**. The human player’s moves are decided by the user playing the game, by asking for input, and the computer’s moves are decided by the program that you will write.

> 水箱是一款两名玩家之间的竞争性卡牌游戏。在您的情况下，玩家将是一名人类玩家和一名电脑玩家。每位玩家开始时都有一个空的水箱，他们需要填满它。目标是成为第一个填满水箱的玩家。当水箱达到75至80单位（包括）时，它就算是被填满了。人类玩家的动作是由玩这个游戏的用户决定的，通过请求输入，而电脑玩家的动作则是由您将要编写的程序决定的。

For the section that asks you to program a strategy for the computer, what we want you to do is come up with a reasonable enough strategy that ensures that a computer makes a logical decision. Example, if the computer’s tank is missing just 1 unit of water to fill the tank, and that card happens to be in the computer’s hand, then the computer should use that card in their move. So, unlike your previous assignments, this one has a creative component to it.

> 对于要求你为计算机编程策略的部分，我们希望你能提出一个足够合理的策略，确保计算机作出逻辑决策。例如，如果计算机的水箱仅缺少1单位的水来填满，并且该卡恰好在计算机的手中，那么计算机应该在它的动作中使用那张卡。所以，与你之前的任务不同，这次的任务有创意的成分在里面。

There are two types of cards: water cards and power cards. There will be a pile for each type of card (one pile for water and one pile for power). Each **water card** has a value that represents the amount of water that it contributes to the tank. When a water card is played, that player adds the specified amount of water to their tank. **Power cards** allow players to perform special actions:

> 这有两种类型的卡片：水卡和能量卡。每种卡片都会有一个堆叠（一个水卡堆，一个能量卡堆）。每张水卡都有一个代表其为水箱增加的水量的值。当玩家打出一张水卡时，他们会按照卡上指定的数量为自己的水箱加水。能量卡允许玩家执行特殊动作：

- SOH (Steal Opponent’s Half): Take half the water in your opponent’s tank and add it to your own

    > 从对手的储水罐中拿走一半的水，并加到你自己的储水罐里。

- DOT (Drain Opponent’s Tank): Empty your opponent’s tank completely

    > DOT (耗尽对手的油箱)：完全清空你的对手的油箱。

- DMT (Double My Tank): Double the current value of your own tank

    > DMT (Double My Tank) 的中文翻译为：DMT (双倍我的坦克)：翻倍你当前的坦克价值。

Players take turns either using a card or discarding a card. If a player discards a card, it goes to the bottom (last index) of its respective pile. Once the player has used or discarded a card, they draw a new card, from the top of the pile (index 0), *of the same type as the card they just used or discarded*.

> 玩家轮流使用或丢弃一张卡片。如果玩家丢弃一张卡片，它将被放到相应堆的最底部（最后一个位置）。一旦玩家使用或丢弃了一张卡片，他们将从堆的顶部（索引0）抽取一张与刚才使用或丢弃的卡片同类型的新卡片。

If a player’s water level exceeds their tank’s maximum fill value, an **overflow** happens. In the case of an overflow, extra water sloshes out of the tank. The amount of water that remains in the tank is determined by a formula: **remaining water = maximum fill value - overflow**

> 如果玩家的水位超过了水箱的最大容量，就会发生溢出。在溢出的情况下，多余的水会从水箱中溢出。水箱中剩余的水量由以下公式决定：剩余水量 = 最大容量 - 溢出量。

For example, if a player’s tank level goes to 90, and its maximum fill value is 80, the overflow is 10. Deduct 10 from the maximum fill value to find the remaining water in the tank, which is 70 in this case.

> 例如，如果玩家的水箱水位达到90，而其最大填充值是80，那么溢出量就是10。从最大填充值中减去10，可以找到水箱中剩余的水量，本例中是70。

The game continues in turns until one player’s tank is filled. A tank is considered filled when the tank level is between the minimum and maximum fill values (inclusive). **The first player to fill their tank wins the game.**

> 这个游戏按轮次进行，直到其中一个玩家的坦克被填满。当坦克的水平介于最小和最大填充值（包括两者）之间时，就认为坦克已被填满。首个填满坦克的玩家赢得游戏。

If a pile of cards is exhausted, the setup function for that type of card will be called to replenish the pile.

> 如果一堆卡片用尽了，将会调用该类型卡片的设置函数以补充那堆卡片。

**Required Functions**

> 所需功能

The following functions must be present in your code with these given names and function signatures exactly. For the autograder to run properly, **do not change the function names or the parameters**. Do not add optional parameters or change the return types. If a function returns something, make sure what it returns is consistent with what’s mentioned in the details below. Be sure to add docstrings to all of your functions and comments to your code. The *water_tank.py* should be placed in the submit folder and should not be renamed, otherwise the autograder will fail to locate your program.

> 以下函数必须准确地以给定的名称和函数签名出现在您的代码中。为了确保自动评分器正常运行，请不要更改函数名称或参数。不要添加可选参数或更改返回类型。如果函数返回某些内容，请确保其返回的内容与下文中提到的内容一致。确保为您的所有函数添加文档字符串，并为您的代码添加注释。water_tank.py 应放置在 submit 文件夹中，并且不应被重命名，否则自动评分器将无法找到您的程序。

The following are the required functions you have to implement:

> 以下是你需要实现的函数：

(Note: Some functions may be used in another function)

> 注：某些函数可能会在另一个函数中被使用。

`get_user_input(question):`

- Prompt the user with the given question and process the input.

    > 提示用户给定的问题并处理输入。

- Return the post-processed user input.

    > 返回后处理的用户输入。

    - Remove leading and trailing whitespaces.

        > 删除前后的空白字符。

    - If the length of the user input after removing leading and trailing whitespaces is 0, reprompt.

        > 如果用户输入去除前后空白字符后的长度为0，重新提示。

    - If the input is a number, cast and return an integer type.

        > 如果输入是一个数字，转换并返回一个整数类型。

    - If the input is a power card, return the power card as an *uppercase* string.

        > 如果输入是一张能量卡，返回该能量卡的大写字符串。

    - If the input is any other string, return the string as a *lowercase* string.

        > 如果输入是其他任何字符串，返回该字符串的小写形式。

`setup_water_cards():`

- Create a *shuffled* list of water cards with the following values and quantities:

    > 创建一个打乱顺序的水卡片列表，具有以下的值和数量：

| Value | Quantity of Cards |
| ----- | ----------------- |
| 1     | 30                |
| 5     | 15                |
| 10    | 8                 |

- Hint: Use the [shuffle](https://docs.python.org/3.9/library/random.html#random.shuffle) function from the random module.

    > 提示：使用random模块中的[shuffle](https://docs.python.org/3.9/library/random.html#random.shuffle)函数。

- Return the water cards as a list of integers.

    > 将水卡返回为一个整数列表。

`setup_power_cards():`

- Create a *shuffled* list of power cards with the following values and quantities:

    > 创建一个乱序的能量卡列表，其包含以下的值和数量：

| Value | Quantity of Cards<br />卡片的数量 | Description                                                  |
| ----- | --------------------------------- | ------------------------------------------------------------ |
| SOH   | 10                                | Steal half opponent’s tank value. If the opponent’s tank value is an odd integer, it will truncate the decimal value (Example: 1⁄2 of 5 is 2) Hint: You may use the cast to int<br />窃取对手坦克价值的一半。如果对手的坦克价值是奇数整数，它将截断小数值（例如：5的1⁄2是2）。提示：你可以使用转换为整数。 |
| DOT   | 2                                 | Drain opponent’s tank<br />“排空对手的油箱”或“排空对方的储罐”。具体翻译取决于上下文。 |
| DMT   | 3                                 | Double my tank’s value.<br />翻倍我的坦克的价值。            |

- Hint: Use the [shuffle](https://docs.python.org/3.9/library/random.html#random.shuffle) function from the random module.

    > 提示：使用random模块中的[shuffle](https://docs.python.org/3.9/library/random.html#random.shuffle)函数。

- Return the power cards as a list of strings.

    > 将电源卡作为字符串列表返回。

`setup_cards():`

- Set up both the water card and power card piles as described in the *setup_water_cards* and *setup_power_cards* functions.

    > 按照 setup_water_cards 和 setup_power_cards 函数的描述，设置水卡和电卡的堆叠。

- Return a 2-tuple containing the water cards pile and the power cards pile, respectively. (Each pile should be represented by a list.)

    > 返回一个2元组，分别包含水牌堆和能量牌堆。（每一堆都应由一个列表表示。）

`get_card_from_pile(pile, index):`

- Removes the entry at the specified index of the given pile (water or power) and modifies the pile by reference.

    > 移除给定堆（水或电）指定索引处的条目，并通过引用修改该堆。

- This function returns the entry at the specified index. HINT: Use the *pop* function

    > 这个函数返回指定索引处的条目。提示：使用pop函数。

`arrange_cards(cards_list ):`

- Arrange the players cards such that:

    > 将玩家的卡片按照以下方式排列：

    - The first three indices are water cards, sorted in ascending order.

        > 前三个索引是水牌，按升序排序。

    - The last two indices are power cards, sorted in alphabetical order.

        > 最后两个指数是按字母顺序排序的能量卡。

- This function doesn’t return anything.

    > 这个函数不返回任何东西。

`deal_cards(water_cards_pile, power_cards_pile):`

- Deals cards to player 1 and player 2. Each player would get 3 water cards and 2 power cards. Then, call the *arrange_cards* function to arrange the cards.

    > 给玩家1和玩家2发牌。每位玩家将获得3张水牌和2张电力牌。然后，调用 arrange_cards 函数来整理牌。

- When dealing, alternately take off a card from the first entry in the pile. Example:

    > 处理时，交替从堆中的第一项取下一张卡片。示例：

- **Initially, the water and pile would be:**

    > 初始时，水和堆的状态是：

- `water_pile = [5, 1, 1, 1, 1, 5, 1, 10, 1, 10, 5, 1, 1, 5, 1 , ...]`

- `power_pile = ['SOH', 'SOH', 'DOT', 'DMT', 'DOT', 'SOH', 'SOH', ...]`

- **After dealing, player 1 and 2 would have the following cards in their hand:**

    > 经过处理后，玩家1和玩家2手中将有以下的牌：

- `player_1_cards = [5, 1, 1, 'SOH', 'DOT'] ⇒ arrange to [1, 1, 5, 'DOT', 'SOH']`

- `player_2_cards = [1, 1, 5, 'SOH, 'DMT'] ⇒ arrange to [1, 1, 5, 'DMT', 'SOH’]`

- **Then, the piles would now be reduced to:**

    > 那么，这些堆现在将被减少到：

- `water_pile = [1, 10, 1, 10, 5, 1, 1, 5, 1 , ...]`

- `power_pile = ['DOT', 'SOH', 'SOH', ...]`

- Return a 2-tuple containing the player 1’s hand and player 2’s hand, respectively. (Each hand should be represented by a list.)

    > 返回一个2元组，分别包含玩家1和玩家2的手牌。（每个手牌应该由一个列表表示。）

`apply_overflow(tank_level)`

- If necessary, apply the overflow rule discussed in the “About the Assignment” section of this assignment.

    > 如果需要，请按照本作业的“关于作业”部分中讨论的溢出规则进行操作。

```python
remaining water = maximum fill value - overflow
```

- Return the tank level. If no overflow occurred, this is just the starting tank level.

    > 返回油箱的液位。如果没有发生溢出，这就是初始的油箱液位。

`use_card(player_tank, card_to_use, player_cards, opponent_tank):`

- Get that card from the player’s hand, and update the tank level based on the card that was used. This does not include drawing a replacement card, so after using the card, the *player_cards* size will only be 4 cards.

    > 从玩家的手中拿走那张牌，并根据使用的牌更新油箱的水平。这不包括抽取替代卡，所以在使用了那张牌后，玩家手中的牌只有4张。

- Apply overflow if necessary.

    > 如有必要，应用溢出。

- Return a 2-tuple containing the player’s tank and the opponent’s tank, respectively.

    > 返回一个2元组，分别包含玩家的坦克和对手的坦克。

`discard_card(card_to_discard, player_cards, water_cards_pile, power_cards_pile):`

- Discard the given card from the player’s hand and return it to the bottom of the appropriate pile. (Water cards should go in the water card pile and power cards should go in the power card pile.) The bottom of the pile is the last index in the list.

    > 将给定的卡牌从玩家手中丢弃，并将其放回到相应的牌堆底部。 (水牌应放入水牌堆，能量牌应放入能量牌堆。) 堆的底部是列表中的最后一个索引。

- Same as *use_card()*, this function does not include drawing a replacement card, so after calling this function, the *player_cards* size will only be 4 cards.

    > 与 use_card() 相同，这个函数不包括抽取替代卡片，所以在调用这个函数后，player_cards 的大小只会有4张卡片。

- This function does not return anything.

    > 这个函数不返回任何东西。

`filled_tank(tank):`

- Determine if the tank level is between the maximum and minimum fill values (inclusive).

    > 确定水箱的液位是否在最大和最小填充值之间（包括两者）。

- Return a boolean representing whether the tank is filled.

    > 返回一个布尔值，表示油箱是否已满。

    - This will be True if the tank is filled.

        > 这将为真如果油箱被加满。

`check_pile(pile, pile_type):`

- Checks if the given pile is empty. If so, call the pile’s setup function to replenish the pile.

    > 给定的堆是否为空。如果是，则调用堆的设置函数以补充堆。

- *pile_type* is a string to determine what type of pile you are checking (“water” or “power”)

    > `pile_type` 是一个字符串，用于确定你正在检查的堆类型是“水”还是“电”。

- This function does not return anything.

    > 这个函数不返回任何内容。

`human_play(human_tank, human_cards, water_cards_pile, power_cards_pile, opponent_tank):`

- Show the human player’s water level and then the computer player’s water level.

    > 显示人类玩家的水位，然后显示计算机玩家的水位。

- Show the human player their hand and ask them if they want to use or discard a card. If the human player enters an invalid answer, reprompt until a valid answer is entered.

    > 向人类玩家展示他们的手牌，然后询问他们是否想要使用或弃掉一张牌。如果人类玩家输入了无效的答案，继续提示直到他们输入有效的答案。

- Carry out the human’s turn based on the action they have chosen (based on user input). Be sure to use the *get_user_input* function.

    > 基于他们已选择的动作（基于用户输入）执行人的回合。确保使用 *get_user_input* 函数。

- Print the card the human player uses or discards. If the human player enters a card to use or discard which is not in their hand, reprompt until a valid card is entered.

    > 打印人类玩家使用或弃置的卡牌。如果人类玩家输入了一个不在其手中的卡来使用或弃置，那么重新提示直到输入有效的卡牌。

- Remember to handle potential overflows.

    > 记得处理可能的溢出问题。

- Once the human has used or discarded a card, draw a new card *of the same type they* *just used/discarded*.

    > 一旦人类使用或丢弃了一张卡片，就抽取一张与他们刚刚使用/丢弃的同类型的新卡片。

- Make sure that the human’s hand is still properly arranged after adding the new card.

    > 确保在添加新卡片后，人的手仍然整齐有序。

- Return a 2-tuple containing the human’s tank level and the computer’s tank level, respectively.

    > 返回一个2元组，分别包含人的油箱水平和计算机的油箱水平。

`computer_play(computer_tank, computer_cards, water_cards_pile, power_cards_pile, opponent_tank):`

- This is the function where you can write the computer’s strategy.

    > 这是你可以编写计算机策略的函数。

- You are supposed to be somewhat creative here, but make sure your code is deterministic (not random).

    > 您应当在这里展现一些创意，但请确保您的代码是确定性的（不是随机的）。

- The computer’s strategy should consider all of its cards when playing. For example, you should not have a strategy where the computer always plays the first water card or the first power card.

    > 计算机的策略在出牌时应考虑所有的牌。例如，你不应该有一个策略让计算机总是打出第一张水牌或第一张能量牌。

- The computer should not “cheat.” They should not be able to see any cards from the human’s hand, the water card pile, or power card pile. When they draw a card, they should only see that card and no cards from the rest of the water or power card pile.

    > 电脑不应该“作弊”。它们不应该能看到人类手中的任何牌、水牌堆或能量牌堆。当它们抽取一张牌时，它们应只能看到那张牌，而不能看到水牌堆或能量牌堆中的其它牌。

- This function should carry out the computer’s turn based on the action that the computer chooses.

    > 这个函数应根据计算机选择的操作来执行计算机的回合。

- Remember to handle potential overflows.

    > 记得处理可能的溢出问题。

- Print the card the computer player uses or discards.

    > 打印计算机玩家使用或丢弃的卡片。

- Once the computer has used or discarded a card, give them a new card *of the same* *type they just used/discarded.*

    > 计算机一旦使用或丢弃了一张卡，就给它们一张*与刚才使用/丢弃的*同类型的新卡。

- Make sure that the computer’s hand is still properly arranged after adding the new card.

    > 确保在添加新卡后，计算机的手仍然正确排列。

- Return a 2-tuple containing the computer’s tank level and the human’s tank level, respectively.

    > 返回一个2元组，分别包含计算机的油箱水平和人类的油箱水平。

`main():`

- The main function would be where you would structure the flow of your game, calling the functions defined above, as needed.

    > 主函数是您构建游戏流程的地方，根据需要调用上面定义的函数。

- For each turn, a player can use a card (then draw a new card) or discard a card (then draw a new card).

    > 如本次作业的“用户界面”部分所提到的，记得随机选择一个玩家先开始。

- To help you with the structure, a flowchart of the game is shown:

    > 为了帮助您理解结构，游戏的流程图如下所示：

````python
This homework covers concepts learned in Modules 1-3. In this homework, we will be implementing the game *Water Tank*, a card-based game.

**About the Assignment**

*Water Tank* is a competitive card game played between two players. In your case, the players will be a human player and a computer player. Each player starts with an **empty** water tank, which they need to fill. **The goal is to be the first player to fill their tank.** A tank is filled if it reaches the value of **75 to 80 units (inclusive)**. The human player’s moves are decided by the user playing the game, by asking for input, and the computer’s moves are decided by the program that you will write.

For the section that asks you to program a strategy for the computer, what we want you to do is come up with a reasonable enough strategy that ensures that a computer makes a logical decision. Example, if the computer’s tank is missing just 1 unit of water to fill the tank, and that card happens to be in the computer’s hand, then the computer should use that card in their move. So, unlike your previous assignments, this one has a creative component to it.

There are two types of cards: water cards and power cards. There will be a pile for each type of card (one pile for water and one pile for power). Each **water card** has a value that represents the amount of water that it contributes to the tank. When a water card is played, that player adds the specified amount of water to their tank. **Power cards** allow players to perform special actions:

- SOH (Steal Opponent’s Half): Take half the water in your opponent’s tank and add it to your own

- DOT (Drain Opponent’s Tank): Empty your opponent’s tank completely

- DMT (Double My Tank): Double the current value of your own tank


Players take turns either using a card or discarding a card. If a player discards a card, it goes to the bottom (last index) of its respective pile. Once the player has used or discarded a card, they draw a new card, from the top of the pile (index 0), *of the same type as the card they just used or discarded*.

If a player’s water level exceeds their tank’s maximum fill value, an **overflow** happens. In the case of an overflow, extra water sloshes out of the tank. The amount of water that remains in the tank is determined by a formula: **remaining water = maximum fill value - overflow**

For example, if a player’s tank level goes to 90, and its maximum fill value is 80, the overflow is 10. Deduct 10 from the maximum fill value to find the remaining water in the tank, which is 70 in this case.

The game continues in turns until one player’s tank is filled. A tank is considered filled when the tank level is between the minimum and maximum fill values (inclusive). **The first player to fill their tank wins the game.**

If a pile of cards is exhausted, the setup function for that type of card will be called to replenish the pile.

**Required Functions**

The following functions must be present in your code with these given names and function signatures exactly. For the autograder to run properly, **do not change the function names or the parameters**. Do not add optional parameters or change the return types. If a function returns something, make sure what it returns is consistent with what’s mentioned in the details below. Be sure to add docstrings to all of your functions and comments to your code. The *water_tank.py* should be placed in the submit folder and should not be renamed, otherwise the autograder will fail to locate your program.

The following are the required functions you have to implement:

(Note: Some functions may be used in another function)

`get_user_input(question):`

- Prompt the user with the given question and process the input.

- Return the post-processed user input.

    - Remove leading and trailing whitespaces.

    - If the length of the user input after removing leading and trailing whitespaces is 0, reprompt.

    - If the input is a number, cast and return an integer type.

    - If the input is a power card, return the power card as an *uppercase* string.

    - If the input is any other string, return the string as a *lowercase* string.


`setup_water_cards():`

- Create a *shuffled* list of water cards with the following values and quantities:


| Value | Quantity of Cards |
| ----- | ----------------- |
| 1     | 30                |
| 5     | 15                |
| 10    | 8                 |

- Hint: Use the [shuffle](https://docs.python.org/3.9/library/random.html#random.shuffle) function from the random module.

- Return the water cards as a list of integers.


`setup_power_cards():`

- Create a *shuffled* list of power cards with the following values and quantities:


| Value | Quantity of Cards<br />卡片的数量 | Description                                                  |
| ----- | --------------------------------- | ------------------------------------------------------------ |
| SOH   | 10                                | Steal half opponent’s tank value. If the opponent’s tank value is an odd integer, it will truncate the decimal value (Example: 1⁄2 of 5 is 2) Hint: You may use the cast to int |
| DOT   | 2                                 | Drain opponent’s tank                                        |
| DMT   | 3                                 | Double my tank’s value.                                      |

- Hint: Use the [shuffle](https://docs.python.org/3.9/library/random.html#random.shuffle) function from the random module.

- Return the power cards as a list of strings.


`setup_cards():`

- Set up both the water card and power card piles as described in the *setup_water_cards* and *setup_power_cards* functions.

- Return a 2-tuple containing the water cards pile and the power cards pile, respectively. (Each pile should be represented by a list.)


`get_card_from_pile(pile, index):`

- Removes the entry at the specified index of the given pile (water or power) and modifies the pile by reference.

- This function returns the entry at the specified index. HINT: Use the *pop* function


`arrange_cards(cards_list ):`

- Arrange the players cards such that:

    - The first three indices are water cards, sorted in ascending order.

    - The last two indices are power cards, sorted in alphabetical order.

- This function doesn’t return anything.


`deal_cards(water_cards_pile, power_cards_pile):`

- Deals cards to player 1 and player 2. Each player would get 3 water cards and 2 power cards. Then, call the *arrange_cards* function to arrange the cards.

- When dealing, alternately take off a card from the first entry in the pile. Example:

- **Initially, the water and pile would be:**

- `water_pile = [5, 1, 1, 1, 1, 5, 1, 10, 1, 10, 5, 1, 1, 5, 1 , ...]`

- `power_pile = ['SOH', 'SOH', 'DOT', 'DMT', 'DOT', 'SOH', 'SOH', ...]`

- **After dealing, player 1 and 2 would have the following cards in their hand:**

- `player_1_cards = [5, 1, 1, 'SOH', 'DOT'] ⇒ arrange to [1, 1, 5, 'DOT', 'SOH']`

- `player_2_cards = [1, 1, 5, 'SOH, 'DMT'] ⇒ arrange to [1, 1, 5, 'DMT', 'SOH’]`

- **Then, the piles would now be reduced to:**

- `water_pile = [1, 10, 1, 10, 5, 1, 1, 5, 1 , ...]`

- `power_pile = ['DOT', 'SOH', 'SOH', ...]`

- Return a 2-tuple containing the player 1’s hand and player 2’s hand, respectively. (Each hand should be represented by a list.)


`apply_overflow(tank_level)`

- If necessary, apply the overflow rule discussed in the “About the Assignment” section of this assignment.


```python
remaining water = maximum fill value - overflow
```

- Return the tank level. If no overflow occurred, this is just the starting tank level.


`use_card(player_tank, card_to_use, player_cards, opponent_tank):`

- Get that card from the player’s hand, and update the tank level based on the card that was used. This does not include drawing a replacement card, so after using the card, the *player_cards* size will only be 4 cards.

- Apply overflow if necessary.

- Return a 2-tuple containing the player’s tank and the opponent’s tank, respectively.


`discard_card(card_to_discard, player_cards, water_cards_pile, power_cards_pile):`

- Discard the given card from the player’s hand and return it to the bottom of the appropriate pile. (Water cards should go in the water card pile and power cards should go in the power card pile.) The bottom of the pile is the last index in the list.

- Same as *use_card()*, this function does not include drawing a replacement card, so after calling this function, the *player_cards* size will only be 4 cards.

- This function does not return anything.


`filled_tank(tank):`

- Determine if the tank level is between the maximum and minimum fill values (inclusive).

- Return a boolean representing whether the tank is filled.

    - This will be True if the tank is filled.


`check_pile(pile, pile_type):`

- Checks if the given pile is empty. If so, call the pile’s setup function to replenish the pile.

- *pile_type* is a string to determine what type of pile you are checking (“water” or “power”)

- This function does not return anything.


`human_play(human_tank, human_cards, water_cards_pile, power_cards_pile, opponent_tank):`

- Show the human player’s water level and then the computer player’s water level.

- Show the human player their hand and ask them if they want to use or discard a card. If the human player enters an invalid answer, reprompt until a valid answer is entered.

- Carry out the human’s turn based on the action they have chosen (based on user input). Be sure to use the *get_user_input* function.

- Print the card the human player uses or discards. If the human player enters a card to use or discard which is not in their hand, reprompt until a valid card is entered.

- Remember to handle potential overflows.

- Once the human has used or discarded a card, draw a new card *of the same type they* *just used/discarded*.

- Make sure that the human’s hand is still properly arranged after adding the new card.

- Return a 2-tuple containing the human’s tank level and the computer’s tank level, respectively.


`computer_play(computer_tank, computer_cards, water_cards_pile, power_cards_pile, opponent_tank):`

- This is the function where you can write the computer’s strategy.

- You are supposed to be somewhat creative here, but make sure your code is deterministic (not random).

- The computer’s strategy should consider all of its cards when playing. For example, you should not have a strategy where the computer always plays the first water card or the first power card.

- The computer should not “cheat.” They should not be able to see any cards from the human’s hand, the water card pile, or power card pile. When they draw a card, they should only see that card and no cards from the rest of the water or power card pile.

- This function should carry out the computer’s turn based on the action that the computer chooses.

- Remember to handle potential overflows.

- Print the card the computer player uses or discards.

- Once the computer has used or discarded a card, give them a new card *of the same* *type they just used/discarded.*

- Make sure that the computer’s hand is still properly arranged after adding the new card.

- Return a 2-tuple containing the computer’s tank level and the human’s tank level, respectively.


`main():`

- The main function would be where you would structure the flow of your game, calling the functions defined above, as needed.

- For each turn, a player can use a card (then draw a new card) or discard a card (then draw a new card).

- To help you with the structure, a flowchart of the game is shown:
````







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
