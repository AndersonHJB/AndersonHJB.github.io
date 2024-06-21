---
title: 补充3：C# 专项练习
date: 2024-05-12 09:40:35
author: AI悦创
isOriginal: true
category: 
    - C#教程
tag:
    - C#教程
icon: c
sticky: false
star: false
article: true
timeline: true
image: false
navbar: true
sidebarIcon: true
headerDepth: 3
comment: true
lastUpdated: true
editLink: false
backToTop: true
---

## 1. ATM 机系统

编写一个Python程序，使用 `while` 循环实现一个基础的ATM机系统。程序应该具备以下功能：

1. **初始设定：** 程序开始时，要求用户设定初始的账户余额。
2. **交互菜单：** 用户可以通过输入选择查看余额、存款、取款或退出。
3. **存款功能：** 用户选择存款后，输入存款金额并更新余额。
4. **取款功能：** 用户选择取款时，先检查账户余额是否足够，足够则扣除相应金额，不够则提示余额不足。
5. **查看余额：** 允许用户随时查看当前余额。
6. **退出系统：** 用户选择退出时，打印一条消息确认并结束程序。

**程序要求：**

- 使用 `while` 循环处理用户的多次交互直到用户选择退出。
- 确保所有输入均为有效数字，非数字输入时应提示错误并要求重新输入。
- 实现至少一种方式的用户身份验证，比如初始设定一个PIN码，每次操作前需验证。

**运行演示：**

```bash
/Users/huangjiabao/anaconda3/envs/Pycharm/bin/python /Users/huangjiabao/GitHub/iMac/Pycharm/StudentCoder/51-lujiux/code.py 
请设定您的初始账户余额: 9999999
请输入您的PIN码以继续：1314
PIN码错误，请重试。
请输入您的PIN码以继续：1234

欢迎使用ATM机系统
1. 查看余额
2. 存款
3. 取款
4. 退出
请输入您的选择（1-4）：1
您的账户余额为：$9999999.00

欢迎使用ATM机系统
1. 查看余额
2. 存款
3. 取款
4. 退出
请输入您的选择（1-4）：2
请输入存款金额：1
存款成功！您的新余额为：$10000000.00

欢迎使用ATM机系统
1. 查看余额
2. 存款
3. 取款
4. 退出
请输入您的选择（1-4）：3
请输入取款金额：1
取款成功！您的新余额为：$9999999.00

欢迎使用ATM机系统
1. 查看余额
2. 存款
3. 取款
4. 退出
请输入您的选择（1-4）：4
感谢使用我们的ATM服务，再见！

Process finished with exit code 0
```

::: code-tabs

@tab X 代码

```cs
class Account
{
    public int balance;
    public string pin;
    
    public Account(int balance)
    {   this.balance = balance;
    }
    public bool Checkpin(string pin)
    {
        if (pin == "123")
        {
            return true;
        }
        else
        {
            return false;
        }
        
        
    }
    
    public int deposit()
    {
        int Position = Convert.ToInt32(Console.ReadLine());
        return balance+=Position;
    }
    
    public int withdrawal() 
    {
        int Negation = Convert.ToInt32(Console.ReadLine());
        return balance-=Negation;
    }
}
class Program
{
    static void Main(string[] args)
    {
        Account account = new Account(999999);
        Console.WriteLine("请输入你的密码：");
        account.pin = Console.ReadLine();
        account.Checkpin(account.pin);
        Console.WriteLine("欢迎使用ATM机！");
        Console.WriteLine("1.查看余额");
        Console.WriteLine("2.存款");
        Console.WriteLine("3.取款");
        Console.WriteLine("4.退出");
        Console.WriteLine("请选择需要的服务的序号：");
        int n = Convert.ToInt32(Console.ReadLine());


        switch (n)
        {
            case 1:
                Console.WriteLine(account.balance);
                break;
            case 2:
                Console.WriteLine(account.deposit);
                break;
            case 3:
                Console.WriteLine(account.withdrawal);
                break;
            case 4:
                Console.WriteLine("感谢使用我们的ATM服务，再见！");
                break;
        }

    }
}
```

@tab X 改进判断

