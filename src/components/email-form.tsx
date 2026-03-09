'use client';

import { useState } from 'react';

export function EmailForm({ source }: { source: string }) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source }),
      });

      const data = await res.json();

      if (data.success) {
        setSuccess(true);
      } else {
        setError(data.error || 'Something went wrong. Try again.');
      }
    } catch {
      setError('Network error. Try again.');
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className="flex items-center gap-3 py-4">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="10" r="9" stroke="#d4820a" strokeWidth="1.5"/>
          <path d="M6 10l3 3 5-5" stroke="#d4820a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '14px', color: '#d4820a' }}>
          You're in. Check your inbox for your free skill.
        </span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          style={{
            flex: 1,
            background: '#1a1813',
            border: '1px solid #3d3830',
            borderRadius: '2px',
            padding: '12px 16px',
            color: '#e8e0d0',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '14px',
            outline: 'none',
          }}
          onFocus={(e) => (e.target.style.borderColor = '#d4820a')}
          onBlur={(e) => (e.target.style.borderColor = '#3d3830')}
        />
        <button
          type="submit"
          disabled={loading}
          style={{
            background: loading ? '#8a5510' : '#d4820a',
            color: '#0b0a07',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '12px',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            padding: '12px 24px',
            borderRadius: '2px',
            border: 'none',
            cursor: loading ? 'not-allowed' : 'pointer',
            whiteSpace: 'nowrap',
            transition: 'background 0.15s',
          }}
        >
          {loading ? 'Joining...' : 'Get Early Access'}
        </button>
      </div>
      {error && (
        <p style={{ marginTop: '8px', fontSize: '13px', color: '#e05c5c', fontFamily: "'JetBrains Mono', monospace" }}>
          {error}
        </p>
      )}
    </form>
  );
}
