import { notFound } from 'next/navigation';
import { supabaseAdmin } from '@/lib/supabase';
import { LogoWordmark } from '@/components/logo';
import { SkillDetailClient } from '@/components/skill-detail-client';

interface Skill {
  id: string;
  name: string;
  slug: string;
  description: string;
  category: string;
  tags: string[];
  content: string;
  install_count: number;
  featured: boolean;
  created_at: string;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { data } = await supabaseAdmin.from('skills').select('name, description').eq('slug', slug).single();
  if (!data) return {};
  return {
    title: `${data.name} — claudemddirectory`,
    description: data.description,
  };
}

export default async function SkillPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const { data: skill } = await supabaseAdmin
    .from('skills')
    .select('*')
    .eq('slug', slug)
    .single();

  if (!skill) notFound();

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
        <a href={`/category/${skill.category}`} style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '11px', color: '#6b6455',
          letterSpacing: '0.08em', textDecoration: 'none',
        }}>
          {skill.category} /
        </a>
      </nav>

      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '100px 24px 80px' }}>

        {/* Header */}
        <div style={{ marginBottom: '40px' }}>
          <div style={{ marginBottom: '12px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '10px', letterSpacing: '0.15em',
              color: '#d4820a', textTransform: 'uppercase',
              background: 'rgba(212,130,10,0.1)',
              padding: '3px 8px', borderRadius: '2px',
            }}>
              {skill.category}
            </span>
            {skill.tags?.map((tag: string) => (
              <span key={tag} style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '10px', letterSpacing: '0.1em',
                color: '#6b6455',
                padding: '3px 8px',
                border: '1px solid #3d3830', borderRadius: '2px',
              }}>
                {tag}
              </span>
            ))}
          </div>

          <h1 style={{
            fontFamily: 'var(--font-playfair), Georgia, serif',
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 700, lineHeight: 1.15,
            color: '#f0f0e8', marginBottom: '16px',
          }}>
            {skill.name}
          </h1>

          <p style={{
            fontFamily: 'var(--font-crimson), Georgia, serif',
            fontSize: '19px', color: '#9b9284', lineHeight: 1.7,
            marginBottom: '24px',
          }}>
            {skill.description}
          </p>

          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '11px', color: '#3d3830',
          }}>
            {skill.install_count} installs
          </div>
        </div>

        {/* Skill content with copy + install tracking */}
        <SkillDetailClient skill={skill as Skill} />

        {/* Back link */}
        <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid #1a1813' }}>
          <a href={`/category/${skill.category}`} style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '12px', color: '#6b6455',
            textDecoration: 'none', letterSpacing: '0.05em',
          }}>
            ← Back to {skill.category}
          </a>
        </div>
      </main>
    </div>
  );
}
