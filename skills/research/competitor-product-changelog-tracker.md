---
name: competitor-product-changelog-tracker
description: >
  Monitors and compiles structured logs of competitor product updates, feature releases, and
  discontinuations from public sources into a versioned research record. Use when someone says
  "track what competitors are shipping," asks about recent competitor product changes, wants to
  build a competitive changelog, needs to monitor rival feature releases, or is researching what
  a competitor has discontinued or launched recently.
category: research
tags: [competitive-intelligence, product-research, changelog, market-analysis, monitoring]
author: community
---

# Competitor Product Changelog Tracker

This skill researches, compiles, and formats a structured versioned changelog of competitor product activity from public sources, and is triggered whenever a user wants to track, audit, or summarize what rival products have shipped, changed, or removed.

## Research & Compilation Workflow

1. **Identify competitors and scope**: Confirm which competitor(s) to track, the product area (entire product vs. specific feature category), and the time window (e.g., last 30 days, Q1 2024, past year).

2. **Define source categories to query**: Check the following public source types for each competitor:
   - Official release notes, changelogs, and product blogs
   - Pricing and feature comparison pages
   - App store update histories (iOS App Store, Google Play)
   - GitHub releases and public roadmap boards
   - Press releases and news announcements
   - Social media product announcements (Twitter/X, LinkedIn)
   - Developer documentation version histories

3. **Categorize each update** using these fixed labels:
   - `NEW FEATURE` — net-new capability added to the product
   - `IMPROVEMENT` — enhancement or upgrade to an existing feature
   - `DEPRECATION` — feature flagged for removal or end-of-life
   - `DISCONTINUATION` — feature or product permanently removed
   - `PRICING CHANGE` — plan restructuring, price increase/decrease, or tier change
   - `INTEGRATION` — new third-party connector or API partnership

4. **Assess competitive impact** for each entry:
   - `HIGH` — directly affects your product's differentiation or addressable market
   - `MEDIUM` — relevant but not immediately threatening or advantageous
   - `LOW` — minor or tangential to current competitive positioning

5. **Flag gaps and uncertainties**: Note any source gaps, unverified items, or areas where public data is insufficient. Do not fabricate or speculate beyond what sources support.

6. **Version the record**: Assign a log version (v1.0, v1.1, etc.) and timestamp the research session so future updates can be layered on top as incremental diffs.

## Output Format

Produce a structured markdown document with the following sections:

```
# Competitor Changelog: [Competitor Name]
**Research Date:** YYYY-MM-DD
**Log Version:** v1.0
**Time Window Covered:** [e.g., Jan 2024 – Mar 2024]
**Sources Consulted:** [bulleted list of source types checked]

---

## Summary
[3–5 sentence executive summary of the most significant changes and overall competitive direction observed.]

---

## Changelog Entries

### [YYYY-MM-DD] — [Update Title]
- **Category:** [NEW FEATURE / IMPROVEMENT / DEPRECATION / DISCONTINUATION / PRICING CHANGE / INTEGRATION]
- **Impact:** [HIGH / MEDIUM / LOW]
- **Description:** [1–3 sentences describing what changed and what it means.]
- **Source:** [URL or source description]

[Repeat for each entry, sorted newest-first]

---

## Gaps & Uncertainties
- [List any areas where data was unavailable, paywalled, or unverifiable]

---

## Recommended Follow-Up
- [2–4 specific actions: sources to monitor, pages to bookmark, alerts to set up]
```

- Entries must be sorted newest-first within the changelog.
- Include a minimum of 5 entries if available; surface all high-impact items regardless of count.
- Keep each description factual and source-anchored — no editorializing beyond the impact rating.
- If tracking multiple competitors, produce one document per competitor, then a cross-competitor summary table at the end ranking by volume of HIGH-impact changes.
