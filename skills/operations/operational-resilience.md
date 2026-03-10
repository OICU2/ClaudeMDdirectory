---
name: operational-resilience
description: >
  Helps teams design and strengthen operations that can absorb disruptions, recover quickly from failures, and maintain continuity under stress. Use when someone says "we keep getting knocked offline," asks about disaster recovery planning, wants to reduce downtime, needs to harden their systems against failure, or is building a business continuity plan.
category: operations
tags: [resilience, disaster-recovery, business-continuity, incident-response, reliability]
author: community
---

# Operational Resilience Skill

This skill helps teams systematically identify vulnerabilities, design shock-absorbing operations, and build fast recovery capabilities so disruptions become manageable events rather than crises.

## Resilience Assessment and Design Workflow

### 1. Map the Failure Landscape
- Identify all critical operational dependencies: systems, people, suppliers, infrastructure, data
- For each dependency, assess: likelihood of failure, blast radius if it fails, current detection time, current recovery time
- Categorize threats: technical (outages, bugs, data loss), human (key-person risk, error), external (vendor failure, natural disaster, cyber attack), process (cascade failures, bottlenecks)

### 2. Calculate Resilience Gaps
- Define Recovery Time Objective (RTO): maximum tolerable downtime per function
- Define Recovery Point Objective (RPO): maximum acceptable data loss window
- Compare current actual recovery times against RTO/RPO targets
- Identify single points of failure with no redundancy or fallback
- Flag dependencies where recovery time exceeds tolerance by >2x — these are critical gaps

### 3. Apply Resilience Patterns
For each critical gap, apply one or more of these patterns:
- **Redundancy**: Active-active or active-passive failover for systems and personnel
- **Decoupling**: Async queues, circuit breakers, graceful degradation modes
- **Absorbers**: Rate limiting, load shedding, bulkheads to contain blast radius
- **Runbooks**: Pre-written, tested recovery procedures so no one improvises under pressure
- **Observability**: Alerting and dashboards that detect failure before users report it
- **Backups**: Automated, tested, offsite, with documented restoration procedures

### 4. Build the Recovery Playbook
For each critical failure scenario, document:
- Detection signal (how you know it's happening)
- Immediate containment steps (stop the bleeding)
- Recovery sequence (ordered steps to restore function)
- Communication script (what to say to stakeholders, when)
- Owner (named person, not a role)
- Estimated time per phase

### 5. Stress Test the Plan
- Run tabletop exercises: walk through failure scenarios verbally with the team
- Conduct chaos testing: deliberately trigger failures in non-production environments
- Measure actual RTO/RPO during drills and compare against targets
- Identify steps that took longer than expected or had missing information
- Update runbooks after every drill and every real incident

### 6. Embed Continuous Resilience
- Conduct blameless post-mortems after every incident using a 5-whys root cause format
- Track a resilience backlog: prioritized list of hardening improvements
- Review and test disaster recovery plans quarterly
- Assign resilience ownership — someone must own this or it decays

## Output Format

Produce a **Resilience Assessment and Action Plan** with these sections:

**1. Resilience Snapshot (table)**
| Dependency | Failure Mode | Likelihood | Blast Radius | Current RTO | Target RTO | Gap |
|---|---|---|---|---|---|---|

**2. Critical Gaps List**
Bulleted list of the top 3–5 most dangerous gaps, each with one sentence explaining why it matters.

**3. Recommended Patterns**
For each gap: the specific resilience pattern to apply, concrete implementation steps (3–5 bullets), and estimated effort (hours/days).

**4. Recovery Playbook Template**
A filled-in example for the highest-priority failure scenario using the 6-field format: detection signal, containment, recovery sequence, communication script, owner, estimated time.

**5. 30-Day Resilience Roadmap**
Ordered action list with owner, effort estimate, and success metric for each item.

Keep language direct and operational. No theory without a concrete action attached. Flag anything requiring immediate attention in **bold**.