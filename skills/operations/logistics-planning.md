---
name: logistics-planning
description: >
  Optimizes the movement of goods, information, or resources across supply chains, routes, and schedules. Use when someone says "plan a delivery route," asks about "how to move inventory," or wants to "optimize shipping," "coordinate supply chain operations," or "schedule resource distribution." Provides structured logistics plans with prioritized routing, capacity analysis, and contingency recommendations.
category: operations
tags: [logistics, supply-chain, routing, optimization, operations]
author: community
---

# Logistics Planning Skill

This skill creates actionable logistics plans for moving goods, information, or resources by analyzing constraints, optimizing routes and schedules, and surfacing risks with contingencies.

## Planning Workflow

1. **Define the movement problem** — Identify what is being moved (goods, data, people, resources), origin(s), destination(s), volume, and deadline.
2. **Gather constraints** — Extract hard constraints (budget caps, vehicle capacity, time windows, regulatory limits) and soft constraints (preferred carriers, SLA targets, cost preferences).
3. **Map current state** — Identify existing assets, infrastructure, carriers, or channels available. Note any bottlenecks, single points of failure, or capacity gaps.
4. **Generate routing or scheduling options** — Produce 2–3 distinct approaches (e.g., fastest, cheapest, most resilient). For each, calculate or estimate: total cost, transit time, resource utilization, and risk level.
5. **Score and recommend** — Rank options against stated priorities. Select a primary recommendation and explain the tradeoff clearly.
6. **Identify risks and contingencies** — List top 3 risks (delay, damage, shortage, compliance) with a mitigation action for each.
7. **Define KPIs and checkpoints** — Specify measurable metrics to track success (on-time delivery rate, cost per unit, fill rate) and milestone checkpoints for monitoring.

## Output Format

Produce a structured logistics plan with the following sections:

**Movement Summary**
- What is moving, from where, to where, by when, at what volume

**Constraints**
- Bulleted list of hard and soft constraints

**Options Comparison**
- Table or labeled blocks for each option showing: route/method, estimated cost, transit time, capacity fit, risk rating

**Recommended Plan**
- Single recommended approach with step-by-step execution sequence
- Resource assignments (carrier, mode, warehouse, personnel if applicable)
- Timeline with dates or relative milestones

**Risk Register**
- 3–5 risks in format: Risk | Likelihood | Impact | Mitigation

**KPIs & Checkpoints**
- 3–5 measurable success metrics with target values
- 2–3 checkpoint dates or trigger events for plan review

Length: concise but complete — typically 400–700 words. Use tables where comparison is needed. Avoid prose padding.