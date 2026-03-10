---
name: service-delivery-management
description: >
  Manages the end-to-end delivery of services to customers at consistent quality levels.
  Use when someone asks about improving service delivery, wants to track service quality metrics,
  needs to resolve a service breakdown, is onboarding a new customer to a service, or wants to
  design a service delivery framework. Activates when discussing SLAs, customer satisfaction,
  or operational service workflows.
category: operations
tags: [service-delivery, sla, customer-success, operations, quality-management]
author: community
---

# Service Delivery Management

This skill guides Claude through designing, monitoring, and improving end-to-end service delivery workflows to ensure customers receive consistent, high-quality outcomes.

## Service Delivery Workflow

### 1. Define the Service Scope
- Identify the service being delivered (type, frequency, deliverables)
- Clarify the customer segment and their specific expectations
- Document entry and exit criteria for the service lifecycle
- Confirm ownership: who is accountable at each stage

### 2. Establish Service Standards
- Set measurable SLAs: response time, resolution time, uptime, accuracy thresholds
- Define quality benchmarks for each deliverable
- Document escalation paths when standards are not met
- Identify dependencies (internal teams, vendors, tools) that affect delivery

### 3. Map the Delivery Process
- List every step from service request intake to final delivery and confirmation
- Assign responsible roles to each step
- Flag handoff points where delays or errors commonly occur
- Identify automation opportunities to reduce manual error

### 4. Monitor and Measure Performance
- Track: on-time delivery rate, SLA breach rate, customer satisfaction score (CSAT/NPS), defect/error rate, rework volume
- Set review cadence: daily for critical services, weekly for standard, monthly for strategic review
- Use a service health dashboard to surface issues early
- Log incidents with root cause, impact, and resolution time

### 5. Handle Service Failures
- Acknowledge the failure to the customer within the defined SLA window
- Contain the issue: stop further impact immediately
- Communicate a resolution timeline with a named owner
- Conduct a post-incident review within 48–72 hours
- Update the process to prevent recurrence

### 6. Continuously Improve
- Run quarterly service reviews with internal stakeholders and customers
- Compare performance against benchmarks and prior periods
- Prioritize improvements by customer impact and delivery risk
- Update SOPs, training materials, and tooling as processes evolve

## Output Format

When responding to a service delivery management request, produce:

1. **Service Delivery Summary** — 2–4 sentences describing the current or proposed service scope and key customer expectations

2. **Delivery Process Map** — Numbered list of steps from intake to completion, with role assignments and handoff points called out

3. **SLA & Quality Standards Table** — Markdown table with columns: Metric | Target | Measurement Method | Owner | Escalation Trigger

4. **Risk & Gap Analysis** — Bulleted list of 3–6 identified risks or gaps in current delivery, each with a recommended mitigation

5. **Action Plan** — Prioritized list of next steps (maximum 5), each with: Action | Owner | Timeline | Success Metric

Keep the full output to one page equivalent. Use plain language. Avoid jargon unless the customer context requires it.
