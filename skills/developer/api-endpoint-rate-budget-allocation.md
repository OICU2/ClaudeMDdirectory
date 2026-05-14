---
name: api-endpoint-rate-budget-allocation
description: >
  Distributes rate limit budgets across API consumers and endpoints based on usage patterns and priority tiers. Use when someone asks about rate limit budget distribution, wants to allocate API quotas across services, needs to set up tiered rate limiting for multiple consumers, is designing fair-use policies for an API gateway, or wants to prevent any single client from starving shared resources.
category: developer
tags: [rate-limiting, api-design, traffic-management, quota-allocation, api-gateway]
author: community
---

# API Endpoint Rate Budget Allocation

This skill analyzes API consumers and endpoints to produce a concrete rate limit budget allocation plan with tier assignments, per-endpoint quotas, and enforcement recommendations.

## Allocation Workflow

### 1. Gather Inputs
Collect the following before allocating:
- Total rate limit capacity (requests/second or requests/minute per endpoint)
- List of API consumers (services, teams, or external clients)
- Priority tiers (e.g., critical, standard, low-priority, or custom labels)
- Historical usage data or estimated usage patterns per consumer
- Endpoint sensitivity (read vs. write, cheap vs. expensive operations)

### 2. Define Priority Tiers
Assign each consumer to a tier with a budget weight:

| Tier | Example Consumers | Budget Share |
|------|------------------|--------------|
| Critical | Core services, SLA-bound clients | 40–50% |
| Standard | Internal apps, authenticated partners | 30–40% |
| Low-priority | Batch jobs, analytics scrapers | 10–20% |
| Burst-reserved | Shared overflow pool | 5–10% |

Adjust percentages based on stated priorities.

### 3. Calculate Per-Consumer Budgets
- Divide each tier's total budget proportionally across consumers within that tier
- Weight by historical usage ratio if data is available: `consumer_budget = tier_budget × (consumer_avg_usage / tier_total_avg_usage)`
- Apply a minimum floor (e.g., 10 req/min) so low-traffic consumers aren't starved

### 4. Apply Per-Endpoint Adjustments
- Write endpoints: reduce limits by 50–70% relative to read endpoints
- Expensive operations (search, aggregation, ML inference): treat as 3–5x the cost of simple CRUD
- Public/unauthenticated endpoints: cap at 20–30% of total capacity with strict burst limits

### 5. Define Burst and Sustained Rates
For each consumer/tier, specify two values:
- **Sustained rate**: the baseline tokens/requests per window (e.g., per minute)
- **Burst allowance**: short-term spike capacity (typically 1.5–2× sustained, up to 30 seconds)

### 6. Set Enforcement Rules
- **Reject vs. throttle**: specify whether over-limit requests get a `429 Too Many Requests` or are queued
- **Retry-After header**: always include with `429` responses
- **Spillover policy**: define whether unused budget from lower tiers flows to higher tiers (token bucket vs. fixed window)
- **Monitoring thresholds**: alert at 80% utilization sustained for >2 minutes

### 7. Validate the Allocation
Check:
- Sum of all tier budgets ≤ total capacity
- No single consumer holds >60% of any tier's budget (prevents monopolization)
- Critical consumers can still operate if all lower-tier consumers hit their limits simultaneously

## Output Format

Produce the following sections in order:

**1. Allocation Summary Table**
A markdown table with columns: Consumer | Tier | Sustained Rate (req/min) | Burst Rate (req/min) | Endpoints Covered | Notes

**2. Per-Endpoint Budget Breakdown**
For each distinct endpoint or endpoint group, list: path pattern, allowed methods, per-tier limits, cost multiplier applied.

**3. Enforcement Configuration Snippet**
A sample configuration block (YAML or JSON, matching the user's stack if specified) showing how to implement the limits in a common gateway (Kong, nginx, AWS API Gateway, or generic pseudoconfig).

**4. Risk Flags**
Bullet list of any consumers or endpoints where the allocation is tight, ambiguous, or likely to need revision after observing real traffic.

**5. Recommended Review Cadence**
One sentence