```cs
class Account
{
    public int balance;
    public string pin;

    public Account(int balance)
    {
        this.balance = balance;
    }
    public bool Checkpin(string pin)
    {
        if (pin == "123")
        {
            return true;
        }
        else
        {
            return false;
        }


    }

    public int deposit()
    {
        int Position = Convert.ToInt32(Console.ReadLine());
        return balance += Position;
    }

    public int withdrawal()
    {
        int Negation = Convert.ToInt32(Console.ReadLine());
        return balance -= Negation;
    }
}
class Program
{
    static void Main(string[] args)
    {
        Account account = new Account(999999);
        Console.WriteLine("请输入你的密码：");
        account.pin = Console.ReadLine();
        if (account.Checkpin(account.pin))
        {
            account.Checkpin(account.pin);
            Console.WriteLine("欢迎使用ATM机！");
            Console.WriteLine("1.查看余额");
            Console.WriteLine("2.存款");
            Console.WriteLine("3.取款");
            Console.WriteLine("4.退出");
            Console.WriteLine("请选择需要的服务的序号：");
            int n = Convert.ToInt32(Console.ReadLine());


            switch (n)
            {
                case 1:
                    Console.WriteLine(account.balance);
                    break;
                case 2:
                    Console.WriteLine(account.deposit);
                    break;
                case 3:
                    Console.WriteLine(account.withdrawal);
                    break;
                case 4:
                    Console.WriteLine("感谢使用我们的ATM服务，再见！");
                    break;
            }

        }
        else
        {
            Console.WriteLine("密码错误");
        }
    }
}
```

@tab 参考代码

```cs
using System;

class Program
{
    static void Main(string[] args)
    {
        string pin = "1234";
        Console.Write("请设定您的初始账户余额: ");
        double balance = Convert.ToDouble(Console.ReadLine());

        // 验证用户输入的PIN码。用户有三次机会输入正确的PIN码。
        int attempts = 0;
        while (attempts < 3)
        {
            Console.Write("请输入您的PIN码以继续：");
            string entered_pin = Console.ReadLine();
            if (entered_pin == pin)
            {
                break; // 如果PIN码正确，退出循环。
            }
            Console.WriteLine("PIN码错误，请重试。");
            attempts++; // 增加尝试次数。
        }
        if (attempts == 3)
        {
            Console.WriteLine("PIN码错误次数过多，程序退出。");
        }
        else
        {
            // 如果PIN码验证通过，进入主功能菜单的循环。
            while (true)
            {
                Console.WriteLine("\n欢迎使用ATM机系统");
                Console.WriteLine("1. 查看余额");
                Console.WriteLine("2. 存款");
                Console.WriteLine("3. 取款");
                Console.WriteLine("4. 退出");
                Console.Write("请输入您的选择（1-4）：");
                string choice = Console.ReadLine();
                
                switch (choice)
                {
                    case "1":
                        // 查看余额的选项。
                        Console.WriteLine($"您的账户余额为：${balance:0.00}");
                        break;
                    case "2":
                        // 存款的选项。用户输入存款金额。
                        while (true)
                        {
                            Console.Write("请输入存款金额：");
                            try
                            {
                                double amount = Convert.ToDouble(Console.ReadLine());
                                if (amount >= 0)
                                {
                                    balance += amount;
                                    Console.WriteLine($"存款成功！您的新余额为：${balance:0.00}");
                                    break; // 成功存款后退出内部循环。
                                }
                                else
                                {
                                    Console.WriteLine("请输入一个正数。"); // 引导用户输入正数金额。
                                }
                            }
                            catch (FormatException)
                            {
                                Console.WriteLine("无效输入，请输入一个数字。"); // 引导用户输入有效数字。
                            }
                        }
                        break;
                    case "3":
                        // 取款的选项。检查账户余额并进行取款操作。
                        while (true)
                        {
                            Console.Write("请输入取款金额：");
                            try
                            {
                                double amount = Convert.ToDouble(Console.ReadLine());
                                if (amount >= 0)
                                {
                                    if (amount > balance)
                                    {
                                        Console.WriteLine("余额不足，无法完成取款。");
                                    }
                                    else
                                    {
                                        balance -= amount;
                                        Console.WriteLine($"取款成功！您的新余额为：${balance:0.00}");
                                    }
                                    break; // 完成取款或显示余额不足信息后退出循环。
                                }
                                else
                                {
                                    Console.WriteLine("请输入一个正数。");
                                }
                            }
                            catch (FormatException)
                            {
                                Console.WriteLine("无效输入，请输入一个数字。");
                            }
                        }
                        break;
                    case "4":
                        // 退出选项。结束程序。
                        Console.WriteLine("感谢使用我们的ATM服务，再见！");
                        return; // 退出主循环，结束程序。
                    default:
                        // 如果输入非1-4的选项，提示无效输入。
                        Console.WriteLine("无效输入，请输入1-4之间的数字。");
                        break;
                }
            }
        }
    }
}
```

