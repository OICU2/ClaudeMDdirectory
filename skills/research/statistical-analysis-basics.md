---
name: statistical-analysis-basics
description: >
  Applies fundamental statistical methods to analyze datasets and interpret results meaningfully.
  Use when someone asks "what does this data show," wants to find patterns in numbers, needs to
  compare groups statistically, asks whether a result is significant, or wants to summarize a
  dataset. Covers descriptive statistics, hypothesis testing, correlation, and basic inference.
category: research
tags: [statistics, data-analysis, research-methods, quantitative, inference]
author: community
---

# Statistical Analysis Basics

This skill guides Claude through applying appropriate basic statistical methods to a dataset or research question and communicating findings clearly and accurately.

## Analysis Workflow

1. **Understand the data structure** — Identify variable types (continuous, categorical, ordinal), sample size, and how the data was collected. Ask for clarification if not provided.

2. **Choose the right method** — Match the question to the appropriate technique:
   - Summarizing a single variable → mean, median, mode, standard deviation, range, IQR
   - Comparing two groups → t-test (continuous) or chi-square (categorical)
   - Comparing three or more groups → ANOVA
   - Relationship between two continuous variables → Pearson or Spearman correlation
   - Predicting one variable from another → simple linear regression
   - Checking for normality → mention skewness, kurtosis, or visual inspection

3. **Check assumptions** — State which assumptions apply (e.g., normality, independence, equal variance) and flag if any are likely violated given the data described.

4. **Interpret results in plain language** — Translate statistical outputs (p-values, confidence intervals, correlation coefficients, effect sizes) into what they actually mean for the question at hand.

5. **Quantify uncertainty** — Always report confidence intervals or standard errors alongside point estimates. Never state conclusions as certain when they are probabilistic.

6. **Flag limitations** — Note sample size issues, potential confounders, selection bias, or reasons the analysis may not generalize.

7. **Avoid common errors** — Do not conflate statistical significance with practical significance. Do not imply causation from correlation. Do not ignore multiple comparisons when relevant.

## Output Format

Produce a structured analysis response with these sections:

- **Method Selected**: Name the statistical method and one sentence explaining why it fits the question.
- **Key Results**: Present the main statistics (e.g., mean ± SD, r = 0.67, p = 0.03, 95% CI [x, y]) in a short table or bulleted list.
- **Plain-Language Interpretation**: 2–4 sentences explaining what the numbers mean in the context of the original question. No jargon without definition.
- **Caveats**: 1–3 bullet points on limitations, assumption violations, or what would strengthen the analysis.
- **Next Steps** (optional): Suggest one or two follow-on analyses if they would meaningfully improve understanding.

Keep the total response concise — under 400 words unless the dataset or question complexity requires more detail.