---
name: research-vendor-evaluation
description: >
  Scores and compares external research agencies, data providers, or market research vendors across key criteria including methodology rigor, turnaround time, cost, and domain expertise. Use when someone says "we need to choose a research vendor," asks about "comparing research agencies," or wants to "evaluate data providers," "select a market research firm," or "score vendors for a research project."
category: research
tags: [vendor-evaluation, market-research, procurement, scoring, comparison]
author: community
---

# Research Vendor Evaluation

This skill produces a structured scoring matrix and comparative analysis to help teams select the best external research agency or data provider for a given project.

## Evaluation Workflow

1. **Gather requirements first.** Ask the user for: project type (quant/qual/secondary), budget range, timeline, geographic scope, target audience, and any non-negotiables (e.g., panel size, specific methodology, certifications).

2. **Identify vendors to evaluate.** If the user has a shortlist, use it. If not, prompt them to provide 2–5 vendor names or descriptions. Do not fabricate vendor names or capabilities.

3. **Define scoring criteria.** Apply these default criteria (adjustable by user):
   - **Methodology rigor** — sampling approach, validation processes, bias controls, transparency of methods
   - **Turnaround time** — estimated delivery speed relative to project deadline
   - **Cost** — total cost relative to budget; note any hidden fees or scope risks
   - **Domain expertise** — relevant industry experience, panel quality, geographic reach
   - **Reporting quality** — depth of deliverables, data visualization, actionability of insights
   - **Reputation & references** — client track record, certifications (e.g., ISO 20252, MRS), case studies

4. **Score each vendor.** Rate each vendor per criterion on a 1–5 scale:
   - 1 = Poor / does not meet needs
   - 3 = Adequate / meets basic needs
   - 5 = Excellent / exceeds expectations
   Apply weights if the user specifies priorities (e.g., turnaround is critical → 2× weight).

5. **Flag disqualifiers.** Immediately note any vendor that fails a non-negotiable requirement (e.g., no panel in required region, over budget, cannot meet deadline).

6. **Generate recommendation.** Identify the top scorer and explain the rationale. Note trade-offs (e.g., cheapest option scores lower on methodology).

## Output Format

Produce the following sections in order:

**1. Project Requirements Summary** (3–5 bullet points recapping what the evaluation is optimizing for)

**2. Scoring Matrix** (Markdown table)

| Criterion | Weight | Vendor A | Vendor B | Vendor C |
|---|---|---|---|---|
| Methodology Rigor | 20% | 4 | 3 | 5 |
| Turnaround Time | 20% | 5 | 4 | 3 |
| Cost | 20% | 3 | 5 | 2 |
| Domain Expertise | 15% | 4 | 3 | 5 |
| Reporting Quality | 15% | 3 | 3 | 4 |
| Reputation & References | 10% | 4 | 4 | 5 |
| **Weighted Total** | 100% | **3.75** | **3.70** | **3.95** |

**3. Disqualifiers** (bulleted list of any vendors eliminated and why, or "None identified")

**4. Recommendation** (2–4 sentences naming the top vendor, why it wins, and the key trade-off to accept)

**5. Open Questions** (up to 3 items the user should clarify with vendors before signing a contract)

Keep the full output under 600 words excluding the table.
