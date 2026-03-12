export function LogoMark({ size = 40 }: { size?: number }) {
  return (
    <img
      src="/claudemddirectory-logo-300x300.png"
      alt="claudemddirectory logo"
      width={size}
      height={size}
      style={{ display: 'block' }}
    />
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
