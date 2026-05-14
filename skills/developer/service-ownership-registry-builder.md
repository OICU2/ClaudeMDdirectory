---
name: service-ownership-registry-builder
description: >
  Creates a structured service ownership registry that maps each service to its responsible team,
  on-call contact, documentation link, and criticality tier. Use when someone says "I need to track
  who owns our services", asks about building a service catalog, wants to document service
  responsibilities, needs to create an on-call ownership map, or is trying to organize their
  microservices inventory.
category: developer
tags: [service-ownership, registry, microservices, on-call, documentation]
author: community
---

# Service Ownership Registry Builder

Generates a structured, complete service ownership registry from provided service details, inferring reasonable defaults when information is incomplete.

## Registry Building Workflow

1. **Collect service inventory** — Ask the user to list all services (or accept a partial list to start). If they provide a rough list, extract service names and any ownership hints from context.

2. **Gather ownership fields for each service** — For each service, collect or infer:
   - **Service Name**: Canonical identifier (e.g., `auth-service`, `payment-gateway`)
   - **Owning Team**: Team name responsible for development and maintenance
   - **On-Call Contact**: Primary contact (name + email/Slack handle) and secondary contact if available
   - **Documentation Link**: Runbook URL, Confluence page, README path, or internal wiki link
   - **Criticality Tier**: Assign one of four tiers:
     - `Tier 1 — Critical`: Outage causes immediate revenue loss or data breach risk
     - `Tier 2 — High`: Outage severely degrades user experience within minutes
     - `Tier 3 — Medium`: Outage causes degraded functionality but workarounds exist
     - `Tier 4 — Low`: Internal tooling or non-customer-facing services

3. **Infer missing fields** — If the user hasn't provided a field, make a reasonable inference based on context clues (e.g., a `payment-*` service is likely Tier 1) and flag it with `[INFERRED]` so the user can verify.

4. **Check for gaps** — Identify services with no named owner ("orphaned services") and flag them explicitly as requiring ownership assignment.

5. **Add registry metadata** — Include a header block with: registry version, creation date, last updated date, and total service count.

6. **Suggest maintenance practices** — After the registry, provide 3–5 concrete recommendations for keeping the registry current (e.g., PR gate that requires registry update when a new service directory is added).

## Output Format

Produce the registry in two formats side by side:

**1. Markdown Table** (primary, human-readable):

```markdown
# Service Ownership Registry
**Version:** 1.0 | **Created:** YYYY-MM-DD | **Services:** N

| Service Name       | Owning Team     | On-Call Primary          | On-Call Secondary        | Documentation                          | Criticality |
|--------------------|-----------------|--------------------------|--------------------------|----------------------------------------|-------------|
| auth-service       | Identity Team   | jane.doe@company.com     | john.smith@company.com   | https://wiki.company.com/auth-runbook  | Tier 1      |
| email-worker       | Notifications   | [INFERRED] notif@...     | —                        | /docs/email-worker/README.md           | Tier 3      |
```

**⚠️ Orphaned Services** (no owner assigned):
- `legacy-reporting` — requires ownership assignment

**2. YAML Block** (machine-readable, for tooling integration):

```yaml
registry:
  version: "1.0"
  created: "YYYY-MM-DD"
  services:
    - name: auth-service
      team: Identity Team
      oncall:
        primary: jane.doe@company.com
        secondary: john.smith@company.com
      documentation: https://wiki.company.com/auth-runbook
      criticality: tier-1
```

End with a **Maintenance Recommendations** section as a numbered list of 3–5 actionable items.
