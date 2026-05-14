---
name: trial-usage-to-sales-signal-mapper
description: >
  Analyzes trial account usage data to identify purchase-ready prospects and map outreach timing.
  Use when someone wants to identify which trial users are ready to buy, asks about converting
  trial accounts to paid, needs to prioritize sales outreach based on product usage, wants to
  spot high-intent signals in free tier behavior, or is trying to figure out which trials are
  going cold. Surfaces feature adoption milestones that correlate with conversion likelihood.
category: sales
tags: [trial-conversion, product-led-growth, sales-signals, usage-analytics, outreach-triggers]
author: community
---

# Trial Usage to Sales Signal Mapper

Maps trial account feature adoption milestones to ranked sales outreach triggers so reps know exactly who to contact, why, and when.

## Signal Mapping Workflow

### Step 1: Collect Usage Inputs
Request or accept the following data points per trial account:
- Days remaining in trial
- Features accessed (list)
- Number of active users on the account
- Session frequency (daily/weekly/sporadic)
- Data volume or records created
- Integrations connected (if any)
- Support tickets or help docs viewed

### Step 2: Score Against Signal Tiers

Apply this tiered scoring framework:

**Tier 1 — Hot (Contact within 24 hours)**
- Accessed 3+ core features
- Added 2+ team members to the account
- Connected an external integration (CRM, Slack, API)
- Uploaded or created production-level data (not sample/demo data)
- Visited pricing page 2+ times

**Tier 2 — Warm (Contact within 3 days)**
- Accessed 1–2 core features repeatedly
- Single user with daily sessions (5+ days in a row)
- Viewed advanced feature documentation
- Started but did not complete an integration setup
- Trial is 70%+ elapsed with moderate engagement

**Tier 3 — At Risk (Rescue outreach within 48 hours)**
- No login in last 5+ days
- Only accessed onboarding/setup screens
- Trial is 50%+ elapsed with fewer than 3 sessions total
- Viewed cancellation or downgrade docs

**Tier 4 — Cold (Nurture sequence, no direct rep time)**
- Single session at trial start, no return
- Only opened welcome email, never logged in
- Trial expired with fewer than 2 sessions

### Step 3: Map Milestone to Outreach Message

For each account, pair the trigger with a specific outreach angle:

| Milestone Detected | Outreach Angle |
|---|---|
| Team members added | "Looks like you're bringing the team in — here's how to set permissions and scale access." |
| Integration connected | "You connected [Tool] — here's how customers use that combo to automate [specific workflow]." |
| High data volume created | "You've already got real data in the system — let's talk about what happens at scale." |
| Pricing page visited | "Noticed you were checking out plans — happy to walk through what fits your use case." |
| Feature used repeatedly | "You've been deep in [Feature] — most teams at your stage unlock [advanced capability] next." |
| Stalled after setup | "A lot of teams hit a wall at this stage — 15 minutes usually unblocks it." |

### Step 4: Assign Rep Action

For each account output a concrete next action:
- **Hot**: Personalized email + LinkedIn touch + calendar link
- **Warm**: Personalized email referencing specific feature used
- **At Risk**: Short-form rescue email with one-click meeting link
- **Cold**: Enroll in automated nurture sequence, flag for re-engagement in 30 days

## Output Format

Produce a prioritized account list in this structure for each trial account analyzed:

```
Account: [Company Name / Account ID]
Tier: [Hot / Warm / At Risk / Cold]
Signal Detected: [1–3 bullet points naming specific milestones triggered]
Days Left in Trial: [X]
Recommended Action: [Exact next step for the rep]
Outreach Angle: [1–2 sentence personalized message hook]
Contact By: [Date or timeframe]
```

Deliver accounts sorted by tier (Hot first), then by days remaining in trial
