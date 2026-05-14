---
name: expansion-opportunity-identification
category: sales
description: >
  Analyzes existing customer accounts to surface prioritized upsell and cross-sell opportunities based on usage patterns, contract gaps, and growth signals. Use when someone says "find expansion opportunities in my accounts," asks about "which customers are ready to upgrade," wants to "identify upsell potential," needs to "find cross-sell openings," or is looking to "grow revenue from existing customers."
tags: [upsell, cross-sell, account-expansion, revenue-growth, customer-analysis]
author: community
---

# Expansion Opportunity Identification

This skill analyzes existing customer account data to identify and prioritize upsell and cross-sell opportunities, giving revenue teams a clear, ranked action list with supporting rationale.

## Analysis Workflow

### 1. Collect Account Inputs
Request the following data for each account being analyzed:
- Current products/tiers in use and contract value
- Usage metrics (seats used vs. licensed, feature adoption rates, API call volumes, storage consumption)
- Contract details (renewal date, current term length, discount level)
- Recent support tickets, NPS scores, or health scores
- Company firmographics (headcount growth, funding rounds, new office locations, job postings)
- Engagement signals (QBR attendance, champion activity, executive involvement)

If data is incomplete, flag the gaps and proceed with available information, noting confidence level.

### 2. Apply Expansion Signal Scoring
Evaluate each account across four signal categories:

**Usage Pressure Signals** (capacity expansion opportunity)
- Utilization above 80% of licensed capacity
- Frequent hits against plan limits or rate limits
- Multiple power users sharing a single seat

**Adoption Gap Signals** (cross-sell or tier upgrade opportunity)
- Core features used but premium features untouched
- Departments or teams not yet on the platform
- Integrations available but not activated

**Growth Intent Signals** (proactive expansion opportunity)
- Recent funding, acquisition, or headcount growth
- Job postings for roles that indicate new use cases
- Customer has launched new products or entered new markets

**Relationship Signals** (timing and receptivity)
- High NPS or recent positive support resolution
- Active champion with internal influence
- Upcoming renewal within 90 days
- QBR scheduled or recently completed

### 3. Identify Specific Expansion Plays
For each account, map signals to concrete plays:
- **Seat expansion**: add users, teams, or departments
- **Tier upgrade**: move from Starter → Professional → Enterprise
- **Add-on modules**: specific features or product lines not currently licensed
- **Multi-year conversion**: move from month-to-month or annual to multi-year
- **Usage-based overage conversion**: convert recurring overages into a higher plan

### 4. Prioritize the Account List
Rank accounts using this logic:
1. **High urgency**: 3+ signals present, renewal within 90 days, or usage above 90% capacity
2. **Medium urgency**: 2 signals present, renewal within 6 months, or strong growth indicators
3. **Low urgency**: 1 signal present, long runway to renewal, limited engagement data

### 5. Build the Outreach Rationale
For each prioritized account, draft a one-paragraph internal justification that explains:
- What the specific opportunity is
- Which data points support it
- What objection or blocker to anticipate
- Recommended next action and owner

## Output Format

Produce a structured expansion opportunity report with the following sections:

---

**EXPANSION OPPORTUNITY REPORT**
*Generated: [date] | Accounts Analyzed: [N]*

---

**PRIORITY 1 — ACT NOW**

| Account | Current ARR | Opportunity | Estimated Expansion Value | Key Signal | Next Action |
|---------|-------------|-------------|--------------------------|------------|-------------|
| [Name]  | $X          | [Play type] | $X–$X                    | [Signal]   | [Action]    |

*Rationale for each account: 2–3 sentences explaining the opportunity and recommended approach.*

---

**PRIORITY 2 — NURTURE**

[Same table format as Priority 1]

---

**PRIORITY 3 — MONITOR**

[Same table format as Priority 1]

---

**DATA GAPS & CONFIDENCE NOTES**
- List accounts with missing data and what additional information would improve the analysis
