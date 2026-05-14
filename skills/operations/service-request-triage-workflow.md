---
name: service-request-triage-workflow
description: >
  Designs a structured intake and prioritization system for incoming internal service requests based on urgency, impact, and resource availability. Use when someone says "we need a way to handle incoming requests," asks about prioritizing IT or operations tickets, or wants to build a triage process for internal teams. Also activates when someone needs to reduce request chaos, streamline service desk intake, or create a structured workflow for handling competing demands.
category: operations
tags: [triage, service-requests, prioritization, workflow, intake]
author: community
---

# Service Request Triage Workflow

This skill designs a complete intake and prioritization framework for internal service requests, applying urgency/impact scoring and resource constraints to produce a ready-to-implement triage system.

## Triage Workflow Design Steps

### 1. Define Request Categories
Establish 4–6 distinct request types relevant to the team (e.g., IT support, access provisioning, facilities, data/reporting, software procurement, HR operations). Each category gets a default priority weight.

### 2. Build the Intake Form Structure
Define the required fields every request must capture:
- **Requester**: Name, department, contact
- **Request type**: From defined categories above
- **Description**: What is needed and why
- **Desired completion date**: Requester's deadline
- **Business impact**: What breaks or slows if unresolved (dropdown: Critical / High / Medium / Low)
- **Affected users**: Individual / Team / Department / Company-wide
- **Supporting attachments**: Optional

### 3. Apply the Priority Scoring Matrix
Score each incoming request on two axes:

| Factor | Score 1 | Score 2 | Score 3 |
|---|---|---|---|
| **Urgency** | Can wait >5 days | Needed in 2–5 days | Needed within 24h |
| **Impact** | 1 person affected | Team (2–10) affected | Dept or company-wide |
| **Dependency** | No blockers created | Blocks 1 other task | Blocks multiple tasks/people |

**Total Score = Urgency + Impact + Dependency**
- 7–9: **P1 — Critical** (same-day response, immediate assignment)
- 5–6: **P2 — High** (response within 4 business hours)
- 3–4: **P3 — Medium** (response within 1–2 business days)
- Below 3: **P4 — Low** (batched weekly review)

### 4. Define Resource Availability Check
Before assignment, evaluate:
- Current open ticket load per assignee (flag anyone above 80% capacity)
- Skill/role match between request type and available staff
- Any existing similar requests that can be batched
- Escalation path if no qualified resource is available

### 5. Establish SLA Commitments per Priority Level
| Priority | First Response | Resolution Target | Escalation Trigger |
|---|---|---|---|
| P1 | 30 minutes | 4 hours | >2 hours with no update |
| P2 | 2 hours | 1 business day | >6 hours with no update |
| P3 | 4 hours | 3 business days | >1 day with no update |
| P4 | 1 business day | 7 business days | >3 days with no update |

### 6. Define Escalation and Exception Rules
- Any P4 request older than 5 days without action auto-escalates to P3
- Requests from executives or flagged as regulatory/compliance bypass scoring and default to P2
- Duplicate requests are merged and original requester is notified
- Requests missing critical intake fields are returned within 1 business hour with a completion prompt

### 7. Set Up Review Cadence
- **Daily**: P1 and P2 queue reviewed by team lead at start of day
- **Weekly**: Full backlog review, P4 purge or escalation decisions
- **Monthly**: SLA adherence report, scoring matrix calibration, intake form feedback review

## Output Format

Produce the following deliverables in sequence:

1. **Triage System Summary** (3–5 bullet overview of the designed workflow)
2. **Intake Form Template** (formatted as a fillable list of labeled fields with input type noted)
3.
