import { Client } from 'pg';

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

const SCHEMA = `
create table if not exists skills (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  slug text not null unique,
  description text,
  category text not null,
  tags text[],
  author text default 'community',
  content text not null,
  install_count integer default 0,
  featured boolean default false,
  created_at timestamptz default now()
);

create index if not exists skills_search_idx on skills
  using gin(to_tsvector('english', name || ' ' || coalesce(description,'') || ' ' || content));

create index if not exists skills_category_idx on skills (category);
`;

async function main() {
  await client.connect();
  console.log('Connected to Supabase');
  await client.query(SCHEMA);
  console.log('Schema applied successfully');
  await client.end();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
