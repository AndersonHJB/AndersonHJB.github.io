---
title: 作业三：测量的Bloch球表示「答案」
date: 2023-02-24 18:41:22
author: AI悦创
isOriginal: true
category: 
    - 量子态
    - 量子计算
    - Python量子计算
    - Python一对一辅导
    - Python一对一教学
tag:
    - 量子态
    - 量子计算
    - Python量子计算
    - Python一对一辅导
    - Python一对一教学
icon: python
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

[Bloch-HW-3.ipynb](/1v1/27-111923/Bloch-HW-3.ipynb)

## 第一步：测量算符的测量基

```python
from qutip import *
from scipy.linalg import *
from mpl_toolkits.mplot3d import Axes3D
import numpy as np
import matplotlib.pyplot as plt


def getBasisState(O):
    # 初始化态矢量
    psi_0 = np.matrix([[1.0000], [0.0000]], dtype=complex)
    psi_1 = np.matrix([[0.0000], [1.0000]], dtype=complex)

    # 对角化算符
    eig_v, eig_k = eig(O)
    eig_v = np.real(eig_v)

    # 对角化后的基矢量
    m_base = [np.matrix(eig_k[:, i]).T for i in range(len(eig_v))]

    # 对角化后基矢量的顺序
    order = np.argsort(eig_v)[::-1]
    m_base = [m_base[i] for i in order]

    return m_base


def Meas(psi, O):
    m_base = getBasisState(O)

    # 计算投影概率
    p0 = (abs(m_base[0].H * psi) ** 2)[0, 0]
    p1 = (abs(m_base[1].H * psi) ** 2)[0, 0]

    return [p0, p1]
```

## 第二步：测量的 Bloch 球表示

::: code-tabs#python

@tab 未连线

```python
def plotLine(point1, point2, config):
    plt.plot([point1[1], point2[1]], [-point1[0], -point2[0]], [point1[2], point2[2]], config)


fig = plt.figure(figsize=(6, 6))
axes = Axes3D(fig, auto_add_to_figure=False)
fig.add_axes(axes)
sphere = Bloch(axes=axes)

# coordinates of given basis states
coord0 = np.array([0.0995, 0.0000, 0.9950], dtype=float)
coord1 = np.array([-0.0995, -0.0000, -0.9950], dtype=float)
psi_ex_coord = np.array([0.9518, 0.0000, 0.3068], dtype=float)

# probabilities are:
p = [0.3, 0.7]
coord_projection = p[0] * coord1 + p[1] * coord0

sphere.add_points(coord0)
sphere.add_points(coord1)
sphere.add_points(psi_ex_coord)
sphere.add_points(coord_projection)

# measurement operator
H = np.matrix([[2 ** (-0.5), 2 ** (-0.5)], [2 ** (-0.5), -2 ** (-0.5)]], dtype=complex)
psi = np.matrix([[3 ** (-0.5)], [(2 / 3) ** (0.5) * 1j]], dtype=complex)

# add the coordinates of the projection of psi onto the measurement basis
meas_probs = Meas(psi, H)
psi_proj_coords = meas_probs[0] * coord0 + meas_probs[1] * coord1
sphere.add_points(psi_proj_coords)

sphere.make_sphere()

# plot the lines connecting the points
plotLine(coord_projection, psi_ex_coord, '-k')
plotLine(coord_projection, coord0, '-b')
plotLine(coord_projection, coord1, '-r')
# plot the line corresponding to the probabilities of measurement
plotLine(psi_ex_coord, psi_proj_coords, '-g')

plt.show()
```

@tab 连线版本

```python
from qutip import *
from scipy.linalg import *
from mpl_toolkits.mplot3d import Axes3D
import numpy as np
import matplotlib.pyplot as plt


def getBasisState(O):
    # 初始化态矢量
    psi_0 = np.matrix([[1.0000], [0.0000]], dtype=complex)
    psi_1 = np.matrix([[0.0000], [1.0000]], dtype=complex)

    # 对角化算符
    eig_v, eig_k = eig(O)
    eig_v = np.real(eig_v)

    # 对角化后的基矢量
    m_base = [np.matrix(eig_k[:, i]).T for i in range(len(eig_v))]

    # 对角化后基矢量的顺序
    order = np.argsort(eig_v)[::-1]
    m_base = [m_base[i] for i in order]

    return m_base


def Meas(psi, O):
    m_base = getBasisState(O)

    # 计算投影概率
    p0 = (abs(m_base[0].H * psi) ** 2)[0, 0]
    p1 = (abs(m_base[1].H * psi) ** 2)[0, 0]

    return [p0, p1]


def plotLine(point1, point2, config):
    xs = [point1[1], point2[1]]
    ys = [-point1[0], -point2[0]]
    zs = [point1[2], point2[2]]
    axes.plot(xs, ys, zs, config)

fig = plt.figure(figsize=(6, 6))
axes = Axes3D(fig, auto_add_to_figure=False)
fig.add_axes(axes)
sphere = Bloch(axes=axes)

# coordinates of given basis states
coord0 = np.array([0.0995, 0.0000, 0.9950], dtype=float)
coord1 = np.array([-0.0995, -0.0000, -0.9950], dtype=float)
psi_ex_coord = np.array([0.9518, 0.0000, 0.3068], dtype=float)

# probabilities are:
p = [0.3, 0.7]
coord_projection = p[0] * coord1 + p[1] * coord0

sphere.add_points(coord0)
sphere.add_points(coord1)
sphere.add_points(psi_ex_coord)
sphere.add_points(coord_projection)

# measurement operator
H = np.matrix([[2 ** (-0.5), 2 ** (-0.5)], [2 ** (-0.5), -2 ** (-0.5)]], dtype=complex)
psi = np.matrix([[3 ** (-0.5)], [(2 / 3) ** (0.5) * 1j]], dtype=complex)

# add the coordinates of the projection of psi onto the measurement basis
meas_probs = Meas(psi, H)
psi_proj_coords = meas_probs[0] * coord0 + meas_probs[1] * coord1
sphere.add_points(psi_proj_coords)

sphere.make_sphere()

# plot the lines connecting the points
plotLine(coord_projection, psi_ex_coord, '-k')
plotLine(coord_projection, coord0, '-b')
plotLine(coord_projection, coord1, '-r')
# plot the line corresponding to the probabilities of measurement
plotLine(psi_ex_coord, psi_proj_coords, '-g')

plt.show()
```

:::

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
