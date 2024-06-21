---
title: 05-全新输入系统 input system
date: 2023-04-19 16:47:39
author: AI悦创
isOriginal: true
category: 
    - Unity休闲手机游戏开发
    - Unity
tag:
    - Unity休闲手机游戏开发
    - Unity
icon: unity
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

## 1. 下载输入系统

::: tabs

@tab 1

![](./05-全新输入系统-input-system.assets/image-20230419165430750.png)

@tab 2

![](./05-全新输入系统-input-system.assets/image-20230419165602992.png)

@tab 3

![](./05-全新输入系统-input-system.assets/image-20230419165716537.png)

@tab 4

![](./05-全新输入系统-input-system.assets/image-20230419165744617.png)

:::

那么旧的是什么呢？

![](./05-全新输入系统-input-system.assets/image-20230419165818003.png)

新的优势是：可以同时设置多平台，多输入系统。

例如：键盘、鼠标、手柄、操纵杆、触控设置，在新输入系统中，只要设置一套输入，就可以满足各个平台的输入。

![](./05-全新输入系统-input-system.assets/image-20230419170809955.png)

第二个就是最新系统，Both 就是两个都使用。

::: tabs

@tab 1

![](./05-全新输入系统-input-system.assets/image-20230419170904158.png)

@tab 2

![](./05-全新输入系统-input-system.assets/image-20230419170941241.png)

@tab 3

![](./05-全新输入系统-input-system.assets/image-20230419171532073.png)

@tab 4

![](./05-全新输入系统-input-system.assets/image-20230522001417960.png)

@tab 5

![](./05-全新输入系统-input-system.assets/image-20230522001522498.png)

@tab 6

![](./05-全新输入系统-input-system.assets/image-20230522001542069.png)

![](./05-全新输入系统-input-system.assets/image-20230522001552316.png)

@tab 7

![](./05-全新输入系统-input-system.assets/image-20230419172024055.png)

![](./05-全新输入系统-input-system.assets/image-20230522001617404.png)

@tab 8

![](./05-全新输入系统-input-system.assets/image-20230419172207189.png)

:::

**查看文档**

::: tabs

@tab 1

![](./05-全新输入系统-input-system.assets/image-20230419172400456.png)

@tab 2

![](./05-全新输入系统-input-system.assets/image-20230419172840019.png)

:::



## 2. 使用输入系统

### 2.1 新建文件夹

::: tabs

@tab 1

![选择 Assets](./05-全新输入系统-input-system.assets/image-20230419173452844.png)

@tab 2

![](./05-全新输入系统-input-system.assets/image-20230419175444683.png)

@tab 3

![](./05-全新输入系统-input-system.assets/image-20230419175550787.png)

@tab 4

![](./05-全新输入系统-input-system.assets/image-20230419175620981.png)

@tab 5

![](./05-全新输入系统-input-system.assets/image-20230419175705102.png)

@tab 6

![](./05-全新输入系统-input-system.assets/image-20230419175954746.png)

@tab 7

![](./05-全新输入系统-input-system.assets/image-20230419180009291.png)

@tab 8

![](./05-全新输入系统-input-system.assets/image-20230419180031262.png)

:::

你的项目可以有多个 Action Maps。在什么场景使用什么输入：游戏开始、游戏结束、游戏重启啥的用不同的 input map。

在左上角，我们可以创建游戏的配置表：

![](./05-全新输入系统-input-system.assets/image-20230424145820528.png)

比如说键盘使用哪一套按键配置，手柄用的是哪一个配置。

::: tabs

@tab 1

![](./05-全新输入系统-input-system.assets/image-20230424145931837.png)

@tab 2

![](./05-全新输入系统-input-system.assets/image-20230424150217242.png)

@tab 3

![](./05-全新输入系统-input-system.assets/image-20230424150336813.png)

:::

还没有对应的键盘。

![](./05-全新输入系统-input-system.assets/image-20230424150751020.png)

当然，最方便的不是这个。最方便的是，你要找到想要的键盘不容易，这个时候怎么办？它可以监听：

