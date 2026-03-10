/**
 * Batch skill generator
 * Usage: npx tsx scripts/generate-skills.ts
 *
 * Reads skills/SKILL-LIST.json, generates a SKILL.md for each entry
 * using Claude API, writes to skills/[category]/[slug].md
 * Then run: npm run sync-skills
 *
 * Requires: ANTHROPIC_API_KEY in .env.local
 */

import Anthropic from '@anthropic-ai/sdk';
import fs from 'fs';
import path from 'path';

// Load env vars
const envPath = path.join(process.cwd(), '.env.local');
if (fs.existsSync(envPath)) {
  fs.readFileSync(envPath, 'utf-8')
    .split('\n')
    .filter((l) => l.includes('=') && !l.startsWith('#'))
    .forEach((l) => {
      const [k, ...v] = l.split('=');
      if (k && !process.env[k.trim()]) process.env[k.trim()] = v.join('=').trim();
    });
}

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

interface SkillEntry {
  name: string;        // slug-style: cold-email-writer
  category: string;   // marketing, developer, sales, etc.
  description?: string; // optional hint to guide generation
}

function toSlug(name: string) {
  return name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

async function generateSkill(entry: SkillEntry): Promise<string> {
  const prompt = `Generate a complete SKILL.md file for a Claude Code skill with these details:

Name: ${entry.name}
Category: ${entry.category}
${entry.description ? `Description hint: ${entry.description}` : ''}

The SKILL.md must follow this exact format:

---
name: ${toSlug(entry.name)}
description: >
  [2-3 sentence description. Must include 3-5 specific trigger phrases that activate this skill,
  e.g. "Use when someone says X, asks about Y, or wants to Z."]
category: ${entry.category}
tags: [tag1, tag2, tag3]
author: community
---

# [Skill Title]

[1 sentence: what this skill does and when Claude will use it]

## [Core section — steps, rules, or workflow]

[Clear, actionable steps or rules. Be specific. No filler.]

## Output Format

[Describe exactly what Claude should produce — structure, length, format]

Rules:
- Trigger phrases must be natural language (not commands)
- Steps must be actionable and specific
- Output format must be concrete
- No fluff, no hedging, no meta-commentary

Return ONLY the raw SKILL.md content. No explanation before or after.`;

  const message = await client.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 1024,
    messages: [{ role: 'user', content: prompt }],
  });

  return (message.content[0] as { text: string }).text;
}

async function main() {
  const listPath = path.join(process.cwd(), 'skills', 'SKILL-LIST.json');

  if (!fs.existsSync(listPath)) {
    console.error('Missing skills/SKILL-LIST.json');
    console.log('Create it with this format:');
    console.log(JSON.stringify([
      { name: 'cold-email-writer', category: 'sales', description: 'Writes personalized cold outreach emails' },
      { name: 'daily-standup', category: 'developer', description: 'Generates daily standup updates from recent git activity' },
    ], null, 2));
    process.exit(1);
  }

  const list: SkillEntry[] = JSON.parse(fs.readFileSync(listPath, 'utf-8'));
  console.log(`Generating ${list.length} skills...\n`);

  for (const entry of list) {
    const slug = toSlug(entry.name);
    const dir = path.join(process.cwd(), 'skills', entry.category);
    const filePath = path.join(dir, `${slug}.md`);

    if (fs.existsSync(filePath)) {
      console.log(`  SKIP  ${slug} (already exists)`);
      continue;
    }

    process.stdout.write(`  GEN   ${slug} ... `);
    try {
      let content = await generateSkill(entry);
      // Strip markdown code fences if model wrapped output
      if (content.startsWith('```')) {
        content = content.replace(/^```[a-z]*\n/, '').replace(/\n```\s*$/, '').trim();
      }
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(filePath, content + '\n');
      console.log('done');
    } catch (err) {
      console.log(`ERROR: ${err}`);
    }

    // Rate limit buffer
    await new Promise((r) => setTimeout(r, 500));
  }

  console.log('\nDone. Run: npm run sync-skills');
}

main();
