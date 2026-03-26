'use client';

import { useState } from 'react';
import { createBrowserSupabaseClient } from '@/lib/supabase/browser';

export function Vote({ moveId }: { moveId: string }) {
  const [loading, setLoading] = useState(false);

  async function vote() {
    setLoading(true);

    const supabase = createBrowserSupabaseClient();

    await supabase
      .schema('cruxenio')
      .from('move_votes')
      .insert([{ move_id: moveId, value: 1 }]);

    setLoading(false);
  }

  return (
    <button
      onClick={vote}
      className="text-sm text-white/60 hover:text-white"
    >
      {loading ? '...' : 'Upvote'}
    </button>
  );
}
