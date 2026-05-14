---
name: sales-proposal-version-diff-tracker
category: sales
description: >
  Analyzes and compares multiple versions of a sales proposal to surface meaningful changes in scope, pricing, terms, or conditions across negotiation rounds. Use when someone says "what changed between these proposals," asks to "compare proposal versions," wants to "track negotiation changes," needs to "see what was added or removed from the contract," or is trying to "understand how terms evolved across drafts."
tags: [sales, proposals, negotiation, version-control, diff]
author: community
---

# Sales Proposal Version Diff Tracker

This skill compares two or more sales proposal versions side-by-side and produces a structured summary of every meaningful change across scope, pricing, terms, and conditions so sales teams can track negotiation progress and avoid surprises at close.

## Comparison Workflow

1. **Identify proposal versions**: Ask the user to provide the full text or structured content of each proposal version, labeled by round or date (e.g., V1, V2, V3 or "Initial," "After Call 1," "Final").

2. **Segment each proposal** into these standard categories before comparing:
   - Scope of work / deliverables
   - Pricing (line items, totals, discounts, payment terms)
   - Contract terms (duration, renewal, termination clauses)
   - SLAs, guarantees, or performance commitments
   - Legal or compliance language
   - Special conditions or one-offs

3. **Perform a category-by-category diff** for each pair of consecutive versions:
   - Flag additions (new items or clauses)
   - Flag removals (items dropped from prior version)
   - Flag modifications (same item, changed value or language)
   - Flag unchanged items explicitly so the user knows they were reviewed

4. **Assess negotiation direction** for each change:
   - Buyer-favorable: change benefits the customer (price reduction, expanded scope, relaxed terms)
   - Seller-favorable: change benefits the vendor (price increase, reduced scope, stricter terms)
   - Neutral: editorial or formatting changes with no commercial impact

5. **Flag high-risk changes**: Highlight any modifications to payment terms, liability caps, termination-for-convenience clauses, IP ownership, or total contract value exceeding 10% swing.

6. **Summarize negotiation momentum**: After all diffs are complete, provide a one-paragraph narrative of how the deal has moved—who made concessions, what categories saw the most churn, and whether the current version favors buyer or seller overall.

## Output Format

Produce a structured report with the following sections:

**Version Comparison Header**
- Versions compared (e.g., V1 → V2 → V3)
- Date or round labels if provided
- Total number of changes detected per version jump

**Change Table** (one table per version transition)
| Category | Item | V[N] Value | V[N+1] Value | Change Type | Direction |
|---|---|---|---|---|---|

Use "—" for items not present in a version. Bold any high-risk changes in the table.

**High-Risk Change Alerts**
Bulleted list of changes that materially affect commercial or legal exposure, with a one-line explanation of the risk.

**Negotiation Momentum Summary**
2–4 sentences summarizing the overall arc of negotiations, concession patterns, and current deal posture.

**Recommended Next Steps** (optional, if context supports it)
2–3 tactical suggestions for the sales rep based on what the diff reveals (e.g., "Scope was quietly expanded in V3 without a price adjustment—consider flagging before signature").

Keep the report scannable. Use tables for changes, bullets for alerts, and plain prose for the summary. Do not summarize what was unchanged unless the user asks.
