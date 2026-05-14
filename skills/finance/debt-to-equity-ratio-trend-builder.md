---
name: debt-to-equity-ratio-trend-builder
description: >
  Tracks debt-to-equity ratio changes across multiple reporting periods and identifies threshold breaches that may trigger lender covenant review. Use when someone says "analyze our D/E ratio over time," asks about leverage trends across quarters, wants to flag covenant breach risks, needs to review borrowing capacity against lender thresholds, or is preparing a debt covenant compliance report.
category: finance
tags: [debt-to-equity, leverage, covenant-compliance, financial-ratios, trend-analysis]
author: community
---

# Debt-to-Equity Ratio Trend Builder

This skill calculates and tracks debt-to-equity ratios across reporting periods, visualizes trend direction, and automatically flags periods where ratios breach or approach user-defined or standard lender thresholds.

## Workflow

1. **Collect inputs** — Gather total debt (short-term + long-term) and total shareholders' equity for each reporting period. Confirm whether periods are quarterly, annual, or trailing twelve months (TTM).

2. **Calculate D/E ratio per period** — For each period: D/E = Total Debt ÷ Total Shareholders' Equity. Round to two decimal places.

3. **Identify trend direction** — Compare each period to the prior period. Label each transition: Improving (ratio decreasing), Deteriorating (ratio increasing), or Stable (change < 0.05).

4. **Apply threshold checks** — Use thresholds provided by the user. If none are given, apply these defaults:
   - **Green zone**: D/E ≤ 1.5 (typically acceptable)
   - **Watch zone**: D/E 1.5–2.5 (elevated, monitor closely)
   - **Breach zone**: D/E > 2.5 (likely triggers lender review)

5. **Flag covenant risks** — Mark any period in the breach zone with a ⚠️ warning. If two or more consecutive periods are in the watch or breach zone, flag a **Sustained Leverage Concern**.

6. **Identify inflection points** — Highlight the period where the ratio first crossed into the watch zone and the peak ratio period.

7. **Summarize root causes** — For deteriorating trends, note whether the change was driven by debt increase, equity decrease (e.g., losses, buybacks), or both, based on the input data.

## Output Format

Produce the following in order:

**1. Period-by-Period Table**
| Period | Total Debt | Total Equity | D/E Ratio | Trend | Zone |
|--------|------------|--------------|-----------|-------|------|
Include all periods provided. Use ⚠️ in the Zone column for breach periods.

**2. Trend Summary** (3–5 bullet points)
- Overall direction across the full period range
- Peak and trough D/E ratios with dates
- Number of periods in each zone
- Any sustained leverage concern flag
- Key inflection point(s)

**3. Threshold Breach Detail** (only if breaches exist)
List each breach period with: the D/E value, the threshold exceeded, and a one-line note on likely lender implication (e.g., "May trigger covenant review under standard revolving credit agreements").

**4. Recommended Actions** (2–4 bullets)
Specific, actionable steps such as debt paydown targets, equity raise considerations, or proactive lender communication timing based on the trend observed.