@tab 未能实现重复运行

```cs
using System;

class Account
{
    public int balance;
    public string pin;

    public Account(int balance)
    {
        this.balance = balance;
    }
    public bool Checkpin(string pin)
    {
        return pin == "123";
    }

    public int Deposit()
    {
        Console.WriteLine("请输入存款金额：");
        int position = Convert.ToInt32(Console.ReadLine());
        balance += position;
        return balance;
    }

    public int Withdrawal()
    {
        Console.WriteLine("请输入取款金额：");
        int negation = Convert.ToInt32(Console.ReadLine());
        if (negation > balance)
        {
            Console.WriteLine("余额不足！");
            return balance;
        }
        balance -= negation;
        return balance;
    }
}

class Program
{
    static void Main(string[] args)
    {
        Account account = new Account(999999);
        Console.WriteLine("请输入你的密码：");
        account.pin = Console.ReadLine();

        if (account.Checkpin(account.pin))
        {
            bool exit = false;

            while (!exit)
            {
                Console.WriteLine("欢迎使用ATM机！");
                Console.WriteLine("1.查看余额");
                Console.WriteLine("2.存款");
                Console.WriteLine("3.取款");
                Console.WriteLine("4.退出");
                Console.WriteLine("请选择需要的服务的序号：");
                int n = Convert.ToInt32(Console.ReadLine());

                switch (n)
                {
                    case 1:
                        Console.WriteLine("当前余额：" + account.balance);
                        break;
                    case 2:
                        Console.WriteLine("存款后余额：" + account.Deposit());
                        break;
                    case 3:
                        Console.WriteLine("取款后余额：" + account.Withdrawal());
                        break;
                    case 4:
                        Console.WriteLine("感谢使用我们的ATM服务，再见！");
                        exit = true;
                        break;
                    default:
                        Console.WriteLine("无效的选项，请重新选择！");
                        break;
                }
            }
        }
        else
        {
            Console.WriteLine("密码错误");
        }
    }
}
```

@tab low code

```cs {49,51,74}
using System;

class Account
{
    public int balance;
    public string pin;

    public Account(int balance)
    {
        this.balance = balance;
    }
    public bool Checkpin(string pin)
    {
        return pin == "123";
    }

    public int Deposit()
    {
        Console.WriteLine("请输入存款金额：");
        int position = Convert.ToInt32(Console.ReadLine());
        balance += position;
        return balance;
    }

    public int Withdrawal()
    {
        Console.WriteLine("请输入取款金额：");
        int negation = Convert.ToInt32(Console.ReadLine());
        if (negation > balance)
        {
            Console.WriteLine("余额不足！");
            return balance;
        }
        balance -= negation;
        return balance;
    }
}

class Program
{
    static void Main(string[] args)
    {
        Account account = new Account(999999);
        Console.WriteLine("请输入你的密码：");
        account.pin = Console.ReadLine();

        if (account.Checkpin(account.pin))
        {
            bool exit = true;

            while (exit)
            {
                Console.WriteLine("欢迎使用ATM机！");
                Console.WriteLine("1.查看余额");
                Console.WriteLine("2.存款");
                Console.WriteLine("3.取款");
                Console.WriteLine("4.退出");
                Console.WriteLine("请选择需要的服务的序号：");
                int n = Convert.ToInt32(Console.ReadLine());

                switch (n)
                {
                    case 1:
                        Console.WriteLine("当前余额：" + account.balance);
                        break;
                    case 2:
                        Console.WriteLine("存款后余额：" + account.Deposit());
                        break;
                    case 3:
                        Console.WriteLine("取款后余额：" + account.Withdrawal());
                        break;
                    case 4:
                        Console.WriteLine("感谢使用我们的ATM服务，再见！");
                        exit = false;
                        break;
                    default:
                        Console.WriteLine("无效的选项，请重新选择！");
                        break;
                }
            }
        }
        else
        {
            Console.WriteLine("密码错误");
        }
    }
}
```





