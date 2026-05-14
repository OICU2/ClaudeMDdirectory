---
name: solo-business-income-smoothing-model
description: >
  Analyzes a solopreneur's revenue patterns to model income stabilization strategies and reduce
  month-to-month volatility. Use when someone says their income is unpredictable, asks how to
  smooth out feast-or-famine cycles, wants to convert project clients to retainers, is worried
  about cash flow gaps between projects, or needs to figure out how large an income buffer to
  maintain.
category: solopreneur
tags: [cash-flow, retainers, revenue-stability, financial-planning, solopreneur]
author: community
---

# Solo Business Income Smoothing Model

Analyzes a solopreneur's historical or projected revenue to identify retainer conversion candidates, payment timing optimizations, and buffer reserve targets that reduce month-to-month income volatility.

## Income Smoothing Analysis Workflow

### Step 1: Collect Revenue Baseline
Ask for (or request the user estimate) the following:
- Monthly revenue for the past 6–12 months (or best estimates)
- Revenue sources broken down by type: one-time projects, recurring retainers, passive/product income
- Typical project size and frequency
- Current savings buffer (months of expenses covered)
- Fixed monthly expenses (non-negotiable overhead)

### Step 2: Calculate Volatility Metrics
Compute or estimate:
- **Average monthly revenue** across the period
- **Standard deviation** or peak-to-trough swing (highest month minus lowest month)
- **Volatility ratio**: (peak − trough) ÷ average × 100 — flag anything above 40% as high volatility
- **Retainer percentage**: what share of revenue is currently recurring vs. one-time

### Step 3: Identify Retainer Conversion Opportunities
Review the client/project list and flag:
- Clients who have hired the user more than twice in 12 months (repeat buyers = retainer candidates)
- Project types that involve ongoing work (maintenance, content, support, reporting, advisory)
- Services currently sold as one-time that could be repackaged as monthly subscriptions
- For each candidate, model a proposed retainer price (80–90% of their average spend) and the recurring revenue it would add

### Step 4: Model Payment Timing Shifts
Identify levers to pull revenue forward or smooth disbursement:
- **Upfront deposits**: shifting from net-30 to 50% upfront on all projects
- **Payment plans**: breaking large project invoices into monthly installments
- **Invoice timing**: moving invoices from end-of-project to milestone-based
- For each shift, estimate how much revenue it would move into earlier months and by how many days

### Step 5: Calculate Buffer Reserve Target
Use this formula:
- **Minimum buffer** = 2 × average monthly expenses
- **Recommended buffer** = (volatility ratio ÷ 100) × 6 × average monthly expenses
- **Aggressive stability buffer** = 3 months of peak expenses
Flag the gap between the current buffer and the recommended buffer, and model how many months it would take to close that gap by setting aside 10%, 15%, or 20% of monthly revenue.

### Step 6: Build the Smoothing Scenario
Combine the above into three scenarios:
- **Conservative**: only payment timing changes, no new retainers
- **Moderate**: convert 1–2 clients to retainers + timing changes
- **Aggressive**: convert all viable clients to retainers + timing changes + buffer savings plan

For each scenario, show projected new average monthly revenue, new volatility ratio, and time to reach recommended buffer.

## Output Format

Produce a structured report with the following sections:

**1. Current State Summary**
- Table: Month | Revenue | Source Breakdown
- Key metrics: average, volatility ratio, current retainer %, current buffer in months

**2. Retainer Conversion Candidates**
- Bulleted list: Client/Project Type | Current Annual Spend | Proposed Retainer Price | Monthly Revenue Added
- Total new recurring revenue if all conversions succeed

**3. Payment Timing Opportunities**
- Bulleted list: Change | Revenue Shifted | Days Earlier
- Estimated impact on lowest-revenue months

**4. Buffer Reserve Gap Analysis**
- Current buffer vs. recommended buffer (in dollars and months)
- Savings plan table: Save X% → buffer closed in Y
