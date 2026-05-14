---
name: cross-department-resource-request-prioritization-model
description: >
  Scores and ranks incoming resource requests from multiple departments against available capacity and strategic priorities to produce a prioritized allocation recommendation. Use when someone says "we have competing requests for the same resources," asks about how to fairly allocate budget or headcount across teams, or wants to rank department requests by impact and urgency. Also activates when someone needs to resolve resource conflicts between departments or build a scoring model for request triage.
category: operations
tags: [resource-allocation, prioritization, operations, capacity-planning, decision-support]
author: community
---

# Cross-Department Resource Request Prioritization Model

This skill scores and ranks competing resource requests from multiple departments by evaluating each request against capacity constraints, strategic alignment, urgency, and ROI to produce a defensible prioritization recommendation.

## Scoring and Ranking Workflow

### Step 1: Collect Request Inputs
For each incoming request, gather:
- **Department name** and requestor
- **Resource type** (headcount, budget, tooling, infrastructure, time)
- **Quantity requested** (units, dollars, FTE, hours)
- **Deadline or needed-by date**
- **Stated business justification**
- **Sponsoring priority or initiative** (if any)

If any fields are missing, prompt the user to provide them before proceeding.

### Step 2: Define Available Capacity
Establish the total available pool for each resource type being contested. If the user has not provided this, ask: "What is the total available capacity for [resource type] in this allocation cycle?"

### Step 3: Score Each Request on Five Dimensions
Rate each request 1–5 on each dimension. Apply the weights below:

| Dimension | Weight | Scoring Criteria |
|---|---|---|
| Strategic Alignment | 30% | 5 = directly supports top-tier OKR or strategic initiative; 1 = no clear tie to strategy |
| Business Impact | 25% | 5 = quantifiable revenue, cost savings, or risk reduction >$500K or critical; 1 = minor or unclear impact |
| Urgency / Time Sensitivity | 20% | 5 = deadline within 30 days or regulatory/compliance driver; 1 = flexible, no firm deadline |
| Resource Efficiency | 15% | 5 = high output per unit of resource requested; 1 = low ROI or resource-heavy with uncertain return |
| Cross-Department Dependencies | 10% | 5 = blocking multiple other teams or downstream projects; 1 = isolated to one team |

**Weighted Score = Σ (dimension score × weight)**

### Step 4: Apply Capacity Constraint Check
Sum the resource quantities for all requests. If total requested exceeds available capacity:
- Flag the overallocation gap explicitly
- Identify the minimum viable resource amount for top-ranked requests where partial fulfillment is possible
- Note which requests can be deferred vs. which have hard deadlines

### Step 5: Rank and Categorize Requests
Sort all requests by weighted score (descending). Assign each to a tier:
- **Tier 1 (Fund Now):** Weighted score ≥ 4.0 — allocate resources immediately
- **Tier 2 (Fund if Capacity Allows):** Score 3.0–3.9 — fulfill after Tier 1, consider partial allocation
- **Tier 3 (Defer or Decline):** Score < 3.0 — defer to next cycle or request resubmission with stronger justification

### Step 6: Generate Allocation Recommendation
For each request, state the recommended decision: **Approve / Approve Partial / Defer / Decline**, the rationale in one sentence, and the suggested resource amount to allocate.

## Output Format

Produce a structured report with the following sections:

---

**Resource Allocation Summary**
- Cycle period / date
- Resource type(s) under consideration
- Total available capacity vs. total requested

**Prioritization Scorecard** (table)

| Rank | Department | Request Summary | Strategic | Impact | Urgency | Efficiency | Dependencies | Weighted Score | Tier |
|---|---|---|---|---|---|---|---|---|---|
| 1 | ... | ... | ... | ... | ... | ... | ... | ... | ... |

**Allocation Recommendations** (one row per request)

| Department | Requested |
