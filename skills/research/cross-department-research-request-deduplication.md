---
name: cross-department-research-request-deduplication
description: >
  Analyzes and compares research requests from multiple teams or departments to surface overlapping questions, redundant efforts, and consolidation opportunities. Use when someone says "we have multiple teams asking similar questions," asks about "avoiding duplicate research efforts," wants to "consolidate research requests across departments," mentions "teams are running parallel studies," or needs to "audit our research backlog for overlap." Produces a structured comparison with clear recommendations for merging, sequencing, or splitting requests.
category: research
tags: [research-ops, deduplication, collaboration, efficiency, cross-functional]
author: community
---

# Cross-Department Research Request Deduplication

This skill ingests research requests from multiple teams, identifies semantic and methodological overlap, and recommends consolidation strategies to eliminate redundant effort.

## Deduplication Workflow

**Step 1 — Intake and Normalize Requests**
- Collect all research requests as structured items: requestor team, core question, target audience/segment, desired timeline, and intended use case.
- If requests are unstructured (e.g., Slack messages, emails), extract and restate each as a single clear research question before proceeding.
- Assign a short ID to each request (e.g., R1, R2, R3).

**Step 2 — Identify Overlap Dimensions**
For each pair of requests, evaluate overlap across four dimensions:
- **Population overlap**: Are they studying the same users, customers, or segments?
- **Question overlap**: Do they ask the same or closely related questions?
- **Methodology overlap**: Would the same research method (survey, interview, usability test) satisfy both?
- **Timing overlap**: Are the timelines close enough to combine without delaying either team?

Score each dimension as: Full / Partial / None.

**Step 3 — Classify Each Pair**
- **Full duplicate**: Same population, same question, same method → recommend merging into one effort with shared ownership.
- **High overlap**: 3 of 4 dimensions match → recommend consolidating with a shared core and team-specific add-ons.
- **Partial overlap**: 2 of 4 dimensions match → recommend coordinating (share findings, align timing, avoid contradictory framing).
- **Low/no overlap**: 0–1 dimensions match → flag as independent; no action needed.

**Step 4 — Draft Consolidation Recommendations**
For each merge or coordination recommendation:
- Name the requests being combined (e.g., R2 + R4).
- State the shared core question that satisfies both teams.
- Note any team-specific questions that can be added as modules.
- Identify a suggested lead team and stakeholder contact for each consolidated effort.
- Flag any conflicts (e.g., conflicting timelines, incompatible audiences) that need resolution before consolidating.

**Step 5 — Produce a Deduplication Summary**
Compile all findings into the output format below.

## Output Format

Produce a structured report with these sections:

**1. Request Inventory Table**
A markdown table with columns: ID | Team | Core Question | Target Audience | Timeline | Method (if known)

**2. Overlap Matrix**
A markdown table showing each request pair and its overlap score across the four dimensions (Population / Question / Method / Timing), plus a Classification (Full Duplicate / High / Partial / Independent).

**3. Consolidation Recommendations**
A numbered list of recommendations. Each entry includes:
- Requests involved (IDs)
- Recommended action (Merge / Coordinate / Independent)
- Unified research question (for merges)
- Suggested lead team
- Any unresolved conflicts or risks

**4. Summary Stats**
- Total requests reviewed
- Number of full duplicates found
- Number of consolidation opportunities
- Estimated redundant efforts eliminated (expressed as number of separate studies avoided)

Length: Scale with number of requests. For 1–5 requests, the full output should fit in one screen. For 6+ requests, the overlap matrix may be long but recommendations should remain concise (2–4 sentences each).
