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

comment: true

backToTop: true
toc: true
---

## 1. 下载输入系统

::: tabs

@tab 1

![](https://blog.images.bornforthis.cn/docs-images/sha256/73/7363eefae163352504c010137c66d1048762ab02f049fd4a628800ff76e80ee0.png)

@tab 2

![](https://blog.images.bornforthis.cn/docs-images/sha256/46/46a3c424e8d5795edb78a41a3b9adc22a9ef09beb4935c8b210ff6dd989ffae1.png)

@tab 3

![](https://blog.images.bornforthis.cn/docs-images/sha256/6c/6c10d680ccc6adc7bd671bbea59d97aaa9d7f930c16205d7989104666a711847.png)

@tab 4

![](https://blog.images.bornforthis.cn/docs-images/sha256/c6/c667a43ef2cf47a0fb785beb029470aceb7601fe1d4709d2760f3456a79490be.png)

:::

那么旧的是什么呢？

![](https://blog.images.bornforthis.cn/docs-images/sha256/d5/d520d3c0a41bd6363b6295b3d6f7a086a355aed9904bc0ad49df810cc3da2c25.png)

新的优势是：可以同时设置多平台，多输入系统。

例如：键盘、鼠标、手柄、操纵杆、触控设置，在新输入系统中，只要设置一套输入，就可以满足各个平台的输入。

![](https://blog.images.bornforthis.cn/docs-images/sha256/05/05c27b290f7aa3818b29bf99a4630796d3dfd4d66ebc1ce3e409f5866a443e1e.png)

第二个就是最新系统，Both 就是两个都使用。

::: tabs

@tab 1

![](https://blog.images.bornforthis.cn/docs-images/sha256/37/378103f2694a5b522376eea166f0b71a66a65ad8de71378d54157eb246d106f6.png)

@tab 2

![](https://blog.images.bornforthis.cn/docs-images/sha256/b2/b2919ec877f0db1ededacd5826983c45cf5b439d794e29884b29200bca5ac373.png)

@tab 3

![](https://blog.images.bornforthis.cn/docs-images/sha256/a4/a480083597ba89908b4fbd8fda3accd97c97b3ce227dd17c571e876605ee14a6.png)

@tab 4

![](https://blog.images.bornforthis.cn/docs-images/sha256/c1/c13e8b2effad1382ba0876d3023237962f620171ce66cb9aeb5dacf77e4dd055.png)

@tab 5

![](https://blog.images.bornforthis.cn/docs-images/sha256/e5/e55bb62807af1a9d58650f89dd28b7d0c566b16b54e52c1fe563c81e15f01146.png)

@tab 6

![](https://blog.images.bornforthis.cn/docs-images/sha256/af/af0d26a3eba499956dce5695c9312be156f5935b9d6726553e518851fb07b7e0.png)

![](https://blog.images.bornforthis.cn/docs-images/sha256/3e/3e38dddfda1dbab0e875b2e0c1b29394183857c60d37aefe81eedd8070cb44d1.png)

@tab 7

![](https://blog.images.bornforthis.cn/docs-images/sha256/93/9373f2702ae3e4e9462da8c9c27402343ca68f2ae7bc99228c5d5b1c45b06244.png)

![](https://blog.images.bornforthis.cn/docs-images/sha256/f5/f56d77b57d5b2d1bdbc85cef48df7f58cdad720972b34b22b94a6f53b962372a.png)

@tab 8

![](https://blog.images.bornforthis.cn/docs-images/sha256/7e/7e53d3bac5f93585ae324d8a4b7a990fb3e02000ff05e54084a862df89daf412.png)

:::

**查看文档**

::: tabs

@tab 1

![](https://blog.images.bornforthis.cn/docs-images/sha256/77/77c8f546dac29b6ba3949cdde9ad8005f5b599a8caa58f00c087f99b7bac26c9.png)

@tab 2

![](https://blog.images.bornforthis.cn/docs-images/sha256/95/958898181098e1c6f2b218f5c115917f5dfc285077715bef76b2717471397734.png)

:::



## 2. 使用输入系统

### 2.1 新建文件夹

::: tabs

@tab 1

![选择 Assets](https://blog.images.bornforthis.cn/docs-images/sha256/4f/4fc70874b2b0506ea3f3e99642eb290cb3ce6651adc7ac69053b9f355ed9fba3.png)

@tab 2

![](https://blog.images.bornforthis.cn/docs-images/sha256/47/47bd196ccc8cf9a043bafea11c4cde9b5bafc8a0242d9a7d1f0327e548d326a3.png)

@tab 3

![](https://blog.images.bornforthis.cn/docs-images/sha256/bc/bceba896a6bbec69fc960d9d6ac2549f4ef3f6c21b7c76727ed99e6ef8d916bb.png)

@tab 4

![](https://blog.images.bornforthis.cn/docs-images/sha256/ae/ae00e25eaa24eb9c587a5951c82d09902ad6de2a4a501295d53b8fc4df84de83.png)

@tab 5

![](https://blog.images.bornforthis.cn/docs-images/sha256/b1/b1206e085f956fb6afcdaea0cd6c249539034dc703c77985070178f7bd092fa7.png)

@tab 6

![](https://blog.images.bornforthis.cn/docs-images/sha256/42/42b1219e37bf7e13d2dd6425e91b5ad3a94b01ac6560e768465498d8fa95ae75.png)

@tab 7

![](https://blog.images.bornforthis.cn/docs-images/sha256/f3/f3ba3f58e48d821eaffe2b512524f86091dbd57623fde35cc0ac6059475eb30b.png)

@tab 8

![](https://blog.images.bornforthis.cn/docs-images/sha256/85/854cbbfd8ed6266ae569485a5c9513e781f0d3122eb218e6220a4cfdd9e05bfb.png)

:::

你的项目可以有多个 Action Maps。在什么场景使用什么输入：游戏开始、游戏结束、游戏重启啥的用不同的 input map。

在左上角，我们可以创建游戏的配置表：

![](https://blog.images.bornforthis.cn/docs-images/sha256/c4/c4aa325dea6c71170ce79886dff6b8c06c7a0513b027733cb70a6b1457b4a64a.png)

比如说键盘使用哪一套按键配置，手柄用的是哪一个配置。

::: tabs

@tab 1

![](https://blog.images.bornforthis.cn/docs-images/sha256/9b/9b0bde42e5b32ce012da76da060e6ac41ea5f2595f4b556b5e5464b04e42eb26.png)

@tab 2

![](https://blog.images.bornforthis.cn/docs-images/sha256/2b/2b9d64f56dcabefe91755317f50e794b1ac070e373f66da71c4988ee01db45b8.png)

@tab 3

![](https://blog.images.bornforthis.cn/docs-images/sha256/14/143a0e9c717112c326dbbe4e654025233f7ac284f10829839567a7fe81db2d53.png)

:::

还没有对应的键盘。

![](https://blog.images.bornforthis.cn/docs-images/sha256/f8/f89cfe863ec3091b3a0090ff40adcf3c3da0e66a4863e742d9c99921bbfff3a1.png)

当然，最方便的不是这个。最方便的是，你要找到想要的键盘不容易，这个时候怎么办？它可以监听：

::: tabs

@tab 1

![](https://blog.images.bornforthis.cn/docs-images/sha256/37/3769caea735625158df788deeed2460c3e7776e834a394471bfb5157ad2443ff.png)

@tab 2

![](https://blog.images.bornforthis.cn/docs-images/sha256/a9/a9944d57e6eb11aada7f852373c17a1c309438100074ab7471db2447e13f4749.png)

@tab 3

![](https://blog.images.bornforthis.cn/docs-images/sha256/cb/cbc18d78d7d4351ee95d0eda7eb1681aaf304c6e42eab1e4438733e99daf400f.png)

:::

除了使用空格，我还想使用屏幕上的按钮呢？可以再添加一个：

::: tabs

@tab 1

![](https://blog.images.bornforthis.cn/docs-images/sha256/bd/bdd5357cce461bac450dd8b0f0cbb668def4c6e4af922798725b8e8a4f7813ea.png)

@tab 2

![](https://blog.images.bornforthis.cn/docs-images/sha256/c9/c9891e5fd81b0a4b7d64e759f99aa5c86e015045c5ba1d85c87af62a3548983f.png)

@tab 3

![](https://blog.images.bornforthis.cn/docs-images/sha256/df/df85b974d6606269134ceb630a1bd26bc5ec0518426b5dd682575e8349d4a3dd.png)

@tab 4

![](https://blog.images.bornforthis.cn/docs-images/sha256/e6/e620a76f16cbf37c513731c5ce10fe7e15540564fa64a7cb7594e62bc0892f8e.png)

@tab 5

![](https://blog.images.bornforthis.cn/docs-images/sha256/ac/ac8bbfc8fb1e9bb32366f3c306d43a011c60ab0c56708d2196325aa904a87f18.png)

在这里，你可以看到当前的类型，是按钮类型。

我们也可以设置按下的类型：

![](https://blog.images.bornforthis.cn/docs-images/sha256/c3/c3ed54063110c10c8eb4b2618df1e17ed5ff67bc8a7667a371b63833208e2dc9.png)

:::

接着我们可以发现，Interactions 互动类型。「我目前点击的是 Jump」其次，还需要把 jump 的 Action Type 改回 Button。

![](https://blog.images.bornforthis.cn/docs-images/sha256/01/01eccb67a595cdb550fd3f4f1449625ae47c75aad7a7e096464bb0b308d6673d.png)

可以设置按多久，超过时间就失效：

::: tabs

@tab 1

![](https://blog.images.bornforthis.cn/docs-images/sha256/0a/0a3c2ba525fa14553d79d9e0860a2d7ac78ee7e0c760d99a34b057d4edaa4cb3.png)

@tab 2

![](https://blog.images.bornforthis.cn/docs-images/sha256/dc/dc99d7aaefef8bfceca6c577cff0518dc73220e3536c0ac8b94552c5067a1e73.png)

:::

上面我们完成了短按，在这个游戏里面我们还需要长按，我们来新建一个：

::: tabs

@tab 1

![](https://blog.images.bornforthis.cn/docs-images/sha256/69/69b671f0719e062200952eebae006b62f162eb6e7954bc717d5405b8f80e4df5.png)

@tab 2

![](https://blog.images.bornforthis.cn/docs-images/sha256/90/90ce2a4c8bf3bc4b41afc0c01308b226aeedda1a25ff62b294f5c9775c1ee1a2.png)

@tab 3

![](https://blog.images.bornforthis.cn/docs-images/sha256/e7/e71016f909606c831bf2ff14ad70785550327a2e610ea5f7e4f842a79c84f397.png)

:::

我们还需要小青蛙可以左右移动，所以小青蛙需要可以识别。那么我们可以使用什么原理来实现呢？——我们可以使用坐标来判断是左还是右。

::: tabs

@tab 1

![](https://blog.images.bornforthis.cn/docs-images/sha256/10/1027584dde17ccd847a24796d3adef80a841856915f30d4778ad1d012588c857.png)

@tab 2

![](https://blog.images.bornforthis.cn/docs-images/sha256/c5/c51e772e1fa1554b0fc4dcb44f3416405524f8b029a4375b2914151bd369a776.png)

@tab 3

![](https://blog.images.bornforthis.cn/docs-images/sha256/53/53a6e9477c43cf06d0b31ebc7fe59710989dd9cd15e77d1d065ab02a55a5e4df.png)

:::

之后我会讲我们如何在电脑上模拟这些操作。

![](https://blog.images.bornforthis.cn/docs-images/sha256/88/885643b73c0e9492b5662d11417fdf8e74de9b428e235b7d2d162be0495039d2.png)

## 3. 如何使用呢？

我们找到我们的 Frog 来使用，然后添加组件：

::: tabs

@tab 1

![](https://blog.images.bornforthis.cn/docs-images/sha256/6e/6ee084af3738b9e93f539159c9e013d34edd77efd4cc6cc30d03166648b47d61.png)

@tab 2

![](https://blog.images.bornforthis.cn/docs-images/sha256/e1/e1d835a8a327b6c16706a69eb85a4778b317561c19df6855402371cb8a95eb67.png)



:::

我们就可以添加一个上面添加的 Action。

::: tabs

@tab 1

可以拖拽也可以点击右侧查找。

![](https://blog.images.bornforthis.cn/docs-images/sha256/52/5225a16e71956637a8aaa70a416cac4162eb784f1dff42943f22ac7ca05d4c98.png)

![](https://blog.images.bornforthis.cn/docs-images/sha256/89/898d9559e0086ce669dea3028a255ace0122617fd127e8c5f6f0a892e5a30923.png)

@tab 2

选择事件驱动：

![](https://blog.images.bornforthis.cn/docs-images/sha256/d0/d0f75ad0def3a6c2700b355dc3b7946dadae66aba59bb2e60e5014c2ddd31e93.png)

![](https://blog.images.bornforthis.cn/docs-images/sha256/8f/8f8ba49f00d507f73f34272ad68071d8abd02765ee1ae944919c4ec405ea6516.png)

@tab 3

![](https://blog.images.bornforthis.cn/docs-images/sha256/fe/fe885e661970194f079c8d92761da55339fd7d4db183ddf2e7a537b77c739b36.png)

:::

有很多事件，例如当你的手柄断连了，游戏暂停。当你连接上就执行继续游戏。

当你手机没电了，它就会执行断连操作。

![](https://blog.images.bornforthis.cn/docs-images/sha256/68/6855149de0861079aeca2a346c2a4c930ec34c8aec9dd59df515390f65b13a0d.png)

## 4. 那接下来，我们进行编写我们的第一个代码了

![](https://blog.images.bornforthis.cn/docs-images/sha256/26/26b24a97c561795736de62d6b38a6ec1f6051b163328975a0758f2b6304b66f8.png)

当我们执行点击跳跃操作的时候，我们应该执行上面角色和事件。

「我们要让哪个物体执行什么方法」也就是每当我们执行跳跃方法的时候，会执行下面所有事件。

::: tabs

@tab 1

![](https://blog.images.bornforthis.cn/docs-images/sha256/92/921f014e86623bd2700631d4bd12172380893fbc716b27d955c381c3dcd47996.png)

@tab 2

![](https://blog.images.bornforthis.cn/docs-images/sha256/15/1574168ad884c753b9fd5f8427e92d70f1f37f3ad30f2ffbc11603c7d1f8f721.png)

:::

文件名称和类名要一致：

::: tabs

@tab 1

![](https://blog.images.bornforthis.cn/docs-images/sha256/c4/c4f27fe764a8d33a3260089a94a2f0e30802f65efdecf90a97f25b36b943d28f.png)

@tab 2

![](https://blog.images.bornforthis.cn/docs-images/sha256/8a/8a081031f43c672ab33429cd52d43ba3aa4b841a6ed089c5612d6b7f7870efb8.png)

@tab 3

![](https://blog.images.bornforthis.cn/docs-images/sha256/f9/f9097ad0eea6826d5a92d37b0f1d55d87a51c8f730fe36f11a87e1ef9c277d65.png)

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

![](https://blog.images.bornforthis.cn/docs-images/sha256/dc/dcab2b0370df5ead30c52182dcf0314707d482d932854393c9aba893fe6df7dd.png)

@tab 2

![](https://blog.images.bornforthis.cn/docs-images/sha256/de/de140256361910748beb0678d1006798774bf29915d2288b6580aa3acad8270f.png)

:::

现在我们可以捋一下思路，我们可以点击刚刚对于 Jump 设定的功能，也就是按下空格或者点击屏幕可以实现控制台输出。

你可以点击运行即可：

![](https://blog.images.bornforthis.cn/docs-images/sha256/47/477c7b74aa530c228bbe46d04d8d643bd0c070ee08e57407d0e077b60f66f175.png)

![](https://blog.images.bornforthis.cn/docs-images/sha256/f7/f795af38d19671072c5fcabe8e24bf6c0d45c94c3751c81c99d9a663220b0d85.png)

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

![](https://blog.images.bornforthis.cn/docs-images/sha256/3a/3a9a89d031907df834df71fe40fa284b6d3888e2b8adf39744f7e9002eee76b0.png)

因为被我们修改了代码，所以显示的是 Missing。所以，这样我们就和上面操作一样：

![](https://blog.images.bornforthis.cn/docs-images/sha256/ad/ad8a11fdd6c4e9b9d531df2d3153ccacf93159ec2a99de9465e048e24a7de410.png)

接下来可以运行试一试：

![](https://blog.images.bornforthis.cn/docs-images/sha256/0d/0d82c4e445ff0de1032433c3260ab14806806e1af8ffc2fe9ae24a0fcbe93fdc.png)

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

![](https://blog.images.bornforthis.cn/docs-images/sha256/77/77f67d48a67ec6a44a4ef1f01ffc85830eb3c121b1ece45dc5ada06e20e2f52b.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Linux、Web全栈」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](https://blog.images.bornforthis.cn/docs-images/sha256/30/3087c629da73428daa0ee050f5b31709c30f650686164b54c724b892a422c585.jpg)
