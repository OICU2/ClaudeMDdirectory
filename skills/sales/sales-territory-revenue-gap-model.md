---
name: sales-territory-revenue-gap-model
description: >
  Calculates the revenue gap between current territory performance and quota, then identifies which accounts or segments have the highest recovery potential. Use when someone says "we're behind on quota," asks about "where we can make up revenue," or wants to "analyze territory performance gaps." Also triggers when a rep or manager needs to prioritize accounts to close a shortfall or wants to understand which segments are underperforming against target.
category: sales
tags: [revenue-gap, territory-analysis, quota-attainment, account-prioritization, sales-forecasting]
author: community
---

# Sales Territory Revenue Gap Model

This skill calculates the delta between current territory revenue and quota, then ranks accounts or segments by recovery potential so reps and managers can focus effort where it matters most.

## Revenue Gap Analysis Workflow

1. **Establish the gap baseline**
   - Collect: quota for the period, revenue closed to date, time remaining in period
   - Calculate: `Revenue Gap = Quota − Closed Revenue`
   - Calculate: `Pace Gap = (Quota × % Period Elapsed) − Closed Revenue` — positive means behind pace, negative means ahead
   - Note time remaining as a multiplier on urgency

2. **Segment the territory**
   - Break pipeline and accounts into segments: existing customers (expansion/renewal), active pipeline (late-stage vs. early-stage), dormant accounts, and untouched whitespace
   - For each segment, record: estimated ARR opportunity, current stage or status, last activity date, and probability estimate

3. **Score recovery potential per account/segment**
   - Assign a Recovery Score using these weighted factors:
     - Deal size relative to gap (higher weight if it meaningfully moves the number)
     - Sales cycle remaining vs. time left in period (penalize deals unlikely to close in time)
     - Engagement recency (active accounts score higher)
     - Historical win rate for this account type or segment
   - Formula guidance: `Recovery Score = (Deal Size / Gap) × Close Probability × (Days Remaining / Avg Sales Cycle)`

4. **Identify top recovery levers**
   - Rank accounts by Recovery Score descending
   - Flag accounts where a single deal closes ≥ 25% of the gap as "high-leverage"
   - Flag renewals or expansions at risk of churn that would widen the gap
   - Identify any segments systematically underperforming (e.g., mid-market vs. enterprise, specific verticals)

5. **Build the action plan**
   - For top 3–5 accounts by Recovery Score: define the next specific action, owner, and target close date
   - For underperforming segments: call out the root cause hypothesis (pricing, competition, coverage gap, cycle length mismatch)
   - Flag any gap that cannot realistically be closed given pipeline coverage and recommend escalation or forecast revision if needed

## Output Format

Produce a structured gap analysis report with these sections:

**Gap Summary Table**
| Metric | Value |
|---|---|
| Quota | $X |
| Closed to Date | $X |
| Revenue Gap | $X |
| Pace Gap | $X |
| Period Remaining | X days / X% |
| Pipeline Coverage vs. Gap | Xх |

**Segment Breakdown**
A table showing each segment with: Opportunity Value, Count of Accounts, Weighted Close Probability, Expected Value, and Gap Coverage %.

**Top Recovery Accounts (Ranked)**
Numbered list of top 5–10 accounts with: Account Name, Deal Size, Recovery Score, Close Probability, Days to Close Estimate, and Recommended Next Action.

**Segment Underperformance Flags**
Bullet list of segments missing their proportional contribution, with a one-line hypothesis for each.

**Recommended Focus Plan**
3–5 bullet points listing the highest-ROI actions for the next 2 weeks, each tied to a specific account or segment and an expected revenue impact.

**Forecast Revision Note** (if applicable)
One paragraph stating whether the gap is realistically closeable given current pipeline, and what assumptions would need to hold for full attainment.

Length: concise enough to fit a single working document — prioritize tables and bullets over prose.
