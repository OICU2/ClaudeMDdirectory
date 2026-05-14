---
name: ops-task-handoff-delay-log
description: >
  Records and quantifies time lost at inter-team handoff points throughout a process or workflow.
  Use when someone says "we keep losing time between teams," asks about handoff bottlenecks,
  wants to measure delay costs between departments, needs to prioritize process improvement efforts,
  or is trying to identify where work gets stuck waiting.
category: operations
tags: [handoff, delay-tracking, process-improvement, operations, bottlenecks]
author: community
---

# Handoff Delay Log

Captures, measures, and analyzes time lost at each inter-team transition point in a workflow so Claude can surface delay costs and help prioritize where handoff improvements will have the greatest impact.

## Handoff Delay Logging Workflow

1. **Identify all handoff points** in the process by asking the user to list every point where work passes from one team, role, or system to another. If they have a process map or ticket history, use that as the source of truth.

2. **Collect delay data for each handoff** using this structure per handoff:
   - Handoff name (e.g., "Engineering → QA")
   - Sender team / receiver team
   - Expected handoff time (SLA or target, if known)
   - Actual average wait time before receiver picks up work
   - Sample size (how many instances measured)
   - Root cause category (choose one: missing information, queue depth, scheduling mismatch, unclear ownership, tool friction, approval bottleneck, other)

3. **Calculate delay cost per handoff**:
   - Delay duration = Actual wait time − Expected handoff time
   - If headcount cost is available: Delay cost = Delay duration × hourly rate of blocked downstream team
   - Flag any handoff where delay exceeds 2× the expected time as a critical bottleneck

4. **Rank handoffs by total delay impact** (delay duration × frequency of occurrence per week/sprint/month).

5. **Generate improvement priority recommendations** based on rank, root cause category, and estimated effort to fix (low/medium/high).

## Output Format

Produce a structured handoff delay log with these sections:

**Section 1 — Handoff Inventory Table**
| # | Handoff | Sender | Receiver | Expected Time | Avg Actual Wait | Delay | Frequency | Root Cause |
|---|---------|--------|----------|--------------|-----------------|-------|-----------|------------|

**Section 2 — Cost Summary**
- Total delay per cycle (sum of all handoff delays)
- Estimated time cost per week/sprint (delay × frequency)
- If dollar cost is calculable, include it; otherwise note what data is needed

**Section 3 — Critical Bottleneck Flags**
Bullet list of handoffs exceeding 2× expected time, with one-line explanation of why each is flagged.

**Section 4 — Priority Improvement List**
Ranked list (1 = highest impact) with:
- Handoff name
- Root cause
- Suggested fix (1–2 sentences, specific and actionable)
- Estimated fix effort (Low / Medium / High)

Length: As long as the data requires. Do not truncate rows or omit handoffs. If data is incomplete, note what is missing and provide a partial log with placeholders.
