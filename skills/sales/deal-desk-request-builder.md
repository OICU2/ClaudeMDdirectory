---
name: deal-desk-request-builder
description: >
  Generates a structured deal desk submission that summarizes discount rationale, competitive context, and strategic value for internal approval workflows. Use when someone says "I need deal desk approval," asks about submitting a discount request, wants to build a deal justification, needs to document competitive pricing pressure, or is trying to get a non-standard deal approved. Activates when a sales rep needs to formalize why a deal requires special pricing or terms.
category: sales
tags: [deal-desk, pricing, discounting, approvals, competitive-intelligence]
author: community
---

# Deal Desk Request Builder

This skill produces a complete, structured deal desk submission document that a sales rep can submit directly to revenue operations or finance for non-standard deal approval.

## Deal Desk Request Workflow

1. **Gather deal basics** — Collect account name, opportunity owner, CRM opportunity ID, close date, and deal stage before drafting anything.

2. **Capture financial details** — Record list price, requested price, discount percentage, contract term, and deal type (new, expansion, renewal).

3. **Document discount rationale** — Ask the rep to explain the primary reason for the discount: budget constraint, competitive pressure, multi-year commitment, strategic account, or champion-driven negotiation. Require at least one specific reason.

4. **Extract competitive context** — Identify the named competitor(s), their quoted price or offer if known, and what differentiation points the rep has already used in the sales conversation.

5. **Articulate strategic value** — Capture why this account matters beyond the immediate ACV: expansion potential, logo value, industry influence, reference customer likelihood, or partnership angle.

6. **Note deal risks and mitigations** — Document what happens if the discount is not approved (deal loss, delay, competitive win) and what commitments the customer has made in return (signature by date, multi-year lock-in, reference agreement).

7. **Confirm approver tier** — Based on discount depth, flag which approval level is required (manager, VP, CFO) so the submission is routed correctly.

8. **Draft the submission** — Assemble all inputs into the standard output format below without adding assumptions. If any field is missing, explicitly note it as [REQUIRED] rather than guessing.

## Output Format

Produce a structured document with the following sections, using bold headers and clean formatting suitable for copy-paste into a CRM, email, or Google Doc:

---

**DEAL DESK REQUEST**

**Submitted By:** [Rep Name] | **Date:** [Date] | **Approval Tier:** [Manager / VP / CFO]

---

**OPPORTUNITY SUMMARY**
- Account Name:
- CRM Opportunity ID:
- Opportunity Owner:
- Close Date:
- Deal Type: [New / Expansion / Renewal]

**FINANCIAL DETAILS**
- List Price (ARR):
- Requested Price (ARR):
- Discount %:
- Contract Term:
- Total Contract Value (TCV):

**DISCOUNT RATIONALE**
[2–4 sentences explaining the specific business reason for the discount, written in clear prose ready for an approver to read.]

**COMPETITIVE CONTEXT**
- Primary Competitor(s):
- Competitor Pricing/Offer (if known):
- Differentiation Arguments Used:
- Competitive Risk if Denied:

**STRATEGIC VALUE**
[2–3 sentences on why this account is worth approving the exception — expansion potential, logo value, reference opportunity, or market signal.]

**DEAL RISK & COMMITMENTS**
- Risk if Not Approved:
- Customer Commitment in Exchange:
- Expected Close Date at Risk:

**RECOMMENDED APPROVAL ACTION**
[One sentence stating the specific ask: approve X% discount on Y-year term to close by Z date.]

---

Length: One page maximum. Tone: factual, direct, and businesslike — written for a finance or RevOps approver, not a customer.
