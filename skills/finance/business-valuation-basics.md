---
name: business-valuation-basics
description: >
  Estimates the market value of a business using revenue multiples, EBITDA analysis, and asset-based methods. Use when someone asks "what is my business worth," wants to value a company, is considering buying or selling a business, needs a ballpark valuation, or asks about business appraisal methods.
category: finance
tags: [valuation, business, revenue-multiples, ebitda, mergers-acquisitions]
author: community
---

# Business Valuation Basics

This skill calculates an estimated market value for a business using three standard valuation methods and when someone wants to understand what a company is worth.

## Valuation Workflow

1. **Gather inputs** — Ask for or identify: annual revenue, net profit or EBITDA, total tangible assets, total liabilities, industry type, and growth stage (startup, growth, mature).

2. **Apply Revenue Multiple Method**
   - Use industry-standard revenue multiples (e.g., SaaS: 3–10×, retail: 0.3–0.5×, professional services: 0.5–1.5×, manufacturing: 0.4–0.8×)
   - Formula: `Valuation = Annual Revenue × Industry Multiple`
   - State the multiple range used and why

3. **Apply EBITDA Multiple Method**
   - Use standard EBITDA multiples (small business: 3–5×, mid-market: 5–8×, high-growth: 8–15×)
   - Formula: `Valuation = EBITDA × Industry Multiple`
   - If EBITDA is unavailable, estimate it from net profit + depreciation approximation

4. **Apply Asset-Based Method**
   - Formula: `Valuation = Total Tangible Assets − Total Liabilities`
   - Note intangible assets (brand, customer list, IP) as additive factors not captured here

5. **Synthesize a valuation range**
   - Average or weight the three methods based on business type (asset-heavy businesses weight asset method more; SaaS weights revenue/EBITDA more)
   - Produce a low, mid, and high estimate

6. **Flag key value drivers and risks** — List 3–5 factors that would push valuation higher or lower (customer concentration, recurring revenue, owner dependence, growth rate, market conditions)

## Output Format

Produce a structured valuation summary with these sections:

**Business Valuation Estimate**
- Inputs summary (revenue, EBITDA, assets, liabilities, industry)
- Method 1 — Revenue Multiple: range and result
- Method 2 — EBITDA Multiple: range and result
- Method 3 — Asset-Based: result
- **Estimated Valuation Range: $X – $Y** (bold, prominent)
- Value Drivers: bulleted list of what increases value
- Risk Factors: bulleted list of what decreases value
- Disclaimer: one line noting this is an estimate and a professional appraiser should be consulted for formal transactions

Keep the output scannable, use dollar figures throughout, and avoid jargon without explanation. Total length: 300–500 words.