---
title: Homework 6 SQL
date: 2024-10-24 12:03:26
author: AI悦创
isOriginal: true
icon: blog
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
watermark: true
---

SQL SELECT practice in MySQL

This assignment gives you an opportunity to hone your skills as an SQL programmer. Please download the self-contained exported database schema and import the schema into a database named *musiclastnamefirstinitial,* where *lastname* is your last name and *firstinitial* is the first letter of your first name. Please submit one hwk5musicdblastnamefirstinitial.sql file to canvas that contains the queries that you wrote for the assignment.

The database schema represents the data associated with a music library. The database tracks artists, albums, songs, genres of songs, moods of songs, users, recording labels and users following artists. An artist represents a musician. A musician can release albums as well as perform on songs on an album.

The database limits each song to one mood as well as one genre.

An artist creates zero to many albums and an album is associated with 1 artist. An album has 0 to many songs. A song is associated with 1 album. A song can be associated with 1 to many artists and an artist is associated with 1 to many songs. As you can see, this many to many relationship is represented via a separate table, the artist_performs_song table.

A song is associated with 1 genre and a genre is associated with 0 to many songs. A song is associated with 1 mood and a mood is associated with 0 to many songs. An artist is associated with 1 recording label and a recording label is associated with 0 to many artists.

A user can follow 0 to many artists. An artist can be followed by 0 to many users. As you can see this many to many relationship is represented via the table user_follows_artist. When a user follows an artist, they follow the albums and the songs produced by that artist. Here is the logical database design for the database:

