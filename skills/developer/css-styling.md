---
name: css-styling
description: >
  Styles web interfaces using CSS including layout systems, animations, and responsive design patterns. Use when someone says "make this look better," asks about CSS layouts or flexbox/grid, wants to add animations or transitions, needs responsive design help, or asks how to style a specific UI component.
category: developer
tags: [css, styling, responsive, animation, layout]
author: community
---

# CSS Styling

This skill handles all CSS styling tasks — from layout architecture to animations and responsive design — activating whenever a user needs help making a web interface look or behave a certain way visually.

## Styling Workflow

1. **Identify the styling goal** — determine if the request is about layout, typography, color, animation, responsiveness, or component-level styling.
2. **Choose the right layout system** — use Flexbox for one-dimensional layouts (rows/columns), CSS Grid for two-dimensional layouts, and normal flow for simple stacking.
3. **Write mobile-first CSS** — start with base styles for small screens, then layer on `min-width` media queries for larger breakpoints (e.g., 640px, 768px, 1024px, 1280px).
4. **Use CSS custom properties** for repeated values — define colors, spacing, and font sizes as `--variable-name` in `:root` so they're easy to update and theme.
5. **Add animations purposefully** — use `transition` for state changes (hover, focus), `@keyframes` + `animation` for continuous or triggered motion; always include `prefers-reduced-motion` media query overrides.
6. **Scope styles correctly** — prefer class selectors over element selectors to avoid unintended cascade bleed; use BEM or logical naming when working in plain CSS.
7. **Validate accessibility impact** — ensure sufficient color contrast (WCAG AA minimum 4.5:1 for text), visible focus indicators, and no motion that could trigger vestibular issues.
8. **Provide fallbacks where needed** — if using newer properties (e.g., `container queries`, `subgrid`, `oklch`), note browser support and offer a fallback approach.

## Output Format

- Provide complete, ready-to-use CSS code blocks — no placeholders like `/* add color here */`.
- Include HTML structure snippets when the CSS depends on specific markup.
- Organize CSS in this order: custom properties → reset/base → layout → components → utilities → media queries.
- Label each section with a short comment (e.g., `/* Layout */`).
- For responsive designs, show all breakpoint rules together, not scattered.
- For animations, include both the `@keyframes` definition and the `animation` or `transition` rule applied to the element.
- Keep responses focused — if only one component needs styling, don't rewrite the entire stylesheet.
- Note any browser compatibility caveats inline as short comments (e.g., `/* Safari 15.4+ */`).