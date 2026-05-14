---
name: test-fixture-generation
category: developer
description: >
  Creates realistic, edge-case-covering test fixtures and seed data for unit and integration tests based on schema definitions and business rules. Use when someone says "generate test data", asks about "creating test fixtures", wants to "seed a database for testing", needs "mock data for unit tests", or asks to "create sample data that covers edge cases".
tags: [testing, fixtures, seed-data, unit-tests, integration-tests]
author: community
---

# Test Fixture Generation

This skill generates comprehensive, realistic test fixtures and seed data that cover happy paths, edge cases, and boundary conditions based on provided schemas and business rules.

## Fixture Generation Workflow

1. **Parse the schema or data model** — Identify all fields, types, constraints (required, unique, nullable), relationships (FK, one-to-many), and any enums or allowed values.

2. **Extract business rules** — Note any domain-specific constraints (e.g., "end date must be after start date", "discount cannot exceed price", "admin users cannot have a null organization").

3. **Plan fixture categories** — Always generate fixtures across these categories:
   - **Happy path**: Valid, typical records that represent normal usage
   - **Boundary values**: Min/max lengths, zero quantities, largest allowed numbers, empty arrays vs. populated arrays
   - **Edge cases**: Null optional fields, Unicode/emoji in string fields, very long strings at the max length, negative numbers where allowed
   - **Relational integrity**: Orphaned records (if testing cascades), circular references (if applicable), deeply nested hierarchies
   - **Business rule violations**: One fixture per rule that should fail validation (useful for negative tests)

4. **Generate realistic data** — Use plausible names, real-looking emails, valid-format phone numbers, realistic dates, and coherent relationships. Avoid `foo`, `bar`, `test123` unless specifically testing string format validation.

5. **Annotate each fixture** — Add a short comment or key explaining what scenario each fixture tests and whether it is expected to pass or fail validation.

6. **Respect the target format** — Output in the format specified (JSON, SQL INSERT, factory function, YAML, TypeScript object literals, Python dicts, etc.). If no format is specified, default to JSON.

7. **Include a coverage summary** — After the fixtures, list which edge cases and rules are covered and flag any gaps if the schema is ambiguous.

## Output Format

Produce the following sections in order:

**1. Fixture Set** — All fixtures in the requested format, grouped by category (happy path, boundary, edge case, invalid). Each fixture has an inline comment stating its purpose.

**2. Coverage Table** — A compact markdown table with columns: `Fixture Name | Category | Field/Rule Tested | Expected Outcome (pass/fail)`.

**3. Gap Notes** — A bulleted list of any ambiguities in the schema or rules that required assumptions, and any scenarios that could not be covered without additional information.

Length: Generate a minimum of 8 fixtures for simple schemas; scale up (15–25+) for schemas with more than 10 fields or complex relational rules. Do not pad with redundant fixtures — every fixture must test a distinct scenario.
