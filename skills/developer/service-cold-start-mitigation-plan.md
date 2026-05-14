---
name: service-cold-start-mitigation-plan
description: >
  Diagnoses the root causes of slow cold start times in a service and produces a
  concrete mitigation plan covering initialization, caching, and provisioning strategies.
  Use when someone says their service is slow to start, asks why cold starts are taking
  too long, wants to reduce startup latency, is seeing timeout errors on first requests,
  or needs to optimize container or function initialization time.
category: developer
tags: [performance, cold-start, latency, caching, provisioning]
author: community
---

# Service Cold Start Mitigation Plan

Analyzes a service's startup behavior to identify latency contributors and generates a prioritized, actionable plan to reduce cold start times through initialization optimization, caching, and provisioning changes.

## Diagnosis Workflow

### 1. Gather Context
Ask for or inspect the following if not provided:
- Runtime/language and framework (e.g., JVM, Node.js, Python, .NET, Go)
- Deployment target (Lambda, container, Kubernetes pod, VM, serverless platform)
- Observed cold start duration and acceptable target latency
- Startup logs, flame graphs, or profiling output if available
- Dependencies loaded at startup (databases, config services, secret managers, SDKs)
- Current provisioning settings (min instances, concurrency, scaling policy)

### 2. Categorize Latency Contributors
Group identified contributors into these buckets:

**Initialization overhead**
- Static initializers, eager dependency injection, heavy framework bootstrap
- Synchronous blocking calls during startup (DB connections, HTTP fetches, secret resolution)
- Large classpath scanning or module loading (especially JVM, Python imports)
- Unnecessary encryption/TLS handshake chains at boot

**Payload and artifact size**
- Fat JARs, large node_modules, unoptimized container layers
- Bundled assets or data files loaded into memory at start

**External dependency resolution**
- Secrets/config fetched synchronously before serving traffic
- DNS resolution delays or connection pool establishment
- Health checks blocking readiness

**Infrastructure and provisioning**
- No minimum instances configured (scale-to-zero)
- Slow container image pulls (large or unoptimized images)
- Missing provisioned/reserved concurrency settings
- Cold storage volume mounts or EBS attach delays

### 3. Score and Prioritize Issues
For each identified contributor, assign:
- **Impact**: High / Medium / Low (effect on total cold start time)
- **Effort**: High / Medium / Low (implementation complexity)
- Recommend addressing High Impact + Low Effort items first.

### 4. Generate Mitigation Actions
Produce specific, implementable changes for each category:

**Initialization changes**
- Defer non-critical initialization to post-readiness (lazy loading)
- Move synchronous blocking startup calls to background goroutines/threads with graceful degradation
- Replace eager DI wiring with lazy beans or on-demand resolution
- Use connection pool pre-warming triggered asynchronously, not blocking startup

**Caching changes**
- Cache resolved secrets/config in-process after first fetch; use cache TTL aligned to rotation policy
- Pre-bake static data into the artifact or container image layer instead of fetching at runtime
- Use response caching or edge caching to absorb traffic during warm-up window
- Implement local disk or memory snapshot (e.g., JVM CDS/AppCDS, Python pickle cache) to skip repeated computation

**Provisioning changes**
- Set minimum instance count or provisioned concurrency to eliminate scale-to-zero cold paths for critical services
- Reduce container image size: multi-stage builds, distroless base images, layer caching optimization
- Enable container image pre-pulling or registry caching at the node level
- Configure readiness vs. liveness probes correctly so traffic only routes after warm state is achieved
- Use warm pool or instance pre-provisioning for auto-scaling groups

**Runtime-specific recommendations**
- JVM: Enable AppCDS, use GraalVM native image, minimize reflection at startup
- Node.js: Use `--require` preloading carefully, avoid synchronous `fs` reads at top level
- Python: Use lazy imports, minimize top-level side effects, consider Cython or PyPy
- .NET: Enable ReadyToRun compilation, minimize static constructors
- Go: Already fast; focus on external I/O parallelization at
