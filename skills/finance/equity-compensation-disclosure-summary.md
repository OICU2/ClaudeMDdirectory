---
name: equity-compensation-disclosure-summary
category: finance
description: >
  Compiles stock option and RSU grant activity, vesting schedules, and intrinsic value calculations into a disclosure-ready footnote summary formatted for financial statements. Use when someone says "prepare our equity compensation footnote," asks about "stock-based compensation disclosure," wants to "summarize RSU and option activity for the 10-K," needs to "calculate intrinsic value of outstanding options," or is "drafting equity award disclosures for audit." Supports ASC 718 and IFRS 2 disclosure requirements.
tags: [equity-compensation, stock-options, RSUs, financial-statements, ASC-718]
author: community
---

# Equity Compensation Disclosure Summary

This skill compiles stock option and RSU grant data into a structured, disclosure-ready footnote summary suitable for inclusion in financial statements under ASC 718 or IFRS 2.

## Workflow

### 1. Collect Required Inputs
Request the following data if not provided:
- **Grant details**: grant date, award type (ISO, NSO, RSU, PSU), number of shares, grant price/fair value
- **Vesting schedule**: cliff or graded, vesting period, performance conditions if applicable
- **Current period activity**: grants, exercises, forfeitures, expirations, vested/released shares
- **Market data**: current stock price, risk-free rate, expected volatility, expected term (for Black-Scholes)
- **Prior period balances**: beginning-of-period outstanding shares and weighted average exercise prices

### 2. Compute Key Metrics
Calculate the following for each award type:

**Stock Options:**
- Weighted average exercise price (WAEP) for beginning balance, granted, exercised, forfeited, expired, ending balance, and exercisable
- Weighted average remaining contractual term (years) for outstanding and exercisable awards
- Aggregate intrinsic value = (current stock price − exercise price) × shares in-the-money, for outstanding and exercisable
- Fair value per option using Black-Scholes: `FV = S·N(d1) − K·e^(-rT)·N(d2)`

**RSUs / PSUs:**
- Weighted average grant-date fair value per unit
- Number of units: beginning balance, granted, vested/released, forfeited, ending balance
- Total unrecognized compensation cost and weighted average recognition period remaining

**Total Stock-Based Compensation Expense:**
- Break out by award type and income statement line (COGS, R&D, S&M, G&A)
- Current period vs. prior period comparison
- Tax benefit recognized

### 3. Build Activity Roll-Forward Tables
Produce a separate roll-forward table for stock options and RSUs showing:
- Beginning balance → grants → exercises/releases → forfeitures → expirations → ending balance
- All weighted average prices and fair values aligned per column

### 4. Summarize Valuation Assumptions
List Black-Scholes or Monte Carlo assumptions in a table:
- Expected term, expected volatility, risk-free interest rate, dividend yield, weighted average fair value of awards granted

### 5. Draft Disclosure Narrative
Write a concise footnote narrative (~150–300 words) covering:
- Plan description and authorized shares remaining
- Vesting terms and expiration policy
- Expense recognition methodology (straight-line vs. graded)
- Total compensation expense and unrecognized balance with expected recognition period

## Output Format

Produce the following sections in order, using markdown tables and labeled headers suitable for copy-paste into a financial statement draft:

1. **Footnote Narrative** — prose paragraph(s), ~150–300 words
2. **Stock Option Activity Table** — roll-forward with WAEP, contractual term, and intrinsic value columns
3. **RSU/PSU Activity Table** — roll-forward with weighted average grant-date fair value
4. **Valuation Assumptions Table** — one row per grant tranche or fiscal year
5. **Stock-Based Compensation Expense Table** — by award type and expense category, current vs. prior period
6. **Unrecognized Compensation Summary** — total cost and weighted average remaining recognition period

Flag any missing inputs with `[DATA NEEDED: ...]` placeholders rather than omitting sections. Note ASC 718 or IFRS 2 citation where relevant.
