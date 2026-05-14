---
name: competitor-patent-filing-trend-report
category: research
description: >
  Analyzes competitor patent filing activity over time to surface emerging technology focus areas and strategic R&D signals. Use when someone wants to track competitor patent trends, asks about what technologies rivals are investing in, needs to understand a competitor's R&D strategy through patent data, wants to identify emerging focus areas from patent filings, or is researching intellectual property signals from industry players.
tags: [patents, competitive-intelligence, research, R&D, technology-trends]
author: community
---

# Competitor Patent Filing Trend Report

This skill analyzes patent filing patterns for specified competitors over a defined time window to reveal shifting R&D priorities, emerging technology bets, and strategic IP signals.

## Research & Analysis Workflow

1. **Define scope**: Confirm the target competitors (1–5 companies), time range (default: last 5 years in annual increments), and technology domains of interest if provided.

2. **Identify data sources**: Direct the user to or query from:
   - USPTO Patent Full-Text Database (patents.google.com, USPTO PatFT/AppFT)
   - EPO Espacenet for international filings
   - WIPO PATENTSCOPE for PCT applications
   - If real-time access is unavailable, work from user-provided exports or known public data.

3. **Extract filing metrics per competitor**:
   - Total patent applications filed per year
   - Granted patents per year
   - CPC/IPC classification codes with highest filing volume
   - Year-over-year growth rate per technology class
   - Forward citation counts for recent filings (signal of impact)

4. **Identify trend signals**:
   - Classes with >20% YoY growth = **emerging focus**
   - Classes with declining filings = **deprioritized areas**
   - New CPC codes appearing in last 12–24 months = **nascent bets**
   - Clusters of continuation/continuation-in-part filings = **deepening investment**

5. **Cross-competitor comparison**:
   - Map overlapping technology classes across competitors
   - Flag where two or more competitors are accelerating filings in the same domain (signals competitive convergence)
   - Note areas where one competitor holds a significant lead (>3x filing volume)

6. **Infer strategic signals**:
   - Connect filing surges to known product launches, acquisitions, or public R&D announcements where possible
   - Flag technology areas with filings but no public product presence (stealth R&D indicators)
   - Note inventor team growth/contraction by domain where data allows

## Output Format

Produce a structured report with the following sections:

---

**Competitor Patent Filing Trend Report**
*Scope: [Competitors] | Period: [Date Range] | Generated: [Date]*

### Executive Summary
3–5 bullet points summarizing the most strategically significant findings.

### Filing Volume Overview
Table with columns: Competitor | Year | Total Filings | YoY Change (%)
One row per competitor per year.

### Technology Focus Analysis (Per Competitor)
For each competitor:
- **Top 5 CPC/IPC classes by filing volume** (with class label and count)
- **Fastest-growing classes** (last 2 years, with % growth)
- **Emerging areas** (new classes appearing in most recent year)
- **Declining areas** (classes with >15% YoY drop)

### Cross-Competitor Convergence Map
Bullet list of technology domains where 2+ competitors show accelerating filings, with competitor names and filing counts noted.

### Strategic R&D Signals
Numbered list of 5–10 specific, actionable insights (e.g., "Competitor A filed 47 patents in neuromorphic computing in 2023, up from 3 in 2021, with no announced product — likely pre-commercial R&D phase").

### Data Limitations & Confidence Notes
Brief note on data sources used, any gaps, and confidence level of trend conclusions.

---

Length: 600–1200 words depending on number of competitors. Use tables and bullets throughout. Avoid prose-heavy paragraphs. Flag any inferences clearly as interpreted signals, not confirmed facts.
