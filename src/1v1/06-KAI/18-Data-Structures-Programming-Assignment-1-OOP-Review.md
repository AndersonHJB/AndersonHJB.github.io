---
title: Data Structures Programming Assignment 1：OOP Review
icon: shujujiegou-01
date: 2023-02-14 14:54:07
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

<Share colorful services="qq,weibo,email,qrcode"/>

- [https://cs.nyu.edu/courses/spring23/CSCI-UA.0102-001/index.html](https://cs.nyu.edu/courses/spring23/CSCI-UA.0102-001/index.html)
- [hw01.pdf](/1v1/06-KAI/18-Data-Structures-Programming-Assignment-1-OOP-Review/hw01.pdf)

Last month, scientists at NASA discovered life on Mars, Neptune, and Saturn! Your job is to create a program that can convert currencies between the planets to aid in interplanetary transactions.

> 上个月，美国宇航局的科学家在火星、海王星和土星上发现了生命!你的工作是创建一个程序，可以在行星之间转换货币，以帮助星际交易。

## Implementation details

> 实现细节

You will create 3 currency classes: **Mars.java**, **Neptune.java**, and **Saturn.java**. Each of these classes must derive from an abstract parent class **Currency.java** and implement the interface **Exchangeable.java**.

> 您将创建3个货币类:Mars.java、Neptune.java和Saturn.java。这些类中的每一个都必须派生自抽象父类Currency.java，并实现接口exchangable .java。

## Currency.java

> Currency.java

The currency class must contain the following data members:

> 货币类必须包含以下数据成员:

- name of the currency (String currencyName)

> 货币名称(String currencyName)

- MarsMoney

> 火星货币

- NeptuneNuggets

> 海王星掘金

- SaturnSilver

> 土星银

- total funds (double totalFunds)

> 总资金(双倍totalFunds)

Additionally, because the planets only trust Earth, dollars will serve as the intermediary currency. The Currency class will contain the following 2 abstract methods:

> 此外，由于行星只信任地球，美元将作为中介货币。Currency类将包含以下2个抽象方法:

```java
public abstract double toEarthDollars(double amount);
```

```java
public abstract double fromEarthDollars(double EarthDollars);
```

Use these methods to exchange money between planets.

> 使用这些方法在行星之间交换货币。

## Exchangeable.java

> 可交换的

Exchange rates should be implemented as constants in the Exchangeable interface.

1.00 EarthDollar (ED) = 1.30 MarsMoney (MM) = 0.87 SaturnSilver (SS) = 2.00 Neptune Nuggets (NN)

> 汇率应该在Exchangeable接口中作为常量实现。
>
> 1.00 EarthDollar (ED) = 1.30 MarsMoney (MM) = 0.87 SaturnSilver (SS) = 2.00 Neptune Nuggets (NN)

Note that we may change the values of the exchange rates when testing your code. We will only edit the Exchangeable interface, so rates should be encapsulated in and accessed from Exchangeable.java.

> 请注意，在测试代码时，我们可能会更改汇率的值。我们将只编辑Exchangeable接口，因此费率应该封装在exchangable .java中并从其中访问。

Exchangeable must also include a method to exchange between the current currency and a target currency. When a planet calls exchange() with another planet and a specified amount, the methods toEarthDollars() and fromEarthDollars() should be used to convert the source currency into the target currency. The amount should be subtracted from the calling planet and added to the target planet. If a planet tries to exchange more funds than it currently has, an error should be printed and no transfer should occur.

> Exchangeable还必须包括在当前货币和目标货币之间进行交换的方法。当一个行星对另一个行星调用exchange()并指定金额时，应该使用toEarthDollars()和froearthdollars()方法将源货币转换为目标货币。该金额应从调用行星中减去，并添加到目标行星。如果一个星球试图交换比它目前拥有的更多的资金，则应该打印一个错误，并且不应该发生转移。

The exchange method should have the following signature:

> 交换方法应具有以下签名:

```java
public void exchange(Currency other, double amount);
```

The remainder of the implementation details are up to you. As always, use best practices, including the principle of least privilege, inheritance, and encapsulation as much as possible.

> 其余的实现细节由您决定。与往常一样，使用最佳实践，包括尽可能少的特权原则、继承和封装。

## Submission details

> 提交详细信息

Your code should also include a main method (you can put it in Currency.java or create a separate class) to test your functionality.

> 您的代码还应该包括一个主方法(您可以将它放在Currency.java中或创建一个单独的类)来测试您的功能。

Please zip all source files and submit on NYU Classes.

> 请将所有源文件压缩并在纽约大学课堂上提交。

## Sample run

> 样本运行

### Input

```java
Currency mars = new Mars(100.00); 
Currency neptune = new Neptune(100.00); 
Currency saturn = new Saturn(100.00);
System.out.println("<-- Exchanges -->");
mars.exchange(saturn, 25.0); 
neptune.exchange(saturn, 10.0); 
saturn.exchange(mars, 122.0); 
saturn.exchange(mars, 121.0);
```

### Output

```java
<-- Exchanges -->
Converting from MarsMoney to SaturnSilver and initiating transfer... 
$25.00 MarsMoney = $19.23 EarthDollars = 16.73 SaturnSilver
Mars has a total of $75.00 MarsMoney
Saturn has a total of $116.73 SaturnSilver

Converting from NeptuneNuggets to SaturnSilver and initiating transfer...
$10.00 NeptuneNuggets = $5.00 EarthDollars = 4.35 SaturnSilver 
Neptune has a total of $90.00 NeptuneNuggets
Saturn has a total of $121.08 SaturnSilver

Uh oh - Saturn only has an available balance of $121.08, which is less than $122.00!

Converting from SaturnSilver to MarsMoney and initiating transfer... 
$121.00 SaturnSilver = $139.08 EarthDollars = 180.80 MarsMoney Saturn has a total of $0.08 SaturnSilver
Mars has a total of $255.80 MarsMoney
```



## Answer

::: tabs

@tab Currency.java

```java
/**
 * @ClassName: Currency
 * @Description: TODO
 * @Author: AndersonHJB
 * @date: 2023/2/19 08:22
 * @Version: V1.0
 * @Blog: https://bornforthis.cn
 */
abstract class Currency implements Exchangeable {
    private String currencyName;

    private double totalFunds;

    public Currency() {
        this.currencyName = "";
        this.totalFunds = 0;
    }

    public Currency(double totalFunds) {
        this.totalFunds = totalFunds;
    }

    public String getCurrencyName() {
        return currencyName;
    }

    public double getTotalFunds() {
        return totalFunds;
    }

    public void setCurrencyName(String currencyName) {
        this.currencyName = currencyName;
    }

    public void setTotalFunds(double totalFunds) {
        this.totalFunds = totalFunds;
    }

    public abstract double toEarthDollars(double amount);
    public abstract double fromEarthDollars(double EarthDollars);
}
```

@tab Exchangeable.java

```java
/**
 * @ClassName: Exchangeable
 * @Description: TODO
 * @Author: AndersonHJB
 * @date: 2023/2/19 08:36
 * @Version: V1.0
 * @Blog: https://bornforthis.cn
 */
public interface Exchangeable {
    final static double EARTH_DOLLAR = 1.0;
    final static double MARS_MONEY  = 1.3;
    final static double NEPTUNE_NUGGETS = 2;
    final static double SATURN_SILVER = 0.87;

    public void exchange (Currency other, double amount);
}
```

@tab Mars.java

```java

import java.math.BigDecimal;

public class Mars extends Currency {

    private String currencyName;
    private double totalFunds;

    public void setCurrencyName(String currencyName) {
        this.currencyName = currencyName;
    }

    public void setTotalFunds(double totalFunds) {
        this.totalFunds = totalFunds;
    }


    public String getCurrencyName() {
        return currencyName;
    }

    public double getTotalFunds() {
        return totalFunds;
    }

    public Mars() {
        super();
    }


    public Mars(double totalFunds) {
        this.currencyName = "MarsMoney";
        this.totalFunds = totalFunds;
    }


    @Override
    public double toEarthDollars(double amount) {
        BigDecimal MARStoEARTHDollarBigDecimal = new BigDecimal(amount / MARS_MONEY);
        double returnAmount = MARStoEARTHDollarBigDecimal.setScale(2, BigDecimal.ROUND_HALF_UP).doubleValue();
        return returnAmount;
    }

    @Override
    public double fromEarthDollars(double EarthDollars) {
        // TODO Auto-generated method stub
        BigDecimal MARSFROMEARTHBigDecimal = new BigDecimal(EarthDollars).multiply(new BigDecimal(MARS_MONEY));
        double returnAmount = MARSFROMEARTHBigDecimal.setScale(2, BigDecimal.ROUND_HALF_UP).doubleValue();
        return returnAmount;
    }

    @Override
    public void exchange(Currency other, double amount) {

        if (amount > this.getTotalFunds()) {

            System.out.println("Uh oh - " + this.currencyName + " only has an available balance of $" + this.getTotalFunds() + ", which is less than $" + amount + "?\n");
            return;
        }
        double earthDollars = this.toEarthDollars(amount);
        double newAmount = other.fromEarthDollars(earthDollars);
        this.setTotalFunds(new BigDecimal(this.getTotalFunds() - amount).setScale(2, BigDecimal.ROUND_HALF_UP).doubleValue());
        other.setTotalFunds(new BigDecimal(other.getTotalFunds() + newAmount).setScale(2, BigDecimal.ROUND_HALF_UP).doubleValue());
        System.out.println("Converting from " + this.currencyName + " to " + other.getCurrencyName() + " and initiating transfer... \n$" + amount + this.getCurrencyName() + "= $" + earthDollars + " EarthDollars = " + newAmount + " " + other.getCurrencyName() + "\n" + this.getClass().getSimpleName() + "  has a total of $" + this.getTotalFunds() +
                " " + this.getCurrencyName() + "  \n" + other.getClass().getSimpleName() + " has a total of $" + other.getTotalFunds() + " " + other.getCurrencyName() + "\n");
//                " " + this.getClass().getSimpleName() + "  \n" + other.getClass().getSimpleName() + " has a total of $" + other.getTotalFunds() + " " + other.getCurrencyName() + "\n");
    }

}
```

@tab Neptune.java

```java
/**
 * @ClassName: Neptune
 * @Description: TODO
 * @Author: AndersonHJB
 * @date: 2023/2/19 09:55
 * @Version: V1.0
 * @Blog: https://bornforthis.cn
 */

import java.math.BigDecimal;

public class Neptune extends Currency {
    private String currencyName;
    private double totalFunds;

    public String getCurrencyName() {
        return currencyName;
    }

    public double getTotalFunds() {
        return totalFunds;
    }

    public void setCurrencyName(String currencyName) {
        this.currencyName = currencyName;
    }

    public void setTotalFunds(double totalFunds) {
        this.totalFunds = totalFunds;
    }

    public Neptune() {
        this.currencyName = "NeptuneNuggets";
    }

    public Neptune(double totalFunds) {
        this.currencyName = "NeptuneNuggets";
        this.totalFunds = totalFunds;
    }

    @Override
    public double toEarthDollars(double amount) {
        // TODO Auto-generated method stub
        BigDecimal NEPTUNETOEARTHDollarBigDecimal = new BigDecimal(amount / NEPTUNE_NUGGETS);
        double returnAmount = NEPTUNETOEARTHDollarBigDecimal.setScale(2, BigDecimal.ROUND_HALF_UP).doubleValue();
        return returnAmount;
    }

    @Override
    public double fromEarthDollars(double EarthDollars) {
        // TODO Auto-generated method stub
        BigDecimal NEPTUNEFROMEARTHBigDecimal = new BigDecimal(EarthDollars).multiply(new BigDecimal(NEPTUNE_NUGGETS));
        double returnAmount = NEPTUNEFROMEARTHBigDecimal.setScale(2, BigDecimal.ROUND_HALF_UP).doubleValue();
        return returnAmount;
    }

    @Override
    public void exchange(Currency other, double amount) {
        if(amount > this.getTotalFunds()) {

            System.out.println("Uh oh - " + this.currencyName +" only has an available balance of $"+ this.getTotalFunds() +", which is less than $"+ amount +"?\n");
            return;
        }
        // TODO Auto-generated method stub
        double earthDollars = this.toEarthDollars(amount);
        double newAmount = other.fromEarthDollars(earthDollars);
        this.setTotalFunds(new BigDecimal(this.getTotalFunds() - amount).setScale(2, BigDecimal.ROUND_HALF_UP).doubleValue());
        other.setTotalFunds(new BigDecimal(other.getTotalFunds() + newAmount).setScale(2, BigDecimal.ROUND_HALF_UP).doubleValue());
        System.out.println("Converting from "+this.currencyName+" to "+other.getCurrencyName() +" and initiating transfer... \n$"+ amount + this.getCurrencyName() +  "= $"+ earthDollars +" EarthDollars = "+ newAmount + " " + other.getCurrencyName() + "\n" + this.getClass().getSimpleName() + "  has a total of $"+this.getTotalFunds() +
                " " + this.getClass().getSimpleName()+"  \n" + other.getClass().getSimpleName() +" has a total of $"+ other.getTotalFunds() + " " + other.getCurrencyName() + "\n");
    }
}
```

@tab Saturn.java

```java
/**
 * @ClassName: Saturn
 * @Description: TODO
 * @Author: AndersonHJB
 * @date: 2023/2/19 10:16
 * @Version: V1.0
 * @Blog: https://bornforthis.cn
 */

import java.math.BigDecimal;

public class Saturn extends Currency {
    private String currencyName;
    private double totalFunds;

    public String getCurrencyName() {
        return currencyName;
    }

    public double getTotalFunds() {
        return totalFunds;
    }

    public void setCurrencyName(String currencyName) {
        this.currencyName = currencyName;
    }


    public void setTotalFunds(double totalFunds) {
        this.totalFunds = totalFunds;
    }

    public Saturn() {
        super();
        this.currencyName = "SaturnSilver";
    }

    public Saturn(double totalFunds) {
        this.currencyName = "SaturnSilver";
        this.totalFunds = totalFunds;
    }

    @Override
    public double toEarthDollars(double amount) {
        // TODO Auto-generated method stub
        BigDecimal SATURNtoEARTHDollarBigDecimal = new BigDecimal(amount / SATURN_SILVER);
        double returnAmount = SATURNtoEARTHDollarBigDecimal.setScale(2, BigDecimal.ROUND_HALF_UP).doubleValue();
        return returnAmount;
    }

    @Override
    public double fromEarthDollars(double EarthDollars) {
        // TODO Auto-generated method stub
        BigDecimal SATURNFROMEARTHBigDecimal = new BigDecimal(EarthDollars).multiply(new BigDecimal(SATURN_SILVER));
        double returnAmount = SATURNFROMEARTHBigDecimal.setScale(2, BigDecimal.ROUND_HALF_UP).doubleValue();
        return returnAmount;
    }

    @Override
    public void exchange(Currency other, double amount) {
        // TODO Auto-generated method stub
        if (amount > this.getTotalFunds()) {

            System.out.println("Uh oh - " + this.currencyName + " only has an available balance of $" + this.getTotalFunds() + ", which is less than $" + amount + "?\n");
            return;
        }
        double earthDollars = this.toEarthDollars(amount);
        double newAmount = other.fromEarthDollars(earthDollars);
        this.setTotalFunds(new BigDecimal(this.getTotalFunds() - amount).setScale(2, BigDecimal.ROUND_HALF_UP).doubleValue());
        other.setTotalFunds(new BigDecimal(other.getTotalFunds() + newAmount).setScale(2, BigDecimal.ROUND_HALF_UP).doubleValue());
        System.out.println("Converting from " + this.currencyName + " to " + other.getCurrencyName() + " and initiating transfer... \n$" + amount + this.getCurrencyName() + "= $" + earthDollars + " EarthDollars = " + newAmount + " " + other.getCurrencyName() + "\n" + this.getClass().getSimpleName() + "  has a total of $" + this.getTotalFunds() +
                " " + this.getClass().getSimpleName() + "  \n" + other.getClass().getSimpleName() + " has a total of $" + other.getTotalFunds() + " " + other.getCurrencyName() + "\n");
    }


}
```

@tab test.java

```java
/**
 * @ClassName: test
 * @Description: TODO
 * @Author: AndersonHJB
 * @date: 2023/2/19 10:25
 * @Version: V1.0
 * @Blog: https://bornforthis.cn
 */
public class test {
    public static void main(String[] args) {
        Currency mars = new Mars(100.00);
        Currency neptune = new Neptune(100.00);
        Currency saturn = new Saturn(100.00);
        System.out.println("<-- Exchanges -->");
        mars.exchange(saturn, 25.0);
        neptune.exchange(saturn, 10.0);
        saturn.exchange(mars, 122.0);
        saturn.exchange(mars, 121.0);
    }
}
```

:::

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