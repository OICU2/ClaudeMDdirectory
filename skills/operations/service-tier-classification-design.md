---
name: service-tier-classification-design
description: >
  Defines and documents tiered service levels for internal or external customers, mapping each tier
  to response times, available resources, and escalation paths. Use when someone asks about creating
  service tiers, wants to define SLA levels for customers, needs to structure support offerings by
  customer segment, is designing an escalation framework, or wants to differentiate service levels
  across a customer base.
category: operations
tags: [service-levels, sla, customer-tiers, escalation, operations]
author: community
---

# Service Tier Classification Design

This skill creates a complete tiered service level framework mapping customer segments to specific response times, resource allocations, and escalation paths, activated whenever someone needs to define, restructure, or document differentiated service offerings.

## Tier Design Workflow

1. **Gather context before designing**
   - Ask: How many customer segments exist (or are planned)?
   - Ask: What channels does support operate through (email, phone, chat, on-site)?
   - Ask: What are the current or target response time expectations?
   - Ask: Is this for internal teams, external customers, or both?
   - Ask: Are there revenue, contract value, or usage thresholds that should gate tiers?

2. **Define tier count and names**
   - Default to 3–4 tiers unless context demands otherwise (e.g., Bronze/Silver/Gold/Platinum or Basic/Standard/Premium/Enterprise)
   - Assign each tier a clear qualifier: free users, paying customers under $X, paying customers over $X, enterprise contract holders, etc.
   - Avoid more than 5 tiers — complexity degrades usability

3. **Map each tier to concrete service attributes**
   For every tier, specify all of the following:
   - **Entry criteria**: What qualifies a customer for this tier (spend, contract type, usage volume, manual designation)
   - **Initial response time**: Time from ticket submission to first human acknowledgment (e.g., 4 business hours)
   - **Resolution target**: Time to resolve or escalate (e.g., 2 business days)
   - **Support hours**: When coverage is available (e.g., Mon–Fri 9–5 local time vs. 24/7)
   - **Channels available**: Which contact methods are permitted per tier
   - **Dedicated resources**: Named CSM, account team, or shared pool
   - **Escalation path**: Who handles unresolved issues and at what time threshold
   - **Proactive services**: QBRs, health checks, onboarding calls — what is included

4. **Define escalation rules explicitly**
   - Set a hard rule: if response time SLA is breached by X%, ticket auto-escalates to Tier N+1 handling
   - Name the escalation owner for each tier (e.g., Senior Support Engineer, Customer Success Manager, VP of Customer Success)
   - Define escalation triggers beyond time: severity flags, churn risk signals, executive involvement requests

5. **Identify resource requirements per tier**
   - Estimate staffing ratios (e.g., 1 CSM per 50 Standard accounts, 1 per 10 Enterprise accounts)
   - Flag tooling or access requirements per tier (e.g., dedicated Slack channel, on-site visit budget)
   - Note any automation that substitutes for human resources at lower tiers

6. **Build the tier governance model**
   - Define how customers move between tiers (automatic on renewal, manual review, triggered by spend change)
   - Set a review cadence for tier criteria (quarterly or annually)
   - Assign ownership: who manages tier assignments and audits compliance

## Output Format

Produce the following artifacts in order:

**1. Tier Summary Table**
A markdown table with columns: Tier Name | Entry Criteria | Response Time | Resolution Target | Hours | Channels | Dedicated Resource | Escalation Owner

**2. Tier Detail Sheets**
One section per tier containing:
- Tier name and tagline (one sentence describing the customer profile)
- Full attribute list (all fields from step 3)
- Escalation path written as a numbered sequence
- Proactive services checklist

**3. Escalation Matrix**
A separate table mapping: Trigger Condition | Time Threshold | Escalation Action | Owner | Notification Method

**4. Implementation Notes**
Bullet list of: staff
