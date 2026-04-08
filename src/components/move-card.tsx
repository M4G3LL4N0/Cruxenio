import Link from 'next/link';
import type { MoveRow } from '@/lib/moves';

export function MoveCard({ move }: { move: MoveRow }) {
  return (
    <Link
      href={`/moves/${move.slug}`}
      className="glass block rounded-3xl p-6 transition hover:bg-white/[0.05] hover-glow"
    >
      <div className="mb-3 flex flex-wrap gap-2">
        {move.is_featured ? (
          <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80">
            Featured
          </span>
        ) : null}
        {move.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/50"
          >
            {tag}
          </span>
        ))}
      </div>

      <h3 className="text-2xl font-semibold text-white">{move.title}</h3>
      <p className="mt-3 text-sm leading-7 text-white/70">{move.summary}</p>
    </Link>
  );
}
