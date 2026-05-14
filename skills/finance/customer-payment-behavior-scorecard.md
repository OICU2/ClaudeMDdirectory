---
name: customer-payment-behavior-scorecard
description: >
  Scores customers by analyzing historical payment timeliness, dispute frequency, and credit risk to prioritize collections outreach and inform account decisions. Use when someone asks about ranking customers by payment reliability, wants to identify high-risk accounts for collections, needs to evaluate a customer's payment history, is trying to prioritize who to contact for overdue invoices, or wants to assess credit risk across a customer portfolio.
category: finance
tags: [collections, credit-risk, payment-analysis, accounts-receivable, scoring]
author: community
---

# Customer Payment Behavior Scorecard

This skill generates a structured risk score for customers based on payment timeliness, dispute history, and credit indicators so collections teams can prioritize outreach effectively.

## Scoring Workflow

1. **Gather required data inputs** — Request or confirm availability of: average days-to-pay vs. net terms, number of late payments in the past 12 months, dispute frequency and resolution rate, current outstanding balance and aging buckets (0–30, 31–60, 61–90, 90+ days), and any known credit holds or NSF events.

2. **Calculate component scores** — Score each dimension on a 0–100 scale:
   - **Payment Timeliness (40% weight):** 100 if always on time; deduct 10 points per average day late beyond terms; floor at 0.
   - **Dispute Frequency (20% weight):** 100 if zero disputes; deduct 20 points per dispute in the past 12 months; floor at 0.
   - **Aging Exposure (25% weight):** 100 if all current; deduct 25 points for any balance in 31–60 bucket, 50 for 61–90, 75 for 90+.
   - **Credit Risk Flags (15% weight):** Start at 100; deduct 50 for any credit hold, 30 for NSF/returned payment, 20 for collections escalation in past 24 months.

3. **Compute weighted composite score** — Multiply each component score by its weight and sum. Round to nearest whole number.

4. **Assign risk tier:**
   - **80–100 → Low Risk (Green):** No immediate action needed; standard follow-up cadence.
   - **60–79 → Moderate Risk (Yellow):** Proactive outreach recommended; review credit terms.
   - **40–59 → High Risk (Orange):** Escalate to collections team; consider payment plan or deposit requirement.
   - **0–39 → Critical Risk (Red):** Immediate collections action; evaluate credit hold or service suspension.

5. **Identify top priority actions** — For each customer, list 1–3 specific recommended next steps based on which score components drove the rating down.

6. **Rank the portfolio** — If scoring multiple customers, sort by composite score ascending so lowest scores (highest risk) appear first.

## Output Format

Produce a scorecard for each customer in this structure:

---
**Customer:** [Name / Account ID]
**Composite Score:** [0–100] | **Risk Tier:** [Low / Moderate / High / Critical]

| Component | Raw Score | Weight | Weighted Score |
|---|---|---|---|
| Payment Timeliness | XX | 40% | XX |
| Dispute Frequency | XX | 20% | XX |
| Aging Exposure | XX | 25% | XX |
| Credit Risk Flags | XX | 15% | XX |
| **Total** | | | **XX** |

**Key Risk Drivers:** [Bullet list of 1–3 factors that most negatively impacted the score]

**Recommended Actions:**
- [Action 1 — specific, assigned to a role if possible]
- [Action 2]
- [Action 3 if applicable]
---

If scoring a portfolio, prepend a **Priority Collections List** — a ranked table of all customers showing Account ID, Composite Score, Risk Tier, and Largest Outstanding Aging Bucket. Keep individual scorecards concise; omit components that scored 100 from the key risk drivers section.
