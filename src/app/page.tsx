import { LogoMark, LogoWordmark } from '@/components/logo';
import { EmailForm } from '@/components/email-form';
import { FEATURED_SKILL_MD } from '@/lib/featured-skill';
import { SkillPreview } from '@/components/skill-preview';

const CATEGORIES = [
  { name: 'Marketing', icon: '📣', count: '80+' },
  { name: 'Finance', icon: '💰', count: '60+' },
  { name: 'Developer', icon: '⚙️', count: '120+' },
  { name: 'Operations', icon: '🔧', count: '70+' },
  { name: 'Research', icon: '🔍', count: '50+' },
  { name: 'Sales', icon: '📈', count: '65+' },
  { name: 'Writing', icon: '✍️', count: '90+' },
  { name: 'Solopreneur', icon: '🚀', count: '75+' },
];

const HOW_IT_WORKS = [
  { step: '01', title: 'Browse', desc: 'Search 500+ community-built SKILL.md files by category, use case, or keyword.' },
  { step: '02', title: 'Install', desc: 'Copy a one-line install command. Skill is live in Claude Code in under 30 seconds.' },
  { step: '03', title: 'Submit', desc: 'Built something useful? Submit your SKILL.md and help the community grow.' },
  { step: '04', title: 'Skill Packs', desc: 'Curated bundles by role — Solopreneur, Developer, Marketer, and more.' },
];

