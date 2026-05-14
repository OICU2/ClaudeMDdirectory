---
name: competitor-win-loss-pattern-report
description: >
  Aggregates win and loss data by competitor to surface recurring deal patterns, pricing thresholds, and feature gaps driving competitive outcomes. Use when someone says "why are we losing to [competitor]", asks about competitive win rates, wants to understand deal patterns against specific rivals, needs to identify feature gaps hurting pipeline, or is preparing a competitive battlecard or strategy review.
category: sales
tags: [competitive-intelligence, win-loss, deal-analysis, sales-strategy, battlecards]
author: community
---

# Competitor Win-Loss Pattern Report

This skill analyzes provided win/loss deal data by competitor to identify recurring patterns, pricing pressure points, and feature gaps so sales and product teams can take targeted corrective action.

## Analysis Workflow

1. **Collect input data** — Ask the user to provide deal records in any available format (CSV, CRM export, pasted table, or freeform notes). Required fields: deal outcome (won/lost), competitor named, deal size, close date, loss reason or notes. Optional: sales rep, industry, deal stage lost.

2. **Segment by competitor** — Group all deals by named competitor. If competitor is unlisted or "unknown," flag as a separate bucket for review.

3. **Calculate win/loss metrics per competitor**
   - Win rate (%) = wins / (wins + losses)
   - Average deal size for wins vs. losses
   - Average sales cycle length for wins vs. losses
   - Volume of deals (to distinguish statistically significant patterns from noise; flag competitors with fewer than 5 deals as low-confidence)

4. **Extract recurring patterns from deal notes**
   - Pricing thresholds: Identify deal sizes or discount depths where losses spike
   - Feature gaps: Catalog specific features, integrations, or capabilities mentioned in loss reasons; count frequency
   - Decision criteria: Note recurring buyer objections, evaluation criteria, or stakeholder types linked to losses
   - Win triggers: Identify conditions, messaging, or deal characteristics correlated with wins

5. **Rank competitors by impact** — Sort by total deals influenced, then by win rate descending. Highlight the top 3 competitors driving the most losses.

6. **Surface actionable insights**
   - Identify the single most common loss reason per competitor
   - Flag any pricing threshold above which win rate drops significantly
   - List the top 3 feature gaps mentioned across all losses
   - Note any competitors where win rate is improving or declining over time if date data is available

7. **Flag data gaps** — Call out missing fields, small sample sizes, or ambiguous loss reasons that limit confidence in any finding.

## Output Format

Produce a structured markdown report with the following sections:

**Executive Summary** (3–5 bullet points): Overall win rate, top competitor threats, most critical feature gap, and one immediate recommended action.

**Competitor Breakdown Table**:
| Competitor | Deals | Win Rate | Avg Deal Size (W) | Avg Deal Size (L) | Top Loss Reason |
|---|---|---|---|---|---|
(One row per competitor, sorted by total deals descending)

**Pattern Deep-Dives** (one subsection per top-3 competitor):
- Win rate trend (improving/declining/stable)
- Pricing threshold finding (if detectable)
- Top 2–3 feature gaps with mention count
- Recommended counter-move (talk track adjustment, feature request priority, or pricing strategy)

**Cross-Competitor Feature Gap Summary**: Ranked list of features mentioned in loss reasons across all competitors, with frequency count and which competitors cited them.

**Data Confidence Notes**: Flag low-sample competitors, missing fields, or ambiguous notes that should be validated before acting on findings.

Report length: concise — aim for one page of executive summary plus tables, expandable on request.
