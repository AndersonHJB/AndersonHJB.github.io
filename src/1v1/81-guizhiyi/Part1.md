---
title: Deliverables
date: 2024-01-30 14:04:43
author: AI悦创
isOriginal: true
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

## 2.1. Milestone 1

Processing of monitoring station properties.

- Deadline:

    Mid-term sign-up session

- Points:

    4

**Caution:** Do not use the ‘representative output’ in your pytest tests. Representative output is provided to help you, but would not be part of a real contract. Moreover, you are working with real-time data which will change.

### Task 1A: build monitoring station data

*This task has been completed for you in the template repository.*

1. In a submodule `station`, create a class `MonitoringStation` that represents a monitoring station, and has *attributes*:

    > - Station ID (`string`)
    > - Measurement ID (`string`)
    > - Name (`string`)
    > - Geographic coordinate (`tuple(float, float)`)
    > - Typical low/high levels (`tuple(float, float)`)
    > - River on which the station is located (`string`)
    > - Closest town to the station (`string`)

2. Implement the *methods* `__init__` to initialise a station with data, and `__repr__` for printing a description of the station.

3. In the submodule `stationdata` implement a function that returns a [list](https://docs.python.org/3/library/stdtypes.html#lists) of `MonitoringStation` objects (for active stations with water level monitoring). To avoid excessive data requests, the function should save fetched data to file, and then optionally read from a cache file. The function should have the signature:

    ```python
    def build_station_list(use_cache=True):
    ```

    The data should be retrieved from the online service documented at http://environment.data.gov.uk/flood-monitoring/doc/reference.

Demonstration program

In the program file `Task1A.py`, use the function `stationdata.build_station_list` to build a list of monitoring stations. Print the total number of stations, and a summary of the stations named ‘Bourton Dickler’, ‘Surfleet Sluice’ and ‘Gaw Bridge’. Representative output is:

```python
Number of stations: 1840
Station name:     Bourton Dickler
   id:            http://environment.data.gov.uk/flood-monitoring/id/stations/1029TH
   measure id:    http://environment.data.gov.uk/flood-monitoring/id/measures/1029TH-level-stage-i-15_min-mASD
   coordinate:    (51.874767, -1.740083)
   town:          Little Rissington
   river:         Dikler
   typical range: (0.068, 0.42)
Station name:     Surfleet Sluice
   id:            http://environment.data.gov.uk/flood-monitoring/id/stations/E2043
   measure id:    http://environment.data.gov.uk/flood-monitoring/id/measures/E2043-level-stage-i-15_min-mASD
   coordinate:    (52.845991, -0.100848)
   town:          Surfleet Seas End
   river:         River Glen
   typical range: (0.15, 0.895)
Station name:     Gaw Bridge
   id:            http://environment.data.gov.uk/flood-monitoring/id/stations/52119
   measure id:    http://environment.data.gov.uk/flood-monitoring/id/measures/52119-level-stage-i-15_min-mASD
   coordinate:    (50.976043, -2.793549)
   town:          Kingsbury Episcopi
   river:         River Parrett
   typical range: (0.231, 0.971)
```

### Task 1B: sort stations by distance

1. In the submodule `geo` implement a function that, given a list of station objects and a coordinate *p*, returns a [list](https://docs.python.org/3/library/stdtypes.html#lists) of `(station, distance)` [tuples](https://docs.python.org/3/library/stdtypes.html#tuples), where `distance` (`float`) is the distance of the `station` (`MonitoringStation`) from the coordinate *p*. The returned list should be sorted by distance. The required function signature is:

    ```python
    def stations_by_distance(stations, p):
    ```

    where `stations` is a list of `MonitoringStation` objects and `p` is a tuple of floats for the coordinate *p*.

**Tip:** The distance between two geographic coordinates (latitude/longitude) is computed using the [haversine formula](https://en.wikipedia.org/wiki/Haversine_formula). You could program the haversine formula, or you could use a Python library to perform the computation for you, e.g. https://pypi.org/project/haversine/.

**Hint:** Build a list of all `(station, distance)` tuples, and use the provided function `utils.sort_by_key` to produce a list that is sorted by the second entry in the tuple.

**Demonstration program**

Provide a program file `Task1B.py` that uses `geo.stations_by_distance` and prints a list of tuples (station name, town, distance) for the 10 closest and the 10 furthest stations from the Cambridge city centre, (52.2053, 0.1218). The closest 10 entries (e.g., `x[:10]`) in the list may be:

```python
[('Cambridge Jesus Lock', 'Cambridge', 0.8402364350834995), ('Bin Brook', 'Cambridge', 2.502274086951454), ("Cambridge Byron's Pool", 'Grantchester', 4.0720438555077125), ('Cambridge Baits Bite', 'Milton', 5.115589516578674), ('Girton', 'Girton', 5.227070345811418), ('Haslingfield Burnt Mill', 'Haslingfield', 7.044388165868453), ('Oakington', 'Oakington', 7.128249171700346), ('Stapleford', 'Stapleford', 7.265694306995238), ('Comberton', 'Comberton', 7.7350743760373675), ('Dernford', 'Great Shelford', 7.993861351711722)]
```

and the furthest 10 (e.g., `x[-10:]`):

```python
[('Boscadjack', 'Wendron', 440.0026482838576), ('Gwithian', 'Gwithian', 442.05491558132354), ('Helston County Bridge', 'Helston', 443.37824966454974), ('Loe Pool', 'Helston', 445.07184458260684), ('Relubbus', 'Relubbus', 448.64944322554413), ('St Erth', 'St Erth', 449.03415711886015), ('St Ives Consols Farm', 'St Ives', 450.0734690482922), ('Penzance Tesco', 'Penzance', 456.3857579793324), ('Penzance Alverton', 'Penzance', 458.5766422710278), ('Penberth', 'Penberth', 467.53367291629183)]
```











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
