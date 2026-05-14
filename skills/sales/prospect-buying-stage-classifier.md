---
name: prospect-buying-stage-classifier
description: >
  Analyzes prospect engagement signals, email responses, and meeting notes to classify each prospect into an accurate buying stage for prioritized follow-up. Use when someone says "I need to figure out where this prospect stands," asks about "which leads are ready to close," or wants to "prioritize my pipeline based on buying intent." Also activates when a user shares meeting notes and asks "what stage is this prospect in" or says "help me figure out who to follow up with first."
category: sales
tags: [prospect-scoring, pipeline-management, buying-intent, lead-qualification, sales-prioritization]
author: community
---

# Prospect Buying Stage Classifier

This skill analyzes prospect engagement data — emails, meeting notes, response patterns, and behavioral signals — to assign each prospect a defined buying stage and generate a prioritized follow-up action plan.

## Classification Workflow

### Step 1: Collect Prospect Data
Ask the user to provide any combination of the following for each prospect:
- Email thread excerpts or response summaries
- Meeting notes or call summaries
- Engagement activity (opened emails, clicked links, attended demos)
- Stated timeline, budget mentions, or objections raised
- Last contact date and outcome

If data is sparse, note what is missing and proceed with available signals, flagging confidence level.

### Step 2: Map Signals to Buying Stages
Evaluate each prospect against these stage definitions:

| Stage | Name | Key Signals |
|---|---|---|
| 1 | **Unaware / Cold** | No response, no engagement, first outreach only |
| 2 | **Aware** | Opened emails, visited site, replied with generic interest |
| 3 | **Considering** | Asked clarifying questions, attended a demo or intro call, requested materials |
| 4 | **Evaluating** | Compared against competitors, involved additional stakeholders, requested pricing or proposal |
| 5 | **Decision-Ready** | Mentioned timeline, asked about contract/onboarding, expressed urgency or commitment signals |
| 6 | **Stalled** | Was progressing but has gone silent for 14+ days without clear reason |

### Step 3: Score Engagement Intensity
For each prospect, rate engagement intensity on a 1–5 scale:
- **Responsiveness**: How quickly and substantively they reply
- **Initiative**: Whether they proactively reach out or ask questions
- **Stakeholder involvement**: Have they looped in decision-makers?
- **Specificity**: Are their questions getting more detailed and technical?

Combine stage + intensity to produce a **Priority Score** (Stage × Avg Intensity, max 30).

### Step 4: Flag Risk Factors
Identify and note any of the following:
- Budget not confirmed → flag as "Budget Risk"
- No decision-maker access → flag as "Authority Risk"
- Vague or shifting timeline → flag as "Timeline Risk"
- Competitor mentioned → flag as "Competitive Risk"
- Silence over 14 days → flag as "Churn Risk"

### Step 5: Assign Follow-Up Action
Map each stage to a concrete next action:
- **Stage 1–2**: Send value-add content or case study; no pitch yet
- **Stage 3**: Schedule a discovery or needs-assessment call
- **Stage 4**: Deliver tailored proposal; request stakeholder meeting
- **Stage 5**: Send contract or next-step email within 24 hours
- **Stalled**: Send a re-engagement email with a direct question or deadline hook

## Output Format

Produce a structured report for each prospect analyzed:

---

### Prospect: [Name / Company]
- **Buying Stage**: [Stage Number — Stage Name]
- **Engagement Intensity**: [X/5]
- **Priority Score**: [X/30]
- **Risk Flags**: [List flags or "None"]
- **Stage Rationale**: 2–3 sentences citing specific signals from the provided data that justify the classification.
- **Recommended Next Action**: One concrete action with suggested timing (e.g., "Send competitive comparison one-pager within 48 hours").
- **Suggested Message Opener**: One sentence the rep can use to open their next outreach, tailored to the prospect's stage and last interaction.

---

If multiple prospects are provided, conclude with a **Priority Stack Rank** — a numbered list ordering all prospects from highest
