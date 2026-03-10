import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get('q')?.trim();
  const category = searchParams.get('category')?.trim();
  const tags = searchParams.get('tags')?.split(',').filter(Boolean);
  const limit = Math.min(parseInt(searchParams.get('limit') || '20'), 100);
  const offset = parseInt(searchParams.get('offset') || '0');

  let query = supabaseAdmin
    .from('skills')
    .select('id, name, slug, description, category, tags, install_count, featured, created_at')
    .order('install_count', { ascending: false })
    .range(offset, offset + limit - 1);

  if (q) {
    query = query.textSearch('name', q, {
      type: 'websearch',
      config: 'english',
    });
  }

  if (category) {
    query = query.eq('category', category);
  }

  if (tags && tags.length > 0) {
    query = query.overlaps('tags', tags);
  }

  const { data, error, count } = await query;

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ skills: data, count });
}
