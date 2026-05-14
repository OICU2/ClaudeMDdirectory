---
name: compound-adjective-hyphenation-audit
description: >
  Scans a document or passage for compound modifier constructions and corrects hyphenation errors according to a specified style guide (Chicago, AP, APA, or MLA). Use when someone says "check my hyphens," asks about fixing compound adjectives, wants to audit a document for punctuation consistency, needs to know if a phrase like "well known author" should be hyphenated, or is proofreading writing for publication.
category: writing
tags: [hyphenation, grammar, proofreading, style-guide, compound-adjectives]
author: community
---

# Compound Adjective Hyphenation Audit

This skill scans submitted text for compound modifier constructions, evaluates each against the requested style guide's rules, and returns a corrected version with a log of every change made.

## Hyphenation Audit Workflow

1. **Identify the style guide.** Default to Chicago Manual of Style if none is specified. Accept: Chicago, AP, APA, MLA. Note any style-specific quirks upfront (e.g., AP omits hyphens after *very* and *-ly* adverbs; Chicago hyphenates most compound modifiers before a noun).

2. **Extract all compound modifier candidates.** Scan the text for:
   - Adjective + noun before a noun (e.g., *high quality product*)
   - Adverb + adjective before a noun (e.g., *well known author*)
   - Noun + adjective before a noun (e.g., *time sensitive deadline*)
   - Noun + participle before a noun (e.g., *decision making process*)
   - Number + unit before a noun (e.g., *five year plan*)
   - Prefixed words that may need hyphens (e.g., *re examine*, *post pandemic*)

3. **Apply style-guide rules to each candidate.**
   - **Pre-noun position:** Hyphenate compound modifiers unless the first word is an *-ly* adverb (Chicago/AP/APA/MLA all agree here).
   - **Post-noun position:** Generally no hyphen (Chicago) unless the compound is a permanent dictionary entry.
   - **Proper nouns as modifiers:** Do not hyphenate (e.g., *New York style pizza*).
   - **Suspended hyphens:** Flag constructions like *first- and second-place finishers* for correct suspended form.
   - **Prefixes:** Apply the chosen guide's prefix list (Chicago 7.85–7.89; AP prefix entry).

4. **Flag each instance.** Categorize as: `MISSING HYPHEN`, `INCORRECT HYPHEN` (hyphen present but shouldn't be), or `CORRECT` (confirm no change needed when ambiguous).

5. **Apply corrections** to a clean copy of the full text.

6. **Note edge cases.** Flag any compound where reasonable editors could disagree, and state why.

## Output Format

Produce two clearly labeled sections:

**Section 1 — Change Log**
A numbered list of every flagged instance in the order it appears in the text:
```
1. "high quality product" → "high-quality product" [MISSING HYPHEN — compound modifier before noun; Chicago 7.81]
2. "quickly-rising costs" → "quickly rising costs" [INCORRECT HYPHEN — -ly adverb; no hyphen needed]
3. "well-known in the industry" → "well known in the industry" [INCORRECT HYPHEN — post-noun position; Chicago 7.82]
```

**Section 2 — Corrected Text**
The full corrected passage, identical to the input except for hyphenation changes. Do not rewrite sentences or alter any other punctuation.

If no errors are found, state: "No hyphenation errors detected under [Style Guide] rules." and return the original text unchanged.
