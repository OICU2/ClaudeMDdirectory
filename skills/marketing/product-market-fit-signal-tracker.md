---
name: product-market-fit-signal-tracker
description: >
  Aggregates qualitative and quantitative signals from reviews, surveys, and usage data to assess and report on current product-market fit strength. Use when someone says "we're not sure if we've found product-market fit," asks about "how strong our PMF is right now," wants to "analyze customer signals for fit," needs to "track whether our product is resonating," or is trying to "interpret NPS and retention data together." Synthesizes disparate inputs into a unified PMF health score with actionable findings.
category: marketing
tags: [product-market-fit, pmf, growth, analytics, customer-research]
author: community
---

# Product-Market Fit Signal Tracker

This skill collects and synthesizes qualitative and quantitative signals across reviews, surveys, usage data, and retention metrics to produce a structured PMF assessment with a health score and prioritized action items.

## Signal Collection & Analysis Workflow

### Step 1: Inventory Available Signal Sources
Ask the user which of the following data sources they have access to, then request the relevant raw data or summaries:
- **Survey data**: NPS scores, Sean Ellis "very disappointed" survey results, CSAT
- **Usage/retention data**: DAU/MAU ratio, churn rate, feature adoption rates, session frequency
- **Review data**: App store ratings, G2/Capterra reviews, Trustpilot, qualitative themes
- **Sales signals**: Win/loss rates, sales cycle length, common objections, conversion rates
- **Support signals**: Ticket volume by category, most-requested features, complaint patterns
- **Organic signals**: Word-of-mouth referral rate, viral coefficient, unprompted testimonials

### Step 2: Score Each Signal Category
For each available signal source, apply the following benchmarks and assign a score of 1–5:

**NPS**
- < 0 = 1 | 0–20 = 2 | 21–40 = 3 | 41–60 = 4 | > 60 = 5

**Sean Ellis "Very Disappointed" Score**
- < 20% = 1 | 20–30% = 2 | 30–40% = 3 | 40–50% = 4 | > 50% = 5

**DAU/MAU Ratio**
- < 10% = 1 | 10–20% = 2 | 20–30% = 3 | 30–40% = 4 | > 40% = 5

**Monthly Churn Rate**
- > 10% = 1 | 5–10% = 2 | 3–5% = 3 | 1–3% = 4 | < 1% = 5

**Qualitative Review Sentiment** (summarize top themes, score overall tone)
- Predominantly negative = 1 | Mixed negative = 2 | Neutral = 3 | Mixed positive = 4 | Strongly positive = 5

**Organic Growth / Referral Signal**
- No organic activity = 1 | Minimal = 2 | Moderate = 3 | Strong = 4 | Primary growth channel = 5

### Step 3: Calculate Composite PMF Score
- Average all available signal scores into a **Composite PMF Score (1.0–5.0)**
- Map to PMF Stage:
  - 1.0–2.0 = **Pre-Fit** (significant misalignment)
  - 2.1–3.0 = **Searching** (partial signals, inconsistent fit)
  - 3.1–4.0 = **Approaching Fit** (strong signals in some areas, gaps remain)
  - 4.1–5.0 = **Strong Fit** (consistent signals across categories)

### Step 4: Extract Qualitative Themes
- Identify the top 3 recurring pain points from reviews and support data
- Identify the top 3 "love signals" — what users praise most
- Flag any contradictions between what users say (surveys) and what they do (usage data)

### Step 5: Identify Weakest Signal Category
- Flag the single lowest-scoring category as the **Priority Gap**
- Generate 2–3 specific, actionable recommendations to address that gap

## Output Format

Produce a structured
