---
name: finance-team-month-end-task-sequencer
description: >
  Sequences all month-end close tasks by dependency order, owner, and deadline to eliminate bottlenecks and missed steps. Use when someone says "we need to plan month-end close," asks about "what order should we do month-end tasks," wants to "organize our close checklist," needs to "figure out who does what at month-end," or is trying to "avoid missing steps during close."
category: finance
tags: [month-end-close, task-sequencing, finance-ops, close-management, workflow]
author: community
---

# Month-End Close Task Sequencer

This skill takes a list of month-end close tasks and produces a sequenced, dependency-ordered plan with owners, deadlines, and blocking relationships to run a clean close cycle.

## Task Sequencing Workflow

### Step 1: Collect Task Inputs
Ask the user to provide (or confirm defaults for):
- List of close tasks (or use standard defaults below)
- Close calendar: the last business day of the month and target close date
- Team members and their roles (AP, AR, GL, FP&A, Controller, etc.)
- Any known constraints (systems unavailability, staff PTO, audit deadlines)

**Default standard close tasks if none provided:**
- Sub-ledger cutoffs (AP, AR, inventory, payroll)
- Bank reconciliations
- Intercompany eliminations
- Accruals and prepaid amortization
- Fixed asset depreciation
- Revenue recognition entries
- Expense allocations
- Trial balance review
- Financial statement preparation
- Flux/variance analysis
- Management reporting package
- Controller/CFO sign-off

### Step 2: Map Dependencies
For each task, identify:
- **Predecessor tasks** — what must be complete before this can start
- **Successor tasks** — what this task unlocks
- **Hard deadlines** — regulatory, payroll, banking, or board-driven dates
- **Soft deadlines** — internal targets

Build a dependency chain using this logic:
1. Sub-ledger closes must precede GL entries
2. All GL entries must precede trial balance
3. Trial balance must precede financial statements
4. Financial statements must precede flux analysis and reporting
5. Reporting must precede sign-off

### Step 3: Assign Owners and Time Estimates
For each task, assign:
- **Primary owner** (by role or name if provided)
- **Backup owner**
- **Estimated duration** (hours or days)
- **Earliest start date** relative to period-end (e.g., Day -2, Day 0, Day +1)
- **Due date** (specific calendar date)

### Step 4: Identify the Critical Path
Flag tasks that:
- Have no slack (delay = close delay)
- Are blocked by the most downstream dependencies
- Have historically caused bottlenecks (ask user to confirm)
- Require cross-team handoffs (highest coordination risk)

Mark these tasks **[CRITICAL PATH]**.

### Step 5: Surface Bottlenecks and Risks
For each bottleneck identified, output:
- Which task is blocked and why
- Who the blocker owner is
- Recommended mitigation (parallel processing, earlier start, delegation)

## Output Format

Produce a sequenced close plan in this exact structure:

---

**MONTH-END CLOSE SEQUENCE — [Month Year]**
**Period End:** [Date] | **Target Close:** [Date] | **Hard Deadline:** [Date]

---

**PHASE 1 — PRE-CLOSE (Days -3 to 0)**
| Seq | Task | Owner | Depends On | Start | Due | Duration | Status |
|-----|------|-------|------------|-------|-----|----------|--------|
| 1 | [Task name] | [Owner] | None | [Date] | [Date] | [X hrs] | Not Started |

**PHASE 2 — CORE CLOSE (Days +1 to +3)**
[Same table format]

**PHASE 3 — REPORTING & SIGN-OFF (Days +4 to +5)**
[Same table format]

---

**CRITICAL PATH TASKS:**
- [Task] → [Task] → [Task] → Sign-off
- Estimated total critical path duration: X days

**BOTTLENECK ALERTS:**
