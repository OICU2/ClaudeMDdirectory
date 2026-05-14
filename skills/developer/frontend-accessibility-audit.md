---
name: frontend-accessibility-audit
description: >
  Reviews UI component code against WCAG 2.1 AA standards and produces a prioritized list of violations with code-level fixes. Use when someone says "audit this component for accessibility," asks about WCAG compliance, wants to check if their UI is screen reader friendly, needs to find accessibility issues in their code, or is preparing for an accessibility review.
category: developer
tags: [accessibility, wcag, frontend, audit, a11y]
author: community
---

# Frontend Accessibility Audit

Analyzes UI component code against WCAG 2.1 AA criteria and returns a severity-ranked list of violations paired with ready-to-apply remediation code snippets.

## Audit Workflow

1. **Parse the component** — Identify all interactive elements, images, form controls, headings, color usage, focus management, and ARIA usage in the submitted code.

2. **Map to WCAG criteria** — Evaluate each element against the four WCAG principles (Perceivable, Operable, Understandable, Robust). Focus on the most commonly violated criteria:
   - 1.1.1 Non-text Content (alt text)
   - 1.3.1 Info and Relationships (semantic HTML)
   - 1.4.3 Contrast Minimum (4.5:1 for normal text, 3:1 for large text)
   - 2.1.1 Keyboard (all functionality via keyboard)
   - 2.4.3 Focus Order and 2.4.7 Focus Visible
   - 3.3.1 Error Identification and 3.3.2 Labels or Instructions
   - 4.1.2 Name, Role, Value (ARIA correctness)

3. **Assign severity** — Rate each violation:
   - **Critical** — Blocks access entirely (e.g., missing keyboard support, no alt on functional image)
   - **High** — Significant barrier for assistive technology users (e.g., missing form labels, broken focus order)
   - **Medium** — Degrades experience but workaround exists (e.g., insufficient contrast, missing landmark roles)
   - **Low** — Best-practice gap with minor impact (e.g., redundant ARIA, non-descriptive link text)

4. **Generate remediation snippets** — For each violation, produce a minimal corrected code diff or replacement snippet targeting only the offending element. Do not rewrite unrelated code.

5. **Check for false positives** — Note any issues that require runtime or visual verification and cannot be confirmed from static code alone (e.g., exact color values, dynamic focus behavior).

## Output Format

Produce the following structure for every audit:

---

### Accessibility Audit Summary
- **Component:** `[filename or description]`
- **WCAG Level Targeted:** AA
- **Total Issues:** X (Critical: X | High: X | Medium: X | Low: X)

---

### Violations

#### [CRITICAL | HIGH | MEDIUM | LOW] — [Short Issue Title]
- **WCAG Criterion:** [e.g., 1.1.1 Non-text Content]
- **Element:** `[selector or code reference]`
- **Issue:** One sentence describing exactly what is wrong.
- **Fix:**
```[language]
// Before
[offending code]

// After
[corrected code]
```

_(Repeat block for each violation, ordered Critical → Low)_

---

### Requires Manual Verification
- List any checks that need browser/screen reader testing or design asset review.

---

Keep violation descriptions factual and tied to specific lines or elements. Do not include generic accessibility advice unrelated to the submitted code.
