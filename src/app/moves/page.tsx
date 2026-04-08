import { MoveCard } from '@/components/move-card';
import { getPublishedMoves, type MoveRow } from '@/lib/moves';

export const dynamic = 'force-static';
export const revalidate = 3600;

export default async function MovesPage() {
  const moves = await getPublishedMoves();

  return (
    <main>
      <section className="page-hero">
        <div className="shell">
          <div className="eyebrow">Cruxenio</div>
          <h1 className="page-title">Real-world moves for everyday life</h1>
          <p className="page-subtitle">
            Learn better ways to communicate, move, and handle real situations.
          </p>
        </div>
      </section>

      <section className="section-tight">
        <div className="shell moves-grid">
          {moves.map((move: MoveRow) => (
            <MoveCard key={move.id} move={move} />
          ))}
        </div>
      </section>
    </main>
  );
}
