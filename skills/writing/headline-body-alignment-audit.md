---
name: headline-body-alignment-audit
description: >
  Audits long-form written content to verify each subheading accurately represents the section body beneath it, flagging mismatches, overpromises, and vague titles. Use when someone says "check if my headings match my content," asks whether their section titles are misleading, or wants to make sure their article structure is coherent. Also triggers when someone asks to audit, review, or tighten up the headings in a document.
category: writing
tags: [editing, structure, content-audit, headings, long-form]
author: community
---

# Headline-Body Alignment Audit

This skill systematically checks every subheading in a document against its corresponding section body, identifying misalignments, overpromises, and headings that misrepresent or fail to capture the actual content below them.

## Audit Workflow

1. **Parse the document structure** — Identify every subheading (H2, H3, H4, or bold section titles) and map each heading to the body content that follows it, ending where the next heading begins.

2. **Evaluate each heading-body pair** on three criteria:
   - **Accuracy** — Does the heading describe what the section actually covers? Flag if the body contradicts or ignores the heading's claim.
   - **Scope** — Does the heading overpromise (claims breadth the body doesn't deliver) or underpromise (body covers significantly more than the heading suggests)?
   - **Specificity** — Is the heading so vague it could apply to multiple sections, or so narrow it cuts off part of what the body addresses?

3. **Assign a status to each heading:**
   - ✅ Aligned — heading accurately reflects body content
   - ⚠️ Partial mismatch — heading is close but misleading in a specific way
   - ❌ Misaligned — heading and body are substantially out of sync

4. **For every ⚠️ or ❌ item**, provide:
   - A one-line explanation of the specific mismatch
   - One or two concrete revised heading options that better fit the actual body content

5. **Do not rewrite body content** — only evaluate and suggest heading revisions.

## Output Format

Produce a structured audit report in this format:

---

**Headline-Body Alignment Audit**

| # | Heading | Status | Issue |
|---|---------|--------|-------|
| 1 | "Your heading here" | ✅ / ⚠️ / ❌ | Brief issue description or "None" |
| 2 | ... | ... | ... |

---

**Flagged Items — Detail & Suggestions**

For each ⚠️ or ❌ entry:

**Heading [#]: "[Original Heading]"** — ⚠️ or ❌
- **Problem:** One sentence describing the specific mismatch.
- **Suggested alternatives:**
  - "[Revised heading option 1]"
  - "[Revised heading option 2]"

---

**Summary**
- Total headings audited: N
- Aligned: N | Partial mismatch: N | Misaligned: N
- Overall alignment score: X% (aligned + partial / total)
- One sentence of top-priority recommendation if score is below 80%.

---
