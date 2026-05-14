---
name: service-request-aging-report
description: >
  Analyzes open service requests by submission date to identify overdue items, surface bottleneck queues, and recommend prioritized resolution order. Use when someone asks about aging service requests, wants to know which tickets are overdue, needs to find stalled or backlogged queues, wants to prioritize which requests to resolve first, or asks how long open requests have been waiting.
category: operations
tags: [service-requests, aging, ticketing, operations, prioritization, reporting]
author: community
---

# Service Request Aging Report

This skill analyzes open service requests by submission date to flag overdue items, identify bottleneck queues, and produce a prioritized resolution order with actionable next steps.

## Aging Analysis Workflow

1. **Gather request data** — Collect or prompt the user to provide open service request data including: request ID, submission date, category/queue, assigned team or owner, priority level, and current status.

2. **Calculate age** — Compute the age of each request in business days from submission date to today. If SLA targets exist per category, note them; otherwise apply these defaults:
   - Critical: overdue after 1 business day
   - High: overdue after 3 business days
   - Medium: overdue after 7 business days
   - Low: overdue after 14 business days

3. **Flag overdue items** — Mark each request as one of:
   - 🔴 **Critical overdue** — exceeded SLA by more than 50%
   - 🟠 **Overdue** — past SLA deadline
   - 🟡 **At risk** — within 25% of SLA deadline
   - 🟢 **On track** — ample time remaining

4. **Identify bottleneck queues** — Group requests by queue or category. Flag any queue where:
   - More than 30% of requests are overdue
   - Average age exceeds the SLA threshold for that category
   - A single queue holds more than 25% of all open requests

5. **Score and rank for prioritization** — Assign a priority score to each request:
   - Base: days overdue × priority multiplier (Critical=4, High=3, Medium=2, Low=1)
   - Add 10 points if the requestor has submitted escalation notes
   - Add 5 points if the request is blocking another open request
   - Sort descending by score for the resolution order

6. **Surface root causes** — For each bottleneck queue, note the likely cause if inferable: staffing gap, missing approvals, external dependency, or unclear ownership.

## Output Format

Produce the report in four clearly labeled sections:

---

### 📊 Aging Summary
A table with columns: Request ID | Queue | Priority | Submitted | Age (days) | SLA Deadline | Status Flag

### 🚨 Overdue & At-Risk Requests
Bulleted list of flagged requests sorted by priority score, each entry showing:
`[Score] RequestID — Queue — Age — Reason for flag`

### 🔍 Bottleneck Queues
For each bottleneck queue:
- Queue name, total open count, % overdue, average age
- One-line diagnosis of likely cause
- Recommended immediate action (reassign, escalate, unblock dependency)

### ✅ Recommended Resolution Order
Numbered list of top 10 requests to resolve first, each with:
`1. RequestID — Priority Score — One-line rationale`

---

Keep the report scannable. Use tables and bullets, not prose paragraphs. If data is missing or ambiguous, state the assumption made rather than skipping the analysis.
