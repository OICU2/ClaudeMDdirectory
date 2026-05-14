---
name: ops-change-request-impact-scoring-model
description: >
  Evaluates and prioritizes operational change requests by scoring them across four dimensions: estimated cost, disruption risk, implementation effort, and expected benefit. Use when someone says "we need to assess this change request," asks about "prioritizing our change management queue," wants to "score the impact of a proposed change," needs to "rank pending operational changes," or is trying to "evaluate whether a change is worth implementing." Produces a structured impact score with justification to support change advisory board (CAB) decisions.
category: operations
tags: [change-management, risk-assessment, operations, prioritization, scoring]
author: community
---

# Ops Change Request Impact Scoring Model

This skill scores proposed operational changes across cost, disruption risk, implementation effort, and expected benefit to produce a prioritized ranking for change-management queues.

## Scoring Workflow

### Step 1: Gather Change Request Details
Collect or prompt for the following inputs before scoring:
- **Change description**: What is being changed and why?
- **Systems/services affected**: Which components, teams, or customers are impacted?
- **Change window**: Planned timing, duration, and frequency
- **Rollback plan**: Is one available? How complex is it?
- **Owner/requestor**: Who is accountable?

If any field is missing, ask for it before proceeding.

---

### Step 2: Score Each Dimension (1–5 scale)

Score each dimension independently using the rubrics below.

#### A. Estimated Cost (1 = negligible, 5 = very high)
| Score | Criteria |
|-------|----------|
| 1 | < 1 hour of labor, no tooling or licensing cost |
| 2 | 1–4 hours of labor, minor incidental costs |
| 3 | 4–16 hours, moderate tooling or contractor cost |
| 4 | 16–80 hours or significant budget line item |
| 5 | > 80 hours, major capital expenditure, or external vendor dependency |

#### B. Disruption Risk (1 = none, 5 = critical)
| Score | Criteria |
|-------|----------|
| 1 | No user-facing impact, fully isolated change |
| 2 | Internal-only impact, brief degradation possible |
| 3 | Limited user impact, partial service degradation < 15 min |
| 4 | Significant user impact or potential outage > 15 min |
| 5 | High probability of full service outage or data loss |

#### C. Implementation Effort (1 = trivial, 5 = very complex)
| Score | Criteria |
|-------|----------|
| 1 | Single step, one person, no dependencies |
| 2 | Multi-step, single team, clear runbook exists |
| 3 | Multi-team coordination required, runbook partial |
| 4 | Cross-functional dependencies, testing cycles needed |
| 5 | Architecture-level change, no runbook, high uncertainty |

#### D. Expected Benefit (1 = negligible, 5 = transformative)
| Score | Criteria |
|-------|----------|
| 1 | Cosmetic or preference-driven, no measurable outcome |
| 2 | Minor efficiency gain or quality-of-life improvement |
| 3 | Measurable performance, reliability, or cost improvement |
| 4 | Significant reduction in risk, cost, or user friction |
| 5 | Enables new capability, eliminates critical risk, or major cost savings |

---

### Step 3: Calculate Composite Impact Score

Use the following formula:

```
Impact Score = (Expected Benefit × 2) - (Disruption Risk × 1.5) - (Cost × 1.0) - (Implementation Effort × 0.5)
```

**Normalize to a 0–100 scale:**
- Raw score range: −12.5 (worst) to +10 (best)
- Normalized: `((Raw Score + 12.5) / 22.5) × 100`

**Priority Classification:**
| Normalized Score | Priority |
|-----------------|----------|
| 75–100 | 🟢 High Priority — fast-track approval |
| 50–74 | 🟡
