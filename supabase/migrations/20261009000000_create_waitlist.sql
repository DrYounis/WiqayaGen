-- WiqayaGen — waitlist signup table
-- Matches the insert in src/app/actions/waitlist.ts

create extension if not exists "pgcrypto";

create table if not exists public.waitlist (
    id uuid primary key default gen_random_uuid(),
    first_name text,
    last_name text,
    age int,
    gender text,
    phone text,
    email text,
    country text,
    city text,
    created_at timestamptz not null default now()
);

-- Row Level Security
alter table public.waitlist enable row level security;

-- Allow anonymous inserts (public signup form, no auth required)
create policy "allow_anon_insert"
    on public.waitlist
    for insert
    to anon
    with check (true);

-- No public read policy — signups are write-only, not exposed via the anon key.
