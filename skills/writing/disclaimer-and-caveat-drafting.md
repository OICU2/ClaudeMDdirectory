---
name: disclaimer-and-caveat-drafting
description: >
  Scans content for claims that carry legal, medical, financial, or professional liability exposure and drafts precisely scoped disclaimer language for each flagged passage. Use when someone says "does this need a disclaimer," asks about adding warnings to their content, or wants to protect themselves from liability. Also activates when someone is publishing advice articles, product copy with health claims, or investment-related content.
category: writing
tags: [legal, compliance, risk-management]
author: community
---

# Disclaimer and Caveat Drafting

This skill audits content for liability-triggering claims and produces ready-to-use disclaimer language tailored to each flagged passage's specific domain and risk level.

## Review and Drafting Workflow

1. **Read the full content** before flagging anything — assess context, audience, and publication format first.
2. **Identify flagged passages** by scanning for:
   - Medical or health claims (symptoms, treatments, dosages, diagnoses)
   - Financial or investment statements (returns, recommendations, tax implications)
   - Legal assertions (rights, obligations, jurisdiction-specific rules)
   - Professional advice presented as fact (nutritional, psychological, engineering)
   - Statistical or research claims that could be misapplied
   - Product safety or efficacy statements
3. **Classify each flagged passage** by domain (medical, legal, financial, general professional) and risk level (low / medium / high) based on how directly actionable the claim is to a lay reader.
4. **Draft a scoped disclaimer** for each passage:
   - Match the disclaimer's specificity to the claim — do not use a generic boilerplate for a precise claim
   - Name the exact limitation (e.g., "does not constitute tax advice," "not a substitute for licensed medical diagnosis")
   - Include the recommended action where applicable (e.g., "consult a licensed financial advisor before making investment decisions")
   - Keep language plain — no unnecessary legalese, but retain precision
5. **Draft a global disclaimer** if the content has three or more flagged passages or if the overall piece presents substantial aggregate risk. Place it at the top or bottom of the document as appropriate.
6. **Flag unresolvable risks** — if a claim is so absolute or unsubstantiated that no disclaimer adequately mitigates it, call it out explicitly and recommend the claim be revised or removed.

## Output Format

Produce a structured report with two sections:

**Section 1 — Flagged Passages**
For each flagged item:
- `Passage:` Exact quote or paraphrase of the flagged text
- `Domain:` Medical / Legal / Financial / Professional / Other
- `Risk Level:` Low / Medium / High — one sentence explanation
- `Suggested Disclaimer:` Ready-to-use disclaimer text in plain language (1–3 sentences)
- `Placement:` Where to insert the disclaimer (inline, footnote, section header, page footer)

**Section 2 — Global Disclaimer (if applicable)**
A single consolidated disclaimer (3–6 sentences) covering the document as a whole, suitable for placement at the top or bottom of the published piece.

If no passages require disclaimers, state that explicitly with a one-sentence explanation rather than fabricating caveats.
