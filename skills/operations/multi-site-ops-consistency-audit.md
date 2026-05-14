---
name: multi-site-ops-consistency-audit
description: >
  Compares operational procedures, tooling, and performance metrics across multiple locations or teams to identify inconsistencies and standardization gaps. Use when someone says "our sites aren't operating the same way," asks about why different locations have different results, or wants to standardize processes across offices, warehouses, or teams. Also triggers when someone needs to audit operational consistency or benchmark one site against others.
category: operations
tags: [multi-site, audit, standardization, operations, consistency]
author: community
---

# Multi-Site Operations Consistency Audit

This skill systematically compares procedures, tooling, and performance data across multiple operational locations to surface inconsistencies and produce a prioritized standardization plan.

## Audit Workflow

1. **Define scope**: Clarify which sites, teams, or locations are in scope and what operational domains to audit (e.g., SOPs, software stack, staffing ratios, KPIs, vendor contracts, safety protocols).

2. **Collect inputs**: Ask the user to provide or describe available data for each site — this may include process documents, tool lists, performance metrics, org charts, or anecdotal observations. Accept partial data and flag gaps.

3. **Build a comparison matrix**: For each operational domain, map what each site does or uses. Structure as a site-vs-domain grid. Mark each cell as: Consistent ✅, Minor Variance ⚠️, or Major Gap ❌.

4. **Identify root causes**: For each inconsistency, note the likely origin — organic drift, local adaptation, resource difference, leadership discretion, or missing central policy.

5. **Score inconsistencies by impact**: Rate each gap on two axes:
   - **Risk**: safety, compliance, legal, financial exposure
   - **Efficiency loss**: redundant tooling, rework, speed variance, quality differences

6. **Generate recommendations**: For each major gap, recommend one of:
   - Adopt best-performing site's approach universally
   - Develop a new standard that replaces all variants
   - Formally allow local variation with defined guardrails

7. **Assign ownership and sequencing**: Suggest which gaps to address first (quick wins vs. structural changes) and who should own each remediation.

## Output Format

Produce a structured audit report with these sections:

**1. Audit Summary**
- Sites reviewed, domains assessed, data completeness rating (High / Medium / Low)

**2. Consistency Matrix**
- Table: rows = operational domains, columns = sites, cells = ✅ / ⚠️ / ❌

**3. Inconsistency Register**
- Bulleted list per gap: domain, sites affected, description of variance, root cause hypothesis, risk score (High/Medium/Low), efficiency impact (High/Medium/Low)

**4. Prioritized Recommendations**
- Numbered list ordered by priority: recommendation, rationale, suggested owner, estimated effort (Quick Win / Medium Lift / Major Initiative)

**5. Open Data Gaps**
- List any domains where data was insufficient to assess — with suggested data collection steps

Length: Scale to the number of sites and domains. A 3-site, 8-domain audit should produce roughly 600–1000 words. Larger audits expand proportionally. Use tables wherever comparison is the point.
