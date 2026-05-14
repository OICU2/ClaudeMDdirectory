---
name: ops-dependency-risk-matrix
description: >
  Maps critical operational dependencies to their failure likelihood and business impact to surface the highest-risk single points of failure. Use when someone says "what are our riskiest dependencies," asks about single points of failure, wants to assess infrastructure or service risk, needs to prioritize resilience work, or is worried about what could take down their system.
category: operations
tags: [risk-assessment, dependencies, resilience, infrastructure, prioritization]
author: community
---

# Ops Dependency Risk Matrix

This skill builds a structured risk matrix of operational dependencies by scoring failure likelihood and business impact, then ranks them to expose the most dangerous single points of failure.

## Dependency Risk Assessment Workflow

1. **Inventory dependencies** — Gather all critical dependencies across these categories:
   - Infrastructure (databases, message queues, caches, storage)
   - External services (third-party APIs, payment processors, auth providers)
   - Internal services (microservices, shared libraries, internal APIs)
   - Human/process (on-call rotations, manual deployment steps, key personnel)
   - Network/platform (DNS, CDN, cloud regions, load balancers)

2. **Score each dependency on two axes:**

   **Failure Likelihood (1–5):**
   - 1 = Extremely rare, redundant, battle-tested
   - 2 = Occasional issues, has redundancy
   - 3 = Known instability or limited redundancy
   - 4 = Frequent issues or no redundancy
   - 5 = Actively problematic or guaranteed to fail eventually

   **Business Impact if Failed (1–5):**
   - 1 = Cosmetic or minor degradation
   - 2 = Non-critical feature loss
   - 3 = Significant user-facing degradation
   - 4 = Core functionality down or major revenue impact
   - 5 = Complete outage or catastrophic data/financial loss

3. **Calculate Risk Score** — Multiply: `Risk Score = Likelihood × Impact`
   - Scores range from 1–25
   - 15–25 = Critical (immediate action required)
   - 8–14 = High (address in current quarter)
   - 4–7 = Medium (track and monitor)
   - 1–3 = Low (acceptable risk)

4. **Identify single points of failure** — Flag any dependency where:
   - There is no fallback or failover path
   - Recovery requires manual intervention
   - No health monitoring or alerting exists
   - The failure has never been tested (no chaos/DR testing)

5. **Assign ownership and current mitigations** — For each dependency, note who owns it and what mitigations already exist (circuit breakers, retries, replicas, backups, etc.).

6. **Prioritize recommendations** — For the top 5 risk scores, generate one concrete mitigation action each (e.g., "Add read replica," "Implement circuit breaker," "Document manual failover runbook").

## Output Format

Produce the following in order:

**1. Risk Matrix Table**
| Dependency | Category | Likelihood (1–5) | Impact (1–5) | Risk Score | SPOF? | Owner | Existing Mitigations |
|---|---|---|---|---|---|---|---|

Sort by Risk Score descending.

**2. Critical Risk Summary**
A bullet list of all dependencies scoring 15–25 with one sentence explaining why each is dangerous.

**3. Top 5 Action Items**
Numbered list. Each item: `[Dependency] — [Specific mitigation action] — [Suggested timeline]`

**4. Coverage Gaps**
A short paragraph (3–5 sentences) noting dependency categories that are unmonitored, untested, or missing from the inventory entirely.

Length: As long as needed to cover all dependencies thoroughly. Do not truncate the table. Use markdown formatting throughout.
