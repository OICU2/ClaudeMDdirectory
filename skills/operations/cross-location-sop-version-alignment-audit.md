---
name: cross-location-sop-version-alignment-audit
description: >
  Identifies discrepancies between standard operating procedure versions in use across multiple sites to ensure consistent process execution. Use when someone says "our sites are running different SOP versions," asks about procedure version misalignment across locations, wants to audit which facilities are using outdated SOPs, needs to find where process inconsistencies are coming from, or is preparing for a multi-site compliance review.
category: operations
tags: [sop, compliance, multi-site, audit, version-control]
author: community
---

# Cross-Location SOP Version Alignment Audit

This skill systematically compares SOP versions across multiple facilities or teams to surface misalignments, flag outdated documents, and produce a prioritized remediation plan.

## Audit Workflow

1. **Collect version inventory** — Request a list of all locations and, for each, the SOP name, current version number in use, effective date, and the owner or department responsible. If data is incomplete, ask the user to fill gaps before proceeding.

2. **Identify the authoritative version** — Ask the user to confirm the master/current approved version for each SOP (version number + approval date). If no master exists, flag this as a governance gap requiring immediate resolution.

3. **Map discrepancies** — For each SOP, compare every site's version against the authoritative version. Classify each site as:
   - **Aligned** — exact version match
   - **Minor lag** — one version behind, released within the last 90 days
   - **Critical lag** — two or more versions behind, or any version older than 90 days
   - **Unknown** — version data missing or unverifiable

4. **Assess operational risk** — For each critical-lag or unknown instance, ask: Does this SOP govern safety, regulatory compliance, quality output, or customer impact? Assign risk tier (High / Medium / Low) based on the answer.

5. **Identify root cause patterns** — Look across all discrepancies for common causes: distribution failures, training bottlenecks, site-level customization drift, approval delays, or lack of a version control system.

6. **Build remediation priority list** — Rank sites and SOPs by risk tier, then by lag severity. Assign a recommended action to each: immediate update, scheduled rollout, re-training, or governance escalation.

7. **Flag systemic gaps** — If more than 30% of sites are misaligned on any single SOP, or if multiple SOPs share the same root cause, escalate as a systemic process failure rather than isolated incidents.

## Output Format

Produce a structured audit report with the following sections:

**Summary Block**
- Total SOPs audited
- Total locations audited
- Number of aligned / minor-lag / critical-lag / unknown instances
- Overall alignment rate (%)

**Discrepancy Table**
A table with columns: Location | SOP Name | Version in Use | Authoritative Version | Lag Status | Risk Tier | Root Cause (if known)

**Systemic Issues**
Bulleted list of patterns affecting multiple sites or SOPs, with a one-line explanation of each.

**Remediation Plan**
Numbered list sorted by priority (High risk first), each entry containing:
- Location + SOP name
- Required action
- Suggested owner
- Recommended completion timeframe (immediate / 30 days / 90 days)

**Governance Recommendations**
2–5 short bullet points addressing structural fixes (e.g., automated version distribution, mandatory acknowledgment workflows, centralized SOP registry).

Length: As long as the data requires; do not truncate tables or omit any discrepancy found.
