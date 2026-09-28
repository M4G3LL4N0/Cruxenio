import { createServerSupabaseClient } from '@/lib/supabase/server';
import type { Database } from '@/types/database';

export type MoveRow = Database['cruxenio']['Tables']['moves']['Row'];

const fallbackMoves: MoveRow[] = [
  {
    id: 'fallback-1',
    slug: 'pause-before-answering',
    title: 'Pause for one beat before answering',
    summary: 'A short pause makes you seem calmer, more deliberate, and less reactive.',
    situation: 'Conversations, conflict, interviews, dating, and meetings.',
    action_steps: [
      'Hear the full question.',
      'Pause for one beat.',
      'Answer slower than your impulse.',
      'Stop talking one sentence earlier than usual.'
    ],
    why_it_works: 'Small pauses signal control and reduce anxious overexplaining.',
    when_not_to_use: 'Do not overdo it in urgent situations.',
    tags: ['presence', 'communication', 'composure'],
    is_featured: true,
    status: 'published',
    created_at: new Date().toISOString()
  },
  {
    id: 'fallback-2',
    slug: 'name-question-loop',
    title: 'Use the name + question loop',
    summary: 'Use someone’s name once, then ask one specific follow-up question.',
    situation: 'Networking, parties, first meetings, and casual social situations.',
    action_steps: [
      'Listen for their name.',
      'Repeat it naturally once.',
      'Ask one specific follow-up question.',
      'Let them talk first.'
    ],
    why_it_works: 'People respond well to attention and specificity.',
    when_not_to_use: 'Do not overuse their name.',
    tags: ['social', 'conversation', 'confidence'],
    is_featured: true,
    status: 'published',
    created_at: new Date().toISOString()
  },
  {
    id: 'fallback-3',
    slug: 'enter-room-scan-smile',
    title: 'Scan the room, then smile once',
    summary: 'When entering a room, do not rush. Scan calmly, orient yourself, then give one light smile.',
    situation: 'Events, work settings, parties, bars, and social gatherings.',
    action_steps: [
      'Walk in at a steady pace.',
      'Scan left, center, and right.',
      'Make one moment of eye contact.',
      'Give a small relaxed smile.'
    ],
    why_it_works: 'This projects calm awareness instead of insecurity or urgency.',
    when_not_to_use: 'Not ideal in solemn or high-stress environments.',
    tags: ['presence', 'social', 'body-language'],
    is_featured: true,
    status: 'published',
    created_at: new Date().toISOString()
  }
];

export async function getPublishedMoves(): Promise<MoveRow[]> {
  const supabase = createServerSupabaseClient();

  if (!supabase) {
    return fallbackMoves;
  }

  const { data, error } = await supabase
    .schema('cruxenio')
    .from('moves')
    .select('*')
    .eq('status', 'published')
    .order('is_featured', { ascending: false })
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Failed to load published moves:', error);
    return fallbackMoves;
  }

  const rows = (data ?? []) as MoveRow[];
  return rows.length > 0 ? rows : fallbackMoves;
}

export async function getPublishedMovesPreview(limit = 3): Promise<MoveRow[]> {
  const moves = await getPublishedMoves();
  return moves.slice(0, limit);
}

export async function getMoveBySlug(slug: string): Promise<MoveRow | null> {
  const supabase = createServerSupabaseClient();

  if (!supabase) {
    return fallbackMoves.find((move) => move.slug === slug) ?? null;
  }

  const { data, error } = await supabase
    .schema('cruxenio')
    .from('moves')
    .select('*')
    .eq('slug', slug)
    .eq('status', 'published')
    .maybeSingle();

  if (error) {
    console.error('Failed to load move:', error);
    return fallbackMoves.find((move) => move.slug === slug) ?? null;
  }

  return (data as MoveRow | null) ?? fallbackMoves.find((move) => move.slug === slug) ?? null;
}
