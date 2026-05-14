---
name: cash-flow-classification-review-checklist
description: >
  Audits each cash flow line item to verify correct classification as operating, investing, or financing activity under GAAP or IFRS standards. Use when someone says "review my cash flow statement," asks about whether an item belongs in operating or investing, wants to check if their cash flow classifications are correct, needs to validate a statement of cash flows before filing or audit, or is unsure how to classify a specific transaction like interest paid or asset purchases.
category: finance
tags: [cash-flow, GAAP, IFRS, financial-statements, audit, accounting]
author: community
---

# Cash Flow Classification Review Checklist

This skill audits each line item on a statement of cash flows to confirm correct classification under GAAP (ASC 230) or IFRS (IAS 7), flagging misclassifications and explaining the correct treatment.

## Classification Review Workflow

### Step 1: Identify the Reporting Standard
- Confirm whether the entity reports under US GAAP or IFRS — several items differ between the two (e.g., interest paid, dividends received).
- Note if the direct or indirect method is used for operating activities.

### Step 2: Review Operating Activities
Check each item against these rules:
- **Include:** Cash from core business operations — receipts from customers, payments to suppliers, payments to employees, income taxes paid (unless directly linked to financing/investing), and interest received/paid (GAAP only for interest paid if not elected otherwise).
- **IFRS flexibility:** Under IAS 7, interest paid may be classified as operating or financing; dividends received may be operating or investing. Flag whichever policy is adopted and confirm consistent application.
- **Red flags:** Capital expenditures, loan repayments, or asset sale proceeds appearing here — these are misclassified.

### Step 3: Review Investing Activities
Check each item against these rules:
- **Include:** Purchase or sale of long-term assets (PP&E, intangibles), acquisitions or disposals of subsidiaries, purchases or maturities of investment securities, loans made to third parties and principal repayments received.
- **Red flags:** Routine maintenance costs (should be operating), debt issuance costs (financing), or proceeds from issuing equity (financing) appearing here.

### Step 4: Review Financing Activities
Check each item against these rules:
- **Include:** Proceeds from issuing debt or equity, repayments of borrowings, payment of dividends (GAAP — always financing; IFRS — financing or operating), repurchase of shares, finance lease principal payments.
- **Red flags:** Operating lease payments included here under GAAP post-ASC 842 (operating portion belongs in operating activities), or capital expenditures appearing here.

### Step 5: Flag Non-Cash Disclosures
- Identify any significant non-cash investing or financing transactions (e.g., asset acquisitions via debt, stock-for-stock exchanges, right-of-use asset recognition).
- Confirm these are excluded from the body of the statement and disclosed separately in the notes, as required by both GAAP and IFRS.

### Step 6: Cross-Check Totals
- Verify the net change in cash reconciles: Operating + Investing + Financing = Net change in cash and cash equivalents.
- Confirm beginning and ending cash balances tie to the balance sheet.
- Check that cash equivalents definition (typically maturities ≤ 90 days) is applied consistently.

### Step 7: Document Findings
For each misclassified or questionable item, record:
1. The item name and reported amount
2. Where it was classified
3. Where it should be classified
4. The specific GAAP (ASC 230) or IFRS (IAS 7) citation supporting the correction

## Output Format

Produce a structured review report with the following sections:

**Header**
- Entity name (if provided), reporting period, and applicable standard (GAAP/IFRS)

**Classification Audit Table**
A table with columns: | Line Item | Reported Amount | Reported Classification | Correct Classification | Status (✅ Correct / ⚠️ Review / ❌ Misclassified) | Standard Reference |

**Findings Summary**
- Bullet list of all flagged items with a one-sentence explanation of the issue and the required correction.

**Non-Cash Disclosure Check**
- Confirm whether required
