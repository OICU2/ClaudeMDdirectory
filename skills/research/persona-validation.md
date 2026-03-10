---
name: persona-validation
description: >
  Validates customer personas by cross-referencing them against real user research data, interview transcripts, and behavioral evidence. Use when someone says "I want to check if our personas are accurate," asks about whether their user segments reflect real customers, or wants to stress-test assumptions baked into existing personas. Also triggers when someone needs to reconcile conflicting user research with defined personas or wants to identify gaps in persona coverage.
category: research
tags: [personas, user-research, validation, customer-insights, ux-research]
author: community
---

# Persona Validation Skill

This skill systematically tests customer personas against real user data and interview evidence to surface inaccuracies, outdated assumptions, and missing segments.

## Validation Workflow

### 1. Intake Existing Personas
- Request the current persona documents or summaries
- Identify all stated attributes: demographics, goals, pain points, behaviors, motivations, objections
- Flag any attributes marked as assumptions vs. data-backed

### 2. Gather Evidence Sources
Ask the user to provide any available:
- User interview transcripts or summaries
- Survey results or quantitative behavioral data
- Support ticket themes or NPS verbatims
- Analytics segments or cohort data
- Sales call notes or CRM tags

### 3. Attribute-by-Attribute Audit
For each persona attribute, evaluate evidence across three verdicts:
- **Confirmed** — at least two independent data sources support the claim
- **Unconfirmed** — no data directly supports or refutes it
- **Contradicted** — data conflicts with the stated attribute

Document the specific evidence or absence of evidence for each verdict.

### 4. Coverage Gap Analysis
- Identify user types appearing in the data that have no corresponding persona
- Flag persona segments with zero interview representation
- Note attributes that appear frequently in research but are absent from personas

### 5. Staleness Check
- Ask when each persona was last updated
- Flag any persona where the primary research is more than 18 months old
- Identify market or product changes since the persona was created that may have shifted user behavior

### 6. Scoring
Assign each persona a validation score:
- **Strong (80–100%)** — majority of attributes confirmed, good interview coverage
- **Partial (50–79%)** — mixed confirmation, notable gaps or one contradiction
- **Weak (<50%)** — few confirmed attributes, heavy assumption load, or direct contradictions

## Output Format

Produce a structured Persona Validation Report with these sections:

**Persona Audit Table**
A markdown table with columns: Persona Name | Attribute | Stated Claim | Evidence Found | Verdict (Confirmed / Unconfirmed / Contradicted)

**Validation Scorecard**
One summary block per persona showing: overall score, strongest supported attributes, most critical contradictions, and interview coverage count.

**Gap Report**
Bulleted list of user types found in data with no persona match, and persona attributes with zero evidence.

**Recommended Actions**
Numbered list of specific revisions — rewrite contradicted attributes, archive unsupported claims, propose new personas for uncovered segments, and flag which personas need immediate re-research.

Keep the report skimmable. Use bold for verdicts and action items. No prose padding between sections.