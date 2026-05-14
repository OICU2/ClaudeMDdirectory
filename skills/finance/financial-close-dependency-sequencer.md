---
name: financial-close-dependency-sequencer
description: >
  Analyzes month-end or quarter-end close tasks and sequences them into a dependency chain so accounting teams execute steps in the correct order. Use when someone says "help me sequence our close process," asks about "which reconciliations should run first," wants to "map out our month-end dependencies," needs to "order our journal entries and reconciliations," or is trying to "build a close checklist with dependencies."
category: finance
tags: [month-end-close, reconciliation, journal-entries, dependencies, accounting-workflow]
author: community
---

# Financial Close Dependency Sequencer

This skill takes a list of month-end or quarter-end close tasks and produces a sequenced dependency chain so teams execute reconciliations, journal entries, and reviews in the correct order without bottlenecks.

## Dependency Mapping Workflow

### Step 1: Collect Raw Task List
Ask the user to provide all close tasks if not already given. Prompt for:
- Task name
- System or data source required (ERP, sub-ledger, bank feed, payroll system, etc.)
- Owner or team responsible
- Approximate duration
- Any known predecessors they are aware of

### Step 2: Classify Each Task by Type
Assign each task to one of these categories, which determines its natural sequencing tier:

- **Tier 0 — Data Feeds**: System extracts, bank feeds, payroll exports, AP/AR sub-ledger closes. Nothing else can start until these complete.
- **Tier 1 — Transaction-Level Reconciliations**: Bank recs, credit card recs, intercompany matching, fixed asset additions. Depend on Tier 0 feeds.
- **Tier 2 — Accruals and Estimates**: Accrued expenses, prepaid amortization, depreciation runs, revenue recognition entries. Depend on Tier 1 completing for accurate balances.
- **Tier 3 — Top-Side Journal Entries**: Eliminations, allocations, reclassifications, tax provisions. Depend on Tier 2 entries being posted.
- **Tier 4 — Financial Statement Preparation**: Trial balance review, flux analysis, management reporting, consolidation. Depends on all prior tiers.
- **Tier 5 — Review and Sign-Off**: Controller review, CFO sign-off, audit prep. Final gate before close is declared complete.

### Step 3: Identify Explicit Dependencies
For each task, determine:
- Which specific tasks must be **fully completed** before it can start (hard dependencies)
- Which tasks can run **in parallel** within the same tier
- Which tasks have **soft dependencies** (can start but not finish until another task completes)

Flag circular dependencies immediately and surface them to the user for resolution.

### Step 4: Assign Sequence Numbers and Parallel Tracks
- Assign a sequence number (1.0, 1.1, 1.2 for parallel tasks within a tier; 2.0, 2.1 for next tier, etc.)
- Group parallel tasks on the same row or track
- Note the **critical path** — the longest chain of sequential dependencies that determines the earliest possible close date

### Step 5: Estimate Close Window
Using provided durations, calculate:
- Earliest start and earliest finish for each task
- Total close window (business days) assuming efficient execution
- Critical path duration vs. total task hours
- Tasks that are **on the critical path** (delay them = delay close)

### Step 6: Flag Risks
Identify and call out:
- Tasks with no identified owner
- Tasks dependent on external parties (banks, vendors, auditors)
- Tier 0 feeds with known latency issues
- Any task with more than 2 direct dependents (single points of failure)

## Output Format

Produce three sections:

**1. Dependency Table**
A markdown table with columns: `Sequence | Task Name | Tier | Owner | Duration | Depends On | Parallel With | Critical Path (Y/N)`

**2. Sequenced Close Checklist**
A numbered list grouped by tier. Within each tier, parallel tasks are listed as sub-bullets under the same number. Example:
```
1. [TIER 0 — Data Feeds]
   1.1 Close AP sub-ledger (Owner: AP Team, 2h)
   1.2 Export payroll data from ADP
