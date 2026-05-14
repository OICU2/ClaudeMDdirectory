---
name: api-error-taxonomy-builder
description: >
  Builds a structured, consistent error code hierarchy and message format for APIs, mapping every error type to HTTP status codes, user-facing messages, and internal logging metadata. Use when someone wants to standardize API error responses, asks how to organize error codes for a REST or GraphQL API, needs to define error message conventions across a service, wants to map errors to HTTP status codes systematically, or is building an error handling strategy for a backend service.
category: developer
tags: [api-design, error-handling, http-status-codes, backend, rest-api]
author: community
---

# API Error Taxonomy Builder

This skill defines a complete, consistent error code hierarchy and message format for an API, mapping error types to HTTP status codes, user-facing messages, and internal logging metadata whenever a developer needs to standardize error handling across a service.

## Error Taxonomy Workflow

### 1. Establish Error Domains
Group errors into top-level domains that reflect the API's concern areas:
- `AUTH` — authentication and authorization failures
- `VALIDATION` — request input or schema violations
- `RESOURCE` — entity not found, conflicts, or state violations
- `RATE_LIMIT` — quota and throttling errors
- `INTEGRATION` — third-party or downstream service failures
- `SERVER` — internal unexpected failures

### 2. Define the Error Code Format
Use the pattern: `DOMAIN_SUBCATEGORY_SPECIFICS` (screaming snake case)

Examples:
- `AUTH_TOKEN_EXPIRED`
- `VALIDATION_FIELD_REQUIRED`
- `RESOURCE_NOT_FOUND`
- `RATE_LIMIT_DAILY_EXCEEDED`
- `INTEGRATION_PAYMENT_TIMEOUT`
- `SERVER_UNEXPECTED`

### 3. Map Each Error to an HTTP Status Code
Apply these rules consistently:
- `400` — malformed request, validation failures
- `401` — unauthenticated (no or invalid credentials)
- `403` — authenticated but unauthorized (forbidden)
- `404` — resource not found
- `409` — state conflict (duplicate, already exists)
- `422` — semantically invalid request (passes schema, fails business rules)
- `429` — rate limit exceeded
- `502` / `503` — downstream or integration failures
- `500` — unexpected internal errors

### 4. Define Three Message Layers Per Error
For each error code, produce:
- **user_message**: Plain English, safe to expose in API responses. No stack traces, no internal details. Actionable where possible.
- **developer_message**: Technical explanation safe for API consumers (logged in response body or headers). Includes field names, constraints violated, or retry guidance.
- **internal_log_metadata**: Fields to attach to structured logs — includes `error_code`, `domain`, `severity` (`warn`/`error`/`critical`), `retryable` (boolean), and any context keys relevant to debugging.

### 5. Mark Retryability
For every error, explicitly flag:
- `retryable: true` — client can retry (e.g., rate limits, transient integration errors)
- `retryable: false` — retry will not help (e.g., validation errors, auth failures)

### 6. Assign Severity Levels
- `info` — expected client errors (404, 401, 400)
- `warn` — recoverable or suspicious (429, 409, 422)
- `error` — integration failures (502, 503)
- `critical` — unexpected server failures (500)

### 7. Enumerate the Full Taxonomy
Produce entries for every error in each domain. Do not leave domains partially defined. If the user has not specified all errors, infer a complete, realistic set based on the API type (REST, GraphQL, etc.) they describe.

## Output Format

Produce a structured taxonomy in two parts:

**Part 1: Error Code Reference Table**
A markdown table with columns:
`Error Code | HTTP Status | Severity | Retryable | User Message | Developer Message`

One row per error code. Group rows by domain with a domain header.

**Part 2: Internal Log Metadata Schema**
A JSON schema or example JSON object showing the structure of the internal log payload attached to each error event:

```json
{
  "error_code": "AUTH_TOKEN_EXPIRED",
  "domain": "AUTH",
  "
