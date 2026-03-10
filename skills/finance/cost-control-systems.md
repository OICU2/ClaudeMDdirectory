---
name: cost-control-systems
category: finance
description: >
  Builds end-to-end systems that monitor, enforce, and report on spending limits across business units, vendors, and cost centers. Use when someone wants to set up budget guardrails, asks about preventing overspending, needs to track expenses against limits, wants to automate spend approvals, or is trying to stop runaway costs in their organization.
tags: [budgeting, spend-management, cost-controls, finance-automation, expense-tracking]
author: community
---

# Cost Control Systems

This skill designs and implements spending limit enforcement systems — including alerting pipelines, approval workflows, and real-time budget dashboards — whenever a user needs to monitor or constrain business expenditures.

## Workflow

### 1. Scope the Control Surface
- Identify all spend categories: headcount, SaaS, cloud infrastructure, vendors, T&E, marketing
- Map who owns each category (cost center owner, department head, finance BP)
- Confirm existing data sources: ERP, procurement system, corporate card platform, cloud billing APIs

### 2. Define Limit Structures
- Set hard limits (block transaction) vs. soft limits (alert + approval required)
- Assign limits at multiple levels: per-transaction, monthly, quarterly, annual
- Build limit hierarchy: individual → team → department → company
- Document escalation path for limit exception requests

### 3. Design the Monitoring Pipeline
- Pull spend data on a defined cadence (real-time for cards, daily for invoices, hourly for cloud)
- Calculate burn rate: `current_spend / days_elapsed * days_in_period`
- Compute forecast: `burn_rate * remaining_days + committed_spend`
- Flag when forecast exceeds limit by configurable threshold (default: 80%, 95%, 100%)

### 4. Build Enforcement Mechanisms
- **Preventive controls:** Procurement approval gates, PO required above threshold, card velocity limits
- **Detective controls:** Daily variance reports, anomaly detection on spend spikes (>2x 7-day average)
- **Corrective controls:** Automated PO holds, vendor payment freezes, reallocation workflows

### 5. Create Approval Workflows
- Define approval matrix by dollar amount and category
- Build request → review → approve/deny → notify flow
- Set SLA timers with auto-escalation (e.g., no response in 24h → escalate to manager)
- Log all decisions with timestamp, approver, and justification

### 6. Implement Alerting
- Alert channels: email, Slack, SMS for critical breaches
- Alert triggers: 75% consumed, 90% consumed, limit breached, anomalous transaction
- Include in every alert: category, owner, limit, current spend, forecast, days remaining
- Suppress duplicate alerts within a configurable cooldown window

### 7. Reporting Layer
- Weekly digest: all categories, RAG status (green/amber/red), top variances
- Monthly close report: actuals vs. budget, limit breach log, exception summary
- Exception log: every breach, who approved, resolution

## Output Format

Produce a structured system design document containing:

1. **Spend Control Matrix** — table with columns: Category | Owner | Monthly Limit | Hard/Soft | Alert Threshold | Data Source | Cadence
2. **Monitoring Logic** — pseudocode or SQL for burn rate calculation and forecast
3. **Enforcement Rules** — numbered list of preventive, detective, and corrective controls with trigger conditions
4. **Approval Workflow Diagram** — ASCII flowchart showing request → approval → outcome paths with dollar thresholds
5. **Alert Templates** — one example message per alert type (75%, 90%, breach, anomaly) with all required fields filled in
6. **Implementation Checklist** — ordered list of setup steps with owner role and estimated effort in days
7. **Sample Weekly Report** — mock report showing format, RAG indicators, and variance callouts

Length: comprehensive enough to hand to an engineer or finance ops team to implement without further clarification. No filler sections.