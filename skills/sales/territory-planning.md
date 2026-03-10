---
name: territory-planning
description: >
  Designs geographic or segment-based sales territories to maximize coverage, balance workload, and drive revenue. Use when someone says "divide up our sales regions," asks about "how to assign accounts to reps," or wants to "balance territory workload," "optimize sales coverage," or "split territories fairly."
category: sales
tags: [territory, sales-ops, coverage, segmentation, planning]
author: community
---

# Sales Territory Planning

This skill builds structured territory plans that balance rep capacity, account potential, and geographic or segment logic — activated whenever someone needs to divide, assign, or optimize sales coverage.

## Territory Planning Workflow

### 1. Gather Inputs
Collect the following before proceeding:
- Total number of sales reps available
- Geographic scope (country, region, metro) or segmentation model (industry, company size, product line)
- Total account or prospect universe (count and any tier/size classification)
- Revenue targets per rep or overall
- Any hard constraints (existing relationships, language requirements, travel limits)

### 2. Choose Territory Model
Select the most appropriate model based on inputs:
- **Geographic**: Assign by zip, county, state, or region — best for field sales with physical presence
- **Account-based**: Assign named accounts directly — best for enterprise or strategic selling
- **Segment-based**: Assign by vertical, company size, or product — best for specialized reps
- **Hybrid**: Combine geography with segment rules — common for mid-market teams

### 3. Balance the Territories
Apply these rules when distributing accounts or regions:
- Calculate total addressable revenue (TAR) per territory; aim for ±15% variance across reps
- Balance account counts weighted by tier (e.g., 1 enterprise account = 5 SMB accounts)
- Account for rep capacity: assume 40–60 active accounts per full-cycle AE, 80–120 for SDRs
- Flag any territory with a concentration risk (>30% of TAR from a single account)
- Identify coverage gaps — areas or segments with no assigned rep

### 4. Assign and Validate
- Draft initial assignment matrix
- Check for logical travel clusters if geographic (avoid rep territories that are non-contiguous)
- Validate against historical quota attainment — don't over-index on low-performers' territories
- Note any accounts requiring transition plans (existing relationships, in-flight deals)

### 5. Document Carve-Out Rules
Define explicit rules for edge cases:
- Who owns inbound leads from unassigned regions
- How named accounts override geographic rules
- Process for requesting territory exceptions
- Review cadence (quarterly or semi-annual reassessment triggers)

## Output Format

Produce the following sections in order:

**Territory Summary Table**
| Territory | Rep Name | Accounts (#) | Estimated TAR | Notes |
|-----------|----------|--------------|---------------|-------|
One row per territory, sortable, with variance % from average TAR noted at the bottom.

**Model Rationale** (3–5 bullets)
Why the chosen model fits the team's structure, goals, and constraints.

**Balance Analysis**
- TAR range (high/low), average, and variance %
- Account load range and average
- Any flagged concentration risks or coverage gaps

**Carve-Out Rules** (numbered list)
Explicit rules for exceptions, inbound routing, and named account overrides.

**Recommended Review Triggers**
List 3–5 conditions that should prompt a territory re-evaluation (e.g., rep turnover, market expansion, >20% quota miss).

Keep the full output under 600 words unless the account universe or rep count requires additional table rows.