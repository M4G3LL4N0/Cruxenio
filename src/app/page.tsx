import Link from 'next/link';
import { ArrowRight, Sparkles, Waypoints, Brain, PersonStanding } from 'lucide-react';
import { WaitlistForm } from '@/components/waitlist-form';

const featuredMoves = [
  'How to enter a room calmly and confidently',
  'How to keep a conversation flowing without trying too hard',
  'How to stay composed under pressure',
  'How to make a better first impression in 10 seconds'
];

export default function HomePage() {
  return (
    <main className="min-h-screen text-white">
      <section className="relative overflow-hidden border-b border-white/10 section-glow">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,126,95,0.1),transparent_50%)]" />
        <div className="mx-auto flex max-w-6xl flex-col gap-14 px-6 py-24">
          <div className="max-w-4xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-white/50">
              Cruxenio
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight sm:text-7xl">
              Master the <span className="gradient-text">art of movement</span> in life
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              Cruxenio is a behavior intelligence platform for real-world life moves:
              communication, presence, confidence, social flow, awareness, and everyday situations.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/moves"
                className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] px-5 py-3 text-sm font-semibold text-black transition-all hover-glow"
              >
                Explore moves
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#waitlist"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Join waitlist
              </a>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            {featuredMoves.map((item) => (
              <div
                key={item}
                className="glass rounded-3xl p-5 text-sm text-white/80 transition hover:bg-white/[0.05]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <Waypoints className="h-5 w-5 text-white/80" />
            <h2 className="mt-4 text-xl font-semibold">Moves</h2>
            <p className="mt-2 text-sm leading-7 text-white/65">
              Structured real-world behaviors you can use immediately.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <Brain className="h-5 w-5 text-white/80" />
            <h2 className="mt-4 text-xl font-semibold">Why it works</h2>
            <p className="mt-2 text-sm leading-7 text-white/65">
              Every move includes the underlying psychology, not just the tactic.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <PersonStanding className="h-5 w-5 text-white/80" />
            <h2 className="mt-4 text-xl font-semibold">Real-life situations</h2>
            <p className="mt-2 text-sm leading-7 text-white/65">
              Dating, networking, conflict, confidence, first impressions, and more.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <Sparkles className="h-5 w-5 text-white/80" />
            <h2 className="mt-4 text-xl font-semibold">Compounding improvement</h2>
            <p className="mt-2 text-sm leading-7 text-white/65">
              Small behavioral upgrades that stack into a smoother, stronger life.
            </p>
          </div>
        </div>
      </section>

      <section id="waitlist" className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/45">
                Early access
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Get access before public launch.
              </h2>
              <p className="mt-4 max-w-2xl text-white/65">
                Join the list for early access, product updates, and the first release of Cruxenio moves.
              </p>
            </div>

            <WaitlistForm />
          </div>
        </div>
      </section>
    </main>
  );
}
