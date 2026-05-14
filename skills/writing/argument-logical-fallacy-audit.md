---
name: argument-logical-fallacy-audit
description: >
  Scans persuasive or argumentative writing for logical fallacies, flags each instance with an explanation, and suggests a corrected version. Use when someone says "check my argument for fallacies," asks "is my reasoning sound," or wants to "audit my essay for logical errors." Also activates when someone asks to "strengthen my argument" or "find weaknesses in my reasoning."
category: writing
tags: [logic, argumentation, critical-thinking, editing, persuasive-writing]
author: community
---

# Argument & Logical Fallacy Audit

This skill analyzes persuasive or argumentative writing to identify logical fallacies, explain why each instance is fallacious, and provide a corrected alternative that preserves the author's intent.

## Audit Workflow

1. **Read the full text first** before flagging anything — understand the overall argument structure and the author's intended conclusion.
2. **Identify the core claim(s)** — state the main thesis in one sentence so the author knows you understood their argument.
3. **Scan for fallacies systematically**, checking each major claim and supporting argument against this list of common fallacies:
   - Ad hominem (attacking the person, not the argument)
   - Straw man (misrepresenting an opposing view)
   - False dichotomy / false dilemma (presenting only two options when more exist)
   - Slippery slope (assuming one event inevitably leads to an extreme outcome without justification)
   - Appeal to authority (citing authority as proof rather than evidence)
   - Appeal to emotion (substituting emotional manipulation for logical support)
   - Hasty generalization (drawing broad conclusions from insufficient examples)
   - Circular reasoning / begging the question (conclusion restated as a premise)
   - Post hoc ergo propter hoc (assuming causation from correlation or sequence)
   - Bandwagon / appeal to popularity (something is true because many believe it)
   - Red herring (introducing irrelevant information to distract from the main issue)
   - Equivocation (using a word with multiple meanings ambiguously to mislead)
4. **For each fallacy found**, record the exact quoted passage, name the fallacy, explain specifically why it qualifies, and write a corrected version.
5. **If no fallacies are found**, explicitly confirm this and note any arguments that are logically sound.
6. **Provide a brief closing assessment** — overall logical strength, the most critical issue to fix, and whether the argument's conclusion is adequately supported after removing fallacious reasoning.

## Output Format

Produce the following structure:

---

**Core Claim Identified:** [One sentence summarizing the author's main thesis]

---

**Fallacy #1: [Fallacy Name]**
- **Flagged Text:** "[exact quoted passage]"
- **Why It's a Fallacy:** [2–3 sentences explaining the specific logical error]
- **Suggested Correction:** "[Rewritten version that preserves intent but uses valid reasoning]"

*(Repeat for each fallacy found, numbered sequentially)*

---

**Overall Assessment:**
- **Fallacies Found:** [count]
- **Most Critical Issue:** [name the single most damaging fallacy and why]
- **Logical Strength After Corrections:** [Strong / Moderate / Weak — with one sentence of justification]
- **Next Step:** [One concrete action the author should take to improve the argument]

---

If no fallacies are found, replace the fallacy blocks with: "No logical fallacies detected. The argument is structurally sound." Then proceed to the Overall Assessment.
