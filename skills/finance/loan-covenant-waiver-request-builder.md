---
name: loan-covenant-waiver-request-builder
description: >
  Drafts a formal loan covenant waiver request letter for borrowers who need to address a technical default with their lender. Use when someone says they've breached a loan covenant, asks how to request a waiver from their bank, or wants to explain a covenant violation to a lender. Also activates when someone needs to write a forbearance letter or document remediation steps for a credit agreement breach.
category: finance
tags: [loan-covenants, waiver-request, credit-agreements, lender-relations, debt-compliance]
author: community
---

# Loan Covenant Waiver Request Builder

This skill drafts a professional, structured waiver request letter that clearly identifies the breached covenant, explains the business context behind the violation, and proposes concrete remediation steps to restore lender confidence.

## Workflow

1. **Gather covenant breach details** — Ask the user for: the specific covenant violated (e.g., minimum DSCR, leverage ratio, liquidity threshold), the required threshold, the actual measured value, and the measurement date.

2. **Collect business context** — Request a brief explanation of why the breach occurred (e.g., revenue shortfall, unexpected capex, acquisition, seasonal disruption). Identify whether the cause is temporary or structural.

3. **Identify the loan and parties** — Confirm the lender name, borrower legal entity name, loan agreement date, and facility type (term loan, revolver, etc.).

4. **Draft the waiver request letter** using this structure:
   - **Opening paragraph**: State the purpose — requesting a waiver for a specific covenant breach under the loan agreement, referencing the agreement by date and parties.
   - **Covenant breach summary**: Name the covenant, cite the contractual threshold, report the actual figure, and state the measurement period. Be precise and factual.
   - **Business circumstances explanation**: Provide a clear, non-defensive narrative of the factors that led to the breach. Acknowledge the shortfall directly; do not minimize it.
   - **Current financial position**: Briefly summarize liquidity, cash on hand, and operational stability to demonstrate the business is viable.
   - **Remediation plan**: List 3–5 specific, time-bound steps the borrower will take to return to compliance (e.g., cost reductions, asset sales, equity injection, refinancing, operational changes). Include projected timeline for covenant cure.
   - **Waiver request**: Formally request a written waiver for the measurement period, and optionally propose a cure period or amendment to the covenant going forward.
   - **Closing**: Express commitment to the lender relationship, offer to provide supporting financial data, and provide contact information.

5. **Apply appropriate tone** — Formal, transparent, and confident. Avoid defensive language, vague excuses, or alarmist phrasing. The letter should convey control and seriousness.

6. **Flag missing information** — If the user cannot provide the exact covenant threshold or actual figure, insert clearly marked placeholders (e.g., `[INSERT DSCR RATIO]`) and note what data is needed before sending.

## Output Format

Produce a complete, ready-to-send business letter in formal block format:
- **Header**: Borrower name, address, date, lender name and address
- **Subject line**: "Re: Request for Covenant Waiver — [Loan Agreement Date] — [Covenant Name]"
- **Body**: Five to seven paragraphs following the structure above, totaling 400–700 words
- **Signature block**: Borrower authorized signatory name, title, company, phone, email
- **Attachments note** (if applicable): List any supporting documents the borrower should attach (e.g., trailing twelve-month financials, updated projections, board resolution)

Deliver the letter as plain text, ready to be pasted into a Word document or email. After the letter, include a short bullet list of "Next Steps" the borrower should take before sending (e.g., legal review, CFO sign-off, document collection).
