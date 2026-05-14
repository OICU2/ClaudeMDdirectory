---
name: solopreneur-client-gifting-roi-tracker
description: >
  Tracks client gifting spend against referral and retention outcomes to identify which gifting actions generate measurable business return. Use when someone wants to know if their client gifts are paying off, asks about connecting gifts to referrals or repeat business, wants to audit their gifting budget for ROI, is trying to decide what gifts to send based on past results, or needs to justify or optimize their client gifting spend.
category: solopreneur
tags: [client-gifting, roi-tracking, referrals, retention, solopreneur]
author: community
---

# Client Gifting ROI Tracker

Analyzes gifting spend against referral and retention outcomes to surface which gift types, timing, and recipient segments actually generate measurable business return.

## Tracking Workflow

### Step 1: Collect Gifting Data
Ask the user to provide (or estimate) the following for each gifting event in the period:
- Client name or segment (active, lapsed, prospect)
- Gift type (physical item, experience, digital, donation, food/beverage)
- Gift cost including shipping and packaging
- Date sent
- Occasion or trigger (holiday, project completion, birthday, unprompted)

### Step 2: Collect Outcome Data
For each client or cohort, ask:
- Did the client renew, upsell, or expand within 90 days? (Yes / No / Pending)
- Did the client refer anyone within 90 days? (Yes / No / Pending)
- Estimated revenue value of any referral received
- Estimated revenue value of any renewal or upsell received
- Any direct acknowledgment or response to the gift? (Yes / No)

### Step 3: Calculate Per-Gift ROI
For each gifting event compute:
- **Revenue attributed**: referral revenue + renewal/upsell revenue tied to that client in the 90-day window
- **Net return**: attributed revenue minus gift cost
- **ROI ratio**: (attributed revenue ÷ gift cost) — flag anything above 5x as high-performing, below 1x as underperforming
- **Attribution confidence**: High (referral explicitly mentioned gift), Medium (referral within 90 days, no explicit link), Low (renewal only, no referral)

### Step 4: Segment Analysis
Group gifting events by:
- Gift type → average ROI per category
- Occasion/trigger → which triggers correlate with highest returns
- Client segment → which segment (active, lapsed, prospect) responds most profitably
- Spend tier (under $25, $25–$75, over $75) → whether higher spend correlates with higher return

### Step 5: Identify Patterns and Dead Weight
Flag:
- Gift types with zero attributed outcomes across 3+ instances → candidates for elimination
- Highest ROI gift type and occasion combination → recommend scaling
- Clients who received gifts but never converted or referred → consider removing from future gifting list
- Clients who referred without receiving a gift → flag as high-priority gifting targets

### Step 6: Budget Recommendation
Based on the data, produce a revised gifting budget recommendation:
- Reallocate spend from low-ROI categories to high-ROI categories
- Suggest a per-client spend ceiling based on client LTV tier
- Recommend a gifting calendar cadence (e.g., post-project completion gifts outperform holiday gifts)

## Output Format

Produce a structured report with the following sections:

**1. Gifting Summary Table**
| Client/Segment | Gift Type | Cost | Outcome | Revenue Attributed | ROI Ratio | Attribution Confidence |
Each row = one gifting event.

**2. Segment Performance Summary**
3–5 bullet points identifying which gift types, occasions, and client segments produced the best and worst returns. Plain language, no jargon.

**3. Dead Weight List**
Bulleted list of gift types or client segments to cut from next cycle, with one-line rationale each.

**4. Top Performers**
Bulleted list of the 2–3 highest-ROI gifting actions with a recommendation to repeat or scale.

**5. Revised Budget Recommendation**
A short paragraph (4–6 sentences) recommending how to reallocate the gifting budget, what cadence to follow, and which client segments to prioritize. Include a suggested total budget with a per-event spend range.
