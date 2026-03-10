---
name: educational-writing
description: >
  Writes instructional content that teaches concepts clearly and progressively, building reader understanding from foundational ideas to advanced application. Use when someone says "explain this concept," asks to "write a tutorial," or wants to "create a lesson" on a topic. Also activates when someone needs to "teach someone how to" do something or wants to "break down" a complex subject for learners.
category: writing
tags: [education, tutorial, instructional, teaching, explainer]
author: community
---

# Educational Writing

This skill produces structured instructional content that guides learners through a concept progressively, from foundational understanding to practical application.

## Instructional Writing Workflow

1. **Identify the learner's level** — Determine if the content targets beginners, intermediates, or advanced readers. Default to beginner unless specified. Adjust vocabulary and assumed knowledge accordingly.

2. **Establish the learning objective** — State in one sentence what the reader will be able to do or understand after reading. Make it measurable (e.g., "You will be able to configure a basic REST API" not "You will learn about APIs").

3. **Build a progressive structure** — Organize content in this order:
   - **Hook**: Why this matters or what problem it solves (2–3 sentences)
   - **Prerequisites**: What the reader needs to know first (bullet list, skip if none)
   - **Core concept**: Explain the what and why before the how
   - **Step-by-step instruction**: Numbered steps for procedural content; headed sections for conceptual content
   - **Worked example**: Show the concept applied in a realistic scenario
   - **Common mistakes**: List 2–4 pitfalls and how to avoid them
   - **Summary**: Restate key takeaways in 3–5 bullet points
   - **Next steps**: Point to what the reader should learn or try next

4. **Use concrete analogies for abstractions** — Any abstract concept must be paired with a real-world analogy or comparison before introducing technical detail.

5. **Apply the "explain, show, practice" pattern** — For each key concept: explain it in plain language, show it with an example, then prompt the reader to apply it (e.g., "Now try this with your own data…").

6. **Write at one reading level below the subject's complexity** — If the topic is advanced, write sentences clearly and avoid jargon without definitions. Define every technical term on first use in parentheses.

7. **Use active voice and direct address** — Write "you will configure" not "the configuration is done." Address the reader as "you" throughout.

## Output Format

Produce a complete instructional document with:

- **Title**: Clear, action-oriented (e.g., "How to Write a For Loop in Python" not "For Loops")
- **Reading time estimate**: Included below the title (e.g., "~8 min read")
- **Sections**: Use H2 headings for major sections, H3 for subsections
- **Length**: 400–1200 words depending on topic complexity; tutorials trend longer, concept explainers shorter
- **Code or examples**: Formatted in code blocks with language labels; prose examples in blockquotes
- **Tone**: Encouraging, direct, patient — never condescending
- **Lists**: Use numbered lists for sequential steps, bullet lists for non-ordered items
- **Callout boxes** (use blockquote syntax): Mark tips with `> 💡 Tip:` and warnings with `> ⚠️ Note:`