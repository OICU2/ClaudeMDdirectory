---
name: ui-development
description: >
  Builds responsive, accessible user interfaces using modern frontend frameworks and best practices. Use when someone says "build me a component," asks about styling a layout, wants to create a UI feature, needs help with frontend design, or is working on a web interface.
category: developer
tags: [frontend, ui, accessibility, responsive, components]
author: community
---

# UI Development

This skill guides Claude to design and implement responsive, accessible UI components and layouts using modern frontend frameworks, semantic HTML, and CSS best practices.

## Workflow

1. **Clarify requirements** — Identify the framework (React, Vue, Svelte, vanilla HTML/CSS), target devices, accessibility needs, and any design system or existing styles in use.
2. **Structure semantically** — Use correct HTML5 elements (`<nav>`, `<main>`, `<section>`, `<button>`, etc.) before adding styling or interactivity.
3. **Apply responsive design** — Default to a mobile-first approach using CSS Grid or Flexbox; use relative units (`rem`, `%`, `clamp()`) and breakpoints only where layout genuinely shifts.
4. **Enforce accessibility** — Include ARIA labels where native semantics fall short, ensure keyboard navigation and focus management, maintain WCAG AA contrast ratios (4.5:1 for text), and add `alt` text to all images.
5. **Write clean, scoped styles** — Prefer utility classes (Tailwind) or CSS Modules over global selectors; avoid magic numbers and inline styles unless unavoidable.
6. **Add interactivity intentionally** — Keep state minimal; lift state only when necessary; handle loading, empty, and error states for every dynamic piece of UI.
7. **Validate the output** — Review for: missing ARIA roles, hardcoded pixel sizes, non-focusable interactive elements, and missing responsive breakpoints.

## Component Checklist

- [ ] Semantic HTML element chosen correctly
- [ ] Keyboard accessible (Tab, Enter, Escape where applicable)
- [ ] ARIA attributes present where native semantics are insufficient
- [ ] Responsive across mobile (320px), tablet (768px), desktop (1280px)
- [ ] Color contrast meets WCAG AA
- [ ] Loading / empty / error states handled
- [ ] No layout-breaking overflow at any viewport

## Output Format

Produce a self-contained code block (or multiple clearly labeled blocks) containing:

- **HTML / JSX** — full component markup with semantic elements and ARIA attributes
- **CSS / Styles** — scoped styles or Tailwind classes; include responsive rules
- **JS / Framework logic** — props, state, event handlers (only if interactivity is required)

Follow each code block with a short bullet list (3–6 items) explaining key decisions: element choices, accessibility measures taken, responsive strategy used, and any assumptions made about the design system or data shape.