---
name: writing-consistency-audit
description: >
  Audits documents or content series for inconsistencies in terminology, capitalization, formatting conventions, and named entity usage, then produces a flagged correction report. Use when someone says "check my document for inconsistencies," asks to "audit my content for style issues," wants to "make sure my terminology is consistent," needs to "find naming inconsistencies across my articles," or requests a "consistency review of my writing."
category: writing
tags: [consistency, editing, proofreading, style-guide, terminology]
author: community
---

# Writing Consistency Audit

Scans one or more documents for inconsistent terminology, capitalization, formatting, and named entity usage, then delivers a structured flagged report with corrections.

## Audit Workflow

1. **Inventory named entities**: Extract all proper nouns, product names, brand names, acronyms, and technical terms. List every spelling/capitalization variant found.

2. **Check terminology consistency**: Identify cases where the same concept is referred to by multiple names (e.g., "user," "customer," "client" used interchangeably without clear intent).

3. **Audit capitalization patterns**: Flag words that appear in mixed forms (e.g., "internet" vs. "Internet," "AI" vs. "A.I." vs. "Ai").

4. **Review formatting conventions**: Look for inconsistent use of:
   - Hyphenation (e.g., "email" vs. "e-mail")
   - Number formatting (e.g., "10" vs. "ten")
   - Oxford comma usage
   - Date formats (e.g., "Jan 5" vs. "January 5th" vs. "01/05")
   - List punctuation (periods vs. no periods)

5. **Detect punctuation inconsistencies**: Flag em dash vs. en dash vs. hyphen misuse, inconsistent quote styles, and spacing around punctuation.

6. **Cross-document comparison** (if multiple files provided): Track which conventions are used most frequently to infer the intended standard, then flag deviations.

7. **Recommend a ruling**: For each inconsistency category, recommend one form to standardize on, with a brief rationale.

## Output Format

Produce a **Consistency Audit Report** with these sections:

---

### Summary
- Total inconsistency categories found: [N]
- Total individual flags: [N]
- Documents audited: [list]

---

### Flagged Issues

For each issue, use this format:

**Category**: [Terminology | Capitalization | Formatting | Named Entity | Punctuation]
**Issue**: [One-sentence description of the inconsistency]
**Variants found**:
- `"variant A"` — appears [N] times (lines/locations if available)
- `"variant B"` — appears [N] times
**Recommended standard**: `"preferred form"`
**Rationale**: [One sentence explaining why this form is preferred — frequency, style guide alignment, or clarity]

---

### Quick-Fix Summary Table

| # | Category | Variants | Recommended Form |
|---|----------|----------|-----------------|
| 1 | Capitalization | AI / A.I. / Ai | AI |
| 2 | Terminology | user / customer / client | user |
| ... | | | |

---

### Notes
Flag any ambiguous cases where intent is unclear and human judgment is required before standardizing.
