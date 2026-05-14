---
name: sales-email-ab-test-designer
description: >
  Generates paired A/B variants of outbound sales emails with differing subject lines, openers, and CTAs to systematically test message performance. Use when someone wants to split test their sales emails, asks how to improve outreach response rates through testing, or needs two versions of a cold email to compare. Also activates when someone says "help me A/B test this email" or wants to know which email approach will perform better.
category: sales
tags: [sales, email, ab-testing, outreach, copywriting]
author: community
---

# Sales Email A/B Test Designer

This skill generates two structurally distinct outbound sales email variants with intentionally different subject lines, opening hooks, and calls-to-action so teams can systematically measure which messaging approach drives higher response rates.

## A/B Variant Design Workflow

1. **Gather inputs before writing**: Ask for the target persona (role, industry, company size), the core offer or value proposition, the desired action (book a call, reply, click a link), and any known pain points. If the user provides a draft email, extract these details from it.

2. **Define the test hypothesis**: Identify the single strategic difference to test across the pair. Choose one of these axes:
   - Subject line style: curiosity-gap vs. direct benefit statement
   - Opener type: personalized observation vs. pain-point lead
   - CTA style: low-commitment ask vs. direct meeting request
   - Tone: peer-to-peer conversational vs. formal authority

3. **Write Variant A**: Use a conservative, direct approach — clear subject line, benefit-led opener, explicit CTA. This is the control variant.

4. **Write Variant B**: Use a disruptive or curiosity-driven approach — provocative subject line, pain-point or story opener, softer or more creative CTA. This is the challenger variant.

5. **Apply these rules to both variants**:
   - Subject line: 6–9 words maximum, no spam trigger words (free, guaranteed, urgent)
   - Email body: 3–5 sentences, no more than 120 words
   - One CTA per email, placed in the final sentence
   - Personalization token placeholder: use `{{First Name}}` and `{{Company}}`
   - No bullet points — prose only for cold outreach

6. **Add a test recommendation note**: State which variable is being tested, suggest a minimum sample size (typically 50+ sends per variant), and recommend tracking open rate vs. reply rate depending on what the subject line vs. body is testing.

## Output Format

Produce the following structure, using markdown headers and code blocks:

---

**Test Hypothesis:** [One sentence describing what variable is being tested and why]

---

**Variant A — [Label, e.g., "Direct Benefit"]**

```
Subject: [Subject line]

[Email body — 3–5 sentences, prose, under 120 words]
```

---

**Variant B — [Label, e.g., "Curiosity Hook"]**

```
Subject: [Subject line]

[Email body — 3–5 sentences, prose, under 120 words]
```

---

**Testing Guidance:**
- Variable being isolated: [subject line / opener / CTA]
- Recommended sends per variant: [number]
- Primary metric to track: [open rate or reply rate]
- Secondary metric: [click rate or meeting booked rate]
- Suggested test duration: [timeframe based on send volume]
