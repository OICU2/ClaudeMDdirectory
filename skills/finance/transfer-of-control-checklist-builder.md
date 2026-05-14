---
name: transfer-of-control-checklist-builder
description: >
  Generates a transaction-specific checklist that evaluates the five ASC 606 / IFRS 15 indicators of control transfer to determine whether revenue should be recognized at a point in time or over time. Use when someone says "help me figure out when to recognize revenue," asks about point-in-time vs. over-time revenue recognition, wants to assess transfer of control for a contract, needs to document revenue recognition timing, or is trying to apply the five indicators to a specific transaction.
category: finance
tags: [revenue-recognition, asc606, ifrs15, transfer-of-control, point-in-time, over-time]
author: community
---

# Transfer of Control Checklist Builder

This skill builds a transaction-specific checklist evaluating all five control-transfer indicators under ASC 606 / IFRS 15 to produce a documented, defensible conclusion on whether revenue is recognized at a point in time or over time.

## Workflow

### Step 1 — Gather Transaction Facts
Ask the user for the following if not already provided:
- Nature of the good or service (product, license, service, construction, SaaS, etc.)
- Contract terms: payment schedule, delivery milestones, acceptance clauses
- Whether the asset has an alternative use to the entity
- Whether the entity has an enforceable right to payment for work completed to date
- Who bears risk of loss and when title transfers
- Whether the customer can direct the use of the asset during performance

If any facts are missing, prompt specifically for them before proceeding. Do not guess.

### Step 2 — Apply the Three Over-Time Criteria (ASC 606-10-25-27 / IFRS 15.35)
Test each criterion in order. Revenue is recognized over time if **any one** is met:

1. **Customer simultaneously receives and consumes benefits** — Does the customer benefit from the entity's performance as it occurs (e.g., routine services, cleaning, transportation)?
2. **Entity's performance creates or enhances an asset the customer controls** — Is the work-in-progress asset controlled by the customer as it is created (e.g., construction on customer's land)?
3. **No alternative use + enforceable right to payment** — Does the asset have no alternative use to the entity AND does the entity have an enforceable right to payment (including profit margin) for performance completed to date?

For each criterion: state **Met / Not Met**, cite the specific contract fact that supports the conclusion, and note any ambiguities.

### Step 3 — Apply the Five Point-in-Time Indicators (ASC 606-10-25-30 / IFRS 15.38)
If no over-time criterion is met, evaluate all five indicators to determine the point at which control transfers:

| # | Indicator | Assessment | Supporting Fact |
|---|-----------|------------|-----------------|
| 1 | Entity has a present right to payment | Yes / No / Partial | [fact] |
| 2 | Customer has legal title | Yes / No / Partial | [fact] |
| 3 | Entity has transferred physical possession | Yes / No / Partial | [fact] |
| 4 | Customer has significant risks and rewards of ownership | Yes / No / Partial | [fact] |
| 5 | Customer has accepted the asset | Yes / No / Partial | [fact] |

Weight the indicators holistically. Note if any single indicator is strongly determinative (e.g., contractual title retention despite physical delivery).

### Step 4 — Document Ambiguities and Edge Cases
Flag any of the following if present:
- Bill-and-hold arrangements
- Consignment or repurchase agreements (REPO, put/call options)
- Right-of-return provisions
- Principal vs. agent considerations affecting control
- Multiple performance obligations that may transfer at different times

### Step 5 — Conclude
State a clear conclusion: **Over Time** or **Point in Time**, with the specific triggering criterion or indicator cluster, and the recommended revenue recognition event (e.g., "upon customer acceptance," "ratably over 12-month service period," "at shipment when title passes").

## Output Format

Produce a structured checklist document with the following sections:

**Header:** Transaction description, date of analysis, applicable standard (ASC 606 or IFRS 15)

**Section 1 — Transaction Summary:** 3–5 bullet facts
