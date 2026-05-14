---
name: service-level-breach-impact-calculator
description: >
  Calculates the financial and reputational impact of SLA breaches by mapping breach frequency against penalty clauses and customer churn risk. Use when someone says "we missed our SLA," asks about the cost of downtime or service failures, wants to quantify the impact of SLA violations, needs to assess penalty exposure from contract breaches, or is trying to understand churn risk from repeated service failures.
category: operations
tags: [sla, financial-impact, churn-risk, penalties, service-operations]
author: community
---

# SLA Breach Impact Calculator

This skill quantifies the total financial and reputational damage of SLA breaches by combining direct penalty costs, customer churn probability, and long-term revenue exposure, and is triggered whenever someone needs to assess the real cost of missing service commitments.

## Breach Impact Analysis Workflow

### Step 1: Gather Breach Parameters
Collect the following inputs (ask for any that are missing):
- **Breach details**: Which SLA was missed (uptime, response time, resolution time), severity level, and duration
- **Breach frequency**: Number of breaches in the current period (month/quarter/year) and historical baseline
- **Affected customers**: Number of customers impacted, segmented by tier (enterprise, mid-market, SMB) if available
- **Contract terms**: Penalty clauses (e.g., service credits as % of monthly recurring revenue), penalty caps, and cure periods

### Step 2: Calculate Direct Penalty Exposure
- Identify applicable penalty clause for each breach type (flat fee, % of MRR, service credits)
- Multiply per-breach penalty by breach count, respecting any contractual caps
- Apply penalty caps per customer and in aggregate if specified
- Formula: `Direct Penalty = MIN(breach_count × per_breach_penalty, penalty_cap)`

### Step 3: Estimate Churn Risk
Use breach frequency to assign churn probability tiers:
- **1 breach/quarter**: Low risk — 5–10% incremental churn probability
- **2–3 breaches/quarter**: Moderate risk — 15–25% incremental churn probability
- **4+ breaches/quarter or single severe breach**: High risk — 30–60% incremental churn probability

Calculate at-risk ARR:
- `At-Risk ARR = affected_customer_count × average_ARR_per_customer × churn_probability`

### Step 4: Quantify Reputational Impact
- Estimate NPS impact: Each high-severity breach typically shifts NPS by -5 to -15 points
- Flag public exposure risk if breach is reportable (regulatory SLAs, public status pages)
- Estimate referral revenue loss: `NPS_drop × estimated_referral_conversion_rate × average_deal_size`
- Note whether breach triggers escalation rights, audit rights, or contract termination clauses

### Step 5: Calculate Total Impact
Aggregate all components:
```
Total Impact = Direct Penalties + At-Risk ARR + Referral Revenue Loss + Remediation Costs
```
- Add remediation costs if provided (engineering time, incident response, customer success hours)
- Express as point-in-time cost and 12-month projected cost if breach pattern continues

### Step 6: Produce Risk Recommendations
- Flag which customer segments face highest termination risk
- Identify the breach threshold that triggers contract termination rights
- Recommend whether proactive credits or outreach would reduce churn probability
- Suggest SLA renegotiation terms if breach rate is structurally unsustainable

## Output Format

Produce a structured impact report with these sections:

**SLA Breach Impact Summary**
- Breach snapshot: type, severity, frequency, affected customers
- Direct penalty exposure: itemized per breach type, total with cap applied
- Churn risk analysis: at-risk ARR by customer tier, churn probability rationale
- Reputational impact: NPS delta estimate, referral revenue at risk, public exposure flags
- Total impact table:

| Category | Current Period | 12-Month Projection |
|---|---|---|
| Direct Penalties | $X | $X |
| At-Risk ARR (churn) | $X | $X |
| Referral Revenue Loss | $X | $X |
| Remediation Costs | $X | $X |
| **Total** | **$
