---
name: solo-operator-client-mix-rebalance-plan
description: >
  Analyzes a solopreneur's current client roster across revenue contribution, time/effort required,
  and long-term strategic fit to produce a prioritized action plan. Use when someone says their
  client mix feels off, asks which clients they should drop or focus on, wants to stop trading
  time for money with low-value clients, is feeling overextended across too many accounts, or
  needs to decide where to invest relationship-building energy going forward.
category: solopreneur
tags: [client-management, revenue-optimization, business-strategy, solopreneur, prioritization]
author: community
---

# Solo Operator Client Mix Rebalance Plan

This skill audits a freelancer or solo operator's active client roster and produces a concrete grow/maintain/phase-out recommendation for each relationship based on financial return, effort cost, and strategic alignment.

## Client Analysis Framework

### Step 1: Gather Client Data
Ask the user to provide for each client (or as many as they know):
- **Monthly or annual revenue** from this client
- **Approximate hours per month** spent on work + communication + admin
- **Effective hourly rate** (calculate if not provided: revenue ÷ hours)
- **Stress/friction level** (1–5 scale: 1 = effortless, 5 = draining)
- **Strategic value** (does this client open doors, provide referrals, build portfolio, or is it purely transactional?)
- **Growth potential** (can this relationship expand in scope or revenue?)

If the user doesn't have exact numbers, prompt them to estimate ranges. Do not skip this step.

### Step 2: Score Each Client
Apply a simple scoring grid across four dimensions:

| Dimension | Weight | Scoring |
|---|---|---|
| Effective hourly rate vs. operator's target rate | 30% | Above target = 3, at target = 2, below = 1 |
| Effort/friction cost | 25% | Low friction = 3, medium = 2, high = 1 |
| Strategic fit & referral value | 25% | High = 3, medium = 2, low/none = 1 |
| Growth potential | 20% | Strong = 3, possible = 2, capped = 1 |

Calculate a weighted score (max 3.0) for each client.

### Step 3: Assign a Category
- **Grow (score 2.4–3.0):** Deepen the relationship, increase scope, offer additional services, prioritize response time
- **Maintain (score 1.7–2.3):** Keep the engagement as-is; don't invest extra energy but don't cut either
- **Phase Out (score 1.0–1.6):** Begin a structured wind-down — raise rates to natural attrition, reduce availability, do not renew or expand scope

### Step 4: Identify the Capacity Gap
Calculate total hours currently spent on phase-out clients. This is the capacity the operator will reclaim. Map it to one of:
- Hours needed to serve existing Grow clients better
- Hours available to acquire one high-fit new client
- Hours to build a productized offer or other leverage asset

### Step 5: Draft the Transition Moves
For each Phase Out client, specify the recommended exit mechanism:
- **Rate increase:** Propose a rate that reflects true cost; many will self-select out
- **Scope reduction:** Narrow deliverables to reduce hours without full exit
- **Hard timeline:** Set a clear end date (project completion, contract renewal, quarter end)

For each Grow client, specify one concrete next action:
- Propose an expanded retainer
- Introduce a new service line
- Request an introduction or referral
- Schedule a strategy call to uncover new needs

## Output Format

Produce a structured report with these sections:

**1. Client Roster Scorecard**
A table with columns: Client Name/Label | Monthly Revenue | Effective Rate | Score | Category

**2. Rebalance Summary**
- Total clients: [N]
- Grow: [N clients, $X/mo revenue]
- Maintain: [N clients, $X/mo revenue]
- Phase Out: [N clients, $X/mo revenue, Y hours/mo to reclaim]

**3. Priority Action List**
