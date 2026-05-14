---
name: developer-alert-routing-matrix
description: >
  Defines ownership-based routing rules for monitoring alerts so each incident is automatically directed to the correct on-call team. Use when someone says "set up alert routing," asks about "who should get paged for this alert," or wants to "map alerts to teams." Also triggers when someone needs to "define on-call escalation paths" or "configure monitoring ownership rules."
category: developer
tags: [alerting, on-call, incident-response, monitoring, devops]
author: community
---

# Developer Alert Routing Matrix

This skill builds a structured alert routing matrix that maps monitoring alerts to the correct on-call teams based on service ownership, severity, and escalation paths.

## Alert Routing Matrix Construction

1. **Gather service inventory** — List all services, microservices, and infrastructure components that generate alerts. Group them by domain (e.g., payments, auth, data-pipeline, infra).

2. **Define ownership tiers** — Assign a primary team and a secondary (escalation) team to each service group. Use format: `service → primary-team → escalation-team`.

3. **Classify alert severity levels** — Establish severity tiers with clear criteria:
   - **P1 (Critical):** System down, data loss risk, revenue impact → page immediately, 24/7
   - **P2 (High):** Degraded performance, partial outage → page during on-call hours
   - **P3 (Medium):** Non-critical failures, elevated error rates → notify via chat
   - **P4 (Low):** Informational, expected anomalies → log only, no page

4. **Map alert sources to owners** — For each alert rule or monitoring check, assign:
   - Owning team
   - Severity level
   - Notification channel (PagerDuty, Slack, email)
   - Escalation timeout (e.g., acknowledge within 10 minutes or escalate)

5. **Define escalation chains** — For each team, specify:
   - L1: Primary on-call engineer (auto-paged)
   - L2: Team lead or senior engineer (paged if no L1 ack within N minutes)
   - L3: Engineering manager or director (paged for prolonged P1s)

6. **Handle cross-team alerts** — For alerts that span multiple services, designate a single owning team as the coordinator with other teams as stakeholders (notified, not paged).

7. **Document override conditions** — Note any time-based rules (e.g., during deploys, maintenance windows) where routing or severity should be suppressed or redirected.

## Output Format

Produce a routing matrix in two parts:

**Part 1 — Routing Table (Markdown table):**
```
| Alert / Service        | Severity | Primary Team     | Escalation Team  | Channel       | Ack Timeout |
|------------------------|----------|------------------|------------------|---------------|-------------|
| payments-service-down  | P1       | payments-eng     | platform-eng     | PagerDuty     | 5 min       |
| auth-latency-high      | P2       | identity-team    | platform-eng     | PagerDuty     | 15 min      |
| db-replication-lag     | P2       | data-eng         | infra-team       | PagerDuty     | 10 min      |
| cdn-cache-miss-rate    | P3       | frontend-team    | —                | Slack #alerts | N/A         |
```

**Part 2 — Escalation Chain per Team (YAML block):**
```yaml
teams:
  payments-eng:
    l1: on-call-engineer
    l2: payments-team-lead
    l3: engineering-manager
    escalation_gap_minutes: 10
  identity-team:
    l1: on-call-engineer
    l2: identity-team-lead
    l3: engineering-manager
    escalation_gap_minutes: 15
```

Output should cover all provided services. If services are not specified, generate a representative example matrix with 8–12 alerts across at least 4 teams. Keep descriptions in the table concise (under 40 characters per cell).
