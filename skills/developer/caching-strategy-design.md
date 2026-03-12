---
name: caching-strategy-design
description: >
  Designs comprehensive caching architectures including layer selection, TTL policies, and invalidation strategies. Use when someone asks about caching their application, wants to reduce API latency, is dealing with high database load, needs to decide between Redis and Memcached, or wants to define a cache invalidation approach.
category: developer
tags: [caching, performance, architecture, redis, backend]
author: community
---

# Caching Strategy Design

Analyzes application requirements and produces a complete caching strategy covering layers, tooling, TTL policies, and invalidation logic to reduce latency and backend load.

## Caching Strategy Workflow

### 1. Identify Caching Candidates
- Audit data access patterns: frequency, read/write ratio, data volatility
- Flag high-cost operations: DB queries >100ms, external API calls, computed aggregates
- Identify data that is shared across users vs. user-specific
- Note consistency requirements: can stale data be served, and for how long?

### 2. Define Caching Layers
Map each candidate to the appropriate layer:

| Layer | Tool | Use Case |
|---|---|---|
| CDN | Cloudflare, CloudFront | Static assets, public API responses, rendered HTML |
| Application (in-process) | Node LRU cache, Guava, functools.lru_cache | Per-instance hot data, config, feature flags |
| Distributed | Redis, Memcached, DragonflyDB | Session data, rate limiting, shared state, leaderboards |
| Database query | pg_bouncer, query cache, materialized views | Expensive aggregations, denormalized read models |
| HTTP | Cache-Control headers, ETags, Varnish | Browser caching, reverse proxy caching |

### 3. Select Tooling
- **Redis**: Use when you need data structures (lists, sets, sorted sets), pub/sub, Lua scripting, persistence, or cluster mode
- **Memcached**: Use for simple key-value with maximum throughput and lower memory overhead
- **CDN caching**: Always enable for static assets; enable for public API endpoints with stable responses
- **In-process**: Use only for read-heavy, rarely changing data (config, enums); avoid for data needing cross-instance consistency

### 4. Define TTL Policies
Assign TTLs based on data volatility and acceptable staleness:

- **No TTL (manual invalidation only)**: User session tokens, feature flags with explicit release
- **Short TTL (1–60s)**: Real-time metrics, inventory counts, live scores
- **Medium TTL (1–15min)**: User profile data, product details, search results
- **Long TTL (1–24hr)**: Reference data, category trees, localization strings
- **Indefinite with versioning**: Static assets (use cache-busting via content hash in filename)

Rules for TTL assignment:
- Default to shorter TTLs when unsure; increase after observing hit rates
- Set jitter (±10–20% of TTL) on distributed caches to prevent thundering herd
- Never cache authentication or authorization decisions longer than session lifetime

### 5. Design Invalidation Strategy
Choose per data type:

- **TTL expiry**: Default for most cases; accept eventual consistency
- **Write-through invalidation**: On write, delete or update the cache key immediately; use for user-owned data
- **Event-driven invalidation**: Publish invalidation events via message queue (Kafka, Redis pub/sub) when source data changes; use for shared/relational data
- **Cache versioning**: Prefix keys with a version string (e.g., `v3:user:123`); bump version to invalidate all entries without mass deletes
- **Tag-based invalidation**: Group related keys under a tag; invalidate all by tag (supported in Varnish, some CDNs, Laravel cache)

Avoid:
- Cache stampede: use mutex locks or probabilistic early expiration (PER algorithm) for expensive recomputations
- Stale-while-revalidate: serve stale data while refreshing asynchronously for non-critical paths

### 6. Define Cache Key Schema
- Format: `{namespace}:{version}:{entity}:{id}:{variant}`
- Example: `api:v2:product:4821:en-US`
- Document key
