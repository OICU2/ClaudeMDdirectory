---
name: openapi-to-postman-collection-converter
description: >
  Converts an OpenAPI specification (JSON or YAML) into a fully structured Postman collection
  with organized folders, example requests, environment variables, and test scripts. Use when
  someone says "convert my OpenAPI spec to Postman", asks about importing a Swagger file into
  Postman, wants to generate a Postman collection from an API definition, needs to turn their
  OpenAPI YAML into testable Postman requests, or wants to create a Postman collection with
  pre-written tests from their API spec.
category: developer
tags: [openapi, postman, api-testing, swagger, rest-api]
author: community
---

# OpenAPI to Postman Collection Converter

This skill converts an OpenAPI 2.0/3.x specification into a complete Postman Collection v2.1 JSON file with folders per tag, example requests for every endpoint, environment variable placeholders, and Postman test scripts.

## Conversion Workflow

### 1. Parse the OpenAPI Spec
- Accept OpenAPI as JSON or YAML (inline or file path reference)
- Identify the spec version (Swagger 2.0 vs OpenAPI 3.x) and adjust extraction logic accordingly
- Extract: `info` (title, version), `servers`/`host`+`basePath`, `paths`, `components`/`definitions`, `securitySchemes`

### 2. Build the Environment Template
- Create a Postman environment JSON with these variables:
  - `baseUrl` → first server URL or `{{scheme}}://{{host}}{{basePath}}`
  - `scheme`, `host` if needed for Swagger 2.0
  - One variable per security scheme (e.g., `apiKey`, `bearerToken`, `basicAuthUser`, `basicAuthPassword`)
  - Any path-level variables detected across endpoints (e.g., `userId`, `orderId`)
- Set all values to empty strings with `enabled: true`

### 3. Organize Requests into Folders
- Create one Postman folder per OpenAPI `tag`; untagged endpoints go into a `General` folder
- Within each folder, sort requests by path then HTTP method (GET before POST before PUT before PATCH before DELETE)

### 4. Build Each Request Item
For every `path` + `method` combination:
- **Name**: Use `operationId` if present; otherwise derive from method + path (e.g., `GET /users/{id}` → `Get User By Id`)
- **Method**: Uppercase HTTP method
- **URL**: `{{baseUrl}}` + path; convert `{param}` → `:param` for Postman path variables
- **Query params**: Extract all `in: query` parameters; set key, description, and `disabled: true` for optional ones
- **Headers**: Add `Content-Type` based on `requestBody` media type; add auth headers from security schemes (using environment variable references)
- **Request body**: For `requestBody` (OAS3) or `body`/`formData` parameters (OAS2), generate an example body:
  - If an `example` or `examples` field exists in the spec, use it directly
  - Otherwise, synthesize a minimal example from the schema by substituting type-appropriate placeholder values (`"string"` → `"example_string"`, `integer` → `0`, `boolean` → `true`, arrays → single-element arrays with the item schema filled in)
- **Path variables**: Add `variable` entries in the URL object for every `:param` with a description pulled from the parameter spec

### 5. Write Postman Test Scripts
For each request, add a `test` event script with these assertions:
- Status code check: assert `pm.response.code` is in the expected 2xx range based on the spec's `responses` object (use the lowest 2xx key defined, defaulting to 200)
- Response time check: `pm.expect(pm.response.responseTime).to.be.below(2000)`
- Content-Type check: if the response schema defines a media type, assert the `Content-Type` header contains that type
- Schema validation (if response schema present): use `pm.response.json()` and assert required fields exist
- Auto-extract and set variables: for responses containing an `id`, `token`, or `accessToken` field in the
