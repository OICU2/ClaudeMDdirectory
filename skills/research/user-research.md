---
name: user-research
description: >
  Conducts structured user research to uncover needs, behaviors, and pain points that drive product and UX decisions. Use when someone says "I need to understand my users," asks about "what users want," or wants to "validate an idea with research." Also activates when someone asks to "find user pain points" or needs to "understand why users drop off."
category: research
tags: [ux, product, research, interviews, personas]
author: community
---

# User Research Skill

This skill guides Claude through structured user research — from defining research questions to synthesizing insights — whenever product, design, or strategy decisions need grounding in real user behavior.

## Research Workflow

### 1. Define the Research Goal
- Identify the core decision this research must inform (e.g., feature prioritization, onboarding redesign, churn reduction)
- State the specific unknowns: what do we not know that we need to know?
- Distinguish between generative research (exploring problems) and evaluative research (testing solutions)

### 2. Select Research Methods
Match methods to the goal:
- **Discovery/generative**: User interviews, contextual inquiry, diary studies, jobs-to-be-done interviews
- **Evaluative**: Usability testing, concept testing, A/B test analysis
- **Quantitative signals**: Surveys, analytics review, session recordings, funnel analysis
- **Desk research**: Competitor reviews, support ticket analysis, NPS/CSAT comments

### 3. Identify Participants
- Define target user segments (by behavior, role, or use case — not just demographics)
- Specify recruiting criteria: experience level, frequency of use, customer tier
- Recommend sample size: 5–8 for qualitative interviews, 30+ for surveys, statistical significance for quantitative
- Flag edge cases worth including (power users, churned users, non-adopters)

### 4. Build Research Instruments
For interviews, generate:
- 5–8 open-ended questions ordered from broad to specific
- Follow-up probes for each question
- Screener questions for recruiting

For surveys, generate:
- Closed questions for quantitative data
- Open-text questions for qualitative signal
- Likert scales where appropriate with consistent anchors

### 5. Analyze and Synthesize
- Group raw observations into themes using affinity mapping logic
- Identify patterns across participants (note frequency: "3 of 5 users said...")
- Separate observations (what users did/said) from inferences (what it means)
- Surface contradictions and outliers — do not flatten them
- Map findings to the original research questions

### 6. Generate Actionable Insights
Each insight must follow this structure:
> **Observation**: What was seen or heard  
> **Interpretation**: What it means for the product or experience  
> **Implication**: What should change or be investigated further

## Output Format

Produce a **User Research Report** with these sections:

**Research Summary** (3–5 sentences)
- Goal, methods used, number of participants, key timeframe

**Key Findings** (bulleted list, 4–8 findings)
- Each finding: one bold headline + 2–3 sentences of supporting evidence
- Include frequency indicators where possible ("majority of participants," "2 of 6 users")

**User Pain Points** (prioritized list)
- Ranked by frequency and severity
- Each pain point linked to a specific user quote or observed behavior

**Personas or User Archetypes** (if applicable)
- Name, primary goal, key frustration, behavioral pattern
- 1 representative quote per archetype

**Opportunities & Recommendations** (3–5 items)
- Framed as "How might we..." questions or direct product/UX recommendations
- Tied explicitly to a finding

**Open Questions**
- What this research did not answer
- Suggested next research steps

Length: Concise by default. Expand sections only when evidence is rich. Use tables for comparing findings across segments.