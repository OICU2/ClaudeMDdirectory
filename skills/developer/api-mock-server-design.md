---
name: api-mock-server-design
description: >
  Designs and scaffolds a complete mock API server with realistic fixture responses, error states,
  and latency simulation for frontend development and testing. Use when someone wants to mock a
  backend API, asks about simulating API responses for frontend work, needs to create test fixtures
  for an API, wants to build a local dev server without a real backend, or is setting up an
  integration testing environment with fake endpoints.
category: developer
tags: [api, mocking, testing, fixtures, backend-simulation]
author: community
---

# API Mock Server Design

This skill designs and scaffolds a fully functional mock API server with realistic data, configurable error states, and latency simulation — activated when someone needs to simulate a backend API for frontend development or testing.

## Workflow

### 1. Gather Requirements
- Identify the target framework/runtime (Node.js, Python, etc.) and preferred mock library (json-server, msw, Express, FastAPI, WireMock, Prism)
- Ask for or infer the API contract: endpoints, HTTP methods, request/response shapes
- Clarify whether OpenAPI/Swagger spec exists — if so, use it as the source of truth
- Identify error scenarios needed (401, 403, 404, 422, 429, 500, network timeout)
- Ask for latency requirements (fixed delay, random range, per-endpoint overrides)

### 2. Design the Server Structure
Scaffold with this directory layout:
```
mock-server/
├── index.js (or main entry point)
├── routes/
│   └── [resource].js       # one file per resource
├── fixtures/
│   └── [resource].json     # static fixture data
├── middleware/
│   ├── latency.js          # configurable delay injection
│   ├── errorSimulator.js   # toggle error states
│   └── auth.js             # fake auth token validation
├── config.js               # port, delays, error rate settings
└── README.md
```

### 3. Build Fixture Data
- Generate realistic, domain-appropriate fake data (not "foo/bar" placeholders)
- Include at least 10–20 records for list endpoints
- Ensure relational consistency (foreign keys reference real IDs in other fixtures)
- Include edge cases: empty arrays, null fields, max-length strings, unicode characters

### 4. Implement Latency Simulation
```js
// middleware/latency.js example
const delay = (req, res, next) => {
  const base = config.latency.base ?? 100;
  const jitter = Math.random() * (config.latency.jitter ?? 200);
  setTimeout(next, base + jitter);
};
```
- Support per-endpoint latency overrides via config
- Include a "slow network" mode (2000–5000ms) toggle

### 5. Implement Error State Simulation
- Add a query param or header flag (`?simulateError=500`) to trigger specific errors on any endpoint
- Add configurable random error rate (e.g., 5% of requests return 500)
- Include realistic error response bodies matching the API's error schema
- Implement auth failure simulation (invalid/expired token responses)

### 6. Add CRUD State Management
- For POST/PUT/PATCH/DELETE endpoints, mutate in-memory state (not just static files)
- Provide a `POST /reset` endpoint to restore fixtures to original state
- Return correct HTTP status codes: 201 for creates, 204 for deletes, 422 for validation errors

### 7. Write the README
Include: setup commands, how to toggle error modes, how to adjust latency, how to reset state, and example curl/fetch calls for each endpoint.

## Output Format

Produce the following concrete artifacts:

1. **File tree** — full directory structure with filenames
2. **Entry point file** — complete, runnable server code with all middleware wired up
3. **One route file** — fully implemented example for the primary resource
4. **One fixture file** — realistic JSON data for that resource (10+ records)
5. **Latency middleware** — complete implementation
6. **Error simulator middleware** — complete implementation with toggle mechanism
7. **config.js** — all tunable settings in one place with documented defaults
8. **README.md** — setup, usage, and
