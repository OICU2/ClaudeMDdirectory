---
name: contingent-liability-disclosure-drafter
description: >
  Drafts ASC 450-compliant footnote language for loss contingencies based on legal assessments,
  reserve amounts, and materiality thresholds. Use when someone says "we need contingency footnote
  language," asks about disclosing a pending lawsuit in the financial statements, wants to draft
  probable or reasonably possible loss disclosures, needs help with litigation reserve footnotes,
  or is preparing contingent liability language for an audit or SEC filing.
category: finance
tags: [contingent-liability, footnote-disclosure, asc-450, litigation-reserve, sec-filing]
author: community
---

# Contingent Liability Disclosure Drafter

This skill drafts ASC 450-compliant footnote language for probable and reasonably possible loss contingencies, calibrated to disclosure thresholds and tailored to the specific legal or operational facts provided.

## Disclosure Drafting Workflow

### Step 1 — Classify the Contingency
Determine the likelihood tier based on input language or legal counsel assessment:
- **Probable**: The future event is likely to occur — accrue if estimable, disclose regardless.
- **Reasonably Possible**: More than remote but less than likely — disclose range or "cannot be estimated" if no range exists.
- **Remote**: Generally no disclosure required unless guarantee obligation.

### Step 2 — Gather Required Inputs
Before drafting, confirm you have or request:
- Nature of the contingency (lawsuit, regulatory action, product liability, environmental, contract dispute, etc.)
- Legal counsel's likelihood assessment (probable / reasonably possible / remote)
- Accrued reserve amount, if any
- Estimated loss range (low / high) or confirmation that a range cannot be determined
- Whether the matter is material individually or in aggregate
- Any restrictions on disclosure (e.g., privilege concerns, ongoing settlement negotiations)

### Step 3 — Apply Disclosure Thresholds
- If **probable and estimable**: Draft accrual disclosure stating the amount accrued and, if the exposure exceeds the accrual, the additional reasonably possible loss.
- If **probable but not estimable**: State that a liability has been recognized but the full extent cannot be determined; disclose range if available.
- If **reasonably possible**: No accrual language; disclose range of possible loss or state that an estimate cannot be made.
- If **aggregate disclosure**: Group individually immaterial matters and disclose aggregate possible exposure.

### Step 4 — Draft the Footnote
Structure the footnote with:
1. **Header**: "Note X — Commitments and Contingencies" or "Legal Proceedings" as appropriate.
2. **Nature paragraph**: Describe the matter, parties involved, and current status without admitting liability.
3. **Assessment paragraph**: State management's assessment of likelihood and the basis (e.g., advice of legal counsel).
4. **Financial impact paragraph**: State accrued amount (if any), reasonably possible loss range or "cannot be estimated," and any insurance recovery offsets.
5. **Boilerplate closing**: Standard language that the outcome cannot be predicted with certainty and may differ materially.

### Step 5 — Flag Sensitive Considerations
Note in your output if any of the following apply and require legal/auditor sign-off:
- Disclosure may prejudice the company's legal position (ASC 450-20-50-6 exception)
- Settlement is imminent and terms are confidential
- Insurance recovery is probable and offsets the accrual
- Matter involves a government investigation or SEC inquiry requiring additional Item 103 / MD&A disclosure

## Output Format

Produce the following:

**1. Draft Footnote Language** (primary deliverable)
- Plain prose, formal financial statement tone
- 150–400 words depending on complexity
- Written in third person ("the Company")
- No dollar sign placeholders left blank — use bracketed labels: `[$X million]`, `[$X to $Y million]`

**2. Classification Summary Table**

| Field | Value |
|---|---|
| Likelihood Tier | Probable / Reasonably Possible / Remote |
| Accrual Required | Yes / No |
| Accrual Amount | `[$X million]` or N/A |
| Reasonably Possible Exposure Above Accrual | `[$X to $Y million]` or Cannot be estimated |
| Disclosure Required | Yes / No |
