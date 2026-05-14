---
name: regulatory-capital-adequacy-tracker
description: >
  Monitors capital adequacy ratios and buffer thresholds against regulatory minimums to flag
  compliance shortfalls before reporting deadlines. Use when someone asks about capital ratio
  health, wants to check if their bank meets Basel III requirements, needs to review CET1 or
  Tier 1 capital buffers, is preparing for a regulatory capital submission, or wants to identify
  which capital metrics are at risk of breaching minimum thresholds.
category: finance
tags: [banking, basel-iii, capital-ratios, regulatory-compliance, risk-management]
author: community
---

# Regulatory Capital Adequacy Tracker

This skill evaluates a financial institution's capital ratios against Basel III/IV regulatory minimums and internal buffer thresholds, surfaces potential compliance shortfalls, and prioritizes remediation actions ahead of reporting deadlines.

## Assessment Workflow

### 1. Collect Capital Data
Request or confirm the following inputs:
- **CET1 Ratio** (Common Equity Tier 1 capital / Risk-weighted assets)
- **Tier 1 Capital Ratio** (Tier 1 capital / RWA)
- **Total Capital Ratio** (Total regulatory capital / RWA)
- **Leverage Ratio** (Tier 1 capital / Total exposure)
- **Liquidity Coverage Ratio (LCR)** and **Net Stable Funding Ratio (NSFR)** if available
- Institution type: G-SIB, D-SIB, or standard bank (determines surcharge requirements)
- Jurisdiction: Basel framework, EU (CRR2), US (PCA rules), or other
- Reporting deadline (if applicable)

### 2. Apply Regulatory Minimums

Compare inputs against the following thresholds:

| Ratio | Basel III Minimum | With Conservation Buffer | G-SIB Surcharge (up to) |
|---|---|---|---|
| CET1 | 4.5% | 7.0% | +3.5% |
| Tier 1 | 6.0% | 8.5% | +3.5% |
| Total Capital | 8.0% | 10.5% | +3.5% |
| Leverage Ratio | 3.0% | — | +0.5% (G-SIBs) |
| LCR | 100% | — | — |
| NSFR | 100% | — | — |

- Add countercyclical buffer (CCyB) if jurisdiction has activated one (range: 0–2.5%)
- Flag any ratio below its **combined buffer requirement** (CBR = conservation + CCyB + G-SIB surcharge)
- Flag any ratio within **50 bps of the CBR** as a watch item

### 3. Classify Each Metric

Assign a status to each ratio:

- 🔴 **BREACH**: Below regulatory minimum — immediate action required
- 🟠 **AT RISK**: Above minimum but below CBR — dividend/distribution restrictions may apply
- 🟡 **WATCH**: Within 50 bps of CBR — monitor closely
- 🟢 **ADEQUATE**: Meets CBR with headroom

### 4. Identify Remediation Levers

For any BREACH or AT RISK metric, list applicable remediation options:

- **Increase capital**: Retained earnings, equity issuance, AT1/T2 issuance
- **Reduce RWA**: Asset disposals, reduced lending, derivatives compression, securitization
- **Adjust dividends**: Restrict or defer distributions (mandatory under Maximum Distributable Amount rules)
- **Change asset mix**: Shift toward lower risk-weight assets
- Estimate approximate capital improvement per lever where data permits

### 5. Deadline Urgency Assessment

If a reporting deadline is provided:
- Calculate days remaining
- Flag whether remediation is feasible within the window given typical capital action lead times:
  - Equity issuance: 4–12 weeks
  - Asset disposal: 2–8 weeks
  - RWA optimization: 1–4 weeks
  - Retained earnings accrual: ongoing

## Output Format

Produce a structured capital adequacy report with these sections:

**1. Capital Ratios Summary Table**
A
