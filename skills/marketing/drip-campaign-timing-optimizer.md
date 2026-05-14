---
name: drip-campaign-timing-optimizer
description: >
  Analyzes email sequence performance data to recommend optimal send timing for drip campaigns.
  Use when someone wants to improve drip campaign performance, asks about the best time to send
  follow-up emails, needs to reduce unsubscribe rates in a sequence, wants to know when to schedule
  each step in an email funnel, or is trying to optimize open and click rates across a nurture series.
category: marketing
tags: [email-marketing, drip-campaigns, send-time-optimization, conversion-rate, automation]
author: community
---

# Drip Campaign Timing Optimizer

This skill analyzes open rate, click rate, and conversion data across email sequences to recommend optimal send intervals, days, and times for each step in a drip campaign, and Claude will use it whenever performance data or campaign structure details are provided.

## Analysis Workflow

### Step 1: Collect Campaign Data
Request the following inputs if not already provided:
- Number of emails in the sequence and their current send intervals
- Per-email metrics: open rate, click-through rate (CTR), conversion rate, unsubscribe rate
- Audience segment (B2B vs. B2C, industry, time zones if known)
- Current send days and times for each step
- Campaign goal (nurture, onboarding, sales, re-engagement)

### Step 2: Identify Performance Patterns
Analyze the provided data for:
- **Drop-off points**: Emails with open rates more than 15% below the sequence average signal a timing or fatigue problem
- **Engagement decay**: A declining trend across steps indicates intervals are too short or too long
- **Day-of-week patterns**: Compare open and click rates by send day; flag underperforming days
- **Time-of-day patterns**: Note peak engagement windows and identify sends outside those windows
- **Unsubscribe spikes**: Steps with unsubscribe rates above 0.5% for B2C or 0.3% for B2B suggest send frequency is too aggressive

### Step 3: Apply Timing Benchmarks
Use these evidence-based defaults when data is sparse:
- **B2B sequences**: Tuesday–Thursday sends, 8–10 AM or 1–3 PM recipient local time; minimum 3-day intervals
- **B2C sequences**: Tuesday, Thursday, or Saturday sends; 10 AM–12 PM or 7–9 PM; minimum 2-day intervals
- **Welcome/onboarding email**: Send immediately on signup; follow-up at 24 hours
- **Nurture sequences**: 4–7 day intervals between steps; compress to 2–3 days only after a click event
- **Re-engagement sequences**: 7–14 day intervals to reduce pressure
- **Final conversion email**: Send on a Tuesday or Wednesday morning for maximum response

### Step 4: Generate Recommendations
For each email step, determine:
1. Recommended send interval from the previous email (in days and hours)
2. Recommended day of the week
3. Recommended time window (in recipient local time)
4. Rationale tied directly to the data provided or benchmark logic
5. A/B test suggestion if the current data sample is under 500 recipients per step

### Step 5: Flag Structural Issues
Call out problems beyond timing:
- Sequences longer than 8 emails with no behavioral branching should add conditional sends based on opens/clicks
- Identical send times across all steps create predictable patterns that reduce engagement over time — recommend staggering by 30–60 minutes per step
- Missing re-engagement branch for non-openers after step 3

## Output Format

Produce a structured recommendation report with the following sections:

**Campaign Summary**
- Sequence name, goal, audience segment, total steps
- Overall sequence health rating: Strong / Needs Improvement / Critical (with one-line rationale)

**Step-by-Step Timing Recommendations**
A table or numbered list for each email step:
```
Email [#]: [Subject line or label if provided]
  Current timing: [Day, Time, Interval]
  Recommended timing: [Day, Time, Interval]
  Key metric driving change: [e.g., "Open rate drops to 14% vs. 31% sequence average"]
  Rationale: [1–2 sentences]
  A/B test suggestion: [Specific variable to test, if applicable]
```
