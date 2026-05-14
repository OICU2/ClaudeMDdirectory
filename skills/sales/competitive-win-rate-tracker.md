---
name: competitive-win-rate-tracker
description: >
  Pulls closed-won and closed-lost deal data segmented by primary competitor to calculate win rates and surface patterns in where and why deals are being lost. Use when someone says "how are we doing against competitors," asks about win/loss rates by competitor, wants to understand where deals are being lost, needs a competitive performance breakdown, or is trying to figure out which competitors are hurting pipeline most.
category: sales
tags: [competitive-intelligence, win-loss, crm-analytics, sales-performance, pipeline]
author: community
---

# Competitive Win Rate Tracker

This skill analyzes closed-won and closed-lost deal data segmented by competitor to calculate win rates, identify loss patterns, and surface actionable insights about competitive performance.

## Analysis Workflow

1. **Identify data source**: Ask the user which CRM or data source to pull from (Salesforce, HubSpot, CSV export, etc.) and confirm the date range for analysis (default: last 12 months).

2. **Extract required fields**: Pull or request the following fields for each closed deal:
   - Deal ID, close date, stage (Closed Won / Closed Lost)
   - Primary competitor (the competitor cited in loss reason or opportunity field)
   - Deal value (ACV or TCV)
   - Loss reason or notes
   - Deal owner, region, and product line (if available)

3. **Calculate win rates per competitor**:
   - Win Rate % = Closed Won deals / (Closed Won + Closed Lost deals) × 100
   - Weighted Win Rate % = Won ACV / (Won ACV + Lost ACV) × 100
   - Volume of deals won and lost per competitor

4. **Segment patterns by**:
   - Region or territory
   - Deal size tier (e.g., SMB / Mid-Market / Enterprise)
   - Product line or use case
   - Sales rep or team
   - Time trend (quarterly breakdown)

5. **Surface loss patterns**:
   - Most common loss reasons per competitor (from notes/tags)
   - Deal size ranges where win rates drop
   - Segments where a specific competitor dominates
   - Competitors appearing most frequently in late-stage losses (Stage 3+)

6. **Flag anomalies**: Highlight any competitor where win rate dropped more than 10 points quarter-over-quarter, or where lost deal value exceeds $X threshold.

## Output Format

Produce a structured competitive win rate report with the following sections:

**Summary Table** (one row per competitor):
| Competitor | Deals Won | Deals Lost | Win Rate % | Weighted Win Rate % | Avg Deal Size Lost |
|---|---|---|---|---|---|

**Top 3 Competitive Threats**: Brief bullet per competitor — why they're winning, which segments, and deal size pattern.

**Loss Pattern Breakdown**: For each major competitor (>5 losses), list the top 2–3 loss reasons with frequency counts.

**Segment Heat Map**: A table or bullet list showing win rate by competitor × deal size tier or region (whichever is most relevant to the data provided).

**Quarterly Trend**: Win rate per competitor across the last 4 quarters in a simple table.

**Recommended Actions**: 3–5 specific, actionable recommendations (e.g., "Build a battlecard addressing Competitor X's pricing objection, cited in 14 of 22 losses in the Enterprise segment").

Length: Comprehensive but scannable. Use tables for data, bullets for narrative. No prose paragraphs in data sections.
