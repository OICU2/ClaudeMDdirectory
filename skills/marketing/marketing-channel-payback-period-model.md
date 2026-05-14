---
name: marketing-channel-payback-period-model
description: >
  Calculates the payback period for each marketing acquisition channel by combining spend, conversion rates, and average order value into a clear time-to-recover analysis. Use when someone asks "how long to recoup our ad spend," wants to know which channels pay back fastest, or needs to compare acquisition channel efficiency. Also activates when someone mentions CAC payback, channel ROI timelines, or wants to model when a marketing investment breaks even.
category: marketing
tags: [payback-period, acquisition, cac, channel-roi, marketing-finance]
author: community
---

# Marketing Channel Payback Period Model

This skill calculates how many months each acquisition channel takes to recover its spend using CAC, average order value, gross margin, and purchase frequency data.

## Calculation Workflow

1. **Collect inputs per channel** — gather or prompt for:
   - Monthly channel spend ($)
   - Number of new customers acquired
   - Average order value (AOV) or average monthly revenue per customer
   - Gross margin % (default to 50% if unknown)
   - Average purchase frequency per month (default to 1 if one-time purchase)

2. **Calculate CAC per channel**
   - CAC = Monthly Spend ÷ New Customers Acquired

3. **Calculate monthly gross profit per customer**
   - Monthly Gross Profit = AOV × Purchase Frequency × Gross Margin %

4. **Calculate payback period**
   - Payback Period (months) = CAC ÷ Monthly Gross Profit per Customer

5. **Flag outliers and risks**
   - Payback > 12 months: flag as high-risk, note churn vulnerability
   - Payback < 3 months: flag as high-efficiency, recommend scaling
   - If churn rate is provided, check whether payback period exceeds average customer lifespan and flag as "never recovers"

6. **Rank channels** by payback period from fastest to slowest.

7. **Apply sensitivity analysis** — show how payback period changes if AOV drops 20% or conversion rate drops 20%.

## Output Format

Produce a structured report with the following sections:

**Channel Payback Summary Table**
| Channel | Monthly Spend | CAC | Monthly GP/Customer | Payback Period | Status |
|---|---|---|---|---|---|
(Populate one row per channel; Status = Excellent / Good / Caution / Critical)

**Key Findings**
- 3–5 bullet points identifying fastest and slowest channels, outliers, and scaling recommendations

**Sensitivity Analysis**
- Short table showing payback period under base case, -20% AOV, and -20% conversion rate for each channel

**Recommendations**
- Ranked action items: which channels to scale, pause, or optimize and why

Use plain dollar amounts and whole-number months throughout. If inputs are missing, state assumptions explicitly before calculating.
