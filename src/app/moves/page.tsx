import { MoveCard } from '@/components/move-card';
import { getPublishedMoves, type MoveRow } from '@/lib/moves';

export const dynamic = 'force-dynamic';

export default async function MovesPage() {
  const moves = await getPublishedMoves();

  return (
    <main className="min-h-screen bg-[#07090d] text-white">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-white/50">
            Cruxenio
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Real-world moves for everyday life
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/70">
            Learn better ways to communicate, move, and handle real situations.
          </p>
        </div>

        <div className="grid gap-4">
          {moves.map((move: MoveRow) => (
            <MoveCard key={move.id} move={move} />
          ))}
        </div>
      </div>
    </main>
  );
}
