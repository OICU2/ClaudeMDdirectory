---
name: ops-training-gap-assessment
description: >
  Analyzes team skill inventories against role-specific competency requirements to surface training
  gaps, coverage risks, and prioritized development recommendations. Use when someone says "our team
  is missing skills," asks about training priorities, wants to assess operational readiness, needs to
  identify coverage risks on the team, or is planning a workforce development program.
category: operations
tags: [training, skills, workforce-development, competency-mapping, operational-readiness]
author: community
---

# Ops Training Gap Assessment

This skill compares current team member skill sets against required competencies for each operational role to identify training gaps, coverage risks, and recommended priorities.

## Assessment Workflow

1. **Collect Role Requirements**
   - List each operational role (e.g., Incident Commander, On-Call Engineer, Release Manager)
   - For each role, enumerate required competencies with proficiency levels: Awareness / Practitioner / Expert
   - Note which competencies are critical-path (team cannot operate safely without coverage)

2. **Inventory Current Skills**
   - For each team member, record their current proficiency level per competency
   - Flag self-reported vs. verified skills
   - Note tenure, certifications, and recent hands-on experience where available

3. **Map Gaps**
   - Cross-reference role requirements against team inventory
   - Identify: (a) competencies with zero coverage, (b) single points of failure (only one person qualified), (c) competencies below required proficiency level
   - Calculate a coverage ratio per competency: (# qualified members) / (# required minimum)

4. **Score and Prioritize Gaps**
   - Assign each gap a risk score using: Criticality (High/Med/Low) × Coverage Ratio
   - Rank gaps from highest risk to lowest
   - Flag any gaps that block current operational commitments immediately

5. **Recommend Training Actions**
   - For each top-ranked gap, specify: training type (formal course, shadowing, hands-on drill, documentation review), target audience, estimated time investment, and success criteria
   - Group recommendations into: Urgent (0–30 days), Near-term (30–90 days), Planned (90+ days)
   - Identify internal subject matter experts who can cross-train peers to reduce cost and time

6. **Identify Bus Factor Risks**
   - Flag any role where fewer than 2 people hold Expert-level competency
   - Note team members who are sole holders of critical knowledge and recommend knowledge transfer plans

## Output Format

Produce a structured report with the following sections:

**1. Role–Competency Matrix**
A table with rows = competencies, columns = team members, cells = proficiency level (color-coded or labeled: None / Awareness / Practitioner / Expert). Highlight critical gaps in bold.

**2. Gap Summary Table**
| Competency | Required Level | Current Coverage | Risk Score | Gap Type |
|---|---|---|---|---|
One row per identified gap, sorted by Risk Score descending.

**3. Coverage Risk Alerts**
Bullet list of immediate risks (zero coverage or single point of failure on critical competencies), each with a one-line impact statement.

**4. Prioritized Training Recommendations**
Grouped by urgency tier (Urgent / Near-term / Planned). Each recommendation includes: competency, target team members, recommended training action, estimated effort, and success criteria.

**5. Bus Factor Summary**
List of roles/competencies with dangerously low redundancy and suggested mitigation steps.

Total length: concise enough to fit a working session — typically 1–3 pages depending on team size. Use tables and bullets; avoid prose paragraphs in the data sections.
