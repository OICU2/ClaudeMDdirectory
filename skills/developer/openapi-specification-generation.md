---
name: openapi-specification-generation
description: >
  Analyzes existing codebase routes, controllers, and models to generate complete, accurate OpenAPI/Swagger specification files. Use when someone says "generate API docs", asks to "create a Swagger spec", wants to "document my REST API", needs to "export OpenAPI from my code", or says "write an OpenAPI spec for my endpoints".
category: developer
tags: [openapi, swagger, api-documentation, rest-api, code-analysis]
author: community
---

# OpenAPI Specification Generation

This skill scans routes, controllers, and request/response models in an existing codebase to produce a complete, valid OpenAPI 3.0 (or Swagger 2.0) specification file ready for use with tools like Swagger UI, Postman, or API gateways.

## Workflow

1. **Identify the framework and routing structure** — detect the language/framework (Express, FastAPI, Spring, Rails, Django, etc.) to know where routes and controllers live.

2. **Extract all endpoints** — collect HTTP method, path, path parameters, and query parameters from route definitions and controller decorators/annotations.

3. **Infer request bodies** — locate request model classes, validation schemas (Pydantic, Zod, Joi, Bean Validation, etc.) or middleware to define `requestBody` schemas with required fields and types.

4. **Infer response schemas** — examine return types, response serializers, and any existing JSDoc/docstrings to define response objects per status code (200, 201, 400, 404, 500, etc.).

5. **Identify authentication** — detect auth middleware (JWT, API key, OAuth2, Basic) and populate the `securitySchemes` and per-operation `security` fields.

6. **Map data models to components** — extract shared models/DTOs into `components/schemas` and reference them with `$ref` to avoid duplication.

7. **Populate metadata** — set `info.title`, `info.version`, `info.description`, and `servers` based on project config files (package.json, application.yml, settings.py, etc.).

8. **Validate completeness** — flag any endpoints missing response definitions, undocumented parameters, or ambiguous types as inline `# TODO` comments in the output.

9. **Choose spec version** — default to OpenAPI 3.0.3 unless the project already uses Swagger 2.0 tooling, in which case target Swagger 2.0.

## Output Format

Produce a single `openapi.yaml` (preferred) or `openapi.json` file with:

- **Full OpenAPI 3.0.3 structure**: `openapi`, `info`, `servers`, `paths`, `components`
- **Every discovered endpoint** under `paths`, keyed by route pattern (e.g., `/users/{id}`)
- **Each operation** containing: `summary`, `operationId`, `tags`, `parameters`, `requestBody` (if applicable), `responses`, and `security` (if applicable)
- **All schemas** defined in `components/schemas` with `type`, `properties`, `required`, and `example` fields
- **Inline `# TODO:` comments** for any fields that could not be confidently inferred
- **File length**: as long as needed to cover all endpoints — do not truncate
- Wrap the output in a fenced code block labeled `yaml` or `json`
