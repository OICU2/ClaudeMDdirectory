'use client';

import { useState } from 'react';
import { SkillPreview } from './skill-preview';

interface Skill {
  slug: string;
  name: string;
  content: string;
}

export function SkillDetailClient({ skill }: { skill: Skill }) {
  const [installed, setInstalled] = useState(false);

  async function trackInstall() {
    if (installed) return;
    try {
      await fetch(`/api/skills/${skill.slug}/install`, { method: 'POST' });
      setInstalled(true);
    } catch {
      // silent — don't break the copy experience
    }
  }

  return (
    <div>
      <div style={{ marginBottom: '16px' }}>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '10px', letterSpacing: '0.2em',
          color: '#d4820a', textTransform: 'uppercase',
          marginBottom: '8px',
        }}>
          // SKILL.md — copy to your project
        </div>
        <p style={{
          fontFamily: 'var(--font-crimson), Georgia, serif',
          fontSize: '15px', color: '#6b6455', lineHeight: 1.6,
        }}>
          Save this file as <code style={{ fontFamily: "'JetBrains Mono', monospace", color: '#9b9284' }}>.claude/skills/{skill.slug}.md</code> in your Claude Code project.
        </p>
      </div>

      <div onClick={trackInstall}>
        <SkillPreview content={skill.content} />
      </div>

      {installed && (
        <div style={{
          marginTop: '12px',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '11px', color: '#5a8a5a',
          letterSpacing: '0.05em',
        }}>
          Install counted. Good choice.
        </div>
      )}
    </div>
  );
}
