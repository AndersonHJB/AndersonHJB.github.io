---
title: Assignment 07 Server-side Quizzing System
icon: php
date: 2023-04-03 09:39:58
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

```
"quiz.php"

"save.php"

"results.php"
```

> Note: The majority of this assignment uses only HTML, CSS and PHP - very little (if any) JavaScript is necessary to solve this problem. I've outlined the technologies needed for each feature below.
>
> 注意：本任务主要使用 HTML、CSS 和 PHP，解决此问题几乎不需要（或完全不需要）JavaScript。我已经在下面列出了实现每个功能所需的技术。

For this assignment you will be creating a simple 'quizzing system' similar to the quizzes you can participate in on social media sites. The program starts off by allowing the user to answer a series of at least 4 questions. When the user clicks a button to submit their answers their answers are sent to a PHP program to be tabulated and saved to the server. The PHP page will then display the results of the quiz in a visually appealing way.

> 对于这个任务，您将创建一个类似于社交媒体网站上的问答系统的简单"答题系统"。程序首先让用户回答至少 4 个问题。当用户点击一个按钮提交答案时，答案将被发送到一个 PHP 程序进行整理并保存到服务器上。然后，PHP页面将以视觉上吸引人的方式显示测验结果。

At any time the user can click on a hyperlink to view aggregate results for the quiz. If they click on this link a new PHP page will be loaded which will display a bar chart summary of all results that have been gathered so far.

> 用户可以随时点击一个超链接查看测验的汇总结果。如果他们点击这个链接，将加载一个新的PHP页面，该页面将显示到目前为止收集到的所有结果的条形图汇总。

In addition, every time a client takes the quiz their result should be saved as a cookie on the client's computer - if they choose to come back to the page they will see their previous result. They can elect to take the quiz again which start the process over again.

> 此外，每当一个客户参加测验时，他们的结果应该作为一个cookie保存在客户端计算机上 - 如果他们选择返回页面，他们将看到他们之前的结果。他们可以选择再次参加测验，从而重新开始整个过程。

Here's a quick video that shows the basic features of the system:

> 这是一个简短的视频，展示了系统的基本功能：

<VidStack src="/1v1/06-KAI/31-Assignment07-Server-side-Quizzing-System/yt1s.com-simpsonsquiz assignment6_360p.mp4" />

网页结构如下从上到下：

The web page structure is as follows:

`<h1>Which Simpson Character Am I？</h1>`

`<h2>What's your ideal job?</h2>`

选择框内容：

默认显示：Select a job

Working at a bakery

French tutor

Prank phone call specialist

Collage professor

`<h2>What is your favorite food?</h2>`

默认显示：Select a food

Donuts

Apple ple

Krusty Flakes

Anything organic and locally sourced

`<h2>What is your favorite hobby?</h2>`

默认显示：Select a hobby

Watching TV

Kniting

Skateboarding

Reading

`<h2>What is your biggest fear?</h2>`

默认显示：Select a fear

Sock puppets

Flying

I'm fearless, man

Getting anything below an A in school

按钮 What Simpsons Character am I?

点击 What Simpsons Character am I? 显示对应的图片：

```
Bart.png
Homer.png
Lisa.png
Marge.png
```

图片下面显示 Try again 回到页面点击。

## Part A

For convenience I am breaking up this assignment into two parts. Part A should be attempted before Part B as it contains only the basic functionality necessary to create a server-side application. Part B should be attempted after our second server-side programming class.

> 为了方便起见，我将这个任务分为两部分。A部分应在B部分之前尝试，因为它只包含创建服务器端应用所需的基本功能。在我们的第二堂服务器端编程课之后，应尝试B部分。

In Part A you will be setting up a form that will prompt the user to answer a series of questions. After this the user's data will be submitted to a PHP program which will tabulate the results and display them to the user. All of the programmatic work for this part of the assignment will be done on the server using PHP. **Do not use any JavaScript for this part of the assignment!**.

> 在A部分，您将设置一个表单，提示用户回答一系列问题。之后，用户的数据将提交给一个PHP程序，该程序将整理结果并显示给用户。这部分任务的所有编程工作将在服务器上使用PHP完成。在这个任务部分不要使用任何JavaScript！

