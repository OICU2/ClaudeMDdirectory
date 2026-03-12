/**
 * verify-skills.ts — Morning coffee check
 * Queries Supabase for current skill count, compares to yesterday's count,
 * logs result to skills/research/pipeline-task.log
 * Run after skill-pipeline via Task Scheduler
 */

import { createClient } from '@supabase/supabase-js';
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

const LOG_PATH = path.join(process.cwd(), 'skills', 'research', 'pipeline-task.log');
const COUNT_PATH = path.join(process.cwd(), 'skills', 'research', 'last-skill-count.json');

function log(msg: string) {
  const line = `[${new Date().toISOString()}] ${msg}`;
  console.log(line);
  fs.appendFileSync(LOG_PATH, line + '\n');
}

async function main() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  const { count, error } = await supabase
    .from('skills')
    .select('*', { count: 'exact', head: true });

  if (error || count === null) {
    log(`VERIFY ERROR — Could not query Supabase: ${error?.message}`);
    process.exit(1);
  }

  // Load previous count
  let prevCount = 0;
  let prevDate = 'unknown';
  if (fs.existsSync(COUNT_PATH)) {
    const prev = JSON.parse(fs.readFileSync(COUNT_PATH, 'utf-8'));
    prevCount = prev.count ?? 0;
    prevDate = prev.date ?? 'unknown';
  }

  const gained = count - prevCount;
  const status = gained > 0 ? 'OK' : gained === 0 ? 'NO CHANGE' : 'DECREASED';
  const today = new Date().toISOString().split('T')[0];

  log(`MORNING COFFEE — Skills in DB: ${count} | Yesterday (${prevDate}): ${prevCount} | Gained: ${gained > 0 ? '+' : ''}${gained} | Status: ${status}`);

  if (status !== 'OK') {
    log(`WARNING: Pipeline may not have run or synced correctly. Check pipeline-task.log above.`);
  }

  // Save today's count
  fs.writeFileSync(COUNT_PATH, JSON.stringify({ count, date: today }, null, 2));
}

main().catch((err) => {
  fs.appendFileSync(LOG_PATH, `[${new Date().toISOString()}] VERIFY CRASH — ${err}\n`);
  process.exit(1);
});
