---
name: test-data-management-plan
description: >
  Defines strategies for creating, seeding, resetting, and isolating test data across environments to ensure reliable and repeatable test runs. Use when someone asks about managing test data, wants to set up test fixtures, needs to prevent test pollution, or is struggling with flaky tests caused by shared state. Also activates when someone asks how to seed a database for testing or reset data between test runs.
category: developer
tags: [testing, test-data, database, fixtures, ci-cd]
author: community
---

# Test Data Management Plan

This skill produces a structured test data management plan that defines how to create, seed, isolate, and tear down test data to ensure reliable, repeatable tests across all environments.

## Test Data Management Workflow

### 1. Audit Current Test Data Usage
- Identify all places tests read or write to databases, file systems, or external services
- Flag any tests sharing mutable state with other tests
- Note which environments (local, CI, staging) need isolated data

### 2. Choose a Data Strategy Per Test Type
- **Unit tests**: Use in-memory fakes or mocks — no real data stores
- **Integration tests**: Use a dedicated test database with transactions rolled back after each test
- **E2E tests**: Use isolated datasets seeded fresh per test suite run; never share with staging user data

### 3. Define Seed Data
- Create a canonical seed script (`seed.test.ts` or `fixtures/`) that inserts the minimum records needed
- Separate seed data by domain (users, products, orders) so tests can load only what they need
- Version seed files alongside migrations — never let schema and seed data diverge

### 4. Implement Isolation Mechanisms
- Wrap each test or test suite in a database transaction; roll back on teardown
- Use unique identifiers (UUIDs, timestamps) in seeded records to prevent cross-test collisions
- For external services, use VCR-style cassettes or mock servers scoped to each test

### 5. Define Reset Strategy
- **Between tests**: Transaction rollback or truncate-and-reseed
- **Between CI runs**: Drop and recreate the test schema, then run migrations + seed
- **Local dev**: Provide a single command (`make db-test-reset`) that wipes and reseeds in under 30 seconds

### 6. Handle Sensitive and Production Data
- Never copy production data to test environments without anonymization
- Use data generators (Faker, Factory Boy, Fishery) to produce realistic but synthetic records
- Document any required static reference data and commit it to the repo

### 7. Enforce in CI
- Run seed + migration step before test suite in CI pipeline
- Fail the build if seed script errors or if tests leave dirty state detectable by a post-run audit query
- Cache seed artifacts where possible to reduce setup time

## Output Format

Produce a **Test Data Management Plan** document with these sections:

1. **Summary** — 2–3 sentences describing the chosen strategy and scope
2. **Environment Matrix** — table mapping each environment (local, CI, staging) to its isolation mechanism and reset trigger
3. **Seed Data Inventory** — bulleted list of seed files/factories, what data they create, and which test types use them
4. **Isolation Implementation** — code snippets showing transaction rollback setup or truncate logic in the project's language/framework
5. **Reset Commands** — exact CLI commands or Makefile targets for resetting data in each environment
6. **Sensitive Data Policy** — one paragraph on anonymization or synthetic data generation approach
7. **CI Integration Steps** — ordered list of pipeline steps for data setup and teardown
8. **Open Risks** — bulleted list of any unresolved gaps (e.g., no isolation for queue-based side effects)

Length: 400–700 words. Use tables and code blocks where they add clarity. Be prescriptive — give concrete recommendations, not options menus.