[You can download all of the artwork used in the sample project here](https://cs.nyu.edu/courses/spring23/CSCI-UA.0061-001/images/assignment07/assignment07_images.zip) (but you are welcome to use your own graphics / content items)

> 您可以在这里下载示例项目中使用的所有艺术作品（但您也可以使用自己的图形/内容项目）。[assignment07_images.zip](/1v1/06-KAI/31-Assignment07-Server-side-Quizzing-System/assignment07_images.zip)

Here's what you should work on for Part A:

> 这是您应该在A部分完成的任务：

- Layout (look and feel - HTML/CSS written in a PHP document)「布局（外观和感觉 - 编写在PHP文档中的HTML/CSS）」
    - index.php
        - Some kind of header element「某种类型的头部元素」
        - A form with at least 4 questions.「至少包含4个问题的表单。」
        - A button to submit the form「一个用于提交表单的按钮」
        - A visually appealing look / feel to the page (i.e. don't use an un-styled page - change the font family, colors, etc)「页面具有视觉上吸引人的外观/感觉（即不要使用未设置样式的页面 - 更改字体家族、颜色等）」
- Quiz Logic (HTML sending data to a PHP document to be processed)「测验逻辑（HTML将数据发送到PHP文档进行处理）」
    - Each quiz question should default to a neutral value (i.e. 'select an answer')「每个测验问题应默认为中性值（例如，“选择一个答案”）」
    - The user should be able to adjust their answers to the quiz using standard HTML form UI elements.「翻译：用户应能够使用标准的HTML表单UI元素调整他们对测验的答案。」
    - Clicking on the 'submit' button should send the data to a 'processresults.php' file for processing.「点击“提交”按钮应将数据发送到一个名为“processresults.php”的文件进行处理。」
    - During the processing phase, the value of each quiz question should be analyzed. If the user misses a question the quiz should not be scored and some kind of error message should appear to the user. **All of this should be done using PHP, not JavaScript!**「在处理阶段，应分析每个测验问题的值。如果用户错过了一个问题，测验不应该评分，用户应该看到某种错误信息。**所有这些操作都应使用 PHP 完成，而不是 JavaScript！**」
    - If each question has been successfully answered the result of the quiz can be calculated. This can be as easy as assigning a point for each answer (i.e. in my example watching TV gives homer +1, knitting gives marge +1, skateboarding gives bart +1 and reading gives lisa +1). Whichever result gets the highest number is the winner. If there is a tie just pick one of the winners (it doesn't need to be random or anything fancy - just pick one)「如果每个问题都已成功回答，可以计算测验的结果。这可以像为每个答案分配一个分数那样简单（例如，在我的示例中，看电视让霍默得分+1，编织让玛姬得分+1，滑板让巴特得分+1，阅读让丽莎得分+1）。得分最高的结果就是赢家。如果出现平局，只需选择一个赢家（无需随机或任何花哨的操作，只需挑选一个）。」
    - Print the result to the user (nothing fancy, just write out their answer - we will tweak this in Part B)「将结果显示给用户（无需过于花哨，只需写出他们的答案 - 我们将在第B部分进行调整）」

## Part B

::: info

This part should only be attempted after our second week of server-side programming! Many of the features written here have already been built for Part A. At the end of the program you only need to turn in Part B, which will include all of the features of Part A.

> 这部分仅在我们进行第二周的服务器端编程后才尝试！许多这里编写的功能已经在Part A中构建。在程序结束时，您只需要提交Part B，其中将包括Part A的所有功能。

:::

For full credit your program should do the following:

> 要获得满分，您的程序应执行以下操作：

- Layout (look and feel - HTML/CSS written in a PHP document)「布局（外观和感觉 - 在PHP文档中编写的HTML/CSS）」
    - index.php
        - Some kind of header element「某种类型的标题元素」
        - A form with at least 4 questions.「一个至少包含4个问题的表单。」
        - A button to submit the form「一个用于提交表单的按钮」
        - A visually appealing look / feel to the page (i.e. don't use an un-styled page - change the font family, colors, etc)「页面具有视觉上吸引人的外观和感觉（即不要使用未设置样式的页面 - 更改字体系列，颜色等）」
        - A link to 'results.php'「一个指向 'results.php' 的链接」
    - results.php
        - Some kind of header element「某种类型的标题元素」
        - At least four bars corresponding to the four possible outcomes of your quiz. Each bar should be colored differently and contain the name of the outcome inside of the bar. Default all bars to 100% of the width of the page.「至少四个条形图对应于测验的四种可能结果。每个条形图应该有不同的颜色，并在条形图内部包含结果的名称。将所有条形图的默认宽度设置为页面宽度的100%。」
        - A visually appealing look / feel to the page (i.e. don't use an unstyled page - change the font family, colors, etc)「页面具有视觉上吸引人的外观和感觉（即不要使用未设置样式的页面 - 更改字体系列，颜色等）」
- Quiz Logic (HTML sending data to a PHP document to be processed)「测验逻辑（HTML将数据发送到要处理的PHP文档）」
    - Each quiz question should default to a neutral value (i.e. 'select an answer')「每个测验问题应默认为中性值（即“选择一个答案”）」
    - The user should be able to adjust their answers to the quiz using standard HTML form UI elements.「用户应能够使用标准的HTML表单UI元素调整他们对测验的答案。」
    - Clicking on the 'submit' button should send the data to a 'processresults.php' file for processing.「点击“提交”按钮应将数据发送到“processresults.php”文件以进行处理。」
    - During the processing phase, the value of each quiz question should be analyzed. If the user misses a question the quiz should not be scored and some kind of error message should appear to the user.「在处理阶段，应分析每个测验问题的值。如果用户错过了一个问题，测验将不会得分，用户应该看到某种错误信息。」
    - If each question has been successfully answered the result of the quiz can be calculated. This can be as easy as assigning a point for each answer (i.e. in my example watching TV gives homer +1, knitting gives marge +1, skateboarding gives bart +1 and reading gives lisa +1). Whichever result gets the highest number is the winner. If there is a tie just pick one of the winners (it doesn't need to be random or anything fancy - just pick one)「如果每个问题都已成功回答，那么可以计算测验的结果。这可以像为每个答案分配一个分数那样简单（例如，在我的示例中，看电视使荷马得到+1，编织使玛吉得到+1，滑板使巴特得到+1，阅读使丽莎得到+1）。获得最高分数的结果是赢家。如果出现平局，只需挑选一个获胜者（不需要随机或任何花哨的东西 - 只需挑选一个）。」
    - Save the answer to a text file on the server using `file_put_contents`「使用 `file_put_contents` 将答案保存到服务器上的文本文件中。」
    - Set a cookie on the user's machine to keep track of their response using `set_cookie` (remember that this function needs to be called before anything else has been printed to the browser)「使用 `setcookie` 在用户的计算机上设置一个cookie以跟踪他们的响应（请记住，这个函数需要在打印到浏览器的任何其他内容之前调用）」
    - Finally, display a visually appealing representation of the user's result to them.「最后，向用户展示他们结果的视觉上吸引人的呈现。」
    - Upon successfully filling out the quiz the form should no longer display - only the results should show up.「成功填写测验后，表单不应再显示 - 只有结果应该显示。」
    - If the user goes away from the page and visits again the cookie should "remind" the PHP file of its previous value and you should display the user's previous result.「如果用户离开页面并再次访问，则Cookie应“提醒”PHP文件其先前的值，您应该显示用户先前的结果。」
    - The user should be able to click a "Take Again?" button - if they do this the program should show the quiz and let the user start over.「用户应该能够点击“重新开始？”按钮 - 如果这样做，程序应显示测验并让用户重新开始。」
- Result Logic (PHP document)「结果逻辑（PHP文档）」
    - Create a new PHP document called 'results.php'「创建一个名为“results.php”的新PHP文档。」
    - When this page loads it should open up the result file that was created by 'index.php' using `file_get_contents`「当此页面加载时，它应该使用 `file_get_contents` 打开由'index.php'创建的结果文件。」
    - The page should tell the user the total # of quiz submissions that have been recorded so far.「页面应告诉用户到目前为止记录的测验提交总数。」
    - The page should also contain a series of 'div' elements to represent each item the user could vote for in the quiz. The width of each 'div' element should correspond to the percentage of votes that item received (i.e. in my example homer might have gotten 10%, marge 20%, bart 30% and lisa 40%)「页面还应包含一系列“div”元素，以代表用户在测验中可以投票的每个选项。每个“div”元素的宽度应与该项收到的投票百分比相对应（例如，在我的示例中，荷马可能获得了10％，玛吉获得了20％，巴特获得了30％，丽莎获得了40％）。」
    - There should be a link back to the 'index.php' page to allow the user to re-vote, if desired.「应该有一个链接返回到“index.php”页面，以允许用户重新投票，如果需要的话。」

Thoroughly test your work and make sure that it meets the requirements set forth above. When you are finished, post your project to the i6 server and link it from your main menu page. We should be able to visit your 'webdev' folder and click on the link associated with this macro assignment to visit your project. Also create a ZIP archive of your work and submit it to Brightspace under the 'Assignment 07' category.「彻底测试您的工作，并确保它符合上述要求。完成后，请将您的项目发布到i6服务器，并从主菜单页面链接到它。我们应该能够访问您的“webdev”文件夹并单击与此宏任务相关联的链接以访问您的项目。还要创建您的工作的ZIP归档，并将其提交到Brightspace“作业07”类别下。」

## Grading Rubric (20 points)

::: info

Important: Ensure that you have set up the permissions on your data folder on the i6 server so that we can run your program! If your program works fine locally when we download it but it fails on the server it most likely has to do with a permissions issue. You will lose points if your program does not work on the server, and you cannot earn those points back after your program has been scored, so please test your program thoroughly before submitting it to be graded.

> 重要提示：确保您已在i6服务器上设置了数据文件夹的权限，以便我们可以运行您的程序！如果您的程序在我们下载它时在本地运行良好，但在服务器上运行失败，那么它很可能与权限问题有关。如果您的程序在服务器上无法正常工作，则会失去一定的分数，评分后无法恢复这些分数，因此请在提交评分前彻底测试您的程序。

:::

| **Criteria**                                                 | **Points** |
| ------------------------------------------------------------ | ---------- |
| Layout (index.php): * Some kind of header element * A form with at least 3 questions. * A button to submit the form * A visually appealing look / feel to the page (i.e. don't use an unstyled page - change the font family, colors, etc) * A link to 'results.php' at the bottom of the page | 2          |
| Layout (results.php) * Some kind of header element * At least four bars corresponding to the four possible outcomes of your quiz. * Each bar should be colored differently and contain the name of the outcome inside of the bar. Default all bars to 100% of the width of the page. * A visually appealing look / feel to the page (i.e. don't use an unstyled page - change the font family, colors, etc) | 1.5        |
| * Each quiz question should default to a neutral value (i.e. 'select an answer') * The user should be able to adjust their answers to the quiz using standard HTML form UI elements. * Clicking on the 'submit' button should send the data to another file for processing. | 1.5        |
| During the processing phase, the value of each quiz question should be analyzed. If the user misses a question the quiz should not be scored and some kind of error message should appear to the user. | 1          |
| If each question has been successfully answered the result of the quiz can be calculated. This can be as easy as assigning a point for each answer. Whichever result gets the highest number is the winner. If there is a tie just pick one of the winners (it doesn't need to be random or anything fancy - just pick one) | 2          |
| Save the answer to a text file on the server using file_put_contents | 3          |
| Upon a successful submission a visually appealing representation of the user's result should appear | 1          |
| Upon successfully filling out the quiz the form should no longer display - only the results should show up (due to the presence of the cookie). If the user goes away from the page and visits again the cookie should "remind" the PHP file of its previous value and you should display the user's previous result. | 3          |
| The user should be able to click a "Take Again?" button - if they do this the program should show the quiz and let the user start over. | 1          |
| Result Logic: * When this page loads it should open up the result file that was created by 'index.php' using file_get_contents * The page should contain a series of 'div' elements to represent each item the user could vote for in the quiz * The width of each 'div' element should correspond to the percentage of votes that item received (i.e. in my example pikachu might have gotten 10%, squirtle 20%, charmander 30% and bulbasaur 40%) * There should be a link back to the 'index.php' page to allow the user to re-vote, if desired. | 4          |











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