---
name: customer-churn-message-diagnosis
description: >
  Analyzes exit survey responses and cancellation data to pinpoint messaging failures and unmet expectations driving customer churn. Use when someone says "customers are leaving and we don't know why," asks about "what our cancellation surveys are telling us," or wants to "understand why messaging isn't retaining customers." Also triggers when someone needs to "diagnose churn from exit feedback" or wants to "find the gap between what we promised and what customers experienced."
category: marketing
tags: [churn, retention, messaging, exit-surveys, customer-analysis]
author: community
---

# Customer Churn Message Diagnosis

This skill systematically analyzes exit survey and cancellation data to identify specific messaging failures, broken promises, and expectation gaps that are causing customers to leave.

## Diagnosis Workflow

### Step 1: Collect and Categorize Raw Churn Data
- Request all available data: exit survey responses, cancellation reasons (free-text and multiple choice), support tickets from churned accounts, and any offboarding call notes
- Categorize each churn signal into one of five buckets:
  - **Expectation mismatch** — customer expected X, got Y
  - **Feature gap** — promised or implied capability didn't exist or underperformed
  - **Value confusion** — customer couldn't articulate or experience the product's core value
  - **Onboarding failure** — customer never reached the "aha moment" the acquisition message implied
  - **Competitive displacement** — a competitor's messaging better matched the customer's actual job-to-be-done

### Step 2: Trace Each Churn Signal Back to a Message Source
- For each categorized signal, identify the originating message: ad copy, landing page claim, sales pitch, onboarding email, or in-app tooltip
- Flag specific phrases that over-promised or under-qualified
- Note the channel where the expectation was set (paid, organic, sales, referral)

### Step 3: Quantify Messaging Failure Frequency
- Count how many churned customers cite signals traceable to each message source
- Calculate the percentage of total churn each message failure accounts for
- Rank failures from highest churn impact to lowest

### Step 4: Identify the Core Expectation Gaps
- For the top 3 message failures by volume, write a one-sentence "gap statement":
  > "We told customers [X], but they experienced [Y], which caused them to leave."
- Determine whether the gap is a messaging problem (wrong promise) or a product problem (promise is right, delivery is wrong)

### Step 5: Generate Corrective Messaging Recommendations
- For each gap flagged as a messaging problem, draft revised language that sets accurate expectations without underselling
- For gaps flagged as product problems, recommend temporary messaging suppressions (stop making the claim until the product catches up)
- Prioritize recommendations by churn volume impacted

## Output Format

Produce a structured **Churn Message Diagnosis Report** with these sections:

**1. Data Summary**
- Total churn signals analyzed
- Breakdown by churn category (table format)

**2. Top Messaging Failures** (ranked list, max 5)
- Failure name
- Originating message source and exact quote if available
- Number/percentage of churned customers citing this failure
- Gap statement: "We told customers ___, but they experienced ___."

**3. Messaging vs. Product Problem Classification**
- For each failure: label as MESSAGING PROBLEM or PRODUCT PROBLEM with one-sentence rationale

**4. Corrective Actions**
- For messaging problems: revised copy recommendation (before/after format)
- For product problems: recommended messaging suppression or qualification language

**5. Priority Matrix**
- 2x2 table: Impact (churn volume) vs. Effort (difficulty to fix) for each identified failure

Length: Concise but complete. Each section should be scannable. Use tables and bullet points over prose wherever possible.
