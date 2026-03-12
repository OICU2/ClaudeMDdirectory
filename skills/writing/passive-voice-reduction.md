---
name: passive-voice-reduction
category: writing
description: >
  Scans a document or passage for passive voice constructions, flags each instance with its location, and rewrites them in active voice while preserving the original meaning and tone. Use when someone says "my writing feels weak," asks to "make this more direct," wants to "clean up passive voice," says "this sounds too formal or distant," or needs to "strengthen the prose." Ideal for academic papers, business documents, blog posts, and any writing that benefits from clarity and directness.
tags: [passive-voice, editing, clarity, grammar, rewriting]
author: community
---

# Passive Voice Reduction

This skill identifies every passive voice construction in a document, explains why each weakens the writing, and delivers an active voice rewrite — preserving the author's intent, tone, and meaning throughout.

## Detection and Rewriting Workflow

1. **Scan the full text** — Read the entire passage before flagging anything. Note the overall tone, formality level, and subject matter so rewrites stay consistent.

2. **Identify passive constructions** — Flag any sentence matching the pattern: form of "to be" (is, was, were, are, been, being, be) + past participle, especially when the agent (the doer) is absent or buried in a "by" phrase.
   - Flag: "The report was written by the intern."
   - Flag: "Mistakes were made."
   - Flag: "The policy has been updated."

3. **Note intentional or acceptable passive** — Not all passive voice is wrong. Preserve it when:
   - The agent is genuinely unknown ("The building was constructed in 1902.")
   - The subject is the focus and the agent is irrelevant ("The suspect was arrested.")
   - Scientific or legal convention requires it
   - Changing it would alter emphasis or meaning

4. **Rewrite each flagged instance** — Identify the true agent (who or what performs the action), move it to subject position, and convert the verb to active form.
   - Before: "The proposal was rejected by the committee."
   - After: "The committee rejected the proposal."

5. **Check for hidden agents** — When no agent appears ("Errors were found"), determine the most logical actor from context and insert it. If the agent is truly unknowable and the passive is necessary, leave it and note why.

6. **Preserve tone and register** — A formal legal document gets formal active rewrites. A casual blog post gets conversational ones. Do not simplify vocabulary or restructure sentences beyond the passive-to-active change.

7. **Verify meaning is intact** — After rewriting, confirm the sentence still conveys the exact same information and nuance as the original.

## Output Format

Produce the response in three sections:

**Section 1 — Summary**
One short paragraph stating: total sentence count, number of passive constructions found, number flagged for rewriting, and number intentionally preserved with a brief reason.

**Section 2 — Flagged Instances**
A numbered list, one entry per passive construction:
```
[#]. Original: "[exact original sentence]"
    Issue: [one sentence explaining what makes it passive and why it weakens the writing]
    Rewritten: "[active voice version]"
    Agent added: [Yes/No — if Yes, state what agent was inserted and why]
```

**Section 3 — Revised Full Text**
The complete original text with all flagged passive constructions replaced by their active rewrites. Preserved passives remain unchanged. No other edits are made.
