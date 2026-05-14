---
name: process-approval-matrix-builder
description: >
  Builds a structured decision matrix mapping each operational process step to its required approvers, approval thresholds, and escalation paths. Use when someone says "who needs to approve this," asks about approval workflows, wants to define sign-off requirements, needs to document escalation paths, or is designing an authorization framework for a business process.
category: operations
tags: [approvals, workflow, decision-matrix, escalation, governance]
author: community
---

# Process Approval Matrix Builder

This skill constructs a comprehensive approval matrix for any operational process, defining approvers, thresholds, and escalation paths for each step so teams have a clear, enforceable authorization framework.

## Workflow

1. **Identify the process scope** — Ask the user to name the process (e.g., vendor onboarding, budget requests, contract signing) and list its major steps or stages if not already provided.

2. **Gather approval dimensions** — For each process step, collect or infer:
   - Who initiates the step (role/title)
   - What triggers the need for approval (action, value threshold, risk level)
   - Who must approve (primary approver role)
   - Whether co-approval or committee sign-off is required
   - Time limit for approval before escalation triggers

3. **Define thresholds** — Establish quantitative or qualitative boundaries that determine approval level:
   - Monetary ranges (e.g., $0–$5K = manager, $5K–$50K = director, $50K+ = VP)
   - Risk tiers (low/medium/high/critical)
   - Regulatory or compliance flags that require legal/compliance review

4. **Map escalation paths** — For each step, define:
   - First escalation: who receives the request if primary approver is unavailable or exceeds SLA
   - Second escalation: executive or committee fallback
   - Hard-stop conditions: actions that cannot proceed without a specific role's sign-off

5. **Identify exceptions and overrides** — Note any conditions where standard approval can be bypassed, who has override authority, and what documentation is required to exercise it.

6. **Validate completeness** — Confirm every process step has: an initiator, at least one approver, a defined threshold, and an escalation path. Flag any gaps.

## Output Format

Produce a structured approval matrix in this format:

---

**Process Name:** [Name]
**Process Owner:** [Role]
**Last Updated:** [Date or TBD]

| Step # | Process Step | Initiator | Approval Trigger | Primary Approver | Threshold / Condition | Co-Approver (if any) | Approval SLA | Escalation L1 | Escalation L2 | Override Authority | Notes |
|--------|-------------|-----------|-----------------|------------------|----------------------|----------------------|--------------|---------------|---------------|-------------------|-------|
| 1 | [Step name] | [Role] | [What triggers approval] | [Approver role] | [Threshold] | [Role or N/A] | [e.g., 48 hrs] | [Role] | [Role] | [Role or N/A] | [Any exceptions] |

---

**Escalation Rules Summary:**
- SLA breach escalation: [describe global rule if applicable]
- Unavailability escalation: [describe delegation policy]
- Hard-stop conditions: [list any non-negotiable sign-off requirements]

**Exception and Override Log Requirements:**
- [Describe what must be documented when an override is used]

---

Deliver the matrix as a markdown table followed by the escalation rules summary. If the process has more than 10 steps, group related steps into phases and produce a summary row per phase with a detail section below. Keep approver titles role-based, not name-based.
