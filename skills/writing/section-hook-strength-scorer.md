---
name: section-hook-strength-scorer
description: >
  Evaluates the opening sentence of each major section in a long-form piece and scores its hook strength on a 1–10 scale with rewrite suggestions for weak openers. Use when someone says "check if my sections are engaging," asks whether their article keeps readers hooked, or wants to audit the opening lines of a long piece. Also triggers when someone says "score my section hooks" or "my readers are dropping off mid-article."
category: writing
tags: [hooks, engagement, long-form, editing, retention]
author: community
---

# Section Hook Strength Scorer

Audits the opening sentence of every major section in a long-form piece, scores each on a 1–10 engagement scale, and provides rewrite suggestions for any scorer below 7.

## Scoring Workflow

1. **Identify major sections** — Extract every H2 and H3 heading (or clearly delineated section break) from the submitted piece. List them in order.

2. **Isolate the opening sentence** — For each section, take only the very first sentence of the body text (not the heading itself).

3. **Score each opener on a 1–10 scale** using these criteria:
   - **1–3 (Weak):** Generic, restates the heading, starts with "In this section…" or a dictionary definition, or makes no promise to the reader.
   - **4–6 (Mediocre):** Provides context but lacks tension, specificity, or forward momentum. Reader can stop here without feeling they're missing something.
   - **7–8 (Strong):** Creates curiosity, introduces a specific claim or surprising detail, or raises a question the reader wants answered.
   - **9–10 (Excellent):** Immediately delivers a provocative insight, a counterintuitive fact, a concrete stakes statement, or an irresistible promise that compels continued reading.

4. **Flag weak openers** — Any section scoring 6 or below is flagged for revision.

5. **Write rewrite suggestions** — For each flagged opener, produce 2 alternative opening sentences. Each rewrite must use a different technique:
   - Option A: Lead with a surprising or counterintuitive fact/claim
   - Option B: Open with a specific, concrete scenario or stakes statement

6. **Identify the strongest hook** — Call out the single highest-scoring opener and explain in one sentence why it works.

7. **Compute an overall score** — Average all section scores and round to one decimal place. Provide a one-line verdict on the piece's overall section-level retention risk.

## Output Format

Produce a structured report in this exact order:

```
## Section Hook Audit

| # | Section Heading | Opening Sentence (truncated to 15 words) | Score | Flag |
|---|----------------|------------------------------------------|-------|------|
| 1 | [heading]       | [first 15 words…]                        | X/10  | ⚠️ or ✅ |

---

### Flagged Sections — Rewrite Suggestions

**Section [#]: [Heading]**
- Original: "[full opening sentence]"
- Score: X/10 — [one sentence explaining the weakness]
- Option A (Surprising claim): "[rewrite]"
- Option B (Concrete stakes): "[rewrite]"

[Repeat for each flagged section]

---

### Strongest Hook
**Section [#] — [Heading]:** "[opening sentence]"
Why it works: [one sentence]

---

### Overall Hook Score: X.X / 10
Verdict: [one sentence on retention risk — e.g., "Three of five sections risk reader drop-off due to passive, context-setting openers."]
```

- Always include the full table even if no sections are flagged.
- Do not rewrite openers that score 7 or above unless explicitly asked.
- If the piece has fewer than 2 sections, respond: "This skill requires at least 2 major sections to produce a meaningful audit."
