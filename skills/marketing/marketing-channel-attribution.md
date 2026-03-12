---
name: marketing-channel-attribution
description: >
  Analyzes multi-touch conversion data to assign revenue credit across marketing channels using first-touch, last-touch, or linear attribution models. Use when someone asks "which marketing channels are driving conversions," wants to understand how to split revenue credit across touchpoints, or needs to evaluate channel ROI using attribution data. Also activates when someone says "attribute sales to campaigns," wants to compare attribution models, or asks how to allocate marketing budget based on conversion paths.
category: marketing
tags: [attribution, multi-touch, conversion, revenue, channels]
author: community
---

# Marketing Channel Attribution

This skill analyzes multi-touch customer journey data to distribute revenue credit across marketing channels and produces a clear attribution report comparing model outputs to support budget decisions.

## Attribution Workflow

### 1. Clarify Inputs
Before analysis, confirm:
- **Conversion data format**: touchpoint sequences per customer (channel, timestamp, conversion value)
- **Attribution model requested**: first-touch, last-touch, linear, time-decay, or U-shaped (position-based)
- **Date range** and **conversion event** (purchase, signup, demo, etc.)
- Whether to compare multiple models side by side

### 2. Parse Touchpoint Sequences
For each customer journey:
- Order touchpoints chronologically
- Identify the converting session (final touchpoint before conversion)
- Record associated revenue or conversion value
- Flag any direct/organic entries that may need exclusion

### 3. Apply Attribution Models

**First-Touch**: 100% of credit to the first channel in the sequence
**Last-Touch**: 100% of credit to the final channel before conversion
**Linear**: Credit divided equally across all touchpoints in the journey
**Time-Decay**: More credit to touchpoints closer to conversion; apply exponential decay (half-life = 7 days default unless specified)
**U-Shaped (Position-Based)**: 40% to first touch, 40% to last touch, 20% split evenly across middle touches

Calculate per-channel totals for each model applied.

### 4. Compute Channel Metrics
For each channel, calculate:
- Total attributed revenue (by model)
- Number of assisted conversions
- Number of first-touch conversions
- Number of last-touch conversions
- Attribution share (% of total revenue)

### 5. Identify Insights
Flag:
- Channels with high first-touch but low last-touch share (awareness drivers)
- Channels with high last-touch but low first-touch share (closers)
- Channels consistently credited across all models (reliable contributors)
- Large divergence between linear and last-touch (signals over/under-reliance on a channel)

### 6. Budget Recommendation
Based on the model results:
- Recommend which model best fits the business stage (e.g., last-touch for direct response, linear for brand awareness)
- Suggest 1-3 reallocation actions based on attribution data

## Output Format

Produce a structured report with the following sections:

**Attribution Summary Table**
| Channel | First-Touch $ | Last-Touch $ | Linear $ | [Other Model $] | Linear Share % |
|---|---|---|---|---|---|

**Model Comparison Highlights**
- 3-5 bullet points noting the most significant differences across models

**Channel Roles**
- Label each channel: Awareness Driver / Mid-Funnel Nurture / Converter / Mixed

**Recommended Attribution Model**
- One paragraph explaining which model to use going forward and why, based on the data

**Budget Actions**
- Numbered list of 2-4 specific reallocation or investment recommendations with supporting data references

Length: concise — full report should be skimmable in under 3 minutes. Use tables for numeric data, bullets for insights, plain prose for recommendations.
