import { notFound } from 'next/navigation';
import { supabaseAdmin } from '@/lib/supabase';
import { LogoWordmark } from '@/components/logo';

const CATEGORY_ICONS: Record<string, string> = {
  marketing: '📣',
  finance: '💰',
  developer: '⚙️',
  operations: '🔧',
  research: '🔍',
  sales: '📈',
  writing: '✍️',
  solopreneur: '🚀',
};

export async function generateMetadata({ params }: { params: Promise<{ name: string }> }) {
  const { name } = await params;
  return {
    title: `${name.charAt(0).toUpperCase() + name.slice(1)} Skills — claudemddirectory`,
    description: `Browse ${name} SKILL.md files for Claude Code`,
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ name: string }> }) {
  const { name } = await params;

  const { data: skills, error } = await supabaseAdmin
    .from('skills')
    .select('id, name, slug, description, category, tags, install_count, featured')
    .eq('category', name)
    .order('install_count', { ascending: false });

  if (error || !skills) notFound();

  const displayName = name.charAt(0).toUpperCase() + name.slice(1);
  const icon = CATEGORY_ICONS[name.toLowerCase()] || '#';

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
        <a href="/" style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '11px', color: '#6b6455',
          letterSpacing: '0.08em', textDecoration: 'none',
        }}>
          ← All categories
        </a>
      </nav>

      <main style={{ maxWidth: '900px', margin: '0 auto', padding: '100px 24px 80px' }}>

        {/* Header */}
        <div style={{ marginBottom: '48px' }}>
          <div style={{ fontSize: '40px', marginBottom: '16px' }}>{icon}</div>
          <h1 style={{
            fontFamily: 'var(--font-playfair), Georgia, serif',
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 700, lineHeight: 1.15,
            color: '#f0f0e8', marginBottom: '8px',
          }}>
            {displayName} Skills
          </h1>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '12px', color: '#6b6455',
          }}>
            {skills.length} skill{skills.length !== 1 ? 's' : ''} available
          </div>
        </div>

        {/* Skills grid */}
        {skills.length === 0 ? (
          <div style={{
            fontFamily: 'var(--font-crimson), Georgia, serif',
            fontSize: '18px', color: '#6b6455',
            textAlign: 'center', paddingTop: '40px',
          }}>
            No skills in this category yet. Check back April 1.
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '16px',
          }}>
            {skills.map((skill) => (
              <a
                key={skill.id}
                href={`/skills/${skill.slug}`}
                style={{
                  display: 'block',
                  background: '#1a1813',
                  border: '1px solid #3d3830',
                  borderRadius: '4px',
                  padding: '20px',
                  textDecoration: 'none',
                  transition: 'border-color 0.15s',
                }}
              >
                {skill.featured && (
                  <div style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '9px', letterSpacing: '0.15em',
                    color: '#d4820a', textTransform: 'uppercase',
                    marginBottom: '8px',
                  }}>
                    Featured
                  </div>
                )}
                <div style={{
                  fontFamily: 'var(--font-playfair), Georgia, serif',
                  fontSize: '17px', fontWeight: 700,
                  color: '#f0f0e8', marginBottom: '8px',
                  lineHeight: 1.3,
                }}>
                  {skill.name}
                </div>
                {skill.description && (
                  <div style={{
                    fontFamily: 'var(--font-crimson), Georgia, serif',
                    fontSize: '15px', color: '#9b9284',
                    lineHeight: 1.5, marginBottom: '12px',
                  }}>
                    {skill.description.length > 120
                      ? skill.description.slice(0, 120) + '...'
                      : skill.description}
                  </div>
                )}
                <div style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                }}>
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                    {skill.tags?.slice(0, 3).map((tag: string) => (
                      <span key={tag} style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '9px', letterSpacing: '0.1em',
                        color: '#4d4640',
                        padding: '2px 6px',
                        border: '1px solid #2a2820', borderRadius: '2px',
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '10px', color: '#3d3830',
                  }}>
                    {skill.install_count} installs
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
