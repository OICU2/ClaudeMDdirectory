---
name: client-project-overrun-early-warning-system
category: solopreneur
description: >
  Monitors tracked hours and project deliverables against original estimates to surface scope creep and budget overruns before they kill profitability. Use when someone says "I think this project is running over," asks about whether a client project is on track, wants to know if they're going to lose money on a job, needs to review how a project is tracking against estimate, or is worried a client keeps adding requests.
tags: [project-management, scope-creep, profitability, client-work, time-tracking]
author: community
---

# Client Project Overrun Early Warning System

This skill analyzes hours logged, deliverables completed, and scope changes against the original project estimate to identify overrun risk and give the solopreneur actionable steps to protect their margin.

## Analysis Workflow

### 1. Gather Project Inputs
Ask for the following if not already provided:
- Original project estimate: total hours budgeted and/or fixed price
- Hourly rate (or target effective rate)
- Hours logged to date
- Deliverables completed vs. total deliverables scoped
- Any scope additions requested by the client since kickoff (informal or formal)
- Project completion percentage (owner's gut estimate is fine)

### 2. Calculate Key Metrics
Run these calculations explicitly:

- **Burn Rate %** = (Hours Logged ÷ Hours Budgeted) × 100
- **Deliverable Completion %** = (Deliverables Done ÷ Total Deliverables) × 100
- **Efficiency Ratio** = Deliverable Completion % ÷ Burn Rate %
  - Ratio > 1.0 = on track or ahead
  - Ratio 0.8–1.0 = caution zone
  - Ratio < 0.8 = overrun risk
- **Projected Final Hours** = Hours Logged ÷ Deliverable Completion % (as decimal)
- **Projected Overrun Hours** = Projected Final Hours − Hours Budgeted
- **Projected Margin Impact** = Overrun Hours × Hourly Rate

### 3. Flag Scope Additions
List every client-requested addition since kickoff. For each one, estimate:
- Hours added (actual or estimated)
- Whether it was absorbed without a change order

Tally total uncompensated scope hours and multiply by rate to show money left on the table.

### 4. Assign Risk Level
| Risk Level | Trigger Condition |
|---|---|
| 🟢 On Track | Efficiency Ratio ≥ 1.0, no uncompensated scope |
| 🟡 Watch | Efficiency Ratio 0.8–1.0 OR uncompensated scope < 5% of budget |
| 🔴 Overrun Risk | Efficiency Ratio < 0.8 OR projected overrun > 10% of budget |
| 🚨 Critical | Projected overrun > 25% of budget OR margin goes negative |

### 5. Generate Action Options
Based on risk level, provide 2–3 specific actions from this list:
- Draft a scope change order for uncompensated additions
- Schedule a project check-in call with the client to reset expectations
- Compress remaining scope: identify deliverables that can be simplified or cut
- Raise the issue in writing now to document the overrun cause
- Absorb the overrun and log lessons learned for future estimating

## Output Format

Produce a structured **Project Health Report** with these sections:

---

**PROJECT HEALTH REPORT**
Project: [Name]
Date: [Today]
Risk Level: [🟢 / 🟡 / 🔴 / 🚨]

**By the Numbers**
- Hours logged: X of Y budgeted (Z%)
- Deliverables: X of Y complete (Z%)
- Efficiency Ratio: X.XX
- Projected final hours: XX
- Projected overrun: +X hrs / $X,XXX

**Scope Creep Log**
- [Item 1] — estimated X hrs — change order issued? Yes/No
- [Item 2] — estimated X hrs — change order issued? Yes/No
- Total uncompensated scope value: $X,XXX
