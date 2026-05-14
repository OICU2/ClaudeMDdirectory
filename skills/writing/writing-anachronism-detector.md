---
name: writing-anachronism-detector
category: writing
description: >
  Scans written drafts for words, phrases, technology references, cultural touchstones, and idioms that don't belong to the intended time period of the content. Use when someone says "check this for anachronisms," asks whether their historical dialogue sounds authentic, wants to make sure their period piece doesn't have modern slang, needs a timeline accuracy review, or is worried their story feels anachronistic.
tags: [writing, historical-fiction, editing, accuracy, proofreading]
author: community
---

# Writing Anachronism Detector

This skill scans drafts against a stated time period and flags any language, references, technology, concepts, or cultural elements that postdate or predate that era, then explains why each item is anachronistic and suggests period-accurate alternatives.

## Detection Workflow

1. **Establish the target time period** — Identify the setting from user input or the draft itself (e.g., "1920s Chicago," "medieval England," "Cold War 1960s"). If ambiguous, ask before proceeding.

2. **Scan for anachronistic language** — Check for:
   - **Vocabulary and slang**: Words coined after or before the period (e.g., "okay" before 1839, "cool" as slang before 1930s, "literally" used as an intensifier is modern)
   - **Technology references**: Devices, systems, or concepts that didn't exist (e.g., smartphones, refrigerators, radar, antibiotics — each has a specific invention date)
   - **Cultural references**: Brands, celebrities, sports teams, films, songs, or events that postdate the setting
   - **Social concepts and terminology**: Terms like "PTSD," "gaslighting," "trauma," or "boundaries" in their modern psychological sense are 20th–21st century constructs
   - **Idioms and phrases**: Many common expressions have traceable origin dates (e.g., "on the radar" requires radar, "catch-22" requires the 1961 novel)
   - **Measurements, currency, and units**: Verify these match the region and era

3. **Cross-reference origin dates** — For each flagged item, apply known linguistic and historical knowledge to confirm when the word, concept, or reference entered common use.

4. **Assess severity** — Classify each anachronism:
   - **Critical**: Breaks immersion or is factually impossible for the period
   - **Moderate**: Unlikely but debatable depending on character background
   - **Minor**: Technically possible but stylistically jarring

5. **Suggest replacements** — For each flagged item, provide one or more period-accurate alternatives that preserve the author's intended meaning.

## Output Format

Produce a structured report with the following sections:

---

**Time Period:** [Stated or inferred setting]

**Anachronisms Found:** [Total count]

---

### 🔴 Critical Anachronisms
| Flagged Text | Why It's Anachronistic | Period-Accurate Alternative |
|---|---|---|
| "She texted him" | SMS technology didn't exist until 1992 | "She sent him a telegram" / "She rang him up" |

### 🟡 Moderate Anachronisms
| Flagged Text | Why It's Anachronistic | Period-Accurate Alternative |
|---|---|---|

### 🟢 Minor / Stylistic Flags
| Flagged Text | Why It's Anachronistic | Period-Accurate Alternative |
|---|---|---|

---

**✅ Period-Accurate Elements** (optional, brief): Call out 2–3 things the author got right to reinforce good instincts.

**Summary Note:** One paragraph of overall observations — common patterns in the anachronisms found (e.g., "Most issues stem from modern psychological vocabulary") and highest-priority fixes.

---

- Keep explanations concise — one sentence per anachronism is sufficient
- If no anachronisms are found, say so explicitly and note what was checked
- Do not rewrite the draft unless asked; flag and suggest only
