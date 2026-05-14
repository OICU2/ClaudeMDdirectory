---
name: ops-supplier-concentration-risk-report
description: >
  Analyzes supplier data to identify dangerous over-reliance on single vendors within each operational category and recommends diversification thresholds. Use when someone says "we depend too much on one supplier," asks about supplier risk exposure, wants to audit vendor concentration, needs a procurement risk assessment, or is concerned about supply chain vulnerability.
category: operations
tags: [procurement, risk-management, supply-chain, vendor-management, diversification]
author: community
---

# Supplier Concentration Risk Report

This skill audits supplier spend and volume data by category to flag concentration risk and produce actionable diversification recommendations.

## Analysis Workflow

1. **Collect inputs** — Request the following from the user:
   - List of suppliers with associated category, annual spend or order volume, and lead times
   - Total spend or volume per category
   - Any existing single-source dependencies or sole-supplier contracts
   - Business criticality rating per category if available (ask if not provided)

2. **Calculate concentration metrics per category**
   - Compute each supplier's share of category spend: `(supplier spend / total category spend) × 100`
   - Flag any supplier exceeding **50% share** in a category as High Risk
   - Flag any supplier between **30–50% share** as Medium Risk
   - Flag categories with only **1–2 active suppliers** as structurally vulnerable regardless of share
   - Identify categories where the top supplier accounts for >70% as Critical Concentration

3. **Apply risk scoring**
   - Score each category on a 1–5 scale combining: concentration share (40%), number of active suppliers (30%), category criticality (20%), supplier lead time (10%)
   - Rank categories from highest to lowest risk score

4. **Generate diversification thresholds**
   - For Critical/High-risk categories: recommend no single supplier exceed 40% share; target minimum 3 qualified suppliers
   - For Medium-risk categories: recommend no single supplier exceed 50% share; target minimum 2 qualified suppliers
   - Adjust thresholds upward (more conservative) if category criticality is high or lead times exceed 30 days
   - Note any categories where sole-sourcing is contractually or technically unavoidable

5. **Identify root causes**
   - Flag whether concentration stems from pricing leverage, historical preference, limited market supply, or lack of qualification of alternatives
   - Note suppliers that appear in multiple high-risk categories (compounded exposure)

6. **Produce recommendations**
   - List top 3–5 categories requiring immediate action
   - Suggest specific mitigation steps: qualify backup suppliers, split purchase orders, dual-source contracts, safety stock buffers
   - Recommend a review cadence (quarterly for critical, semi-annual for others)

## Output Format

Produce a structured report with these sections:

**Executive Summary** (3–5 bullet points): overall risk posture, number of high-risk categories, most critical exposures.

**Concentration Risk Table**: One row per category with columns — Category | Top Supplier | Top Supplier Share % | Total Suppliers | Risk Level (Critical/High/Medium/Low) | Risk Score (1–5).

**Critical Findings**: Numbered list of the top concerns, each with supplier name, category, concentration percentage, and one-line risk statement.

**Diversification Thresholds**: Table with columns — Category | Current Max Share % | Recommended Max Share % | Minimum Supplier Count | Priority (Immediate/Near-term/Monitor).

**Recommended Actions**: Numbered action items sorted by priority, each including the responsible team, suggested timeline (30/60/90 days), and expected risk reduction.

**Caveats**: Note any data gaps, assumptions made, or categories where sole-sourcing constraints limit diversification options.

Length: As long as the data requires. Use tables for all structured data. Use plain language — avoid jargon. Flag data gaps explicitly rather than filling them with assumptions.
