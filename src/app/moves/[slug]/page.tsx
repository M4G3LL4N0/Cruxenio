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
    <main className="min-h-screen bg-[#07090d] text-white">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <div className="mb-4 flex flex-wrap gap-2">
          {move.tags.map((tag: string) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/50"
            >
              {tag}
            </span>
          ))}
        </div>

        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          {move.title}
        </h1>
        <p className="mt-6 text-lg leading-8 text-white/70">{move.summary}</p>

        <div className="mt-10 grid gap-6">
          <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-lg font-semibold">Situation</h2>
            <p className="mt-3 text-white/70">{move.situation}</p>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-lg font-semibold">Action steps</h2>
            <ol className="mt-4 list-decimal space-y-3 pl-5 text-white/70">
              {move.action_steps.map((step: string, index: number) => (
                <li key={`${move.id}-${index}`}>{step}</li>
              ))}
            </ol>
          </section>

          {move.why_it_works ? (
            <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <h2 className="text-lg font-semibold">Why it works</h2>
              <p className="mt-3 text-white/70">{move.why_it_works}</p>
            </section>
          ) : null}

          {move.when_not_to_use ? (
            <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <h2 className="text-lg font-semibold">When not to use it</h2>
              <p className="mt-3 text-white/70">{move.when_not_to_use}</p>
            </section>
          ) : null}
        </div>
      </div>
    </main>
  );
}
