---
name: api-mock-contract-alignment-checker
category: developer
description: >
  Compares a mock server's response definitions against the live OpenAPI specification to detect schema drift, missing endpoints, and type mismatches. Use when someone says "my mock is out of sync with the API", asks about contract drift between mocks and OpenAPI, or wants to verify their mock server matches the real spec. Also triggers when someone notices "the mock returns different fields than production" or needs to audit mock fidelity before integration testing.
tags: [api, openapi, mocking, contract-testing, schema-validation]
author: community
---

# API Mock Contract Alignment Checker

This skill audits a mock server's response definitions against an OpenAPI contract and produces a structured drift report showing every misalignment, missing endpoint, and schema violation.

## Analysis Workflow

1. **Collect Inputs**
   - Request the OpenAPI spec file (JSON or YAML) or its URL
   - Request the mock server's response definitions (WireMock stubs, MSW handlers, Prism config, Postman collection, or raw JSON fixtures)
   - Confirm the base path and version being compared

2. **Extract Mock Endpoints**
   - Parse each mock definition to extract: HTTP method, path pattern, status code, and response body schema
   - Normalize path parameters (e.g., `/users/{id}` vs `/users/:id`) to a canonical form for comparison

3. **Extract Contract Endpoints**
   - Parse the OpenAPI spec to extract: HTTP method, path, status code, and response schema per `content-type`
   - Resolve all `$ref` references inline before comparing

4. **Run Alignment Checks**
   - **Missing in Mock**: Endpoints defined in the spec but absent from the mock
   - **Phantom in Mock**: Endpoints in the mock with no corresponding spec entry
   - **Status Code Mismatch**: Mock returns a status code not declared in the spec for that endpoint
   - **Field Drift**: Response body fields present in mock but absent from spec schema, or required spec fields missing from mock response
   - **Type Mismatch**: Fields where the mock uses a different JSON type than the spec declares (e.g., string vs integer)
   - **Nullable Violations**: Fields the spec marks non-nullable that the mock returns as null
   - **Enum Violations**: Mock returns values outside the spec's defined enum list

5. **Severity Classification**
   - `BREAKING`: Missing required fields, wrong types, phantom endpoints used in tests
   - `WARNING`: Missing optional fields, undocumented status codes
   - `INFO`: Extra fields in mock not in spec, cosmetic differences

## Output Format

Produce a structured report with these sections:

```
## Mock Contract Alignment Report
Spec: [filename/url] | Mock: [source] | Date: [timestamp]

### Summary
- Total endpoints in spec: N
- Total endpoints in mock: N
- Matched: N | Missing from mock: N | Phantom in mock: N
- Breaking issues: N | Warnings: N | Info: N

### Breaking Issues
[BREAKING] POST /users — Response body missing required field: `email` (string)
[BREAKING] GET /orders/{id} — Field `status` type mismatch: mock=string, spec=enum["pending","shipped","delivered"]

### Warnings
[WARNING] GET /products — Mock returns 404 but spec does not declare it for this endpoint
[WARNING] DELETE /sessions — Mock missing optional field: `message` (string)

### Info
[INFO] GET /users — Mock includes undocumented field: `internalId`

### Unmatched Endpoints
Missing from mock: PUT /users/{id}, PATCH /profile
Phantom in mock:  GET /legacy/items, POST /debug/reset

### Recommended Fixes
1. Add `email` field to POST /users mock response
2. Constrain `status` to enum values in GET /orders/{id} fixture
3. Remove or document GET /legacy/items in the OpenAPI spec
```

- Group issues by severity, then by endpoint
- Include the offending field name, expected type/value, and actual mock value for every field-level issue
- If no issues found, output a single "✅ Mock is fully aligned with the contract" confirmation with the matched endpoint count
