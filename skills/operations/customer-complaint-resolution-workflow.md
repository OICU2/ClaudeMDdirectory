---
name: customer-complaint-resolution-workflow
description: >
  Maps a standardized escalation and resolution process for customer complaints, including ownership assignments, response timelines, and closure criteria. Use when someone says "we need a process for handling complaints," asks about "how to resolve customer issues," wants to "escalate a complaint properly," needs to "track a complaint to resolution," or is looking to "standardize our customer complaint handling."
category: operations
tags: [customer-service, escalation, complaints, resolution, workflow]
author: community
---

# Customer Complaint Resolution Workflow

This skill generates a complete, standardized complaint resolution workflow with defined ownership, timelines, and closure criteria that teams can immediately implement.

## Workflow Steps

### 1. Complaint Intake (Target: within 1 hour of receipt)
- Log complaint in tracking system with unique ID, timestamp, channel (email/phone/chat/social), and verbatim customer statement
- Classify severity:
  - **P1 (Critical):** Legal threat, regulatory issue, data breach, public escalation risk
  - **P2 (High):** Revenue impact >$500, repeat complaint (3+ contacts), executive mention
  - **P3 (Standard):** First contact, resolvable at front-line level
  - **P4 (Low):** Feedback/suggestion, no immediate action required

### 2. Ownership Assignment
- **P1:** Escalate immediately to Customer Experience Director + Legal (if applicable); assign dedicated case manager
- **P2:** Assign to Team Lead or Senior Support Specialist within 2 hours
- **P3:** Assign to available front-line agent; resolve or escalate within 24 hours
- **P4:** Route to product/feedback team; no individual owner required

### 3. Acknowledgment (Mandatory for all complaints)
- P1: Customer contacted within 1 hour with named point of contact
- P2: Customer contacted within 4 business hours
- P3: Auto-acknowledgment sent immediately; personal follow-up within 24 hours
- P4: Auto-acknowledgment sent; no individual follow-up unless requested

### 4. Investigation & Resolution
- Owner documents root cause, affected systems/processes, and parties involved
- Resolution options evaluated in order: immediate fix → compensation → policy exception → escalation
- Resolution proposed to customer with clear explanation of what happened and what is being done
- All actions logged with timestamps in tracking system

### 5. Response Time SLAs
| Priority | First Response | Resolution Target | Max Extension |
|----------|---------------|-------------------|---------------|
| P1 | 1 hour | 4 business hours | 24 hours (Director approval) |
| P2 | 4 hours | 2 business days | 5 business days (Team Lead approval) |
| P3 | 24 hours | 5 business days | 10 business days |
| P4 | 48 hours | 30 days or next sprint | N/A |

### 6. Escalation Triggers (Automatic)
- SLA breached at 75% of time limit without resolution → notify supervisor
- Customer requests manager or uses threatening language → immediate escalation
- Same issue reported by 3+ customers in 48 hours → flag as systemic issue, notify Product and Operations
- Social media mention with >500 reach → escalate to Communications team

### 7. Closure Criteria (All must be met before closing)
- [ ] Customer has received final response in writing
- [ ] Root cause documented in tracking system
- [ ] Resolution action confirmed complete (refund processed, fix deployed, etc.)
- [ ] Customer satisfaction check attempted (CSAT survey or direct outreach for P1/P2)
- [ ] Preventive action logged or ticket created to prevent recurrence
- [ ] Case owner signs off with closure notes

### 8. Post-Resolution
- P1/P2: Case reviewed in weekly escalations meeting; added to QA sample
- All cases: Data feeds into monthly complaint trend report
- Recurring root causes flagged for quarterly process review

## Output Format

Claude will produce a structured document containing:

1. **Workflow Summary Table** — One-page reference showing all priority levels, owners, timelines, and closure criteria in a scannable grid
2. **Step-by-Step Process Narrative** — Full written workflow with each phase described in plain language, suitable for a team handbook or SOP document
3. **Escalation Decision Tree**
