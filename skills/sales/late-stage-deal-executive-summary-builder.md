---
name: late-stage-deal-executive-summary-builder
description: >
  Generates a concise executive summary of a late-stage deal for internal deal review, covering prospect background, business case, timeline, and outstanding risks. Use when someone says "we have a deal review coming up," asks to "summarize where we stand with this opportunity," wants to "prep leadership on this account," needs a "deal brief for the executive sponsor," or says "put together a summary before we go to commit." Activates whenever a rep or manager needs a structured snapshot of a deal's current state for internal alignment or approval.
category: sales
tags: [deal-review, executive-summary, late-stage, pipeline, internal-alignment]
author: community
---

# Late-Stage Deal Executive Summary Builder

This skill produces a structured, one-page executive summary of a late-stage deal designed for internal review by sales leadership, executive sponsors, or deal desk stakeholders.

## Workflow

1. **Gather deal inputs** — Ask the user to provide the following if not already supplied:
   - Prospect name, industry, and company size
   - Deal value (ACV/TCV) and product/solution being sold
   - Current deal stage and expected close date
   - Primary champion and economic buyer
   - Core business problem or initiative driving the purchase
   - Competitive landscape (if any)
   - Outstanding risks, blockers, or open items
   - Next steps and committed actions

2. **Identify gaps** — If critical fields are missing (e.g., close date, business case, or risk status), prompt the user with targeted questions before generating. Do not fabricate details.

3. **Synthesize the business case** — Translate raw inputs into a crisp 2–3 sentence statement of why the prospect is buying now, what business outcome they expect, and what happens if they do not act.

4. **Assess deal health** — Based on the inputs, flag deal health as **Green**, **Yellow**, or **Red** with a one-line rationale tied to stage, timeline, champion strength, or outstanding risks.

5. **Highlight risks with mitigation** — For each risk identified, pair it with the current mitigation or next action. Do not list a risk without an owner or response.

6. **Draft the summary** — Produce the executive summary following the output format below. Use plain business language. Avoid jargon, acronyms without definition, and filler phrases.

7. **Review for accuracy** — Before presenting, confirm that close date, deal value, and key stakeholder names are consistent throughout the document.

## Output Format

Produce a structured executive summary using the following sections. Keep the entire document to one page (400–600 words).

---

**DEAL EXECUTIVE SUMMARY**
*[Prospect Name] | [Date Prepared]*

**Deal Snapshot**
| Field | Detail |
|---|---|
| Account | [Company name, industry, size] |
| Opportunity Value | [ACV / TCV] |
| Product / Solution | [What is being sold] |
| Stage | [Current stage] |
| Expected Close | [Date] |
| Deal Health | 🟢 Green / 🟡 Yellow / 🔴 Red — [One-line rationale] |

**Prospect Background**
[2–3 sentences: who the company is, what they do, and why they are relevant to your solution.]

**Business Case**
[2–3 sentences: the specific business problem or initiative driving this purchase, the expected outcome, and the cost of inaction or delay.]

**Key Stakeholders**
- **Economic Buyer:** [Name, title] — [Engagement status and sentiment]
- **Champion:** [Name, title] — [Engagement status and influence level]
- **Other Stakeholders:** [List any additional decision-makers or blockers]

**Deal Timeline**
- [Date]: [Milestone — e.g., technical validation completed]
- [Date]: [Milestone — e.g., legal review initiated]
- [Date]: [Target close — e.g., signed contract]

**Competitive Landscape**
[1–2 sentences: who else is in the deal, their status, and your differentiated position. Write "Uncontested" if no competitor is present.]

**Outstanding Risks & Mitigations**
| Risk | Owner | Mitigation / Next Action |
|---|---|---|
| [Risk 1] | [Name] | [Action and target date] |
| [
