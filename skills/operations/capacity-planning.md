---
name: capacity-planning
description: >
  Forecasts future resource needs based on growth trends, usage patterns, and demand signals. Use when someone says "we're running out of capacity," asks about scaling infrastructure, wants to plan for anticipated growth, needs to estimate future resource costs, or is concerned about handling traffic spikes.
category: operations
tags: [capacity-planning, infrastructure, forecasting, scaling, resource-management]
author: community
---

# Capacity Planning

This skill analyzes current resource utilization, growth trends, and demand forecasts to produce actionable capacity plans that prevent shortages and optimize spend.

## Capacity Planning Workflow

### 1. Establish Baseline
- Collect current utilization metrics: CPU, memory, storage, network, and service-specific units (requests/sec, concurrent users, jobs/hour)
- Identify peak vs. average utilization and the ratio between them
- Document current resource limits and headroom remaining
- Ask for time range of historical data available (minimum 90 days preferred)

### 2. Model Growth
- Extract growth rate from historical data: calculate month-over-month and quarter-over-quarter trends
- Identify growth drivers: organic user growth, new features, seasonal patterns, marketing events
- Apply three forecast scenarios:
  - **Conservative**: current trend × 0.75
  - **Expected**: current trend extrapolated
  - **Aggressive**: current trend × 1.5 or tied to business targets (whichever is higher)
- Project out 3, 6, and 12 months for each scenario

### 3. Identify Constraints and Bottlenecks
- Flag which resource will hit limits first under each scenario
- Note lead times required to provision each resource type (e.g., hardware orders, hiring, license procurement)
- Identify dependencies that could block scaling (single points of failure, vendor limits, architectural constraints)

### 4. Define Thresholds and Triggers
- Set a **warning threshold** at 70% of limit — begin procurement process
- Set a **critical threshold** at 85% of limit — must have resources ready
- Map thresholds to projected dates under each scenario to produce a procurement timeline

### 5. Generate Recommendations
- Specify exact resource additions needed (quantity, type, timing) for each scenario
- Prioritize actions by time-sensitivity and lead time
- Include cost estimates if pricing data is available
- Propose architectural changes if linear scaling is cost-ineffective (e.g., caching, sharding, autoscaling policies)

## Output Format

Produce a structured capacity plan with the following sections:

**Executive Summary** (3–5 bullet points): current state, primary risk, recommended action, and timeline

**Current State Table**:
| Resource | Current Usage | Limit | Headroom | Days to Critical (Expected) |
|----------|--------------|-------|----------|----------------------------|

**Growth Forecast Table**:
| Timeframe | Conservative | Expected | Aggressive |
|-----------|-------------|---------|------------|

**Procurement Timeline**: Ordered list of actions with deadlines, responsible team, and estimated cost

**Risk Register**: 3–5 risks with likelihood, impact, and mitigation for each

**Assumptions**: Bulleted list of all assumptions made so stakeholders can validate or override them

Length: As long as needed to cover all resources in scope; use tables to keep it scannable. Flag any data gaps that would materially change the plan.