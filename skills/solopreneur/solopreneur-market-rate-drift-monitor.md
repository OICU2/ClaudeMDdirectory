---
name: solopreneur-market-rate-drift-monitor
description: >
  Monitors whether a solopreneur's current service rates have fallen behind market benchmarks by comparing them against competitor pricing and industry standards. Use when someone says their rates haven't changed in a while, asks whether they're charging enough, wants to know if competitors are earning more, wonders if their pricing is still competitive, or needs to audit their service fees against current market rates.
category: solopreneur
tags: [pricing, market-research, competitive-analysis, revenue, benchmarking]
author: community
---

# Solopreneur Market Rate Drift Monitor

This skill audits a solopreneur's current service pricing against real competitor and industry benchmarks to identify where rates have drifted below market and by how much.

## Rate Drift Analysis Workflow

**Step 1: Capture Current Pricing Baseline**
- Ask the solopreneur to list every service they offer with current rate (hourly, project-based, or retainer)
- Record when each rate was last updated
- Note their primary niche, specialization level, years of experience, and target client type (SMB, enterprise, consumer)

**Step 2: Define the Comparison Market**
- Identify 3 comparison tiers: direct competitors (same niche, same experience level), adjacent competitors (same niche, different experience), and industry floor/ceiling rates
- Use the solopreneur's stated geography and delivery model (remote vs. local vs. hybrid) to scope the benchmark pool
- Reference publicly available rate data sources: Glassdoor freelance surveys, Upwork rate reports, industry association salary/fee guides (AIGA, PRSA, Toptal benchmarks, Bureau of Labor Statistics for self-employed), and LinkedIn Salary data where applicable

**Step 3: Run the Drift Calculation**
For each service line, compute:
- **Current rate** vs. **market median** for their tier → calculate % gap
- **Current rate** vs. **market 75th percentile** → calculate aspirational gap
- **Time since last rate increase** → flag if >12 months as automatic drift risk
- **Inflation adjustment** → apply CPI change since last rate update to show real purchasing power loss

**Step 4: Surface Drift Flags**
Apply these thresholds to generate alerts:
- 🔴 **Critical drift**: Current rate is >20% below market median
- 🟡 **Moderate drift**: Current rate is 10–20% below market median
- 🟢 **Competitive**: Within 10% of market median
- ⭐ **Premium positioning**: At or above 75th percentile

**Step 5: Generate Increase Recommendations**
For each flagged service:
- Calculate the specific dollar or percentage increase needed to reach market median
- Suggest a staged increase schedule (e.g., 10% now, 10% in 6 months) if gap exceeds 25%
- Flag which services carry the highest revenue impact if corrected first
- Note any market conditions that justify holding rates (saturated niche, client retention risk)

## Output Format

Produce a **Market Rate Drift Report** structured as follows:

---

**MARKET RATE DRIFT REPORT**
*Generated: [date] | Last rate update: [date provided]*

**Summary Verdict**
One sentence: overall competitive position (e.g., "Your rates are 18% below market median and have lost an estimated 14% in real value since your last increase in 2022.")

**Service-by-Service Breakdown**
| Service | Your Rate | Market Median | Market 75th %ile | Gap | Drift Status |
|---|---|---|---|---|---|
| [Service name] | $X | $Y | $Z | -$A (-X%) | 🔴/🟡/🟢/⭐ |

**Inflation Erosion Summary**
- Rate last updated: [date]
- CPI change since then: X%
- Effective purchasing power loss: $X per [hour/project]

**Priority Actions**
Numbered list of 3–5 specific rate corrections, ordered by revenue impact. Each item includes the exact new rate to set and a suggested effective date.

**Benchmark Sources Used**
Bulleted list of specific data sources referenced for this analysis.

---

Keep the report under one page. Use plain language. Flag data gaps honestly if benchmark data for a niche is limited.
