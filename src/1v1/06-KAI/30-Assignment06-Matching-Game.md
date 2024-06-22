---
title: Assignment 06 Matching Game
icon: web1
date: 2023-03-29 23:13:44
author: AI悦创
isOriginal: true
category: 
    - 1v1
    - java 1v1
    - 纽约大学一对一
    - NYU 1v1
    - web 一对一
    - 数据结构一对一
    - 留学生辅导
    - 留学生作业辅导
tag:
    - 1v1
    - java 1v1
    - 纽约大学一对一
    - NYU 1v1
    - web 一对一
    - 留学生辅导
    - 留学生作业辅导
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

[Code written in class](https://cs.nyu.edu/courses/spring23/CSCI-UA.0061-001/assignment06_inclass.txt)

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Memory Matching Madness</title>
        <style>
            body {
                background-color: black;
                color: white;
                text-align: center;
            }
            .hidden {
                display: none;
            }
            #tile_container {
                width: 400px;
                margin: auto;
            }
            #tile_container img {
                width: 100px;
            }
        </style>
    </head>
    <body>
        <h1>Memory Matching Madness</h1>

        <div id="panel_gamestart">
            <p>Let's play! click to begin!</p>
            <button id="button_playgame">Play Game</button>
        </div>
        <div id="panel_gameplaying" class="hidden">
            <div id="timer_container">0 seconds elapsed</div>
            <div id="tile_container"></div>
        </div>
        <div id="panel_gameover" class="hidden">
            <p>Game over!</p>
            <p>Your time: 0 sec</p>
            <p>Best time: 0 sec</p>
        </div>

        <script>
            // DOM queries
            const panel_gamestart = document.querySelector('#panel_gamestart');
            const button_playgame = document.querySelector('#button_playgame');
            const panel_gameplaying = document.querySelector('#panel_gameplaying');
            const timer_container = document.querySelector('#timer_container');
            const tile_container = document.querySelector('#tile_container');
            const panel_gameover = document.querySelector('#panel_gameover');

            // global variables to keep track of our picked tiles
            let tile1 = false;
            let tile2 = false;

            button_playgame.onclick = function(e) {
                panel_gamestart.classList.add('hidden');
                panel_gameplaying.classList.remove('hidden');

                let assets = ['snorlax.png', 'electrabuzz.png', 'chansey.png', 'oddish.png',
                            'pikachu.png', 'paras.png', 'arcanine.png', 'ponita.png',
                            'venonat.png', 'eggsecute.png', 'machop.png', 'pidgey.png',
                            'psyduck.png', 'tauros.png', 'vulpix.png', 'gloom.png',
                            'krabby.png', 'butterfree.png', 'bulbasaur.png', 'clefairy.png',
                            'koffing.png', 'goldeen.png', 'magikarp.png', 'beedrill.png',
                            'lapras.png', 'meowth.png', 'ekans.png', 'jigglypuff.png',
                            'horsea.png', 'polywog.png', 'sandshrew.png', 'rattata.png',
                            'gengar.png', 'eevee.png', 'bellsprout.png', 'squirtle.png',
                            'seel.png', 'caterpie.png'];

                // pick 6 graphics at random
                let selectedTiles = [];

                while (selectedTiles.length < 12) {
                    // pick a random one from the assets array
                    let i = parseInt( Math.random() * assets.length );
                    selectedTiles.push( assets[i] );
                    selectedTiles.push( assets[i] );
                    assets.splice(i, 1);
                }

                console.log(selectedTiles);

                // you need to randomize these tiles so they are all messed up

                // create tiles for these graphics
                for (let i = 0; i < selectedTiles.length; i++) {
                    // create a tile
                    let tile = document.createElement('img');
                    tile.src = 'assignment06_images/pokeball.png';
                    tile.dataset.secret = 'assignment06_images/' + selectedTiles[i];
                    tile_container.appendChild(tile);

                    // set up event listeners on each tile
                    tile.onclick = function(event) {

                        // have no tiles been clicked?
                        if (tile1 == false && tile2 == false) {
                            // reveal tile 1

                            // switch graphics
                            event.currentTarget.src = event.currentTarget.dataset.secret;

                            // mark this as tile1
                            tile1 = event.currentTarget;
                        }
                        else if (tile2 == false) {
                            // reveal this tile

                            // switch graphics
                            event.currentTarget.src = event.currentTarget.dataset.secret;

                            // mark this as tile1
                            tile2 = event.currentTarget;

                            // did they get it right?
                            if (tile1.dataset.secret == tile2.dataset.secret) {
                                // reset the game back to the original state and allow more clicks
                                tile1 = false;
                                tile2 = false;
                                console.log("MATCH");
                            }
                            else {
                                // they got it wrong
                                setTimeout( function() {
                                    tile1.src = 'assignment06_images/pokeball.png';
                                    tile2.src = 'assignment06_images/pokeball.png';
                                    tile1 = false;
                                    tile2 = false;
                                }, 1000);
                            }
                        }



                        //tile.src = tile.dataset.secret;
                    }
                }

            }

        </script>
    </body>
