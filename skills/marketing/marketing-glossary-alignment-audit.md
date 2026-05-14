---
name: marketing-glossary-alignment-audit
description: >
  Audits marketing documents, campaign briefs, and reports to identify inconsistent or conflicting use of key marketing terms such as lead, MQL, SQL, conversion, prospect, and funnel stage. Use when someone says "our team defines things differently," asks about why metrics don't match across reports, or wants to standardize marketing terminology across the organization. Also triggers when someone notices confusion between lead types, questions whether numbers are being counted the same way, or needs to align definitions before a campaign launch.
category: marketing
tags: [marketing-ops, terminology, alignment, reporting, glossary]
author: community
---

# Marketing Glossary Alignment Audit

This skill scans provided marketing content to surface every instance where key terms are used inconsistently, ambiguously, or in conflict with one another, then produces a structured audit report with recommended canonical definitions.

## Audit Workflow

1. **Collect inputs**: Ask the user to paste or upload the documents to audit — campaign briefs, CRM reports, dashboards, email copy, meeting notes, or style guides. Accept multiple documents in one session.

2. **Extract term inventory**: Identify every instance of high-stakes marketing terms across all inputs. Default watch list:
   - Lead, prospect, contact, subscriber
   - MQL (Marketing Qualified Lead), SQL (Sales Qualified Lead), PQL (Product Qualified Lead)
   - Conversion, conversion event, micro-conversion
   - Funnel stages: awareness, consideration, decision, retention
   - Churn, attrition, cancellation
   - Attribution terms: first-touch, last-touch, multi-touch
   - Engagement, active user, DAU/MAU
   - Add any terms the user flags as contested.

3. **Map usage per source**: For each term found, record:
   - Which document or source used it
   - The exact sentence or phrase containing it
   - The implied definition based on context (inferred from surrounding copy)

4. **Identify conflicts**: Compare implied definitions across sources. Flag conflicts in three tiers:
   - 🔴 **Hard conflict**: Same term, directly contradictory definitions (e.g., "MQL = any form fill" vs. "MQL = form fill + score ≥ 50")
   - 🟡 **Soft conflict**: Same term, different scope or threshold (e.g., "conversion = purchase" vs. "conversion = any goal completion")
   - 🔵 **Ambiguity**: Term used without a clear definition, leaving room for misinterpretation

5. **Draft canonical definitions**: For each conflicted or ambiguous term, propose one clear, precise definition. Base proposals on:
   - Industry standard (cite source: HubSpot, Salesforce, MMA, etc.)
   - The definition used most consistently across the user's own documents
   - Flag when the user must make a judgment call

6. **Recommend remediation actions**: For each conflict, specify which document needs to be updated and what the change should be.

## Output Format

Produce a structured audit report with the following sections:

---

**MARKETING GLOSSARY ALIGNMENT AUDIT**
*Documents reviewed: [list]*
*Terms audited: [count]*
*Conflicts found: [count by tier]*

---

**CONFLICT LOG**

| Term | Source A | Source A Definition | Source B | Source B Definition | Conflict Tier |
|------|----------|-------------------|----------|-------------------|---------------|
| MQL  | Campaign brief | Any form fill | Q3 Report | Form fill + lead score ≥ 50 | 🔴 Hard |

*(Repeat for each conflict)*

---

**CANONICAL DEFINITIONS PROPOSED**

For each term, provide:
- **Term**: [name]
- **Proposed Definition**: [1–2 sentences, precise]
- **Basis**: [industry standard / majority usage / judgment call required]
- **Documents to Update**: [specific files and sections]

---

**REMEDIATION CHECKLIST**

- [ ] Update [document name], [section], line ~[X]: change "[old phrasing]" to "[new phrasing]"
*(One checkbox per required change, ordered by priority: hard conflicts first)*

---

**GLOSSARY DRAFT**

A clean, copy-paste-ready glossary block containing all canonical definitions, formatted for inclusion in a style guide or shared wiki.

---

Keep the report scannable.
