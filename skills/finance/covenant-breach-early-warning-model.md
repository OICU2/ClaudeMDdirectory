---
name: covenant-breach-early-warning-model
description: >
  Monitors key financial ratios against loan covenant thresholds and flags projected breaches before they occur based on current trend data. Use when someone says they need to track loan covenants, asks about covenant compliance risk, wants to model when a debt covenant might be breached, or needs to identify early warning signals for lender violations. Also triggers when someone wants to stress-test covenant headroom or project covenant status under different financial scenarios.
category: finance
tags: [covenants, debt-compliance, financial-ratios, risk-monitoring, credit-analysis]
author: community
---

# Covenant Breach Early Warning Model

This skill analyzes current financial ratios against loan covenant thresholds, calculates headroom, extrapolates trends, and produces a forward-looking breach risk assessment with timeline estimates.

## Covenant Monitoring Workflow

### Step 1: Collect Covenant Terms
Request or confirm the following for each covenant:
- Covenant type (e.g., Net Leverage Ratio, Interest Coverage Ratio, Fixed Charge Coverage Ratio, Current Ratio, Minimum Liquidity)
- Threshold level (minimum or maximum, e.g., "Net Leverage ≤ 4.5x")
- Measurement frequency (quarterly, semi-annual, annual)
- Cure period, if any
- Testing dates (actual calendar dates if available)

### Step 2: Gather Current Financial Data
Collect the most recent actuals and at least 4–8 prior periods:
- EBITDA (trailing twelve months preferred)
- Total debt / net debt
- Interest expense
- Fixed charges (rent, capex commitments, debt service)
- Current assets and current liabilities
- Cash and liquid assets
- Revenue and gross margin trends if relevant to projections

### Step 3: Calculate Current Covenant Metrics
For each covenant:
1. Compute the current ratio value using the standard formula
2. Compare to the threshold and calculate **headroom** (absolute and percentage)
   - Headroom % = (Current Value − Threshold) / Threshold × 100
3. Flag status: ✅ Compliant | ⚠️ At Risk (headroom < 15%) | 🔴 Near Breach (headroom < 5%) | ❌ In Breach

### Step 4: Build Trend Projection
1. Calculate period-over-period change in each covenant metric for the last 4–8 periods
2. Compute average rate of deterioration (or improvement)
3. Project forward 4–6 quarters using:
   - **Base case**: Linear extrapolation of current trend
   - **Stress case**: Apply 1.5x the deterioration rate (or use company-provided downside assumptions)
   - **Recovery case** (optional): Apply modest improvement scenario
4. Identify the first projected period where the ratio crosses the threshold under each scenario

### Step 5: Identify Root Cause Drivers
For each at-risk or deteriorating covenant:
- Identify which component is driving deterioration (e.g., EBITDA compression vs. debt increase)
- Quantify the impact of each driver in absolute terms
- Note whether the driver is recurring or one-time

### Step 6: Generate Remediation Options
For each flagged covenant, provide 2–4 concrete remediation levers:
- Operational (e.g., EBITDA improvement needed to restore headroom)
- Balance sheet (e.g., debt paydown required)
- Structural (e.g., covenant waiver, amendment, or reset)
- Include the magnitude of change required to restore minimum safe headroom (15%)

## Output Format

Produce a structured report with the following sections:

---

**COVENANT HEALTH DASHBOARD**
| Covenant | Threshold | Current Value | Headroom | Status | Quarters to Breach (Base) | Quarters to Breach (Stress) |
|---|---|---|---|---|---|---|
| [Name] | [e.g., ≤4.5x] | [e.g., 3.9x] | [e.g., 13.3%] | [⚠️/✅/🔴/❌] | [e.g., 3Q] | [e.g., 1Q] |

---

**BREACH RISK NARRATIVES**
For each at-risk covenant (⚠️ or 
