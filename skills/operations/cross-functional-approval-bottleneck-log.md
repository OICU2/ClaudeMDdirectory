---
name: cross-functional-approval-bottleneck-log
description: >
  Identifies which approval steps in operational workflows consistently delay process completion and quantifies the time cost of each bottleneck. Use when someone says their approvals are taking too long, asks why processes keep getting stuck, wants to find out where sign-offs are slowing things down, needs to audit their approval chain for inefficiencies, or is trying to reduce cycle time in a multi-step workflow.
category: operations
tags: [approvals, bottlenecks, workflow, process-optimization, cycle-time]
author: community
---

# Cross-Functional Approval Bottleneck Log

This skill analyzes multi-step approval workflows to surface which sign-off stages are causing the most delay and calculates the compounded time cost of each bottleneck across the process.

## Bottleneck Analysis Workflow

1. **Collect workflow data** — Ask the user to list every approval step in sequence, including: approver role/name, average time spent waiting for approval, frequency of rework or rejection at that step, and whether the step is blocking (sequential) or non-blocking (parallel).

2. **Establish baseline** — Determine the intended or target completion time for the full process. If unknown, calculate what the total would be if every step met its SLA or best-case time.

3. **Calculate delay per step** — For each approval stage, compute:
   - Average actual wait time vs. expected wait time
   - Delay delta (actual minus expected)
   - Rejection/rework rate and the time cost of each rework loop
   - Cumulative delay contributed to the overall process

4. **Rank bottlenecks by impact** — Sort approval steps by total time cost (delay delta × frequency of occurrence per month or per quarter). Identify the top 3 bottlenecks by time cost.

5. **Identify bottleneck causes** — For each top bottleneck, prompt the user to classify the cause:
   - Approver availability (out of office, overloaded, unclear ownership)
   - Information gaps (submissions arrive incomplete)
   - Decision complexity (requires committee, legal review, or external input)
   - Tool/process friction (manual handoffs, no reminders, no visibility)

6. **Quantify business cost** — Multiply total delay hours per bottleneck by a cost factor (use the user's provided hourly cost rate, or default to a placeholder of $150/hr per person affected) to produce a dollar-value estimate of each bottleneck's monthly cost.

7. **Flag systemic patterns** — Note if the same approver, team, or step type appears repeatedly across bottlenecks, indicating a structural problem rather than an isolated one.

## Output Format

Produce a structured bottleneck log with the following sections:

**Approval Bottleneck Log — [Process Name] — [Date]**

| Rank | Approval Step | Approver Role | Avg Wait Time | Expected Time | Delay Delta | Rework Rate | Monthly Time Cost | Est. Monthly $ Cost | Root Cause Category |
|------|--------------|---------------|--------------|---------------|-------------|-------------|-------------------|---------------------|---------------------|
| 1    | ...          | ...           | ...          | ...           | ...         | ...         | ...               | ...                 | ...                 |

**Top 3 Bottlenecks — Summary**
- For each: one sentence naming the step, the delay, and the primary cause.

**Systemic Patterns Detected**
- Bullet list of any recurring approver, team, or cause type appearing across multiple bottlenecks.

**Recommended Next Steps**
- 3–5 specific, prioritized actions targeting the highest-cost bottlenecks (e.g., delegate approval authority, add submission checklists, set automated reminders, parallelize independent steps).

Total output length: concise enough to fit one review page; expand the table rows as needed based on the number of approval steps provided.
