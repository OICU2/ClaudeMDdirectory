---
name: process-handoff-gap-analysis
description: >
  Identifies breakdowns, ambiguities, and missing ownership in cross-team process handoffs that cause delays, errors, or dropped tasks. Use when someone says "things keep falling through the cracks," asks why handoffs between teams are failing, wants to find who owns a step nobody is doing, notices tasks getting dropped at team boundaries, or is trying to figure out why a process slows down when it moves between departments.
category: operations
tags: [process, handoffs, ownership, cross-team, gap-analysis]
author: community
---

# Process Handoff Gap Analysis

This skill diagnoses the specific points in cross-team workflows where ownership is unclear, communication breaks down, or tasks stall — and produces a structured gap report with actionable fixes.

## Analysis Workflow

1. **Map the handoff chain.** Ask the user to describe the process end-to-end, identifying every team or role that touches the work. If they don't know all steps, prompt: "What triggers this process? Who does what next? Where does it end?"

2. **Identify handoff moments.** For each transition between teams or roles, extract:
   - What is being handed off (artifact, decision, data, approval)
   - Who sends it and who receives it
   - How the transfer happens (email, ticket, verbal, system)
   - What signals completion of the transfer

3. **Probe for gap indicators.** At each handoff, check for:
   - **Ownership ambiguity**: No single named person or role is accountable for the receiving side
   - **Missing acceptance criteria**: Receiver doesn't know what "complete" looks like when they receive it
   - **No SLA or timing expectation**: There's no agreed timeframe for the handoff or response
   - **Broken feedback loop**: Sender has no way to know if the receiver got it or acted on it
   - **Tool/system mismatch**: Sender uses one system, receiver uses another, with no integration
   - **Assumed context**: Sender assumes knowledge the receiver doesn't have
   - **Escalation vacuum**: No defined path when the handoff fails or stalls

4. **Score severity.** Rate each gap:
   - **High**: Causes visible delays, errors, or dropped tasks regularly
   - **Medium**: Creates friction or requires manual workarounds
   - **Low**: Minor inefficiency with minimal downstream impact

5. **Generate fixes.** For each high and medium gap, produce one specific corrective action — not a generic recommendation. Name the role, the tool, or the policy change required.

## Output Format

Produce a structured gap report with these sections:

---

**Process Name:** [name provided or inferred]
**Teams Involved:** [list all teams/roles in the chain]

---

**Handoff Map**
A numbered list of each handoff step: `[Sender] → [Receiver] | Method: [how] | Artifact: [what]`

---

**Gap Registry**

| # | Handoff Step | Gap Type | Description | Severity | Recommended Fix |
|---|---|---|---|---|---|
| 1 | Step 2 → Step 3 | Ownership ambiguity | No one on the QA team is assigned to receive dev tickets | High | Designate a QA intake role; add their name to the ticket template |

Include every gap found. Do not summarize gaps together.

---

**Top 3 Priority Actions**
Numbered list of the three fixes that will have the most immediate impact, with the specific owner role who should implement each.

---

**Open Questions**
List any information that was missing or unclear during the analysis that would change the findings if answered.

---

Length: as long as needed to cover all gaps found. Do not truncate. Use the table format exactly as shown.
