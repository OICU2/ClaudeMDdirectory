---
name: marketing-budget-allocation
description: >
  Distributes a total marketing budget across channels based on historical ROI, campaign goals,
  and audience reach data. Use when someone says "help me allocate my marketing budget," asks
  about "how to split budget across channels," wants to "optimize spend across paid media," needs
  to "divide marketing dollars by campaign," or is "figuring out where to put my ad budget."
category: marketing
tags: [budget, allocation, ROI, channels, media-planning]
author: community
---

# Marketing Budget Allocation

This skill takes a total marketing budget and distributes it across channels using historical ROI data, campaign objectives, and audience reach to produce a prioritized, justified spending plan.

## Allocation Workflow

1. **Gather inputs** — Collect total budget amount, campaign goal (awareness, leads, conversions, retention), target audience profile, and any channel performance data (ROI, CPA, ROAS, CTR) the user has available.

2. **Classify channels** — Sort available channels into three tiers:
   - **Tier 1 (Proven):** Channels with documented positive ROI or strong historical performance
   - **Tier 2 (Growth):** Channels with moderate data or high audience fit but unproven ROI
   - **Tier 3 (Experimental):** New channels with no historical data but strategic relevance

3. **Apply goal-based weighting:**
   - Awareness goal → Weight reach and impressions; favor social, display, video, influencer
   - Lead generation goal → Weight CPA and intent signals; favor search, email, gated content
   - Conversion goal → Weight ROAS; favor retargeting, paid search, affiliate
   - Retention goal → Weight LTV impact; favor email, loyalty programs, CRM campaigns

4. **Distribute budget using tiered split:**
   - Tier 1 channels receive 60–70% of total budget
   - Tier 2 channels receive 20–30% of total budget
   - Tier 3 channels receive 5–10% of total budget
   - Adjust percentages up or down based on user-supplied ROI data

5. **Apply channel floor and ceiling rules:**
   - No single channel should exceed 40% of total budget (reduces concentration risk)
   - No active channel should receive less than $500/month or 3% of budget (below viable spend threshold)
   - If a channel falls below the floor, reallocate its share to Tier 1 channels proportionally

6. **Flag risks and assumptions** — Note any channels where ROI data is missing, where audience overlap is likely, or where seasonal factors should shift allocation.

## Output Format

Produce a structured budget allocation plan with the following sections:

**Budget Summary Table**
| Channel | Tier | Allocated Amount | % of Budget | Rationale (1 line) |
|---|---|---|---|---|

Include one row per channel with dollar amounts rounded to the nearest $100.

**Allocation Logic (3–5 bullet points)**
Explain the top decisions made — why certain channels received priority, what goal drove the weighting, and any data gaps that influenced the split.

**Risk Flags**
List 2–4 specific risks: channels with no ROI data, high audience overlap between channels, or budget amounts below effective spend thresholds.

**Recommended Next Steps**
3 concrete actions the user should take to validate or refine the allocation within 30 days (e.g., run A/B test, pull channel analytics, set performance benchmarks).

Total response length: 400–600 words. Use tables and bullets. No narrative paragraphs.
