---
title: Compsci proposal ICS4U party
icon: java
date: 2025-05-04 10:17:53
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

## 1. 题目

Description: ICS4U.party will be an essential, local message board where users can post messages and reply to threads anonymously without needing an account or password. The focus is on simplicity, all data is saved in a simple text file to simulate storage. It is inspired by online forums like Reddit or s`**`ak.party, but it’s trimmed down to keep the core features, and is easy and manageable.

The key feature:

Create a thread, the user types a thread title and message, which gets added into the list.

View threads, which displays a list of existing threads with titles and timestamps.

Thread reply, users can pick a thread that they are interested in and reply to messages. The reply will not show username, just Anonymouse`****` with time posted.

All threads and replies are stored in a text file.

All threads will be deleted after 1 month since it’s created.

Interaction:

1. Anonymous posting, users can make posts without needing an account, signing in or logging in and allowing for a more open and convenient interaction. This makes the application simple and accessible, and easier for the producer to create and manage the application.

2. Post display, the posts will be displayed in a message board format, where the most recent post will appear at the top. The purpose of this is to ensure the news content is always at the front, easy for users to reply to and engage in the conversation.

3. Post interaction, the user can like posts, reply to posts or show agreement.

4. The Post will not be permanent; it will expire one month after the post is created. This help will ensure the board is active without too much unnecessary information, with only relevant posts visible. Also, saving space for the

Type of information that will be stored:

Post content: Each post will have a text field containing the messages users have submitted.

These will be stored in a post class as a private field.

The post’s timestamp will also be stored to manage post expiration when it’s time to delete it.

OOP Usage

The application will be demonstrating OOP (object-oriented programming principles) in the

following ways:

Encapsulate: the classes that will be used, saving posts and threads, will have private fields with public getters and setters to control access and maintain data integrity

Abstraction: Users interact with simple actions, creating threads, and leaving comments. While the file storage and the object logics remain hidden.

Inheritance: A message super class could be created with thread and reply classes inheriting shared attributes like timestamp.

## 2. 答案

### 2.1 V0.1 版本

