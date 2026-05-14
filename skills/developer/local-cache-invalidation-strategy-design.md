---
name: local-cache-invalidation-strategy-design
description: >
  Designs a complete cache invalidation policy including TTLs, eviction triggers, and consistency guarantees for a service's caching layer. Use when someone asks how to invalidate their cache, wants to design a caching strategy, needs to decide on TTL values, or is dealing with stale data problems in a caching layer. Also activates when someone asks about cache consistency or eviction policies.
category: developer
tags: [caching, performance, architecture, distributed-systems, consistency]
author: community
---

# Cache Invalidation Strategy Design

This skill designs a concrete cache invalidation policy—covering TTLs, eviction triggers, and consistency guarantees—whenever a user needs to reason through caching behavior for a service or data layer.

## Workflow

### 1. Gather Service Context
Before designing, identify the following (ask if not provided):
- **Data type**: What is being cached? (user sessions, query results, config, assets, etc.)
- **Read/write ratio**: Is this read-heavy, write-heavy, or balanced?
- **Staleness tolerance**: How stale can data be before it causes user-visible or business-critical problems?
- **Cache tier**: Local in-memory (e.g., LRU map), distributed (e.g., Redis, Memcached), or CDN?
- **Invalidation triggers**: What events cause data to change? (user action, upstream service, scheduled job, etc.)

### 2. Select Invalidation Strategy
Choose one or more approaches based on context:

| Strategy | When to Use |
|---|---|
| **TTL-based expiry** | Data changes on a known schedule or low staleness cost |
| **Event-driven invalidation** | Data changes on explicit writes; strong consistency needed |
| **Write-through / write-behind** | Cache is updated synchronously or asynchronously on write |
| **Cache-aside with versioning** | Fine-grained control; supports partial invalidation |
| **Stale-while-revalidate** | High-read, low-write; some staleness is acceptable |

### 3. Define TTL Values
Assign TTLs per data category using these guidelines:
- **Static/config data**: 5–60 minutes
- **User profile/session data**: 1–15 minutes, invalidate on explicit update events
- **Query/aggregation results**: 30 seconds–5 minutes depending on write frequency
- **Ephemeral/real-time data**: 1–10 seconds or no TTL (event-driven only)
- Always set a **maximum TTL** as a safety net even for event-driven caches (e.g., 24h hard ceiling)

### 4. Define Eviction Triggers
Specify explicit events that must invalidate cache entries:
- Map each write path (API endpoint, DB mutation, message event) to affected cache keys
- Use **key namespacing** or **tag-based invalidation** to batch-invalidate related entries
- For distributed caches: publish invalidation events via a message bus (e.g., Redis Pub/Sub, Kafka) so all nodes evict consistently
- Define behavior on cache miss: **cache-aside** (fetch and repopulate) vs. **fail-open** (serve stale) vs. **fail-closed** (return error)

### 5. Define Consistency Guarantees
State explicitly which guarantee the design targets:
- **Strong consistency**: Every read reflects the latest write. Requires synchronous invalidation before write completes.
- **Eventual consistency**: Cache converges to latest value within TTL window. Acceptable for most read-heavy use cases.
- **Bounded staleness**: Data is never older than X seconds. Combine short TTL + event-driven invalidation.
- Document the **worst-case stale window** so consumers can make informed decisions.

### 6. Handle Edge Cases
Address these explicitly:
- **Cache stampede**: Use probabilistic early expiration or a mutex/lock on miss to prevent thundering herd
- **Negative caching**: Cache "not found" results with a short TTL to prevent repeated DB hits
- **Partial invalidation**: If only a subset of a cached collection changes, define whether to invalidate the whole key or use field-level granularity
- **Cascading invalidation**: Identify if invalidating one key requires invalidating dependent keys

## Output Format

Produce a structured **Cache
