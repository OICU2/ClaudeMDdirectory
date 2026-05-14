---
name: sales-proposal-gap-detector
description: >
  Audits a sales proposal against prospect pain points and discovery notes to identify critical gaps that could cost a deal. Use when someone says "review my proposal before I send it," asks to "check if my proposal covers everything the prospect mentioned," or wants to "find weak spots in my sales deck." Also triggers when someone needs to "make sure my proposal addresses their objections" or wants to "audit my proposal against discovery notes."
category: sales
tags: [sales, proposals, gap-analysis, discovery, value-selling]
author: community
---

# Sales Proposal Gap Detector

Analyzes a sales proposal document against prospect pain points and discovery call notes to surface missing value statements, pricing justifications, and risk mitigations before the proposal reaches the prospect.

## Gap Detection Workflow

1. **Ingest source documents**: Request three inputs — (a) the proposal draft, (b) discovery call notes or CRM summary, and (c) any stated prospect pain points, success criteria, or budget constraints. If any are missing, ask before proceeding.

2. **Extract prospect requirements**: Parse discovery notes and pain points to build a structured list of:
   - Explicit pain points mentioned by the prospect
   - Business outcomes or success metrics the prospect named
   - Objections or concerns raised during discovery
   - Budget signals, approval processes, or risk sensitivities
   - Competitors or alternatives the prospect referenced

3. **Audit proposal coverage**: For each item extracted in Step 2, scan the proposal and classify it as:
   - **Covered**: Proposal directly addresses this point with a specific value statement
   - **Partially Covered**: Proposal touches on it but lacks specificity, proof, or quantification
   - **Missing**: Proposal does not address this point at all

4. **Flag pricing justifications**: Check whether each pricing tier, add-on, or fee is anchored to a stated prospect outcome or ROI figure. Flag any price element that floats without justification.

5. **Flag risk mitigations**: Identify concerns or objections from discovery notes and verify the proposal contains a corresponding risk mitigation — SLA, guarantee, case study, pilot option, or reference. Flag every unmitigated risk.

6. **Prioritize gaps by deal impact**: Rank each gap as **Critical** (likely to block the deal), **Moderate** (weakens differentiation), or **Minor** (polish opportunity). Base severity on how emphatically the prospect raised the issue in discovery.

## Output Format

Produce a structured gap report with the following sections:

**Summary**
- Total gaps found: [N] Critical / [N] Moderate / [N] Minor
- Overall readiness assessment: one sentence verdict

**Critical Gaps** (fix before sending)
For each: `[Gap Title]` — What the prospect said → What the proposal currently says → Recommended addition (1–2 sentences of specific language to add)

**Moderate Gaps** (strengthen differentiation)
Same format as Critical Gaps.

**Minor Gaps** (optional polish)
Bullet list only — brief description of each.

**Pricing Justification Audit**
Table with columns: Price Element | Linked Prospect Outcome | Status (Justified / Unjustified)

**Unmitigated Risks**
Bullet list: each prospect concern from discovery that has no corresponding mitigation in the proposal, with a one-line suggested mitigation approach.

Keep the report scannable. Use plain language. Do not rewrite the proposal — surface the gaps and give the seller precise guidance on what to add and where.