```java
import java.io.*;
import java.time.*;
import java.time.format.DateTimeFormatter;
import java.util.*;

/**
 * ICS4UForumApp: 简易本地匿名论坛应用
 * 功能：发帖、查看帖子列表、查看帖子详情、回复、点赞、过期自动删除
 * 存储：所有数据保存在简单的文本文件（forum_data.txt）中
 * OOP：利用抽象类 Message，ThreadMessage 和 ReplyMessage 继承其属性
 */
public class ICS4UForumApp {
    // 存储文件名
    private static final String STORAGE_FILE = "forum_data.txt";
    // 时间格式化器，使用 ISO_LOCAL_DATE_TIME 格式
    private static final DateTimeFormatter FORMATTER = DateTimeFormatter.ISO_LOCAL_DATE_TIME;
    // 线程集合，LinkedHashMap 保证插入顺序
    private Map<String, ThreadMessage> threads = new LinkedHashMap<>();

    public static void main(String[] args) {
        ICS4UForumApp app = new ICS4UForumApp();
        // 加载已有数据
        app.load();
        // 清理超过一个月的过期帖子
        app.cleanupExpired();
        // 保存清理后的数据
        app.save();
        // 启动命令行交互界面
        app.runCLI();
    }

    /**
     * 命令行菜单循环
     */
    private void runCLI() {
        Scanner scanner = new Scanner(System.in);
        while (true) {
            System.out.println("\n=== 欢迎来到 ICS4U 匿名论坛 ===");
            System.out.println("1. 发帖");
            System.out.println("2. 查看帖子列表");
            System.out.println("3. 查看帖子详情");
            System.out.println("4. 回复帖子");
            System.out.println("5. 点赞");
            System.out.println("6. 退出");
            System.out.print("请选择操作 (1-6): ");
            String choice = scanner.nextLine();
            switch (choice) {
                case "1": createThread(scanner); break;
                case "2": viewThreads(); break;
                case "3": viewThreadDetails(scanner); break;
                case "4": replyToThread(scanner); break;
                case "5": likePost(scanner); break;
                case "6": System.out.println("再见！"); scanner.close(); return;
                default: System.out.println("无效选择，请重试。");
            }
        }
    }

    /**
     * 创建新线程（发帖）
     */
    private void createThread(Scanner scanner) {
        System.out.print("请输入帖子标题: ");
        String title = scanner.nextLine();
        System.out.print("请输入帖子内容: ");
        String content = scanner.nextLine();
        // 使用 UUID 生成唯一 ID，记录当前时间
        ThreadMessage thread = new ThreadMessage(
            UUID.randomUUID().toString(), LocalDateTime.now(), title, content);
        threads.put(thread.getId(), thread);
        save();  // 保存到文件
        System.out.println("发帖成功！");
    }

    /**
     * 查看所有线程列表（按时间倒序）
     */
    private void viewThreads() {
        if (threads.isEmpty()) {
            System.out.println("暂无帖子。");
            return;
        }
        // 排序并打印标题和点赞数
        List<ThreadMessage> list = new ArrayList<>(threads.values());
        Collections.sort(list, Comparator.comparing(Message::getTimestamp).reversed());
        int idx = 1;
        for (ThreadMessage t : list) {
            System.out.printf("%d. [%s] %s (点赞: %d)%n",
                idx++, t.getTimestamp().format(FORMATTER), t.getTitle(), t.getLikes());
        }
    }

    /**
     * 查看某一帖的详细信息，包括正文和回复列表
     */
    private void viewThreadDetails(Scanner scanner) {
        viewThreads();
        System.out.print("选择要查看的帖子序号: ");
        try {
            int num = Integer.parseInt(scanner.nextLine());
            List<ThreadMessage> list = new ArrayList<>(threads.values());
            Collections.sort(list, Comparator.comparing(Message::getTimestamp).reversed());
            if (num < 1 || num > list.size()) throw new NumberFormatException();
            ThreadMessage thread = list.get(num - 1);
            // 打印详情
            System.out.println("\n----- 帖子详情 -----");
            System.out.println("标题: " + thread.getTitle());
            System.out.println("时间: " + thread.getTimestamp().format(FORMATTER));
            System.out.println("内容: " + thread.getContent());
            System.out.println("点赞: " + thread.getLikes());
            System.out.println("----- 回复 -----");
            List<ReplyMessage> reps = thread.getReplies();
            if (reps.isEmpty()) {
                System.out.println("暂无回复。");
            } else {
                // 按时间正序打印回复
                reps.sort(Comparator.comparing(Message::getTimestamp));
                for (ReplyMessage r : reps) {
                    System.out.printf("Anonymouse [%s]: %s (点赞: %d)%n",
                        r.getTimestamp().format(FORMATTER), r.getContent(), r.getLikes());
                }
            }
        } catch (Exception e) {
            System.out.println("无效序号。");
        }
    }

    /**
     * 对指定帖子进行匿名回复
     */
    private void replyToThread(Scanner scanner) {
        viewThreads();
        System.out.print("选择要回复的帖子序号: ");
        try {
            int num = Integer.parseInt(scanner.nextLine());
            List<ThreadMessage> list = new ArrayList<>(threads.values());
            Collections.sort(list, Comparator.comparing(Message::getTimestamp).reversed());
            if (num < 1 || num > list.size()) throw new NumberFormatException();
            ThreadMessage thread = list.get(num - 1);
            System.out.print("请输入回复内容: ");
            String content = scanner.nextLine();
            ReplyMessage reply = new ReplyMessage(
                UUID.randomUUID().toString(), LocalDateTime.now(), content);
            thread.getReplies().add(reply);
            save();  // 保存回复
            System.out.println("回复成功！");
        } catch (Exception e) {
            System.out.println("无效序号。");
        }
    }

    /**
     * 给帖子或回复点赞
     */
    private void likePost(Scanner scanner) {
        viewThreads();
        System.out.print("选择要点赞的帖子序号: ");
        try {
            int num = Integer.parseInt(scanner.nextLine());
            List<ThreadMessage> list = new ArrayList<>(threads.values());
            Collections.sort(list, Comparator.comparing(Message::getTimestamp).reversed());
            if (num < 1 || num > list.size()) throw new NumberFormatException();
            ThreadMessage thread = list.get(num - 1);
            System.out.println("1. 点赞帖子  2. 点赞回复");
            String sub = scanner.nextLine();
            if ("1".equals(sub)) {
                thread.setLikes(thread.getLikes() + 1);
                System.out.println("帖子已点赞！");
            } else if ("2".equals(sub)) {
                List<ReplyMessage> reps = thread.getReplies();
                if (reps.isEmpty()) { System.out.println("此帖子暂无回复。"); return; }
                reps.sort(Comparator.comparing(Message::getTimestamp));
                int ridx = 1;
                for (ReplyMessage r : reps) {
                    System.out.printf("%d. Anonymouse [%s]: %s (点赞: %d)%n",
                        ridx++, r.getTimestamp().format(FORMATTER), r.getContent(), r.getLikes());
                }
                System.out.print("选择回复序号: ");
                int rnum = Integer.parseInt(scanner.nextLine());
                if (rnum < 1 || rnum > reps.size()) throw new NumberFormatException();
                reps.get(rnum - 1).setLikes(reps.get(rnum - 1).getLikes() + 1);
                System.out.println("回复已点赞！");
            } else {
                System.out.println("无效选择。");
                return;
            }
            save();  // 保存点赞
        } catch (Exception e) {
            System.out.println("操作失败，请检查输入。");
        }
    }

    /**
     * 清理超过一个月的过期帖子
     */
    private void cleanupExpired() {
        LocalDateTime cutoff = LocalDateTime.now().minusMonths(1);
        threads.values().removeIf(t -> t.getTimestamp().isBefore(cutoff));
    }

    /**
     * 从文本文件加载帖子和回复数据
     */
    private void load() {
        threads.clear();
        File file = new File(STORAGE_FILE);
        if (!file.exists()) return;
        try (BufferedReader br = new BufferedReader(new FileReader(file))) {
            String line;
            while ((line = br.readLine()) != null) {
                String[] parts = line.split("\\|", -1);
                if (parts.length < 1) continue;
                switch (parts[0]) {
                    case "THREAD": {
                        String id = parts[1];
                        LocalDateTime ts = LocalDateTime.parse(parts[2], FORMATTER);
                        String title = parts[3];
                        String content = parts[4];
                        int likes = Integer.parseInt(parts[5]);
                        ThreadMessage t = new ThreadMessage(id, ts, title, content);
                        t.setLikes(likes);
                        threads.put(id, t);
                        break;
                    }
                    case "REPLY": {
                        String threadId = parts[1];
                        String id = parts[2];
                        LocalDateTime ts = LocalDateTime.parse(parts[3], FORMATTER);
                        String content = parts[4];
                        int likes = Integer.parseInt(parts[5]);
                        ReplyMessage r = new ReplyMessage(id, ts, content);
                        r.setLikes(likes);
                        ThreadMessage parent = threads.get(threadId);
                        if (parent != null) parent.getReplies().add(r);
                        break;
                    }
                }
            }
        } catch (IOException e) {
            System.err.println("加载数据失败：" + e.getMessage());
        }
    }

    /**
     * 将当前帖子和回复写入文本文件
     */
    private void save() {
        try (BufferedWriter bw = new BufferedWriter(new FileWriter(STORAGE_FILE))) {
            for (ThreadMessage t : threads.values()) {
                bw.write(String.join("|", "THREAD", t.getId(),
                    t.getTimestamp().format(FORMATTER), t.getTitle(), t.getContent(),
                    String.valueOf(t.getLikes())));
                bw.newLine();
                for (ReplyMessage r : t.getReplies()) {
                    bw.write(String.join("|", "REPLY", t.getId(), r.getId(),
                        r.getTimestamp().format(FORMATTER), r.getContent(),
                        String.valueOf(r.getLikes())));
                    bw.newLine();
                }
            }
        } catch (IOException e) {
            System.err.println("保存数据失败：" + e.getMessage());
        }
    }

    /**
     * 抽象基类：包含 ID、时间戳和点赞数
     */
    static abstract class Message {
        private String id;
        private LocalDateTime timestamp;
        private int likes;

        public Message(String id, LocalDateTime timestamp) {
            this.id = id;
            this.timestamp = timestamp;
            this.likes = 0;
        }
        public String getId() { return id; }
        public LocalDateTime getTimestamp() { return timestamp; }
        public int getLikes() { return likes; }
        public void setLikes(int likes) { this.likes = likes; }
    }

    /**
     * 线程帖：包含标题、内容和回复列表
     */
    static class ThreadMessage extends Message {
        private String title;
        private String content;
        private List<ReplyMessage> replies = new ArrayList<>();

        public ThreadMessage(String id, LocalDateTime timestamp, String title, String content) {
            super(id, timestamp);
            this.title = title;
            this.content = content;
        }
        public String getTitle() { return title; }
        public String getContent() { return content; }
        public List<ReplyMessage> getReplies() { return replies; }
    }

    /**
     * 回复帖：仅含内容，继承自 Message
     */
    static class ReplyMessage extends Message {
        private String content;
        public ReplyMessage(String id, LocalDateTime timestamp, String content) {
            super(id, timestamp);
            this.content = content;
        }
        public String getContent() { return content; }
    }
}
```







