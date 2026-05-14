---
name: customer-cohort-payback-analysis
description: >
  Analyzes how long each customer acquisition cohort takes to recover its fully-loaded acquisition cost through cumulative gross margin contribution. Use when someone asks "when does this cohort pay back," wants to understand CAC payback period by acquisition month, needs to know if marketing spend is recovering fast enough, asks about cohort-level unit economics, or wants to compare payback curves across customer segments.
category: finance
tags: [cohort-analysis, cac-payback, unit-economics, gross-margin, customer-acquisition]
author: community
---

# Customer Cohort Payback Analysis

This skill calculates and visualizes the cumulative gross margin trajectory for each acquisition cohort relative to its fully-loaded CAC, identifying the exact month each cohort crosses the payback threshold.

## Analysis Workflow

### 1. Gather Required Inputs
- **Cohort definition**: Acquisition month/quarter and headcount per cohort
- **Fully-loaded CAC**: Include paid media, sales salaries + commissions, onboarding costs, and any allocated overhead — per cohort or per customer
- **Monthly revenue per customer**: By cohort and month-since-acquisition (not calendar month)
- **COGS or gross margin %**: To convert revenue into gross margin contribution; use blended or cohort-specific if available
- **Churn data**: Monthly retention rates per cohort to adjust active customer counts

### 2. Construct the Cohort Margin Table
- Normalize all cohorts to **months-since-acquisition (M0, M1, M2…)** rather than calendar dates
- For each cohort at each month offset:
  - Active customers = prior month active × (1 − churn rate)
  - Monthly GM contribution = active customers × ARPU × gross margin %
  - Cumulative GM = running sum of monthly GM contributions
- Express cumulative GM **per acquired customer** (divide by cohort headcount at M0) to enable cross-cohort comparison

### 3. Calculate Payback Period
- Payback month = first month where cumulative GM per acquired customer ≥ fully-loaded CAC per customer
- If a cohort has not yet crossed payback, flag as "pending" and project forward using trailing 3-month average GM trend
- Calculate payback confidence: flag if projected payback relies on >6 months of extrapolation

### 4. Identify Patterns and Anomalies
- Compare payback months across cohorts — flag cohorts that are >20% slower than the median
- Correlate payback speed with acquisition channel, pricing tier, or contract type if that data is available
- Note inflection points: months where GM contribution slope changes (e.g., expansion revenue kicking in)
- Flag cohorts where churn accelerates before payback is reached — these are unprofitable cohorts

### 5. Sensitivity Check
- Recompute payback under ±10% gross margin assumption and ±15% churn assumption
- Identify which variable (margin vs. retention) has the larger impact on payback timing

## Output Format

Produce the following sections in order:

**1. Cohort Payback Summary Table**
Markdown table with columns: Cohort | Cohort Size | Fully-Loaded CAC | Payback Month | Status (Recovered / Pending / At Risk) | Projected Payback (if pending)

**2. Cumulative GM Curve Description**
For each cohort, describe the curve shape in 1–2 sentences: slope, any acceleration from expansion revenue, and where it crosses (or is projected to cross) the CAC line.

**3. Key Findings** (3–5 bullet points)
- Fastest and slowest recovering cohorts with specific month numbers
- Whether payback periods are improving or deteriorating over time
- Any cohorts at risk of never recovering CAC given current retention trends

**4. Sensitivity Summary**
Two-row table showing payback month range under optimistic and pessimistic assumptions for the two most recent cohorts.

**5. Recommended Actions** (2–4 bullets)
Concrete next steps tied directly to the findings — e.g., investigate churn spike in cohort X at M4, renegotiate COGS to improve margin, shift spend away from channel producing slow-payback cohorts.

Use plain numbers throughout. Avoid jargon not already introduced. If input data is incomplete, state explicitly what is
