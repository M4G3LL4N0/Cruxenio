import { notFound } from 'next/navigation';
import { getMoveBySlug } from '@/lib/moves';

export default async function MoveDetailPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const move = await getMoveBySlug(slug);

  if (!move) {
    notFound();
  }

  return (
    <main>
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
          </div>
        </div>
      </section>
    </main>
  );
}
