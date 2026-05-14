---
name: service-level-agreement-design
description: >
  Drafts comprehensive SLA documents defining uptime commitments, response times, and escalation procedures for service relationships. Use when someone needs to create a service agreement, asks about defining support tiers, wants to establish uptime guarantees, needs to formalize response time commitments, or is setting up escalation procedures between teams or with external vendors.
category: operations
tags: [sla, agreements, operations, service-management, documentation]
author: community
---

# Service Level Agreement Design

This skill drafts structured SLA documents with measurable commitments, tiered response targets, and clear escalation paths for internal or external service relationships.

## SLA Design Workflow

1. **Clarify the relationship type** — Determine if this is internal (team-to-team), external (vendor/customer), or hybrid. Adjust formality and legal language accordingly.

2. **Define the service scope** — Identify what services are covered, explicitly state what is excluded, and document any dependencies outside the provider's control (force majeure, third-party outages).

3. **Establish uptime and availability commitments**
   - Specify uptime percentage (e.g., 99.9% = ~8.7 hours downtime/year)
   - Define the measurement window (monthly, quarterly, annual)
   - Clarify scheduled maintenance windows and whether they count against uptime

4. **Set response and resolution time tiers**
   - Map incident severity levels (Critical/P1, High/P2, Medium/P3, Low/P4)
   - Assign initial response times per severity (e.g., P1: 15 min, P2: 1 hr, P3: 4 hrs, P4: 24 hrs)
   - Assign target resolution times per severity
   - Distinguish between business hours and 24/7 coverage obligations

5. **Design the escalation procedure**
   - Define escalation triggers (time elapsed, severity increase, customer request)
   - Name escalation tiers (L1 Support → L2 Engineer → Manager → Executive)
   - Specify contact methods and on-call rotation expectations

6. **Define penalties and remedies** — Include service credits, refund structures, or corrective action plans tied to missed commitments. Specify how credits are calculated and claimed.

7. **Specify reporting and review cadence** — Monthly uptime reports, quarterly SLA review meetings, incident post-mortem requirements.

8. **Include definitions section** — Define all key terms: "downtime," "incident," "business hours," "response time," "resolution time" to eliminate ambiguity.

9. **Add revision and termination clauses** — How the SLA is amended, notice periods, and conditions for termination.

## Output Format

Produce a complete SLA document with the following structure:

- **Header**: Document title, version number, effective date, parties involved
- **Section 1 — Purpose and Scope**: Service description, included/excluded services
- **Section 2 — Definitions**: Glossary of all key terms used
- **Section 3 — Availability Commitments**: Uptime percentage, measurement method, maintenance windows
- **Section 4 — Incident Response SLOs**: Severity matrix table with response and resolution targets
- **Section 5 — Escalation Procedures**: Tiered escalation path with contacts and trigger conditions
- **Section 6 — Monitoring and Reporting**: Metrics tracked, tooling, report frequency and recipients
- **Section 7 — Remedies and Credits**: Credit calculation formula, claim process, caps on liability
- **Section 8 — Review and Amendments**: Review schedule, amendment process, version control
- **Section 9 — Signatures**: Signature block for both parties

Use tables for severity tiers and credit structures. Use numbered lists for escalation steps. Length should be 600–1,200 words for a standard SLA. Flag any section where missing information requires the user to supply specifics before the document is finalized.
