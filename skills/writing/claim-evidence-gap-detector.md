---
name: claim-evidence-gap-detector
description: >
  Analyzes a draft document to identify unsupported claims, unsubstantiated arguments, and assertions missing citations or data. Use when someone says "my writing feels weak," asks "what needs sources in this draft," or wants to "find holes in my argument." Also triggers when a writer asks to "check my evidence" or says "this piece needs to be more rigorous."
category: writing
tags: [writing, research, argumentation, editing, academic]
author: community
---

# Claim-Evidence Gap Detector

This skill scans a draft for every assertion, argument, and claim, then produces a prioritized list of evidence gaps the writer must address before the piece is credible.

## Detection Workflow

1. **Read the full draft** to understand thesis, audience, and argumentative structure before flagging anything.

2. **Identify all claims** — categorize each as one of:
   - **Empirical claim**: asserts a fact about the world ("Studies show X," "Most people believe Y")
   - **Causal claim**: asserts one thing causes another ("This leads to," "Because of X, Y occurs")
   - **Comparative claim**: asserts something is more/less/better/worse than something else
   - **Universal/absolute claim**: uses words like "always," "never," "everyone," "no one"
   - **Trend/statistical claim**: asserts patterns, percentages, or prevalence

3. **Evaluate each claim for evidence**:
   - Is a source, citation, data point, or study referenced?
   - If no citation, is the claim supported by logical reasoning within the text?
   - Is the claim a commonly accepted fact requiring no citation, or is it contested?

4. **Flag gaps** — mark a claim as a gap if:
   - It makes a factual assertion with no citation or data
   - It uses vague authority ("experts say," "research shows") without specifics
   - It presents a contested point as settled fact
   - It draws a causal conclusion without mechanistic or empirical support

5. **Prioritize gaps** using three tiers:
   - 🔴 **Critical**: Central to the thesis; if unsupported, the entire argument collapses
   - 🟡 **Important**: Supports a major sub-point; weakens credibility if uncited
   - 🟢 **Minor**: Peripheral detail or illustrative example; low stakes if unverified

6. **Do not flag**:
   - Clearly labeled personal opinions or anecdotes
   - Definitions or logical tautologies
   - Universally accepted facts (e.g., "water boils at 100°C at sea level")

## Output Format

Produce a structured report with three sections:

---

**CLAIM-EVIDENCE GAP REPORT**

**Summary**: [2-3 sentences: overall assessment of the draft's evidential strength and the most urgent problem area]

**Gap List** (sorted by priority):

| Priority | Location | Claim (verbatim or paraphrased) | Gap Type | Suggested Fix |
|----------|----------|---------------------------------|----------|---------------|
| 🔴 Critical | Para 3 | "Social media causes depression in teenagers" | Causal claim, no citation | Cite a peer-reviewed study; consider qualifying scope |
| 🟡 Important | Para 5 | "Most companies have adopted this approach" | Statistical claim, no data | Add industry survey or specify timeframe and sector |
| 🟢 Minor | Para 8 | "This has been true for decades" | Trend claim, vague | Add a date range or a single historical example |

*(Continue for all flagged claims)*

**Top 3 Priorities**: Numbered list of the three most damaging gaps and exactly what kind of evidence would resolve each one.

---

Keep the report scannable. Use the table for all gaps. Limit suggested fixes to one sentence each. Do not rewrite the draft.
