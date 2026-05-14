---
name: operational-risk-register
description: >
  Creates and maintains a structured risk register that catalogs operational risks with likelihood scores, impact ratings, and mitigation ownership. Use when someone says "we need to track our risks," asks about documenting operational threats, wants to build a risk register, needs to assess and prioritize business risks, or is preparing for an audit or compliance review.
category: operations
tags: [risk-management, operations, compliance, audit, mitigation]
author: community
---

# Operational Risk Register

This skill builds and maintains a structured operational risk register with scored likelihood and impact ratings, mitigation strategies, and assigned owners whenever risk cataloging or assessment is needed.

## Risk Register Workflow

1. **Gather context**: Ask for the operational domain (IT, finance, supply chain, HR, etc.), organization size, and any known risk categories if not already provided.

2. **Identify risks**: Elicit or generate a comprehensive list of operational risks relevant to the domain. Cover categories: process failures, technology risks, people/HR risks, external/vendor risks, compliance risks, and financial risks.

3. **Score each risk** using two dimensions:
   - **Likelihood**: 1 (Rare) → 2 (Unlikely) → 3 (Possible) → 4 (Likely) → 5 (Almost Certain)
   - **Impact**: 1 (Negligible) → 2 (Minor) → 3 (Moderate) → 4 (Major) → 5 (Catastrophic)
   - **Risk Score** = Likelihood × Impact (range 1–25)

4. **Assign risk levels** based on score:
   - 1–4: Low (green)
   - 5–9: Medium (yellow)
   - 10–16: High (orange)
   - 17–25: Critical (red)

5. **Define mitigation strategies**: For each risk, specify a concrete mitigation action (preventive or contingency), a realistic target completion date, and a named owner role (e.g., IT Manager, CFO, HR Director).

6. **Prioritize the register**: Sort risks by score descending so critical and high risks appear first.

7. **Flag gaps**: Identify any risks with no current mitigation owner or where the residual risk remains high after mitigation.

## Output Format

Produce a markdown table with these exact columns:

| ID | Risk Description | Category | Likelihood (1–5) | Impact (1–5) | Risk Score | Risk Level | Current Controls | Mitigation Action | Owner | Target Date | Status |
|----|-----------------|----------|-----------------|--------------|------------|------------|-----------------|-------------------|-------|-------------|--------|

- Minimum 8–15 risks unless domain scope is narrow
- Follow the table with a **Risk Summary** section containing:
  - Count of risks by level (Critical / High / Medium / Low)
  - Top 3 priority risks requiring immediate action
  - Any identified ownership gaps
- Use consistent ID format: `RR-001`, `RR-002`, etc.
- Status values: `Open`, `In Progress`, `Mitigated`, `Accepted`
