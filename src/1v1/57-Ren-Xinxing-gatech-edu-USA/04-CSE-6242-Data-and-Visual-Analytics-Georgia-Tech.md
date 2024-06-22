---
title: CSE 6242 CX 4242 Data and Visual Analytics Georgia Tech Spring 2024
date: 2024-01-28 12:38:55
author: AI悦创
isOriginal: true
category: 
    - Python辅导
    - Python 作业代写
tag:
    - gatech.edu
    - 乔治亚理工
icon: zhuanjiaketang-jihuo
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

## Important Notes

1. Submit your work by the due date on the course schedule.

    a. Every assignment has a 48-hour grace period. You may use it without asking.

    b. Before the grace period expires, you may resubmit as many times as you need.

    c. The grace period is a lenient buffer for resolving last minute issues. We do not recommend starting new work or modifying existing work during the grace period.

    d. TA assistance is not guaranteed during the grace period.

    e. Submissions during the grace period will display as “late” but **will not** incur a penalty.

    f. **We will not accept any submissions executed after the grace period ends**.

2. Always use the **most up-to-date assignment** (version number at bottom right of this document).

3. You may discuss ideas with other students at the "whiteboard" level (e.g. how cross validation works, use HashMap instead of array) and review any relevant materials online. However, **each student** **must write up and submit the student’s own answers**.

4. All incidents of suspected dishonesty, plagiarism, or violations of the Georgia Tech Honor Code will be subject to the institute’s Academic Integrity procedures, directly handled by the Office of Student Integrity (OSI). Consequences can be severe, e.g., academic probation or dismissal, a 0 grade for assignments concerned, and prohibition from withdrawing from the class**.**

## Submission Instructions

1. **Submit ALL deliverables on Gradescope**. We will not accept submissions anywhere else.
2. Submit all required files as specified at each question. We will not grade any submissions that deviate from the specified format (extra files, misnamed files, etc.).
3. Each submission and its score will be recorded and saved by Gradescope. **By default, Gradescope** **uses your last submission for grading.** To use a different submission, **you MUST “activate” it** (click “Submission History” button at bottom toolbar, then “Activate”).

## Grading and Feedback

The maximum possible score for this homework is **100 points. We will auto-grade all questions using the Gradescope platform**. Keep the following in mind:

1. You can access Gradescope through Canvas.

2. You may upload your code periodically to Gradescope to obtain feedback on your code. Gradescope will auto-grade your submission using the same test cases that we will use to grade your work.

3. You must **not** use Gradescope as the primary way to test your code’s correctness. It provides only a few test cases and error messages may not be as informative as local debuggers. Iteratively develop and test your code locally, write more test cases, and follow good coding practices. Use Gradescope mainly as a "final" check.

4. **Gradescope cannot run code that contains syntax errors**. If Gradescope is not running, verify:

    a. Your code is free of syntax errors (by running locally)

    b. All methods have been implemented

    c. You have submitted the correct file with the correct name

5. When many students use Gradescope simultaneously, it may slow down or fail to communicate with the tester. It can become even slower as the submission deadline approaches. You are responsible for submitting your work on time.



## **Download the** **HW1 Skeleton** **before you begin.**

### Homework Overview

Vast amounts of digital data are generated each day, but raw data are often not immediately “usable”. Instead, we are interested in the information content of the data: what patterns are captured? This assignment covers a few useful tools for acquiring, cleaning, storing, and visualizing datasets.

**Why specific versions of software are used in homework assignments?** Using specific versions of software in homework assignments enables us to grade and provide immediate feedback to the large number of students in the course (1000+ OMS students, 250+ Atlanta students). Autograders are used to grade students' code submissions, and to ensure that these autograders can grade all submissions, we need to know the specific versions of software that students use. This is because different versions of software can have different features, and also to make sure that the autograders can detect potential errors that may occur in different libraries and provide students with appropriate feedback to resolve them. Continuously updating assignments to keep up with the latest versions of technology is a significant undertaking, so we carefully select which aspects of our autograders to update, to balance the workload for our course staff and provide a positive learning experience for students. As a result, you may see that certain assignment questions require the use of “older" versions of software or specific libraries.

