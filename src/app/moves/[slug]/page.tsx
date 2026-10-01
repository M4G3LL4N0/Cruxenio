import { notFound } from 'next/navigation';
import { getMoveBySlug, getPublishedMoves } from '@/lib/moves';
import { Suspense } from 'react';
import { MoveDetailSkeleton } from '@/components/move-detail-skeleton';
import { PracticeMove } from '@/components/moves/practice';

export const dynamic = 'force-static';
export const revalidate = 3600;

interface PageProps {
  params: { slug: string };
}

export default async function MoveDetailPage({ params }: PageProps) {
  let move;
  
  try {
    move = await getMoveBySlug(params.slug);
    if (!move) {
      notFound();
    }
  } catch (error) {
    console.error('Failed to load move:', error);
    notFound();
  }

  const published = await getPublishedMoves();
  const index = published.findIndex((item) => item.slug === move.slug);
  const nextMove = published[(index + 1) % published.length] ?? move;

  return (
    <Suspense fallback={<MoveDetailSkeleton />}>
      <section className="page-hero">
        <div className="shell">
          <div className="move-meta">
            {move.tags.map((tag: string) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="page-title">{move.title}</h1>
          <p className="page-subtitle">{move.summary}</p>

          <div className="detail-stack">
            <section className="detail-block">
              <h2>Situation</h2>
              <p>{move.situation}</p>
            </section>

            <section className="detail-block">
              <h2>Action steps</h2>
              <ol>
                {move.action_steps.map((step: string, index: number) => (
                  <li key={`${move.id}-${index}`}>{step}</li>
                ))}
              </ol>
            </section>

            {move.why_it_works ? (
              <section className="detail-block">
                <h2>Why it works</h2>
                <p>{move.why_it_works}</p>
              </section>
            ) : null}

            {move.when_not_to_use ? (
              <section className="detail-block">
                <h2>When not to use it</h2>
                <p>{move.when_not_to_use}</p>
              </section>
            ) : null}

            <PracticeMove steps={move.action_steps} nextHref={`/moves/${nextMove.slug}`} nextTitle={nextMove.title} />
          </div>
        </div>
      </section>
    </Suspense>
  );
}