</html>
```

For this assignment you will be creating 'matching game' that will allow visitors to try and match a series of hidden tokens. Speed is key, and the best time will be stored as the 'high score' on your computer - future players will need to try and beat that score in order to become the new matching champion! Here's a quick video that shows the basic features of the system:

> 对于这个作业，你将创建一个“匹配游戏”，允许访问者尝试和匹配一系列隐藏的令牌。速度是关键，最好的时间将被存储在你的电脑上的“高分”-未来的玩家将需要尝试并打破这个分数，以成为新的匹配冠军!下面是一段简短的视频，展示了该系统的基本功能:

<VidStack src="/1v1/06-KAI/30-Assignment06-Matching-Game/webdev matching game_360p.mp4" />

Your program should do the following. [You can download all of the artwork used in this project here](https://cs.nyu.edu/courses/spring23/CSCI-UA.0061-001/images/assignment06/assignment06_images.zip).

> 您的程序应该执行以下操作。你可以在这里下载这个项目中使用的所有艺术品。[assignment06_images.zip](/1v1/06-KAI/30-Assignment06-Matching-Game/assignment06_images.zip)

- Layout
    - A 'start' screen that introduces the user to your game and provides them with a button to start the game. This element should be visible to the user when the page loads.「“开始”屏幕，向用户介绍你的游戏，并提供一个开始游戏的按钮。当页面加载时，该元素应该对用户可见。」
    - A 'play' screen that contains the play area as well as an indicator to show how much time has elapsed. Note that in the video above this screen contains a 4x6 grid of Pokeballs that you can click on. When setting up your page do not add these images to your HTML as you will probably want to do this using JavaScript. Instead, just create a container to hold your images when you do end up creating them. Set up this element to be invisible when the page initially loads.「一个“游戏”屏幕，包含游戏区域以及显示已经过了多少时间的指示器。请注意，在上面的视频中，这个屏幕包含一个4x6网格的pokeball，你可以点击。在设置页面时，不要将这些图像添加到HTML中，因为您可能会使用JavaScript来完成此操作。相反，在创建图像时，只需创建一个容器来保存图像。将此元素设置为在页面初始加载时不可见。」
    - A 'game over' screen that shows the user's score as well as the all time high score. It should also contain a button to start the game up again. This element should be invisible when the page loads.「一个“游戏结束”的屏幕，显示用户的分数以及历史最高分数。它还应该包含一个重新启动游戏的按钮。该元素在页面加载时应该是不可见的。」

- Setting Up the Game「设置游戏」
    - Clicking on the initial 'play game' button should swap the display so that the 'play' screen is visible.「点击最初的“play game”按钮应该会切换显示，这样“play”屏幕就可见了。」
    - At this point you will probably want to create your game tokens. Each token should visually display itself as a Pokeball (or something else, you can swap in your own artwork). Every token should also have a "secret" image attached to it. Here's an array that may be helpful in doing this:「在这一点上，你可能想要创建你的游戏令牌。每个代币都应该在视觉上显示为Pokeball(或者其他东西，你可以交换自己的艺术品)。每个令牌还应该附加一个“秘密”映像。下面是一个数组，可能会有帮助:」

```html
let assets = ['snorlax.png', 'electrabuzz.png', 'chansey.png', 'oddish.png',
              'pikachu.png', 'paras.png', 'arcanine.png', 'ponita.png',
              'venonat.png', 'eggsecute.png', 'machop.png', 'pidgey.png',
              'psyduck.png', 'tauros.png', 'vulpix.png', 'gloom.png',
              'krabby.png', 'butterfree.png', 'bulbasaur.png', 'clefairy.png',
              'koffing.png', 'goldeen.png', 'magikarp.png', 'beedrill.png',
              'lapras.png', 'meowth.png', 'ekans.png', 'jigglypuff.png',
              'horsea.png', 'polywog.png', 'sandshrew.png', 'rattata.png',
              'gengar.png', 'eevee.png', 'bellsprout.png', 'squirtle.png',
              'seel.png', 'caterpie.png']
