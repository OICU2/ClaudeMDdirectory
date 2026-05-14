---
name: cross-browser-compatibility-checklist
description: >
  Generates a targeted cross-browser compatibility checklist for a given set of web features,
  mapping each item to known browser support gaps and recommending polyfills or fallbacks.
  Use when someone says "check browser support for," asks about "compatibility issues with,"
  wants to "audit browser coverage," needs to "support older browsers," or is asking
  "will this work in all browsers."
category: developer
tags: [browser-compatibility, polyfills, cross-browser, web-standards, progressive-enhancement]
author: community
---

# Cross-Browser Compatibility Checklist

Analyzes a given feature set and produces a structured compatibility checklist with browser support gaps, risk levels, and concrete polyfill or fallback recommendations; Claude uses this when asked to audit web features for cross-browser support.

## Compatibility Analysis Workflow

1. **Extract the feature set** — Identify every distinct API, CSS property, HTML element, or browser behavior mentioned or implied by the user's code, feature list, or description.

2. **Map each feature to support data** — For each feature, document:
   - Which major browsers support it natively (Chrome, Firefox, Safari, Edge, Samsung Internet)
   - Minimum supported version per browser
   - Whether mobile browsers (iOS Safari, Android Chrome) differ from desktop
   - IE11 support status (flag explicitly if relevant)

3. **Assign a risk level** to each feature:
   - 🔴 **High Risk** — Missing in one or more major modern browsers or iOS Safari
   - 🟡 **Medium Risk** — Partial support, vendor-prefixed, or flagged behind settings
   - 🟢 **Low Risk** — Baseline support across all modern browsers (may still lack IE11)

4. **Recommend a mitigation strategy** for each non-green item:
   - Named polyfill or shim (e.g., `core-js`, `resize-observer-polyfill`, `css-has-pseudo`)
   - Feature detection snippet using `@supports`, `typeof`, or `in` checks
   - Graceful degradation approach if no polyfill exists
   - Progressive enhancement pattern where applicable

5. **Flag testing priorities** — Highlight the top 3 items that are most likely to cause real-world failures and should be tested first in a browser lab or BrowserStack.

6. **Note caveats** — Call out any features where MDN or caniuse data is stale, contested, or where real-world behavior differs from spec (e.g., Safari quirks with IndexedDB, iOS PWA limitations).

## Output Format

Produce a Markdown checklist structured as follows:

```
## Cross-Browser Compatibility Checklist

**Feature Set Analyzed:** [list of features extracted]
**Target Browser Matrix:** [inferred or stated targets]

---

### Feature Breakdown

| Feature | Chrome | Firefox | Safari | Edge | iOS Safari | Risk |
|---------|--------|---------|--------|------|------------|------|
| [feature] | [version or ✅] | ... | ... | ... | ... | 🔴/🟡/🟢 |

---

### Mitigation Details

#### 🔴 [High Risk Feature Name]
- **Gap:** [which browser/version fails and how]
- **Polyfill:** `[package-name]` — [one-line install/usage note]
- **Fallback:** [alternative approach if no polyfill]
- **Detection:** `[code snippet]`

#### 🟡 [Medium Risk Feature Name]
- **Gap:** [description]
- **Fix:** [vendor prefix, workaround, or polyfill]

#### 🟢 [Low Risk Feature Name]
- **Status:** Safe for modern browsers. [IE11 note if relevant.]

---

### Testing Priorities
1. [Most critical item to test manually]
2. [Second priority]
3. [Third priority]

### Resources
- [caniuse link per high-risk feature]
- [MDN link per high-risk feature]
```

Keep the table concise and the mitigation details specific — include actual package names, version constraints, and one-line code snippets. Do not list features as "unknown"; research the support status or state the uncertainty explicitly.
