---
name: authority-signal-insertion
category: writing
description: >
  Analyzes a draft and identifies specific locations where data points, expert citations, statistics,
  case studies, or credibility markers are missing or weak. Use when someone says "make this more
  authoritative," asks "how do I sound more credible," wants to "strengthen their argument with
  evidence," needs to "back up their claims," or says "this feels too opinion-based."
tags: [writing, editing, credibility, citations, persuasion]
author: community
---

# Authority Signal Insertion

This skill scans a draft for credibility gaps and returns a prioritized list of exact insertion points with specific recommendations for what type of authority signal belongs there and why.

## Authority Gap Analysis Workflow

1. **Read the full draft** and identify every claim, assertion, or recommendation that relies on the author's opinion alone.

2. **Classify each gap** by type:
   - **Statistical gap** — a claim that would be stronger with a number, percentage, or study result
   - **Expert citation gap** — an assertion where a named authority, researcher, or institution would add weight
   - **Case study gap** — a general point that needs a real-world example or named success story
   - **Credential gap** — a place where the author's own experience or qualifications should be stated
   - **Consensus gap** — a claim that would benefit from citing industry standards, reports, or surveys

3. **Rank gaps by impact** — prioritize the three to five locations where missing evidence most undermines the reader's trust or the argument's logical chain.

4. **For each gap, produce a targeted recommendation** that includes:
   - The exact sentence or passage where the signal should be inserted (quoted from the draft)
   - The type of authority signal needed
   - A specific suggestion for what to look for (e.g., "Find a peer-reviewed study on X from the last five years" or "Cite a named industry analyst or Gartner report")
   - A placeholder rewrite showing how the sentence reads after the signal is added

5. **Do not rewrite the entire draft** — only touch the flagged locations.

## Output Format

Return a structured report with the following sections:

**Authority Gap Report**

- **Overall credibility assessment** (2–3 sentences on the draft's current authority level and biggest vulnerability)

Then for each gap, use this block:

---
**Gap [number]: [Gap Type]**
Original passage: "[quoted text]"
Problem: [one sentence explaining why this weakens credibility]
Signal needed: [specific type and suggested source or search direction]
Suggested rewrite: "[revised sentence with placeholder signal inserted, e.g., 'According to [Source], X%...']"
---

End with a **Priority Action** line naming the single highest-impact fix the author should tackle first.

Length: as many gaps as genuinely exist, but cap the report at eight gaps to keep it actionable.
