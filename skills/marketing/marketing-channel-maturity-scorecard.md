---
name: marketing-channel-maturity-scorecard
description: >
  Evaluates each active marketing channel against standardized maturity criteria to prioritize investment decisions and identify optimization opportunities. Use when someone asks "which channels should we double down on," wants to assess their marketing channel mix, needs to decide where to allocate budget across channels, is asking about channel performance benchmarks, or wants to identify underperforming versus high-potential channels.
category: marketing
tags: [channel-analysis, marketing-strategy, budget-allocation, performance-scoring, optimization]
author: community
---

# Marketing Channel Maturity Scorecard

This skill produces a structured maturity scorecard for all active marketing channels, scoring each against standardized criteria to drive investment prioritization decisions.

## Scoring Workflow

### Step 1: Gather Channel Inventory
Ask the user to list all active marketing channels (e.g., paid search, organic social, email, SEO, paid social, affiliate, podcast, direct mail). If data is available, collect current metrics per channel: monthly reach/audience size, conversion rate, CAC, monthly spend, and time the channel has been active.

### Step 2: Score Each Channel Across Five Maturity Dimensions
Rate each channel 1–5 on every dimension:

**1. Audience Scale** — How large and addressable is the reachable audience?
- 1 = <1K monthly reach | 3 = 10K–100K | 5 = 1M+

**2. Conversion Performance** — How does conversion rate compare to industry baseline?
- 1 = >50% below benchmark | 3 = at benchmark | 5 = >50% above benchmark

**3. Optimization Headroom** — How much untapped improvement potential remains?
- 1 = fully saturated, marginal gains only | 3 = moderate levers available | 5 = largely untested, high ceiling

**4. Data & Attribution Maturity** — How reliably can performance be measured and attributed?
- 1 = no tracking | 3 = partial attribution | 5 = full multi-touch attribution with clean data

**5. Cost Efficiency** — How does CAC or CPL compare to revenue impact?
- 1 = CAC exceeds LTV | 3 = breakeven to 2x LTV | 5 = >3x LTV return

### Step 3: Calculate Composite Score
Sum all five dimension scores (max = 25). Apply investment tier classification:
- **20–25 → Scale Now**: Increase budget aggressively
- **14–19 → Optimize First**: Fix gaps before scaling
- **8–13 → Test & Validate**: Run structured experiments before committing budget
- **1–7 → Pause or Exit**: Redirect resources unless strategic rationale exists

### Step 4: Identify Priority Actions Per Channel
For each channel, flag the lowest-scoring dimension as the primary constraint and prescribe one specific action to address it (e.g., "Install UTM tracking + GA4 event tagging before increasing spend").

### Step 5: Cross-Channel Prioritization
Rank all channels by composite score. Highlight the top 2 Scale Now channels, flag any Pause/Exit channels consuming significant budget, and surface one overlooked channel with high Optimization Headroom that is underinvested.

## Output Format

Produce a structured scorecard with the following sections:

**1. Channel Scorecard Table**
| Channel | Audience Scale | Conversion | Opt. Headroom | Data Maturity | Cost Efficiency | Total | Tier |
Include one row per channel with numeric scores (1–5) and tier label.

**2. Channel-by-Channel Action Cards**
For each channel, a short block:
- **[Channel Name]** | Score: X/25 | Tier: [Label]
- Weakest Dimension: [Name] — [Score]
- Recommended Action: [1 specific, concrete next step]

**3. Investment Priority Summary**
- Scale Now (top picks): [Channel 1], [Channel 2] — brief rationale
- Optimize Before Scaling: [List] — primary fix needed
- Pause/Exit Candidates: [List] — budget currently at risk: $X/mo
- Hidden Opportunity: [Channel] — why it's underinvested

**4. 30-Day Focus Recommendation**
Two to three sentences naming the single highest-leverage action across the entire channel
