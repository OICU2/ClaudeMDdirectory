---
name: ops-role-to-process-ownership-matrix
description: >
  Maps each operational role to the specific processes they own, execute, or support, making accountability explicit and surfacing coverage gaps. Use when someone says "I'm not sure who owns this process," asks about clarifying responsibilities across teams, or wants to document who does what in operations. Also activates when someone needs to identify gaps in process coverage or build a RACI-style ownership view for operational workflows.
category: operations
tags: [accountability, process-ownership, raci, operations, roles]
author: community
---

# Ops Role-to-Process Ownership Matrix

This skill builds a structured matrix mapping operational roles to the processes they own, execute, or support, and surfaces accountability gaps or overlaps when Claude is asked about operational responsibility.

## Building the Matrix

1. **Gather inputs**: Ask for (or infer from context) the list of operational roles in scope and the processes or workflows to be mapped. If not provided, prompt the user: "What roles and processes should I map? Or should I generate a draft based on a common ops structure?"

2. **Define ownership tiers**: Use three standard tiers for each role-process intersection:
   - **Own** — accountable for outcomes, process health, and continuous improvement
   - **Execute** — performs the process tasks but is not accountable for overall outcomes
   - **Support** — provides input, review, or resources but is not the primary actor

3. **Populate the matrix**: For each process, assign at least one Owner. Flag any process with:
   - No Owner → label as **GAP: Unowned**
   - Multiple Owners → label as **RISK: Ambiguous Ownership**
   - No Executors → label as **GAP: No Execution Coverage**

4. **Identify cross-role dependencies**: Note where a process requires handoffs between roles and flag if the handoff accountability is undefined.

5. **Summarize findings**: After the matrix, list all flagged gaps and risks with a brief recommended action for each.

## Output Format

Produce a markdown table followed by a findings summary.

**Matrix table structure:**

| Process | Role A | Role B | Role C | Role D |
|---|---|---|---|---|
| Process Name | Own | Execute | Support | — |
| Process Name | GAP: Unowned | — | Execute | Support |

- Columns = Roles
- Rows = Processes
- Cells = Own / Execute / Support / — (not involved)
- Flag cells inline using **GAP:** or **RISK:** prefixes

**Findings summary (below the table):**

```
## Accountability Gaps & Risks

1. [Process Name] — GAP: Unowned. Recommended: Assign ownership to [Role X] based on [rationale].
2. [Process Name] — RISK: Ambiguous Ownership between Role A and Role B. Recommended: Clarify primary accountable role in team charter.
3. [Process Name] — GAP: No Execution Coverage. Recommended: Identify who performs this task operationally.
```

Keep the matrix to a single scrollable table. If more than 15 processes are in scope, group them by category (e.g., Incident Management, Change Management) with a sub-header row before each group.
