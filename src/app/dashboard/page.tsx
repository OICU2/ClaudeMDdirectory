import { supabaseAdmin } from '@/lib/supabase';

const RESEND_API_KEY = process.env.RESEND_API_KEY!;

async function getStats() {
  // Skills count
  const { count: skillCount } = await supabaseAdmin
    .from('skills')
    .select('*', { count: 'exact', head: true });

  // Email count from Resend (global contacts — SDK v6 no longer uses audienceId)
  let emailCount = 0;
  let emailError = '';
  try {
    const res = await fetch('https://api.resend.com/emails', {
      headers: { Authorization: `Bearer ${RESEND_API_KEY}` },
      cache: 'no-store',
    });
    const json = await res.json();
    if (!res.ok) {
      emailError = `Resend ${res.status}: ${json?.message || JSON.stringify(json)}`;
      emailCount = -1;
    } else {
      emailCount = json?.data?.length ?? 0;
    }
  } catch (err) {
    emailError = String(err);
    emailCount = -1;
  }

  return { skillCount: skillCount ?? 0, emailCount, emailError };
}

export default async function Dashboard() {
  const { skillCount, emailCount, emailError } = await getStats();

  const stats = [
    { label: 'Skills in DB', value: skillCount },
    { label: 'Emails collected', value: emailCount === -1 ? 'error' : emailCount },
  ];

  return (
    <div style={{
      background: '#0b0a07', minHeight: '100vh', color: '#e8e0d0',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      fontFamily: "'JetBrains Mono', monospace",
      padding: '40px 24px',
    }}>
      <div style={{ marginBottom: '48px', textAlign: 'center' }}>
        <div style={{ fontSize: '10px', letterSpacing: '0.2em', color: '#d4820a', textTransform: 'uppercase', marginBottom: '8px' }}>
          // claudemddirectory
        </div>
        <div style={{ fontSize: '18px', color: '#6b6455' }}>Dashboard</div>
      </div>

      <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', justifyContent: 'center' }}>
        {stats.map(({ label, value }) => (
          <div key={label} style={{
            background: '#1a1813',
            border: '1px solid #3d3830',
            borderRadius: '4px',
            padding: '40px 56px',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: '56px', fontWeight: 700, color: '#f0a832', lineHeight: 1, marginBottom: '16px' }}>
              {value}
            </div>
            <div style={{ fontSize: '11px', color: '#6b6455', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              {label}
            </div>
          </div>
        ))}
      </div>

      {emailError && (
        <div style={{ marginTop: '24px', fontSize: '11px', color: '#c0392b', maxWidth: '600px', textAlign: 'center', wordBreak: 'break-all' }}>
          Resend error: {emailError}
        </div>
      )}
      <div style={{ marginTop: '24px', fontSize: '10px', color: '#2a2520' }}>
        refreshes on every load · {new Date().toLocaleString('en-US', { timeZone: 'America/Phoenix' })} MST
      </div>
    </div>
  );
}
