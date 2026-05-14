---
name: research-vendor-comparison-matrix
description: >
  Builds a scored comparison matrix evaluating research vendors or fieldwork agencies across weighted criteria including panel quality, turnaround time, pricing, methodology support, and compliance standards. Use when someone says "help me choose a research vendor," asks about comparing fieldwork agencies, wants to evaluate survey panel providers, needs to score research suppliers, or is deciding between market research partners.
category: research
tags: [vendor-evaluation, market-research, comparison-matrix, fieldwork, procurement]
author: community
---

# Research Vendor Comparison Matrix

Generates a structured, scored comparison matrix to objectively evaluate and rank research vendors or fieldwork agencies so stakeholders can make data-driven procurement decisions.

## Workflow

1. **Collect vendor list** — Ask the user to name all vendors under consideration (2–8 vendors). If none are provided, prompt for them before proceeding.

2. **Identify evaluation criteria** — Use these default criteria unless the user specifies otherwise:
   - Panel quality & representativeness
   - Turnaround time / field speed
   - Pricing & cost transparency
   - Methodology support (qualitative, quantitative, mixed)
   - Geographic reach
   - Data quality controls & fraud prevention
   - Compliance (GDPR, ISO 20252, IRB, etc.)
   - Client service & responsiveness
   - Platform/technology capabilities
   - References & track record

3. **Assign weights** — Ask the user to prioritize criteria (high / medium / low) or assign percentage weights that sum to 100%. If the user skips this step, apply equal weighting.

4. **Score each vendor** — For each vendor × criterion cell, assign a score from 1–5:
   - 1 = Poor / major gaps
   - 2 = Below average
   - 3 = Meets basic requirements
   - 4 = Strong
   - 5 = Exceptional / best in class
   Use any information the user provides; flag cells as "TBD" where data is missing.

5. **Calculate weighted scores** — Multiply each raw score by the criterion weight, sum across all criteria to produce a total weighted score per vendor.

6. **Identify gaps** — Flag any vendor with a score of 1 or 2 on a high-priority criterion as a risk, regardless of overall score.

7. **Produce recommendation** — State the top-ranked vendor, note any trade-offs, and list the top 3 questions the user should ask before final selection.

## Output Format

Produce the following sections in order:

**1. Evaluation Summary Table**
A markdown table with vendors as columns and criteria as rows. Include columns: Criterion | Weight | [Vendor A] | [Vendor B] | [Vendor C] ... | Notes. Show raw scores in cells; add a **Weighted Score** row at the bottom.

**2. Ranked Leaderboard**
A numbered list of vendors sorted by weighted score (highest first), each with a one-line strength summary.

**3. Risk Flags**
Bullet list of any vendor–criterion combinations scoring 1–2 on high-weight criteria. Format: `[Vendor] — [Criterion]: [brief explanation of risk]`.

**4. Data Gaps**
List all TBD cells and specify exactly what information is needed to complete scoring.

**5. Recommended Next Steps**
- Top vendor recommendation with rationale (2–3 sentences)
- 3 due-diligence questions to ask shortlisted vendors before contract
- One suggested RFP or pilot approach if scores are close

Keep the full output under 600 words of prose; tables may extend as needed. Use plain markdown compatible with GitHub and Notion.
