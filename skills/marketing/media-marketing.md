---
name: media-marketing
description: >
  AI social media manager that transforms content or images into platform-optimized
  posts for LinkedIn, Instagram, Facebook, and X (Twitter), then publishes them
  via Blotato. Use when the user says "post this to socials", "create social media
  posts", "publish to all platforms", "share this on LinkedIn/Instagram/Facebook/Twitter",
  or provides content/an image and wants it turned into social posts.
category: marketing
tags: [social-media, linkedin, instagram, facebook, twitter, blotato, publishing]
---

# Media Marketing — AI Social Media Manager

Transform any content or image into 4 platform-optimized posts and publish via
Blotato to LinkedIn, Instagram, Facebook, and X simultaneously.

**Brand voice:** AI tools for solopreneurs — direct, practical, no hype. Every
post delivers a specific takeaway, insight, or call to action tied to ROI and
real-world leverage.

**Script location:** `C:\Users\Rober\Documents\Project_Folder\Blotato\src\post.js`
**Log file:** `C:\Users\Rober\Documents\Project_Folder\Blotato\published-posts.json`

---

## One-time setup (check before first run)

1. `BLOTATO_API_KEY` must be set in `.env` at the Blotato project root
2. Dependencies installed: run `npm install` in the Blotato project folder if
   `node_modules` does not exist
3. Social accounts connected in the Blotato dashboard

---

## Workflow

### Step 1 — Identify inputs

Collect from the user:
- **Content**: text, URL, idea, bullets, or article excerpt
- **Image path**: absolute path to a local image file (optional)

If the user only typed a URL (YouTube, article, tweet, TikTok), extract it first
via the Blotato source resolution API before writing copy:

```
POST https://backend.blotato.com/v2/source-resolutions-v3
Header: blotato-api-key: <key from .env>
Body: {"source": {"sourceType": "article", "url": "<URL>"}}
```

Poll `GET /source-resolutions-v3/{id}` every 3s until `status` is `"completed"`,
then use the returned `content` and `title` as raw material.

Source types: `text`, `article`, `youtube`, `twitter`, `tiktok`, `audio`, `pdf`.

---

### Step 2 — Get connected accounts

```powershell
node "C:\Users\Rober\Documents\Project_Folder\Blotato\src\post.js" accounts
```

Parse the JSON output. Extract `accountId` (and `pageId` where present) for
each platform. If `missing` contains all four platforms, stop and tell the user
to connect accounts in the Blotato dashboard first.

- Facebook posts REQUIRE a `pageId` — skip Facebook if none is returned
- LinkedIn personal profile does NOT need a `pageId`; company pages do
- Instagram REQUIRES at least one image for feed posts

---

### Step 3 — Generate platform-specific copy

Write 4 unique posts using the brand voice above. Adapt format to each platform:

**LinkedIn** (600–1200 chars, max 3000):
- Hook first: bold claim, specific number, or challenging question
- 3–5 short paragraphs with line breaks for scannability
- Concrete takeaway or tool recommendation
- Closing question or CTA
- 3–5 hashtags at the end

**Instagram** (150–300 chars, max 2200):
- Punchy opener, visual-forward language
- Short sentences, casual tone
- 5–10 hashtags (niche + broad mix)
- CTA: "Save this", "Tag someone", or "Link in bio"

**Facebook** (100–250 chars):
- Conversational, friendly, slightly informal
- Ask a question to spark comments
- 1–2 hashtags only

**X / Twitter** (max 280 chars):
- Pack the core insight in the first 100 chars
- Direct, zero filler
- 1–2 hashtags
- No thread needed unless the content is exceptionally rich

---

### Step 4 — Display preview

Show all 4 posts in this format before doing anything else:

```
═══════════════════════════════════════════════════════
LINKEDIN  [NNN chars]
───────────────────────────────────────────────────────
{post text}

INSTAGRAM  [NNN chars]
───────────────────────────────────────────────────────
{post text}

FACEBOOK  [NNN chars]
───────────────────────────────────────────────────────
{post text}

X / TWITTER  [NNN chars]
───────────────────────────────────────────────────────
{post text}

VISUALS
───────────────────────────────────────────────────────
[If image provided]
  Input image will be resized/cropped to platform dimensions:
  LinkedIn 1200×627 · Instagram 1080×1080 · Facebook 1200×630 · X 1600×900

[If text-only]
  AI visual will be generated via Blotato templates.
  Run: node "...src/post.js" templates
  to list available templates and pick a suitable templateId.
═══════════════════════════════════════════════════════
```

Ask: "Approve these posts, or edit any? Type 'edit linkedin', 'edit instagram',
etc. to revise a specific post."

---

### Step 5 — Handle edits

If the user edits a post: update the copy, re-display only that platform's
updated section, and ask again for final approval.

---

### Step 6 — Schedule or publish now

Ask: "Publish now or schedule for a specific date/time? Reply 'now' or give a
date/time like 'May 9 at 3pm EST'."

- Convert natural language dates to ISO 8601 UTC (e.g., `2026-05-09T20:00:00Z`)
- "now" → set `scheduleTime` to `null`

---

### Step 7 — Build the input file and publish

Write the publish payload to a temp JSON file:

```json
{
  "posts": {
    "linkedin":  { "text": "...", "accountId": "...", "pageId": null },
    "instagram": { "text": "...", "accountId": "..." },
    "facebook":  { "text": "...", "accountId": "...", "pageId": "..." },
    "x":         { "text": "...", "accountId": "..." }
  },
  "imagePath":      "C:\\absolute\\path\\to\\image.jpg",
  "scheduleTime":   "2026-05-09T20:00:00Z",
  "useNextFreeSlot": false,
  "templateId":     null
}
```

Rules:
- Omit platforms that are missing from accounts output
- Set `imagePath` to `null` if no image was provided
- For text-only posts: set `templateId` to the chosen template ID from Step 4
  (Instagram always needs a visual; others are optional)
- `pageId: null` is fine for LinkedIn personal profiles; omit the key for
  Instagram and X

Write this JSON to:
`C:\Users\Rober\AppData\Local\Temp\blotato_publish.json`

Then run:
```powershell
node "C:\Users\Rober\Documents\Project_Folder\Blotato\src\post.js" publish --file "C:\Users\Rober\AppData\Local\Temp\blotato_publish.json"
```

---

### Step 8 — Report results

Parse the JSON array returned on stdout. Display:

```
Published results:

  LinkedIn   — published   https://linkedin.com/...
  Instagram  — published   https://instagram.com/...
  Facebook   — published   https://facebook.com/...
  X          — scheduled   2026-05-09T20:00:00Z

Posts logged to: C:\Users\Rober\Documents\Project_Folder\Blotato\published-posts.json
```

For any platform with `status: "error"` or `status: "failed"`, show the error
message and offer to retry that platform individually.

---

## Error handling quick-reference

| Situation | Action |
|-----------|--------|
| `BLOTATO_API_KEY not set` | Tell user to add their key to `.env` |
| Platform missing from accounts | Skip it, note it in results |
| Image file not found | Warn user, proceed text-only |
| Instagram + no image + no templateId | Run `templates` command first, ask user to pick one |
| Facebook + no pageId | Skip Facebook, explain it requires a connected Page |
| Status `"failed"` from API | Show error, offer single-platform retry |
| HTTP 429 rate limit | Wait 10s, retry once |
| Polling timeout | Report as error, log partial results |
