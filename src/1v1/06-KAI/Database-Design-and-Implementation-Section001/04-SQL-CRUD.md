---
title: 04-SQL CRUD
icon: icon_SQL
date: 2023-10-18 09:17:21
author: AI悦创
isOriginal: true
category: 
    - 1v1
    - 纽约大学一对一
    - NYU 1v1
    - web 一对一
    - 数据结构一对一
    - 留学生辅导
    - 留学生作业辅导
tag:
    - 纽约大学一对一
    - NYU 1v1
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

Complete the following exercises. For each:

- determine the structure of any tables
- determine the data type of any fields
- determine which field(s) is the primary key for each table
- determine which field(s) is the foreign keys for any tables that require them
- write SQL queries that perform the requested functionality.

## Part 1: Restaurant finder

Design a database table named `restaurants` that would allow an application that uses it to find restaurants and a table named `reviews` that would hold reviews for any restaurant.

### Table structure

Decide what fields and data types are necessary for the `restaurants` table. Bear in mind that the application must be able to filter restaurants by...

- **Category** (i.e. genre of food)
- **Price tier** (i.e cheap, medium, or expensive)
- **Neighborhood** (a particular NYC neighborhood)
- **Opening hours** (for simplicity, you can assume each restaurant has the same opening hours every day)
- **Average rating** (out of 5 stars)
- **Good for kids** (true or false)

The application must also be able to allow users to leave reviews associated with any restaurant.

Write the SQL commands to create the tables with the structure you determine is necessary.

### Practice data

