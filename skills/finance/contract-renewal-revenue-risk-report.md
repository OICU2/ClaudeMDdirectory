---
name: contract-renewal-revenue-risk-report
description: >
  Identifies customer contracts approaching expiry, scores renewal risk based on payment history and engagement signals, and quantifies at-risk recurring revenue. Use when someone asks about contracts coming up for renewal, wants to know which customers might churn, needs to understand revenue at risk from expiring agreements, is preparing for a renewal forecast review, or wants to prioritize the sales team's retention outreach.
category: finance
tags: [contracts, revenue-risk, churn, renewal, arr, customer-retention]
author: community
---

# Contract Renewal Revenue Risk Report

This skill analyzes contract expiry timelines, scores each account's renewal likelihood, and produces a prioritized report of at-risk recurring revenue so finance and sales teams can take targeted retention action.

## Workflow

### 1. Gather Contract Data
Request or ingest the following fields for each active contract:
- Customer name and account ID
- Contract start date, end date, and renewal type (auto-renew vs. manual)
- Annual or monthly recurring revenue (ARR/MRR)
- Contract tier or product line

### 2. Define Renewal Windows
Segment contracts into urgency buckets:
- **Critical:** Expiring within 30 days
- **High:** Expiring in 31–60 days
- **Medium:** Expiring in 61–90 days
- **Pipeline:** Expiring in 91–180 days

Exclude auto-renew contracts unless cancellation notice windows are within the above ranges.

### 3. Score Renewal Risk per Account
Assign a risk score (1–10, where 10 = highest risk) using available signals. Weight each factor:

| Signal | Weight | High-Risk Indicator |
|---|---|---|
| Payment history | 30% | Late payments, disputes, partial payments in last 6 months |
| Support ticket volume | 20% | Spike in escalations or unresolved critical tickets |
| Product engagement | 20% | Declining logins, feature usage, or seat utilization |
| Relationship health | 15% | No executive contact in 90+ days, champion departure |
| Contract value trend | 15% | Downsell at last renewal, discount requests |

If data is unavailable for a signal, flag it as unknown and assign a neutral mid-range score for that factor.

### 4. Quantify At-Risk Revenue
For each contract, calculate:
- **At-Risk ARR** = Contract ARR × (Risk Score / 10)
- **Weighted At-Risk ARR** = sum across all accounts in each urgency bucket
- **Total Portfolio At-Risk ARR** = sum across all buckets

### 5. Identify Recommended Actions
For each account scoring 6 or above, assign one of these action codes:
- **EBR** — Executive business review required
- **CSM-ESCALATE** — Customer success manager escalation
- **DISCOUNT-AUTH** — Pre-approve retention discount for negotiation
- **WINBACK-PREP** — Prepare win-back offer if churn probability > 80%
- **MONITOR** — No immediate action; flag for 30-day check-in

## Output Format

Produce a structured report with the following sections:

---

**EXECUTIVE SUMMARY**
- Total contracts reviewed
- Count and ARR by urgency bucket
- Total weighted at-risk ARR
- Top 3 accounts by at-risk ARR (names, ARR, risk score)

---

**RISK-SCORED CONTRACT TABLE**
A table sorted by risk score descending, containing:
`Account | ARR | Expiry Date | Bucket | Risk Score | Key Risk Factors | Recommended Action`

---

**REVENUE AT-RISK SUMMARY**
- Bucketed ARR table (Critical / High / Medium / Pipeline) with count, total ARR, and weighted at-risk ARR per bucket
- Portfolio-level weighted at-risk ARR total

---

**DATA GAPS & CAVEATS**
- List any accounts where signals were missing and how scores were adjusted
- Note any auto-renew contracts excluded and their combined ARR

---

**RECOMMENDED NEXT STEPS**
- Prioritized action list for the sales/CS team (max 5 items)
- Suggested review cadence (e.g., weekly refresh for Critical bucket)

---

Format: Markdown with tables. Length: concise enough to
