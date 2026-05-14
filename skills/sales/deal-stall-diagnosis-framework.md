---
name: deal-stall-diagnosis-framework
category: sales
description: >
  Analyzes stalled sales opportunities to identify the most probable root cause and recommend a clear path forward. Use when someone says "this deal has gone quiet," asks why a prospect stopped responding, or wants to figure out why a deal isn't moving. Also activates when someone needs to diagnose a stuck opportunity, assess deal health, or troubleshoot a pipeline deal that has lost momentum.
tags: [sales, pipeline, deal-management, diagnosis, forecasting]
author: community
---

# Deal Stall Diagnosis Framework

This skill systematically diagnoses why a sales deal has stalled by analyzing stage duration, last activity type, stakeholder engagement signals, and common stall patterns, then delivers a ranked list of probable causes with specific next actions.

## Diagnosis Workflow

### Step 1: Gather Deal Context
Ask for (or extract from provided notes) the following inputs:
- **Deal stage** and how long it has been in that stage
- **Last activity** — what it was, who initiated it, and when
- **Stakeholder map** — who is engaged, who has gone silent, any new contacts or departures
- **Last meaningful commitment** the prospect made (agreed to a demo, sent a mutual action plan, etc.)
- **Any known external factors** — budget cycles, org changes, competing priorities

If the user provides partial information, proceed with what is available and flag gaps explicitly.

### Step 2: Match Against Stall Patterns
Evaluate the deal against these seven common stall archetypes:

1. **Champion Loss** — Primary contact changed roles, left the company, or stopped advocating internally. Signal: sudden silence after strong engagement, new contact introduced without context.
2. **Budget Freeze** — Financial constraints paused the decision. Signal: deal stalled after pricing discussion or at end of fiscal quarter/year.
3. **Competing Priority** — Internal initiative displaced the prospect's attention. Signal: vague delays, references to being "slammed," no specific objection raised.
4. **Consensus Gap** — Deal is stuck in internal approvals with no clear next step owned. Signal: long time in late stage, multiple stakeholders but no single decision owner visible.
5. **Value Misalignment** — Prospect is no longer convinced of ROI or fit. Signal: questions about pricing value, reduced responsiveness after a demo or proposal.
6. **Process Mismatch** — Prospect's buying process doesn't match the assumed sales motion. Signal: unexpected procurement or legal involvement, new requirements surfacing late.
7. **Relationship Neglect** — Deal drifted due to lack of seller follow-through. Signal: last activity was seller-initiated weeks ago with no response, no mutual next step was set.

### Step 3: Score and Rank Causes
For each archetype, assign a likelihood rating (High / Medium / Low) based on the deal context provided. Surface the top 1–2 most probable causes with explicit reasoning tied to the specific deal data.

### Step 4: Recommend Next Actions
For each high-probability cause, provide:
- One immediate action (within 24–48 hours)
- One strategic action (within the week)
- A specific outreach message or talk track if contact is needed

### Step 5: Flag Deal Risk Level
Classify overall deal health:
- **Recoverable** — Clear cause identified, actionable path exists
- **At Risk** — Cause likely but path forward requires external factors to change
- **At Risk of Loss** — Multiple stall signals present, recommend re-qualification or formal close/loss decision

## Output Format

Produce a structured diagnosis with the following sections:

**Deal Snapshot**
- Stage, duration in stage, last activity summary (2–3 lines)

**Stall Diagnosis**
- Primary Cause: [Archetype name] — Likelihood: High/Medium/Low
  - Reasoning: 1–2 sentences tied directly to deal facts
- Secondary Cause (if applicable): [Archetype name] — Likelihood: High/Medium/Low
  - Reasoning: 1–2 sentences

**Recommended Actions**
- Immediate (24–48 hrs): Specific action with owner
- This Week: Strategic action
- Suggested Outreach (if applicable): Ready-to-use message or talk track in plain text

**Deal Health Assessment**
- Status: Recoverable / At Risk / At Risk of Loss
- One sentence rationale

**Information Gaps**
- Bullet
