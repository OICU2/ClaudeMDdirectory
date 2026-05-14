---
name: regulatory-document-change-summary
description: >
  Compares two versions of a regulatory or policy document and produces a plain-language
  summary of every substantive change relevant to a defined research topic. Use when someone
  says "what changed in this regulation," asks about differences between policy versions, wants
  to understand how new rules affect a specific area, needs a redline summary in plain English,
  or is tracking regulatory updates for compliance or research purposes.
category: research
tags: [regulatory, policy, document-comparison, compliance, research]
author: community
---

# Regulatory Document Change Summary

This skill compares two versions of a regulatory or policy document and produces a structured, plain-language summary of every substantive change relevant to a user-defined research topic or compliance area.

## Workflow

1. **Identify the documents**: Confirm which document is the old version and which is the new version. If only one document is provided, ask the user to supply both versions or paste the relevant sections.

2. **Define the research scope**: Ask the user to specify the research topic, subject matter, or compliance area they care about (e.g., "data privacy obligations for healthcare providers," "emissions limits for heavy vehicles"). If not provided, summarize all substantive changes.

3. **Perform structural comparison**: Identify which sections, articles, clauses, or definitions have been added, removed, renumbered, or modified between versions.

4. **Filter for relevance**: Retain only changes that materially affect the defined research topic. Skip formatting-only edits, renumbering without content changes, and purely administrative amendments unless the user asks for exhaustive coverage.

5. **Classify each change** using one of these categories:
   - **New Requirement** — an obligation or standard that did not exist before
   - **Removed Requirement** — an obligation or standard that has been eliminated
   - **Modified Requirement** — an existing rule that has been altered in scope, threshold, deadline, or meaning
   - **New Definition** — a term newly defined or materially redefined
   - **Procedural Change** — a change to process, timing, or enforcement mechanism
   - **Exemption or Safe Harbor** — a new or removed carve-out

6. **Draft plain-language summaries**: For each relevant change, write a 2–4 sentence explanation that describes what changed, what it replaces (if anything), and why it matters to the research topic. Avoid regulatory jargon unless quoting the source text directly.

7. **Note effective dates and transition provisions**: Flag any phase-in periods, grandfather clauses, or compliance deadlines associated with each change.

8. **Flag ambiguities**: If a change's meaning or applicability is unclear, note it explicitly and suggest the user seek legal or regulatory counsel for interpretation.

## Output Format

Produce a structured report with the following sections:

---

**Regulatory Change Summary**
**Documents Compared:** [Old version title/date] → [New version title/date]
**Research Topic:** [User-defined scope]
**Total Substantive Changes Identified:** [N]

---

**Change #[N] — [Change Category]**
- **Location:** [Section/Article/Clause number and title]
- **Old Text (if applicable):** "[Direct quote or paraphrase]"
- **New Text:** "[Direct quote or paraphrase]"
- **Plain-Language Summary:** [2–4 sentences explaining the change and its impact on the research topic]
- **Effective Date / Transition:** [Date or "Not specified"]
- **Ambiguity Flag:** [Yes/No — if Yes, describe the uncertainty]

---

Repeat the Change block for every substantive change.

Close with a **Key Takeaways** section (3–6 bullet points) summarizing the most significant shifts relevant to the research topic and any immediate action items implied by the changes.

Keep each plain-language summary accessible to a non-lawyer reader while preserving technical accuracy. Do not omit changes that are unfavorable or complex.
