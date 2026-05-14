---
name: active-voice-conversion
description: >
  Scans a document or passage for passive voice constructions and rewrites each instance into active voice while preserving the original meaning and intent. Use when someone says "make this more active," asks to "remove passive voice," wants to "strengthen the writing," requests a "voice audit," or needs to "tighten up the prose." Ideal for editing drafts, academic papers, business documents, or any text where passive constructions weaken clarity.
category: writing
tags: [editing, grammar, style, passive-voice, rewriting]
author: community
---

# Active Voice Conversion

This skill identifies every passive voice construction in a given text and rewrites each one in active voice, preserving meaning while improving clarity and directness.

## Conversion Workflow

1. **Scan the full text** before making any changes. Identify all passive voice constructions — look for "to be" verbs (is, was, were, are, been, being) followed by a past participle, often with a "by [agent]" phrase that may be explicit or implied.

2. **Catalog each instance** with its line or sentence location so none are missed.

3. **Determine the agent** for each passive construction:
   - If the agent is stated ("The report was written by Sarah"), use it as the subject.
   - If the agent is implied or unknown, infer the most logical subject from context or use a general actor (e.g., "the team," "researchers," "we").
   - If no agent can be reasonably inferred, flag the sentence rather than guess incorrectly.

4. **Rewrite each sentence** by:
   - Moving the agent to the subject position
   - Converting the verb to active form
   - Restructuring the object accordingly
   - Keeping tense, tone, and register consistent with the surrounding text

5. **Preserve intentional passives**: Some passive constructions are stylistically correct or necessary (e.g., scientific writing norms, when the agent is deliberately unknown or irrelevant). Flag these and explain why they were left unchanged.

6. **Do not alter** meaning, facts, names, technical terms, or sentence intent during rewriting.

## Output Format

Produce two clearly labeled sections:

**Section 1 — Revised Text**
The full rewritten passage with all converted sentences integrated naturally. No inline markup or annotations — clean, readable prose.

**Section 2 — Change Log**
A numbered list of every change made, formatted as:

```
1. ORIGINAL: "The decision was made by the committee."
   REVISED:  "The committee made the decision."

2. ORIGINAL: "Errors were found in the report."
   REVISED:  "The auditor found errors in the report."
   NOTE:     Agent inferred from context.

3. ORIGINAL: "The samples were analyzed using standard protocols."
   FLAGGED:  Agent unknown; passive retained. Consider specifying who analyzed the samples.
```

If no passive voice is found, state: "No passive voice constructions detected. The text is already written in active voice."
