---
name: service-request-resolution-rate-analyzer
category: operations
description: >
  Tracks first-contact resolution (FCR) and overall closure rates for service requests, identifies categories with persistently low performance, and surfaces actionable patterns. Use when someone says "our tickets aren't getting resolved," asks about "why certain request types keep reopening," wants to "analyze service desk closure rates," needs to "find which support categories are underperforming," or is trying to "improve first-contact resolution."
tags: [service-desk, resolution-rates, operations, support-analytics, fcr]
author: community
---

# Service Request Resolution Rate Analyzer

Analyzes service request data to compute first-contact and overall resolution rates by category, flags persistently underperforming areas, and recommends targeted interventions.

## Analysis Workflow

### 1. Data Ingestion
- Accept input as CSV, JSON, pasted table, or free-form description of ticket data
- Required fields: ticket ID, category/type, creation date, resolution date (if any), number of contacts/touches, status (open/closed/reopened)
- Optional but useful: assigned team, priority, customer segment, resolution notes

### 2. Compute Core Metrics Per Category

**First-Contact Resolution (FCR) Rate:**
- FCR = (tickets resolved in exactly 1 contact) / (total closed tickets in category) × 100
- Flag any category with FCR < 70% as underperforming

**Overall Resolution Rate:**
- Resolution Rate = (closed tickets) / (total tickets) × 100
- Flag any category with resolution rate < 80% or with >15% reopened tickets

**Average Time to Resolution (TTR):**
- Calculate mean and median TTR per category
- Flag categories where median TTR exceeds 2× the global median

### 3. Identify Persistent Underperformers
- A category is "persistently low" if it falls below thresholds in 2 or more consecutive time periods (weeks/months depending on data range)
- Rank categories from worst to best performing on a composite score: (FCR × 0.4) + (Resolution Rate × 0.4) + (TTR score × 0.2)
- Highlight top 3 worst-performing categories for immediate action

### 4. Pattern Detection
- Check for correlations: specific teams with low FCR, time-of-day/week patterns, ticket volume spikes preceding resolution drops
- Identify if reopened tickets cluster around specific agents, shifts, or root cause tags
- Note any categories trending downward over the most recent periods

### 5. Root Cause Hypotheses
For each flagged category, generate 2–3 plausible root causes based on:
- High reopen rate → likely insufficient resolution depth or missing knowledge base articles
- Low FCR but high eventual resolution → routing/escalation inefficiency
- Low overall resolution → possible ownership gaps, unclear SLAs, or resource constraints

## Output Format

Produce a structured report with these sections:

---

### Executive Summary
3–5 bullet points covering overall FCR rate, overall resolution rate, number of flagged categories, and the single most critical finding.

### Metrics Table
Markdown table with columns:
| Category | Total Tickets | FCR Rate | Resolution Rate | Reopen Rate | Median TTR | Status |

Status values: ✅ Healthy / ⚠️ Watch / 🔴 Critical

### Persistently Underperforming Categories
For each flagged category (max 5):
- **Category name** — composite score
- Current FCR / Resolution Rate / Reopen Rate
- Trend: Improving / Stable / Declining (with period reference)
- Top 2–3 root cause hypotheses
- 1–2 specific recommended interventions (e.g., "Add self-service KB article for password reset," "Create dedicated routing rule for billing disputes")

### Quick Wins vs. Structural Fixes
Two lists:
- **Quick wins** (implementable in <1 week): e.g., routing rule changes, template responses
- **Structural fixes** (require planning): e.g., team training, SLA redefinition, tooling changes

### Data Gaps & Caveats
Note any missing fields, assumptions made, or time periods with insufficient volume to draw conclusions.

---

- Keep the full report under 600 words unless data complexity requires more
- Use plain language; avoid jargon not
