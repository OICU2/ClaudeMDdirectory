---
name: microservice-boundary-validation-audit
description: >
  Evaluates existing microservice boundaries against domain-driven design principles to identify coupling violations and recommend decomposition changes. Use when someone says "our services are too tightly coupled," asks about splitting or merging microservices, wants to audit service boundaries for domain alignment, mentions shared database problems between services, or needs to validate whether a service architecture reflects business domains correctly.
category: developer
tags: [microservices, architecture, domain-driven-design, coupling, decomposition]
author: community
---

# Microservice Boundary Validation Audit

This skill audits existing microservice architectures against domain logic and DDD principles to surface coupling violations, boundary misalignments, and concrete decomposition recommendations.

## Audit Workflow

### 1. Gather Service Inventory
Request or infer the following for each service:
- Service name and stated responsibility
- APIs/endpoints it exposes
- Data it owns (tables, collections, schemas)
- External services it calls (sync and async)
- Shared data stores with other services

### 2. Map Domain Boundaries
- Identify bounded contexts from the business domain (explicit or inferred from naming and behavior)
- Map each service to a bounded context
- Flag services that span multiple bounded contexts — this is a primary violation signal
- Identify domain concepts that appear in more than one service's data model

### 3. Detect Coupling Violations
Check for these specific anti-patterns:

**Shared Database Coupling**
- Two or more services read/write the same table or collection
- Flag: tight data coupling, schema changes ripple across services

**Chatty Service Dependencies**
- Service A makes 3+ synchronous calls to Service B per user request
- Flag: likely indicates these belong in the same bounded context

**Inappropriate Intimacy**
- Service exposes internal domain logic via API for another service to execute
- Flag: behavior belongs with data ownership

**Anemic Service Syndrome**
- Service owns data but delegates all logic to a orchestrator service
- Flag: boundary is inverted; logic and data should colocate

**Cross-Domain Entity References**
- Service stores foreign keys to entities owned by a different domain
- Flag: use domain events or IDs with local copies instead

**Circular Dependencies**
- Service A calls B, B calls A (sync or async)
- Flag: hard boundary violation, extract shared concern

### 4. Score Each Service
Rate each service on three axes (Low / Medium / High violation severity):
- **Autonomy**: Can it deploy independently without coordinating with other teams?
- **Cohesion**: Does everything in the service relate to one domain concept?
- **Data Sovereignty**: Does it own all data it is responsible for, and nothing more?

### 5. Generate Decomposition Recommendations
For each violation found:
- Name the specific violation type
- Identify the services involved
- Recommend one of: Extract, Merge, Re-assign ownership, Introduce domain events, or Apply anti-corruption layer
- Provide a concrete rationale tied to the domain

## Output Format

Produce a structured audit report with these sections:

```
## Microservice Boundary Audit Report

### Service Inventory Summary
| Service | Bounded Context | Owns Data | External Calls | Risk Score |
|---------|----------------|-----------|----------------|------------|
| ...     | ...            | ...       | ...            | Low/Med/High |

### Violations Found
#### [Violation #1 — Type Name]
- **Services involved**: ServiceA, ServiceB
- **Description**: What is wrong and why it violates domain boundaries
- **Evidence**: Specific API calls, shared tables, or patterns observed
- **Severity**: Low / Medium / High

[Repeat per violation]

### Decomposition Recommendations
#### Recommendation 1: [Action] — [Service(s)]
- **Action**: Extract / Merge / Re-assign / Introduce Events / ACL
- **Rationale**: Domain-specific reasoning
- **Steps**: Numbered concrete migration steps
- **Risk**: What breaks during transition and how to mitigate

[Repeat per recommendation]

### Priority Order
Ordered list of recommendations by impact vs. effort, with justification.
```

- Length scales with number of services: 1–5 services = concise 1-page report; 6+ services = full detailed report
- Always include the violations table even if empty (confirms clean audit)
- Use plain language for business stakeholders in
