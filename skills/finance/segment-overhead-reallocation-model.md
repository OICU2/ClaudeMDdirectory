---
name: segment-overhead-reallocation-model
description: >
  Recalculates segment profitability after applying a revised overhead allocation methodology and quantifies the financial impact on each reported segment. Use when someone says "reallocate overhead across segments," asks about "how segment margins change under a new cost allocation," or wants to "model the impact of shifting shared costs between business units." Also activates when someone needs to "restate segment results using a different allocation basis" or wants to "compare segment profitability before and after overhead reallocation."
category: finance
tags: [segment-reporting, overhead-allocation, profitability-analysis, cost-accounting, management-reporting]
author: community
---

# Segment Overhead Reallocation Model

This skill recalculates segment-level profitability by replacing an existing overhead allocation methodology with a revised approach and produces a side-by-side impact analysis for each reported segment.

## Reallocation Workflow

### 1. Capture Inputs
Collect the following before proceeding:
- **Segments**: Names and current reported financials (revenue, direct costs, allocated overhead, operating income)
- **Total overhead pool**: The shared cost base being reallocated (confirm whether fixed, variable, or blended)
- **Current allocation basis**: How overhead is currently assigned (e.g., headcount, revenue share, square footage, direct labor hours)
- **Revised allocation basis**: The new methodology to apply (e.g., ABC drivers, activity hours, asset base, equal split)
- **Allocation drivers by segment**: Quantified values for both the old and new basis (e.g., headcount per segment, revenue per segment)

### 2. Calculate Current Allocation
- Compute each segment's share under the existing methodology:
  `Current Allocation% = Segment Driver Value ÷ Total Driver Value`
- Apply to total overhead pool:
  `Current Allocated Overhead (Segment) = Total Overhead × Current Allocation%`
- Verify allocations sum to 100% of the overhead pool

### 3. Calculate Revised Allocation
- Repeat using the new driver values and revised methodology
- Flag any methodological change in allocation basis (e.g., switching from single-rate to activity-based)
- Compute:
  `Revised Allocated Overhead (Segment) = Total Overhead × Revised Allocation%`

### 4. Restate Segment Profitability
For each segment, compute restated figures:
- `Restated Operating Income = Revenue − Direct Costs − Revised Allocated Overhead`
- `Restated Operating Margin% = Restated Operating Income ÷ Revenue`

### 5. Quantify the Impact
For each segment calculate:
- `Overhead Shift = Revised Allocated Overhead − Current Allocated Overhead`
- `Operating Income Impact = −Overhead Shift` (positive = margin improvement, negative = margin compression)
- `Margin Impact (bps) = Operating Income Impact ÷ Revenue × 10,000`

### 6. Sense-Check
- Confirm total overhead allocated is identical under both methodologies (reallocation is zero-sum)
- Identify which segments are winners (lower overhead) and losers (higher overhead)
- Flag any segment where the reallocation causes a sign change (profit to loss or vice versa)

## Output Format

Produce the following structured output:

**Section 1 — Methodology Summary**
- One paragraph describing the old vs. new allocation basis and the rationale for the change

**Section 2 — Allocation Driver Table**
| Segment | Old Driver Value | Old Allocation % | New Driver Value | New Allocation % | Overhead Shift ($) |

**Section 3 — Segment P&L Restatement Table**
| Segment | Revenue | Direct Costs | Old Overhead | Old Op. Income | Old Margin % | New Overhead | New Op. Income | New Margin % | Income Impact ($) | Margin Impact (bps) |

**Section 4 — Summary Narrative**
- 3–5 bullet points calling out the most significant impacts: largest margin movers, any profit-to-loss flips, and the aggregate zero-sum confirmation

**Section 5 — Sensitivity Note** (if applicable)
- If allocation drivers are estimates, note the key assumptions and suggest one alternative driver to test

All monetary values should be in consistent units (specify $000s or $M). Tables must be
