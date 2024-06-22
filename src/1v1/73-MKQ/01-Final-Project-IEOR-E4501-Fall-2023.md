---
title: Final Project - IEOR E4501 - Fall 2023
date: 2023-11-15 21:06:35
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

## Introduction

Welcome to our final project! The purpose of this project is to prepare you for the kind of research work you might find yourself doing after graduation. A lot of analytics work is working with large amounts of data and trying to make sense of it all.

One overarching goal of this project is to give you something to point to when applying for internships and job opportunities. You should feel welcomed to include a link to your project repository in your resumes and CVs.

## Heads up!

This project will take about 2 to 3 times longer than the weekly homeworks. To help compensate, there will be no homework assigned for the last two modules. However, you are advised to start this project early.

There may be small updates like clarifications made to this document. Any updates made will be highlighted in pale yellow with a date of when it was made.

## Logistics

### Who

Your teams will be made up of 2 people according to this spreadsheet. This will be setup for you already in Courseworks.

## What

You will be turning in a URL to the repository where your project code can be found. Provide the HTTPS link, *not* the link to clone the URL.1 We suggest using GitHub to host your repository, but you may also use BitBucket or GitLab.

If you make your repository private, please give the accounts “atisaxena”, “ZenanPeng”, and “econchick” access to your repository.

**Optional**: You may use this template repository (COMING SOON) to help give you an idea of how to start. One person in the group should click on the green button, “Use this template” and select “Create a new repository.”

See Requirements & Constraints for exactly what is needed and expected.

### When

The project is due **Sunday, December 10th at 11:59pm ET**. No late submissions will be accepted.

5% additional extra credit will be awarded if projects are completed and submitted a week earlier, by Sunday, December 3rd at 11:59pm ET. See the extra credit section for more extra credit opportunities.

## Problem Overview

Let’s say your apartment lease is ending at the end of the year, and you need to find a new apartment. There are a lot of criteria you can use to help find a neighborhood you’d like to live in. One thing you care a lot about is a quiet neighborhood with a lot of greenery.

Using NYC Open Data datasets and Zillow’s historic monthly rent averages, you will be creating a single Jupyter notebook to download, clean, and store data, as well as defining a set of SQL queries and visualizations to help answer questions of yours in search of a great area to live within your budget.

## Datasets

