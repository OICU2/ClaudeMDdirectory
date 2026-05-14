---
name: step-acquisition-remeasurement-calculator
description: >
  Calculates the gain or loss recognized when a company achieves control of an acquiree through a step acquisition, requiring remeasurement of the previously held equity interest to fair value at the acquisition date. Use when someone asks about step acquisition accounting, mentions remeasuring a prior equity interest to fair value upon gaining control, or wants to calculate the remeasurement gain or loss on an existing stake in a business combination. Also activates when someone references ASC 805 or IFRS 3 step acquisition requirements, or asks how to account for an investment that crosses the control threshold.
category: finance
tags: [step-acquisition, business-combinations, fair-value-remeasurement, ASC-805, IFRS-3]
author: community
---

# Step Acquisition Remeasurement Calculator

This skill computes the remeasurement gain or loss on a previously held equity interest when a business combination achieves control, following ASC 805 (US GAAP) or IFRS 3 guidance.

## Calculation Workflow

### Step 1: Gather Required Inputs
Collect the following before calculating:
- **Fair value of previously held interest** at the acquisition date
- **Carrying value (book value)** of the previously held interest immediately before acquisition date
- **Ownership percentage** before and after the transaction
- **Accounting standard in use**: ASC 805 (US GAAP) or IFRS 3
- Any **OCI balances** (e.g., unrealized gains/losses, foreign currency translation) associated with the prior interest

### Step 2: Compute the Remeasurement Gain or Loss
```
Remeasurement Gain (Loss) = Fair Value of Previously Held Interest
                           − Carrying Value of Previously Held Interest
```
- A positive result = **remeasurement gain** → recognized in income statement
- A negative result = **remeasurement loss** → recognized in income statement

### Step 3: Reclassify OCI Balances
- Under both ASC 805 and IFRS 3, accumulated OCI related to the previously held interest (e.g., AFS/FVOCI unrealized gains, CTA) must be **reclassified to net income** (or retained earnings for equity method CTA under IFRS) as if the prior interest had been disposed of.
- Identify and separately state each OCI component being reclassified.

### Step 4: Determine Total Income Statement Impact
```
Total P&L Impact = Remeasurement Gain (Loss) + OCI Reclassification to Income
```

### Step 5: Record the Journal Entry
Debit/credit the previously held investment account to its fair value, recognize the gain or loss in earnings, and clear the related OCI balances.

**Example journal entry:**
```
Dr. Investment in Acquiree (to fair value)       [amount]
  Cr. Gain on Remeasurement — Step Acquisition  [gain amount]
  Cr. OCI — Unrealized Gain (reclassification)  [OCI amount]
```
Adjust signs as appropriate for losses.

### Step 6: Note Standard-Specific Differences
- **ASC 805**: Remeasurement gain/loss and all OCI reclassifications go to net income in the period control is obtained.
- **IFRS 3**: Same treatment for most cases; equity-method CTA may transfer to retained earnings rather than P&L depending on facts.

## Output Format

Produce a structured response with the following sections:

1. **Inputs Summary** — restate all provided values in a labeled list
2. **Remeasurement Calculation** — show the formula with numbers substituted in
3. **OCI Reclassification** — itemize any OCI amounts reclassified and their destination
4. **Total P&L Impact** — single line with the net income statement effect
5. **Journal Entry** — T-account or debit/credit format with labeled accounts and amounts
6. **Standard Notes** — one brief paragraph flagging any ASC 805 vs. IFRS 3 differences relevant to the specific inputs provided
7. **Caveats** — flag if fair value was not provided or if additional appraisal/valuation is needed

Use tables or clearly labeled formula blocks where numbers are involved. Keep narrative to a minimum; prioritize clarity of numbers and accounting entries.
