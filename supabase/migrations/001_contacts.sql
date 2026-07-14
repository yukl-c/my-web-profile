create extension if not exists pgcrypto;

create table if not exists public.contacts (
  id uuid primary key default gen_random_uuid(),
  message text not null,
  created_at timestamptz not null default now()
);

alter table public.contacts enable row level security;

drop policy if exists "anon_insert_contacts" on public.contacts;
create policy "anon_insert_contacts"
  on public.contacts
  for insert
  to anon
  with check (true);
