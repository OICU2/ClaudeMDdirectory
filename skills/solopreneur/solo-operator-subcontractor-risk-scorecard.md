---
name: solo-operator-subcontractor-risk-scorecard
description: >
  Evaluates a solopreneur's reliance on individual subcontractors by scoring concentration risk, contract coverage, and backup sourcing readiness. Use when someone says they depend heavily on a specific contractor, asks how exposed they are if a subcontractor leaves, wants to audit their freelancer relationships, is worried about a key vendor disappearing, or needs to know if their subcontractor setup is a business liability.
category: solopreneur
tags: [subcontractors, risk-management, freelancers, business-continuity, vendor-dependency]
author: community
---

# Subcontractor Risk Scorecard

Produces a structured risk scorecard that grades a solopreneur's exposure to subcontractor dependency across three dimensions, then delivers a prioritized action plan to reduce vulnerability.

## Assessment Workflow

**Step 1 — Gather Subcontractor Inventory**
Ask the user to list each active subcontractor or freelancer they rely on. For each one, collect:
- Role/function they perform
- Percentage of total work output or revenue they touch
- Length of the working relationship
- Whether a written contract or agreement exists
- Notice period required (or informal expectation)
- Availability of a vetted backup or alternative

If the user provides partial information, proceed with what's available and flag missing data as assumption gaps.

**Step 2 — Score Each Subcontractor Across Three Risk Dimensions**

For each subcontractor, assign a score of 1–5 on each dimension:

*Concentration Risk (how much of the business depends on this person)*
- 1 = Less than 10% of work/revenue
- 3 = 25–50% of work/revenue
- 5 = More than 50% of work/revenue or single point of failure

*Contract Coverage (how protected is the relationship legally and operationally)*
- 1 = Signed contract with NDA, IP assignment, clear deliverables, and notice period
- 3 = Informal written agreement or email trail only
- 5 = No contract, purely verbal arrangement

*Backup Sourcing Readiness (how quickly could this person be replaced)*
- 1 = Vetted backup identified and warmed up
- 3 = Could find a replacement within 2–4 weeks with effort
- 5 = No backup, specialized skill, or long ramp-up time

Calculate a **Total Risk Score** per subcontractor (max 15). Classify:
- 3–6: Low Risk
- 7–10: Moderate Risk
- 11–15: High Risk — immediate action needed

**Step 3 — Calculate Portfolio-Level Risk**
- Count how many subcontractors fall in each tier
- Flag if any single subcontractor scores 11+ (critical vulnerability)
- Flag if more than 40% of work/revenue runs through subcontractors with no contracts
- Flag if the user has zero backup options across the board

**Step 4 — Generate Prioritized Actions**
For each High Risk subcontractor, prescribe one concrete action per dimension:
- Concentration: identify tasks to redistribute or scope-cap
- Contract: specify the minimum contract elements needed (scope, IP, termination clause, confidentiality)
- Backup: name a sourcing channel (e.g., Toptal, Contra, niche Slack community, referral ask)

For Moderate Risk subcontractors, give one action targeting the weakest dimension.

## Output Format

Produce a scorecard in this structure:

---

**SUBCONTRACTOR RISK SCORECARD**

**Individual Subcontractor Scores**

| Subcontractor | Role | Concentration | Contract | Backup | Total | Risk Level |
|---|---|---|---|---|---|---|
| [Name/Label] | [Role] | [1–5] | [1–5] | [1–5] | [3–15] | Low/Moderate/High |

**Portfolio Summary**
- Total subcontractors assessed: [N]
- High Risk: [N] | Moderate Risk: [N] | Low Risk: [N]
- Critical flags: [list any portfolio-level red flags or "None"]

**Priority Action Plan**

*High Risk — Act Within 30 Days*
[Subcontractor name/label]: [Specific action for their highest-scoring dimension]

*Moderate Risk —
