---
name: client-invoice-overdue-escalation-script
description: >
  Drafts a tiered sequence of professionally escalating payment follow-up messages that recover overdue invoices without damaging client relationships. Use when someone says their invoice hasn't been paid, asks how to follow up on a late payment, or wants to chase a client for money owed. Also activates when someone needs to write a payment reminder, is frustrated a client isn't paying, or wants to send a final notice before taking further action.
category: solopreneur
tags: [invoicing, client-communication, cash-flow, collections, freelance]
author: community
---

# Client Invoice Overdue Escalation Script

This skill generates a complete 4-tier escalation sequence of payment follow-up messages, calibrated in tone from friendly reminder to firm final notice, so solopreneurs can recover overdue payments without burning client relationships.

## Escalation Workflow

**Step 1: Gather Invoice Context**
Before drafting, collect:
- Invoice number, amount, and original due date
- Days overdue (or ask the user)
- Client relationship type (new, long-term, referral)
- Whether any prior contact has been made about this invoice
- Any agreed payment terms or special circumstances

If the user hasn't provided these, ask for them in a single grouped question before drafting.

**Step 2: Draft the 4-Tier Sequence**

Each tier escalates in urgency, formality, and consequence language. Follow these exact calibrations:

- **Tier 1 — Friendly Reminder (1–7 days overdue):** Assume good faith. Warm tone. Mention the invoice casually, offer the invoice details as a convenience, suggest it may have slipped through. No pressure language. Subject line should feel personal, not automated.

- **Tier 2 — Polite Follow-Up (8–21 days overdue):** Acknowledge no response to prior message. Slightly more direct. Restate the amount and due date clearly. Offer to help if there's an issue (payment plan, wrong details, dispute). Keep the door open, but make clear action is needed.

- **Tier 3 — Firm Notice (22–45 days overdue):** Professional and direct. State that the invoice is significantly overdue. Remove soft language. Reference that continued non-payment may require escalating to a collections process or pausing future work. Attach/reference invoice explicitly. Set a specific response deadline (e.g., 5 business days).

- **Tier 4 — Final Notice (46+ days overdue):** Formal and unambiguous. State this is the final notice before formal action (collections agency, legal, credit reporting — user selects what applies). Give a hard deadline. Keep emotion out entirely. Short and factual.

**Step 3: Apply Relationship Calibration**
- Long-term or high-value clients: soften Tiers 1–2 further, add brief acknowledgment of the relationship
- New clients: maintain warmth in Tier 1 but escalate slightly faster in Tier 2
- Referral clients: note the shared connection once in Tier 1 only, then treat as standard

**Step 4: Preserve Relationship Signals**
- Never use accusatory language ("you haven't paid," "you owe me")
- Use neutral framing ("the invoice remains outstanding," "payment hasn't come through yet")
- Always leave a clear action step — amount, payment link or method, and contact if questions
- Tiers 1–3 should end with an open invitation to reply; Tier 4 ends with a deadline only

## Output Format

Produce four complete, ready-to-send messages with the following structure for each:

---
**TIER [N] — [Tier Name] | Day Range: [X–Y days overdue]**

**Subject:** [Email subject line]

**Body:**
[Full message text, 3–8 sentences, professional closing, sender name placeholder as [Your Name]]

---

After all four tiers, add a short **Usage Notes** section (3–5 bullet points) covering:
- Recommended send cadence
- When to skip a tier
- How to handle a partial payment response
- Whether to CC anyone (accountant, business partner)
- When to actually stop and escalate to a professional (lawyer, collections)

Total output length: approximately 500–800 words across all four messages plus notes.
