---
name: sample-size-calculation
description: >
  Calculates statistically appropriate sample sizes for surveys, A/B tests, or experiments based on user-defined parameters. Use when someone asks "how many participants do I need," wants to determine survey sample size, is planning an experiment and needs statistical guidance, asks about margin of error or confidence intervals for a study, or needs to calculate power for a test.
category: research
tags: [statistics, research-design, surveys, experiments, power-analysis]
author: community
---

# Sample Size Calculation

This skill computes the required sample size for surveys or experiments given confidence level, margin of error, population size, and expected effect size, explaining the statistical reasoning behind each result.

## Calculation Workflow

1. **Identify the study type** — determine whether the user needs a sample size for:
   - A survey/proportion estimate (one-sample)
   - A two-group comparison (A/B test, controlled experiment)
   - A continuous outcome (t-test) or binary outcome (proportion test)

2. **Collect required inputs** — ask for any missing parameters:
   - **Confidence level**: default to 95% (Z = 1.96) if not specified
   - **Margin of error (surveys)**: typical values are 3–5%; ask if unclear
   - **Expected effect size or baseline rate**: e.g., current conversion rate, expected difference between groups
   - **Statistical power (experiments)**: default to 80% (β = 0.20) if not specified
   - **Population size**: for finite population correction; if unknown, treat as infinite (N > 100,000)

3. **Apply the appropriate formula**:

   **Survey / proportion (infinite population):**
   ```
   n = (Z² × p × (1 − p)) / e²
   ```
   where Z = Z-score for confidence level, p = expected proportion (use 0.5 if unknown), e = margin of error

   **Finite population correction:**
   ```
   n_adjusted = n / (1 + (n − 1) / N)
   ```

   **Two-proportion A/B test:**
   ```
   n = (Z_α/2 + Z_β)² × [p1(1−p1) + p2(1−p2)] / (p1 − p2)²
   ```

   **Two-sample t-test (continuous outcome):**
   ```
   n = 2 × (Z_α/2 + Z_β)² × σ² / δ²
   ```
   where σ = expected standard deviation, δ = minimum detectable effect

4. **Show the calculation step-by-step** — do not return only the final number. Walk through variable substitution so the user can verify or adjust inputs.

5. **Apply practical adjustments**:
   - Add 10–20% buffer for expected non-response or dropout
   - Flag if the calculated n exceeds a reasonable fraction of the population (>10%) and apply finite population correction
   - Note if effect size inputs seem too small or too large relative to real-world benchmarks

6. **Interpret the result** — explain what the number means in plain language and what happens if the user increases or decreases key parameters.

## Output Format

Produce a structured response with these sections:

**Parameters Used**
A bullet list of every input value used (including defaults and assumptions).

**Calculation**
Step-by-step formula application with numeric substitution. Use code blocks for equations.

**Result**
> **Required sample size: [N]**
> With [dropout/non-response buffer], collect at least **[N_adjusted]** responses.

**Interpretation**
2–3 sentences explaining what this sample size achieves statistically and what trade-offs exist.

**Sensitivity Table** (when relevant)
A compact markdown table showing how sample size changes with different confidence levels or margins of error:

| Confidence Level | Margin of Error | Required n |
|-----------------|-----------------|------------|
| 90%             | 5%              | ...        |
| 95%             | 5%              | ...        |
| 95%             | 3%              | ...        |
| 99%             | 3%              | ...        |

Keep the full response under 400 words unless a sensitivity table or multiple study types are requested.
