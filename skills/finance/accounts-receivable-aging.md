---
name: accounts-receivable-aging
description: >
  Categorizes outstanding customer invoices into overdue time buckets to prioritize collections and identify bad debt risk. Use when someone says "show me our aging report," asks about overdue invoices, wants to see which customers owe money, needs to prioritize collections efforts, or is trying to identify bad debt exposure.
category: finance
tags: [accounts-receivable, collections, invoicing, cash-flow, bad-debt]
author: community
---

# Accounts Receivable Aging

This skill analyzes outstanding customer invoices, sorts them into standard aging buckets, and surfaces collection priorities and bad debt risk so finance teams can act quickly.

## Aging Analysis Workflow

1. **Gather invoice data** — Collect or request: customer name, invoice number, invoice date, due date, and outstanding balance. If data is pasted or uploaded, parse each row.

2. **Calculate days overdue** — For each invoice, compute: `Days Overdue = Today's Date − Due Date`. Invoices not yet due show as 0 or negative (current).

3. **Assign to aging buckets** using these standard categories:
   - **Current** — Not yet due (days overdue ≤ 0)
   - **1–30 Days** — Mildly overdue; send reminder
   - **31–60 Days** — Escalate to direct outreach
   - **61–90 Days** — High priority; consider hold on new orders
   - **91–120 Days** — Serious risk; escalate to management
   - **120+ Days** — Bad debt risk; consider collections agency or write-off

4. **Aggregate by customer** — Sum each customer's total outstanding balance across all buckets to show total exposure per account.

5. **Flag risk indicators** — Automatically highlight:
   - Any single invoice or customer balance over a configurable threshold (default: $10,000) in the 61+ day buckets
   - Customers with invoices spanning three or more buckets (pattern of non-payment)
   - Total balance in 90+ days exceeding 10% of total AR (portfolio-level bad debt warning)

6. **Rank collection priorities** — Sort customers by: (1) 90+ day balance descending, then (2) total outstanding balance descending.

## Output Format

Produce the following sections in order:

**Summary Table** — One row per aging bucket:
| Bucket | # Invoices | # Customers | Total Balance | % of Total AR |
|--------|------------|-------------|---------------|---------------|

**Customer Detail Table** — One row per customer, columns: Customer Name | Current | 1–30 | 31–60 | 61–90 | 91–120 | 120+ | Total Outstanding | Risk Flag (⚠️ or —)

**Top Collection Priorities** — Numbered list of up to 10 customers ranked by priority, with their 60+ day balance and a one-line recommended action (reminder call, order hold, escalate, send to collections).

**Risk Alerts** — Bulleted list of any triggered risk flags with specific customer names, amounts, and recommended next steps.

**Portfolio Health Score** — Single line: percentage of total AR that is current, 1–60 days, and 60+ days, with a plain-language assessment (Healthy / Watch / Critical).

If input data is missing due dates or invoice dates, flag the gap and ask for clarification before proceeding.
