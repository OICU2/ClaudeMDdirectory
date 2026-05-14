---
name: oxford-comma-style-enforcement
description: >
  Scans a document and standardizes comma usage before coordinating conjunctions in lists to enforce or remove the Oxford comma consistently throughout. Use when someone says "make my commas consistent," asks about serial comma style, wants to enforce Oxford comma rules, needs to remove Oxford commas from a document, or says "standardize my list punctuation."
category: writing
tags: [oxford-comma, punctuation, style-guide, editing, consistency]
author: community
---

# Oxford Comma Style Enforcement

This skill audits an entire document for list constructions and rewrites every instance to either consistently include or consistently omit the Oxford comma based on the user's chosen style.

## Enforcement Workflow

1. **Confirm the target style** — Ask the user upfront: enforce Oxford comma (add serial comma before final conjunction) or remove it (strip serial comma before final conjunction)? Do not proceed until this is clear.
2. **Identify all list constructions** — Scan for any sequence of three or more items joined by "and," "or," or "nor." Include inline lists, bulleted prose, and sentences with compound predicates or objects.
3. **Apply the rule without exception** — For every identified list:
   - **Enforce mode**: Ensure a comma appears directly before the final conjunction (e.g., "apples, oranges, and bananas").
   - **Remove mode**: Delete the comma directly before the final conjunction (e.g., "apples, oranges and bananas").
4. **Flag ambiguous cases** — If removing the Oxford comma creates ambiguity (e.g., "I thanked my parents, Beyoncé and Jay-Z"), flag the sentence with a comment rather than silently altering it.
5. **Preserve everything else** — Do not change word choice, sentence structure, punctuation unrelated to serial commas, or formatting.
6. **Report changes** — After revising, provide a summary count of how many commas were added or removed.

## Output Format

- **Revised document**: The full corrected text with all changes applied inline.
- **Change summary**: A brief list at the end in this structure:
  - Style applied: [Enforce / Remove]
  - Serial commas added: [n]
  - Serial commas removed: [n]
  - Flagged ambiguous sentences: [n] (with each flagged sentence quoted and explained)
- If no changes were needed, state: "No serial comma inconsistencies found. Document already conforms to [style] style."
