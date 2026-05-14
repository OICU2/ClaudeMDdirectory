---
name: research-output-version-diff-tracker
description: >
  Analyzes and compares successive drafts of research reports to surface meaningful changes between versions. Use when someone says "compare these two drafts," asks "what changed between report versions," wants to track how conclusions evolved, needs to see which evidence was added or dropped, or wants to audit shifts in confidence or certainty language across revisions.
category: research
tags: [research, versioning, diff, analysis, drafts]
author: community
---

# Research Output Version Diff Tracker

Compares two or more versions of a research report and produces a structured breakdown of changes to conclusions, evidence, and confidence levels so reviewers can quickly understand how the research evolved.

## Comparison Workflow

1. **Ingest both versions** — Accept Version A (older) and Version B (newer) as pasted text, uploaded files, or sequential messages. Label them clearly before proceeding.

2. **Extract key components from each version** — For each version, identify and list:
   - Primary conclusions and claims
   - Supporting evidence items (studies, data points, citations, examples)
   - Confidence language (e.g., "suggests," "demonstrates," "may," "conclusively shows," percentages, confidence intervals)
   - Caveats, limitations, and hedges
   - Recommendations or action items

3. **Run a structured diff across four dimensions:**
   - **Conclusions:** Which conclusions are new, removed, reworded, or reversed?
   - **Evidence:** Which sources or data points were added, dropped, or reinterpreted?
   - **Confidence shifts:** Where did certainty language increase or decrease? Flag reversals (e.g., "may cause" → "does not cause").
   - **Scope changes:** Were research questions narrowed, broadened, or redirected?

4. **Flag high-impact changes** — Mark any change where a conclusion reverses direction, a key piece of evidence disappears without explanation, or confidence shifts by more than one categorical level (e.g., speculative → definitive).

5. **Summarize the overall trajectory** — In 2–3 sentences, characterize whether the newer version is more cautious, more assertive, more narrow, or more comprehensive than the prior version.

## Output Format

Produce a report with the following sections:

---

**Version Diff Report**
- **Version A:** [label/date/filename]
- **Version B:** [label/date/filename]

**Conclusion Changes**
| Conclusion | Status | Notes |
|---|---|---|
| [conclusion text] | Added / Removed / Modified / Reversed | [brief note] |

**Evidence Changes**
| Evidence Item | Status | Notes |
|---|---|---|
| [source or data point] | Added / Removed / Reinterpreted | [brief note] |

**Confidence Shifts**
| Claim | Version A Language | Version B Language | Direction |
|---|---|---|---|
| [claim] | [hedge/certainty phrase] | [hedge/certainty phrase] | ↑ More certain / ↓ Less certain / ↔ Neutral |

**High-Impact Flags**
- [Bullet list of any reversals, unexplained evidence removals, or major confidence swings]

**Overall Trajectory**
[2–3 sentence summary of how the research position changed between versions]

---

Keep each table row concise (one line per item). Flag items with ⚠️ if they represent a reversal or unexplained removal. If versions are substantially identical, state that explicitly rather than generating empty tables.