export default function Home() {
  return (
    <div style={{ background: '#0b0a07', minHeight: '100vh', color: '#e8e0d0' }}>

      {/* Fixed Nav */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        background: 'rgba(11,10,7,0.92)', backdropFilter: 'blur(8px)',
        borderBottom: '1px solid #1a1813',
        padding: '0 24px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: '60px',
      }}>
        <LogoWordmark />
        <a href="#waitlist" style={{
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

      {/* Hero */}
      <section style={{ paddingTop: '120px', paddingBottom: '80px', textAlign: 'center', maxWidth: '800px', margin: '0 auto', padding: '120px 24px 80px' }}>
        <div style={{
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', gap: '16px',
          marginBottom: '36px',
        }}>
          {/* Jester hat */}
          <svg width="88" height="62" viewBox="0 0 88 62" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            {/* Left prong */}
            <path d="M8 44 Q6 28 16 8 Q26 28 30 44Z" fill="#d4820a"/>
            {/* Center prong */}
            <path d="M30 44 Q28 20 44 2 Q60 20 58 44Z" fill="#b86e08"/>
            {/* Right prong */}
            <path d="M58 44 Q62 28 72 8 Q82 28 80 44Z" fill="#d4820a"/>
            {/* Bells */}
            <circle cx="16" cy="8" r="7" fill="#f0a832"/>
            <circle cx="44" cy="2" r="8" fill="#f0a832"/>
            <circle cx="72" cy="8" r="7" fill="#f0a832"/>
            {/* Bell shine */}
            <circle cx="14" cy="6" r="2" fill="white" opacity="0.3"/>
            <circle cx="42" cy="0" r="2.5" fill="white" opacity="0.3"/>
            <circle cx="70" cy="6" r="2" fill="white" opacity="0.3"/>
            {/* Brim shadow layer */}
            <ellipse cx="44" cy="47" rx="40" ry="9" fill="#8a5206"/>
            {/* Brim */}
            <ellipse cx="44" cy="45" rx="40" ry="9" fill="#d4820a"/>
            {/* Brim highlight */}
            <ellipse cx="44" cy="43" rx="32" ry="4" fill="#f0a832" opacity="0.2"/>
          </svg>

          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '15px', letterSpacing: '0.18em',
            color: '#d4820a', textTransform: 'uppercase',
            fontWeight: 700,
          }}>
            Launching April 1, 2026
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
          <LogoMark size={80} />
        </div>

        <h1 style={{
          fontFamily: 'var(--font-playfair), Georgia, serif',
          fontSize: 'clamp(36px, 6vw, 64px)',
          fontWeight: 700, lineHeight: 1.1,
          color: '#f0f0e8', marginBottom: '24px',
          letterSpacing: '-0.02em',
        }}>
          The SKILL.md Library<br />
          <span style={{ color: '#d4820a' }}>Claude Code</span> deserves.
        </h1>

        <p style={{
          fontFamily: 'var(--font-crimson), Georgia, serif',
          fontSize: '20px', color: '#9b9284', lineHeight: 1.7,
          maxWidth: '560px', margin: '0 auto 40px',
        }}>
          Browse, install, and share automation skills for Claude Code.
          Community-built. Free to browse. One command to install.
        </p>

        <div id="waitlist" style={{ display: 'flex', justifyContent: 'center', marginBottom: '48px' }}>
          <EmailForm source="hero" />
        </div>

        {/* Stat bar */}
        <div style={{
          display: 'flex', justifyContent: 'center', gap: '40px',
          flexWrap: 'wrap',
          borderTop: '1px solid #1a1813', paddingTop: '32px',
        }}>
          {['500+ Skills', '8 Categories', 'Free to Browse', '1-cmd Install'].map((stat) => (
            <div key={stat} style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '12px', color: '#6b6455',
              letterSpacing: '0.05em',
            }}>
              {stat}
            </div>
          ))}
        </div>
      </section>

      {/* Free Skill Demo */}
      <section id="free-skill" style={{
        maxWidth: '800px', margin: '0 auto',
        padding: '60px 24px',
        borderTop: '1px solid #1a1813',
      }}>
        <div style={{ marginBottom: '32px', textAlign: 'center' }}>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '10px', letterSpacing: '0.2em',
            color: '#d4820a', textTransform: 'uppercase',
            marginBottom: '12px',
          }}>
            // Free skill — no signup required
          </div>
          <h2 style={{
            fontFamily: 'var(--font-playfair), Georgia, serif',
            fontSize: '28px', fontWeight: 700,
            color: '#f0f0e8', marginBottom: '8px',
          }}>
            Try a skill right now
          </h2>
          <p style={{ fontFamily: 'var(--font-crimson), Georgia, serif', fontSize: '17px', color: '#9b9284' }}>
            Copy this SKILL.md into your Claude Code project and it works immediately.
          </p>
        </div>
        <SkillPreview content={FEATURED_SKILL_MD} />
      </section>

      {/* How It Works */}
      <section style={{
        maxWidth: '900px', margin: '0 auto',
        padding: '60px 24px',
        borderTop: '1px solid #1a1813',
      }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{
            fontFamily: 'var(--font-playfair), Georgia, serif',
            fontSize: '32px', fontWeight: 700,
            color: '#f0f0e8',
          }}>
            How it works
          </h2>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '32px',
        }}>
          {HOW_IT_WORKS.map(({ step, title, desc }) => (
            <div key={step}>
              <div style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '11px', color: '#d4820a',
                letterSpacing: '0.15em', marginBottom: '12px',
              }}>
                {step}
              </div>
              <h3 style={{
                fontFamily: 'var(--font-playfair), Georgia, serif',
                fontSize: '20px', fontWeight: 700,
                color: '#f0f0e8', marginBottom: '8px',
              }}>
                {title}
              </h3>
              <p style={{
                fontFamily: 'var(--font-crimson), Georgia, serif',
                fontSize: '16px', color: '#9b9284', lineHeight: 1.6,
              }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section style={{
        maxWidth: '900px', margin: '0 auto',
        padding: '60px 24px',
        borderTop: '1px solid #1a1813',
      }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{
            fontFamily: 'var(--font-playfair), Georgia, serif',
            fontSize: '32px', fontWeight: 700,
            color: '#f0f0e8', marginBottom: '12px',
          }}>
            Browse by category
          </h2>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '12px', color: '#6b6455',
          }}>
            All categories open April 1
          </div>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
          gap: '16px',
        }}>
          {CATEGORIES.map(({ name, icon, count }) => (
            <a key={name} href={`/category/${name.toLowerCase()}`} style={{
              display: 'block', textDecoration: 'none',
              background: '#1a1813',
              border: '1px solid #3d3830',
              borderRadius: '4px',
              padding: '20px',
              transition: 'border-color 0.15s',
            }}>
              <div style={{ fontSize: '24px', marginBottom: '8px' }}>{icon}</div>
              <div style={{
                fontFamily: 'var(--font-playfair), Georgia, serif',
                fontSize: '16px', fontWeight: 700,
                color: '#e8e0d0', marginBottom: '4px',
              }}>
                {name}
              </div>
              <div style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '11px', color: '#6b6455',
              }}>
                {count} skills · Coming April 1
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{
        maxWidth: '700px', margin: '0 auto',
        padding: '80px 24px',
        borderTop: '1px solid #1a1813',
        textAlign: 'center',
      }}>
        <h2 style={{
          fontFamily: 'var(--font-playfair), Georgia, serif',
          fontSize: '36px', fontWeight: 700,
          color: '#f0f0e8', marginBottom: '16px',
          lineHeight: 1.2,
        }}>
          Get early access.<br />
          <span style={{ color: '#d4820a' }}>Free skill included.</span>
        </h2>
        <p style={{
          fontFamily: 'var(--font-crimson), Georgia, serif',
          fontSize: '18px', color: '#9b9284',
          marginBottom: '36px', lineHeight: 1.7,
        }}>
          Early subscribers get the Solopreneur Skill Pack — 10 curated skills — free on launch day.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <EmailForm source="footer" />
        </div>
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
        }}>
          claudemddirectory.com · Launching April 1, 2026
        </div>
      </footer>

    </div>
  );
}
