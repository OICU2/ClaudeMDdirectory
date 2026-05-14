---
name: service-request-categorization-model
description: >
  Classifies incoming service requests by type, urgency, and responsible team to reduce triage time and misrouting. Use when someone says "we need to triage this request," asks about "which team should handle this ticket," wants to "categorize incoming support requests," needs to "prioritize service queue items," or is trying to "route requests to the right department."
category: operations
tags: [triage, service-desk, routing, classification, itsm]
author: community
---

# Service Request Categorization Model

This skill analyzes incoming service requests and outputs a structured classification including request type, urgency level, and responsible team to speed up triage and eliminate misrouting.

## Classification Workflow

1. **Extract request details** — Identify the core problem statement, any stated deadlines, affected systems or users, and the submitter's role or department.

2. **Assign request type** from the following taxonomy:
   - `incident` — Something is broken or degraded right now
   - `service-request` — A standard, repeatable task (access provisioning, software install, account changes)
   - `change-request` — A planned modification to infrastructure, process, or configuration
   - `problem` — Root cause investigation for recurring incidents
   - `inquiry` — Question or information request requiring no action

3. **Assign urgency level** using these criteria:
   - `critical` — Business operations halted, revenue or safety impacted, affects 50+ users
   - `high` — Core functionality impaired, workaround unavailable, affects key personnel
   - `medium` — Partial degradation, workaround exists, affects limited users
   - `low` — Minor inconvenience, cosmetic issue, single user, no deadline pressure

4. **Identify responsible team** based on keywords and context:
   - Keywords like "network," "VPN," "firewall," "connectivity" → `Network & Infrastructure`
   - Keywords like "login," "password," "access," "permissions," "SSO" → `Identity & Access Management`
   - Keywords like "laptop," "hardware," "printer," "monitor," "device" → `End User Computing`
   - Keywords like "app," "software," "bug," "error," "crash," "feature" → `Application Support`
   - Keywords like "data," "report," "dashboard," "analytics," "query" → `Data & Analytics`
   - Keywords like "billing," "invoice," "contract," "vendor" → `Finance Operations`
   - Keywords like "HR," "onboarding," "offboarding," "payroll," "benefits" → `People Operations`
   - Unclear or cross-functional requests → `Service Desk (Unassigned)`

5. **Flag ambiguities** — If the request lacks enough detail to classify with confidence, note exactly what information is missing.

6. **Generate routing rationale** — Write one sentence explaining why this classification was chosen.

## Output Format

Produce a structured classification block followed by a brief rationale:

```
REQUEST CLASSIFICATION
──────────────────────
Request Type:      [incident | service-request | change-request | problem | inquiry]
Urgency:           [critical | high | medium | low]
Responsible Team:  [Team Name]
Confidence:        [high | medium | low]

Routing Rationale:
[1 sentence explaining the classification decision.]

Missing Information (if any):
- [Specific detail needed to improve classification accuracy]
- [Additional item if applicable]
```

If classifying multiple requests in batch, output one block per request separated by a horizontal rule, preceded by a numbered header (e.g., `Request #1: [first 8 words of the request]`).
