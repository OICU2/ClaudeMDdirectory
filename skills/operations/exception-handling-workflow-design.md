---
name: exception-handling-workflow-design
category: operations
description: >
  Designs structured workflows for handling operational exceptions, edge cases, and failure scenarios with clear escalation paths and resolution documentation. Use when someone says "we don't have a process for when X goes wrong," asks about handling edge cases or outliers, wants to document exception handling, needs to define escalation procedures, or is designing a workflow that must account for failures and non-standard situations.
tags: [operations, workflows, exception-handling, escalation, process-design]
author: community
---

# Exception Handling Workflow Design

This skill creates structured, documented workflows for operational exceptions and edge cases, including detection criteria, escalation paths, resolution steps, and post-incident documentation templates.

## Workflow Design Process

1. **Identify the exception scope**
   - Ask what the normal/happy-path process is (if not provided)
   - Enumerate known exception types: data errors, missing inputs, system failures, human errors, edge-case business logic, SLA breaches
   - Classify each by severity: Critical (blocks operations), Major (degrades output), Minor (workaround exists)

2. **Define detection and triggering conditions**
   - For each exception, write a specific, observable trigger: "occurs when X value is null AND Y has been attempted at least once"
   - Distinguish between automated detection (system alerts, monitoring thresholds) and manual detection (human observation, customer report)
   - Assign detection ownership: who or what is responsible for catching this exception

3. **Design the decision tree**
   - At each decision point, ask: Can this be resolved automatically? → If yes, document auto-resolution logic. If no, route to a human.
   - Define time-to-respond windows for each severity level (e.g., Critical: 15 min, Major: 2 hours, Minor: next business day)
   - Map escalation tiers: Tier 1 (frontline), Tier 2 (specialist/supervisor), Tier 3 (leadership/vendor)

4. **Write resolution procedures**
   - For each exception type, document: immediate containment action, root cause investigation steps, resolution action, and verification check
   - Identify any rollback or compensation actions needed if resolution fails
   - Note which resolutions require approvals or sign-offs

5. **Define escalation paths**
   - Name specific roles (not individuals) at each escalation level
   - Include contact method (ticket system, Slack channel, phone tree) and expected response time per tier
   - Document criteria for de-escalation once resolved

6. **Build the exception log and documentation standard**
   - Define required fields for every logged exception: timestamp, reporter, exception type, severity, steps taken, resolution, time-to-resolve
   - Identify where logs are stored and who reviews them (daily, weekly, or per-incident)
   - Flag recurring exceptions for root cause elimination review

7. **Establish feedback loops**
   - Define a threshold for when a repeated exception triggers a process improvement review (e.g., same exception type 3+ times in 30 days)
   - Assign an owner to the post-mortem or improvement action

## Output Format

Produce the following deliverables in order:

**1. Exception Register Table**
A markdown table with columns: Exception Type | Severity | Detection Method | Detection Owner | Time-to-Respond

**2. Exception Workflow (per exception type)**
For each exception, a numbered step-by-step resolution procedure including:
- Trigger condition (plain language)
- Immediate action
- Escalation path (Tier 1 → Tier 2 → Tier 3 with roles and contact method)
- Resolution steps
- Verification check
- Rollback action (if applicable)

**3. Escalation Path Summary**
A plain-language summary table: Severity | Tier 1 Role | Tier 2 Role | Tier 3 Role | Response SLA

**4. Exception Log Template**
A fill-in template with all required fields for documenting a single exception incident.

**5. Recurring Exception Review Trigger**
One paragraph defining the threshold and process for escalating a repeated exception to a process improvement review.

Total output length: scale to the number of exception types identified. Aim for completeness over brevity — this is reference documentation, not a summary.