:::

## 2. 温度监控系统

**问题描述：**

设计一个温度监控系统，当温度超出设定的安全范围时，系统应自动发送警报。你需要使用C#来实现这个功能。

**基本要求：**
1. 创建一个名为`TemperatureSensor`的类，它包含一个名为`CurrentTemperature`的属性和一个名为`TemperatureChanged`的事件。
2. `CurrentTemperature`的设值器中应触发`TemperatureChanged`事件，只有在温度与上次读数不同时才触发。
3. 创建一个名为`Alarm`的类，该类订阅`TemperatureSensor`的`TemperatureChanged`事件，并在温度超过100度或低于-10度时发出警报。

**进阶要求：**
- 添加一个功能，允许`Alarm`类在警报时记录日志到一个文件中。
- 提供一个用户界面（可以是命令行界面），允许用户输入温度值并显示警报状态。

**评估标准：**
- 代码的清晰度和可读性。
- 事件处理机制的正确实现。
- 进阶功能的完整性。

**各个类的注释：**

1. **TemperatureSensor 类**:
   - `_currentTemperature`: 私有变量，存储当前温度值。
   - `TemperatureChanged`: 事件，当温度变化时触发。
   - `CurrentTemperature`: 属性，设置新温度时检查是否与旧温度不同，如果不同，则触发`TemperatureChanged`事件。

2. **Alarm 类**:
   - `Alarm`构造函数：订阅传感器的`TemperatureChanged`事件。
   - `OnTemperatureChanged`: 事件处理方法，检查温度是否在安全范围外，如果是，则发出警报并记录日志。
   - `LogTemperature`: 将温度记录到日志文件中。

3. **主程序**:
   - 创建`TemperatureSensor`和`Alarm`对象。
   - 循环读取用户输入的温度，并更新传感器的温度值。

```cs
using System;
using System.IO;

// 温度传感器类
public class TemperatureSensor
{
    private int _currentTemperature;

    // 温度变化时触发的事件
    public event EventHandler<int> TemperatureChanged;

    // 当前温度的属性
    public int CurrentTemperature
    {
        get { return _currentTemperature; }
        set
        {
            // 当温度发生变化时，触发事件
            if (_currentTemperature != value)
            {
                _currentTemperature = value;
                TemperatureChanged?.Invoke(this, _currentTemperature);
            }
        }
    }
}

// 警报系统类
public class Alarm
{
    public Alarm(TemperatureSensor sensor)
    {
        // 订阅温度变化事件
        sensor.TemperatureChanged += OnTemperatureChanged;
    }

    private void OnTemperatureChanged(object sender, int newTemperature)
    {
        // 温度超出设定范围时，触发警报
        if (newTemperature > 100 || newTemperature < -10)
        {
            Console.WriteLine($"警报: 温度异常！当前温度为 {newTemperature} 度。");
            LogTemperature(newTemperature);
        }
        else
        {
            Console.WriteLine($"当前温度为 {newTemperature} 度。一切正常。");
        }
    }

    // 记录温度异常到日志文件
    private void LogTemperature(int temperature)
    {
        string path = "TemperatureLog.txt";
        using (StreamWriter writer = new StreamWriter(path, true))
        {
            writer.WriteLine($"警报时间: {DateTime.Now}, 温度: {temperature}");
        }
    }
}

// 主程序
class Program
{
    static void Main()
    {
        TemperatureSensor sensor = new TemperatureSensor();
        Alarm alarm = new Alarm(sensor);

        // 循环获取用户输入的温度并更新传感器状态
        while (true)
        {
            Console.WriteLine("请输入新的温度值 (整数)：");
            int newTemperature;
            if (int.TryParse(Console.ReadLine(), out newTemperature))
            {
                sensor.CurrentTemperature = newTemperature;
            }
            else
            {
                Console.WriteLine("请输入有效的整数温度值！");
            }
        }
    }
}
```

- **事件声明：** `public event EventHandler<int> TemperatureChanged;`

    在 `TemperatureSensor`  类中，声明了一个名为`TemperatureChanged`的事件。这里使用了系统提供的泛型委托`EventHandler<T>`，其定义为一个接受两个参数（一个 `object` 和一个泛型参数 `T`  ）的方法。在这个例子中，`T` 被指定为 `int` 类型，对应温度值。

