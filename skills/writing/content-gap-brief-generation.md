---
name: content-gap-brief-generation
description: >
  Analyzes an existing article library against a set of target topics to identify missing content and produce prioritized writing briefs. Use when someone says "we're missing coverage on these topics," asks "what content gaps do we have," wants to "generate briefs for uncovered topics," needs to "find what articles we haven't written yet," or wants to "prioritize new content based on our existing library."
category: writing
tags: [content-strategy, seo, editorial-planning, content-gaps, writing-briefs]
author: community
---

# Content Gap Brief Generation

This skill compares a publication's existing article inventory against a list of target topics to identify coverage gaps and automatically produce structured, prioritized writing briefs for missing content.

## Workflow

1. **Collect inputs** — Ask the user to provide two things if not already given:
   - A list or description of existing articles (titles, URLs, or topic summaries)
   - A list of target topics, keywords, or competitor topics to check against

2. **Map existing coverage** — Parse the existing article list and extract the core topic, subtopic, and intent (informational, commercial, navigational) for each piece.

3. **Identify gaps** — Cross-reference target topics against existing coverage. Flag a topic as a gap if:
   - No existing article addresses it directly
   - Existing coverage is shallow (e.g., a brief mention vs. a dedicated piece)
   - The search intent differs (e.g., existing article is informational but target requires commercial)

4. **Score and prioritize gaps** — Rank each gap on three factors (score 1–3 each):
   - **Relevance**: How closely does it align with the publication's core subject matter?
   - **Audience demand**: Does the topic suggest high search or reader interest?
   - **Competitive pressure**: Is this a topic where lack of coverage is a clear disadvantage?
   - Sum scores (max 9) to produce a priority tier: High (7–9), Medium (4–6), Low (1–3)

5. **Generate briefs** — For each High and Medium priority gap, produce a full writing brief. For Low priority gaps, produce a one-line summary only.

6. **Output all briefs** in priority order.

## Output Format

Produce the following for each High or Medium priority gap:

---
**Brief #[N] — Priority: [High / Medium]**
**Working Title:** [Specific, audience-facing article title]
**Target Topic:** [The gap topic being addressed]
**Gap Rationale:** [1 sentence explaining why existing content doesn't cover this]
**Goal / Search Intent:** [Informational / Commercial / Navigational — with 1-line description]
**Recommended Angle:** [1–2 sentences on the specific perspective or hook to take]
**Key Points to Cover:**
- [Point 1]
- [Point 2]
- [Point 3]
- [Point 4]
**Suggested Word Count:** [e.g., 800–1,200 words]
**Internal Links:** [List 1–3 existing articles from the provided library to link from/to]
**Priority Score:** [X/9]

---

For Low priority gaps, output a single line:
- **[Topic]** — Low priority. Reason: [one phrase].

End the output with a **Gap Summary Table**:

| # | Working Title | Priority | Score | Intent |
|---|---------------|----------|-------|--------|
| 1 | ...           | High     | 8/9   | Informational |

Total gaps identified: [N] | High: [N] | Medium: [N] | Low: [N]
