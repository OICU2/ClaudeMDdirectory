---
name: ops-waste-identification-log
description: >
  Systematically documents non-value-adding activities across operational processes and prioritizes them by elimination impact. Use when someone says "we have a lot of inefficiencies in our process," asks about identifying waste in operations, or wants to audit workflows for unnecessary steps. Also activates when someone mentions "lean process review," wants to "find what's slowing us down," or needs to "document process bottlenecks."
category: operations
tags: [lean, process-improvement, waste-reduction, operations, efficiency]
author: community
---

# Ops Waste Identification Log

This skill audits operational processes to surface, categorize, and prioritize non-value-adding activities so teams can eliminate waste in the highest-impact order.

## Waste Identification Workflow

1. **Define process scope**: Confirm the process name, start/end boundaries, and key stakeholders involved before logging anything.

2. **Elicit waste observations**: Ask the user to describe steps in the process sequentially. For each step, probe with: "Does this step change the product or service in a way the customer would pay for?" If no, flag as potential waste.

3. **Classify each waste item** using the 8 Lean waste categories:
   - **Defects** – rework, corrections, errors requiring fixes
   - **Overproduction** – producing more than needed, too early
   - **Waiting** – idle time between steps or approvals
   - **Non-utilized talent** – skills/knowledge not applied
   - **Transportation** – unnecessary movement of materials or data
   - **Inventory** – excess work-in-progress or stored items
   - **Motion** – unnecessary movement by people
   - **Extra processing** – steps that add no customer value

4. **Quantify impact** for each waste item using these fields:
   - Frequency (daily / weekly / per batch)
   - Time lost per occurrence (minutes or hours)
   - Estimated monthly time cost (frequency × time lost × occurrences/month)
   - Affected roles or team size

5. **Score elimination priority** using a simple 1–5 scale across three dimensions:
   - **Effort to eliminate** (1 = easy, 5 = very hard)
   - **Impact on throughput** (5 = high impact, 1 = low)
   - **Risk of removal** (1 = low risk, 5 = high risk)
   - Priority Score = (Impact × 2) − Effort − Risk

6. **Sort the log** by Priority Score descending to surface quick wins and high-value targets.

7. **Identify root causes** for the top 5 waste items using the "5 Whys" method — ask the user to answer "why does this waste exist?" up to five times per item.

8. **Suggest elimination actions** for each top-priority waste item: automate, eliminate, combine, simplify, or reassign.

## Output Format

Produce a structured waste identification log with the following sections:

**Header**
- Process Name
- Scope (start → end)
- Date of Review
- Reviewer / Team

**Waste Log Table**
| # | Waste Description | Category | Frequency | Time Lost/Occurrence | Monthly Time Cost | Affected Roles | Effort (1–5) | Impact (1–5) | Risk (1–5) | Priority Score |
|---|---|---|---|---|---|---|---|---|---|---|

Minimum 5 waste items documented; no upper limit.

**Top 5 Priority Items — Deep Dive**
For each top-priority waste item:
- Root Cause (5 Whys summary)
- Recommended Elimination Action
- Owner (role responsible)
- Suggested Timeline (immediate / 30 days / 90 days)

**Summary Metrics**
- Total waste items identified
- Total estimated monthly hours lost across all items
- Projected monthly hours recovered if top 5 are eliminated
- Single-sentence executive summary of the biggest opportunity

Format the table in plain Markdown. Keep descriptions concise (one sentence per waste item). Use bold for Priority Score values of 6 or higher to flag immediate action items.
