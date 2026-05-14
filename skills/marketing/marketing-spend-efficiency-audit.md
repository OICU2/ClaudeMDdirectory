---
name: marketing-spend-efficiency-audit
description: >
  Evaluates current marketing channel spend against lead volume and conversion outcomes to surface underperforming budget allocations. Use when someone says "our marketing budget isn't working," asks about which channels are worth keeping, wants to understand why lead quality is low despite high spend, needs to justify or cut marketing costs, or is preparing for a budget reallocation meeting.
category: marketing
tags: [marketing, budget, ROI, lead-generation, channel-analysis]
author: community
---

# Marketing Spend Efficiency Audit

This skill analyzes marketing channel performance data to identify where budget is being wasted and where it should be shifted, producing a prioritized audit with clear reallocation recommendations.

## Audit Workflow

1. **Collect channel spend data** — Ask the user to provide current spend per channel (paid search, social, content, email, events, affiliates, etc.) for a defined period (monthly or quarterly). If they lack exact numbers, work with estimates.

2. **Gather performance metrics per channel** — Request lead volume, marketing qualified leads (MQLs), sales qualified leads (SQLs), opportunities created, and closed/won revenue attributed to each channel. Identify which metrics are missing and flag them.

3. **Calculate efficiency ratios for each channel**:
   - Cost Per Lead (CPL) = Spend ÷ Leads
   - Cost Per MQL = Spend ÷ MQLs
   - Cost Per Opportunity = Spend ÷ Opportunities
   - Customer Acquisition Cost (CAC) = Spend ÷ Customers Won
   - Return on Ad Spend (ROAS) = Revenue Attributed ÷ Spend

4. **Benchmark against thresholds** — Compare calculated ratios to industry benchmarks for the user's sector (B2B SaaS, ecommerce, services, etc.). Flag any channel where CPL exceeds 2x the average across all channels or where ROAS falls below 1.0.

5. **Score each channel** — Rate each channel on a 1–5 scale across three dimensions: Volume (lead quantity), Quality (MQL-to-SQL conversion rate), and Efficiency (CAC relative to LTV if known). Sum scores to produce a composite channel score.

6. **Identify budget misalignments** — Flag channels receiving disproportionate spend relative to their composite score. Specifically call out: overfunded underperformers (high spend, low score), underfunded outperformers (low spend, high score), and zero-ROI channels with no attribution data.

7. **Generate reallocation recommendations** — Propose specific percentage shifts: which channels to reduce or cut, which to increase, and what to test with reallocated budget. Tie each recommendation to the data.

8. **Surface data gaps** — List any metrics that were unavailable and explain how their absence limits the analysis. Recommend instrumentation fixes (UTM tagging, CRM attribution, multi-touch modeling) if attribution is weak.

## Output Format

Produce a structured audit report with the following sections:

**1. Spend Summary Table**
Markdown table with columns: Channel | Monthly Spend | Leads | MQLs | CPL | Cost/MQL | ROAS | Score (1–15)

**2. Efficiency Rankings**
Numbered list from highest to lowest composite score with one-line rationale per channel.

**3. Red Flags**
Bullet list of 3–6 specific inefficiencies found, each with supporting numbers (e.g., "Paid social CPL is $312 — 3.4x higher than the $92 average across channels").

**4. Reallocation Recommendations**
Table with columns: Action | Channel | Current Spend % | Recommended Spend % | Expected Impact. Include 3–6 rows maximum.

**5. Data Gaps & Next Steps**
Bullet list of missing data points and one-line fix for each.

Total length: 400–700 words. Use plain language. Avoid jargon unless the user has used it first.
