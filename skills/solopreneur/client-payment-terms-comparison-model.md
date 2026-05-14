---
name: client-payment-terms-comparison-model
description: >
  Analyzes and compares the cash flow impact of different client payment term structures to help solopreneurs make financially stable decisions. Use when someone says "I'm not sure whether to ask for a deposit," asks about structuring client payments, wants to compare upfront versus milestone payments, is deciding on net-30 versus net-15 terms, or needs to understand how payment schedules affect their monthly cash flow.
category: solopreneur
tags: [cash-flow, payment-terms, client-management, pricing, financial-planning]
author: community
---

# Client Payment Terms Comparison Model

This skill models the real cash flow impact of different payment structures (upfront, milestone-based, net-30, retainer, etc.) across a project timeline so solopreneurs can choose terms that protect their financial stability.

## Analysis Workflow

1. **Gather project inputs** — Ask for or extract: total project value, estimated project duration (weeks/months), typical monthly expenses the project must cover, and any existing payment terms the user has been using.

2. **Define the payment structures to compare** — Default to modeling these four unless the user specifies others:
   - **Full upfront**: 100% collected before work begins
   - **Milestone split**: Commonly 50/25/25 or 33/33/33 tied to project phases
   - **Net-30 on completion**: Single invoice paid 30 days after delivery
   - **Monthly retainer**: Equal payments distributed across the project duration

3. **Calculate cash flow timeline for each structure**:
   - Map each payment to the calendar week or month it would be received
   - Calculate running cash balance at each interval, starting from $0 or the user's stated starting balance
   - Identify the lowest cash balance point (cash floor) for each structure
   - Flag any interval where cash balance goes negative or drops below stated monthly expenses

4. **Score each structure across four dimensions**:
   - **Cash floor**: Minimum balance during the project (higher = safer)
   - **Time to first dollar**: How quickly income starts (lower = better)
   - **Client friction**: Relative likelihood of client pushback (low/medium/high)
   - **Late payment exposure**: How much revenue is at risk if client delays or defaults

5. **Identify the recommended structure** — Select the option with the best balance of cash floor and client friction given the user's expense obligations. Flag if the user's current terms are suboptimal and by how much.

6. **Generate negotiation language** — For the recommended structure, produce one or two sentences the solopreneur can use to present the terms to a client professionally.

## Output Format

Produce a structured comparison with the following sections:

**Project Assumptions**
- Bullet list of inputs used (project value, duration, monthly expenses, starting balance)

**Cash Flow Comparison Table**
- Markdown table with columns: Payment Structure | Month 1 Cash | Month 2 Cash | Month 3 Cash (adjust columns to project length) | Cash Floor | Time to First Dollar

**Risk Scorecard**
- Markdown table with columns: Structure | Cash Floor | Time to First $ | Client Friction | Default Exposure | Overall Risk (Low/Med/High)

**Recommendation**
- One paragraph naming the best structure, explaining why it fits the user's cash needs, and quantifying the improvement over their current approach if applicable (e.g., "This raises your cash floor by $3,200 compared to net-30 terms")

**Suggested Client Language**
- 2–3 sentences of ready-to-use phrasing to propose the recommended terms

Keep the total output scannable. Use tables for all numerical comparisons. Avoid dense prose blocks.
