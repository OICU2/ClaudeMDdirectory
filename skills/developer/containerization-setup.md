---
name: containerization-setup
description: >
  Generates production-ready Dockerfiles, docker-compose configurations, and multi-stage build pipelines optimized for minimal image size and secure runtime defaults. Use when someone says "dockerize this app", asks about "setting up containers", wants to "create a Dockerfile", needs to "add Docker support", or asks how to "containerize my project".
category: developer
tags: [docker, containers, devops, dockerfile, docker-compose]
author: community
---

# Containerization Setup

This skill generates production-ready Docker configurations with multi-stage builds, minimal base images, and secure defaults whenever a user wants to containerize an application.

## Containerization Workflow

1. **Detect the stack** — Identify the language, framework, runtime version, package manager, and entry point from existing project files (package.json, requirements.txt, go.mod, pom.xml, Gemfile, etc.).

2. **Choose the right base image** — Use slim or alpine variants (e.g., `node:20-alpine`, `python:3.12-slim`, `golang:1.22-alpine`). Never use `latest` or full distro images without justification.

3. **Design a multi-stage build**:
   - Stage 1 (`builder`): Install all dependencies, compile, and bundle assets.
   - Stage 2 (`runtime`): Copy only production artifacts from builder. No build tools, no dev dependencies, no source code unless required.

4. **Apply security defaults**:
   - Create and switch to a non-root user (`RUN addgroup -S app && adduser -S app -G app`).
   - Set `USER app` before the final `CMD` or `ENTRYPOINT`.
   - Use `--no-cache` on apk/apt installs to reduce layer size.
   - Never embed secrets, credentials, or `.env` files in the image.

5. **Optimize layer caching**:
   - Copy dependency manifests first (`COPY package.json ./`), install, then copy source.
   - Order instructions from least to most frequently changing.

6. **Write a `.dockerignore`** — Exclude `node_modules`, `.git`, `.env*`, `dist`, `__pycache__`, test files, and any other build artifacts.

7. **Generate docker-compose.yml** when the app has external dependencies (databases, caches, message queues):
   - Define named volumes for persistent data.
   - Use environment variable references (`${VAR}`) rather than hardcoded values.
   - Add `healthcheck` blocks for each service.
   - Set `restart: unless-stopped` for production services.
   - Isolate services on a named bridge network.

8. **Add health check to Dockerfile** — Use `HEALTHCHECK --interval=30s --timeout=5s --retries=3 CMD [...]` appropriate to the runtime (HTTP probe, TCP check, or process check).

9. **Expose only required ports** — Document with `EXPOSE` but remind the user that port binding happens at runtime via `-p` or compose `ports`.

10. **Validate and explain** — After generating files, list the image size optimizations applied, security measures taken, and any assumptions made about the stack.

## Output Format

Produce the following files in fenced code blocks with correct filenames as headers:

**`Dockerfile`** — Multi-stage build, annotated with inline comments explaining each stage's purpose.

**`.dockerignore`** — Complete exclusion list for the detected stack.

**`docker-compose.yml`** — Only if external services are needed; includes all service definitions, volumes, networks, and health checks.

**`docker-compose.override.yml`** — Optional development override with volume mounts for hot reload and exposed debug ports.

After all files, include a **Quick Start** section with the exact commands to build, run, and verify the container, followed by a bullet list of optimizations and security measures applied.
