---
name: renewal-risk-identification
description: >
  Analyzes account usage data, support history, and engagement signals to identify customers at risk of not renewing their contracts. Use when someone says "which accounts are at risk," asks about churn likelihood before renewals, wants to prioritize retention outreach, needs to flag accounts before the renewal window opens, or is building a at-risk customer list for the CS team.
category: sales
tags: [renewals, churn-prevention, customer-success, retention, account-health]
author: community
---

# Renewal Risk Identification

This skill evaluates account signals across usage, support, engagement, and relationship dimensions to surface customers likely to churn before the renewal window opens, and explains why each account is at risk.

## Risk Identification Workflow

**Step 1: Collect Account Signals**
Gather the following data points for each account being evaluated:
- Product usage metrics: login frequency, feature adoption rate, active users vs. licensed seats, time since last login
- Support history: open tickets, ticket volume trend (last 90 days), escalations, unresolved issues
- Engagement signals: QBR attendance, response rate to CSM outreach, NPS/CSAT scores, community activity
- Relationship signals: champion turnover, executive sponsor changes, budget holder reorgs
- Commercial signals: contract value, renewal date, expansion or contraction history, payment delays

**Step 2: Score Each Risk Dimension**
Rate each dimension Low / Medium / High risk using these thresholds:

| Signal | Low Risk | Medium Risk | High Risk |
|---|---|---|---|
| Usage | >80% seat utilization, weekly logins | 40–80% utilization, monthly logins | <40% utilization, no logins 30+ days |
| Support | 0–1 open tickets, no escalations | 2–3 tickets, 1 past escalation | 4+ tickets, active escalation, unresolved critical issues |
| Engagement | Attends QBRs, replies within 48h | Sporadic attendance, slow replies | Missed last 2 QBRs, unresponsive 2+ weeks |
| Relationship | Champion stable, exec sponsor engaged | Champion changed once | Champion gone, no exec sponsor identified |
| Commercial | On-time payments, expansion history | Flat renewal, minor late payment | Contraction requested, payment issues, budget freeze mentioned |

**Step 3: Calculate Overall Risk Tier**
- **Critical (Red):** 3+ dimensions rated High, or renewal date within 90 days with 2+ High signals
- **High (Orange):** 2 dimensions rated High, or 1 High + 3 Medium
- **Medium (Yellow):** 1 High dimension or 3+ Medium signals
- **Low (Green):** 0–1 Medium signals, no High signals

**Step 4: Identify Root Cause**
For each account rated Medium or above, identify the primary risk driver from this taxonomy:
- Adoption failure (product not embedded in workflow)
- Value gap (ROI not demonstrated or articulated)
- Relationship gap (no internal champion or executive buy-in)
- Competitive threat (mentions of alternatives, RFP activity)
- Internal disruption (reorg, budget cuts, M&A)
- Support dissatisfaction (unresolved issues damaging trust)

**Step 5: Recommend Intervention**
Map each risk tier and root cause to a specific action:
- Critical + Adoption failure → Executive Business Review within 2 weeks, assign implementation support
- Critical + Relationship gap → Identify new champion, request exec-to-exec call
- High + Value gap → Deliver ROI report, schedule success metrics review
- High + Support dissatisfaction → Escalate open tickets, assign dedicated support contact
- Medium + any → Schedule proactive check-in, send relevant case studies or product updates
- All Critical accounts → Flag for VP-level review and renewal save plan

## Output Format

Produce a structured risk report in this format:

---

**Renewal Risk Report**
*Generated for: [Account list or segment name]*
*Renewal Window: [Timeframe analyzed]*

---

**CRITICAL RISK ACCOUNTS** *(Action required immediately)*

**[Account Name]**
- Renewal Date: [Date]
- Contract Value: $[ARR]
- Risk Tier: Critical
- Primary Risk Driver: [Root cause from taxonomy]
- Key
