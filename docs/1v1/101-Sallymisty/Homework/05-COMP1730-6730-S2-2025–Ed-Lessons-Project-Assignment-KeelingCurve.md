---
title: Project Assignment Keeling Curve
icon: blog
date: 2025-09-24 16:10:44
author: bornforthis
isOriginal: true
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

## 1. Background

In 1958, geochemist Charles David Keeling began measuring atmospheric CO2 at Mauna Loa Observatory in Hawaii. The CO2 concentration dataset, the Keeling curve, became one of the most important scientific datasets in history, providing the first clear evidence of increasing CO2 levels in the Earth's atmosphere.

The Keeling Curve reveals two key patterns: (i) a regular oscillation each year, reflecting the uptake of Northern Hemisphere vegetation, and (ii) a long-term trend, showing the overall change over time. 

In this project assignment, we will analyse and interpret the Keeling curve and then forecast into the future based on observed data. In addition, we will investigate the correlation between the CO2 concentration and the global land and ocean average temperature anomaly data.

## 2. Practical information

The project assignment must be submitted in Ed Lessons before **Sunday, October 12th, at 11:55 PM** (5 min before midnight). **This deadline is hard!** Unlike other courses, we do not give a partial mark for late submissions. We will only grant an extension in exceptional circumstances; see [our policy](https://comp.anu.edu.au/courses/comp1730/assessments/#late-submissions-and-extensions) on the course assessment page.

You can submit it as many times as you like, but *note* that only the mark of the last submission will be used.

::: warning

We do not accept any excuses about technical problems like internet connection or computer issues, as you have plenty of time from the release of the assignment to the deadline. **Do not wait until the last minute!**

:::

**The project assignment is individual**. You must write your own solution *and* you are expected to be able to explain every aspect of it. You are *not allowed* to share your solution (code) with other students; this includes posting it (or parts of it) to the discussion forum, or to any other online platforms. 

::: caution

You will need to attend an in-lab oral assessment in week 11 to discuss your solution. **Absence from this oral assessment will result in your project mark set to ZERO**. If you cannot make it in week 11, you'll need to send the reason and supporting evidence to the conveners' email, and we may reschedule it to week 12.

:::

If you have questions, ask the tutor in your lab, attend drop-in sessions, or search the Ed Discussion forum for similar questions (post your question only if it hasn't been found).

## 3. The data

[co2_daily_mlo.csv](https://github.com/AndersonHJB/BornforthisData/blob/main/bornforthis.cn/1v1/101-Sallymisty/Homework/co2_daily_mlo.csv)

The data file contains daily average measurements of CO2 concentration at the Mauna Loa observatory in Hawaii, US:

```python
# lines starting with # are comments and explanation of the data and credits
# the comma-separated columns are year, month, day, decimal_date, and CO2_mol_frac, respectively
1974,5,19,1974.3781,333.46
...
```

For this assignment, we will look at the year, month, day, decimal date and CO2 concentration columns.

- *year*: year of observation,
- *month*: month of observation
- day: day of the month of the observation
- *decimal date*: numerical value representing the first three columns. For example, 1974,5,19 gives 1974 + (31 + 28 + 31 + 30 + 18) / 365 = 1974.3781, or 1975,1,1 translates to 1975.0000,  or 1975,1,2 translates to 1975 + 1 / 365 = 1975.0027.

- *CO2_mol_frac*: CO2 concentration, measured by the number of molecules of carbon dioxide divided by the number of all molecules in air and the unit is ppm.

The file is downloaded from https://gml.noaa.gov/ccgg/trends/data.html in early September 2025. 

**aravg.mon.land_ocean.90S.90N.v6.0.0.202507.asc.txt and aravg_readme.txt**

[aravg_readme.txt](https://github.com/AndersonHJB/BornforthisData/blob/main/bornforthis.cn/1v1/101-Sallymisty/Homework/aravg_readme.txt)

[aravg.mon.land_ocean.90S.90N.v6.0.0.202507.asc.txt](https://static.au.edusercontent.com/files/tAadD2oUhwdvescsTNW0SEbn)

The dataset (in *avavg.mon.land_ocean.90S.90N.v6.0.0.202507.asc.txt*) contains the combined sea and land surface temperature anomaly, where anomalies are based on the climatology from 1971 to 2000. For this assignment, we will only look at the first three columns:

- *first* *column*: year of observation
- *second column*: month of observation

- *third column*: anomaly of temperature (in Kelvin).

For more information about the other columns, refer to *aravg_readme.txt*.

The dataset and the readme file were downloaded from https://www.ncei.noaa.gov/access/metadata/landing-page/bin/iso?id=gov.noaa.ncdc:C01704 in early September 2025.

## 4. Questions for data analysis

In the workspace, we provide a scaffold code file `assignment.py` in which you need to write all your code. In this file, there are several functions (see questions below) that have only a `pass` statement that you need to replace with your own code to solve the questions. You don't have to solve all the questions, but you can gain marks for the ones that you have attempted (see Marking criteria page).

::: warning

You must attend the *viva* interview to discuss your project assignment during week 11 in your lab!  Absence from this viva without convener's prior approval will result in a ZERO mark for your project assignment.

:::

::: warning

For all questions involving floating-point computation, the returned answers will be judged correct if within **0.0001** of the correct answers.

:::

::: info

In addition to the datasets explained in *The data*, we also provided a couple of test datasets in `test_co2_data.csv` and `test_temp_data.csv` so you can use them to make sure your code run without errors. Note that we will use additional test datasets to check the functionality of your code. These files can be found in the "Files" tab of your code page.

:::

### 4.1 Question 0: Loading the $CO_2$ data

Implement a function `load_co2_data(filename)` that takes as input a string with a file name, and returns a single object that stores all the data read from the file. This file is in the CSV format described in ["The data"](https://edstem.org/au/courses/25182/lessons/91352/slides/625551) page. The returned value of this function can be of any type of your own choice. It will be passed as the first argument for all functions in subsequent questions of this assignment. 

::: info

As a hint, you can store this data object as a list of lists, list of dictionaries, pandas DataFrame, or any other data structure that should contain all information from the CSV file. The testing will only check if this function doesn't return `None`. 

:::

### 4.2 Question 1a: Calculate basic statistics

Implement a function `calculate_basic_statistics(co2_data, start_year, end_year)` that takes three input parameters: 

- `co2_data:` an object in the same structure as returned from `load_co2_data` of Q0,
- `start_year`: an integer for the starting year for statistic calculation,
- `end_year`: an integer for the ending year for statistic calculation.

The function should return a *list* of *five* floating-point numbers, `[mean, std, min, max, count]` where

- `mean`: the mean $CO_2$ concentration of all days from `start_year` to `end_year`, inclusive;
- `std`: the [standard deviation](https://en.wikipedia.org/wiki/Standard_deviation) of the $CO_2$ concentration of all days from `start_year` to `end_year`, inclusive; 
- `min`: the minimum $CO_2$ concentration of all days from `start_year` to end_year, inclusive; 
- `max`: the maximum $CO_2$ concentration of all days from `start_year` to `end_year`, inclusive;
- `count`: the number of measurements available in the dataset from `start_year` to `end_year`, inclusive.

::: warning

You are not allowed to modify the `co2_data` object inside this function! This same requirement holds true for all remaining questions.

:::

*Example*: using the provided dataset, calculate_basic_statistics(co2_data, 1974, 1975) should return [330.60137, 2.12487, 326.06, 334.63, 437]

*Notes:*

- You can assume that `start_year` <= `end_year`.
- You **cannot** assume that start_year and end_year are included in the data file. That means, they can fall outside the range of years in the data, and you should be able to extract the years that are between `start_year` and `end_year` in which data are available. The `start_year==end_year` case means we should analyse the data available for that single year.
- Data (entire rows) for some dates or months may be missing.
- You can assume that there are some observations between `start_year` and `end_year` 

### 4.3 Question 1b: Calculate the decimal date

Implement a function `to_decimal_date(year, month_of_year, day_of_month)`  that takes three input parameters:

- `year`: an integer representing the year
- `month_of_year`: an integer between 1 and 12 representing the month of the year
- `day_of_month`: an integer between 1 and the final day of the month `month_of_year`

This function should return a single floating-point number, representing a date where the fractional part of the number indicates the proportion of the year that has passed.

*Example*: `to_decimal_date(1975, 1, 1)` should return `1975.0`,  `to_decimal_date(1975, 2, 10)` should return `1975.1095` [= 1975 + (31 + 9) / 365].

*Notes:*

- You can assume that the arguments are valid, that is, we don't call `to_decimal_date(1975, 13, 35)` .
- The function should correctly handle [leap years](https://en.wikipedia.org/wiki/Leap_year).

### 4.4  Question 2: Estimate the linear trend

Implement a function `estimate_linear_trend(co2_data, start_year, end_year)` that takes the same arguments as in question 1a. The function estimates the linear trend in the data. The function should return a list of *two* floating-point numbers, `[slope, intercept]` containing

- `slope`: the slope (CO2 increase or decrease rate) of the linear fit.
- `intercept`: the y-intercept of the linear fit

We will use simple linear regression to estimate this linear trend. Assume that ti*t**i* and xi*x**i* are the decimal dates and CO2 concentrations within the year range. We can compute the mean values of ti*t**i* and xi*x**i* as tˉ*t*ˉ and xˉ*x*ˉ, respectively. The slope and intercept are as follows:
$$
\text{slope} = \frac{\sum_{i=1}^N (t_i - \bar{t})(x_i - \bar{x})}{\sum_{i=1}^N (t_i - \bar{t})^2}
$$

$$
\text{intercept} = \bar{x} - \text{slope} \times \bar{t}
$$

*Example:* Using the data provided, `estimate_linear_trend(co2_data, 1974, 1975)` should return `[0.561769, -778.954467]`.

Notes:

- This question differs from the linear interpolation question in Homework 3; here, we use all observed points in a year range to compute the slope and intercept.
- The unit of the slope is *ppm/day,* and that of the intercept is *ppm*.

### 4.5 Question 3: Extract the seasonal component

Due to the regular CO2 uptake by the Northern Hemisphere vegetation, there is a yearly oscillation (seasonal component) in the data. In a year, the concentration tends to be highest in May and lowest in September. We will now attempt to extract this variation, averaged over a specified year range.

Implement a function `extract_seasonal_component(co2_data, start_year, end_year)` to extract and return the seasonal component of the CO2 data. This function takes the same arguments as Questions 1a and 2. 

This function should first remove the trend component from the data. Specifically, you can use the function you wrote in Q2 to estimate the linear fit and then subtract the linear fit from the data (but again, do not modify the original data). This step results in the *detrended* data. Using this detrended data, the function then computes the concentration for each month of the year, *averaged over the specified year range*. 

It should return a list of *12* floating-point numbers, each showing the average concentration for each month.

*Example*: using the data provided, `extract_seasonal_component(co2_data, 1974, 1975)` should return `[0.18638, 0.85614, 1.25052, 2.41896, 3.12695, 2.31302, 1.01378, -1.10299, -2.77677, -2.93125, -2.03119, -0.90832]`.

### 4.6 Question 4a: Make predictions using the linear trend

Implement a function `predict_co2_future_linear(co2_data, start_year, end_year, target_year, target_month, target_day)` that takes six parameters:

- the first three parameters are the same as in questions 1a, 2, and 3 that you will need to use to estimate the linear trend,
- `target_year`: an integer representing the year that we want to predict,
- `target_month`: an integer representing the month of the year that we want to predict,
- `target_day`: an integer representing the day of the month that we want to predict.

The function should return the forecast of CO2 concentration at the specified (year, month, day) using *only* the linear trend in the data.

*Example*: using the data provided, `predict_co2_future_linear(co2_data, 1974, 1975, 2025, 9, 15)` should return `359.02441` .

### 4.7 Question 4b: Make predictions using the linear trend and the seasonal component

Implement a function `predict_co2_future_linear_and_seasonal(co2_data, start_year, end_year, target_year, target_month, target_day)` that takes six parameters:

- the first three parameters are the same as in questions 1, 2, 3, and 4a that you will need to use to estimate the linear trend and the seasonal component,
- `target_year`: an integer representing the year that we want to predict,
- `target_month`: an integer representing the month of the year that we want to predict,
- `target_day`: an integer representing the day of the month that we want to predict.

The function should return the forecast of CO2 concentration at the specified (year, month, day) using ***both*** the linear trend and the seasonal component in the data. In this question, we assume that the seasonal component does not change from year to year, so we can use the average seasonal component over the specified year range to make predictions.

*Example*: using the data provided, `predict_co2_future_linear_and_seasonal(co2_data, 1974, 1975, 2025, 9, 15)` should return `356.247595` . Note that this is the same as the result from Q4a, 359.024368, plus the result from Q3 for September, -2.77677.

### 4.8 Question 5a: Load the temperature data

Implement a function `load_temperature_data(filename)` that takes as input a string with a file name, and returns a single object that stores all the data read from the file. This file is in the txt format described in ["The data"](https://edstem.org/au/courses/25182/lessons/91352/slides/625551) page. Similar to Q0, the returned value of this function can be of any type of your own choice. It will be passed as an argument for the next question.

### 4.9 Question 5b: Compute the correlation between CO2 and temperature

It is hypothesised that increasing CO2 emissions may contribute to global warming, i.e., rising Earth temperatures. We will test this hypothesis by computing the [Pearson correlation coefficient](https://en.wikipedia.org/wiki/Pearson_correlation_coefficient) between CO2 concentration and temperature. The correlation value is between -1 and +1, with values close to -1 meaning a negative correlation and values close to +1 meaning a positive correlation.

Implement a function `compute_correlation_co2_temperature(co2_data, temperature_data, start_year, end_year)` that takes 

- `co2_data`: the data you loaded in question 0
- `temperature_data`: the data you loaded in question 5a
- `start_year`: an integer as the starting year for the correlation calculation
- `end_year`: an integer as the ending year for the correlation calculation

As we only have the temperature data for each month, this function will first compute the average CO2 concentration for each month, then compute and *return* the correlation between the temperature and the CO2 concentration across the year range specified. If either the temperature data or CO2 data is missing for a fraction of the specified year range, use only the period where both data sets are available. If both data sets are unavailable in the specified year range, return `math.nan` from the math module.

The correlation is a measure of the linear relationship between two variables $x$ and $y$ and can be computed using the following formula:
$$
\text{correlation} = 
\frac{\sum_{n=1}^N (x_n - \bar{x})(y_n - \bar{y})}
{\sqrt{\sum_{n=1}^N (x_n - \bar{x})^2 \; \sum_{n=1}^N (y_n - \bar{y})^2}}
$$
*Example*: using the full data provided, `compute_correlation_co2_temperature(co2_data, temp_data, 1974, 1975)` should return `0.504618`.

### 4.10 Question 6: Visualise the data (for COMP6730 students only)

::: info

If you are a COMP1730 student, you don't need to attempt this question, as it won't count towards your mark.

:::

You are now asked to generate a single plot with the aim of interpreting the results for one of the questions Q2, Q3, Q4, or Q5, or a combination of them of your choice. While these questions asked you to calculate some statistics or make predictions about a specific date/year, you now need to compute these over several years and draw the results in a way such that people can quickly observe time evolution and potentially compare observations among countries. One approach (but not limited to) is to have the x-axis as the time, whereas the y-axis depends on the question. You don't have to make a plot for every question, but a question or two is enough. Use `matplotlib` or other plotting libraries for this question.

Your task is to implement a function `plot_data(co2_data, temperature_data)` for this purpose. Make sure that you document this function *in the code* (via its docstring): for which question it is, how to interpret your plot, and what message the plot conveys. Do not save the plot, to avoid file overwrite in case a marker runs the file offline when marking.

There is no automated testing for this question beyond checking for runtime errors. Rather, a tutor will manually run this function and assess aspects like:

- For which question is it?
- Is the figure easy to read and interpret?
- Does the plot convey the intended message?

::: code-tabs

@tab assignment.py

```python
### COMP1730/6730 project assignment

"""
ANU ID: u8338485
NAME: Chengze Xin
I declare that this submission is my own work
https://www.anu.edu.au/students/academic-skills/academic-integrity
"""

from typing import List
import math
import numpy as np
import pandas as pd


# ---------------------------
# Internal helpers
# ---------------------------

def _is_leap(year: int) -> bool:
    """Return True if year is a leap year."""
    return (year % 400 == 0) or (year % 4 == 0 and year % 100 != 0)


def _days_in_month(year: int, month: int) -> int:
    """Days in month for given year (handles leap years)."""
    assert 1 <= month <= 12
    month_lengths = [31, 29 if _is_leap(year) else 28, 31, 30, 31, 30,
                     31, 31, 30, 31, 30, 31]
    return month_lengths[month - 1]


def _decimal_date(year: int, month: int, day: int) -> float:
    """
    Convert to decimal date as: year + days_elapsed_before_this_date / days_in_year.
    (I.e., 1 Jan -> .0; 2 Jan -> 1/365; uses 366 for leap years.)
    """
    month_lengths = [31, 29 if _is_leap(year) else 28, 31, 30, 31, 30,
                     31, 31, 30, 31, 30, 31]
    days_before = sum(month_lengths[:month - 1]) + (day - 1)
    total_days = 366 if _is_leap(year) else 365
    return year + days_before / total_days


def _filter_year_range(df: pd.DataFrame, start_year: int, end_year: int) -> pd.DataFrame:
    """Return a filtered copy of df with start_year <= year <= end_year (inclusive)."""
    return df[(df["year"] >= start_year) & (df["year"] <= end_year)].copy()


# ---------------------------
# Q0
# ---------------------------

def load_co2_data(filename: str) -> pd.DataFrame:
    """
    Load daily Mauna Loa CO2 measurements (CSV) into a DataFrame with columns:
    ['year','month','day','decimal_date','CO2_mol_frac'].
    Lines beginning with '#' are comments and will be ignored.
    """
    df = pd.read_csv(
        filename,
        comment="#",
        header=None,
        names=["year", "month", "day", "decimal_date", "CO2_mol_frac"]
    )
    df = df.astype({
        "year": int,
        "month": int,
        "day": int,
        "decimal_date": float,
        "CO2_mol_frac": float
    })
    return df


# ---------------------------
# Q1a
# ---------------------------

def calculate_basic_statistics(co2_data: pd.DataFrame, start_year: int, end_year: int) -> List[float]:
    """
    Return [mean, std, min, max, count] for CO2 over the inclusive year range.
    Standard deviation is SAMPLE std (ddof=1) to match the example values.
    """
    df = _filter_year_range(co2_data, start_year, end_year)
    x = df["CO2_mol_frac"].to_numpy()
    count = float(x.size)
    mean = float(np.mean(x))
    std = float(np.std(x, ddof=1))
    xmin = float(np.min(x))
    xmax = float(np.max(x))
    return [mean, std, xmin, xmax, count]


# ---------------------------
# Q1b
# ---------------------------

def to_decimal_date(year: int, month_of_year: int, day_of_month: int) -> float:
    """
    Convert (year, month, day) to decimal year.
    Fraction is proportion of the year elapsed before the given day (handles leap years).

    Examples:
      to_decimal_date(1975, 1, 1)  -> 1975.0
      to_decimal_date(1975, 2, 10) -> 1975 + (31 + 9)/365 = 1975.109589...
    """
    return _decimal_date(year, month_of_year, day_of_month)


# ---------------------------
# Q2
# ---------------------------

def estimate_linear_trend(co2_data: pd.DataFrame, start_year: int, end_year: int) -> List[float]:
    """
    Estimate linear trend (simple linear regression) for x=CO2 vs t=decimal_date.
    Returns [slope, intercept] where y = slope * t + intercept.

    Note: Since t is decimal years, the slope's unit is ppm per year,
    which matches the provided example outputs.
    """
    df = _filter_year_range(co2_data, start_year, end_year)
    t = df["decimal_date"].to_numpy(dtype=float)
    x = df["CO2_mol_frac"].to_numpy(dtype=float)

    t_mean = float(np.mean(t))
    x_mean = float(np.mean(x))

    num = float(np.sum((t - t_mean) * (x - x_mean)))
    den = float(np.sum((t - t_mean) ** 2))
    slope = num / den if den != 0 else float("nan")
    intercept = x_mean - slope * t_mean
    return [float(slope), float(intercept)]


# ---------------------------
# Q3
# ---------------------------

def extract_seasonal_component(co2_data: pd.DataFrame, start_year: int, end_year: int) -> List[float]:
    """
    Detrend using the Q2 linear fit, then average the residuals by calendar month
    across the inclusive year range. Returns 12 values (Jan..Dec).
    """
    df = _filter_year_range(co2_data, start_year, end_year)
    slope, intercept = estimate_linear_trend(co2_data, start_year, end_year)

    residual = df["CO2_mol_frac"] - (slope * df["decimal_date"] + intercept)
    df_local = df.copy()
    df_local["residual"] = residual

    month_means: List[float] = []
    for m in range(1, 13):
        m_vals = df_local.loc[df_local["month"] == m, "residual"].to_numpy()
        if m_vals.size == 0:
            month_means.append(math.nan)
        else:
            month_means.append(float(np.mean(m_vals)))
    return month_means


# ---------------------------
# Q4a
# ---------------------------

def predict_co2_future_linear(co2_data: pd.DataFrame, start_year: int, end_year: int,
                              target_year: int, target_month: int, target_day: int) -> float:
    """
    Predict CO2 at a target date using only the linear trend estimated from [start_year, end_year].
    """
    slope, intercept = estimate_linear_trend(co2_data, start_year, end_year)
    t = to_decimal_date(target_year, target_month, target_day)
    return float(slope * t + intercept)


# ---------------------------
# Q4b
# ---------------------------

def predict_co2_future_linear_and_seasonal(co2_data: pd.DataFrame, start_year: int, end_year: int,
                                           target_year: int, target_month: int, target_day: int) -> float:
    """
    Predict CO2 at a target date using linear trend + average seasonal component (Q3).
    Seasonal component is assumed stationary across years.
    """
    base = predict_co2_future_linear(co2_data, start_year, end_year,
                                     target_year, target_month, target_day)
    seasonal = extract_seasonal_component(co2_data, start_year, end_year)
    month_idx = target_month - 1
    seasonal_adj = seasonal[month_idx] if not math.isnan(seasonal[month_idx]) else 0.0
    return float(base + seasonal_adj)


# ---------------------------
# Q5a
# ---------------------------

def load_temperature_data(filename: str) -> pd.DataFrame:
    """
    Load the NOAA 'aravg.mon...' monthly temperature anomaly text file.
    Returns DataFrame with columns: ['year','month','temp_anomaly_K'].
    Ignores columns beyond the third.
    """
    df = pd.read_csv(
        filename,
        delim_whitespace=True,
        header=None,
        usecols=[0, 1, 2],
        names=["year", "month", "temp_anomaly_K"],
        engine="python"
    )
    df = df.astype({"year": int, "month": int, "temp_anomaly_K": float})
    return df


# ---------------------------
# Q5b
# ---------------------------

def compute_correlation_co2_temperature(co2_data: pd.DataFrame,
                                        temperature_data: pd.DataFrame,
                                        start_year: int, end_year: int) -> float:
    """
    Compute Pearson correlation between monthly-mean CO2 and monthly temperature anomaly
    over the inclusive range, using only months available in BOTH datasets.
    If the intersection is empty, return math.nan.
    """
    # Monthly mean CO2
    dfc = _filter_year_range(co2_data, start_year, end_year)
    monthly_co2 = (
        dfc.groupby(["year", "month"], as_index=False)["CO2_mol_frac"]
        .mean()
        .rename(columns={"CO2_mol_frac": "CO2_monthly_mean"})
    )

    # Temperature (filtered to the same year range)
    dft = _filter_year_range(temperature_data, start_year, end_year)[["year", "month", "temp_anomaly_K"]]

    # Inner join on (year, month)
    merged = pd.merge(monthly_co2, dft, on=["year", "month"], how="inner")
    if merged.empty:
        return math.nan

    x = merged["CO2_monthly_mean"].to_numpy(dtype=float)
    y = merged["temp_anomaly_K"].to_numpy(dtype=float)

    x_mean = float(np.mean(x))
    y_mean = float(np.mean(y))

    num = float(np.sum((x - x_mean) * (y - y_mean)))
    den = float(np.sqrt(np.sum((x - x_mean) ** 2) * np.sum((y - y_mean) ** 2)))
    return float(num / den) if den != 0 else math.nan


# ---------------------------
# Q6 (COMP6730 only)
# ---------------------------

def plot_data(co2_data: pd.DataFrame, temperature_data: pd.DataFrame):
    """
    Visualise Question 5 (relationship between CO2 and temperature anomalies).

    The function generates TWO separate matplotlib figures (no subplots):
      1) Monthly mean CO2 over time (ppm)
      2) Temperature anomaly over time (K)

    How to read:
      - X-axis: time in decimal years (year + (month-1)/12).
      - Figure 1 Y: monthly mean CO2 (ppm).
      - Figure 2 Y: temperature anomaly (K).

    Message:
      Although short-term fluctuations differ, the long-term upward trend in CO2 and
      generally rising temperature anomalies can be visually compared over their overlapping period.
    """
    # Prepare monthly CO2
    monthly_co2 = (
        co2_data.groupby(["year", "month"], as_index=False)["CO2_mol_frac"]
        .mean()
        .rename(columns={"CO2_mol_frac": "CO2_monthly_mean"})
    )
    monthly_co2["time"] = monthly_co2["year"] + (monthly_co2["month"] - 1) / 12.0

    temp = temperature_data.copy()
    temp["time"] = temp["year"] + (temp["month"] - 1) / 12.0

    # Overlapping time range
    tmin = max(monthly_co2["time"].min(), temp["time"].min())
    tmax = min(monthly_co2["time"].max(), temp["time"].max())

    co2_ov = monthly_co2[(monthly_co2["time"] >= tmin) & (monthly_co2["time"] <= tmax)]
    temp_ov = temp[(temp["time"] >= tmin) & (temp["time"] <= tmax)]

    import matplotlib.pyplot as plt

    # Figure 1: CO2
    plt.figure()
    plt.plot(co2_ov["time"].to_numpy(), co2_ov["CO2_monthly_mean"].to_numpy())
    plt.xlabel("Time (decimal years)")
    plt.ylabel("Monthly mean CO2 (ppm)")
    plt.title("Monthly mean CO2 over time (overlapping period)")
    plt.tight_layout()

    # Figure 2: Temperature anomaly
    plt.figure()
    plt.plot(temp_ov["time"].to_numpy(), temp_ov["temp_anomaly_K"].to_numpy())
    plt.xlabel("Time (decimal years)")
    plt.ylabel("Temperature anomaly (K)")
    plt.title("Global land+ocean temperature anomaly over time (overlapping period)")
    plt.tight_layout()
```

@tab assignment.py「剩余一个报错」

```python
### COMP1730/6730 project assignment
import math
import numpy as np
import pandas as pd
"""
ANU ID: u8338485
NAME: Chengze Xin
I declare that this submission is my own work
https://www.anu.edu.au/students/academic-skills/academic-integrity
"""



def _is_leap(year):
    """Return True if yeaar is a leap year"""
    return (year % 400 == 0) or (year % 4 == 0 and year % 100 != 0)

def _days_in_month(year, month):
    """Days in month for given year (handles leap years)."""
    assert 1 <= month <= 12
    month_lengths = [31, 29 if _is_leap(year) else 28, 31, 30, 31, 30,
                     31, 31, 30, 31, 30, 31]
    return month_lengths[month - 1]

def _decimal_date(year, month, day):
    month_lengths = [31, 29 if _is_leap(year) else 28, 31, 30, 31, 30,
                     31, 31, 30, 31, 30, 31]
    days_before = sum(month_lengths[:month - 1]) + (day - 1)
    total_days = 366 if _is_leap(year) else 365
    return year + days_before / total_days

def _filter_year_range(df, start_year, end_year):
    return df[(df["year"] >= start_year) & (df["year"] <= end_year)].copy()

def load_co2_data(filename):
    df = pd.read_csv(
        filename,
        comment = "#",
        header = None,
        names = ["year", "month", "day", "decimal_date", "CO2_mol_frac"]
    )
    df = df.astype({
        "year": int,
        "month": int,
        "day": int,
        "decimal_date": float,
        "CO2_mol_frac": float
    })
    return df

def calculate_basic_statistics(co2_data, start_year, end_year):
    df = _filter_year_range(co2_data, start_year, end_year)
    x = df["CO2_mol_frac"].to_numpy()
    count = float(x.size)
    mean = float(np.mean(x))
    std = float(np.std(x, ddof=1))
    xmin = float(np.min(x))
    xmax = float(np.max(x))
    return [mean, std, xmin, xmax, count]

def to_decimal_date(year, month_of_year, day_of_month):
    return _decimal_date(year, month_of_year, day_of_month)

def estimate_linear_trend(co2_data, start_year, end_year):
    df = _filter_year_range(co2_data, start_year, end_year)
    t = df["decimal_date"].to_numpy(dtype = float)
    x = df["CO2_mol_frac"].to_numpy(dtype = float)


    t_mean = float(np.mean(t))
    x_mean = float(np.mean(x))


    num = float(np.sum((t - t_mean) * (x - x_mean)))
    den = float(np.sum((t - t_mean) ** 2))
    slope = num / den if den != 0 else float("nan")
    intercept = x_mean - slope * t_mean
    return [float(slope), float(intercept)]

def extract_seasonal_component(co2_data, start_year, end_year):
    df = _filter_year_range(co2_data, start_year, end_year)
    slope, intercept = estimate_linear_trend(co2_data, start_year, end_year)
    residual = df["CO2_mol_frac"] - (slope * df["decimal_date"] + intercept)
    df_local = df.copy()
    df_local["residual"] = residual
    

    month_means = []
    for m in range(1, 13):
        m_vals = df_local.loc[df_local["month"] == m, "residual"].to_numpy()
        if m_vals.size == 0:
            month_means.append(math.nan)
        else:
            month_means.append(float(np.mean(m_vals)))
    return month_means

def predict_co2_future_linear(co2_data, start_year, end_year, target_year, target_month, target_day):
    slope, intercept = estimate_linear_trend(co2_data, start_year, end_year)
    t = to_decimal_date(target_year, target_month, target_day)
    return float(slope * t + intercept)

def predict_co2_future_linear_and_seasonal(co2_data, start_year, end_year, target_year, target_month, target_day):
    base = predict_co2_future_linear(co2_data, start_year, end_year, target_year, target_month, target_day)
    seasonal = extract_seasonal_component(co2_data, start_year, end_year)
    month_idx = target_month
    seasonal_adj = seasonal[month_idx] if not math.isnan(seasonal[month_idx]) else 0.0
    return float(base + seasonal_adj)

def load_temperature_data(filename):
    df = pd.read_csv(
        filename,
        delim_whitespace = True,
        header = None,
        usecols = [0, 1, 2],
        names = ["year", "month", "tempanomaly_K"],
        engine = "python"
    )
    if "temp_anomaly_K" in df.columns and "tempanomaly_K" not in df.columns:
        df = df.rename(columns={"temp_anomaly_K": "tempanomaly_K"})
    df = df.astype({"year": int, "month": int, "tempanomaly_K": float})
    return df

def compute_correlation_co2_temperature(co2_data, temperature_data, start_year, end_year):
    dfc = _filter_year_range(co2_data, start_year, end_year)
    monthly_co2 = (
        dfc.groupby(["year", "month"], as_index=False)["CO2_mol_frac"]
        .mean()
        .rename(columns={"CO2_mol_frac": "CO2_monthly_mean"})
    )
    # dft = _filter_year_range(temperature_data, start_year, end_year)[["year", "month", "tempanomaly_K"]]
    dft = _filter_year_range(temperature_data, start_year, end_year).copy()
    if "tempanomaly_K" not in dft.columns and "temp_anomaly_K" in dft.columns:
        dft = dft.rename(columns={"temp_anomaly_K": "tempanomaly_K"})
    dft = dft[["year", "month", "tempanomaly_K"]]

    merged = pd.merge(monthly_co2, dft, on=["year", "month"], how="inner")
    if merged.empty:
        return math.nan

    x = merged["CO2_monthly_mean"].to_numpy(dtype=float)
    y = merged["tempanomaly_K"].to_numpy(dtype=float)

    x_mean = float(np.mean(x))
    y_mean = float(np.mean(y))

    num = float(np.sum((x - x_mean) * (y - y_mean)))
    den = float(np.sqrt(np.sum((x - x_mean) ** 2) * np.sum((y - y_mean) ** 2)))
    return float(num / den) if den != 0 else math.nan

# This function is for COMP6730 only!
# No need to attempt if you are a COMP1730 student
def plot_data(co2_data, temperature_data):
    pass


```

@tab 含有最后一题代码

```python
### COMP1730/6730 project assignment
import math
import numpy as np
import pandas as pd
"""
ANU ID: u8338485
NAME: Chengze Xin
I declare that this submission is my own work
https://www.anu.edu.au/students/academic-skills/academic-integrity
"""



def _is_leap(year):
    """Return True if yeaar is a leap year"""
    return (year % 400 == 0) or (year % 4 == 0 and year % 100 != 0)

def _days_in_month(year, month):
    """Days in month for given year (handles leap years)."""
    assert 1 <= month <= 12
    month_lengths = [31, 29 if _is_leap(year) else 28, 31, 30, 31, 30,
                     31, 31, 30, 31, 30, 31]
    return month_lengths[month - 1]

def _decimal_date(year, month, day):
    month_lengths = [31, 29 if _is_leap(year) else 28, 31, 30, 31, 30,
                     31, 31, 30, 31, 30, 31]
    days_before = sum(month_lengths[:month - 1]) + (day - 1)
    total_days = 366 if _is_leap(year) else 365
    return year + days_before / total_days

def _filter_year_range(df, start_year, end_year):
    return df[(df["year"] >= start_year) & (df["year"] <= end_year)].copy()

def load_co2_data(filename):
    df = pd.read_csv(
        filename,
        comment = "#",
        header = None,
        names = ["year", "month", "day", "decimal_date", "CO2_mol_frac"]
    )
    df = df.astype({
        "year": int,
        "month": int,
        "day": int,
        "decimal_date": float,
        "CO2_mol_frac": float
    })
    return df

def calculate_basic_statistics(co2_data, start_year, end_year):
    df = _filter_year_range(co2_data, start_year, end_year)
    x = df["CO2_mol_frac"].to_numpy()
    count = float(x.size)
    mean = float(np.mean(x))
    std = float(np.std(x, ddof=1))
    xmin = float(np.min(x))
    xmax = float(np.max(x))
    return [mean, std, xmin, xmax, count]

def to_decimal_date(year, month_of_year, day_of_month):
    return _decimal_date(year, month_of_year, day_of_month)

def estimate_linear_trend(co2_data, start_year, end_year):
    df = _filter_year_range(co2_data, start_year, end_year)
    t = df["decimal_date"].to_numpy(dtype = float)
    x = df["CO2_mol_frac"].to_numpy(dtype = float)


    t_mean = float(np.mean(t))
    x_mean = float(np.mean(x))


    num = float(np.sum((t - t_mean) * (x - x_mean)))
    den = float(np.sum((t - t_mean) ** 2))
    slope = num / den if den != 0 else float("nan")
    intercept = x_mean - slope * t_mean
    return [float(slope), float(intercept)]

def extract_seasonal_component(co2_data, start_year, end_year):
    df = _filter_year_range(co2_data, start_year, end_year)
    slope, intercept = estimate_linear_trend(co2_data, start_year, end_year)
    residual = df["CO2_mol_frac"] - (slope * df["decimal_date"] + intercept)
    df_local = df.copy()
    df_local["residual"] = residual
    

    month_means = []
    for m in range(1, 13):
        m_vals = df_local.loc[df_local["month"] == m, "residual"].to_numpy()
        if m_vals.size == 0:
            month_means.append(math.nan)
        else:
            month_means.append(float(np.mean(m_vals)))
    return month_means

def predict_co2_future_linear(co2_data, start_year, end_year, target_year, target_month, target_day):
    slope, intercept = estimate_linear_trend(co2_data, start_year, end_year)
    t = to_decimal_date(target_year, target_month, target_day)
    return float(slope * t + intercept)

def predict_co2_future_linear_and_seasonal(co2_data, start_year, end_year, target_year, target_month, target_day):
    base = predict_co2_future_linear(co2_data, start_year, end_year, target_year, target_month, target_day)
    seasonal = extract_seasonal_component(co2_data, start_year, end_year)
    month_idx = target_month
    seasonal_adj = seasonal[month_idx] if not math.isnan(seasonal[month_idx]) else 0.0
    return float(base + seasonal_adj)

def load_temperature_data(filename):
    df = pd.read_csv(
        filename,
        delim_whitespace = True,
        header = None,
        usecols = [0, 1, 2],
        names = ["year", "month", "tempanomaly_K"],
        engine = "python"
    )
    if "temp_anomaly_K" in df.columns and "tempanomaly_K" not in df.columns:
        df = df.rename(columns={"temp_anomaly_K": "tempanomaly_K"})
    df = df.astype({"year": int, "month": int, "tempanomaly_K": float})
    return df

def compute_correlation_co2_temperature(co2_data, temperature_data, start_year, end_year):
    dfc = _filter_year_range(co2_data, start_year, end_year)
    monthly_co2 = (
        dfc.groupby(["year", "month"], as_index=False)["CO2_mol_frac"]
        .mean()
        .rename(columns={"CO2_mol_frac": "CO2_monthly_mean"})
    )
    # dft = _filter_year_range(temperature_data, start_year, end_year)[["year", "month", "tempanomaly_K"]]
    dft = _filter_year_range(temperature_data, start_year, end_year).copy()
    if "tempanomaly_K" not in dft.columns and "temp_anomaly_K" in dft.columns:
        dft = dft.rename(columns={"temp_anomaly_K": "tempanomaly_K"})
    dft = dft[["year", "month", "tempanomaly_K"]]

    merged = pd.merge(monthly_co2, dft, on=["year", "month"], how="inner")
    if merged.empty:
        return math.nan

    x = merged["CO2_monthly_mean"].to_numpy(dtype=float)
    y = merged["tempanomaly_K"].to_numpy(dtype=float)

    x_mean = float(np.mean(x))
    y_mean = float(np.mean(y))

    num = float(np.sum((x - x_mean) * (y - y_mean)))
    den = float(np.sqrt(np.sum((x - x_mean) ** 2) * np.sum((y - y_mean) ** 2)))
    return float(num / den) if den != 0 else math.nan

# This function is for COMP6730 only!
# No need to attempt if you are a COMP1730 student
def plot_data(co2_data, temperature_data):
    monthly_co2 = (
        co2_data.groupby(["year", "month"], as_index=False)["CO2_mol_frac"]
        .mean()
        .rename(columns={"CO2_mol_frac": "CO2_monthly_mean"})
    )
    monthly_co2["time"] = monthly_co2["year"] + (monthly_co2["month"] - 1) / 12.0
    temp = temperature_data.copy()
    if "tempanomaly_K" not in temp.columns and "temp_anomaly_K" in temp.columns:
        temp = temp.rename(columns={"temp_anomaly_K": "tempanomaly_K"})
    temp["time"] = temp["year"] + (temp["month"] - 1) / 12.0

    tmin = max(monthly_co2["time"].min(), temp["time"].min())
    tmax = min(monthly_co2["time"].max(), temp["time"].max())

    co2_ov = monthly_co2[(monthly_co2["time"] >= tmin) & (monthly_co2["time"] <= tmax)]
    temp_ov = temp[(temp["time"] >= tmin) & (temp["time"] <= tmax)]

    import matplotlib.pyplot as plt

    plt.figure()
    plt.plot(co2_ov["time"].to_numpy(), co2_ov["CO2_monthly_mean"].to_numpy())
    plt.xlabel("Time (decimal years)")
    plt.ylabel("Monthly mean CO2 (ppm)")
    plt.title("Monthly mean CO2 over time (overlapping period)")
    plt.tight_layout()

    plt.figure()
    plt.plot(temp_ov["time"].to_numpy(), temp_ov["tempanomaly_K"].to_numpy())
    plt.xlabel("Time (decimal years)")
    plt.ylabel("Temperature anomaly (K)")
    plt.title("Global land+ocean temperature anomaly over time (overlapping period)")
    plt.tight_layout()
```

@tab Solution

```python
### COMP1730/6730 project assignment
import math
import numpy as np
import pandas as pd
"""
ANU ID: u8338485
NAME: Chengze Xin
I declare that this submission is my own work
https://www.anu.edu.au/students/academic-skills/academic-integrity
"""



def _is_leap(year):
    """Return True if yeaar is a leap year"""
    return (year % 400 == 0) or (year % 4 == 0 and year % 100 != 0)

def _days_in_month(year, month):
    """Days in month for given year (handles leap years)."""
    assert 1 <= month <= 12
    month_lengths = [31, 29 if _is_leap(year) else 28, 31, 30, 31, 30,
                     31, 31, 30, 31, 30, 31]
    return month_lengths[month - 1]

def _decimal_date(year, month, day):
    month_lengths = [31, 29 if _is_leap(year) else 28, 31, 30, 31, 30,
                     31, 31, 30, 31, 30, 31]
    days_before = sum(month_lengths[:month - 1]) + (day - 1)
    total_days = 366 if _is_leap(year) else 365
    return year + days_before / total_days

def _filter_year_range(df, start_year, end_year):
    return df[(df["year"] >= start_year) & (df["year"] <= end_year)].copy()

def load_co2_data(filename):
    df = pd.read_csv(
        filename,
        comment = "#",
        header = None,
        names = ["year", "month", "day", "decimal_date", "CO2_mol_frac"]
    )
    df = df.astype({
        "year": int,
        "month": int,
        "day": int,
        "decimal_date": float,
        "CO2_mol_frac": float
    })
    return df

def calculate_basic_statistics(co2_data, start_year, end_year):
    df = _filter_year_range(co2_data, start_year, end_year)
    x = df["CO2_mol_frac"].to_numpy()
    count = float(x.size)
    mean = float(np.mean(x))
    std = float(np.std(x, ddof=1))
    xmin = float(np.min(x))
    xmax = float(np.max(x))
    return [mean, std, xmin, xmax, count]

def to_decimal_date(year, month_of_year, day_of_month):
    return _decimal_date(year, month_of_year, day_of_month)

def estimate_linear_trend(co2_data, start_year, end_year):
    df = _filter_year_range(co2_data, start_year, end_year)
    t = df["decimal_date"].to_numpy(dtype = float)
    x = df["CO2_mol_frac"].to_numpy(dtype = float)


    t_mean = float(np.mean(t))
    x_mean = float(np.mean(x))


    num = float(np.sum((t - t_mean) * (x - x_mean)))
    den = float(np.sum((t - t_mean) ** 2))
    slope = num / den if den != 0 else float("nan")
    intercept = x_mean - slope * t_mean
    return [float(slope), float(intercept)]

def extract_seasonal_component(co2_data, start_year, end_year):
    df = _filter_year_range(co2_data, start_year, end_year)
    slope, intercept = estimate_linear_trend(co2_data, start_year, end_year)
    residual = df["CO2_mol_frac"] - (slope * df["decimal_date"] + intercept)
    df_local = df.copy()
    df_local["residual"] = residual
    

    month_means = []
    for m in range(1, 13):
        m_vals = df_local.loc[df_local["month"] == m, "residual"].to_numpy()
        if m_vals.size == 0:
            month_means.append(math.nan)
        else:
            month_means.append(float(np.mean(m_vals)))
    return month_means

def predict_co2_future_linear(co2_data, start_year, end_year, target_year, target_month, target_day):
    slope, intercept = estimate_linear_trend(co2_data, start_year, end_year)
    t = to_decimal_date(target_year, target_month, target_day)
    return float(slope * t + intercept)

def predict_co2_future_linear_and_seasonal(co2_data, start_year, end_year, target_year, target_month, target_day):
    base = predict_co2_future_linear(co2_data, start_year, end_year, target_year, target_month, target_day)
    seasonal = extract_seasonal_component(co2_data, start_year, end_year)
    month_idx = target_month - 1
    s = seasonal[month_idx]
    # seasonal_adj = seasonal[month_idx] if not math.isnan(seasonal[month_idx]) else 0.0
    # return float(base + seasonal_adj)
    if math.isnan(s):
        return math.nan
    return float(base + s)

def load_temperature_data(filename):
    df = pd.read_csv(
        filename,
        delim_whitespace = True,
        header = None,
        usecols = [0, 1, 2],
        names = ["year", "month", "tempanomaly_K"],
        engine = "python"
    )
    if "temp_anomaly_K" in df.columns and "tempanomaly_K" not in df.columns:
        df = df.rename(columns={"temp_anomaly_K": "tempanomaly_K"})
    df = df.astype({"year": int, "month": int, "tempanomaly_K": float})
    return df

def compute_correlation_co2_temperature(co2_data, temperature_data, start_year, end_year):
    dfc = _filter_year_range(co2_data, start_year, end_year)
    monthly_co2 = (
        dfc.groupby(["year", "month"], as_index=False)["CO2_mol_frac"]
        .mean()
        .rename(columns={"CO2_mol_frac": "CO2_monthly_mean"})
    )
    # dft = _filter_year_range(temperature_data, start_year, end_year)[["year", "month", "tempanomaly_K"]]
    dft = _filter_year_range(temperature_data, start_year, end_year).copy()
    if "tempanomaly_K" not in dft.columns and "temp_anomaly_K" in dft.columns:
        dft = dft.rename(columns={"temp_anomaly_K": "tempanomaly_K"})
    dft = dft[["year", "month", "tempanomaly_K"]]

    merged = pd.merge(monthly_co2, dft, on=["year", "month"], how="inner")
    if merged.empty:
        return math.nan

    x = merged["CO2_monthly_mean"].to_numpy(dtype=float)
    y = merged["tempanomaly_K"].to_numpy(dtype=float)

    x_mean = float(np.mean(x))
    y_mean = float(np.mean(y))

    num = float(np.sum((x - x_mean) * (y - y_mean)))
    den = float(np.sqrt(np.sum((x - x_mean) ** 2) * np.sum((y - y_mean) ** 2)))
    return float(num / den) if den != 0 else math.nan

# This function is for COMP6730 only!
# No need to attempt if you are a COMP1730 student
def plot_data(co2_data, temperature_data):
    monthly_co2 = (
        co2_data.groupby(["year", "month"], as_index=False)["CO2_mol_frac"]
        .mean()
        .rename(columns={"CO2_mol_frac": "CO2_monthly_mean"})
    )
    monthly_co2["time"] = monthly_co2["year"] + (monthly_co2["month"] - 1) / 12.0
    temp = temperature_data.copy()
    if "tempanomaly_K" not in temp.columns and "temp_anomaly_K" in temp.columns:
        temp = temp.rename(columns={"temp_anomaly_K": "tempanomaly_K"})
    temp["time"] = temp["year"] + (temp["month"] - 1) / 12.0

    tmin = max(monthly_co2["time"].min(), temp["time"].min())
    tmax = min(monthly_co2["time"].max(), temp["time"].max())

    co2_ov = monthly_co2[(monthly_co2["time"] >= tmin) & (monthly_co2["time"] <= tmax)]
    temp_ov = temp[(temp["time"] >= tmin) & (temp["time"] <= tmax)]

    import matplotlib.pyplot as plt

    plt.figure()
    plt.plot(co2_ov["time"].to_numpy(), co2_ov["CO2_monthly_mean"].to_numpy())
    plt.xlabel("Time (decimal years)")
    plt.ylabel("Monthly mean CO2 (ppm)")
    plt.title("Monthly mean CO2 over time (overlapping period)")
    plt.tight_layout()

    plt.figure()
    plt.plot(temp_ov["time"].to_numpy(), temp_ov["tempanomaly_K"].to_numpy())
    plt.xlabel("Time (decimal years)")
    plt.ylabel("Temperature anomaly (K)")
    plt.title("Global land+ocean temperature anomaly over time (overlapping period)")
    plt.tight_layout()
```

@tab 完整代码

```python
### COMP1730/6730 project assignment
import math
import numpy as np
import pandas as pd

"""
ANU ID: u8338485
NAME: Chengze Xin
I declare that this submission is my own work
https://www.anu.edu.au/students/academic-skills/academic-integrity
"""


def _is_leap(year):
    return (year % 400 == 0) or (year % 4 == 0 and year % 100 != 0)


def _days_in_month(year, month):
    # 确保月份在 1~12 之间
    assert 1 <= month <= 12

    # 先判断是否是闰年
    if _is_leap(year):
        feb_days = 29
    else:
        feb_days = 28

    # 每个月对应的天数（把 2 月单独放刚才计算的值）
    month_lengths = [31, feb_days, 31, 30, 31, 30,
                     31, 31, 30, 31, 30, 31]
    # 返回对应月份的天数
    return month_lengths[month - 1]


def _decimal_date(year, month, day):
    # 判断是否是闰年
    if _is_leap(year):
        feb_days = 29
        total_days = 366
    else:
        feb_days = 28
        total_days = 365

    month_lengths = [31, feb_days, 31, 30, 31, 30,
                     31, 31, 30, 31, 30, 31]
    days_before = sum(month_lengths[:month - 1]) + (day - 1)
    return year + days_before / total_days


def _filter_year_range(df, start_year, end_year):
    # 条件一：年份大于等于 start_year
    condition_start = df["year"] >= start_year

    # 条件二：年份小于等于 end_year
    condition_end = df["year"] <= end_year

    # 合并条件（逻辑与）
    condition = condition_start & condition_end

    # 筛选满足条件的行，并返回副本（避免 SettingWithCopyWarning）
    filtered_df = df[condition].copy()

    return filtered_df

def load_co2_data(filename):
    df = pd.read_csv(
        filename,
        comment="#",
        header=None,
        names=["year", "month", "day", "decimal_date", "CO2_mol_frac"]
    )
    df = df.astype({
        "year": int,
        "month": int,
        "day": int,
        "decimal_date": float,
        "CO2_mol_frac": float
    })
    return df


def calculate_basic_statistics(co2_data, start_year, end_year):
    df = _filter_year_range(co2_data, start_year, end_year)
    x = df["CO2_mol_frac"].to_numpy()
    count = float(x.size)
    mean = float(np.mean(x))
    std = float(np.std(x, ddof=1))
    xmin = float(np.min(x))
    xmax = float(np.max(x))
    return [mean, std, xmin, xmax, count]


def to_decimal_date(year, month_of_year, day_of_month):
    return _decimal_date(year, month_of_year, day_of_month)


def estimate_linear_trend(co2_data, start_year, end_year):
    df = _filter_year_range(co2_data, start_year, end_year)
    t = df["decimal_date"].to_numpy(dtype=float)
    x = df["CO2_mol_frac"].to_numpy(dtype=float)

    t_mean = float(np.mean(t))
    x_mean = float(np.mean(x))

    num = float(np.sum((t - t_mean) * (x - x_mean)))
    den = float(np.sum((t - t_mean) ** 2))
    if den != 0:
        slope = num / den
    else:
        slope = float("nan")
    intercept = x_mean - slope * t_mean
    return [float(slope), float(intercept)]


def extract_seasonal_component(co2_data, start_year, end_year):
    df = _filter_year_range(co2_data, start_year, end_year)
    slope, intercept = estimate_linear_trend(co2_data, start_year, end_year)
    residual = df["CO2_mol_frac"] - (slope * df["decimal_date"] + intercept)
    df_local = df.copy()
    df_local["residual"] = residual

    month_means = []
    for m in range(1, 13):
        m_vals = df_local.loc[df_local["month"] == m, "residual"].to_numpy()
        if m_vals.size == 0:
            month_means.append(math.nan)
        else:
            month_means.append(float(np.mean(m_vals)))
    return month_means


def predict_co2_future_linear(co2_data, start_year, end_year, target_year, target_month, target_day):
    slope, intercept = estimate_linear_trend(co2_data, start_year, end_year)
    t = to_decimal_date(target_year, target_month, target_day)
    return float(slope * t + intercept)


def predict_co2_future_linear_and_seasonal(co2_data, start_year, end_year, target_year, target_month, target_day):
    base = predict_co2_future_linear(co2_data, start_year, end_year, target_year, target_month, target_day)
    seasonal = extract_seasonal_component(co2_data, start_year, end_year)
    month_idx = target_month - 1
    s = seasonal[month_idx]
    # seasonal_adj = seasonal[month_idx] if not math.isnan(seasonal[month_idx]) else 0.0
    # return float(base + seasonal_adj)
    if math.isnan(s):
        return math.nan
    return float(base + s)


def load_temperature_data(filename):
    df = pd.read_csv(
        filename,
        delim_whitespace=True,
        header=None,
        usecols=[0, 1, 2],
        names=["year", "month", "tempanomaly_K"],
        engine="python"
    )
    if "temp_anomaly_K" in df.columns and "tempanomaly_K" not in df.columns:
        df = df.rename(columns={"temp_anomaly_K": "tempanomaly_K"})
    df = df.astype({"year": int, "month": int, "tempanomaly_K": float})
    return df


def compute_correlation_co2_temperature(co2_data, temperature_data, start_year, end_year):
    dfc = _filter_year_range(co2_data, start_year, end_year)
    monthly_co2 = (
        dfc.groupby(["year", "month"], as_index=False)["CO2_mol_frac"]
        .mean()
        .rename(columns={"CO2_mol_frac": "CO2_monthly_mean"})
    )
    # dft = _filter_year_range(temperature_data, start_year, end_year)[["year", "month", "tempanomaly_K"]]
    dft = _filter_year_range(temperature_data, start_year, end_year).copy()
    if "tempanomaly_K" not in dft.columns and "temp_anomaly_K" in dft.columns:
        dft = dft.rename(columns={"temp_anomaly_K": "tempanomaly_K"})
    dft = dft[["year", "month", "tempanomaly_K"]]

    merged = pd.merge(monthly_co2, dft, on=["year", "month"], how="inner")
    if merged.empty:
        return math.nan

    x = merged["CO2_monthly_mean"].to_numpy(dtype=float)
    y = merged["tempanomaly_K"].to_numpy(dtype=float)

    x_mean = float(np.mean(x))
    y_mean = float(np.mean(y))

    num = float(np.sum((x - x_mean) * (y - y_mean)))
    den = float(np.sqrt(np.sum((x - x_mean) ** 2) * np.sum((y - y_mean) ** 2)))
    if den != 0:
        return float(num / den)
    else:
        return math.nan


# This function is for COMP6730 only!
# No need to attempt if you are a COMP1730 student
def plot_data(co2_data, temperature_data):
    pass
    # monthly_co2 = (
    #     co2_data.groupby(["year", "month"], as_index=False)["CO2_mol_frac"]
    #     .mean()
    #     .rename(columns={"CO2_mol_frac": "CO2_monthly_mean"})
    # )
    # monthly_co2["time"] = monthly_co2["year"] + (monthly_co2["month"] - 1) / 12.0
    # temp = temperature_data.copy()
    # if "tempanomaly_K" not in temp.columns and "temp_anomaly_K" in temp.columns:
    #     temp = temp.rename(columns={"temp_anomaly_K": "tempanomaly_K"})
    # temp["time"] = temp["year"] + (temp["month"] - 1) / 12.0

    # tmin = max(monthly_co2["time"].min(), temp["time"].min())
    # tmax = min(monthly_co2["time"].max(), temp["time"].max())

    # co2_ov = monthly_co2[(monthly_co2["time"] >= tmin) & (monthly_co2["time"] <= tmax)]
    # temp_ov = temp[(temp["time"] >= tmin) & (temp["time"] <= tmax)]

    # import matplotlib.pyplot as plt

    # plt.figure()
    # plt.plot(co2_ov["time"].to_numpy(), co2_ov["CO2_monthly_mean"].to_numpy())
    # plt.xlabel("Time (decimal years)")
    # plt.ylabel("Monthly mean CO2 (ppm)")
    # plt.title("Monthly mean CO2 over time (overlapping period)")
    # plt.tight_layout()

    # plt.figure()
    # plt.plot(temp_ov["time"].to_numpy(), temp_ov["tempanomaly_K"].to_numpy())
    # plt.xlabel("Time (decimal years)")
    # plt.ylabel("Temperature anomaly (K)")
    # plt.title("Global land+ocean temperature anomaly over time (overlapping period)")
    # plt.tight_layout()



```



:::

::: details

![](https://blog.images.bornforthis.cn/docs-images/sha256/b5/b5b2b4c0c28b976747938e8a96ddcd230788fba3d283362c6081a7493b387fac.png)

![](https://blog.images.bornforthis.cn/docs-images/sha256/67/67de7ec2f9cac881b253d3ed24adf1968cf8d7c97d34499e90384008f31bcdcc.png)

:::

## 5. Questions for individual report

Apart from writing code, you will also need to write an individual report, which will contribute certain marks (see Marking criteria). Here you need to select a piece of code in your assignment solution. The piece of code should be of reasonable size and complexity. If your code has an appropriate level of functional decomposition, then a single function is likely to be a suitable choice, but it can also be a part of a function. It should not be something trivial (like a single line, or a simple loop).

Then you need to answer three questions below at an appropriate level of details. There is no hard limit on how short or how long your answer can be, but an answer that is short, concise, and clear is always better than one that is long and confusing, if both of them convey the same essential information. As a rough guideline, an appropriate answer may be about 100 - 300 words for each question.

### 5.1 Question 1

What is the selected piece of code and what does it do?

(Make sure to include the purpose of the code, like assumptions and restrictions.)

---

我选取的代码是 `compute_correlation_co2_temperature(co2_data, temperature_data, start_year, end_year)`。

它用于在给定年份区间内，计算**大气 CO₂ 月均浓度**与**全球陆海表面温度距平**之间的**皮尔逊相关系数**。由于温度数据是**按月**，而 CO₂ 是**按日**，函数首先将 CO₂ 日数据聚合成**月均值**，再按 `(year, month)` 与温度数据对齐，只在两者**同时存在**的月份上计算相关。

**前提与限制：**

- 输入为 pandas DataFrame。CO₂ 列包含 `year, month, day, decimal_date, CO2_mol_frac`；温度列第三列名可能是 `tempanomaly_K` 或 `temp_anomaly_K`，函数会统一为前者。
- 只使用 `[start_year, end_year]` 年份内的**重叠月份**；若无重叠或某变量方差为 0，则返回 `math.nan`。
- 不修改原数据，不做缺失填补（避免引入偏差）。



### 5.2 Question 2

How does it work?

(Make sure to provide a high-level description of the algorithmic idea, not a line-by-line description of each statement.)

---

1. **按年限过滤**：分别筛选 CO₂ 与温度数据到 `[start_year, end_year]`。

2. **月度聚合**：将 CO₂ 日数据按 `year, month` 分组取均值，得到月均 CO₂。

3. **列名规范化**：将温度列名标准化为 `tempanomaly_K`，提升鲁棒性。

4. **对齐时序**：以 `(year, month)` 做**内连接**，仅保留两侧均有数据的月份，避免错误对齐与虚假相关。

5. **边界检查**：若合并结果为空，直接返回 `math.nan`。

6. **计算相关**：用 NumPy 显式实现皮尔逊公式

    ```python
    $r=\frac{\sum (x-\bar x)(y-\bar y)}{\sqrt{\sum (x-\bar x)^2\,\sum (y-\bar y)^2}}$
    ```
    
    若分母为 0（无波动），返回 `math.nan`。

整体思路强调**一致粒度（月）**、**只用重叠时间窗**与**明确的统计公式**，让结果可解释、可复现。



### 5.3 Question 3

What other possible ways did you consider to implement this functionality, and why did you choose the way you did?

(Make sure to provide a high-level description of alternative ideas.)

---

**可替代思路：**

- 直接用 `pandas.Series.corr()` 或 `scipy.stats.pearsonr`（更简洁，并可得 p 值）。
- 建立 `PeriodIndex`/`DatetimeIndex` 后 `resample('MS')` 做统一重采样，再 `.corr()`。
- 对缺失月份做**插值/气候态填补**以扩大重叠样本量。
- 先**去趋势**或计算**偏相关**，以弱化共同长期趋势的影响；或改用 **Spearman** 评估秩相关。

**选择当前实现的原因：**

- **透明可审计**：显式写出公式与每一步数据处理，易于教学与评分核查。
- **符合题目精神**：只用观测重合月份、不做隐式填补，避免人为放大相关。
- **鲁棒与简洁**：列名统一 + 内连接，能稳健应对真实文件头部差异和缺失。
- **依赖少、可控性强**：不引入额外库与复杂重采样，结果**确定**且**可复现**。

因此，该实现在线性相关的度量目标下，兼顾了准确性、可解释性与工程稳健性。



## 6. Referencing

In the course of solving the assignment tasks, you will probably want to make use of several sources of knowledge available: the course materials, text books, [on-line python documentation](http://docs.python.org/), and other help that you can find on-line. This is all allowed, **except for the use of AI tools such as chatGPT or GitHub co-pilot, as stated in the website**. However, keep in mind that:

- If you find a piece of code, or an algorithmic idea that you implement, somewhere on-line, or in a book or other material, you must reference it. Include the URL where you found it, the title of the book, or whatever is needed for us to find the source, and explain how you have used it in an appropriate place in your code (docstring or comment).
- Although you can often find helpful information in on-line forums (like stackexchange, for example), **you MUST not use them to ask questions that are specific to the assignment**. Asking someone else to solve an assignment problem on behalf of you, whether it is in a public forum or in private, is a form of plagiarism, and if we find any indication that this may have occurred, we will be forced to investigate the case.
- If you have any doubt about if a question is ok to ask or not, you can always post your question to the Ed Discussions forum. We will answer it at a level of detail that is appropriate.



## 7. Marking criteria

::: warning

You must attend the *viva* interview about your project assignment during week 11 in your lab!  Absence from this viva without convener's prior approval will result in ZERO mark of your project assignment.

:::

略～

```python
# -----------------------------
# 标准库 / 第三方库导入
# -----------------------------
import math                  # 提供数学函数与常量（如 math.nan、math.isnan、sqrt 等）
import numpy as np           # 数值计算库，用于向量化运算和统计量（均值、标准差等）
import pandas as pd          # 数据分析库，用于读取/处理表格数据（CSV/TXT）


# -----------------------------
# 内部工具函数（不直接对外使用）
# -----------------------------

def _is_leap(year):
    """
    功能：判断给定年份是否为闰年。
    规则：四年一闰，百年不闰，四百年再闰。
    参数：
        year (int): 年份
    返回：
        bool: 闰年返回 True，否则 False
    """
    # 先判断是否能被 400 整除（能则必为闰年）
    # 或者能被 4 整除但不能被 100 整除（则为闰年）
    return (year % 400 == 0) or (year % 4 == 0 and year % 100 != 0)


def _days_in_month(year, month):
    """
    功能：返回指定年份 year、月份 month 的天数（正确处理闰年 2 月为 29 天）。
    参数：
        year (int): 年份
        month (int): 月份，1~12
    返回：
        int: 该月天数
    说明：本函数在当前实现中未被直接调用，保留作参考与潜在扩展。
    """
    assert 1 <= month <= 12                # 断言月份在有效范围内
    if _is_leap(year):                     # 判断是否闰年
        feb_days = 29                      # 闰年 2 月 29 天
    else:
        feb_days = 28                      # 平年 2 月 28 天

    # 构造每个月的天数列表（索引 0 -> 1 月，依此类推）
    month_lengths = [31, feb_days, 31, 30, 31, 30,
                     31, 31, 30, 31, 30, 31]
    # 通过下标取出对应月份的天数（month 从 1 开始，因此减一）
    return month_lengths[month - 1]


def _decimal_date(year, month, day):
    """
    功能：将 (year, month, day) 转换为十进制年份（decimal year）。
    十进制年的定义：year + (当年已过去的天数) / (该年的总天数)。
    例如：1 月 1 日对应小数部分 0；2 月 10 日则是把 1 月全月天数 + 2 月已过天数-1 累加，再除以当年总天数。
    参数：
        year (int): 年份
        month (int): 月份
        day (int): 日期
    返回：
        float: 十进制年份
    """
    if _is_leap(year):         # 闰年
        feb_days = 29
        total_days = 366       # 闰年总天数 366
    else:                      # 平年
        feb_days = 28
        total_days = 365       # 平年总天数 365

    # 构造各月天数列表（考虑闰年 2 月）
    month_lengths = [31, feb_days, 31, 30, 31, 30,
                     31, 31, 30, 31, 30, 31]
    # 计算在本日期之前已经过去的天数：
    # 先把前面所有整月的天数求和，再加上当月已过天数 (day - 1)
    days_before = sum(month_lengths[:month - 1]) + (day - 1)
    # 十进制年 = 年份 + (已过天数 / 当年总天数)
    return year + days_before / total_days


def _filter_year_range(df, start_year, end_year):
    """
    功能：对 DataFrame 进行年份范围筛选，保留 start_year <= year <= end_year 的行。
    参数：
        df (pd.DataFrame): 含有 'year' 列的数据表
        start_year (int): 起始年份（含）
        end_year (int): 结束年份（含）
    返回：
        pd.DataFrame: 筛选后的副本（copy），避免修改原表
    """
    condition_start = df["year"] >= start_year      # 构造起始年份条件（逐行布尔判断）
    condition_end = df["year"] <= end_year          # 构造结束年份条件（逐行布尔判断）
    condition = condition_start & condition_end     # 两个条件同时满足（与运算）
    filtered_df = df[condition].copy()              # 按条件过滤并 copy，避免外部副作用
    return filtered_df                              # 返回过滤后的数据表


# -----------------------------
# 题目函数实现
# -----------------------------

def load_co2_data(filename):
    """
    功能（Q0）：加载 Mauna Loa 站点的日均 CO2 数据（CSV）。
    文件格式：无表头，每行 5 列：year, month, day, decimal_date, CO2_mol_frac
    特性：以 '#' 开头的行是注释，需忽略。
    参数：
        filename (str): CSV 文件路径
    返回：
        pd.DataFrame: 统一列名并做好类型转换的数据表
    """
    df = pd.read_csv(                       # 使用 pandas 读 CSV
        filename,                           # 文件路径
        comment="#",                        # 忽略以 # 开头的注释行
        header=None,                        # 源文件没有表头
        names=["year", "month", "day", "decimal_date", "CO2_mol_frac"]  # 指定列名
    )
    df = df.astype({                        # 统一各列数据类型，保证后续计算稳定
        "year": int,                        # 年份整型
        "month": int,                       # 月份整型
        "day": int,                         # 日期整型
        "decimal_date": float,              # 十进制年份浮点
        "CO2_mol_frac": float               # CO2 浓度（ppm）浮点
    })
    return df                               # 返回 DataFrame


def calculate_basic_statistics(co2_data, start_year, end_year):
    """
    功能（Q1a）：在给定年份区间内，计算 CO2 的基本统计量。
    返回顺序：[mean, std, min, max, count]
      - mean：均值
      - std：样本标准差（ddof=1），以匹配题目示例/测试
      - min：最小值
      - max：最大值
      - count：样本数
    参数：
        co2_data (pd.DataFrame): load_co2_data 返回的数据表
        start_year (int): 起始年份（含）
        end_year (int): 结束年份（含）
    返回：
        list[float]: [均值, 样本标准差, 最小值, 最大值, 个数]
    """
    df = _filter_year_range(co2_data, start_year, end_year)   # 先按年份过滤出目标区间
    x = df["CO2_mol_frac"].to_numpy()                         # 取 CO2 列转为 numpy 数组
    count = float(x.size)                                     # 元素个数（转 float 以匹配判题）
    mean = float(np.mean(x))                                  # 均值
    std = float(np.std(x, ddof=1))                            # 样本标准差（ddof=1）
    xmin = float(np.min(x))                                   # 最小值
    xmax = float(np.max(x))                                   # 最大值
    return [mean, std, xmin, xmax, count]                     # 按题目顺序返回列表


def to_decimal_date(year, month_of_year, day_of_month):
    """
    功能（Q1b）：将年月日转为十进制年份。
    说明：内部调用 _decimal_date，自动按闰/平年处理每年的总天数。
    参数：
        year (int): 年
        month_of_year (int): 月（1~12）
        day_of_month (int): 日（1~当月天数）
    返回：
        float: 十进制年
    """
    return _decimal_date(year, month_of_year, day_of_month)   # 直接调用内部实现


def estimate_linear_trend(co2_data, start_year, end_year):
    """
    功能（Q2）：估计给定年份区间内的线性趋势 y = slope * t + intercept
      - 自变量 t 为 decimal_date（十进制年）
      - 因变量 y 为 CO2_mol_frac（ppm）
      - slope（斜率）单位：ppm / 年
      - intercept（截距）单位：ppm
    参数：
        co2_data (pd.DataFrame): CO2 数据
        start_year (int): 起始年（含）
        end_year (int): 结束年（含）
    返回：
        list[float]: [slope, intercept]
    """
    df = _filter_year_range(co2_data, start_year, end_year)    # 年份过滤
    t = df["decimal_date"].to_numpy(dtype=float)               # 取出十进制年为 numpy 数组
    x = df["CO2_mol_frac"].to_numpy(dtype=float)               # 取出 CO2 为 numpy 数组

    t_mean = float(np.mean(t))                                 # t 的均值
    x_mean = float(np.mean(x))                                 # x 的均值

    # 公式：slope = Σ (t - t̄)(x - x̄) / Σ (t - t̄)^2
    num = float(np.sum((t - t_mean) * (x - x_mean)))           # 分子：协方差（未除 N）
    den = float(np.sum((t - t_mean) ** 2))                     # 分母：t 的方差（未除 N）

    if den != 0:                                               # 避免除以 0
        slope = num / den                                      # 斜率
    else:
        slope = float("nan")                                   # 无法估计时置为 NaN
    intercept = x_mean - slope * t_mean                        # 截距：x̄ - slope * t̄
    return [float(slope), float(intercept)]                    # 返回 [斜率, 截距]


def extract_seasonal_component(co2_data, start_year, end_year):
    """
    功能（Q3）：提取季节项（按月的平均“去趋势残差”）。
    步骤：
      1. 用 Q2 的线性回归拟合趋势：y_hat = slope * t + intercept
      2. 计算残差 r = y - y_hat
      3. 分月份聚合，取每个月残差的平均值，得到 12 个数（Jan..Dec）
      4. 若某月在该年段没有数据，返回 math.nan
    参数：
        co2_data (pd.DataFrame): CO2 数据
        start_year (int): 起始年（含）
        end_year (int): 结束年（含）
    返回：
        list[float]: 长度为 12 的列表，对应 1~12 月的季节项
    """
    df = _filter_year_range(co2_data, start_year, end_year)          # 年份过滤
    slope, intercept = estimate_linear_trend(co2_data, start_year, end_year)  # 估计线性趋势
    residual = df["CO2_mol_frac"] - (slope * df["decimal_date"] + intercept) # 残差 r = y - y_hat
    df_local = df.copy()                                             # 拷贝一份，避免修改原表
    df_local["residual"] = residual                                  # 新增一列 residual

    month_means = []                                                 # 用于存放 12 个月的平均残差
    for m in range(1, 13):                                           # 遍历 1~12 月
        # 过滤出第 m 月的残差数组
        m_vals = df_local.loc[df_local["month"] == m, "residual"].to_numpy()
        if m_vals.size == 0:                                         # 若该月没有数据
            month_means.append(math.nan)                             # 返回 NaN 表示不可得
        else:
            month_means.append(float(np.mean(m_vals)))               # 否则取均值
    return month_means                                                # 返回 12 个月的季节项


def predict_co2_future_linear(co2_data, start_year, end_year, target_year, target_month, target_day):
    """
    功能（Q4a）：仅用线性趋势（Q2）预测目标日期的 CO2。
    参数：
        co2_data (pd.DataFrame): CO2 数据
        start_year (int): 拟合趋势的起始年（含）
        end_year (int): 拟合趋势的结束年（含）
        target_year (int): 预测目标年
        target_month (int): 预测目标月
        target_day (int): 预测目标日
    返回：
        float: 预测的 CO2（ppm）
    """
    slope, intercept = estimate_linear_trend(co2_data, start_year, end_year)  # 估计线性趋势
    t = to_decimal_date(target_year, target_month, target_day)                # 目标日期转十进制年
    return float(slope * t + intercept)                                       # 套用直线方程 y = kx + b


def predict_co2_future_linear_and_seasonal(co2_data, start_year, end_year, target_year, target_month, target_day):
    """
    功能（Q4b）：用“线性趋势 + 季节项（Q3）”预测目标日期的 CO2。
    规则：
      - 若目标月份的季节项为 NaN（该年段该月无数据），则返回 math.nan（信息不足）。
    参数：
        co2_data (pd.DataFrame): CO2 数据
        start_year (int): 用于估计线性趋势与季节项的起始年（含）
        end_year (int): 用于估计线性趋势与季节项的结束年（含）
        target_year (int): 预测目标年
        target_month (int): 预测目标月
        target_day (int): 预测目标日
    返回：
        float: 预测的 CO2（ppm），若季节项缺失则返回 math.nan
    """
    base = predict_co2_future_linear(co2_data, start_year, end_year,     # Q4a：仅线性趋势的预测
                                     target_year, target_month, target_day)
    seasonal = extract_seasonal_component(co2_data, start_year, end_year) # Q3：按月季节项（12 个数）
    month_idx = target_month - 1                                          # 将 1~12 月映射为 0~11 下标
    s = seasonal[month_idx]                                               # 取出目标月份的季节项

    if math.isnan(s):                                                     # 若该月季节项不可得
        return math.nan                                                   # 依据严格判题：返回 NaN
    return float(base + s)                                                # 线性预测 + 季节调整


def load_temperature_data(filename):
    """
    功能（Q5a）：加载 NOAA 的月平均全球“海陆温度距平”文本数据（空白分隔）。
    只取前三列：year, month, temp anomaly（K）。
    注意：为了兼容测试，第三列列名统一为 'tempanomaly_K'（无下划线）。
         如果原始解析出了 'temp_anomaly_K'，则重命名为 'tempanomaly_K'。
    参数：
        filename (str): 文本文件路径
    返回：
        pd.DataFrame: 列为 ['year', 'month', 'tempanomaly_K'] 的数据表
    """
    df = pd.read_csv(                          # 读入空白分隔文本
        filename,
        delim_whitespace=True,                 # 使用空白（多个空格/制表符）作为分隔符
        header=None,                           # 文件无表头
        usecols=[0, 1, 2],                     # 只取前三列：年、月、距平
        names=["year", "month", "tempanomaly_K"],  # 直接命名为测试期望的列名
        engine="python"                        # 使用更宽松的 Python 引擎解析
    )
    # 若其他数据源把第三列解析成 'temp_anomaly_K'（带下划线），则统一改名为 'tempanomaly_K'
    if "temp_anomaly_K" in df.columns and "tempanomaly_K" not in df.columns:
        df = df.rename(columns={"temp_anomaly_K": "tempanomaly_K"})
    # 统一数据类型
    df = df.astype({"year": int, "month": int, "tempanomaly_K": float})
    return df                                  # 返回 DataFrame


def compute_correlation_co2_temperature(co2_data, temperature_data, start_year, end_year):
    """
    功能（Q5b）：计算“月均 CO2”与“月度温度距平（K）”在给定年份段的皮尔逊相关系数。
    步骤：
      1) 对 CO2 日数据按 (year, month) 聚合求均值 -> 得到月均 CO2
      2) 对温度数据按年份范围过滤，统一第三列名为 'tempanomaly_K'
      3) 以 (year, month) 做内连接，仅保留双方都有的数据月份
      4) 使用相关系数公式：
         corr = Σ (x - x̄)(y - ȳ) / sqrt( Σ (x - x̄)^2 * Σ (y - ȳ)^2 )
      5) 若无重叠月份或分母为 0，则返回 math.nan
    参数：
        co2_data (pd.DataFrame): CO2 日数据
        temperature_data (pd.DataFrame): NOAA 月度温度距平数据
        start_year (int): 起始年（含）
        end_year (int): 结束年（含）
    返回：
        float: 皮尔逊相关系数（-1 ~ 1），无数据返回 math.nan
    """
    dfc = _filter_year_range(co2_data, start_year, end_year)          # 筛选 CO2 年份段
    monthly_co2 = (                                                   # 按年、月分组求 CO2 月均值
        dfc.groupby(["year", "month"], as_index=False)["CO2_mol_frac"]
        .mean()
        .rename(columns={"CO2_mol_frac": "CO2_monthly_mean"})         # 重命名列为 CO2_monthly_mean
    )

    dft = _filter_year_range(temperature_data, start_year, end_year).copy()  # 筛选温度数据年份段
    # 统一温度列名为 'tempanomaly_K'（兼容带下划线的版本）
    if "tempanomaly_K" not in dft.columns and "temp_anomaly_K" in dft.columns:
        dft = dft.rename(columns={"temp_anomaly_K": "tempanomaly_K"})
    dft = dft[["year", "month", "tempanomaly_K"]]                    # 只保留关心的三列

    merged = pd.merge(monthly_co2, dft, on=["year", "month"], how="inner")  # 以 (year, month) 做内连接
    if merged.empty:                                                  # 若没有任何重叠月份
        return math.nan                                               # 返回 NaN

    x = merged["CO2_monthly_mean"].to_numpy(dtype=float)             # x：月均 CO2
    y = merged["tempanomaly_K"].to_numpy(dtype=float)                # y：温度距平（K）

    x_mean = float(np.mean(x))                                       # x̄
    y_mean = float(np.mean(y))                                       # ȳ

    # 分子：Σ (x - x̄)(y - ȳ)
    num = float(np.sum((x - x_mean) * (y - y_mean)))
    # 分母：sqrt( Σ (x - x̄)^2 * Σ (y - ȳ)^2 )
    den = float(np.sqrt(np.sum((x - x_mean) ** 2) * np.sum((y - y_mean) ** 2)))
    if den != 0:                                                     # 避免 0 作分母
        return float(num / den)                                      # 返回皮尔逊相关
    else:
        return math.nan                                              # 无法计算相关时返回 NaN


# -----------------------------
# Q6 仅针对 COMP6730（本函数不计分于 COMP1730）
# -----------------------------

def plot_data(co2_data, temperature_data):
    """
    功能（Q6, COMP6730 才需要）：绘图可视化。
    题目要求：只需确保函数可被调用且不报错；在本提交中留空（pass），
    以免覆盖你的评测环境或生成多余输出文件。若需要，我可以为你添加两幅
    单图窗口（非子图）的示例图（CO2 月均与温度距平各一幅），并保持不保存到磁盘。
    """
    pass  # 这里保持空实现以满足 COMP1730 要求；COMP6730 可在此处添加 matplotlib 绘图逻辑

```







::: details 公众号：AI悦创【二维码】

![](https://blog.images.bornforthis.cn/docs-images/sha256/77/77f67d48a67ec6a44a4ef1f01ffc85830eb3c121b1ece45dc5ada06e20e2f52b.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Web、Linux」，招收学员面向国内外，国外占 80%。全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](https://blog.images.bornforthis.cn/docs-images/sha256/30/3087c629da73428daa0ee050f5b31709c30f650686164b54c724b892a422c585.jpg)