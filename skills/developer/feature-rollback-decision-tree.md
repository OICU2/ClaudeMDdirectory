---
name: feature-rollback-decision-tree
description: >
  Builds a structured decision tree for evaluating whether a deployed feature should be rolled back, including error rate thresholds, business impact scoring, and step-by-step rollback execution. Use when someone says "should we roll back this feature", asks about rollback criteria, wants to decide if a deployment needs to be reverted, is evaluating incident severity after a release, or needs a rollback runbook for a live feature.
category: developer
tags: [rollback, incident-response, deployment, decision-tree, reliability]
author: community
---

# Feature Rollback Decision Tree

This skill generates a complete rollback decision tree with threshold-based evaluation criteria, business impact scoring, and concrete rollback execution steps for any deployed feature.

## Decision Tree Construction Workflow

### Step 1: Gather Feature Context
Collect the following before building the tree:
- Feature name and deployment timestamp
- Services or components affected
- Traffic percentage receiving the feature (canary %, full rollout, etc.)
- Monitoring tools in use (Datadog, PagerDuty, Sentry, etc.)
- Rollback mechanism available (feature flag, redeploy, DB migration reversal)

### Step 2: Define Error Rate Thresholds
Assign severity tiers based on error rate delta from baseline:

| Tier | Error Rate Increase | Action |
|------|--------------------|-----------------------|
| P0   | >5x baseline or >10% error rate | Immediate rollback, no discussion |
| P1   | 2x–5x baseline or 2%–10% error rate | Rollback within 15 minutes unless mitigated |
| P2   | 1.5x–2x baseline or 0.5%–2% error rate | Evaluate business impact before deciding |
| P3   | <1.5x baseline | Monitor, no rollback unless trend worsens |

Adjust these thresholds based on feature criticality if provided.

### Step 3: Build the Decision Nodes

Construct the tree using these ordered evaluation gates:

**Gate 1 — Safety Check (Auto-Rollback Triggers)**
- Is the p99 latency >3x pre-deployment baseline? → ROLLBACK
- Are payment, auth, or data-integrity flows affected? → ROLLBACK
- Is there data loss or corruption occurring? → ROLLBACK NOW + incident declared
- Are on-call pages firing continuously (>3 in 10 min)? → ROLLBACK

**Gate 2 — Error Rate Evaluation**
- Apply thresholds from Step 2
- P0/P1 → proceed to rollback execution
- P2 → proceed to Gate 3
- P3 → proceed to Gate 4

**Gate 3 — Business Impact Scoring**
Score each factor 1–3 (1=low, 3=high):
- Revenue impact: Is checkout, billing, or conversion affected?
- User scope: How many users are impacted (1=<1%, 2=1–20%, 3=>20%)?
- SLA risk: Does this breach a contractual or internal SLA?
- Reputational risk: Is this customer-visible with no workaround?

Total score:
- 7–12 → ROLLBACK
- 4–6 → Attempt hotfix first; set 30-minute resolution window before rollback
- 1–3 → Monitor and fix forward

**Gate 4 — Trend Analysis**
- Is the error rate increasing over the last 10 minutes? → Escalate to Gate 3
- Is the error rate stable or decreasing? → Fix forward with monitoring
- Has the issue been present >2 hours without resolution? → Rollback regardless of score

### Step 4: Rollback Execution Steps
Once the decision is ROLLBACK, execute in order:

1. **Notify** — Post to incident channel: feature name, reason, rollback owner, ETA
2. **Disable traffic** — Toggle feature flag OFF or shift traffic to previous version
3. **Verify** — Confirm error rates returning to baseline within 5 minutes
4. **Check side effects** — Identify any DB writes, queue messages, or cache entries created by the feature that need cleanup
5. **Confirm rollback complete** — Error rate at baseline, no new alerts firing
6. **Post-mortem trigger** — For P0/