### Q1 [40 points] Collect data from TMDb to build a co-actor network

| Goal              | Collect data using an API for *The Movie Database* (TMDb). Construct a graph representation of this data that shows which actors have acted together in various movies. We use the word “graph” and “network” interchangeably. |
| ----------------- | ------------------------------------------------------------ |
| Technology        | Python **3.10.x only** (question and autograder developed and tested for these versions). It is possible that more other versions may also work, but we do not officially support them (it is possible that your code written with other versions may break the autograder). |
| Allowed Libraries | The Python Standard Library and Requests **only** (urllib can be easily used instead of Requests in solving this question).<br/> All other libraries (including and not limited to Pandas, Numpy) are **NOT** allowed. Providing a consistent autograder experience for all students vastly outweighs the marginal utility of extending the scope of supported libraries. |
| Max runtime       | 10 minutes. Submissions exceeding this will receive **zero** credit. |
| Deliverables      | [Gradescope]<br/> • **Q1.py**: The completed Python file<br/> • **nodes.csv**: The csv file containing nodes <br />• **edges.csv**: The csv file containing edges |

For this question, you will use and submit a Python file**.** Complete all tasks according to the instructions found in **Q1.py** to complete the Graph class, the TMDbAPIUtils class, and the one global function. The Graph class will serve as a re-usable way to represent and write out your collected graph data. The TMDbAPIUtils class will be used to work with the TMDB API for data retrieval.

Tasks and point breakdown

a) [10 pts] Implementation of the Graph class according to the instructions in **Q1.py.**

- **The graph is undirected,** thus **{a,b} and {b,a} **refer to the **same undirected edge** in the graph; **keep only either {a, b} or {b, a}** in the Graph object. A node’s degree is the number of (undirected) edges incident on it. In/ out-degrees are not defined for undirected graphs.

b) [10 pts] Implementation of the TMDbAPIUtils class according to instructions in **Q1.py.** Use version 3 of the TMDb API to download data about actors and their co-actors. To use the API:

- Create a TMDb account and follow the instructions on this document to obtain an authentication key. Be sure to use the key, not the token.
- Refer to the TMDB API Documentation as you work on this question.

c) [20 pts] Producing correct **nodes.csv** and **edges.csv.** 

- As mentioned in the Python file,if an actor name has comma characters(“,”),remove those characters before writing that name into the csv files.

:::: details Answer

::: code-tabs

@tab Code1

