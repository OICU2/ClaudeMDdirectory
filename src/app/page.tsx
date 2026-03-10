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
  { step: '01', title: 'Find', desc: 'Browse the library. Pick a skill that fits your workflow.' },
  { step: '02', title: 'Copy', desc: 'Click Copy. The full SKILL.md content lands on your clipboard.' },
  { step: '03', title: 'Install', desc: 'In Claude Code, paste and say: "Create .claude/skills/[name]/SKILL.md with this content."' },
  { step: '04', title: 'Verify', desc: 'Use the trigger phrase. Claude confirms the skill is loaded. You\'re done.' },
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
          {/* Jester hat — all elements within viewBox so nothing clips */}
          <svg width="130" height="92" viewBox="0 0 110 78" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            {/* Left prong */}
            <path d="M8 60 Q6 42 18 20 Q30 42 36 60Z" fill="#d4820a"/>
            {/* Center prong — slightly darker for depth */}
            <path d="M34 60 Q31 34 55 14 Q79 34 76 60Z" fill="#b86e08"/>
            {/* Right prong */}
            <path d="M74 60 Q80 42 92 20 Q104 42 102 60Z" fill="#d4820a"/>
            {/* Bells */}
            <circle cx="18" cy="20" r="10" fill="#f0a832"/>
            <circle cx="55" cy="14" r="12" fill="#f0a832"/>
            <circle cx="92" cy="20" r="10" fill="#f0a832"/>
            {/* Bell shine dots */}
            <circle cx="15" cy="17" r="3" fill="white" opacity="0.35"/>
            <circle cx="51" cy="11" r="3.5" fill="white" opacity="0.35"/>
            <circle cx="89" cy="17" r="3" fill="white" opacity="0.35"/>
            {/* Brim shadow */}
            <ellipse cx="55" cy="65" rx="50" ry="10" fill="#8a5206"/>
            {/* Brim */}
            <ellipse cx="55" cy="63" rx="50" ry="10" fill="#d4820a"/>
            {/* Brim highlight */}
            <ellipse cx="55" cy="60" rx="40" ry="5" fill="#f0a832" opacity="0.18"/>
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
          <LogoMark size={110} />
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
          Community-built SKILL.md files for Claude Code. Join early —
          subscribers get the Solopreneur Pack (10 skills) free on launch day.
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
          {['8 Categories', '1-cmd Install', 'Community Built'].map((stat) => (
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
            // Install this in 30 seconds — no signup required
          </div>
          <h2 style={{
            fontFamily: 'var(--font-playfair), Georgia, serif',
            fontSize: '28px', fontWeight: 700,
            color: '#f0f0e8', marginBottom: '8px',
          }}>
            Try a skill right now
          </h2>
          <p style={{ fontFamily: 'var(--font-crimson), Georgia, serif', fontSize: '17px', color: '#9b9284' }}>
            Copy it. Paste it into Claude Code. Say <em>"commit"</em>. Done.
          </p>
        </div>
        <div style={{
          background: '#13120f', border: '1px solid #2a2520',
          borderRadius: '4px', padding: '16px 20px',
          marginBottom: '20px',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '12px', color: '#9b9284', lineHeight: 1.8,
        }}>
          <span style={{ color: '#d4820a' }}>1.</span> Click <strong style={{ color: '#e8e0d0' }}>Copy</strong> below<br />
          <span style={{ color: '#d4820a' }}>2.</span> In Claude Code, paste and say: <span style={{ color: '#f0a832' }}>"Create .claude/skills/smart-commit/SKILL.md with this content."</span><br />
          <span style={{ color: '#d4820a' }}>3.</span> Type <span style={{ color: '#f0a832' }}>"commit"</span> — Claude writes your commit message. Verify it works.
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
            <div key={name} style={{
              background: '#1a1813',
              border: '1px solid #3d3830',
              borderRadius: '4px',
              padding: '20px',
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
                Coming April 1
              </div>
            </div>
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
          lineHeight: 1.8,
        }}>
          claudemddirectory.com · Launching April 1, 2026<br />
          © 2026 claudemddirectory.com · Run, owned, and operated by RepuVault LLC
        </div>
      </footer>

    </div>
  );
}
