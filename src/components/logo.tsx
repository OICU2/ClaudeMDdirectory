export function LogoMark({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="18" stroke="#d4820a" strokeWidth="1.5" opacity="0.6"/>
      <circle cx="20" cy="20" r="14" stroke="#d4820a" strokeWidth="0.75" opacity="0.3"/>
      <line x1="14" y1="16" x2="26" y2="16" stroke="#d4820a" strokeWidth="2" strokeLinecap="round"/>
      <line x1="14" y1="22" x2="26" y2="22" stroke="#d4820a" strokeWidth="2" strokeLinecap="round"/>
      <line x1="17" y1="13" x2="15" y2="27" stroke="#f0a832" strokeWidth="2" strokeLinecap="round"/>
      <line x1="23" y1="13" x2="21" y2="27" stroke="#f0a832" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="20" cy="4" r="1.5" fill="#d4820a" opacity="0.5"/>
      <circle cx="36" cy="20" r="1.5" fill="#d4820a" opacity="0.5"/>
      <circle cx="20" cy="36" r="1.5" fill="#d4820a" opacity="0.5"/>
      <circle cx="4" cy="20" r="1.5" fill="#d4820a" opacity="0.5"/>
    </svg>
  );
}

export function LogoWordmark() {
  return (
    <div className="flex items-center gap-2.5">
      <LogoMark size={32} />
      <span style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: '13px',
        fontWeight: 500,
        letterSpacing: '0.05em',
        lineHeight: 1.3,
        color: '#e8e0d0',
      }}>
        claude<span style={{ color: '#d4820a' }}>.md</span><br/>
        <span style={{ fontSize: '10px', color: '#6b6455' }}>directory</span>
      </span>
    </div>
  );
}
