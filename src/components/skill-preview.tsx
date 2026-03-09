'use client';

import { useState } from 'react';

export function SkillPreview({ content }: { content: string }) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(content).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div style={{
      background: '#0f0e0b',
      border: '1px solid #3d3830',
      borderRadius: '4px',
      overflow: 'hidden',
    }}>
      {/* Toolbar */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '12px 16px',
        background: '#1a1813',
        borderBottom: '1px solid #3d3830',
      }}>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '11px', color: '#d4820a',
          letterSpacing: '0.1em',
        }}>
          weekly-linkedin-researcher.md
        </div>
        <button
          onClick={handleCopy}
          style={{
            background: copied ? '#2a4a2a' : '#1a1813',
            border: '1px solid ' + (copied ? '#4a8a4a' : '#3d3830'),
            borderRadius: '2px',
            padding: '6px 14px',
            color: copied ? '#7ab87a' : '#9b9284',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '11px',
            cursor: 'pointer',
            letterSpacing: '0.05em',
            transition: 'all 0.15s',
          }}
        >
          {copied ? '✓ Copied' : 'Copy SKILL.md'}
        </button>
      </div>

      {/* Code content */}
      <pre style={{
        margin: 0,
        padding: '24px',
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: '13px',
        lineHeight: 1.7,
        color: '#c8bfb0',
        overflowX: 'auto',
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-word',
        maxHeight: '480px',
        overflowY: 'auto',
      }}>
        {content.split('\n').map((line, i) => {
          // Frontmatter delimiters
          if (line === '---') return <span key={i} style={{ color: '#6b6455' }}>{line}{'\n'}</span>;
          // Frontmatter keys
          if (/^[a-z]+:/.test(line) && i < 10) return <span key={i} style={{ color: '#d4820a' }}>{line}{'\n'}</span>;
          // H1
          if (line.startsWith('# ')) return <span key={i} style={{ color: '#f0a832', fontWeight: 700 }}>{line}{'\n'}</span>;
          // H2
          if (line.startsWith('## ')) return <span key={i} style={{ color: '#d4820a' }}>{line}{'\n'}</span>;
          // H3
          if (line.startsWith('### ')) return <span key={i} style={{ color: '#b8720a' }}>{line}{'\n'}</span>;
          // Table rows
          if (line.startsWith('|')) return <span key={i} style={{ color: '#8a8278' }}>{line}{'\n'}</span>;
          // Bullets
          if (/^(\s*[-*]|\d+\.) /.test(line)) return <span key={i} style={{ color: '#c8bfb0' }}>{line}{'\n'}</span>;
          // Default
          return <span key={i}>{line}{'\n'}</span>;
        })}
      </pre>
    </div>
  );
}
