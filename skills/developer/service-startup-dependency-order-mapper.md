---
name: service-startup-dependency-order-mapper
category: developer
description: >
  Resolves microservice initialization dependencies and produces a safe, ordered startup sequence. Use when someone says "services are failing to start," asks about "startup order for microservices," wants to "figure out which service should start first," needs to "resolve initialization dependencies," or is dealing with "circular dependency risks at boot time."
tags: [microservices, dependencies, startup, devops, architecture]
author: community
---

# Service Startup Dependency Order Mapper

Analyzes microservice dependency graphs to produce a topologically sorted startup sequence, flagging circular dependencies and critical path risks before they cause runtime failures.

## Dependency Resolution Workflow

1. **Collect service inventory**: Ask the user to list all services. For each, identify: name, direct dependencies (what it requires to be healthy before starting), and any optional/soft dependencies.

2. **Build the dependency graph**: Represent each service as a node. Draw directed edges from each service to its dependencies (A → B means A depends on B, so B must start first).

3. **Detect circular dependencies**:
   - Run depth-first search (DFS) on the graph tracking visited nodes and the current recursion stack.
   - If a back-edge is found, report the exact cycle (e.g., `AuthService → UserService → TokenService → AuthService`).
   - For each cycle, recommend a resolution strategy: introduce an async retry/health-check loop, extract shared state to a neutral service, or use lazy initialization.

4. **Topological sort (Kahn's algorithm)**:
   - Compute in-degree for each node.
   - Enqueue all nodes with in-degree 0 (no dependencies).
   - Process queue: output node, decrement in-degree of dependents, enqueue any that reach 0.
   - If all nodes are processed, the result is the valid startup order. If not, remaining nodes are part of a cycle.

5. **Identify parallel startup opportunities**: Group services into tiers — services in the same tier have no dependency on each other and can start simultaneously. List each tier explicitly.

6. **Flag critical path services**: Mark services whose failure would block the largest number of downstream services. Label them HIGH PRIORITY with a recommended health-check timeout.

7. **Account for infrastructure dependencies**: Separate external/infrastructure services (databases, message brokers, caches) from application services. Always place infrastructure in Tier 0.

## Output Format

Produce the following sections in order:

---

**Dependency Graph Summary**
- Bulleted list of each service and its direct dependencies (or "none")

**Circular Dependencies Detected**
- List each cycle with the full chain
- Recommended fix for each cycle
- If none: "No circular dependencies detected."

**Startup Tiers (Parallel Execution Groups)**

| Tier | Services | Notes |
|------|----------|-------|
| 0    | (infrastructure) | Start first, block until healthy |
| 1    | (no app dependencies) | Can start in parallel |
| N    | ... | ... |

**Critical Path Services**
- Service name — blocks N downstream services — recommended health timeout: Xs

**Full Sequential Fallback Order**
Numbered list for environments that cannot run parallel startup.

**Risk Summary**
- 2–5 bullet points noting the highest-risk dependencies, single points of failure, or services lacking health-check endpoints.

---

Keep the output scannable. Use tables and bullets over prose. Flag any assumptions made when dependency information was incomplete.
