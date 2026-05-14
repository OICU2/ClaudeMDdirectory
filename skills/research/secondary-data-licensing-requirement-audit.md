---
name: secondary-data-licensing-requirement-audit
description: >
  Reviews a list of secondary data sources and documents their licensing restrictions, attribution requirements, and usage limitations. Use when someone says "audit our data sources," asks about "what are the licensing terms for these datasets," or wants to "check if we can use this data commercially," needs to "document attribution requirements for secondary data," or is asking "what are the usage restrictions on these sources."
category: research
tags: [licensing, data-governance, compliance, attribution, secondary-data]
author: community
---

# Secondary Data Licensing Requirement Audit

This skill systematically reviews a provided list of secondary data sources and produces a structured audit documenting each source's license type, attribution obligations, commercial use permissions, redistribution rules, and any special restrictions.

## Audit Workflow

1. **Collect the source list.** If the user has not provided a list of data sources, ask them to supply names, URLs, or identifiers before proceeding.

2. **For each data source, investigate and document:**
   - **License type** — Identify the specific license (e.g., CC BY 4.0, ODbL, proprietary, public domain, government open data).
   - **Attribution requirements** — Exact language or format required when citing the source, if any.
   - **Commercial use** — Whether commercial use is explicitly permitted, prohibited, or ambiguous.
   - **Redistribution/sharing rules** — Whether derived works or redistributions are allowed, and under what conditions (e.g., share-alike clauses).
   - **Modification rights** — Whether the data can be transformed, merged, or used to train models.
   - **Access restrictions** — Registration walls, API terms of service, data use agreements, or geographic limitations.
   - **Expiry or version notes** — Whether the license applies to a specific version or has a time limit.

3. **Flag risk levels** for each source:
   - 🟢 Low risk — permissive license, clear attribution, no commercial restriction.
   - 🟡 Medium risk — share-alike clauses, registration required, or ambiguous terms.
   - 🔴 High risk — proprietary, commercial use prohibited, or terms unclear/unavailable.

4. **Identify gaps.** Note any sources where license information could not be confirmed and recommend contacting the data provider directly.

5. **Summarize cross-cutting obligations.** After the per-source table, list any attribution statements that must appear in publications, dashboards, or products using these datasets.

## Output Format

Produce the following structure:

---

### Secondary Data Licensing Audit

**Date:** [date of audit]
**Sources reviewed:** [count]

---

#### Per-Source Table

| # | Source Name | License Type | Commercial Use | Attribution Required | Redistribution | Modification | Risk Level | Notes |
|---|-------------|--------------|---------------|----------------------|----------------|--------------|------------|-------|
| 1 | [Name/URL]  | [License]    | Yes / No / Unclear | Yes / No / Conditional | Allowed / Prohibited / Conditional | Allowed / Restricted | 🟢/🟡/🔴 | [Any caveats] |

---

#### Required Attribution Statements

List each attribution string that must be used verbatim or in substance when publishing work that relies on these datasets.

---

#### Sources Requiring Follow-Up

List any sources where license terms were unavailable or ambiguous, with recommended next steps (e.g., contact data owner, review DUA, check API ToS).

---

#### Summary Risk Assessment

One short paragraph summarizing overall compliance posture, highest-risk sources, and any blocking issues for the intended use case.
