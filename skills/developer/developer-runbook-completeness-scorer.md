---
name: developer-runbook-completeness-scorer
description: >
  Evaluates existing runbooks against a standardized checklist of required sections and identifies gaps that would leave on-call engineers without guidance during incidents. Use when someone says "review this runbook," asks about "runbook quality" or "is this runbook complete," or wants to "audit our runbooks" or "check if our runbook covers everything." Produces a scored report with specific missing sections and actionable recommendations.
category: developer
tags: [runbook, incident-response, on-call, documentation, sre]
author: community
---

# Runbook Completeness Scorer

Scores an existing runbook against a required-sections checklist and flags gaps that would leave on-call engineers without guidance during incidents.

## Evaluation Checklist

Assess the provided runbook against each of the following required sections. Mark each as PRESENT, PARTIAL, or MISSING.

**Critical Sections (each worth 20 points):**
1. **Service Overview** — What the service does, its criticality tier, and downstream dependencies
2. **Alert Context** — What triggered the alert, what it means, and typical causes
3. **Immediate Triage Steps** — Ordered steps an on-call engineer must take within the first 5 minutes
4. **Escalation Path** — Named roles or teams to page, with contact methods and escalation thresholds

**Important Sections (each worth 10 points):**
5. **Diagnosis Commands** — Exact commands, queries, or dashboard links to assess severity
6. **Remediation Steps** — Step-by-step fix procedures for each known failure mode
7. **Rollback Procedure** — How to revert a bad deployment or configuration change
8. **Verification Steps** — How to confirm the issue is resolved
9. **Communication Template** — Status page or stakeholder update language
10. **Post-Incident Actions** — Links to incident review process or follow-up ticket creation

**Scoring:**
- PRESENT = full points
- PARTIAL = half points
- MISSING = 0 points
- Maximum score: 100 points

**Gap Severity Classification:**
- Score 80–100: Pass — minor gaps only
- Score 60–79: Warning — runbook usable but has risky gaps
- Score 0–59: Fail — runbook will leave engineers stranded during incidents

## Evaluation Process

1. Read the full runbook content provided by the user
2. Evaluate each of the 10 checklist items against the actual content
3. Assign PRESENT / PARTIAL / MISSING with a one-line justification for each
4. Calculate the total score
5. Identify the top 3 highest-impact gaps (MISSING critical sections first, then MISSING important sections)
6. For each gap, write a specific remediation recommendation — not generic advice, but content the user should add

## Output Format

Produce a structured report with the following sections:

**Header:**
- Runbook name/file (as provided or inferred)
- Overall score: `XX/100`
- Status: PASS / WARNING / FAIL (with color-coded emoji: ✅ / ⚠️ / ❌)

**Section Scorecard:**
A table with columns: Section | Status | Score | Notes
One row per checklist item. Notes column explains why a section is PARTIAL or MISSING in 10 words or fewer.

**Top Gaps (Priority Fixes):**
Numbered list of the 3 most critical gaps. For each:
- Gap name
- Why it matters during an incident (1 sentence)
- Specific content to add (2–4 bullet points of actual guidance, not placeholders)

**Summary:**
Two sentences: overall assessment and single most important action to take before this runbook goes into production.
