---
name: coupon-code-performance-analysis
description: >
  Analyzes redemption rates, revenue impact, and margin erosion across active coupon and discount codes to identify which promotions drive genuine incremental revenue versus cannibalizing full-price sales. Use when someone asks "are our coupons actually working," wants to evaluate discount code performance, needs to understand if promotions are hurting margins, or is trying to identify which promo codes drive new customers versus discounting existing buyers. Also activates when someone wants to audit their promotional strategy or determine if a coupon campaign was worth running.
category: marketing
tags: [coupons, promotions, revenue-analysis, margin, discount-codes]
author: community
---

# Coupon Code Performance Analysis

This skill evaluates coupon and discount code effectiveness by separating incremental revenue gains from cannibalization of full-price sales, and surfaces which promotions erode margin without driving genuine growth.

## Analysis Framework

### 1. Collect Required Inputs
Ask for or request the following data if not provided:
- Coupon codes and their discount type (%, fixed amount, BOGO, free shipping)
- Redemption counts per code over the analysis period
- Revenue attributed to each code
- Average order value (AOV) with vs. without coupon
- Customer segment breakdown (new vs. returning) per code
- Cost of goods or gross margin % for affected products
- Baseline AOV and conversion rate during the same period without coupons

### 2. Calculate Core Metrics Per Code
For each active coupon code, compute:
- **Redemption rate**: redemptions / total orders in period
- **Revenue impact**: gross revenue from coupon orders vs. estimated revenue at full price
- **Margin erosion**: (discount amount × redemptions) + any incremental fulfillment cost
- **Incrementality score**: % of redemptions from first-time buyers or lapsed customers (>90 days inactive)
- **AOV delta**: AOV with coupon minus baseline AOV (negative = basket shrinkage)
- **Net revenue contribution**: revenue after discount minus COGS for coupon-attributed orders

### 3. Classify Each Coupon Code
Assign one of four classifications:
- **Growth Driver**: High new/lapsed customer rate (>50%), positive net margin contribution, AOV at or above baseline
- **Retention Tool**: High returning customer rate, maintains AOV, acceptable margin trade-off
- **Cannibalizer**: >70% redeemed by customers who would have purchased anyway, AOV below baseline, margin negative
- **Inconclusive**: Insufficient redemption volume (<30 uses) or missing customer segment data

### 4. Identify Cannibalization Signals
Flag a coupon as likely cannibalizing full-price sales if:
- Returning customer redemption rate exceeds 65%
- AOV drops more than 15% compared to baseline
- Coupon is publicly discoverable (not targeted) and high-volume
- Redemption spikes correlate with end-of-period buying patterns (customers waiting for deals)

### 5. Calculate Blended Promotional ROI
- Total discount cost across all codes
- Total attributed revenue lift (actual revenue minus projected revenue without promotion)
- Net margin impact: sum of margin erosion across all codes
- Break-even incrementality rate: what % of orders need to be truly incremental for the promotion to be margin-neutral

### 6. Generate Recommendations
For each classification, produce a specific action:
- **Growth Drivers**: Increase distribution, test higher discount thresholds, expand to lookalike audiences
- **Retention Tools**: Move to triggered/personalized delivery only, set redemption caps
- **Cannibalizers**: Deprecate or restrict to targeted segments, add minimum purchase thresholds, move to private/one-time codes
- **Inconclusive**: Set a 60-day test period with proper tracking before next evaluation

## Output Format

Produce a structured report with these sections:

**1. Executive Summary** (3-5 bullet points)
- Total discount cost in period
- Estimated incremental revenue generated
- Net margin impact
- Number of codes classified as cannibalizers
- Single most actionable finding

**2. Per-Code Scorecard** (table format)
| Code | Type | Redemptions | Revenue | Margin Erosion | New Customer % | AOV Delta | Classification | Recommended Action |

**3. Cannibalization Analysis** (paragraph, 