```

- Setting Up the Game「设置游戏」
    - You will need to select 6 random images from this list and then assign 2 of your tokens to store these images (so that every token has a 'match'). Hint: use the `data-` specification to store an image filename along with your newly created tokens「你需要从这个列表中随机选择6个图像，然后分配2个标记来存储这些图像(这样每个标记都有一个“匹配”)。提示:使用' data- '规范存储图像文件名和新创建的令牌」
    - Each token should be clickable - when they are clicked they should swap to their 'secret' image.「每个标记都应该是可点击的-当他们被点击时，他们应该交换到他们的“秘密”图像。」
    - Next, you will need to figure out how to determine if a match has been made. Here's a hint - create two variables (token1 and token2) and default them both to `false`. When the first token is pressed update token1 with a reference to the item that was clicked. When the next token is pressed you can compare their secret images - if they are the same they should stay visible, and if not they should both go back to their normal non-secret image.「接下来，您需要弄清楚如何确定是否已经进行了匹配。这里有一个提示-创建两个变量(token1和token2)，并默认它们都为' false '。当按下第一个令牌时，更新token1，其中包含对所单击项的引用。当下一个标记被按下，你可以比较他们的秘密图像-如果他们是相同的，他们应该保持可见，如果不是他们都应该回到正常的非秘密图像。」
    - If a non-match occurs your tokens should pause for a second so the user can see them before they revert back to their non-secret image. Hint: use `setTimeout` to call a function after a delay!「如果出现不匹配，您的令牌应该暂停一秒钟，以便用户在恢复到非秘密映像之前可以看到它们。提示:使用' setTimeout '在延迟后调用函数!」
    - The game should keep track of the elapsed time. Hint: you may need another `setTimeout` or `setInterval` call to periodically update the timer.「游戏应该记录所消耗的时间。提示:您可能需要另一个' setTimeout '或' setInterval '调用来定期更新计时器。」
    - When all tokens have been selected the game should transition to the 'game over' screen.「当所有的代币都被选中后，游戏就会切换到“游戏结束”界面。」


- Game Over Screen「游戏结束界面」

    - The user's time should be displayed.「应该显示用户的时间。」
    - The best time should also be displayed - you can do this by using `localStorage` to store the best time. Hint: default the best time to be something huge if it doesn't exist when the page loads so that the first time the user plays their time will automatically be the best time.「最佳时间也应该显示出来——你可以使用' localStorage '来存储最佳时间。提示:如果页面加载时不存在大型内容，那么默认的最佳时间就是用户第一次玩游戏的最佳时间。」
    - If the user beats the best time their time should replace the best time being stored in `localStorage`「如果用户超过了最佳时间，他们的时间应该替换存储在localStorage中的最佳时间」
    - The user should be able to click and transition back to the 'game' screen from here -- this should reset the clock and re-randomize the game board with new tokens as well.「用户应该能够点击并从这里切换回“游戏”屏幕——这将重置时钟并使用新的令牌重新随机游戏面板。」

    Note that your program should be free of logic errors and you will need to test your program to ensure that it works under all circumstances. This includes the following:

    > 请注意，您的程序应该没有逻辑错误，您将需要测试您的程序，以确保它在所有情况下都能工作。这包括以下内容:

    - Click spamming: make sure that the game doesn't "break" if you click too quickly (i.e. you click on 3 images when you really should have only clicked on 2)

    > 点击滥发:确保游戏不会因为你点击太快而“崩溃”(例如，你应该只点击2张却点击了3张)

    - Double clicking: if the user clicks on the same image twice this should not "break" the game.

    > 双击:如果用户两次点击同一图像，这并不会“破坏”游戏。

    - The timer should stop when the game ends (it shouldn't continue after the user has finished a round)

    > 计时器应该在游戏结束时停止(不应该在用户完成一轮后继续)

## Advanced Features「先进的功能」

Next, implement the following features into your game.

> 接下来，在你的游戏中执行以下功能。

- Leaderboard: Keep track of the best score for your game using `localStorage`. Allow the user to type in their name if they earn a best score and store this name in `localStorage` along with their time. Display this on the 'game over' screen along with their score.

> 排行榜:使用“localStorage”跟踪游戏的最佳分数。允许用户输入他们的名字，如果他们获得了最好的分数，并将这个名字与他们的时间一起存储在“localStorage”中。在“游戏结束”屏幕上显示这一信息以及他们的分数。

- Difficulty selection: Give the user a choice as to the size of their board (easy: 3x4 board; medium: 4x5 board; hard: 5x6 board).

> 难度选择:让用户选择他们的板子大小(简单:3x4板子;中:4x5板;硬:5x6板)。

- Leaderboard expansion: Update your leaderboard so that you have different "high scores" for each difficulty level.

> 积分排行榜扩展:更新你的积分排行榜，这样每个难度级别都有不同的“高分”。

- Difficulty selection "stickyness": Update your program so that it "remembers" the difficulty setting that was last used. For example, if a user elects to play a "hard" game (5x6), leaves the page, and then comes back, the default should be "hard" (5x6)

> 难度选择“粘性”:更新您的程序，使其“记住”最后使用的难度设置。例如，如果用户选择玩一个“硬”游戏(5x6)，离开页面，然后返回，默认值应该是“硬”(5x6)

- Sound: Trigger sounds when the user gets a correct / incorrect match.

> 声音:当用户得到正确/不正确的匹配时触发声音。

## Extra Credit

Attempt these features only if you have time!「只有在你有时间的时候才尝试这些功能!」

- Custom Game Tokens: Allow the user to change the graphics used in the game - you will need to find / create your own graphics for this. Remember the user's choice using `localStorage` so that when the come back to the game to play another round their preferred graphics set / board size is pre-selected.「自定义游戏令牌:允许用户改变游戏中使用的图形-你需要为此找到/创建自己的图形。记住用户使用“localStorage”的选择，这样当他们回到游戏中玩下一轮游戏时，他们首选的图形集/棋盘大小是预先选定的。」
- Animation: Implement a "card flipping" animation when the user selects a graphic. If the match is incorrect you should use the animation to flip it back to its original state. [Here is a tutorial and some CSS rules that might be useful for this task](https://www.w3schools.com/howto/howto_css_flip_card.asp). **Note:** this is a CSS heavy task that can be very challenging. I recommend that you get everything else working before you even begin looking into this task. Also, make a copy of your work so that you can go back to your previous version since you will need to make a number of changes to the structure of your code to incorporate these features. Also note that you can't simply take the code on this page and use it as-is - the code shown here implements a flipping animation on a `hover` event, which isn't what you want. Instead, you want this to work using a JavaScript click event. You will most likely be reworking the hierarchy of your tokens and adding / removing special classes to your tokens to make this work.「动画:当用户选择一个图形时，实现一个“翻牌”动画。如果匹配不正确，您应该使用动画将其翻转回原始状态。[这里有一个教程和一些CSS规则，可能对这个任务有用](https://www.w3schools.com/howto/howto_css_flip_card.asp)。**注意:**这是一个CSS繁重的任务，可以非常具有挑战性。我建议您在开始研究这个任务之前，先把其他所有工作都做好。此外，制作一份工作的副本，以便您可以返回到以前的版本，因为您将需要对代码的结构进行一些更改以合并这些功能。还要注意的是，你不能简单地把本页上的代码按原样使用——这里显示的代码在“悬停”事件上实现了一个翻转动画，这不是你想要的。相反，您希望使用JavaScript单击事件来工作。您很可能会重做令牌的层次结构，并向令牌中添加/删除特殊类，以实现此工作。」

Thoroughly test your work and make sure that it meets the requirements set forth above. When you are finished, post your project to the i6 server and link it from your main menu page. We should be able to visit your 'webdev' folder and click on the link associated with this macro assignment to visit your project. Also create a ZIP archive of your work and submit it to Brightspace under the 'Assignment 06' category.「彻底测试你的工作，并确保它满足上述要求。完成后，将项目发布到i6服务器，并从主菜单页面链接它。我们应该能够访问您的“webdev”文件夹，并点击与此宏分配相关的链接来访问您的项目。同时创建一个ZIP文件，并将其提交到Brightspace的“Assignment 06”目录下。」

## Grading Rubric (30 points + 2 points Extra Credit)

| **Criteria**                                                 | **Points** |
| ------------------------------------------------------------ | ---------- |
| Layout: * A 'start' screen that introduces the user to your game and provides them with a button to start the game. This element should be visible to the user when the page loads. * A 'play' screen that contains the play area as well as an indicator to show how much time has elapsed. Note that in the video above this screen contains a 3x4 grid of Pokeballs that you can click on. When setting up your page do not add these images to your HTML as you will probably want to do this using JavaScript. Instead, just create a container to hold your images when you do end up creating them. Set up this element to be invisible when the page initially loads. * A 'game over' screen that shows the user's score as well as the all time high score. It should also contain a button to start the game up again. This element should be invisible when the page loads. | 3          |
| Game tokens are randomized, and there are a matching # of tokens in each game | 1          |
| Each token is clickable and swaps to its 'secret' image. Non-matches display for a moment and swap back to their "hidden" state. | 1          |
| Matches are detected and stay illumated after they have been identified. | 1          |
| Logic error detection: program functions as expected and does not produce unexpected results. For example, quickly clicking on a game piece will not 'break' the program, and matches that have already been found cannot be re-clicked. | 5          |
| A timer counts down the elapsed time. The timer always starts at 0. | 2          |
| When all matches have been found the game over screen appears. The timer stops at this point and the time it took to solve the puzzle appears. | 2          |
| Program has a replay button that successfully resets the game for another round. | 2          |
| If the time taken is the "best" time for the game it is announced to the user. This time should also stored in 'localStorage' (you can check the developers console to make sure this is working). Refreshing the game will allow the next user to attempt to beat the previous time. | 3          |
| Upon the start of the game, the user a choice as to the size of their board (easy: 3x4 board; medium: 4x5 board; hard: 5x6 board). Game uses this information to create an appropriately sized board. | 3          |
| The program "remembers" the difficulty setting that was last used. For example, if a user elects to play a "hard" game (5x6), leaves the page, and then comes back, the default should be "hard" (5x6). This should be implemented using localStorage, and you can check the developers console to ensure that this value is being set correctly. | 3          |
| The leaderboard supports separate "high scores" for each difficulty setting. | 2          |
| Sounds are triggered when the user gets a correct / incorrect match. | 2          |
| Extra credit: * (1.0 points) Allow the user to change the graphics used in the game - you will need to find / create your own graphics for this. Remember the user's choice using localStorage so that when the come back to the game to play another round their preferred graphics set / board size is pre-selected. * (1.0 points) Animation: Implement a "card flipping" animation when the user selects a graphic. If the match is incorrect you should use the animation to flip it back to its original state. | 2          |



欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！


::: details 公众号：AI悦创【二维码】

![](/gzh.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](/zsxq.jpg)