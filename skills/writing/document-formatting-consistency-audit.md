---
name: document-formatting-consistency-audit
description: >
  Scans a document for inconsistent heading styles, font usage, spacing, and list formatting, then generates a prioritized correction checklist. Use when someone says "my document looks inconsistent," asks to "clean up the formatting," wants to "standardize headings or spacing," needs to "audit a document for style issues," or says "the formatting is all over the place."
category: writing
tags: [formatting, consistency, audit, checklist, document-review]
author: community
---

# Document Formatting Consistency Audit

This skill analyzes a provided document for formatting inconsistencies across headings, spacing, lists, and text styling, then produces a structured correction checklist Claude uses whenever someone needs formatting standardization or a document style audit.

## Audit Workflow

1. **Ingest the document**: Accept pasted text, markdown, or described document structure. If no document is provided, ask the user to paste the content or describe its structure.

2. **Scan for heading inconsistencies**: Identify mixed heading levels (e.g., H1 used where H2 is expected), inconsistent capitalization styles (Title Case vs. sentence case vs. ALL CAPS), and skipped heading levels.

3. **Check list formatting**: Flag mixed list styles (bullets vs. dashes vs. asterisks used interchangeably), inconsistent indentation levels, and lists that switch between punctuated and unpunctuated endings.

4. **Detect spacing issues**: Look for inconsistent paragraph spacing, double spaces after periods, mixed use of single vs. double line breaks between sections, and irregular indentation.

5. **Identify inline text styling inconsistencies**: Note mixed use of bold, italics, or underline for the same purpose (e.g., bold used for emphasis in one place, italics in another for the same semantic role).

6. **Categorize by severity**:
   - **Critical**: Inconsistencies that affect readability or document hierarchy (e.g., heading level chaos)
   - **Moderate**: Inconsistencies that affect visual polish (e.g., mixed list markers)
   - **Minor**: Small deviations that affect strict consistency (e.g., one extra blank line)

7. **Generate a correction rule**: For each category of issue found, state the recommended standard to apply uniformly.

## Output Format

Produce a structured checklist with the following sections:

---

**Formatting Audit Report**

**Document Summary**: 1–2 sentences describing the document's apparent purpose and scope.

**Issues Found**: `[X Critical | Y Moderate | Z Minor]`

---

**🔴 Critical Issues**
- [ ] [Specific issue — location or example — recommended fix]
- [ ] [Repeat per issue]

**🟡 Moderate Issues**
- [ ] [Specific issue — location or example — recommended fix]

**🟢 Minor Issues**
- [ ] [Specific issue — location or example — recommended fix]

---

**Recommended Style Rules to Apply Globally**
1. Headings: [state the standard]
2. Lists: [state the standard]
3. Spacing: [state the standard]
4. Emphasis/inline styling: [state the standard]

---

Keep checklist items concrete and actionable (e.g., "Change all H3 headings in Section 2 to H2 to match the established hierarchy" not "fix headings"). If the document has no issues in a severity tier, omit that tier.
