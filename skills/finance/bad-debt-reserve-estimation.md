---
name: bad-debt-reserve-estimation
category: finance
description: >
  Calculates allowance for doubtful accounts using historical aging buckets and write-off rates to produce defensible reserve journal entries and supporting schedules. Use when someone asks about estimating bad debt reserves, wants to calculate allowance for doubtful accounts, needs to set up an aging-based reserve methodology, is preparing for audit review of credit loss estimates, or wants to determine appropriate write-off provisions for receivables.
tags: [accounts-receivable, allowance, credit-loss, aging, accruals]
author: community
---

# Bad Debt Reserve Estimation

This skill walks through the full allowance-for-doubtful-accounts calculation using an aging bucket methodology, historical loss rates, and optional qualitative overlays, then produces a journal entry and supporting schedule ready for audit defense.

## Aging Bucket Methodology

### Step 1 — Collect Inputs
Gather the following from the user (prompt for any that are missing):
- Accounts receivable aging schedule broken into standard buckets: Current, 1–30 days, 31–60 days, 61–90 days, 91–120 days, 120+ days
- Historical write-off rate per bucket (ideally 3–5 year average)
- Gross AR balance per bucket
- Any known specific reserves (individually impaired accounts)
- Qualitative adjustment factors (e.g., economic deterioration, customer concentration risk, industry stress)

### Step 2 — Apply Historical Loss Rates
For each aging bucket:
1. Multiply gross AR balance × historical write-off rate = expected loss per bucket
2. Sum all buckets to get the **quantitative reserve base**

Example structure:
| Bucket | AR Balance | Historical Rate | Expected Loss |
|--------|------------|-----------------|---------------|
| Current | $500,000 | 0.5% | $2,500 |
| 1–30 days | $120,000 | 1.5% | $1,800 |
| 31–60 days | $60,000 | 5.0% | $3,000 |
| 61–90 days | $30,000 | 12.0% | $3,600 |
| 91–120 days | $15,000 | 25.0% | $3,750 |
| 120+ days | $10,000 | 60.0% | $6,000 |
| **Total** | **$735,000** | | **$20,650** |

### Step 3 — Add Specific Reserves
List individually identified impaired receivables separately:
- Customer name / account ID
- Gross balance
- Estimated collectible amount
- Specific reserve = Gross balance − Estimated collectible

Add total specific reserves to the quantitative reserve base.

### Step 4 — Apply Qualitative Overlays
Adjust the quantitative base for factors not captured in historical rates. Standard overlay categories (CECL-aligned):
- **Macroeconomic conditions**: +/− % based on unemployment trend, GDP outlook
- **Customer concentration**: add if top 3 customers exceed 30% of AR
- **Industry stress**: add if customer base is in a distressed sector
- **Policy changes**: adjust if credit terms were recently loosened

Document each overlay with a narrative rationale and dollar or percentage impact.

### Step 5 — Derive Required Reserve and True-Up Amount
1. **Required reserve** = Quantitative base + Specific reserves + Qualitative overlays
2. **Existing allowance balance** = pull from prior period balance sheet
3. **True-up (Bad Debt Expense)** = Required reserve − Existing allowance
   - Positive = additional expense needed (debit Bad Debt Expense)
   - Negative = reserve release (credit Bad Debt Expense)

### Step 6 — Draft Journal Entry
- **If increasing reserve:**
  - Dr. Bad Debt Expense $X
  - Cr. Allowance for Doubtful Accounts $X
- **If releasing reserve:**
  - Dr. Allowance for Doubtful Accounts $X
  - Cr. Bad Debt Expense $X

Include period, preparer, and reference to supporting schedule.

### Step 7 — Validate Reasonableness
Run these sanity checks:
- Reserve as % of gross AR
