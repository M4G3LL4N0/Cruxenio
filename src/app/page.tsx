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
          Practice the move before the moment.
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
          Pick a real situation, walk the move one step at a time, and see why it works before you need it.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="/moves"
            className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90"
          >
            Choose a situation
          </a>
          <a
            href="/submit"
            className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Submit a move
          </a>
        </div>

        <div className="mt-12 max-w-xl">
          <h3 className="text-lg font-semibold tracking-[-0.02em]">
            Join the Waitlist
          </h3>
          <p className="mt-2 text-sm leading-6 text-white/70">
            New situations land here first.
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
              title: "Choose the situation",
              text: "Start from a conversation, a room, or a moment you already recognize.",
            },
            {
              title: "Walk the move",
              text: "Practice the steps in order, then read why the move works.",
            },
            {
              title: "Take the next one",
              text: "A finished move opens the next situation instead of dumping you back at the start.",
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
              A move you can rehearse
            </h3>
            <p className="mt-4 text-sm leading-7 text-white/70">
              Published moves are ready to practice. When a studio library is connected, those moves replace the starter set.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
