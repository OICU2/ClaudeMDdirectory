---
name: html-development
description: >
  Writes semantic, accessible HTML for web pages and applications. Use when someone asks to build a webpage, create an HTML layout, add form elements, or structure content for the web. Also activates when someone wants to make a site accessible, fix HTML markup, or scaffold a new frontend project.
category: developer
tags: [html, accessibility, semantic-markup, frontend, web]
author: community
---

# HTML Development

Generates clean, semantic, accessible HTML when building web pages, UI components, forms, or any browser-rendered content.

## Authoring Rules

1. **Use semantic elements first** — prefer `<article>`, `<section>`, `<nav>`, `<header>`, `<footer>`, `<main>`, `<aside>` over generic `<div>` and `<span>` unless no semantic equivalent exists.
2. **Accessibility is non-negotiable** — every `<img>` gets a descriptive `alt` attribute, every form `<input>` gets an associated `<label>`, interactive elements must be keyboard-reachable, and ARIA roles/attributes are added only when native semantics are insufficient.
3. **Document structure** — every full-page output includes `<!DOCTYPE html>`, `<html lang="...">`, `<head>` with `<meta charset="UTF-8">` and `<meta name="viewport" content="width=device-width, initial-scale=1.0">`, a meaningful `<title>`, and `<body>`.
4. **Forms** — use correct `type` attributes (`email`, `tel`, `number`, `search`, etc.), include `name` and `id` on inputs, group related fields with `<fieldset>` and `<legend>`, and mark required fields with `required` and a visible indicator.
5. **Heading hierarchy** — one `<h1>` per page, headings descend in order (`h1 → h2 → h3`) without skipping levels.
6. **Links vs buttons** — `<a href>` for navigation, `<button>` for actions; never use a `<div>` or `<span>` as a clickable element without full ARIA and keyboard support.
7. **Tables** — only for tabular data; always include `<thead>`, `<tbody>`, `<th scope="col|row">`, and a `<caption>`.
8. **Inline styles and deprecated attributes** — avoid `style=""`, `<font>`, `<center>`, `bgcolor`, and other presentational attributes; suggest CSS classes instead.
9. **Minimal, purposeful classes** — class names should reflect purpose (`card`, `nav-link`, `error-message`), not appearance (`red-text`, `big-box`).
10. **Validate before output** — mentally check for unclosed tags, mismatched nesting, duplicate `id` values, and missing required attributes before returning markup.

## Workflow

1. Clarify the content and purpose if the request is ambiguous (one targeted question max).
2. Identify the correct semantic structure for the content type (document, form, list, table, media, etc.).
3. Draft the HTML following the authoring rules above.
4. Review for accessibility gaps: focus order, ARIA where needed, color-contrast notes, screen-reader-friendly text.
5. Add brief inline comments for non-obvious structural decisions.

## Output Format

- Return a single fenced HTML code block (` ```html `).
- For full pages: complete document from `<!DOCTYPE html>` to `</html>`.
- For components or snippets: the minimal required markup with a one-line comment indicating where it should be inserted.
- After the code block, include a short **Notes** section (bullet list, max 5 items) covering accessibility decisions made, any assumptions about styling/JS, and suggestions for improvement.
- Keep markup concise — no placeholder filler text beyond "Lorem ipsum" when real content isn't provided.