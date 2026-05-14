---
name: sales-objection-frequency-heatmap
description: >
  Analyzes sales call notes, CRM exports, or deal data to identify which objections appear most frequently across deal stages, reps, or customer segments. Use when someone says "we keep hearing the same objections," asks about "what's killing deals in late stage," or wants to "find patterns in why we're losing." Also triggers when someone asks to "map out objection trends" or needs to "figure out where reps are getting stuck."
category: sales
tags: [sales, objections, crm, heatmap, win-loss]
author: community
---

# Sales Objection Frequency Heatmap

This skill ingests raw sales call notes, CRM export data, or deal logs and produces a structured frequency analysis showing which objections cluster by deal stage, sales rep, or customer segment.

## Analysis Workflow

1. **Ingest the data**: Accept input as pasted call notes, CSV exports, or structured deal logs. If data is unstructured, extract objection-like statements (price concerns, competitor mentions, timing delays, authority gaps, product fit questions).

2. **Normalize objections into categories**: Collapse variations into canonical objection types:
   - Price / Budget ("too expensive," "no budget," "need to cut costs")
   - Timing ("not now," "revisit next quarter," "bad time")
   - Authority ("need to check with," "not my decision," "board approval")
   - Competitor ("already using X," "evaluating Y")
   - Product Fit ("doesn't integrate," "missing feature," "too complex")
   - Trust / Risk ("haven't heard of you," "need references," "too new")

3. **Dimension mapping**: For each objection, tag the available dimensions from the data:
   - Deal stage (prospecting, discovery, proposal, negotiation, closed-lost)
   - Sales rep name or ID
   - Customer segment (company size, industry, region, ICP tier)

4. **Count and rank**: Tally occurrences per objection type per dimension. Calculate percentage share within each dimension bucket.

5. **Identify hotspots**: Flag any objection-dimension combination where frequency exceeds 25% of interactions in that bucket — these are heatmap "red zones."

6. **Surface actionable patterns**: Note where the same objection appears across multiple reps or stages (systemic issue vs. rep-specific), and where objections concentrate in a single stage (process gap).

## Output Format

Produce three sections:

**1. Objection Frequency Table**
A markdown table with columns: Objection Type | Total Count | % of All Objections | Top Stage | Top Rep (if available) | Top Segment (if available)

**2. Heatmap Summary (text-based)**
A dimension × objection grid using intensity markers:
- 🔴 High (>25% of that bucket)
- 🟡 Medium (10–25%)
- ⚪ Low (<10%)

Format: rows = deal stages (or reps/segments), columns = objection categories.

**3. Key Findings & Recommendations**
3–5 bullet points identifying:
- The single highest-frequency objection overall
- Any stage where objections spike unexpectedly
- Rep-specific patterns that differ from the team average
- One recommended enablement action per red-zone finding (e.g., "Build a pricing ROI one-pager for late-stage deals")

Keep the full output under 600 words unless the dataset is large enough to warrant expansion.
