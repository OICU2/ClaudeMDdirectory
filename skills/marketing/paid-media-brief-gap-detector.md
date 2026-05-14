---
name: paid-media-brief-gap-detector
description: >
  Reviews a paid media campaign brief and identifies critical missing inputs before launch. Use when someone shares a campaign brief for review, asks if their brief is ready to hand off, or wants to QA a paid media plan before it goes live. Also triggers when someone asks what's missing from their campaign setup or needs a pre-launch checklist run against their brief.
category: marketing
tags: [paid-media, campaign-planning, brief-review, pre-launch, quality-assurance]
author: community
---

# Paid Media Brief Gap Detector

This skill audits a paid media campaign brief against a structured checklist of required inputs and flags any missing, vague, or incomplete elements that could cause campaign execution errors or performance issues.

## Gap Detection Workflow

**Step 1: Parse the brief**
Extract all explicitly stated elements from the submitted brief. Note what is present, partially defined, or entirely absent across each category below.

**Step 2: Check each required input category**

- **Audience Targeting**
  - Primary audience definition (demographics, interests, behaviors, or custom segments)
  - Audience exclusions (past purchasers, existing customers, competitor employees, suppression lists)
  - Lookalike or expansion audience rules, if applicable
  - Audience overlap handling between ad sets or campaigns

- **Budget & Pacing**
  - Total budget and whether it is daily or lifetime
  - Pacing rules (standard, accelerated, or front-loaded)
  - Flight dates with explicit start and end times including timezone
  - Budget allocation split across channels, campaigns, or ad sets
  - Rules for pausing or reallocating budget based on performance thresholds

- **Creative & Rotation**
  - Number of creative variants per ad set or placement
  - Creative rotation method (even rotation, performance-optimized, or sequential)
  - Fallback creative instructions if a variant underperforms or is disapproved
  - Creative refresh triggers or scheduled swap dates
  - Platform-specific format requirements (dimensions, copy limits, video length)

- **Conversion & Measurement**
  - Primary conversion event with exact definition (e.g., "purchase" vs. "add to cart")
  - Secondary or micro-conversion events
  - Attribution window (click-through and view-through)
  - Tracking implementation confirmation (pixel, tag, or SDK status)
  - UTM parameter convention or naming schema

- **Bidding & Optimization**
  - Bid strategy (manual CPC, target CPA, ROAS, maximize conversions, etc.)
  - Bid caps or cost caps if applicable
  - Optimization event alignment with campaign objective

- **Compliance & Governance**
  - Ad copy approval status or review requirement
  - Legal disclaimers or industry-specific restrictions
  - Brand safety settings (content exclusions, placement blocklists)

**Step 3: Classify each gap by severity**

- **Blocker** — Campaign cannot or should not launch without this input
- **High Risk** — Launch is possible but execution or measurement will be materially compromised
- **Low Risk** — Minor gap that should be resolved but will not prevent a functional launch

**Step 4: Generate follow-up questions**
For each flagged gap, write one specific clarifying question the media team must answer to resolve it.

## Output Format

Produce a structured gap report with the following sections:

**Brief Summary**
One sentence confirming what was reviewed and the overall readiness status (Ready / Not Ready / Conditionally Ready).

**Gap Report Table**

| # | Category | Missing or Unclear Input | Severity | Clarifying Question |
|---|----------|--------------------------|----------|---------------------|
| 1 | Audience | No exclusion lists defined | Blocker | Which customer segments or lists should be suppressed from targeting? |
| … | … | … | … | … |

**Blocker Count Summary**
- Blockers: X
- High Risk: X
- Low Risk: X

**Recommended Next Step**
One to two sentences stating whether the brief should be returned for revision, sent for partial review, or cleared for trafficking with noted conditions.

Keep the report scannable. Use the table as the primary output. Do not summarize gaps in prose if they are already captured in the table.
