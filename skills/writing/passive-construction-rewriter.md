---
name: passive-construction-rewriter
description: >
  Detects passive voice constructions throughout a document and rewrites each instance into active, direct sentences. Use when someone says "make this more direct," asks to "remove passive voice," wants to "strengthen the writing," says "this feels weak or indirect," or requests "active voice throughout." Applies to any prose: emails, reports, essays, documentation, or creative writing.
category: writing
tags: [passive-voice, active-voice, editing, clarity, style]
author: community
---

# Passive Construction Rewriter

This skill scans a document for passive voice constructions and rewrites each one into active, subject-first sentences, returning both a marked-up view of changes and a clean final version.

## Detection and Rewriting Workflow

1. **Scan for passive constructions** — Identify all instances where the subject receives the action rather than performs it. Look for: "to be" verbs (is, was, were, are, been, being) paired with a past participle, and constructions where the agent is omitted or follows "by."

2. **Classify each instance** — Mark each passive construction as:
   - **Rewritable**: Agent is known or can be inferred from context
   - **Intentional/Keep**: Passive is stylistically appropriate (e.g., scientific writing, agent is truly unknown or irrelevant)

3. **Rewrite rewritable instances** — Move the agent to subject position and restructure the verb. Examples:
   - "The report was submitted by the team" → "The team submitted the report"
   - "Mistakes were made" → identify agent from context; if unknown, flag it
   - "The policy will be reviewed" → "Leadership will review the policy" (if agent can be inferred)

4. **Preserve meaning exactly** — Do not add, remove, or alter information. Only restructure sentence grammar.

5. **Flag ambiguous cases** — If the agent cannot be determined from context, flag the sentence with a note rather than guessing.

6. **Check for nominalization** — While scanning, also identify heavy nominalizations that compound the passive problem (e.g., "a decision was made" → "they decided") and rewrite those too.

## Output Format

Produce three clearly labeled sections:

**Section 1 — Change Log**
A numbered list of every passive construction found. Each entry includes:
- Original sentence (quoted)
- Rewritten sentence (quoted), or reason it was kept
- Label: `[REWRITTEN]`, `[KEPT — intentional]`, or `[FLAGGED — agent unknown]`

**Section 2 — Revised Document**
The full document with all rewrites applied. Clean prose, no markup, no annotations.

**Section 3 — Summary**
- Total passive constructions found
- Number rewritten
- Number kept
- Number flagged
- One-line assessment of the document's overall voice strength after edits
