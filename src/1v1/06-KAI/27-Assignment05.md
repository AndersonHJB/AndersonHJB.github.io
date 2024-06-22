---
title: Assignment 05-Seasonal To-Do List
icon: web1
date: 2023-03-18 23:21:43
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

For this assignment you will be creating an online system that lets users keep track of seasonal activities. Here is a video example of how the this program should work. Note that you may redesign your system to use your own content, colors and layout, but the overall logic should be the same.

> 对于这个作业，你将创建一个在线系统，让用户跟踪季节活动。这里有一个视频例子，说明这个程序应该如何工作。请注意，您可以重新设计系统以使用自己的内容、颜色和布局，但总体逻辑应该是相同的。

<VidStack src="/1v1/06-KAI/27-Assignment05/27-Assignment05.mp4" />


## Phase 1

> 第一阶段

::: details Code written in-class

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Seasonal To-Do List</title>
        <style>
            body {
                background-image: url('images/corkboard.jpg');
            }
            #add_item {
                position: absolute;
                bottom: 20px;
                right: 20px;
            }
            #season_filter {
                position: absolute;
                top: 20px;
                right: 20px;
            }
            #panel_add_new_item {
                width: 500px;
                height: 250px;
                background-color: white;
                position: absolute;
                top: 50%;
                left: 50%;
                margin-left: -250px;
                margin-top: -125px;
            }
            .hidden {
                display: none;
            }
            .error {
                background-color: red;
                color: white;
            }
            .item {
                width: 100px;
                height: 100px;
                float: left;
                margin-right: 20px;
            }
            .winter {
                background-color: lightblue;                
            }
            .spring {
                background-color: lightgreen;
            }
            .summer {
                background-color: yellow;
            }
            .fall {
                background-color: burlywood;
            }

        </style>
    </head>
    <body>
        <h1>Seasonal To-Do List</h1>

        <select id="season_filter">
            <option value="all">Show all seasons</option>
            <option value="winter">Winter</option>
            <option value="spring">Spring</option>
            <option value="summer">Summer</option>
            <option value="fall">Fall</option>
        </select>

        <img id="add_item" src="images/add_button.png">

        <div id="panel_add_new_item" class="hidden">
            <h2>Add new Item</h2>

            <div class="error hidden" id="add_error">Please fill out all of the form fields!</div>

            <form>
                <label for="title">Title</label><br>
                <input type="text" id="title"><br>

                <label for="category">Category</label><br>
                <select id="category">
                    <option value="winter">Winter</option>
                    <option value="spring">Spring</option>
                    <option value="summer">Summer</option>
                    <option value="fall">Fall</option>
                </select><br>
        
                <label for="description">Description</label><br>
                <textarea id="description"></textarea><br>

                <button id="add_save">Save</button>
                <button id="add_cancel">Cancel</button>
            </form>
        </div>

        <div id="item_container"></div>



        <script>
            // dom queries
            const panel_add_new_item = document.querySelector("#panel_add_new_item");
            const add_item = document.querySelector("#add_item");
            const add_cancel = document.getElementById('add_cancel');
            const add_save = document.getElementById('add_save');
            const add_error = document.getElementById('add_error');
            const item_container = document.getElementById('item_container');

            // when the user clicks on the + button trigger the panel to appear
            add_item.onclick = function(e) {
                panel_add_new_item.classList.remove('hidden');

                // erase the form
                document.querySelector('#title').value = '';
                document.querySelector('#description').value = '';
                document.querySelector('#category').value = 'winter';
            }

            add_cancel.onclick = function(e) {
                e.preventDefault();
                panel_add_new_item.classList.add('hidden');
            }

            add_save.onclick = function(e) {
                e.preventDefault();

                // grab the value from the title, category and description fields
                let t = document.querySelector('#title').value;
                let d = document.querySelector('#description').value;
                let c = document.querySelector('#category').value;

                // if we do have all 3, create the to-do item
                if (t && d && c) {
                    add_error.classList.add('hidden');

                    // create our new to-do item
                    let item = document.createElement('div');
                    item.classList.add('item');
                    item.innerText = t;
                    item.classList.add(c);
                    item_container.appendChild(item);

                    // have the item rememeber all the data it knows about itself
                    item.dataset.title = t;
                    item.dataset.description = d;
                    item.dataset.category = c;

                    // set the item up so you can click on it
                    item.onclick = function(event) {
                        console.log(event.currentTarget.dataset.title);
                        console.log(event.currentTarget.dataset.description);
                        console.log(event.currentTarget.dataset.category);
                    }

                    // close the add panel
                    panel_add_new_item.classList.add('hidden');
                }

                // make sure we hvae all 3 -- if not, trigger the error message
                else {
                    add_error.classList.remove('hidden');
                }


            }


        </script>
    </body>