::: details .

```java
import java.io.*;
import java.time.*;
import java.time.format.DateTimeFormatter;
import java.util.*;

/**
 * ICS4UForumApp: 简易本地匿名论坛应用
 * 功能：发帖、查看帖子列表、查看帖子详情、回复、点赞、过期自动删除
 * 存储：所有数据保存在简单的文本文件（forum_data.txt）中
 * OOP：利用抽象类 Message，ThreadMessage 和 ReplyMessage 继承其属性
 */
public class ICS4UForumApp {
    // 存储文件名
    private static final String STORAGE_FILE = "forum_data.txt";
    // 时间格式化器，使用 ISO_LOCAL_DATE_TIME 格式
    private static final DateTimeFormatter FORMATTER = DateTimeFormatter.ISO_LOCAL_DATE_TIME;
    // 线程集合，LinkedHashMap 保证插入顺序
    private Map<String, ThreadMessage> threads = new LinkedHashMap<>();

    public static void main(String[] args) {
        ICS4UForumApp app = new ICS4UForumApp();
        // 加载已有数据
        app.load();
        // 清理超过一个月的过期帖子
        app.cleanupExpired();
        // 保存清理后的数据
        app.save();
        // 启动命令行交互界面
        app.runCLI();
    }

    /**
     * 命令行菜单循环
     */
    private void runCLI() {
        Scanner scanner = new Scanner(System.in);
        while (true) {
            System.out.println("\n=== 欢迎来到 ICS4U 匿名论坛 ===");
            System.out.println("1. 发帖");
            System.out.println("2. 查看帖子列表");
            System.out.println("3. 查看帖子详情");
            System.out.println("4. 回复帖子");
            System.out.println("5. 点赞");
            System.out.println("6. 退出");
            System.out.print("请选择操作 (1-6): ");
            String choice = scanner.nextLine();
            switch (choice) {
                case "1": createThread(scanner); break;
                case "2": viewThreads(); break;
                case "3": viewThreadDetails(scanner); break;
                case "4": replyToThread(scanner); break;
                case "5": likePost(scanner); break;
                case "6": System.out.println("再见！"); scanner.close(); return;
                default: System.out.println("无效选择，请重试。");
            }
        }
    }

    /**
     * 创建新线程（发帖）
     */
    private void createThread(Scanner scanner) {
        System.out.print("请输入帖子标题: ");
        String title = scanner.nextLine();
        System.out.print("请输入帖子内容: ");
        String content = scanner.nextLine();
        // 使用 UUID 生成唯一 ID，记录当前时间
        ThreadMessage thread = new ThreadMessage(
                UUID.randomUUID().toString(), LocalDateTime.now(), title, content);
        threads.put(thread.getId(), thread);
        save();  // 保存到文件
        System.out.println("发帖成功！");
    }

    /**
     * 查看所有线程列表（按时间倒序）
     */
    private void viewThreads() {
        if (threads.isEmpty()) {
            System.out.println("暂无帖子。");
            return;
        }
        // 排序并打印标题和点赞数
        List<ThreadMessage> list = new ArrayList<>(threads.values());
        Collections.sort(list, Comparator.comparing(Message::getTimestamp).reversed());
        int idx = 1;
        for (ThreadMessage t : list) {
            System.out.printf("%d. [%s] %s (点赞: %d)%n",
                    idx++, t.getTimestamp().format(FORMATTER), t.getTitle(), t.getLikes());
        }
    }

    /**
     * 查看某一帖的详细信息，包括正文和回复列表
     */
    private void viewThreadDetails(Scanner scanner) {
        viewThreads();
        System.out.print("选择要查看的帖子序号: ");
        try {
            int num = Integer.parseInt(scanner.nextLine());
            List<ThreadMessage> list = new ArrayList<>(threads.values());
            Collections.sort(list, Comparator.comparing(Message::getTimestamp).reversed());
            if (num < 1 || num > list.size()) throw new NumberFormatException();
            ThreadMessage thread = list.get(num - 1);
            // 打印详情
            System.out.println("\n----- 帖子详情 -----");
            System.out.println("标题: " + thread.getTitle());
            System.out.println("时间: " + thread.getTimestamp().format(FORMATTER));
            System.out.println("内容: " + thread.getContent());
            System.out.println("点赞: " + thread.getLikes());
            System.out.println("----- 回复 -----");
            List<ReplyMessage> reps = thread.getReplies();
            if (reps.isEmpty()) {
                System.out.println("暂无回复。");
            } else {
                // 按时间正序打印回复
                reps.sort(Comparator.comparing(Message::getTimestamp));
                for (ReplyMessage r : reps) {
                    System.out.printf("Anonymouse [%s]: %s (点赞: %d)%n",
                            r.getTimestamp().format(FORMATTER), r.getContent(), r.getLikes());
                }
            }
        } catch (Exception e) {
            System.out.println("无效序号。");
        }
    }

    /**
     * 对指定帖子进行匿名回复
     */
    private void replyToThread(Scanner scanner) {
        viewThreads();
        System.out.print("选择要回复的帖子序号: ");
        try {
            int num = Integer.parseInt(scanner.nextLine());
            List<ThreadMessage> list = new ArrayList<>(threads.values());
            Collections.sort(list, Comparator.comparing(Message::getTimestamp).reversed());
            if (num < 1 || num > list.size()) throw new NumberFormatException();
            ThreadMessage thread = list.get(num - 1);
            System.out.print("请输入回复内容: ");
            String content = scanner.nextLine();
            ReplyMessage reply = new ReplyMessage(
                    UUID.randomUUID().toString(), LocalDateTime.now(), content);
            thread.getReplies().add(reply);
            save();  // 保存回复
            System.out.println("回复成功！");
        } catch (Exception e) {
            System.out.println("无效序号。");
        }
    }

    /**
     * 给帖子或回复点赞
     */
    private void likePost(Scanner scanner) {
        viewThreads();
        System.out.print("选择要点赞的帖子序号: ");
        try {
            int num = Integer.parseInt(scanner.nextLine());
            List<ThreadMessage> list = new ArrayList<>(threads.values());
            Collections.sort(list, Comparator.comparing(Message::getTimestamp).reversed());
            if (num < 1 || num > list.size()) throw new NumberFormatException();
            ThreadMessage thread = list.get(num - 1);
            System.out.println("1. 点赞帖子  2. 点赞回复");
            String sub = scanner.nextLine();
            if ("1".equals(sub)) {
                thread.setLikes(thread.getLikes() + 1);
                System.out.println("帖子已点赞！");
            } else if ("2".equals(sub)) {
                List<ReplyMessage> reps = thread.getReplies();
                if (reps.isEmpty()) { System.out.println("此帖子暂无回复。"); return; }
                reps.sort(Comparator.comparing(Message::getTimestamp));
                int ridx = 1;
                for (ReplyMessage r : reps) {
                    System.out.printf("%d. Anonymouse [%s]: %s (点赞: %d)%n",
                            ridx++, r.getTimestamp().format(FORMATTER), r.getContent(), r.getLikes());
                }
                System.out.print("选择回复序号: ");
                int rnum = Integer.parseInt(scanner.nextLine());
                if (rnum < 1 || rnum > reps.size()) throw new NumberFormatException();
                reps.get(rnum - 1).setLikes(reps.get(rnum - 1).getLikes() + 1);
                System.out.println("回复已点赞！");
            } else {
                System.out.println("无效选择。");
                return;
            }
            save();  // 保存点赞
        } catch (Exception e) {
            System.out.println("操作失败，请检查输入。");
        }
    }

    /**
     * 清理超过一个月的过期帖子
     */
    private void cleanupExpired() {
        LocalDateTime cutoff = LocalDateTime.now().minusMonths(1);
        threads.values().removeIf(t -> t.getTimestamp().isBefore(cutoff));
    }

    /**
     * 从文本文件加载帖子和回复数据
     */
    private void load() {
        threads.clear();
        File file = new File(STORAGE_FILE);
        if (!file.exists()) return;
        try (BufferedReader br = new BufferedReader(new FileReader(file))) {
            String line;
            while ((line = br.readLine()) != null) {
                String[] parts = line.split("\\|", -1);
                if (parts.length < 1) continue;
                switch (parts[0]) {
                    case "THREAD": {
                        String id = parts[1];
                        LocalDateTime ts = LocalDateTime.parse(parts[2], FORMATTER);
                        String title = parts[3];
                        String content = parts[4];
                        int likes = Integer.parseInt(parts[5]);
                        ThreadMessage t = new ThreadMessage(id, ts, title, content);
                        t.setLikes(likes);
                        threads.put(id, t);
                        break;
                    }
                    case "REPLY": {
                        String threadId = parts[1];
                        String id = parts[2];
                        LocalDateTime ts = LocalDateTime.parse(parts[3], FORMATTER);
                        String content = parts[4];
                        int likes = Integer.parseInt(parts[5]);
                        ReplyMessage r = new ReplyMessage(id, ts, content);
                        r.setLikes(likes);
                        ThreadMessage parent = threads.get(threadId);
                        if (parent != null) parent.getReplies().add(r);
                        break;
                    }
                }
            }
        } catch (IOException e) {
            System.err.println("加载数据失败：" + e.getMessage());
        }
    }

    /**
     * 将当前帖子和回复写入文本文件
     */
    private void save() {
        try (BufferedWriter bw = new BufferedWriter(new FileWriter(STORAGE_FILE))) {
            for (ThreadMessage t : threads.values()) {
                bw.write(String.join("|", "THREAD", t.getId(),
                        t.getTimestamp().format(FORMATTER), t.getTitle(), t.getContent(),
                        String.valueOf(t.getLikes())));
                bw.newLine();
                for (ReplyMessage r : t.getReplies()) {
                    bw.write(String.join("|", "REPLY", t.getId(), r.getId(),
                            r.getTimestamp().format(FORMATTER), r.getContent(),
                            String.valueOf(r.getLikes())));
                    bw.newLine();
                }
            }
        } catch (IOException e) {
            System.err.println("保存数据失败：" + e.getMessage());
        }
    }

    /**
     * 抽象基类：包含 ID、时间戳和点赞数
     */
    static abstract class Message {
        private String id;
        private LocalDateTime timestamp;
        private int likes;

        public Message(String id, LocalDateTime timestamp) {
            this.id = id;
            this.timestamp = timestamp;
            this.likes = 0;
        }
        public String getId() { return id; }
        public LocalDateTime getTimestamp() { return timestamp; }
        public int getLikes() { return likes; }
        public void setLikes(int likes) { this.likes = likes; }
    }

    /**
     * 线程帖：包含标题、内容和回复列表
     */
    static class ThreadMessage extends Message {
        private String title;
        private String content;
        private List<ReplyMessage> replies = new ArrayList<>();

        public ThreadMessage(String id, LocalDateTime timestamp, String title, String content) {
            super(id, timestamp);
            this.title = title;
            this.content = content;
        }
        public String getTitle() { return title; }
        public String getContent() { return content; }
        public List<ReplyMessage> getReplies() { return replies; }
    }

    /**
     * 回复帖：仅含内容，继承自 Message
     */
    static class ReplyMessage extends Message {
        private String content;
        public ReplyMessage(String id, LocalDateTime timestamp, String content) {
            super(id, timestamp);
            this.content = content;
        }
        public String getContent() { return content; }
    }
}
```

