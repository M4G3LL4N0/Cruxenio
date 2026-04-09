export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function HomePage() {
  return (
    <main className="relative z-10">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-24">
        <div className="inline-flex w-fit items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.22em] text-white/70">
          Cruxenio
        </div>

        <h1 className="mt-8 max-w-5xl text-5xl font-semibold tracking-[-0.05em] text-white sm:text-7xl">
          Premium strategic intelligence for high-conviction decision making.
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
          Cruxenio helps teams organize signal, surface leverage, and move with
          more clarity across strategy, operations, and growth.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          {session ? (
            <>
              <a
                href="/submit"
                className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90"
              >
                Submit Your Move
              </a>
              <a
                href="/moves"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore Moves
              </a>
              <a
                href="/dashboard"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Dashboard
              </a>
            </>
          ) : (
            <a
              href="/login"
              className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90"
            >
              Get Started
            </a>
          )}
        </div>

        <div className="mt-12 max-w-xl">
          <h3 className="text-lg font-semibold tracking-[-0.02em]">
            Join the Waitlist
          </h3>
          <p className="mt-2 text-sm leading-6 text-white/70">
            Be the first to access premium strategic intelligence tools and insights.
          </p>
          <form 
            action="/api/waitlist" 
            method="POST"
            className="mt-4 flex gap-3"
          >
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/40 outline-none focus:border-white/20"
            />
            <button
              type="submit"
              className="rounded-xl bg-white px-6 py-2.5 text-sm font-semibold text-black transition hover:opacity-90"
            >
              Join
            </button>
          </form>
        </div>

        <div
          id="capabilities"
          className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {[
            {
              title: "Signal Mapping",
              text: "Track the highest-value signals across products, teams, and markets.",
            },
            {
              title: "Decision Support",
              text: "Turn fragmented inputs into structured executive-grade clarity.",
            },
            {
              title: "Operational Visibility",
              text: "Create tighter loops between strategy, execution, and feedback.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <h2 className="text-xl font-semibold tracking-[-0.02em]">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-white/70">{item.text}</p>
            </div>
          ))}
        </div>

        <div
          id="platform"
          className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-8"
        >
          <div className="max-w-3xl">
            <h3 className="text-2xl font-semibold tracking-[-0.03em]">
              Build-safe premium landing state
            </h3>
            <p className="mt-4 text-sm leading-7 text-white/70">
              This landing state intentionally avoids database reads during build.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
