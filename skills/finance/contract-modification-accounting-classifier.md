---
name: contract-modification-accounting-classifier
description: >
  Analyzes contract changes to determine the correct accounting treatment under ASC 606 or IFRS 15
  revenue recognition standards. Use when someone asks about how to account for a contract change,
  wonders whether a modification creates a new contract, needs to classify a scope or price change
  in an existing customer agreement, or wants to determine if variable consideration reallocation is
  required.
category: finance
tags: [revenue-recognition, asc606, ifrs15, contract-modifications, accounting]
author: community
---

# Contract Modification Accounting Classifier

This skill evaluates contract changes against ASC 606 / IFRS 15 criteria to determine whether a modification should be accounted for as a new contract, a prospective modification, or a cumulative catch-up adjustment, and explains the revenue impact of each treatment.

## Classification Workflow

### Step 1: Gather the Facts
Collect the following before classifying:
- Nature of the change (additional goods/services, price change, scope reduction, both)
- Whether new distinct goods or services are being added
- The standalone selling price (SSP) of any added goods/services
- Whether the price change reflects the SSP of the addition
- Status of performance obligations already satisfied vs. remaining

### Step 2: Apply the New Contract Test
A modification is a **new separate contract** if BOTH conditions are met:
1. The modification adds one or more **distinct** goods or services (can be used on their own or with other readily available resources)
2. The price increase reflects the **standalone selling price** of those distinct goods/services at contract inception of the modification

If both are true → treat as a **new contract**. Account for it prospectively; original contract is unaffected.

### Step 3: Apply the Modification-of-Existing-Contract Tests
If the new contract test fails, determine the sub-type:

**Type A — Prospective (Remaining Goods/Services Are Distinct):**
- The remaining undelivered goods/services are distinct from those already transferred
- Allocate the modified transaction price to remaining performance obligations
- Recognize revenue prospectively as if the old contract were terminated and a new one created

**Type B — Cumulative Catch-Up (Remaining Goods/Services Are NOT Distinct):**
- The remaining goods/services form part of a single combined performance obligation with already-transferred items
- Recalculate the measure of completion for the combined obligation
- Record a **cumulative catch-up adjustment** (positive or negative) to revenue in the current period

**Type C — Hybrid:**
- Some remaining obligations are distinct (→ prospective treatment)
- Some remaining obligations are not distinct from already-delivered items (→ cumulative catch-up)
- Apply each treatment to the appropriate portion

### Step 4: Determine Variable Consideration Impact
- If the modification introduces or changes variable consideration (e.g., bonuses, penalties, rebates), apply the constraint test
- Include variable amounts only to the extent it is highly probable (ASC 606) / highly likely (IFRS 15) a significant revenue reversal will not occur

### Step 5: Document the Judgment
Note any significant judgments made, especially:
- How "distinct" was assessed
- How SSP was estimated
- Whether the contract combines with other contracts under the combination rules

## Output Format

Produce a structured classification memo with these sections:

**1. Modification Summary**
- One paragraph describing the change in plain language

**2. New Contract Test**
- Checklist: distinct goods/services added? (Yes/No + rationale)
- Checklist: price reflects SSP? (Yes/No + rationale)
- Conclusion: Qualifies as new contract? (Yes/No)

**3. Classification Result**
- Bold label: `New Contract`, `Prospective Modification`, `Cumulative Catch-Up`, or `Hybrid`
- One sentence explaining the accounting consequence

**4. Revenue Impact**
- Describe how and when revenue is recognized under the selected treatment
- Include a simple numeric example if transaction price figures were provided

**5. Key Judgments & Risks**
- Bullet list of up to four judgment calls or areas of estimation uncertainty

**6. Standard References**
- Cite applicable paragraphs: ASC 606-10-25-12 through 25-13 (new contract), 25-14 through 25-19 (existing contract), or
