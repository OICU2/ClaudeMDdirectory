---
name: source-paraphrase-accuracy-checker
category: writing
description: >
  Compares paraphrased passages against their original sources to identify meaning distortions, omitted nuance, or unintentional misrepresentation. Use when someone says "check if my paraphrase is accurate," asks whether they've changed the meaning of a source, wants to verify their restatement is faithful to the original, needs to confirm a summary doesn't misrepresent the author, or wonders if their paraphrase introduced bias.
tags: [paraphrasing, accuracy, fact-checking, writing, research]
author: community
---

# Source Paraphrase Accuracy Checker

This skill analyzes a paraphrased passage against its original source to detect meaning distortions, missing qualifications, added implications, or tone shifts that could misrepresent the source.

## Analysis Workflow

1. **Identify core claims**: Extract the main assertions from the original source passage — including any qualifiers, scope limitations, hedging language (e.g., "may," "suggests," "in some cases"), and causal relationships.

2. **Map paraphrase to source**: For each claim in the paraphrase, locate its corresponding element in the original. Flag any paraphrase content with no source counterpart.

3. **Check for these specific distortion types**:
   - **Scope expansion**: Paraphrase generalizes beyond what the source states (e.g., source says "some studies" → paraphrase says "research shows")
   - **Qualifier removal**: Hedging language dropped, making tentative claims sound definitive
   - **Causal inflation**: Correlation stated as causation, or weak association presented as strong link
   - **Tone shift**: Neutral source made to sound alarming, dismissive, or promotional
   - **Omission of counterpoints**: Source acknowledges exceptions or opposing evidence that the paraphrase ignores
   - **Added implications**: Paraphrase introduces conclusions the source does not draw

4. **Assess overall fidelity**: Rate the paraphrase as Accurate, Partially Accurate, or Distorted based on the number and severity of issues found.

5. **Suggest corrections**: For each flagged issue, provide a specific revised phrase that restores fidelity without requiring the user to revert to the original wording.

## Output Format

Produce a structured report with the following sections:

**Fidelity Rating**: [Accurate / Partially Accurate / Distorted] — one sentence explaining the rating.

**Issues Found**: A numbered list. Each item includes:
- Issue type (from the distortion categories above)
- Original source wording (quoted)
- Paraphrase wording (quoted)
- Why it distorts meaning (1–2 sentences)
- Suggested correction (rewritten phrase)

**If no issues found**: State "No meaning distortions detected" and briefly confirm which key claims were accurately preserved.

Keep the report concise — flag real problems only, not stylistic differences. Do not flag synonyms or structural rewording that preserve meaning faithfully.
