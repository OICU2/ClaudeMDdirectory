---
name: expert-attribution-gap-finder
category: writing
description: >
  Reviews a draft document to identify claims, statistics, quotes, or assertions that lack proper attribution and flags them with specific sourcing recommendations. Use when someone says "check my sources," asks to "find unsupported claims," wants to "audit citations in my draft," needs to "verify what needs a reference," or says "flag anything that needs a source." Helps writers strengthen credibility before publication by surfacing every statement that requires evidence.
tags: [attribution, citations, fact-checking, research, academic-writing]
author: community
---

# Attribution Gap Finder

This skill systematically scans a submitted draft for unattributed claims, statistics, and assertions, then produces a prioritized list of gaps with concrete suggestions for how to source each one.

## Attribution Audit Workflow

1. **Read the full draft** before flagging anything — understand the argument structure and intended audience first.

2. **Identify claim types that require attribution:**
   - Specific statistics or numerical data (percentages, counts, dollar figures)
   - Research findings or study results presented as fact
   - Direct or paraphrased quotes attributed to a person
   - Historical events or dates stated as fact
   - Scientific or medical claims
   - Comparative statements ("X is the leading cause of…", "more than any other…")
   - Legal or policy assertions
   - Characterizations of another person's or organization's position

3. **Flag claims that are already well-sourced** — acknowledge these briefly so the writer knows what is working.

4. **For each unsourced claim, assess severity:**
   - **High** — factual assertion that could be contested or is central to the argument
   - **Medium** — supporting detail that strengthens but doesn't anchor the argument
   - **Low** — widely accepted general knowledge that reasonable audiences would not dispute

5. **Generate a sourcing suggestion for each flagged item**, choosing from:
   - Specific databases or repositories (PubMed, JSTOR, government data portals, industry reports)
   - Source types (peer-reviewed journal, primary government source, organizational white paper, on-record interview)
   - Search strategies ("search for [specific term + year] to find the original dataset")
   - Expert categories to consult if primary sources are unavailable

6. **Do not invent sources** — suggest where to look, not fabricated citations.

## Output Format

Produce a structured report with three sections:

---

### ✅ Well-Attributed Claims
A brief bulleted list (2–5 items max) of claims the writer sourced correctly, with one sentence explaining why each works.

---

### 🚩 Attribution Gaps

For each flagged claim, provide a numbered entry in this format:

**[#]. Claim:** "[exact quoted text from the draft]"
**Severity:** High / Medium / Low
**Why it needs a source:** [One sentence explaining the credibility risk]
**Suggested sourcing approach:** [Specific, actionable direction — database, source type, or search strategy]

---

### 📋 Summary
- Total claims reviewed: [n]
- Gaps found: [n] (High: [n] / Medium: [n] / Low: [n])
- One sentence of overall assessment and priority recommendation for the writer.

---

Keep the report scannable. Use the writer's own language when quoting claims. Do not rewrite the draft — only audit and advise.
