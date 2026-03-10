---
name: ux-engineering-basics
description: >
  Applies UX engineering principles to code, covering accessibility, usability, and interaction design. Use when someone says "make this more accessible," asks about "improving the user experience," wants to "fix usability issues," needs help with "interaction design," or asks how to "make this more user-friendly." Also activates when reviewing forms, navigation, focus management, or UI component behavior.
category: developer
tags: [ux, accessibility, usability, interaction-design, frontend]
author: community
---

# UX Engineering Basics

This skill evaluates and improves code through the lens of UX engineering — covering accessibility (a11y), usability heuristics, and interaction design patterns — and is activated whenever UI/UX quality is in question.

## UX Engineering Workflow

### 1. Audit for Accessibility (a11y)
- Check all interactive elements have visible focus states (`outline`, `:focus-visible`)
- Verify semantic HTML is used (`<button>` not `<div onclick>`, `<nav>`, `<main>`, `<header>`)
- Ensure all images have descriptive `alt` text; decorative images use `alt=""`
- Confirm color contrast meets WCAG AA minimum (4.5:1 for text, 3:1 for large text)
- Validate ARIA attributes are used correctly — prefer native semantics first
- Ensure keyboard navigation works logically (Tab order, Escape closes modals, Enter/Space activate buttons)
- Add `aria-live` regions for dynamic content updates

### 2. Apply Usability Heuristics
- **Visibility of system status**: Show loading states, success/error feedback within 1 second of action
- **Error prevention**: Use input constraints, confirmation dialogs for destructive actions
- **Recognition over recall**: Label icons, use placeholder text, show available options
- **Consistency**: Reuse the same patterns for the same actions throughout the UI
- **Flexibility**: Support both mouse and keyboard interactions for all features

### 3. Improve Interaction Design
- Add transitions for state changes (show/hide, expand/collapse) — 150–300ms, ease-in-out
- Use micro-interactions to confirm user actions (button press animation, checkbox check)
- Implement debounce/throttle on inputs that trigger expensive operations
- Ensure touch targets are at least 44×44px on mobile
- Prevent layout shift during loading — reserve space with skeleton screens or min-height

### 4. Fix Focus Management
- Trap focus inside modals/dialogs while open; restore focus to trigger element on close
- Move focus to new content after route changes or dynamic insertions
- Skip-to-main-content link as the first focusable element on every page

### 5. Validate Responsiveness and Motion
- Test layouts at 320px, 768px, and 1280px breakpoints
- Respect `prefers-reduced-motion` — wrap animations in a media query check
- Ensure text scales correctly up to 200% zoom without horizontal scrolling

## Output Format

For each issue found, produce a structured list:

```
### [Issue Title]
**Category**: Accessibility | Usability | Interaction Design
**Severity**: Critical | Major | Minor
**Problem**: One sentence describing what is wrong and who it affects.
**Fix**: Specific code change or implementation instruction.
**Code**: [Before/after snippet if applicable]
```

Follow the issue list with a **Priority Order** section ranking fixes by impact:
1. Critical a11y blockers (screen reader/keyboard inaccessible)
2. Major usability failures (broken flows, missing feedback)
3. Minor polish (transitions, micro-interactions)

Keep each issue entry under 10 lines. Provide code examples for every fix that involves markup, CSS, or JavaScript changes.