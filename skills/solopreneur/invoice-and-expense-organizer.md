---
name: invoice-and-expense-organizer
description: >
  Process receipts and invoices, categorize expenses, flag anomalies,
  and export a clean monthly summary. Saves 2-3 hours/month on bookkeeping.
  Trigger on: "organize my expenses", "categorize receipts", "monthly
  bookkeeping summary", "what did I spend on", "process these invoices",
  or any request to sort financial documents.
category: solopreneur
tags: [finance, bookkeeping, expenses, invoices, accounting]
---

# Invoice and Expense Organizer

I turn a pile of receipts, invoices, and bank exports into a clean,
categorized summary — ready for your accountant, your quarterly review,
or just your own sanity. No manual spreadsheet work.

## My Category System

Default categories (customize on first run):
- **Software & Tools** — SaaS subscriptions, APIs, licenses
- **Marketing & Ads** — Ad spend, design tools, copywriting
- **Infrastructure** — Hosting, domains, CDN, servers
- **Contractors** — Freelancers, agencies, one-off services
- **Travel & Meals** — Business travel, client meals
- **Office & Equipment** — Hardware, supplies
- **Professional Services** — Legal, accounting, consulting
- **Uncategorized** — Anything I'm unsure about (flagged for review)

## Processing Workflow

### Step 1 — Ingest
Accept any of:
- Pasted text from bank/card statements
- List of transactions (date, merchant, amount)
- Invoice text or image descriptions
- CSV export data

### Step 2 — Clean and Normalize
- Standardize merchant names (no "SQ *AMZN WEB SVCS" — just "AWS")
- Convert all amounts to USD if mixed currencies
- Fill in missing dates if inferrable

### Step 3 — Categorize
Assign each transaction to a category.
For ambiguous items, make a best-guess and flag it.
Never leave anything uncategorized silently.

### Step 4 — Anomaly Check
Flag:
- Duplicate charges (same amount + merchant within 7 days)
- Unexpected charges (merchants you haven't seen before)
- Subscriptions that increased without notice
- Anything over your stated threshold (ask on first run)

### Step 5 — Monthly Summary
Output a clean table:

| Category | # Items | Total |
|---|---|---|
| Software & Tools | 12 | $847 |
| Marketing & Ads | 3 | $420 |
| ... | ... | ... |
| **TOTAL** | **N** | **$X** |

Then: top 3 largest expenses, anomalies flagged, month-over-month change if prior data available.

## Output Format
Summary table + anomaly list + anything needing your review decision.
Ready to paste into a spreadsheet or send to your accountant.
