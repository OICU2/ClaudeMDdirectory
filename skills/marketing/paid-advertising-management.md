---
name: paid-advertising-management
description: >
  Helps plan, launch, and optimize paid advertising campaigns across Google Ads, Meta Ads, and
  other platforms. Use when someone wants to run paid ads, asks about campaign setup or budget
  allocation, needs help improving ad performance or reducing cost-per-click, wants to audit
  an existing ad account, or is trying to scale a paid acquisition channel.
category: marketing
tags: [paid-ads, ppc, google-ads, meta-ads, performance-marketing]
author: community
---

# Paid Advertising Management

Guides campaign strategy, setup, targeting, copywriting, and optimization for paid ad platforms so users can launch effective campaigns and improve ROAS.

## Campaign Planning & Setup

1. **Define campaign objective first** — Clarify the goal (awareness, leads, purchases, installs) before touching any platform. Objective determines bidding strategy, ad format, and success metrics.
2. **Establish budget and target metrics** — Confirm monthly budget, target CPA or ROAS, and acceptable CPM/CPC ranges before recommending spend allocation.
3. **Map the funnel** — Identify TOFU (cold audiences), MOFU (retargeting), and BOFU (high-intent) layers. Assign budget roughly 60/20/20 unless data suggests otherwise.
4. **Audience research** — For Meta: define interest stacks, lookalike seed audiences, and exclusions. For Google: identify keyword match types, negative keyword lists, and audience layering (in-market, custom intent).
5. **Campaign structure** — Use single-theme ad groups (STAG) for Google Search. Use campaign-budget-optimization (CBO) with 3–5 ad sets for Meta. Keep brand and non-brand campaigns separate.
6. **Ad creative brief** — Specify hook, primary value proposition, proof point, and CTA for each ad. Write 3 headline variants and 2 body copy variants per ad set minimum.
7. **Tracking setup checklist** — Confirm conversion events are firing (pixel, CAPI, Google tag), UTM parameters are consistent, and view-through vs. click attribution windows are set intentionally.

## Optimization Workflow

1. **First 7 days** — Do not optimize; let the algorithm learn. Monitor for disapprovals, broken links, and tracking errors only.
2. **Days 7–21** — Pause ad sets with CPM 2× the account average and zero conversions. Kill ads with CTR below 0.5% (Meta) or below 2% (Google Search).
3. **Weekly checks** — Review impression share lost to budget vs. rank (Google), frequency cap (Meta, pause above 4.0 for cold audiences), and search term reports for negative keyword additions.
4. **Scaling rules** — Increase budget by no more than 20% every 3–4 days to avoid resetting learning. Duplicate winning ad sets rather than editing them.
5. **Creative refresh trigger** — Launch new creatives when CTR drops 20% week-over-week or frequency exceeds 3.5.
6. **Bid strategy progression** — Start with Maximize Conversions (Google) or Lowest Cost (Meta), then shift to Target CPA/ROAS once you have 30+ conversions in a 30-day window.

## Platform-Specific Rules

- **Google Search**: Prioritize exact and phrase match. Add 20+ negatives before launch. Use RSAs with 10+ headlines pinning brand name only.
- **Google Performance Max**: Use only when shopping feed or strong asset library exists. Watch search term insights weekly for brand cannibalization.
- **Meta Ads**: Test 3–5 creatives per ad set. Use Advantage+ audiences only after validating manual targeting first. Always run a creative-level breakdown report, not just ad-set level.
- **LinkedIn**: CPCs are high ($8–$15); limit to B2B with ACV > $10K. Use Lead Gen Forms over landing page traffic.
- **YouTube**: 6-second bumpers for retargeting; 15–30 second skippable for cold. Hook must land in first 3 seconds.

## Output Format

Produce structured deliverables based on what is requested:

**Campaign Plan:** Markdown table with columns — Campaign Name | Objective | Platform | Audience | Budget | Bid Strategy | KPI Target

**Ad Copy:** For each ad
