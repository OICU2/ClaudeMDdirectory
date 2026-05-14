---
name: writing-modal-verb-overuse-audit
description: >
  Audits text for excessive modal verb usage that weakens authority and clarity. Use when someone says "my writing feels weak or uncertain," asks to "make this sound more confident," or wants to "strengthen the tone of a draft." Also activates when someone shares a document and asks "why doesn't this land?" or requests a "writing audit" or "tone review."
category: writing
tags: [writing, editing, tone, clarity, authority]
author: community
---

# Modal Verb Overuse Audit

This skill scans submitted text for overreliance on hedging modal verbs — could, might, may, would, should, can, possibly, perhaps — and replaces or flags them to restore decisiveness and authority.

## Audit Workflow

1. **Extract all modal instances**: Scan the full text and list every occurrence of: *could, might, may, would, should, can, perhaps, possibly, potentially, arguably, seemingly*.

2. **Classify each instance** by necessity:
   - **Necessary**: Genuine uncertainty, legal hedging, or intentional softening (e.g., "This medication may cause drowsiness").
   - **Unnecessary**: Hedging where confidence is appropriate and earned (e.g., "This approach could improve results" → "This approach improves results").

3. **Flag unnecessary instances** with the original sentence, the problem modal, and a suggested rewrite using declarative or active phrasing.

4. **Calculate a Modal Density Score**: Count unnecessary modals ÷ total sentences × 100. Score ranges:
   - 0–10%: Clean — minimal intervention needed
   - 11–25%: Moderate hedging — targeted rewrites recommended
   - 26%+: High dilution — full tone revision advised

5. **Apply rewrite rules**:
   - Replace *could/might/may + verb* with present tense where confidence is justified.
   - Replace *would* (speculative) with direct future tense or imperative.
   - Cut *perhaps/possibly/potentially* unless the uncertainty is real and material.
   - Restructure passive-modal constructions ("it might be seen as") into active declarations ("critics view this as").

6. **Preserve intentional hedges**: Do not flag instances where uncertainty is factually accurate, legally required, or rhetorically appropriate (e.g., academic qualifications of scope).

## Output Format

Produce three sections:

**1. Modal Density Score**
Single line: score percentage, severity label, and one-sentence interpretation.

**2. Flagged Instances**
A numbered list. Each entry includes:
- Original sentence (quoted)
- Offending modal (bolded)
- Suggested rewrite (quoted)
- One-line rationale (why the change strengthens the text)

**3. Summary Recommendation**
3–5 sentences describing the overall tone pattern, the most common hedging habit observed, and the single highest-impact change the writer can make going forward.

Keep the audit direct and specific. Do not soften findings with phrases like "you might want to consider" — model the confident tone the audit is designed to produce.
