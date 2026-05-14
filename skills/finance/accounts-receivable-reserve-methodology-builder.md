---
name: accounts-receivable-reserve-methodology-builder
description: >
  Builds and documents a structured allowance for doubtful accounts methodology using aging-bucket
  or loss-rate approaches. Use when someone needs to estimate bad debt reserves, asks how to
  calculate the allowance for doubtful accounts, wants to set up an AR aging analysis, needs to
  document their credit loss estimation process, or is preparing for an audit of receivables
  reserves.
category: finance
tags: [accounts-receivable, bad-debt, allowance-for-doubtful-accounts, aging-analysis, credit-loss]
author: community
---

# Accounts Receivable Reserve Methodology Builder

This skill constructs a documented, repeatable methodology for estimating the allowance for doubtful accounts using aging-bucket percentages or historical loss rates, producing audit-ready outputs each reporting period.

## Methodology Selection and Setup

1. **Identify the applicable method** based on the user's data availability:
   - **Aging-bucket method**: Use when AR can be segmented by days outstanding (0–30, 31–60, 61–90, 91–120, 120+). Apply a reserve percentage to each bucket.
   - **Loss-rate method**: Use when historical write-off data is available as a percentage of total AR or credit sales over a lookback period (typically 12–36 months).
   - **Combination**: Apply loss rates within aging buckets when both data types are available.

2. **Gather required inputs**:
   - Current AR aging schedule (customer-level or summary by bucket)
   - Historical write-off amounts and corresponding AR balances (for loss-rate derivation)
   - Customer credit risk segments (if applicable: commercial vs. consumer, industry, geography)
   - Prior-period reserve balance and any write-offs taken since then
   - Current economic or business conditions that may require qualitative adjustments

3. **Derive reserve percentages**:
   - For aging-bucket: Calculate write-off rate per bucket = (historical write-offs from bucket) ÷ (opening AR in that bucket) over the lookback period. Average across periods; adjust for trend.
   - For loss-rate: Calculate rate = (total write-offs) ÷ (average AR or credit sales) over the lookback window. Segment by customer type if data allows.
   - Document the lookback period, number of periods averaged, and any outlier exclusions.

4. **Apply qualitative (Q-factor) adjustments** to the quantitative base rates:
   - Industry or customer concentration risk
   - Recent changes in credit policy or customer mix
   - Macroeconomic indicators (unemployment, industry distress)
   - Known specific large-balance exposures (assess individually)
   - Document the direction and magnitude of each adjustment with rationale.

5. **Calculate the reserve**:
   - Multiply each aging bucket balance (or total AR) by the adjusted reserve percentage.
   - Sum to arrive at the required reserve balance.
   - Compare to prior-period ending reserve; compute the required provision (or reversal): Required Reserve − Prior Reserve Balance = Current-Period Provision/(Benefit).

6. **Perform a reasonableness check**:
   - Compare reserve as a % of total AR to prior periods and industry benchmarks.
   - Identify significant period-over-period changes and document the drivers.
   - Flag individual balances exceeding a materiality threshold for specific review.

## Output Format

Produce a structured reserve memo with the following sections:

**1. Methodology Summary** (2–4 sentences): State the method selected, lookback period, and key assumptions.

**2. Aging Schedule / Input Data Table**
| Bucket | AR Balance | Historical Loss Rate | Q-Factor Adj. | Adjusted Rate | Reserve Amount |
|--------|------------|----------------------|---------------|---------------|----------------|
| 0–30   | $X         | X%                   | +/- X%        | X%            | $X             |
| ...    | ...        | ...                  | ...           | ...           | ...            |
| **Total** | **$X** |                      |               |               | **$X**         |

**3. Q-Factor Documentation**: Bullet list — each factor, direction of adjustment, and one-sentence rationale.

**4. Roll-Forward Schedule**
| Item | Amount |
|------|--------|
| Beginning reserve balance | $X |
|
