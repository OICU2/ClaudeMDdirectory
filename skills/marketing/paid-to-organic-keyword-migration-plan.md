---
name: paid-to-organic-keyword-migration-plan
description: >
  Analyzes keyword performance data to build a prioritized migration plan that reduces paid spend on keywords where organic rankings have reached page one, redirecting budget toward unranked or low-ranking terms. Use when someone says "we're ranking organically for keywords we're still paying for," asks about reducing wasted PPC spend, wants to reallocate search budget more efficiently, is looking to identify keyword cannibalization between paid and organic, or needs to justify cutting paid spend on high-performing organic terms.
category: marketing
tags: [seo, ppc, keyword-strategy, budget-optimization, search-marketing]
author: community
---

# Paid-to-Organic Keyword Migration Plan

This skill builds a prioritized, data-driven plan to phase out paid spend on keywords where organic rankings have reached page one, and reallocates that budget toward terms with weak or no organic presence.

## Migration Workflow

### Step 1: Collect Required Inputs
Ask the user to provide (or confirm what's available):
- Current paid keyword list with monthly spend, CPC, clicks, and conversions
- Organic ranking data for those same keywords (position, impressions, clicks from GSC or SEMrush/Ahrefs)
- Organic CTR by position (use industry benchmarks if not available: position 1 = ~28%, position 2 = ~15%, position 3 = ~11%, positions 4–10 = 2–6%)
- Target CPA or ROAS for paid campaigns
- List of priority unranked or low-ranking (positions 11–50) target keywords with search volume

### Step 2: Classify Each Paid Keyword into Migration Tiers

Apply this tiering logic:

**Tier 1 — Immediate Pause (High Confidence):**
- Organic position 1–3 AND organic CTR is capturing estimated traffic close to or exceeding paid click volume
- Paid keyword has low conversion value relative to spend (above target CPA or below target ROAS)
- Action: Pause paid within 30 days

**Tier 2 — Reduce Bid / Test Pause (Medium Confidence):**
- Organic position 4–7
- Paid keyword is moderately converting but organic is climbing
- Action: Reduce bids by 40–60%, monitor for 30 days, then reassess

**Tier 3 — Retain with Monitoring:**
- Organic position 8–10 or ranking is recent (less than 60 days at page one)
- High-converting branded or competitor terms where paid presence adds protective value
- Action: Maintain spend, set calendar reminder to review in 45 days

**Tier 4 — No Change:**
- Organic position 11+ or not ranking
- Core revenue-driving terms
- Action: Keep or increase paid spend; add to organic content roadmap

### Step 3: Calculate Recoverable Budget
For each Tier 1 and Tier 2 keyword, calculate:
- **Monthly spend to recover** = current monthly spend × pause or reduction percentage
- **Estimated organic traffic offset** = (monthly search volume × estimated organic CTR at current position)
- **Traffic gap** = paid clicks − estimated organic clicks (flag if gap > 20%; these need a content push before pausing)

### Step 4: Build Reallocation Targets
From the unranked/low-ranking keyword list:
- Sort by: search volume × commercial intent score (high, medium, low) ÷ estimated difficulty
- Match recovered budget to highest-priority unranked terms
- For each reallocation target, note whether a supporting content asset exists or needs to be created

### Step 5: Set Migration Timeline
- Week 1–2: Pause all Tier 1 keywords; implement bid reductions on Tier 2
- Week 3–4: Launch paid campaigns on reallocation target keywords
- Day 30: Pull performance data — organic traffic change, conversion delta, spend delta
- Day 60: Reassess Tier 2 keywords; check if Tier 3 keywords have strengthened organically
- Day 90: Final reconciliation of budget savings vs. conversion impact

## Output Format

Produce a structured migration plan with the following sections:

**1. Executive Summary (3–5 bullets)**
- Total current paid spend analyzed
- Estimated monthly budget recoverable from Tier 1 + Tier 2
