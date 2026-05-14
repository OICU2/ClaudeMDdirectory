---
name: insurance-claim-reserve-estimator
description: >
  Estimates incurred-but-not-reported (IBNR) insurance claim reserves using historical loss development factors and current exposure data. Use when someone asks about IBNR reserves, wants to estimate unreported claims, needs to calculate loss development factors, is working on actuarial reserve analysis, or wants to build a claims triangle for reserve estimation.
category: finance
tags: [actuarial, insurance, reserves, IBNR, loss-development]
author: community
---

# Insurance Claim Reserve Estimator

This skill calculates IBNR reserves by building loss development triangles, deriving age-to-age factors, and projecting ultimate losses from current exposure data.

## Reserve Estimation Workflow

### 1. Gather Input Data
Collect the following from the user:
- Historical paid or incurred losses by accident year and development period (loss triangle data)
- Current exposure metrics (earned premium, policy count, or payroll by accident year)
- Any known large losses or unusual development patterns to exclude
- Selected tail factor assumption (or derive from industry benchmarks if unavailable)

### 2. Build the Loss Development Triangle
- Organize losses into a matrix: rows = accident years, columns = development ages (e.g., 12, 24, 36, 48 months)
- Label each cell as `Loss[accident_year, development_age]`
- Identify the latest diagonal (most recent evaluated losses)

### 3. Calculate Age-to-Age Development Factors
For each development period transition (12→24, 24→36, etc.):
- Compute weighted average factor: `f = Σ Loss[y, age+1] / Σ Loss[y, age]` summed over all years with data at both ages
- Also compute simple average and volume-weighted 3-year and 5-year averages
- Flag any factor that deviates more than 15% from the weighted average as an outlier

### 4. Select Loss Development Factors (LDFs)
- Default to the volume-weighted all-year average unless outliers distort it
- Apply a tail factor beyond the last development age (industry default: 1.000–1.050 depending on line of business; prompt user if unknown)
- Compute cumulative development factors (CDFs) by multiplying LDFs from right to left

### 5. Project Ultimate Losses
For each accident year:
- `Ultimate Loss = Current Evaluated Loss × CDF[current development age]`
- `IBNR = Ultimate Loss − Current Evaluated Loss`

### 6. Validate Results
- Cross-check IBNR as a percentage of ultimate against industry norms (typically 5–40% depending on line and maturity)
- Flag accident years where IBNR exceeds 60% of ultimate as high-uncertainty estimates
- Note any years with fewer than 3 data points as statistically unreliable

## Output Format

Produce a structured report with the following sections:

**1. Loss Development Triangle**
- Formatted table with accident years as rows and development ages as columns
- Bold the latest diagonal values

**2. Age-to-Age Factors Table**
- Columns: Development Period | Weighted Avg | 3-Year Avg | 5-Year Avg | Selected Factor
- One row per development period transition plus tail factor

**3. Cumulative Development Factors**
- One-row table mapping each development age to its CDF

**4. IBNR Reserve Summary Table**
- Columns: Accident Year | Evaluated Loss | CDF | Ultimate Loss | IBNR Reserve
- Include a totals row summing IBNR and Ultimate Loss

**5. Key Assumptions & Warnings**
- Bullet list of selected tail factor, averaging method chosen, any outliers excluded, and any high-uncertainty accident years flagged

**6. Total IBNR Estimate**
- Single bold figure: `Total Estimated IBNR Reserve: $X,XXX,XXX`
- Include a one-sentence confidence note if data quality is limited

Use dollar formatting with commas. Round factors to 3 decimal places. Round loss amounts to the nearest whole dollar.
