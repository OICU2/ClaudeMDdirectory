---
name: solopreneur-client-pause-revenue-impact-model
description: >
  Calculates the revenue gap and cash flow impact when a key client pauses, delays, or reduces a retainer, and surfaces immediate actionable response options. Use when someone says "my client is putting the project on hold," asks about surviving a revenue gap, or wants to understand the financial hit of losing a retainer. Also activates when someone mentions a client going quiet, pausing payments, or needing to assess cash runway after an unexpected income drop.
category: solopreneur
tags: [revenue, cash-flow, retainer, client-management, financial-modeling]
author: community
---

# Client Pause Revenue Impact Model

This skill calculates the exact monthly and runway impact of a paused or reduced client retainer, then surfaces prioritized response options to close the gap — Claude uses it whenever a solopreneur reports a client pausing, delaying, or reducing recurring work.

## Revenue Gap Assessment Workflow

**Step 1 — Capture the numbers**
Ask for (or use figures already provided):
- Monthly retainer value of the paused client ($)
- Current total monthly revenue ($)
- Fixed monthly expenses ($) — rent, software, contractors, debt payments
- Variable monthly expenses ($) — roughly
- Current cash reserve ($)
- Expected pause duration (weeks/months, or "unknown")

**Step 2 — Calculate the impact**

Run these calculations explicitly:

- **Revenue gap**: Paused retainer ÷ total monthly revenue × 100 = % of income lost
- **Monthly shortfall**: (Fixed + variable expenses) − (total revenue − paused retainer) = monthly deficit or surplus
- **Cash runway**: Current cash reserve ÷ monthly shortfall = months of runway (only if in deficit)
- **Break-even threshold**: Minimum monthly revenue needed to cover fixed expenses
- **Recovery gap**: Amount needed per month to return to pre-pause income level

**Step 3 — Classify the severity**

| Severity | Criteria |
|----------|----------|
| 🟢 Low | Surplus remains positive; runway > 6 months |
| 🟡 Medium | Small monthly deficit; runway 3–6 months |
| 🔴 High | Large deficit; runway < 3 months or unknown pause length |

**Step 4 — Surface response options by time horizon**

For each option, state: action, realistic dollar value, and time to revenue.

*This week (0–7 days):*
- Contact 2–3 warm leads or past clients for project work
- Offer existing clients a prepaid block or accelerated engagement
- Audit subscriptions and cut non-essential expenses immediately
- Post availability signal on LinkedIn/community with a specific offer

*This month (8–30 days):*
- Launch a productized service or workshop at a fixed price
- Propose a reduced-scope retainer to the paused client to maintain relationship
- Reach out to referral partners for introductions
- Identify a bridge project that can be scoped and delivered in under 30 days

*Medium-term (30–90 days):*
- Add a second anchor client to reduce single-client revenue concentration
- Build a waitlist or pre-sell future capacity
- Raise rates for new engagements to compress time-to-recovery

**Step 5 — Client relationship guidance**

- Recommend a specific follow-up cadence with the paused client (e.g., check-in at 2 weeks, 30 days)
- Flag whether the pause signals churn risk vs. genuine timing issue based on context provided
- Suggest one low-pressure touchpoint to stay visible without being pushy

## Output Format

Produce a structured report with these exact sections:

**📊 Revenue Impact Summary**
- Table showing: monthly retainer lost, % of income affected, monthly surplus/deficit, cash runway in months

**⚠️ Severity Rating**
- One-line classification (Low / Medium / High) with the key reason

**💰 Gap to Close**
- Dollar amount needed monthly to return to baseline

**🚀 Immediate Action Plan**
- Bulleted list of 3–5 actions ranked by speed-to-revenue, each with estimated dollar value and timeframe

**📅 30/60/90 Day Options**
- 2–3 options per horizon, one sentence each

**🤝 Client Retention Move**
