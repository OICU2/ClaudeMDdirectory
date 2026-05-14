---
name: solo-operator-pricing-confidence-builder
description: >
  Analyzes your current service rates against market data, client outcomes, and cost structure to generate a defensible pricing rationale you can use in sales conversations. Use when someone says "I don't know what to charge," asks "am I underpricing my services," wants to justify a rate increase to a client, feels nervous quoting their prices, or wonders if their fees are competitive. Produces a concrete pricing narrative with supporting logic you can speak aloud in discovery calls or proposals.
category: solopreneur
tags: [pricing, sales, revenue, positioning, solopreneur]
author: community
---

# Solo Operator Pricing Confidence Builder

This skill builds a defensible, conversational pricing rationale by auditing your rates, costs, and client outcomes — giving you specific language to use when a prospect asks "why do you charge that much?"

## Pricing Audit Workflow

### Step 1: Gather Inputs
Ask the user for:
- **Current rate** (hourly, project-based, or retainer) and how they arrived at it
- **Target monthly revenue** and current average monthly billings
- **Deliverables and scope** for their core service offering
- **Typical client outcome** — what measurable result does the client get? (e.g., "saves 10 hours/week," "increased revenue by $40K")
- **Time investment** per client (hours/week or hours/project)
- **Hard costs** associated with delivery (tools, subcontractors, overhead)
- **Years of experience** and any notable credentials or past results

If the user can't answer some of these, prompt with realistic estimates and flag them as assumptions.

### Step 2: Run the Numbers
Calculate and surface:
- **Effective hourly rate** = total project fee ÷ total hours (including admin, revisions, communication)
- **True cost floor** = hard costs + minimum viable hourly rate × hours
- **Value-to-fee ratio** = estimated client outcome value ÷ current fee (flag if fee is less than 10% of outcome value — this signals underpricing)
- **Market range estimate** — use stated experience level and service type to give a low/mid/high market range (be explicit that this is a reasoned estimate, not live data)

### Step 3: Identify Pricing Gaps
Flag any of the following:
- Effective hourly rate below $75 for knowledge work (adjust threshold based on stated niche)
- Fee less than 5% of quantifiable client outcome
- No buffer for scope creep, revisions, or client communication overhead
- Rate unchanged for more than 18 months
- Rate set by copying a competitor without cost or value analysis

### Step 4: Build the Pricing Rationale
Construct a 3-part verbal rationale the user can say out loud:

1. **The investment statement** — one sentence naming the fee without apology
2. **The value anchor** — connect the fee to the client's outcome using their numbers
3. **The confidence closer** — one sentence that holds the price without negotiating against themselves

Also generate:
- A one-paragraph written version for proposals or email
- Two objection responses for "that's more than I expected" and "can you do it for less"

### Step 5: Deliver a Raise Roadmap (if underpriced)
If the audit reveals underpricing:
- State the recommended target rate
- Give a 2-step path to get there (e.g., raise 20% on new clients now, raise existing clients at renewal)
- Provide a one-sentence script for announcing the increase to existing clients

## Output Format

Produce a structured report with these clearly labeled sections:

**YOUR PRICING AUDIT**
- Current rate, effective hourly rate, true cost floor — shown as a simple table
- Value-to-fee ratio with plain-English interpretation
- Market range estimate with confidence level noted

**GAPS IDENTIFIED**
- Bullet list of any pricing gaps found; if none, say so explicitly

**YOUR PRICING RATIONALE**
- The investment statement (bold, ready to say aloud)
- The value anchor (one sentence)
- The confidence closer (one sentence)
- Written proposal version (1 short paragraph)

**OBJECTION RESPONSES**
- "That's more than I expected" → [specific response]
- "Can you do it for less?" → [specific response]

**RAISE
