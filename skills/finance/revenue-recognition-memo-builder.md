---
name: revenue-recognition-memo-builder
category: finance
description: >
  Drafts a structured technical accounting memo analyzing a customer contract under ASC 606 or IFRS 15, covering the five-step revenue recognition model in detail. Use when someone says "we need to document how we're recognizing revenue on this contract," asks about how to apply ASC 606 to a specific deal, wants to write a revenue recognition memo, needs to document performance obligations for a customer arrangement, or is preparing technical accounting documentation for an audit or controller review.
tags: [revenue-recognition, ASC-606, IFRS-15, technical-accounting, contracts]
author: community
---

# Revenue Recognition Memo Builder

This skill drafts a complete technical accounting memo that walks through a specific customer contract under ASC 606 or IFRS 15, producing audit-ready documentation of performance obligations, transaction price, allocation, and recognition timing.

## Workflow

### Step 1 — Gather Contract Information
Before drafting, collect or prompt for:
- Customer name and contract date
- Nature of goods or services promised (e.g., SaaS license, implementation services, hardware, support)
- Total contract value and payment terms
- Whether variable consideration exists (discounts, rebates, royalties, contingencies)
- Contract modifications, if any
- Applicable standard: ASC 606 (US GAAP) or IFRS 15
- Any known judgments or policy elections (e.g., practical expedients applied)

### Step 2 — Apply the Five-Step Model
Structure the analysis around each step explicitly:

1. **Identify the Contract with a Customer**
   - Confirm criteria are met: approval, commitment, rights identified, payment terms identified, commercial substance, collectibility probable
   - Note any contract combination or modification considerations

2. **Identify Performance Obligations**
   - List each distinct good or service promised
   - Apply the "capable of being distinct" and "distinct within the context of the contract" tests
   - Call out any bundled or series obligations
   - State conclusion: number and nature of performance obligations

3. **Determine the Transaction Price**
   - State total fixed consideration
   - Address variable consideration: identify type, apply constraint (most likely amount or expected value), document why amount is not constrained if unconstrained
   - Note significant financing component analysis if payment timing is unusual
   - Address noncash consideration or consideration payable to customer if applicable

4. **Allocate the Transaction Price**
   - Identify standalone selling prices (SSP) for each performance obligation
   - State method used: observable price, adjusted market assessment, expected cost plus margin, or residual approach
   - Show or describe allocation math
   - Note any discounts or variable consideration allocated to specific obligations

5. **Recognize Revenue**
   - For each performance obligation, determine: over time or at a point in time
   - If over time: identify which criterion is met and the measure of progress (input or output method)
   - If point in time: confirm when control transfers (delivery, acceptance, legal title, etc.)
   - State the resulting recognition pattern (monthly ratable, milestone, upon delivery, etc.)

### Step 3 — Document Judgments and Conclusions
- Explicitly flag areas of significant judgment
- Reference applicable ASC 606 or IFRS 15 paragraphs for each conclusion
- Note any practical expedients elected (e.g., right to invoice, portfolio approach, shipping and handling)
- Describe disclosure implications if material

### Step 4 — Summarize Journal Entry Impact
- Provide a brief summary of the accounting entries that result (e.g., contract asset, contract liability, revenue line items)
- Note timing of recognition relative to billing

## Output Format

Produce a formal memo with the following structure:

```
TECHNICAL ACCOUNTING MEMORANDUM

To: [Controller / Audit File / Technical Accounting Team]
From: [Preparer]
Date: [Date]
Re: Revenue Recognition Analysis — [Customer Name] Contract
Standard: ASC 606 / IFRS 15

1. BACKGROUND AND FACTS
   [2–4 sentences describing the contract, parties, and key terms]

2. ISSUE
   [1–2 sentences stating the accounting question]

3. ANALYSIS
   3.1 Step 1 – Contract Identification
   3.2 Step 2 – Performance Obligations
   3.3 Step 3 – Transaction Price
   3.4 Step 4 
