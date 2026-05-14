---
name: cross-site-process-gap-identifier
description: >
  Compares standard operating procedures across multiple locations or facilities to surface process deviations, inconsistencies, and alignment gaps. Use when someone says "our sites aren't doing this the same way," asks about why locations have different outcomes, or wants to standardize processes across facilities. Also activates when someone needs to audit multi-site compliance or identify which locations are drifting from the defined standard.
category: operations
tags: [process-improvement, multi-site, SOP, gap-analysis, standardization]
author: community
---

# Cross-Site Process Gap Identifier

This skill analyzes SOPs, process documents, or described workflows from multiple sites and produces a structured gap analysis that highlights deviations, missing steps, and alignment risks.

## Gap Identification Workflow

1. **Collect site inputs** — Request the SOP or process description for each site. Accept documents, pasted text, bullet-point summaries, or verbal descriptions. If only one site's process is provided, ask for the reference standard or "what it should look like."

2. **Establish the reference baseline** — Identify which version is the authoritative standard (corporate SOP, regulatory requirement, or highest-performing site). Label it clearly as the baseline. If none is designated, flag that ambiguity before proceeding.

3. **Map common process steps** — Extract the full sequence of steps from the baseline and create a master step list. Number each step for traceability.

4. **Compare each site against the baseline** — For every step in the master list, assess each site:
   - **Compliant**: Step matches baseline intent and execution
   - **Deviation**: Step exists but is performed differently (note how)
   - **Missing**: Step is absent entirely
   - **Added**: Site performs extra steps not in the baseline (note whether beneficial or risky)

5. **Assess deviation severity** — Rate each gap:
   - **Critical**: Safety, compliance, or quality risk
   - **Significant**: Likely to affect outcomes or customer experience
   - **Minor**: Cosmetic or low-impact difference

6. **Identify root cause categories** — Tag each gap with a likely cause: training gap, resource constraint, local workaround, outdated SOP, or undocumented regional adaptation.

7. **Prioritize remediation** — Rank gaps by severity × number of affected sites. Flag any gaps where a site's deviation may actually be superior to the baseline.

## Output Format

Produce a structured gap analysis report with the following sections:

**Summary Table** — One row per process step, columns for each site, cells showing Compliant / Deviation / Missing / Added with severity color coding (Critical / Significant / Minor).

**Gap Detail Log** — Numbered list of every non-compliant finding, each containing:
- Step reference number and name
- Affected site(s)
- What the baseline requires
- What the site actually does (or omits)
- Severity rating
- Root cause category
- Recommended action

**Alignment Score per Site** — A simple percentage showing how many steps each site executes in compliance with the baseline.

**Priority Remediation List** — Top gaps ranked by severity and breadth, with a one-line recommended fix for each.

**Reverse Gaps (Best Practice Candidates)** — Any site additions or deviations that outperform the baseline and should be considered for standard adoption.

Keep the report scannable. Use tables for comparison data and bullet points for recommendations. Length scales with the number of sites and steps — do not pad or compress to hit a target length.
