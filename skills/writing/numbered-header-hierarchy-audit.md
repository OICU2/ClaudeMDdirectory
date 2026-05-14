---
name: numbered-header-hierarchy-audit
description: >
  Analyzes a document's heading structure to ensure all heading levels follow a logical numerical hierarchy without gaps or inconsistencies. Use when someone says "check my heading structure," asks about "header hierarchy problems," wants to "audit heading levels," needs to "fix heading organization," or says "my headings are out of order." Reports every violation with its location and a suggested correction.
category: writing
tags: [headings, structure, document-audit, hierarchy, markdown]
author: community
---

# Numbered Header Hierarchy Audit

This skill inspects every heading in a document, verifies each level increments or decrements correctly, and flags any skipped tiers, reversed jumps, or inconsistent nesting so the author can fix structural issues fast.

## Audit Workflow

1. **Extract all headings** in document order, recording each heading's text, its declared level (H1–H6), and its line number or position.
2. **Establish the root level** — the first heading encountered sets the baseline. Flag it if it is not H1 (unless the document explicitly uses a fragment that begins at H2 or H3, which should be noted).
3. **Check each transition** between consecutive headings using these rules:
   - **Descending (deeper):** A heading may only increase by exactly one level at a time. H1 → H3 is a violation; H1 → H2 is valid.
   - **Ascending (shallower):** A heading may jump back to any previously established ancestor level. H3 → H1 is valid if H1 existed before.
   - **Same level:** Always valid; treated as a sibling.
4. **Flag duplicate H1s** — a standard document should have exactly one H1. Note every additional H1 as a warning.
5. **Flag orphaned headings** — any heading whose parent level was never opened (e.g., an H4 appearing before any H3 has been used).
6. **Collect all violations** into a numbered list with: position, the offending heading text, the detected issue type, and a concrete suggested fix.
7. **Summarize** total headings inspected, total violations found, and overall pass/fail status.

## Output Format

Produce a structured report with these sections:

**Heading Inventory**
A compact numbered list of all headings found: `[position] H[level] — "Heading Text"`

**Violations**
A numbered list of every issue found. Each entry must include:
- Position (line number or heading sequence index)
- Heading text in quotes
- Issue type: `SKIPPED_LEVEL`, `DUPLICATE_H1`, `ORPHANED_HEADING`, or `INVALID_ROOT`
- One-line explanation of the problem
- Suggested fix (e.g., "Change H4 to H3" or "Promote to H2")

If no violations exist, state: `✓ No violations found. Heading hierarchy is valid.`

**Summary**
```
Headings inspected: [n]
Violations found:   [n]
Status:             PASS / FAIL
```