- **事件的订阅**: `sensor.TemperatureChanged += OnTemperatureChanged;`

    在 `Alarm` 类的构造函数中，将 `OnTemperatureChanged` 方法绑定到 `TemperatureSensor` 的 `TemperatureChanged` 事件。这里的 `+=` 操作符用于添加一个事件处理器，即把 `OnTemperatureChanged` 方法作为委托绑定到 `TemperatureChanged` 事件。

- **事件处理方法**: `private void OnTemperatureChanged(object sender, int newTemperature)`

    `OnTemperatureChanged` 是 `Alarm` 类定义的一个方法，用来响应温度变化的事件。此方法的签名与 `EventHandler<int>` 委托的要求一致（接受一个 `object` 和一个 `int` 作为参数），因此它可以作为事件的处理方法。

- `TemperatureChanged?.Invoke(this, _currentTemperature);`：

    - Invoke：触发事件
    - **this**: 关键字 `this` 代表当前类的实例，也就是 `TemperatureSensor` 类的一个对象。在事件触发时，传递 `this` 作为事件的发送者或来源。这是事件模式中常见的做法，允许事件的接收者知道事件是从哪个对象发出的。
    - **_currentTemperature**: 这个是 `TemperatureSensor` 类中的私有字段，存储当前的温度值。当温度值发生变化时，这个新的温度值通过事件参数传递给事件的处理方法。在这个案例中，`_currentTemperature` 是一个整数（int），代表当前的温度。



## 3. 泛型

**题目描述：**

创建一个泛型类 `Repository<T>`，该类将用作数据存储的简单泛型仓库。你需要实现以下功能：

1. **添加元素**：通过一个 `Add` 方法添加新元素到仓库中。
2. **检索元素**：通过 `GetAt` 方法根据索引检索仓库中的元素。
3. **获取总数**：一个属性 `Count` 用来获取仓库中元素的总数。

**要求：**

1. 使用泛型类 `Repository<T>` 来实现存储机制，内部可以使用 `List<T>` 来存储数据。
2. 确保类中的方法和属性正确使用泛型类型 `T`。

```cs
using System;
using System.Collections.Generic;

// 定义一个泛型类 Repository<T>，其中 T 是泛型类型参数
public class Repository<T>
{
    // 使用 List<T> 来存储数据，这里的 T 将代表任意指定的数据类型
    private List<T> items = new List<T>();

    // Add 方法允许向仓库中添加新元素
    public void Add(T item)
    {
        items.Add(item); // 将元素添加到 List<T> 的尾部
    }

    // GetAt 方法根据索引返回仓库中的元素
    public T GetAt(int index)
    {
        if (index >= 0 && index < items.Count) // 检查索引是否有效
        {
            return items[index]; // 返回指定索引的元素
        }
        // 如果索引无效，抛出异常
        throw new ArgumentOutOfRangeException(nameof(index), "Index is out of range.");
    }

    // Count 属性返回仓库中元素的总数
    public int Count
    {
        get { return items.Count; } // 直接返回内部 List 的 Count 属性
    }
}

// 主程序入口
public class Program
{
    public static void Main()
    {
        // 创建一个用于存储字符串的 Repository 实例
        Repository<string> stringRepository = new Repository<string>();
        stringRepository.Add("Hello"); // 添加字符串 "Hello"
        stringRepository.Add("World"); // 添加字符串 "World"

        // 输出存储的字符串和仓库中的元素总数
        Console.WriteLine(stringRepository.GetAt(0)); // 输出: Hello
        Console.WriteLine(stringRepository.GetAt(1)); // 输出: World
        Console.WriteLine("Total Items: " + stringRepository.Count); // 输出: Total Items: 2

        // 创建一个用于存储整数的 Repository 实例
        Repository<int> intRepository = new Repository<int>();
        intRepository.Add(1); // 添加整数 1
        intRepository.Add(2); // 添加整数 2

        // 输出存储的整数和仓库中的元素总数
        Console.WriteLine(intRepository.GetAt(0)); // 输出: 1
        Console.WriteLine(intRepository.GetAt(1)); // 输出: 2
        Console.WriteLine("Total Items: " + intRepository.Count); // 输出: Total Items: 2
    }
}
```





::: details 公众号：AI悦创【二维码】

![](/gzh.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Linux、Web、Sql」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](/zsxq.jpg)