![](https://blog.images.bornforthis.cn/docs-images/sha256/43/43b06e602ea2d8b3e7fdcb984024ca56e895d0fabcc86fc3ef2c4a6feeb06fdc.png)

**Within your solution file please provide the question number in comments before the solution.**

**[IMPORTANT]**

Write SQL queries that answer the following questions. Make sure you compose a query that does not use literal values determined by perusing the tuples. The SQL queries that you compose must work against **any instance** of this database and not just the instance provided to you. Also, remember some queries may generate an empty result.

1. (5 points) For each artist, return the artist name and their recording label name.
2. (5 points) Determine the number of artists associated with each record label. Rename the count signed_artists. Sort the results in descending order using count signed_artists. Make sure all labels are in the result.
3. (5 points) Determine the number of users who have followed artists. Rename the count num_followers.
4. (5 points) Make a separate table from the song table – where the records are for the songs with the Rock genre. Name the new table rock_songs. Remember, a table can only be created once. If you attempt to create the same table multiple times it will generate an error.
5. (5 points) For each song return the song id, song title, album name, recording label and the artist’s name who produced the album.
6. (5 points) For each song, create an aggregated field that contains a list of the artists who performed the song. The result set should contain the song title, the album name, the recording label (found from the artist that produced the album the song is on) and the grouped list of artists. Order the results in ascending order by the song name.
7. (5 points) Which song has the most number of artists who appear on it? Return the song name.
8. (5 points) How many users follow each of the different artists? The result should contain the artist’s name and the count of the number of followers. Rename the count to num_followers. All artists must appear in the result. Order the results in descending order by num_followers.
9. (5 points) For each recording label, determine the number of albums they have released. Rename the number of albums to num_albums. Sort the results in descending order using the num_albums field.

10. (5 points) For each genre in the genre table, determine the number of songs associated with that genre. The result should contain the genre name and the count. Rename the count to `num_songs`. Order the results by `num_songs` in descending order. Make sure all genres appear in the result. If a genre is not associated with any songs, then the count for the number of songs should be 0.

11. (5 points) For each song on an album, return the song title, the album name, the producing artist, the genre, the mood, and the number of followers for the producing artist.

12. (5 points) Return the artist name(s), which are followed by all users.

13. (5 points) Return the user id, user name and user email for members who follow all artists in the database.

14. (5 points) Return all albums which are associated with record labels containing the keyword `Music`. The results should contain all fields from the albums table.

15. (10 points) Find users that follow the same artist. Each returned tuple should contain the user name for the 2 users as well as the artist that is followed by the two users. Order the results in ascending order by the artist’s name. Make sure you do not match a member with themselves. Also, only report the same member pair once.

16. (5 points) For each artist, determine the number of albums they have released. The result should contain the artist’s name and the count of albums. Rename the count of albums to `num_albums`. Order the results in descending order by `num_albums`.

17. (5 Points) Return the maximum number of songs associated with any one of the artists. An artist can be associated with a song by producing it or by performing on it. The result should be the maximum song count for the artist. Rename the maximum value to `most_songs`.

18. (5 Points) Return the name of the artist who performed the most number of songs. The result should contain the artist name and the count of songs, renamed to `num_songs`.

::: code-tabs

@tab 1. 返回每位艺术家及其所属的唱片公司

```sql
SELECT artists.artist_name, record_label.label_name 
FROM artists
JOIN record_label ON artists.record_label_id = record_label.rid;
```

@tab 2. 计算每个唱片公司旗下的艺术家数量，并按照数量降序排序

```sql
SELECT record_label.label_name, COUNT(artists.aid) AS signed_artists 
FROM record_label
LEFT JOIN artists ON record_label.rid = artists.record_label_id
GROUP BY record_label.label_name
ORDER BY signed_artists DESC;
```

@tab 3. 统计关注艺术家的用户数量

```sql
SELECT COUNT(DISTINCT user_follows_artist.user_id) AS num_followers 
FROM user_follows_artist;
```

@tab 4. 创建新表 `rock_songs` 来存储 Rock 类型的歌曲

```sql
CREATE TABLE rock_songs AS 
SELECT * FROM songs
WHERE genre_id = (SELECT gid FROM genres WHERE genre_name = 'Rock');
```

@tab 5. 返回每首歌的 id、标题、专辑名、唱片公司名及制作专辑的艺术家

```sql
SELECT songs.sid, songs.song_name, albums.album_name, record_label.label_name, artists.artist_name 
FROM songs
JOIN albums ON songs.album_id = albums.alid
JOIN artists ON albums.artist = artists.artist_name
JOIN record_label ON artists.record_label_id = record_label.rid;
```

@tab 6. 为每首歌创建一个包含表演该歌曲的所有艺术家的聚合字段

```sql
SELECT songs.song_name, albums.album_name, record_label.label_name, GROUP_CONCAT(artists.artist_name ORDER BY artists.artist_name) AS artists_list
FROM songs
JOIN albums ON songs.album_id = albums.alid
JOIN artist_performs_song ON songs.sid = artist_performs_song.sid
JOIN artists ON artist_performs_song.aid = artists.aid
JOIN record_label ON artists.record_label_id = record_label.rid
GROUP BY songs.sid
ORDER BY songs.song_name;

SELECT 
    songs.song_name, 
    albums.album_name, 
    MAX(record_label.label_name) AS label_name,  -- 使用 MAX 来聚合 label_name
    GROUP_CONCAT(artists.artist_name ORDER BY artists.artist_name) AS artists_list
FROM songs
JOIN albums ON songs.album_id = albums.alid
JOIN artist_performs_song ON songs.sid = artist_performs_song.sid
JOIN artists ON artist_performs_song.aid = artists.aid
JOIN record_label ON artists.record_label_id = record_label.rid
GROUP BY songs.sid, albums.album_name  -- 确保 GROUP BY 中包含所有非聚合字段
ORDER BY songs.song_name;

```

@tab 7. 返回表演艺术家最多的歌曲名称

```sql
SELECT songs.song_name 
FROM artist_performs_song
JOIN songs ON artist_performs_song.sid = songs.sid
GROUP BY songs.sid
ORDER BY COUNT(artist_performs_song.aid) DESC
LIMIT 1;
```

@tab 8. 统计每位艺术家的粉丝数量

```sql
SELECT artists.artist_name, COUNT(user_follows_artist.user_id) AS num_followers
FROM artists
LEFT JOIN user_follows_artist ON artists.aid = user_follows_artist.aid
GROUP BY artists.artist_name
ORDER BY num_followers DESC;
```

@tab 9. 统计每个唱片公司发行的专辑数量

```sql
SELECT record_label.label_name, COUNT(albums.alid) AS num_albums
FROM record_label
LEFT JOIN artists ON record_label.rid = artists.record_label_id
LEFT JOIN albums ON artists.artist_name = albums.artist
GROUP BY record_label.label_name
ORDER BY num_albums DESC;
```

@tab 10. 统计每个类型的歌曲数量

```sql
SELECT genres.genre_name, COUNT(songs.sid) AS num_songs
FROM genres
LEFT JOIN songs ON genres.gid = songs.genre_id
GROUP BY genres.genre_name
ORDER BY num_songs DESC;
```

@tab 11. 返回每首专辑中的歌曲标题、专辑名、制作艺术家、类型、情绪以及该艺术家的粉丝数

```sql
SELECT songs.song_name, albums.album_name, artists.artist_name, genres.genre_name, moods.mood_name, COUNT(user_follows_artist.user_id) AS num_followers
FROM songs
JOIN albums ON songs.album_id = albums.alid
JOIN artists ON albums.artist = artists.artist_name
JOIN genres ON songs.genre_id = genres.gid
JOIN moods ON songs.mood_id = moods.mid
LEFT JOIN user_follows_artist ON artists.aid = user_follows_artist.aid
GROUP BY songs.sid, albums.album_name, artists.artist_name, genres.genre_name, moods.mood_name;
```

@tab 12. 返回所有用户都关注的艺术家名称

```sql
SELECT artists.artist_name
FROM artists
JOIN user_follows_artist ON artists.aid - user_follows_artist.ard
GROUP BY artists.aid
HAVING COUNT(DISTINCT user_follows_artist.user_id) = (SELECT COUNT(*) FROM user);
```

@tab 13. 返回所有关注数据库中所有艺术家的用户 id、用户名和用户邮箱

```sql
SELECT user.user_id, user.user_name, user.user_email
FROM user
WHERE NOT EXISTS (
	SELECT 1
	FROM artists
	LEFT JOIN user_follows_artist ufa ON artists.aid = ufa.aid AND ufa.user_id = user.user_id
	WHERE ufa.user_id IS NULL
);
```

@tab 14. 返回与唱片公司名称包含`Music`关键词相关的所有专辑

```sql
SELECT * 
FROM albums
JOIN artists ON albums.artist = artists.artist_name
JOIN record_label ON artists.record_label_id = record_label.rid
WHERE record_label.label_name LIKE '%Music%';
```

@tab 15. 找到关注同一艺术家的用户，返回两个用户的用户名以及共同关注的艺术家

```sql
SELECT u1.user_name AS user1, u2.user_name AS user2, artists.artist_name 
FROM user_follows_artist ufa1
JOIN user_follows_artist ufa2 ON ufa1.aid = ufa2.aid AND ufa1.user_id < ufa2.user_id
JOIN user u1 ON ufa1.user_id = u1.user_id
JOIN user u2 ON ufa2.user_id = u2.user_id
JOIN artists ON ufa1.aid = artists.aid
ORDER BY artists.artist_name, user1, user2;
```

@tab 16. 统计每位艺术家发布的专辑数量

```sql
SELECT artists.artist_name, COUNT(albums.alid) AS num_albums
FROM artists
LEFT JOIN albums ON artists.artist_name = albums.artist
GROUP BY artists.artist_name
ORDER BY num_albums DESC;
```

@tab 17. 返回与某位艺术家关联的最大歌曲数量（包括制作和表演）

```sql
SELECT MAX(song_count) AS most_songs
FROM (
    SELECT COUNT(DISTINCT songs.sid) AS song_count
    FROM artists
    LEFT JOIN albums ON artists.artist_name = albums.artist
    LEFT JOIN songs ON albums.alid = songs.album_id OR artists.aid IN (SELECT aid FROM artist_performs_song WHERE sid = songs.sid)
    GROUP BY artists.aid
) AS song_counts;
```

@tab 18. 返回表演最多歌曲的艺术家名称和表演的歌曲数量

```sql
SELECT artists.artist_name, COUNT(DISTINCT songs.sid) AS num_songs
FROM artists
LEFT JOIN artist_performs_song aps ON artists.aid = aps.aid
LEFT JOIN songs ON aps.sid = songs.sid
GROUP BY artists.artist_name
ORDER BY num_songs DESC
LIMIT 1;
```



:::













::: details 公众号：AI悦创【二维码】

![](https://blog.images.bornforthis.cn/docs-images/sha256/77/77f67d48a67ec6a44a4ef1f01ffc85830eb3c121b1ece45dc5ada06e20e2f52b.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Web、Linux」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](https://blog.images.bornforthis.cn/docs-images/sha256/30/3087c629da73428daa0ee050f5b31709c30f650686164b54c724b892a422c585.jpg)

