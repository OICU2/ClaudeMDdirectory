---
name: regulatory-research-citation-update-audit
description: >
  Scans a research document, report, or policy brief for citations to regulations, statutes, agency guidance, or official standards and flags any that may have been superseded, amended, or revoked. Use when someone says "check my citations are current," asks whether referenced regulations are still in force, wants to audit a document for outdated legal references, needs to verify regulatory citations before publication, or is concerned that guidance documents may have changed since the research was written.
category: research
tags: [regulatory, citations, compliance, legal-research, document-audit]
author: community
---

# Regulatory Research Citation Update Audit

This skill scans a submitted document for regulatory and official guidance citations, evaluates each for potential staleness, and produces a structured audit report flagging citations that require verification or updating before publication.

## Audit Workflow

1. **Extract all citations**: Identify every reference to a regulation, statute, code section, agency rule, executive order, guidance document, standard, or official policy. Note the citation text, document section, and page/paragraph location.

2. **Classify each citation by type**:
   - Federal or state statute (e.g., U.S.C., C.F.R., state code)
   - Agency guidance, memo, or bulletin
   - Executive order or presidential directive
   - Industry or international standard (ISO, ANSI, etc.)
   - Court ruling used as interpretive authority

3. **Assess staleness risk for each citation**:
   - **High risk**: Citation includes a specific year or version more than 2 years old, references an agency known for frequent rulemaking (EPA, FDA, SEC, OSHA), or cites guidance explicitly labeled "interim" or "draft"
   - **Medium risk**: Citation is undated or uses a date between 1–2 years ago, or references a regulatory area subject to recent political or legislative activity
   - **Low risk**: Citation is to a foundational statute unlikely to have changed, or was verified recently

4. **Flag supersession indicators**: Look in the document text itself for language suggesting awareness of change (e.g., "as of [date]," "previously required," "under the old rule"), which may signal the author knew the citation was transitional.

5. **Generate verification guidance**: For each high- or medium-risk citation, specify the exact resource where the current version should be confirmed (e.g., eCFR for federal regulations, agency website, Federal Register, official standards body).

6. **Do not fabricate status**: If you cannot confirm whether a specific regulation has changed based on your training data, explicitly say so and instruct the user to verify externally. Never assert a regulation is current if you are uncertain.

## Output Format

Produce a structured audit report with three sections:

**Section 1 — Summary**
- Total citations found
- Count by risk level (High / Medium / Low)
- Overall recommendation (e.g., "7 citations require verification before publication")

**Section 2 — Citation Audit Table**
For each citation, provide a row with:
| Citation | Location in Document | Type | Risk Level | Reason for Flag | Verification Source |

**Section 3 — Recommended Actions**
A numbered checklist of specific actions the author should take, ordered by priority (High risk first). Each action names the citation, states what to check, and provides the URL or resource name for verification.

Keep the table exhaustive — every citation found must appear. Flag uncertainty explicitly rather than omitting it.