</html>
```

:::

For full credit for phase 1 you should ensure that your program should do the following. [Note that you can download all of the graphics used in this project here](https://cs.nyu.edu/courses/spring23/CSCI-UA.0061-001/images/assignment05/assignment05_images.zip).

> 对于阶段1的全部学分，您应该确保您的程序应该做到以下几点。请注意，您可以在这里下载这个项目中使用的所有图形。**[assignment05_images.zip](/1v1/06-KAI/27-Assignment05/assignment05_images.zip)**

- Layout「布局」
    - Some kind of header to introduce your page「一些标题来介绍你的页面」
    - A "corkboard" background image that spans the entire page.「一个“软木板”背景图像，横跨整个页面。」
    - A drop-down menu that will allow the user to "filter" by season.「下拉菜单允许用户根据季节进行“筛选”。」
    - An "add" button that appears at the bottom right side of the page. This image should have a hover state that causes it to grow/shrink if the user hovers/leaves the element.「一个“添加”按钮，出现在页面的右下角。这个图像应该有一个悬停状态，当用户悬停/离开元素时，它会增长/缩小。」
    - A container that will contain all of the activities that have been added to the log.「一个容器，它将包含已添加到日志中的所有活动。」
    - A panel that appears when you click the 'add' button.「点击“添加”按钮时出现的面板。」
    - A panel that appears when you click on a previously added item.「单击先前添加的项时出现的面板。」
- New Item Logic「新道具逻辑」
    - Clicking the "add" button should cause the "Add New Item" panel to appear.「点击“添加”按钮会出现“添加新项目”面板。」
    - If the user clicks the "Cancel" button this panel should disappear.「如果用户点击“取消”按钮，这个面板就会消失。」
    - If the user clicks the "Save" button the program should detect if the user has filled out the required form fields (title, category and description) - if any are missing an error message should appear.
    - If the user clicks the "Save" button and all fields have been filled out the following should occur:
        - A new item should be created. You will have to design the HTML for these items dynamically using `createElement`
        - Items should visually display the title of the newly created item, but not the description.
        - Items should be colored based on their season (hint: create a class for each season)
        - Items should also contain a small "delete" button at the top right side of the item (initially hidden)
        - Once the item has been created the "Add New Item" panel should disappear.
    - Note that if the attempts to add another item the "Add New Item" panel should be cleared (i.e. the previously inputted data should be removed and the panel should present a blank form for the user to fill out). Also note that if the user clicks the "cancel" button any data that they entered should also be cleared.
- Item Interactivity
    - When the user hovers over an item the "delete" button should appear - when they hover out of the item the button should disappear.
    - When the user clicks anywhere on an item (other than the "delete" button) the "info" panel should appear. This panel should contain the following information:
        - The title of the item
        - The season of the item
        - The description of the item
        - The time the item was created
        - The time the item was last accessed (which should be the very moment the user clicked on the item)
        - Hint: you may need to use the `dataset` property to store the creation date. You can use the `new Date()` object that you used back in Macro Assignment #2 to obtain the current date & time.
    - The "info" panel should contain a "close" button to close the panel and return the user to the main view of the board.
    - If the user clicks on the "delete" button associated with an item the item should delete itself and be removed from the board.
- Item Filtering
    - When the user changes the drop down menu the board should react by only showing items associated with that season.
    - Hint: use the `onchange` event to detect when the drop down menu has changed.
    - The filter should also contain a "show all" entry that will show all items regardless of their season.
    - If the user chooses to add a new item while the filter has been set you should revert the filter back to "show all"

## Phase 2

Select one of the following three features to add to your program. You can complete 2 or 3 features for some extra credit. None of these features are represented in the video above and you are free to decide how to best design these items.

- **Completed Event**: add an additional button to each item to indicate that an event is 'complete' - i.e. if this was a 'to-do' list clicking on this button would cause the item to be 'checked off' as complete. Completed events should have some kind of visual indicator attached to them (a checkbox?). Also allow completed events to switch back to being 'un-completed'. The filtering system should also be updated to filter completed / un-completed items.
- **Edit events**: add an additional button to each note that allows the user to edit any event. The edit button should display some interface that lets the user change the text of the event as well as the category of the event. This can be a pop-up interface (modal box) or an in-line editing interface - your choice.
- **Reorder events**: add two additional buttons to your notes which will allow them to move left and right in the list. Clicking on the 'left' indicator will move the element left by one position, and clicking on the 'right' indicator will move the element right by one position. If an element is already at the beginning of the list it should not be given an 'left' indicator, and likewise an entry at the end of the list should not be given a 'right' indicator (hint: hide the indicator if it is moved into the first / last position).

Thoroughly test your work and make sure that it meets the requirements set forth above. When you are finished with both Phase 1 and Phase 2, post your project to the i6 server and link it from your main menu page. We should be able to visit your 'webdev' folder and click on the link associated with this macro assignment to visit your project. Also create a ZIP archive of your work and submit it to Brightspace under the 'Assignment 05' category.

## Grading Rubric (25 points)

| **Criteria**                                                 | **Points** |
| ------------------------------------------------------------ | ---------- |
| Layout (mainly completed in class): * Some kind of header to introduce your page * A "corkboard" background image that spans the entire page. * A drop-down menu that will allow the user to "filter" by season. * An "add" button that appears at the bottom right side of the page. This image should have a hover state that causes it to grow/shrink if the user hovers/leaves the element. * A container that will contain all of the activities that have been added to the log. * A panel that appears when you click the 'add' button. * A panel that appears when you click on a previously added item. | 2          |
| New Item Logic (apperance & data validation) * Clicking the "add" button should cause the "Add New Item" panel to appear. * If the user clicks the "Cancel" button this panel should disappear. * If the user clicks the "Save" button the program should detect if the user has filled out the required form fields (title, category and description) - if any are missing an error message should appear. | 2          |
| New Item Logic (successful adding of new items) * If the user clicks the "Save" button and all fields have been filled out the following should occur: * A new item should be created. You will have to design the HTML for these items dynamically using createElement * Items should visually display the title of the newly created item, but not the description. * Items should be colored based on their season (hint: create a class for each season) * Items should also contain a small "delete" button at the top right side of the item (initially hidden). | 2          |
| New item Logic (reset the new item panel) * Once the item has been created the "Add New Item" panel should disappear. * Note that if the attempts to add another item the "Add New Item" panel should be cleared (i.e. the previously inputted data should be removed and the panel should present a blank form for the user to fill out). Also note that if the user clicks the "cancel" button any data that they entered should also be cleared | 2          |
| Item Interactivity * When the user hovers over an item the "delete" button should appear - when they hover out of the item the button should disappear. | 2          |
| Item Interactivity * When the user clicks anywhere on an item (other than the "delete" button) the "info" panel should appear. This panel should contain the following information: * The title of the item * The season of the item * The description of the item * The time the item was created * The time the item was last accessed (which should be the very moment the user clicked on the item) | 3          |
| The "info" panel should contain a "close" button to close the panel and return the user to the main view of the board. If the user clicks on the "delete" button associated with an item the item should delete itself and be removed from the board. | 2          |
| Item Filtering * When the user changes the drop down menu the board should react by only showing items associated with that season. * The filter should also contain a "show all" entry that will show all items regardless of their season. * If the user chooses to add a new item while the filter has been set you should revert the filter back to "show all" | 4          |
| One of the following three items need to be completed for full credit: * Completed items * Edit items * Reorder items | 6          |
| "Extra Credit: Two or three of the following three items were completed in addition to one required feature: * Completed items * Edit items * Reorder items" | 2          |

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