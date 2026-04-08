import Link from 'next/link';
import type { Move } from '@/types/move';

export function MoveCard({ move }: { move: Move }) {
  return (
    <Link href={`/moves/${move.slug}`} className="move-card">
      <div className="move-meta">
        {move.is_featured ? <span className="badge">Featured</span> : null}
        {move.tags.slice(0, 4).map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>

      <h3>{move.title}</h3>
      <p>{move.summary}</p>
    </Link>
  );
}
