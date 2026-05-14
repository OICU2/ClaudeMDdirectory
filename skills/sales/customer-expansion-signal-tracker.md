---
name: customer-expansion-signal-tracker
description: >
  Analyzes customer data to identify accounts primed for upsell or expansion conversations.
  Use when someone says "which accounts are ready to expand," asks about "upsell opportunities
  in our book of business," wants to "find customers who might need more licenses," is trying
  to "prioritize expansion outreach," or needs to "surface growth signals from usage data."
category: sales
tags: [upsell, expansion, customer-success, revenue-growth, account-intelligence]
author: community
---

# Customer Expansion Signal Tracker

Scans product usage data, support tickets, and account activity to surface leading indicators that a customer is ready for an upsell or expansion conversation, then ranks accounts by expansion readiness.

## Signal Detection Workflow

### Step 1: Collect Input Data
Request or accept the following data sources from the user:
- Product usage metrics (logins, feature adoption, API calls, seats used vs. licensed)
- Support ticket history (volume, topics, resolution patterns)
- Account metadata (contract start date, renewal date, current ARR, plan tier)
- CRM notes or recent customer communications (optional but high-value)

If data is unavailable, ask the user to paste CSV exports, summarize key metrics manually, or describe usage patterns in plain language.

### Step 2: Evaluate Each Account Against Expansion Signals

**Green signals (high readiness):**
- Seat utilization ≥ 80% of licensed capacity
- Feature adoption across 3+ core modules
- Power users (top 10% by activity) outnumber casual users
- Support tickets are proactive ("how do I do X?") rather than reactive ("this is broken")
- Customer has referenced a new team, project, or use case in any communication
- Renewal is 60–120 days out and health score is positive

**Yellow signals (watch list):**
- Usage growing month-over-month but not yet near limits
- Customer submitted a feature request that exists in a higher tier
- Support tickets mention a workflow pain point solvable by an add-on
- Single department using the product (expansion into other teams is logical)

**Red flags (not ready — do not expand outreach):**
- Open unresolved support tickets (especially billing or critical bugs)
- Declining usage trend over 60+ days
- Recent negative NPS or CSAT score
- Contract renewal is < 30 days out without prior expansion conversation

### Step 3: Score and Rank Accounts
Assign each account an Expansion Readiness Score (ERS) on a 1–10 scale:
- 3 or more Green signals → ERS 8–10 (Priority)
- 1–2 Green signals + no Red flags → ERS 5–7 (Active Watch)
- Yellow signals only → ERS 3–4 (Nurture)
- Any Red flag present → ERS 1–2 (Hold)

### Step 4: Identify the Expansion Angle
For each Priority or Active Watch account, map the dominant signal to a specific expansion motion:
- High seat utilization → license expansion pitch
- Feature request in higher tier → upgrade pitch
- New team or use case mentioned → land-and-expand pitch
- Multi-department opportunity → enterprise plan pitch
- Add-on solves support pain point → cross-sell pitch

### Step 5: Draft Outreach Trigger
For each Priority account, write one sentence describing the specific, timely reason to reach out (to be used by the AE or CSM as a conversation opener).

## Output Format

Produce a structured account report with the following sections:

---

**Expansion Signal Report**
*Generated: [date]*

---

**Priority Accounts (ERS 8–10)**

| Account | ERS | Top Signal | Expansion Angle | Outreach Trigger |
|---------|-----|------------|-----------------|------------------|
| [Name]  | [#] | [Signal]   | [Motion]        | [1-sentence hook] |

---

**Active Watch Accounts (ERS 5–7)**

| Account | ERS | Top Signal | Next Action |
|---------|-----|------------|-------------|
| [Name]  | [#] | [Signal]   | [Specific follow-up step] |

---

**Hold Accounts (ERS 1–4)**

| Account | ERS | Blocking Reason | Required Before
