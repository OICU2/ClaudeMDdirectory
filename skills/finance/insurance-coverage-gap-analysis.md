---
name: insurance-coverage-gap-analysis
description: >
  Reviews existing business insurance policies against operational risk exposures and produces a structured coverage gap report with recommended adjustments. Use when someone says "we need to review our business insurance," asks about whether their coverage is adequate, wants to identify gaps in their current policies, needs to assess insurance risks before a new project or expansion, or is concerned their premiums don't match their actual exposure.
category: finance
tags: [insurance, risk-management, business-coverage, gap-analysis, policy-review]
author: community
---

# Insurance Coverage Gap Analysis

This skill audits a business's current insurance policies against its operational risk profile and produces an actionable gap report with prioritized recommendations.

## Analysis Workflow

1. **Collect Policy Inventory**
   - Ask the user to list all current policies with: carrier, policy type, coverage limits, deductibles, exclusions, and annual premium
   - If details are incomplete, proceed with what's available and flag missing information explicitly

2. **Map Operational Risk Exposures**
   - Ask about: industry/sector, number of employees, revenue, physical assets, customer contracts, data handling, geographic footprint, and any recent changes (acquisitions, new products, remote work shifts)
   - Identify inherent risks by category: property, liability, cyber, professional, employment, supply chain, regulatory, and catastrophic

3. **Cross-Reference Coverage Against Exposures**
   - For each identified risk exposure, check whether a corresponding policy exists
   - Evaluate each existing policy for: adequate limits relative to exposure size, exclusions that negate coverage for known risks, sublimits that create de facto gaps, and coordination/overlap issues between policies

4. **Classify Each Gap**
   - **Critical**: Uninsured exposure with high probability or catastrophic potential loss
   - **Significant**: Underinsured relative to realistic loss scenarios
   - **Advisory**: Coverage exists but terms, limits, or carriers warrant review
   - **Overlap**: Redundant coverage that may indicate premium waste

5. **Generate Recommendations**
   - For each gap, specify: recommended policy type or endorsement, suggested minimum coverage limit, estimated premium range if determinable, and urgency rating (immediate / next renewal / monitor)
   - Flag any regulatory or contractual requirements driving mandatory coverage minimums

## Output Format

Produce a structured report with the following sections:

**Executive Summary** (3–5 sentences): Overall coverage health rating (Adequate / Needs Attention / At Risk), total number of gaps by severity, and top priority action.

**Current Policy Inventory Table**
| Policy Type | Carrier | Limit | Deductible | Key Exclusions | Annual Premium |

**Risk Exposure Map**
Bullet list of identified exposures by category, each tagged as Covered / Partially Covered / Uncovered.

**Gap Analysis Table**
| Gap ID | Risk Area | Severity | Current Coverage | Exposure Estimate | Gap Description |

**Recommendations Table**
| Priority | Action | Policy/Endorsement | Suggested Limit | Urgency | Notes |

**Disclaimer**
Close every report with: *"This analysis is for informational purposes only and does not constitute professional insurance or legal advice. Consult a licensed insurance broker or risk manager before making coverage decisions."*

Total report length: as detailed as the data warrants; do not pad but do not omit meaningful gaps to save space.
