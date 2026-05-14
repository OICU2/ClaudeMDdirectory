---
name: marketing-channel-reentry-timing-model
description: >
  Determines optimal timing and conditions for re-entering a previously paused marketing channel based on budget availability, seasonal trends, and competitive landscape shifts. Use when someone asks "when should we restart our paid social campaigns," wants to know if now is a good time to re-engage a dormant channel, or is deciding whether to resume a paused advertising channel after a budget freeze or strategic pivot.
category: marketing
tags: [channel-strategy, budget-planning, reentry-timing, competitive-analysis, seasonality]
author: community
---

# Marketing Channel Reentry Timing Model

This skill evaluates whether and when to re-enter a previously paused marketing channel by scoring budget readiness, seasonal opportunity, and competitive signals against historical channel performance.

## Reentry Evaluation Framework

**Step 1: Gather Channel Context**
Ask the user for the following if not already provided:
- Which channel was paused (e.g., paid search, paid social, display, email, affiliate)
- Why it was paused (budget cut, low ROAS, seasonal strategy, resource constraints)
- How long it has been paused
- Last known performance benchmarks (ROAS, CPL, CPA, CTR)
- Current available monthly budget for this channel

**Step 2: Score Budget Readiness (1–5)**
- 1: Budget covers less than 4 weeks of minimum viable spend
- 2: Budget covers 4–6 weeks at minimum viable spend
- 3: Budget covers 6–8 weeks with no flexibility
- 4: Budget covers 8+ weeks with 10–20% optimization buffer
- 5: Budget covers full quarter with testing reserve included

Minimum viable spend thresholds by channel (use as defaults unless user provides actuals):
- Paid Search: $3,000/month
- Paid Social (Meta/TikTok): $5,000/month
- Programmatic Display: $8,000/month
- Affiliate: $2,000/month in commissions
- Email: $500/month (platform + list costs)

**Step 3: Score Seasonal Opportunity (1–5)**
Map the proposed reentry month against the channel's historical peak periods:
- 1: Entering directly before a known seasonal trough (e.g., paid social in late January for non-retail)
- 2: Neutral period, no seasonal lift expected
- 3: Mild seasonal tailwind, 10–20% above baseline expected
- 4: Strong seasonal window opening within 4–6 weeks
- 5: Peak season begins within 2 weeks or is currently active

If no historical data is available, use industry seasonality benchmarks and flag the assumption.

**Step 4: Score Competitive Signal (1–5)**
Evaluate the competitive environment using any available data (user-provided, industry reports, or publicly observable signals):
- 1: Competitors have significantly increased spend in this channel (auction pressure high)
- 2: Moderate competitive increase, CPCs/CPMs likely elevated 15–30%
- 3: Competitive activity stable compared to pre-pause baseline
- 4: One or more key competitors have reduced spend or exited the channel
- 5: Significant competitive whitespace detected; reduced auction pressure confirmed

Sources to reference if user can share them: SEMrush/SpyFu data, Meta Ad Library, Google Auction Insights reports, industry trade coverage.

**Step 5: Calculate Composite Reentry Score**
Apply weighted scoring:
- Budget Readiness: 40% weight
- Seasonal Opportunity: 35% weight
- Competitive Signal: 25% weight

Formula: `Score = (Budget × 0.40) + (Season × 0.35) + (Competitive × 0.25)`

**Reentry Recommendation Thresholds:**
- 4.0–5.0: **Reenter now** — conditions are favorable across all dimensions
- 3.0–3.9: **Reenter with conditions** — identify which dimension is weakest and address it first
- 2.0–2.9: **Delay reentry** — set a specific reassessment trigger date or milestone
- 1.0–1.9: **Do not reenter** — fundamental conditions are unmet; recommend alternative channels

**Step 6: Define Reentry Conditions (if score < 4.0)**
For any score below 
