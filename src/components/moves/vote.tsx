'use client';

import { useState } from 'react';
import { createBrowserSupabaseClient } from '@/lib/supabase/browser';

export function Vote({ moveId, initialVotes }: { moveId: string; initialVotes: number }) {
  const [votes, setVotes] = useState(initialVotes);
  const [loading, setLoading] = useState(false);

  async function vote() {
    setLoading(true);
    setVotes(votes + 1); // Optimistic update
    
    const supabase = createBrowserSupabaseClient();
    
    const { error } = await supabase
      .schema('cruxenio')
      .from('move_votes')
      .insert([{ move_id: moveId, value: 1 }]);

    if (error) {
      setVotes(votes); // Rollback if failed
    }
    setLoading(false);
  }

  return (
    <button
      onClick={vote}
      disabled={loading}
      className="text-sm text-white/60 hover:text-white flex items-center gap-1"
    >
      <span>▲</span>
      <span>{votes}</span>
    </button>
  );
}
