---
name: solo-operator-client-win-rate-by-source-analyzer
description: >
  Calculates and compares proposal-to-close win rates across different lead sources to identify the most profitable client acquisition channels for solo operators. Use when someone says "I want to know which leads convert best," asks about "where my best clients come from," wants to "compare my referral vs cold outreach success," wonders "which marketing channel is worth my time," or needs to "figure out my win rate by source." Surfaces actionable channel prioritization so solopreneurs can stop wasting effort on low-converting pipelines.
category: solopreneur
tags: [win-rate, lead-sources, sales-analytics, pipeline, client-acquisition]
author: community
---

# Solo Operator Client Win Rate by Source Analyzer

This skill calculates proposal-to-close win rates for each lead source a solopreneur uses and ranks channels by conversion efficiency, deal value, and overall ROI so they can concentrate effort where it counts.

## Analysis Workflow

### Step 1 — Collect Lead Source Data
Ask the user to provide data for each lead source they use. Required per source:
- Source name (e.g., referral, cold email, LinkedIn, podcast, Upwork, Instagram, networking events)
- Number of leads or inquiries received in a defined time period
- Number of proposals or quotes sent
- Number of deals closed
- Average deal value (optional but recommended)
- Time or money spent generating leads from that source (optional)

If the user has incomplete data, proceed with what is available and flag gaps explicitly.

### Step 2 — Calculate Core Metrics Per Source
For each lead source, compute:

1. **Lead-to-Proposal Rate** = (Proposals Sent ÷ Leads Received) × 100
2. **Proposal-to-Close Win Rate** = (Deals Closed ÷ Proposals Sent) × 100
3. **Overall Lead-to-Close Rate** = (Deals Closed ÷ Leads Received) × 100
4. **Total Revenue Generated** = Deals Closed × Average Deal Value (if provided)
5. **Revenue per Lead** = Total Revenue ÷ Leads Received (if deal value provided)
6. **Cost per Closed Deal** = Total Cost of Channel ÷ Deals Closed (if cost data provided)

### Step 3 — Rank and Compare Sources
- Rank sources by Proposal-to-Close Win Rate (primary metric)
- Secondary rank by Revenue per Lead or Overall Lead-to-Close Rate
- Flag any source where win rate is below 20% as a low-performer
- Flag any source where win rate is above 50% as a high-performer worth scaling
- Note sources with high lead volume but low win rate vs. low volume but high win rate

### Step 4 — Identify Patterns and Diagnose
Look for and call out:
- Whether relationship-based sources (referrals, warm intros) outperform cold sources
- Whether high-effort channels (cold outreach, paid ads) justify their conversion rates
- Any source producing high win rates but being underutilized
- Sources consuming time/money disproportionate to their closed revenue

### Step 5 — Generate Recommendations
Produce exactly three prioritized recommendations:
1. **Double down on** — the highest-converting source and why
2. **Fix or cut** — the lowest-converting source with a specific action (improve qualification, pause, or eliminate)
3. **Test next** — one untapped or underinvested source based on the pattern in their data

## Output Format

Produce a structured report with these sections:

**Win Rate by Source Table**
A plain-text or markdown table with columns: Source | Leads | Proposals | Closed | Win Rate (%) | Avg Deal Value | Revenue | Notes

**Channel Ranking**
Numbered list from highest to lowest win rate with a one-line observation per source.

**Key Insight**
2–3 sentences summarizing the single most important pattern in the data (e.g., "Referrals close at 3× the rate of cold LinkedIn but represent only 20% of your proposal volume — this is your biggest leverage point").

**Three Recommendations**
Labeled clearly as Double Down, Fix or Cut, and Test Next. Each recommendation is 2–4 sentences with a specific, actionable next step.

**Data Gaps**
Bullet list of
