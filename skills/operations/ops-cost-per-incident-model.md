---
name: ops-cost-per-incident-model
description: >
  Calculates the fully loaded cost of each incident type by combining labor, downtime, and remediation
  expenses to support prioritization and budget decisions. Use when someone asks "how much does this
  incident type cost us," wants to prioritize incidents by financial impact, needs to justify incident
  response investments, is building an incident severity framework, or wants to compare the true cost
  of different failure modes.
category: operations
tags: [incident-management, cost-analysis, operations, prioritization, reliability]
author: community
---

# Ops Cost-Per-Incident Model

This skill builds a fully loaded cost model for each incident type by aggregating labor, downtime revenue loss, and remediation expenses so teams can prioritize response investment objectively.

## Cost Model Workflow

### 1. Collect Incident Inputs
Prompt the user for the following per incident type (or extract from context provided):
- **Incident type name** (e.g., database outage, payment failure, API timeout)
- **Mean time to detect (MTTD)** in minutes
- **Mean time to resolve (MTTR)** in minutes
- **Responders involved**: number of engineers and their average hourly fully loaded cost (salary + benefits + overhead, typically 1.5–2× base)
- **Incident frequency**: occurrences per month or year
- **Revenue at risk per hour**: revenue stream affected × % impacted during incident
- **Customer penalty or SLA breach cost** (if applicable, per incident)
- **Remediation cost**: post-incident work hours × hourly rate + tooling/infra spend to fix root cause

### 2. Calculate Per-Incident Cost Components

For each incident type, compute:

**Labor Cost**
```
Labor = (MTTD + MTTR) / 60 × Number of Responders × Hourly Fully Loaded Rate
```

**Downtime Revenue Loss**
```
Downtime Loss = (MTTR / 60) × Revenue at Risk Per Hour
```

**SLA/Penalty Cost**
```
Penalty = flat fee or contractual amount per breach (enter 0 if none)
```

**Remediation Cost**
```
Remediation = Post-incident hours × Hourly Rate + Infra/Tooling Spend
```

**Fully Loaded Cost Per Incident**
```
Total Per Incident = Labor + Downtime Loss + Penalty + Remediation
```

**Annualized Cost**
```
Annual Cost = Total Per Incident × Incident Frequency Per Year
```

### 3. Build the Comparison Table
Rank all incident types by Annual Cost descending. Flag the top 3 as **Priority Tier 1**.

### 4. Generate Prioritization Recommendations
- Identify which single cost component dominates each incident type (labor-heavy vs. downtime-heavy vs. remediation-heavy)
- For labor-heavy incidents: recommend runbook automation or on-call rotation review
- For downtime-heavy incidents: recommend redundancy, circuit breakers, or failover investment
- For remediation-heavy incidents: recommend root cause elimination or architectural change
- Calculate the break-even point for proposed mitigations: `Mitigation Cost / Annual Incident Cost = Payback Period in Years`

### 5. Assumptions Log
Document every assumption made (e.g., estimated hourly rate, revenue per hour if not provided). Flag inputs with low confidence.

## Output Format

Produce the following in sequence:

**1. Input Summary Table**
| Incident Type | MTTD (min) | MTTR (min) | Responders | Hourly Rate | Revenue/hr at Risk | Frequency/yr |
|---|---|---|---|---|---|---|

**2. Cost Breakdown Table**
| Incident Type | Labor Cost | Downtime Loss | Penalty | Remediation | Cost Per Incident | Annual Cost | Priority Tier |
|---|---|---|---|---|---|---|---|

All currency in USD (or user-specified). Rows sorted by Annual Cost descending. Top 3 rows marked **Tier 1**.

**3. Key Findings** (3–5 bullet points)
- Highest cost incident type and its dominant cost driver
- Total annual incident cost across all types
- Biggest opportunity for cost reduction with estimated savings

**4. Recommendations** (one paragraph per
