---
name: container-image-layer-optimization-plan
description: >
  Analyzes Dockerfile layer structure to identify bloated, redundant, or inefficient layers and produces a rewritten build sequence that minimizes final image size. Use when someone says their Docker image is too large, asks how to reduce image size, wants to optimize their Dockerfile, needs to slim down a container, or is concerned about bloated layers in their build.
category: developer
tags: [docker, containers, dockerfile, optimization, devops]
author: community
---

# Container Image Layer Optimization Plan

Analyzes a provided Dockerfile to identify inefficient layer patterns and produces a concrete rewritten Dockerfile with size-reduction improvements explained per change.

## Analysis Workflow

1. **Parse the Dockerfile layer by layer** — Map every `RUN`, `COPY`, `ADD`, `FROM`, and `ENV` instruction to understand what each layer adds to the image.

2. **Identify bloated layer patterns**, specifically:
   - `RUN apt-get install` without `--no-install-recommends` and without cleaning `apt` cache in the same layer
   - Multiple sequential `RUN` commands that could be chained with `&&`
   - `COPY . .` before dependency installation (cache-busting on every code change)
   - `ADD` used where `COPY` is sufficient (ADD unpacks archives and fetches URLs unnecessarily)
   - Build tools, compilers, or dev dependencies present in the final image
   - Temporary files, package manager caches, or downloaded archives not removed in the same layer they were created
   - Large base images (e.g., `ubuntu`, `debian`) where `alpine` or distroless alternatives exist

3. **Identify redundant or wasteful patterns**:
   - Layers that set environment variables overridden later
   - Files copied then immediately deleted in a subsequent layer (the file still exists in the earlier layer)
   - Missing `.dockerignore` implications (note if context likely includes `node_modules`, `.git`, build artifacts)

4. **Apply multi-stage build analysis** — Determine if the Dockerfile would benefit from separating build-time and runtime stages. If so, plan the stages explicitly.

5. **Rewrite the Dockerfile** applying all improvements:
   - Chain `RUN` commands that logically belong together
   - Clean caches and temp files in the same `RUN` layer that creates them
   - Order `COPY` instructions from least-to-most volatile (dependencies before source code)
   - Switch to a smaller base image if appropriate
   - Use multi-stage builds to exclude build tooling from the final image
   - Replace `ADD` with `COPY` where applicable

6. **Estimate impact** — For each change, note the approximate size reduction category: large (>50MB), medium (10–50MB), small (<10MB).

## Output Format

Produce three sections:

**1. Layer Audit Table**
A markdown table with columns: `Layer`, `Instruction`, `Issue`, `Severity (High/Med/Low)`. List every problematic layer; skip clean layers.

**2. Rewritten Dockerfile**
A complete, copy-paste-ready Dockerfile inside a fenced code block. Include inline comments (`# Reason: ...`) on lines that changed significantly.

**3. Change Summary**
A bullet list of every optimization applied, each formatted as:
- **[Change name]** — What was changed, why it reduces size, and estimated impact (large/medium/small).

If no Dockerfile is provided, ask the user to paste their Dockerfile before proceeding.