::: tabs

@tab 1

![](./05-全新输入系统-input-system.assets/image-20230424151006994.png)

@tab 2

![](./05-全新输入系统-input-system.assets/image-20230424151225040.png)

@tab 3

![](./05-全新输入系统-input-system.assets/image-20230424151304066.png)

:::

除了使用空格，我还想使用屏幕上的按钮呢？可以再添加一个：

::: tabs

@tab 1

![](./05-全新输入系统-input-system.assets/image-20230522101540358.png)

@tab 2

![](./05-全新输入系统-input-system.assets/image-20230424151411086.png)

@tab 3

![](./05-全新输入系统-input-system.assets/image-20230424151455237.png)

@tab 4

![](./05-全新输入系统-input-system.assets/image-20230424151551946.png)

@tab 5

![](./05-全新输入系统-input-system.assets/image-20230424151724469.png)

在这里，你可以看到当前的类型，是按钮类型。

我们也可以设置按下的类型：

![](./05-全新输入系统-input-system.assets/image-20230614180726623.png)

:::

接着我们可以发现，Interactions 互动类型。「我目前点击的是 Jump」其次，还需要把 jump 的 Action Type 改回 Button。

![](./05-全新输入系统-input-system.assets/image-20230424152019860.png)

可以设置按多久，超过时间就失效：

::: tabs

@tab 1

![](./05-全新输入系统-input-system.assets/image-20230424152153601.png)

@tab 2

![](./05-全新输入系统-input-system.assets/image-20230424152236126.png)

:::

上面我们完成了短按，在这个游戏里面我们还需要长按，我们来新建一个：

::: tabs

@tab 1

![](./05-全新输入系统-input-system.assets/image-20230424152708760.png)

@tab 2

![](./05-全新输入系统-input-system.assets/image-20230614181908198.png)

@tab 3

![](./05-全新输入系统-input-system.assets/image-20230614181929629.png)

:::

我们还需要小青蛙可以左右移动，所以小青蛙需要可以识别。那么我们可以使用什么原理来实现呢？——我们可以使用坐标来判断是左还是右。

::: tabs

@tab 1

![](./05-全新输入系统-input-system.assets/image-20230424152932720.png)

@tab 2

![](./05-全新输入系统-input-system.assets/image-20230424153050946.png)

@tab 3

![](./05-全新输入系统-input-system.assets/image-20230424153116187.png)

:::

之后我会讲我们如何在电脑上模拟这些操作。

![](./05-全新输入系统-input-system.assets/image-20230424153208000.png)

## 3. 如何使用呢？

我们找到我们的 Frog 来使用，然后添加组件：

::: tabs

@tab 1

![](./05-全新输入系统-input-system.assets/image-20230424153636900.png)

@tab 2

![](./05-全新输入系统-input-system.assets/image-20230424165042810.png)



:::

我们就可以添加一个上面添加的 Action。

::: tabs

@tab 1

可以拖拽也可以点击右侧查找。

![](./05-全新输入系统-input-system.assets/image-20230614182339013.png)

![](./05-全新输入系统-input-system.assets/image-20230424165539976.png)

@tab 2

选择事件驱动：

![](./05-全新输入系统-input-system.assets/image-20230614182720008.png)

![](./05-全新输入系统-input-system.assets/image-20230424165648490.png)

@tab 3

![](./05-全新输入系统-input-system.assets/image-20230424165729849.png)

:::

有很多事件，例如当你的手柄断连了，游戏暂停。当你连接上就执行继续游戏。

当你手机没电了，它就会执行断连操作。

![](./05-全新输入系统-input-system.assets/image-20230424165948874.png)

## 4. 那接下来，我们进行编写我们的第一个代码了

![](./05-全新输入系统-input-system.assets/image-20230424170248798.png)

当我们执行点击跳跃操作的时候，我们应该执行上面角色和事件。

「我们要让哪个物体执行什么方法」也就是每当我们执行跳跃方法的时候，会执行下面所有事件。

::: tabs

@tab 1

