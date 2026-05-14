---
name: source-attribution-audit
description: >
  Analyzes a written draft to identify unattributed claims, missing citations, and inconsistent reference formatting, then produces a corrected attribution list. Use when someone says "check my citations," asks about missing sources in their draft, wants to audit references before submitting, needs to fix inconsistent bibliography formatting, or wonders if their claims are properly supported. Outputs a structured report and corrected reference list.
category: writing
tags: [citations, references, fact-checking, academic-writing, attribution]
author: community
---

# Source Attribution Audit

This skill scans a draft for unsourced claims, absent or malformed citations, and reference format inconsistencies, then delivers a prioritized issue report and a corrected attribution list ready to paste back into the document.

## Audit Workflow

1. **Extract all claims** — Read the full draft and list every factual assertion, statistic, quote, and paraphrase that requires a source.
2. **Classify each claim** by status:
   - ✅ **Attributed** — has an inline citation that matches an entry in the reference list
   - ⚠️ **Partially attributed** — has an inline citation but no matching reference list entry, or vice versa
   - ❌ **Unattributed** — makes a specific factual claim with no citation at all
3. **Detect the dominant reference style** — Identify whether the draft uses APA, MLA, Chicago, Vancouver, or an ad hoc format by examining existing citations.
4. **Flag format inconsistencies** — Note any citations or reference entries that deviate from the detected style (e.g., mixed date placements, inconsistent italicization, mismatched DOI formats).
5. **Check internal consistency** — Verify that every inline citation has a corresponding reference list entry and every reference list entry is cited at least once in the body.
6. **Generate corrected entries** — For references that are malformed or incomplete, rewrite them in the detected style. For unattributed claims, mark them with a placeholder tag `[SOURCE NEEDED: <brief description of required source type>]`.

## Output Format

Produce three clearly labeled sections:

**Section 1 — Audit Summary**
A 3–5 line summary stating: total claims found, number attributed/partially attributed/unattributed, detected reference style, and number of format inconsistencies.

**Section 2 — Issue List**
A numbered list of every problem found. Each item must include:
- Location (quote the claim or first few words)
- Issue type (Unattributed / Orphaned citation / Orphaned reference / Format deviation)
- Specific fix required (one sentence)

**Section 3 — Corrected Attribution List**
The full reference list rewritten in the detected style, with:
- Corrected entries replacing malformed originals
- `[SOURCE NEEDED: <description>]` placeholders inserted for unattributed claims, listed at the end
- Entries sorted alphabetically (or by appearance order if Vancouver/numbered style)
