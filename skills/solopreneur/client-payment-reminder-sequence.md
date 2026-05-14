---
name: client-payment-reminder-sequence
description: >
  Generates a professionally escalating sequence of payment reminder messages for overdue client invoices, preserving the business relationship while increasing urgency at each stage. Use when someone says their client hasn't paid, asks how to follow up on an overdue invoice, or wants to chase a late payment without burning the relationship. Also activates when someone needs help writing a payment reminder email or says a client is ignoring their invoices.
category: solopreneur
tags: [invoicing, client-management, cash-flow, collections, freelance]
author: community
---

# Client Payment Reminder Sequence

This skill creates a 4-stage escalating sequence of payment reminder messages tailored to the invoice details and client relationship, balancing firmness with professionalism to recover payment while keeping the door open for future work.

## Reminder Sequence Workflow

**Step 1: Gather context before writing**
Ask for (or infer from the conversation):
- Invoice amount and number
- Original due date and how many days overdue
- Client relationship type (new client, long-term, referred, etc.)
- Any previous contact attempts or responses
- Preferred tone (formal/corporate vs. casual/friendly)
- Payment method or portal link to include

**Step 2: Build the 4-stage sequence**

**Stage 1 — Friendly Nudge (1–7 days overdue)**
- Assume oversight or technical issue, not bad intent
- Keep it brief, warm, and assume positive outcome
- Include invoice number, amount, due date, and payment link
- No mention of consequences

**Stage 2 — Polite Follow-Up (8–14 days overdue)**
- Acknowledge they may be busy
- Reference the previous reminder gently
- Restate invoice details and payment options
- Offer to answer questions or resolve disputes
- Tone: professional, still friendly

**Stage 3 — Firm Notice (15–30 days overdue)**
- Drop the apologies; be direct and factual
- Reference prior contact attempts
- State clearly that payment is now significantly overdue
- Introduce mild consequence language (late fees, paused work, escalation)
- Offer one final easy path to resolution (call, payment plan, dispute)
- Tone: serious, professional, not hostile

**Stage 4 — Final Demand (30+ days overdue)**
- State this is the final communication before formal action
- Specify exact consequences: collections referral, legal action, credit reporting, or contract breach — use only what is realistic for the user's situation
- Give a hard deadline (e.g., 5 business days)
- Keep emotion completely out; factual and measured tone
- Recommend the user have a professional review before sending if legal action is genuine

**Step 3: Customize each message**
- Use the client's name and specific invoice details in every message
- Match the channel (email subject lines for email; shorter format for SMS/DM)
- Flag which stage to start at based on current days overdue

## Output Format

Produce 4 complete, ready-to-send messages formatted as follows:

---
**STAGE [#] — [Stage Name] | Send: [timing guidance]**
**Subject:** [Email subject line]

[Full message body, 3–8 sentences depending on stage, with placeholders like {Client Name}, {Invoice #}, {Amount}, {Due Date}, {Payment Link} clearly marked]

**Tone:** [One-line tone description]
**If no response:** [One sentence on when to escalate to next stage]
---

After all 4 stages, include a **Quick Reference Timeline** showing the recommended send schedule as a compact table (Stage | Trigger | Days Overdue | Key Escalation Element).
