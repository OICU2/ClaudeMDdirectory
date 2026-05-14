---
name: research-finding-shelf-life-assessment
category: research
description: >
  Evaluates how quickly each key finding from a completed study is likely to become outdated based on the volatility of the topic area and data sources used. Use when someone asks "how long will this research stay relevant," wants to know "when should we revisit these findings," or is concerned about "whether this study will age well." Also activates when someone asks about the "expiration date of research" or needs to assess "finding durability" before publishing or acting on results.
tags: [research, evaluation, temporal-analysis, findings, validity]
author: community
---

# Research Finding Shelf Life Assessment

This skill analyzes each key finding from a completed study and assigns a durability rating based on topic volatility, data source age, methodology, and domain-specific change rates, producing a prioritized expiration timeline.

## Assessment Workflow

1. **Extract Key Findings** — Identify and list all distinct claims or conclusions from the research. Number them for reference.

2. **Classify Topic Volatility** for each finding using these categories:
   - **Rapid-change domains** (6–18 month shelf life): AI/ML, social media behavior, cryptocurrency, regulatory policy, pandemic response, consumer tech adoption
   - **Moderate-change domains** (2–5 year shelf life): workforce trends, healthcare protocols, marketing benchmarks, software development practices, geopolitical attitudes
   - **Slow-change domains** (5–15 year shelf life): demographic patterns, educational outcomes, infrastructure usage, long-term economic indicators
   - **Stable domains** (15+ years): historical facts, foundational scientific principles, established psychological frameworks, physical constants

3. **Assess Data Source Age** — Identify when the underlying data was collected. Subtract from current date. Add 20% decay to shelf life estimate for every year the data was already aged at time of publication.

4. **Check Methodology Durability** — Flag findings based on methods that accelerate expiration:
   - Survey-based attitudinal data: reduce shelf life by 30%
   - Single-point-in-time snapshots: reduce by 20%
   - Longitudinal or multi-source triangulated data: extend by 15%
   - Findings dependent on a specific platform, product, or policy: mark as "contingent" with hard expiration tied to that dependency

5. **Identify External Trigger Events** — Note any scheduled or likely events that could invalidate the finding early (elections, product releases, regulatory reviews, annual data updates). List as "early expiration triggers."

6. **Assign a Shelf Life Rating** for each finding:
   - 🟢 **Durable** (3+ years): Safe to cite without reassessment
   - 🟡 **Aging** (1–3 years): Monitor for updates; note caveats when citing
   - 🔴 **Perishable** (<1 year): Reassess before acting on or republishing
   - ⚫ **Contingent**: Expires when a named dependency changes

7. **Prioritize Reassessment Schedule** — Rank findings by expiration urgency and suggest specific review dates or triggering conditions.

## Output Format

Produce a structured report with the following sections:

---

**Shelf Life Assessment Report**

**Study:** [Title or description]
**Assessment Date:** [Date]

---

**Finding-by-Finding Breakdown**

| # | Finding Summary | Domain | Data Age | Method Flags | Shelf Life Rating | Estimated Expiration | Early Triggers |
|---|----------------|--------|----------|--------------|-------------------|----------------------|----------------|
| 1 | ... | ... | ... | ... | 🟢/🟡/🔴/⚫ | Month/Year or condition | ... |

---

**Reassessment Priority Queue**

List findings in order of urgency with recommended review dates:
1. [Finding #] — Reassess by [date] because [specific reason]

---

**Overall Study Durability Score**

Weighted average shelf life across all findings: [X years / months]
Durability tier: Strong / Moderate / Limited / Fragile

**Key Risks to Study Longevity:** [2–4 bullet points naming the specific volatility factors most threatening this research]

**Recommended Actions:** [2–3 concrete next steps, e.g., "Re-run survey data annually," "Pin
