---
name: writing-cut-list-generator
category: writing
description: >
  Analyzes an over-length draft and produces a prioritized list of specific cuts to reach a target word count. Use when someone says their draft is too long, asks how to trim an article or essay, wants to cut words without losing meaning, needs to hit a word count limit, or says they need to tighten their writing.
tags: [editing, writing, word-count, revision, concision]
author: community
---

# Writing Cut List Generator

This skill analyzes a draft against a target word count and returns a ranked, actionable list of specific passages to cut or condense, ordered by impact and ease of removal.

## Workflow

1. **Identify the gap**: Calculate current word count minus target word count to determine how many words must be removed.

2. **Scan for redundancy**: Find sentences that restate a point already made within the same paragraph or nearby section. Flag exact duplicates and near-duplicates.

3. **Hunt filler phrases**: Locate phrases that add length without meaning — "it is important to note that," "in order to," "at the end of the day," "the fact that," throat-clearing introductions, and hedging qualifiers that weaken rather than clarify.

4. **Flag off-topic passages**: Identify any paragraph or sentence that does not directly support the central argument or purpose of the piece. Note why it is tangential.

5. **Identify over-explained sections**: Find places where the author explains a point, then re-explains it with an example, then summarizes it again. Mark the weakest of the three iterations for removal.

6. **Rank cuts by priority**:
   - **Priority 1 — Cut entirely**: Off-topic passages, full redundant paragraphs, throat-clearing openings
   - **Priority 2 — Condense**: Over-explained sections, multi-sentence examples reducible to one
   - **Priority 3 — Trim in-line**: Filler phrases, redundant adjectives, wordy constructions

7. **Verify the math**: Sum the estimated word savings across all recommended cuts. Confirm the total meets or exceeds the gap identified in Step 1.

## Output Format

Produce the following structure:

**Current word count**: [N]
**Target word count**: [N]
**Words to cut**: [N]

---

**Cut List** (ordered by priority and word savings)

| # | Location | Type | Quoted text or description | Recommended action | Est. words saved |
|---|----------|------|----------------------------|--------------------|------------------|
| 1 | Para 2, sentence 3 | Redundancy | "As mentioned above, X is…" | Delete sentence | 18 |
| 2 | Para 5 (entire) | Off-topic | Full paragraph on history of Y | Delete paragraph | 74 |
| 3 | Para 1, opening clause | Filler | "It goes without saying that…" | Delete clause | 6 |

*(Continue until cumulative savings meet the word gap)*

---

**Running total saved**: [N] words
**Projected new word count**: [N]

If the cuts overshoot or undershoot the target by more than 5%, note which items are optional to add or remove from the list to fine-tune the count.
