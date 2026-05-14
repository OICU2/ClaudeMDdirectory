---
name: writing-template-library-creation
description: >
  Builds a structured, reusable library of writing templates for recurring content formats.
  Use when someone says "we keep writing the same thing," asks for a way to standardize
  our content, wants to create templates for case studies or memos, needs a repeatable
  format for product updates, or wants to build a writing system for their team.
category: writing
tags: [templates, content-systems, documentation, writing-workflow, reusable-content]
author: community
---

# Writing Template Library Creation

This skill builds a structured, ready-to-use library of writing templates for recurring content formats so teams can produce consistent, high-quality documents faster.

## Template Library Build Process

1. **Identify content types** — Ask the user to list every recurring document format they produce (e.g., case studies, product update emails, executive memos, incident reports, blog posts). If they're unsure, prompt with common categories for their domain.

2. **Define the anatomy of each format** — For each content type, extract:
   - Primary audience and their key concern
   - Required sections (non-negotiable structural elements)
   - Optional sections (context-dependent additions)
   - Tone and voice guidelines (formal, conversational, technical)
   - Typical length range
   - Any legal, brand, or compliance constraints

3. **Build each template with three layers**:
   - **Scaffold**: Named section headers in the correct order
   - **Instructions**: Bracketed guidance inside each section (e.g., `[State the customer's core problem in 1–2 sentences. Avoid jargon.]`)
   - **Example fill**: One concrete sample sentence or paragraph showing a completed version of that section

4. **Create a template index** — Produce a master index listing every template by name, format type, audience, and estimated completion time.

5. **Add usage rules per template** — Append a short "When to use / When NOT to use" block at the top of each template to prevent misapplication.

6. **Version and label each template** — Include a metadata block at the top of every template:
   ```
   Template: [Name]
   Version: 1.0
   Owner: [Team or role]
   Last reviewed: [Date]
   Approved for: [Internal / External / Both]
   ```

7. **Deliver as a cohesive library** — Group templates by category, provide navigation headers, and include a one-page "How to Use This Library" guide.

## Output Format

Deliver the following, in order:

- **Library Index** (table): columns for Template Name, Category, Audience, Format, Estimated Time
- **"How to Use This Library"** (½ page): purpose, update cadence, who owns each template
- **Individual Templates** (one per content type), each containing:
  - Metadata block (6-line header)
  - "When to use / When NOT to use" block (2–4 bullets each)
  - Fully scaffolded sections with bracketed instructions and one example line per section
  - Word count or length guidance at the bottom
- Templates should be separated by a horizontal rule and clearly labeled
- Total length scales with number of templates; each individual template should be 200–500 words of scaffold + instructions
- Deliver in Markdown by default; note if another format (Word, Notion, etc.) is preferred
