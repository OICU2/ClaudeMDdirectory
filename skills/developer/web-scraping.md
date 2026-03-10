---
name: web-scraping
description: >
  Extracts structured data from websites using scraping tools and parsing techniques.
  Use when someone says "scrape this website", asks about extracting data from a webpage,
  wants to collect information from multiple URLs, needs to parse HTML content, or
  wants to automate data collection from the web.
category: developer
tags: [scraping, web, data-extraction, html, automation]
author: community
---

# Web Scraping

Extracts structured data from websites by fetching pages, parsing HTML, and returning clean, usable output in the requested format.

## Scraping Workflow

1. **Clarify the target**: Confirm the URL(s), the specific data to extract (text, links, tables, prices, etc.), and the desired output format (JSON, CSV, list).

2. **Choose the right tool**:
   - Use `curl` or `fetch` for simple static pages
   - Use Puppeteer/Playwright for JavaScript-rendered pages
   - Use BeautifulSoup (Python) or Cheerio (Node.js) for HTML parsing
   - Use `requests` + `lxml` for high-performance scraping

3. **Write the scraper**:
   - Fetch the page with appropriate headers (set a realistic `User-Agent`)
   - Parse the HTML and target elements using CSS selectors or XPath
   - Handle pagination if data spans multiple pages
   - Add error handling for missing elements, timeouts, and HTTP errors

4. **Handle edge cases**:
   - Check for rate limiting — add delays between requests (`time.sleep` or equivalent)
   - Detect and handle login walls, CAPTCHAs, or bot-blocking (note limitations honestly)
   - Validate extracted data before returning it

5. **Respect constraints**:
   - Check `robots.txt` before scraping
   - Note if scraping may violate the site's Terms of Service
   - Never store or transmit personally identifiable information without explicit consent

6. **Clean and structure the data**:
   - Strip whitespace, HTML tags, and irrelevant characters
   - Normalize fields (dates, prices, URLs) to consistent formats
   - Deduplicate records if scraping multiple pages

## Output Format

Produce the following:

1. **Working code** in Python or JavaScript (match the user's environment or default to Python):
   - Fully runnable script with imports and dependencies listed
   - Inline comments explaining selector choices and key logic
   - `requirements.txt` or `package.json` dependencies noted at the top

2. **Sample output**: Show 2–3 example records in the target format (JSON, CSV, or plain list)

3. **Usage instructions**: One-line command to run the script

4. **Caveats** (if any): Note dynamic content limitations, login requirements, or ToS concerns in a single short block at the end
