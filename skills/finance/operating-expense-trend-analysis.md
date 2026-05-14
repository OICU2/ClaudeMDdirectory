---
name: operating-expense-trend-analysis
description: >
  Analyzes operating expense data to surface month-over-month and quarter-over-quarter trends by category, flagging cost creep and anomalous growth. Use when someone says "our costs are creeping up," asks about opex trends or expense growth, wants to understand where spending is accelerating, needs to identify budget overruns by category, or is preparing a cost-control review for leadership.
category: finance
tags: [opex, expense-analysis, cost-management, trend-detection, budgeting]
author: community
---

# Operating Expense Trend Analysis

This skill analyzes operating expense data across time periods and categories to detect cost creep, calculate growth rates, and flag line items that exceed defined thresholds — used whenever someone needs to understand where and how fast spending is growing.

## Analysis Workflow

1. **Establish the dataset structure**: Identify available time periods (months, quarters) and expense categories (headcount, SaaS/software, facilities, marketing, COGS, G&A, R&D, etc.). Request data if not provided — minimum two consecutive periods required.

2. **Calculate period-over-period growth rates**:
   - MoM % change: `(Current Month − Prior Month) / Prior Month × 100`
   - QoQ % change: `(Current Quarter − Prior Quarter) / Prior Quarter × 100`
   - YoY % change if data permits

3. **Apply threshold flagging**: Use these default thresholds unless the user specifies others:
   - 🔴 **Critical**: >15% MoM or >25% QoQ growth in any single category
   - 🟡 **Watch**: 8–15% MoM or 15–25% QoQ growth
   - 🟢 **Stable**: <8% MoM or <15% QoQ growth
   - Flag any category where absolute dollar increase exceeds $10K MoM (or ask user for materiality threshold)

4. **Identify cost creep patterns**: Look for categories showing consistent upward drift across 3+ consecutive periods even if individual period changes appear small. Calculate compounded growth rate for these.

5. **Benchmark against total opex**: Express each category's growth relative to total opex growth. Flag categories growing faster than the blended total — these are shifting the cost mix.

6. **Investigate drivers**: For flagged categories, prompt or note likely root causes:
   - Headcount: new hires, salary adjustments, benefits changes
   - SaaS: seat expansion, new tools, price increases
   - Facilities: lease renewals, new offices
   - Marketing: campaign ramp, agency fees
   - Professional services: legal, audit, consulting spikes

7. **Rank by impact**: Sort flagged items by absolute dollar variance (largest first), then by growth rate within the same tier.

## Output Format

Produce a structured report with these sections:

**Executive Summary** (3–5 bullet points): Total opex change, number of categories flagged, single biggest cost driver, and one recommended action.

**Trend Table**: Markdown table with columns — Category | Prior Period ($) | Current Period ($) | $ Change | % Change | Status Flag | Trend Direction (↑↑ accelerating / ↑ growing / → stable / ↓ declining)

**Flagged Categories Detail**: For each 🔴 or 🟡 item, a short paragraph (2–4 sentences) covering the magnitude, pattern, likely driver, and suggested follow-up question or action.

**Cost Creep Watch List**: Separate table for categories showing multi-period drift with compounded growth rate calculated.

**Recommended Actions**: Numbered list of 3–5 specific, prioritized actions (e.g., "Audit SaaS subscriptions — 23% QoQ growth suggests unused seat accumulation; request vendor utilization report").

Use dollar amounts formatted with commas and two decimal places. Percentages to one decimal place. Keep the full report under 600 words excluding tables.
