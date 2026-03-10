---
name: software-testing
description: >
  Writes and runs unit, integration, and end-to-end tests to verify software correctness and catch regressions.
  Use when someone says "write tests for this", asks about "how do I test this code", wants to "add test coverage",
  needs to "verify this function works correctly", or wants to "set up a testing suite" for their project.
category: developer
tags: [testing, unit-tests, integration-tests, tdd, quality-assurance]
author: community
---

# Software Testing

Generates comprehensive test suites for code across unit, integration, and end-to-end levels, choosing the right testing framework and patterns for the language and context.

## Testing Workflow

1. **Identify scope**: Determine what needs testing — a single function, a module, an API, or a full user flow.
2. **Choose the right test type**:
   - **Unit**: Isolate and test a single function or class with mocked dependencies.
   - **Integration**: Test how two or more components interact (e.g., service + database, API + handler).
   - **End-to-end**: Simulate real user flows through the full stack.
3. **Select the framework** based on the language and existing project setup:
   - JS/TS: Jest, Vitest, Mocha, Playwright, Cypress
   - Python: pytest, unittest
   - Go: `testing` package, testify
   - Java: JUnit, Mockito
   - Ruby: RSpec, Minitest
4. **Analyze the code under test**:
   - Identify all public interfaces, edge cases, and failure modes.
   - Note external dependencies that need mocking or stubbing.
5. **Write tests following the AAA pattern**:
   - **Arrange**: Set up inputs, mocks, and preconditions.
   - **Act**: Call the function or trigger the behavior.
   - **Assert**: Verify the output, side effects, or state changes.
6. **Cover these cases for every testable unit**:
   - Happy path (expected valid inputs)
   - Edge cases (empty input, null, zero, boundary values)
   - Error cases (invalid input, thrown exceptions, rejected promises)
7. **Mock external dependencies** (databases, APIs, file systems) to keep tests fast and deterministic.
8. **Run the tests** using the project's test command and report results. If tests fail, diagnose and fix.

## Output Format

Produce the following for each testing task:

**Test file(s)**: Complete, runnable test code with:
- Correct import/require statements for the chosen framework
- Descriptive `describe` and `it`/`test` block names that read as plain English
- One assertion per test where possible; grouped logically by behavior
- Inline comments only where test logic is non-obvious

**Setup instructions** (if the framework is not already configured):
- Install command (e.g., `npm install --save-dev jest`)
- Minimal config file or `package.json` snippet
- Command to run the tests

**Coverage summary**: A short bullet list of what is and is not covered, and why (e.g., "External DB calls are mocked; actual DB schema validation not covered").

Keep test files focused — no more than one top-level `describe` block per file unless testing multiple related behaviors of the same module.
