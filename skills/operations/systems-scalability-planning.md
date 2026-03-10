---
name: systems-scalability-planning
category: operations
description: >
  Plans how operational systems, workflows, and processes will scale as a business grows in users, revenue, or complexity. Use when someone says "we're growing fast and our systems can't keep up," asks about scaling their operations, or wants to prepare their infrastructure and processes for 10x growth. Also triggers when someone mentions bottlenecks slowing the team down or needs to plan capacity for hiring and expansion.
tags: [scalability, operations, growth-planning, systems, capacity]
author: community
---

# Systems Scalability Planning

This skill analyzes current operational systems and produces a structured plan for scaling people, processes, and technology as the business grows.

## Scalability Planning Workflow

### 1. Baseline Current State
- Identify all core operational systems (support, fulfillment, finance, HR, infrastructure, tooling)
- Document current capacity limits: how many users, orders, employees, or transactions each system handles today
- Surface the single biggest constraint or bottleneck in each system

### 2. Define Growth Scenarios
- Establish 3 growth horizons: 2x, 5x, and 10x current scale
- Quantify what each horizon means in concrete operational terms (e.g., "5x = 50,000 monthly active users, 200 support tickets/day, 30 employees")
- Identify which systems break first at each threshold

### 3. Classify Scaling Challenges
For each system, categorize the challenge type:
- **Linear cost**: Scales with headcount or manual effort — requires automation or process redesign
- **Technical ceiling**: Hard limits in software, infrastructure, or architecture — requires tool replacement or upgrade
- **Coordination complexity**: Works fine at current size but degrades with team growth — requires documentation, roles, or governance

### 4. Prioritize Interventions
Rank by: (severity of failure) × (likelihood of hitting the threshold in 12 months)
- **P1 – Fix before growth**: Systems that will break within 6 months at current trajectory
- **P2 – Plan now, implement during growth**: Systems that need lead time to replace or redesign
- **P3 – Monitor**: Systems with headroom; set a metric threshold that triggers action

### 5. Build the Scaling Roadmap
For each P1 and P2 item:
- Define the specific intervention (automate X, migrate to Y, hire Z role, document W process)
- Estimate effort (days/weeks) and cost
- Assign an owner
- Set a trigger metric (e.g., "when ticket volume exceeds 100/day, activate this plan")

## Output Format

Produce a structured scalability plan with these sections:

**1. Current State Snapshot** — Table with columns: System | Current Capacity | Current Load | Headroom

**2. Growth Horizon Definitions** — 3-row table: 2x / 5x / 10x with concrete operational metrics per horizon

**3. Bottleneck Analysis** — Bullet list per system: what breaks, at what scale, and why (classified by type)

**4. Priority Matrix** — Table: System | Failure Risk | Priority | Trigger Metric

**5. Scaling Roadmap** — Numbered list of interventions sorted by priority:
- Intervention description
- Timeline
- Owner (role, not name)
- Success metric

**6. Watch List** — Short list of P3 items with the metric threshold that escalates each to P1

Length: Comprehensive but scannable. Use tables and bullets. Avoid paragraphs longer than 3 sentences. Flag assumptions explicitly when input data is incomplete.