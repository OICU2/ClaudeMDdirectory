---
name: pricing-exception-request-builder
description: >
  Drafts structured pricing exception requests with deal context, competitive justification, and margin impact data for internal approval workflows. Use when someone says "I need a pricing exception," asks about getting a discount approved, wants to request special pricing for a deal, needs to justify below-standard pricing to management, or is trying to get a non-standard deal through approval.
category: sales
tags: [pricing, approvals, deal-desk, margin, competitive-intelligence]
author: community
---

# Pricing Exception Request Builder

This skill drafts complete, approval-ready pricing exception requests by collecting deal context, competitive pressures, and financial impact data, then formatting them for internal deal-desk or management review.

## Request Building Workflow

1. **Gather deal basics** — Collect customer name, deal size (ACV/TCV), close date, sales stage, and account owner. If any are missing, ask before proceeding.

2. **Capture the pricing ask** — Document the standard list price, the requested exception price, the discount percentage, and whether the exception applies to a specific product, bundle, or entire deal.

3. **Identify the justification type** — Determine which category applies:
   - Competitive displacement (name the competitor and their quoted price)
   - Budget constraint (document the customer's stated budget ceiling)
   - Strategic account (explain long-term expansion potential or logo value)
   - Multi-year commitment (note contract length and prepayment terms)
   - End-of-quarter acceleration (confirm close date commitment)

4. **Calculate margin impact** — State standard margin at list price, projected margin at exception price, and whether the deal remains above the company's minimum acceptable margin threshold. Flag if margin falls below floor.

5. **Document competitive intelligence** — Include competitor name, their pricing or proposal details, product/feature gaps that justify price parity or discount, and source of competitive information (customer-provided, rep-verified, etc.).

6. **State conditions and guardrails** — List any conditions attached to the exception: minimum contract length, no further discounting allowed, executive sponsorship required, specific use-case restrictions, or sunset clauses.

7. **Summarize the ask clearly** — End with a single-sentence approval request: what is being asked, from whom, and by when.

## Output Format

Produce a structured document with the following labeled sections:

**PRICING EXCEPTION REQUEST**

- **Submitted By:** [Name, Title, Date]
- **Deal Overview:** Customer, ACV, TCV, Close Date, Sales Stage
- **Standard Pricing:** List price and standard discount tier
- **Requested Exception:** Exception price, discount %, and scope
- **Justification Category:** [One of the five types from step 3]
- **Justification Detail:** 3–5 sentences explaining the specific business reason
- **Competitive Context:** Competitor, their pricing, and differentiation notes
- **Margin Analysis:** Standard margin %, exception margin %, floor threshold status (above/below/at floor)
- **Deal Conditions:** Bulleted list of any attached conditions or commitments
- **Approval Request:** One sentence stating the ask, approver name/role, and required response date

Length: 300–500 words. Use plain business language. No marketing language or superlatives. Flag any missing data fields with [REQUIRED: description] so the rep knows what to fill in before submitting.
