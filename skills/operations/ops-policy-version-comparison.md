---
name: ops-policy-version-comparison
description: >
  Analyzes two versions of an operational policy document to surface meaningful differences that affect staff behavior, compliance obligations, or procedural requirements. Use when someone says "we updated our policy and need to know what changed," asks about differences between policy drafts, wants to identify what staff need to be retrained on, needs to compare old and new procedures, or is preparing a policy change communication. Produces a structured diff focused on operational impact, not just textual differences.
category: operations
tags: [policy, compliance, change-management, documentation, operations]
author: community
---

# Policy Version Comparison

Compares two versions of an operational policy document and produces a prioritized breakdown of changes by impact level, telling Claude when to flag items requiring staff communication or retraining.

## Comparison Workflow

1. **Ingest both versions** — Accept old and new policy text. If only one is provided, ask for the other before proceeding. Label them V_OLD and V_NEW internally.

2. **Classify every change into one of four categories:**
   - **Material Change** — Alters required actions, prohibited behaviors, timelines, thresholds, roles, or accountability. Requires staff communication or retraining.
   - **Addition** — New content not present in V_OLD. Flag if it introduces new obligations or permissions.
   - **Deletion** — Content removed from V_OLD. Flag if it removes a previously required step or protection.
   - **Editorial / Cosmetic** — Rewording, formatting, or grammar changes with no operational effect. Group together and summarize briefly.

3. **Assess retraining necessity** — For each Material Change and significant Addition or Deletion, explicitly state whether it requires: (a) formal retraining, (b) a staff notification/memo only, or (c) no action beyond document update.

4. **Identify compliance risk** — Flag any deletion or change that could create regulatory, legal, legal liability, or audit exposure if staff continue following the old version.

5. **Extract key dates and deadlines** — Note any new or changed effective dates, review cycles, or deadline references.

6. **Do not hallucinate intent** — If the reason for a change is unclear, note it as "intent unclear — confirm with policy owner" rather than assuming.

## Output Format

Produce the following structured report:

---

**POLICY VERSION COMPARISON REPORT**
**Document:** [Policy name if provided]
**Versions compared:** [Old version label / date] → [New version label / date]

---

**SUMMARY**
One paragraph, 3–5 sentences: overall scope of changes, highest-priority items, and whether a formal retraining event is recommended.

---

**MATERIAL CHANGES REQUIRING ACTION**
Numbered list. Each entry includes:
- **Section:** [Section name or number]
- **What changed:** One sentence describing the operational difference
- **Old language:** [Direct quote or paraphrase]
- **New language:** [Direct quote or paraphrase]
- **Required action:** Retraining / Staff notification / Document update only
- **Compliance risk:** Yes / No / Unclear — [one-line explanation if Yes or Unclear]

---

**ADDITIONS**
Numbered list. Each entry includes:
- **Section:** [Location in new document]
- **Summary:** What was added and its operational significance
- **Action required:** Yes / No — [reason]

---

**DELETIONS**
Numbered list. Each entry includes:
- **Section:** [Location in old document]
- **Summary:** What was removed and whether staff may still be acting on it
- **Compliance risk:** Yes / No / Unclear

---

**EDITORIAL / COSMETIC CHANGES**
Single paragraph summarizing non-operational changes. No itemized list needed unless count exceeds 10, in which case provide a brief table.

---

**RECOMMENDED COMMUNICATION ACTIONS**
Bulleted list of concrete next steps, e.g.:
- Draft all-staff memo covering items #1, #3, and #5
- Schedule retraining session on [topic] before [effective date]
- Confirm intent of change in Section X with policy owner

---
