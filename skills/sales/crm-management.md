---
name: crm-management
description: >
  Maintains accurate CRM records and leverages sales data to improve pipeline performance and close rates. Use when someone says "update the CRM," asks about "deal status" or "pipeline health," wants to "log a sales activity," needs to "review customer history," or is trying to "forecast revenue" for a period.
category: sales
tags: [crm, pipeline, sales-data, forecasting, customer-records]
author: community
---

# CRM Management

This skill helps sales teams maintain clean CRM records, analyze pipeline data, and surface actionable insights to improve sales performance and forecasting accuracy.

## CRM Workflow

### Logging Activities
1. Identify the record type: contact, company, deal, or activity
2. Capture required fields: date, owner, stage, next action, and close date
3. Write a concise activity note: outcome of interaction + agreed next step + any blockers
4. Flag stale deals (no activity in 14+ days) and recommend follow-up action
5. Validate that deal value, stage, and probability are current before saving

### Updating Deal Records
1. Confirm current stage against stage-entry criteria (discovery complete, demo done, proposal sent, verbal yes, contract out)
2. Update probability to match stage: Discovery 10%, Demo 25%, Proposal 40%, Verbal 60%, Contract 80%, Closed Won 100%
3. Record any change in deal size, timeline, or decision-maker
4. Add a next step with a specific date and owner

### Pipeline Review
1. Pull all open deals grouped by stage
2. Flag deals missing: close date, next action, or activity in past 14 days
3. Calculate weighted pipeline: sum of (deal value × probability) per stage
4. Identify deals at risk: stalled stage, slipped close date, or lost champion
5. Rank top 5 deals most likely to close this period

### Revenue Forecasting
1. Separate commit (80–100% probability) from best-case (40–79%) deals
2. Apply historical win rate by stage to best-case deals
3. State total commit forecast, best-case forecast, and gap to quota
4. List the 3 deals that would close the gap if accelerated

### Data Quality Audit
1. Check for duplicate contacts or companies — flag for merge
2. Identify contacts missing email, phone, or company association
3. Find deals with no owner, no close date, or stuck in a stage > 30 days
4. Produce a prioritized cleanup list with record name, field missing, and suggested fix

## Output Format

**Activity Log Entry:**
- Date, Rep, Contact/Company, Deal Name
- Interaction type (call/email/meeting)
- Summary (2–3 sentences: what happened, what was agreed, any blockers)
- Next step + due date + owner

**Pipeline Report:**
- Table: Deal Name | Stage | Value | Probability | Weighted Value | Days in Stage | Next Action | Due Date
- At-risk deals list with reason
- Weighted pipeline total by stage

**Forecast Summary:**
- Commit total | Best-case total | Gap to quota
- Top 3 gap-closing deals with recommended action
- One-sentence risk statement

**Data Quality Report:**
- Numbered list of issues: Record Name | Problem | Recommended Fix
- Total records audited, total issues found, estimated time to clean