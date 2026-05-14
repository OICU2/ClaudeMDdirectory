---
name: ops-audit-finding-remediation-tracker
description: >
  Converts operational audit findings into a structured, prioritized remediation plan with assigned owners, deadlines, and status checkpoints. Use when someone says "we got audit findings that need to be addressed," asks about "how to track remediation progress," or wants to "turn audit results into an action plan," "assign owners to compliance gaps," or "create a remediation roadmap from findings."
category: operations
tags: [audit, remediation, compliance, operations, tracking]
author: community
---

# Ops Audit Finding Remediation Tracker

This skill transforms raw audit findings into a prioritized, actionable remediation plan with clear ownership, target dates, and measurable checkpoints, activated whenever someone needs to organize and manage responses to audit results.

## Remediation Planning Workflow

1. **Ingest findings**: Ask the user to provide audit findings in any format (list, report excerpt, bullet points). If findings are vague, prompt for: finding ID or title, control area, severity, and any auditor recommendations.

2. **Classify severity**: Assign each finding a risk tier:
   - **Critical**: Regulatory violation, active risk, or material control failure — remediate within 30 days
   - **High**: Significant gap with moderate likelihood of harm — remediate within 60 days
   - **Medium**: Process weakness without immediate exposure — remediate within 90 days
   - **Low**: Best-practice gap or documentation issue — remediate within 180 days

3. **Identify remediation type**: For each finding, determine the action category:
   - Policy/procedure update
   - Technical control implementation
   - Training or awareness
   - Organizational/role change
   - Monitoring or reporting addition

4. **Assign owners**: Map each finding to a responsible role (not a person's name unless provided). Use functional titles: IT Security Lead, HR Director, CFO, Compliance Manager, Engineering Manager, etc. If the user provides actual names, use those.

5. **Set milestone checkpoints**: For each finding, define three checkpoints:
   - **Kickoff** (within 5 business days): Owner confirms understanding and drafts remediation approach
   - **Midpoint** (50% of total remediation window): Evidence of in-progress work submitted
   - **Completion** (target date): Remediation evidence delivered and verified

6. **Prioritize the plan**: Rank all findings by: (1) severity tier, (2) regulatory or contractual obligation, (3) ease of remediation (quick wins first within the same tier).

7. **Identify dependencies**: Flag findings where one remediation blocks another, or where multiple findings share a single owner (flag capacity risk).

## Output Format

Produce the following in sequence:

---

### Executive Summary
- Total findings: [N]
- Breakdown by severity: Critical [N] | High [N] | Medium [N] | Low [N]
- Estimated full remediation window: [X days/months]
- Highest-risk items requiring immediate escalation: [bullet list, max 3]

---

### Remediation Plan Table

| # | Finding Title | Severity | Control Area | Remediation Type | Owner | Target Date | Kickoff By | Midpoint By | Status |
|---|---------------|----------|--------------|-----------------|-------|-------------|------------|-------------|--------|
| 1 | [Title] | Critical | [Area] | [Type] | [Role] | [Date] | [Date] | [Date] | Not Started |

Generate one row per finding, sorted by severity (Critical first).

---

### Finding Detail Cards

For each Critical and High finding, produce a card:

**Finding #[N]: [Title]**
- **Severity**: [tier]
- **Auditor Finding**: [verbatim or summarized finding]
- **Root Cause (if known)**: [brief]
- **Remediation Action**: [specific steps the owner must take]
- **Success Criteria**: [how completion will be verified — e.g., policy document published, control tested, training completion rate >95%]
- **Owner**: [role]
- **Dependencies**: [none / or list]
- **Target Completion**: [date]

For Medium and Low findings, produce abbreviated cards (title, action, owner, date only).

---

### Dependency & Capacity Risk Flags
- List any owners assigned more than 2 findings
- List any findings where completion of one is
