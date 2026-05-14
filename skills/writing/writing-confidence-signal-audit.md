---
name: writing-confidence-signal-audit
description: >
  Scans a draft for hedging language, weak qualifiers, and uncertainty signals, then replaces them with assertive phrasing wherever the underlying claim is well-supported. Use when someone says "my writing sounds uncertain," asks to make their draft more authoritative, or wants to remove wishy-washy language. Also triggers when someone says "this feels too tentative" or wants to strengthen their argument's tone.
category: writing
tags: [editing, tone, clarity, persuasion, confidence]
author: community
---

# Writing Confidence Signal Audit

This skill identifies hedging language and weak qualifiers in a draft and rewrites flagged phrases with assertive alternatives when the claim behind them is substantiated.

## Audit Workflow

1. **Scan for hedge patterns** — Identify every instance of the following categories:
   - Modal softeners: *might, could, may, would seem to, tends to*
   - Epistemic hedges: *I think, I believe, it seems, apparently, arguably*
   - Weak intensifiers used defensively: *somewhat, rather, fairly, quite, a bit, kind of, sort of*
   - Distancing phrases: *it could be argued, one might say, in some ways, to some extent*
   - Filler qualifiers: *basically, generally, often, usually* when used without meaningful distinction
   - Passive constructions that obscure agency: *it was found that, mistakes were made*

2. **Assess claim support** — For each flagged phrase, determine whether the surrounding sentence makes a claim that is:
   - **Well-supported**: backed by data, evidence, logic, or established fact in the draft → replace hedge with assertive phrasing
   - **Genuinely uncertain**: the claim is speculative or explicitly limited in scope → retain hedge, mark as intentional
   - **Unsupported and overstated**: the hedge is masking a claim that needs evidence, not just confidence → flag for the writer to strengthen the argument, not just the language

3. **Rewrite flagged instances** — For well-supported claims, produce a direct rewrite:
   - Remove or replace the hedge word/phrase
   - Restructure the sentence for active voice where applicable
   - Preserve the original meaning exactly — do not inflate or change the claim
   - Example: *"This approach might improve retention"* → *"This approach improves retention"* (if data supports it)

4. **Leave intentional hedges intact** — Scientific uncertainty, legal qualification, or deliberate epistemic humility should not be removed. Mark these as *[Retained — intentional qualifier]*.

5. **Flag unsupported claims separately** — Do not fake confidence. If a hedge is hiding a weak claim, note it as *[Needs evidence — do not rewrite without support]*.

## Output Format

Produce three sections:

**1. Flagged & Revised Phrases**
A numbered list. Each entry includes:
- Original phrase (quoted, in context)
- Revised phrase (quoted)
- One-line rationale (e.g., "Claim is supported by the preceding statistic")

**2. Retained Hedges**
A short list of phrases left unchanged with a one-line reason each.

**3. Claims Needing Support**
A short list of sentences where the hedge masks a weak claim. Flag these for the writer to address with evidence before strengthening tone.

End with a one-sentence summary: total hedges found, how many were revised, how many retained, how many flagged for support.
