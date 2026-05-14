---
name: email-preview-text-optimizer
category: marketing
description: >
  Generates and tests multiple preview text variants for email campaigns, pairing them with subject lines to maximize open rates through psychological and strategic optimization. Use when someone wants to improve email open rates, needs preview text ideas for a campaign, asks how to write email snippet copy, wants to A/B test email preview text, or is trying to complement a subject line with effective preview copy.
tags: [email-marketing, copywriting, a-b-testing, open-rates, preview-text]
author: community
---

# Email Preview Text Optimizer

This skill generates, analyzes, and ranks preview text variants paired with subject lines to maximize email open rates using proven copywriting principles.

## Workflow

1. **Gather inputs** — Collect the following before generating variants:
   - Subject line (required)
   - Email content summary or goal (required)
   - Target audience (required)
   - Sender name / brand (required)
   - Any existing preview text (optional)
   - Email client targets (optional — Gmail, Apple Mail, Outlook behave differently)

2. **Apply preview text rules** — All variants must:
   - Be 40–90 characters (sweet spot for most clients; flag if truncation risk exists)
   - Never repeat words already in the subject line
   - Add new information, urgency, curiosity, or a benefit — not just restate the subject
   - Avoid spam-trigger phrases (FREE!!!, Act Now, etc.)
   - End without a cut-off mid-word (check character counts)

3. **Generate 5 variants using distinct psychological angles**:
   - **Curiosity gap** — Withhold a key detail that the subject line teases
   - **Direct benefit** — State the clearest value proposition immediately
   - **Social proof / urgency** — Numbers, deadlines, or scarcity signals
   - **Conversational / personal** — Sounds like a friend sent it, low-pressure
   - **Question** — Poses a question the reader feels compelled to answer by opening

4. **Score each variant** against these criteria (1–5 scale each):
   - Complements subject line without redundancy
   - Adds new information or emotional hook
   - Character count is within safe range
   - Avoids spam language
   - Fits brand voice

5. **Recommend top 2 for A/B testing** with a rationale for why they pair best with the specific subject line provided.

6. **Flag any issues** with the original subject line that may limit preview text effectiveness (e.g., subject line already too long, subject line gives away too much).

## Output Format

Produce the following structure:

---

**Subject Line:** `[exact subject line provided]`
**Audience:** `[audience summary]`
**Goal:** `[email goal]`

---

### Preview Text Variants

| # | Angle | Preview Text | Chars | Score /25 |
|---|-------|-------------|-------|-----------|
| 1 | Curiosity Gap | [text] | [n] | [n] |
| 2 | Direct Benefit | [text] | [n] | [n] |
| 3 | Social Proof / Urgency | [text] | [n] | [n] |
| 4 | Conversational | [text] | [n] | [n] |
| 5 | Question | [text] | [n] | [n] |

---

### ✅ Recommended A/B Test Pair

**Variant A:** [number + text]
> Rationale: [1–2 sentences]

**Variant B:** [number + text]
> Rationale: [1–2 sentences]

---

### ⚠️ Flags & Notes

- [Any issues with subject line, character counts, spam risks, or audience mismatches]
- [If none, write "No issues detected."]

---
