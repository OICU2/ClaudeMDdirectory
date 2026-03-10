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
          <svg width="64" height="52" viewBox="0 0 64 52" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            {/* Left prong */}
            <path d="M18 32 C14 24 8 18 10 8 C11 3 17 2 20 7 C22 11 20 20 18 32Z" fill="#d4820a"/>
            <circle cx="11" cy="6" r="4.5" fill="#f0a832" stroke="#d4820a" strokeWidth="1"/>
            {/* Center prong */}
            <path d="M32 30 C32 20 30 10 32 2 C34 10 32 20 32 30Z" fill="#c87010"/>
            <path d="M32 30 C28 18 24 8 28 1 C30 -1 34 -1 36 1 C40 8 36 18 32 30Z" fill="#d4820a"/>
            <circle cx="32" cy="1.5" r="5" fill="#f0a832" stroke="#d4820a" strokeWidth="1"/>
            {/* Right prong */}
            <path d="M46 32 C50 24 56 18 54 8 C53 3 47 2 44 7 C42 11 44 20 46 32Z" fill="#d4820a"/>
            <circle cx="53" cy="6" r="4.5" fill="#f0a832" stroke="#d4820a" strokeWidth="1"/>
            {/* Brim */}
            <path d="M8 38 C8 34 12 32 18 32 C22 32 27 31 32 31 C37 31 42 32 46 32 C52 32 56 34 56 38 C56 41 52 43 46 43 L18 43 C12 43 8 41 8 38Z" fill="#b86e08"/>
            <path d="M5 43 C5 40 11 38 18 38 L46 38 C53 38 59 40 59 43 C59 46 53 48 46 48 L18 48 C11 48 5 46 5 43Z" fill="#d4820a"/>
            {/* Brim highlight */}
            <path d="M12 41 C16 40 24 39.5 32 39.5 C40 39.5 48 40 52 41" stroke="#f0a832" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
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
