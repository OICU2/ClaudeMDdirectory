---
name: quote-and-pricing-sheet-generation
description: >
  Automates the assembly of customized, professionally formatted pricing quotes based on deal-specific inputs. Use when someone says "can you build me a quote," asks about putting together a pricing proposal, wants to generate a pricing sheet for a customer, needs to calculate deal pricing based on volume or terms, or is trying to formalize an offer for a prospect.
category: sales
tags: [quoting, pricing, proposals, sales-enablement, deal-management]
author: community
---

# Quote and Pricing Sheet Generation

This skill assembles structured, deal-specific pricing quotes from provided inputs and produces a clean, client-ready pricing document that reflects accurate costs, discounts, and terms.

## Quoting Workflow

1. **Gather required inputs before generating.** If any of the following are missing, ask for them explicitly:
   - Product(s) or service(s) being quoted
   - Unit price or base rate (if not provided, note as TBD)
   - Volume or quantity per line item
   - Contract or subscription term length (e.g., monthly, annual, 3-year)
   - Applicable discounts (volume tiers, promotional, negotiated)
   - Customer name and contact (for header)
   - Quote expiration date or validity window

2. **Apply pricing logic in this order:**
   - Start with base unit price
   - Apply volume-based tier discounts if quantity thresholds are met
   - Apply term-based discounts (e.g., 10% for annual, 20% for multi-year)
   - Apply any additional negotiated or promotional discounts last
   - Calculate subtotals per line item, then grand total
   - If tax or fees apply, add as a separate line with a clear label

3. **Flag assumptions explicitly.** If a discount rate, price, or term was assumed due to missing input, call it out in an "Assumptions" section at the bottom of the quote.

4. **Format for professionalism.** Use consistent alignment, clear labels, and logical grouping. Avoid raw formulas or intermediate calculations in the main table — show only inputs and outputs.

5. **Include a summary block.** After the line-item table, provide a one-paragraph plain-language summary of what the customer is getting, at what price, and under what terms — suitable for inclusion in an email or proposal.

## Output Format

Produce a structured pricing quote with the following sections:

**Header**
- Quote title: "Pricing Quote — [Customer Name]"
- Date issued and expiration date
- Prepared by (if provided)

**Line-Item Table** (Markdown table)
| # | Product / Service | Unit Price | Qty | Term | Discount | Line Total |
|---|-------------------|------------|-----|------|----------|------------|

**Totals Block**
- Subtotal
- Total Discount Applied (amount and %)
- Taxes / Fees (if applicable)
- **Grand Total** (bold)
- Billing frequency (e.g., billed annually, billed monthly)

**Deal Summary**
One short paragraph (3–5 sentences) summarizing the offer in plain language.

**Assumptions** (if needed)
Bulleted list of any values assumed or estimated due to missing inputs.

Length: as long as the deal complexity requires — do not truncate line items or omit totals for brevity.
