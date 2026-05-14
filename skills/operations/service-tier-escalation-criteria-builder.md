---
name: service-tier-escalation-criteria-builder
description: >
  Builds structured escalation frameworks that define exactly when and how service requests should move between support tiers. Use when someone says "we need clearer escalation rules," asks about "when should tier 1 escalate to tier 2," or wants to "define escalation thresholds for our support team." Also activates when someone needs to "document routing criteria for service requests" or says "our frontline team doesn't know when to escalate."
category: operations
tags: [escalation, service-tiers, support-operations, routing-rules, incident-management]
author: community
---

# Service Tier Escalation Criteria Builder

This skill generates a complete, tiered escalation framework with explicit thresholds, routing rules, and decision criteria so frontline teams can act without ambiguity.

## Escalation Framework Build Process

**Step 1 — Gather Context**
Before building, identify:
- Number of service tiers in use (e.g., Tier 1 frontline, Tier 2 specialist, Tier 3 engineering, Tier 4 executive/vendor)
- Service domain (IT support, customer service, field operations, SaaS product, etc.)
- Existing SLA commitments (response times, resolution windows)
- Any escalation pain points already known (over-escalation, under-escalation, unclear ownership)

If context is not provided, state reasonable assumptions and proceed.

**Step 2 — Define Each Tier**
For every tier, document:
- **Tier name and owner** (role or team responsible)
- **Scope of authority** (what this tier can resolve without escalating)
- **Maximum hold time** (how long before escalation is mandatory)
- **Available tools and access level**

**Step 3 — Build Escalation Trigger Criteria**
For each tier boundary (e.g., Tier 1 → Tier 2), define triggers across four categories:

- **Technical triggers**: issue exceeds diagnostic capability, requires elevated system access, involves data integrity or security
- **Time-based triggers**: unresolved after X minutes/hours, SLA breach imminent within Y% of window, repeat contact within Z hours
- **Impact triggers**: affects more than N users, involves revenue-generating systems, customer is on premium/enterprise plan
- **Emotional/relationship triggers**: customer requests supervisor, legal threat made, executive or VIP involved

**Step 4 — Define Routing Rules**
For each escalation path, specify:
- **Who receives the escalation** (role title, queue name, or on-call rotation)
- **How to escalate** (ticket handoff, phone bridge, Slack channel, paging system)
- **What must be included** (required context fields before escalation is accepted)
- **Acknowledgment SLA** (how quickly the receiving tier must confirm receipt)

**Step 5 — Document Edge Cases and Override Conditions**
- List scenarios where normal tier sequence can be bypassed (e.g., P0 incidents go directly to Tier 3)
- Define who has authority to invoke a skip-tier escalation
- Note any regulatory or compliance scenarios requiring special routing

**Step 6 — Add Frontline Decision Aid**
Create a simple yes/no decision tree or checklist frontline agents can use in under 30 seconds to determine whether and where to escalate.

## Output Format

Produce the following sections in order, using markdown headers:

1. **Escalation Framework Overview** — 3–5 sentence summary of the tier structure and escalation philosophy
2. **Tier Definitions Table** — Markdown table with columns: Tier | Owner | Scope | Max Hold Time | Access Level
3. **Escalation Trigger Matrix** — One sub-section per tier boundary; each lists Technical, Time-Based, Impact, and Relationship triggers as bullet points with specific, measurable thresholds (e.g., "unresolved after 45 minutes" not "unresolved for a while")
4. **Routing Rules Table** — Markdown table with columns: From Tier | To Tier | Channel | Required Context | Ack SLA
5. **Skip-Tier and Override Conditions** — Bulleted list of named scenarios with bypass authority noted
6. **Frontline Decision Checklist** — A numbered yes/no checklist (8–12 questions max) that resolves to an escalation action or a hold recommendation

Total output length
