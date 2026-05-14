---
name: cold-outreach-personalization-variable-builder
description: >
  Extracts and organizes prospect-specific personalization variables from LinkedIn profiles, company news, and job postings to power high-relevance outbound sequences. Use when someone says "help me personalize my outreach," asks about "finding talking points for a prospect," or wants to "build variables for a cold email sequence." Also activates when someone needs to "research a prospect before reaching out" or wants to "make my cold outreach more relevant."
category: sales
tags: [cold-outreach, personalization, prospecting, sales, lead-research]
author: community
---

# Cold Outreach Personalization Variable Builder

This skill extracts, categorizes, and formats prospect-specific personalization variables from LinkedIn profiles, company news, job postings, and other public signals so Claude can populate high-relevance outbound email or LinkedIn sequences.

## Workflow

### Step 1: Gather Raw Inputs
Ask the user to provide one or more of the following:
- LinkedIn profile URL or pasted profile text
- Company name and website
- Recent company news, press releases, or funding announcements
- Active job postings (titles, descriptions)
- Any prior context about the prospect (previous conversations, mutual connections)

If none are provided, ask: "What do you know about this prospect? Paste their LinkedIn bio, company news, or job postings and I'll extract the variables."

### Step 2: Extract Prospect-Level Variables
From the LinkedIn profile or bio, extract:
- **Name & Title**: Full name, current role, seniority level
- **Tenure**: How long they've been in their current role and company
- **Career Trajectory**: Notable promotions, role changes, or company switches
- **Stated Priorities**: Keywords from their summary, featured posts, or activity (e.g., "scaling GTM," "building community")
- **Shared Background**: Schools, previous employers, or geography that overlap with the sender
- **Content Signals**: Recent posts, comments, or articles they've published and their themes
- **Skills & Endorsements**: Top skills that hint at priorities or pain points

### Step 3: Extract Company-Level Variables
From the company website, news, and job postings:
- **Company Stage & Size**: Headcount, funding round, growth rate if public
- **Recent News**: Funding, acquisitions, product launches, leadership hires, awards (flag date so variables aren't stale)
- **Strategic Initiatives**: Themes from press releases or blog posts (e.g., "expanding into enterprise," "launching in EMEA")
- **Hiring Signals**: Active job postings that reveal pain points or investments (e.g., 5 open SDR roles = scaling outbound; hiring a VP of Data = data infrastructure priority)
- **Tech Stack Clues**: Tools mentioned in job descriptions or on their website (e.g., Salesforce, Snowflake)
- **Competitive Context**: Any public mention of competitors or market positioning

### Step 4: Identify Relevance Hooks
Map extracted variables to outreach angles:
- **Trigger Event Hook**: A recent change (new role, funding, product launch) that makes now a good time to reach out
- **Pain Point Hook**: A hiring pattern or stated challenge that signals a problem the sender's product solves
- **Shared Context Hook**: A mutual connection, shared background, or content they published that earns the opener
- **Aspiration Hook**: A stated goal or initiative where the sender's solution accelerates the outcome

Flag each hook with a confidence level: **High** (direct evidence), **Medium** (inferred), or **Low** (assumed).

### Step 5: Format Variables for Sequence Use
Organize all variables into a copy-paste-ready table and a sequence-ready snippet block.

## Output Format

Produce two sections:

---

### Variable Table

| Variable Name | Value | Source | Hook Type | Confidence |
|---|---|---|---|---|
| `{{first_name}}` | Jordan | LinkedIn | — | High |
| `{{title}}` | VP of Revenue | LinkedIn | Trigger Event | High |
| `{{tenure}}` | 7 months in role | LinkedIn | Trigger Event | High |
| `{{recent_news}}` | Raised $42M Series B (March 2024) | TechCrunch | Trigger Event | High |
| `{{hiring_signal}}` | 8 open AE roles → scaling field sales |
