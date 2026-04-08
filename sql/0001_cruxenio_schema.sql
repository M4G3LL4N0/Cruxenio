begin;

create schema if not exists cruxenio;

create extension if not exists pgcrypto;

grant usage on schema cruxenio to anon, authenticated, service_role;
grant all on all tables in schema cruxenio to anon, authenticated, service_role;
grant all on all routines in schema cruxenio to anon, authenticated, service_role;
grant all on all sequences in schema cruxenio to anon, authenticated, service_role;

alter default privileges for role postgres in schema cruxenio
grant all on tables to anon, authenticated, service_role;

alter default privileges for role postgres in schema cruxenio
grant all on routines to anon, authenticated, service_role;

alter default privileges for role postgres in schema cruxenio
grant all on sequences to anon, authenticated, service_role;

create table if not exists cruxenio.waitlist_signups (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  name text null,
  source text not null default 'website',
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists cruxenio.moves (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  summary text not null,
  situation text not null,
  action_steps text[] not null default '{}',
  why_it_works text null,
  when_not_to_use text null,
  tags text[] not null default '{}',
  is_featured boolean not null default false,
  status text not null default 'published' check (status in ('draft', 'published')),
  created_at timestamptz not null default now()
);

create index if not exists idx_cruxenio_waitlist_signups_created_at
  on cruxenio.waitlist_signups(created_at desc);

create index if not exists idx_cruxenio_moves_status_created_at
  on cruxenio.moves(status, created_at desc);

create index if not exists idx_cruxenio_moves_featured
  on cruxenio.moves(is_featured);

alter table cruxenio.waitlist_signups enable row level security;
alter table cruxenio.moves enable row level security;

drop policy if exists "public can insert waitlist" on cruxenio.waitlist_signups;
create policy "public can insert waitlist"
on cruxenio.waitlist_signups
for insert
to anon, authenticated
with check (true);

drop policy if exists "service role can manage waitlist" on cruxenio.waitlist_signups;
create policy "service role can manage waitlist"
on cruxenio.waitlist_signups
for all
to service_role
using (true)
with check (true);

drop policy if exists "public can read published moves" on cruxenio.moves;
create policy "public can read published moves"
on cruxenio.moves
for select
to anon, authenticated
using (status = 'published');

drop policy if exists "service role can manage moves" on cruxenio.moves;
create policy "service role can manage moves"
on cruxenio.moves
for all
to service_role
using (true)
with check (true);

insert into cruxenio.moves
  (slug, title, summary, situation, action_steps, why_it_works, when_not_to_use, tags, is_featured, status)
values
  (
    'name-question-loop',
    'Use the name + question loop',
    'When meeting someone new, use their name once, then ask one specific follow-up question.',
    'Networking, parties, first meetings, casual social situations',
    array[
      'Listen for their name and repeat it naturally once.',
      'Ask one specific question about what they just said.',
      'Keep the spotlight on them for the first 30 seconds.',
      'Share one short related detail only after they engage back.'
    ],
    'People respond well to attention and specificity. This makes you feel present, smooth, and interested without trying too hard.',
    'Do not overuse their name or force the question if the moment is rushed.',
    array['social', 'conversation', 'confidence'],
    true,
    'published'
  ),
  (
    'pause-before-answering',
    'Pause for one beat before answering',
    'A short pause makes you seem calmer, more deliberate, and less reactive.',
    'Conversations, conflict, interviews, dating, meetings',
    array[
      'Hear the full question.',
      'Pause for one beat.',
      'Answer slower than your impulse.',
      'Stop talking one sentence earlier than usual.'
    ],
    'Small pauses signal control and reduce anxious overexplaining.',
    'Do not overdo it in rapid-fire or urgent situations.',
    array['presence', 'communication', 'composure'],
    true,
    'published'
  ),
  (
    'enter-room-scan-smile',
    'Scan the room, then smile once',
    'When entering a room, don’t rush. Scan calmly, orient yourself, then give one light smile.',
    'Events, bars, work settings, social gatherings',
    array[
      'Walk in at a steady pace.',
      'Scan left, center, and right.',
      'Make one moment of eye contact.',
      'Give a small relaxed smile.'
    ],
    'This projects calm awareness instead of insecurity or urgency.',
    'Not ideal in solemn or high-stress environments.',
    array['presence', 'social', 'body-language'],
    true,
    'published'
  )
on conflict (slug) do nothing;

commit;
