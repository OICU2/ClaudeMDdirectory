---
name: marketing-channel-first-touch-attribution-report
description: >
  Analyzes marketing data to identify the first touchpoint channel for every converted lead or customer within a specified time window, surfacing which acquisition sources initiate the highest-value buying journeys. Use when someone asks "which channels are driving our best customers," wants to understand where conversions originate, needs a first-touch attribution breakdown, is trying to allocate acquisition budget based on pipeline source, or asks which marketing sources start the most valuable deals.
category: marketing
tags: [attribution, first-touch, channel-analysis, conversion-tracking, acquisition]
author: community
---

# First-Touch Attribution Report

This skill maps every converted lead or customer back to their originating channel within a defined date range and produces a ranked attribution report showing which sources initiate the highest-value buying journeys.

## Workflow

1. **Clarify scope before starting**
   - Confirm the date range (e.g., last 30 days, Q1, custom window)
   - Define "conversion" for this context (lead created, opportunity opened, deal closed, trial started)
   - Identify what "value" means (deal size, LTV, pipeline amount, revenue)
   - Ask what data source is available (CRM export, analytics tool, raw CSV, direct database access)

2. **Identify first-touch logic**
   - First touch = the earliest recorded interaction or source attribution on the contact or lead record before conversion
   - If multiple touchpoints exist, use the chronologically first one with a non-null channel value
   - Treat direct/unknown traffic as its own channel ("Direct / Unknown") — do not discard it
   - Flag any records with missing or ambiguous attribution separately

3. **Segment and aggregate the data**
   - Group all converted records by first-touch channel (e.g., Paid Search, Organic Search, Paid Social, Email, Referral, Direct, Event, Outbound SDR)
   - For each channel calculate:
     - Total conversions initiated
     - Conversion rate (if impression/visit data is available)
     - Total associated value (revenue, pipeline, or LTV)
     - Average deal size or average value per conversion
     - Percentage share of total conversions and total value

4. **Rank and identify insights**
   - Rank channels by total value initiated (primary) and by conversion volume (secondary)
   - Flag the top 3 value-driving channels and any high-volume but low-value channels
   - Note any channel with disproportionate value-to-volume ratio (signals high-quality acquisition)
   - Identify channels with zero or near-zero attribution — flag as data gaps or underperforming sources

5. **Surface budget and strategy implications**
   - For each top channel, state a one-line implication (e.g., "Organic Search initiates 34% of revenue — undersupported given content investment")
   - Flag any channel with declining first-touch share over the period if trend data is available
   - Note limitations of first-touch attribution (does not credit mid-funnel or closing channels)

## Output Format

Produce a structured report with the following sections:

**Header**
- Report title, date range, conversion event definition, value metric used, total records analyzed

**Attribution Table** (sorted by Total Value, descending)
| Channel | Conversions | % of Total Conversions | Total Value | Avg Value | % of Total Value |
|---|---|---|---|---|---|

**Key Findings** (3–5 bullet points)
- Highest-value initiating channel with specific numbers
- Any high-volume / low-value channel mismatch
- Data quality issues or attribution gaps
- Notable trend if period-over-period data exists

**Strategic Implications** (3–5 bullet points, one per actionable insight)
- Concrete budget or effort recommendations tied directly to the data

**Data Caveats**
- Sample size, missing attribution records, limitations of first-touch model, any assumptions made

Length: concise — the table plus findings should fit on one page. No narrative padding between sections.
