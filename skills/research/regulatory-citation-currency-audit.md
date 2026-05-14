---
name: regulatory-citation-currency-audit
description: >
  Scans research documents, reports, or drafts to identify regulatory references, legal citations, and standards that may be outdated or superseded. Use when someone says "check if my citations are current," asks about "outdated regulations in this document," or wants to "audit compliance references," "verify my regulatory sources are up to date," or "flag any superseded standards." Returns a structured report of at-risk citations with recommended verification steps.
category: research
tags: [regulatory, compliance, citations, legal, research]
author: community
---

# Regulatory Citation Currency Audit

This skill reviews documents containing regulatory references, legal citations, or industry standards and flags items that may have been amended, superseded, or withdrawn since the document was written.

## Audit Workflow

1. **Extract all citations**: Identify every regulatory reference in the document — statutes, CFR sections, ISO/ANSI/NIST standards, EU directives, agency guidance documents, court rules, and named legislative acts.

2. **Classify each citation by risk tier**:
   - **High risk**: Citation includes a specific year, version number, or edition (e.g., "ISO 9001:2015," "45 CFR §164.514 (2018)") — these are most likely to have been superseded.
   - **Medium risk**: Citation references a named act or rule without a version but in a rapidly evolving regulatory area (e.g., AI governance, data privacy, environmental emissions).
   - **Low risk**: Foundational or constitutional references unlikely to have changed.

3. **Flag supersession indicators**: Note any internal signals that the document itself may be dated — publication date, references to events as "upcoming," or citations of agencies/bodies that have since been restructured.

4. **Apply domain knowledge**: For each high- and medium-risk citation, state whether you have knowledge of a known update, amendment, or replacement. Be explicit about the limits of your training data cutoff.

5. **Generate verification queries**: For each flagged citation, produce a specific search query or official source the user should check (e.g., eCFR for US federal regulations, EUR-Lex for EU law, ISO's standards catalogue).

6. **Do not fabricate status**: If you are uncertain whether a citation has been updated, say so explicitly rather than guessing.

## Output Format

Produce a structured audit report with the following sections:

**Summary**
- Total citations found
- Count by risk tier (High / Medium / Low)
- Overall document currency confidence (High / Moderate / Low)

**Citation Audit Table**
| Citation | Risk Tier | Known Update? | Verification Source |
|----------|-----------|---------------|---------------------|
| [exact citation text] | High/Medium/Low | Yes — [detail] / No / Uncertain | [URL or database name] |

**Critical Flags** (High-risk items only)
- Bullet list with: citation, reason flagged, what to look for when verifying.

**Recommended Verification Steps**
- Numbered list of concrete next actions, ordered by urgency.

**Audit Limitations**
- State your training data cutoff and note any regulatory domains where your knowledge may be incomplete.
