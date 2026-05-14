---
name: inbound-lead-prioritization-model
description: >
  Scores and ranks inbound leads by combining firmographic fit and behavioral intent signals to surface the highest-priority follow-up actions. Use when someone asks "which leads should I call first," wants to prioritize their lead queue, needs to score inbound form submissions, or is trying to figure out who to follow up with today. Also activates when someone shares a list of leads and asks who is most likely to convert.
category: sales
tags: [lead-scoring, inbound-sales, prioritization, intent-signals, pipeline]
author: community
---

# Inbound Lead Prioritization Model

This skill scores inbound leads across fit and intent dimensions and produces a ranked action list so reps know exactly who to contact first and why.

## Scoring Framework

### Step 1 — Collect Lead Data
Gather available signals across two categories:

**Fit Signals (company/contact characteristics):**
- Company size (employee count or revenue band)
- Industry vertical match to ICP
- Job title and seniority level of the contact
- Geography (if market-specific)
- Technology stack (if relevant)

**Intent Signals (behavioral indicators):**
- Number and recency of page visits (pricing page visits weighted highest)
- Content downloads (e.g., case studies, whitepapers, ROI calculators)
- Form responses (demo request > contact us > content download)
- Email engagement (opens, clicks, reply history)
- Time-on-site and pages-per-session
- Repeat visits within a 7-day window

### Step 2 — Apply Scoring Weights

| Signal | Points |
|---|---|
| Demo / trial form submission | 40 |
| Pricing page visit | 20 |
| Case study or ROI content download | 15 |
| Contact us / general inquiry form | 15 |
| 3+ page visits in 7 days | 10 |
| Job title is decision-maker or champion | 10 |
| Company size matches ICP (e.g., 50–500 employees) | 10 |
| Industry matches ICP | 10 |
| Email click or reply | 5 |
| Blog or top-of-funnel content visit only | 2 |

Score each lead by summing applicable points. Maximum theoretical score: 100+.

### Step 3 — Classify Priority Tier

| Score | Tier | Action |
|---|---|---|
| 60+ | 🔴 Priority 1 — Contact within 1 hour | |
| 35–59 | 🟠 Priority 2 — Contact within same business day | |
| 15–34 | 🟡 Priority 3 — Enroll in nurture sequence, follow up within 48 hours | |
| <15 | ⚪ Priority 4 — Add to long-term nurture, no immediate outreach | |

### Step 4 — Identify the Top Follow-Up Action
For each Priority 1 and Priority 2 lead, determine the most relevant outreach angle based on:
- The highest-intent signal they showed (e.g., "visited pricing page twice")
- Their role (tailor message to economic buyer vs. end user)
- Any content they downloaded (reference it directly in outreach)

### Step 5 — Flag Disqualifiers
Automatically downgrade a lead regardless of score if:
- Company size is clearly outside ICP bounds
- Contact is a student, competitor, or consultant (unless consulting is your ICP)
- Email domain is personal (Gmail, Yahoo) with no company context
- Form response indicates no budget or timeline ("just browsing / research only")

## Output Format

Produce a prioritized lead table followed by individual lead summaries for all Priority 1 and Priority 2 leads.

**Lead Priority Table:**
```
| Rank | Name | Company | Score | Tier | Top Signal | Recommended Action |
|------|------|---------|-------|------|------------|-------------------|
| 1    | ...  | ...     | 85    | 🔴 P1 | Demo request + pricing page | Call within 1 hour |
```

**Individual Summary (for P1 and P2 leads):**
```
Lead: [Name] — [Title] at [Company]
Score: [X] | Tier: [P1
