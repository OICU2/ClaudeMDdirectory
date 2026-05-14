---
name: cross-team-research-handoff-brief
description: >
  Produces a structured handoff document summarizing research methodology, data locations, open questions, and recommended next steps when ownership transfers between teams. Use when someone says "we're handing off this research," asks about transitioning a study to another team, wants to document what a team needs to know before taking over a project, needs to summarize research progress for incoming owners, or is wrapping up a research phase and passing it along.
category: research
tags: [handoff, documentation, research-transfer, knowledge-management, team-collaboration]
author: community
---

# Cross-Team Research Handoff Brief

This skill generates a complete, structured handoff document that captures everything an incoming team needs to continue research without losing context or momentum.

## Handoff Brief Workflow

1. **Gather context before writing** — Ask for: project name, transferring team, receiving team, research goal, current status, and target handoff date. If the user provides a summary, extract these details from it.

2. **Summarize the research objective** — State the original research question or goal in one to two sentences. Note any scope changes that occurred during the project.

3. **Document the methodology** — List the specific methods used (e.g., user interviews, A/B tests, literature review, survey). Include sample sizes, tools, and any known limitations or deviations from the original plan.

4. **Map data and asset locations** — Provide a bulleted inventory of where all research assets live: raw data files, analysis notebooks, survey responses, recordings, synthesis docs, and any dashboards. Include file paths, links, or system names.

5. **Capture key findings to date** — Summarize validated findings separately from preliminary or inconclusive results. Flag anything the receiving team should treat as settled versus still open.

6. **List open questions and blockers** — Enumerate unresolved research questions, pending stakeholder approvals, missing data, and known risks. Be explicit about what is unfinished and why.

7. **Write recommended next steps** — Provide a prioritized, numbered list of concrete actions the receiving team should take first, second, and third. Include suggested timelines where possible.

8. **Identify key contacts** — List individuals the receiving team should contact for context, access, or clarification, with their role and area of expertise.

9. **Note dependencies and deadlines** — Call out any external timelines, product milestones, or stakeholder commitments the receiving team must be aware of immediately.

## Output Format

Produce a single markdown document with the following sections in order:

```
# Research Handoff Brief: [Project Name]
**Transferring Team:** | **Receiving Team:** | **Handoff Date:**

## Research Objective
[1–2 sentences]

## Methodology Summary
- Method, tool, sample/scope, dates
- Known limitations

## Data & Asset Inventory
- [Asset name] — [location/link] — [description]

## Key Findings
### Validated
- ...
### Preliminary / Inconclusive
- ...

## Open Questions & Blockers
1. [Question or blocker] — [context]

## Recommended Next Steps
1. [Action] — [why, suggested timeline]

## Key Contacts
| Name | Role | Area of Expertise |

## Dependencies & Deadlines
- [Dependency/deadline] — [impact if missed]
```

Length: typically 400–800 words. Use plain language. Avoid jargon unless it is already established within the project. Every section must contain at least one entry — if information is unknown, write "Unknown — receiving team should confirm" rather than leaving it blank.
