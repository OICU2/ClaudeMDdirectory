---
name: verbatim-response-clustering
description: >
  Analyzes open-ended survey or interview responses and groups them into meaningful thematic clusters to support qualitative research workflows. Use when someone says "I have a bunch of open-ended responses to organize," asks about "finding patterns in verbatim feedback," or wants to "cluster survey comments," "code qualitative responses," or "make sense of free-text answers." Outputs labeled clusters with representative quotes and frequency signals to accelerate analysis.
category: research
tags: [qualitative-research, survey-analysis, thematic-coding, text-clustering, ux-research]
author: community
---

# Verbatim Response Clustering

This skill takes raw open-ended survey or interview responses and organizes them into labeled thematic clusters, giving researchers a structured starting point for qualitative coding and pattern identification.

## Clustering Workflow

1. **Ingest responses** — Accept the verbatim responses as pasted text, a list, or CSV column. If format is ambiguous, ask the user to clarify the delimiter or confirm one response per line.

2. **Scan for volume and scope** — Count total responses. If fewer than 10, note that clusters may overlap heavily. If more than 200, warn that a sample may be used unless the user confirms full processing.

3. **Identify recurring themes** — Read through all responses and extract recurring ideas, complaints, suggestions, emotions, or topics. Look for both explicit repetition and semantic similarity (e.g., "too expensive" and "cost is a barrier" belong together).

4. **Form clusters** — Group responses into 4–10 thematic clusters depending on volume and diversity. Each cluster must have:
   - A short, descriptive label (3–6 words)
   - A one-sentence summary of what respondents in this cluster are expressing
   - 2–4 representative verbatim quotes pulled directly from the input

5. **Handle outliers** — Responses that do not fit any cluster go into a clearly labeled **Miscellaneous / Unclassified** group at the end.

6. **Flag ambiguous responses** — If a response could reasonably belong to two clusters, assign it to the most likely one and note the ambiguity with a brief inline comment.

7. **Offer iteration** — After presenting clusters, ask: "Would you like to merge any clusters, rename labels, or recluster around a specific theme?"

## Output Format

Produce a structured report with the following sections:

**Summary Line**
`X responses clustered into Y themes.`

**Cluster Blocks** (repeat for each cluster):
```
## Cluster [N]: [Short Label]
Summary: [One sentence describing what this group of respondents is saying]
Response count: [N]
Representative quotes:
- "[Verbatim quote 1]"
- "[Verbatim quote 2]"
- "[Verbatim quote 3]"
```

**Miscellaneous / Unclassified** (if applicable):
```
## Unclassified Responses
- "[Response that did not fit a theme]"
```

**Closing Prompt**
End with one line offering to refine, merge, or re-label clusters based on user feedback.

Use plain Markdown throughout. Do not add interpretation beyond what the responses support. Keep cluster labels neutral and descriptive, not evaluative.
