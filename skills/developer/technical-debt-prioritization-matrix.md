---
name: technical-debt-prioritization-matrix
description: >
  Catalogs identified technical debt items and scores each by remediation cost, risk exposure, and business impact to produce a ranked payoff plan. Use when someone says "we have a lot of technical debt," asks about which debt to tackle first, wants to prioritize refactoring work, needs to justify debt remediation to stakeholders, or is trying to build a technical debt backlog.
category: developer
tags: [technical-debt, refactoring, prioritization, architecture, planning]
author: community
---

# Technical Debt Prioritization Matrix

This skill inventories technical debt items and scores them across multiple dimensions to produce a ranked, actionable remediation roadmap Claude uses when teams need to make strategic decisions about which debt to address and when.

## Debt Inventory and Scoring Workflow

### Step 1: Catalog Debt Items
Collect all debt items from the conversation or ask the user to list them. For each item, capture:
- **Name**: Short label (e.g., "Legacy auth module")
- **Type**: Code debt, architectural debt, test debt, documentation debt, dependency debt
- **Location**: Affected system, service, or codebase area
- **Description**: What the problem is and how it manifests

### Step 2: Score Each Item Across Three Dimensions
Rate each debt item on a 1–5 scale:

**Remediation Cost (1 = cheap/fast, 5 = expensive/slow)**
- 1: Hours of work, isolated change
- 3: Days of work, moderate coordination needed
- 5: Weeks+ of work, cross-team dependencies, high regression risk

**Risk Exposure (1 = low risk, 5 = critical risk)**
- Consider: frequency of change in this area, blast radius of failure, security implications, compliance exposure, on-call burden
- 1: Rarely touched, failure is isolated
- 5: Changed constantly, failure is widespread or catastrophic

**Business Impact of Fixing (1 = minimal, 5 = high)**
- Consider: developer velocity gains, customer-facing reliability, enables new features, reduces incident rate
- 1: Internal cleanup only, no visible outcome
- 5: Directly unblocks revenue, improves reliability, or reduces churn

### Step 3: Calculate Priority Score
Use this formula:

```
Priority Score = (Risk Exposure × 2) + (Business Impact × 2) - Remediation Cost
```

Higher scores = higher priority. The cost is subtracted to penalize expensive work with marginal payoff.

### Step 4: Assign Tier
- **Tier 1 (Score ≥ 9)**: Address in next sprint or quarter — high urgency
- **Tier 2 (Score 5–8)**: Schedule within 2–3 quarters — important but not critical
- **Tier 3 (Score 1–4)**: Backlog — address opportunistically
- **Tier 0 (Score ≤ 0)**: Defer indefinitely — cost outweighs benefit now

### Step 5: Flag Special Conditions
Override scoring for any item that:
- Is a **security vulnerability** → auto-escalate to Tier 1
- **Blocks a known roadmap item** → escalate one tier
- Has a **regulatory or compliance deadline** → flag with hard date

## Output Format

Produce the following sections in order:

---

### Technical Debt Prioritization Matrix

| # | Debt Item | Type | Risk (1–5) | Business Impact (1–5) | Remediation Cost (1–5) | Score | Tier |
|---|-----------|------|------------|----------------------|------------------------|-------|------|
| 1 | [Name]    | [Type] | [R]      | [B]                  | [C]                    | [Score] | [Tier] |

*Sorted descending by Priority Score.*

---

### Tier 1 — Address Now
For each Tier 1 item:
- **Why urgent**: One sentence on the primary risk or impact driver
- **Suggested approach**: Concrete first step (e.g., "Extract auth logic into standalone service with contract tests")
- **Rough effort**: T-shirt size (S/M/L/XL)

---

### Tier 2 — Schedule Soon
List items with a one-line rationale and suggested quarter to target.

---
