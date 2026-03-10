---
name: sla-management
description: >
  Helps define, track, and enforce service level agreements with customers and vendors. Use when someone says "we need to set up an SLA," asks about managing service commitments, wants to track SLA compliance, needs to handle an SLA breach, or is negotiating service terms with a vendor or customer.
category: operations
tags: [sla, compliance, service-management, vendor-management, operations]
author: community
---

# SLA Management

This skill guides you through creating, monitoring, and enforcing service level agreements, and activates whenever SLA definition, compliance tracking, or breach response is needed.

## SLA Workflow

### 1. Define the SLA
- Identify the service being covered (internal, customer-facing, or vendor)
- Specify measurable metrics: uptime percentage, response time, resolution time, throughput
- Set measurement windows: per incident, monthly rolling, quarterly
- Define service tiers if applicable (P1/P2/P3 or Gold/Silver/Bronze)
- Include exclusions: scheduled maintenance, force majeure, customer-caused outages
- Assign responsible owners for each metric

### 2. Set Thresholds and Penalties
- Define the target (e.g., 99.9% uptime), warning threshold (e.g., 99.5%), and breach threshold (e.g., below 99.5%)
- Specify remedies for breaches: service credits, refunds, escalation paths, contract termination clauses
- Establish notification requirements: who gets alerted, at what threshold, through what channel

### 3. Build a Tracking Structure
For each SLA, track:
- **Metric name** — what is being measured
- **Target value** — the committed level
- **Current value** — live or reported measurement
- **Measurement period** — time window in scope
- **Status** — On Track / At Risk / Breached
- **Owner** — accountable team or individual
- **Last reviewed** — date of most recent check

### 4. Handle Breaches
- Document the breach: metric, duration, impact, root cause
- Notify affected stakeholders within the contractually required window
- Calculate applicable credits or penalties using the agreed formula
- Draft a post-mortem or corrective action plan with timeline
- Update the SLA if thresholds need adjustment based on evidence

### 5. Review and Improve
- Schedule monthly or quarterly SLA reviews
- Compare performance trends across periods
- Flag SLAs that are consistently at risk for renegotiation or process improvement
- Archive historical compliance data for audits and contract renewals

## Output Format

**For SLA Definition requests**, produce:
- A structured SLA table with: Metric | Target | Warning Threshold | Breach Threshold | Measurement Window | Owner | Remedy
- A brief exclusions list
- Suggested review cadence

**For SLA Tracking requests**, produce:
- A status dashboard table: Metric | Target | Current | Period | Status (color-coded emoji: ✅ On Track / ⚠️ At Risk / 🔴 Breached) | Owner
- A summary sentence noting total metrics tracked, how many are at risk or breached, and immediate actions required

**For SLA Breach responses**, produce:
- Breach summary: what failed, when, for how long, business impact
- Stakeholder notification draft (email or ticket format)
- Credit or penalty calculation with formula shown
- Corrective action plan with three to five specific steps and deadlines

Keep all outputs concise, table-driven where possible, and free of legal language unless the user explicitly requests contract-ready language.