---
name: esop-dilution-impact-calculator
description: >
  Quantifies the per-share dilutive effect of outstanding employee stock option pools under both basic and fully diluted share counts. Use when someone asks about ESOP dilution impact, wants to calculate diluted earnings per share, mentions outstanding stock options affecting ownership, asks how employee stock options dilute existing shareholders, or needs to model the treasury stock method for option pools.
category: finance
tags: [esop, dilution, stock-options, equity, cap-table]
author: community
---

# ESOP Dilution Impact Calculator

This skill calculates the per-share dilutive effect of employee stock option pools using both the basic share count and the treasury stock method for fully diluted share counts.

## Calculation Workflow

1. **Collect Inputs**
   - Total basic shares outstanding (common shares issued)
   - Total options outstanding in the ESOP pool
   - Weighted average exercise price of the options
   - Current market price per share (or fair value for private companies)
   - Net income (for EPS dilution output)
   - Any other dilutive securities (warrants, convertible notes) if relevant

2. **Calculate Basic EPS**
   - Basic EPS = Net Income ÷ Basic Shares Outstanding

3. **Apply the Treasury Stock Method (TSM)**
   - Proceeds from hypothetical option exercise = Options Outstanding × Weighted Average Exercise Price
   - Shares repurchased at market price = Proceeds ÷ Current Market Price
   - Net dilutive shares added = Options Outstanding − Shares Repurchased
   - Only include options that are in-the-money (exercise price < current market price)

4. **Calculate Fully Diluted Share Count**
   - Fully Diluted Shares = Basic Shares Outstanding + Net Dilutive Shares

5. **Calculate Diluted EPS**
   - Diluted EPS = Net Income ÷ Fully Diluted Shares

6. **Compute Dilution Metrics**
   - Dilution percentage = Net Dilutive Shares ÷ Basic Shares Outstanding × 100
   - Per-share dilution impact = Basic EPS − Diluted EPS
   - Ownership dilution per existing share = Net Dilutive Shares ÷ Fully Diluted Shares × 100

7. **Flag Edge Cases**
   - If options are out-of-the-money, exclude from diluted count and state why
   - If net income is negative, diluted EPS equals basic EPS (anti-dilution rule)
   - Note any cliff or vesting assumptions if the full pool is not yet exercisable

## Output Format

Produce a structured summary with the following sections:

**Inputs Received**
- List all inputs used, with units

**Basic vs. Diluted Share Count**
| Metric | Value |
|---|---|
| Basic Shares Outstanding | X,XXX,XXX |
| Net Dilutive Shares (TSM) | X,XXX,XXX |
| Fully Diluted Shares | X,XXX,XXX |
| Dilution % | X.XX% |

**EPS Impact**
| Metric | Value |
|---|---|
| Basic EPS | $X.XX |
| Diluted EPS | $X.XX |
| Per-Share Dilution Impact | $X.XX |

**Key Observations**
- 2–4 bullet points interpreting the results (e.g., materiality of dilution, in/out-of-the-money status, sensitivity to market price changes)

**Assumptions & Limitations**
- State TSM assumptions, vesting status assumed, and any missing data that would refine the output
