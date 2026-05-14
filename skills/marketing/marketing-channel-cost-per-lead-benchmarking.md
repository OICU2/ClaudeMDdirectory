---
name: marketing-channel-cost-per-lead-benchmarking
description: >
  Analyzes and compares cost-per-lead (CPL) metrics across all active acquisition channels against industry benchmarks to surface over- and under-performing investments. Use when someone asks "which channels are giving us the best leads for the money," wants to know if their paid social CPL is too high, needs to justify or cut a channel budget, or is trying to reallocate marketing spend based on efficiency. Also activates when someone shares channel spend data and asks how they compare to competitors or industry standards.
category: marketing
tags: [cost-per-lead, channel-benchmarking, paid-acquisition, marketing-efficiency, budget-optimization]
author: community
---

# Marketing Channel Cost-Per-Lead Benchmarking

This skill compares CPL across all active acquisition channels against industry benchmarks to identify which channels are delivering leads efficiently and which are draining budget, then recommends reallocation actions.

## Benchmarking Workflow

### 1. Collect Channel Data
Ask the user to provide (or extract from shared data):
- Channel name (e.g., Google Search, Meta Ads, LinkedIn, Email, SEO, Webinars)
- Total spend per channel for the period
- Total leads generated per channel for the same period
- Industry vertical and average deal size (if not provided, ask)

Calculate CPL for each channel: `CPL = Total Spend ÷ Total Leads`

### 2. Apply Industry Benchmarks
Use these reference CPL ranges by channel (adjust by industry vertical when specified):

| Channel | B2B Benchmark CPL | B2C Benchmark CPL |
|---|---|---|
| Google Search (Paid) | $75–$200 | $20–$75 |
| Meta Ads (Facebook/Instagram) | $50–$150 | $10–$50 |
| LinkedIn Ads | $150–$400 | N/A |
| Content/SEO (blended) | $30–$100 | $5–$30 |
| Email Marketing | $10–$50 | $2–$15 |
| Webinars/Events | $100–$300 | $30–$100 |
| YouTube Ads | $50–$150 | $10–$40 |
| Affiliate/Partner | $50–$200 | $15–$60 |

Flag verticals with significant CPL variance (SaaS, healthcare, legal, finance, real estate) and apply upward multipliers (1.5×–3×) when relevant.

### 3. Classify Each Channel
Tag each channel with one of four labels:
- ✅ **Efficient** — CPL is at or below benchmark
- ⚠️ **Borderline** — CPL is 10–30% above benchmark
- 🔴 **Overspending** — CPL is >30% above benchmark
- 🌟 **Outperforming** — CPL is >20% below benchmark

### 4. Check Lead Quality Signal
If lead-to-opportunity or lead-to-close rate data is available, weight the CPL analysis by quality:
- A channel with 2× the CPL but 3× the close rate may still be the best investment
- Calculate cost-per-opportunity and cost-per-acquisition when data exists
- Note when CPL alone is insufficient to make a cut/invest decision

### 5. Generate Recommendations
For each flagged channel, provide a specific action:
- 🔴 Overspending: Reduce budget by X%, pause and audit targeting, or cut entirely
- ⚠️ Borderline: A/B test creative or landing page, reassess in 30 days
- ✅ Efficient: Maintain or incrementally scale
- 🌟 Outperforming: Prioritize for budget reallocation from overspending channels

## Output Format

Produce a structured report with these sections:

**1. Channel CPL Summary Table**
Columns: Channel | Spend | Leads | Your CPL | Benchmark CPL | Variance % | Status

**2. Key Findings (3–5 bullet points)**
Lead with the most actionable insight (e.g., "LinkedIn is generating leads at $340 CPL vs. a $200 benchmark — a 70% premium that is not offset by available quality
