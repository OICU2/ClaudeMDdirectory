---
name: backend-development
description: >
  Builds server-side applications, REST and GraphQL APIs, database schemas, and business logic layers for web and mobile applications. Use when someone says "build me an API", asks about server architecture, wants to create a backend service, needs help with database design, or is setting up authentication and authorization systems.
category: developer
tags: [backend, api, database, server, rest, graphql]
author: community
---

# Backend Development

This skill guides Claude to design and implement production-ready server-side systems including APIs, data models, middleware, and infrastructure configuration.

## Backend Development Workflow

1. **Clarify requirements first** — Identify the application type (REST, GraphQL, gRPC), expected traffic, auth requirements, and database needs before writing code.

2. **Choose the stack explicitly** — State the language, framework, and database upfront (e.g., Node.js + Express + PostgreSQL, Python + FastAPI + MongoDB). Match choices to the use case and any constraints given.

3. **Design the data layer first** — Define schemas, models, or entity relationships before writing route or handler logic. Include field types, constraints, indexes, and relationships.

4. **Structure the project cleanly** — Separate concerns: routes/controllers handle HTTP, services handle business logic, repositories/models handle data access. Never mix layers.

5. **Implement endpoints systematically** — For each endpoint: define the route, validate input, call the service layer, handle errors, and return a consistent response shape.

6. **Add authentication and authorization** — Implement JWT, session, or OAuth flows where required. Apply middleware for route protection. Never skip auth on sensitive endpoints.

7. **Handle errors and edge cases** — Use centralized error handling. Return meaningful HTTP status codes. Validate all inputs. Never expose stack traces or internal errors to clients.

8. **Write environment-aware configuration** — Use environment variables for secrets, database URLs, and third-party keys. Never hardcode credentials.

9. **Include basic security hardening** — Apply rate limiting, CORS configuration, input sanitization, and dependency hygiene by default.

10. **Provide setup and run instructions** — Always include commands to install dependencies, set up the database, run migrations, and start the server.

## Output Format

Produce the following for each backend implementation:

- **Project structure** — A file tree showing all directories and key files
- **Schema/model definitions** — Full database schema or ORM models with types and constraints
- **Route definitions** — All endpoints with HTTP method, path, and purpose listed
- **Implementation code** — Complete, runnable code files (not pseudocode) for models, services, controllers, middleware, and server entry point
- **Environment template** — A `.env.example` file listing all required variables with placeholder values
- **Setup instructions** — Step-by-step terminal commands to get the server running locally
- **API reference** — A brief table or list of endpoints: method, path, auth required, request body shape, response shape

Code must be complete and executable — no placeholder functions, no `// TODO` gaps unless explicitly flagged as optional extensions.