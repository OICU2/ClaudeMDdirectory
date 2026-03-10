---
name: api-integration
description: >
  Guides complete API integration workflows for REST, GraphQL, and webhook-based services. Use when someone says "I need to connect to an API", asks about "consuming a third-party service", wants to "integrate with [platform] API", needs help "setting up webhooks", or is trying to "fetch data from an external service".
category: developer
tags: [api, rest, graphql, webhooks, integration]
author: community
---

# API Integration

Handles end-to-end API integration tasks including authentication setup, request construction, response handling, and error management for REST, GraphQL, and webhook patterns.

## Integration Workflow

1. **Identify the API type** — Determine REST, GraphQL, or webhook before writing any code.
2. **Review the API contract** — Ask for or locate the API docs, base URL, auth method (API key, OAuth 2.0, Bearer token, Basic auth), and rate limits.
3. **Set up authentication** — Implement auth in a reusable layer (e.g., interceptor, header factory, or middleware). Never hardcode credentials; use environment variables.
4. **Build the client**:
   - REST: construct base client with default headers, timeout, and retry logic.
   - GraphQL: set up query/mutation wrappers with variable support; handle `errors` array separately from HTTP errors.
   - Webhooks: create an endpoint that validates signatures (HMAC, shared secret), parses the payload, and returns `200` immediately before processing.
5. **Handle responses rigorously**:
   - Check HTTP status codes explicitly (2xx, 4xx, 5xx).
   - Parse and type the response body.
   - Surface API-level errors (e.g., GraphQL `errors`, JSON error objects) distinctly from network errors.
6. **Implement retries and rate limiting** — Use exponential backoff for 429/5xx responses; respect `Retry-After` headers.
7. **Log and monitor** — Log request method, URL, status code, and latency. Never log auth tokens or sensitive payload fields.
8. **Write integration tests** — Mock the HTTP layer (e.g., `msw`, `nock`, `responses`) and test success, auth failure, rate-limit, and timeout scenarios.

### Common Patterns by Type

**REST**
```
GET    /resources        → list
POST   /resources        → create
GET    /resources/:id    → read
PUT    /resources/:id    → replace
PATCH  /resources/:id    → update
DELETE /resources/:id    → delete
```

**GraphQL**
- Separate query, mutation, and subscription files.
- Use fragments for reusable field sets.
- Always request only needed fields.

**Webhooks**
- Validate signature before any processing.
- Respond `200 OK` within 3 seconds; offload work to a queue.
- Implement idempotency using event IDs.

## Output Format

Produce the following artifacts in order:

1. **Integration checklist** — Bullet list confirming: API type, auth method, base URL, rate limits noted, env vars identified.
2. **Client module** — Fully working code file with auth, base configuration, and 1–2 example methods (one happy path, one error case). Include inline comments for non-obvious logic.
3. **Example usage snippet** — 5–15 lines showing how to call the client from application code.
4. **Error handling reference** — Small table or list mapping error codes/conditions to recommended handling behavior.
5. **Test stubs** — Skeleton test cases for: successful request, auth error, rate limit, network timeout.

Use the language and framework already present in the user's codebase. If none is specified, default to TypeScript with `fetch`. Keep each section clearly labeled with a heading.