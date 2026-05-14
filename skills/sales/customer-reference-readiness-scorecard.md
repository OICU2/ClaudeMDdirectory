---
name: customer-reference-readiness-scorecard
description: >
  Evaluates existing customer accounts against key criteria to produce a ranked reference readiness scorecard. Use when someone says "which customers could be references," asks about finding customers ready to speak with prospects, or wants to identify strong candidates for case studies, testimonials, or reference calls. Also activates when someone needs to prioritize reference outreach or build a reference program pipeline.
category: sales
tags: [customer-references, account-management, sales-enablement, customer-success, scoring]
author: community
---

# Customer Reference Readiness Scorecard

This skill scores and ranks customer accounts based on tenure, NPS, deal size, engagement, and relationship health to identify who is most prepared to serve as a sales reference.

## Scoring Workflow

### Step 1: Collect Account Data
Ask the user to provide a list of customer accounts with as many of the following fields as available:
- **Tenure** — how long they have been a customer
- **NPS score** — most recent Net Promoter Score (0–10 scale)
- **Deal size / ARR** — annual contract or revenue value
- **Engagement level** — frequency of product usage, QBR participation, or support ticket volume (low/medium/high)
- **Relationship health** — CSM-reported sentiment (red/yellow/green)
- **Recent wins** — documented ROI, case study content, or notable outcomes
- **Previous reference activity** — whether they have given references before

If data is missing for a field, note it and proceed with available inputs.

### Step 2: Score Each Account
Apply this point system per account:

| Criteria | Points |
|---|---|
| Tenure ≥ 2 years | 20 pts |
| Tenure 1–2 years | 10 pts |
| NPS 9–10 | 25 pts |
| NPS 7–8 | 15 pts |
| NPS 0–6 | 0 pts |
| ARR in top 25% of portfolio | 20 pts |
| ARR in middle 50% | 10 pts |
| Engagement level: High | 15 pts |
| Engagement level: Medium | 8 pts |
| Relationship health: Green | 15 pts |
| Relationship health: Yellow | 5 pts |
| Documented ROI or case study | 10 pts |
| Previous reference activity | 10 pts |

**Maximum score: 115 points**

### Step 3: Apply Disqualifiers
Automatically flag accounts as **Not Ready** if any of the following are true:
- NPS score ≤ 6
- Open escalation or active churn risk
- Relationship health is Red
- Account is in active contract negotiation or renewal dispute

### Step 4: Rank and Tier Accounts
Group accounts into three tiers:
- **Tier 1 — Reference Ready (80–115 pts):** Prioritize for immediate outreach
- **Tier 2 — Nearly Ready (50–79 pts):** Nurture and re-evaluate in 60–90 days
- **Tier 3 — Not Ready (<50 pts or disqualified):** Do not engage for references now; note gaps to address

### Step 5: Identify Reference Use Cases
For each Tier 1 account, suggest the best reference format based on their profile:
- High NPS + documented ROI → Case study or public testimonial
- Long tenure + high engagement → Peer reference call or analyst interview
- Large ARR + senior relationship → Executive reference or event speaker
- Previous reference activity → Fast-track for new prospect calls

## Output Format

Produce a structured scorecard with the following sections:

**1. Summary Table**
A ranked table with columns: Account Name | Score | Tier | Top Strengths | Recommended Use Case | Notes/Flags

**2. Tier 1 Reference-Ready Accounts (detailed)**
For each Tier 1 account, a short block containing:
- Score breakdown by category
- Best reference format(s)
- Suggested outreach talking points (1–2 sentences)
- Any cautions or nuances to be aware of

**3. Tier 2 Nurture List**
A bulleted list of accounts with their score and one specific action to improve readiness (e.g., "Schedule QBR
