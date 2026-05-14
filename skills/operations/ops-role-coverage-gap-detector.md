---
name: ops-role-coverage-gap-detector
description: >
  Identifies single-point-of-failure roles within operational workflows where no backup coverage or documented handoff exists. Use when someone says "what happens if X is unavailable," asks about bus factor risks in their team, wants to audit role redundancy, needs to find coverage gaps before a planned absence, or is building a continuity plan for critical operations.
category: operations
tags: [operations, risk-management, continuity, staffing, redundancy]
author: community
---

# Ops Role Coverage Gap Detector

This skill analyzes operational workflows to surface roles with no documented backup, no cross-training, and no handoff procedure — and outputs a prioritized gap report with remediation steps.

## Detection Workflow

1. **Inventory roles**: Extract every named role, title, or function mentioned in the provided workflow, org chart, runbook, or description. Include informal roles (e.g., "the person who handles X").

2. **Check each role against four failure criteria**:
   - No named backup or secondary owner
   - No documented runbook, SOP, or handoff checklist
   - No cross-trained team member who has performed the task in the last 90 days
   - Role is on the critical path for a customer-facing or revenue-generating process

3. **Assign risk severity** to each gap:
   - **Critical**: Meets 3–4 failure criteria AND is on the critical path
   - **High**: Meets 2–3 failure criteria OR is on the critical path
   - **Medium**: Meets 1–2 failure criteria, not on critical path
   - **Low**: Minor dependency, easily absorbed by the team

4. **Identify compounding gaps**: Flag any scenario where two or more Critical/High roles could be unavailable simultaneously (e.g., same team, same on-call rotation, same geographic location).

5. **Generate remediation actions** for each gap:
   - Name a specific backup candidate if context allows
   - Specify what documentation needs to be created
   - Recommend a cross-training timeline (days, not quarters)
   - Suggest an interim mitigation if remediation takes more than one week

## Output Format

Produce a structured gap report with the following sections:

**Coverage Gap Report**

| Role | Owner | Backup Exists | Runbook Exists | Cross-Trained | Critical Path | Risk Level |
|------|-------|---------------|----------------|---------------|---------------|------------|
| [role name] | [name/unknown] | Yes/No | Yes/No | Yes/No | Yes/No | Critical/High/Medium/Low |

**Critical Gaps** (list each Critical-rated role with):
- Gap description in one sentence
- Business impact if this role is unavailable for 24h / 1 week
- Immediate mitigation (what to do today)
- Remediation action with owner and deadline

**Compounding Risk Scenarios** (if any):
- Describe the scenario and combined blast radius

**Quick Wins** (gaps fixable in under 48 hours):
- Bulleted list of low-effort, high-impact fixes

**Summary**: One paragraph stating total roles audited, number of gaps by severity, and the single highest-priority action to take this week.
