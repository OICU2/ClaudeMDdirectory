---
name: ops-supplier-dependency-concentration-report
description: >
  Identifies single-source supplier dependencies across critical inputs and flags concentration risk for contingency planning. Use when someone says "we rely on one supplier for this," asks about supply chain vulnerabilities, wants to audit vendor concentration, needs to assess supplier risk exposure, or is preparing a contingency or business continuity plan.
category: operations
tags: [supply-chain, risk-management, vendor-management, procurement, contingency-planning]
author: community
---

# Supplier Dependency Concentration Report

This skill analyzes supplier data to surface single-source dependencies, score concentration risk, and produce a prioritized report for contingency planning.

## Analysis Workflow

1. **Collect input scope** — Ask the user to provide or confirm: list of critical inputs/materials/services, current suppliers per input, spend or volume per supplier, and any known lead times or substitutability constraints.

2. **Identify single-source dependencies** — Flag every input category where exactly one supplier provides ≥80% of supply. Mark these as **critical concentration points**.

3. **Score concentration risk per input** — For each input, assign a risk tier:
   - **Critical**: Single source with no qualified backup and high operational impact
   - **High**: Single source with partial backup or long lead time to switch (>90 days)
   - **Medium**: 2 suppliers but top supplier exceeds 70% share
   - **Low**: 3+ suppliers, no single supplier exceeds 50%

4. **Assess impact dimensions** — For each critical/high item, evaluate:
   - Revenue or production impact if supplier fails
   - Time-to-substitute (days/weeks)
   - Geographic concentration (same region/country)
   - Financial health signals if known

5. **Identify systemic clusters** — Check whether multiple single-source suppliers share a common geography, parent company, logistics corridor, or raw material upstream. Flag cluster risks separately.

6. **Generate mitigation options** — For each Critical and High item, list 2–3 concrete actions: qualify a second source, hold safety stock, negotiate dual-sourcing clause, or develop in-house capability.

## Output Format

Produce a structured report with the following sections:

**Executive Summary** (3–5 bullet points): total inputs reviewed, count by risk tier, top 3 most critical dependencies, and headline recommendation.

**Concentration Risk Register** (table):
| Input/Category | Current Supplier(s) | Concentration % | Risk Tier | Substitutability | Recommended Action |
|---|---|---|---|---|---|

**Cluster Risk Flags** (bulleted list): any systemic groupings where multiple dependencies share a common failure mode.

**Prioritized Action Plan** (numbered list, sorted by risk tier then impact): specific next steps, owner role suggestions, and target timelines.

**Assumptions & Data Gaps**: note any inputs where data was incomplete and flag what information would change the risk assessment.

Report length: 1–3 pages equivalent. Use tables for the register, plain prose for summaries, and bullet points for actions. Avoid vague language — every action item must name a specific step, not a general goal.
