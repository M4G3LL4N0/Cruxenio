import { createServerSupabaseClient } from '@/lib/supabase/server';
import type { Database } from '@/types/database';

export type MoveRow = Database['cruxenio']['Tables']['moves']['Row'];

export async function getPublishedMoves(): Promise<MoveRow[]> {
  const supabase = createServerSupabaseClient();

  const { data, error } = await supabase
    .schema('cruxenio')
    .from('moves')
    .select('*')
    .eq('status', 'published')
    .order('is_featured', { ascending: false })
    .order('created_at', { ascending: false });

  if (error) {
    console.error(error);
    return [];
  }

  return (data ?? []) as MoveRow[];
}

export async function getMoveBySlug(slug: string): Promise<MoveRow | null> {
  const supabase = createServerSupabaseClient();

  const { data, error } = await supabase
    .schema('cruxenio')
    .from('moves')
    .select('*')
    .eq('slug', slug)
    .eq('status', 'published')
    .maybeSingle();

  if (error) {
    console.error(error);
    return null;
  }

  return (data ?? null) as MoveRow | null;
}
