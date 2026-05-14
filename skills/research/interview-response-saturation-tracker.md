---
name: interview-response-saturation-tracker
category: research
description: >
  Monitors qualitative interview data across multiple sessions to identify when thematic saturation has been reached and additional interviews are unlikely to yield new insights. Use when someone says "I'm not sure how many more interviews I need," asks about whether their qualitative data is complete, wants to know if they've interviewed enough people, is tracking patterns across interview sessions, or needs to determine when to stop collecting qualitative data.
tags: [qualitative-research, interviews, thematic-analysis, saturation, data-collection]
author: community
---

# Interview Response Saturation Tracker

This skill analyzes qualitative interview data across sessions to track theme emergence, calculate saturation metrics, and tell researchers when additional interviews are unlikely to produce new insights.

## Saturation Tracking Workflow

### 1. Collect Session Data
For each interview session provided, extract:
- **New themes**: Concepts, patterns, or ideas appearing for the first time
- **Recurring themes**: Previously identified themes that reappear
- **Theme variants**: Nuanced sub-variations of existing themes
- **Disconfirming evidence**: Data that contradicts or complicates existing themes

Ask the user to provide interview summaries, transcripts, or coded notes. If only raw transcripts are given, perform first-pass thematic coding before proceeding.

### 2. Build the Cumulative Theme Registry
Maintain a running list across all sessions:
- Assign each theme a unique ID (T-001, T-002, etc.)
- Record the session in which each theme first appeared
- Record every subsequent session in which it reappears
- Flag themes that appear only once as "tentative"

### 3. Calculate Saturation Indicators
After each new session, compute:
- **New theme rate**: (New themes in session) ÷ (Total themes to date) × 100
- **Theme recurrence rate**: (Recurring themes in session) ÷ (Total themes to date) × 100
- **Cumulative saturation score**: Running average of recurrence rates across all sessions

Apply these thresholds:
- New theme rate **> 20%**: Saturation not reached — continue interviewing
- New theme rate **10–20%**: Approaching saturation — 2–4 more interviews recommended
- New theme rate **< 10%** for two consecutive sessions: Saturation likely reached
- New theme rate **0%** for two consecutive sessions: Strong saturation — stop collecting

### 4. Apply Contextual Modifiers
Adjust the recommendation based on:
- **Sample diversity**: If demographic or experiential subgroups are underrepresented, flag this and recommend targeted interviews even if overall saturation is reached
- **Research scope**: Narrow research questions saturate faster; broad exploratory studies require more sessions
- **Disconfirming evidence**: Any session producing strong disconfirming data resets the saturation clock — treat it as a new theme cluster
- **Theoretical framework**: Grounded theory studies require stricter saturation than descriptive phenomenology

### 5. Generate Recommendation
Based on the metrics and modifiers, produce one of four verdicts:
- **CONTINUE**: Clear gaps remain; specify missing themes or subgroups
- **APPROACHING**: Near saturation; recommend specific number of additional interviews
- **LIKELY SATURATED**: Metrics suggest stopping; recommend one confirmatory interview
- **SATURATED**: Stop data collection; proceed to analysis

## Output Format

Produce a structured saturation report with these sections:

**Saturation Dashboard**
- Sessions analyzed: [N]
- Total themes identified: [N]
- New themes this session: [N] ([X]%)
- Recurrence rate this session: [X]%
- Cumulative saturation score: [X]%
- Verdict: [CONTINUE / APPROACHING / LIKELY SATURATED / SATURATED]

**Cumulative Theme Registry**
A table with columns: Theme ID | Theme Label | First Session | Sessions Present | Status (Active/Tentative/Saturated)

**Session-by-Session New Theme Curve**
A text-based chart or table showing new theme count per session to visualize the diminishing returns curve.

**Saturation Recommendation**
2–4 sentences explaining the verdict, any subgroup gaps, and specific next steps (e.g., "Conduct 2 more interviews targeting participants with X characteristic before closing data collection").

**Flags and Warnings**
