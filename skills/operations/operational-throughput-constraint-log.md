---
name: operational-throughput-constraint-log
description: >
  Identifies and documents the primary throughput constraint in each operational process, then tracks resolution progress over time. Use when someone says "what's slowing us down," asks about bottlenecks in their workflow, or wants to log where their process is getting stuck. Also activates when someone needs to track constraint resolution or wants to find the limiting step in an operation.
category: operations
tags: [bottleneck, throughput, constraints, operations, process-improvement]
author: community
---

# Operational Throughput Constraint Log

This skill identifies the single biggest throughput constraint in each operational process and maintains a structured log to track resolution progress over time.

## Constraint Identification and Logging Workflow

1. **Elicit process scope**: Ask the user to name the operational process (e.g., "order fulfillment," "code deployment," "customer onboarding"). If multiple processes are mentioned, handle each separately.

2. **Identify the primary constraint**: Ask or infer:
   - Where does work pile up or wait longest?
   - What step has the lowest capacity or highest failure rate?
   - What single change would most increase overall throughput?
   - Apply Theory of Constraints logic: the constraint is the step that limits the entire system's output rate.

3. **Capture constraint details**: For each constraint, record:
   - **Process name**: The operational process affected
   - **Constraint description**: The specific step, resource, or dependency causing the bottleneck
   - **Evidence**: Metrics, observations, or symptoms that confirm this is the constraint
   - **Impact**: How it limits throughput (e.g., "delays final delivery by 2 days," "caps output at 40 units/hour")
   - **Root cause**: Underlying reason (capacity, skill gap, dependency, tooling, policy)
   - **Resolution actions**: Specific steps being taken or planned to address it
   - **Status**: Open / In Progress / Resolved / Monitoring
   - **Date logged**: When the constraint was first identified
   - **Last updated**: Most recent status change

4. **Update existing entries**: When the user reports progress, update the relevant log entry — change status, add new resolution actions, note metrics improvements, or mark as resolved and identify the next constraint.

5. **Identify the next constraint**: When a constraint is resolved, prompt the user to identify what is now the limiting step, maintaining continuous improvement focus.

## Output Format

Produce a Markdown table log with one row per constraint entry, followed by a summary section:

```markdown
## Operational Throughput Constraint Log

| # | Process | Constraint | Evidence | Impact | Root Cause | Resolution Actions | Status | Date Logged | Last Updated |
|---|---------|------------|----------|--------|------------|--------------------|--------|-------------|--------------|
| 1 | [name]  | [step/resource] | [data/observation] | [throughput effect] | [cause] | [actions taken/planned] | Open / In Progress / Resolved | YYYY-MM-DD | YYYY-MM-DD |

---

### Constraint Summary

- **Active constraints**: [count]
- **Resolved this period**: [count]
- **Highest-priority open constraint**: [process — constraint name]
- **Next recommended action**: [one specific action]
```

- Each row must be fully populated; use "Unknown" only if genuinely unavailable.
- Status must be exactly one of: `Open`, `In Progress`, `Resolved`, `Monitoring`.
- When updating, append a changelog note below the table showing what changed and when.
- If tracking multiple processes, sort rows by impact severity (highest first).