```python
import http.client
import json
import csv
from urllib import request, parse


#############################################################################################################################
# cse6242 
# All instructions, code comments, etc. contained within this notebook are part of the assignment instructions.
# Portions of this file will auto-graded in Gradescope using different sets of parameters / data to ensure that values are not
# hard-coded.
#
# Instructions:  Implement all methods in this file that have a return
# value of 'NotImplemented'. See the documentation within each method for specific details, including
# the expected return value
#
# Helper Functions:
# You are permitted to write additional helper functions/methods or use additional instance variables within
# the `Graph` class or `TMDbAPIUtils` class so long as the originally included methods work as required.
#
# Use:
# The `Graph` class  is used to represent and store the data for the TMDb co-actor network graph.  This class must
# also provide some basic analytics, i.e., number of nodes, edges, and nodes with the highest degree.
#
# The `TMDbAPIUtils` class is used to retrieve Actor/Movie data using themoviedb.org API.  We have provided a few necessary methods
# to test your code w/ the API, e.g.: get_movie_cast(), get_movie_credits_for_person().  You may add additional
# methods and instance variables as desired (see Helper Functions).
#
# The data that you retrieve from the TMDb API is used to build your graph using the Graph class.  After you build your graph using the
# TMDb API data, use the Graph class write_edges_file & write_nodes_file methods to produce the separate nodes and edges
# .csv files for submission to Gradescope.
#
# While building the co-actor graph, you will be required to write code to expand the graph by iterating
# through a portion of the graph nodes and finding similar artists using the TMDb API. We will not grade this code directly
# but will grade the resulting graph data in your nodes and edges .csv files.
#
#############################################################################################################################


class Graph:

    # Do not modify
    def __init__(self, with_nodes_file=None, with_edges_file=None):
        """
        option 1:  init as an empty graph and add nodes
        option 2: init by specifying a path to nodes & edges files
        """
        self.nodes = []
        self.edges = []
        if with_nodes_file and with_edges_file:
            nodes_CSV = csv.reader(open(with_nodes_file))
            nodes_CSV = list(nodes_CSV)[1:]
            self.nodes = [(n[0], n[1]) for n in nodes_CSV]

            edges_CSV = csv.reader(open(with_edges_file))
            edges_CSV = list(edges_CSV)[1:]
            self.edges = [(e[0], e[1]) for e in edges_CSV]

    def add_node(self, id: str, name: str) -> None:
        """
        add a tuple (id, name) representing a node to self.nodes if it does not already exist
        The graph should not contain any duplicate nodes
        """
        # return NotImplemented
        if (id, name) not in self.nodes:
            self.nodes.append((id, name))

    def add_edge(self, source: str, target: str) -> None:
        """
        Add an edge between two nodes if it does not already exist.
        An edge is represented by a tuple containing two strings: e.g.: ('source', 'target').
        Where 'source' is the id of the source node and 'target' is the id of the target node
        e.g., for two nodes with ids 'a' and 'b' respectively, add the tuple ('a', 'b') to self.edges
        """
        # return NotImplemented
        edge = (source, target) if source < target else (target, source)
        if edge not in self.edges:
            self.edges.append(edge)

    def total_nodes(self) -> int:
        """
        Returns an integer value for the total number of nodes in the graph
        """
        # return NotImplemented
        return len(self.nodes)

    def total_edges(self) -> int:
        """
        Returns an integer value for the total number of edges in the graph
        """
        # return NotImplemented
        return len(self.edges)

    def max_degree_nodes(self) -> dict:
        """
        Return the node(s) with the highest degree
        Return multiple nodes in the event of a tie
        Format is a dict where the key is the node_id and the value is an integer for the node degree
        e.g. {'a': 8}
        or {'a': 22, 'b': 22}
        """
        # return NotImplemented
        degree_count = {}
        for edge in self.edges:
            for node in edge:
                if node in degree_count:
                    degree_count[node] += 1
                else:
                    degree_count[node] = 1
        max_degree = max(degree_count.values())
        return {node: degree for node, degree in degree_count.items() if degree == max_degree}

    def print_nodes(self):
        """
        No further implementation required
        May be used for de-bugging if necessary
        """
        print(self.nodes)

    def print_edges(self):
        """
        No further implementation required
        May be used for de-bugging if necessary
        """
        print(self.edges)

    # Do not modify
    def write_edges_file(self, path="edges.csv") -> None:
        """
        write all edges out as .csv
        :param path: string
        :return: None
        """
        edges_path = path
        edges_file = open(edges_path, 'w', encoding='utf-8')

        edges_file.write("source" + "," + "target" + "\n")

        for e in self.edges:
            edges_file.write(e[0] + "," + e[1] + "\n")

        edges_file.close()
        print("finished writing edges to csv")

    # Do not modify
    def write_nodes_file(self, path="nodes.csv") -> None:
        """
        write all nodes out as .csv
        :param path: string
        :return: None
        """
        nodes_path = path
        nodes_file = open(nodes_path, 'w', encoding='utf-8')

        nodes_file.write("id,name" + "\n")
        for n in self.nodes:
            nodes_file.write(n[0] + "," + n[1] + "\n")
        nodes_file.close()
        print("finished writing nodes to csv")


class TMDBAPIUtils:

    # Do not modify
    def __init__(self, api_key: str):
        self.api_key = api_key
        # self.conn = http.client.HTTPSConnection("api.themoviedb.org")

    def requests_function(self, url):
        req = request.Request(url)
        # print(req)
        with request.urlopen(req) as response:
            # Read the response data
            response_data = response.read()

            # Assuming the response is in JSON format, parse it
            data = json.loads(response_data)

            # Print the parsed data
            # pprint(data['cast'])
        return data

    def get_movie_cast(self, movie_id: str, limit: int = None, exclude_ids: list = None) -> list:
        """
        Get the movie cast for a given movie id, with optional parameters to exclude an cast member
        from being returned and/or to limit the number of returned cast members
        documentation url: https://developers.themoviedb.org/3/movies/get-movie-credits

        :param string movie_id: a movie_id
        :param list exclude_ids: a list of ints containing ids (not cast_ids) of cast members  that should be excluded from the returned result
            e.g., if exclude_ids are [353, 455] then exclude these from any result.
        :param integer limit: maximum number of returned cast members by their 'order' attribute
            e.g., limit=5 will attempt to return the 5 cast members having 'order' attribute values between 0-4
            If after excluding, there are fewer cast members than the specified limit, then return the remaining members (excluding the ones whose order values are outside the limit range). 
            If cast members with 'order' attribute in the specified limit range have been excluded, do not include more cast members to reach the limit.
            If after excluding, the limit is not specified, then return all remaining cast members."
            e.g., if limit=5 and the actor whose id corresponds to cast member with order=1 is to be excluded,
            return cast members with order values [0, 2, 3, 4], not [0, 2, 3, 4, 5]
        :rtype: list
            return a list of dicts, one dict per cast member with the following structure:
                [{'id': '97909' # the id of the cast member
                'character': 'John Doe' # the name of the character played
                'credit_id': '52fe4249c3a36847f8012927' # id of the credit, ...}, ... ]
                Note that this is an example of the structure of the list and some of the fields returned by the API.
                The result of the API call will include many more fields for each cast member.
        """
        # return NotImplemented
        url = f"https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key={self.api_key}&language=en-US"
        # return NotImplemented
        # req = request.Request(self.url, headers=headers)
        """
        req = request.Request(url)
        # print(req)
        with request.urlopen(req) as response:
            # Read the response data
            response_data = response.read()

            # Assuming the response is in JSON format, parse it
            data = json.loads(response_data)

            # Print the parsed data
            # pprint(data['cast'])
        """
        data = self.requests_function(url)
        casts = data.get('cast', [])
        # pprint(cast)
        if exclude_ids:
            casts = [member for member in casts if member['id'] not in exclude_ids]
        if limit and limit < len(casts):
            casts = casts[:limit]
        target_lst = []
        for cast in casts:
            target_lst.append({
                'id': cast.get('id'),
                'character': cast.get('character'),
                'credit_id': cast.get('credit_id'),
            })
        return target_lst

    def get_movie_credits_for_person(self, person_id: str, vote_avg_threshold: float = None) -> list:
        """
        Using the TMDb API, get the movie credits for a person serving in a cast role
        documentation url: https://developers.themoviedb.org/3/people/get-person-movie-credits

        :param string person_id: the id of a person
        :param vote_avg_threshold: optional parameter to return the movie credit if it is >=
            the specified threshold.
            e.g., if the vote_avg_threshold is 5.0, then only return credits with a vote_avg >= 5.0
        :rtype: list
            return a list of dicts, with each dict having 'id', 'title', and 'vote_avg' keys,
            one dict per movie credit with the following structure:
                [{'id': '97909' # the id of the movie
                'title': 'Long, Stock and Two Smoking Barrels' # the title (not original title) of the credit
                'vote_avg': 5.0 # the float value of the vote average value for the credit}, ... ]
        """
        # return NotImplemented
        url = f"https://api.themoviedb.org/3/person/{person_id}/movie_credits?api_key={self.api_key}&language=en-US"
        data = self.requests_function(url)
        # print(data)
        credits = data.get('cast', [])
        # print(credits)
        if vote_avg_threshold:
            credits = [credit for credit in credits if credit.get('vote_average', 0) >= vote_avg_threshold]
        # return credits
        target_credits = []
        for credit in credits:
            target_credits.append(
                {
                    'id': credit.get('id'),
                    'title': credit.get('title'),
                    'vote_avg': credit.get('vote_average')
                }
            )
        return target_credits


#############################################################################################################################
#
# BUILDING YOUR GRAPH
#
# Working with the API:  See use of http.request: https://docs.python.org/3/library/http.client.html#examples
#
# Using TMDb's API, build a co-actor network for the actor's/actress' highest rated movies
# In this graph, each node represents an actor
# An edge between any two nodes indicates that the two actors/actresses acted in a movie together
# i.e., they share a movie credit.
# e.g., An edge between Samuel L. Jackson and Robert Downey Jr. indicates that they have acted in one
# or more movies together.
#
# For this assignment, we are interested in a co-actor network of highly rated movies; specifically,
# we only want the top 3 co-actors in each movie credit of an actor having a vote average >= 8.0.
# Build your co-actor graph on the actor 'Laurence Fishburne' w/ person_id 2975.
#
# You will need to add extra functions or code to accomplish this.  We will not directly call or explicitly grade your
# algorithm. We will instead measure the correctness of your output by evaluating the data in your nodes.csv and edges.csv files.
#
# GRAPH SIZE
# With each iteration of your graph build, the number of nodes and edges grows approximately at an exponential rate.
# Our testing indicates growth approximately equal to e^2x.
# Since the TMDB API is a live database, the number of nodes / edges in the final graph will vary slightly depending on when
# you execute your graph building code. We take this into account by rebuilding the solution graph every few days and
# updating the auto-grader.  We establish a bound for lowest & highest encountered numbers of nodes and edges with a
# margin of +/- 100 for nodes and +/- 150 for edges.  e.g., The allowable range of nodes is set to:
#
# Min allowable nodes = min encountered nodes - 100
# Max allowable nodes = max allowable nodes + 100
#
# e.g., if the minimum encountered nodes = 507 and the max encountered nodes = 526, then the min/max range is 407-626
# The same method is used to calculate the edges with the exception of using the aforementioned edge margin.
# ----------------------------------------------------------------------------------------------------------------------
# BEGIN BUILD CO-ACTOR NETWORK
#
# INITIALIZE GRAPH
#   Initialize a Graph object with a single node representing Laurence Fishburne
#
# BEGIN BUILD BASE GRAPH:
#   Find all of Laurence Fishburne's movie credits that have a vote average >= 8.0
#   FOR each movie credit:
#   |   get the movie cast members having an 'order' value between 0-2 (these are the co-actors)
#   |
#   |   FOR each movie cast member:
#   |   |   using graph.add_node(), add the movie cast member as a node (keep track of all new nodes added to the graph)
#   |   |   using graph.add_edge(), add an edge between the Laurence Fishburne (actor) node
#   |   |   and each new node (co-actor/co-actress)
#   |   END FOR
#   END FOR
# END BUILD BASE GRAPH
#
#
# BEGIN LOOP - DO 2 TIMES:
#   IF first iteration of loop:
#   |   nodes = The nodes added in the BUILD BASE GRAPH (this excludes the original node of Laurence Fishburne!)
#   ELSE
#   |    nodes = The nodes added in the previous iteration:
#   ENDIF
#
#   FOR each node in nodes:
#   |  get the movie credits for the actor that have a vote average >= 8.0
#   |
#   |   FOR each movie credit:
#   |   |   try to get the 3 movie cast members having an 'order' value between 0-2
#   |   |
#   |   |   FOR each movie cast member:
#   |   |   |   IF the node doesn't already exist:
#   |   |   |   |    add the node to the graph (track all new nodes added to the graph)
#   |   |   |   ENDIF
#   |   |   |
#   |   |   |   IF the edge does not exist:
#   |   |   |   |   add an edge between the node (actor) and the new node (co-actor/co-actress)
#   |   |   |   ENDIF
#   |   |   END FOR
#   |   END FOR
#   END FOR
# END LOOP
#
# Your graph should not have any duplicate edges or nodes
# Write out your finished graph as a nodes file and an edges file using:
#   graph.write_edges_file()
#   graph.write_nodes_file()
#
# END BUILD CO-ACTOR NETWORK
# ----------------------------------------------------------------------------------------------------------------------

# Exception handling and best practices
# - You should use the param 'language=en-US' in all API calls to avoid encoding issues when writing data to file.
# - If the actor name has a comma char ',' it should be removed to prevent extra columns from being inserted into the .csv file
# - Some movie_credits do not return cast data. Handle this situation by skipping these instances.
# - While The TMDb API does not have a rate-limiting scheme in place, consider that making hundreds / thousands of calls
#   can occasionally result in timeout errors. If you continue to experience 'ConnectionRefusedError : [Errno 61] Connection refused',
#   - wait a while and then try again.  It may be necessary to insert periodic sleeps when you are building your graph.


def return_name() -> str:
    """
    Return a string containing your GT Username
    e.g., gburdell3
    Do not return your 9 digit GTId
    """
    # return NotImplemented
    return "xren81"


# You should modify __main__ as you see fit to build/test your graph using  the TMDBAPIUtils & Graph classes.
# Some boilerplate/sample code is provided for demonstration. We will not call __main__ during grading.

if __name__ == "__main__":
    graph = Graph()
    graph.add_node(id='2975', name='Laurence Fishburne')
    tmdb_api_utils = TMDBAPIUtils(api_key='87cdefee1fda4145fe49c9d2fff3fef0')

    # call functions or place code here to build graph (graph building code not graded)
    # Suggestion: code should contain steps outlined above in BUILD CO-ACTOR NETWORK

    graph.write_edges_file()
    graph.write_nodes_file()
    # tmdb_api_utils = TMDBAPIUtils(api_key='87cdefee1fda4145fe49c9d2fff3fef0')
    # cast = tmdb_api_utils.get_movie_cast(movie_id=12, limit=21, exclude_ids=[13])
    # tm = tmdb_api_utils.get_movie_credits_for_person(person_id="12", vote_avg_threshold=5)
    # print(tm)
    # print(cast)
    # print(len(cast))
    # If you have already built & written out your graph, you could read in your nodes & edges files
    # to perform testing on your graph.
    # graph = Graph(with_edges_file="edges.csv", with_nodes_file="nodes.csv")
```



