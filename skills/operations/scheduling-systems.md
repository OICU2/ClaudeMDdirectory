---
name: scheduling-systems
description: >
  Builds scheduling systems that allocate time, people, and resources effectively across complex constraints.
  Use when someone needs to schedule shifts or staff rotations, asks about resource allocation across time slots,
  wants to build a booking or reservation system, needs to coordinate recurring tasks or calendar automation,
  or is designing a job queue or task prioritization system.
category: operations
tags: [scheduling, resource-allocation, calendar, automation, optimization]
author: community
---

# Scheduling Systems

This skill designs and implements scheduling systems that allocate time and resources efficiently, handling conflicts, constraints, and priorities — activated when users need to coordinate people, tasks, or resources across time.

## Scheduling System Design Workflow

### 1. Capture Requirements
- Identify **entities** being scheduled (people, rooms, machines, tasks)
- Identify **resources** being allocated (time slots, capacity, skills, equipment)
- List **hard constraints** (non-negotiable: max hours, required certifications, room capacity)
- List **soft constraints** (preferences: shift preferences, contiguous blocks, fairness)
- Clarify **time horizon** (daily, weekly, rolling window, one-time event)
- Ask about **input sources** (manual entry, API, CSV, calendar integration)

### 2. Choose the Scheduling Model
Select the appropriate model based on complexity:
- **Simple slot-filling**: First-fit or round-robin for low-constraint scenarios
- **Constraint satisfaction**: Backtracking or CSP for hard constraints with multiple entities
- **Optimization**: Greedy, genetic algorithm, or ILP when minimizing cost/time/gaps matters
- **Queue-based**: Priority queues with aging for task scheduling systems
- **Calendar-based**: iCal/RFC 5545 patterns for recurring event systems

### 3. Define the Data Model
Always specify:
```
Entity: { id, name, availability[], constraints{}, skills[] }
Resource: { id, type, capacity, cost }
TimeSlot: { start: ISO8601, end: ISO8601, duration_minutes }
Schedule: { entity_id, resource_id, slot, status, metadata{} }
Conflict: { type, entities[], slots[], resolution }
```

### 4. Implement Conflict Detection
- Check for **double-booking** (same entity, overlapping slots)
- Check for **capacity violations** (resource demand > supply)
- Check for **constraint violations** (breaks, max consecutive hours, qualifications)
- Check for **fairness violations** (unequal load distribution over time)
- Return structured conflict objects, never silently skip

### 5. Build the Assignment Engine
```
for each time_slot in schedule_horizon:
  candidates = filter_by_availability(entities, slot)
  candidates = filter_by_constraints(candidates, slot, existing_schedule)
  ranked = rank_by_priority(candidates, fairness_scores, preferences)
  assign(ranked[0], slot) or flag_as_unfilled(slot)
```

### 6. Handle Edge Cases Explicitly
- **No available entity**: flag slot as unassigned, notify requester
- **Overlapping requests**: timestamp-based priority or first-come-first-served
- **Last-minute changes**: swap algorithm that reassigns without cascading conflicts
- **Timezone differences**: store all times in UTC, display in local timezone
- **Recurring schedules**: generate instances with exception handling (holidays, blackouts)

### 7. Add Reporting and Visibility
- Coverage report: filled vs. unfilled slots
- Load report: hours/tasks per entity over the period
- Conflict log: all detected and resolved conflicts
- Utilization: resource usage percentage by type

## Output Format

Produce the following for every scheduling system request:

**1. Requirements Summary** (bulleted list of hard constraints, soft constraints, entities, resources)

**2. Data Model** (code block with typed schema for all core objects)

**3. Core Algorithm** (pseudocode or working code in Python/JS/SQL as appropriate, ~30–80 lines)

**4. Conflict Detection Logic** (separate function/module with clear return types)

**5. Sample Schedule Output** (table or JSON showing 3–5 example assignments with metadata)

**6. Edge Case Handling** (bulleted list of 4–6 scenarios and how the system resolves them)

**7. Integration Notes** (how to connect
