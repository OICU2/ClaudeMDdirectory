---
name: technical-spike-document-builder
category: developer
description: >
  Produces a structured spike investigation document that defines the problem space, evaluates approach options, identifies risks, and recommends a time-box for resolving an unknown technical decision. Use when someone says "we need to spike this out," asks how to investigate an unfamiliar technology, or wants to document a technical unknown before committing to an implementation. Also activates when someone needs to justify research time to stakeholders or wants to compare architectural options before starting a feature.
tags: [spike, research, architecture, decision-making, documentation]
author: community
---

# Technical Spike Document Builder

Generates a complete, structured spike investigation document when a team needs to explore a technical unknown before committing to an implementation approach.

## Spike Document Workflow

1. **Clarify the unknown**: Ask for the core question the spike must answer. If not provided, infer it from context and state your assumption explicitly.

2. **Define the problem statement**: Write a crisp 2–4 sentence description of what is unknown, why it matters, and what decision depends on resolving it.

3. **Establish success criteria**: List 3–5 specific, measurable outcomes that would mean the spike is complete (e.g., "We can demonstrate a working proof-of-concept that handles 10k concurrent connections").

4. **Enumerate approach options**: For each candidate approach (minimum 2, maximum 5):
   - Name and briefly describe the approach
   - List pros and cons (2–4 each)
   - Note any hard blockers or prerequisites

5. **Identify risks and unknowns**: List technical, organizational, and dependency risks. Flag anything that could invalidate the spike findings.

6. **Recommend a time-box**: Suggest a specific duration (e.g., 2 days, 1 sprint) with justification. Include a mid-point check-in milestone.

7. **Define deliverables**: Specify exactly what artifacts the spike should produce (e.g., proof-of-concept code, benchmark results, written recommendation, ADR draft).

8. **Assign ownership**: Prompt for or suggest who should run the spike and who reviews the output.

## Output Format

Produce a Markdown document with the following sections in order:

```
# Spike: [Concise Title]

**Date:** [today's date]
**Status:** Draft
**Owner:** [name or TBD]
**Reviewer(s):** [names or TBD]

## Problem Statement
[2–4 sentences describing the unknown and its impact]

## The Core Question
> [Single bolded question the spike must answer]

## Success Criteria
- [ ] [Criterion 1]
- [ ] [Criterion 2]
- [ ] [Criterion 3]

## Approach Options

### Option 1: [Name]
**Description:** ...
**Pros:** ...
**Cons:** ...
**Blockers:** ...

### Option 2: [Name]
...

## Risks and Unknowns
| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| ...  | High/Med/Low | High/Med/Low | ... |

## Time-Box Recommendation
**Duration:** [X days / X sprints]
**Justification:** [1–2 sentences]
**Mid-point check-in:** [Date or milestone]

## Deliverables
- [ ] [Artifact 1]
- [ ] [Artifact 2]

## Out of Scope
- [What this spike explicitly will NOT decide]

## References
- [Links, prior art, related tickets]
```

The document should be self-contained enough that a developer with no prior context can pick it up and begin work. Keep total length under 600 words excluding the risks table. Use plain language; avoid jargon unless domain-specific terms are necessary.
