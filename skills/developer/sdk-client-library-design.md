---
name: sdk-client-library-design
description: >
  Designs the architecture and generates production-ready boilerplate for SDK client libraries, including authentication, retry logic, and error handling. Use when someone says "I need to build an SDK", asks about "client library design", wants to "wrap an API in a library", needs to "create a developer SDK", or wants to "package an API for consumption". Covers authentication strategies, request lifecycle, error normalization, and usage documentation.
category: developer
tags: [sdk, api-design, client-library, developer-tooling, boilerplate]
author: community
---

# SDK Client Library Design

This skill designs the full architecture and generates boilerplate code for SDK client libraries when a user wants to wrap an API into a reusable, developer-friendly package.

## Workflow

### 1. Gather Requirements
Ask (or infer from context) the following before generating:
- Target language/runtime (Python, TypeScript, Go, etc.)
- API type (REST, GraphQL, gRPC, WebSocket)
- Authentication method (API key, OAuth2, Bearer token, mTLS)
- Sync vs. async support needed
- Target audience (internal teams, open-source, third-party devs)

### 2. Design the Architecture
Define and document these layers:

**Client Core**
- Single entry-point class/struct (e.g., `Client`, `SDKClient`)
- Constructor accepts: base URL, auth credentials, optional config (timeout, retries, logger)
- Expose resource-namespaced accessors (e.g., `client.users`, `client.payments`)

**Authentication Handler**
- Encapsulate auth in a dedicated module/class
- Support credential refresh (for OAuth2/token expiry)
- Inject auth headers/params at the request layer, not in resource methods
- Never log or expose raw credentials

**HTTP/Transport Layer**
- Centralize all HTTP calls in one place (e.g., `_request()` method)
- Apply default headers, base URL resolution, and timeout here
- Return raw response objects before deserialization

**Retry Logic**
- Implement exponential backoff with jitter
- Retry on: 429 (rate limit), 500, 502, 503, 504
- Do NOT retry on: 400, 401, 403, 404, 422
- Configurable: max retries (default 3), initial delay (default 500ms), max delay (default 10s)
- Respect `Retry-After` headers when present

**Error Normalization**
- Define a base SDK error class (e.g., `SDKError`)
- Subclass for: `AuthenticationError`, `RateLimitError`, `NotFoundError`, `ValidationError`, `ServerError`
- Each error includes: HTTP status, error code, message, request ID (if available), raw response body
- Wrap all transport/network errors into `SDKConnectionError`

**Resource Modules**
- One class per API resource group (e.g., `UsersResource`, `OrdersResource`)
- Methods map 1:1 to API endpoints
- Methods return typed response objects or dataclasses, not raw dicts
- Include docstrings with parameter descriptions and example responses

### 3. Generate Boilerplate Files
Produce the following file structure:

```
sdk/
├── __init__.py          # Public exports
├── client.py            # Main Client class
├── auth.py              # Auth handler(s)
├── http.py              # Transport/request layer
├── retry.py             # Retry logic
├── errors.py            # Error hierarchy
├── models/
│   └── base.py          # Base response model
├── resources/
│   └── example.py       # One sample resource module
└── README.md            # Usage documentation
```

Generate complete, functional code for each file — no placeholder comments like `# TODO: implement`.

### 4. Write Usage Documentation
Include a `README.md` with:
- Installation instructions
- Quickstart: initialize client, make one call, handle an error
- Auth configuration examples (all supported methods)
- Retry and timeout configuration
- Error handling patterns with `try/except` or equivalent
- At least 3 real usage examples for the sample resource

### 5. Review Checklist
Before finalizing output, verify:
- [ ] Auth credentials never leak into
