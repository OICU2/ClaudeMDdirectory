---
name: ops-knowledge-loss-risk-register
description: >
  Identifies roles and processes where critical operational knowledge is concentrated in a single person and documents the resulting risk exposure with prioritized mitigation steps. Use when someone says "we're too dependent on one person," asks about bus factor or key person risk, wants to audit knowledge silos in their organization, is worried about what happens if a specific employee leaves, or needs to document single points of failure in their team.
category: operations
tags: [risk-management, knowledge-management, succession-planning, bus-factor, operational-resilience]
author: community
---

# Knowledge Loss Risk Register

Audits an organization or team for single-person knowledge dependencies, scores each risk by severity and likelihood, and produces a structured register with mitigation actions.

## Risk Identification Workflow

1. **Gather scope inputs** — Ask the user to describe their team structure, key roles, critical processes, and any known dependencies. If they provide partial info, ask targeted follow-up questions: Who owns the runbooks? Who handles production incidents alone? Who manages vendor relationships?

2. **Extract knowledge dependency candidates** — For each role or process mentioned, identify indicators of single-person risk:
   - Only one person knows how to perform or authorize the action
   - Knowledge lives in someone's head, not in documentation
   - No backup has been trained or tested
   - The person has not taken leave in 12+ months
   - Others describe the person as "irreplaceable" or "the only one who knows"

3. **Score each risk** using two axes:
   - **Impact (1–5):** 1 = minor inconvenience, 5 = full operational halt or compliance breach
   - **Likelihood of loss (1–5):** 1 = person is stable long-term, 5 = near-term departure, health concerns, or burnout visible
   - **Risk Score = Impact × Likelihood** (1–25 scale)
   - Priority tiers: Critical (16–25), High (9–15), Medium (4–8), Low (1–3)

4. **Identify root cause category** for each risk:
   - Undocumented tribal knowledge
   - Sole system access / credentials
   - Exclusive vendor or client relationship
   - Unique technical skill with no internal equivalent
   - Decision-making authority with no delegated backup

5. **Generate mitigation steps** per risk using this decision logic:
   - Critical/High: Recommend immediate shadowing program, documentation sprint, and named backup designation with a 30-day deadline
   - Medium: Recommend knowledge transfer sessions and written runbook creation within 90 days
   - Low: Recommend adding to next quarterly documentation review

## Output Format

Produce a markdown table followed by per-risk detail cards.

**Summary Table**

| # | Role / Process | Knowledge Holder | Root Cause | Impact | Likelihood | Risk Score | Priority |
|---|---------------|-----------------|------------|--------|------------|------------|----------|

**Per-Risk Detail Cards** (one per Critical and High item, sorted by score descending)

```
### RISK-[##]: [Short Title]
**Holder:** [Name or Role]
**Process/System:** [What they own]
**Root Cause:** [Category from step 4]
**Risk Score:** [X/25] — [Priority Tier]
**Current Exposure:** [1–2 sentences describing what breaks if this person is unavailable]
**Mitigation Steps:**
1. [Specific action] — Owner: [role] — Deadline: [timeframe]
2. [Specific action] — Owner: [role] — Deadline: [timeframe]
3. [Specific action] — Owner: [role] — Deadline: [timeframe]
**Success Criteria:** [How you know the risk has been reduced]
```

End output with a **Risk Summary** block: total risks identified, count per priority tier, and the single highest-priority action to take this week.
