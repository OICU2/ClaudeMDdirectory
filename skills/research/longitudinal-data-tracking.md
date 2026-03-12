---
name: longitudinal-data-tracking
description: >
  Designs systems to collect, organize, and compare data across multiple time periods to identify trends, changes, and patterns over time. Use when someone wants to track progress over time, asks about measuring change across multiple data points, needs to compare metrics month-over-month or year-over-year, wants to set up a system for ongoing data collection, or is trying to identify long-term trends in their data.
category: research
tags: [data-tracking, longitudinal-study, trend-analysis, time-series, research-design]
author: community
---

# Longitudinal Data Tracking

This skill designs structured systems for collecting, organizing, and analyzing data across multiple time periods so users can reliably identify trends, measure change, and draw conclusions from temporal comparisons.

## Longitudinal Tracking System Design

### 1. Define the Tracking Objective
- Identify the specific variable(s) to measure (e.g., revenue, user behavior, health metric, survey response)
- Establish what question the longitudinal data should answer
- Determine the minimum meaningful unit of change (e.g., 1%, 5 points, $100)

### 2. Establish Time Parameters
- Set the tracking interval: daily, weekly, monthly, quarterly, or annually
- Define the total tracking duration (short-term sprint vs. multi-year study)
- Identify natural breakpoints or milestones to use as comparison anchors

### 3. Design the Data Schema
- Define exact field names, data types, and units for every variable
- Include a mandatory timestamp field in a consistent format (ISO 8601 recommended)
- Add a unique record identifier and, if applicable, a subject/entity identifier
- Document any categorical variables and their allowable values upfront

### 4. Standardize Collection Procedures
- Specify who collects data, when, and using what method
- Define how missing or incomplete data points are handled (e.g., null vs. interpolated)
- Establish validation rules to catch errors at entry (range checks, format checks)

### 5. Build the Comparison Structure
- Create baseline snapshot at time zero before any intervention or change
- Define the comparison logic: absolute change, percentage change, rolling average, or index
- Identify confounding variables to track alongside primary metrics

### 6. Plan Storage and Version Control
- Recommend a storage format appropriate to scale (CSV, relational DB, spreadsheet with frozen headers)
- Enforce append-only raw data logs; never overwrite historical records
- Store processed/derived data separately from raw collection

### 7. Define Trend Analysis Triggers
- Set thresholds that signal a meaningful trend (e.g., 3 consecutive periods of increase)
- Identify anomaly conditions that warrant investigation
- Schedule regular review intervals to assess accumulated data

## Output Format

Produce a longitudinal tracking plan with the following sections:

1. **Objective Statement** — One sentence defining what is being tracked and why
2. **Data Schema Table** — Markdown table with columns: Field Name | Data Type | Unit | Description | Required
3. **Time Parameters** — Bullet list specifying interval, duration, and baseline date
4. **Collection Protocol** — Numbered steps for who collects what, when, and how
5. **Comparison Method** — Formula or logic for calculating change between periods
6. **Sample Data Structure** — 3–5 rows of example data in the defined schema
7. **Review Schedule** — Table mapping time intervals to review actions and responsible parties
8. **Known Risks** — Bullet list of data quality risks and mitigation steps

Total length: 400–800 words depending on complexity. Use tables and code blocks where they aid clarity.
