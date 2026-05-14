---
name: customer-avatar-language-mining
description: >
  Extracts verbatim customer language from raw feedback sources to build an authentic phrase library for copywriting and messaging. Use when someone says "I need to understand how my customers talk," asks to "mine reviews for copy," wants to "find the exact words customers use," needs to "pull language from support tickets," or says "help me build a swipe file from customer feedback."
category: marketing
tags: [copywriting, voice-of-customer, market-research, messaging, customer-research]
author: community
---

# Customer Avatar Language Mining

Analyzes reviews, support tickets, survey responses, and other raw customer feedback to extract verbatim phrases, recurring pain points, and desire statements that copywriters can use directly in messaging.

## Extraction Workflow

1. **Ingest the source material** — Accept pasted reviews, ticket transcripts, survey dumps, forum posts, or interview notes. If none are provided, prompt the user to paste their raw feedback before proceeding.

2. **Strip filler and normalize** — Ignore generic pleasantries ("Great service!") with no emotional specificity. Focus on sentences where the customer describes a before-state, after-state, frustration, fear, aspiration, or outcome.

3. **Tag each extract by type** using these five categories:
   - 🔴 **Pain / Complaint** — specific problem or frustration stated in their words
   - 🟡 **Fear / Anxiety** — worry expressed before or during purchase
   - 🟢 **Desire / Goal** — what they actually wanted to achieve
   - 🔵 **Result / Transformation** — outcome language after using the product/service
   - ⚪ **Objection / Hesitation** — reason they almost didn't buy or tried alternatives first

4. **Preserve verbatim phrasing** — Do not paraphrase. Keep the exact words, including slang, grammar quirks, and colloquialisms. These are the phrases that will resonate with the target audience because they mirror how readers think internally.

5. **Identify recurring clusters** — Group phrases that express the same underlying emotion or idea. Note frequency (e.g., "5 customers mentioned [specific phrase variation]"). High-frequency clusters signal copy-worthy angles.

6. **Flag power phrases** — Mark any phrase that is unusually vivid, emotionally charged, or highly specific. These are priority candidates for headlines, subject lines, and hooks.

7. **Surface implied beliefs** — For each cluster, write one sentence describing the underlying belief or worldview the customer holds. This becomes positioning context, not copy itself.

## Output Format

Produce the following sections in order:

---

### 🔴 Pain & Complaints Library
- Verbatim quote — *[source type, e.g., Amazon review / support ticket]*
- (Repeat, grouped by theme with cluster frequency noted)

### 🟡 Fear & Anxiety Phrases
- Verbatim quote — *[source type]*

### 🟢 Desire & Goal Statements
- Verbatim quote — *[source type]*

### 🔵 Result & Transformation Language
- Verbatim quote — *[source type]*

### ⚪ Objections & Hesitations
- Verbatim quote — *[source type]*

---

### ⚡ Top Power Phrases (Priority Copy Candidates)
Numbered list of 5–15 standout phrases with a one-line note on where to deploy each (e.g., "headline," "email subject line," "objection-handling section").

### 🧠 Implied Beliefs Summary
Bullet list of 3–7 underlying beliefs or worldviews extracted from the patterns. Written as declarative statements the customer would agree with (e.g., "I've wasted money on solutions that promised results but required expertise I don't have.").

### 📊 Cluster Frequency Notes
Brief table or list showing which pain/desire themes appeared most often and their relative weight.

---

**Length:** Scale to the volume of source material. For fewer than 20 feedback samples, output will be concise. For 50+ samples, expect a full library. Always prioritize specificity over completeness — 10 razor-sharp phrases beat 50 generic ones.
