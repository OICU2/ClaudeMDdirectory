---
name: acronym-and-abbreviation-audit
description: >
  Scans a document to identify every acronym and abbreviation, verifying each is defined on first use and applied consistently throughout. Use when someone says "check my acronyms," asks to "audit abbreviations in this document," wants to "make sure all abbreviations are defined," needs to "review acronym consistency," or requests "a first-use check on my terms." Returns a structured report of issues found and a clean definition list.
category: writing
tags: [acronyms, abbreviations, consistency, editing, technical-writing]
author: community
---

# Acronym and Abbreviation Audit

This skill scans any provided document to locate all acronyms and abbreviations, flag those missing a first-use definition, and identify any inconsistent usage across the text.

## Audit Workflow

1. **Extract all candidates** — Identify every token matching these patterns:
   - All-caps sequences of 2+ letters (e.g., `NASA`, `API`, `UI`)
   - Mixed-case initialisms (e.g., `PhD`, `MHz`)
   - Dotted abbreviations (e.g., `e.g.`, `i.e.`, `Fig.`, `dept.`)
   - Slash or hyphen compounds used as shorthand (e.g., `B2B`, `AI/ML`)

2. **Record first occurrence** — Note the paragraph, sentence, or line number where each term first appears.

3. **Check for definition on first use** — A term is "defined" if it is accompanied by either:
   - The spelled-out form immediately before or after in the same sentence (e.g., "Application Programming Interface (API)" or "API (Application Programming Interface)")
   - A parenthetical or inline gloss that makes the meaning unambiguous

4. **Flag missing definitions** — Mark any term that appears without a definition at first use.

5. **Check consistency** — For each term, verify:
   - Capitalization is uniform across all occurrences (e.g., not `API` in one place and `Api` in another)
   - The same abbreviation is not used for two different full forms
   - The same full form is not abbreviated two different ways (e.g., both `ML` and `M.L.`)

6. **Handle known/universal terms** — Flag terms that are almost universally known (e.g., `USA`, `HTML`) as "low priority" rather than errors, but still report them so the author can decide.

7. **Generate the definition list** — Compile a master glossary of all unique terms found, paired with their definitions (if found) or marked as `[UNDEFINED]`.

## Output Format

Produce three clearly labeled sections:

### 1. Issues Found
A numbered list of problems, each entry containing:
- **Term**: the acronym or abbreviation
- **First appears**: location (paragraph number, section heading, or line number)
- **Issue**: one of — `Missing definition`, `Inconsistent capitalization`, `Ambiguous abbreviation`, `Duplicate abbreviation for different terms`
- **Severity**: `High` (undefined technical term) | `Medium` (inconsistency) | `Low` (universally known term)
- **Recommendation**: one-sentence fix

Example:
```
1. Term: SLA | First appears: Paragraph 3 | Issue: Missing definition | Severity: High
   Recommendation: Expand on first use — "Service Level Agreement (SLA)"
```

### 2. Consistency Conflicts
A table listing any terms used in more than one form:

| Full Form | Variant A | Variant B | Occurrences |
|-----------|-----------|-----------|-------------|
| Machine Learning | ML | M.L. | 4 / 1 |

### 3. Master Acronym Glossary
An alphabetically sorted list of every unique term found:

```
API     — Application Programming Interface [Defined ✓, Para. 1]
SLA     — [UNDEFINED]
UI      — User Interface [Defined ✓, Para. 2]
```

If no issues are found, state: "No acronym or abbreviation issues detected. All terms are defined on first use and used consistently."
