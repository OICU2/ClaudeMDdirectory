const fs = require('fs');
const path = require('path');

function walk(dir) {
  const results = [];
  if (!fs.existsSync(dir)) return results;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) results.push(...walk(full));
    else if (entry.name.endsWith('.md')) results.push(full);
  }
  return results;
}

let fixed = 0;
for (const file of walk(path.join(process.cwd(), 'skills'))) {
  let content = fs.readFileSync(file, 'utf-8').trim();
  if (content.startsWith('```')) {
    // Remove opening fence (```markdown or ```)
    content = content.replace(/^```[a-z]*\n/, '');
    // Remove closing fence
    content = content.replace(/\n```\s*$/, '');
    fs.writeFileSync(file, content.trim() + '\n');
    fixed++;
  }
}
console.log('Fixed:', fixed, 'files');