Insert realistic-looking dummy data for one thousand restaurants. Use [mockaroo.com](https://mockaroo.com) - a tool for generating mock data - helpful. A few non-obvious notes about Mockaroo:

- Mockaroo's **Row Number** field type can be used to generate primary key numbers.
- Mockaroo's **Time** field type can generate times in 24 hour format which is useful for generating opening/closing times necessary for restaurant data in this assignment.
- Mockaroo's **Custom List** field type can randomly pick from a list of values you enter. This can be useful for randomly picking from a set of NYC neighborhood names for any restaurant.

Include the practice data in a CSV file named `restaurants.csv` in the directory named `data`.

Write the SQLite commands necessary to import the data.

### Queries

Write a single SQL query to perform each of the following tasks:

1. Find all cheap restaurants in a particular neighborhood (pick any neighborhood as an example).

1. Find all restaurants in a particular genre (pick any genre as an example) with 3 stars or more, ordered by the number of stars in descending order.

1. Find all restaurants that are open now (see hint below).

1. Leave a review for a restaurant (pick any restaurant as an example).

1. Delete all restaurants that are not good for kids.

1. Find the number of restaurants in each NYC neighborhood.

#### Hint

The following SQLite code returns the current time of the day in 24 hour format UTC time - this may be useful in determining whether a given restaurant is currently open or not `strftime('%H:%M', 'now')`

To see the return value of this command directly (not as part of a comparison operation), use the following syntax: `SELECT strftime('%H:%M', 'now');`

## Part 2: Social media app

The social media app you are designing a database for allows Users to share two kinds of content: **Messages** and **Stories**.

### Tables structure

Decide what fields and data types are necessary for the two tables necessary for this app: `users` and `posts`. The `posts` table stores both Messages and Stories.

Bear in mind that the application must be able to use these tables to perform the required functionality outlined below.

#### Users:

Users can register for the app by supplying their...

- email
- password
- handle (i.e. username).

#### Messages:

- Messages consist of text only.
- Messages are sent from one user to another specific user.
- Messages become invisible immediately after view and don't show up in the app thereafter.
- Messages are never actually deleted from the database table, even when invisible to the user (the social media company that produces the app keeps 'deleted' content in its database for future data harvesting, monetization purposes, and more.)

#### Stories:

- Stories consist of text only.
- Stories are public and every user can see them.
- Stories become invisible 24 hours after posting and don't show up in the app thereafter.
- Stories are never deleted from the database table, even when invisible to the user.

Write the SQL command to create these tables with the structure you determine is necessary.

### Practice data

Insert realistic-looking dummy data for one thousand Users, one thousand Messages, and one thousand Stories.

Include the practice data in CSV files named `users.csv` and `posts.csv` in the directory named `data`.

Write the SQLite commands necessary to import the data into the respective tables.

### Queries

Write a single SQL query to perform each of the followin tasks:

1. Register a new User.

1. Create a new Message sent by a particular User to a particular User (pick any two Users for example).

1. Create a new Story by a particular User (pick any User for example).

1. Show the 10 most recent visible Messages and Stories, in order of recency.

1. Show the 10 most recent visible Messages sent by a particular User to a particular User (pick any two Users for example), in order of recency.

1. Make all Stories that are more than 24 hours old invisible.

1. Show all invisible Messages and Stories, in order of recency.

1. Show the number of posts by each User.

1. Show the post text and email address of all posts and the User who made them within the last 24 hours.

1. Show the email addresses of all Users who have not posted anything yet.

### Hint

The following SQLite code returns the difference in hours between the time now and an earlier date and time - this may be useful in determining the number of hours that have passed since a post was made: `ROUND((JULIANDAY('now') - JULIANDAY('2021-02-21 12:50:00')) * 24)`

To see the return value of this command directly (not as part of a comparison operation), use the following syntax: `SELECT ROUND((JULIANDAY('now') - JULIANDAY('2021-02-21 12:50:00')) * 24);`

## Write a report

Update the `README.md` file to include the solutions to all of these instructions. For each part, be sure to include:

- the SQL code to create each of the required tables
- a link to each of the practice CSV data files in the `data` directory.
- the SQLite code to import the practice CSV data files into the tables.
- the SQL queries that solve each of the tasks you were asked to do. Make it clear which task each query is intended to solve - include the task number and text on the line above the SQL code solution.

Make the document well-formatted using Markdown code. Use clear headings and sub-headings and use Markdown's ability to embed code snippets into a document.

## Submit your work

Each student must submit this assignment individually. Use Visual Studio Code to perform git `stage`, `commit` and `push` actions to submit. These actions are all available as menu items in Visual Studio Code's Source Control panel.

1. Type a short note about what you have done to the files in the `Message` area, and then type `Command-Enter` (Mac) or `Control-Enter` (Windows) to perform git `stage` and `commit` actions.
1. Click the `...` icon next to the words, "Source Control" and select "Push" to perform the git `push` action. This will upload your work to your repository on GitHub.com.



1. 创建表格的 SQL 语句

```sql
CREATE TABLE restaurants (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    category TEXT NOT NULL,
    price_tier TEXT NOT NULL,
    neighborhood TEXT NOT NULL,
    opening_hours TEXT NOT NULL,
    closing_hours TEXT NOT NULL,
    average_rating REAL NOT NULL,
    good_for_kids BOOLEAN NOT NULL
);

CREATE TABLE reviews (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    restaurant_id INTEGER,
    review TEXT NOT NULL,
    rating INTEGER NOT NULL,
    FOREIGN KEY (restaurant_id) REFERENCES restaurants(id)
);
```

2. 导入数据

使用以下的SQLite命令导入 `restaurants.csv` 到 `restaurants` 表:

```sql
.mode csv
.import /mnt/data/restaurants.csv restaurants
```

3. 查询某个邻里的所有便宜餐厅:

```sql
SELECT * FROM restaurants WHERE price_tier = 'cheap' AND neighborhood = 'ExampleNeighborhood';
```

4. 查询某个类别的所有评分3星以上的餐厅, 并按照星级降序排列:

```sql
SELECT * FROM restaurants WHERE category = 'ExampleCategory' AND average_rating >= 3 ORDER BY average_rating DESC;
```

5. 查询当前开放的所有餐厅:

```sql
SELECT * FROM restaurants WHERE strftime('%H:%M', 'now') BETWEEN opening_hours AND closing_hours;
```

6. 为某个餐厅留下评论:

```sql
INSERT INTO reviews (restaurant_id, review, rating) VALUES (1, '这是一个评论.', 5);
```

7. 删除所有不适合儿童的餐厅:

```sql
DELETE FROM restaurants WHERE good_for_kids = 0;
```

8. 查询每个纽约市区的餐厅数量:

```sql
SELECT neighborhood, COUNT(*) as count FROM restaurants GROUP BY neighborhood;
```

### Part 2: 社交媒体应用

1. 创建表格的 SQL 语句

```sql
CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    handle TEXT NOT NULL
);

CREATE TABLE posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    content TEXT NOT NULL,
    type TEXT NOT NULL,
    recipient_id INTEGER,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
    visible BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (recipient_id) REFERENCES users(id)
);
```

2. 导入数据

假设我们有 `users.csv` 和 `posts.csv` 文件，我们可以使用以下的SQLite命令导入这些文件:

```sql
.mode csv
.import /mnt/data/users.csv users
.import /mnt/data/posts.csv posts
```

3. 查询

1. 注册一个新用户:

```sql
INSERT INTO users (email, password, handle) VALUES ('example@email.com', 'examplePassword', 'exampleHandle');
```

2. 由某个用户发送给另一个用户的新消息:

```sql
INSERT INTO posts (user_id, content, type, recipient_id) VALUES (1, '这是一个消息', 'Message', 2);
```

3. 某个用户发布新故事:

```sql
INSERT INTO posts (user_id, content, type) VALUES (1, '这是一个故事', 'Story');
```

4. 显示最近的10条可见的消息和故事，按时间顺序:

```sql
SELECT * FROM posts WHERE visible = TRUE ORDER BY timestamp DESC LIMIT 10;
```

5. 显示某个用户发送给另一个用户的最近的10条可见消息:

```sql
SELECT * FROM posts WHERE user_id = 1 AND recipient_id = 2 AND type = 'Message' AND visible = TRUE ORDER BY timestamp DESC LIMIT 10;
```

6. 使超过24小时的所有故事变得不可见:

```sql
UPDATE posts SET visible = FALSE WHERE type = 'Story' AND ROUND((JULIANDAY('now') - JULIANDAY(timestamp)) * 24) > 24;
```

7. 按时间顺序显示所有不可见的消息和故事:

```sql
SELECT * FROM posts WHERE visible = FALSE ORDER BY timestamp DESC;
```

8. 显示每个用户的帖子数量:

```sql
SELECT user_id, COUNT(*) as post_count FROM posts GROUP BY user_id;
```

9. 显示过去24小时内的所有帖子的文本和发布它们的用户的电子邮件地址:

```sql
SELECT p.content, u.email FROM posts p JOIN users u ON p.user_id = u.id WHERE ROUND((JULIANDAY('now') - JULIANDAY(p.timestamp)) * 24) <= 24;
```

10. 显示尚未发布任何内容的所有用户的电子邮件地址:

```sql
SELECT email FROM users WHERE id NOT IN (SELECT DISTINCT user_id FROM posts);
```

### Part 1: Restaurant finder

1. SQL 创建表格语句

```sql
CREATE TABLE restaurants (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    category TEXT NOT NULL,
    price_tier TEXT NOT NULL,
    neighborhood TEXT NOT NULL,
    opening_hours TEXT NOT NULL,
    closing_hours TEXT NOT NULL,
    average_rating REAL NOT NULL,
    good_for_kids BOOLEAN NOT NULL
);

CREATE TABLE reviews (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    restaurant_id INTEGER,
    review TEXT NOT NULL,
    rating INTEGER NOT NULL,
    FOREIGN KEY (restaurant_id) REFERENCES restaurants(id)
);
```

2. 导入数据

```sql
.mode csv
.import /mnt/data/restaurants.csv restaurants
```

### Part 2: 社交媒体应用

1. SQL 创建表格语句

```sql
CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    handle TEXT NOT NULL
);

CREATE TABLE posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    content TEXT NOT NULL,
    type TEXT NOT NULL,
    recipient_id INTEGER,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
    visible BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (recipient_id) REFERENCES users(id)
);
```

2. 导入数据

```sql
.mode csv
.import /mnt/data/users.csv users
.import /mnt/data/posts.csv posts
```









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