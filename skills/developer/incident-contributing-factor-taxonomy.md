---
name: incident-contributing-factor-taxonomy
description: >
  Processes historical incident postmortems to build a structured taxonomy of recurring contributing factors, enabling systemic remediation prioritization. Use when someone wants to analyze past incidents for patterns, asks about categorizing postmortem findings, needs to identify systemic failure modes across outages, wants to prioritize infrastructure improvements based on incident history, or is trying to understand what keeps causing production issues.
category: developer
tags: [incidents, postmortems, reliability, sre, taxonomy]
author: community
---

# Incident Contributing Factor Taxonomy

This skill ingests incident postmortem data and produces a structured, weighted taxonomy of contributing factors so teams can prioritize systemic fixes over reactive one-offs.

## Workflow

### 1. Ingest Postmortem Data
- Accept input as raw text, structured JSON, CSV, or pasted postmortem summaries
- Extract per-incident: date, severity, duration, contributing factors, action items, and whether the incident recurred
- If input is unstructured prose, parse for causal language: "because," "due to," "caused by," "resulted from," "root cause"

### 2. Normalize Contributing Factors
- Map raw factor descriptions to canonical categories using this taxonomy:

  **Infrastructure & Capacity**
  - Resource exhaustion (CPU, memory, disk, connections)
  - Network partition or latency
  - Dependency failure (third-party or internal service)
  - Infrastructure misconfiguration

  **Deployment & Change Management**
  - Bad deploy without rollback
  - Missing or inadequate feature flags
  - Schema migration failure
  - Configuration drift

  **Observability & Detection**
  - Missing or misconfigured alerts
  - Insufficient logging or tracing
  - Alert fatigue masking signal
  - No runbook for failure mode

  **Process & Human Factors**
  - Insufficient review or testing
  - Knowledge siloing (single point of human failure)
  - On-call process failure
  - Postmortem action items not completed

  **Security & Access**
  - Credential exposure or rotation failure
  - Overprivileged access
  - Compliance or audit gap

- If a factor spans multiple categories, assign it to the primary category and note secondary tags
- Preserve the original phrasing alongside the normalized label

### 3. Aggregate and Weight
- Count raw frequency of each canonical factor across all incidents
- Calculate a **severity-weighted frequency**: multiply occurrence count by average incident severity (use P0=4, P1=3, P2=2, P3=1 if severity data exists)
- Flag factors that appear in recurring incidents (same factor appearing in 2+ incidents within 90 days) as **chronic**
- Flag factors with no associated closed action items as **unaddressed**

### 4. Identify Clusters and Systemic Themes
- Group top factors into 2–4 systemic themes (e.g., "Observability gaps," "Change management failures")
- For each theme, list the specific factors that compose it and the incidents they appear in
- Note cross-cutting factors that appear across multiple themes

### 5. Generate Prioritized Remediation Ranking
- Rank factors by: severity-weighted frequency × (1.5 if chronic) × (1.5 if unaddressed)
- Assign each top-10 factor a recommended remediation class: tooling, process, training, or architectural change
- Surface quick wins (high frequency, low complexity fix) separately from structural investments

## Output Format

Produce a structured report with these sections:

---

**Incident Contributing Factor Taxonomy Report**
*Source: [N] postmortems analyzed | Date range: [X–Y]*

---

**Executive Summary**
3–5 sentences naming the dominant systemic themes and top 3 prioritized factors.

---

**Full Taxonomy**
Table with columns: `Factor (Canonical)` | `Category` | `Raw Count` | `Severity-Weighted Score` | `Chronic?` | `Unaddressed?` | `Incidents`

---

**Systemic Themes**
For each theme:
- Theme name and 1-sentence description
- Contributing factors included
- Representative incident examples

---

**Prioritized Remediation Backlog**
Numbered list, highest priority first:
1. **[Factor]** — Score: X | Type: [tooling/process/training/architectural]
