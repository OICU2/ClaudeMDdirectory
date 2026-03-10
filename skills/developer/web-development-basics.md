---
name: web-development-basics
description: >
  Builds foundational web applications using HTML, CSS, and JavaScript from scratch.
  Use when someone says "build me a webpage," asks about creating a website layout,
  wants to add interactivity to a page, needs help structuring HTML, or asks how to
  style elements with CSS.
category: developer
tags: [html, css, javascript, frontend, web]
author: community
---

# Web Development Basics

This skill scaffolds and builds foundational web applications with clean HTML structure, styled CSS, and functional JavaScript, activating whenever a user needs a working webpage or frontend component.

## Workflow

1. **Clarify the goal** — Identify what the page or component needs to do (display content, collect input, respond to user actions).
2. **Structure HTML first** — Write semantic HTML5 elements (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`). Use `<div>` only when no semantic element fits.
3. **Apply CSS** — Write styles in a `<style>` block or separate `.css` file. Use CSS custom properties (`--color-primary`) for repeated values. Default to flexbox or grid for layout.
4. **Add JavaScript last** — Write vanilla JS in a `<script>` tag placed before `</body>`. Use `addEventListener` for all interactions. Avoid inline event handlers (`onclick="..."`).
5. **Wire everything together** — Ensure IDs and class names are consistent across HTML, CSS, and JS. Test logic mentally before outputting.
6. **Handle edge cases** — Include basic input validation if forms are present. Add fallback text for empty states.

## Standards

- Use `<!DOCTYPE html>` and `<meta charset="UTF-8">` on every page.
- All images must have descriptive `alt` attributes.
- CSS class names use kebab-case (`card-title`, not `cardTitle`).
- JavaScript variables use camelCase; constants use UPPER_SNAKE_CASE.
- No external libraries unless the user explicitly requests them.
- Mobile-first: include `<meta name="viewport" content="width=device-width, initial-scale=1.0">`.

## Output Format

Produce a single, self-contained HTML file unless the user requests separate files. Structure the output as:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- meta tags, title, styles -->
</head>
<body>
  <!-- semantic HTML structure -->
  <script>
    // JavaScript logic
  </script>
</body>
</html>
```

- Include inline comments explaining non-obvious decisions.
- If separate files are requested, output each file in a labeled fenced code block with the filename as the label.
- Keep total line count proportional to complexity — a button component should not exceed ~50 lines; a full page layout may reach ~150 lines.
- After the code, add a short **"How it works"** section (3–5 bullet points) explaining the key parts.