![](./05-全新输入系统-input-system.assets/image-20230503145143624.png)

@tab 2

![](./05-全新输入系统-input-system.assets/image-20230503145400778.png)

:::

文件名称和类名要一致：

::: tabs

@tab 1

![](./05-全新输入系统-input-system.assets/image-20230503145443569.png)

@tab 2

![](./05-全新输入系统-input-system.assets/image-20230503145608673.png)

@tab 3

![](./05-全新输入系统-input-system.assets/image-20230522110214243.png)

:::

## 5. 编写代码

::: code-tabs

@tab init

```cs
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerController : MonoBehaviour
{
    // Start is called before the first frame update
    // 开始的第一帧，才执行的方法
    void Start()
    {
        
    }

    // Update is called once per frame
    // 循环执行，每一帧都执行，如果你的游戏达到了 60帧，那你的程序就会每秒执行 60次
    // 所以，游戏不断的操作，要放在 update 里面执行
    void Update()
    {
        
    }
}
```

@tab 编写

```cs
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.InputSystem;

public class PlayerController : MonoBehaviour
{
    public void Jump()
    {
        // 创建一个默认的函数写法
        // public 公开的，其它类都可以调用
        // void 没有返回类型
        Debug.Log("Jump! Hello...");
    }
}
```

:::

::: tabs

@tab 1

![](./05-全新输入系统-input-system.assets/image-20230508152002048.png)

@tab 2

![](./05-全新输入系统-input-system.assets/image-20230508152138928.png)

:::

现在我们可以捋一下思路，我们可以点击刚刚对于 Jump 设定的功能，也就是按下空格或者点击屏幕可以实现控制台输出。

你可以点击运行即可：

![](./05-全新输入系统-input-system.assets/image-20230508152830093.png)

![](./05-全新输入系统-input-system.assets/image-20230508153040761.png)

```cs {10}
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.InputSystem;

public class PlayerController : MonoBehaviour
{
    public void Jump()
    {
        // TODO: 执行跳跃，跳跃的距离，记录分数，播放跳跃的音效
        // 创建一个默认的函数写法
        // public 公开的，其它类都可以调用
        // void 没有返回类型
        Debug.Log("Jump! Hello...");
    }
}
```

**有人有可能会发现，我们按下空格后，这个函数被执行了两次，是为什么呢？**——因为，按下、松开所以调用了两次。这里面是有回调的方法，可以试一试下面的代码，使我们的输出更多的信息：

```cs {8,14}
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.InputSystem;

public class PlayerController : MonoBehaviour
{
    public void Jump(InputAction.CallbackContext context)
    {
        // TODO: 执行跳跃，跳跃的距离，记录分数，播放跳跃的音效
        // 创建一个默认的函数写法
        // public 公开的，其它类都可以调用
        // void 没有返回类型
        Debug.Log("Jump! Hello..." + context);
    }
}
```

![](./05-全新输入系统-input-system.assets/image-20230508160944874.png)

因为被我们修改了代码，所以显示的是 Missing。所以，这样我们就和上面操作一样：

![](./05-全新输入系统-input-system.assets/image-20230508171240684.png)

接下来可以运行试一试：

![](./05-全新输入系统-input-system.assets/image-20230508172449638.png)

通过观察，我们可以发现，是执行了两次。

那我们可以添加一个判断语句：

```cs
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.InputSystem;

public class PlayerController : MonoBehaviour
{
    public void Jump(InputAction.CallbackContext context)
    {
        // TODO: 执行跳跃，跳跃的距离，记录分数，播放跳跃的音效
        // 创建一个默认的函数写法
        // public 公开的，其它类都可以调用
        // void 没有返回类型
        if (context.phase == InputActionPhase.Performed) 
        {  // 这样只有在功能完全的输出，我们才有里面的内容
            Debug.Log("Jump! Hello..." + context);
        }
    }
}
```

这样只有一条执行了。



欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！

::: details 公众号：AI悦创【二维码】

![](/gzh.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Linux、Web全栈」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](/zsxq.jpg)
