---
name: solo-operator-service-agreement-plain-summary
description: >
  Analyzes a client service agreement and translates it into a plain-language summary a solo operator can actually act on. Use when someone says "can you review this contract," asks about what they're signing, wants to understand their obligations before onboarding a client, needs to spot red flags in an agreement, or says "break down this service agreement for me."
category: solopreneur
tags: [contracts, legal-clarity, client-management, risk-assessment, freelance]
author: community
---

# Service Agreement Plain-Language Summarizer for Solo Operators

This skill takes a dense client service agreement and converts it into a structured plain-English breakdown that highlights what you must do, what the client can do to you, and what clauses deserve a hard look before signing.

## Analysis Workflow

1. **Read the full agreement first.** Identify the contract type (retainer, project-based, MSA, SOW, NDA, etc.) before summarizing anything.

2. **Extract the five core obligation categories:**
   - What you (the solo operator) are required to deliver, by when, and how
   - What the client is required to provide or pay, and when
   - What happens if either party fails to perform
   - How the agreement ends (termination clauses, notice periods, auto-renewal)
   - Who owns what when the work is done (IP, deliverables, licenses)

3. **Flag red-flag clauses explicitly.** Look for and call out:
   - Unlimited revision language or scope creep enablers ("as needed," "reasonable requests")
   - Unilateral termination with no kill fee or short notice windows (under 14 days)
   - Broad IP assignment that captures pre-existing work or tools
   - Non-solicitation or non-compete clauses that restrict future client work
   - Indemnification clauses that expose you to the client's legal liability
   - Payment terms beyond Net-30 or with vague approval gates before payment triggers
   - Confidentiality clauses with no expiration date or overly broad definitions

4. **Identify missing protections.** Note if the contract lacks:
   - A kill fee or early termination fee
   - A clear late payment penalty or interest clause
   - A defined revision limit
   - Dispute resolution method (arbitration, jurisdiction, governing law)

5. **Assign an overall risk level:** Low / Medium / High — based on how many red flags and missing protections are present.

6. **Do not give legal advice.** Frame findings as "this clause means X in plain terms" and recommend consulting an attorney for anything High risk or unclear.

## Output Format

Produce the summary in this exact structure:

---

**Contract Type:** [e.g., Project-Based Service Agreement]
**Parties:** [Your role] ↔ [Client role]
**Overall Risk Level:** 🟢 Low / 🟡 Medium / 🔴 High

---

### What You Must Do
- Bullet list of your deliverables, deadlines, and performance standards in plain language

### What the Client Must Do
- Bullet list of client obligations: approvals, payments, materials, access

### How It Ends
- Plain-language explanation of termination terms, notice periods, and what happens to work in progress

### Who Owns the Work
- Clear statement of IP ownership, license grants, and any carve-outs for your tools or existing assets

### 🚩 Red Flags
- Each flag on its own line with: **Clause name or location → plain-language explanation → why it matters to you**

### ⚠️ Missing Protections
- Bullet list of standard solo-operator protections not present in this agreement

### Before You Sign
- 3–5 specific, actionable negotiation points or questions to raise with the client, ranked by importance

---

Keep the full summary under 600 words. Use plain language throughout — no legal jargon unless defining a specific term. If the contract is longer than a few pages, ask the user to paste it in sections or confirm they want a high-level pass versus a clause-by-clause review.
