/**
 * Skill Pipeline — automated skill ideation + generation + sync
 * Usage:
 *   npx tsx scripts/skill-pipeline.ts           # all categories
 *   npx tsx scripts/skill-pipeline.ts marketing  # single category
 *
 * Runs every other day via cron. For each category:
 *   1. Asks Claude for new skill ideas not already in SKILL-LIST.json
 *   2. Appends new entries to SKILL-LIST.json
 *   3. Generates SKILL.md for each new entry
 *   4. Syncs all skills to Supabase
 */

import Anthropic from '@anthropic-ai/sdk';
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// Load .env.local
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

const CATEGORIES = ['marketing', 'finance', 'developer', 'operations', 'research', 'sales', 'writing'];
const SKILLS_PER_RUN = 10; // new skills to generate per category per run

interface SkillEntry {
  name: string;
  category: string;
  description?: string;
}

function toSlug(name: string) {
  return name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

function loadSkillList(): SkillEntry[] {
  const listPath = path.join(process.cwd(), 'skills', 'SKILL-LIST.json');
  if (!fs.existsSync(listPath)) return [];
  return JSON.parse(fs.readFileSync(listPath, 'utf-8'));
}

function saveSkillList(list: SkillEntry[]) {
  const listPath = path.join(process.cwd(), 'skills', 'SKILL-LIST.json');
  fs.writeFileSync(listPath, JSON.stringify(list, null, 2) + '\n');
}

function appendLog(message: string) {
  const logPath = path.join(process.cwd(), 'skills', 'research', 'pipeline-log.md');
  fs.mkdirSync(path.dirname(logPath), { recursive: true });
  fs.appendFileSync(logPath, message + '\n');
}

async function generateCandidates(category: string, existingSlugs: Set<string>): Promise<SkillEntry[]> {
  // Only show existing slugs for this category to keep prompt focused
  const categoryExisting = [...existingSlugs].join(', ');

  const prompt = `You are building a SKILL.md library for Claude Code (Anthropic's CLI tool for developers and solopreneurs).

Generate exactly ${SKILLS_PER_RUN} NEW skill ideas for the "${category}" category.

These skills already exist — do NOT repeat or closely duplicate them:
${categoryExisting}

Requirements:
- Each skill must solve a real, specific workflow problem a ${category} professional faces
- Skills should be tasks Claude Code can automate, draft, analyze, or assist with
- Names must be slug-style (lowercase, hyphens only, no spaces or special chars)
- Descriptions must be 1 concrete sentence explaining what the skill does

Return ONLY a valid JSON array — no explanation, no markdown fences:
[
  { "name": "slug-name", "category": "${category}", "description": "One sentence description." }
]`;

  const message = await client.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 1024,
    messages: [{ role: 'user', content: prompt }],
  });

  let raw = (message.content[0] as { text: string }).text.trim();
  if (raw.startsWith('```')) {
    raw = raw.replace(/^```[a-z]*\n/, '').replace(/\n```\s*$/, '').trim();
  }

  const candidates: SkillEntry[] = JSON.parse(raw);
  return candidates.filter((c) => c.name && c.category && !existingSlugs.has(toSlug(c.name)));
}

async function generateSkillFile(entry: SkillEntry): Promise<string> {
  const slug = toSlug(entry.name);

  const prompt = `Generate a complete SKILL.md file for a Claude Code skill with these details:

Name: ${entry.name}
Category: ${entry.category}
${entry.description ? `Description hint: ${entry.description}` : ''}

The SKILL.md must follow this exact format:

---
name: ${slug}
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

  let content = (message.content[0] as { text: string }).text;
  if (content.startsWith('```')) {
    content = content.replace(/^```[a-z]*\n/, '').replace(/\n```\s*$/, '').trim();
  }
  return content;
}

async function main() {
  const targetCategory = process.argv[2]?.toLowerCase();
  const categories = targetCategory
    ? CATEGORIES.filter((c) => c === targetCategory)
    : CATEGORIES;

  if (targetCategory && categories.length === 0) {
    console.error(`Unknown category: ${targetCategory}. Valid: ${CATEGORIES.join(', ')}`);
    process.exit(1);
  }

  const timestamp = new Date().toISOString();
  console.log(`\n=== Skill Pipeline — ${timestamp} ===`);
  console.log(`Categories: ${categories.join(', ')}`);
  appendLog(`\n## Run: ${timestamp}`);
  appendLog(`Categories: ${categories.join(', ')}`);

  const existingList = loadSkillList();
  const existingSlugs = new Set(existingList.map((e) => toSlug(e.name)));

  let totalNew = 0;
  let totalGenerated = 0;

  for (const category of categories) {
    console.log(`\n[${category}] Generating ${SKILLS_PER_RUN} candidates...`);

    let candidates: SkillEntry[] = [];
    try {
      candidates = await generateCandidates(category, existingSlugs);
      console.log(`[${category}] ${candidates.length} new candidates`);
      appendLog(`- ${category}: ${candidates.length} candidates`);
    } catch (err) {
      console.error(`[${category}] Failed: ${err}`);
      appendLog(`- ${category}: ERROR — ${err}`);
      continue;
    }

    // Append new entries to SKILL-LIST.json immediately
    for (const c of candidates) {
      existingList.push(c);
      existingSlugs.add(toSlug(c.name));
    }
    saveSkillList(existingList);
    totalNew += candidates.length;

    // Generate SKILL.md for each candidate
    for (const entry of candidates) {
      const slug = toSlug(entry.name);
      const dir = path.join(process.cwd(), 'skills', entry.category);
      const filePath = path.join(dir, `${slug}.md`);

      if (fs.existsSync(filePath)) {
        console.log(`  SKIP  ${slug} (file exists)`);
        continue;
      }

      process.stdout.write(`  GEN   ${slug} ... `);
      try {
        const content = await generateSkillFile(entry);
        fs.mkdirSync(dir, { recursive: true });
        fs.writeFileSync(filePath, content + '\n');
        console.log('done');
        totalGenerated++;
      } catch (err) {
        console.log(`ERROR: ${err}`);
        appendLog(`  - ERROR generating ${slug}: ${err}`);
      }

      // Rate limit buffer
      await new Promise((r) => setTimeout(r, 500));
    }
  }

  console.log(`\n=== Summary ===`);
  console.log(`New candidates: ${totalNew}`);
  console.log(`Files generated: ${totalGenerated}`);
  appendLog(`- Total new: ${totalNew} | Generated: ${totalGenerated}`);

  if (totalGenerated > 0) {
    console.log('\nSyncing to Supabase...');
    try {
      execSync('npm run sync-skills', { stdio: 'inherit', cwd: process.cwd() });
      appendLog(`- Sync: OK`);
    } catch (err) {
      console.error('Sync failed:', err);
      appendLog(`- Sync: FAILED — ${err}`);
    }
  } else {
    console.log('\nNo new files generated — skipping sync.');
  }

  console.log('\nDone.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