- Shapefiles of NYC’s zip codes with geometric boundary data from [here](https://drive.google.com/drive/folders/1P89KAFAUAHVZsEcyDYVfD1L7pMeGBvIO?usp=sharing).
- Historical monthly average rents by zip code from Zillow from [here](https://drive.google.com/file/d/19h6qhJHjxyyNd4DML7pbf1pJGavQed0s/view?usp=sharing).
- Historical data from NYC Open Data on 311 complaints and the 2015 tree census, for which you will download programmatically in your Notebook.

## Setup

### PostgreSQL & PostGIS

This project includes storing and querying geographic data. To support this, you will use [PostgreSQL](https://www.postgresql.org/) (“Postgres”) instead of SQLite3. Using Postgres then allows us to use a popular extension for geographic data called PostGIS, which supports storing spatial data. Neither Postgres nor [PostGIS](https://postgis.net/) come pre-installed on your computer, but it is very easy to install.

Install & setup PostgreSQL & PostGIS before starting your project in a notebook. Follow the instructions [here](https://docs.google.com/document/d/1DgRXeiLu0Jqix-z5Y97NnGumJuJ_cVuHFj_XgLMAPUM/edit).



### NYC Open Data Account

Many municipalities publish datasets open to the public, including New York City. “Open data” is content made freely available to use and redistribute, so long as there is attribution to the original source.

While open data is free to download and work with, limitations are put on how much someone can download at one time. Data sources want to provide access to anyone who wants it, and throttles requests so that no one person “hogs” resources. Oftentimes, anonymous requests are restricted more so than authenticated requests.

The way that NYC Open Data approaches this is through creating an account and then creating what’s called an Application Token. This token is used during requests for the data to identify who or where the request is coming from.

*Note: technically, only one person needs to set up an NYC Open Data account for your group’s project. You may both create accounts, but you only need to use one when executing requests to download data in Part 1.*

First, create a [free account](https://data.cityofnewyork.us/signup). Sign up with any email address, it doesn’t have to be your Columbia email.

Once you’ve signed up, [login](https://data.cityofnewyork.us/login), and go to your [developer settings](https://data.cityofnewyork.us/profile/edit/developer_settings). Click on the button that says “Create New App Token” (**not** Create new API Key). Fill in the Application Name - it can be anything, like “Final Project Fall 2023”. Then fill in the Description - it can also be anything, like “Project for Fall 2023 for Tools for Analytics”. Do not fill out any other fields. Click Save.

Copy the value of your App Token, it should be roughly a 25-character string of random letters and numbers. Set this string to a variable in your project’s notebook so it’s easy to use when you need it.

When you’re ready to download the required datasets, learn how to use your Application Token [here](https://dev.socrata.com/docs/app-tokens.html#using-your-application-token).

### Specifications

*Read these specifications closely. Failure to follow them will result in points being deducted.*

Create a single Jupyter Notebook that is divided into four parts: Data Preprocessing, Storing Data, Understanding Data, and Visualizing Data.

For each part, use Markdown cells to describe what is going on. Construct and write your notebook as if you could hand it to a (not necessarily Python-inclined) friend, and they could understand it without needing to read the actual code.

When implementing your solutions to each part, write separate functions or specific tasks that help accomplish the goals of each part. This will make it easier to test different parts of the logic independently. Then in separate cells, execute the functions (so, don’t just define functions; call them as well). I should be able to clear the output, then run all cells successfully to generate everything needed below.

Of course, you’re encouraged to experiment, understand, and play around with the data and your code’s implementation. Be as messy as you need. Create multiple notebooks if you want as you’re exploring. The final result should be clean, readable, and tell a logical story in a single notebook.

## Part 1: Data Preprocessing

*Overview: For Part 1, you will be downloading Parquet files (both by hand and with Python code), cleaning and filtering for the relevant data, filling in missing data, and generating samples of these datasets.*

*Downloading:* For the zip code data and Zillow data, manually download the data from the links above and save it to a directory called data lives alongside your notebook. For the 311 and tree data, you will need to programmatically download the datasets in your notebook using the Application Token you set up earlier.

*Cleaning & filtering:* You must use the pandas and geopandas  packages to load and clean all the datasets. The process of cleaning & filtering the data should include:

- Removing unnecessary columns, and only keeping columns needed to answer questions in the other parts of this project;
- Remove invalid data points (use your discretion!);
- Normalize column names & column types where needed;
- Normalize the [Spatial Reference Identifiers](https://en.wikipedia.org/wiki/Spatial_reference_system) (SRID) of any geometry.

*Tips for Part 1:*

- Get familiar with what SRIDs are and how they’re used. Here is a [walkthrough](https://mapscaping.com/beginners-guide-to-srid/), and an even longer [walkthrough](https://medium.com/symphonyis/introduction-to-postgis-88fad193c684) with a handy introduction to PostGIS.
- When downloading data from NYC Open Data, be sure to use [SoQL query filters](https://dev.socrata.com/docs/queries/) to (1) get the correct date range of data needed, and (2) to get all the data within the date range, since the default is only 1,000 results.
- Make use of your `.gitignore` file to avoid committing the large datasets and other unnecessary files to your repo.
- Read ahead to figure out which columns are absolutely necessary for each dataset.
- Be mindful & consistent with the data types for each column, which will make it easier for yourself when storing and filtering data later on.
- Read about how to handle a lot of data below.

## Part 2: Storing Data

*Overview: For Part 2, you will be taking the datasets downloaded & cleaned from Part 1, and populating a PostgreSQL database with tables generated from the datasets.*

First, create a new database in PostgreSQL with which you’ll load in your preprocessed datasets, and turn on the PostGIS extension. Do so by running the following commands in a Jupyter Notebook - one command per Notebook cell, filling in `YOUR_DATABASE_NAME` with the desired name for your database:

| `!createdb YOUR_DATABASE_NAME`                               |
| ------------------------------------------------------------ |
| `!psql --dbname YOUR_DATABASE_NAME -c 'CREATE EXTENSION postgis;'` |

Both `createdb` and `psql`, are commands that have been installed along with the PostgreSQL installation

Create a `schema.sql` file that defines each table’s schema. You can use `SQLAlchemy` within the notebook to help generate this file, another programmatic approach, or create this schema file by hand.

Finally, programmatically in your notebook, create & populate four tables: one for NYC zip codes, one for 311 complaints, one for trees, and one for historical average rents. Use appropriate data types for each column.

*Tips for Part 2:*

- Take a look at the Appendix for an example of a schema file.
- You’ll most likely need to use `psycopg2` to connect to the database, which is a 3rd party package you will need to `pip install` . psygopg2 is similar to Python’s `sqlite3` library (Module 9) but for PostgreSQL databases instead of SQLite3 databases.
- I should be able to run this schema file to create the tables in a database via the `psql` CLI tool. That is, I should be able to run the following 3 commands in a Jupyter notebook cell to create a database (in this example, `groupNproject`) with the four required tables (it is not expected that you do this yourself for the project, but this is a good sanity check for it to succeed without error):

```plsql
!createdb groupNproject
!psql --dbname groupNproject -c 'CREATE EXTENSION postgis;'
!psql --dbname groupNproject -f schema.sql
```

- In anticipation for some of the spatial queries in part 3, consider setting indices on your tables for the geometric columns. [This StackOverflow post](https://stackoverflow.com/questions/45202696/sqlalchemy-declarative-orm-build-index-using-gist-and-tsrange) will be helpful when using `SQLAlchemy`, particularly within the table args, using `postgresql_using` when defining an index. [PostGIS’s documentation](https://postgis.net/workshops/postgis-intro/indexing.html) can also be helpful. Be sure to include [the CREATE INDEX statements](https://www.postgresql.org/docs/current/sql-createindex.html) in the schema as well.
- Double-check the SRIDs are all the same for the geometry columns in every table.
- Some pandas functionality that might be helpful to look into (and not just for Part 2) (not exhaustive of what could be helpful):
    - **[pd.read_sql_query](https://pandas.pydata.org/docs/reference/api/pandas.read_sql_query.html)**-read data from querying a SQL table 
    - **[pd.read_sql_table](https://pandas.pydata.org/docs/reference/api/pandas.read_sql_table.html)**-read entire SQL table
    - [pd.read_sql](https://pandas.pydata.org/docs/reference/api/pandas.read_sql.html#pandas.read_sql) -read a query or an entire table
    - **[df.to_sql](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.to_sql.html)**-add data from the dataframe to a SQL table
    - **[pd.to_numeric](https://pandas.pydata.org/docs/reference/api/pandas.to_numeric.html)** -Convert argument to a numeric type
- Some geopandas functionality that might be helpful as well:
    - [gpd.read_file](https://geopandas.org/en/stable/docs/reference/api/geopandas.read_file.html#geopandas.read_file)-read any type of spatial data file (shapefiles,GeoJSONfiles, etc)
    - [gpd.read_postgis](https://geopandas.org/en/stable/docs/reference/api/geopandas.read_postgis.html#geopandas.read_postgis)-read spatial-based data from a SQL query

## Part 3: Understanding Data

*Overview: In Part 3, you will be crafting a set of SQL queries to develop a better understanding of the datasets we’re working with.*

For this part, define a SQL query for each of the following questions - one query per question. Save each query as a `.sql` file, naming it something illustrative of what the query is for, e.g. `top_10_zipcodes_by_population.sql`.

For each query, be sure to execute it in the notebook so we can see your answers to the question.

The query results can be either a pandas/geopandas dataframe, or simple Python types (like a list of tuples).

Note: we will *not* be checking for exactness with the results. We’re only concerned with the construction of your queries.

### Query 1: Which area might be more calm to live in?

Between October 1st, 2022 and September 30th, 2023 (inclusive), find the number of 311 complaints per zip code.

The query result should have two columns, one row per zip code, with the number of complaints in descending order.

### Query 2: Where has the most greenery?

Using just the trees table, which 10 zip codes have the most trees?

The query result should have two columns, 10 rows. The rows should be sorted by the total number of trees, descending.

### Query 3: Can I afford a place in the areas with the most trees?

Of the 10 zip codes with the most trees, for the month of August 2023, what is the average rent by zip code?

The query should have a `JOIN` statement. The query result should have two columns (not three) and 10 rows. The rows should be sorted by the total number of trees, descending. “Humanize” the rent numbers, meaning format the results as `2,879.58` instead of `2879.575128`.

### Query 4: Could there be a correlation between an area’s rent, the number of its trees, and the number of 311 complaints?

For the month of January 2023, return the 5 zip codes with the lowest average rent, and 5 zipcodes of the highest average rent, and include the tree count and complaint count for each zip code by using `JOIN` statements.

The query result should have 4 columns (zip code, average rent, tree count, and complaint count) and 10 rows: five with the highest average rent, and five with the lowest average rent. “Humanize” the rent numbers, meaning format the results as `2,879.58` instead of `2879.575128`.

### Query 5: Where has the most greenery (take 2)?

Rewrite Query 2 to use *both* the trees table and the zipcodes table. Join both tables where the coordinate point of the tree is inside the polygon boundary of the zipcode as defined in the zipcode table.

The query should have a JOIN statement. The query results should match exactly the results of Query 2.

### Query 6: What is the immediate area like?

Using the following coordinate pair on campus, which trees are within 1⁄2 mile radius of this point?

Latitude: `40.80737875669467`, Longitude: `-73.96253174434912`

The result should have 5 columns (ID, species, health, status, and coordinate location of each tree).

You may use regular Python to help construct the geometric object needed for setting the radius in the query.

*Tips for Part 3:*

- You may wish to use either `psycopg2`, `SQLAlchemy`, or `GeoAlchemy2` (or all three!) within the notebook to help craft these queries and query files. You can also use `pandas` and `geopandas` to help check the validity of your queries.
- 







| Parameter                                                    | Description                                                  | Default                                                      | In `$query` |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :---------- |
| [`$select`](https://dev.socrata.com/docs/queries/select.html) | The set of columns to be returned, similar to a `SELECT` in SQL | All columns, equivalent to `$select=*`                       | `SELECT`    |
| [`$where`](https://dev.socrata.com/docs/queries/where.html)  | Filters the rows to be returned, similar to `WHERE`          | No filter                                                    | `WHERE`     |
| [`$order`](https://dev.socrata.com/docs/queries/order.html)  | Column to order results on, similar to ORDER BY in SQL       | Unspecified order                                            | `ORDER BY`  |
| [`$group`](https://dev.socrata.com/docs/queries/group.html)  | Column to group results on, similar to GROUP BY in SQL       | No grouping                                                  | `GROUP BY`  |
| [`$having`](https://dev.socrata.com/docs/queries/having.html) | Filters the rows that result from an aggregation, similar to `HAVING` | No filter                                                    | `HAVING`    |
| [`$limit`](https://dev.socrata.com/docs/queries/limit.html)  | Maximum number of results to return                          | 1000 (2.0 endpoints: maximum of 50,000; 2.1: unlimited [»](https://dev.socrata.com/docs/endpoints.html)) | `LIMIT`     |
| [`$offset`](https://dev.socrata.com/docs/queries/offset.html) | Offset count into the results to start at, used for paging   | 0                                                            | `OFFSET`    |
| [`$q`](https://dev.socrata.com/docs/queries/q.html)          | Performs a full text search for a value.                     | No search                                                    | `N/A`       |
| [`$query`](https://dev.socrata.com/docs/queries/query.html)  | A full SoQL query string, all as one parameter               | N/A                                                          | `N/A`       |
| [`$$bom`](https://dev.socrata.com/docs/queries/bom.html)     | Prepends a UTF-8 Byte Order Mark to the beginning of CSV output | false                                                        | `N/A`       |



















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
