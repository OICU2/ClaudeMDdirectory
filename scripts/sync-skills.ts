import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { createClient } from '@supabase/supabase-js';

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

const SKILLS_DIR = path.join(process.cwd(), 'skills');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

function toSlug(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function findSkillFiles(dir: string): string[] {
  const results: string[] = [];
  if (!fs.existsSync(dir)) return results;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...findSkillFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      results.push(fullPath);
    }
  }
  return results;
}

async function main() {
  const files = findSkillFiles(SKILLS_DIR);
  console.log(`Found ${files.length} skill files`);

  let synced = 0;
  let errors = 0;

  for (const filePath of files) {
    const raw = fs.readFileSync(filePath, 'utf-8');
    const { data: frontmatter, content } = matter(raw);

    if (!frontmatter.name || !frontmatter.category) {
      console.warn(`Skipping ${filePath} — missing name or category`);
      continue;
    }

    const slug = frontmatter.slug || toSlug(frontmatter.name);

    const record = {
      name: frontmatter.name,
      slug,
      description: frontmatter.description?.trim() || null,
      category: frontmatter.category,
      tags: frontmatter.tags || [],
      content: content.trim(),
      featured: frontmatter.featured || false,
    };

    const { error } = await supabase
      .from('skills')
      .upsert(record, { onConflict: 'slug' });

    if (error) {
      console.error(`Error upserting ${record.name}:`, error.message);
      errors++;
    } else {
      console.log(`Synced: ${record.name}`);
      synced++;
    }
  }

  console.log(`\nDone — ${synced} synced, ${errors} errors`);

  // Update src/lib/constants.ts with the new skill count
  const display = `${Math.floor(synced / 100) * 100}+`;
  const constantsPath = path.join(process.cwd(), 'src/lib/constants.ts');
  const constantsContent = `// Auto-updated by scripts/sync-skills.ts after each sync run.\n// Do not edit manually — run \`npm run sync-skills\` to refresh.\n\nexport const SKILL_COUNT = ${synced};\nexport const SKILL_COUNT_DISPLAY = '${display}';\n`;
  fs.writeFileSync(constantsPath, constantsContent, 'utf-8');
  console.log(`Updated constants.ts — SKILL_COUNT=${synced}, SKILL_COUNT_DISPLAY='${display}'`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
