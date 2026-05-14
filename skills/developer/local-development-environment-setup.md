---
name: local-development-environment-setup
category: developer
description: >
  Creates reproducible local development environment scripts and documentation using Docker, dev containers, or shell provisioning so any contributor can onboard in a single command. Use when someone says "set up a dev environment", asks about "getting started locally", wants to "onboard new contributors", needs to "standardize development setup", or says "make the project easy to run locally".
tags: [docker, devcontainer, onboarding, provisioning, dx]
author: community
---

# Local Development Environment Setup

Generates complete, runnable environment setup scripts and documentation so any contributor can go from a fresh clone to a working local environment in a single command.

## Workflow

### 1. Assess the Project
- Detect language/runtime from files: `package.json`, `requirements.txt`, `Gemfile`, `go.mod`, `Cargo.toml`, `pom.xml`, etc.
- Identify services needed: databases (Postgres, MySQL, Redis, MongoDB), queues, object storage, external APIs
- Check for existing setup artifacts: `Dockerfile`, `docker-compose.yml`, `.devcontainer/`, `Makefile`, `scripts/`
- Note OS-sensitive concerns: path separators, shell assumptions, binary availability

### 2. Choose the Right Approach
Select based on project context:
- **Dev Containers** (`.devcontainer/`): Best for VS Code / Codespaces projects or teams with mixed OS environments
- **Docker Compose**: Best when multiple services are required and the team is comfortable with Docker
- **Shell provisioning script** (`scripts/setup.sh`): Best for simple single-runtime projects or CI-aligned setups
- Offer all three options if context is ambiguous; default to Docker Compose + a setup script

### 3. Generate Setup Artifacts

**Always produce:**
- A primary setup entrypoint (see Output Format)
- A `Makefile` or `package.json` scripts block with `make dev`, `make test`, `make clean` targets
- A `.env.example` with every required variable documented inline
- A `README` section titled `## Getting Started` ready to paste

**Docker Compose projects — include:**
- `docker-compose.yml` with named volumes, healthchecks, and `depends_on`
- A `Dockerfile` (or `Dockerfile.dev`) using a pinned base image, non-root user, and multi-stage build where appropriate
- Port mapping comments explaining what each exposed port is for

**Dev Container projects — include:**
- `.devcontainer/devcontainer.json` with `postCreateCommand`, `forwardPorts`, and recommended VS Code extensions
- Base image pinned to a digest or dated tag

**Shell provisioning — include:**
- `scripts/setup.sh` with `set -euo pipefail`, OS detection (macOS/Linux/WSL), dependency checks with helpful error messages, and idempotent steps
- Version pin constants at the top of the script for every installed tool

### 4. Validation Steps
- Add a `make check` / `scripts/healthcheck.sh` target that verifies the environment is running correctly
- Include expected output so contributors know setup succeeded
- Add troubleshooting notes for the top 3 most common failure modes (port conflicts, missing env vars, permission errors)

### 5. Security Defaults
- Never commit real secrets; use `.env.example` + `.gitignore` entry for `.env`
- Run application processes as non-root inside containers
- Pin all base images and tool versions to avoid supply-chain drift

## Output Format

Produce a series of clearly labeled file blocks in this order:

1. **`docker-compose.yml`** (or `devcontainer.json` if dev container path chosen) — full file content
2. **`Dockerfile.dev`** — full file content if Docker is involved
3. **`Makefile`** — targets: `dev`, `test`, `lint`, `clean`, `check`
4. **`.env.example`** — every variable with a one-line comment explaining its purpose
5. **`scripts/setup.sh`** — idempotent shell script, full content
6. **`README.md` snippet** — a `## Getting Started` section (markdown, paste-ready, ≤30 lines) covering prerequisites, clone, setup command, verify step, and a link to the troubleshooting section

Each file block must
