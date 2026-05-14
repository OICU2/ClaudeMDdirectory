---
name: unit-test-gap-identification
category: developer
description: >
  Analyzes existing test files against source modules to identify untested functions, branches,
  and edge cases, then produces prioritized scaffolds for missing coverage. Use when someone says
  "find what's not tested," asks about test coverage gaps, wants to improve their test suite,
  needs to know which functions lack unit tests, or is trying to increase code coverage before
  a release.
tags: [testing, coverage, unit-tests, code-quality, scaffolding]
author: community
---

# Unit Test Gap Identification

This skill scans source files and their corresponding test files to surface untested code paths, missing edge cases, and coverage gaps, then generates ready-to-use test scaffolds prioritized by risk.

## Analysis Workflow

1. **Inventory source symbols** — Parse every source file in scope. Build a list of all exported and non-exported functions, methods, classes, and branches (conditionals, loops, error handlers, early returns).

2. **Inventory existing tests** — Parse all test files. Map each `it`, `test`, `describe`, or equivalent block to the source symbol it exercises. Note what inputs, branches, and assertions are covered.

3. **Compute the gap matrix** — For each source symbol, determine:
   - Whether any test references it at all (zero coverage)
   - Which branches are exercised (partial coverage)
   - Which edge cases are missing: null/undefined inputs, empty collections, boundary values, thrown errors, async rejection, permission failures, and type coercion

4. **Prioritize gaps** — Rank uncovered items by risk:
   - **P1 Critical**: public API functions with zero tests, error-handling paths, auth/permission logic
   - **P2 High**: branching logic tested only on the happy path, async code without rejection tests
   - **P3 Medium**: private helpers with complex logic, boundary conditions on numeric inputs
   - **P4 Low**: trivial getters/setters, pure delegators with no logic

5. **Generate scaffolds** — For each gap, write a concrete test stub using the project's existing test framework and style (auto-detect from package.json and existing test syntax). Stubs must include: the `describe`/`it` structure, realistic input values, a comment explaining what condition is being tested, and a `// TODO: add assertion` marker.

6. **Flag untestable patterns** — If source code is not easily testable (missing dependency injection, hard-coded globals, no error propagation), note it explicitly with a one-line refactor suggestion.

## Output Format

Produce three sections:

**Section 1 — Coverage Summary Table**
A markdown table with columns: `Symbol`, `File`, `Coverage Status`, `Priority`, `Missing Cases`. One row per gap. Sort by priority descending.

**Section 2 — Test Scaffolds**
One fenced code block per gap, labeled with the file path where it should be added. Use the project's actual test framework syntax. Each block is self-contained and copy-pasteable.

```js
// File: src/__tests__/payments.test.js
describe('processRefund', () => {
  it('should throw when amount exceeds original charge', () => {
    // Tests: error branch when refund > original
    const charge = { amount: 50 };
    // TODO: add assertion — expect(fn).toThrow(...)
  });
});
```

**Section 3 — Refactor Recommendations** (only if untestable patterns exist)
A bulleted list of specific code locations and the minimal change needed to make them testable (e.g., "inject `db` as a parameter instead of importing it directly at line 42 of `orders.js`").

Keep the total response focused — omit Section 3 entirely if no untestable patterns are found. Do not restate code that already has adequate test coverage.
