---
name: longitudinal-study-attrition-tracker
description: >
  Tracks participant drop-off across waves of a longitudinal study, flags attrition bias risks, and recommends retention strategies or statistical weighting adjustments. Use when someone says they are losing participants between study waves, asks about dropout patterns in their longitudinal data, wants to assess whether attrition is threatening their study's validity, or needs to decide how to handle missing follow-up data. Also activates when someone mentions uneven sample sizes across time points or worries that certain groups are dropping out faster than others.
category: research
tags: [longitudinal, attrition, missing-data, research-methods, bias-detection]
author: community
---

# Longitudinal Study Attrition Tracker

This skill analyzes participant drop-off patterns across study waves, identifies whether attrition is random or systematic, flags threats to internal and external validity, and recommends actionable retention or weighting strategies.

## Attrition Analysis Workflow

### Step 1: Collect Wave-Level Participation Data
Ask the researcher to provide (or extract from what they share):
- Total enrolled sample (Wave 1 N)
- N retained at each subsequent wave
- Any known demographic or subgroup breakdowns (age, gender, treatment group, etc.)
- Study design type (panel, cohort, experimental, observational)

### Step 2: Calculate Attrition Metrics
Compute the following for each wave transition:
- **Raw attrition count**: Wave N participants − Wave N+1 participants
- **Wave-over-wave attrition rate**: (Lost / Prior wave N) × 100
- **Cumulative attrition rate**: (Total lost from baseline / Wave 1 N) × 100
- **Differential attrition** (if subgroup data available): Compare attrition rates across groups; flag if any group differs by more than 10 percentage points

### Step 3: Classify Attrition Type
Categorize dropout mechanism based on available evidence:
- **MCAR (Missing Completely At Random)**: Dropout unrelated to observed or unobserved variables — lowest bias risk
- **MAR (Missing At Random)**: Dropout related to observed covariates but not the outcome itself — bias manageable with weighting
- **MNAR (Missing Not At Random)**: Dropout related to the unobserved outcome — highest bias risk, flag prominently

Use these signals to infer type:
- If high-risk or low-performing participants drop disproportionately → likely MNAR
- If dropout correlates with baseline demographics → likely MAR
- If no discernible pattern → tentatively MCAR

### Step 4: Flag Attrition Bias Risks
Raise a bias risk flag if any of the following thresholds are met:
- Cumulative attrition exceeds 20% of baseline sample
- Differential attrition between key subgroups exceeds 10%
- Dropout rate accelerates rather than stabilizes across waves
- The dropouts differ significantly from completers on key baseline variables

Severity levels:
- 🟡 **Moderate risk**: 15–30% cumulative attrition or modest differential attrition
- 🔴 **High risk**: >30% cumulative attrition, MNAR signals, or large differential attrition

### Step 5: Recommend Adjustments
Based on attrition type and severity, recommend from the following:

**Retention strategies (if study is ongoing):**
- Increase contact frequency before upcoming waves
- Offer incentive refreshers or updated consent procedures
- Identify early dropout predictors from baseline data and target those participants proactively

**Statistical corrections (if data already collected):**
- **Inverse Probability Weighting (IPW)**: Use when dropout is MAR; model probability of retention using observed covariates and reweight completers
- **Multiple Imputation (MI)**: Use when data are MAR; impute missing values across multiple datasets and pool results
- **Full Information Maximum Likelihood (FIML)**: Use in SEM or regression contexts with MAR data; preferred over listwise deletion
- **Sensitivity analysis**: Always recommend when MNAR is suspected; test how results change under different missing data assumptions
- **Avoid listwise deletion** unless attrition is <5% and confirmed MCAR

---

## Output Format

Produce a structured attrition report with the following sections:

**1. At
