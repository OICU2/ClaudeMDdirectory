---
name: ops-supplier-price-variance-tracker
description: >
  Monitors supplier pricing changes over time and flags deviations from contracted or budgeted rates to support renegotiation or substitution decisions. Use when someone says "our supplier prices have changed," asks about "price variance from contract," or wants to "track supplier cost drift," "identify pricing anomalies," or "review vendor rate deviations."
category: operations
tags: [procurement, supplier-management, cost-control, variance-analysis, vendor-pricing]
author: community
---

# Supplier Price Variance Tracker

This skill analyzes supplier pricing data against contracted or budgeted baseline rates, calculates variances, flags exceptions, and recommends action when deviations exceed defined thresholds.

## Variance Analysis Workflow

**1. Establish Baseline**
- Identify the reference rate for each supplier/SKU: contracted rate, budgeted rate, or last-agreed price
- Confirm the effective date range for the baseline
- Note currency, unit of measure, and any tiered or volume-based pricing terms

**2. Collect Current Pricing Data**
- Gather actual invoice prices, quoted prices, or purchase order line items for the comparison period
- Group by supplier, then by item/SKU/service category
- Flag any missing baseline entries — these require manual contract lookup before proceeding

**3. Calculate Variance**
- Absolute variance: Current Price − Baseline Price
- Percentage variance: ((Current − Baseline) / Baseline) × 100
- Apply thresholds:
  - **Green (acceptable):** variance within ±3%
  - **Yellow (monitor):** variance between ±3% and ±10%
  - **Red (action required):** variance exceeds ±10% or exceeds a fixed dollar threshold (e.g., >$500 per line item)

**4. Identify Root Cause Categories**
For each red or yellow flag, assign a likely cause:
- Market commodity shift (raw material index movement)
- Contract expiry or auto-escalation clause triggered
- Volume shortfall (missing discount tier)
- Currency fluctuation
- Unauthorized price change (no contract amendment on file)
- Supplier error or billing discrepancy

**5. Recommend Action**
- **Renegotiate:** Variance is persistent (>2 consecutive periods), unauthorized, or exceeds budget impact threshold
- **Substitute supplier:** Variance exceeds 15% and alternative qualified vendors exist
- **Accept and amend contract:** Variance is justified by market data and within acceptable range
- **Dispute invoice:** Variance has no contractual basis and supplier has not provided written notice
- **Monitor only:** Yellow-zone variance with a known temporary cause

**6. Summarize Business Impact**
- Calculate total spend impact: Sum of (Absolute Variance × Volume Purchased) per supplier
- Rank suppliers by total dollar impact (highest to lowest)
- Identify which variances are favorable (cost savings) vs. unfavorable (cost overruns)

## Output Format

Produce a structured variance report with the following sections:

**Header**
- Analysis period (date range)
- Total suppliers analyzed
- Total SKUs/line items reviewed
- Overall spend impact (favorable vs. unfavorable, in currency)

**Variance Summary Table**
Columns: Supplier | Item/SKU | Baseline Price | Current Price | Abs. Variance | % Variance | Status (🟢/🟡/🔴) | Root Cause | Recommended Action

Sort by: Status (Red first), then by dollar impact descending.

**Priority Action List**
Numbered list of red-flagged items requiring immediate action, formatted as:
`[Supplier Name] — [Item] — [% variance] — [Recommended Action] — [Estimated Annual Impact]`

**Trend Note** (if multi-period data is available)
- Call out any suppliers with variance trending in the same direction for 3+ periods
- Flag any supplier where variance has accelerated period-over-period

**Data Gaps**
- List any suppliers or SKUs where baseline was missing or current price could not be confirmed
- Note what data is needed to complete the analysis

Length: Concise. Table is primary output. Narrative limited to summary header and action list only. No padding.
