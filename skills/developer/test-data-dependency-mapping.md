---
name: test-data-dependency-mapping
category: developer
description: >
  Analyzes a test suite codebase to map every test file and suite to the fixtures, seed data, factories, and external service mocks it depends on, then identifies shared or overlapping dependencies that introduce flakiness. Use when someone says "my tests are flaky," asks about test data dependencies, wants to find which tests share fixtures, or needs to understand why parallel test runs fail. Also triggers when someone wants to audit test isolation or identify fragile shared state.
tags: [testing, fixtures, flakiness, dependencies, test-isolation]
author: community
---

# Test Data Dependency Mapping

Scans all test files in a project to produce a structured map of every test suite's data dependencies — fixtures, mocks, factories, and database seeds — then surfaces shared dependencies that cause non-deterministic or order-dependent test failures.

## Analysis Workflow

1. **Discover test files**: Recursively find all test files (e.g., `*.test.*`, `*.spec.*`, `*_test.*`, files in `__tests__/`, `test/`, `spec/`) from the project root or specified directory.

2. **Extract dependencies per file**: For each test file, identify:
   - **Fixture files**: Static JSON/YAML/CSV files loaded via `require`, `import`, `readFile`, or framework helpers (`fixture()`, `getFixture()`, etc.)
   - **Factory calls**: Invocations of factory libraries (FactoryBot, factory-girl, Faker, Fishery, etc.) and what entity they produce
   - **Database seeds**: Calls to `seed()`, `truncate()`, `migrate()`, `beforeAll` DB setup, or ORM-specific seeding helpers
   - **External service mocks**: `jest.mock()`, `sinon.stub()`, `nock()`, `msw` handlers, `WireMock` stubs, `VCR` cassettes — record the service/module being mocked
   - **Shared setup files**: References to `setupFilesAfterFramework`, `conftest.py`, `spec_helper`, `support/` files, global `beforeAll`/`afterAll` hooks

3. **Detect shared dependencies**: Cross-reference all extracted dependencies and flag:
   - Any fixture file, factory type, mock, or seed used by **more than one test suite**
   - Any dependency that is **mutated** (write operations, state changes) rather than read-only
   - Any `beforeAll`/global setup that is not scoped to a single describe block
   - Database tables or collections written to by multiple suites without cleanup

4. **Assess fragility**: For each shared dependency, assign a risk level:
   - 🔴 **High**: Mutable shared state (DB records, global variables, singleton mocks) written by multiple suites
   - 🟡 **Medium**: Read-only shared fixtures that are large or frequently changed
   - 🟢 **Low**: Immutable, small fixtures used across suites with no write access

5. **Identify flakiness patterns**: Flag specific anti-patterns:
   - Tests that rely on insertion order in shared DB tables
   - Mocks registered globally without per-test teardown
   - Fixtures imported and then mutated in-place
   - Parallel-unsafe seeds (no transaction rollback or schema isolation)
   - Missing `afterEach`/`afterAll` cleanup for shared resources

## Output Format

Produce three sections:

### 1. Dependency Map (table per test suite)
For each test file, output a table:

```
## src/tests/orders.test.ts
| Dependency Type  | Name / Path                        | Shared With                          | Risk  |
|------------------|------------------------------------|--------------------------------------|-------|
| Fixture          | fixtures/orders.json               | cart.test.ts, checkout.test.ts       | 🟡    |
| Factory          | UserFactory (user entity)          | auth.test.ts                         | 🔴    |
| DB Seed          | seeds/products.sql                 | inventory.test.ts                    | 🔴    |
| Mock             | nock: api.payments.com             | None                                 | 🟢    |
```

### 2. Shared Dependency Heat Map
A consolidated list of all dependencies used by more than one suite, sorted by number
