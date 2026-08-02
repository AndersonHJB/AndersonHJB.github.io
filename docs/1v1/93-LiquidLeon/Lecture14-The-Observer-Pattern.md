---
title: Lecture 14 The Observer Pattern
date: 2025-03-12 07:05:47
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

In the [last lecture](https://course.ccs.neu.edu/cs3500/lec_gui_basics_notes.html) we introduced the idea of a “`Features` interface” that described a way to

- isolate the controller from the low-level Swing components inside the view, and
- simultaneously, allow the view to have multiple UI components trigger the same logical callback on the controller.

We called these “high-level events”, since they were application-specific events as opposed to “low-level” general-purpose events. This idea of defining our own application-specific events is a very common one, and generalizes the `Features` interface idea into something known as the Observer Patern.

## 1. Motivating example: buying concert tickets

Suppose you are interested in getting tickets for a popular upcoming concert. You know that tickets will sell out quickly, and you don’t want to miss your opportunity. So you signup for the mailing list for the ticket service, and wait for an email telling you that tickets are now available. Of course, mailing lists being what they are, you’ll probably get a bunch of unwanted messages telling you about uninteresting concerts as well, so you need to read the emails to check which concert has just gone on sale.

Let’s try to represent this in code.

## 2. Setting the stage

Let’s assume we have a `class TicketSeller` that handles ticket sales for lots of concerts, and a `class Person` to represent you or other people interested in concerts. (To keep things simple, we’ll just assume each concert has a unique name that we’ll represent as a `String`; in practice, the data here might be more interesting, but it’ll obscure the pattern we’re looking for here.)

```java
class TicketSeller {
  Ticket purchaseTicketFor(String concertName) { ... sell a ticket ... }
}

class Person {
  void tryToBuyTicketFor(String concertName) {
    ???
  }
}
```

If a concert is sold out or not even available yet, then `TicketSeller#purchaseTicketFor` will fail, so our goal is to call that method as soon as possible, but no sooner. So in `Person#tryToBuyTicketsFor`, we can’t immediately call that method. Instead, we need to “sign up for the mailing list” somehow.

To do that, let’s define an interface

```java
interface TicketNotificationSubscriber {
  void ticketsAvailableFor(String concertName);
}
```

This is the analogue of the `Features` interface from last lecture. With `Features`, our controller was interested in being called back, so it registered with the view, and the view called its methods when appropriate. Here, our `TicketSeller` will call the `ticketsAvailableFor` method on any objects that have signed up for such notifications, and our `Person` objects will implement that interface and sign up for the notifications.

```java
class Person implements TicketNotificationSubscriber {
  void tryToBuyTicketsFor(String concertName, TicketSeller seller) {
    seller.signUpForNotifications(this);
  }

  public void ticketsAvailableFor(String concertName) {
    // the seller will call us back when concerts become available
  }
}

class TicketSeller {
  void signUpforNotifications(TicketNotificationSubscriber obs) {
    ???
  }
}
```

Now we just have to connect the last few pieces. The `TicketSeller` will need to maintain a “mailing list” of everyone who’s signed up to be notified. And whenever a new concert is announced, it should broadcast that announcement to everyone who’s signed up:

```java
class TicketSeller {
  List<TicketNotificationSubscriber> subscriers = new ArrayList<>();
  void signUpForNotifications(TicketNotificationSubscriber sub) {
    this.subscribers.add(sub);
  }

  void announceNewConcert(String name) {
    for (TicketNotificationSubscriber sub : this.subscribers) {
      sub.ticketsAvailableFor(name);
    }
  }
}
```

Finally, we can complete the `Person` implementation. Notice that they’ll get notified for *all* concerts, so they need to keep track of the one concert they’re interested in:

```java
class Person implements TicketNotificationSubscriber {
  String interestedInConcert;
  TicketSeller seller;
  void tryToBuyTicketsFor(String concertName, TicketSeller seller) {
    this.interestedInConcert = concertName;
    this.seller = seller;
    seller.signUpForNotifications(this);
  }

  public void ticketsAvailableFor(String concertName) {
    if (concertName.equals(this.interestedInConcert)) {
      // Hooray, tickets are available for the concert we're interested in
      seller.purchaseTicketFor(concertName);
    }
  }
}
```

Notice the similarities to `ActionListener`s: the `Person` gets called back with the name of what event has occurred, and can choose what to do about it based on that information. Notice also the differences: the callback here is talking about *concerts*, which is clearly a very application-specific sort of event.

## 3. Enhancements and subtleties

The names `TicketSeller`, `signUpForNotifications`, `TicketNotificationSubscriber` and `ticketsAvailableFor` are whimsical and application-specific, but they illustrate an important point: this pattern applies to high-level events just as well as to low-level events. Regardless of the name, the Observer Pattern describes this common scenario, of multiple entities that are interested in messages being sent by some common source. There can be many observers for a single message-sender, and a single observer might be interested in many message-senders.

The general names for this pattern look as follows:

```java
class Subject {
  List<Observer> observers;
  void addObserver(Observer obs) { observers.add(obs); }

  // This method gets called by other methods in the Subject class as needed
  private void notifyAllSomethingHappened() {
    for (Observer obs : this.observers) {
      obs.somethingHappened();
    }
  }
}

interface Observer {
  void somethingHappend();
}

class SomeObserver implements Observer {
  void somethingHappened() { ... }
}

// somewhere in the code
someSubject.addObserver(someObserver);
```

- We might want to enhance the `Subject` class to allow *unsubscribing* from notifications, via a `removeObserver` method.
- We might want to send more information along in the `somethingHappened` method, including which `Subject` sent the notification, or what the notification is about.
- Currently, each `Person` gets notified for *all* concerts, leading to a lot of spammy messages. We might want to enhance the `addObserver` method to specify what notifications we’re interested in, and allow the `TicketSeller` to only send the notifications we care about. In general, we might want the `Subject` class to maintain a mapping from specific topics to the observers interested in just those topics, and only `somethingHappened()` the observers that care about that topic. This leads to a more complex `Subject` implementation, but a *possibly* more-efficient system overall.
- Our current `Observer` interface has only a single method in it. But as we saw with `Features`, there could easily be multiple application-specific notifications we might want to send.
- Thinking about the `TicketSeller` again, if it sends out a notification for each individual concert, then the amount of spam depends on how many concerts there are. We might instead want to group together several updates into a single *batch notification* (for example, configuring Piazza to notify you for each individual post, vs notifying you once every few hours with a batch of posts at once).

The Observer pattern is a general-purpose event handling mechanism, and hopefully it’s clear that its utility generalizes beyond just handling UI events.

## 1. 观察者模式要解决什么问题？

在很多应用场景中，我们都有这样一种需求：**当某个对象（通常称为“主题”Subject）发生变化时，希望能够及时通知其他对这个变化感兴趣的对象（通常称为“观察者”Observer）**

例如：文中“演唱会订票”例子里，`TicketSeller` 就好比是“主题”，有新演唱会门票开始发售（“事件”）时，需要通知所有“订阅”它的人（“观察者”），让他们赶紧来买票。

这个模式也常出现在 GUI 开发中，Swing 或其他图形库中都有类似的事件监听器概念：一个按钮被点击时，就通知所有监听这个按钮点击事件的观察者。

**关键点：**

1. 主题（Subject）维护一个观察者列表。
2. 当主题发生变化时，就循环通知所有已注册（订阅）的观察者。
3. 观察者可以有不同的逻辑，根据事件信息做出不同反应。



## 2. 先看一个简化的“演唱会订票”示例思路

1. **TicketNotificationSubscriber**: 这是观察者接口(Observer)，表示“任何想订阅新演唱会通知”的人（或对象），必须实现此接口，并实现一个回调方法 `ticketsAvailableFor(String concertName)`，用来接收“通知”。
2. **TicketSeller**: 这是主题(Subject)，
    - 会维护一个“已订阅”列表（List），里面放的都是实现了 `TicketNotificationSubscriber` 接口的对象。
    - 当它宣布有新的演唱会（`announceNewConcert(String name)`）时，就会把这个消息广播给所有订阅者。
3. **Person**: 具体的观察者（Observer）的实现类之一，
    - 它想要订阅某个演唱会的门票通知，就调用 `seller.signUpForNotifications(this)` 把自己注册到 `TicketSeller`。
    - 当收到通知 `ticketsAvailableFor(String concertName)`，就判断是不是自己关心的演唱会，如果是，就执行购买票的逻辑。

和我们常见的 GUI 监听器类似，但事件名是业务相关的“门票可用事件”，而非鼠标点击、键盘输入等底层事件，因此它也被称为“高层事件”或“应用特定事件”。

## 3. 一步步带你实现

下面我们写一个完整的示例，放在一个文件里演示。可以把它保存为 `ObserverPatternDemo.java` 并编译运行（当然也可以拆分成多个文件，这里为了演示方便，放在一起）。

::: tabs

@tab 第一步：定义观察者接口

```java
// Observer接口：订阅者都要实现这个接口
interface TicketNotificationSubscriber {
    /**
     * 当演唱会门票可用时被通知的方法
     * @param concertName 演唱会名字
     */
    void ticketsAvailableFor(String concertName);
}
```

这个接口的作用就和我们在前面讲义中看到的 `TicketNotificationSubscriber` 一样，只有一个方法 `ticketsAvailableFor(String concertName)`，表示“有新票时的通知回调”。

@tab 第二步：定义主题（Subject），即卖票方

```java
import java.util.ArrayList;
import java.util.List;

class TicketSeller {
    // 维护一个观察者的列表，谁订阅了就放进来
    private List<TicketNotificationSubscriber> subscribers = new ArrayList<>();

    /**
     * 订阅（注册）方法，任何实现了TicketNotificationSubscriber的人都能订阅通知
     */
    public void signUpForNotifications(TicketNotificationSubscriber subscriber) {
        this.subscribers.add(subscriber);
    }

    /**
     * 主题所发送的事件，例如宣布某个演唱会有新票了
     */
    public void announceNewConcert(String concertName) {
        System.out.println("【TicketSeller】宣布演唱会 " + concertName + " 可以购票了！");
        // 遍历所有订阅者，逐一通知
        for (TicketNotificationSubscriber sub : this.subscribers) {
            sub.ticketsAvailableFor(concertName);
        }
    }

    /**
     * 购买门票的逻辑，这里简单演示一下，真实情况下可能有很多业务校验
     */
    public void purchaseTicketFor(String concertName) {
        System.out.println("【TicketSeller】购买了演唱会 " + concertName + " 的门票。");
    }
}
```

- `subscribers` 就是“谁已经订阅（sign up）了通知”这件事情。

- `announceNewConcert(String concertName)` 用来“发布/广播”某个新演唱会。

- `purchaseTicketFor(String concertName)` 简化地模拟购买流程，只是打印一下表示买到了票。

@tab 第三步：实现具体的观察者

```java
class Person implements TicketNotificationSubscriber {
    // 这个人只关心哪个演唱会
    private String interestedConcert;
    // 保存一个对TicketSeller的引用，为了后续去调用purchaseTicketFor
    private TicketSeller seller;

    /**
     * 让这个人开始订阅某个演唱会的票务通知
     */
    public void tryToBuyTicketsFor(String concertName, TicketSeller seller) {
        this.interestedConcert = concertName;
        this.seller = seller;
        // 告诉卖票的人：我要订阅你们的“新演唱会消息”
        seller.signUpForNotifications(this);
    }

    /**
     * 真正收到通知时，会被TicketSeller调用
     */
    @Override
    public void ticketsAvailableFor(String concertName) {
        System.out.println("【Person】收到通知：演唱会 " + concertName + " 票来了！");
        // 如果是我感兴趣的那个演唱会，就立刻去买票
        if (concertName.equals(this.interestedConcert)) {
            System.out.println("【Person】正是我想看的演唱会！赶紧买票！");
            seller.purchaseTicketFor(concertName);
        } else {
            System.out.println("【Person】但这场演唱会我不感兴趣。");
        }
    }
}
```

- `tryToBuyTicketsFor` 是我们在“现实场景”里点“我要订阅这个演唱会信息”的动作。
- `ticketsAvailableFor` 是收到通知后，这个 `Person` 要做出的响应。只有当通知的演唱会正好是 `interestedConcert`，才会真正去购买，否则不管。

@tab 第四步：在 main 方法中运行示例

```java
public class ObserverPatternDemo {
    public static void main(String[] args) {
        // 1. 创建主题（卖票方）
        TicketSeller ticketSeller = new TicketSeller();

        // 2. 创建几个观察者
        Person alice = new Person();
        Person bob = new Person();

        // 3. 分别让alice和bob订阅自己感兴趣的演唱会
        alice.tryToBuyTicketsFor("周杰伦演唱会", ticketSeller);
        bob.tryToBuyTicketsFor("林俊杰演唱会", ticketSeller);

        // 4. 卖票方宣布演唱会开始，看看谁会收到通知并且行动
        System.out.println("\n=== 第一次宣布：周杰伦演唱会 ===");
        ticketSeller.announceNewConcert("周杰伦演唱会");

        System.out.println("\n=== 第二次宣布：林俊杰演唱会 ===");
        ticketSeller.announceNewConcert("林俊杰演唱会");
    }
}
```

运行后，你会看到类似下面的输出(示例)：

```java
=== 第一次宣布：周杰伦演唱会 ===
【TicketSeller】宣布演唱会 周杰伦演唱会 可以购票了！
【Person】收到通知：演唱会 周杰伦演唱会 票来了！
【Person】正是我想看的演唱会！赶紧买票！
【TicketSeller】购买了演唱会 周杰伦演唱会 的门票。
【Person】收到通知：演唱会 周杰伦演唱会 票来了！
【Person】但这场演唱会我不感兴趣。

=== 第二次宣布：林俊杰演唱会 ===
【TicketSeller】宣布演唱会 林俊杰演唱会 可以购票了！
【Person】收到通知：演唱会 林俊杰演唱会 票来了！
【Person】但这场演唱会我不感兴趣。
【Person】收到通知：演唱会 林俊杰演唱会 票来了！
【Person】正是我想看的演唱会！赶紧买票！
【TicketSeller】购买了演唱会 林俊杰演唱会 的门票。
```

可以看到，

- **主题**(`TicketSeller`) 在 `announceNewConcert(...)` 中将新演唱会的消息通知给所有**观察者**(`Person`)。
- 每个 `Person` 收到通知后都会各自做判断，只有对自己感兴趣的演唱会才会执行购买动作。
- 这就是观察者模式最核心的地方：**“主题一旦发布消息，所有观察者都能收到，观察者可以根据自己需要决定如何处理。”**

@tab All Code

下面给出的演示代码可以放在同一个文件 `ObserverPatternDemo.java` 中，包含所有类（`ObserverPatternDemo`、`TicketNotificationSubscriber`、`TicketSeller`、`Person`），这样可以直接编译并运行。完整结构如下：

```java
import java.util.ArrayList;
import java.util.List;

/**
 * 演示入口类：包含 main() 方法。
 * 这里命名为 public class ObserverPatternDemo，其他类用包级可见（不加 public）即可。
 */
public class ObserverPatternDemo {
    public static void main(String[] args) {
        // 1. 创建主题（卖票方）
        TicketSeller ticketSeller = new TicketSeller();

        // 2. 创建几个观察者
        Person alice = new Person();
        Person bob = new Person();

        // 3. 分别让alice和bob订阅自己感兴趣的演唱会
        alice.tryToBuyTicketsFor("周杰伦演唱会", ticketSeller);
        bob.tryToBuyTicketsFor("林俊杰演唱会", ticketSeller);

        // 4. 卖票方宣布演唱会开始，看看谁会收到通知并且行动
        System.out.println("\n=== 第一次宣布：周杰伦演唱会 ===");
        ticketSeller.announceNewConcert("周杰伦演唱会");

        System.out.println("\n=== 第二次宣布：林俊杰演唱会 ===");
        ticketSeller.announceNewConcert("林俊杰演唱会");
    }
}

/**
 * 观察者接口: 所有想要“订阅演唱会通知”的类，都要实现这个接口。
 */
interface TicketNotificationSubscriber {
    void ticketsAvailableFor(String concertName);
}

/**
 * 主题（Subject）：卖票方。
 * 维护一个观察者列表，宣布新演唱会时通知所有观察者。
 */
class TicketSeller {
    // 维护一个观察者列表
    private List<TicketNotificationSubscriber> subscribers = new ArrayList<>();

    /**
     * 订阅/注册方法，让任何实现了 TicketNotificationSubscriber 的对象加进来
     */
    public void signUpForNotifications(TicketNotificationSubscriber subscriber) {
        this.subscribers.add(subscriber);
    }

    /**
     * 模拟宣布新的演唱会来临，并通知所有订阅者
     */
    public void announceNewConcert(String concertName) {
        System.out.println("【TicketSeller】宣布演唱会 " + concertName + " 可以购票了！");
        for (TicketNotificationSubscriber sub : subscribers) {
            sub.ticketsAvailableFor(concertName);
        }
    }

    /**
     * 简化的购票方法，这里仅做打印演示
     */
    public void purchaseTicketFor(String concertName) {
        System.out.println("【TicketSeller】购买了演唱会 " + concertName + " 的门票。");
    }
}

/**
 * 具体的观察者：实现了 TicketNotificationSubscriber 接口。
 * 表示一个想买票的人。
 */
class Person implements TicketNotificationSubscriber {
    private String interestedConcert;  // 只关注这个演唱会
    private TicketSeller seller;       // 持有 TicketSeller 引用以便购票

    /**
     * 让这个人开始订阅并关注某个演唱会的门票通知
     */
    public void tryToBuyTicketsFor(String concertName, TicketSeller seller) {
        this.interestedConcert = concertName;
        this.seller = seller;
        // 注册到卖票方的“订阅”列表中
        seller.signUpForNotifications(this);
    }

    /**
     * 收到票务通知的回调方法
     */
    @Override
    public void ticketsAvailableFor(String concertName) {
        System.out.println("【Person】收到通知：演唱会 " + concertName + " 票来了！");
        if (concertName.equals(this.interestedConcert)) {
            System.out.println("【Person】正是我想看的演唱会！赶紧买票！");
            seller.purchaseTicketFor(concertName);
        } else {
            System.out.println("【Person】但这场演唱会我不感兴趣。");
        }
    }
}
```

### 代码结构与说明

1. **ObserverPatternDemo**
    - 这是主类 (有 `main` 方法)，代码运行的入口。
    - 这里我们将所有类都放在同一个 `.java` 文件里，为演示方便。
    - 在 Java 中只能有一个 `public` 类，且类名与文件名相同，其余类不加 `public` 关键字。
2. **TicketNotificationSubscriber (观察者接口)**
    - 定义了一个方法 `ticketsAvailableFor(String concertName)`，表示当有演唱会信息发布时的回调。
3. **TicketSeller (主题 Subject)**
    - 保存了一个 `List<TicketNotificationSubscriber>` 来记录所有注册过的观察者。
    - `announceNewConcert(String concertName)` 用于触发通知动作，遍历列表，调用观察者的回调方法。
    - `purchaseTicketFor(String concertName)` 只是演示“购买”流程，实际可接入更多业务逻辑。
4. **Person (具体观察者 ConcreteObserver)**
    - 实现了 `TicketNotificationSubscriber` 接口，代表一个想要买演唱会票的人。
    - 通过 `tryToBuyTicketsFor` 方法实现了“订阅”逻辑，把自己 (`this`) 注册给 `TicketSeller`。
    - 当被通知 `ticketsAvailableFor` 时，会判断是不是自己真正感兴趣的演唱会，若是则立刻调用 `seller.purchaseTicketFor` 进行购买。

@tab 完整注释

```java
// ======================
// 文件名: ObserverPatternDemo.java
// ======================

import java.util.ArrayList; // 引入 ArrayList，用于保存订阅者列表
import java.util.List;      // 引入 List 接口，用于抽象列表类型

/**
 * 主类：包含 main 方法，是程序的入口
 * 由于这个类是 public，所以文件名必须与类名相同（ObserverPatternDemo.java）
 */
public class ObserverPatternDemo {
    /**
     * main方法：Java 程序入口，执行演示逻辑
     */
    public static void main(String[] args) {
        // 1. 创建主题（卖票方）
        TicketSeller ticketSeller = new TicketSeller(); 
        // 这里我们实例化了一个 TicketSeller 对象，它将作为“事件发布者”（Subject）

        // 2. 创建几个观察者
        Person alice = new Person(); 
        // 实例化第一个观察者（对周杰伦感兴趣的用户）
        Person bob = new Person();   
        // 实例化第二个观察者（对林俊杰感兴趣的用户）

        // 3. 分别让 alice 和 bob 订阅自己感兴趣的演唱会
        alice.tryToBuyTicketsFor("周杰伦演唱会", ticketSeller);
        // alice 想要周杰伦演唱会门票，于是告诉 ticketSeller “我订阅这场演唱会”
        bob.tryToBuyTicketsFor("林俊杰演唱会", ticketSeller);
        // bob 想要林俊杰演唱会门票，也向 ticketSeller 订阅

        // 4. 卖票方宣布演唱会开始，看看谁会收到通知并且行动
        System.out.println("\n=== 第一次宣布：周杰伦演唱会 ===");
        ticketSeller.announceNewConcert("周杰伦演唱会");
        // announceNewConcert 会通知所有已订阅的观察者
        // alice 感兴趣，会执行购买；bob 也会收到通知但不感兴趣，所以不会购买

        System.out.println("\n=== 第二次宣布：林俊杰演唱会 ===");
        ticketSeller.announceNewConcert("林俊杰演唱会");
        // 同理，这次 bob 会购买，alice 只会收到消息但不执行购买
    }
}

/**
 * 观察者接口：任何想收到“门票可用”通知的类，都必须实现此接口。
 * 其中只有一个方法：ticketsAvailableFor(String concertName)
 * 用于在某个演唱会可以购票时获得回调通知。
 */
interface TicketNotificationSubscriber {
    /**
     * 回调方法：当名为 concertName 的演唱会可购票时触发
     * @param concertName 演唱会的名称
     */
    void ticketsAvailableFor(String concertName);
}

/**
 * 主题(Subject)：卖票方 TicketSeller
 * - 维护一个“订阅者”列表(subscribers)，
 * - 当有新的演唱会消息时(announceNewConcert)，循环调用每个订阅者的回调方法。
 */
class TicketSeller {
    // 用于存放所有已订阅的观察者(实现了 TicketNotificationSubscriber 接口的对象)
    private List<TicketNotificationSubscriber> subscribers = new ArrayList<>();

    /**
     * 订阅方法：让任何实现了 TicketNotificationSubscriber 的对象加进来
     * @param subscriber 传入的订阅者对象
     */
    public void signUpForNotifications(TicketNotificationSubscriber subscriber) {
        this.subscribers.add(subscriber);
        // 将订阅者加入列表，以后有新演唱会时会通知他们
    }

    /**
     * 模拟宣布新的演唱会来临，并通知所有订阅者
     * @param concertName 演唱会名字
     */
    public void announceNewConcert(String concertName) {
        System.out.println("【TicketSeller】宣布演唱会 " + concertName + " 可以购票了！");
        // 广播给每一个订阅者
        for (TicketNotificationSubscriber sub : subscribers) {
            sub.ticketsAvailableFor(concertName);
        }
    }

    /**
     * 简化的购票方法，这里仅做打印演示
     * @param concertName 演唱会名字
     */
    public void purchaseTicketFor(String concertName) {
        System.out.println("【TicketSeller】购买了演唱会 " + concertName + " 的门票。");
        // 实际业务中，可能会在这里进行扣款、票务记录、发送电子票等操作
    }
}

/**
 * 具体观察者(Concrete Observer)：一个“想买演唱会票的人”。
 * 实现了 TicketNotificationSubscriber 接口，就可以订阅演唱会通知。
 */
class Person implements TicketNotificationSubscriber {
    private String interestedConcert; // 保存感兴趣的演唱会名称
    private TicketSeller seller;      // 用来操作买票、以及由谁发送通知

    /**
     * 让这个人开始订阅并关注某个演唱会的门票通知
     * @param concertName 感兴趣的演唱会名称
     * @param seller 需要向哪个卖票方订阅
     */
    public void tryToBuyTicketsFor(String concertName, TicketSeller seller) {
        this.interestedConcert = concertName; // 记录下自己想看的演唱会
        this.seller = seller;                 // 记录要向哪个 TicketSeller 订阅
        seller.signUpForNotifications(this);  // 将自己(this)注册到卖票方的订阅列表
    }

    /**
     * 收到票务通知的回调方法
     * @param concertName 哪个演唱会来了票
     */
    @Override
    public void ticketsAvailableFor(String concertName) {
        // 每当 TicketSeller.broadcast 时，就会调用这个方法
        System.out.println("【Person】收到通知：演唱会 " + concertName + " 票来了！");
        // 如果和自己的 interestedConcert 匹配，才去买
        if (concertName.equals(this.interestedConcert)) {
            System.out.println("【Person】正是我想看的演唱会！赶紧买票！");
            seller.purchaseTicketFor(concertName);
        } else {
            System.out.println("【Person】但这场演唱会我不感兴趣。");
        }
    }
}

```



:::

## 4. 扩展与思考

上面是最简洁的一种实现方式。在实际项目中，根据需求不同，还可能会有一些变体或增强：

1. **增加取消订阅（unregister / removeObserver）**：有时观察者不再对某些事件感兴趣，需要在主题中把自己移除。
2. **增加多种通知类型**：比如不仅仅是“演唱会开始发售”这一种事件，可能还有“演唱会售罄”之类的事件，此时观察者接口里可以有多个方法。
3. **过滤特定主题**：如讲义中提到的，如果观众只想听一个歌手或者只想了解某些演出，就可以让 `TicketSeller` 更智能地发送更“精准”的通知。
4. **批量通知**：有时不想一有消息就通知，可以几个小时发送一次“综合”消息，比如常见的邮件订阅选项“立即通知”VS“每日/每周汇总”。

无论如何，核心点不变：**主题维护一组观察者对象，发生某件事时调用观察者接口的方法进行回调，从而让观察者对该事件做出相应处理。** 这就是观察者模式(Observer Pattern)。

## 5. 小结

- **问题场景**：当某个对象发生“某种变化”时，需要通知其他感兴趣的对象。
- 核心结构：
    - 主题(Subject)保存一个观察者(Observer)列表；
    - 主题发生事件时，依次调用`observer.回调方法()`去通知。
- **适用范围非常广**：图形界面的按钮点击、网络状态变更的通知、订阅-发布系统等都可归为观察者模式。

希望这个例子和逐步实现的过程能帮你真正理解并掌握“观察者模式”。如果你把上面的代码都放在一个文件里（或者按照各个类拆成多个文件），编译运行，就可以亲眼看到程序如何在“广播事件”时通知所有观察者了。

























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

