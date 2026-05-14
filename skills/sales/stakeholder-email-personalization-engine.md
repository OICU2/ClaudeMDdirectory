---
name: stakeholder-email-personalization-engine
description: >
  Generates tailored outreach emails for each member of a buying committee based on their role, priorities, and known pain points. Use when someone says "I need to reach multiple stakeholders," asks about "how to write emails for different buyer personas," or wants to "personalize outreach for each decision maker." Also activates when someone says "I'm selling to a committee" or "help me craft messages for the buying group."
category: sales
tags: [email, personalization, stakeholder-mapping, buying-committee, outreach]
author: community
---

# Stakeholder Email Personalization Engine

This skill generates role-specific outreach emails for each member of a buying committee by mapping their functional priorities, likely objections, and decision criteria to a tailored message structure.

## Stakeholder Profiling Workflow

**Step 1: Gather Deal Context**
Before writing, collect the following if not already provided:
- Product/service being sold and its top 3 value drivers
- Company name and industry of the prospect
- Known stakeholders (name, title, department)
- Any intel on pain points, recent company news, or active initiatives
- Deal stage (cold outreach, follow-up, proposal stage)

**Step 2: Map Each Stakeholder to a Buyer Archetype**
Assign each contact to one of these archetypes based on their title and department:

- **Economic Buyer (CFO, VP Finance, CEO):** Cares about ROI, risk reduction, payback period, budget efficiency
- **Technical Buyer (CTO, IT Director, Security Lead):** Cares about integration, security, implementation complexity, scalability
- **End User Champion (Operations Manager, Team Lead, Individual Contributor):** Cares about ease of use, time saved, workflow impact, adoption
- **Legal/Compliance (General Counsel, Risk Officer):** Cares about liability, data handling, contract terms, regulatory alignment
- **Procurement (VP Procurement, Purchasing Manager):** Cares about vendor stability, pricing structure, SLA terms, competitive comparison

**Step 3: Build Each Email Using This Structure**
For every stakeholder, construct the email with these components:

1. **Subject line** — Role-specific hook, under 8 words, no generic phrases like "checking in" or "following up"
2. **Opening line** — Reference something specific to their role, company, or a recent trigger event (funding, hire, product launch, earnings call)
3. **Pain point statement** — One sentence naming the exact problem they feel in their role, not a generic industry problem
4. **Value bridge** — Connect the product's relevant capability directly to their specific pain point; use their language, not product marketing language
5. **Proof point** — One concrete result (metric, case study snippet, or customer outcome) relevant to their archetype
6. **Call to action** — Single, low-friction next step appropriate to deal stage (e.g., "15-minute call," "review this one-pager," "intro to our technical team")

**Step 4: Apply Tone Calibration by Archetype**
- Economic Buyer: Direct, numbers-forward, no jargon
- Technical Buyer: Precise, credibility-forward, acknowledge complexity
- End User Champion: Empathetic, practical, focus on daily workflow
- Legal/Compliance: Measured, transparent, anticipate concerns
- Procurement: Professional, structured, respect the process

**Step 5: Cross-Check for Consistency**
Ensure all emails reference the same solution without contradicting each other on pricing, capabilities, or timelines. Each email should feel independent but tell a coherent story if stakeholders compare notes.

## Output Format

Produce one complete email per stakeholder in this structure:

---
**Stakeholder:** [Name] — [Title], [Department]
**Archetype:** [Assigned archetype]
**Primary Priority:** [One phrase]

**Subject:** [Subject line]

**Email Body:**
[Full email text, 100–175 words, formatted as ready-to-send prose]

**Why This Works:** [2–3 bullet points explaining the personalization choices made for this specific stakeholder]

---

Repeat this block for every stakeholder identified. If more than 5 stakeholders are present, group any remaining contacts by archetype and note which template applies. End with a brief **Sequencing Note** recommending the order to send the emails and whether any should be sent simultaneously
