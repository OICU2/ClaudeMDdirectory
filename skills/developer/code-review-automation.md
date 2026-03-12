---
name: code-review-automation
category: developer
description: >
  Automates structured code review by analyzing pull requests and code diffs for bugs, style violations, security vulnerabilities, and performance problems with actionable inline feedback. Use when someone says "review my code", asks to "check this PR", wants to "analyze my diff for issues", needs a "code review", or says "look over these changes before I merge".
tags: [code-review, pull-requests, security, performance, static-analysis]
author: community
---

# Code Review Automation

This skill performs a comprehensive, structured code review of any provided code diff, PR, or snippet and returns prioritized, inline feedback across four categories: bugs, style, security, and performance.

## Review Workflow

1. **Parse the input** — Identify the language, framework, and scope of changes. If a full diff is provided, focus on changed lines; if a snippet, review in full.

2. **Bug Analysis** — Check for:
   - Logic errors, off-by-one errors, incorrect conditionals
   - Null/undefined dereferences and missing error handling
   - Race conditions, incorrect type coercions, or API misuse
   - Unreachable code or dead branches

3. **Security Scan** — Flag:
   - Injection vulnerabilities (SQL, command, XSS, SSRF)
   - Hardcoded secrets, tokens, or credentials
   - Insecure deserialization or improper input validation
   - Over-permissive access controls or missing authentication checks
   - Use of deprecated or known-vulnerable library calls

4. **Performance Review** — Identify:
   - N+1 query patterns or unnecessary database calls in loops
   - Missing indexes implied by query patterns
   - Synchronous blocking calls in async contexts
   - Excessive memory allocation or avoidable object creation
   - Repeated expensive computations that could be cached

5. **Style & Maintainability** — Note:
   - Violations of naming conventions for the detected language
   - Functions exceeding ~30 lines or doing more than one thing
   - Missing or misleading comments on complex logic
   - Code duplication that should be extracted
   - Inconsistent formatting relative to surrounding code

6. **Prioritize findings** — Assign each finding a severity: `CRITICAL`, `HIGH`, `MEDIUM`, or `LOW`.

7. **Generate fix suggestions** — For every finding, provide a concrete corrected code snippet or a specific action to resolve it.

## Output Format

Produce the review in this exact structure:

```
## Code Review Summary
- **Files/Scope Reviewed:** [filename(s) or description]
- **Language/Framework:** [detected language and framework]
- **Total Issues Found:** [N] (Critical: X | High: X | Medium: X | Low: X)

---

## 🔴 Critical Issues
### [CRITICAL] [Short title] — Line [N]
**Category:** Bug | Security | Performance | Style
**Issue:** [One sentence describing the problem and why it matters.]
**Current code:**
```[lang]
[offending snippet]
```
**Suggested fix:**
```[lang]
[corrected snippet]
```

---

## 🟠 High Issues
[Same structure as Critical]

---

## 🟡 Medium Issues
[Same structure]

---

## 🔵 Low / Style Issues
[Same structure]

---

## ✅ What Looks Good
[2–5 bullet points noting specific things done well — concrete, not generic praise.]

---

## Recommended Next Steps
1. [Most important action]
2. [Second action]
3. [Optional: suggest a follow-up review after fixes]
```

- If no issues exist in a severity tier, omit that section entirely.
- Every issue must have a suggested fix — never flag without a remedy.
- Keep issue descriptions under 3 sentences; let the code speak.
- If the input is too large to review fully, state the scope reviewed and ask for chunked input.