:::

:::

### Q2 [35 points] SQLite

SQLite is a lightweight, serverless, embedded database that can easily handle multiple gigabytes of data. It is one of the world’s most popular embedded database systems. It is convenient to share data stored in an SQLite database — just one cross-platform file which does not need to be parsed explicitly (unlike CSV files, which must be parsed).

You will modify the given **Q2.py** file by adding SQL statements to it. We suggest that you consider testing your SQL locally on your computer using interactive tools to speed up testing and debugging, such as DB Browser for SQLite.

| Goal              | Construct a TMDb database in SQLite. Partition and combine information within tables to answer questions. |
| ----------------- | ------------------------------------------------------------ |
| Technology        | SQLite release 3.37.2. It is possible for you to complete the question on other versions locally, however we do not officially support them.<br />Python **3.10.x only** (question developed and tested for these versions). It is possible that other versions may also work, but we do not officially support them. |
| Allowed Libraries | **Do not modify import statements**. Everything you need to complete this question has been imported for you. **Do not** use other libraries for this question. |
| Max runtime       | 10 minutes. Submissions exceeding this will receive **zero** credit. |
| Deliverables      | [Gradescope] **Q2.py**: Modified file containing all the SQL statements you have used to answer parts a - h in the proper sequence. |

Tasks and point breakdown

