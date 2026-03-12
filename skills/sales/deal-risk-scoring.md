---
name: deal-risk-scoring
description: >
  Evaluates open sales opportunities against defined risk factors to identify deals that need immediate attention or intervention. Use when someone says "which deals are at risk," asks about "stalled opportunities," wants to "review pipeline health," needs to "flag deals before the quarter closes," or is trying to "prioritize which deals to save." Produces a structured risk assessment with severity scores and recommended next actions for each flagged opportunity.
category: sales
tags: [pipeline, risk-assessment, forecasting, crm, deal-management]
author: community
---

# Deal Risk Scoring

This skill evaluates open opportunities against a standardized set of risk factors and produces a prioritized list of at-risk deals with actionable intervention recommendations.

## Risk Scoring Workflow

**Step 1: Collect Deal Data**
Request or accept the following fields for each open opportunity:
- Deal name, stage, and close date
- Deal value and budget confirmation status
- Named stakeholders and economic buyer identified (yes/no)
- Last meaningful activity date and type
- Competitor presence (yes/no/unknown)
- Number of days in current stage

**Step 2: Score Each Risk Factor**
Apply points for each risk factor present. Higher score = higher risk.

| Risk Factor | Points |
|---|---|
| No economic buyer identified | 25 |
| Close date within 30 days, stage below "Proposal" | 20 |
| No activity in 14+ days | 15 |
| Budget not confirmed | 15 |
| Stalled in same stage for 21+ days | 15 |
| Active competitor with no differentiation noted | 10 |
| Single-threaded (only one contact) | 10 |
| Missing mutual action plan or next steps | 10 |
| Close date has slipped 2+ times | 15 |
| Champion disengaged or gone dark | 20 |

**Step 3: Assign Risk Tier**
- **Critical (75–135 pts):** Deal is likely to slip or be lost without immediate action
- **High (45–74 pts):** Significant gaps that need resolution within the week
- **Medium (20–44 pts):** Watch closely; assign owner to address gaps
- **Low (0–19 pts):** Healthy deal; standard follow-up sufficient

**Step 4: Identify Top Risk Drivers**
For each deal, list the top 2–3 factors contributing most to the score. Do not list all factors — only the ones with the highest point values that are present.

**Step 5: Generate Intervention Recommendations**
Map each top risk driver to a concrete next action:
- No economic buyer → "Schedule executive sponsor call within 5 business days"
- No activity in 14+ days → "Send re-engagement email with a specific question or resource"
- Budget unconfirmed → "Request formal budget confirmation in next discovery call"
- Single-threaded → "Ask champion to introduce 2 additional stakeholders this week"
- Stalled stage → "Reassess whether deal should be moved to a later close date or disqualified"

## Output Format

Produce a **Deal Risk Scorecard** structured as follows:

---

### Deal Risk Scorecard — [Date]

**Summary:** X of Y deals flagged as Critical or High risk. Total at-risk ARR: $[amount].

---

**[Deal Name]** | Stage: [Stage] | Close Date: [Date] | Value: $[Amount]
- **Risk Score:** [##] — [Tier: Critical / High / Medium / Low]
- **Top Risk Factors:**
  - [Factor 1] (+## pts)
  - [Factor 2] (+## pts)
  - [Factor 3] (+## pts)
- **Recommended Actions:**
  1. [Specific action with owner and timeline]
  2. [Specific action with owner and timeline]

---

Repeat the block above for every deal evaluated, sorted from highest to lowest risk score.

End with a **Pipeline Health Summary** section:
- Total deals reviewed
- Count and % per risk tier
- Total ARR at risk (Critical + High deals only)
- One recommended focus area for the sales team this week

Keep language direct and sales-specific. Avoid vague advice. Every recommendation must have a clear action, an implied or explicit owner, and a timeframe.
