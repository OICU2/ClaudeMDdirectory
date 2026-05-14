---
name: prospect-pain-point-hypothesis-builder
description: >
  Analyzes a target prospect's industry, role, and available signals to generate a prioritized list of likely pain points and business challenges. Use when someone says "help me prepare for a prospect call," asks about "what problems does this company probably have," or wants to "build a hypothesis about a prospect's challenges." Also activates when someone says "what should I lead with for this account" or "help me understand what's keeping this buyer up at night."
category: sales
tags: [prospecting, discovery, pain-points, account-research, sales-prep]
author: community
---

# Prospect Pain Point Hypothesis Builder

This skill generates a ranked, signal-backed list of likely pain points for a specific prospect based on their industry, role, company context, and any observable signals, so reps can enter calls with informed hypotheses instead of generic questions.

## Workflow

1. **Gather inputs** — Collect the following from the user before proceeding. If any are missing, ask for them:
   - Prospect's job title and seniority level
   - Company name and industry/vertical
   - Company size (headcount or revenue range)
   - Any known signals (recent news, job postings, funding, leadership changes, product launches, tech stack, reviews on G2/Glassdoor, etc.)
   - Your product or solution category (so pain points can be filtered for relevance)

2. **Map role-based pressures** — Identify the 3–5 structural pressures that are endemic to this persona's role at this seniority level. A VP of Sales at a Series B SaaS company faces categorically different pressures than a VP of Sales at a 5,000-person enterprise. Be specific to the combination.

3. **Layer in industry dynamics** — Add 2–3 pain points driven by macro trends, regulatory pressures, or competitive dynamics specific to the prospect's vertical right now. Cite the dynamic explicitly (e.g., "rising CAC in PLG companies," "margin compression in logistics," "compliance burden from SEC cybersecurity disclosure rules").

4. **Interpret available signals** — For each signal the user provided, draw a direct inference to a likely internal pain. A job posting for 5 data engineers suggests a data infrastructure problem. A recent CFO hire suggests financial scrutiny or a push toward efficiency. A string of negative G2 reviews mentioning "onboarding" suggests churn risk from poor implementation. Make the inference explicit.

5. **Rank by probability and urgency** — Score each pain point on:
   - **Likelihood** (how probable is this given the evidence): High / Medium / Low
   - **Urgency** (is this a now problem or a someday problem): Acute / Chronic / Latent
   - **Relevance to your solution**: Direct / Adjacent / Peripheral

6. **Generate discovery questions** — For the top 3 pain points, write one sharp discovery question the rep can use to test the hypothesis without telegraphing the assumption.

## Output Format

Produce a structured report with the following sections:

---

**Prospect:** [Name/Title] at [Company]
**Prepared for:** [Your solution category]

---

### Pain Point Hypotheses (Ranked)

| # | Pain Point | Likelihood | Urgency | Relevance | Source Signal |
|---|-----------|------------|---------|-----------|---------------|
| 1 | [Specific pain, 1 sentence] | High/Med/Low | Acute/Chronic/Latent | Direct/Adjacent/Peripheral | [What signal supports this] |
| 2 | ... | | | | |
| 3–7 | ... | | | | |

---

### Signal Interpretations

For each signal provided, one bullet:
- **[Signal]** → [What this likely means internally for this prospect]

---

### Discovery Questions (Top 3 Pain Points)

1. **[Pain Point #1]:** "[Question text]"
2. **[Pain Point #2]:** "[Question text]"
3. **[Pain Point #3]:** "[Question text]"

---

### Confidence Note

One sentence flagging what's missing that would materially change this hypothesis (e.g., "This analysis lacks visibility into their current tech stack — confirming or ruling out [tool] would sharpen pain points #2 and #4").

---

Keep the total output scannable and usable in under 2 minutes.
