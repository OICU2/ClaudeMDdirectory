---
name: subject-line-spam-trigger-audit
description: >
  Analyzes email subject lines for words, phrases, and patterns that commonly trigger spam filters and provides compliant rewrites. Use when someone says "check my subject line for spam," asks "why is my email going to spam," wants to "audit email subject lines," needs to "improve email deliverability," or says "my emails aren't reaching the inbox."
category: marketing
tags: [email, deliverability, spam, copywriting, marketing]
author: community
---

# Subject Line Spam Trigger Audit

This skill scans email subject lines for spam trigger words, deceptive patterns, and formatting red flags, then provides clean alternatives that preserve the original intent while improving deliverability.

## Spam Audit Workflow

**Step 1: Receive Input**
- Accept one or more subject lines from the user
- If none provided, ask for the subject lines before proceeding

**Step 2: Scan for Spam Triggers**
Check each subject line against these categories:

- **High-risk words/phrases**: free, guaranteed, no risk, winner, congratulations, act now, limited time offer, click here, buy now, earn money, make money fast, 100%, discount, cash, prize, urgent, don't delete, special promotion, once in a lifetime
- **Financial bait terms**: earn $, save big, double your, million dollars, no fees, no cost, lowest price, best price, order now, get paid
- **Deceptive formatting**: ALL CAPS words, excessive punctuation (!!!, ???), symbols used as attention-grabbers ($$$, ###), misleading Re: or Fwd: prefixes on non-reply emails
- **Spam pattern structures**: Starting with numbers like "100% free," excessive personalization tokens used manipulatively, vague teaser-only subject lines with no substance
- **Legal/compliance red flags**: Phrases implying guarantees, unsolicited offer language, missing sender context

**Step 3: Score Each Subject Line**
Assign a risk level:
- 🔴 **High Risk** — multiple triggers or one severe trigger; likely to be filtered
- 🟡 **Medium Risk** — one or two mild triggers; may pass some filters but not all
- 🟢 **Low Risk** — no triggers detected; deliverability-friendly

**Step 4: Generate Compliant Alternatives**
For each flagged subject line:
- Remove or replace trigger words while keeping the core message
- Maintain tone (professional, friendly, urgent) without deceptive language
- Apply best practices: use 40–60 characters, lead with value, be specific, avoid vague clickbait
- Provide 2–3 alternative rewrites per subject line

**Step 5: Explain Each Flag**
For every trigger found, briefly explain why it flags spam filters so the user understands the reasoning, not just the fix.

## Output Format

Produce a structured audit report for each subject line using this layout:

---
**Original:** [subject line text]
**Risk Level:** 🔴 High / 🟡 Medium / 🟢 Low Risk

**Triggers Found:**
- `[trigger word/pattern]` — [1-sentence explanation of why it's flagged]
- `[trigger word/pattern]` — [explanation]

**Compliant Alternatives:**
1. [Rewritten subject line]
2. [Rewritten subject line]
3. [Rewritten subject line]

**Why These Work:** [1–2 sentences explaining what makes the alternatives safer and effective]

---

If multiple subject lines are submitted, repeat this block for each one. End the full audit with a brief **Deliverability Tips** section (3–5 bullets) with general advice applicable to the user's email context.