**NOTE:** A sample class has been provided to show example SQL statements; you can turn off this output by changing the global variable SHOW from True to False. This **must** be set to *False* before uploading to Gradescope.

**NOTE:** In this question, you must only use [INNER JOIN](https://www.w3schools.com/sql/sql_join_inner.asp) when performing a join between two tables, except for part g. Other types of joins may result in incorrect results.

**NOTE:** When sorting on a numerical column, be sure to sort by the raw number, not the string returned by printf.

**GTusername** — update the method GTusername with your credentials

a. [9 points] *Create tables and import data*.

​    i. [2points]Create two tables (via two separate methods,part_ai_1 and part_ai_2,in **Q2.py**) named movies and movie_cast with columns having the indicated data types:

1. movies
    1.  id (integer)
    2. title (text)
    3. score (real)
2. movie_cast
    1. movie_id (integer)
    2. cast_id (integer)
    3. cast_name (text)
    4. birthday (text)
    5.  popularity (real)

​    ii. [2points]Import the provided **movies.csv** file into the movies table and **movie_cast.csv** into the movie_cast table

1. Write Python code that imports the .csv files into the individual tables. This will include looping though the file and using the **‘INSERT INTO’** SQL command. You **must** only use relative paths while importing files since absolute/local paths are specific locations that exist only on your computer and will cause the auto-grader to fail.

iii. [5 points] *Vertical Database Partitioning.* Database partitioning is an important technique that divides large tables into smaller tables, which may help speed up queries. Create a new table cast_bio from the movie_cast table (i.e., columns in cast_bio will be a subset of those in movie_cast). Do not edit the movie_cast table. Be sure that the **values are unique** when inserting into the new cast_bio table. Read this page for an example of vertical database partitioning.

cast_bio

1. cast_id (integer)
2. cast_name (text)
3. birthday (text)
4. popularity (real)

b. [1 point] *Create indexes.* Create the following indexes. Indexes increase data retrieval speed; though the speed improvement may be negligible for this small database, it is significant for larger databases.

1. movie_index for the id column in movies table
2. cast_index for the cast_id column in movie_cast table
3. cast_bio_index for the cast_id column in cast_bio table

c. [3 points] *Calculate a proportion*. Find the proportion of movies with a score between 7 and 20 (both limits inclusive). The proportion should be calculated as a percentage and should only be based on the total number of rows in the movies table. Format all decimals to two places using printf(). Do **NOT** use the ROUND() function as in some rare cases it works differently on different platforms.

Output format and example value:7.70

d. [4 points] *Find the most prolific actors*. List 5 cast members with the highest number of movie appearances that have a popularity > 10. Sort the results by the number of appearances in descending order, then by cast_name in alphabetical order.

Output format and example row values (cast_name,appearance_count): Harrison Ford,2

e. [4 points] Identify the highest scoring movies while favoring small cast size. List the 5 highest-scoring movies. In the case of a tie, prioritize movies with fewer cast members. Sort the intermediate result by score in descending order, then by number of cast members in ascending order, then by movie name in alphabetical order. Format all decimals to two places using printf().

Output format and example values (movie_title,score,cast_count):

Star Wars: Holiday Special,75.01,12

Games,58.49,33

f. [4 points] *Get high scoring actors.* Find the top ten cast members who have the highest average movie scores. Format all decimals to two decimal places using printf(). Sort the output by average score in descending order, then by cast_name in alphabetical order.

- **First** exclude movies with score <25 in the average score calculation.
- **Next** include only cast members who have appeared in three or more movies with score >= 25. Note that the above “score” references a score of one singular movie, while “average_score” is the calculated mean.

Output format and example value (cast_id,cast_name,average_score):

8822,Julia Roberts,53.00

g. [6 points] *Creating views.* Create a view (virtual table) called good_collaboration that lists pairs of actors who have had a good collaboration as defined here. Each row in the view describes one pair of actors who appeared in at least 2 movies together AND the average score of these movies is >= 40.

The view should have the format:

```
good_collaboration(
           cast_member_id1,
           cast_member_id2,
           movie_count,
           average_movie_score)
```

For symmetrical or mirror pairs, only keep the row in which cast_member_id1 has a lower numeric value. For example, for ID pairs (1, 2) and (2, 1), keep the row with IDs (1, 2). There should not be any “self-pair” where the value of cast_member_id1 is the same as that of cast_member_id2.

Remember that creating a view will not produce any output, so you should test your view with a few simple select statements during development. One such test has already been added to the code as part of the auto-grading.

**NOTE**: **Do not submit any code that creates a ‘TEMP’ or ‘TEMPORARY’ view that you may have used for testing.**

**Optional Reading:** Why create views?

i. [4 points] *Find the best collaborators.* Get the 5 cast members with the highest average scores from the good_collaboration view, and call this score the collaboration_score. This score is the average of the average_movie_score corresponding to each cast member, including actors in cast_member_id1 as well as cast_member_id2. Format all decimals to two places using printf().

- Order your output by collaboration_score in descending order, then by cast_name alphabetically.
- Output format and example values(cast_id,cast_name,collaboration_score):

```
2,Mark Hamil,99.32
1920,Winoa Ryder,88.32
```

h. [4 points] SQLite supports simple but powerful Full Text Search (FTS) for fast text-based querying (FTS documentation). Import movie overview data from the **movie_overview.csv** into a new FTS table called movie_overview with the schema:

movie_overview

- id (integer)
- overview (text)

**NOTE:** Create the table using **fts3** or **fts4** only. Also note that keywords like NEAR, AND, OR and NOT are case sensitive in FTS queries.

**NOTE:** If you have issues that fts is not enabled, try the following steps 

1) Go to sqlite3 downloads page: https://www.sqlite.org/download.html

