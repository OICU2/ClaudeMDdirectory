---
name: docker-compose-environment-design
description: >
  Designs a complete multi-service Docker Compose configuration for local development environments with proper networking, volume mounts, environment variable injection, and health checks. Use when someone says "set up Docker Compose for my project," asks about "containerizing a multi-service app," wants to "define a local dev environment with Docker," needs to "wire up services with Docker networking," or is trying to "configure health checks and volumes in Compose."
category: developer
tags: [docker, docker-compose, devops, containers, local-development]
author: community
---

# Docker Compose Environment Design

This skill generates a production-quality `docker-compose.yml` and supporting configuration for multi-service local development environments, including networking, volumes, environment variables, and health checks.

## Workflow

1. **Identify services** — Ask the user (or infer from context) which services are needed: app servers, databases, caches, queues, reverse proxies, etc.

2. **Define the network topology** — Create a named bridge network for service-to-service DNS resolution. Isolate public-facing services from internal ones using separate networks when appropriate.

3. **Configure each service block** with:
   - `image` or `build` context (prefer `build` with a `Dockerfile` path for custom services)
   - `container_name` for predictable DNS and CLI references
   - `restart: unless-stopped` for resilience during development
   - `ports` only for services that need host access; internal services communicate over the Docker network
   - `depends_on` with `condition: service_healthy` to enforce startup order

4. **Inject environment variables** using a `.env` file at the project root:
   - Reference variables in `docker-compose.yml` with `${VAR_NAME}` syntax
   - Never hardcode secrets; use `env_file:` directive or Docker secrets for sensitive values
   - Provide a `.env.example` file listing all required variables with placeholder values

5. **Define volume mounts**:
   - Use named volumes for persistent data (databases, uploads): `db_data:/var/lib/postgresql/data`
   - Use bind mounts for live code reloading in app containers: `./src:/app/src`
   - Declare all named volumes in the top-level `volumes:` block

6. **Write health checks** for every stateful service:
   - Databases: `pg_isready`, `mysqladmin ping`, or `redis-cli ping`
   - HTTP services: `curl -f http://localhost:PORT/health`
   - Set `interval`, `timeout`, `retries`, and `start_period` explicitly

7. **Add a dev-override file** — Provide a `docker-compose.override.yml` for development-only settings (debug ports, verbose logging, hot reload commands) that should not appear in shared configs.

8. **Document startup commands** — Include a `Makefile` or `README` snippet with:
   - `docker compose up --build -d`
   - `docker compose logs -f <service>`
   - `docker compose down -v` for full teardown

## Output Format

Produce the following files in clearly labeled fenced code blocks:

1. **`docker-compose.yml`** — Full service definitions with networks, volumes, health checks, and environment variable references. Include comments explaining non-obvious choices.

2. **`.env.example`** — All environment variables used in the Compose file with descriptive placeholder values and inline comments.

3. **`docker-compose.override.yml`** — Development-only overrides (bind mounts for source code, exposed debug ports, watch commands).

4. **Startup instructions** — A short `bash` block with the commands to bring the environment up, tail logs, and tear it down.

Each file should be complete and immediately usable. Flag any assumptions made about ports, credentials, or service versions as inline `# NOTE:` comments within the config files.
