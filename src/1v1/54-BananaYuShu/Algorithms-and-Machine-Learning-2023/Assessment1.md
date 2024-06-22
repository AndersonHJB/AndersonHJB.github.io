---
title: Intermediate scientific computing Assessment 1
date: 2024-01-15 21:19:13
author: AI悦创
isOriginal: true
icon: MathOperations
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

## Background

Kepler's Laws of planetary motion describe the orbits of planetary bodies around the Sun. According to Kepler's Third Law, the square of a planet's orbital period ($T$) is proportional to the cube of the length of the semi-major axis ($a$) of its orbit:
$$
T^2 \propto a^3
$$
This relationship is described by:
$$
T^2 = \frac{4\pi^2}{GM}a^3
$$
where $M$ is the mass of the central body and $G$ is the gravitational constant
$$
6.67 \times 10^{-11} \text{ m}^3\text{kg}^{-1}\text{s}^{-2}.
$$
For the case of the Earth, orbitting around the sun, the mass $M$ would be the mass of the Sun. If we were to apply Kepler's Law to the motion of moon's around a planet then $M$ would be the mass of the planet (central body).

In this assessment you will be working with a dataset containing some physical information about a subset of Jupiter's moons. Jupiter is currently thought to have [95 moons](https://solarsystem.nasa.gov/moons/jupiter-moons/overview) in total.

The largest and most well-studied of Jupiter's moons are the four Galilean moons: Callisto, Europa, Ganymede, and Io.

## Data

You can find data on a large subset of Jupiter's moons in the Jupiter's moons dataset, which is provided in a `.db` file in the data folder. This SQLite database contains only one table called `moons`. There is no metadata provided alongside this dataset, so you will need to perform some exploratory work to find out exactly what is contained in the `moons` table. One thing to note is that this dataset contains a `distance_km` field (specifying the distance between each given moon and the planet Jupiter), which we will use as a proxy for semi-major axis in this task.

## Notes

This assessment covers all aspects of the work you have covered this term, in particular:

- Data science
- Object oriented programming
- Software engineering, including version control

To gain higher marks for the software engineering components, we are expecting to see well structured code and **evidence that version control has been used** (see also Submission below).

If you are really struggling with the concept of classes in Python, you can use functions instead. Similarly, you can include functions in a Jupyter notebook if you are struggling with the concept of modules. **However, in these cases, you will not be awarded the marks associated with those concepts.**

While your notebook should demonstrate your response to Task 1 and then Task 2, you can tackle the assessment in any way that you like. For example, you may want to start with task 2 (linear regression) and then from there develop into modules and classes. Any modules and classes that you develop can be used in either part of the task as you feel is appropriate.

## Assessment Task 1

You have been employed as a Research Software Engineer to help an astronomy group store and analyse data on Jupiter's moons. You have been asked to deliver a piece of software with two components:

- a module called `jupiter.py` containing a `Moons` class
- a Jupyter notebook that shows the researchers how to use the module, and takes them through an analysis of the dataset 

The `Moons` class should load the data from the Jupiter's moons database provided. It is suggested that:

- you store the full dataset as a `data` attribute of the class, along with any other attributes you think might be helpful to the researchers
- you develop a set of methods that perform exploratory analysis of the data, for example, returning summary statistics, correlations between variables, plots
- the class contains methods that conveniently extract particular pieces of information from the dataset (e.g., a method that extracts data for one moon)

When exploring the dataset, you might find it helpful to think about some of the following points:

- How many fields and records are in the dataset?
- How complete is the dataset?
- Are there any remarkable trends, correlations or features in the data?
- Does the dataset look reasonable, given what you might expect?

Annotate your notebook with markdown cells to explain your work, providing a clear narrative to help the researchers reuse your code.

## Assessment Task 2

Use the Jupiter's Moons dataset and the equation from Kepler's Third Law to calculate an estimate for the mass of the planet Jupiter.

To do this you will need to prepare a linear regression model that relates $T^2$ and $a^3$. Remember to demonstrate that a linear model is appropriate to model the relationship between $T^2$ and $a^3$. Use markdown cells to explain your process and choices as you setup, train and test your model.

Ideally, the training, testing and prediction steps of your model should be added as methods of your Moons class.

Using the attributes from your linear model and the equation for Kepler's Third Law, estimate the mass of Jupiter in Kg. How does your estimate compare to the value from literature?

Remember the following:

Pay attention to the units quoted for different variables in the moons table and also for the gravitational constant $G$. You may need to make some unit conversions when creating new columns in your DataFrame for $T^2$ and $a^3$.

*Hint: $G$ is in units of $\text{m}^3\text{kg}^{-1}\text{s}^{-2}$, so you should make sure that the inputs for your model use metres, kg and seconds too.*

- Think about whether you should set any *hyperparameters* when constructing the linear model and explain your reasoning.
- Think about how you can validate the model.
- Use in-code comments to explain the steps that you take to demonstrate that you are able to explain what you are doing.

## Mark scheme

The mark scheme is available on Blackboard

## Submission

You should upload your work to Blackboard using either a `git bundle` file (preferred, see instructions below), or a zip file. If you have used a zip file, to receive credit for using version control, ensure that your hidden `.git` folder is included in the zip archive.

**Please ensure that the data is included in the correct path in your submitted file, so that the assessors can run the cells in your notebook easily.**

## *Appendix: creating a git bundle*

You can create a git bundle from a git repository by doing the following:

1. Navigate into your git repository folder

2. Type:

    ```
    git bundle create some/path/Assessment2_MYNAME.bundle --all
    ```

    where you should change "some/path/Assessment2_MYNAME.bundle" to the path where you want to create your bundle file (e.g. /home/myusername/Assessment2_MYNAME.bundle). *Make sure this path is outside of your git repo.*

3. You can test that your bundle has been created properly by navigating to the folder where your bundle file is stored, and typing 

    ```
    git clone Assessment2_MYNAME.bundle
    ```

    This should create a new folder called "Assessment_MYNAME", which contains your code, data and git history.















::: details 公众号：AI悦创【二维码】

![](/gzh.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Web、Linux」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](/zsxq.jpg)
