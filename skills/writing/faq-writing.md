---
name: faq-writing
description: >
  Researches common customer questions and drafts clear, concise FAQ documents optimized for both user comprehension and search engine visibility. Use when someone says "create an FAQ," asks to "write frequently asked questions," wants to "build a help center page," needs to "document common questions," or requests "a Q&A section" for their product, service, or topic.
category: writing
tags: [faq, documentation, seo, help-center, customer-support]
author: community
---

# FAQ Writing Skill

This skill generates structured FAQ documents by identifying real user questions, crafting plain-language answers, and organizing content for scannability and search engine visibility.

## Research & Question Discovery

1. **Identify the subject**: Extract the product, service, topic, or audience from the request.
2. **Generate realistic questions**: Produce 8–15 questions that reflect genuine user confusion, common objections, onboarding friction, pricing concerns, and technical details. Think like a first-time user, a skeptical buyer, and a support agent handling tickets.
3. **Prioritize by frequency and impact**: Order questions from most fundamental to most specific. Lead with what-is, how-does-it-work, and pricing before edge cases.
4. **Avoid assumed knowledge**: Each question should stand alone — no jargon unless the audience is explicitly technical.

## Answer Drafting Rules

- **Answer in the first sentence**: Never bury the answer. State it directly, then elaborate.
- **Keep answers 2–5 sentences**: Long enough to be complete, short enough to scan.
- **Use active voice**: "You can cancel anytime" not "Cancellation may be initiated by the user."
- **Include specifics**: Numbers, timelines, formats, limitations — vague answers erode trust.
- **Add micro-CTAs where natural**: Link to next steps ("See our pricing page," "Contact support") only when genuinely useful.
- **Optimize for SEO naturally**: Work the core keyword phrase into the question wording and the first sentence of the answer without forcing it.

## Structure & Organization

1. Group related questions under **2–4 thematic subheadings** (e.g., Getting Started, Billing, Security, Troubleshooting).
2. Use a question as the H3 header, answer as a paragraph below.
3. If a topic has more than 5 questions, split into a separate section.
4. Add a brief **1–2 sentence intro paragraph** above the FAQ explaining what the document covers.

## Output Format

Produce a complete, ready-to-publish FAQ document in Markdown:

```
# Frequently Asked Questions: [Topic]

[1–2 sentence intro describing what this FAQ covers and who it's for.]

---

## [Section 1 Title]

### [Question 1]
[Answer — 2–5 sentences, direct, specific.]

### [Question 2]
[Answer — 2–5 sentences, direct, specific.]

---

## [Section 2 Title]

### [Question 3]
...
```

- **Length**: 8–15 Q&A pairs minimum; expand if the user provides a complex topic.
- **Format**: Markdown with H2 section headers and H3 question headers.
- **Tone**: Match the brand voice if provided; default to friendly, professional, and jargon-free.
- **SEO note** (optional): After the FAQ, append a brief bullet list of 3–5 keyword phrases naturally embedded in the document, labeled `<!-- SEO keywords embedded -->` as an HTML comment.
