---
name: competitor-product-roadmap-signal-tracker
description: >
  Aggregates and analyzes publicly available signals—job postings, patent filings, GitHub activity, and press releases—to infer likely near-term product roadmap directions for competitor companies. Use when someone says "what is [competitor] building next," asks about a rival company's product strategy, wants to understand where a competitor is investing, needs to anticipate competitive threats, or is trying to map out the competitive landscape before a product decision.
category: research
tags: [competitive-intelligence, product-strategy, market-research, roadmap, signals]
author: community
---

# Competitor Product Roadmap Signal Tracker

This skill synthesizes weak signals from public sources to produce a structured inference of what a competitor is likely building or launching in the next 6–18 months, activating whenever a user asks about a competitor's future plans or product direction.

## Signal Collection & Analysis Workflow

1. **Identify the target competitor(s)** — Confirm the company name, relevant product lines, and the time horizon of interest (default: next 6–18 months).

2. **Define signal categories to investigate** — Collect signals across these five source types:
   - **Job postings**: Search for recent listings (last 90 days) on LinkedIn, Greenhouse, Lever, and the company's careers page. Look for new engineering roles (ML, infrastructure, mobile), product managers with specific domain expertise, and clusters of hiring in a single area.
   - **Patent filings**: Search USPTO, EPO, and Google Patents for filings in the last 12 months. Note inventors, filing dates, and abstract language indicating new technical directions.
   - **GitHub & open-source activity**: Check public repos for new projects, dependencies being added, and contributor focus areas.
   - **Press releases & blog posts**: Scan the company newsroom, official blog, and PR Newswire for partnership announcements, SDK releases, beta programs, and acquisition news.
   - **Executive statements**: Review earnings call transcripts (via Seeking Alpha or similar), conference talks, and LinkedIn posts from C-suite and VPs for forward-looking language.

3. **Extract and tag signals** — For each signal found, tag it with:
   - Source type (job posting / patent / announcement / exec statement / OSS)
   - Date
   - Signal strength (strong / moderate / weak)
   - Inferred theme (e.g., "AI integration," "enterprise expansion," "mobile-first push")

4. **Cluster signals into roadmap themes** — Group related signals into 3–6 coherent themes. A theme requires at least two independent signals to qualify. Single-signal observations are flagged as speculative.

5. **Assess confidence level** — For each theme, assign:
   - **High confidence**: 3+ corroborating signals from 2+ source types
   - **Medium confidence**: 2 corroborating signals or 1 strong signal
   - **Low confidence / speculative**: Single weak signal, include as "watch list" item

6. **Identify strategic implications** — For each high/medium confidence theme, briefly note what it means for the user's own product or competitive positioning.

7. **Flag data gaps** — Note which signal categories yielded no useful data and recommend manual follow-up actions (e.g., "No recent patents found — consider monitoring Google Patents alert for [company]").

## Output Format

Produce a structured report with the following sections:

---

**Competitor Roadmap Signal Report: [Company Name]**
*Analysis date: [date] | Time horizon: [6–18 months]*

**Executive Summary** (3–5 sentences)
Top-line synthesis of the most likely near-term product moves and overall strategic direction.

**Roadmap Themes**

For each theme (list 3–6):

> **Theme: [Name]** — Confidence: High / Medium / Low
>
> *Signals:*
> - [Source type] [Date]: [1-sentence description of signal]
> - [Source type] [Date]: [1-sentence description of signal]
>
> *Inference:* What this suggests the competitor is building or prioritizing.
>
> *Strategic implication:* What this means for the user's product or market position.

**Watch List** (speculative, single-signal items)
- Bullet list of weak signals worth monitoring, with source and date.

**Data Gaps & Recommended Follow-Up**
- Bulleted
