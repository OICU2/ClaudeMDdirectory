---
name: survey-open-end-to-insight-card
description: >
  Analyzes raw open-ended survey responses and organizes them into structured insight cards grouped
  by emergent theme, frequency, and sentiment. Use when someone says "here are my survey responses,"
  asks to "find patterns in open-ended feedback," wants to "summarize what respondents said," needs
  to "turn survey comments into insights," or is trying to "make sense of qualitative survey data."
category: research
tags: [survey-analysis, qualitative-research, thematic-analysis, sentiment, ux-research]
author: community
---

# Survey Open-End to Insight Card

Converts a raw dump of open-ended survey responses into structured insight cards, each representing a distinct emergent theme with supporting quotes, frequency count, and sentiment — ready for stakeholder presentation or further research synthesis.

## Thematic Analysis Workflow

1. **Ingest responses** — Accept the raw responses as a list, paste, or file. If responses include metadata (respondent ID, segment, date), preserve it for filtering. If not, proceed with plain text.

2. **Normalize the data** — Strip duplicates or near-duplicates. Flag responses that are too vague to code (e.g., "N/A", "nothing") and note them as uncoded at the end.

3. **Extract atomic observations** — Break multi-part responses into individual observations. A single response may contribute to more than one theme.

4. **Identify emergent themes** — Do not use a predefined codebook. Let themes emerge from the language respondents actually use. Aim for 4–8 themes for datasets under 200 responses; scale up for larger sets. Merge themes that share >70% conceptual overlap.

5. **Score frequency** — Count how many unique respondents mention each theme, not how many times a theme appears in one response. Express as both a raw count and a percentage of total respondents.

6. **Assign sentiment** — Score each theme as Positive, Negative, Neutral, or Mixed based on the emotional valence of the responses coded to it. Use the ratio of positive-to-negative language to decide Mixed vs. a clear direction.

7. **Select representative quotes** — Pick 2–3 verbatim quotes per theme that best illustrate the theme. Prefer quotes that are specific, vivid, and representative — not outliers.

8. **Name each theme** — Use plain language that a non-researcher stakeholder can immediately understand. Avoid jargon or internal codes.

9. **Identify the top insight** — For each theme, write one sentence summarizing the actionable implication or the "so what."

## Output Format

Produce one **Insight Card** per theme using this structure:

---

### Insight Card: [Theme Name]

**Frequency:** [N respondents] ([X]% of total)
**Sentiment:** [Positive / Negative / Neutral / Mixed]
**Top Insight:** [One sentence — the actionable "so what" for this theme.]

**Representative Quotes:**
- "[Verbatim quote 1]"
- "[Verbatim quote 2]"
- "[Verbatim quote 3]" *(optional)*

**What respondents are saying:** [2–3 sentences describing the pattern in plain language, what drives it, and any notable sub-variations within the theme.]

---

After all cards, append:

**Summary Table**

| Theme | Frequency | % of Respondents | Sentiment |
|-------|-----------|------------------|-----------|
| [Theme 1] | [N] | [X%] | [Sentiment] |
| ... | | | |

**Uncoded Responses:** [Count and brief note explaining why they were excluded, e.g., "12 responses were too vague to assign a theme."]

**Methodology Note:** [1–2 sentences noting total response count, any segmentation applied, and that themes are emergent rather than predefined.]
