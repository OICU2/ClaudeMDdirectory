---
name: task-prioritization-systems
description: >
  Builds structured prioritization frameworks that help individuals and teams identify and focus on their highest-impact work. Use when someone says they feel overwhelmed by their task list, asks how to decide what to work on first, wants to build a prioritization system for their team, needs to triage a backlog, or is struggling to align daily work with strategic goals.
category: operations
tags: [prioritization, productivity, task-management, team-operations, decision-making]
author: community
---

# Task Prioritization Systems

This skill designs and implements actionable prioritization frameworks tailored to a person's or team's context, delivering a ready-to-use system rather than generic advice.

## Prioritization Framework Builder

### Step 1: Diagnose the Context
Ask or infer:
- **Scale**: Personal tasks, small team, or cross-functional backlog?
- **Horizon**: Day-level, sprint-level, or quarterly-level decisions?
- **Blocker**: Is the problem volume (too many tasks), alignment (unclear what matters), or consistency (no shared criteria)?

### Step 2: Select the Right Framework
Match the framework to the diagnosis:

| Situation | Framework |
|---|---|
| Mixed importance/urgency, personal or small team | **Eisenhower Matrix** (Urgent/Important quadrants) |
| Product or engineering backlog | **RICE Scoring** (Reach × Impact × Confidence ÷ Effort) |
| Strategic initiative ranking | **ICE Score** (Impact, Confidence, Ease) |
| Resource-constrained teams with dependencies | **Weighted Scoring Matrix** (custom criteria + weights) |
| Daily individual focus | **MIT Method** (3 Most Important Tasks per day) |
| Customer-facing roadmap decisions | **Kano Model** (basic needs vs. delighters) |

### Step 3: Build the System
For the chosen framework, produce:
1. **Criteria definitions** — Exact definitions for each scoring dimension with a 1–5 or 1–10 scale and anchors (what a "1" looks like vs. a "5")
2. **Scoring template** — A table or formula the user can apply immediately
3. **Decision rules** — Clear rules for tie-breaking and threshold cutoffs (e.g., "anything with RICE score < 20 goes to backlog")
4. **Cadence recommendation** — How often to re-score and who is involved

### Step 4: Apply to Their Actual Tasks
If the user has shared a task list or backlog:
- Score each item using the chosen framework
- Sort by score
- Flag any tasks that should be killed, delegated, or deferred
- Identify the top 3–5 highest-priority items with a one-line rationale for each

### Step 5: Operationalize
Provide:
- A **weekly ritual** (5–10 min) to maintain the system
- A **team alignment protocol** if multiple people are involved (who scores, how conflicts are resolved)
- **Warning signs** the system needs recalibration (e.g., scores not matching intuition repeatedly)

## Output Format

Produce the following sections in order:

**1. Recommended Framework** (1–2 sentences explaining the choice)

**2. Scoring Criteria** (table with dimension, definition, and scale anchors)

**3. Prioritized Task List** (table: Task | Score | Tier | Rationale)
- Tier labels: `P1 — Do Now`, `P2 — Schedule`, `P3 — Backlog`, `Kill/Delegate`

**4. Decision Rules** (3–5 bullet points, specific thresholds)

**5. Operating Cadence** (bullet list: daily habit, weekly review, monthly recalibration)

**6. Quick-Start Checklist** (5 checkboxes to implement the system today)

Length: Concise but complete. Tables preferred over prose. No motivational filler.