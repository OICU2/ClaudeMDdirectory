---
name: competitive-concession-guardrail-builder
description: >
  Builds structured guardrail frameworks that define acceptable discount thresholds and non-price concessions based on deal size, competitive pressure, and negotiation scenario to protect margins. Use when someone says "we're losing deals on price," asks about how much discount to offer, or wants to set boundaries on what sales reps can give away. Also activates when a rep needs to know what concessions are acceptable against a specific competitor or when leadership wants to standardize negotiation limits across the team.
category: sales
tags: [negotiation, pricing, competitive-strategy, sales-enablement, margin-protection]
author: community
---

# Competitive Concession Guardrail Builder

This skill generates a structured, deal-size-tiered concession framework that tells sales reps exactly what discounts and non-price concessions they can offer in competitive scenarios without eroding margins.

## Guardrail Framework Construction Process

**Step 1: Gather Deal Parameters**
Collect the following inputs before building the framework:
- Deal size tiers (e.g., SMB <$25K, Mid-Market $25K–$150K, Enterprise >$150K)
- Named competitors involved (or "generic competitive pressure")
- Current average selling price and floor margin percentage
- Any existing discount approval workflows or rep authority levels

**Step 2: Define Discount Thresholds by Tier and Scenario**
For each deal size tier, establish three discount bands:
- **Green Zone (rep authority):** Maximum % rep can offer without approval
- **Yellow Zone (manager approval):** Range requiring one level of sign-off
- **Red Zone (executive only):** Discounts that require VP/C-level sign-off and must include documented competitive justification

Apply tighter bands for smaller deals (margin dilution hits harder) and wider bands for enterprise deals where strategic value justifies flexibility.

**Step 3: Map Competitor-Specific Concession Triggers**
For each named competitor:
- Identify the competitor's known price attack vector (e.g., undercutting on seat price, free implementation, longer payment terms)
- Define the approved counter-concession (match with non-price value, extended trial, bundled onboarding)
- Specify what is explicitly off-limits as a response (e.g., never match a competitor's perpetual license offer with your SaaS pricing)

**Step 4: Build Non-Price Concession Menu**
Create a tiered menu of non-price concessions ranked by cost-to-company:
- **Low cost:** Extended payment terms (net-60/90), additional user licenses within existing tier, training sessions, dedicated onboarding hours
- **Medium cost:** Custom SLA commitments, priority support tier upgrade, multi-year price locks
- **High cost (approval required):** Custom integrations, dedicated CSM, co-marketing commitments, contract flexibility clauses

Each concession must include: what it is, when it's appropriate, approval level required, and the estimated cost/margin impact.

**Step 5: Define Hard Stops**
List explicit guardrails that cannot be crossed regardless of deal size or competitive pressure:
- Minimum margin floor (expressed as % of contract value)
- Concessions that create pricing precedent risk
- Terms that conflict with existing customer agreements
- Anything requiring legal or finance review before commitment

**Step 6: Create Escalation Decision Tree**
Build a simple yes/no decision path:
- Is the requested concession in the Green Zone? → Rep approves, logs in CRM
- Does it fall in Yellow Zone? → Rep submits approval request with competitive context
- Is it Red Zone or a Hard Stop? → Escalate immediately with deal brief; do not commit verbally

## Output Format

Produce a structured document with the following sections:

1. **Concession Guardrail Summary Table** — A markdown table with columns: Deal Tier | Max Discount (Green) | Max Discount (Yellow) | Red Zone Threshold | Primary Competitor Scenario | Approved Counter-Concession

2. **Non-Price Concession Menu** — Bulleted list organized by cost tier (Low / Medium / High), each item including name, use case trigger, approval level, and margin impact note

3. **Competitor Response Cards** — One card per named competitor (3–5 sentences each): their typical price attack, your approved response, and what to never offer in response

4. **Hard Stop Reference List** — Numbered list of absolute limits,
