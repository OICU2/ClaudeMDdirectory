import { LogoWordmark } from '@/components/logo';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing — claude.md directory',
  description: '500+ SKILL.md files for Claude Code professionals. 8 categories. Starter Pack $19 · Full Library $49 · Pro $9/mo · API $29/mo.',
};

const TIERS = [
  {
    name: 'Starter Pack',
    price: '$19',
    period: 'one-time',
    tagline: '1 category. 50 skills. Yours forever.',
    features: [
      'Choose any 1 category',
      '50 curated SKILL.md files',
      'Instant download',
      'All future skills in that category',
      'No subscription',
    ],
    cta: 'Buy Starter Pack',
    href: '#', // Stripe Payment Link — add after account setup
    highlight: false,
  },
  {
    name: 'Full Library',
    price: '$49',
    period: 'one-time',
    tagline: 'All 8 categories. Every skill we ever add.',
    features: [
      'All 8 categories',
      '500+ SKILL.md files at launch',
      'Every new skill added post-launch',
      'Instant download',
      'No subscription',
    ],
    cta: 'Buy Full Library',
    href: '#', // Stripe Payment Link — add after account setup
    highlight: true,
    badge: 'Best Value',
  },
  {
    name: 'Pro',
    price: '$9',
    period: '/ month',
    tagline: 'Full library + early access + analytics.',
    features: [
      'Everything in Full Library',
      'Early access to new skills',
      'Submit skills for review',
      'Install analytics dashboard',
      'Cancel anytime',
    ],
    cta: 'Start Pro',
    href: '#', // Stripe Payment Link — add after account setup
    highlight: false,
  },
  {
    name: 'API',
    price: '$29',
    period: '/ month',
    tagline: 'Programmatic access. Built for teams.',
    features: [
      'Full library via JSON endpoint',
      'Search & filter by category/tag',
      'Webhook on new skill publish',
      'Team seat sharing',
      'Cancel anytime',
    ],
    cta: 'Get API Access',
    href: '#', // Stripe Payment Link — add after account setup
    highlight: false,
  },
];

const FAQ = [
  {
    q: 'How do SKILL.md files work?',
    a: 'Drop a SKILL.md file into your Claude Code project under .claude/skills/[name]/SKILL.md. Say the trigger phrase and Claude activates that workflow — no prompting, no copy-paste, no setup beyond that.',
  },
  {
    q: 'If I buy the Full Library, do I get skills added after launch?',
    a: 'Yes. The Full Library is a one-time purchase that includes all skills ever added to the directory. Buy it once, keep everything forever.',
  },
  {
    q: 'Do these skills work with Claude Code only, or other AI tools?',
    a: 'They\'re built and optimized for Claude Code. The SKILL.md format is specific to the Claude Code CLI — they won\'t load natively in ChatGPT, Cursor, or other tools.',
  },
  {
    q: 'What\'s the difference between Full Library and Pro?',
    a: 'Full Library is a one-time purchase — you own what\'s there. Pro is a monthly subscription that adds early access to skills before they\'re in the library, the ability to submit your own skills, and an install analytics dashboard.',
  },
];

