---
name: content-objection-preemption-inserter
description: >
  Analyzes a draft piece of writing to identify claims that readers are likely to
  challenge, doubt, or dismiss, then inserts targeted preemptive counterargument
  passages directly into the text at the most effective locations. Use when someone
  says "my argument feels weak," asks to "make this more persuasive," wants to
  "anticipate pushback," needs to "strengthen the case," or is worried "readers
  won't believe this."
category: writing
tags: [persuasion, argumentation, editing, rhetoric, content-strategy]
author: community
---

# Objection Preemption Inserter

This skill scans a draft for vulnerable claims, predicts the most likely reader objections to each, and weaves preemptive counterargument passages into the text so skeptical readers are addressed before they disengage.

## Workflow

1. **Read the full draft** to understand the central argument, audience, and tone.

2. **Identify objection-prone claims** — look for:
   - Absolute or superlative statements ("always," "best," "never")
   - Statistics or data presented without source context
   - Counterintuitive assertions that contradict common belief
   - Recommendations that require effort, cost, or behavior change
   - Causal claims that could be disputed as correlation
   - Generalizations about groups, industries, or trends

3. **For each flagged claim**, generate the single most likely objection a skeptical but fair reader would raise. Focus on the objection that, if unaddressed, would cause the reader to stop trusting the piece.

4. **Draft a preemptive passage** for each objection that:
   - Acknowledges the objection directly and honestly ("You might wonder…", "This seems to contradict…", "A common concern here is…")
   - Provides a concise, evidence-grounded rebuttal or qualification
   - Matches the existing tone and voice of the draft
   - Runs 1–3 sentences unless the objection is complex

5. **Determine insertion point** — place each passage:
   - Immediately after the claim it defends, or
   - At a natural paragraph break before skepticism would peak
   - Never at the opening or closing unless the objection is foundational

6. **Preserve the original draft's structure** — do not rewrite existing sentences unless integrating a passage requires a minor transition fix.

7. **Cap total insertions at 5** — prioritize the objections most likely to cause reader dropout or distrust.

## Output Format

Return the full revised draft with preemptive passages inserted inline. Each inserted passage should be clearly marked with a comment tag on a preceding line in this format:

```
<!-- OBJECTION PREEMPTION: [one-line summary of the objection being addressed] -->
```

After the revised draft, include a section titled **Objection Map** formatted as a numbered list:

```
## Objection Map

1. **Claim:** [exact quoted phrase from original]
   **Predicted objection:** [one sentence]
   **Inserted response:** [the passage you added, quoted]
   **Location:** [paragraph number or section heading]
```

Keep the Objection Map concise — one entry per insertion, no commentary beyond the fields above.
