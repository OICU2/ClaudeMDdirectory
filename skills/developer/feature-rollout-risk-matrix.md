---
name: feature-rollout-risk-matrix
description: >
  Produces a risk-scored matrix for phased feature rollouts by evaluating dependency exposure, rollback complexity, and user impact surface area. Use when someone says "we're rolling out a new feature", asks about "rollout risk" or "phased deployment", or wants to "assess risk before launching" a feature. Also triggers when someone needs to plan canary releases, feature flags, or staged rollouts.
category: developer
tags: [risk-assessment, feature-flags, deployment, rollout-planning, devops]
author: community
---

# Feature Rollout Risk Matrix

This skill generates a structured, risk-scored matrix that evaluates phased feature rollouts across three dimensions—dependency exposure, rollback complexity, and user impact—so teams can make informed go/no-go decisions at each rollout phase.

## Risk Matrix Workflow

1. **Gather rollout context**: Ask for (or extract from the prompt) the feature name, intended rollout phases (e.g., 1%, 10%, 50%, 100%), affected systems, and target user segments.

2. **Evaluate Dependency Exposure** for each phase:
   - List all upstream and downstream service dependencies
   - Score each dependency: Low (isolated, no shared state), Medium (shared DB or API contract), High (core platform or auth dependency)
   - Flag circular dependencies or undocumented contracts as critical

3. **Evaluate Rollback Complexity** for each phase:
   - Determine if rollback requires: config change only (Low), data migration reversal (Medium), or schema/contract changes affecting other teams (High)
   - Identify whether a feature flag exists and can be toggled independently
   - Note any irreversible side effects (emails sent, payments processed, records mutated)

4. **Evaluate User Impact Surface Area** for each phase:
   - Estimate percentage and type of users affected (internal/beta/paid/all)
   - Identify user-facing failure modes: silent failure (Low), degraded UX (Medium), complete feature breakage or data loss (High)
   - Flag regulatory or SLA-sensitive user segments

5. **Calculate composite risk score** per phase:
   - Score each dimension 1 (Low), 2 (Medium), or 3 (High)
   - Composite = average of three scores, rounded to one decimal
   - Risk tier: 1.0–1.5 = Green, 1.6–2.2 = Yellow, 2.3–3.0 = Red

6. **Generate go/no-go recommendation** per phase with specific conditions that must be met before proceeding.

## Output Format

Produce a markdown table followed by a recommendation block:

```markdown
## Feature Rollout Risk Matrix: [Feature Name]

| Phase     | Traffic % | Dependency Exposure | Rollback Complexity | User Impact Surface | Composite Score | Risk Tier |
|-----------|-----------|--------------------|--------------------|--------------------:|-----------------|-----------|
| Phase 1   | 1%        | Low (1)            | Low (1)            | Low (1)             | 1.0             | 🟢 Green  |
| Phase 2   | 10%       | Medium (2)         | Medium (2)         | Low (1)             | 1.7             | 🟡 Yellow |
| Phase 3   | 50%       | Medium (2)         | High (3)           | Medium (2)          | 2.3             | 🔴 Red    |
| Phase 4   | 100%      | High (3)           | High (3)           | High (3)            | 3.0             | 🔴 Red    |

## Key Risk Flags
- [Bullet list of specific risks identified, e.g., "Phase 3 rollback requires DB migration reversal affecting 3 services"]

## Go/No-Go Conditions
- **Phase 1 → Phase 2**: [Specific observable condition, e.g., "Error rate < 0.1% over 24h window"]
- **Phase 2 → Phase 3**: [Condition]
- **Phase 3 → Phase 4**: [Condition]

## Recommended Mitigations
- [Actionable mitigation per Red or Yellow phase, tied to specific dimension that scored high]
```

Keep the matrix to the phases provided. If roll
