---
name: feature-flag-rollout-risk-checklist
description: >
  Generates a structured pre-rollout risk checklist for feature flag deployments, covering dependency conflicts, rollback criteria, and monitoring requirements. Use when someone says "we're rolling out a feature flag", asks about risks before enabling a flag in production, or wants to validate a feature flag deployment plan. Also triggers when someone mentions gradual rollout safety, flag-based releases, or needs a go/no-go checklist for a feature toggle.
category: developer
tags: [feature-flags, deployment, risk-management, rollout, checklists]
author: community
---

# Feature Flag Rollout Risk Checklist

This skill generates a comprehensive pre-rollout risk checklist for feature flag deployments, helping teams identify dependency conflicts, define rollback criteria, and establish monitoring requirements before enabling flags in production.

## Checklist Generation Workflow

1. **Gather flag context** — Ask for or extract: flag name, target percentage/audience, affected services, flag type (boolean, multivariate, kill switch), and deployment environment.

2. **Assess dependency conflicts** — Check for:
   - Other active flags that interact with this flag (flag dependencies or mutual exclusions)
   - Database migrations or schema changes that must precede or follow the flag
   - API version dependencies between services consuming the flag
   - Third-party integrations gated behind the flag
   - Conflicting A/B tests or experiments running in the same user cohort

3. **Define rollback criteria** — Establish explicit thresholds:
   - Error rate spike (e.g., >1% increase in 5xx errors triggers rollback)
   - Latency degradation threshold (e.g., p99 latency exceeds 2× baseline)
   - Business metric drop (e.g., conversion rate falls >5% from control)
   - Time-based checkpoint: if issues appear within first 30 minutes at 1% rollout, halt
   - Identify who has authority to trigger rollback and how fast flag can be disabled

4. **Validate rollback feasibility** — Confirm:
   - Flag can be disabled without a code deployment
   - Data written under the flag state is backward-compatible with flag-off behavior
   - No irreversible side effects (emails sent, payments processed, records deleted) occur at early rollout stages
   - Database state remains consistent if flag is toggled mid-rollout

5. **Define monitoring requirements** — Specify:
   - Which dashboards/alerts must be live before rollout starts
   - Key metrics to watch per rollout stage (1%, 10%, 50%, 100%)
   - Log events that must be emitted when flag evaluates to true/false
   - On-call rotation confirmed and aware of rollout timing

6. **Confirm rollout stage plan** — Validate:
   - Staged percentages defined (e.g., 1% → 5% → 25% → 100%)
   - Minimum soak time between stages (e.g., 24 hours at each stage)
   - Internal/beta users targeted first before general population
   - Geographic or cohort isolation if partial rollout is needed

7. **Final go/no-go gate** — Produce a binary pass/fail verdict for each section before proceeding.

## Output Format

Produce a markdown checklist with the following structure:

```
# Pre-Rollout Risk Checklist: [Flag Name]

**Environment:** [env]  
**Target Audience:** [percentage or segment]  
**Rollout Date:** [date or TBD]  
**Flag Owner:** [team or individual]

---

## ✅ Dependency Conflicts
- [ ] No conflicting active flags identified
- [ ] Database migrations completed and verified
- [ ] Downstream API versions compatible
- [ ] No overlapping experiments in same cohort
- [ ] Third-party integrations validated

## ✅ Rollback Criteria
- [ ] Error rate threshold defined: ___
- [ ] Latency threshold defined: ___
- [ ] Business metric threshold defined: ___
- [ ] Rollback owner identified: ___
- [ ] Rollback time-to-disable estimated: ___

## ✅ Rollback Feasibility
- [ ] Flag disableable without code deploy
- [ ] Data backward-compatible with flag-off state
- [ ] No irreversible actions in first rollout stages
- [ ] DB
