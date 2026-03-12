---
name: secondary-data-sourcing
description: >
  Identifies and retrieves relevant publicly available datasets, government statistics, and industry reports to support research projects without requiring primary data collection. Use when someone says "find me data on," asks about existing statistics or datasets, or wants to back up research with credible sources. Also activates when someone needs industry benchmarks, government figures, or asks "what does the data say about."
category: research
tags: [data, research, datasets, statistics, reports]
author: community
---

# Secondary Data Sourcing

This skill locates and surfaces relevant publicly available datasets, government statistics, and industry reports so research can be grounded in credible, existing evidence.

## Data Sourcing Workflow

1. **Clarify the research need** — Identify the specific topic, geographic scope, time range, and intended use (academic, business, journalism, policy). Ask if not provided.

2. **Categorize the data type needed** — Determine whether the user needs:
   - Government/official statistics (population, economic, health, crime, education)
   - Industry reports and market data (sector size, trends, benchmarks)
   - Academic or scientific datasets (studies, longitudinal data, survey data)
   - International/comparative data (cross-country figures)

3. **Match to authoritative sources by category:**
   - **Government (US):** Census Bureau, BLS, BEA, CDC, NIH, FBI UCR, NCES, USDA ERS, FEC, data.gov
   - **Government (International):** Eurostat, ONS (UK), Statistics Canada, ABS (Australia)
   - **Global/Intergovernmental:** World Bank Open Data, IMF, WHO, OECD, UN Data, FAO
   - **Industry/Market:** Statista, IBISWorld, Gartner, McKinsey Global Institute (free reports), PwC, Deloitte insights
   - **Academic/Scientific:** ICPSR, Harvard Dataverse, Kaggle (curated), PubMed datasets, IPUMS, OpenICPSR
   - **Financial:** SEC EDGAR, FDIC, Federal Reserve FRED, Yahoo Finance historical data

4. **Evaluate source quality** — For each source, confirm: recency (prefer data within 5 years unless historical context is needed), methodology transparency, sample size or coverage, and whether it is primary or aggregated.

5. **Surface access details** — Note whether data is freely downloadable, requires registration, is paywalled, or available only via API. Flag any usage or citation restrictions.

6. **Flag gaps and limitations** — If no direct dataset exists, identify the closest proxy data available and explain the gap. Suggest whether primary collection may be necessary.

## Output Format

Produce a structured data source inventory with the following sections:

**Research Topic:** [Restate the data need in one sentence]

**Recommended Sources** (list each as a numbered entry):
- **Source name** — Organization/publisher
- **What it contains:** One sentence on the relevant data
- **Coverage:** Geographic scope, time range, update frequency
- **Access:** Free / Registration required / Paywalled / API
- **Direct URL or navigation path** (if publicly known)
- **Reliability note:** One sentence on authority or methodology strength

**Gaps & Limitations:** Brief paragraph noting what is missing, outdated, or insufficiently granular, with suggested workarounds.

**Recommended Next Step:** One concrete action — e.g., download a specific dataset, filter by a variable, or combine two sources for triangulation.

Aim for 3–8 sources per response. Prioritize depth and accuracy over volume.