:::

**GUI 代码**

```java
import javax.swing.*;
import javax.swing.event.ListSelectionEvent;
import javax.swing.event.ListSelectionListener;
import java.awt.BorderLayout;
import java.awt.event.*;
import java.io.*;
import java.time.*;
import java.time.format.DateTimeFormatter;
import java.util.*;

/**
 * ICS4UForumApp: 简易本地匿名论坛应用（Swing GUI 版）
 * 功能：发帖、查看帖子列表、查看帖子详情、回复、点赞、过期自动删除
 * 存储：所有数据保存在简单的文本文件（forum_data.txt）中
 */
public class ICS4UForumApp extends JFrame {
    private static final String STORAGE_FILE = "forum_data.txt";
    private static final DateTimeFormatter FORMATTER = DateTimeFormatter.ISO_LOCAL_DATE_TIME;
    private Map<String, ThreadMessage> threads = new LinkedHashMap<>();

    // GUI 组件
    private DefaultListModel<ThreadMessage> threadListModel;
    private JList<ThreadMessage> threadList;
    private JTextArea detailArea;
    private JButton postButton, replyButton, likeButton, refreshButton;

    public ICS4UForumApp() {
        super("ICS4U 匿名论坛");
        load();
        cleanupExpired();
        save();
        initGUI();
    }

    /**
     * 初始化 GUI
     */
    private void initGUI() {
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setSize(800, 600);
        setLayout(new BorderLayout());

        // 左侧帖子列表
        threadListModel = new DefaultListModel<>();
        refreshThreadModel();
        threadList = new JList<>(threadListModel);
        threadList.setSelectionMode(ListSelectionModel.SINGLE_SELECTION);
        threadList.addListSelectionListener(new ListSelectionListener() {
            public void valueChanged(ListSelectionEvent e) {
                showDetails(threadList.getSelectedValue());
            }
        });
        add(new JScrollPane(threadList), BorderLayout.WEST);

        // 右侧详情区
        detailArea = new JTextArea();
        detailArea.setEditable(false);
        add(new JScrollPane(detailArea), BorderLayout.CENTER);

        // 底部按钮区
        JPanel buttonPanel = new JPanel();
        postButton = new JButton("发帖");
        postButton.addActionListener(e -> createThreadGUI());
        replyButton = new JButton("回复");
        replyButton.addActionListener(e -> replyGUI());
        likeButton = new JButton("点赞");
        likeButton.addActionListener(e -> likeGUI());
        refreshButton = new JButton("刷新");
        refreshButton.addActionListener(e -> refreshThreadModel());

        buttonPanel.add(postButton);
        buttonPanel.add(replyButton);
        buttonPanel.add(likeButton);
        buttonPanel.add(refreshButton);
        add(buttonPanel, BorderLayout.SOUTH);

        setVisible(true);
    }

    /**
     * 刷新帖子列表模型
     */
    private void refreshThreadModel() {
        threadListModel.clear();
        java.util.List<ThreadMessage> list = new ArrayList<>(threads.values());
        list.sort(Comparator.comparing(Message::getTimestamp).reversed());
        for (ThreadMessage t : list) {
            threadListModel.addElement(t);
        }
    }

    /**
     * 在详情区显示帖子及回复
     */
    private void showDetails(ThreadMessage thread) {
        if (thread == null) {
            detailArea.setText("");
            return;
        }
        StringBuilder sb = new StringBuilder();
        sb.append("标题: ").append(thread.getTitle()).append("\n");
        sb.append("时间: ").append(thread.getTimestamp().format(FORMATTER)).append("\n");
        sb.append("点赞: ").append(thread.getLikes()).append("\n");
        sb.append("内容: \n").append(thread.getContent()).append("\n\n");
        sb.append("回复:\n");
        java.util.List<ReplyMessage> reps = thread.getReplies();
        reps.sort(Comparator.comparing(Message::getTimestamp));
        for (ReplyMessage r : reps) {
            sb.append("Anonymouse [")
              .append(r.getTimestamp().format(FORMATTER)).append("]: ")
              .append(r.getContent())
              .append(" (点赞: ").append(r.getLikes()).append(")\n");
        }
        detailArea.setText(sb.toString());
    }

    /**
     * GUI 发帖
     */
    private void createThreadGUI() {
        String title = JOptionPane.showInputDialog(this, "请输入帖子标题:");
        if (title == null || title.trim().isEmpty()) return;
        String content = JOptionPane.showInputDialog(this, "请输入帖子内容:");
        if (content == null || content.trim().isEmpty()) return;
        ThreadMessage thread = new ThreadMessage(
            UUID.randomUUID().toString(), LocalDateTime.now(), title, content);
        threads.put(thread.getId(), thread);
        save();
        refreshThreadModel();
    }

    /**
     * GUI 回复
     */
    private void replyGUI() {
        ThreadMessage thread = threadList.getSelectedValue();
        if (thread == null) {
            JOptionPane.showMessageDialog(this, "请先选择一个帖子。");
            return;
        }
        String content = JOptionPane.showInputDialog(this, "请输入回复内容:");
        if (content == null || content.trim().isEmpty()) return;
        ReplyMessage reply = new ReplyMessage(
            UUID.randomUUID().toString(), LocalDateTime.now(), content);
        thread.getReplies().add(reply);
        save();
        showDetails(thread);
    }

    /**
     * GUI 点赞（仅帖子点赞，回复点赞可扩展）
     */
    private void likeGUI() {
        ThreadMessage thread = threadList.getSelectedValue();
        if (thread == null) {
            JOptionPane.showMessageDialog(this, "请先选择一个帖子。");
            return;
        }
        thread.setLikes(thread.getLikes() + 1);
        save();
        showDetails(thread);
        refreshThreadModel();
    }

    private void cleanupExpired() {
        LocalDateTime cutoff = LocalDateTime.now().minusMonths(1);
        threads.values().removeIf(t -> t.getTimestamp().isBefore(cutoff));
    }

    private void load() {
        threads.clear();
        File file = new File(STORAGE_FILE);
        if (!file.exists()) return;
        try (BufferedReader br = new BufferedReader(new FileReader(file))) {
            String line;
            while ((line = br.readLine()) != null) {
                String[] parts = line.split("\\|", -1);
                if (parts.length < 1) continue;
                switch (parts[0]) {
                    case "THREAD": {
                        String id = parts[1];
                        LocalDateTime ts = LocalDateTime.parse(parts[2], FORMATTER);
                        String title = parts[3];
                        String content = parts[4];
                        int likes = Integer.parseInt(parts[5]);
                        ThreadMessage t = new ThreadMessage(id, ts, title, content);
                        t.setLikes(likes);
                        threads.put(id, t);
                        break;
                    }
                    case "REPLY": {
                        String threadId = parts[1];
                        String id = parts[2];
                        LocalDateTime ts = LocalDateTime.parse(parts[3], FORMATTER);
                        String content = parts[4];
                        int likes = Integer.parseInt(parts[5]);
                        ReplyMessage r = new ReplyMessage(id, ts, content);
                        r.setLikes(likes);
                        ThreadMessage parent = threads.get(threadId);
                        if (parent != null) parent.getReplies().add(r);
                        break;
                    }
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private void save() {
        try (BufferedWriter bw = new BufferedWriter(new FileWriter(STORAGE_FILE))) {
            for (ThreadMessage t : threads.values()) {
                bw.write(String.join("|", "THREAD", t.getId(),
                    t.getTimestamp().format(FORMATTER), t.getTitle(), t.getContent(),
                    String.valueOf(t.getLikes())));
                bw.newLine();
                for (ReplyMessage r : t.getReplies()) {
                    bw.write(String.join("|", "REPLY", t.getId(), r.getId(),
                        r.getTimestamp().format(FORMATTER), r.getContent(),
                        String.valueOf(r.getLikes())));
                    bw.newLine();
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    /** 抽象基类：包含ID、时间戳和点赞数 */
    static abstract class Message {
        private String id;
        private LocalDateTime timestamp;
        private int likes;
        public Message(String id, LocalDateTime timestamp) {
            this.id = id; this.timestamp = timestamp; this.likes = 0;
        }
        public String getId() { return id; }
        public LocalDateTime getTimestamp() { return timestamp; }
        public int getLikes() { return likes; }
        public void setLikes(int likes) { this.likes = likes; }
    }

    /** 线程帖 */
    static class ThreadMessage extends Message {
        private String title, content;
        private java.util.List<ReplyMessage> replies = new ArrayList<>();
        public ThreadMessage(String id, LocalDateTime timestamp, String title, String content) {
            super(id, timestamp);
            this.title = title;
            this.content = content;
        }
        public String getTitle() { return title; }
        public String getContent() { return content; }
        public java.util.List<ReplyMessage> getReplies() { return replies; }
        @Override public String toString() { return title; }
    }

    /** 回复帖 */
    static class ReplyMessage extends Message {
        private String content;
        public ReplyMessage(String id, LocalDateTime timestamp, String content) {
            super(id, timestamp);
            this.content = content;
        }
        public String getContent() { return content; }
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> new ICS4UForumApp());
    }
}

```



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