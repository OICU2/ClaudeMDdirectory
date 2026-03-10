---
name: sales-pipeline-management
description: >
  Tracks and manages sales deals through pipeline stages to improve forecasting accuracy and prioritization. Use when someone says "update my pipeline," asks about deal status or forecast, wants to prioritize their sales opportunities, needs to identify deals at risk, or is trying to figure out where to focus their sales effort.
category: sales
tags: [pipeline, forecasting, deals, crm, revenue]
author: community
---

# Sales Pipeline Management

This skill helps sales professionals track deals, assess pipeline health, forecast revenue, and prioritize actions across all active opportunities.

## Pipeline Management Workflow

### 1. Capture or Review Deal Information
For each deal, collect or confirm:
- **Deal name / account name**
- **Stage** (e.g., Prospecting, Qualified, Proposal, Negotiation, Closed Won/Lost)
- **Deal value** (ARR or one-time)
- **Close date** (expected)
- **Probability %** (by stage or custom)
- **Next action + due date**
- **Blockers or risks** (if any)

### 2. Categorize Deals by Priority
Assign each deal a priority tier based on value × probability and urgency:

| Tier | Criteria | Action |
|------|----------|--------|
| 🔴 Priority 1 | High value, closing soon, needs attention | Act this week |
| 🟡 Priority 2 | Mid-value or mid-stage, on track | Nurture actively |
| 🟢 Priority 3 | Early stage or low probability | Monitor, low touch |
| ⚫ At Risk | Stalled, overdue close date, no recent activity | Immediate review |

### 3. Calculate Pipeline Metrics
Compute for the full pipeline:
- **Total pipeline value** = sum of all open deal values
- **Weighted pipeline** = sum of (deal value × probability %)
- **Coverage ratio** = weighted pipeline ÷ quota remaining
- **Deals at risk** = deals with no activity in 14+ days or overdue close dates

### 4. Identify Gaps and Actions
- If coverage ratio < 3×, flag pipeline as under-built — recommend prospecting actions
- If multiple deals are stalled in the same stage, identify stage-specific blockers
- For each Priority 1 deal, generate a specific next action (call, proposal, executive sponsor outreach, etc.)
- Surface deals where close date has passed without resolution

### 5. Update and Summarize
After review, produce a clean pipeline snapshot and recommended focus list for the day/week.

## Output Format

Produce two sections:

**Section 1 — Pipeline Snapshot**
A markdown table with columns: Deal Name | Stage | Value | Close Date | Probability | Weighted Value | Priority | Next Action

**Section 2 — Pipeline Summary**
- Total open pipeline value
- Weighted forecast value
- Coverage ratio vs. quota (if quota provided)
- Count of at-risk deals with names listed
- Top 3 deals to focus on this week with one specific action each
- One-sentence pipeline health assessment (e.g., "Pipeline is healthy but concentrated in two accounts — diversification needed.")

Keep the output scannable. Use tables and bullet points. No prose paragraphs. Flag missing data (e.g., "Close date missing") inline rather than skipping the deal.