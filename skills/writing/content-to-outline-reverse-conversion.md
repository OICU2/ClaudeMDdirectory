---
name: content-to-outline-reverse-conversion
description: >
  Analyzes a completed piece of writing and reverse-engineers it into a clean, reusable hierarchical outline template. Use when someone says "turn this article into an outline," asks to "extract the structure from this piece," wants to "create a template from existing content," needs to "reverse outline this post," or wants to "build a framework from a finished draft."
category: writing
tags: [outline, template, structure, reverse-engineering, content-strategy]
author: community
---

# Content-to-Outline Reverse Conversion

This skill takes a finished piece of writing and extracts its structural skeleton as a reusable hierarchical outline template that can guide future content creation.

## Conversion Workflow

1. **Identify the content type** — Determine if the input is an article, essay, report, newsletter, case study, landing page, etc. Label it explicitly.

2. **Map the top-level sections** — Identify every major section or logical block in the piece. Strip out the specific content and replace it with a descriptive label (e.g., "Hook / Opening Problem Statement" instead of the actual hook text).

3. **Extract subsections and supporting elements** — For each major section, identify subordinate components: supporting points, evidence blocks, transitions, calls to action, examples, counterarguments. Label each by its function, not its content.

4. **Identify recurring patterns** — Note any structural patterns that repeat (e.g., "claim → example → takeaway" or "stat → explanation → implication"). Name these patterns explicitly in the outline.

5. **Annotate each element** — Add a one-line annotation to every outline item describing its purpose and what type of content fills it (e.g., "[2–3 sentences establishing reader pain point]" or "[Optional: external data source to build credibility]").

6. **Flag optional vs. required elements** — Mark components that appeared in the original but are not structurally essential with `(optional)`.

7. **Abstract proper nouns and specifics** — Replace all topic-specific language with generic placeholders so the template works for any subject in the same genre.

## Output Format

Produce a structured Markdown outline with the following characteristics:

- **Title line**: `## Template: [Content Type] Structure` (e.g., `## Template: How-To Article Structure`)
- **Hierarchy**: Use `#`, `##`, `###` heading levels or numbered + lettered lists to show nesting depth
- **Each item**: Written as a functional label in title case, followed by an indented annotation in brackets
- **Pattern callouts**: Named patterns highlighted with a `> Pattern:` blockquote label
- **Footer section**: A `### Template Notes` block summarizing total section count, estimated word ranges per section, and 2–3 tips for adapting the template

**Length**: Outline should be comprehensive but scannable — typically 30–60 line items depending on source complexity. Annotations should be one line each. No full sentences in the outline nodes themselves.
