---
name: ops-cost-driver-attribution-map
description: >
  Traces root cost drivers behind major operational expense categories to support targeted reduction initiatives. Use when someone says "we need to understand why costs are so high," asks about what's driving operational expenses, wants to identify the biggest cost levers in the business, needs to break down spending into controllable vs. uncontrollable factors, or is preparing a cost reduction plan and needs to know where to focus first.
category: operations
tags: [cost-analysis, expense-attribution, operational-efficiency, cost-reduction, financial-ops]
author: community
---

# Ops Cost Driver Attribution Map

This skill maps each major operational expense category to its underlying root drivers so Claude can produce a structured attribution analysis that tells teams exactly where money is going and why.

## Cost Driver Attribution Workflow

1. **Identify expense categories**: List all major operational cost buckets (e.g., labor, infrastructure, vendor contracts, logistics, facilities, tooling, compliance). Ask the user to confirm or provide their own if they have a specific P&L structure.

2. **Pull or estimate spend figures**: Request actual spend data if available. If not, work with estimates or percentages of total opex. Assign a dollar amount or relative weight to each category.

3. **Decompose each category into root drivers**: For every expense line, drill into 2–4 specific causes. Examples:
   - Labor costs → headcount growth, overtime rates, contractor mix, turnover/rehiring costs
   - Infrastructure → unused capacity, scaling inefficiency, redundant tooling, egress fees
   - Vendor contracts → auto-renewals, scope creep, underutilized seats, lack of consolidation
   - Logistics → carrier mix, last-mile inefficiency, return rates, demand forecasting errors

4. **Classify each driver**: Tag every root driver as one of:
   - **Controllable** (can be reduced with operational changes)
   - **Semi-controllable** (requires negotiation, process change, or longer timeline)
   - **Fixed/Structural** (committed costs unlikely to move in <12 months)

5. **Estimate impact potential**: For each controllable or semi-controllable driver, assign a rough reduction potential (high / medium / low) based on typical benchmarks or user-provided context.

6. **Rank by leverage**: Sort drivers by: (spend weight × reduction potential) to surface the highest-impact targets first.

7. **Flag interdependencies**: Note where reducing one driver may increase another (e.g., cutting headcount may increase contractor spend or overtime).

## Output Format

Produce a structured attribution map with the following sections:

**1. Expense Category Summary Table**
| Category | Est. Spend / % of Opex | Top Root Drivers | Classification | Reduction Potential |
|---|---|---|---|---|
(One row per major expense category, 5–10 rows typical)

**2. Root Driver Detail**
For each category, a short bullet list (3–5 bullets) expanding on each root driver with a one-line explanation of why it's occurring and what evidence or assumption supports it.

**3. Priority Reduction Targets**
A ranked list of the top 3–5 cost drivers to act on first, with:
- The driver name
- Estimated opex impact
- Suggested intervention type (renegotiate, eliminate, automate, consolidate, restructure)
- Effort level (low / medium / high)

**4. Structural Cost Acknowledgment**
A brief paragraph (3–5 sentences) naming the fixed/structural costs that cannot be addressed short-term, so leadership sets realistic expectations.

**5. Recommended Next Steps**
3–5 concrete actions the team should take within 30/60/90 days to begin acting on the highest-leverage drivers.

Total output length: 400–700 words plus the summary table. Use plain language. Avoid jargon unless the user's context calls for it.
