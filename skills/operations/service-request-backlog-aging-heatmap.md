---
name: service-request-backlog-aging-heatmap
description: >
  Analyzes open service requests by age and priority to identify overdue items and fulfillment bottlenecks. Use when someone says "show me our backlog health," asks about "which service requests are aging out," wants to "see what's stuck in the queue," needs to "review overdue tickets by priority," or asks "where are our fulfillment bottlenecks." Produces a heatmap-style breakdown that makes queue problems immediately visible.
category: operations
tags: [service-requests, backlog, heatmap, aging, fulfillment, queue-management]
author: community
---

# Service Request Backlog Aging Heatmap

This skill ingests open service request data and renders a priority-versus-age heatmap that surfaces overdue items and bottlenecks, used whenever someone needs to understand the health of their fulfillment queue.

## Workflow

### 1. Gather Input Data
Ask the user to provide open service request data in any of these forms:
- Pasted CSV/table with columns: Request ID, Submission Date, Priority (Critical/High/Medium/Low), Status, Assignee, Category
- A description of their queue if no data is available (Claude will build a template heatmap)
- Export from a ticketing system (Jira, ServiceNow, Zendesk, Freshservice, etc.)

### 2. Calculate Aging Buckets
For each request, compute days open from submission date to today. Assign to aging bands:
- **Fresh**: 0–3 days
- **Active**: 4–7 days
- **Aging**: 8–14 days
- **Overdue**: 15–30 days
- **Critical Overdue**: 31+ days

### 3. Define Priority SLA Thresholds
Apply standard SLA breach markers unless the user provides custom ones:
| Priority | SLA Target | Breach At |
|----------|------------|-----------|
| Critical | 4 hours | 1 day |
| High | 1 day | 3 days |
| Medium | 3 days | 7 days |
| Low | 7 days | 14 days |

### 4. Build the Heatmap Matrix
Construct a table with Priority (rows) × Age Band (columns). Each cell contains:
- Count of requests in that cell
- Heat indicator: 🟢 (within SLA), 🟡 (approaching breach), 🔴 (breached SLA)
- Flag 🚨 for Critical priority items in Aging or worse bands

### 5. Identify Bottlenecks
After the heatmap, perform this analysis:
- **Concentration check**: Any single cell with >20% of total requests signals a bottleneck
- **Assignee load**: If assignee data is present, list the top 3 overloaded assignees
- **Category clustering**: Identify which request categories appear most in overdue bands
- **SLA breach rate**: Calculate % of total open requests that have breached their SLA

### 6. Generate Recommendations
For each identified bottleneck or high-heat zone, provide one concrete action:
- Reassign if an assignee is overloaded
- Escalate if Critical/High items are in Aging+ bands
- Flag for process review if a category is consistently late
- Suggest triage if the Fresh band is unusually large

## Output Format

Produce the following in order:

**1. Summary Header**
One-line snapshot: total open requests, SLA breach count and percentage, and number of critical overdue items.

**2. Aging Heatmap Table**
Markdown table, Priority × Age Band, with count and heat emoji per cell. Bold the hottest cells.

**3. SLA Breach Detail List**
Bulleted list of every SLA-breached request (ID, priority, days open, assignee if known), sorted by days open descending. Cap display at 20 items; note if more exist.

**4. Bottleneck Analysis**
3–5 bullet points identifying concentration points, overloaded assignees, and problem categories. Be specific — name the assignee, category, or cell.

**5. Recommended Actions**
Numbered list of 3–5 prioritized actions, each under 2 sentences. Start with the highest-impact item.

**6
