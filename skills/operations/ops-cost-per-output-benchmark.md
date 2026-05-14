---
name: ops-cost-per-output-benchmark
description: >
  Calculates the cost per unit of operational output and benchmarks it against industry standards or historical internal performance. Use when someone asks "how much does it cost us to produce each unit," wants to benchmark operational efficiency, is trying to identify cost reduction opportunities, needs to compare production costs against competitors or past performance, or asks whether their cost per output is competitive. Triggers on phrases like "cost per unit," "cost efficiency benchmark," "are we spending too much per output," or "how do our production costs compare."
category: operations
tags: [cost-analysis, benchmarking, operational-efficiency, unit-economics, performance-metrics]
author: community
---

# Ops Cost Per Output Benchmark

This skill calculates cost per unit of operational output, benchmarks it against industry standards or internal historical data, and surfaces actionable insights about cost efficiency gaps.

## Workflow

### 1. Gather Required Inputs
Ask the user to provide:
- **Total operational costs** for the period (direct labor, materials, overhead, equipment, energy)
- **Total units of output** produced in the same period
- **Output type** (physical units, service transactions, processed orders, etc.)
- **Time period** (month, quarter, year)
- **Benchmark source preference**: industry standard, historical internal data, or both

If data is incomplete, explicitly list what is missing before proceeding.

### 2. Calculate Cost Per Output
```
Cost Per Unit = Total Operational Costs ÷ Total Units of Output
```
Break down costs into categories if data is available:
- Labor cost per unit
- Materials cost per unit
- Overhead cost per unit
- Total blended cost per unit

### 3. Source Benchmark Data
Use one or more of these approaches based on user input:
- **Industry standard**: Apply known industry benchmarks for the stated sector (e.g., manufacturing, logistics, SaaS support). State the source or note if the benchmark is an approximation.
- **Historical internal**: Compare against prior periods provided by the user. Calculate percent change.
- **If no benchmark data exists**: Flag this explicitly and recommend how the user can obtain it (industry reports, trade associations, peer surveys).

### 4. Calculate Benchmark Gap
```
Cost Gap = Current Cost Per Unit − Benchmark Cost Per Unit
Gap % = (Cost Gap ÷ Benchmark Cost Per Unit) × 100
```
Classify the result:
- **At or below benchmark (≤0% gap)**: Efficient or leading performance
- **1–10% above benchmark**: Minor inefficiency — monitor
- **11–25% above benchmark**: Moderate inefficiency — investigate root causes
- **>25% above benchmark**: Significant inefficiency — prioritize action

### 5. Identify Cost Drivers
For any gap above 10%, prompt the user or infer likely drivers:
- Labor productivity (output per labor hour)
- Material waste or yield loss
- Overhead allocation issues
- Volume/scale effects
- Pricing of inputs vs. benchmark peers

### 6. Generate Recommendations
Provide 2–4 specific, ranked action items based on the gap size and identified drivers. Each recommendation must include:
- What to change
- Expected impact direction (reduce cost, improve yield, etc.)
- Suggested next step or owner

---

## Output Format

Produce a structured report with these sections:

**Cost Per Output Summary**
| Metric | Value |
|---|---|
| Total Operational Cost | $X |
| Total Output Units | X |
| Current Cost Per Unit | $X.XX |
| Benchmark Cost Per Unit | $X.XX |
| Cost Gap | $X.XX (X%) |
| Performance Status | [At Benchmark / Minor / Moderate / Significant Inefficiency] |

**Cost Breakdown** (if data available)
- Labor: $X.XX/unit
- Materials: $X.XX/unit
- Overhead: $X.XX/unit

**Benchmark Notes**
- Source of benchmark, time period, and any caveats about comparability

**Root Cause Hypotheses**
- Bulleted list of likely cost drivers if a gap exists

**Recommendations**
1. [Action] — [Expected impact] — [Next step]
2. [Action] — [Expected impact] — [Next step]
3. (if applicable)

Keep the output concise. Do not pad with generic statements. If critical data is missing, state exactly what is needed before producing
