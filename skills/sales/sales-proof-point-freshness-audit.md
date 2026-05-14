---
name: sales-proof-point-freshness-audit
description: >
  Audits a sales team's proof point library — including case studies, statistics, testimonials, and
  benchmark data — to identify stale or outdated evidence and recommend fresher replacements by use
  case. Use when someone says "our case studies feel outdated," asks whether their proof points are
  still credible, wants to refresh the evidence in a sales deck, or needs to know which statistics
  are too old to use in customer conversations.
category: sales
tags: [sales-enablement, proof-points, case-studies, content-audit, sales-collateral]
author: community
---

# Sales Proof Point Freshness Audit

This skill audits a library of sales proof points to flag stale evidence, explain why each item is at risk, and recommend specific replacement strategies organized by use case.

## Audit Workflow

### 1. Ingest the Proof Point Library
- Accept input as a list, spreadsheet paste, document, or free-form description of existing proof points
- Extract for each item: customer/source name, metric or claim, industry/use case, and date (if provided)
- If dates are missing, flag the item immediately as "date unknown — credibility risk"

### 2. Apply Freshness Rules
Evaluate every proof point against these thresholds:

| Type | Stale After |
|---|---|
| Industry statistics or benchmarks | 2 years |
| Customer ROI / outcome metrics | 3 years |
| Named customer testimonials | 3 years |
| Analyst quotes or reports | 18 months |
| Product capability claims | 12 months |
| Market size / TAM figures | 2 years |

- Flag items that exceed the threshold as **Stale**
- Flag items within 3 months of the threshold as **At Risk**
- Mark the rest as **Current**

### 3. Assess Credibility Risk Beyond Age
For each flagged item, check for additional risk factors:
- Source company has been acquired, rebranded, or gone out of business
- Statistic originated from a vendor-sponsored study (lower credibility)
- Metric references a product version or feature that no longer exists
- Claim references a market condition that has materially changed (e.g., pre-pandemic data used in current decks)

### 4. Map Proof Points to Use Cases
Group all proof points by the sales use case they serve:
- Cost reduction / ROI
- Time savings / efficiency
- Risk mitigation / compliance
- Revenue growth
- Competitive differentiation
- Customer retention / NPS

Identify use cases with zero current proof points — these are **coverage gaps**.

### 5. Recommend Replacements
For each stale or at-risk item, provide one or more of:
- A suggested source to find a replacement (e.g., G2, Gartner, specific analyst firms, internal customer success data)
- A specific question to ask the customer success team to generate a fresh testimonial
- A reframe of the claim that removes the date dependency (e.g., convert a specific year stat to a durable principle)
- A flag to retire the item entirely if no credible replacement category exists

## Output Format

Produce a structured audit report with these sections:

**Executive Summary**
- Total proof points reviewed
- Count of Stale / At Risk / Current items
- Number of use case coverage gaps
- One-sentence overall readiness assessment

**Proof Point Status Table**
A table with columns: Proof Point (truncated) | Type | Age / Date | Status | Risk Reason

**Stale & At-Risk Items — Detail**
For each flagged item:
- `Item:` [the proof point]
- `Status:` Stale or At Risk
- `Risk Reason:` [specific explanation]
- `Recommended Action:` [concrete next step or replacement source]

**Use Case Coverage Map**
List each use case with: number of current proof points, stale count, and a gap flag if coverage is zero.

**Quick Wins**
Bulleted list of the 3–5 highest-priority actions to improve proof point quality immediately.

Length: Scale to the library size. For libraries under 20 items, full detail on every item. For larger libraries, summarize current items in the table and provide full detail only on flagged items.
