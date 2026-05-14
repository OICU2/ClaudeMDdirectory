---
name: email-footer-compliance-audit
category: marketing
description: >
  Reviews email marketing footer content to ensure CAN-SPAM and GDPR compliance,
  checking for required elements like unsubscribe links, physical mailing address,
  and proper permission language. Use when someone says "check if our email footer
  is compliant," asks about CAN-SPAM or GDPR footer requirements, wants to audit
  their email campaigns for legal compliance, needs to verify unsubscribe
  mechanisms, or is concerned about email marketing regulations.
tags: [email-marketing, compliance, can-spam, gdpr, legal]
author: community
---

# Email Footer Compliance Audit

This skill audits email marketing footer content against CAN-SPAM and GDPR requirements, identifying missing or non-compliant elements and providing corrected copy.

## Audit Workflow

### 1. Collect Footer Content
Ask the user to paste their current email footer text. If auditing multiple campaigns, request each footer separately or as a labeled list.

### 2. Check CAN-SPAM Requirements (US)
Verify each of the following is present and valid:

- **Physical mailing address** — Must be a real street address, PO Box, or private mailbox registered with USPS. Flag if absent or incomplete.
- **Unsubscribe mechanism** — Must include a clear, functional opt-out link or reply instruction. Language like "click here to unsubscribe" or "manage your preferences" qualifies. Flag vague or missing opt-out language.
- **Sender identification** — Footer or email header must clearly identify the sending organization. Flag if the business name is absent from footer.
- **No deceptive language** — Scan for misleading phrases that imply unsubscribing is difficult, conditional, or delayed beyond 10 business days.

### 3. Check GDPR Requirements (EU)
Verify each of the following:

- **Lawful basis reference** — Footer should reference why the recipient is receiving the email (e.g., "You're receiving this because you opted in on [date/source]" or "as a subscriber to our list").
- **Data controller identification** — Company name and, where applicable, a link to the privacy policy must be present.
- **Right to withdraw consent** — Unsubscribe link must be clearly labeled; one-click removal preferred. Flag if unsubscribe requires login, account creation, or multi-step confirmation beyond preference selection.
- **Privacy policy link** — Must be present and functional (flag if absent).

### 4. Score and Flag Issues
Assign a compliance status per regulation:

- ✅ **Compliant** — All required elements present
- ⚠️ **Needs Attention** — Minor gaps or ambiguous language
- ❌ **Non-Compliant** — Critical missing element(s)

### 5. Generate Corrected Footer
For any flagged issue, produce a revised footer snippet that resolves the problem using the user's existing brand voice and content where possible.

## Output Format

Produce a structured audit report with the following sections:

---

**Email Footer Compliance Audit Report**

**Footer Reviewed:**
> [Quote the submitted footer verbatim]

---

**CAN-SPAM Compliance: [✅ / ⚠️ / ❌]**

| Requirement | Status | Notes |
|---|---|---|
| Physical mailing address | ✅/⚠️/❌ | [Finding] |
| Unsubscribe mechanism | ✅/⚠️/❌ | [Finding] |
| Sender identification | ✅/⚠️/❌ | [Finding] |
| No deceptive language | ✅/⚠️/❌ | [Finding] |

---

**GDPR Compliance: [✅ / ⚠️ / ❌]**

| Requirement | Status | Notes |
|---|---|---|
| Lawful basis reference | ✅/⚠️/❌ | [Finding] |
| Data controller identification | ✅/⚠️/❌ | [Finding] |
| Right to withdraw consent | ✅/⚠️/❌ | [Finding] |
| Privacy policy link | ✅/⚠️/❌ | [Finding] |

---

**Issues Found
