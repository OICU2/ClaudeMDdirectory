---
name: passive-to-active-verb-replacement
description: >
  Scans a draft and replaces passive verb constructions with active alternatives while preserving
  the original meaning and tone. Use when someone says "make this more direct," asks to "strengthen
  the writing," wants to "remove passive voice," says "this feels weak or wordy," or needs to
  "tighten up a draft."
category: writing
tags: [passive-voice, editing, clarity, grammar, rewriting]
author: community
---

# Passive-to-Active Verb Replacement

This skill identifies passive voice constructions in a draft and rewrites each instance using active voice while keeping the original meaning, tone, and intent intact.

## Replacement Workflow

1. **Scan for passive constructions** — Identify all instances of "to be" verbs (is, are, was, were, been, being, be) followed by a past participle (e.g., "was written," "is being reviewed," "have been approved").
2. **Identify the true actor** — Determine who or what is performing the action. If the actor is missing from the original sentence, infer it from context or flag it as ambiguous.
3. **Reconstruct the sentence** — Move the actor to the subject position and place the action verb directly after it. Adjust surrounding words to maintain grammatical correctness.
4. **Preserve meaning and tone** — Do not change the intent, formality level, or nuance. If a passive construction is intentional (e.g., the actor is deliberately unknown or irrelevant), flag it rather than force an awkward rewrite.
5. **Handle exceptions explicitly** — Mark any passive instances that are better left passive with a brief inline note explaining why (e.g., "Actor unknown — passive retained").
6. **Review sentence rhythm** — After rewriting, confirm the revised sentence flows naturally and does not feel abrupt or stilted compared to surrounding text.

## Output Format

Produce two sections:

**Revised Draft**
The full rewritten text with all passive constructions replaced by active alternatives. Changed sentences should read naturally within the surrounding paragraphs.

**Change Log**
A numbered list of every modification made, formatted as:
- `[Original]` → `[Revised]` — one-line explanation of what changed and why.

If any passive constructions were intentionally retained, include them at the end of the Change Log under a **Retained (Passive Preserved)** subheading with a reason for each.

Keep the Change Log concise — one line per entry, no elaboration beyond what is necessary to explain the rewrite decision.