2) Download the dll file for your system

3) Navigate to your python packages folder, e.g.,

    C:\Users\... ...\Anaconda3\pkgs\sqlite-3.29.0-he774522_0\Library\bin

4) Drop the downloaded .dll file in the bin.

5) In your IDE, import sqlite3 again, fts should be enabled.”

i. [1 point] Count the number of movies whose overview field contains the word ‘fight’. Matches are not case sensitive. Match full words, not word parts/sub-strings.

*Example:*

- *Allowed: ‘FIGHT’, ‘Fight’, ‘fight’, ‘fight.’*
- *Disallowed: ‘gunfight’, ‘fighting’, etc.*

Output format and example value:12

ii. [2 points] Count the number of movies that contain the terms ‘space’ and ‘program’ in the overview field with no more than 5 intervening terms in between. Matches are not case sensitive. As you did in h(i)(1), match full words, not word parts/sub-strings.

1. *Example:*
    - *Allowed: ‘In Space there was a program’, ‘In this space program’*
    - *Disallowed: ‘In space you are not subjected to the laws of gravity. A program.’, etc.*

Output format and example value:6



## Q3 [15 points] D3 (v5) Warmup

**Read chapters 4-8 of Scott Murray’s** **Interactive Data Visualization for the Web, 2nd edition** (sign in using your GT account, e.g., jdoe3@gatech.edu). Briefly review chapters 1-3 if you need additional background on web development. **This reading provides important foundation** you will need for Homework 2. This question and the autograder have been developed and tested for D3 version 5 (v5), while the book covers D3 v4. What you learn from the book (v4) is transferable to v5 because v5 introduced few breaking changes. In Homework 2, you will work with D3 extensively.

| Goal              | Visualize temporal trends in movie releases using D3 to showcase how interactive, rather than static plots, can make data more visually appealing, engaging and easier to parse. |
| ----------------- | ------------------------------------------------------------ |
| Technology        | D3 Version 5 (included in the lib folder)<br />Chrome 97.0 (or newer): the browser for grading your code<br />Python http server (for local testing) |
| Allowed Libraries | D3 library is provided to you in the **lib** folder. You must **NOT** use any D3 libraries (d3*.js) other than the ones provided. In Gradescope, these libraries will be provided for you in the auto-grading environment. |
| Deliverables      | [Gradescope] **Q3.html**: Modified file containing all html, javascript, and any css code required to produce the bar plot. Do not include the D3 libraries or q3.csv dataset. |

**NOTE** **the following important points:**

**1.** You will need to setup an HTTP server to run your D3 visualizations as discussed in the D3 lecture (OMS students: the video “Week 5 - Data Visualization for the Web (D3) - Prerequisites: JavaScript and SVG”. Campus students: see lecture PDF.). The easiest way is to use http.server for Python 3.x. **Run your local HTTP server in the hw1-skeleton/Q3 folder.**













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
