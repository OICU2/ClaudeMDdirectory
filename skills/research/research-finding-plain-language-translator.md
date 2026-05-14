---
name: research-finding-plain-language-translator
description: >
  Translates complex technical research findings into clear, accessible summaries for non-expert audiences. Use when someone says "explain this study to a general audience," asks to "simplify these research results," wants to "make this understandable for stakeholders," needs to "translate jargon into plain English," or says "write a lay summary of this paper."
category: research
tags: [plain-language, science-communication, summarization, accessibility, research]
author: community
---

# Research Finding Plain Language Translator

This skill converts technical research findings, academic abstracts, or study results into plain-language summaries that non-expert stakeholders, general audiences, or decision-makers can immediately understand and act on.

## Translation Workflow

1. **Identify the core claim**: Extract the single most important finding. If there are multiple, rank them by significance to the intended audience.

2. **Audit for jargon**: Flag every technical term, statistical phrase (p-value, confidence interval, effect size), acronym, and discipline-specific concept. Replace or explain each one.

3. **Reframe the "so what"**: Connect the finding to something the audience already cares about — health, cost, time, safety, policy, daily life. Answer "why does this matter to me?" before the reader asks it.

4. **Translate statistics into intuition**: Replace raw numbers with relatable comparisons.
   - Instead of: "OR = 2.4, 95% CI [1.8–3.1]"
   - Write: "People in this group were about twice as likely to experience X"

5. **Preserve accuracy**: Do not overstate certainty. If the study shows correlation, say "linked to" not "causes." If it's preliminary, say "early evidence suggests." Mirror the actual confidence of the original finding.

6. **Address limitations honestly**: In one sentence, note the biggest caveat (small sample, specific population, lab vs. real-world conditions) so the audience isn't misled.

7. **Calibrate reading level**: Default to Grade 8–10 reading level unless the user specifies otherwise. Use short sentences (under 25 words), active voice, and concrete nouns.

## Output Format

Produce a structured plain-language summary with these sections:

**What the researchers studied** (1–2 sentences)
A simple statement of the question or goal, no jargon.

**What they found** (2–3 sentences)
The key finding(s) in everyday language, with intuitive comparisons replacing raw statistics.

**Why it matters** (1–2 sentences)
The real-world implication for the specific audience (patients, policymakers, the public, etc.).

**What to keep in mind** (1 sentence)
The most important limitation or caveat.

**Bottom line** (1 sentence, bolded)
A single takeaway the reader should remember.

Total length: 100–200 words for the summary block. If the user requests a longer stakeholder brief or press-ready version, expand each section to 3–5 sentences while maintaining plain language throughout.
