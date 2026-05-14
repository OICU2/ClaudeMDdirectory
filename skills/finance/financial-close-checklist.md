---
name: financial-close-checklist
description: >
  Creates a structured month-end and year-end close checklist with task owners, deadlines, and sign-off requirements for each accounting step. Use when someone says "help me close the books," asks about month-end procedures, wants to create a financial close process, needs to organize year-end accounting tasks, or is setting up a close checklist for their team.
category: finance
tags: [accounting, month-end, year-end, close-process, checklist]
author: community
---

# Financial Close Checklist

This skill generates a detailed, role-assigned close checklist with deadlines and sign-off requirements whenever someone needs to organize month-end or year-end accounting procedures.

## Close Checklist Workflow

1. **Identify close type** — Determine if this is a month-end, quarter-end, or year-end close, and ask for the target close date if not provided.

2. **Gather context** — Ask for:
   - Company size or team structure (solo bookkeeper vs. full accounting team)
   - Key roles available (AP clerk, AR clerk, Controller, CFO, external auditor)
   - Any known systems in use (ERP, payroll platform, expense tool)
   - Any recurring pain points or tasks specific to their business

3. **Structure the checklist by phase** — Organize all tasks into these sequential phases:
   - **Pre-Close (Days -5 to -1):** Cut-off procedures, submission deadlines for expenses, payroll finalization, AR/AP aging review
   - **Close Week — Day 1–2:** Bank reconciliations, credit card reconciliations, intercompany eliminations, accruals posting
   - **Close Week — Day 3–4:** Prepaid and fixed asset schedules, deferred revenue recognition, inventory count reconciliation, payroll journal entries
   - **Close Week — Day 5:** Trial balance review, variance analysis vs. prior month and budget, preliminary P&L and balance sheet review
   - **Post-Close:** Final financial statements, management reporting package, flux commentary, sign-offs, file archiving

4. **Assign owners and deadlines** — For each task, specify:
   - Responsible role (e.g., AR Clerk, Controller)
   - Reviewer/approver role
   - Due date relative to close date (e.g., "Close Day +2")
   - Sign-off method (initials in system, email confirmation, digital signature)

5. **Flag dependencies** — Identify tasks that block downstream steps and mark them clearly (e.g., "Bank rec must be complete before trial balance review").

6. **Add year-end extras if applicable** — For year-end closes, append additional tasks:
   - 1099/W-2 preparation deadlines
   - Depreciation schedule finalization
   - Tax provision entries
   - External audit prep (PBC list, audit schedules)
   - Board-level financial presentation

## Output Format

Produce a structured checklist in a Markdown table format organized by phase. Each phase has its own table with these columns:

| Task | Owner | Reviewer | Due (Relative to Close) | Sign-Off Required | Dependencies | Status |
|------|-------|----------|--------------------------|-------------------|--------------|--------|

After all tables, include:
- **Critical Path Summary:** A numbered list of the 5–7 tasks that are on the critical path and must not slip
- **Sign-Off Tracker:** A simple table listing each approver, their scope, and a blank "Date Signed" column
- **Notes Section:** Any reminders about regulatory deadlines (e.g., sales tax filings, payroll tax deposits) relevant to the close period

Total output length should cover all phases completely — typically 40–70 line items. Use plain Markdown with no decorative elements. Tables must be copy-paste ready for use in a spreadsheet or project management tool.