export default function PricingPage() {
  return (
    <div style={{ background: '#0b0a07', minHeight: '100vh', color: '#e8e0d0' }}>

      {/* Nav */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        background: 'rgba(11,10,7,0.92)', backdropFilter: 'blur(8px)',
        borderBottom: '1px solid #1a1813',
        padding: '0 24px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: '60px',
      }}>
        <a href="/" style={{ textDecoration: 'none' }}>
          <LogoWordmark />
        </a>
        <a href="/#waitlist" style={{
          background: '#d4820a', color: '#0b0a07',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '11px', fontWeight: 700,
          letterSpacing: '0.08em', textTransform: 'uppercase',
          padding: '8px 18px', borderRadius: '2px',
          textDecoration: 'none',
        }}>
          Get Early Access
        </a>
      </nav>

      {/* Header */}
      <section style={{
        maxWidth: '800px', margin: '0 auto',
        padding: '120px 24px 60px',
        textAlign: 'center',
      }}>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '10px', letterSpacing: '0.2em',
          color: '#d4820a', textTransform: 'uppercase',
          marginBottom: '16px',
        }}>
          // Launching April 1, 2026
        </div>
        <h1 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: '48px', fontWeight: 700,
          color: '#f0f0e8', marginBottom: '16px',
          lineHeight: 1.15,
        }}>
          Simple pricing.<br />
          <span style={{ color: '#d4820a' }}>No tricks.</span>
        </h1>
        <p style={{
          fontFamily: 'var(--font-crimson), Georgia, serif',
          fontSize: '20px', color: '#9b9284', lineHeight: 1.7,
          maxWidth: '520px', margin: '0 auto',
        }}>
          500+ SKILL.md files for Claude Code professionals. Buy the category you need, or get everything for $49.
        </p>
      </section>

      {/* Tier Cards */}
      <section style={{
        maxWidth: '1100px', margin: '0 auto',
        padding: '0 24px 80px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '16px',
      }}>
        {TIERS.map((tier) => (
          <div key={tier.name} style={{
            background: tier.highlight ? '#13120f' : '#0f0e0b',
            border: tier.highlight ? '1px solid #d4820a' : '1px solid #1a1813',
            borderRadius: '4px',
            padding: '32px 28px',
            display: 'flex', flexDirection: 'column',
            position: 'relative',
          }}>
            {tier.badge && (
              <div style={{
                position: 'absolute', top: '-12px', left: '50%',
                transform: 'translateX(-50%)',
                background: '#d4820a', color: '#0b0a07',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '9px', fontWeight: 700,
                letterSpacing: '0.12em', textTransform: 'uppercase',
                padding: '4px 12px', borderRadius: '2px',
                whiteSpace: 'nowrap',
              }}>
                {tier.badge}
              </div>
            )}

            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '10px', letterSpacing: '0.15em',
              color: '#d4820a', textTransform: 'uppercase',
              marginBottom: '12px',
            }}>
              {tier.name}
            </div>

            <div style={{ marginBottom: '8px', display: 'flex', alignItems: 'baseline', gap: '4px' }}>
              <span style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: '40px', fontWeight: 700, color: '#f0f0e8',
              }}>
                {tier.price}
              </span>
              <span style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '11px', color: '#9b9284',
              }}>
                {tier.period}
              </span>
            </div>

            <p style={{
              fontFamily: 'var(--font-crimson), Georgia, serif',
              fontSize: '15px', color: '#9b9284',
              marginBottom: '24px', lineHeight: 1.5,
            }}>
              {tier.tagline}
            </p>

            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px', flex: 1 }}>
              {tier.features.map((f) => (
                <li key={f} style={{
                  fontFamily: 'var(--font-crimson), Georgia, serif',
                  fontSize: '15px', color: '#c8c0b0',
                  padding: '6px 0',
                  borderBottom: '1px solid #1a1813',
                  display: 'flex', alignItems: 'center', gap: '8px',
                }}>
                  <span style={{ color: '#d4820a', fontFamily: 'monospace', fontSize: '12px' }}>→</span>
                  {f}
                </li>
              ))}
            </ul>

            <a href={tier.href} style={{
              display: 'block', textAlign: 'center',
              background: tier.highlight ? '#d4820a' : 'transparent',
              color: tier.highlight ? '#0b0a07' : '#d4820a',
              border: tier.highlight ? 'none' : '1px solid #d4820a',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '11px', fontWeight: 700,
              letterSpacing: '0.08em', textTransform: 'uppercase',
              padding: '14px 24px', borderRadius: '2px',
              textDecoration: 'none',
              cursor: 'pointer',
            }}>
              {tier.cta} →
            </a>
          </div>
        ))}
      </section>

      {/* Category note for Starter Pack */}
      <section style={{
        maxWidth: '600px', margin: '0 auto',
        padding: '0 24px 80px',
        textAlign: 'center',
      }}>
        <div style={{
          background: '#13120f', border: '1px solid #1a1813',
          borderRadius: '4px', padding: '24px',
        }}>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '10px', letterSpacing: '0.15em',
            color: '#d4820a', textTransform: 'uppercase',
            marginBottom: '12px',
          }}>
            // Starter Pack Categories
          </div>
          <p style={{
            fontFamily: 'var(--font-crimson), Georgia, serif',
            fontSize: '15px', color: '#9b9284', marginBottom: '16px',
          }}>
            Pick any one at checkout:
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
            {['Developer', 'Marketing', 'Sales', 'Solopreneur', 'Writing', 'Finance', 'Operations', 'Research'].map((cat) => (
              <span key={cat} style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '10px', letterSpacing: '0.1em',
                color: '#c8c0b0', textTransform: 'uppercase',
                background: '#1a1813', border: '1px solid #2a2520',
                padding: '6px 12px', borderRadius: '2px',
              }}>
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Categories */}
      <section style={{
        maxWidth: '600px', margin: '0 auto',
        padding: '0 24px 80px',
        textAlign: 'center',
      }}>
        <div style={{
          background: '#0f0e0b', border: '1px dashed #2a2520',
          borderRadius: '4px', padding: '24px',
        }}>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '10px', letterSpacing: '0.15em',
            color: '#5a5248', textTransform: 'uppercase',
            marginBottom: '12px',
          }}>
            // Coming Soon
          </div>
          <p style={{
            fontFamily: 'var(--font-crimson), Georgia, serif',
            fontSize: '15px', color: '#5a5248', marginBottom: '16px',
          }}>
            More categories dropping post-launch:
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
            {['Legal', 'Product', 'Customer Success', 'Personal Productivity'].map((cat) => (
              <span key={cat} style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '10px', letterSpacing: '0.1em',
                color: '#5a5248', textTransform: 'uppercase',
                background: '#0b0a07', border: '1px dashed #2a2520',
                padding: '6px 12px', borderRadius: '2px',
              }}>
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{
        maxWidth: '700px', margin: '0 auto',
        padding: '0 24px 80px',
      }}>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '10px', letterSpacing: '0.2em',
          color: '#d4820a', textTransform: 'uppercase',
          marginBottom: '32px', textAlign: 'center',
        }}>
          // FAQ
        </div>
        {FAQ.map((item, i) => (
          <div key={i} style={{
            borderBottom: '1px solid #1a1813',
            padding: '24px 0',
          }}>
            <div style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: '18px', fontWeight: 700,
              color: '#f0f0e8', marginBottom: '12px',
            }}>
              {item.q}
            </div>
            <div style={{
              fontFamily: 'var(--font-crimson), Georgia, serif',
              fontSize: '16px', color: '#9b9284', lineHeight: 1.7,
            }}>
              {item.a}
            </div>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer style={{
        borderTop: '1px solid #1a1813',
        padding: '32px 24px',
        textAlign: 'center',
      }}>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '11px', color: '#3d3830',
          letterSpacing: '0.08em',
          lineHeight: 1.8,
        }}>
          <a href="/" style={{ color: '#3d3830', textDecoration: 'none' }}>← Back to claudemddirectory.com</a><br />
          Questions? <a href="mailto:claudemddirectory@gmail.com" style={{ color: '#3d3830', textDecoration: 'none' }}>claudemddirectory@gmail.com</a><br />
          © 2026 claudemddirectory.com · Run, owned, and operated by RepuVault LLC
        </div>
      </footer>

    </div>
  );
}
